/**
 * 首页
 * 
 * @author huangjing
 */
 require.config({
   baseUrl: MIS.STATIC_ROOT
 });
 window.onload=function() {
    // 研究动态标题超出字数隐藏
    var title=document.getElementsByClassName('timu');
    for(var i=0;i<title.length;i++) {
      if (title[i].innerHTML.length>22) {
        title[i].innerHTML=title[i].innerHTML.substr(0,22)+'...';
      }
    }
    // 教学活动标题超出字数隐藏
    var act=document.getElementsByClassName('act');
    for(var i=0;i<act.length;i++) {
      if (act[i].innerHTML.length>16) {
        act[i].innerHTML=act[i].innerHTML.substr(0,16)+'...';
      }
    }
 }

//require的参数为你要调用的js库，一般就是下面这些
require(['lib/jquery','util/request','util/funcTpl','lib/juicer'], function($, request,funcTpl) {
      //在你页面名称定义一个init对象，所有的函数调用都写在这里面
      var index = {
        
        init:function(){
         index.getNewsData();

       },
       
            //下面就写需要的js函数
                                 
            //你需要动态渲染到html的dom，就先写成下面newTpl这种格式
            newTpl1:function(){
           /*
                {@each data.research as research}
	              <li>
                  <a  class="tit" href="research_detail.html?id=${research.id}">
                    <span class="timu">${research.title}</span>
                    <span class="date">[${research.date}]</span>
                  </a>
                </li>
	             {@/each}
             */
           },
           newTpl2:function(){
           /*
                {@each data.activity as activity}
                <li>
                  <a  class="tit" href="teaching_detail.html?id=${activity.id}">
                    <span class="act">${activity.title}</span>
                    <span class="date">[${activity.date}]</span>
                  </a>
                </li>
               {@/each}
             */
           },

            //这是一个ajax请求，写法如下
            getNewsData:function(){
             request.post(
              'http://rap.taobao.org/mockjsdata/10008/index.do',
              {
               
             },
             function(res){
	               //在成功的回调函数里面，这句话就是用juicer把刚才newTpl的加上res的数据渲染出来,append进html里面
                 $(".dynamic .list ul").append(juicer(funcTpl(index.newTpl1),res));
                 console.log(res);
                 $(".activity .list ul").append(juicer(funcTpl(index.newTpl2),res));
                 console.log(res);
               }
               );
           }
         };

	return index.init();//最后return init()就行了
});