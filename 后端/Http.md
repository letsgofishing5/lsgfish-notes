## http请求 协议包

```
//请求行
url:请求地址
method：请求方式

//请求头
请求参数

//空白行
只起到隔离的作用

//请求体
请求方式为post时，显式请求体
```

## Tomcat

下载解压即可

#### 配置环境变量

```bash
CATALINA_HOME
tomcat解压包位置
```

#### 启动

进入解压包中的`bin`目录

```bash
#启动tomcat
startup
#关闭tomcat
shutdown
```

## IDEA 中配置 Tomcat

1. settings——》Build，execution，deployment——》Application Servers
2. 点击加号，选择Tomcat，选择Tomcat的解压位置

## 创建JavaWeb网站

1. 先 `new`  一个 `module` 出来，选择`Java EE`，`Java EE`下的`Web Application`  也要勾选
2. 所有的静态资源都放在 项目下的 `web`目录下，所有的`jar`包，都放在`WEB-INF`目录下自建的lib目录下

### Tomcat 调用Java文件

只有 继承了 `HttpServlet` 接口的类，才能被 `Tomcat` 调用

IDEA中，快速创建Servlet服务，new 一个 Servlet文件，去掉注解，在 文件 被创建的时候，会在WEB-INF目录下的web.xml配置文件中，自动 生成一个配置项

```xml
<servlet>
    <servlet-name>OneServlet</servlet-name>
    <servlet-class>com.cth.controller.OneServlet</servlet-class>
</servlet>
<!--映射文件-->
<servlet-mapping>
    <servlet-name>OneServlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

