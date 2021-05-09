### attr与prop

在jQuery中，操作布尔值属性，使用prop，操作非布尔值属性，使用attr。

使用attr操作布尔值属性时，在prop没有被操作过前，attr可以同步prop，但是prop一旦操作过，则attr无法同步prop

#### nodetype属性

https://www.w3school.com.cn/jsref/prop_node_nodetype.asp

`nodeType `属性返回以数字值返回指定节点的节点类型。

如果节点是元素节点，则 `nodeType `属性将返回 1。

如果节点是属性节点，则 `nodeType `属性将返回 2。

和`nodetype`配套的还有`nodeName`和`nodeValue`

#### property

`property`是`JavaScript`的原生对象属性，每一个`attribute`都有一个`property`与之对应。

标签是`HTML`的概念，节点是`JavaScript`的概念

#### 浏览器支持

浏览器只认识`property`（节点）

用户操作的是`property`（节点）

#### 什么是attribute，什么是property

html标签的预定义和自定义属性我们统称为attribute
js原生对象的直接属性，我们统称为property

#### 对于attribute与property操作

```javascript
//对attribute操作
let input = document.querySelector("input")
input.setAttribute("属性名","属性值")
//对property操作
input.属性名
```



#### 什么是布尔属性，什么是非布尔属性

property的属性值为布尔类型的我们统称为布尔值属性
property的属性值为非布尔类型的我们统称为非布尔值s属性

#### attribute与property同步关系

在非布尔值情况下，

- `property`和`attribute`是数据同步的

布尔值属性时，

- 改变property不会改变attribute，
- 在没有动过`property`时，`attribute`会同步`property`，但是一旦动过`property`，`attribute`就不会同步`property`

## H5

与class对应的property，是className

### 实用功能

通过`classList`，一个类数组结构来操作`class`

#### classList常用

1. classList.toggle("切换class")；如果有则删除，没有则添加

#### 自定义属性值dataset

```html
<input type="text" data-id="123"/>
//自定义属性值可以通过 data-自定义属性名 来赋值，通过dataset来获取值
<script>
	let input = document.querySelector("input")
    console.log(input.dataset.id)
</script>
```

#### div内容可编辑

```html
<div contenteditable="true">//这里值只能设置为true
    
</div>
```

### H5

##### meta

```html
<meta charset="UTF-8">
表示通知浏览器使用UTF-8编码格式来解析
```

##### DOCTYPE

告诉浏览器以什么模式来渲染我，可以通过`document.compatMode`来查看当前渲染模式，返回值有两种，

1. `CSS1Compat`正常模式
2. `BackCompat`怪异模式

### canvas画布

canvas是H5 新增的元素，可用于通过使用JavaScript中的脚本来绘制图形。

使用canvas时，

- 标签要成对出现
- canvas有默认的高宽：300*150

