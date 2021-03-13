# HTML移动端

### 视口

1. 布局视口
2. 视觉视口
3. 理想视口

#### meta视口标签

```html
<meta name="viewport" content= "width= device-width, user-scalable=no,
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

| 属性          | 解释说明                                             |
| ------------- | ---------------------------------------------------- |
| width         | 宽度设置的是viewport宽度，可以设置device-width特殊值 |
| initial-scale | 初始缩放比,大于0的数字                               |
| maximum-scale | 最大缩放比，大于0的数字                              |
| minimum-scale | 最小缩放比,大于0的数字                               |
| user-scalable | 用户是否可以缩放页面，yes或no ( 1或0 )               |

#### 物理像素与物理像素比

物理像素就是我们说的分辨率

物理像素点指的是屏幕显示的最小颗粒,是物理真实存在的。这是厂商在出厂时就设置好了,比如苹果6\7\8是750* 1334
我们开发时候的1px不是一定等于1个物理像 素的
PC端页面, 1个px等于1个物理像素的,但是移动端就不尽相同
-个px的能显示的物理像素点的个数,称为物理像素比或屏幕像素比

### flex布局

##### flex(弹性盒、伸缩盒)

1. 是CSS中的又一种布局手段，它主要用来代替浮动来完成页面的布局
2. flex可以使元素具有弹性，让元素可以跟随页面的大小的改变而改变

##### 弹性容器
要使用弹性盒，必须先将一个元素 设置为弹性容器
我们通过display 来设置弹性容器

1. display:flex设 置为块级弹性容器
2. display:inline-flex设置为行内的弹性容器

##### 弹性元素

1. 弹性容器的子元素是弹性元素（弹性项）
2. 一个元素可以同时是弹性容器和弹性元素

##### 常用

flex-direction：用来指定容器中弹性元素的排列方式

- 可选值：
  - row：默认值，水平从左向右排列
  - row-reverse：反向水平排列
  - column：纵向排列（自上向下）
  - column-reverse：反向纵向排列

flex-grow：指定弹性元素的伸展的系数

- 当父元素有多余的空间时，子元素自如伸展

flex-shrink：指定弹性元素的收缩系数

- flex-shrink：0；表示不会收缩了

flex-wrap：设置弹性元素是否在容器中自动换行

- nowrap：默认值，不会自动换行
- wrap：元素沿着辅轴方向自动换行

flex-flow：wrap和direction的简写

- flex-flow：row wrap;

justify-content：分配主轴上的空白空间

- 可选值
  - flex-start：元素沿着主轴起边排列
  - flex-end：元素沿着主轴终边排列
  - center：元素居中排列
  - space-around：空白分布到元素两侧