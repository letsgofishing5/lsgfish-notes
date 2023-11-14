## 开始

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



## API学习

#### 代码片段

```js

async function createModel(url, height, heading, pitch, roll) {
  height = Cesium.defaultValue(height, 0.0);//高度
  heading = Cesium.defaultValue(heading, 0.0);//摇头，左右摇摆
  pitch = Cesium.defaultValue(pitch, 0.0);//抬头低头
  roll = Cesium.defaultValue(roll, 0.0);//绕着自身旋转，初始角度，相对地面，始终朝东
  const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
  //fromDegrees：从经纬度构建坐标
  const origin = Cesium.Cartesian3.fromDegrees(
    -123.0744619,//经度，正：东经，负：西经
    44.0503706,//纬度，正：北纬，负：南纬
    height
  );
  //控制模型放在地球山的位置，旋转姿态，是否缩放
  //headingPitchRollToFixedFrame：欧拉角，三个角度
  const modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(
    origin,
    hpr
  );

  scene.primitives.removeAll(); // Remove previous model
  try {
    model = scene.primitives.add(
      await Cesium.Model.fromGltfAsync({
        url: url,
        modelMatrix: modelMatrix,
        minimumPixelSize: 128,//模型在屏幕上最小的像素
      })
    );

    model.readyEvent.addEventListener(() => {
      model.color = Cesium.Color.fromAlpha(
        getColor(viewModel.color),
        Number(viewModel.alpha)
      );
      model.colorBlendMode = getColorBlendMode(
        viewModel.colorBlendMode
      );
      model.colorBlendAmount = Number(viewModel.colorBlendAmount);
      // Play and loop all animations at half-speed
      model.activeAnimations.addAll({
        multiplier: 0.5,
        loop: Cesium.ModelAnimationLoop.REPEAT,
      });

      const camera = viewer.camera;

      // Zoom to model
      const controller = scene.screenSpaceCameraController;
      const r =
        2.0 *
        Math.max(model.boundingSphere.radius, camera.frustum.near);
      controller.minimumZoomDistance = r * 0.5;

      const center = model.boundingSphere.center;
      const heading = Cesium.Math.toRadians(230.0);
      const pitch = Cesium.Math.toRadians(-20.0);
      camera.lookAt(
        center,
        new Cesium.HeadingPitchRange(heading, pitch, r * 2.0)
      );
    });
  } catch (error) {
    window.alert(error);
  }
}
```

