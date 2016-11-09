(function(){
	"use strict"
	var footerScript = document.getElementsByTagName('script'),
		path;
	for(var i = footerScript.length; i > 0; i--) {
	    path = footerScript[i-1].getAttribute('data-js');
		if(path != null){
			break;	
		}
	}
	var footerTpl = function(){
		/*
		<div class="footer">
        <div class="footer-links">
            <div class="friend-link">
                <h2>友情链接</h2>
            </div>
            <div class="links-item">
                <ul>
                    <li>
                        <a href="#">
                            重庆邮电大学
                        </a>
                    </li>
                    <li><a href="#">
                            经济管理学院
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            经管工作室联盟
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            信息系统协会中国分会
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            信息系统学报
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            高校社科网
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            红岩网校
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            工业和信息化部
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <ul>
                <li>版权所有</li>
                <li>重庆邮电大学</li>
                <li>重庆市南岸区崇文路2号</li>
                <li>40065号</li>
                <li class="noborder">渝ICP:10005091-2</li>
            </ul><br>
            <ul>
                <li><a href="#">联系我们</a></li>
                <li class="noborder"><a href="#">后台登录</a></li>
            </ul>
            <p>
                CopyRight &#169; 2016&nbsp;重庆邮电大学经济管理学院
            </p>
        </div>
    </div>
		*/
	}
	var footer = footerTpl.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '') +
				'<script src="/js/lib/r.js" data-main="/js/page/' + path + '"></script>'+
			  '</body></html>';
	document.write(footer);
})();
