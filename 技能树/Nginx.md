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

#### 创建服务脚本

```bash
vi /usr/lib/systemd/system/nginx.service
```

nginx.service

```bash
[Unit]
Description=nginx - web server
After=network.target remote-fs.target nss-1ookup.target
[Service]
Type=forking
PIDFile=/usr/loca1/nginx/logs/nginx.pid
ExecstartPre=/usr/1oca1/nginx/sbin/nginx -t -c /usr/loca1/nginx/conf/nginx.conf
ExecStart=/usr/loca1/nginx/sbin/nginx -c /usr/loca1/nginx/conf/nginx.conf
ExecReload=/usr/loca1/nginx/sbin/nginx -s reload
Execstop=/usr/1oca1/nginx/sbin/nginx -s stop
ExecQuit=/usr/loca1/nginx/sbin/nginx -s quit
PrivateTmp=true
[Insta11]
wantedBy=mu1ti-user.target
```

重新加载系统服务

```bash
systemctl daemon-reload
```

启动服务

```bash
systemctl start nginx.service
```

