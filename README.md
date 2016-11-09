#实验室项目

项目成员：高翔 李康 黄静

我们这个项目是一个多页面的项目，访问不同的页面需要跳转链接。

开发：sass + jquery + requirejs + juicer

前后端分离：使用了基于nodejs的koa框架启动服务，前后端约定好的接口做ajax请求，前端mockdata

### 目录结构

```
├── app.js          启动应用
├── gulpfile.js     自动部署，监听启动
├── package.json    项目开发依赖
├── static          开发目录
│   ├── html
│   ├── sass
│   ├── css
│   ├── js
          ├── lib
          ├── util
          ├── modules
          ├── page
│   └── img
├── dist            最终目录
└── mock            mock data

```
### 准备

首先，你得有一个node环境。可以在官网上去下一个node，也可以通过nvm（node version management）去安装（好处是管理多个版本的node），当然还需要npm（node package management）去管理包依赖这些哈。

接着，全局安装一个 gulp `npm install gulp -g`

另外，需要 git，不多说

新建一个目录，把代码下下来
`git clone git@github.com:qingfan/Institute.git`

### 运行

进入 ins 目录
* `npm install / cnpm install` 安装依赖包
* `npm start` 启动应用

好了，你可以开始开发了

### mock 数据

cd mock，在 mock 目录下建一个自己的目录，比如：mock/wxy

所有mock data（比如json文件）放在自己建的这个目录下。还需要一个处理 ajax 请求，并返回给客户端 response 的 index.js文件，参考 /mock/wxy/index.js。最后，在 app.js 里面 require 进来你的 mock 目录。

> 参考： app.js  mock/wxy/*

### 关于第三方的插件

如果有效果需要，也可以使用第三方的插件，但是你得先看懂，然后自己灵活实现。

### 关于打包和上线

我后面学习再添加上来

### 附言

使用工具不是目的，主要是想怎么去实现组件化，怎么去构建；以及通过使用这些东西，以后去学习 nodejs react/redux 等等这些。

好吧，我也是菜鸟，现学现卖的，分享共勉。
