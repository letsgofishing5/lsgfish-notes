#### 安装

在安装`husky`前，先初始化`git`

```bash
git init
```

然后执行

```bash
npx husky-init
```

#### 配置

在执行完上面的命令后，会在项目中生成一个新的 .husky 目录

目录结构：

 -  husky
     -  _
     -  $_ pre-commit

我们点开 $_pre-commit 文件，在里面可以发现有如下内容

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm test
```

在这里，`npm test`就在用于我们在`git commit`项目时，`package.json`文件中的脚本命令。我们可以在这里手动修改成我们想要执行的脚本命令

我们也可以通过命令的形式来修改我们想要执行的脚本命令，如添加一个 `pre-commit` 脚本命令

```bash
npx husky add .husky/pre-commit "npm run pre-commit"
```

