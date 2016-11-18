/**
 * 成员介绍
 * 
 * 
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var member_introduce = {
        
        init:function(){
         member_introduce.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){

              

           /*
            
           {@each data as item}
              <div class="member_list">
                
                <img class="personal_picture" alt="个人图像" src=${item.picture}>
                <div class="introduce">
                  <div class="line"></div>
                  <h6 class="name">${item.name}</h6>
                  <p class="duty">担任职务：${item.position}</p>
                  <p class="abstract">${item.synopsis}</p>
                  <p class="email">${item.email}</p>
                  
                </div>
                <a class="more" herf="#">more</a>
              </div>
             {@/each}
             
             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/user/listUser.do',
              {
               page : 'member_interduce'
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".main").append(juicer(funcTpl(member_introduce.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return member_introduce.init();//最后return init()就行了
});