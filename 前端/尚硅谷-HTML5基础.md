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

#### 什么是布尔属性，什么是非布尔属性

property的属性值为布尔类型的我们统称为布尔值属性
property的属性值为非布尔类型的我们统称为非布尔值属性

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