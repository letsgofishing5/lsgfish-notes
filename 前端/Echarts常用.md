### 饼图

### 坐标轴

```json
xAxis: {
    data: ['消防烟感', '摄像机', '环境烟感', '路灯', '地磁'],
    axisLine: {//坐标轴轴线相关设置
        show: false //隐藏X轴轴线（x轴单轴线）
    },
    axisTick: {//坐标轴刻度相关设置
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



#### y轴

##### 坐标轴字体颜色

```js
const yAxis = {
    type: 'value',
    axisLine: {
        lineStyle:{
            color:"#fff",//设置字体颜色为白色
        },
        show: false,//隐藏Y轴刻度线
    }
},
```

#### x轴

