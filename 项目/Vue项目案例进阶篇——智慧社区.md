# Vue项目案例进阶篇

### 文件预览

预览word，excel，pptx，pdf文件，使用微软的api，实现文件在线预览

```js
//微软的Office Web Viewer的路径接口
http://view.officeapps.live.com/op/view.aspx?src=
```

将自己的文件下载地址拼接在微软的这个地址后面

```js
 window.open('http://view.officeapps.live.com/op/view.aspx?src=' + mySelfFilePath, '_target');
```

