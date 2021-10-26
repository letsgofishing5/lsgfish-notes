# Linux

## VMware下载安装

教程：https://seriouszyx.com/archives/9/

## Centos下载

阿里镜像：https://developer.aliyun.com/mirror/

博客：https://developer.aliyun.com/article/703043

安装：https://blog.csdn.net/kerwin_tang97/article/details/106174620



## 目录

一切皆文件，没有Windows中的各种盘的概念。

```bash
1）bin ->usr/bin：这个目录存放经常使用的命令
2）boot：这个目录存放启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件

3）Dev：Dev时device（设备）的缩写，该目录下存放的是Linux外部设备，Linux中的设备也是以文件形式存在的

*4）etc：这个目录存放所有的系统管理所需要的配置文件

5）home：存放普通用户的主目录，在Linux中，每个用户都有一个自己的目录，一般该目录以用户名的账号命名

6）lib ->usr/lib：这个，目录存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件
      ，几乎所有的应用程序都需要用到这些共享库

7）mnt：系统提供该目录是为了让用户临时挂载别的文件系统，我们可以将光驱挂载在/mnt/上，然后进入
      该目录就可以查看光驱里的内容

8）opt：给Linux额外安装软件所存放的目录。比如安装Oracle数据库则就可以放到这个目录下，默认为空

9）root：该目录为系统管理员目录，root是具有超越权限的用户

10）tmp：这个目录是用来存放一些临时文件的

*11）usr：这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于Windows下的program files目录

12）var：这个目录存放着在不断扩充着的东西，我们习惯将那些经常被修改的文件存放在该目录下，比如运行各种日志文件
```

