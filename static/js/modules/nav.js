define(['lib/jquery', 'util/funcTpl'], function($, funcTpl) {
	var nav = {
		init: function() {
			nav._active();
			var htmlstr = funcTpl(nav.navTpl);
			$('.content').append(htmlstr);
		},
		navTpl: function() {
			/*<ul class="nav navbar-nav">
			<li class="active" data-link="index"><a href="/html/index.html">index</a></li>
			<li><a href="/html/demands.html" data-link="demands">demands</a></li>
			<li><a href="/html/demands.html" data-link="publish">publish</a></li>
		 </ul>*/
		},

		_active: function() {
			var url = window.location.href;
			var tmp = url.split('/');
			var len = tmp.length;
			var link = tmp[len-1].split('.')[0];
			console.log(link);
			$()
		}
	};

	return nav.init;
});
