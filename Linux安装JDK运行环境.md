## Linux安装JDK

##### 安装步骤

> 1. 下载中JDKLinux版本，将JDK解压到 “/usr/local”目录，执行解压命令：tar -zxvf jdk名字 -C /usr/local
>
> 2. 配置环境变量，进入etc下的profile，进入编辑状态，来到文件末尾，输入如下指令：
>
>    ```properties
>    export JAVA HOME=/usr/local/A_jdk1.8.0_121
>    export PATH=$JAVA_HOME/bin:$PATH
>    export CLASSPATH=.:$JAVA_HONE/lib/dt.jar:$JAVA_HONE/lib/tools.jar:$JAVA_HONE/jre/lib/rt.jar
>    ```
>
>    确认保存修改，执行**source**命令（source命令通常用于重新执行刚修改的初始化文件，使之立即生效）
>
>    使用格式：source profile
>
> 3. 执行：Java -version来检查是否初始化成功，当出现信息开头都是Java开头，则表示配置并初始化成功
>
>    配置JDK遇到JDK无法生效。
>    	网址：https://blog.csdn.net/username666/article/details/104614514

## Linux安装Tomcat

##### 安装步骤

1. 下载Tomcat tar.gz包，解压到“/usr/local/”目录下，进入到Tomcat下bin目录，Linux中启动Tomcat服务器使用的是startup.sh 和关闭Tomcat服务器使用 shutdown.sh

## Linux安装mysql

##### 安装步骤

1. 配置mysql时，需要检查Linux中是否有“mariadb”，使用命令：yum list installed | grep mariadb
   	如果有，则使用命令：yum -y remove mariadb（mariadb在不同机器上名字不一样）
   	程序执行完，出现“complete”则表示卸载完成

   **使用mv命令给文件夹换个名字**，使用格式：mv 被修改的文件夹名 修改后的名字

2. 在mysql解压后的文件夹中创建“data”文件夹，用来以存放数据

3. 创建mysql用户，用来执行mysql的命令mysqld，此命令用来初始化mysql基础信息
   	      执行命令：useradd mysql
      	      如果该命令失败，执行命令：userdel -rf mysql 

4. 进入bin目录下，执行下列命令初始化
   	./mysqld --initialize --user=mysql --datadir=/usr/local/mysql-5.7.18/data --basedir=/usr/local/mysql-5.7.18

   1. 生成初始密码：%.CE?>#Mk8;m

   2. 执行下列命令（加密）：
      	./mysql_ssl_rsa_setup --datadir=/usr/local/mysql-5.7.18/data

   3. 修改所有者权限：
      	chown -R mysql:mysql /usr/local/mysql-5.7.18

   4. 启动MySQL服务
      		启动命令：service mysqld start
         		关闭命令：service mysqld stop
         		重启命令：service mysqld restart
         		查看服务器状态：service mysqld status
         	./mysqld_safe &（其中&符合表示后台启动）

      ​    通过 ps -ef | grep mysql  查看服务是否启动成功

   5. 在MySQL的bin目录下登陆MySQL：
      		./mysql -uroot -p

   6. 修改初始密码：
      		alter user 'root'@'localhost' identified by 'cthcth';
         	然后通过show databases;命令，查看是否修改成功，页面显示数据则表示成功

   7. 授权远程访问
      	grant all privileges on *.* to root@'%' identified by 'cthcth';
      	更新权限（使之立即生效）：flush privileges;
      	quit，退出MySQL

   8. 远程连接之Linux防火墙
      	查看防火墙状态：systemctl status firewalld
      	让防火墙可用：systemctl enable firewalld
      	让防火墙不可用：systemctl disable firewalld
      	开启防火墙：systemctl start firewalld
      	禁用防火墙：systemctl stop firewalld

## 安装mariadb

地址：[](https://www.cnblogs.com/jpfss/p/6568976.html)





