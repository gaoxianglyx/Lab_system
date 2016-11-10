(function() {
	"use strict"
	var headerCss = document.getElementsByTagName('script'),
	path, cssPath, headTitle = "";
	var temp;

	temp='';


	for(var i = 0; i < headerCss.length; i++){
		cssPath = headerCss[i].getAttribute('data-css');
		headTitle = headerCss[i].getAttribute('data-title');
		if(cssPath != null && cssPath != undefined){
			cssPath = '<link rel="stylesheet" href="/css/page/' + cssPath + '.css"/>'
			break;	
		}

	}
	
	var html = '<!DOCTYPE html>'+
	'<head>'+
	'<meta charset="UTF-8">'+
	'<title>'+'common'+'</title>'+
	'<link rel="stylesheet" href="/css/global.css"/>'
	+cssPath+
	'<script>'+
	'var MIS = {};'+
	'MIS.STATIC_ROOT = "/js"'+
	'</script>'+
	'<script src="'+temp+'/js/lib/jquery.js"></script>'+
	'<script src="'+temp+'/js/modules/api.js"></script>'+
	'<script src="'+temp+'/js/lib/juicer.js"></script>'+
	'<script src="'+temp+'/js/modules/time.js"></script>'+

	'</head>'+
	'<body>';

	var headerTpl = function(){
		/*
		<div class="header">
		<div class="header-wrap">
			<div class="head-left">
				<h1 class="logo">
					<img src="/img/common/logo.png" alt="logo">
				</h1>	
			</div>
			<div class="head-right">
				<div class="head-right-wrap">
					<p class="m-language">
						<a href="#">中文</a>
						<b>丨</b>
						<a href="#">English</a>	
					</p>
					<div class="m-time">
						<span>
							欢迎访问本网站，今日时刻:
						</span>
						<div class="showtime" id="showtime"></div>
					</div>
				</div>
			</div>
		</div>
		</div>
		<!-- nav start -->
		<div class="nav">
			<ul>
				<li><a href="/user" id="index">首页</a></li>
				<li><a href="#">关于我们</a></li>
				<li><a href="#">成员介绍</a></li>
				<li><a href="#">教学活动</a></li>
				<li><a href="#">研究动态</a></li>
				<li><a href="#">研究生培养</a></li>
				<li><a href="#">产品与服务</a></li>
				<li><a href="#">往届成员</a></li>
			</ul>
		</div>
			
		*/
	};
	var  header = html + headerTpl.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
	document.write(header);
})();