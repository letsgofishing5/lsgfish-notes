# cesium 代码片段

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

#### 放大缩小

正视角放大缩小，有动画效果

```ts
/**
 * 放大
 * @param rate 倍率范围 >0&&<1 则缩小，反之放大
 * @param duration 缩放时间 >0 单位秒默认0.5
 */
zoom(rate: number = 1, duration: number = .5) {
    let { latRadian, lonRadian, pitch, heading, height, direction, roll, position } = this._getCameraInfo()
    if (height < 1000 || height > 400000000) return
    height = height * Math.abs(rate)
    var newCameraPosition = window.MEarth.Cartesian3.fromRadians(lonRadian, latRadian, height);
    this._viewer.scene.camera.flyTo({
        destination: newCameraPosition,
        duration: this.smoothZoom ? duration : 0,
        orientation: {
            heading: window.MEarth.Math.toRadians(0),
            pitch: window.MEarth.Math.toRadians(-90),
            roll
        }
    });
}

```

跟随视角进行放大缩小

```ts
// 放大缩小
const { defined, Ray, IntersectionTests, Cartesian3, Cartographic, SceneMode } = window.MEarth

class ControlZoom {
    viewer: any
    relativeAmount: any
    isActive: any
    constructor(viewer) {
        this.viewer = viewer
        this.relativeAmount = 2
    }

    zoomIn() {
        this.relativeAmount = 2
        this.relativeAmount = 1 / this.relativeAmount
        this.zoom(this.relativeAmount)
    }

    zoomOut() {
        this.relativeAmount = 2
        this.zoom(this.relativeAmount)
    }

    zoom(relativeAmount) {
        this.isActive = true

        if (!defined(this.viewer)) return this.isActive = false

        var scene = this.viewer.scene
        var sscc = scene.screenSpaceCameraController

        if (!sscc.enableInputs || !sscc.enableZoom) {
            return
        }

        var camera = scene.camera
        var orientation

        switch (scene.mode) {
            case SceneMode.MORPHING:
                break
            case SceneMode.SCENE2D:
                camera.zoomIn(camera.positionCartographic.height * (1 - this.relativeAmount))
                break
            default:
                var focus

                if (defined(this.viewer.trackedEntity)) {
                    focus = new Cartesian3()
                } else {
                    focus = this.getCameraFocus(this.viewer, false, new Cartesian3())
                }

                if (!defined(focus)) {
                    // Camera direction is not pointing at the globe, so use the ellipsoid horizon point as
                    // the focal point.
                    var ray = new Ray(camera.worldToCameraCoordinatesPoint(scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)), camera.directionWC)
                    focus = IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid)

                    orientation = {
                        heading: camera.heading,
                        pitch: camera.pitch,
                        roll: camera.roll
                    }
                } else {
                    orientation = {
                        direction: camera.direction,
                        up: camera.up
                    }
                }

                var cartesian3Scratch = new Cartesian3()
                var direction = Cartesian3.subtract(camera.position, focus, cartesian3Scratch)
                var movementVector = Cartesian3.multiplyByScalar(direction, relativeAmount, direction)
                var endPosition = Cartesian3.add(focus, movementVector, focus)

                if (defined(this.viewer.trackedEntity) || scene.mode === SceneMode.COLUMBUS_VIEW) {
                    // sometimes flyTo does not work (jumps to wrong position) so just set the position without any animation
                    // do not use flyTo when tracking an entity because during animatiuon the position of the entity may change
                    camera.position = endPosition
                } else {
                    camera.flyTo({
                        destination: endPosition,
                        orientation: orientation,
                        duration: 0.5,
                        convert: false
                    })
                }
        }

        this.isActive = false
    }

    getCameraFocus(viewer = this.viewer, inWorldCoordinates, result) {
        var unprojectedScratch = new Cartographic()
        var rayScratch = new Ray()
        var scene = viewer.scene
        var camera = scene.camera

        if (scene.mode === SceneMode.MORPHING) {
            return undefined
        }

        if (!defined(result)) {
            result = new Cartesian3()
        }

        // TODO bug when tracking: if entity moves the current position should be used and not only the one when starting orbiting/rotating
        // TODO bug when tracking: reset should reset to default view of tracked entity

        if (defined(viewer.trackedEntity)) {
            result = viewer.trackedEntity.position.getValue(viewer.clock.currentTime, result)
        } else {
            rayScratch.origin = camera.positionWC
            rayScratch.direction = camera.directionWC
            result = scene.globe.pick(rayScratch, scene, result)
        }

        if (!defined(result)) {
            return undefined
        }

        if (scene.mode === SceneMode.SCENE2D || scene.mode === SceneMode.COLUMBUS_VIEW) {
            result = camera.worldToCameraCoordinatesPoint(result, result)

            if (inWorldCoordinates) {
                result = scene.globe.ellipsoid.cartographicToCartesian(scene.mapProjection.unproject(result, unprojectedScratch), result)
            }
        } else {
            if (!inWorldCoordinates) {
                result = camera.worldToCameraCoordinatesPoint(result, result)
            }
        }

        return result
    }
}

export default ControlZoom
```

