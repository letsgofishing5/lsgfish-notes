### vue资源集合
    https://github.com/vuejs/awesome-vue

### vant官网
    https://vant-contrib.gitee.io/vant/#/zh-CN/coupon-list

### 联系人练习的代码
    https://vant-contrib.gitee.io/vant/1.x/#/zh-CN/contact-card

### vant基本环境搭建
    下载: npm i vant
    下载babel插件:npm i babel-plugin-import -D
    加配置:(.babelrc)
        {
          "plugins": [
            ["import", {
              "libraryName": "vant",
              "libraryDirectory": "es",
              "style": true
            }]
          ]
        }

### 使用vant(全局组件)
    import { Button } from 'vant';
    import { Swipe, SwipeItem } from 'vant';
    Vue.use(Button);
    Vue.use(Swipe);
    Vue.use(SwipeItem);

    在任意组件上就可以使用
        van-button
        van-swipe


### 使用vant(局部组件)
    import { Button } from 'vant';
    import { Swipe, SwipeItem } from 'vant';
    components:{
        [Button.name]:Button,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem
    }


