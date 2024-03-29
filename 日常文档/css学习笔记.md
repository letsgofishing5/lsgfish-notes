## background

### 渐变色边框实现

```css
div {
    width: 200px;
    height: 100px;
    border: solid 1px transparent;
    border-radius: 5px;
    background-image: linear-gradient(red, #fee),//解释1
        linear-gradient(to right, green, gold);
    background-origin: border-box;//解释2
    background-clip: content-box, border-box;//解释3
}
```

1. background-image可以拥有多个层级，在绘制时，图像以 z 方向堆叠的方式进行。最先指定的图像会在之后指定的图像 **上面** 绘制。因此指定的第一个图像 会出现在最上层，会遮盖住其他后声明的图层。
2. background-origin：表示从哪个区域的左上角开始定位，如果值是border-box，则从边框的左上角区域开始定位，会忽略内边距
3. background-clip：指定绘画区域
   1. `border-box`（默认值）：背景将绘制在元素的边框框（border box）内，包括边框区域。这意味着背景会覆盖元素的边框。
   2. `padding-box`：背景将绘制在元素的内边距框（padding box）内，不包括边框区域。这意味着背景会在边框内部绘制，不覆盖边框。
   3. `content-box`：背景将绘制在元素的内容框（content box）内，不包括边框和内边距。这意味着背景将被限制在内容框内部，不会涵盖任何边框或内边距。

### background简写属性

background的简写属性中，position在前，size在后，两者一起出现时使用 / 来分割

```css
div{
    background:url(image/url) no-repeat center/cover;
}
```





## flex布局与grid布局

