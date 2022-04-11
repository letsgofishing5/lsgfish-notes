## vscode

官方下载：https://code.visualstudio.com/download

### 插件

1. Chinese：汉化
2. Live Server：静态资源服务器
3. open in browser：用于静态资源打开浏览器
4. Vue Language Features(Volar)：用于vue3开发
5. wechat-snippet：微信小程序开发
6. WXML-Language service：微信小程序wxml文件支持
7. HTML formatter
8. Go
9. vscode-proto3：grpc使用插件



### 快捷键

1. CTRL+shift+p：命令搜索
2. CTRL+，：打开设置页面
3. CTRL+i：代码提示
4. CTRL+shift+`：创建新的终端
5. CTRL+`：切换终端
6. alt+上下箭头：选中代码位置上下调换

### 设置git bash终端

```json
//打开设置setting.json
"terminal.integrated.defaultProfile.windows": "GitBash",
"terminal.integrated.profiles.windows": {
    "PowerShell": {
        "source": "PowerShell",
        "icon": "terminal-powershell"
    },
    "Command Prompt": {
        "path": [
            "${env:windir}\\Sysnative\\cmd.exe",
            "${env:windir}\\System32\\cmd.exe"
        ],
        "args": [],
        "icon": "terminal-cmd"
    },
    "GitBash": {
        "path": "D:\\Git\\bin\\bash.exe"
    }
},
```