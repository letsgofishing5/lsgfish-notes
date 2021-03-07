### vuex环境搭建
    1. 下载vuex : npm i vuex
    2. 将vuex注册为vue的插件(必须在创建仓库之前完成)
        import Vue from "vue";
        import Vuex from "vuex";
        Vue.use(Vuex)
    3. 创建仓库
        var store = new Vuex.Store({
            state:{},
            getters:{},
            mutations:{},
            actions:{}
        })
    4.注册仓库
        new Vue({
            store
        })


### API
    配置项
        state : 存储的响应式数据
        getters: 仓库内部的计算属性
        mutations: 同步修改仓库数据的工具
        actions: 异步提交mutation的工具

    Vue.prototype.$store
        $store: 当注册完vuex之后;每一个组件都可以访问到$store属性
                $store代表的就是仓库;
                    $store.state : state配置项的数据
                    $store.getters : getters配置项的数据
                    $store.commit("mutation的名字",载荷) : 触发一个mutation回调的执行
                    $store.dispatch("action的名字",载荷) : 触发一个action回调的执行

### 使用vuex最核心的两个点
    1. 如何优雅的读取仓库中的数据
        模板的写法:{{$store.state.msg}}
        a.基于对组件模板要求简洁的需求;
            模板的写法: {{msg}}
            访问仓库中数据:
                data(){
                    return {
                        msg:this.$store.state.msg
                    }
                }
                computed:{
                    msg(){
                        return:this.$store.state.msg
                    }
                }

        b.基于对数据响应式的要求;当仓库数据改变;界面也要得到更新
                computed:{
                    msg(){
                        return:this.$store.state.msg
                    }
                }

        基于a&b 仓库中的数据在组件上一定是一个计算属性与之对应!!!


    2. 如何优雅的修改仓库中的数据
        同步修改 : 在组件上提交一个mutation 让mutation去修改数据
        异步修改 : 在组件上转发一个action 在action内部提交mutation 让mutation去修改数据
        为了以后编码的套路固定下来:
            我们建议不管是同步的修改还是异步的修改;\
                在组件上都是 通过转发一个action 在action内部提交mutation 让mutation去修改数据

            配置:
                var store = new Vuex.Store({
                    state:{
                        msg:""
                    },
                    getters:{},
                    mutations:{
                        name(state数据,msg){
                            state数据.msg = msg
                        }
                    },
                    actions:{
                        name(store对象,msg){
                            store对象.commit("mutation_name",msg)
                        }
                    }
                })

            组件:
                dom事件:
                    模板: <span @click="fn">click</span>
                    配置:
                        methods:{
                            fn(){this.$store.dispatch("action name",msg)}
                        }
                计算属性的set方法:
                    模板: <input type="text" v-modle="msg"/>
                    配置:
                        computed:{
                            msg:{
                                get(){return this.$store.state.msg},
                                set(){
                                    this.$store.dispatch("action name",msg)
                                }
                            }
                        }


### 组件上的优化写法
    import {mapState,mapGetters,mapActions,mapMutations} from "vuex"

    模板: {{组件上计算属性的名称}}
        computed:{
            ...mapState(["仓库中state的名称"]), //组件上计算属性的名称:仓库中state的名称
            ...mapState({组件上计算属性的名称:"仓库中state的名称"}),
            ...mapGetters(["仓库中getters的名称"]), //组件上计算属性的名称:仓库中getters的名称
            ...mapGetters({组件上计算属性的名称:"仓库中getters的名称"})
        }


    模板: <span @click="组件上方法的名称(载荷)">click</span>
        methods:{
            ...mapActions(["仓库中action的名称"]),//组件上方法的名称:仓库中action的名称
            ...mapActions({组件上方法的名称:"仓库中action的名称"}),
            ...mapMutations(["仓库中Mutation的名称"]),//组件上方法的名称:仓库中Mutation的名称
            ...mapMutations({组件上方法的名称:"仓库中Mutation的名称"})
        }


### 注意点
    一个action函数返回的promise 就是 dispatch函数返回的promise

### 仓库的优化写法


