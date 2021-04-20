## uni app

### 配置外网映射

```text
小程序打开
1.首先下载小程序开发工具；
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
2. 下载完以后必须后台将自己的微信号在后台授权；
3.然后带入微信的demo:ipak-wechat-test;
4.通过https://www.ngrok.cc/_book/start/ngrok_windows.html搞个外网映射目的是前端访问后端接口，安装完客户端以后在根目录下执行：sunny.exe clientid 205824296214
5.打开移动端前端app.js 修改domain: "http://tunzyu.vipgz4.idcfengye.com"
6.打开工具右上角点开详情勾选：不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书
```

### pages.json

#### condition

用于开发模式下

```js
"condition" : { //模式配置，仅开发期间生效
    "current": 0, //当前激活的模式(list 的索引项)
        "list": [
            {
                "name": "人脸录入", //模式名称
                "path": "pages/my/face/face", //启动页面，必选
                "query": "1" //启动参数，在页面的onLoad函数里面得到
            }
        ]
}
```



## VUE

### VueX

#### 监听vuex值变化

```js
watch:{
	//监听vuex中userNumber的变化
	'$store.state.userNumber'(val){//这里是引号
		//变化之后根据自己项目需求写自身的逻辑代码，下面只是示例
     	if( !this.isLogin){
       		this.dialogVisibleLogin=val
     	}
	},
	//监听路由变化的写法
	$route(to,from){
		//to要前往的路由，from从那个路由过来
      	console.log(to.path,from)
      	//变化之后根据自己项目需求写自身的逻辑代码，下面只是示例
      	if(to.path=='/personal'||to.path=='/transfer'){
        	this.isHeader=false
      	}else {
        	this.isHeader=true
      	}
    },
}
```

## 各组件

### 极简Tab

##### 导入：

```javascript
复制代码import aloysTab from "@/components/aloys-tab/aloys-tab.vue"
```

##### 属性 attribute

| 属性名 | 类型  |                             介绍                             | 默认值 |
| :----: | :---: | :----------------------------------------------------------: | :----: |
|  tabs  | Array | 数组元素为Object，obj.title属性为标签显示名, 示例：[{ title: 'tab1' }, { title: 'tab2' }] |   []   |

##### 事件 events

|    事件名     | 传参  |                 说明                 |
| :-----------: | :---: | :----------------------------------: |
|    change     | index | tab页切换触发，返回切换后的tab index |
| onReachBottom | index |   滚动到底部触发，返回切tab index    |

##### 示例代码

##### template

```
复制代码<template>
    <view class="content">
        <aloys-tab :tabs="tabs" @change="onTabChange">
          <view slot="content0" class="xxx">A</view>
          <view slot="content1" class="xxx">B</view>
          <view slot="content2" class="xxx">C</view>
        </aloys-tab>
    </view>
</template>
```

##### script

```
复制代码
import aloysTab from "@/components/aloys-tab/aloys-tab.vue"

export default {
  components: { aloysTab },
  data() {
    return {
      tabs: [{
        title: 'tabA'
      },{
        title: 'tabB'
      },{
        title: 'tabC'
      }]
    }
  },
  onLoad() {

  },
  methods: {
    onTabChange(index) {
      uni.showToast({
        title: '切换至tab：' + index
      })
    }
  }
}
```

##### css

```
复制代码<style>
.content{
  position: absolute;
  height: 100%;
}
.xxx{
  font-size: 42rpx;
  font-weight: bold;
  padding: 100rpx 0;
  text-align: center;
}
</style>
```

### 时间格式化

[推荐博客](https://blog.csdn.net/weixin_44128575/article/details/103251297?)

```js
/**
 *  filters.js
 * 对Date的扩展，将 Date 转化为指定格式的String  默认是2019-11-25 14:00:00 需要格式则后续传值
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2019-11-25 08:09:04.423
 * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2019-11-25 8:9:4.18
 * 使用格式,dom上 {{formatTime(time,'YYYY-MM-DD')}}
 * 在script中 this.formatTime(this.time,"hh:mm:ss")
 * 
 */
import Vue from 'vue'
Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"D+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(Y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
const formatTime = function (times, pattern) {
	var d = new Date(times).Format("YYYY-MM-DD hh:mm:ss");
	if (pattern) {
		d = new Date(times).Format(pattern);
	}
	return d.toLocaleString();
}
 export default formatTime
```

```js
//全局引入
import formatTime from './utils/dateFormate'
Vue.prototype.formateTime=formatTime
```

```js
使用格式,dom上 {{formatTime(time,‘YYYY-MM-DD’)}}
在script中 this.formatTime(this.time,“hh:mm:ss”)
```

### 字体图标

[推荐博客，uni-icons中添加自定义图标](https://blog.csdn.net/qq_42514643/article/details/106025226)

[推荐博客](https://blog.csdn.net/rfalcon/article/details/109009648?)

#### uni app 引入阿里icon

https://www.iconfont.cn/

下载所需的icon后，解压，点击demo.html查看使用详情

记得引入到全局或者局部组件中

```html
//这是全局引用，在App.vue中引入
<style>
	/*每个页面公共css */
	@import "plug/colorui/icon.css";
	@import "plug/colorui/main.css";
	@import "common/iconfont.css";
</style>
```

