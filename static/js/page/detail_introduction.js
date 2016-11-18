/**
 * 成员详细介绍
 * 
 * 
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var detail_introduction = {
        
        init:function(){
         detail_introduction.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){

              /*
                <div class="picture_name">
                    <img class="personal_picture" src=${data.picture} alt="图片">
                    <div class="name_title">
                      <h2 class="name">${data.name}</h2>
                      <p class="parsonal_title">担任职位：${data.position}</p>
                      <p class="email">邮箱：${data.email}</p>
                    </div>
                </div>
                <div class="detail_list">
                  <h2 class="experience_title">个人介绍</h2>
                  <p class="experience_introduce">${data.synopsis}</p>
                </div>
                <div class="detail_list">
                  <h2 class="item_title">研究项目</h2>
                  <p class="item_introduce">{@each data.project as item1}${item1.id},${item1.project},{@/each}</p>
                </div>
                <div class="detail_list">
                  <h2 class="paper_title">论文及著作</h2>
                  <p class="paper_introduce">{@each data.paper as item2}${item2.paper},id:${item2.id},{@/each}</p>
                </div>
                <div class="detail_list">
                  <h2 class="honor_title">获得荣誉</h2>
                  <p class="honor_introduce">{@each data.honor as item3}${item3.id},${item3.honor},{@/each}</p>
                </div>
              
             
               
                
             */
   
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/user/userDetail.do',
              {
               page : 'detail_introduction'
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".main").append(juicer(funcTpl(detail_introduction.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return detail_introduction.init();//最后return init()就行了
});