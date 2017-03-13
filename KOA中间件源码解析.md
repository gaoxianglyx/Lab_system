title: KOA中间件源码解析

categories:
- 理解

tags:  
- 源码
- generator
- KOA
---


**告别回调噩梦，从这里开始**
<!-- more -->
## KOA中间件的执行顺序
请看下面来自官网的代码和执行顺序：

![image](http://www.cailidan.cn/images/middleware.gif)

以上代码的实现如果用回调函数来实现，无疑是一场噩梦，而KOA却以十分优雅的方式实现了如下图洋葱图一般的回调：

![image](http://ww1.sinaimg.cn/large/96ea1c33gy1fdi1mk84dwj20d20bf75s)

## 实现原理
> 核心是利用ES6的新特性：generator

**具体实现是利用KOA的两个NIUBI轰轰的模块：compose和CO**

## compose

compose模块，用于将所有generator中间件串联起来，基本上就是将后一个generator赋给前一个generator的next参数。也就是在yield后面调用下一个generate函数。  
大致原理：

```

// 中间件 a
function* a(next) {
  yield 1;

  // 执行下一个中间件
  yield* next;

  yield '继续执行A中间件';
}

// 中间件 b
function* b(next) {
  yield 2;
  yield 3;
}


var next = function* (){};
var i = [a, b].length;

// 通过next首尾相连
while(i--) {
  next = [a, b][i].call(null, next);
}

// 包裹第一个middleware
function* start(ne) {
  return yield* ne;
}


// 输出
console.log(start(next).next());
console.log(start(next).next());
console.log(start(next).next());
console.log(start(next).next());
输出结果：

➜  a-lab ./a
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: '继续执行A中间件', done: false }
```
这里可以看出来：compose取中间件是做i-循环的，但是由于一开始是吧中间件推入栈中，顺序为FILO，所有顺序是没问题的。  
> 但是：那个负责把所有中间件串起来的next其实本身也是一个generator，但是，如果在Generater函数内部，调用另一个Generator函数，默认情况下是没有效果的。

所以这时候就轮到我们的CO模块出场啦

## CO
CO模块：CO模块便通过递归使得嵌套好的generate依次自动执行（包装为Promise对象）  
大致源码实现
```
function run(gen){
  var g;
  if (typeof gen.next === 'function') {
    g = gen;
  } else {
    g = gen();
  }
  function next(){
    var tmp = g.next();
    //如果tmp.done为true，那么证明generator执行结束，返回。if (tmp.done) {
      return;
    } elseif (typeof g.next === 'function') {
      run(tmp.value);
      next();
    }
  }
  next();
}
```
- co帮我们"自动管理"generator的next，并根据调用返回的value做出不同的响应，这个响应是通过toPromise方法进行的
- 如果遇到另外一个generator，co会继续调用自己，这就是为什么我们不需要写yield* next(使得next自执行)的原因，而只要写yield next  
- 而且CO模块会判断执行完所有的中间件，才会对res进行操作，所以在中间件中我们可以随意修改res，不会出现express中的路由已经终止请求-响应循环。