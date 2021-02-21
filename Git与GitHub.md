# Git与GitHub

### 安装Git

[推荐安装使用教程：菜鸟教程](https://www.runoob.com/manual/git-guide/)

## 使用命令行创建Git本地仓库

##### 基本指令

1. git init：初始化一个本地库
2. git config：配置，下面是各种参数
   1. user.name：设置用户名
   2. user.email：设置邮箱
   3. --global user.name：设置全局用户名（可以直接省略1、2两步，直接3、4）
   4. --global user.email：设置全局邮箱
   5. --global --list：查看是否设置了全局用户名与邮箱
3. git clone：将远程库代码克隆下来
4. git add：将工作区代码添加到暂存区
5. git commit：将暂存区代码提交到本地库
6. git pull：拉去远程仓库分支代码，merge（融合）到本地库中，完整命令：git pull 远程库地址 分支名
7. git push：将本地库代码提交到远程仓库，完整命令：git push 远程库地址 分支名

##### 使用

1. 选择一个自定义文件夹，进入，右击鼠标，选择**Git Bash Here**，该命令会在当前目录下打开一个**Linux**的命令行窗口，执行：**git init**，初始化一个本地仓库，执行**ls -la**可以查看创建的**.git**隐藏目录

###### 设置签名,必须要配置

1. 1. 项目级别/仓库级别：仅在当前本地仓库生效

      执行：**git config user.name Tom**

      ​			**git config user.emali 邮箱**

      信息保存位置：**.git/config**文件中

   2. 系统用户级别：登陆当前操作系统的用户范围

      执行：**git config --global user.name Tom**

      ​			**git config --global user.email 邮箱**

      信息保存位置：**~/.gitconfig**文件中，**~**代表系统夹目录

   3. 级别优先级：

      1. 就近原则，项目级别优先于系统用户级别，二者都有时，采用项目级别的签名

2. 查看配置：git config -l

3. 查看系统配置：git config --system --list

4. 查看全局配置：git config --global --list

5. 设置完成后，会生成一个.gitconfig文件，该文件在当前目录下，与.git目录平级

6. 如果不设置签名，则无法提交数据

7. 环境变量设置只是为了全局使用

##### git基本命令操作

1. 执行：**git status**，查看git文件状态
2. 执行：**git add 文件**，将文件添加到缓存区，**git rm --cache 文件**，删除缓存区的文件
3. 执行：**git commit 文件名**，执行**:set nu**，显示行号，按**a**键，进入编辑状态，编辑文本结束，按**ESC**退出编辑状态，执行**:wq**，进行保存，将文件提交至本地库
4. 执行：**git commit -m "需要提交的文本备注" 文件名**，这是3步骤的简化

##### 连接 远程仓库

1. 执行： **git remote add origin** https://gitee.com/用户个性地址/HelloGitee.git
2. 执行：**git clone** https://gitee.com/用户个性地址/HelloGitee.git ：将远程仓库克隆到本地

##### 版本的前进和后退

1. 执行：**git log**，查看历史提交信息，

   参数：

   - --pretty=oneline：让信息以一行显示
   - --oneline：让信息以一行显示（更简洁）

   当日志过多，进行分屏时，出现冒号，可以通过

   - 空格键向：下翻页
   - b键：向上翻页
   - q键：退出

2. git reflog：可以查看指针

3. 版本回退的三种方法：

   1. 基于索引操作：**git reset -hard 索引值**

      该索引值是要回退到哪个版本的索引值，该索引值，选中后就已经达到复制的效果

   2. 使用**^**符号：该命令只能版本后退

      1. **git reset --hard 索引值^**，一个**^**符号代表后退一版本，两个代表后退两个版本

   3. 使用**~**符号：该命令只能版本后退

      1. **git reset --hard 索引值~3**，代表后退3个版本，数字可以自定义

4. **版本回退参数**

   1. --soft：只改变**本地库**HEAD指针，简而言之就是版本回退时，信息只有**本地库**会立即更新
   2. --mixed：只改变**本地库**和**暂存区**HEAD指针，简而言之就是版本回退时，信息只有**本地库和暂存区**会立即更新
   3. --hard：只改变**本地库**和**暂存区**和**工作区**HEAD指针，简而言之就是版本回退时，信息只有**本地库、暂存区和工作区**会立即更新

## 分支

#### 分支操作

##### 1.查看分支状态

​	git branch -v

常用：

- git branch -r：列出所有远程分支
- git branch 分支名：新建分支，但是停留在当前分支上
- git branch -d 分支名：删除分支
- 

##### 2、创建分支

​	git branch 分支名

##### 3、切换到分支状态

​	git checkout  分支名

##### 4、合并分支

 1. 切换到接收修改的分支上（被合并，增加新内容）

    执行：**git checkout 分支名**

    简单来说：将分支合并到主分支中，先切换到主分支，然后执行第二步命令 ，

 2. 执行：**merge**命令

    执行：**git merge 分支名**

##### 5、分支合并冲突

​		协商处理

### 连接远程仓库

因为远程仓库地址比较长，每次复制比较麻烦，所有，在Git本地将地址保存，通过别名

1. 查看别名：**git remote -v**，如果什么都没有则需要 起别名
2. git remote add origin https://gitee.com/lets-go-fishing/dora-a-dream.git，origin就是别名，可以自定义，后面跟着就是远程库地址，后续所有操作，直接对着**origin**操作即可
3. git clone https://gitee.com/lets-go-fishing/dora-a-dream.git，拉取远程库

### 邀请加入团队

1. git push origin 分支名，将信息推送到哪个分支上，在这里，是需要发送**入队请求**的，如果直接成功了，那么就是计算机缓存问题，点击**windows键**，输入：**我的管理凭据**，进入，然后删除里面的缓存，删除缓存后，执行：**git push origin 分支名**命令，发现报403错误，这是因为没有加入团队 ，必须加入团队
2. 加入团队：团队lead登陆GitHub账号，进行邀请
3. 邀请步骤：进入账号，选择 **settings**——选择**Manage access**，然后点击绿色按钮：**Invite a collaborator**，然后输入被邀请者账号id，进行邀请，这时被邀请者会出现在**Manage access列表**中，选中，然后复制**Pending Invite**，将该链接发送给被邀请者，被邀请者进入链接，同意邀请，入队后方可执行 1 的命令操作

#### 远程库修改的操作

1. 先进行抓取操作：**git fetch origin 远程库对应的分支名**，该命令会将抓取内容存到本地库，并不会更新到工作区，
2. 进入 **.git**目录，逐个查询更新的内容，如果内容正确，进行合并
3. 执行分支合并命令
4. 远程库的拉取可以直接利用 push 命令来完成：**git push origin 远程库对应的分支名**
5. fetch+ merge操作：保险，慎重
6. push：代码简单，省事

### 使用SSH免密操作（重要）

任意目录，进入命令行，执行：ssh-keygen -t rsa，一路**enter回车键**即可

- -t rsa :是一种算法

##### 建立Gitee仓库









### 其他视频

1. 进入用户主目录：cd ~：
2. Linux查询隐藏目录：ls -al | grep .ssh
3. 生成一个 .ssh 的目录：ssh -keygen -t rsa -C 邮箱，确认后连续三次**enter键**
   - Keygen：key generation
   - C：要大写
   - 邮箱：GitHub注册的邮箱
   - 三次回车确认默认值即可
   - .ssh 目录在C盘，用户目录下生成
4. 在 .ssh 目录下有两个目录，一个是 id_rsa，一个是id_rsa.pub，打开id_rsa.pub，将里面的内容进行复制
5. 打开GitHub账号，在头像下拉框中找到 settings，进去，选择：SSHandGPGkeys，然后选择New SSH key
6. 在SSHkeys中，Title可以自定义，key部分则粘贴第三部复制的内容
7. 生成秘钥后，就可以正常的push操作，
   1. 首先要对SSH远程地址起别名：git remote add origin_ssh 远程地址
   2. 检查是否起别名成功：git remote -v

## IDEA集成Git

file——settings——Version Control——Git：在这添加**git.exe**的安装位置

#### IDEA拉取与推送

1. 首先要进行拉取操作：**git pull origin master --allow-unrelated-histories**
   1. 因为他们是两个不同的项目，要把两个不同的项目合并，git需要添加一句代码，在git pull之后
   2. 这句代码是在**git 2.9.2版本**发生的，最新的版本需要添加**--allow-unrelated-histories**告诉 git 允许不相关历史合并。
   3. 假如我们的源是origin，分支是master，那么我们需要这样写git pull origin master --allow-unrelated-histories，**在这里多说 一句，origin在这里可能会导致命令失效，如果失效，将origin改成远程库地址即可**
   4. 这个方法只解决因为两个仓库有不同的开始点，也就是两个仓库没有共同的commit出现的无法提交。如果使用本文的方法还无法提交,需要看一下是不是发生了冲突，解决冲突再提交
2. 拉取成功后，进行推送：git push -u origin master -f

##### 注意

一般在开发中，在执行push前，会先执行pull操作，不会直接进行push操作 

## IDEA集成Git_kss

1. 创建一个普通Java项目
2. 绑定git
   1. 方法一：直接克隆（clone）
   2. 

#### 简易的命令行入门教程:

Git 全局设置:

```
git config --global user.name "走我们去钓鱼"
git config --global user.email "1113237401@qq.com"
```

创建 git 仓库:

```
mkdir dora-a-dream
cd dora-a-dream
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/lets-go-fishing/dora-a-dream.git
git push -u origin master
```

已有仓库?

```
cd existing_git_repo
git remote add origin https://gitee.com/lets-go-fishing/dora-a-dream.git
git push -u origin master
```