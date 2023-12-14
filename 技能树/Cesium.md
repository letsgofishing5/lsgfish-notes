## 代办

1. 完善自己的学习文档

## 扩展知识

[GIS格式和地理空间文件扩展名的汇总 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkyODE5OTA4Nw==&mid=2247484452&idx=1&sn=b310c68ff59c33f61f5a667fff75c9b4&chksm=c21d3ce4f56ab5f24d1951823646b9202b2579a6e721035f6e02f5230a884046070c36b08827&mpshare=1&scene=1&srcid=1211DGSkU9X7VEGyukQRKqMa&sharer_shareinfo=bf8f9cf630d4f946b321262a92cdbd76&sharer_shareinfo_first=bf8f9cf630d4f946b321262a92cdbd76&from=industrynews&version=4.1.13.6002&platform=win#rd)

## 开始

### 本地安装Github的仓库

1. 下载Github仓库

   ```sh
   git clone https://github.com/CesiumGS/cesium.git
   ```

   编译github仓库的代码，或者使用官方[在线案例](https://sandcastle.cesium.com/)、[文档](https://cesium.com/learn/cesiumjs/ref-doc/)等信息。

   - 编译下载下来的GitHub仓库代码

     ```bash
     # 先初始化 git
     git init
     # 安装依赖
     npm install
     # 编译源码
     npm run build
     # 启动本地服务
     npm start
     ```

## 入门核心概念

### Viewer

在Cesium中`Viewer`是一切的开端，通过`new Cesium.Viewer(container, options)`来创建一个`Viewer`对象，可以把该对象理解为三维虚拟地球，在`Viewer`对象上的所有操作，可以看作是对三维虚拟地球的操作。

日常Cesium开发中，几乎都是围绕着这个对象展开的。

#### Viewer属性

- camera：相机属性，主要用于控制视角；
- widgets（非属性）：`widgets`并非`Viewer`对象的属性，在这里特指所有控件：
  - `animation`：动画控件；
  - `baseLayerPicker`：影像图层选择器；
  - `fullscreenButton`：全屏按钮；
  - `geocoder`：查找位置；
  - `homeButton`：返回视角到初始位置；
  - `navigationHelpButton`：帮助按钮；
  - `timeline`：时间轴；
  - `vrButton `：VR按钮。
- `imageryLayers`：影像图层集合；
- `terrainProvider`：地形提供者；
- `entities`：实体集合；
- `dataSources`：矢量数据集合；
- `Event`（非属性）：`Event`并非`Viewer`对象的属性，在这里特指所有事件：
  - `screenSpaceEventHandler`：屏幕操作事件；
  - `selectedEntityChanged`：选取实体事件；
  - `trackedEntityChanged`：追踪实体事件。
- `scene`：场景，`scene`是`Viewer`对象的属性，但它也是Cesium中的一个关键的对象，用于添加图形（`primitive`）、添加场景特效和添加场景事件，`scene`对象将在下一节中介绍。

### Entity

### DataSource

```ts
const viewer = new Cesium.Viewer("#cesiumContainer")
// 添加自定义 dataSource，进行数据分组管理
const dataSource = new Cesium.CustomDataSource("dataSourceName")
viewer?.dataSources.add(dataSource)
dataSource.entities.add({
    // 添加一个实体
})
// 移除由dataSource添加的所有实体
dataSource.entities.removeAll()
```



### Color

```js
Cesium.Color.RED//系统自带的一些枚举颜色值
new Cesium.Color(1.0,1.0,1.0,1.0)// rgba
Cesium.Color.fromBytes(255,255,255,255)
Cesium.Color.fromCartesian4(new Cesium.Cartesian4(1.0,1.0,1.0,1.0))
Cesium.Color.fromCssColorString("#FF0000FF").withAplha(0.5)//withAlpha 是用来设置 透明程度的
```

### ScreenSpaceEventHandler

### SampledPositionProperty

### Clock

![image-20231114144102015](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20231114144102015.png)

### JulianDate

```
一种天文时间单位
```



### Camera

### CallbackProperty

```ts
/**
 * 用于动态计算属性值的一种机制。它允许你通过回调函数来实时计算或更新属性的值，以便在场景中实现动态效果。这个回调对象的回调函数是在每一帧渲染时执行的，以确保  属性值的实时更新。
 * @param callback - 回调函数在场景的渲染循环中的每一帧都会被调用。这个回调函数接受一个时间参数，表示当前的时间。在这个回调函数中，你可以根据时间或其他条件计算新的属性值
 * @param isConstant - 表示是否在每一帧都强制更新。如果设置为true，即使属性值没有变化，回调函数也会被调用。这在某些情况下可能会导致性能问题，因此要谨慎使用。
 */
CallbackProperty.Constructor:(callback:(time: JulianDate, result?: any) => any,isConstant:boolean)
```

## 常用属性

1. **material：**材质，可以填充颜色
2. **eyeOffset：**
3. **minimumPixelSize：**用于控制实体（Entity）在地球上显示时的最小像素大小的属性。这个属性用于在实体远离相机时防止其显示得太小而难以看到。这个属性通常用于在用户缩放或移动地球时，确保远离相机的实体仍然是可见的，避免它们变得过小而难以观察。例如，如果你有一个表示飞机的实体，你可能希望设置一个合适的 `minimumPixelSize`，以确保飞机在地球上的显示尺寸不会因为距离相机太远而变得过小。
4. **orientation：**指定实体（Entity）的方向的属性。具体来说，它表示实体的方向，通常用于指定实体的朝向或旋转。`orientation` 的含义是实体相对于参考坐标系的旋转。

## 事件

### 左击事件

```ts
const viewer:Cesium.Viewer = new Cesium.Viewer("#cesiumContainer")
let screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
screenSpaceEventHandler.setInputAction(leftClick, Cesium.ScreenSpaceEventType.LEFT_CLICK)
let movePosition: Cesium.Cartesian3 | undefined
function leftClick(event: Cesium.ScreenSpaceEventHandler.PositionedEvent) {
    const clickPosition = getPosition(viewer, event.position)
    if (!clickPosition) return
    // 绘制一个点
    drawPoint(viewer!, clickPosition)
    // 绘制线，线的两端默认为同一个点
    const moveFunc = drawLine(viewer!, clickPosition)

    // 开始监听当前鼠标移动事件，只要鼠标在球上，就可以获取坐标，并且动态更新另外一个坐标点
    screenSpaceEventHandler.setInputAction(moveCallback, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    function moveCallback(moveEvent: Cesium.ScreenSpaceEventHandler.MotionEvent) {
        movePosition = getPosition(viewer!, moveEvent.endPosition)
        if (!movePosition) return
        moveFunc(movePosition)
    }
    // 双击事件，取消线段绘制
    screenSpaceEventHandler.setInputAction(leftDoubleClick, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
    function leftDoubleClick() {
        screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    }
}
/**
 * 获取在地球上的位置，如果当前鼠标位置不在地球上，则返回undefined
 * @param event 
 * @returns 
 */
function getPosition(viewer: Cesium.Viewer, position: Cesium.Cartesian2) {
    // 拾取一条射线
    const ray = viewer.camera.getPickRay(position)
    if (!ray) return
    const p3 = viewer.scene.globe.pick(ray, viewer.scene)
    // 如果射线在地球上拾取不到，则返回 
    return p3
}
```

### 鼠标移动事件

```js
// 屏幕事件处理器
const screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
// 设置鼠标移动事件监听
screenSpaceEventHandler.setInputAction(moveEvent, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
function moveEvent(movement) {
    // 拾取到的对象,包含对象的id与primitive
    var pickedObject = viewer.scene.pick(movement.endPosition)
    if (Cesium.defined(pickedObject)) {
      // 获取临时拾取的实体
      const tempEntity = dataSource.entities.getById(pickedObject.id._id)
      // 实体是否存在
      if (tempEntity) {
        // 设置实体的点的像素点放大
        tempEntity.point.pixelSize = 10
      }
    } 
}
```



## 坐标转换

1. WGS84经纬度坐标； 系统中没有具体的对象。 

2. WGS84弧度坐标（Cartographic）；

   ```javascript
    对象创建： new Cesium.Cartographic(lon,lat,alt); 
    du = radus/pi*180;
    cos sin tan  
    lon：经度，lat：维度，alt：海拔 
   ```

   

3. 笛卡尔空间直角坐标系（Cartesian3）；

   ```javascript
    对象创建： new Cesium.Cartesian3(x,y,z); 
    x：x轴坐标，
    y：y轴坐标，
    z：z轴坐标
   ```

   

4. 平面坐标系（Cartesian2）；

   ```javascript
    对象创建： new Cesium.Cartesian2(x,y); 
    {x:45645,y:588,z:5855}
   ```

   - 弧度经纬度转换

     ```javascript
      弧度转经纬度 var degrees = Cesium.Math.toDegrees(radians); 
      经纬度转弧度 var radians= Cesium.Math.toRadiancs(degrees); 
     ```

     

   - WGS84坐标构建 

     ```javascript
     由弧度创建 var cartogrographic = new Cesium.Cartographic(lonradians,latradians,alt); 
     静态函数 var cartogrographic =Cesium.Cartogrophic.fromRadians(lonradians,latradians,alt); 
     var cartogrographic =Cesium.Cartogrophic.fromDegrees(londegree,latdegree,alt); 
     ```

     

   - WGS84弧度坐标与笛卡尔空间直角坐标系转换 

     ```javascript
     var cartesian3 = Cesium.Cartesian3.fromDegrees(londegree,latdegree,alt); 
     var cartesian3s = Cesium.Cartesian3.fromDegreesArray([108,39,119,38]); 
     没有高度 var cartesian3s = Cesium.Cartesian3.fromDegreesArrayHeights([108,39,1000,119,38,200]);
     有高度 var cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian3);
     var cartographics = Cesium.Ellipsoid.WGS84.cartesianArrayToCartographicArray([cartesian1,cartesian2,cartesian3]);
     ```

     

   - 世界坐标转屏幕坐标

     ```javascript
      var cartesian2= Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene,cartesian3) 
      var position = viewer.scene.pickPosition(movement.position);  
      var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
      handler.setInputAction(function (movement) {    
          var ray = this.viewer.camera.getPickRay(movement.position);
              if (!ray) return null; 
              var position = this.viewer.scene.globe.pick(ray, this.viewer.scene);    
              console.log(movement.position);    
              console.log(position);   
      },Cesium.ScreenSpaceEventType.LEFT_CLICK);
     ```

     

## 常见默认效果

#### 关闭鼠标双击entity时，摄像机移动效果

```javascript
const viewer = new Cesium.Viewer() 
viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
  Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
)
```

#### 开启高程遮挡

```ts
viewer!.scene.globe.depthTestAgainstTerrain = true
```

#### 开启抗锯齿

```ts
viewer!.scene.postProcessStages.fxaa.enabled = true;
```



## 场景案例

### 移动polygon无闪烁

```ts
  /**
   * 创建四分之一圆的点集合
   * 数学解释
   * 圆的周长公式：C = 2Πr = Πd; r是半径，d是直径
   * 一个圆是 360°
   * 弧：是圆上任意两点之间的部分，叫做弧
   * 圆心角是以圆心为顶点，射出去的两条线之间的夹角叫圆心角
   * 圆周角是顶点在圆上，射出去的两条线之间的夹角叫做圆周角
   * 弧的公式：l = 圆心角n * 2Πr / 360° = nΠr/180°
   * sin：正弦，直角三角形对边比斜边
   * cos：余弦，直角三角形邻边比斜边
   * @param radius 半径 米
   * @param startAngle 开始角度
   * @returns
   */
 function getPoints(radius, startAngle) {
    const points: Array<any> = []
    radius = radius / 100
    const pointNum = 20
    const endAngle = startAngle + 90
    let sin, cos, x, y, angle
    for (let i = 0; i <= pointNum; i++) {
      angle = startAngle + ((endAngle - startAngle) * i) / pointNum
      sin = Math.sin((angle * Math.PI) / 180)
      cos = Math.cos((angle * Math.PI) / 180)
      x = this.lon + radius * sin
      y = this.lat + radius * cos
      points.push([x, y])
    }
    return points
  }
//生成风圈坐标集合
const positions = [10,20,15,20].forEach((item,idx)=>{
    //idx*90 代表每次加90°
    return getPoints(item,idx*90)
}).flat()
//创建风圈
const entity = this.dataSource.entities.add({
  polygon: {
    hierarchy: positions,
    material: this.material,
    height: 0.0,
    fill: true,
    outline: true,
    outlineColor: this.outlineColor || Cesium.Color.BLACK,
    outlineWidth: 1
  }
})
 /**
   * 移动风圈函数
   * @param lon 
   * @param lat 
   * @param radius 半径，四个半径值 [10,20,10,20]
   */
function move(lon:number, lat: number, radius: Array<string | number>) {
    if (entity && entity.polygon) {
      entity.polygon.hierarchy = new Cesium.CallbackProperty(() => {
        return new Cesium.PolygonHierarchy(positions)
      }, false)
    }
  }
}
```

### 将Cartesian3坐标转换成经纬度

```ts
/**
 * 将Cartesian3坐标转换成经纬度
 * @param cartesian 
 * @returns 
 */
function Cartesian3ToLLH(cartesian: Cesium.Cartesian3) {
    const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
    const lon = Cesium.Math.toDegrees(cartographic.longitude)
    const lat = Cesium.Math.toDegrees(cartographic.latitude)
    return [lon, lat]
}
```

### 判断当前鼠标是否在地球上

```ts
/**
 * 获取在地球上的位置，如果当前鼠标位置不在地球上，则返回undefined
 * @param viewer 
 * @param position 
 * @returns 
 */
function getPosition(viewer: Cesium.Viewer, position: Cesium.Cartesian2) {
    // 拾取一条射线
    const ray = viewer.camera.getPickRay(position)
    if (!ray) return
    const p3 = viewer.scene.globe.pick(ray, viewer.scene)
    // 如果射线在地球上拾取不到，则返回 
    return p3
}
```

### 图层操作

[加载影像图层](https://www.xjx100.cn/news/308206.html?action=onClick)

#### 默认加载图层

```ts
let viewer = new Cesium.Viewer('cesiumContainer', {
    // 初始化时便提供一个黑暗图层
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
      Cesium.IonImageryProvider.fromAssetId(3812, {}),
      {}
    )
})
```

#### 从图层集合中获取图层

```ts
// 获取图层集合，是一个集合
const imageryLayers = viewer.imageryLayers
// 获取初始化时添加的图层
const nightLayer = imageryLayers.get(0)
```

#### 添加图层

```ts
// 获取图层集合，是一个集合
const imageryLayers = viewer.imageryLayers
//构建图层对象
const imageryLayer = Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3812));
//添加图层
imageryLayers.add(imageryLayer)
```



#### 移除图层

```ts
// 移除这个图层对象，变量与添加图层实例 同
imageryLayers.remove(imageryLayer)
```



#### 构建平铺图像

```ts
//构建图层对象
const imageryLayer = Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3812));
//图层集合中添加图层对象
viewer.imageryLayers.add(imageryLayer);
```

### 晨昏线

```ts
let viewer = new Cesium.Viewer('cesiumContainer', {
    // 初始化时便提供一个黑暗图层
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
      Cesium.IonImageryProvider.fromAssetId(3812, {}),
      {}
    )
})

viewer.clock.multiplier = 4000
// 获取图层集合，是一个集合
const imageryLayers = viewer.imageryLayers
// 获取初始化时添加的黑暗图层
const nightLayer = imageryLayers.get(0)
// 创建一个图层对象
const dayLayer = Cesium.ImageryLayer.fromProviderAsync(
	Cesium.IonImageryProvider.fromAssetId(3845, {}),{}
)
// 往图层集合中添加图层对象
imageryLayers.add(dayLayer)
// 将图层对象放置最底下
imageryLayers.lowerToBottom(dayLayer)

function updateLighting(dynamicLighting: any) {
    dayLayer.show = dynamicLighting
    // 开启地球照明模式
    viewer.scene.globe.enableLighting = dynamicLighting
    // 开启动画
    viewer.clock.shouldAnimate = dynamicLighting
    // 当白天时，ngithLayer图层透明度为0，不显示，黑夜时为1
    nightLayer.dayAlpha = dynamicLighting ? 0.0 : 1.0
}
updateLighting(true)
```

