import{_ as i,c as r,o,a4 as e,m as l,a}from"./chunks/framework.CXKHhAhX.js";const q=JSON.parse('{"title":"总结 Webpack","description":"","frontmatter":{},"headers":[],"relativePath":"目录文档/前端/打包工具/webpack.md","filePath":"目录文档/前端/打包工具/webpack.md"}'),t={name:"目录文档/前端/打包工具/webpack.md"},u=e("",28),s=l("ul",null,[l("li",null,[a("为什么要用？ "),l("ul",null,[l("li",null,"默认情况下，一旦修改了代码，全部代码重新编译刷新，速度慢（全体刷新）")])]),l("li",null,[a("有什么作用？ "),l("ul",null,[l("li",null,"只更新修改的模块，其他模块不变（局部更新）")])]),l("li",null,[a("怎么使用？ "),l("ul",null,[l("li",{"hot:":"",true:""},"devServer:"),l("li",null,"new webpack.HotModuleReplacementPlugin()")])]),l("li",null,[a("注意： "),l("ul",null,[l("li",null,"默认情况下只有样式文件有HMR功能（style-loader），JS是没有的")])]),l("li",null,[a("开启JS的HMR功能： "),l("ul",null,[l("li",null,"手写JS代码 --> module.hot.accpet('模块路径', () => {})"),l("li",null,"在Vue使用 --> vue-loader"),l("li",null,"在React使用 --> react-hot-loader")])])],-1),h=e("",17),n=[u,s,h];function c(d,b,p,k,m,_){return o(),r("div",null,n)}const x=i(t,[["render",c]]);export{q as __pageData,x as default};
