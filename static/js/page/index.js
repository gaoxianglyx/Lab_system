/**
 * 首页
 * 
 * @author gaoxiang
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var index = {
        
        init:function(){
         index.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){
           /*
             
             <div class="news_list">
                {@each data.newslist as item}
	             <div class="news_item">
	                 <p class="news_id" style="display:none">${item.id}</p>
		             <div class="img">
			             <img src=${item.picture.link}>
		             </div>
		             <div class="detail">
			             <p class="news_head">
				             <span class="title">${item.title}</span>
				             <span class="date">${item.date}  发布</span>
			             </p>
			             <p class="news_detail">
				             ${item.summary}
			             </p>
			             <p class="more">
				             <a href="#">阅读原文</a>
			             </p>
		             </div>
	             </div>
	             {@/each}
             </div>
             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              '/user',
              {
               page : 'index'
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".news > .c").append(juicer(funcTpl(index.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return index.init();//最后return init()就行了
});