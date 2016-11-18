/**
 * 教学活动详细页
 * 
 * 
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var education_detail = {
        
        init:function(){
         education_detail.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){

              

           /*
            
            <div class="issue">
              <h2 class="chapter_name">${data.title}</h2>
              <div class="ath_time">
                <span class="time">发表日期：${data.date}</span><span class="author">作者：${data.material}</span>
              </div>
              <a href="${data.materialPath}" class="adress">资料下载地址</a>
              <p>${data.summary}</p>
            </div>
            
             
             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/activity/activityDetail.do',
              {
               page : 'education_detail'
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".main").append(juicer(funcTpl(education_detail.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return education_detail.init();//最后return init()就行了
});