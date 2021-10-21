**约定大于配置**

## 注解

```java
//这是一个SpringBoot应用
@SpringBootApplication
//控制器，注册组件和返回JSON数据
@RestController
//配置类，与@Bean注解搭配使用，注册新的组件对象，与@Import注解搭配使用，注册的组件名是全限定类名;@ConditionalOnBean是条件装配，根据他的条件判断到底要不要注册组件，可以放在类上，也可以放在方法上
@Configuration
@Bean
@Import
@ConditionalOnBean(name="zs")//如果有名字为zs的，就注册组件
@ConditionalOnMissingBean()//与自动装配注解取反操作
@ImportResource("classpath:bean.xml")//将spring的配置文件导入到配置类中自动生成对象

//属性配置，与@Component搭配，将这个配置放在容器中
@ConfigurationProperties(prefix = "pet")
@EnableConfigurationProperties(Pet.class)//放在配置类中，搭配@ConfigurationProperties(prefix = "pet")，实现组件注入，可以用于第三方包的注入
```

## Lombok

1. 引入依赖：Lombok
2. 安装插件：IDEA 安装 Lombok
3. 使用注解：@Data，放在实体类上，他是Lombok的注解，可以在程序运行时生成get/set方法，使用@ToString是toString方法，有参构造器：@AllArgsConstructor，无参构造器：@NoArgsConstructor，@Slf4j进行日志输出：log.info()

## dev-tools

热更新，其实就是重启，用不用无所谓

ctrl+f9更新

# 核心功能

### yaml配置文件

1. kev : value；kv之间有空格
2. 大小写敏感
3. 使用缩进表示层级关系
4. 缩进不允许使用tab，只允许空格
5. #号表示注释

## web开发

### 静态资源

默认目录： `/static` (or `/public` or `/resources` or `/META-INF/resources`

只要把静态资源放在这里，就可以通过程序直接访问

### 常用参数注解

这些请求可以使用**Map**或者**Model**来解构赋值进行参数接收

```java
//参数重命名
@RequestParam
//路径变量，RESTFull风格
@PathVariable("username") String name
//获取请求头信息
@RequestHeader("请求头字段名")
//请求体
@RequestBody
//
```



### 拦截器

拦截器需要实现**HandlerInterceptor**接口

所有关于web配置的都要实现**WebMvcConfigurer**接口，实现接口后需要在容器中经行注册

## 数据访问

1. 导入jdbc依赖
2. 导入数据库驱动依赖
3. 配置文件中配置数据库连接信息

#  狂神说

### banner图

在resources目录下新建banner.txt文件，将文本复制进去
