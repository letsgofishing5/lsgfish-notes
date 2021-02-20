# Nginx

##  安装

[官网](http://nginx.org)

### 步骤

1. gcc编译器是否安装

   > 检查是否安装：yum list installed | grep gcc
   > 执行安装：yum install gcc -y

2. openssl库是查安装

   > 检查是否安装: yum list installed | grep openssl
   >
   > 执行安装:yum install openssl openssl-devel -y

3. pcxe.库是盂安装

   > 检查是否安装:yum list installed l grep pcre
   >
   > 执行安装:yum install pcre pcre-devel -y 

4. zlib库是盂安装

   > 检查是否安装:yum list installed l grep zlib
   >
   > 执行安装:yum install zlib zlib-devel -y

5. 一次性安装，执行如下命令v

   > yum install gcc openssl openssl-devel pcre pcre-devel zlib zlib-devel -y

#### 正式安装

#####  步骤

1. 下载解压 Nginx
2. 在Nginx主目录下执行：./configure --prefix=/usr/local/nginx
3. 执行：make
4. 执行：make install

### 启动Nginx

##### 普通启动

1. 切换到Nginx下的sbin目录，执行：./nginx

##### 指定配置文件启动

1. 执行：/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf

### 关闭Nginx

##### 方式一

执行： ps ef | grep nginx

​			kill -QUIT 主pid

##### 方式二

执行： ps ef | grep nginx

​			kill -TERM 主pid

#### 重启Nginx

执行：./nginx -s reload

### 其他命令

##### 配置检查

启动Nginx命令时，在命令末尾添加 **-t**

### 修改配置文件

##### event 

**worker_connections** **1024**：配置每个**worker**进程的连接数上限，Nginx支持的总连接数等于 **worker_connetions** * **worker_processes**。

**worker_connections**的取值上限是**65535**

##### http服务器

### 部署web

通过**conf**中的**nginx.conf**文件进行配置路径

### 负载均衡

在Nginx配置文件中，server下，设置location

> location /myweb {
>
> ​	proxy_pass http://www.myweb.com;	这个代理路径自定义
>
> }

然后在server外，写入如下信息

> upstream www.myweb.com {
>
> ​	server 192.168.31.228:8081;
>
> ​	server 192.168.31.228:8082;
>
> }
>
> 这里的www.myweb.com要与server里面保持一致

#### 负载均衡策略

##### 轮询

用于服务器性能一致时

##### 权重-weight

> upstream www.myweb.com {
>
> ​	server 192.168.31.228:8081 weight=7;
>
> ​	server 192.168.31.228:8082 weight=3;
>
> }

用于服务器性能不一致时

##### 最少连接

##### ip_hash

> upstream www.myweb.com {
>
> ​	ip_hash;
>
> ​	server 192.168.31.228:8081;
>
> ​	server 192.168.31.228:8082;
>
> }

ip_hash可以解决session丢失的问题，但是会导致服务器压力过大

### 静态代理

将Tomcat中的静态资源抽取出来，放入Nginx中，因为Nginx更擅长

>location ~ .*/(css|js|img|image) {
>
>​	root /opt/static
>
>}

我们将静态资源放入 /opt/static 目录下，然后用户访问时，由 Nginx 返回这些静态资源

### 动静分离

动态资源：如jsp，交个 Tomcat处理

静态资源：如css，交给Nginx处理

各司其职

### 虚拟主机

Nginx下，一个server标签就是一个虚拟主机，Nginx可以通过Nginx.conf中server节点指定的，想要设置多个虚拟主机，配置多个server节点即可