# springboot

1. 什么是spring

> **Spring是为了解决企业级应用开发的复杂性而创建的简化开发。**

## yml写法

```yaml
#普通的key-value
name: qinjiang
#对象
student:
 name: qinjiangage: 3
#行内写法
student: {name: qinjiang,age:3}
#数组
pets:
 - cat
 - dog
 - pig

pets:[cat,dog,pig]
```

1. 给属性赋值**yaml格式（冒号后面要加一个空格）**

   ```yml
   person:
     name: cth
     age: 23
     status: false
     maps: {k1: v1,k2: v2}
     list:
       -173
       -man
     school:
       name: 横山
       address: 东程
   ```

   ```java
   @Component
   @ConfigurationProperties(prefix = "person")
   public class Person {
       private String name;
       private Integer age;
       private Boolean status;
       private Map<String,Object> maps;
       private List<Object> list;
       private School school;
   ```

2. 指定配置文件进行赋值**（properties格式）**

   ```properties
   school.name=zs
   ```

   ```xml
   @Component
   @PropertySource(value="classpath:test.properties")
   public class School {
   //使用spring的EL表达式
   	@Value("${name}")
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

## JSR303校验

**注意：最新版本的JSR303校验需要添加启动器**

```xml
	<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
	</dependency>
```

```xml
@Component
@ConfigurationProperties(prefix = "school")
@Validated//数据校验
public class School {
	@Email(message="邮箱格式错误")
    private String email;
    private String address;

}
```

###### 常用的JSR303

> @NotNul1(message="名字不能为空")private String userName;
> @Max(value=120,message="年龄最大不能查过120")private int age;
> @Email(message="邮箱格式错误")private string email;
> 空检查
> @Nu1l
> 验证对象是否为null
> @NotNull验证对象是否不为null，无法查检长度为0的字符串
> @NotBlank检查约束字符串是不是Null还有被Trim的长度是否大于0,只对字符串,且会去掉前后空格.@NotEmpty检查约束元素是否为NULL或者是EMPTY.
> Booelan检查
> @AssertTrue
> 验证 Boolean对象是否为true
> @AssertFalse验证 Boolean 对象是否为false
> 长度检查
> osize(min=, max=）验证对象（Array, Collection,Map ,String）长度是否在给定的范围之内
> @Length(min=, max=) Validates that the annotated string is between min and max included.
> 目期检查
> @Past
> 验证 Date 和 Calendar 对象是否在当前时间之前
> @Future验证 Date和l Calendar对象是否在当前时间之后
> @Pattern验证String对象是否符合正则表达式的规则:正则表达式
> .......等等
> 除此以外，我们还可以自定义一些数据校验规则

## 多环境配置及配置文件位置

#### 多环境配置切换

用来解决实际开发环境中修改配置信息问题

1. properties切换环境配置

```properties
spring.profiles.active=需要切换的环境名
```

2. yaml切换配置环境

   一个核心配置文件即可：使用：--- 来进行不同配置文件的分割

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


## springboot web开发

##### 静态资源的访问

1. 框架默认的四个存放静态资源的目录结构：

   默认优先级：META-INF/resources > resources > static > public

   说明，templates目录下存放的是thymeleaf模板页面，只有加入了thymeleaf依赖，才能使用该目录下的静态资源

   **优先级：**resources > static(默认) > public
   
   自定义静态资源路径：`spring.mvc.static-path-pattern=自定义路径`，多个路径用逗号分隔

##### 首页和图标定制

1. **首页都放在默认的静态资源目录下即可**

2. **在templates目录下的所有页面，只能通过controller来跳转**

   

##### thymeleaf模板引擎

1. 导入pom

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-thymeleaf</artifactId>
   </dependency>
   ```

2. **在templates目录下的所有页面，只能通过controller来跳转**

3. 在**thymeleaf**页面添加约束

   ```html
   <html lang="en" xmlns:th="http://www.thymeleaf.org">
   ```

4. ###### thymeleaf语法

   ```html
   <!--遍历-->
   <div th:each="user:${users}">[[${user}]]</div>
   <!--第二种方式-->
   <div th:each="user:${users}" th:text="${user}"></div>
   ```


## SpringDate

1. xxxTemplate，代表是什么的模板，是springboot封装好的bean，拿来即用。如：RedisTemplate
2. 连接新版MySQL，需要加时区，在URL后面添加属性：serverTimeZone=UTC

## SpringSecurity

**记住几个类:**

 WebSecurityConfigurerAdapter:自定义Security策略

. AuthenticationManagerBuilder:自定义认证策略

.@EnableWebSecurity:开启WebSecurity模式

1. 添加依赖

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-security</artifactId>
   </dependency>
   ```

2. 实现配置类，添加注解，重写方法

   ```java
   @Configuration
   @EnableWebMvcSecurity
   public class AuthProviderConfig extends WebSecurityConfigurerAdapter {
   	//授权
       @Override
       protected void configure(HttpSecurity http) throws Exception {
           http
               .authorizeRequests()
               //请求授权规则
                   .antMatchers("/", "/home").permitAll()
                   .anyRequest().authenticated()
                   .and()
               //没有权限，跳转登陆页面
               .formLogin()
                   .loginPage("/login").permitAll()
                   .and()
               //开启注销功能
               .logout()
                   .permitAll();
       }
   	//认证
       @Override
       protected void configure(AuthenticationManagerBuilder auth) throws Exception {
           //可能涉及到密码加密操作
           auth
               .authenticationProvider(kerberosAuthenticationProvider());
       }
   
       @Bean
       public KerberosAuthenticationProvider kerberosAuthenticationProvider() {
           KerberosAuthenticationProvider provider =
           		new KerberosAuthenticationProvider();
           SunJaasKerberosClient client = new SunJaasKerberosClient();
           client.setDebug(true);
           provider.setKerberosClient(client);
           provider.setUserDetailsService(dummyUserDetailsService());
           return provider;
       }
   
       @Bean
       public DummyUserDetailsService dummyUserDetailsService() {
           return new DummyUserDetailsService();
       }
   
   }
   ```

   

## 异步任务

1. 给异步的方法添加一个注解：@Async，告诉spring这是一个异步方法
2. 给启动类添加 注解：@EnableAsync

## 邮件任务

1. 添加邮件依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```

2. 配置文件配置mail的配置：spring.mail

   ```properties
   spring.mail.username=1113237401@qq.com
   spring.mail.password=yffuxxpfcstwgebc
   spring.mail.host=stmp.qq.com
   spring.mail.properties.mail.stmp.ssl.enable=true
   ```

3. 使用邮件发送接口：JavaMailSenderImpl

   ```java
   //简单邮件发送	
   @Autowired
       JavaMailSenderImpl javaMailSender;
       @Async
       public void test(){
           SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
           simpleMailMessage.setTo("1113237401@qq.com");
           simpleMailMessage.setSubject("小灰灰你好呀");
           simpleMailMessage.setText("本次执行邮件发送测试，请不必惊慌");
           simpleMailMessage.setFrom("1113237401@qq.com");
           javaMailSender.send(simpleMailMessage);
       }
   //复杂邮件发送
       @Async
       public void test2() throws MessagingException {
           MimeMessage mimeMailMessage = javaMailSender.createMimeMessage();
           MimeMessageHelper helper = new MimeMessageHelper(mimeMailMessage);
   //          发送目标
           helper.setTo("1113237401@qq.com");
   //        发送正文内容
           helper.setText("本次执行复杂邮件测试");
   //        主题
           helper.setSubject("邮箱发送测试");
   //        添加附件
           helper.addAttachment("hzw.jpeg",new File("C:\\Users\\cth\\Pictures\\Chrome\\hzw.jpeg"));
   //        表明发送者身份
           helper.setFrom("1113237401@qq.com");
       }
   ```

## 定时任务

[网址](https://www.cnblogs.com/pejsidney/p/9046818.html)

1. 两个类：TaskExecutor（任务执行者）、TaskScheduler（任务调度者）

2. 注解：@EnableScheduling（启动类上，开启定时功能）、@Schedule（用在定时的方法上）

3. **corn**表达式

4. 一定要记得将定时器交个spring容器管理

   ```java
   @Service
   public class Service01 {
       //cron表达式
       //秒 分 时 日 月 周
       @Scheduled(cron = "10 52 13 * * ?")
       public void test(){
           System.out.println("执行了==============");
       }
   }
   ```

   

# 自我学习总结

1. xxxTemplate，代表是什么的模板，是springboot封装好的bean，拿来即用。如：RedisTemplate
2. @EnableXXXX，代表开启某个功能

