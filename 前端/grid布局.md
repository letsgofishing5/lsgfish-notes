## 教程地址

https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html

### grid基础用法

grid基础语法同flex基本一致

```css
div{
    display:grid;//块级表达
    display:inline-grid;//行内表达
}
```

grid将容器变成一个网格，网格里有行列之分，并且行列的单位可以是px，也可以是百分比。

而列，还可以用 fr （fraction）做单位，

**行**

```css
div{
    display:grid;
    grid-template-rows:100px 100px 100px;//表示将容器分为三行，高度为100px 100px 和 100px
    grid-template-rows: repeat(3,100px);//功能同上，是简写
}
```

**列**

```css
div{
    display:grid;
    grid-template-columns:100px 100px 100px;//功能同：行
    grid-template-columns: repeat(auto-fill,100px);//自动填充，每列100px
    grid-template-columns: 1fr 1fr 2fr;//分三列，第一列宽度占容器四分之一，第二列也是四分之一，第三列是四分之二
}
```

**行列间隔**

```css
div{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(3,100px);
    gap:10px 20px;//行间隔10px，列间隔20px
    //row-gap,column-gap
}
```

### 内容元素布局

#### 网格内元素布局

**justify-items 与 align-items**

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

这两个属性的写法完全相同，都可以取下面这些值。

> - start：对齐单元格的起始边缘。
> - end：对齐单元格的结束边缘。
> - center：单元格内部居中。
> - stretch：拉伸，占满单元格的整个宽度（默认值）。

**place-items**

`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式。

```css
place-items: <align-items> <justify-items>;
```

**以上是对网格内的元素进行布局**

#### 网格位置布局 

**justify-content 属性， align-content 属性， place-content 属性**

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly; 
  place-content: <align-content> <justify-content>
}
```

#### 项目属性

