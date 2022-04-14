## 网络连接概念

- IP地址时一种逻辑地址，用来标识网络中一个个主机
  - IP地址 = 网络地址 + 主机地址
  - IP地址是一个 4 * 8bit (1字节) 由 0/1 组成的数字串（IP协议）
- 子网掩码NETMASK
  - 子网掩码只有一个功能，就是将IP地址划分为 网络地址 + 主机地址
  - 子网掩码与 IP地址进行**与运算**（都为1 的则结果为1，否则为 0）
- 默认网关 GETWAY
  - 连接两个不同的网络的设备都可以叫网关设备；网关的作用就是实现两个网络之间进行通讯与控制
  - 网关的地址就是网关设备的IP地址
- 域名服务器DNS
  - DNS是域名服务器，用来解析域名的（域名与IP之间的解析）
  - 如果没有这东西，登录某个网站就必须输入该网站的IP地址，有了DNS就可以直接输入网址

#### 网络连接

- 桥接模式
  - 同一个网段，IP容易冲突
- NAT模式
  - 在当前主机下建立新的子网络，确保子网络IP不会和其他IP冲突

#### 设置网络连接

删除 UUID一行

修改BOOTPROTO=static、NOBOOT=yes

添加IPADDR、NETMASK、GATEWAY、DNS1

![image-20211213192545203](Linux入门理解-img/image-20211213192545203.png)



### 网络配置

```bash
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no 
BOOTPROTO=dhcp # dhcp：动态分配，改成 static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=eno1
UUID=a3744ad9-f101-42fc-875a-c33b6b1bd61b
DEVICE=eno1
ONBOOT=yes
#IP地址（追加）
IPADDR=192.168.131.200
#网关（追加）
GATEWAY=192.168.131.2
#域名解析器（追加）
DNS1=192.168.131.2

```

重启网络服务

```bash
systemctl restart network #重启网络
reboot # 重启系统
```

#### 设置主机名与hosts映射

在 Linux中的 /etc/hosts 文件中，可以设置IP映射关系

```bash
172.16.72.238 owner
```

```bash
ping owner
PING owner (172.16.72.238) 56(84) bytes of data.
64 bytes from owner (172.16.72.238): icmp_seq=1 ttl=124 time=13.1 ms
64 bytes from owner (172.16.72.238): icmp_seq=2 ttl=124 time=12.7 ms
64 bytes from owner (172.16.72.238): icmp_seq=3 ttl=124 time=12.6 ms
```

#### 网络服务设置

```bash
systemctl start network #开启网络
systemctl restart network #重启网络
systemctl stop network #关闭网络
vim /etc/sysconfig/network-scripts/ifcfg-ens33
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
#设置成static
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=ab7855db-6a29-42dc-a901-ad68baec3db5
DEVICE=ens33
ONBOOT=yes #自动连接网络
#IP
IPADDR=192.168.41.123
#网关
GATEWAY=192.168.41.2
#DNS
DNS1=192.168.41.2
```

#### 查看网络状况

```bash
netstat -anp
```



## 常用命令

#### 系统服务命令

1. systemctl start 服务名：启动服务
2. systemctl stop 服务名：关闭服务（临时的）
3. systemctl status 服务名：查看服务状态
4. systemctl restart 服务名：重启服务
5. systemctl disable 服务名：关闭服务自启动
6. systemctl enable 服务名：开启服务自启动
7. systemctl --type service：查看正在运行的服务
8. systemctl list-unit-files：查看所有服务器的自启配置

#### 其他命令

1. useradd：libai 添加用户
2. passwd：libai 给**libai**添加密码用户添加密码
3. whereis file-name：查看文件
4. whoami：查看当前用户是谁
5. ll -a：查看隐藏文件
6. echo $$：显示当前进程
7. shutdown -h/-r now：立即关机/重启
8. reboot：重启计算机
9. sync：把内存的数据同步到磁盘中

#### 特殊字符

1. $：代表变量
2. *：代表通配符
3. ~：代表当前用户的主目录（root的主目录是/root，普通用户的主目录是 /home/）
4. -：一个缩写参数（一个杠杠）
5. --：一个单词参数（两个杠杠）

## Linux文件系统

Linux下一切皆文件

#### Linux文件目录

```bash
# 挂载磁盘，将硬盘3挂载到/usr/upload下
mount /dev/disk3 /usr/upload

bin ->usr/bin：这个目录存放经常使用的命令
sbin ->超级管理员使用的命令
boot：这个目录存放启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件

etc：这个目录存放所有的系统管理所需要的配置文件
dev：dev是device（设备）的缩写，该目录下存放的是Linux外部设备，Linux中的设备也是以文件形式存在的

root：该目录为系统管理员目录，root是具有超越权限的用户
home：普通用户的主目录，在Linux中，每个用户都有一个自己的文件夹目录，一般该文件夹以用户名的账号命名

lib ->usr/lib：这个，目录存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件
      ，几乎所有的应用程序都需要用到这些共享库

mnt：系统提供该目录是为了让用户临时挂载别的文件系统，我们可以将光驱挂载在/mnt/上，然后进入
      该目录就可以查看光驱里的内容

usr：这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于Windows下的program files目录
/usr/local：一般用于安装软件
/opt：用于存放软件的安装包，这些安装包安装一般都安装在 /usr/local/目录下

var：这个目录存放着在不断扩充着的东西，我们习惯将那些经常被修改的文件存放在该目录下，比如运行各种日志文件

tmp：这个目录是用来存放一些临时文件的
```

#### 操作文件

```bash
#创建文件夹
mkdir dir
#创建文件
touch file
#查看文件目录
ll
ls
ll -a #查看所有文件（包含隐藏文件）

```

### vi与vim

- 正常模式

> 以vim打开一个档案就直接进入一般模式了(这是默认的模式)。在这个模式中,你可以使用「上下左右」按键来移动光标,你可以使用「删除宇符」或「删除整行」 来处理档案容,也可以使用复制、粘贴J来处理你的文件数据。

- 插入模式

> 按下 i，I，o, O, a, A, r, R等任何一个字母之后才会进入编辑模式，一般来说按 i 即可.

- 命令行模式

> 按下esc进入正常模式，按下冒号：，进入命令行模式，在这个模式当中,可以提供你相关指令, 完成读取、存盘、替换、离开vim、显示行号等的动作则是在此模式中达成的!

#### 快捷键

1. 拷贝当前行：yy，拷贝当前行向下5行：5yy，并粘贴（输入p）

2. 删除当前行：dd，删除当前行向下5行：5dd

3. 设置行号：以冒号开头，set nu

   ```
   //设置行号
   :set nu
   //取消行号
   :set nonu
   ```

4. 查找文件中的某个单词：以斜杠开头，输入关键词，按 n 键查找下一个

   ```
   /abc
   ```

5. 首行，尾行

   ```
   //首行
   gg
   //尾行
   G
   ```

6. 跳转多少行，跳转第35行：

   ```
   35+shift+g
   ```

7. 撤回/恢复：

   ```bash
   #撤回
   u
   #恢复
   CTRL + r
   ```

### 用户管理

#### 用户添加删除

```bash
#添加用户，默认在home目录下创建同名目录
useradd 用户名
#设置密码
passwd 用户名
#删除用户，但是保留主目录
userdel 用户名
#删除用户及主目录
userdel -r 用户名
```

#### 查看用户信息

```bash
#查看用户信息
id root
uid=0(root) gid=0(root) 组=0(root)
```

#### 用户组

```bash
#新增用户组
groupadd 组名
#删除用户组
groupdel 组名
#添加用户时直接分配组
useradd 用户名 -g 用户组名
#修改用户的组
usermod 用户名 -g 用户组名
```

##### 用户和组相关文件

```
/etc/passwd 文件
用户( user )的配置文件,记录用户的各种信息
每行的含义:用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell

/etc/shadow 文件
口令的配置文件
每行的含义:登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志

/etc/group 文件
组(group)的配置文件,记录Linux包含的组的信息
每行含义:组名:口令:组标识号:组内用户列表
```

### 实用指令

#### 运行级别

> 0：关机
>
> 1：单用户【找回丢失密码】
>
> 2：多用户状态没有网络服务
>
> 3：多用户状态有网络服务
>
> 4：系统未使用保留给用户
>
> 5：图形界面
>
> 6：系统重启
>
> 常用的运行级别是 3 和 5，也可以指定默认运行级别

```bash
#切换级别
init 0 #关机
#查看当前级别
systemctl get-default
#设置默认级别
systemctl set-default multi-user.target #设置多用户网络级别
systemctl set-default graphical.target #设置图形化界面
```

#### 找回root密码

仅Centos7版本后有效

1. 重启系统，在进入登记页面前，选择core，然后按 e 键
2. 进入后找到 UTF-8，在后面输入 init=/bin/sh，然后快捷键 CTRL+x 进入单用户模式
3. 在光标闪烁的位置中输入：mount -o remount,rw /
4. 在新的一行输入：passwd，然后回车输入新密码（密码长度最好8位以上，但不是必须的）密码修改成功后，会显示passwd字样说明密码修改成功
5. 在光标闪烁的位置中输入：touch /.autorelabel
6. 继续在闪烁的位置输入：exec /sbin/init （这个过程有点长，耐心等待），完成后系统会自动重启，新的密码就生效了

#### 帮助指令

```bash
#获取指令 ll 的帮助信息
man ls
help ls
```

#### 文件目录指令

```bash
#创建目录
mkdir one
#创建多级目录
mkdir one/two/three -p
#删除目录、文件。-r：递归，-f：强制
rm -rf 文件/目录  

#拷贝文件/目录。-r：递归，
cp 拷贝源 拷贝到哪里
#强制覆盖同名文件
\cp 拷贝源 拷贝到哪里

#分屏查看文件内容。空白键 向下翻页，pageup 向上翻页，q 退出
less 文件名
#查看文件前10行（默认）
head 文件名
head 文件名 -n 5 #指定查看前5行
#查看文件后10行（默认）
tail 文件名
tail 文件名 -n 5 #指定查看后5行

#输出内容到控制台
echo $PATH
# 重定向 >
echo 'hello world' > 文件名 #将 hello world 内容输入到文件中
echo 'hello world' >> 文件名 #将 hello world 内容追加到文件中
ll > 文件名 #将查询到的结果写入到文件中，如果文件不存在则自动创建

# 软连接，类似于快捷键
ln -s 源文件或目录 软连接名
# 删除软连接
rm 软连接名 -f

#查看历史命令
history
history 10 #查看10条历史命令记录
#执行历史命令
!历史命令编号 #如：!23，执行历史第23条命令

#时间指令
date
date "+%Y-%m-%d %H:%M:%S"
#设置日期时间
date -s "2021-12-21 21:09:55"
#查看日历
cal
#查看本年度日历
cal 2021

#搜索查找
find 搜索目录 -name 文件名
#查看指令位置
which 指令名称
#查看文件
locate 文件名 #在执行前，需要先执行 updatedb 
#管道 | 与 grep
ll | grep temp
cat one.txt | grep two -n # -n 可以显示内容所在的行号
```

#### 压缩与解压

```bash
#压缩
gzip 文件 
zip 文件
tar -zxvf 压缩包 -C 解压到哪里
#解压
gunzip 压缩包
unzip 压缩包
tar -zcvf  压缩包名字 需要压缩的文件或目录
# tar的参数
t：列出文件
f：指定文件名
不管是解压还是压缩，都要参数 z
```



### 组管理与权限管理

#### 组修改

Linux中，每个用户必须属于一个组（group）

文件所有者，一般为文件创建者

```bash
# 修改文件所有者
chown 用户名 文件名 # 将该文件所有者修改为当前用户名
# 修改文件所在组
chgrp 组名 文件名 # 将该文件所有者修改为当前用户名
```

#### 权限

```bash
-rwxrw-r-- 1 root root 1213 Feb 2 09:39 abc
```

第0位，用来确定文件类型（d，-，l，c，b）

- d：代表目录
- -：代表普通文件
- l：代表连接
- c：代表字符设备文件，鼠标，键盘
- b：块设备，硬盘

第1-3位，确定所有者拥有该文件的权限

第4-6位，确定所属组拥有该文件的权限

第7-9位，确定其他用户拥有该文件的权限

权限解释rwx，r=4，w=2，x=1

作用在文件上

- r：代表可读取文件

- w：代表可写入文件内容

- x：代表可执行该文件

作用在目录上

- r：代表可读取查看目录

- w：代表可修改目录

- x：代表可进入该目录

其他说明

1：如果是文件，则表示硬链接数；如果是目录则表示子目录数

#### 权限修改

```bash
# chmod 指令
# 第一种方式：+、-、= 变更权限
# u：表示所有者  g：表示所属组 o：代表其他人 a：代表所有人
chmod u=rwx,g=rx,o=x 文件或目录名 #给所属者赋予读写执行权限，所属组赋予读执行权限，其他人执行权限
chmod o+w 文件或目录名 #给其他人添加写入权限
chmod a-x 文件或目录名 #给所有人都取消执行权限
```

## 定时调度

### 基本语法

crontab 【选项】

| 选项 | 说明                              |
| ---- | --------------------------------- |
| -e   | 编辑crontab定时任务               |
| -l   | 查询crontab定时任务               |
| -r   | 删除当前用户所有的crontab定时任务 |

设置调度文件：/etc/crontab

设置个人任务调度。执行**crontab -e** 命令

接着输入：*/1 * * * * ll > /tmp/to.txt

**重启调度任务**

```bash
service crond restart
```

| 项目     | 含义               | 范围                    |
| -------- | ------------------ | ----------------------- |
| 第一个 * | 一个小时中第几分钟 | 0-59                    |
| 第二个 * | 一天中第几小时     | 0-23                    |
| 第三个 * | 一个月中第几天     | 1-31                    |
| 第四个 * | 一年中第几个月     | 1-12                    |
| 第五个 * | 一周中周几         | 0-7（0和7都代表星期天） |

特殊符号的说明

| 特殊符号 | 含义                                                         |
| -------- | ------------------------------------------------------------ |
| *        | 代表任何时间。比如第一个 * ，就代表一小时中每分钟都执行一次  |
| ，       | 代表不连续的时间。比如：“0 8,12,16 * * *”，就代表每天第8小时0分钟，12小时0分钟，16小时0分钟执行一次 |
| -        | 代表连续的时间。比如：“0 5 * * 1-6”，就代表每周一到周六每天5点0分执行一次 |
| */n      | 代表每隔多久执行一次。比如：“*/10 * * * *”，就代表每隔10分钟就执行一遍 |

#### at定时任务

at命令是一次性定时计划任务，at守护进程atd会以后台模式运行，检查作业队列

默认情况下，atd守护进程每60秒检查一次队列，有队列作业时，会检查队列作业时间，如果时间与当前时间匹配，则运行次作业

在使用at命令时，一定要保证atd进程的启动，可以使用 ps -ef | grep atd 来查看

**命令**：at 【选项】【时间】

CTRL+D 结束at命令的输入，需要输入两次

## 进程

![image-20211223143515423](Linux入门理解-img/image-20211223143515423.png)

#### 基本介绍

```bash
ps -a：显示当前终端的所有进程信息
ps -u：以用户的格式显示进程信息
ps -x：显示后台进程运行的参数
```

命令

```bash
#查看进程 -e 显示全部进程 -f 显示全部格式
ps -ef | grep xxx
#终止进程
kill 【选项】进程号（通过进程号杀死/终止进程）
killall 进程名（通过进程名杀死进程，也支持通配符，这在系统因负载过大而变得很慢时很有用）
#常用选项
# -9：表示强迫进程立即停止
```

## 服务管理（service）

> 服务(service)本质就是进程,但是是运行在后台的,通常都会监听某个端口,等待其它程序的请求,比如(mysqld , sshd 防火墙等) ,因此我们又称为守护进程，是Linux中非常重要的知识点。

#### service管理指令

```bash
# CentOS7.0后，很多服务不再使用service，而是systemctl
service 服务名 [start | stop | restart | reload | status]
```

可以通过查看 /etc/init.d 目录来判断是否可以使用service指令，显示绿色目录的则表示可以使用

#### 查看系统服务

```bash
ll /etc/init.d
#或者如下
setup
#选择系统服务，前面带了 * 号的，都是启用了服务自启动
#按 tab 键退出
```

#### 服务自启动

#### systemctl管理命令

可以查看 **/usr/lib/systemd/system** 文件夹，来查看有哪些服务可以使用

**systemctl** 来控制

基本语法：`systemctl [start | stop | restart | status | disable | enable]` 服务名

```bash
systemctl list-unit-files （查看服务开机启动状态）
systemctl is-enabled 服务名（查询某个服务是否自启动）
```

通过**chkconfig**命令可以给服务的**各个运行级别**设置自启动/关闭
**chkconfig**指令管理的服务在**/etc/init.d** 查看

注意: Centos7.0后,很多服务使用**systemctl**管理

##### 基本语法(Centos7已经不再使用一下命令)

```bash
# 使用细节：chkconfig重新设置服务后自启动或关闭，需要重启机器 reboot 生效
chkconfig --list
chkconfig 服务名 --list
chkconfig --level 5 服务名 on/off #对服务名 在 级别5 设置自启动/关闭
```

#### 防火墙打开或关闭指定端口

```bash
firewall-cmd --permanent --add-port=端口/协议	#开启端口
firewall-cmd --permanent --remove-port=端口/协议 #关闭端口
#不管是关闭还是开启，都需要重新载入才能生效：
firewall-cmd --reload
#查询端口是否开放
firewall-cmd --query-port=端口/协议

# 查询端口
netstat -anp

# 使用案例
# 开启端口：111
firewall-cmd --add-port=111/tcp
firewall-cmd --reload
# 关闭端口：111
firewall-cmd --remove-port=111/tcp
firewall-cmd --reload
```

## 包管理

### rpm管理 

> rpm用于互联网下载包的打包及安装工具，它包含在某些Linux分发版中。它生成具有.RPM扩展名的文件。RPM是RedHat Package Manager ( RedHat软件包管理工具)的缩写,类似windows的setup.exe ,这一文件格式名称虽然打上了RedHat的标志,但理念是通用的。
> Linux的分发版本都有采用( suse,redhat, centos等等) ,可以算是公认的行业标准了。

```bash
# 查询指令，查询所有rpm安装的软件包
 rpm -qa  | grep firefox
 firefox-68.10.0-1.el7.centos.x86_64
#名称：firefox
#版本号：68.10.0
#适用操作系统：1.el7.centos.x86系统
#如果是 i686、i386表示32位系统，noarch表示32,64版本通用，64表示64位操作系统

#查询是否安装Firefox软件包
rpm -q firefox
#查询Firefox软件包的信息
rpm -qi firefox
#查询Firefox软件安装时的附带文件信息
rpm -ql firefox
#查询文件所属的软件包
rpm -qf 文件名


#rpm包卸载
rpm -e 包名
#强制删除
rpm -e --nodeps 包名

#rpm安装
rpm -ivh 包名全路径
#i=install 安装
#v=verbose 提示
#h=hash 进度条
```



### yum 

>Yum是一个Shell前端软件包管理器。基于RPM包管理,能够从指定的服务器自动下载RPM包并且安装 ,可以自动处理依赖性关系 ,并且一 次安装所有依赖的软件包。

yum基本指令

```bash
#查看有没有对应的安装包
yum list | grep 软件名
#下载安装
yum install 软件名
```

##  Shell编程

shell脚本，约定俗成以 .sh  结尾的文件

```bash
# 文件开头默认要写上这句话
#!/bin/bash
echo "hello world"
```

执行该文件方式

1. ```bash
   #赋予可执行权限
   chmod u+x helle.sh
   #执行脚本
   ./hello.sh
   ```

2. ```bash
   #直接执行脚本
   sh hello.sh
   ```

### 变量

#### 变量介绍

1.  Linux Shell中的变量分为,系统变量和用户自定义变量。
2. 系统变量: $HOME、$PWD、$SHELL、 $USER等等,比如: echo $HOME等等.
3. 显示当前shell中所有变量: set

#### 变量定义

定义变量:变量=值
撤销变量: unset变量
声明静态变量: readonly 变量，注意:不能unset

#### 变量定义规则

1. 变量名称可以由宇母、数字和下划线组成,但是**不能以数字开头**。5A=200(x)
2. 等号两侧**不能有空格**
3. 变量名称一般习惯为**大写**这是规范

#### 将命令的返回值赋值给变量

```bash
#1、反引号
echo A=`date`
#2、$()
echo A=$(date)
#二者等价
```

### 环境变量

#### 基本语法

1. export变量名=变量值(功能描述:将shell变量输出为环境变量/全局变量)
2. source配置文件(功能描述:让修改后的配置信息立即生效)
3. echo $变量名(功能描述:查询环境变量的值)

#### 多行注释

```bash
:>>!
被注释的内容
!
```

#### 位置参数

基本语法

1. $n ( 功能描述: n为数字, $0代表命令本身，$1-$9代表第一到第九个参数 ，十以上的参数,十以上的参数需要用大括号包含，如${10} )
2. $* (功能描述:这个变量代表命令行中所有的参数, $*把所有的参数看成一个整体)
3. $@ (功能描述:这个变量也代表命令行中所有的参数，不过$ @把每个参数区分对待)
4. $# (功能描述:这个变量代表命令行中所有参数的个数)

**hello.sh脚本**

```bash
#!/bin/bash
echo  "0=$0,1=$1,2=$2,10=${10}"
echo "参数个数：$#"
echo "命令行中所有 参数：$@"
echo "所有s 参数：$*"
```

```bash
#执行脚本
sh hello.sh 100 200 300
#结果
0=/tmp/hello.sh,1=100,2=200,10=
参数个数：3
命令行中所有 参数：100 200 300
所有s 参数：100 200 300
```

#### 预定义变量

1. $$ (功能描述:当前进程的进程号( PID) )
2. $! (功能描述:后台运行的最后一个进程的进程号( PID) )
3. $? (功能描述:最后一-次执行的命令的返回状态。如果这个变量的值为0 ,证明上一 个命令正确执行
   如果这个变量的值为非0 (具体是哪个数,由命令自己来决定) ,则证明.上一个命令执行不正确了。)

#### 运算符

1. $((运算式)) 或 $[运算式] 或 用反引号扩 expr 运算式

2. ```
   乘：\*
   除：/
   ```

####  条件判断

![image-20211225213130174](Linux入门理解-img/image-20211225213130174.png)

#### 多分支

![image-20211225213248150](Linux入门理解-img/image-20211225213248150.png)

#### case流程控制

```bash
#基础语法
case $1 in
1)
echo "输入的是一"
;;
2)
echo "输入的是二"
;;
*)
echo "输入的是未知数字"
;;
esac

```



#### for循环

```bash
for i in  "$*"
do
        echo num is $i
done
echo "-----------------------"
for j in "$@"
do
        echo num is $j
done
```



#### while循环

![image-20211225215449033](Linux入门理解-img/image-20211225215449033.png)

### read读取控制台输入

#### 基本语法

read 【选项】【参数】

选项：

- -p：指定读取值时的提示符
- -t：指定读取值时等待的时间，如果没有在指定时间内输入，就不再等待了

参数

- 变量：指定读取值的变量名

```bash
#!/bin/bash
# hello.sh
read -p "请输入第一个参数：" n1
echo "控制台输入的第一个参数是：$n1"
read -t 5 -p "请输入第二个参数：" n2
echo "控制台输入的第二个参数是：$n2"
```



### 函数

#### 自定义函数

```bash
read -p "请输入第一个参数：" n1
read -t 5 -p "请输入第二个参数：" n2

function getSum(){
        echo "控制台输入的第一个参数是：$n1"
        echo "控制台输入的第二个参数是：$n2"
        SUM=$[$n1+$n2]
        echo "两数和为：$SUM"
}
getSum $n1 $n2
```

