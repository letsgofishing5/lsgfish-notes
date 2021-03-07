### 1. 框架配置
    如果框架的配置中有函数;这个函数最好不要使用箭头函数

### 2.插值表达式中不要使用自增 自减

### 3.响应式更新
    哪些时候数据的变化可以触发vue的响应式更新!!!
        只要是data中的数据发生改变(深度监视)一般就可以触发vue的响应式更新;
        有一些例外:
            哪些时候数据的变化没有办法触发vue的响应式更新!!!
                数组(data中的数组):
                    通过下标直接给数组添加数据是没有办法触发vue的响应式更新
                    直接修改数组的长度是没有办法触发vue的响应式更新
                    解决:
                        使用数组的变异方法
                            push() : 尾部添加
                            pop()  : 尾部删除
                            unshift() : 头部添加
                            shift()   : 头部删除
                            splice() : 实现数组的CUD操作
                            sort()   : 实现数组的排序
                            reverse() : 实现数组的反转
                对象(data中的对象)
                    给对象新增或删除属性时没有办法触发vue的响应式更新
                    解决:
                        使用Vue.set(obj,key,val) vm.$set(obj,key,val)
                        使用Vue.delete(obj,key) vm.$delete(obj,key,val)


### 4. 计算属性&侦听器注意点
    计算属性传参
        computed: {
            fullName:{
                get() {
                    return function (flag) {
                        return `${this.firstName}-${this.lastName}`
                    }
                },
                set(val){}
            }
        }

    计算属性 VS 方法
        模板上的使用:  template <span>{{计算属性的名称}}</span>
            初始化和计算属性的依赖发生改变时都会执行一次计算属性的get方法
        模板上的使用:  template <span>{{方法的调用}}</span>(不推荐使用这种形式)
            初始化和界面更新时都会执行两次方法

    计算属性 VS 侦听器
        侦听器(浅):  watch:{
                     //监听firstName的改变(监听的是data中的数据)
                     firstName(newval,oldval){
                         console.log("watch - firstName",newval,oldval)
                     }
                 }

        侦听器(深):  watch:{
                         obj:{
                            handler(){}, //监听回调
                            deep:true
                         }
                     }


        侦听器(服务深层次属性):watch:{
                                  "Obj.Obj2.Obj3.test":function(){

                                   }
                              }

### 5. 组件注意点
    a.配置项的写法
        根组件指定模板&挂载节点可以使用el配置 子组件不行
        子组件指定模板需要使用template  挂载节点不用指定;组件标签就是挂载节点
        根组件的data可以是一个对象
        子组件的data必须得是函数;函数的返回对象才是真正的响应式数据
        子组件中可以使用props配置
        组件的模板必须的有一个根标签
    b. 与html标签命名&嵌套的冲突
        vue组件的命名最好使用-的形式
        当vue组件的定义和使用和html标签的嵌套规则产生冲突时;可以使用is属性来解决
    c. 在组件上使用@ 定义的是vue自定义事件
        <v-damu @damu="damuFn"></v-damu>
        VDamu.$on("damu",damuFn)
    d. props特性 & 非props特性 & vue指令
        当组件被覆盖时;只有非props特性的标签属性会被继承

### 6.一个vue实例就是一个vue组件

        Vue源码内部有下述一段代码: VueComponent.prototype  = Object.create(Vue.prototype)
        vue组件 --> VueComponent.prototype --> Vue.prototype --> Object.prototype --> null
### 7. 子组件如何修改父组件的数据
        如果数据是独立的: 所有的子组件都应该把父组件的数据转存一份
        如果数据是共享的: 子组件应该要通知(子向父数据传递方案)父组件自己来修改数据

### 8. v-leave是不可用的

