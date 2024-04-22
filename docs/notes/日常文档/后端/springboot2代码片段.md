# SpringBoot代码片段

## 读取配置文件属性值

默认properties后缀文件

#### @value读取配置文件值

application.properties

```properties
server.port=8080
```

Test.class

```java
@value("${server.port}")
private Integer port;
```

#### @ConfigurationProperties属性配置

application.properties

```properties
school.name=龙泉小学
school.address=龙泉村
```

School.class

```java
@Component
@ConfigurationProperties(prefix="school")//加上属性前缀
public class School {

    private String name;
    private String address;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "School{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
```



## 拦截器

1. 先实现 HandlerInterceptor 接口，重写里面的三个方法，

   ```
   preHandler(HttpServletRequest request, HttpServletResponse response, Object handler) 方法在请求处理之前被调用。该方法在 Interceptor 类中最先执行，用来进行一些前置初始化操作或是对当前请求做预处理，也可以进行一些判断来决定请求是否要继续进行下去。该方法的返回至是 Boolean 类型，当它返回 false 时，表示请求结束，后续的 Interceptor 和 Controller 都不会再执行；当它返回为 true 时会继续调用下一个 Interceptor 的 preHandle 方法，如果已经是最后一个 Interceptor 的时候就会调用当前请求的 Controller 方法。
       
   postHandler(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) 方法在当前请求处理完成之后，也就是 Controller 方法调用之后执行，但是它会在  DispatcherServlet  进行视图返回渲染之前被调用，所以我们可以在这个方法中对 Controller 处理之后的 ModelAndView 对象进行操作。
       
   afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handle, Exception ex) 方法需要在当前对应的 Interceptor 类的 postHandler 方法返回值为 true 时才会执行。顾名思义，该方法将在整个请求结束之后，也就是在 DispatcherServlet  渲染了对应的视图之后执行。此方法主要用来进行资源清理。
   ```

2. 再实现拦截器路径配置，实现 WebMvcConfigurer 接口

   ```java
   @Configuration
   public class AuthConfiguration implements WebMvcConfigurer {
       @Override
       public void addInterceptors(InterceptorRegistry registry) {
           String[] includePath = {"/*"};
           String[] excludePath = {"/login", "/logout"};
           registry.addInterceptor(new AuthIntercepter())
                   .addPathPatterns(includePath)
                   .excludePathPatterns(excludePath);
       }
   }
   ```

   

## 过滤器

Filter是Servleti规范中的过滤器，可以处理请求，对请求的参数，属性进行调整。常常在过滤器中处理字符编码
在框架中使用过滤器：

1. 创建自定义过滤器类
2. 注册Filteri过滤器对象

创建自定义过滤器类

```java
public class MyFilter implements Filter {
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {
        System.out.println("过滤器执行了");
        chain.doFilter(req, resp);
    }
}

```

注册Filter过滤器对象

```java
@Configuration
public class FilterConfiguration {

    @Bean
    public FilterRegistrationBean filterRegistrationBean(){
        FilterRegistrationBean bean = new FilterRegistrationBean();
        bean.addUrlPatterns("/boot/*");
        bean.setFilter(new MyFilter());
        return bean;
    }
}
```

### 字符集过滤器

CharacterEncodingFilter:解决post请求中乱码的问题
在SpringMVC框架，在web.Xml注册过滤器。配置他的属性。

#### 方法一

1）配置字符集过滤器

```java
@Configuration
public class FilterConfiguration {

    @Bean
    public FilterRegistrationBean charsetFilter(){
        FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<>();
        CharacterEncodingFilter charset = new CharacterEncodingFilter();
        charset.setEncoding("utf-8");
        charset.setForceEncoding(true);
        bean.setFilter(charset);
        bean.addUrlPatterns("/*");
        return bean;
    }
}
```

2）修改application.properties文件，让自定义的过滤器起作用

```properties
#Spr ingBoot中默认已经配置了Char acterEncodingFi1ter。编码默认Is0-8859-1
#设置enabled=false作用是关闭系统中配置好的过滤器，使用自定义的CharacterEncodingFilter
server.servlet.encoding.enabled=false
```

#### 方法二

直接修改application.prperties文件，使用默认启动的过滤器。更简单

```properties
server.servlet.encoding.charset=UTF-8
server.servlet.encoding.force=true
```

## 连接数据库，操作mybatis

### 实现步骤

使用MyBatis框架操作数据，在SpringBoot框架集成MyBatis
使用步骤：

1. mybatis起步依赖：完成mybatis对象自动配置，对象放在容器中

2. pom.xml指定把src/main/java目录中的xml文件包含到classpath中

   ```xml
   <resources>
       <resource>
           <directory>src/main/java</directory>
           <includes>
               <include>**/*.xml</include>
           </includes>
       </resource>
   </resources>
   ```

3. 创建实体类Student

4. .创建Dao接口StudentDao，使用注解**@Mapper**

5. 创建Dao接口对应的Mapper文件，xml文件，写sql语句

6. 创建Service层对象，创建StudentService:接口和他的实现类。去dao对象的方法。完成数据库的操作

7. 创建Controller对象，访问Service。

8. 写application.properties.文件
   配置数据库的连接信息。

   ```properties
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   spring.datasource.url=jdbc:mysql://localhost:3306/lsgfish?useUnicode=true&characterEncoding=UTF-8&serverTimezone=GMT2B8
   spring.datasource.username=root
   spring.datasource.password=123456
   ```

   

### dao层对象管理方式

#### 方式一

使用 @Mapper 注解，注解在dao层接口上

#### 方式二

扫描多个dao时，@Mapper注解不方便。使用@MapperScan，只要放在主启动类上，写上dao包路径即可

```java
//可以一次扫描多个包
@SpringBootApplication
@MapperScan(basePackages = {"com.cth.springboot01.dao"})
public class Springboot01Application {
    public static void main(String[] args) {
        SpringApplication.run(Springboot01Application.class, args);
    }
}
```

### xml文件与接口文件分离 

1. 所有的xml文件，都放在了resource/mapper 文件夹下，

2. 修改application.properties文件，添加 

   ```properties
   mybatis.mapper-locations=classpath:mapper/*.xml
   ```

3. 修改pom.xml 文件，

   ```xml
   <resources>
       <resource>
           <directory>src/main/resources</directory>
           <includes>
               <include>**/*.*</include>
           </includes>
       </resource>
   </resources>
   ```

#### 开启Mybatis日志

```properties
#application.properties
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```

### 事务

Spring框架中的事务：

1. 管理事务的对象：事务管理器（接口，接口有很多的实现类）
   例如：使用dbc或mybatisi访问数据库，使用的事务管理器：DataSourceTransactionManager
2. 声明式事务：在配置文件或者使用注解说明事务控制的内容
3. 事务处理方式：
   - Spring框架中的@Transactional
   - aspectjf框架可以在xml配置文件中，声明事务控制的内容

SpringBoot中使用事务：上面的两种方式都可以。

使用步骤

1. 在业务方法的上面加入@Transactional,加入注解后，方法有事务功能了。
2. 明确的在主启动类的上面，加入@EnableTransactionManager

## RESTful风格注解

```
@PathVariable:从url中获取数据
    
@GetMapping:支持的get请求方式，等同于@RequestMapping(method=RequestMethod.GET)
    
@PostMapping:支持post请求方式，等同于@RequestMapping(method=RequestMethod.POST)
    
@PutMapping:支s持put请求方式，等同于@RequestMapping(method=RequestMethod.PUT)
    
@DeleteMapping:支持deletei请求方式，等同于@RequestMapping(method=RequestMethod.DELETE)
    
@RestController:符合注解，是@Controller和@ResponseBody组合。
				在类的上面使用@RestController,表示当前类者的所有方法都加入了@ResponseBody
```

## Redis

#### 操作RedistTemplate

在application.properties中配置redis连接信息

```properties
#redis（host、port、password）
spring.redis.host=localhost
spring.redis.port=6379
#spring.redis.password=123456
```

代码

```java
@RestController
public class Hello{
    @Resource
    private RedisTemplate redisTemplate;

    @RequestMapping("/setk")
    public String setK(String key,String value){
       	//使用 redisTemplate 使用Stringl的序列化，而非JDK序列化
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new StringRedisSerializer());
        ValueOperations ops = redisTemplate.opsForValue();
        ops.set(key,value);
        return "向redis中存入key:" + key + " value:" + value;
    }
    @RequestMapping("/getk")
    public String setK(String key){
        //使用 redisTemplate 使用Stringl的序列化，而非JDK序列化
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new StringRedisSerializer());
        ValueOperations ops = redisTemplate.opsForValue();
        Object value = ops.get(key);
        return "从redis中取值key:" + key + " value:" + value;
    }
}
```

#### RedisTemplate 与 StringRedisTemplate

- StringRedisTemplate:把k,v都是作为String处理，**使用的是Stringl的序列化**，可读性好
- RedisTemplate:把k,v经过了序列化存到redis。k,v是序列化的内容，不能直接识别.
  **默认使用的JDK序列化**，可以修改为前提的序列化

> 序列化只是一种拆装组装对象的规则，那么这种规则肯定也可能有多种多样，比如现在常见的序列化方式有：
> JDK(不支持跨语言)、JSON、XML、Hessian、Kryo(不支持跨语言)、Thrift、Protostuf、

- **StringRedisTemplate.java**

```java
@RequestMapping("/str/setk")
public String setStrk(String k,String v){
    stringRedisTemplate.opsForValue().set(k,v);
    return "stringRedisTemplate set值 key:"+k+" value:"+v;
}
@RequestMapping("/str/getk")
public String getStrk(String k){
    String v = stringRedisTemplate.opsForValue().get(k);
    return "stringRedisTemplate set值 key:"+k+" value:"+v;
}
```

## 集成JWT

添加依赖

```xml
<dependency>
    <groupId>com.auth0</groupId>
    <artifactId>java-jwt</artifactId>
    <version>3.18.1</version>
</dependency>
```

JwtUtil.class

```java
package com.cth.lsgfishserver.utils.auth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.cth.lsgfishserver.model.User;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;

/**
 * @author 走我们钓鱼去
 * @date 2022/09/18 12:14
 **/
@Data
@NoArgsConstructor
@Component
@ConfigurationProperties(prefix = "jwt")
public class JwtUtil {

    //签名密钥，自定义，随便写
    private static String secret = "lsgfish@cth";

    //有效期
    private static long expireTime = 1000 * 60 * 60 * 1;
    /**
     * 生成token
     * @param user
     * @return
     */
    public static String generateToken(User user) throws JsonProcessingException {
        String json = new ObjectMapper().writeValueAsString(user);
        Date expireDate = new Date(System.currentTimeMillis() + expireTime);
        String token = JWT.create()
                .withSubject(json)//可以将基本信息放到claims中
                .withExpiresAt(expireDate) //超时设置,设置过期的日期
                .withIssuedAt(new Date()) //签发时间
                .sign(Algorithm.HMAC256(secret)); //SECRET加密，Algorithm.HMAC256：加密的方式，secret：自定义的加密密钥
        return token;
    }

    /**
     * 解析token，获取User对象的返回值
     * @return
     */
    public static User getUserInfo(String token) throws JsonProcessingException {
        DecodedJWT decode = JWT.decode(token);
        Map<String, Claim> claims = decode.getClaims();
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(claims.get("sub").asString(), User.class);
    }

    /**
     * 判断token是否失效
     * @param token
     * @return
     */
    public static boolean isTokenExpires(String token){
        DecodedJWT decode = JWT.decode(token);
        Map<String, Claim> claims = decode.getClaims();
        Date exp = claims.get("exp").asDate();
        return exp.getTime() < System.currentTimeMillis();
    }
}
```

