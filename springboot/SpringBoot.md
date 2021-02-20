# SpringBoot

## springboot目录解说：

```yaml
1、目录讲解
	 src/main/java：存放代码
	 src/main/resources
	 	static: 存放静态文件，比如 css、js、image, （访问方式 http://localhost:8080/js/main.js）
	 	templates:存放静态页面jsp,html,tpl
	 	config:存放配置文件,application.properties
	 	resources:
	项目默认的目录名在访问时默认在这些目录中寻找，所有可以不加上目录名，访问static目录下的图片时，不需要写上static
 2、引入依赖 Thymeleaf
 	<dependency>
	   <groupId>org.springframework.boot</groupId>
	   <artifactId>spring-boot-starter-thymeleaf</artifactId>
	</dependency>
	注意：如果不引人这个依赖包，html文件应该放在默认加载文件夹里面，
	比如resources、static、public这个几个文件夹，才可以访问

 3、同个文件的加载顺序,静态资源文件
     Spring Boot 默认会挨个从
     META/resources > resources > static > public  里面找是否存在相应的资源，如果有则直接返回。

 4、默认配置	
 	1）官网地址：https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-developing-web-applications.html#boot-features-spring-mvc-static-content
 	
	//项目可访问静态资源配置如下
 	2）spring.resources.static-locations = classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/ 

 5、静态资源文件存储在CDN
	一般大的项目静态资源存放到自己公司的cdn上，这样有利于提升访问速度
```



## 核心配置文件-application.properties

```properties
#配置Tomcat端口号
server.port=8081
#配置项目根
server.servlet.context-path=/springBoot
```

###### 一个SpringBoot中只能有一个核心配置文件

> 核心配置文件两种形式：application.properties或者application.yml
>
> **application.yml**
>
> ```yml
> server:
>    port: 8081
>    servlet:
>      context-path: /springBoot
> ```

###### 多环境下核心配置文件

>  用来解决多种环境下，修改信息问题

1. properties切换配置环境

   ```properties
   #SpringBoot主核心配置文件
   #激活使用的配置文件
   spring:
     profiles:
       active: dev
   ```

2.  yaml切换配置环境

   ```yaml
   server:
     port: 8081
   spring:
     profiles:
       active: dev #用来指定使用的配置环境
   ---
   server:
     port: 8082
   spring:
     profiles: dev #声明自己的环境
   ---
   server:
     port: 8083
   spring:
     profiles: test
   ```

   

##### springBoot自定义核心配置文件

###### 从核心配置文件中获取值

> 1、使用注解@Value("${key}")
>
> ```java
> 
>     @Value("${school.name}")
>     private String schName;
>     @Value("${school.address}")
>     private String schAddress;
> 
>     @RequestMapping("/test.do")
>     @ResponseBody
>     public String test01(){
>         return "学校名："+schName+"地址："+schAddress;
>     }
> ```
>
> 2、application.properties配置文件
>
> ```properties
> school.name:123
> school.address:345
> ```

###### 将自定义配置映射到一个对象

1. 新建一个对象，加入注解：@ConfigurationProperties(prefix = "school")、@Component，提供get，set方法

   ```java
   @Component
   @ConfigurationProperties(prefix = "school")
   public class School {
       private String name;
       private String address;
   
       public void setName(String name) {
           this.name = name;
       }
   
       public void setAddress(String address) {
           this.address = address;
       }
   
       public String getName() {
           return name;
       }
   
       public String getAddress() {
           return address;
       }
   }
   ```

2. application.properties核心配置文件

   ```properties
   #SpringBoot主核心配置文件
   #激活使用的配置文件
   server.port=8080
   server.servlet.context-path=/springBoot
   
   school.name=123
   school.address=345
   ```

3. 控制层添加对象属性

   ```java
       @Autowired
       private School school;
   ```

**小结**：必须要有统一的前缀

## SpringBoot的Web开发

#### springBoot集成jsp

> 使用 **jsp** 文件则需要使用**webapp**目录

1. 需要添加依赖

   ```xml
   <!--引入SpringBoot内嵌Tomcat对jsp的解析依赖，不添加解析不了jsp-->
   <dependency>
       <groupId>org.apache.tomcat.embed</groupId>
       <artifactId>tomcat-embed-jasper</artifactId>
   </dependency>
   <!--需要加入servlet依赖-->
   <dependency>
       <groupId>javax.servlet</groupId>
       <artifactId>javax.servlet-api</artifactId>
       <scope>provided</scope>
   </dependency>
   ```
   
   ```xml
   
   <!--还需要在build下指定资源路径-->
   <!--
     Springboot项目默认推荐使用的前端引擎是thymeleaf
     现在我们要使用springboot集成jsp,手动指定jsp最后编译的路径
     而且springboot集成jsp编译jsp的路径是springboot规定好的位置
     META- INF /resources
    -->
   <resources>
       <resource>
           <!--源文夹-->
           <directory>src/main/webapp</directory>
           <!--指定编译到META- INF /resources-->
           <targetPath>META- INF/resources</targetPath>
           <!--指定源文件夹中的哪个资源要编译进行-->
           <includes>
               <include>**/*.*</include>
           </includes>
       </resource>
   </resources>
   ```
   
   
   
2. 需要在核心配置文件中配置视图解析器

   ```properties
   #配置视图解析器
   spring.mvc.view.prefix=/
   spring.mvc.view.suffix=.jsp
   ```


3. **创建webapp目录步骤**

> 1. 先在**src/main** 目录下，创建一个普通目录，
>
> 2. 打开**file——project structure**目录，
>
>    ![springboot-web](C:\Users\cth\Pictures\Camera Roll\springboot-web.png)

#### 手工创建一个springBoot工程

1. 先创建一个普通java的maven工程

2. 修改pom文件，将下面配置拷进去，进行修改

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
       <modelVersion>4.0.0</modelVersion>
       <parent>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-parent</artifactId>
           <version>2.4.1</version>
           <relativePath/>
       </parent>
       <groupId>com.cth</groupId>
       <artifactId>项目包名</artifactId>
       <version>0.0.1-SNAPSHOT</version>
   
       <properties>
           <java.version>1.8</java.version>
       </properties>
   
       <dependencies>
           <!--springboot项目起步依赖-->
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-web</artifactId>
           </dependency>
       </dependencies>
   
       <build>
           <resources>
               <resource>
                   <directory>src/main/webapp</directory>
                   <targetPath>META-INF/resources</targetPath>
                   <includes>
                       <include>**/*.*</include>
                   </includes>
               </resource>
           </resources>
           <plugins>
               <!--代码自动生成插件-->
               <plugin>
                   <groupId>org.mybatis.generator</groupId>
                   <artifactId>mybatis-generator-maven-plugin</artifactId>
                   <version>1.4.0</version>
                   <configuration>
                       <!--配置文件的位置-->
                       <configurationFile>GeneratorMapper.xml</configurationFile>
                       <verbose>true</verbose>
                       <overwrite>true</overwrite>
                   </configuration>
               </plugin>
               <plugin>
                   <groupId>org.springframework.boot</groupId>
                   <artifactId>spring-boot-maven-plugin</artifactId>
               </plugin>
           </plugins>
       </build>
   
   </project>
   
   ```

3. 创建一个springboot启动项，加上注解：@SpringBootApplication

   ```java
   @SpringBootApplication
   public class Application {
   	public static void main(String[] args) {
   		SpringApplication.run(Application.class, args);
   	}
   
   }
   ```
   
4. 修改resources目录，在该目录下，新建目录：static，templates，创建核心配置文件：application.properties

#### 集成Mybatis

1. 添加mybatis集成springboot的**起步依赖**

   ```xml
   		<!--mysql依赖-->
   		<dependency>
   			<groupId>mysql</groupId>
   			<artifactId>mysql-connector-java</artifactId>
   			<version>5.1.9</version>
   		</dependency>
   		<!--mybatis集成springboot起步依赖-->
   		<dependency>
   			<groupId>org.mybatis.spring.boot</groupId>
   			<artifactId>mybatis-spring-boot-starter</artifactId>
   			<version>2.1.4</version>
   		</dependency>
   ```

##### mybatis的逆向工程

> 使用mybatis提供的逆向工程生成实体bean，映射文件

1. 在项目下，生成一个**GeneratorMapper.xml**配置文件

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE generatorConfiguration
           PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
           "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
   <generatorConfiguration>
           <!--指定连接数据库的JDBC 驱动包所在位置，指定到你本机的完整路径-->
       <classPathEntry location="D:\softwares\Java_Softwares\maven\repository\mysql\mysql-connector-java\5.1.9\mysql-connector-java-5.1.9.jar" />
           <!--配置 table 表信息内容体，targetRuntime指定采用MyBatis3的版本-->
        <context id="tables" targetRuntime="MyBatis3">
           <!--抑制生成注释，由于生成的注释都是英文的，可以不让它生成-->
           <commentGenerator>
               <property name="suppressDate" value="true"/>
               <property name="suppressAllComments" value="true"/>
           </commentGenerator>
           <!--配置数据库连接信息-->
           <jdbcConnection driverClass="com.mysql.jdbc.Driver"
                           connectionURL="jdbc:mysql://localhost:3306/test"
                           userId="root"
                           password="cthcth">
           </jdbcConnection>
           <!--生成model类，targetPackage 指定 model 类的包名，targetProject 指定生成的 model放在eclipse的哪个工程下面-->
           <javaModelGenerator targetPackage="com.cth.domain"
                               targetProject="src/main/java">
               <property name="enableSubPackages" value="false"/>
               <property name="trimStrings" value="false"/>
           </javaModelGenerator>
                <!-- 生成MyBatis 的Mapper.xml 文件，targetPackage 指定mapper .xml 文件的
            包名， targetProject 指定生成的mapper.xml 放在eclipse 的哪个工程下面-->
                <sqlMapGenerator targetPackage="com.cth.dao"
                                 targetProject="src/main/java">
                    <property name= "enableSubPackages" value= "false"/>
                </sqlMapGenerator>
                <!-- 生成MyBatis 的Mapper 接口类文件, targetPackage 指定Mapper接口类的包名，
                targetProject指定生成的Mapper 接口放在eclipse 的哪个工程下面-->
           <javaClientGenerator type= "XMLMAPPER"
                targetPackage="com.cth.dao" targetProject= "src/main/java">
                <property name="enableSubPackages" value= "false"/>
           </javaClientGenerator>
       <!--数据库表名及对应的Java 模型类名-->
           <table tableName="tb_exam" domainObjectName="Exam"
                enableCountByExample= "false"
                enableUpdateByExample="false"
                enableDeleteByExample="false"
                enableSelectByExample="false"
               selectByExampleQueryId="false"/>
       </context>
   </generatorConfiguration>
   ```

2. 在pom文件中，设置逆向工程生成插件

   ```xml
   				<!--代码自动生成插件-->
   			<plugin>
   				<groupId>org.mybatis.generator</groupId>
   				<artifactId>mybatis-generator-maven-plugin</artifactId>
   				<version>1.4.0</version>
   				<configuration>
   				<!--配置文件的位置-->
   					<configurationFile>GeneratorMapper.xml</configurationFile>
   					<verbose>true</verbose>
   					<overwrite>true</overwrite>
   				</configuration>
   			</plugin>
   ```

   逆向工程完毕


##### 集成mybatis

1. **dao层的注解**，在接口上配置注解：**@Mapper**，或者在入口处配置注解：**@MapperScan**

   ```java
   @SpringBootApplication
   @MapperScan(basePackages = "com.cth.dao")
   public class SpringbootMybatisApplication {
   
   	public static void main(String[] args) {
   		SpringApplication.run(SpringbootMybatisApplication.class, args);
   	}
   
   }
   ```

2. 核心配置文件中配置数据库：

   ```xml
   #配置数据库连接
   spring.datasource.driver-class-name=com.mysql.jdbc.Driver
   spring.datasource.url=jdbc:mysql://localhost:3306/test
   spring.datasource.username=root
   spring.datasource.password=cthcth
   ```

3. 在pom文件中，指定资源文件

   ```xml
       <resource>
           <directory>src/main/java</directory>
           <includes>
               <include>**/*.xml</include>
           </includes>
   	</resource>
   ```

##### mapper映射文件与dao分家

1. 在**resources**目录下新建一个mapper目录，将所有的mapper映射文件都放进去

2. 在**核心配置文件**中指定mapper的地址

   ```properties
   #指定mapper的资源地址
   mybatis.mapper-locations=classpath:mapper/*.xml
   ```

###### 集成mybatis小结

1. 加入依赖：mysql与mybatis依赖
2. 添加逆向工程配置文件和插件
3. 指定**src/main/java**目录下的配置文件资源
4. 如果映射文件与接口分家，则不需要指定资源文件

#### 支持事务

> 事务是一个完整的功能，这也叫一个完整的业务，事务也只跟DML语句有关系：增删改

1. 在service层的**方法**上添加一个**@Transactional**注解即可开启事务（可选项：同时在启动类上添加注解**@EnableTransactionManagement()**

#### springmvc常用注解

1. 控制层把注解**@Controller**换成**@RestController**，相当于控制层上加**@Controller**+方法上加**@ResponseBody**，意味着，当前控制层中所有的方法返回值都是**JSON对象**
2. **@RequestMapping**可以换成**@GetMapping**，相当于@RequestMapping注解加上了 method=RequestMethod.GET，该注解通常 用在查询数据时使用，**POST**请求同理
3. **@DeleteMapping**，通常用于删除数据
4. **@PutMapping**，通常用于更新数据使用



#### RESTFul风格

> 比如我们要访问一个http接口: http://localhost:8080/boot/order?id=1021&status=1
>
> 采用RESTFul风格则http地址为 http://localhost:8080/boot/order/1021/1

##### 注解

1. **@PathVariable**
   获取url中的数据
   该注解是实现**RESTFul**最主要的一个注解

   ```java
   @GetMapping(value ="/student/detail/{id}/{age}" )
   public object student1 (@PathVariable("id") Integer id,@PathVariable("age") Integer age) { 
       Map<String, object> retMap = new HashMap<>();
       retMap. put("id",id);
       retMap.put("age" ,age);
       return retMap;
   }
   @RequestMapping(value = "/student/detail/{id}/{status}")
   @DeleteMapping(value = "/student/detail/{id}/{status}”)
   public Object student2 (@PathVariable("id") Integer id,@PathVariable("status") Integer status )
       Map<String, Object> retMap = new HashMap<>();
       retMap. put("id",id);
       retMap.put("status" ,status);
       return retMap;
   }
   //以上代码student1和student2会出现请求路径迷糊的错误
   //通常在RESTful风格中方法的请求方式会按增删改查的请求方式来区分
   ```

2. RESTFul原则

   1. ➢增 post请求、删delete请求、改put请求、查get请求
   2. ➢请求路径不要出现动词
      例如:查询订单接口
      /boot/order/1021/1 (推荐)
      /boot/queryOrder/1021/1 ( 不推荐）
   3. ➢分页、 排序等操作，不需要使用斜杠传参数
      例如:订单列表接口
      /boot/orders?page= 1&sort=desc
      一般传的参数不是数据库表的字段，可以不采用斜杠

#### 集成Redis

1. 添加操作**Redis**数据类型的依赖

   ```xml
   	<dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-data-redis</artifactId>
   	</dependency>
   ```

2. 在**springboot核心配置文件**中添加**redis的配置**

   ```properties
       spring.redis.host=192.168.192.131
       spring.redis.port=6379
       spring.redis.password=cthcth
   ```

3. 在service层获取**Redis**的模板对象

   ```java
       @Autowired
       private RedisTemplate<Object,Object> template;
       @Override
       public void setKV(String key, String value) {
           template.opsForSet().add(key,value);
       }
   ```
   

#### 集成Dubbo

> a.**接口工程**:存放**实体bean和业务接口**
> b.**服务提供者**:业务接口的实现类并将服务暴露且注册到注册中心,调用数据持久层
> 	-添加依赖(dubbo，注册中心，接口工程
> 	-配置服务提供者核心配置文件
> c.**服务消费者**:处理浏览器客户端发送的请求,从注册中心调用服务提供者所提供的服务
> 	-添加依赖(dubbo ,注册中心，接口工程
> 	-配置服务消费者核心配置文件

##### 步骤

1. 创建一个普通java maven工程

2. 创建两个springboot的web工程

3. 修改pom文件(**提供者**)

   ```xml
   <!--(提供者)-->
   <!--dubbo集成springboot起步依赖-->
   <dependency>
       <groupId>com.alibaba.spring.boot</groupId>
       <artifactId>dubbo-spring-boot-starter</artifactId>
       <version>2.0.0</version>
   </dependency>
   <!--注册中心-->
   <dependency>
       <groupId>com.101tec</groupId>
       <artifactId>zkclient</artifactId>
       <version>0.10</version>
   </dependency>
   <!--接口工程：自定义的接口工程-->
   <dependency>
       <groupId>com.cth</groupId>
       <artifactId>springboot-dubbo-interface</artifactId>
       <version>1.0-SNAPSHOT</version>
   </dependency>
   <!--接口工程-->
   ```

4. 核心配置文件

   ```properties
   #dubbo提供者声明
   spring.application.name=21-springboot-dubbg-provider
   #当前工程是一个服务提供者
   spring.dubbo.server=true
   #设置注册中心
   spring.dubbo.registry=zookeeper://192.168.154.128:2181
   ```

5. 修改pom文件(**消费者**)

   ```xml
   <!--(提供者)-->
   <!--dubbo集成springboot起步依赖-->
   <dependency>
       <groupId>com.alibaba.spring.boot</groupId>
       <artifactId>dubbo-spring-boot-starter</artifactId>
       <version>2.0.0</version>
   </dependency>
   <!--注册中心-->
   <dependency>
       <groupId>com.101tec</groupId>
       <artifactId>zkclient</artifactId>
       <version>0.10</version>
   </dependency>
   <!--接口工程--自定义的接口工程-->
   <dependency>
       <groupId>com.cth</groupId>
       <artifactId>springboot-dubbo-interface</artifactId>
       <version>1.0-SNAPSHOT</version>
   </dependency>
   ```

6. 核心配置文件

   ```properties
   #dubbo提供者声明
   spring.application.name=21-springboot-dubbg-provider
   #设置注册中心
   spring.dubbo.registry=zookeeper://192.168.154.128:2181
   ```

7. 提供者实现类需要添加注解：@Component，@Service(这里的service注解是dubbo下的service)

   ```java
   @Component
   @Service(interfaceClass = UserService.class,version = "1.0.0",timeout = 15000)
   public class UserServiceImpl implements UserService {
       @Override
       public User getUser(String id) {
           User u = new User();
           u.setId(id);
           u.setAge("1234");
           u.setName("我是谁？");
           return u;
       }
   }
   ```

8. 消费者引用接口需要使用注解：@Reference(注意，这里也是dubbo的注解)

   ```java
   @RestController
   public class UserControl {
       @Reference(interfaceClass = UserService.class,version = "1.0.0",check =false)
       private UserService userService;
       @GetMapping("dubbo")
       public User dubbo(String id){
           User user = userService.getUser(id);
           return user;
       }
   }
   ```

9. 最后在提供者与消费者的启动类上添加注解：@EnableDubboConfiguration，用来启动dubbo配置

   ```java
   @SpringBootApplication
   @EnableDubboConfiguration
   public class Application {
       public static void main(String[] args) {
           SpringApplication.run(Application.class, args);
       }
   }
   ```


#### dubbo集成SSM

> **接口工程：**存放实体bean和业务接口
> **服务提供者：**它是一个springBoot框架web项目，集成MyBatis,Redis
> 	-添加依赖:MyBatis依赖,MysQL驱动依赖,Dubbo依赖,zookeeper依赖,Redis依赖,接口工程-配置springboot核心配置文件
> 	-配置连接数据库
> 	-配置连接redis-配置dubbo
> **服务消费者：**它是一个springBoot框架web项目，集成JSP , dubbo
> 	-添加依赖:Dubbo依赖,zookeeper依赖,解析JsP页面的依赖,接口工程-配置springBoot核心配置文件
> 	-配置视图解析器
> 	-配置dubbo

## 其他功能

### 拦截器

1. 实现：HandlerInterceptor

   ```java
   public class CustLoginIntercept implements HandlerInterceptor {}
   ```

2. 将拦截器放入容器中，自定义一个配置类，实现**WebMvcConfigurer**

   **注意：**springboot中，所有实现**web定制功能**的，都需要实现这个**WebMvcConfigurer**接口
   
   ```java
   @Configuration
   public class WebLoginConfig implements WebMvcConfigurer {
       @Override
       public void addInterceptors(InterceptorRegistry registry) {
           registry.addInterceptor(new CustLoginIntercept())
                   .addPathPatterns("/**")//拦截所有
                   .excludePathPatterns("/","/login");//放行该路径
       }
   }
   ```

### 使用servlet

##### 第一种方式-注解

1. 创建一个servlet，继承HTTPServlet
2. 在servlet上添加注解：@WebServlet(urlPatterns="定义请求路径")
3. 在springboot的启动类上添加注解：@ServletComponentScan(basePackage="servlet 所在包的包名")

##### 第二种方式

1. 创建一个servlet，继承HTTPServlet

2. 配置一个配置类

   ```java
   @Configuration
   public class CustomConfig {
       @Bean
       public ServletRegistrationBean servletRegistrationBean(){
           ServletRegistrationBean sb = new ServletRegistrationBean(new CustomServlet(),"/servlet");//第一个参数是servlet类，第二个参数是访问的路径,路径开头一定要加斜杠
           return sb;
       }
   }
   ```

### 使用filter

##### 第一种方式-注解

1. 实现filter接口，加上注解：**@WebFilter**

   ```java
   @WebFilter(filterName = "/CustomFilter")
   public class CustomFilter implements Filter {}
   ```

2. 在springboot的启动类上添加注解：@ServletComponentScan(basePackage="filter所在包的包名")

##### 第二种方式

1. 创建一个filter，实现filter接口

2. 配置一个配置类

   ```java
   @Configuration
   public class FilterConfig {
       @Bean
       public FilterRegistrationBean filterRegistrationBean(){
           FilterRegistrationBean fr = new FilterRegistrationBean(new CustomFilter());
           fr.addUrlPatterns("/*");//哪些路径需要被过滤，这里两个*失效
           return fr;
       }
   }
   ```

###### 过滤器filter的疑问

1. 过滤器的路径设置可有可无，不受影响

### springboot设置字符编码

##### 方式一

```java

@Configuration
public class FilterConfig {
    @Bean
    public FilterRegistrationBean filterRegistrationBean(){
//        创建字符编码过滤器
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
//        设置强制使用指定字符编码
        characterEncodingFilter.setEncoding("utf-8");
//        设置指定字符编码
        characterEncodingFilter.setForceEncoding(true);
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
//        设置字符编码过滤器
        filterRegistrationBean.setFilter(characterEncodingFilter);
//        设置字符编码过滤器路径
        filterRegistrationBean.addUrlPatterns("/*");
        return filterRegistrationBean;
    }
}
//同时需要设置核心配置文件，关闭springboot的http字符编码支持，这样我们自己设置的才能生效
```

**核心配置文件设置**

```properties
spring.http.encoding.enabled=false
```

##### 方式二

核心配置文件即可（但是我的好像失效了）

```yaml
spring:
  http:
    encoding:
      enabled: true
      charset: utf-8
      force: true
```

###### 配置与配置类方法都失效

### 打war包

1. 加入内置的Tomcat依赖

2. 指定webapp资源编译位置

3. 核心配置：视图解析器

4. 在pom文件中将 packaging 设置为 war 包

5. 打war包，端口号根据本地Tomcat为准

   ```xml
   <packaging>war</packaging>
   
   <dependency>
       <groupId>org.apache.tomcat.embed</groupId>
       <artifactId>tomcat-embed-jasper</artifactId>
   </dependency>
   
   <finalName>SPRINGBOOT01</finalName>
   <resources>
       <resource>
           <directory>src/main/resources</directory>
           <includes>
               <include>**/*.*</include>
           </includes>
       </resource>
       <resource>
           <directory>src/main/java</directory>
           <includes>
               <include>**/*.*</include>
           </includes>
       </resource>
       <resource>
           <!--源文夹-->
           <directory>src/main/webapp</directory>
           <!--指定编译到META- INF /resources-->
           <targetPath>META- INF/resources</targetPath>
           <!--指定源文件夹中的哪个资源要编译进行-->
           <includes>
               <include>**/*.*</include>
           </includes>
       </resource>
   </resources>
   ```

### 打jar包

1. 添加资源指定路径(**重点**)

   ```xml
   <resource>
       <directory>src/main/resources</directory>
       <includes>
           <include>**/*.*</include>
       </includes>
   </resource>
   ```

2. 修改打包插件的版本

   ```xml
   <plugin>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-maven-plugin</artifactId>
       <version>1.4.2.RELEASE</version>
   </plugin>
   ```

3. jar包以 内嵌Tomcat为准

##### Linux中启动jar包

1. 执行：vim run.sh
2. 编辑：java -jar  jar全名，保存退出
3. 执行：chmod 777 run.sh
4. 执行：./run.sh

### logback日志

1. 在根路径下创建：logback-spring.xml

   SpringBoot 官方推荐优先使用带有 -spring 的文件名作为日志配置 ，默认的命名规则，并且放在：src/main/resources目录下，也可以使用核心配置文件自定义名字

   ```properties
   logging.config=classpath:logging-config.xml
   ```

2. 视频地址 ：https://www.bilibili.com/video/BV1PZ4y1j7QK?p=72&spm_id_from=pageDriver

   第20分钟

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- 日志级别从低到高分为 TRACE < DEBUG < INFO < WARN < ERROR < FATAL，如果
设置为 WARN，则低于 WARN 的信息都不会输出 -->
<!-- scan:当此属性设置为 true 时，配置文件如果发生改变，将会被重新加载，默认值为
true -->
<!-- scanPeriod:设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认
单位是毫秒。当 scan 为 true 时，此属性生效。默认的时间间隔为 1 分钟。 -->
<!-- debug:当此属性设置为 true 时，将打印出 logback 内部日志信息，实时查看 logback
运行状态。默认值为 false。通常不打印 -->
<configuration scan="true" scanPeriod="10 seconds">
    <!--输出到控制台-->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <!--此日志 appender 是为开发使用，只配置最底级别，控制台输出的日志级别是大
       于或等于此级别的日志信息-->
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>debug</level>
        </filter>
        <encoder>
            <Pattern>%date [%-5p] [%thread] %logger{60} [%file : %line] %msg%n</Pattern>
            <!-- 设置字符集 -->
            <charset>UTF-8</charset>
        </encoder>
    </appender>
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!--
			<File>/home/log/stdout.log</File>
			日志文件输出位置
		-->
        <File>D:/log/stdout.log</File>
        <encoder>
            <pattern>%date [%-5p] %thread %logger{60}
                [%file : %line] %msg%n</pattern>
        </encoder>
        <rollingPolicy
                class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 添加.gz 历史日志会启用压缩 大大缩小日志文件所占空间 -->
            <!--<fileNamePattern>/home/log/stdout.log.%d{yyyy-MM-dd}.log</fileNamePattern>-->
            <fileNamePattern>D:/log/stdout.log.%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory><!-- 保留 30 天日志 -->
        </rollingPolicy>
    </appender>
    <!--单个定义，需要指定哪个包输出日志-->
    <logger name="com.abc.springboot.mapper" level="DEBUG" />
	<!--
		如果root标签知道指定了日志级别，那么以根标签为准，没有则以当前追加器日志级别为准
		如果root没有值，则默认是debug级别
	-->
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE"/>
    </root>
    <!--有效优先级别：root > logger > appender-->
 </configuration>
```

##### 自定义在控制台打印日志

1. 依赖：lombok
2. 在类上加注解：@Slf4j
3. 使用：log.info("日志输出");

## 集成Thymeleaf

[官网](www.thymeleaf.org)

##### 使用规则

1. 添加约束

   ```html
   <html lang="en" xmlns:th="http://www.thymeleaf.org"/>
   ```

2. thymeleaf中，需要以斜杠开头，代表相对路径，而HTML语法相反

3. 依赖

   ```xml
   <!--SpringBoot 集成 Thymeleaf 的起步依赖-->
   <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
   </dependency>
   ```

   

### thymeleaf 语法

##### 设置thymeleaf的前后缀

```yaml
spring:
  thymeleaf:
    prefix: classpath:/templates/
    suffix: .html
```

##### 页面同步-关闭缓存

```yaml
#thymeleaf默认缓存是开启的，关闭缓存，设置内置Tomcat资源同步更新
spring:
  thymeleaf:
    cache: false
```

##### thymeleaf变量表达式

> 标准变量表达式用于访问容器(tomcat）上下文环境中的变量，功能和EL中的 $相同。Thymeleaf中的变量表达式使用${变量名}的方式获取Controller中 model其中的数据

1. 标准变量表达式：${}

2. 选择表达式（星号表达式）：*{}

   ```html
   <!--
   	*{}必须使用th:object属性来绑定这个对象在div子标签中使用 * 来代替绑定的对象
   -->
   <div th:object="${user}">
       <span th:text="*{id}"></span>
   </div>
   ```

3. 标准变量表达式与选择变量表达式混合使用

   ```html
   <div th:text="*{user.id}">
       
   </div>
   ```

4. 对于选择表达式和混合表达式，**不推荐**

##### 路径表达式

1. @{}

   ```html
   <a th:href="@{/相对路径}">跳转</a>
   ```

2. 带参

   ```html
   //第一种写法
   <a th:href="@{'/相对路径?'+${id}}">跳转</a>
   //第二种写法(强烈推荐)
   <a th:href="@{/相对路径(id=${id},userName=${name})}">跳转</a>
   ```

3. 使用**RESTFul**风格

   ```html
   //后面用加号拼接，使用的是idea编写，加号这里一直跳红，一直以为自己写错，运行没有问题
   <a th:href="@{/'相对路径'+${id}}">RESTFul风格跳转</a>
   ```

### 常见属性

1. 就是在原HTML页面属性前面添加：**th:**
2. 判断何时使用**thymeleaf**，就看何时动态取值何时使用**thymeleaf**

### 循环遍历list集合

```html
<!--遍历-->
<div th:each="user,userStat:${users}">[[${user}]]</div>
<!--第二种方式-->
<div th:each="user,userStat:${users}" th:text="${user}"></div>
```

### 条件判断

```html
<div th:if="${sex eq 0}">男</div>//判断相等
<div th:if="${sex ne 0}">男</div>//判断相等，ne就是不等于
<div th:unless="${sex eq 0}">女</div>//判断取反,unless与if相反
```

### 开关语句

```html
<div th:switch="${test}">
    <span th:case="1">测试1</span>
    <span th:case="2">测试2/span>
    <span th:case="*">无此测试</span>
</div>
```

### 内联表达式 

> th:inline有三个取值类型(text, javascript和none)， 值为none什么都不做，没有效果

```html
//内联文本:th:inline="text"
<div th:inline="text"> 
数据:[[${data}]]
</div>
//内敛脚本th: inline="javascript"
<script type="text/javascript" th : inline="javascript">
    function showData() {
   	 alert([[${data}]]);
	}
</script>
```

### 运算符

> 三元运算：表达式?”正确结果”:”错误结果” 
>
> 算术运算：+ , - , * , / , % 
>
> 关系比较:：> , < , >= , <= ( gt , lt , ge , le ) 
>
> 相等判断：== , != ( eq , ne )

### 字符串拼接

```html
<span th:text="| 在双引号中添加两个竖杠在里面使用${test}取值 |"></span>
```

### 表达式基本对象

#### request

> \#request 相 当 于 httpServletRequest 对 象 ， 这 是 3.x 版 本 ， 若 是 2.x 版 本 使 用 #httpServletRequest，在页面获取应用的上下文根，一般在 js 中请求路径中加上可以避免 404

#### session

> 相当于 HttpSession 对象，这是 3.x 版本，若是 2.x 版本使用#httpSession 在后台方法中向 session 中放数据

### 表达式功能对象

模板引擎提供的一组功能性内置对象，可以在模板中直接使用这些对象提供的功能方法 工作中常使用的数据类型，如集合，时间，数值，可以使用 Thymeleaf 的提供的功能性对象 来处理它们。

内置功能对象前都需要加#号，内置对象一般都以 s 结尾 官方手册：http://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html

```html
#dates: java.util.Date 对象的实用方法：
	<span th:text="${#dates.format(curDate, 'yyyy-MM-dd HH:mm:ss')}"></span>

#calendars: 和 dates 类似, 但是 java.util.Calendar 对象；

#numbers: 格式化数字对象的实用方法；

#strings: 字符串对象的实用方法： contains, startsWith, prepending/appending 等；

#objects: 对 objects 操作的实用方法；

#bools: 对布尔值求值的实用方法；

#arrays: 数组的实用方法；

#lists: list 的实用方法，比如<span th:text="${#lists.size(datas)}"></span>

#sets: set 的实用方法；

#maps: map 的实用方法；

#aggregates: 对数组或集合创建聚合的实用方法；

```

## SpringSession

### session共享

1. 添加依赖

   ```xml
   <dependency>
       <groupId>org.springframework.session</groupId>
       <artifactId>spring-session-data-redis</artifactId>
       <version>1.3.1.RELEASE</version>
   </dependency>
   <dependency>
       <groupId>org.springframework</groupId>
       <artifactId>spring-web</artifactId>
       <version>4.3.16.RELEASE</version>
   </dependency>
   ```

2. 配置filter，这个filter是固定的

   ```xml
   <filter>
       <filter-name>springSessionRepositoryFilter</filter-name>
       <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
   </filter>
   <filter-mapping>
       <filter-name>springSessionRepositoryFilter</filter-name>
       <url-pattern>/*</url-pattern>
   </filter-mapping>
   ```

3. 配置监听器（可选）

   ```xml
   <!--实际开发中我们通常会使用springmvc来开发web工程，springmvc不需要启动监听器-->
   <context-param>
       <param-name>contextConfigLocation</param-name>
       <param-value>classpath:application.xml</param-value>
   </context-param>
   <listener>
       <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
   </listener>
   ```

4. 资源配置文件

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xmlns:context="http://www.springframework.org/schema/context"
          xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">
   <!--
       启动spring的注解支持，因为springsession中使用了spring的相关注解，
       因此需要启动spring的注解，这个步骤是可以省略的，实际工作中，我们使用<context:component-scan base-packing="com"/>
       来进行扫描包，这个标签中的功能包含了<context:annotation-config/>的功能
   -->
       <context:annotation-config/>
   <!--    定义一个用于专门配置SpringSession的bean标签-->
       <bean id="redisHttpSessionConfiguration"
             class="org.springframework.session.data.redis.config.annotation.web.http.RedisHttpSessionConfiguration"/>
   <!--    配置redis的，这是可选的配置，如果当前工程已经配置过redis，那么这个配置可以省略-->
       <bean class="org.springframework.data.redis.connection.jedis.JedisConnectionFactory">
           <property name="hostName" value="192.168.31.228"/>
           <property name="port" value="6379"/>
           <property name="password" value="cthcth"/>
       </bean>
   </beans>
   ```

### 同域名下不同项目session共享

```xml
<!--    定义一个用于专门配置SpringSession的bean标签-->
    <bean id="redisHttpSessionConfiguration" class="org.springframework.session.data.redis.config.annotation.web.http.RedisHttpSessionConfiguration">
<!--        设置最大存活时间，单位：秒，默认30分钟-->
        <property name="maxInactiveIntervalInSeconds" value="1800"/>
<!--        引入cookie的序列化-->
        <property name="cookieSerializer" ref="defaultCookieSerializer"/>
    </bean>
    <bean id="defaultCookieSerializer" class="org.springframework.session.web.http.DefaultCookieSerializer" >
<!--        指定springsession的sessionID的存储地址在根路径下，用于实现同域名不同项目的session共享-->
        <property name="cookiePath" value="/"/>
    </bean>
```

###  同根域名不同二级子域名的Session共享

```xml
<!--    定义一个用于专门配置SpringSession的bean标签-->
    <bean id="redisHttpSessionConfiguration"
          class="org.springframework.session.data.redis.config.annotation.web.http.RedisHttpSessionConfiguration">
<!--        设置最大存活时间，单位：秒，默认30分钟-->
        <property name="maxInactiveIntervalInSeconds" value="1800"/>
<!--        引入cookie的序列化-->
        <property name="cookieSerializer" ref="defaultCookieSerializer"/>
    </bean>
    <bean id="defaultCookieSerializer" class="org.springframework.session.web.http.DefaultCookieSerializer" >
<!--        指定springsession的sessionID的存储地址在根路径下，用于实现同域名不同项目的session共享-->
        <property name="cookiePath" value="/"/>
<!--        指定SpringSession的sessionID存放在共同的二级域名下-->
        <property name="domainName" value="相同的二级域名"/>
    </bean>
```

## springboot集成springsession

1. 依赖

   ```xml
   <!--		springboot与redis集成的依赖-->
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-data-redis</artifactId>
   </dependency>
   <!--		springSession将数据存放到redis中的依赖-->
   <dependency>
       <groupId>org.springframework.session</groupId>
       <artifactId>spring-session-data-redis</artifactId>
   </dependency>
   ```

2. 核心配置文件配置redis信息

   ```properties
   spring.redis.host=192.168.31.228
   spring.redis.port=6379
   spring.redis.password=123456
   #指定cookie的存域名用于实现同根域名不同二级域名的session共享
   server.servlet.session.cookie.domain=/ 
   #指定cookie的存放路径为根路径，用于实现不同项目名的session共享
   server.servlet.session.cookie.path=/ 
   #设置session的生命周期：30m,表示30分钟
   server.servlet.session.timeout=30m
   ```

   