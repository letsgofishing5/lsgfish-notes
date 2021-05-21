

### 前端

####  node

1. nodemon：监听项目，相当于热部署

   ```
   使用方法：
   //安装nodemon
   npm i -g  nodemon
   //使用nodemon启动项目
   nodemon app.js
   ```

#### Vue

##### devtools

```bash
//按照命令一步一步敲就是了
git clone https://github.com/vuejs/vue-devtools.git

cd vue-devtools

git checkout master

npm install

npm run build
```

命令敲完后进入 vue-devtools\shells\chrome 目录下，修改manifest.json 文件

```json
/persistent:false
//修改为
persistent:true
//然后重新执行命令
npm run build
```

###  clone代码前准备 

1.  设置全局变量 

 git config --global user.name "你的名字，可以用全拼音代替" 

 git config --global user.email "你的邮箱，在飞书里找到你的邮箱" 

1.  配置SSH公钥 

 打开git命令行，输入：ssh-keygen -t rsa -C 邮箱，连续按三次enter键 

-  **Keygen：key generation** 

-  C：要大写 

-  邮箱：飞书注册的邮箱 

-  三次回车确认默认值即可 

-  .ssh 文件夹在C盘，用户目录下生成 

1.  在 **C/user/个人账户/ .ssh** 文件夹下有两个目录，一个是 **id_rsa** ，一个是 **id_rsa.pub** ，打开 **id_rsa.pub** ，将里面的内容进行复制 
2.  在智慧社区代码托管中，选择你要clone的代码，点击进去 
3.  选择：克隆/下载，点击管理SSH密钥 
4.  选择SSH密钥，将步骤3复制的内容粘贴到密钥中，然后往下翻，选择添加即可 

### 学习资源

#### JavaScript

现代JavaScript教程：https://zh.javascript.info/

ES教程阮一峰：https://es6.ruanyifeng.com/#docs/destructuring

前端综合：https://learn.freecodecamp.one/

### 软件资源

#### PS，剪辑下载

Adob软件下载：https://www.yuque.com/books/share/4538a1da-d043-458d-a006-3d53ca1ebfc6/ovns4r

