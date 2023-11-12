## 代办

1. 完善自己的学习文档

## 开始

### 本地安装Github的仓库

1. 下载Github仓库

   ```sh
   git clone https://github.com/CesiumGS/cesium.git
   ```

2. 编译项目

   ```sh
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

### Entity

### DataSource





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

