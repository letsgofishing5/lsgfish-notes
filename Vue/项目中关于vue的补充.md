### vue的源码版本问题
    vue.js(体积大)
        编译器 + 运行时
            编译器: 有能力将template解析为render
            运行时: 数据代理 数据劫持 模板解析 组件化解析 dep watcher ......
    vue.runtime.js(体积小)
        运行时