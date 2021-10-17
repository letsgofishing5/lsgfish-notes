## 安装

```npmrc
#electron中国镜像：
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
   const electron = require('electron')
   const app = electron.app//分配一个进程，一个软件即一个进程
   let BrowserWindow = electron.BrowserWindow//开启一个软件窗口
   let mainWindow  =  null
   app.on("ready",()=>{
       mainWindow  = new BrowserWindow({//这个软件窗口的样式 与 功能设置
           width:800,
           height:800,
           webpreferences:{nodeIntegration:true}
       })
       mainWindow.loadFile('index.html')//这个窗口加载一个页面
       mainWindow.on('closed',()=>{//窗口关闭时释放这个窗口
           mainWindow = null
       })
   })
   ```

4. 在控制台初始化项目：npm init -y

5. 启动项目(全局安装了electron)：electron .



## remote模块

#### 渲染进程require报错

```js
webPreferences:{
    contextIsolation:false,
    nodeIntegration:true
}
```

