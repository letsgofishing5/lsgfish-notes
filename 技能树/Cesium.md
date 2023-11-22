## 代办

1. 完善自己的学习文档

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

### Camera



## 常用属性

1. **material：**
2. **eyeOffset：**
3. **minimumPixelSize：**用于控制实体（Entity）在地球上显示时的最小像素大小的属性。这个属性用于在实体远离相机时防止其显示得太小而难以看到。这个属性通常用于在用户缩放或移动地球时，确保远离相机的实体仍然是可见的，避免它们变得过小而难以观察。例如，如果你有一个表示飞机的实体，你可能希望设置一个合适的 `minimumPixelSize`，以确保飞机在地球上的显示尺寸不会因为距离相机太远而变得过小。
4. **orientation：**指定实体（Entity）的方向的属性。具体来说，它表示实体的方向，通常用于指定实体的朝向或旋转。`orientation` 的含义是实体相对于参考坐标系的旋转。

## API

#### CallbackProperty

```ts
/**
 * 用于动态计算属性值的一种机制。它允许你通过回调函数来实时计算或更新属性的值，以便在场景中实现动态效果。这个回调对象的回调函数是在每一帧渲染时执行的，以确保  属性值的实时更新。
 * @param callback - 回调函数在场景的渲染循环中的每一帧都会被调用。这个回调函数接受一个时间参数，表示当前的时间。在这个回调函数中，你可以根据时间或其他条件计算新的属性值
 * @param isConstant - 表示是否在每一帧都强制更新。如果设置为true，即使属性值没有变化，回调函数也会被调用。这在某些情况下可能会导致性能问题，因此要谨慎使用。
 */
CallbackProperty.Constructor:(callback:(time: JulianDate, result?: any) => any,isConstant:boolean)
```

##### 案例

- **基本介绍**

  在这个例子中，computeNewPosition 函数使用 time 计算新的位置值，并将结果存储在传入的 result 参数中。这样，就避免了在每一帧都创建新的 Cartesian3 对象，提高了性能。

  需要注意的是，如果不提供 result 参数，每次回调函数执行时都会创建一个新的对象来存储属性值。这可能会在性能方面产生一些开销，尤其是在频繁执行回调函数的情况下。因此，根据实际需求，你可以选择使用或不使用 result 参数。

- **疑问：如果我不执行这个 result = 的步骤，只将result当成参数传递到Cartesian3.fromDegrees()中，是否可以避免性能开销？**

  如果你不执行 result = 步骤，而是将 result 直接当成参数传递给 Cesium.Cartesian3.fromDegrees，那么每次调用这个函数都会创建一个新的 Cartesian3 对象，并将结果直接返回，而不是将结果存储在你提供的 result 对象中。

  在这种情况下，每次调用都会分配一个新的对象，可能导致一些性能开销，特别是在频繁调用的情况下。这是因为在 JavaScript 中，对象的创建和销毁可能会引入一些额外的开销，尤其是在循环或高性能要求的场景中。

  使用 result = Cesium.Cartesian3.fromDegrees(...) 的形式可以避免在每次调用时都创建新的对象，而是重复使用你提供的 result 对象。这样可以减少垃圾收集和内存管理的开销，对性能可能有一定的积极影响，尤其是在大规模或频繁调用的情况下。

  总的来说，使用 result 对象来存储计算结果可能是一种优化，具体是否会有明显的性能提升，取决于你的具体使用情境和性能需求。



```js
//创建 Cesium 地球实例
var viewer = new Cesium.Viewer('cesiumContainer');
//添加一个Entity
var entity = viewer.entities.add({
    //调用 CallbackProperty，动态计算属性值
    position: new Cesium.CallbackProperty(function(time, result) {
        // 在这里计算新的位置值，并将结果存储在result中
        computeNewPosition(time, result);
    }, false)
});

function computeNewPosition(time, result) {
    // 根据时间等因素计算新的位置
    // 将结果存储在传入的result参数中
    result = Cesium.Cartesian3.fromDegrees(-75.0 + Math.sin(time.secondsOfDay),
                                           40.0 + Math.cos(time.secondsOfDay),
                                           0.0,
                                           result);
}
```



## 坐标转换

1. WGS84经纬度坐标； 系统中没有具体的对象。 

2. WGS84弧度坐标（Cartographic）；

   ```
    对象创建： new Cesium.Cartographic(lon,lat,alt); 
    du = radus/pi*180;
    cos sin tan  
    lon：经度，lat：维度，alt：海拔 
   ```

   

3. 笛卡尔空间直角坐标系（Cartesian3）；

   ```
    对象创建： new Cesium.Cartesian3(x,y,z); 
    x：x轴坐标，
    y：y轴坐标，
    z：z轴坐标
   ```

   

4. 平面坐标系（Cartesian2）；

   ```
    对象创建： new Cesium.Cartesian2(x,y); 
    {x:45645,y:588,z:5855}
   ```

   - 弧度经纬度转换

     ```
      弧度转经纬度 var degrees = Cesium.Math.toDegrees(radians); 
      经纬度转弧度 var radians= Cesium.Math.toRadiancs(degrees); 
     ```

     

   - WGS84坐标构建 

     ```
     由弧度创建 var cartogrographic = new Cesium.Cartographic(lonradians,latradians,alt); 
     静态函数 var cartogrographic =Cesium.Cartogrophic.fromRadians(lonradians,latradians,alt); 
     var cartogrographic =Cesium.Cartogrophic.fromDegrees(londegree,latdegree,alt); 
     ```

     

   - WGS84弧度坐标与笛卡尔空间直角坐标系转换 

     ```
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

     
