### Echarts基本布局

```js
option = {
    //设置线条颜色
    color:['pink','red'],
    title: {
      //对图形标题设置，位置，
    },
    tooltip: {
      //图表的提示框组件，触发方式
        trigger:'axis'
    },
    toolbox:{
        //工具箱组件，可以另存图片等功能
    },
    legend:{
        //类型详细信息
        data:['a','b']
    },
    grid:{
        //网格配置，控制线形图表位置，大小
        //是否显示刻度标签
        containLabel:true
    },
    xAxis: {
        
    },
    yAxis: {},
    series: [{
        type:'line'//决定了图标类型
    }],
};
```

