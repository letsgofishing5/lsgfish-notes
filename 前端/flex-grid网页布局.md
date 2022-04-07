## flex布局

```css
.container{
    display:flex; 			//设置flex布局
    justify-content:center;	//水平居中
    align-items:center;		//项目垂直居中
}
```

### 容器

- flex-wrap：设置flex布局是否可以换行
- flex-direction：设置flex布局的方向
- flex-flow：是flex-direction和flex-wrap的组合简写形式
- justify-content：设置水平位置
- align-items：设置项目的垂直位置
- align-content：当flex布局有多条主轴线时，设置轴线的上下对齐方式

### 项目

- order：数值越小，元素排列顺序越靠后
- flex-grow：默认为0，有剩余空间也不放大
- flex-shrink：默认为1，即空间不足将缩小项目
- flex-basis：给项目元素设置宽度
- flex：是flex-grow，flex-shrink和flex-basis的组合简写
- align-self：设置项目的对齐方式，可以覆盖align-items属性

## grid布局

### 实现grid

```css
.father{
    display:grid;								//开启网格布局
    grid-template-rows:200px 200px;				//设置两行，每行200px
    grid-template-columns:300px 300px 300px;	//设置三列，每列300px
    row-gap:10px;									//设置行间距
    column-gap:12px;								//设置列间距
}
```

### grid对齐方式

#### 单元格整体对齐

```css
.father{
    display:grid;
    grid-template-rows:200px 200px 200px;
    /* grid-template-rows: 1fr 1fr 2fr; */ //fr是比例的意思
    grid-template-columns:200px 200px 200px;
    row-gap:20px;
    column-gap:20px;
    justify-items:center;//设置水平居中
    align-items:center;//设置垂直居中
}
```

#### 单元格独立对齐方式

```css
.item{
    justify-self:center;
    align-self:center;
}
```

