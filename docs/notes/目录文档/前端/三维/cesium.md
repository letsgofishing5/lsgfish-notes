# Cesium 日常开发笔记

## 资源引用

::: danger 资源推荐
高质量教学资源推荐
:::

1. [Cesium 中文文档](http://cesium.cnzyr.com/pages/GeographicTilingScheme.html?classFilter=GeographicTilingScheme)
2. [Cesium 官方文档](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html)
3. [GeoJson.IO 地图数据工具](https://geojson.io/)



## 代码片段

::: danger 代码片段
日常功能代码片段
:::

#### 飞行到目标位置

1. viewer.flyTo

   ```js
   const entity = viewer.entities.add({
       polygon: {
           hierarchy: new Cesium.PolygonHierarchy(new Cesium.Cartesian3.fromDegreesArray(cartesian3s)),
           outline: true,
           outlineColor: Cesium.Color.RED,
           outlineWidth: 2,
       }
   })
   //飞行到目标entity
   viewer.flyTo(entity, {
       duration: 3,
   })
   ```

   

2. camera.flyTo

   ```js
   //飞行到目标点位
   viewer.camera.flyTo({
       destination: Cesium.Cartesian3.fromDegrees(Number(lon), Number(lat), Number(height)),
       //飞行动画效果
       easingFunction: Cesium.EasingFunction.QUAD_OUT,
   })
   ```

   



#### 闪烁效果

1. 面闪烁

   ```js
   const coordinatesFlat = coordinates.flat(3)
   let fillMark = true
   let skep = 0.005
   let x = 1
   const entity = this.locationDataSource.entities.add({
       polygon: {
           hierarchy: new this.Cesium.PolygonHierarchy(new this.Cesium.Cartesian3.fromDegreesArray(coordinatesFlat)),
           outline: true,
           outlineColor: this.Cesium.Color.RED,
           outlineWidth: 2,
           material: new this.Cesium.ColorMaterialProperty(new this.Cesium.CallbackProperty(() => {
               if (fillMark) {
                   x -= skep;
                   if (x <= 0) {
                       fillMark = false;
                   }
               } else {
                   x += skep;
                   if (x >= 1) {
                       fillMark = true;
                   }
               }
               return this.Cesium.Color.fromCssColorString("#c12c1f").withAlpha(x);
           }, false))
       }
   })
   ```

   

2. 线闪烁

   ```js
   const coordinatesFlat = coordinates.flat(3)
   let fillMark = true
   let skep = 0.005
   let opacity = 1
   const entity = this.locationDataSource.entities.add({
       polyline: {
           positions: new Cesium.Cartesian3.fromDegreesArray(coordinatesFlat),
           width: 4,
           material: new Cesium.PolylineDashMaterialProperty({
               color: new Cesium.CallbackProperty(() => {
                   if (fillMark) {
                       opacity -= skep;
                       if (opacity <= 0) {
                           fillMark = false;
                       }
                   } else {
                       opacity += skep;
                       if (opacity >= 1) {
                           fillMark = true;
                       }
                   }
                   return Cesium.Color.fromCssColorString("#c12c1f").withAlpha(opacity);
               }, false),
               dashLength: 8.0
           })
       }
   })
   ```

   



#### 线段绘制

1. 虚线

   ```js
   const entity = this.locationDataSource.entities.add({
       polyline: {
           positions: new Cesium.Cartesian3.fromDegreesArray(coordinates),
           width: 4,
           material: new Cesium.PolylineDashMaterialProperty({
               color: Cesium.Color.fromCssColorString("#c12c1f"),
               dashLength: 8.0
           })
       }
   })
   ```

   



#### 坐标转换

1. cartesian3坐标转换屏幕坐标

   ```js
   const updateDomElementPosition = () => {
       //当变量为true，则销毁监听
       if (this.cancelEventListener) {
           this.viewer.scene.postRender.removeEventListener(updateDomElementPosition)
       } else {
           const scene = this.viewer.scene
           const position = MEarth.Cartesian3.fromDegrees(Number(this.lon), Number(this.lat), 0)
           const { x, y } = MEarth.SceneTransforms.wgs84ToWindowCoordinates(scene, position);
           console.log("屏幕坐标：",x,y)
       }
   }
   //监听回调
   this.viewer.scene.postRender.addEventListener(updateDomElementPosition)
   ```

   

#### 获取经纬度层级

另类的层级获取方式

https://zhuanlan.zhihu.com/p/401514896

```js
/**
 * 获取 zoom、level 的几种方法
 */
function getZoomLevel() {
    let h = viewer.camera.positionCartographic.height
    if (h <= 100) {return 19 }
     else if (h <= 300) {return 18 }
     else if (h <= 660) {return 17 }
     else if (h <= 1300) {return 16 }
     else if (h <= 2600) {return 15 }
     else if (h <= 6400) {return 14 }
     else if (h <= 13200) {return 13 }
     else if (h <= 26000) {return 12 }
     else if (h <= 67985) {return 11 }
     else if (h <= 139780) {return 10 }
     else if (h <= 250600) {return 9 }
     else if (h <= 380000) {return 8 }
     else if (h <= 640000) {return 7 }
     else if (h <= 1280000) {return 6 }
     else if (h <= 2600000) {return 5 }
     else if (h <= 6100000) {return 4 }
     else if (h <= 11900000) {return 3 }
     else {return 2 }
}

// https://blog.csdn.net/Tmraz/article/details/113501692
const getzoom = () => {
    var tilesToRender = viewer.scene.globe._surface._tilesToRender
    var level
    if (tilesToRender.length != 0) {
        level = tilesToRender[0].level
    }
    return level
}

// https://blog.csdn.net/qq_48203828/article/details/116999619
function heightToZoom() {
    const height = Math.ceil(viewer.camera.positionCartographic.height)
    const A = 40487.57
    const B = 0.00007096758
    const C = 91610.74
    const D = -40467.74
    return Math.round(D + (A - D) / (1 + Math.pow(height / C, B)))
}

viewer.camera.moveEnd.addEventListener(() => {
    console.log('getZoomLevel', getZoomLevel())
    console.log('heightToZoom', heightToZoom())
    console.log('getZoomLevel', getZoomLevel())
})
```

