# VUE前端——智慧社区

## ES6语法

### 箭头函数

箭头函数中，`this`是静态的，`this`始终指向函数声明时所在作用域下的`this`的值

静态的，你可以理解为只加载一次，不可更改的状态。也就是说箭头函数中的`this`指向，不可更改，就算call或者apply都不可以

```js
//第一种写法
let result=n=>n;
//完整表达式
let result = function(n){
    return n;
}

//第二种写法
let result2 = ()=>n
//完整表达式
let result2 = function(){
    return n;
}

//总结，暂时只想到这两种写法。简单来说就是将原来的一个完整函数表达式给简化了，但是简化过头，初学者可能比较懵，比如我。简化后的表达式，即：参数=>方法体
//如果函数只有一个参数和返回值，那么只需要写：参数=>返回值
//如果函数没有参数或者多个参数，那么需要用小括号代替参数的位置或者用小括号将多个参数囊括起来：()=>返回值
//如果方法体不止只有返回值，那么需要些：参数 => {console.log("test");return n;}
```



## VUE

### element-ui框架的el-dialog弹出框被遮罩层挡住了

问题解决：[推荐博客](https://blog.csdn.net/Mr_JavaScript/article/details/80888681)

解决方法：在el-dialog标签里添加 :modal-append-to-body='false'

出现新问题，当点击退出状态时，选择取消，则dialog再次被遮罩层挡住

解决方法：

```vue
 <el-dialog
        title="多重错误"
        :visible.sync="dialogVisible"
        :modal-append-to-body='false' //添加这个属性同时，添加下方的属性
        :append-to-body="true" //该属性需要设置
    >
```



