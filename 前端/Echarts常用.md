### 饼图

### 坐标轴

```json
xAxis: {
    data: ['消防烟感', '摄像机', '环境烟感', '路灯', '地磁'],
    axisLine: {//坐标轴 轴线 相关设置
        show: false //隐藏X轴轴线（x轴单轴线）
    },
    axisTick: {//坐标轴 刻度 相关设置
        show: false //隐藏X轴坐标轴刻度
    },
    splitLine: {//坐标轴在 grid 区域中的分隔线。
        show: true,
        lineStyle: {
            color: "rgba(77, 128, 254, 0.2)",
            width: 2
        }
    },
    axisLabel: {
        show: true,
        margin: 14,
        fontSize: 16,
        textStyle: {
            color: "#E4FF00"
        }
    }
},
```

### 区域缩放

```js
dataZoom: [{
    type: 'slider',
    backgroundColor: "#030D25",
    show: true,
    left: '8%',
    bottom: 5,
    start: 0,
    end: 10, 
    fillerColor: "#2C59BC",
    showDetail: false,
    height: 18,//滚动条高度
}],
```

### 柱状图渐变色

![image-20221026195815824](C:\Users\lsgfish\AppData\Roaming\Typora\typora-user-images\image-20221026195815824.png)

```js
series: [{
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: "red" // 0% 处的颜色
            }, {
                offset: 0.6,
                color: "blue" // 60% 处的颜色
            }, {
                offset: 1,
                color: "yellow" // 100% 处的颜色
            }], false)
        }
    }
}]
```

### tooltip动态加载数据

```js
tooltip: {
    trigger: 'item',
        formatter: function (params, ticket, callback) {
            let html = `
                                <span style='display:block;width:10px;height:10px;border-radius:50%;margin-bottom:10px;padding:5px;'>${params.seriesName}</span>
                                <span style='background:${params.color};display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:10px'></span>${params.name}: ${params.value}
                            `
            setTimeout(function () {
                // 仅为了模拟异步回调  
                callback(ticket, html);
            }, 800)
            return html;
        }
},
```





## 3D

### 柱状图示例

[- category-work,grid直角坐标,legend,series-bar柱状图,series-pictorialBar,toolbox工具栏,tooltip提示框 - makeapie echarts图表可视化案例](https://www.makeapie.cn/echarts_content/xMQLI9VAFHa.html)

### 饼图示例

[3d饼图 - category-work,grid3D,series-pie饼图,series-surface,tooltip提示框 - makeapie echarts图表可视化案例](https://www.makeapie.cn/echarts_content/xVbXSrh979.html)





## 社区

https://www.isqqw.com/homepage

