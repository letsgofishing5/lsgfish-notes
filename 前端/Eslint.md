#### 安装

```bash
npm i eslint -D
```

#### 初始化配置文件

配置文件：.eslintrc.js

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

#### 多目录多规则

1. 多目录下需要多个Eslint规则，需要在需要不同规则的目录下设置eslintrc.js文件 ，就近原则 。
2. 如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：
   1. `.eslintrc.js`
   2. `.eslintrc.yaml`
   3. `.eslintrc.yml`
   4. `.eslintrc.json`
   5. `.eslintrc`
   6. `package.json`

#### Eslint文件配置方式

##### 前三种方式

Javascript 、YAML、JSON 形式的配置文件

##### 第四种方式

在package.json中配置

```json
"eslintConfig": {
    
},
```

在package.json中输入以上配置字段，然后在里面把JSON形式的配置初始化文件内容复制进去即可

##### 第五种方式

使用注释的形式进行配置，多个规则使用逗号分隔

```js
/* eslint no-unused-vars: "off" */
var un = 123
```

#### 代码修复

eslint . --fix

#### 代码提交前的校验

1. pre-commit
2. husky
