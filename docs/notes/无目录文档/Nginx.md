# Nginx

## 免费开源拓展版本Nginx

Nginx开源版地址：http://nginx.org

openresty地址：http://openresty.org

tengine地址：http://tengine.taobao.org

### 安装

先下载，然后解压，进入解压后的目录中，有一个 .configure 文件。执行该文件

```bash
#解压
 tar zxvf nginx-1.20.2.tar.gz
 cd nginx-1.20.2/
#执行配置文件检查、配置文件安装环境与依赖
 ./configure
#缺少gcc，安装gcc
 yum install -y gcc
#再次执行 configure检查、配置文件安装环境与依赖
 sh configure
#缺少 pcre，安装
 yum install -y pcre-devel openssl openssl-devel
#再次执行 configure检查、配置文件安装环境与依赖，并且配置安装路径/usr/local/nginx
 sh configure --prefix=/usr/local/nginx
#构建配置文件
 make
#安装软件
 make install
#设置nginx快捷键
 ln -s /usr/local/nginx/sbin/nginx /bin/nginx
#启动nginx
 nginx
#检查防火墙状态
 systemctl status firewalld.service
#关闭防火墙
 systemctl stop firewalld.service
#查看IP地址
 ip addr
```

### 安装成系统服务

文档：https://www.cnblogs.com/ggzhangxiaochao/p/15039617.html

#### 创建服务脚本

```bash
vi /usr/lib/systemd/system/nginx.service
```

nginx.service

```bash
[Unit]
Description=nginx-web server
After=network.target remote-fs.target nss-1ookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecstartPre=/usr/1ocal/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
Execstop=/usr/1ocal/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true

[Insta11]
WantedBy=mu1ti-user.target
```

重新加载系统服务

```bash
systemctl daemon-reload
```

启动服务

```bash
systemctl start nginx.service
```

### nginx基础配置

#### 最小配置文件

```bash
#worker_processes
worker_processes  1;默认为1，表示开启一个业务进程(nginx开启时先开启一个master进程，然后开启worker子进程，这个代表开启多少个子进程)
#worker_connections
worker_connections 1024;单个业务进程可接受连接数
#include mime.types;
inc1ude mime.types;引入http mime类型
#default_type application/octet-stream;
default_type application/octet-stream;如果mime类型没匹配上，默认使用二进制流的方式传输。
#sendfile on;
sendfile on;使用linux的sendfile(socket，file，len)高效网络传输，也就是数据O拷贝。未开启sendfile
```

#### 核心配置文件

##### serverName配置

我们可以在一个serverName中匹配多个域名，多个域名之间使用空格分隔

```bash
server_name one.com two.com; #one.com、two.com两个域名匹配一个主机服务
```

使用通配符

```bash
server_name *.lsgfish.com; #所有以 .lsgfish.com结尾的域名都会匹配到这个主机服务

server_name lsgfish.*; #所有以 lsgfish开头的域名都会匹配到这个主机服务
```

正则匹配

```bash
server_name ~^[0-9]+\.lsgfish\.com$; #所有以 数字开头，.lsgfish.com结尾的域名都会匹配到这个主机服务
```

#### 反向代理

```bash
server {
    listen       80;
    server_name  lsgfish.com;

    location / {
        proxy_pass http://www.atguigu.com;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

#### 负载均衡

upstream与server要配合使用

```bash
upstream serverGroupName{
	server 192.168.56.1:81,
	server 192.168.56.1:82,
}
server {
    listen       80;
    server_name  lsgfish.com;

    location / {
        proxy_pass http://serverGroupName;#使用服务分组
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}

server {
    listen       81;
    server_name  localhost;

    location / {
        root html/one;
        index index.html;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}

server {
    listen       82;
    server_name  localhost;

    location / {
        root html/two;
        index index.html;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

##### 负载均衡策略

- 权重

  ```bash
  upstream one{
  	server 192.168.56.1:80 weight=2;
  	server 192.168.56.1:81 weight=4;
  }
  # down:停止服务
  upstream one{
  	server 192.168.56.1:80 weight=2 down;
  	server 192.168.56.1:81 weight=4;
  }
  # backup:备用服务，其他服务不可用时会启用该服务
  upstream one{
  	server 192.168.56.1:80 weight=2 backup;
  	server 192.168.56.1:81 weight=4;
  }
  ```

#### URL Rewrite

```bash
rewrite是实现URL重写的关键指令，根据regex(正则表达式)部分内容，
重定向到replacement，结尾是f1ag标记。

rewrite <regex> <replacement> [f1ag];
关键字    正则      替代内容      flag标记

关键字:其中关键字error_1og不能改变
正则:per1兼容正则表达式语句进行规则匹配
替代内容:将正则匹配的内容替换成replacementflag标记: rewrite支持的
flag标记:rewrite参数的标签段位置:
server , 1ocation,if
flag标记说明:
last#本条规则匹配完成后，继续向下匹配新的1ocation UR工规则
break#本条规则匹配完成即终止，不再匹配后面的任何规则
redirect#返回302临时重定向，浏览器地址会显示跳转后的URL地址
permanent#返回301永久重定向，浏览器地址栏会显示跳转后的URL地址
```

实例

```bash
location / {
	rewrite ^([0-9]+).html$ /index.jsp?pageNum=$1 break;
	proxy_pass http://192.168.44.104:8080;
}
```

## Nginx 点对点笔记

### 大佬笔记

[ 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/user/1717940/search/article-nginx)

### 路径匹配

[学习的链接](https://www.cnblogs.com/z-books/p/12410459.html)

```tex
location ~* /js/.*/\.js
以 = 开头，表示精确匹配；如只匹配根目录结尾的请求，后面不能带任何字符串。
以^~ 开头，表示uri以某个常规字符串开头，不是正则匹配
以~ 开头，表示区分大小写的正则匹配;
以~* 开头，表示不区分大小写的正则匹配
以/ 开头，通用匹配, 如果没有其它匹配,任何请求都会匹配到

//第一权重
location = /api {}

//第二权重
location ^~ /api{}

//第三权重 正则表达式
location ~ /\W {}

//第四权重 斜杠通配
location / {}

```

#### 总结

路径匹配分为

1. 绝对路径匹配：= 开头
2. 正则匹配：~ 开头
3. 指定字符串为开头路径的：^~ 开头
4. 根路径匹配：/ 开头
   1. 根路径匹配会有一下特点，
      1. / 后面的路径会自动拼接在 root 地址后面

### 请求缓存

[009.Nginx缓存及配置 - 腾讯云开发者社区-腾讯云 ](https://cloud.tencent.com/developer/article/1663336)

```tex
# 控制请求不缓存
location / {
	add_header Cache-Control "no-store, no-cache"
}
```

## 笔记

### alias与root

#### 区别

1. root中的路径会与 location 后面的路径进行拼接，而alias则可以进行部分路径替换

   ```bash
   # root
   请求路径：/path/xxx
   root：html/dist
   合成路径：html/dist/path/xxx
   
   # alias
   请求路径：/api/dist/xxx
   alias：html/dist/
   合成路径：html/dist/xxx
   ```

   
