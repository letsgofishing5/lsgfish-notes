### IDE

#### vsCode

```json
{
    "workbench.colorTheme": "Quiet Light",
    "[json]": {
    
        "editor.quickSuggestions": {
            "strings": true
        },
        "editor.suggest.insertMode": "replace"
    }
}
```

#### 常用插件

1. chinese：汉化插件
2. open in browse：页面在浏览器打开插件
3. live sever：在浏览器中以本地服务方式打开，代码改变自动重载
4. auto rename tag：自动修改标签名
5. easy less：编译less插件

### Less

#### 混合

1. 输出混合

   ```less
   .one{
       //不加 （）则会输出
   }
   .two{
       .one()
   }
   ```

2. 不输出混合

   ```less
   .one(){
       //加上（）则不会输出
   }
   .two{
       .one()
   }
   ```

3. 带参混合

   ```less
   .one(@val,@val2)
   {
       //类似于变量声明
   }
   ```

4. 带参有默认值混合

   ```less
   .one(@val,@val2:默认值)
   {
       //有默认值的形参尽量放后面，
   }
   .two(@val:默认值,@val2)
   {
       //有默认值的形参放前面，则在 传参时需要指明参数名
   }
   .test{
       .two(@val:修改默认值,@val2:赋值)
   }
   ```

5. @arguments 混合

   ```less
   .one(@val,@val1:solid,@val2:red)
   {
       border:@arguments//arguments代表所有形参，并按顺序输入
   }
   .test{
       .one(1px)
   }
   ```

#### 嵌套 

& 符号表示父选择器，作用就是语法拼接

```less
.one{
    border:1px solid red;
    &:hover{
        color:red;
    }
}
```

编译后：

```css
.one:hover{
     color:red;
}
```

#### 特殊的变量值

```less
//变量中出现特殊的符号 如：、@，造成编译混淆，无法成功编译，则把值写在 ~"" 里面
@min768: ~"min-width:768px";
```

### jQuery

#### jQuery版本

```
1.x.x的版本是可以 支持 IE6~IE8的
2.x.x到3.x.x 的版本，不在兼容IE8以及以下浏览器
```

#### CDN

```js
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
```

#### jQuery与Javascript互转

```js
//jQuery转JavaScript
$[0]
//Javascript 转 jQuery
$(div)
```

#### jQuery文档就绪事件

```js
$(document).ready(function(){
    //相当于DOMContentLoaded 事件一样，等页面元素加载完毕后触发
})
//简写
$(function(){
    
})
```

```js
onload事件：等页面所有资源 加载完毕才触发（包括图片，视频）
```

