/**
 * 
 * 关于我们
 * @author gaoxiang
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var about_us = {
        
        init:function(){
         about_us.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){
           /*
               
             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              '/user',
              {
               page : 'about_us'
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $("main").append(juicer(funcTpl(about_us.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return about_us.init();//最后return init()就行了
});