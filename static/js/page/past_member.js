/**
 * 往届成员
 * 
 * @author huangjing
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var past_member = {
        
        init:function(){
         past_member.getNewsData();

       },
       
            //下面就写需要的js函数
                                 
            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){
           /*   
              <div class="theme tc"><span>往届成员</span></div> 
              {@each data as member}
              <!-- 一年成员 -->
              <div class="wrap_member">
                <div class="member fb"><img src="../img/past_member/year_list.png"><a href="member_detail.html?year=${member.year}">${member.year}年成员</a></div>
                <div class="thank fb f18">
                  <p class="para_1">感谢以下成员为实验室所做的贡献：</p>
                  <p class="para_2">${member.member}<p>
                </div>
              </div>
	             {@/each}
               </div>
             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/previous/listPrevious.do',
              {
               
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".global-center").append(juicer(funcTpl(past_member.newTpl),res));
                 console.log(res);
               }
              );
           }
         };

	return past_member.init();//最后return init()就行了
});