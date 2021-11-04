## 注解

```java
@Value(${key})//@Value注解可以读取配置文件中的属性值

@EnableTransactionManagement //开启声明式事务
@MapperScan //采用通用Mapper框架实现持久化，导入tk.mybatis包
```

## 集成SpringMVC

1. 导入web启动器
2. 静态资源存放目录
   1. classpath:/META_INF/resources/
   2. classpath:/resources/（常用）
   3. classpath:/static/（常用）
   4. classpath:/public/
   5. 可以通过配置文件：spring.resources.static-location:classpath:/自定义目录   来修改静态资源存放位置

#### 拦截器

1. 实现 HandlerInterceptor 接口，重写拦截器方法
2. 实现 WebMvcConfigurer 接口，创建配置类 ，重写 addInterceptors 方法

## 集成SpringBoot-JPA

1. 导入依赖：

   1. spring-boot-starter-data-jpa
   2. mysql-connector-java

2. 配置数据库连接，jpa的表映射关系等

   ```yaml
   spring:
     datasource:
       username: root
       password: 123456
       url: jdbc:mysql://localhost:3306/lgf
       driver-class-name: com.mysql.jdbc.Driver
     jpa:
       database: mysql
       show-sql: true
       generate-ddl: true
       hibernate:
         ddl-auto: update
         naming:
           physical-strategy: org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy
   logging:
     level:
       com.cth.dao: debug
   ```

   

3. 实体类配置对应字段名称

   ```java
   import javax.persistence.*;
   @Entity
   @Table()
   public class Users {
       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       @Column(name = "id")
       private Integer id;
       private String name;
       private Integer age;
       private Long phone;
   }
   ```

   

4. dao接口继承 JpaRepository 接口

   ```java
   public interface UserDao extends JpaRepository<Users,Integer> {}
   ```

5. 正常的MVC操作流程

## 集成数据库tk.Mybatis

1. 导入依赖

   1. spring-boot-starter-web
   2. mapper-spring-boot-starter 通用mapper启动器依赖
   3. spring-boot-starter-jdbc
   4. mysql-connector-java
   5. druid-spring-boot-starter
   6. commons-lang3 对Java.lang包进行扩展的

2. application.yml配置文件

   ```yaml
   spring:
     datasource:
       driver-class-name: com.mysql.jdbc.Driver
       url: jdbc:mysql:///lgf
       username: root
       password: 123456
       type: com.alibaba.druid.pool.DruidDataSource
   
   mybatis:
     type-aliases-package: com.cth.domain
     
   logging:
     level:
       com.cth.dao: debug
   ```

   

3. 启动类上添加mapperScan，扫描daoMapper

   1. 启动类上开启事务：@EnableTransactionManagement，在业务方法上开启事务注解：@Transactional()

4. 创建实体类，添加JPA同类型注解配置

5. 创建dao，继承 Mapper< Class > 接口

6. 正常的MVC流程

**tk.mybatis可以将通用Mapper和JPA都集成在一起使用，如果后面需要自己写SQL的时候可以将 Mybatis 集成进来**

## 集成redis

1. 导入依赖

   1. spring-boot-starter-data-redis

2. application.yml配置

   ```yaml
   spring:
     redis:
       host: localhost
       port: 6379
   ```

3. 操作redis

   ```java
   @Autowired
   RedisTemplate redisTemplate;
   //取值
   redisTemplate.boundValueOps("userList").get()
   //存值
   redisTemplate.boundValueOps("userList").set()
   ```

##  打包运行

1. 集成插件

   ```xml
   <plugin>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-maven-plugin</artifactId>
   </plugin>
   ```

2. 运行 `maven` 的 `package` 打包命令

## 小总结

#### 实体类

1. 需要实现 Serializable 接口，可序列化
2. 可以实现数据库映射，使用JPA

#### 事务

1.  启动类上标注 开启 事务注解：@EnableTransactionManagement
2. 在业务层或业务方法上使用 @Transactional() 注解