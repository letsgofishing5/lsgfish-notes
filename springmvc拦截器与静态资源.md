# SpringMVC静态资源访问

聊一聊关于静态资源的访问问题

首先，我们要对**web.xml**里面的**DispatcherServlet**进行设置

```xml
<!--    中央调度器-->
<servlet>
    <servlet-name>dispatcher</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:springMVC.xml</param-value>
    </init-param>
    <!--tomcat 一启动就可以加载中央调度器，数字只要大于0 即可-->
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>dispatcher</servlet-name>
    <!--
		url-pattern设置为："/"，当你使用了"/"，他会替代Tomcat中的default，
		导致所有的资源都给DispatcherServlet处理，默认情况下DispatcherServlet
		没有处理静态资源的能力，没有控制器对象能处理静态资源的访问，所以导致静态资源
		访问失败都是404，动态代理可以正常访问。如果不设置url-pattern设置为："/"，
		则不存在静态资源访问不到
	-->
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

由于设置了**url-pattern为："/"**，接下来我们还需要设置**springmvc**的配置文件，让静态资源可以被访问到。有两种方式

1. 第一种方式

```xml
<!--添加该标签-->
<mvc:default-servlet-handler />
<!--
原理：
	给程序内存中增加一个处理器对象：DefaultServletHttpRquestHandler。
	让这个对象可以把接收到的请求转发给Tomcat的default这个servlet。
	但是这个标签与@RequestMapping这个注解有冲突，所以需要加入注解驱动：<mvc:annotation-driven /> 
-->
<mvc:annotation-driven /> 
```

2. 第二种方式

```xml
<!--
	使用框架中的：<mvc：resource mapping="" location=""/>标签，
	标签加入后框架会自己创建ResourceHttpRequestHandler这个处理器对象。
	让这个对象处理静态资源的访问，不依赖于Tomcat服务器。该标签与@RequestMapping
	注解有冲突，需要加注解驱动：<mvc:annotation-driven /> 
	参数：
		location：静态资源在你的项目中的位置 
		mapping：访问静态资源的URI地址，使用通配符 ** ，代表多级任意
	参数内的静态资源皆可以被访问
-->
<mvc:resources location="/img/" mapping="/img/**"/>
```

好啦，这就是目前作为一个算不上菜鸟的菜鸟对springmvc静态资源访问的掌握程度。欢迎留言