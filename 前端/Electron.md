## 安装

```npmrc
#在.npmrc文件中添加electron中国镜像：
ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/"
```

```bash
#初始化
npm init -y
#安装
npm i electron -D
#检验是否安装成功
npx electron -v
```

在`linux`控制台输入：./node_modules/.bin/electron

会打开`electron`的桌面

## 全局安装

```bash
npm i -g electron
```

## Hello Electron

1. 新建一个demo文件夹

2. 在文件夹中创建一个index.html、一个main.js

3. main.js中输入一下内容

   ```js
   const {app,BrowserWindow} = require('electron')
   app.on('ready',()=>{
       let wind = new BrowserWindow({
           width:'100%',
           height:'100%'
       })
       wind.loadFile('index.html')
       wind.on('closed',()=>{
           wind = null
       })
   })
   ```
   
4. 在控制台初始化项目：npm init -y

5. 启动项目(全局安装了electron)：electron .



## remote模块

### 渲染进程require报错

```js
webPreferences:{
    contextIsolation:false,
    nodeIntegration:true
}
```


### 渲染进程

```bash
#安装 @electron/remote
npm @electron/remote
```



```js
//主进程，在窗口启动时进行引入初始化，并启动
app.on("ready", () => {
  mainWind = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  require("@electron/remote/main").initialize();//引入初始化
  require("@electron/remote/main").enable(mainWind.webContents);//启动webContents
  mainWind.loadFile("index.html");
  mainWind.on("closed", () => {
    mainWind = null;
  });
});
//渲染进程中，引入
var { BrowserWindow } = require("@electron/remote");
```

## Menu

```js
const { Menu, BrowserWindow } = require("electron");
const template = [{label:'菜单选项',submenu:[{label:"子菜单选项"}]}]
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
```



## 打包应用程序

```bash
npm install --save-dev @electron-forge/cli
npx electron-forge import
npm run make
```



## electron-vue

```bash
vue create vue-electron #创建一个vue项目
cd vue-electron #进入项目
vue add electron-builder #添加Vue CLI Plugin Electron Builder
npm run electron:serve #运行程序
```

## Electron常用事件

1. 设置打开时全屏

   ```js
   const win = new BrowserWindow({
       
   })
   win.setFullScreen(true);
   ```

2. 打包成免安装版软件

   ```json
   在打包命令后面添加：--dir
   ```

   
