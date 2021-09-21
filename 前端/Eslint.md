#### 安装

```bash
npm i eslint -D
```

#### 初始化配置文件

```bash
npx eslint --init
```

#### 非框架项目中测试 eslint

```bash
npx eslint <filePath.js>
npx eslint src/*.js  #用来检测src目录下的所有的.js文件
npx eslint src       #会检测src目录下的所有的.js文件，嵌套文件也会被检测
```

#### 关闭eslint的错误

```js
//根据eslint的报错结果，在配置文件.eslintrc.js中的rules中，设置为 off 即可
"rules": {
    "no-unused-vars": "off"
}
```

