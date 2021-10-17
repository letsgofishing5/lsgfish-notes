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

1. 如果传递参数字段名和方法中形参名一致，可以直接传递过来

2. 注解：@RequestParam

   属性：value、required

   ```java
   @RequestMapping("/other")
   public ModelAndView other(@RequestParam(value = "rname",required = false)String name){
       ModelAndView modelAndView = new ModelAndView();
       modelAndView.setViewName("/other");
       return modelAndView;
   }
   ```

#####  接收对象

使用Java对象，传递参数字段名和属性名一致，解构赋值。

直接使用**Java**中的对象即可

```java
@RequestMapping("/other")
public ModelAndView other(User user){
    ModelAndView modelAndView = new ModelAndView();
    modelAndView.setViewName("/other");
    return modelAndView;
}
```

#### 返回值

返回值四大类型

1. 返回ModelAndView
2. 返回String
3. 返回void：使用`response`返回`ajax`数据
4. 返回对象Object

#### 传递JSON格式数据

依赖

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
    <version>2.9.8</version>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.8</version>
</dependency>
```

框架发送json数据

1. 加依赖
2. 加配置：<mvc:annotation-driven/ >注解驱动
3. 在方法上加注解：＠ResponseBody。**注意该注解会走数据解析，不会走视图解析。也就是说只会返回数据，不会跳转页面**

### 处理静态资源

```xml
<!--    方式一：加配置文件-->
<mvc:annotation-driven/>
<mvc:default-servlet-handler/>
<!--    方式二：加配置文件-->
<mvc:annotation-driven/>
<mvc:resources mapping="root/**" location="/root/"/>

<!-- 
	两种方式都和@RequestMapping有冲突，所以需要添加注解驱动
-->
```

### 转发与重定向

forward：表示转发，可以访问WEB-INF目录下的资源的

redirect：表示重定向，不可以访问**WEB-INF**目录下的资源的，重定向的参数，需要通过**${param}**来接收

转发和重定向都不和试图解析器一起工作

```java
    vm.setViewName("forward:/WEB-INF/view/show.jsp")
```



## SSM整合

#### web.xml

```xml
<!--    加载springmvc配置文件-->
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
    <url-pattern>*</url-pattern>
</servlet-mapping>
<!--    加载spring配置文件-->
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring.xml</param-value>
</context-param>
<listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
<!--    字符集过滤器-->
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

#### 全局异常处理

1. 定义一个异常类，加注解：@ControllerAdvice
2. 在异常类中的方法上，加注解：@ExceptionHandler
3. 在@ExceptionHandler中可以指定通知哪个自定义的异常：@ExceptionHandler(User.class)，当程序出现了User异常，则自动执行该注解下的方法

#### 拦截器

1. 实现**HandlerInterceptor**接口
2. 配置文件中声明拦截器

##### 拦截器执行时间

1. 在请求处理之前，也就是controller类中的方法执行之前被拦截下来
2. 在控制器方法执行结束后也会触发拦截器
3. 在请求处理了结束后还会执行拦截

```xml

<mvc:interceptors>
    <mvc:interceptor>
        <!--拦截地址-->
        <mvc:mapping path="/user/**"/>
        <!--需要执行的拦截器-->
        <bean class="com.cth.test.Test"/>
    </mvc:interceptor>
</mvc:interceptors>
```

当需要执行多个拦截器时，拦截器声明的顺序就是拦截器的执行顺序

#### 拦截器与过滤器的区别

1. 过滤器是servlet中的对象，拦截器是框架中的对象
2. 过滤器实现Filter接口的对象，拦截器是实现HandlerInterceptor
3. 过滤器可以处理jsp，js，html等等。拦截器侧重拦截Controller的对象，如果你的请求不能被DispatcherServlet接收，这个请求不会执行拦截器内容
4. 过滤器是tomcat服务器创建的对象，拦截器是springmvc框架创建的对象
