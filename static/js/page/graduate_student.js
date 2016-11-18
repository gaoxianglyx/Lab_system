/**
 * 研究生培养
 * 
 * @author huangjing
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var graduate_student = {
        
        init:function(){
         graduate_student.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){
           /*

            {@each data as item}
	            <!-- 一个成员 -->
              <div class="person">
                <img src="../img/research_student/student1.png">
                <div class="words fb">
                  <p class="name f18">${item.name}</p>
                  <p class="content"><span class="f18">研究内容：</span><br><span class="f14">${item.content}</span></p>
                  <p class="email f14">联系邮箱：<br>${item.email}</p>
                </div>
              </div>
	           {@/each}

             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/user/listGraduate.do',
              {

              },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".member_list").append(juicer(funcTpl(graduate_student.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return graduate_student.init();//最后return init()就行了
});