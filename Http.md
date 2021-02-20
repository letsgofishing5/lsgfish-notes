#  Http

## 网络通信要素

##### TCP/IP参考模型

1. SOI七层网络模型

##### 小结

1. 编程中主要两个问题
   - 如何准确的定位到网络上的 一台或多台主机
   - 找到主机之后如何进行通信
2. 网络编程中的要素
   - IP 和 端口号 IP
   - 网络 通信协议 udp，tcp
3. 万物皆对象

##### IP

```java
InetAddress localhost = InetAddress.getByName("localhost");
System.out.println(InetAddress.getByName("www.baidu.com"));
System.out.println(localhost);
```

## 端口

端口表示计算机上的一个程序的进程

- 不同的进程有不同的端口号，用来区分软件

- 被规定0~65535

- TCP,UDP : 65535 * 2 tcp: 80,udp: 80吗，单个协议下，端口号不能冲突

- 端口分类

  - 公有端口0~1023

    - .HTTP:80.
    - HTTPS:443
    - FTP: 21
    - Telent : 23

  - 程序注册端口：1024~49151，分配用户或者程序

    - Tomcat：8080
    - MySQL：3306
    - Oracle：1521

  - 动态、私有：49152~65535

    ```bash
    netstat -ano #查看所有端口
    netstat -ano |findstr "8080" #查看8080端口
    tasklist|findstr "8080" #查看指定端口的进程
    shift+Ctrl+ESC #打开任务管理器
    ```


## 通信协议

协议：约定，就好比我们说普通话

**网络通信协议** ：速率，传输码率，代码结构，传输控制……

**TCP/IP协议簇**

重要：

- TCP：用户传输协议
  - 连接，稳定
  - 三次握手，四次挥手
  - 客户端，服务端
  - 传输完成，释放连接，效率低
- UDP：用户数据协议
  - 不连接，不稳定
  - 客户端，服务端：没有明确的界限
  - 不管有没有准备好，都可以发给你
  - 