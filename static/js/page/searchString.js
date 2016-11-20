  // 这是一个查询字符串函数，用来获取链接?后面year的值
  function getQueryStringArgs() {
     //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : "");
  
      //保存数据对象
      args = {};
 
     //取得每一项
      items = qs.length ? qs.split("&") : [],
     item = null;
     name = null;
     value = null;
 
    //for循环
     i = 0;
     len = items.length; 
     //将每一项加入args对象中
     for (i = 0; i < len; i++) {
        item = items[i].split("=");
         name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);

        if (name.length) {
            args[name] = value;
        }
     }
    return args;
   }
   //查询字符串结束