/**
 *  mock
 * 可以根据需要任意定制接口的返回
 */
var fs = require('fs');

module.exports = function(router, app) {
    // 示例 1
    router.get('/api/list', function *() {
        var query = this.query || {};
        var offset = query.offset || 0;
        var limit = query.limit || 10;
    });

    // 示例 2
    router.get('/list', function *() {
       console.log(this.query);
    });

    // 示例 3
    router.post('/user', function *() {
        var user = require('./wxytest.json');
        console.log(this.request.body);
        this.response.body = user;
    });
    
}