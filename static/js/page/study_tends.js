/**
 * 研究动态
 * 
 * @author gaoxiang
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var study_tends = {
        
        init:function(){
         study_tends.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){
           /*
             
            {@each data.list as item}
            <div class="active_list">
                
                  <div class="active_theme">
                    <h2>${item.title}</h2>
                    <span class="time">${item.date}</span>
                    <p>${item.summary}</p>
                  <a class="cours" href="#">阅读原文</a>
                  </div>
            </div>
            {@/each}
            
            <div class="page">
              <a href="#" id="pre" href="#">上一页</a>
              <span class="pagen">第  页</span>
              <a href="#" id="pre" href="#">下一页</a>
              <span class="pagesum"> 共 ${data.pageSum} 页 </span>
            </div>
             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/activity/listActivity.do',
              {
               page : 'pruduct_service'
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                
                 $(".main").append(juicer(funcTpl(study_tends.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return study_tends.init();//最后return init()就行了
});