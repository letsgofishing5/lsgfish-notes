# springboot-尚硅谷

官网地址：spring.io

尚硅谷笔记：https://www.yuque.com/atguigu/springboot

## 开发第一个Spring Boot应用程序

1. 创建一个普通的java的maven工程

2. 创建pom文件

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
       <modelVersion>4.0.0</modelVersion>
       
   	<parent>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-parent</artifactId>
           <version>2.4.2</version>
       </parent>
       
       <groupId>com.example</groupId>
       <artifactId>myproject</artifactId>
       <version>0.0.1-SNAPSHOT</version>
   
       <properties>
   		<java.version>1.8</java.version>
   	</properties>
       <dependencies>
           <!--springboot的web启动器，必须要有-->
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-web</artifactId>
           </dependency>
       </dependencies>
       <build>
           <!--springboot的打包插件-->
           <plugins>
               <plugin>
                   <groupId>org.springframework.boot</groupId>
                   <artifactId>spring-boot-maven-plugin</artifactId>
               </plugin>
           </plugins>
       </build>
   </project>
   ```

3. 创建一个java文件，目录结构：src/main/java/com/cth/application.class

   ```java
   package com.cth;
   
   import org.springframework.boot.SpringApplication;
   import org.springframework.boot.autoconfigure.SpringBootApplication;
   
   @SpringBootApplication
   public class application {
       public static void main(String[] args) {
           SpringApplication.run(application.class, args);
       }
   }
   
   ```

4. 在目录：src/main/resources下创建三个基本目录和文件

   目录：static、templates

   文件：application.yml

5. 点击编写的java类的main方法启动程序，出现下图代表一个基本springboot目录搭建完成

   ![](C:\Users\cth\Pictures\Saved Pictures\springboot第一个程序.png)

## 基础入门

官网地址：[](https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#common-application-properties)

### 容器

1. **@Configration**

   ```java
   
   /**
    * 1、配置类里面使用@Bean标注在方法上给容器注册组件，默认也是单实例的
    * 2、配置类本身也是组件
    * 3、proxyBeanMethods : 代理bean的方法
    *      FuLL( proxyBeanMethods = true)
    *      Lite( proxyBeanMethods = false)
    *		组件依赖
    */
   @Configuration//告诉spring 这是一个配置类 == 配置文件
   public class ConfigBean {
   
       /**
        * 外部无论对配置类中的这个组件注册方法调用多少次获取的都是之前注册容器中的单实例对象
        * @return
        */
       @Bean("pet")//给容器中添加组件，可以自定义名称：pet，如果没有自定义组件名称，则方法名 就是 组件名称
       public Pet getPet(){
           return new Pet(12, "狗蛋");
       }
       @Bean("master")
       public Master getPerson(){
           return new Master("主人", 234);
       }
   }
   
   ```

2. **@Import**

   导入外部组件

   视频地址：[](https:// www.bilibili.com/video/BV1gW411W7wy?p=8)

3. **@Conditional**

   条件装配：满足Conditional指定条件，则进行注入

4. **@ImportResource**

   导入XML配置文件：@ImportResource("classpath:application.xml")

### 配置绑定

> 只有在容器中的组件，才会拥有SpringBoot提供的强大功能

1. **@Component + @ConfigurationProperties(prefix="")**

   @Component与@ConfigurationProperties放在同一个类上

   ```JAVA
   @Component
   @ConfigurationProperties(prefix = "master")
   public class Master {
   	//需要提供get与set方法
   }
   ```

2. **@EnableConfigurationProperties(Pet.class) + @ConfigurationProperties(prefix="")**

   @EnableConfigurationProperties放在配置类上，@ConfigurationProperties放在实体类上

   ```java
   @ConfigurationProperties(prefix = "master")
   public class Master {
       //实体类，提供get与set方法
   }
   
   @Configuration//告诉spring 这是一个配置类 == 配置文件
   @EnableConfigurationProperties(Master.class)
   /**
   *	1.开启Master配置绑定功能
   *	2.把这个Master这个组件自动注册到容器中
   */
   public class ConfigBean {
   	//自定义配置类上，提供@Bean注解的方法
       @Bean("master")
       public Master getPerson(){
           return new Master();
       }
   }
   ```

### 自动配置原理

#### 1、引导加载自动配置类

```java
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(
    excludeFilters = {@Filter(
    type = FilterType.CUSTOM,
    classes = {TypeExcludeFilter.class}
), @Filter(
    type = FilterType.CUSTOM,
    classes = {AutoConfigurationExcludeFilter.class}
)}
)
public @interface SpringBootApplication {
 	……   
}
```

##### 1、@SpringBootConfiguration

​	@Configuration。代表当前是一个配置类

##### 2、@ComponentScan

​	指定扫描哪些，spring注解

##### 3、@EnableAutoConfiguration

1. @AutoConfigurationPackage

   自动配置包，指定了默认的包规则

2. @Import(AutoConfigurationImportSelector.class)

   导入上百个类，但不是每一个都生效，只有导入对应的包，才会对应生效，这叫**按需开启自动配置项**

#### springboot如何编写

1. 引入场景依赖，

   [](https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot)

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-web</artifactId>
   </dependency>
   ```

2. 查看自动配置了哪些

   1. 在核心配置文件中输入：**debug=true**，然后启动程序，在控制台可以查看哪些配置未启动

3. 如果有需要修改的

   1. 参考文档

   [](https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#common-application-properties)

   2. 自定义加入或者替换组件
      - @Bean、@Component

#### 开发小技巧

###### Lombok简化开发

1. 引入依赖

   ```xml
   <dependency>
       <groupId>org.projectlombok</groupId>
       <artifactId>lombok</artifactId>
   </dependency>
   ```

2. 引入插件

   打开 idea 的 file——settings 设置，点击 plugin，搜索：lombok（高版本可以不安装）

   可以使用注解

   - @Data：代表get和set方法
   - @ToString：toString方法
   - @AllArgsConstructor：全参构造
   - @NoArgsConstructor：无参构造

###### dev-tools

1. 官网地址：[](https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-devtools)

2. 热更新，在线刷新web页面。**Ctrl+F9**

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-devtools</artifactId>
       <optional>true</optional>
   </dependency>
   ```

## 核心配置-核心功能

### 配置文件

##### yaml语法（冒号后面加空格）

> yaml语法中，双引号不会进行转义

1. 对象：键值对的集合。map、hash、set、object

   ```yaml
   行内写法：k: {k1: v1,k2: v2}
   #或
   k:
     k1: v1
     k2: v2
   ```

2. 组：一组按次序排列的值。array、list、queue

   ```yaml
   行内写法：k: [v1,v2]
   #或
   k:
     - v1
     - v2
   ```

##### 自定义绑定的配置提示

```xml
<!--正压警告-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```

```yaml
<plugins>
    <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <configuration
        <!--去掉镇压警告的jar包-->
            <excludes>
                <exclude>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-configuration-processor</artifactId>
                </exclude>
            </excludes>
        </configuration>
    </plugin>
</plugins>
```

### Web开发

1. 官网地址：[](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-developing-web-applications)

#### 1、简单功能分析

##### 1、静态资源访问

###### 1、静态资源目录

> ```java
> /static` (or `/public` or `/resources` or `/META-INF/resources
> ```

2. **优先级：**resources > static(默认) > public

3. 可以设置访问前缀：

   ```yaml
   spring:
     mvc:
       static-path-pattern: /test/**
   #这时，访问静态资源需要加前缀：test
     resources:
       static-locations: [classpath:/static/,classpath:/public/]
   #指定静态资源路径，貌似已经过时
   ```

###### 2、webjars

1. 网络地址：[](https://www.webjars.org/)

2. 导入依赖

   ```xml
   <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>jquery</artifactId>
       <version>3.5.1</version>
   </dependency>
   ```

3. 访问地址：http://localhost:8080/webjars/**jquery/3.5.1/jquery.js** 后面地址需要按照依赖的包路径

##### 2、欢迎页

1. 静态资源路径下index.html。可以配置静态资源路径。但是不可以配置静态资源的访问前缀。否则导致 index.html不能被默认访问

   ```yaml
   spring:
     mvc:
       static-path-pattern: /test/** #该设置会导致指定静态资源路径失效，同时也会导致favicon图片失效
     resources:
       static-locations: [classpath:/static/,classpath:/public/]
   ```

2. controller能处理/index

##### 3、自定义Favicon图标

1. 将名为：favicon.ico 的图片放入静态资源目录下即可（设置静态资源访问前缀会导致该功能失效）

##### 4、静态资源配置原理

- SpringBoot启动默认加载 **xxxAutoConfiguration** 类（自动配置）

##### 5、请求参数处理

1. **Rest原理**（表单提交要使用Rest风格的时候）

   需要选择性开启过滤器

   ```yaml
   spring:
     mvc:
       hiddenmethod:
         filter:
           enabled: true #开启页面表单的Rest功能
   ```

   **Rest风格支持**

   ​	核心：FIlter：HiddenHTTPMethodFilter

   - 用法：表单 **method=post**，隐藏域 **_method=put**

   - springboot 中手动开启

   - 表单提交会带上**_method=PUT**
   - 请求过来被HiddenHTTPMethodFilter 拦截
     - 请求是否正常，并且是**POST**
       - 获取到**_method**的值
       - 兼容以下请求：PUT、DELETE、PATCH
       - **原生request（post)，包装模式 requestWrapper重写了getMethod方法，返回的是传入的值**
   
2. Rest使用客户端工具

   - 直接发送各种请求

3. **请求映射原理**

   视频源码解析推荐：[](https://www.bilibili.com/video/BV19K4y1L7MT?p=28)

4. **常用参数注解**

   1. RESTFul风格：@PathVariable

      ```java
          @GetMapping("/test/car/{id}/owner/{name}")
          public Map<String,Object> test4(@PathVariable("id") Integer id,
                                          @PathVariable("name") String name)
          {
              Map<String, Object> map = new HashMap<>();
              map.put("id", id);
              map.put("name", name);
              return map;
          }
      ```

   2. 获取请求头信息：@RequestHeader

      ```java
          @GetMapping("/getRequestHead")
          public Map<String,String> getRequestHead(@RequestHeader("Accept") String requestURL)
          {
              Map<String, String> map = new HashMap<>();
              map.put("request", requestURL);
              return map;
          }
      ```

   3. 获取请求参数：@RequestParam

      ```java
      //发送的请求：http://localhost:8080/getParams?id=12&id=23&id=34
      	@GetMapping("/getParams")
          public List<Object> list(@RequestParam("id") List<Object> id){
              return id;
          }
      ```

   4. 获取cookie值：@CookieValue

   5. 获取请求体的值：@RequestBody，注意，**用于表单post方式提交信息**

      ```html
      <form action="getBody" method="post">
          姓名：<input type="text"><br>
          age:<input type="text"><br>
          <input type="submit" value="提交">
      </form>
      ```

      ```java
      @PostMapping("/getBody")
      public String getBody(@RequestBody String body){
          return body;
      }
      ```

   6. 获取请求域信息：@RequestAttribute

   7. 矩阵变量：@MatrixVariable

      - 矩阵变量需要在springBoot中手动开启，默认是关闭的**true**

        ```java
        //第一种，实现WebMvcConfigurer接口
        public class CustomConf implements WebMvcConfigurer{
            @Override
            public void configurePathMatch(PathMatchConfigurer configurer) {
                UrlPathHelper urlPathHelper = new UrlPathHelper();
                urlPathHelper.setRemoveSemicolonContent(false);
                configurer.setUrlPathHelper(urlPathHelper);
            }
        }
        //第二种，配置类中生成
        @Bean
        public WebMvcConfigurer webMvcConfigurer(){
            return new WebMvcConfigurer() {
                @Override
                public void configurePathMatch(PathMatchConfigurer configurer) {
                    UrlPathHelper urlPathHelper = new UrlPathHelper();
                    urlPathHelper.setRemoveSemicolonContent(false);
                    configurer.setUrlPathHelper(urlPathHelper);
                }
            };
        }
        ```

        

      - 据RFC3986的规范，矩阵变量应当绑定在路径变量中

      - 若是有多个矩阵变量，应当使用英文符号;进行分隔。

      - 若是一个矩阵变量有多个值，应当使用英文符号,进行分隔，或之命名多个重复的key即可。如：**/cars/sell;low=34 ; brand=byd ,audi,yd**

      ```java
//  http://localhost:8080/cars/sell;low=23;brand=byd,audi,yd
          @GetMapping("/cars/{path}")
          public Map<String, Object> getJZ(@MatrixVariable("low") Integer low,
                                           @MatrixVariable("brand") List<Object> brand,
                                           @PathVariable("path") String path)
          {
              Map<String, Object> map = new HashMap<>();
              map.put("low", low);
              map.put("brand", brand);
              map.put("path", path);
              return map;
          }
      ```
      
   8. **复杂参数**：map与model里面的数据会被放在**request的请求域**中，相当于request.setAttribute()

      视频源码讲解：[](https://www.bilibili.com/video/BV19K4y1L7MT?p=34)

#### 2、自定义参数对象封装

将表单中提交的数据直接封装成自定义的对象，即**数据绑定**

​	视频源码讲解：[](https://www.bilibili.com/video/BV19K4y1L7MT?p=35)

#### 3、参数处理原理

- 视频讲解：[](https://www.bilibili.com/video/BV19K4y1L7MT?p=32)
- 该视频讲解了springmvc的基本流程，干货满满，泪流满面

#### 4、响应数据与内容协商

##### 1、响应JSON

>springboot-web启动器自动引入了json的场景

1. 注解：@RestController

##### 2、内容协商

> 根据客户端接收能力不同，返回不同媒体类型的数据

```xml
<!--导入xml的pom依赖，就可以使用xml写法-->
<dependency>
    <groupId>com.fasterxml.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-xml</artifactId>
</dependency>
```

1. 判断当前响应头中是否已经有确定的媒体类型。MediaType

2. 获取客户端(PostMan、浏览器)支持接收的内容类型。(获取客户端Accepte请求头字段) [application/xml]

3. 遍历循环所有当前系统的MessageConverter,看谁支持操作这个对象(Person)

4. 找到支持操作Person的converter, 把converter支持的媒体类型统计出来。

5. 客户端需要[application/xml]。服务端能力[10种、 json、 xml]

6. **自定义MessageConvert**：[](https://www.bilibili.com/video/BV19K4y1L7MT?p=41)

   

#### 5、视图解析与模板引擎

##### 1、视图解析

1. **thymeleaf**:[](https://www.thymeleaf.org/)

2. 导入依赖

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-thymeleaf</artifactId>
   </dependency>
   ```

3. **在templates目录下的所有页面，只能通过controller来跳转**

4. 在**thymeleaf**页面添加约束

   ```html
   <html lang="en" xmlns:th="http://www.thymeleaf.org">
   ```

5. thymeleaf语法

   ```html
   <!--遍历-->
   <div th:each="user:${users}">[[${user}]]</div>
   <!--第二种方式-->
   <div th:each="user:${users}" th:text="${user}"></div>
   ```

###### 防止表单重复提交

1. 重定向防止表单重复提交

###### 抽取公共页

1. 

#### 6、拦截器

###### 自定义拦截器

1. 实现：HandlerInterceptor

   ```java
   public class CustLoginIntercept implements HandlerInterceptor {}
   ```

2. 将拦截器放入容器中，自定义一个配置类，实现**WebMvcConfigurer**

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

   

3. preHand：目标方法执行之前

4. postHandle：目标方法执行完成以后

5. afterCompletion：页面渲染之后

##### 表单上传

1. 表单form添加：
   1. 必须是 **post**请求
   2. **enctype=“multipart/form-data“**

#### 7、跨域





### 数据访问

### 单元测试

### 指标监控

### 原理解析



# 个人总结

### 第一天所学总结

1. 所有被使用的类都需要被**装配**到springboot中进行管理

2. 装配使用的注解

   - **@Configuration**

   - **@RestController**

   - **@Controller**

   - **@Repository**

   - **@Service**

     

