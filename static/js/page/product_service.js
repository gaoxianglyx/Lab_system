/**
 * 产品与服务
 * 
 * @author gaoxiang
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var product_service = {
        
        init:function(){
         product_service.getNewsData();

       },
       
            //下面就写需要的js函数

            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl:function(){
           /*
             
            {@each data as item}
            <div class="product_list L3">
      
              <h2>${item.name}</h2>
              <p>${item.summary}</p>
              <div class="img">
                <img class="img2" alt="产品图片" src=${item.picture}>
                <img class="img2" src="/img/common/personbg.png">
              </div> 
            </div>
            {@/each}
             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/product/listProduct.do',
              {
               page : 'pruduct_service'
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                
                 $(".main").append(juicer(funcTpl(product_service.newTpl),res));
                 console.log(res);
               }
               );
           }
         };

	return product_service.init();//最后return init()就行了
});