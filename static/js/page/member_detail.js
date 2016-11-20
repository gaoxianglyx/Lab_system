/**
 * 往届成员详情
 * 
 * @author huangjing
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

$(function(){
  var args=getQueryStringArgs();
  var year=args["year"];
  var year_title="<p class='mem_year fb tc'><span id='year_member'>"+year+"</span>年成员</p>";
  $(".year").append(year_title);
});
//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var member_detail = {
        
        init:function(){
         member_detail.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){
           /*
            
            {@each data as person}
            <!-- 一个成员信息 start-->
            <div class="person">
               <!-- 基本信息 -->
              <div class="basic_info">
                <img src="../img/member_detail/hoto.png">
                <div class="info">
                  <p class="position f18">担任职位：${person.position}</p>
                  <p class="name fb">${person.name}</p>
                  <p class="email f18">邮箱：${person.email}</p>
                </div>
              </div> 
              <!-- 主要成就 -->
              <div class="achieve">
                <p class="main_ach f18 fb">主要成就：</p>
                <div class="detail f18">${person.synopsis}</div>
              </div>
            </div> 
            <!-- 一个成员信息 end -->
	           {@/each}

             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/user/listUser.do',
              {
                year:$('#year_member').val()
              },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".year").append(juicer(funcTpl(member_detail.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return member_detail.init();//最后return init()就行了
});