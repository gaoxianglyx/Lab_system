/**
 * 黑魔法
 * 把注释的函数改变成字符串，减少模版编写中的引号
 * 调用方法：
 * var htmlstr = funcTpl(xxxtpl);
 * $('.xxx').append(htmlstr);
 */

define(function(){
	return function(func){
		return func.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '')
	}
})