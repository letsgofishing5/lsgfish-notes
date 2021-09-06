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

实际上，<canvas>标签只有两个属性—— width和height。这些都是可选的。当没有设置宽度和高度的时候，canvas会初始化宽度为300像素和高度为150像素。

渲染上下文
```text
<canvas>元素只是创造了一个固定大小的画布，要想在它上面去绘制内容，我们需要找到它的渲染上下文
<canvas>元素有一个叫做getContext() 的方法，这个方法是用来获得渲染上下文和它的绘画功能。getContext()只有一个参数，下文的格式
获取方式
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
支持检查性
    var canvas = document.getElementById('canvas')
    if(canvas.getContext){
     	var ctx = canvas.getContext('2d')
	}
```



```js
var testNode = document.querySelector("canvas")
if(testNode.getContext){//判断是否有画笔
    var ctx = testNode.getContext('2d')
}
```

#### 常用画图api

[`fillRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect)

绘制一个填充的矩形

[`strokeRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeRect)

绘制一个矩形的边框

[`clearRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)

```
beginPath()
```

新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

```
moveTo(x,y)
```

将笔触移动到指定的坐标x以及y上。

```js
lineTo(x, y)
```

绘制一条从当前位置到指定x以及y位置的直线。

```
closePath()
```

闭合路径之后图形绘制命令又重新指向到上下文中。

```
stroke()
```

通过线条来绘制图形轮廓。

```
fill()
```

通过填充路径的内容区域生成实心的图形。

#### 圆弧

绘制圆弧或者圆，我们使用`arc()`方法。当然可以使用`arcTo()`，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

- [`arc(x, y, radius, startAngle, endAngle, anticlockwise)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arc)

  画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。

- [`arcTo(x1, y1, x2, y2, radius)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arcTo)

  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

这里详细介绍一下arc方法，该方法有六个参数：`x,y`为绘制圆弧所在圆上的圆心坐标。`radius`为半径。`startAngle`以及`endAngle`参数用弧度定义了开始以及结束的弧度。这些都是以x轴为基准。参数`anticlockwise`为一个布尔值。为true时，是逆时针方向，否则顺时针方向。

**注意：`arc()`函数中表示角的单位是弧度，不是角度。角度与弧度的js表达式:**

**弧度=(Math.PI/180)\*角度。**

#### 总结1

除了矩形时填充的，不需要moveTo()，其他都需要moveTo()
