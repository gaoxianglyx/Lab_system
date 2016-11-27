/**
 * 研究动态详情
 * 
 * @author huangjing
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var research_detail = {
        
        init:function(){
         research_detail.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){
           /*

        		<!-- 标题部分 -->
        		<div class="title tc">
        			${data.title}
        		</div>
        	
        		<!-- 内容部分 -->
        		<div class="content">
        			<div class="date_auth tc">
        				<span class="date">发表日期：${data.date}</span>
        				<span class="author">负责人：${data.author}</span>
        			</div>
        			<div class="con_words f18"><p>${data.detail}</p></div>
        		</div>
            {@each data as article}
	               
	           {@/each}

             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
              var args=getQueryStringArgs();
              var id=args["id"];
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/research/researchDetail.do',
              {
                id:id
              },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".article").append(juicer(funcTpl(research_detail.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return research_detail.init();//最后return init()就行了
});
