var http = require('http');
var path = require('path');
var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-router')();

/*var mock_wxy = require('./mock/wxy/index.js');*/

var app = koa();
var debug = process.env.NODE_ENV !== 'production';
// 开发环境对应static 生产环境对应dist
var viewDir = debug ? 'static' : 'dist';

// 处理静态资源和入口文件
app.use(serve(path.resolve(__dirname, viewDir), {
    maxage: 0
}));

// // 定制动态请求
// mock_wxy(router, app);

app.use(router.routes());

app = http.createServer(app.callback());

app.listen(8081, '0.0.0.0', function() {
    console.log('app listen success at port 8081.');
});