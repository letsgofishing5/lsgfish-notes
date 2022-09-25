## vscode插件配置

1. volar
2. eslint
3. prettier

### vsocde常用

1. 配置页面格式化方式：CTRL+shift+p，输入 format，选择文件格式化方式（prettier|eslint|volar|...）
2. 打开设置面板：CTRL+，
3. 搜索文件：CTRL+p
3. 代码提示：CTRL+I

## Quasar

### 断点

启用时（通过`quasar.config.js > framework > cssAddon: true`），它为所有与间距相关的 CSS 类提供断点感知版本。

```
.q-(p|m)(t|r|b|l|a|x|y)-<bp>-(none|auto|xs|sm|md|lg|xl)
```

> 例子：`q-pa-xs-md q-pa-sm-sm q-px-md-lg q-py-md-md`

### vite 脚本命令

https://quasar.dev/quasar-cli-vite/commands-list#new

```bash
# 生成页面
quasar new page IconFont #生成Iconfont.vue页面
quasar new page IconFont/IndexThe #生成多级目录IndexThe.vue页面
```

### 处理env文件

#### webpack模式

##### 方式一

> 在quasar.config.js文件中设置环境变量，在build字段下

```JS
build:{
    env: {
        BASE_URL: ctx.dev ? 'http://dev' : 'http://prod',
    },
}
```

##### 方式二

> 新建.env文件，安装 dotenv，解析env文件

```bash
# 安装dotenv
yarn add --dev dotenv
```

> quasar.config.js

```js
build: {
  env: require('dotenv').config().parsed
}
//指定不同的环境变量文件
build: {
  env: require('dotenv').config({
      path:ctx.dev?"./env.dev":"./env.prod"
  }).parsed
}
```

#### vite 模式

> 默认支持 env文件，按照vite规则执行，可以通过在quasar.config.js文件中，修改env文件中的变量前缀。打开 extendViteConf 函数，

```js
extendViteConf(viteConf) {
    viteConf.envPrefix = '_';
},
```

### 路由

> import.meta.glob函数获取文件



### 指令

#### 关闭弹出层

> v-close-popup 指令可以传入参数，如果值为 0 或“假”，则禁用指令；如果 value < 0 则关闭链中的所有弹出窗口；如果值为 1 或“真”或未定义，则它仅关闭父弹出窗口；如果值 > 1，它将关闭链中指定数量的父弹出窗口

```vue
<div class="father">
    <button v-close-popup>
        关闭
    </button>
</div>

<!--关闭多个层级弹框:关闭两个弹出层-->
<div>
    <div>
        <button v-close-popup=2>
            关闭
        </button>
    </div>
</div>
```

## quasar.config.js

### 配置插件

framework>plugin中配置

然后可以在framework>config中进行配置

> 配置Notify插件

```json
framework: {
    config: {
        notify: {
            position: 'top',
        },
    },
    plugins: ['Notify'],
},
```



# 总结笔记

## vscode 配置

### 插件

1. Auto Close Tag
2. Auto Rename Tag
3. IntelliSense for CSS class names in HTML：能提提示quasar内置的class
4. SCSS Everywhere
5. Vue Language Features (Volar)



### 配置bash终端

```json
{
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
        "Git-Bash": {
            "path": "D:\\Git\\bin\\bash.exe",
            "args": []
        }
    },
    "terminal.integrated.defaultProfile.windows": "Git-Bash",
}
```



## boot文件

**boot 文件**作用类似于普通vue工程中的 **main.js** 文件

### 生成boot文件

```bash
# 通过命令生成一个boot文件，并格式化文件类型为 ts
quasar new boot demo --format ts
```

### 启用自定义boot文件

1. 首先要生成一个boot文件，

2. 然后在 quasar.config.js 配置文件中，加入自定义的配置文件

   ```js
   boot: ['i18n', 'axios','demo'],
   ```

   



## 样式与布局

### 断点语法

> 启用断点语法（通过`quasar.config.js > framework > cssAddon: true`），它为所有与间距相关的 CSS 类提供断点感知版本。

```
.q-(p|m)(t|r|b|l|a|x|y)-<bp>-(none|auto|xs|sm|md|lg|xl)
```

```html
<div class="q-pa-xs-md q-pa-sm-sm q-px-md-lg q-py-md-md">
    断点语法演示
</div>
```



### 布局

#### flex布局

[演示广场](http://www.quasarchs.com/layout/grid/flex-playground)

#### 网格布局

- q-gutter-md
- q-gutter-x-md
- q-gutter-y-md

```html
<div class="q-gutter-xm">
    <div>
        子元素1
    </div>
    <div>
        子元素2
    </div>
</div>
```





