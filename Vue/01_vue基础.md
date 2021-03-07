### vue特点
    1. 申明式编程(去DOM化)
    2. 数据响应式
    3. 数据双向绑定

### vue编程思想
    数据驱动
    组件化

### vue api
#### 模板(指令 组件)
    可以使用一些Vue定义的全局组件
    ref
    <组件标签 @小写事件名="回调"></组件标签>
    {{data数据}}  / {{data数据|过滤器}} : 数据绑定;插值表达式
    v-model.修饰符: 数据双向绑定的指令(这个指令给输入型元素用)
    v-text : 数据绑定;修改的是节点的textcontent
    v-html : 数据绑定;修改的是节点的innerhtml
    v-on:事件名="回调函数的名字" : 绑定dom事件的(给普通的html元素使用v-on指令)
    v-on:事件名.修饰符="回调函数的名字" : 绑定dom事件的
    v-on:事件名.修饰符="回调函数的名字(预定义的实参,$event)" : 绑定dom事件的
        v-on: 换成 @
    v-bind:非指令属性="data中定义的key"
    v-bind:非指令属性="js可以解析的数据类型"
        v-bind: 换成 :
        :class="字符串/对象/数组.字符串.对象"
        :style="对象/数组.对象"
    v-show : 控制元素的display属性
        值为true时将对应元素的display设置为block;
        值为false时将对应元素的display设置为none;
    v-if
    v-else-if
    v-else
        控制元素是否存在于dom树上
            值为true时将对应元素存在于dom树上
            值为false时将对应元素不存在于dom树上
        必须连用! 当中不能夹杂任何其他元素;
        只要有一个指令的值满足true;就显示存在对应指令的元素
    v-for="(item,index) in 数组"
    v-for="(val,key,index) in 对象"
        使用v-for时一般要结合 key一起使用;  :key="id/index"

    v-pre : 渲染静态html;不需要vue解析
    v-once : 只需要vue渲染一次
    v-cloak : vue最后删除的指令
        [v-cloak]{display:none} : 处理闪屏

#### 模板(组件)
    Vue.component(组件名,组件配置)
    components:组件配置

#### 配置
    filters:定义过滤器
    directives:自定义指令
    watch:监听data中的属性的
    components:注册局部组件
    props:定义要接收哪些父组件传递来的数据
    beforeCreate
    created : 最早可以发送ajax请求的地方(数据才具备响应式)
    beforeMount
    mounted : 最早可以保证dom操作不出问题的地方(滑屏 轮播图 放大镜...动态js效果)
    beforeUpdate
    updated
    beforeDestroy
    destroyed
    el : 指定当前vm实例对象需要渲染的模板
    data: 存放当前vm实例对象管理的响应式数据
    mounted: vue的钩子函数
    computed: 计算属性
        1.什么时候使用计算属性?
            当插值表达式中的内容过长时;可以使用计算属性
            当发现在vue中存在数据依赖关系时;可以使用计算属性
        2.语法:
            {{计算属性名称}}  ---> 渲染出来的是就是值
            computed:{
                计算属性名称(){
                    return 值
                }
            }
            computed:{
                计算属性名称:{
                    get(){return 值},
                    set(newval){
                        //当计算属性的值被修改时会触发
                    }
                }
            }
        3.计算属性get方法被调用的时机?
            界面初始化时
            当计算属性的依赖发生改变时
        4.计算属性拥有缓存
            多次使用同一个计算属性;该计算属性的get方法只会被调一次!


#### Vue构造函数
    静态属性
        Vue.config.productionTip : 消除vue的生产提示
    静态方法
        Vue.set     等同于 Vue.prototype.$set
        Vue.delete  等同于 Vue.prototype.$delete
        Vue.component(组件名,配置项) : 注册全局组件
        Vue.filter(过滤器名称,对应的回调)
        Vue.directive(指令名,配置对象)
        Vue.use(插件对象)

#### Vue实例对象
    实例属性
        Vue.prototype.$root : 查找当前实例的根实例
        Vue.prototype.$el   : 查找根实例的挂载节点
        Vue.prototype.$options : 查找当前实例的配置对象
        Vue.prototype.$data    : 查找当前实例所管理的响应式数据
        Vue.prototype.$refs : 当前组件管理的ref标记
    实例方法
        Vue.prototype.$set(data中的对象,属性名,属性值) : 为data中对象添加响应式属性(可以触发界面更新)
        Vue.prototype.$delete(data中的对象,属性名) : 删除data中对象的属性(可以触发界面更新)
        Vue.prototype.$watch(data中的属性,监听回调,{deep:true}) : 对data中的属性进行浅/深监听
        Vue.prototype.$mount(选择器): 跟el配置一样;为根实例指定模板 为根实例指定挂载节点
        Vue.prototype.$on(事件名,回调) : 为对应的vue实例添加自定义事件
        Vue.prototype.$once(事件名,回调) : 为对应的vue实例添加自定义事件(一次性的)
        Vue.prototype.$emit(事件名,参数) : 触发对应的事件
        Vue.prototype.$off()
        Vue.prototype.$off(事件名)
        Vue.prototype.$off(事件名,指定的回调): 为对应的vue实例解绑事件
        Vue.prototype.$destroy(): 杀死vue实例


