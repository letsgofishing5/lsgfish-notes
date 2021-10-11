#### 依赖

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.2.17.RELEASE</version>
</dependency>
```

### web.xml

#### 配置中央调度器

```xml
<servlet>
    <servlet-name>springmvc</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <!--读取springmvc配置文件-->
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:springmvc.xml</param-value>
    </init-param>
    <!--tomcat启动后，创建Servlet对象-->
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>springmvc</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

#### 视图解析器

```xml
<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <property name="prefix" value="/WEB-INF/view"/>
    <property name="suffix" value=".jsp"/>
</bean>
```

#### 设置字符编码过滤器

```xml
<filter>
    <filter-name>encodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>utf-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceRequestEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
    <init-param>
        <param-name>forceResponseEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```



### 控制类

#### 注解

1. @RequestMapping：请求映射，作用是把一个请求地址和一个方法绑定在一起，一个请求指定一个方法处理

   1. 属性：value：表示请求的地址，method：表示请求的方式（RequestMethod.GET）

   2. 位置：方法上面，在类上面

   3. 返回值：ModelAndView，表示本次请求的结果

      1. model：数据

      2. view：视图

         ```java
         @RequestMapping("/test")
         public ModelAndView requestMapper(){
             ModelAndView modelAndView = new ModelAndView();
             //添加数据
             modelAndView.addObject("name", "张三");
         
             return modelAndView;
         }
         ```



#### 接收参数

##### 逐个接收参数

注解：@RequestParam("传递过来的参数") Object name