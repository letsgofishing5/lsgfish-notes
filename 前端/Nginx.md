### 配置文件的三个组成部分

##### 全局块

从配置文件开始，到 events 块之间的内容，主要会设置一些影响 nginx 服务器整体运行的配置指令

比如：worker_processes。worker_processes 值越大，可以支持的并发处理量也越多

##### events块

`events`块涉及的指令主要影响`Nginx`服务器与用户的网络连接

比如`worker_ connections 1024;` 支持的最大连接数~

##### http块

Nginx服务器配置中最频繁的部分

http 块也可以包括 http 全局块，server 块