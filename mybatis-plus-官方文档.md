# MybatisPlus

简称：MP，是mybatis的增强版，不做改变，只做增强

官网发布地址：http://mp.baomidou.com

# [#](https://mp.baomidou.com/guide/quick-start.html#快速开始)快速开始

我们将通过一个简单的 Demo 来阐述 MyBatis-Plus 的强大功能，在此之前，我们假设您已经：

- 拥有 Java 开发环境以及相应 IDE
- 熟悉 Spring Boot
- 熟悉 Maven

------

现有一张 `User` 表，其表结构如下：

| id   | name   | age  | email              |
| ---- | ------ | ---- | ------------------ |
| 1    | Jone   | 18   | test1@baomidou.com |
| 2    | Jack   | 20   | test2@baomidou.com |
| 3    | Tom    | 28   | test3@baomidou.com |
| 4    | Sandy  | 21   | test4@baomidou.com |
| 5    | Billie | 24   | test5@baomidou.com |

其对应的数据库 Schema 脚本如下：

```sql
DROP TABLE IF EXISTS user;

CREATE TABLE user
(
	id BIGINT(20) NOT NULL COMMENT '主键ID',
	name VARCHAR(30) NULL DEFAULT NULL COMMENT '姓名',
	age INT(11) NULL DEFAULT NULL COMMENT '年龄',
	email VARCHAR(50) NULL DEFAULT NULL COMMENT '邮箱',
	PRIMARY KEY (id)
);
```

其对应的数据库 Data 脚本如下：

```sql
DELETE FROM user;

INSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');
```

------

Question

如果从零开始用 MyBatis-Plus 来实现该表的增删改查我们需要做什么呢？

## [#](https://mp.baomidou.com/guide/quick-start.html#初始化工程)初始化工程

创建一个空的 Spring Boot 工程（工程将以 H2 作为默认数据库进行演示）

TIP

可以使用 [Spring Initializer (opens new window)](https://start.spring.io/)快速初始化一个 Spring Boot 工程

## [#](https://mp.baomidou.com/guide/quick-start.html#添加依赖)添加依赖

引入 Spring Boot Starter 父工程：

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.4.2</version>
    <relativePath/>
</parent>
```

引入 `spring-boot-starter`、`spring-boot-starter-test`、`mybatis-plus-boot-starter`、`h2` 依赖：

> Latest Version: [![Maven Central](https://img.shields.io/maven-central/v/com.baomidou/mybatis-plus.svg)(opens new window)](https://search.maven.org/search?q=g:com.baomidou a:mybatis-*)

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>Latest Version</version>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```

## [#](https://mp.baomidou.com/guide/quick-start.html#配置)配置

在 `application.yml` 配置文件中添加 H2 数据库的相关配置：

```yaml
# DataSource Config
spring:
  datasource:
    driver-class-name: org.h2.Driver
    schema: classpath:db/schema-h2.sql
    data: classpath:db/data-h2.sql
    url: jdbc:h2:mem:test
    username: root
    password: test
```

在 Spring Boot 启动类中添加 `@MapperScan` 注解，扫描 Mapper 文件夹：

```java
@SpringBootApplication
@MapperScan("com.baomidou.mybatisplus.samples.quickstart.mapper")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(QuickStartApplication.class, args);
    }

}
```

## [#](https://mp.baomidou.com/guide/quick-start.html#编码)编码

编写实体类 `User.java`（此处使用了 [Lombok (opens new window)](https://www.projectlombok.org/)简化代码）

```java
@Data
public class User {
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
```

编写Mapper类 `UserMapper.java`

```java
public interface UserMapper extends BaseMapper<User> {

}
```

## [#](https://mp.baomidou.com/guide/quick-start.html#开始使用)开始使用

添加测试类，进行功能测试：

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class SampleTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testSelect() {
        System.out.println(("----- selectAll method test ------"));
        List<User> userList = userMapper.selectList(null);
        Assert.assertEquals(5, userList.size());
        userList.forEach(System.out::println);
    }

}
```

TIP

UserMapper 中的 `selectList()` 方法的参数为 MP 内置的条件封装器 `Wrapper`，所以不填写就是无任何条件

控制台输出：

```text
User(id=1, name=Jone, age=18, email=test1@baomidou.com)
User(id=2, name=Jack, age=20, email=test2@baomidou.com)
User(id=3, name=Tom, age=28, email=test3@baomidou.com)
User(id=4, name=Sandy, age=21, email=test4@baomidou.com)
User(id=5, name=Billie, age=24, email=test5@baomidou.com)
```

TIP

完整的代码示例请移步：[Spring Boot 快速启动示例 (opens new window)](https://github.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-quickstart)| [Spring MVC 快速启动示例(opens new window)](https://github.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-quickstart-springmvc)

## [#](https://mp.baomidou.com/guide/quick-start.html#小结)小结

通过以上几个简单的步骤，我们就实现了 User 表的 CRUD 功能，甚至连 XML 文件都不用编写！

从以上步骤中，我们可以看到集成`MyBatis-Plus`非常的简单，只需要引入 starter 工程，并配置 mapper 扫描路径即可。

但 MyBatis-Plus 的强大远不止这些功能，想要详细了解 MyBatis-Plus 的强大功能？那就继续往下看吧！

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/quick-start.md) (opens new window)

# [#](https://mp.baomidou.com/guide/install.html#安装)安装

全新的 `MyBatis-Plus` 3.0 版本基于 JDK8，提供了 `lambda` 形式的调用，所以安装集成 MP3.0 要求如下：

- JDK 8+
- Maven or Gradle

TIP

JDK7 以及下的请参考 MP2.0 版本，地址：[2.0 文档(opens new window)](https://baomidou.gitee.io/mybatis-plus-doc/#/)

## [#](https://mp.baomidou.com/guide/install.html#release)Release

### [#](https://mp.baomidou.com/guide/install.html#spring-boot)Spring Boot

Maven：

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.4.2</version>
</dependency>
```

Gradle：

```groovy
compile group: 'com.baomidou', name: 'mybatis-plus-boot-starter', version: '3.4.2'
```

### [#](https://mp.baomidou.com/guide/install.html#spring-mvc)Spring MVC

Maven:

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus</artifactId>
    <version>3.4.2</version>
</dependency>
```

Gradle：

```groovy
compile group: 'com.baomidou', name: 'mybatis-plus', version: '3.4.2'
```

------

WARNING

引入 `MyBatis-Plus` 之后请不要再次引入 `MyBatis` 以及 `MyBatis-Spring`，以避免因版本差异导致的问题。

## [#](https://mp.baomidou.com/guide/install.html#snapshot)Snapshot

快照 SNAPSHOT 版本需要添加仓库，且版本号为快照版本 [点击查看最新快照版本号 (opens new window)](https://oss.sonatype.org/content/repositories/snapshots/com/baomidou/mybatis-plus-boot-starter/)。

Maven：

```xml
<repository>
    <id>snapshots</id>
    <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
</repository>
```

Gradle：

```groovy
repositories {
    maven { url 'https://oss.sonatype.org/content/repositories/snapshots/' }
}
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/install.md) (opens new window)

# 配置

MyBatis-Plus 的配置异常的简单，我们仅需要一些简单的配置即可使用 MyBatis-Plus 的强大功能！

TIP

在讲解配置之前，请确保您已经安装了 MyBatis-Plus，如果您尚未安装，请查看 [安装](https://mp.baomidou.com/guide/install.html) 一章。

- Spring Boot 工程：

  - 配置 MapperScan 注解

    ```java
@SpringBootApplication
    @MapperScan("com.baomidou.mybatisplus.samples.quickstart.mapper")
public class Application {
    
    public static void main(String[] args) {
            SpringApplication.run(Application.class, args);
    }
    
}
    ```

- Spring 工程：

  - 配置 MapperScan

    ```xml
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.baomidou.mybatisplus.samples.quickstart.mapper"/>
</bean>
    ```

  - 调整 SqlSessionFactory 为 MyBatis-Plus 的 SqlSessionFactory

    ```xml
  <bean id="sqlSessionFactory" class="com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"/>
  </bean>
    ```

通常来说，一般的简单工程，通过以上配置即可正常使用 MyBatis-Plus，具体可参考以下项目：[Spring Boot 快速启动示例 (opens new window)](https://github.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-quickstart)、[Spring MVC 快速启动示例 (opens new window)](https://github.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-quickstart-springmvc)。

同时 MyBatis-Plus 提供了大量的个性化配置来满足不同复杂度的工程，大家可根据自己的项目按需取用，详细配置请参考[配置](https://mp.baomidou.com/config/)一文

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/config.md) (opens new window)

# [#](https://mp.baomidou.com/guide/annotation.html#注解)注解

> 介绍 `MybatisPlus` 注解包相关类详解(更多详细描述可点击查看源码注释)

注解类包：

👉 [mybatis-plus-annotation(opens new window)](https://gitee.com/baomidou/mybatis-plus/tree/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation)

## [#](https://mp.baomidou.com/guide/annotation.html#tablename)[@TableName(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableName.java)

- 描述：表名注解

|       属性       |   类型   | 必须指定 | 默认值 | 描述                                                         |
| :--------------: | :------: | :------: | :----: | ------------------------------------------------------------ |
|      value       |  String  |    否    |   ""   | 表名                                                         |
|      schema      |  String  |    否    |   ""   | schema                                                       |
| keepGlobalPrefix | boolean  |    否    | false  | 是否保持使用全局的 tablePrefix 的值(如果设置了全局 tablePrefix 且自行设置了 value 的值) |
|    resultMap     |  String  |    否    |   ""   | xml 中 resultMap 的 id                                       |
|  autoResultMap   | boolean  |    否    | false  | 是否自动构建 resultMap 并使用(如果设置 resultMap 则不会进行 resultMap 的自动构建并注入) |
| excludeProperty  | String[] |    否    |   {}   | 需要排除的属性名(@since 3.3.1)                               |

关于`autoResultMap`的说明:

mp会自动构建一个`ResultMap`并注入到mybatis里(一般用不上).下面讲两句: 因为mp底层是mybatis,所以一些mybatis的常识你要知道,mp只是帮你注入了常用crud到mybatis里 注入之前可以说是动态的(根据你entity的字段以及注解变化而变化),但是注入之后是静态的(等于你写在xml的东西) 而对于直接指定`typeHandler`,mybatis只支持你写在2个地方:

1. 定义在resultMap里,只作用于select查询的返回结果封装
2. 定义在`insert`和`update`sql的`#{property}`里的`property`后面(例:`#{property,typehandler=xxx.xxx.xxx}`),只作用于`设置值` 而除了这两种直接指定`typeHandler`,mybatis有一个全局的扫描你自己的`typeHandler`包的配置,这是根据你的`property`的类型去找`typeHandler`并使用.

## [#](https://mp.baomidou.com/guide/annotation.html#tableid)[@TableId(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableId.java)

- 描述：主键注解

| 属性  |  类型  | 必须指定 |   默认值    |    描述    |
| :---: | :----: | :------: | :---------: | :--------: |
| value | String |    否    |     ""      | 主键字段名 |
| type  |  Enum  |    否    | IdType.NONE |  主键类型  |

#### [#](https://mp.baomidou.com/guide/annotation.html#idtype)[IdType(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/IdType.java)

|      值       |                             描述                             |
| :-----------: | :----------------------------------------------------------: |
|     AUTO      |                         数据库ID自增                         |
|     NONE      | 无状态,该类型为未设置主键类型(注解里等于跟随全局,全局里约等于 INPUT) |
|     INPUT     |                    insert前自行set主键值                     |
|   ASSIGN_ID   | 分配ID(主键类型为Number(Long和Integer)或String)(since 3.3.0),使用接口`IdentifierGenerator`的方法`nextId`(默认实现类为`DefaultIdentifierGenerator`雪花算法) |
|  ASSIGN_UUID  | 分配UUID,主键类型为String(since 3.3.0),使用接口`IdentifierGenerator`的方法`nextUUID`(默认default方法) |
|   ID_WORKER   |     分布式全局唯一ID 长整型类型(please use `ASSIGN_ID`)      |
|     UUID      |           32位UUID字符串(please use `ASSIGN_UUID`)           |
| ID_WORKER_STR |     分布式全局唯一ID 字符串类型(please use `ASSIGN_ID`)      |

## [#](https://mp.baomidou.com/guide/annotation.html#tablefield)[@TableField(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableField.java)

- 描述：字段注解(非主键)

|       属性       |             类型             | 必须指定 |          默认值          |                             描述                             |
| :--------------: | :--------------------------: | :------: | :----------------------: | :----------------------------------------------------------: |
|      value       |            String            |    否    |            ""            |                         数据库字段名                         |
|        el        |            String            |    否    |            ""            | 映射为原生 `#{ ... }` 逻辑,相当于写在 xml 里的 `#{ ... }` 部分 |
|      exist       |           boolean            |    否    |           true           |                      是否为数据库表字段                      |
|    condition     |            String            |    否    |            ""            | 字段 `where` 实体查询比较条件,有值设置则按设置的值为准,没有则为默认全局的 `%s=#{%s}`,[参考(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/SqlCondition.java) |
|      update      |            String            |    否    |            ""            | 字段 `update set` 部分注入, 例如：update="%s+1"：表示更新时会set version=version+1(该属性优先级高于 `el` 属性) |
|  insertStrategy  |             Enum             |    N     |         DEFAULT          | 举例：NOT_NULL: `insert into table_a(<if test="columnProperty != null">column</if>) values (<if test="columnProperty != null">#{columnProperty}</if>)` |
|  updateStrategy  |             Enum             |    N     |         DEFAULT          | 举例：IGNORED: `update table_a set column=#{columnProperty}` |
|  whereStrategy   |             Enum             |    N     |         DEFAULT          | 举例：NOT_EMPTY: `where <if test="columnProperty != null and columnProperty!=''">column=#{columnProperty}</if>` |
|       fill       |             Enum             |    否    |    FieldFill.DEFAULT     |                       字段自动填充策略                       |
|      select      |           boolean            |    否    |           true           |                     是否进行 select 查询                     |
| keepGlobalFormat |           boolean            |    否    |          false           |              是否保持使用全局的 format 进行处理              |
|     jdbcType     |           JdbcType           |    否    |    JdbcType.UNDEFINED    |           JDBC类型 (该默认值不代表会按照该值生效)            |
|   typeHandler    | Class<? extends TypeHandler> |    否    | UnknownTypeHandler.class |          类型处理器 (该默认值不代表会按照该值生效)           |
|   numericScale   |            String            |    否    |            ""            |                    指定小数点后保留的位数                    |

关于`jdbcType`和`typeHandler`以及`numericScale`的说明:

`numericScale`只生效于 update 的sql. `jdbcType`和`typeHandler`如果不配合`@TableName#autoResultMap = true`一起使用,也只生效于 update 的sql. 对于`typeHandler`如果你的字段类型和set进去的类型为`equals`关系,则只需要让你的`typeHandler`让Mybatis加载到即可,不需要使用注解

#### [#](https://mp.baomidou.com/guide/annotation.html#fieldstrategy)[FieldStrategy(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/FieldStrategy.java)

|    值     |                           描述                            |
| :-------: | :-------------------------------------------------------: |
|  IGNORED  |                         忽略判断                          |
| NOT_NULL  |                        非NULL判断                         |
| NOT_EMPTY | 非空判断(只对字符串类型字段,其他类型字段依然为非NULL判断) |
|  DEFAULT  |                       追随全局配置                        |

#### [#](https://mp.baomidou.com/guide/annotation.html#fieldfill)[FieldFill(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/FieldFill.java)

|      值       |         描述         |
| :-----------: | :------------------: |
|    DEFAULT    |      默认不处理      |
|    INSERT     |    插入时填充字段    |
|    UPDATE     |    更新时填充字段    |
| INSERT_UPDATE | 插入和更新时填充字段 |

## [#](https://mp.baomidou.com/guide/annotation.html#version)[@Version(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/Version.java)

- 描述：乐观锁注解、标记 `@Verison` 在字段上

## [#](https://mp.baomidou.com/guide/annotation.html#enumvalue)[@EnumValue(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/EnumValue.java)

- 描述：通枚举类注解(注解在枚举字段上)

## [#](https://mp.baomidou.com/guide/annotation.html#tablelogic)[@TableLogic(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableLogic.java)

- 描述：表字段逻辑处理注解（逻辑删除）

|  属性  |  类型  | 必须指定 | 默认值 |     描述     |
| :----: | :----: | :------: | :----: | :----------: |
| value  | String |    否    |   ""   | 逻辑未删除值 |
| delval | String |    否    |   ""   |  逻辑删除值  |

## [#](https://mp.baomidou.com/guide/annotation.html#sqlparser)[@SqlParser(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/SqlParser.java)

> see @InterceptorIgnore

## [#](https://mp.baomidou.com/guide/annotation.html#keysequence)[@KeySequence(opens new window)](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/KeySequence.java)

- 描述：序列主键策略 `oracle`
- 属性：value、resultMap

| 属性  |  类型  | 必须指定 |   默认值   |                             描述                             |
| :---: | :----: | :------: | :--------: | :----------------------------------------------------------: |
| value | String |    否    |     ""     |                            序列名                            |
| clazz | Class  |    否    | Long.class | id的类型, 可以指定String.class，这样返回的Sequence值是字符串"1" |

## [#](https://mp.baomidou.com/guide/annotation.html#interceptorignore)[@InterceptorIgnore(opens new window)](https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/InterceptorIgnore.java)

> see [插件主体](https://mp.baomidou.com/guide/interceptor.html)

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/annotation.md) (opens new window)

# [#](https://mp.baomidou.com/guide/generator.html#代码生成器)代码生成器

AutoGenerator 是 MyBatis-Plus 的代码生成器，通过 AutoGenerator 可以快速生成 Entity、Mapper、Mapper XML、Service、Controller 等各个模块的代码，极大的提升了开发效率。

特别说明:

自定义模板有哪些可用参数？[Github (opens new window)](https://github.com/baomidou/generator/blob/develop/mybatis-plus-generator/src/main/java/com/baomidou/mybatisplus/generator/engine/AbstractTemplateEngine.java)AbstractTemplateEngine 类中方法 getObjectMap 返回 objectMap 的所有值都可用。

演示效果图：

![relationship](https://mp.baomidou.com/img/generator.gif)

```java
// 演示例子，执行 main 方法控制台输入模块表名回车自动生成对应项目目录中
public class CodeGenerator {

    /**
     * <p>
     * 读取控制台内容
     * </p>
     */
    public static String scanner(String tip) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder help = new StringBuilder();
        help.append("请输入" + tip + "：");
        System.out.println(help.toString());
        if (scanner.hasNext()) {
            String ipt = scanner.next();
            if (StringUtils.isNotBlank(ipt)) {
                return ipt;
            }
        }
        throw new MybatisPlusException("请输入正确的" + tip + "！");
    }

    public static void main(String[] args) {
        // 代码生成器
        AutoGenerator mpg = new AutoGenerator();

        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        String projectPath = System.getProperty("user.dir");
        gc.setOutputDir(projectPath + "/src/main/java");
        gc.setAuthor("jobob");
        gc.setOpen(false);
        // gc.setSwagger2(true); 实体属性 Swagger2 注解
        mpg.setGlobalConfig(gc);

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setUrl("jdbc:mysql://localhost:3306/ant?useUnicode=true&useSSL=false&characterEncoding=utf8");
        // dsc.setSchemaName("public");
        dsc.setDriverName("com.mysql.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("密码");
        mpg.setDataSource(dsc);

        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setModuleName(scanner("模块名"));
        pc.setParent("com.baomidou.ant");
        mpg.setPackageInfo(pc);

        // 自定义配置
        InjectionConfig cfg = new InjectionConfig() {
            @Override
            public void initMap() {
                // to do nothing
            }
        };

        // 如果模板引擎是 freemarker
        String templatePath = "/templates/mapper.xml.ftl";
        // 如果模板引擎是 velocity
        // String templatePath = "/templates/mapper.xml.vm";

        // 自定义输出配置
        List<FileOutConfig> focList = new ArrayList<>();
        // 自定义配置会被优先输出
        focList.add(new FileOutConfig(templatePath) {
            @Override
            public String outputFile(TableInfo tableInfo) {
                // 自定义输出文件名 ， 如果你 Entity 设置了前后缀、此处注意 xml 的名称会跟着发生变化！！
                return projectPath + "/src/main/resources/mapper/" + pc.getModuleName()
                        + "/" + tableInfo.getEntityName() + "Mapper" + StringPool.DOT_XML;
            }
        });
        /*
        cfg.setFileCreate(new IFileCreate() {
            @Override
            public boolean isCreate(ConfigBuilder configBuilder, FileType fileType, String filePath) {
                // 判断自定义文件夹是否需要创建
                checkDir("调用默认方法创建的目录，自定义目录用");
                if (fileType == FileType.MAPPER) {
                    // 已经生成 mapper 文件判断存在，不想重新生成返回 false
                    return !new File(filePath).exists();
                }
                // 允许生成模板文件
                return true;
            }
        });
        */
        cfg.setFileOutConfigList(focList);
        mpg.setCfg(cfg);

        // 配置模板
        TemplateConfig templateConfig = new TemplateConfig();

        // 配置自定义输出模板
        //指定自定义模板路径，注意不要带上.ftl/.vm, 会根据使用的模板引擎自动识别
        // templateConfig.setEntity("templates/entity2.java");
        // templateConfig.setService();
        // templateConfig.setController();

        templateConfig.setXml(null);
        mpg.setTemplate(templateConfig);

        // 策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        strategy.setSuperEntityClass("你自己的父类实体,没有就不用设置!");
        strategy.setEntityLombokModel(true);
        strategy.setRestControllerStyle(true);
        // 公共父类
        strategy.setSuperControllerClass("你自己的父类控制器,没有就不用设置!");
        // 写于父类中的公共字段
        strategy.setSuperEntityColumns("id");
        strategy.setInclude(scanner("表名，多个英文逗号分割").split(","));
        strategy.setControllerMappingHyphenStyle(true);
        strategy.setTablePrefix(pc.getModuleName() + "_");
        mpg.setStrategy(strategy);
        mpg.setTemplateEngine(new FreemarkerTemplateEngine());
        mpg.execute();
    }

}
```

更多详细配置，请参考[代码生成器配置](https://mp.baomidou.com/config/generator-config.html)一文。

## [#](https://mp.baomidou.com/guide/generator.html#使用教程)使用教程

### [#](https://mp.baomidou.com/guide/generator.html#添加依赖)添加依赖

MyBatis-Plus 从 `3.0.3` 之后移除了代码生成器与模板引擎的默认依赖，需要手动添加相关依赖：

- 添加 代码生成器 依赖

  ```xml
  <dependency>
      <groupId>com.baomidou</groupId>
      <artifactId>mybatis-plus-generator</artifactId>
      <version>3.4.2</version>
  </dependency>
  ```

- 添加 模板引擎 依赖，MyBatis-Plus 支持 Velocity（默认）、Freemarker、Beetl，用户可以选择自己熟悉的模板引擎，如果都不满足您的要求，可以采用自定义模板引擎。

  Velocity（默认）：

  ```xml
  <dependency>
      <groupId>org.apache.velocity</groupId>
      <artifactId>velocity-engine-core</artifactId>
      <version>2.2</version>
  </dependency>
  ```

  Freemarker：

  ```xml
  <dependency>
      <groupId>org.freemarker</groupId>
      <artifactId>freemarker</artifactId>
      <version>2.3.30</version>
  </dependency>
  ```

  Beetl：

  ```xml
  <dependency>
      <groupId>com.ibeetl</groupId>
      <artifactId>beetl</artifactId>
      <version>3.3.2.RELEASE</version>
  </dependency>
  ```

  注意！如果您选择了非默认引擎，需要在 AutoGenerator 中 设置模板引擎。

  ```java
  AutoGenerator generator = new AutoGenerator();
  
  // set freemarker engine
  generator.setTemplateEngine(new FreemarkerTemplateEngine());
  
  // set beetl engine
  generator.setTemplateEngine(new BeetlTemplateEngine());
  
  // set custom engine (reference class is your custom engine class)
  generator.setTemplateEngine(new CustomTemplateEngine());
  
  // other config
  ...
  ```

### [#](https://mp.baomidou.com/guide/generator.html#编写配置)编写配置

MyBatis-Plus 的代码生成器提供了大量的自定义参数供用户选择，能够满足绝大部分人的使用需求。

- 配置 GlobalConfig

  ```java
  GlobalConfig globalConfig = new GlobalConfig();
  globalConfig.setOutputDir(System.getProperty("user.dir") + "/src/main/java");
  globalConfig.setAuthor("jobob");
  globalConfig.setOpen(false);
  ```

- 配置 DataSourceConfig

  ```java
  DataSourceConfig dataSourceConfig = new DataSourceConfig();
  dataSourceConfig.setUrl("jdbc:mysql://localhost:3306/ant?useUnicode=true&useSSL=false&characterEncoding=utf8");
  dataSourceConfig.setDriverName("com.mysql.jdbc.Driver");
  dataSourceConfig.setUsername("root");
  dataSourceConfig.setPassword("password");
  ```

## [#](https://mp.baomidou.com/guide/generator.html#自定义模板引擎)自定义模板引擎

请继承类 com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine

## [#](https://mp.baomidou.com/guide/generator.html#自定义代码模板)自定义代码模板

```java
//指定自定义模板路径, 位置：/resources/templates/entity2.java.ftl(或者是.vm)
//注意不要带上.ftl(或者是.vm), 会根据使用的模板引擎自动识别
TemplateConfig templateConfig = new TemplateConfig()
    .setEntity("templates/entity2.java");

AutoGenerator mpg = new AutoGenerator();
//配置自定义模板
mpg.setTemplate(templateConfig);
```

## [#](https://mp.baomidou.com/guide/generator.html#自定义属性注入)自定义属性注入

```java
InjectionConfig injectionConfig = new InjectionConfig() {
    //自定义属性注入:abc
    //在.ftl(或者是.vm)模板中，通过${cfg.abc}获取属性
    @Override
    public void initMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("abc", this.getConfig().getGlobalConfig().getAuthor() + "-mp");
        this.setMap(map);
    }
};
AutoGenerator mpg = new AutoGenerator();
//配置自定义属性注入
mpg.setCfg(injectionConfig);
entity2.java.ftl
自定义属性注入abc=${cfg.abc}

entity2.java.vm
自定义属性注入abc=$!{cfg.abc}
```

## [#](https://mp.baomidou.com/guide/generator.html#字段其他信息查询注入)字段其他信息查询注入

![relationship](https://mp.baomidou.com/img/custom-fields.png)

```java
new DataSourceConfig().setDbQuery(new MySqlQuery() {

    /**
     * 重写父类预留查询自定义字段<br>
     * 这里查询的 SQL 对应父类 tableFieldsSql 的查询字段，默认不能满足你的需求请重写它<br>
     * 模板中调用：  table.fields 获取所有字段信息，
     * 然后循环字段获取 field.customMap 从 MAP 中获取注入字段如下  NULL 或者 PRIVILEGES
     */
    @Override
    public String[] fieldCustom() {
        return new String[]{"NULL", "PRIVILEGES"};
    }
})
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/generator.md) (opens new window)

# [#](https://mp.baomidou.com/guide/crud-interface.html#crud-接口)CRUD 接口

## [#](https://mp.baomidou.com/guide/crud-interface.html#service-crud-接口)Service CRUD 接口

说明:

- 通用 Service CRUD 封装[IService (opens new window)](https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/service/IService.java)接口，进一步封装 CRUD 采用 `get 查询单行` `remove 删除` `list 查询集合` `page 分页` 前缀命名方式区分 `Mapper` 层避免混淆，
- 泛型 `T` 为任意实体对象
- 建议如果存在自定义通用 Service 方法的可能，请创建自己的 `IBaseService` 继承 `Mybatis-Plus` 提供的基类
- 对象 `Wrapper` 为 [条件构造器](https://mp.baomidou.com/guide/wrapper.html)

### [#](https://mp.baomidou.com/guide/crud-interface.html#save)Save

```java
// 插入一条记录（选择字段，策略插入）
boolean save(T entity);
// 插入（批量）
boolean saveBatch(Collection<T> entityList);
// 插入（批量）
boolean saveBatch(Collection<T> entityList, int batchSize);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明)参数说明

|     类型      |   参数名   |     描述     |
| :-----------: | :--------: | :----------: |
|       T       |   entity   |   实体对象   |
| Collection<T> | entityList | 实体对象集合 |
|      int      | batchSize  | 插入批次数量 |

### [#](https://mp.baomidou.com/guide/crud-interface.html#saveorupdate)SaveOrUpdate

```java
// TableId 注解存在更新记录，否插入一条记录
boolean saveOrUpdate(T entity);
// 根据updateWrapper尝试更新，否继续执行saveOrUpdate(T)方法
boolean saveOrUpdate(T entity, Wrapper<T> updateWrapper);
// 批量修改插入
boolean saveOrUpdateBatch(Collection<T> entityList);
// 批量修改插入
boolean saveOrUpdateBatch(Collection<T> entityList, int batchSize);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-2)参数说明

|     类型      |    参数名     |               描述               |
| :-----------: | :-----------: | :------------------------------: |
|       T       |    entity     |             实体对象             |
|  Wrapper<T>   | updateWrapper | 实体对象封装操作类 UpdateWrapper |
| Collection<T> |  entityList   |           实体对象集合           |
|      int      |   batchSize   |           插入批次数量           |

### [#](https://mp.baomidou.com/guide/crud-interface.html#remove)Remove

```java
// 根据 entity 条件，删除记录
boolean remove(Wrapper<T> queryWrapper);
// 根据 ID 删除
boolean removeById(Serializable id);
// 根据 columnMap 条件，删除记录
boolean removeByMap(Map<String, Object> columnMap);
// 删除（根据ID 批量删除）
boolean removeByIds(Collection<? extends Serializable> idList);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-3)参数说明

|                类型                |    参数名    |          描述           |
| :--------------------------------: | :----------: | :---------------------: |
|             Wrapper<T>             | queryWrapper | 实体包装类 QueryWrapper |
|            Serializable            |      id      |         主键ID          |
|        Map<String, Object>         |  columnMap   |     表字段 map 对象     |
| Collection<? extends Serializable> |    idList    |       主键ID列表        |

### [#](https://mp.baomidou.com/guide/crud-interface.html#update)Update

```java
// 根据 UpdateWrapper 条件，更新记录 需要设置sqlset
boolean update(Wrapper<T> updateWrapper);
// 根据 whereEntity 条件，更新记录
boolean update(T entity, Wrapper<T> updateWrapper);
// 根据 ID 选择修改
boolean updateById(T entity);
// 根据ID 批量更新
boolean updateBatchById(Collection<T> entityList);
// 根据ID 批量更新
boolean updateBatchById(Collection<T> entityList, int batchSize);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-4)参数说明

|     类型      |    参数名     |               描述               |
| :-----------: | :-----------: | :------------------------------: |
|  Wrapper<T>   | updateWrapper | 实体对象封装操作类 UpdateWrapper |
|       T       |    entity     |             实体对象             |
| Collection<T> |  entityList   |           实体对象集合           |
|      int      |   batchSize   |           更新批次数量           |

### [#](https://mp.baomidou.com/guide/crud-interface.html#get)Get

```java
// 根据 ID 查询
T getById(Serializable id);
// 根据 Wrapper，查询一条记录。结果集，如果是多个会抛出异常，随机取一条加上限制条件 wrapper.last("LIMIT 1")
T getOne(Wrapper<T> queryWrapper);
// 根据 Wrapper，查询一条记录
T getOne(Wrapper<T> queryWrapper, boolean throwEx);
// 根据 Wrapper，查询一条记录
Map<String, Object> getMap(Wrapper<T> queryWrapper);
// 根据 Wrapper，查询一条记录
<V> V getObj(Wrapper<T> queryWrapper, Function<? super Object, V> mapper);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-5)参数说明

|            类型             |    参数名    |              描述               |
| :-------------------------: | :----------: | :-----------------------------: |
|        Serializable         |      id      |             主键ID              |
|         Wrapper<T>          | queryWrapper | 实体对象封装操作类 QueryWrapper |
|           boolean           |   throwEx    |   有多个 result 是否抛出异常    |
|              T              |    entity    |            实体对象             |
| Function<? super Object, V> |    mapper    |            转换函数             |

### [#](https://mp.baomidou.com/guide/crud-interface.html#list)List

```java
// 查询所有
List<T> list();
// 查询列表
List<T> list(Wrapper<T> queryWrapper);
// 查询（根据ID 批量查询）
Collection<T> listByIds(Collection<? extends Serializable> idList);
// 查询（根据 columnMap 条件）
Collection<T> listByMap(Map<String, Object> columnMap);
// 查询所有列表
List<Map<String, Object>> listMaps();
// 查询列表
List<Map<String, Object>> listMaps(Wrapper<T> queryWrapper);
// 查询全部记录
List<Object> listObjs();
// 查询全部记录
<V> List<V> listObjs(Function<? super Object, V> mapper);
// 根据 Wrapper 条件，查询全部记录
List<Object> listObjs(Wrapper<T> queryWrapper);
// 根据 Wrapper 条件，查询全部记录
<V> List<V> listObjs(Wrapper<T> queryWrapper, Function<? super Object, V> mapper);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-6)参数说明

|                类型                |    参数名    |              描述               |
| :--------------------------------: | :----------: | :-----------------------------: |
|             Wrapper<T>             | queryWrapper | 实体对象封装操作类 QueryWrapper |
| Collection<? extends Serializable> |    idList    |           主键ID列表            |
|        Map<?String, Object>        |  columnMap   |         表字段 map 对象         |
|    Function<? super Object, V>     |    mapper    |            转换函数             |

### [#](https://mp.baomidou.com/guide/crud-interface.html#page)Page

```java
// 无条件分页查询
IPage<T> page(IPage<T> page);
// 条件分页查询
IPage<T> page(IPage<T> page, Wrapper<T> queryWrapper);
// 无条件分页查询
IPage<Map<String, Object>> pageMaps(IPage<T> page);
// 条件分页查询
IPage<Map<String, Object>> pageMaps(IPage<T> page, Wrapper<T> queryWrapper);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-7)参数说明

|    类型    |    参数名    |              描述               |
| :--------: | :----------: | :-----------------------------: |
|  IPage<T>  |     page     |            翻页对象             |
| Wrapper<T> | queryWrapper | 实体对象封装操作类 QueryWrapper |

### [#](https://mp.baomidou.com/guide/crud-interface.html#count)Count

```java
// 查询总记录数
int count();
// 根据 Wrapper 条件，查询总记录数
int count(Wrapper<T> queryWrapper);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-8)参数说明

|    类型    |    参数名    |              描述               |
| :--------: | :----------: | :-----------------------------: |
| Wrapper<T> | queryWrapper | 实体对象封装操作类 QueryWrapper |

### [#](https://mp.baomidou.com/guide/crud-interface.html#chain)Chain

#### [#](https://mp.baomidou.com/guide/crud-interface.html#query)query

```java
// 链式查询 普通
QueryChainWrapper<T> query();
// 链式查询 lambda 式。注意：不支持 Kotlin
LambdaQueryChainWrapper<T> lambdaQuery(); 

// 示例：
query().eq("column", value).one();
lambdaQuery().eq(Entity::getId, value).list();
```

#### [#](https://mp.baomidou.com/guide/crud-interface.html#update-2)update

```java
// 链式更改 普通
UpdateChainWrapper<T> update();
// 链式更改 lambda 式。注意：不支持 Kotlin 
LambdaUpdateChainWrapper<T> lambdaUpdate();

// 示例：
update().eq("column", value).remove();
lambdaUpdate().eq(Entity::getId, value).update(entity);
```

## [#](https://mp.baomidou.com/guide/crud-interface.html#mapper-crud-接口)Mapper CRUD 接口

说明:

- 通用 CRUD 封装[BaseMapper (opens new window)](https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-core/src/main/java/com/baomidou/mybatisplus/core/mapper/BaseMapper.java)接口，为 `Mybatis-Plus` 启动时自动解析实体表关系映射转换为 `Mybatis` 内部对象注入容器
- 泛型 `T` 为任意实体对象
- 参数 `Serializable` 为任意类型主键 `Mybatis-Plus` 不推荐使用复合主键约定每一张表都有自己的唯一 `id` 主键
- 对象 `Wrapper` 为 [条件构造器](https://mp.baomidou.com/guide/wrapper.html)

### [#](https://mp.baomidou.com/guide/crud-interface.html#insert)Insert

```java
// 插入一条记录
int insert(T entity);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-9)参数说明

| 类型 | 参数名 |   描述   |
| :--: | :----: | :------: |
|  T   | entity | 实体对象 |

### [#](https://mp.baomidou.com/guide/crud-interface.html#delete)Delete

```java
// 根据 entity 条件，删除记录
int delete(@Param(Constants.WRAPPER) Wrapper<T> wrapper);
// 删除（根据ID 批量删除）
int deleteBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList);
// 根据 ID 删除
int deleteById(Serializable id);
// 根据 columnMap 条件，删除记录
int deleteByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-10)参数说明

|                类型                |  参数名   |                描述                |
| :--------------------------------: | :-------: | :--------------------------------: |
|             Wrapper<T>             |  wrapper  | 实体对象封装操作类（可以为 null）  |
| Collection<? extends Serializable> |  idList   | 主键ID列表(不能为 null 以及 empty) |
|            Serializable            |    id     |               主键ID               |
|        Map<String, Object>         | columnMap |          表字段 map 对象           |

### [#](https://mp.baomidou.com/guide/crud-interface.html#update-3)Update

```java
// 根据 whereEntity 条件，更新记录
int update(@Param(Constants.ENTITY) T entity, @Param(Constants.WRAPPER) Wrapper<T> updateWrapper);
// 根据 ID 修改
int updateById(@Param(Constants.ENTITY) T entity);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-11)参数说明

|    类型    |    参数名     |                             描述                             |
| :--------: | :-----------: | :----------------------------------------------------------: |
|     T      |    entity     |               实体对象 (set 条件值,可为 null)                |
| Wrapper<T> | updateWrapper | 实体对象封装操作类（可以为 null,里面的 entity 用于生成 where 语句） |

### [#](https://mp.baomidou.com/guide/crud-interface.html#select)Select

```java
// 根据 ID 查询
T selectById(Serializable id);
// 根据 entity 条件，查询一条记录
T selectOne(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 查询（根据ID 批量查询）
List<T> selectBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList);
// 根据 entity 条件，查询全部记录
List<T> selectList(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
// 查询（根据 columnMap 条件）
List<T> selectByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);
// 根据 Wrapper 条件，查询全部记录
List<Map<String, Object>> selectMaps(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
// 根据 Wrapper 条件，查询全部记录。注意： 只返回第一个字段的值
List<Object> selectObjs(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);

// 根据 entity 条件，查询全部记录（并翻页）
IPage<T> selectPage(IPage<T> page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
// 根据 Wrapper 条件，查询全部记录（并翻页）
IPage<Map<String, Object>> selectMapsPage(IPage<T> page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
// 根据 Wrapper 条件，查询总记录数
Integer selectCount(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
```

##### [#](https://mp.baomidou.com/guide/crud-interface.html#参数说明-12)参数说明

|                类型                |    参数名    |                   描述                   |
| :--------------------------------: | :----------: | :--------------------------------------: |
|            Serializable            |      id      |                  主键ID                  |
|             Wrapper<T>             | queryWrapper |    实体对象封装操作类（可以为 null）     |
| Collection<? extends Serializable> |    idList    |    主键ID列表(不能为 null 以及 empty)    |
|        Map<String, Object>         |  columnMap   |             表字段 map 对象              |
|              IPage<T>              |     page     | 分页查询条件（可以为 RowBounds.DEFAULT） |

## [#](https://mp.baomidou.com/guide/crud-interface.html#mapper-层-选装件)mapper 层 选装件

说明:

选装件位于 `com.baomidou.mybatisplus.extension.injector.methods` 包下 需要配合[Sql 注入器](https://mp.baomidou.com/guide/sql-injector.html)使用,[案例(opens new window)](https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-sql-injector)
使用详细见[源码注释(opens new window)](https://gitee.com/baomidou/mybatis-plus/tree/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/injector/methods)

### [#](https://mp.baomidou.com/guide/crud-interface.html#alwaysupdatesomecolumnbyid)[AlwaysUpdateSomeColumnById(opens new window)](https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/injector/methods/AlwaysUpdateSomeColumnById.java)

```java
int alwaysUpdateSomeColumnById(T entity);
```

### [#](https://mp.baomidou.com/guide/crud-interface.html#insertbatchsomecolumn)[insertBatchSomeColumn(opens new window)](https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/injector/methods/InsertBatchSomeColumn.java)

```java
int insertBatchSomeColumn(List<T> entityList);
```

### [#](https://mp.baomidou.com/guide/crud-interface.html#deletebyidwithfill)[deleteByIdWithFill(opens new window)](https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/injector/methods/LogicDeleteByIdWithFill.java)

```java
int deleteByIdWithFill(T entity);
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/crud-interface.md) (opens new window)

# [#](https://mp.baomidou.com/guide/wrapper.html#条件构造器)条件构造器

说明:

- 以下出现的第一个入参`boolean condition`表示该条件**是否**加入最后生成的sql中，例如：query.like(StringUtils.isNotBlank(name), Entity::getName, name) .eq(age!=null && age >= 0, Entity::getAge, age)
- 以下代码块内的多个方法均为从上往下补全个别`boolean`类型的入参,默认为`true`
- 以下出现的泛型`Param`均为`Wrapper`的子类实例(均具有`AbstractWrapper`的所有方法)
- 以下方法在入参中出现的`R`为泛型,在普通wrapper中是`String`,在LambdaWrapper中是**函数**(例:`Entity::getId`,`Entity`为实体类,`getId`为字段`id`的**getMethod**)
- 以下方法入参中的`R column`均表示数据库字段,当`R`具体类型为`String`时则为数据库字段名(**字段名是数据库关键字的自己用转义符包裹!**)!而不是实体类数据字段名!!!,另当`R`具体类型为`SFunction`时项目runtime不支持eclipse自家的编译器!!!
- 以下举例均为使用普通wrapper,入参为`Map`和`List`的均以`json`形式表现!
- 使用中如果入参的`Map`或者`List`为**空**,则不会加入最后生成的sql中!!!
- 有任何疑问就点开源码看,看不懂**函数**的[点击我学习新知识(opens new window)](https://www.jianshu.com/p/613a6118e2e0)

警告:

不支持以及不赞成在 RPC 调用中把 Wrapper 进行传输

1. wrapper 很重
2. 传输 wrapper 可以类比为你的 controller 用 map 接收值(开发一时爽,维护火葬场)
3. 正确的 RPC 调用姿势是写一个 DTO 进行传输,被调用方再根据 DTO 执行相应的操作
4. 我们拒绝接受任何关于 RPC 传输 Wrapper 报错相关的 issue 甚至 pr

## [#](https://mp.baomidou.com/guide/wrapper.html#abstractwrapper)AbstractWrapper

说明:

QueryWrapper(LambdaQueryWrapper) 和 UpdateWrapper(LambdaUpdateWrapper) 的父类
用于生成 sql 的 where 条件, entity 属性也用于生成 sql 的 where 条件
注意: entity 生成的 where 条件与 使用各个 api 生成的 where 条件**没有任何关联行为**

### [#](https://mp.baomidou.com/guide/wrapper.html#alleq)allEq





 



```java
allEq(Map<R, V> params)
allEq(Map<R, V> params, boolean null2IsNull)
allEq(boolean condition, Map<R, V> params, boolean null2IsNull)
```

- 全部[eq](https://mp.baomidou.com/guide/wrapper.html#eq)(或个别[isNull](https://mp.baomidou.com/guide/wrapper.html#isnull))

个别参数说明:

`params` : `key`为数据库字段名,`value`为字段值
`null2IsNull` : 为`true`则在`map`的`value`为`null`时调用 [isNull](https://mp.baomidou.com/guide/wrapper.html#isnull) 方法,为`false`时则忽略`value`为`null`的

- 例1: `allEq({id:1,name:"老王",age:null})`--->`id = 1 and name = '老王' and age is null`
- 例2: `allEq({id:1,name:"老王",age:null}, false)`--->`id = 1 and name = '老王'`





 



```java
allEq(BiPredicate<R, V> filter, Map<R, V> params)
allEq(BiPredicate<R, V> filter, Map<R, V> params, boolean null2IsNull)
allEq(boolean condition, BiPredicate<R, V> filter, Map<R, V> params, boolean null2IsNull) 
```

个别参数说明:

`filter` : 过滤函数,是否允许字段传入比对条件中
`params` 与 `null2IsNull` : 同上

- 例1: `allEq((k,v) -> k.indexOf("a") >= 0, {id:1,name:"老王",age:null})`--->`name = '老王' and age is null`
- 例2: `allEq((k,v) -> k.indexOf("a") >= 0, {id:1,name:"老王",age:null}, false)`--->`name = '老王'`

### [#](https://mp.baomidou.com/guide/wrapper.html#eq)eq



 



```java
eq(R column, Object val)
eq(boolean condition, R column, Object val)
```

- 等于 =
- 例: `eq("name", "老王")`--->`name = '老王'`

### [#](https://mp.baomidou.com/guide/wrapper.html#ne)ne



 



```java
ne(R column, Object val)
ne(boolean condition, R column, Object val)
```

- 不等于 <>
- 例: `ne("name", "老王")`--->`name <> '老王'`

### [#](https://mp.baomidou.com/guide/wrapper.html#gt)gt



 



```java
gt(R column, Object val)
gt(boolean condition, R column, Object val)
```

- 大于 >
- 例: `gt("age", 18)`--->`age > 18`

### [#](https://mp.baomidou.com/guide/wrapper.html#ge)ge



 



```java
ge(R column, Object val)
ge(boolean condition, R column, Object val)
```

- 大于等于 >=
- 例: `ge("age", 18)`--->`age >= 18`

### [#](https://mp.baomidou.com/guide/wrapper.html#lt)lt



 



```java
lt(R column, Object val)
lt(boolean condition, R column, Object val)
```

- 小于 <
- 例: `lt("age", 18)`--->`age < 18`

### [#](https://mp.baomidou.com/guide/wrapper.html#le)le



 



```java
le(R column, Object val)
le(boolean condition, R column, Object val)
```

- 小于等于 <=
- 例: `le("age", 18)`--->`age <= 18`

### [#](https://mp.baomidou.com/guide/wrapper.html#between)between



 



```java
between(R column, Object val1, Object val2)
between(boolean condition, R column, Object val1, Object val2)
```

- BETWEEN 值1 AND 值2
- 例: `between("age", 18, 30)`--->`age between 18 and 30`

### [#](https://mp.baomidou.com/guide/wrapper.html#notbetween)notBetween



 



```java
notBetween(R column, Object val1, Object val2)
notBetween(boolean condition, R column, Object val1, Object val2)
```

- NOT BETWEEN 值1 AND 值2
- 例: `notBetween("age", 18, 30)`--->`age not between 18 and 30`

### [#](https://mp.baomidou.com/guide/wrapper.html#like)like



 



```java
like(R column, Object val)
like(boolean condition, R column, Object val)
```

- LIKE '%值%'
- 例: `like("name", "王")`--->`name like '%王%'`

### [#](https://mp.baomidou.com/guide/wrapper.html#notlike)notLike



 



```java
notLike(R column, Object val)
notLike(boolean condition, R column, Object val)
```

- NOT LIKE '%值%'
- 例: `notLike("name", "王")`--->`name not like '%王%'`

### [#](https://mp.baomidou.com/guide/wrapper.html#likeleft)likeLeft



 



```java
likeLeft(R column, Object val)
likeLeft(boolean condition, R column, Object val)
```

- LIKE '%值'
- 例: `likeLeft("name", "王")`--->`name like '%王'`

### [#](https://mp.baomidou.com/guide/wrapper.html#likeright)likeRight



 



```java
likeRight(R column, Object val)
likeRight(boolean condition, R column, Object val)
```

- LIKE '值%'
- 例: `likeRight("name", "王")`--->`name like '王%'`

### [#](https://mp.baomidou.com/guide/wrapper.html#isnull)isNull



 



```java
isNull(R column)
isNull(boolean condition, R column)
```

- 字段 IS NULL
- 例: `isNull("name")`--->`name is null`

### [#](https://mp.baomidou.com/guide/wrapper.html#isnotnull)isNotNull



 



```java
isNotNull(R column)
isNotNull(boolean condition, R column)
```

- 字段 IS NOT NULL
- 例: `isNotNull("name")`--->`name is not null`

### [#](https://mp.baomidou.com/guide/wrapper.html#in)in



 



```java
in(R column, Collection<?> value)
in(boolean condition, R column, Collection<?> value)
```

- 字段 IN (value.get(0), value.get(1), ...)
- 例: `in("age",{1,2,3})`--->`age in (1,2,3)`



 



```java
in(R column, Object... values)
in(boolean condition, R column, Object... values)
```

- 字段 IN (v0, v1, ...)
- 例: `in("age", 1, 2, 3)`--->`age in (1,2,3)`

### [#](https://mp.baomidou.com/guide/wrapper.html#notin)notIn



 



```java
notIn(R column, Collection<?> value)
notIn(boolean condition, R column, Collection<?> value)
```

- 字段 NOT IN (value.get(0), value.get(1), ...)
- 例: `notIn("age",{1,2,3})`--->`age not in (1,2,3)`



 



```java
notIn(R column, Object... values)
notIn(boolean condition, R column, Object... values)
```

- 字段 NOT IN (v0, v1, ...)
- 例: `notIn("age", 1, 2, 3)`--->`age not in (1,2,3)`

### [#](https://mp.baomidou.com/guide/wrapper.html#insql)inSql



 



```java
inSql(R column, String inValue)
inSql(boolean condition, R column, String inValue)
```

- 字段 IN ( sql语句 )
- 例: `inSql("age", "1,2,3,4,5,6")`--->`age in (1,2,3,4,5,6)`
- 例: `inSql("id", "select id from table where id < 3")`--->`id in (select id from table where id < 3)`

### [#](https://mp.baomidou.com/guide/wrapper.html#notinsql)notInSql



 



```java
notInSql(R column, String inValue)
notInSql(boolean condition, R column, String inValue)
```

- 字段 NOT IN ( sql语句 )
- 例: `notInSql("age", "1,2,3,4,5,6")`--->`age not in (1,2,3,4,5,6)`
- 例: `notInSql("id", "select id from table where id < 3")`--->`id not in (select id from table where id < 3)`

### [#](https://mp.baomidou.com/guide/wrapper.html#groupby)groupBy



 



```java
groupBy(R... columns)
groupBy(boolean condition, R... columns)
```

- 分组：GROUP BY 字段, ...
- 例: `groupBy("id", "name")`--->`group by id,name`

### [#](https://mp.baomidou.com/guide/wrapper.html#orderbyasc)orderByAsc



 



```java
orderByAsc(R... columns)
orderByAsc(boolean condition, R... columns)
```

- 排序：ORDER BY 字段, ... ASC
- 例: `orderByAsc("id", "name")`--->`order by id ASC,name ASC`

### [#](https://mp.baomidou.com/guide/wrapper.html#orderbydesc)orderByDesc



 



```java
orderByDesc(R... columns)
orderByDesc(boolean condition, R... columns)
```

- 排序：ORDER BY 字段, ... DESC
- 例: `orderByDesc("id", "name")`--->`order by id DESC,name DESC`

### [#](https://mp.baomidou.com/guide/wrapper.html#orderby)orderBy

 



```java
orderBy(boolean condition, boolean isAsc, R... columns)
```

- 排序：ORDER BY 字段, ...
- 例: `orderBy(true, true, "id", "name")`--->`order by id ASC,name ASC`

### [#](https://mp.baomidou.com/guide/wrapper.html#having)having



 



```java
having(String sqlHaving, Object... params)
having(boolean condition, String sqlHaving, Object... params)
```

- HAVING ( sql语句 )
- 例: `having("sum(age) > 10")`--->`having sum(age) > 10`
- 例: `having("sum(age) > {0}", 11)`--->`having sum(age) > 11`

### [#](https://mp.baomidou.com/guide/wrapper.html#func)func



 



```java
func(Consumer<Children> consumer)
func(boolean condition, Consumer<Children> consumer)
```

- func 方法(主要方便在出现if...else下调用不同方法能不断链)
- 例: `func(i -> if(true) {i.eq("id", 1)} else {i.ne("id", 1)})`

### [#](https://mp.baomidou.com/guide/wrapper.html#or)or



 



```java
or()
or(boolean condition)
```

- 拼接 OR

注意事项:

主动调用`or`表示紧接着下一个**方法**不是用`and`连接!(不调用`or`则默认为使用`and`连接)

- 例: `eq("id",1).or().eq("name","老王")`--->`id = 1 or name = '老王'`



 



```java
or(Consumer<Param> consumer)
or(boolean condition, Consumer<Param> consumer)
```

- OR 嵌套
- 例: `or(i -> i.eq("name", "李白").ne("status", "活着"))`--->`or (name = '李白' and status <> '活着')`

### [#](https://mp.baomidou.com/guide/wrapper.html#and)and



 



```java
and(Consumer<Param> consumer)
and(boolean condition, Consumer<Param> consumer)
```

- AND 嵌套
- 例: `and(i -> i.eq("name", "李白").ne("status", "活着"))`--->`and (name = '李白' and status <> '活着')`

### [#](https://mp.baomidou.com/guide/wrapper.html#nested)nested



 



```java
nested(Consumer<Param> consumer)
nested(boolean condition, Consumer<Param> consumer)
```

- 正常嵌套 不带 AND 或者 OR
- 例: `nested(i -> i.eq("name", "李白").ne("status", "活着"))`--->`(name = '李白' and status <> '活着')`

### [#](https://mp.baomidou.com/guide/wrapper.html#apply)apply



 



```java
apply(String applySql, Object... params)
apply(boolean condition, String applySql, Object... params)
```

- 拼接 sql

注意事项:

该方法可用于数据库**函数** 动态入参的`params`对应前面`applySql`内部的`{index}`部分.这样是不会有sql注入风险的,反之会有!

- 例: `apply("id = 1")`--->`id = 1`
- 例: `apply("date_format(dateColumn,'%Y-%m-%d') = '2008-08-08'")`--->`date_format(dateColumn,'%Y-%m-%d') = '2008-08-08'")`
- 例: `apply("date_format(dateColumn,'%Y-%m-%d') = {0}", "2008-08-08")`--->`date_format(dateColumn,'%Y-%m-%d') = '2008-08-08'")`

### [#](https://mp.baomidou.com/guide/wrapper.html#last)last



 



```java
last(String lastSql)
last(boolean condition, String lastSql)
```

- 无视优化规则直接拼接到 sql 的最后

注意事项:

只能调用一次,多次调用以最后一次为准 有sql注入的风险,请谨慎使用

- 例: `last("limit 1")`

### [#](https://mp.baomidou.com/guide/wrapper.html#exists)exists



 



```java
exists(String existsSql)
exists(boolean condition, String existsSql)
```

- 拼接 EXISTS ( sql语句 )
- 例: `exists("select id from table where age = 1")`--->`exists (select id from table where age = 1)`

### [#](https://mp.baomidou.com/guide/wrapper.html#notexists)notExists



 



```java
notExists(String notExistsSql)
notExists(boolean condition, String notExistsSql)
```

- 拼接 NOT EXISTS ( sql语句 )
- 例: `notExists("select id from table where age = 1")`--->`not exists (select id from table where age = 1)`

## [#](https://mp.baomidou.com/guide/wrapper.html#querywrapper)QueryWrapper

说明:

继承自 AbstractWrapper ,自身的内部属性 entity 也用于生成 where 条件
及 LambdaQueryWrapper, 可以通过 new QueryWrapper().lambda() 方法获取

### [#](https://mp.baomidou.com/guide/wrapper.html#select)select





 



```java
select(String... sqlSelect)
select(Predicate<TableFieldInfo> predicate)
select(Class<T> entityClass, Predicate<TableFieldInfo> predicate)
```

- 设置查询字段

说明:

以上方法分为两类.
第二类方法为:过滤查询字段(主键除外),入参不包含 class 的调用前需要`wrapper`内的`entity`属性有值! 这两类方法重复调用以最后一次为准

- 例: `select("id", "name", "age")`
- 例: `select(i -> i.getProperty().startsWith("test"))`

## [#](https://mp.baomidou.com/guide/wrapper.html#updatewrapper)UpdateWrapper

说明:

继承自 `AbstractWrapper` ,自身的内部属性 `entity` 也用于生成 where 条件
及 `LambdaUpdateWrapper`, 可以通过 `new UpdateWrapper().lambda()` 方法获取!

### [#](https://mp.baomidou.com/guide/wrapper.html#set)set



 



```java
set(String column, Object val)
set(boolean condition, String column, Object val)
```

- SQL SET 字段
- 例: `set("name", "老李头")`
- 例: `set("name", "")`--->数据库字段值变为**空字符串**
- 例: `set("name", null)`--->数据库字段值变为`null`

### [#](https://mp.baomidou.com/guide/wrapper.html#setsql)setSql

```java
setSql(String sql)
```

- 设置 SET 部分 SQL
- 例: `setSql("name = '老李头'")`

### [#](https://mp.baomidou.com/guide/wrapper.html#lambda)lambda

- 获取 `LambdaWrapper`
  在`QueryWrapper`中是获取`LambdaQueryWrapper`
  在`UpdateWrapper`中是获取`LambdaUpdateWrapper`

## [#](https://mp.baomidou.com/guide/wrapper.html#使用-wrapper-自定义sql)使用 Wrapper 自定义SQL

注意事项:

需要`mybatis-plus`版本 >= `3.0.7` param 参数名要么叫`ew`,要么加上注解`@Param(Constants.WRAPPER)` 使用`${ew.customSqlSegment}` 不支持 `Wrapper` 内的entity生成where语句

### [#](https://mp.baomidou.com/guide/wrapper.html#用注解)用注解

```java
@Select("select * from mysql_data ${ew.customSqlSegment}")
List<MysqlData> getAll(@Param(Constants.WRAPPER) Wrapper wrapper);
```

### [#](https://mp.baomidou.com/guide/wrapper.html#用xml)用XML

```java
List<MysqlData> getAll(Wrapper ew);
<select id="getAll" resultType="MysqlData">
	SELECT * FROM mysql_data ${ew.customSqlSegment}
</select>
```

### [#](https://mp.baomidou.com/guide/wrapper.html#kotlin使用wrapper)kotlin使用wrapper

> kotlin 可以使用 `QueryWrapper` 和 `UpdateWrapper` 但无法使用 `LambdaQueryWrapper` 和 `LambdaUpdateWrapper`
> 如果想使用 lambda 方式的 wrapper 请使用 `KtQueryWrapper` 和 `KtUpdateWrapper`

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/wrapper.md) (opens new window)

# [#](https://mp.baomidou.com/guide/page.html#分页插件)分页插件

示例工程：

👉 [mybatis-plus-sample-pagination(opens new window)](https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-pagination)

```xml
<!-- spring xml 方式 -->
<property name="plugins">
    <array>
        <bean class="com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor">
            <property name="sqlParser" ref="自定义解析类、可以没有"/>
            <property name="dialectClazz" value="自定义方言类、可以没有"/>
            <!-- COUNT SQL 解析.可以没有 -->
            <property name="countSqlParser" ref="countSqlParser"/>
        </bean>
    </array>
</property>

<bean id="countSqlParser" class="com.baomidou.mybatisplus.extension.plugins.pagination.optimize.JsqlParserCountOptimize">
    <!-- 设置为 true 可以优化部分 left join 的sql -->
    <property name="optimizeJoin" value="true"/>
</bean>
```

```java
//Spring boot方式
@Configuration
@MapperScan("com.baomidou.cloud.service.*.mapper*")
public class MybatisPlusConfig {

    @Bean
    public Interceptor paginationInterceptor() {
        PaginationInterceptor paginationInterceptor = new PaginationInterceptor();
        // 设置请求的页面大于最大页后操作， true调回到首页，false 继续请求  默认false
        // paginationInterceptor.setOverflow(false);
        // 设置最大单页限制数量，默认 500 条，-1 不受限制
        // paginationInterceptor.setLimit(500);
        // 开启 count 的 join 优化,只针对部分 left join
        paginationInterceptor.setCountSqlParser(new JsqlParserCountOptimize(true));
        return paginationInterceptor;
    }
}
```



# [#](https://mp.baomidou.com/guide/page.html#xml-自定义分页)XML 自定义分页

- UserMapper.java 方法内容

```java
public interface UserMapper {//可以继承或者不继承BaseMapper
    /**
     * <p>
     * 查询 : 根据state状态查询用户列表，分页显示
     * </p>
     *
     * @param page 分页对象,xml中可以从里面进行取值,传递参数 Page 即自动分页,必须放在第一位(你可以继承Page实现自己的分页对象)
     * @param state 状态
     * @return 分页对象
     */
    IPage<User> selectPageVo(Page<?> page, Integer state);
}
```

- UserMapper.xml 等同于编写一个普通 list 查询，mybatis-plus 自动替你分页

```xml
<select id="selectPageVo" resultType="com.baomidou.cloud.entity.UserVo">
    SELECT id,name FROM user WHERE state=#{state}
</select>
```

- UserServiceImpl.java 调用分页方法

```java
public IPage<User> selectUserPage(Page<User> page, Integer state) {
    // 不进行 count sql 优化，解决 MP 无法自动优化 SQL 问题，这时候你需要自己查询 count 部分
    // page.setOptimizeCountSql(false);
    // 当 total 为小于 0 或者设置 setSearchCount(false) 分页插件不会进行 count 查询
    // 要点!! 分页返回的对象与传入的对象是同一个
    return userMapper.selectPageVo(page, state);
}
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/page.md) (opens new window)

# [#](https://mp.baomidou.com/guide/sequence.html#sequence主键)Sequence主键

TIP

**主键生成策略必须使用INPUT**

支持父类定义@KeySequence子类继承使用

支持主键类型指定(3.3.0开始自动识别主键类型)

内置支持：

- DB2KeyGenerator
- H2KeyGenerator
- KingbaseKeyGenerator
- OracleKeyGenerator
- PostgreKeyGenerator

如果内置支持不满足你的需求，可实现IKeyGenerator接口来进行扩展.

举个栗子

```java
@KeySequence(value = "SEQ_ORACLE_STRING_KEY", clazz = String.class)
public class YourEntity {
    
    @TableId(value = "ID_STR", type = IdType.INPUT)
    private String idStr;

}
```

## [#](https://mp.baomidou.com/guide/sequence.html#spring-boot)Spring-Boot

### [#](https://mp.baomidou.com/guide/sequence.html#方式一-使用配置类)方式一：使用配置类

```java
@Bean
public IKeyGenerator keyGenerator() {
    return new H2KeyGenerator();
}
```

### [#](https://mp.baomidou.com/guide/sequence.html#方式二-通过mybatispluspropertiescustomizer自定义)方式二：通过MybatisPlusPropertiesCustomizer自定义

```java
@Bean
public MybatisPlusPropertiesCustomizer plusPropertiesCustomizer() {
    return plusProperties -> plusProperties.getGlobalConfig().getDbConfig().setKeyGenerator(new H2KeyGenerator());
}
```

## [#](https://mp.baomidou.com/guide/sequence.html#spring)Spring

### [#](https://mp.baomidou.com/guide/sequence.html#方式一-xml配置)方式一: XML配置

```xml
<bean id="globalConfig" class="com.baomidou.mybatisplus.core.config.GlobalConfig">
   <property name="dbConfig" ref="dbConfig"/>
</bean>

<bean id="dbConfig" class="com.baomidou.mybatisplus.core.config.GlobalConfig.DbConfig">
   <property name="keyGenerator" ref="keyGenerator"/>
</bean>

<bean id="keyGenerator" class="com.baomidou.mybatisplus.extension.incrementer.H2KeyGenerator"/>
```

### [#](https://mp.baomidou.com/guide/sequence.html#方式二-注解配置)方式二：注解配置

```java
@Bean
public GlobalConfig globalConfig() {
	GlobalConfig conf = new GlobalConfig();
	conf.setDbConfig(new GlobalConfig.DbConfig().setKeyGenerator(new H2KeyGenerator()));
	return conf;
}
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/sequence.md) (opens new window)

# [#](https://mp.baomidou.com/guide/id-generator.html#自定义id生成器)自定义ID生成器

TIP

自3.3.0开始,默认使用雪花算法+UUID(不含中划线)

自定义示例工程：

- spring-boot示例 ：[传送门(opens new window)](https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-id-generator)

| 方法     | 主键生成策略                        | 主键类型            | 说明                                                         |
| -------- | ----------------------------------- | ------------------- | ------------------------------------------------------------ |
| nextId   | ASSIGN_ID，ID_WORKER，ID_WORKER_STR | Long,Integer,String | 支持自动转换为String类型，但数值类型不支持自动转换，需精准匹配，例如返回Long，实体主键就不支持定义为Integer |
| nextUUID | ASSIGN_UUID，UUID                   | String              | 默认不含中划线的UUID生成                                     |

## [#](https://mp.baomidou.com/guide/id-generator.html#spring-boot)Spring-Boot

### [#](https://mp.baomidou.com/guide/id-generator.html#方式一-声明为bean供spring扫描注入)方式一：声明为Bean供Spring扫描注入

```java
@Component
public class CustomIdGenerator implements IdentifierGenerator {
    @Override
    public Long nextId(Object entity) {
      	//可以将当前传入的class全类名来作为bizKey,或者提取参数来生成bizKey进行分布式Id调用生成.
      	String bizKey = entity.getClass().getName();
        //根据bizKey调用分布式ID生成
        long id = ....;
      	//返回生成的id值即可.
        return id;
    }
}
```

### [#](https://mp.baomidou.com/guide/id-generator.html#方式二-使用配置类)方式二：使用配置类

```java
@Bean
public IdentifierGenerator idGenerator() {
    return new CustomIdGenerator();
}
```

### [#](https://mp.baomidou.com/guide/id-generator.html#方式三-通过mybatispluspropertiescustomizer自定义)方式三：通过MybatisPlusPropertiesCustomizer自定义

```java
@Bean
public MybatisPlusPropertiesCustomizer plusPropertiesCustomizer() {
    return plusProperties -> plusProperties.getGlobalConfig().setIdentifierGenerator(new CustomIdGenerator());
}
```

## [#](https://mp.baomidou.com/guide/id-generator.html#spring)Spring

### [#](https://mp.baomidou.com/guide/id-generator.html#方式一-xml配置)方式一: XML配置

```xml
<bean name="customIdGenerator" class="com.baomidou.samples.incrementer.CustomIdGenerator"/>

<bean id="globalConfig" class="com.baomidou.mybatisplus.core.config.GlobalConfig">
		<property name="identifierGenerator" ref="customIdGenerator"/>
</bean>
```

### [#](https://mp.baomidou.com/guide/id-generator.html#方式二-注解配置)方式二：注解配置

```java
@Bean
public GlobalConfig globalConfig() {
	GlobalConfig conf = new GlobalConfig();
	conf.setIdentifierGenerator(new CustomIdGenerator());
	return conf;
}
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/id-generator.md) (opens new window)

# [#](https://mp.baomidou.com/guide/logic-delete.html#逻辑删除)逻辑删除

说明:

只对自动注入的sql起效:

- 插入: 不作限制
- 查找: 追加where条件过滤掉已删除数据,且使用 wrapper.entity 生成的where条件会忽略该字段
- 更新: 追加where条件防止更新到已删除数据,且使用 wrapper.entity 生成的where条件会忽略该字段
- 删除: 转变为 更新

例如:

- 删除: `update user set deleted=1 where id = 1 and deleted=0`
- 查找: `select id,name,deleted from user where deleted=0`

字段类型支持说明:

- 支持所有数据类型(推荐使用 `Integer`,`Boolean`,`LocalDateTime`)
- 如果数据库字段使用`datetime`,逻辑未删除值和已删除值支持配置为字符串`null`,另一个值支持配置为函数来获取值如`now()`

附录:

- 逻辑删除是为了方便数据恢复和保护数据本身价值等等的一种方案，但实际就是删除。
- 如果你需要频繁查出来看就不应使用逻辑删除，而是以一个状态去表示。

## [#](https://mp.baomidou.com/guide/logic-delete.html#使用方法)使用方法：

### [#](https://mp.baomidou.com/guide/logic-delete.html#步骤1-配置com-baomidou-mybatisplus-core-config-globalconfig-dbconfig)步骤1: 配置`com.baomidou.mybatisplus.core.config.GlobalConfig$DbConfig`

- 例: application.yml

```yaml
mybatis-plus:
  global-config:
    db-config:
      logic-delete-field: flag  # 全局逻辑删除的实体字段名(since 3.3.0,配置后可以忽略不配置步骤2)
      logic-delete-value: 1 # 逻辑已删除值(默认为 1)
      logic-not-delete-value: 0 # 逻辑未删除值(默认为 0)
```

### [#](https://mp.baomidou.com/guide/logic-delete.html#步骤2-实体类字段上加上-tablelogic注解)步骤2: 实体类字段上加上`@TableLogic`注解

```java
@TableLogic
private Integer deleted;
```

## [#](https://mp.baomidou.com/guide/logic-delete.html#常见问题)常见问题:

#### [#](https://mp.baomidou.com/guide/logic-delete.html#_1-如何-insert)1. 如何 insert ?

> 1. 字段在数据库定义默认值(推荐)
> 2. insert 前自己 set 值
> 3. 使用自动填充功能

#### [#](https://mp.baomidou.com/guide/logic-delete.html#_2-删除接口自动填充功能失效)2. 删除接口自动填充功能失效

> 1. 使用 `update` 方法并: `UpdateWrapper.set(column, value)`(推荐)
> 2. 使用 `update` 方法并: `UpdateWrapper.setSql("column=value")`
> 3. 使用[Sql注入器](https://mp.baomidou.com/guide/sql-injector.html)注入`com.baomidou.mybatisplus.extension.injector.methods.LogicDeleteByIdWithFill`并使用(推荐)

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/logic-delete.md) (opens new window)

# [#](https://mp.baomidou.com/guide/enum.html#通用枚举)通用枚举

解决了繁琐的配置，让 mybatis 优雅的使用枚举属性！

> 自`3.1.0`开始，如果你无需使用原生枚举，可配置默认枚举来省略扫描通用枚举配置 [默认枚举配置](https://mp.baomidou.com/config/#defaultEnumTypeHandler)
>
> - 升级说明:
>
>   `3.1.0` 以下版本改变了原生默认行为,升级时请将默认枚举设置为`EnumOrdinalTypeHandler`
>
> - 影响用户:
>
>   实体中使用原生枚举
>
> - 其他说明:
>
>   配置枚举包扫描的时候能提前注册使用注解枚举的缓存

# [#](https://mp.baomidou.com/guide/enum.html#_1、声明通用枚举属性)1、声明通用枚举属性

> 方式一： 使用 @EnumValue 注解枚举属性 [完整示例(opens new window)](https://gitee.com/baomidou/mybatis-plus-samples/blob/master/mybatis-plus-sample-enum/src/main/java/com/baomidou/mybatisplus/samples/enums/enums/GradeEnum.java)

```java
public enum GradeEnum {

    PRIMARY(1, "小学"),  SECONDORY(2, "中学"),  HIGH(3, "高中");

    GradeEnum(int code, String descp) {
        this.code = code;
        this.descp = descp;
    }

    @EnumValue//标记数据库存的值是code
    private final int code;
    //。。。
}
```

> 方式二： 枚举属性，实现 IEnum 接口如下：

```java
public enum AgeEnum implements IEnum<Integer> {
    ONE(1, "一岁"),
    TWO(2, "二岁"),
    THREE(3, "三岁");
    
    private int value;
    private String desc;
    
    @Override
    public Integer getValue() {
        return this.value;
    }
}
```

> 实体属性使用枚举类型

```java
public class User {
    /**
     * 名字
     * 数据库字段: name varchar(20)
     */
    private String name;
    
    /**
     * 年龄，IEnum接口的枚举处理
     * 数据库字段：age INT(3)
     */
    private AgeEnum age;
        
        
    /**
     * 年级，原生枚举（带{@link com.baomidou.mybatisplus.annotation.EnumValue}):
     * 数据库字段：grade INT(2)
     */
    private GradeEnum grade;
}
```

# [#](https://mp.baomidou.com/guide/enum.html#_2、配置扫描通用枚举)2、配置扫描通用枚举

- 注意!! spring mvc 配置参考，安装集成 MybatisSqlSessionFactoryBean 枚举包扫描，spring boot 例子配置如下：

示例工程：

👉 [mybatisplus-spring-boot(opens new window)](https://git.oschina.net/baomidou/mybatisplus-spring-boot)

> 配置文件 resources/application.yml

```text
mybatis-plus:
    # 支持统配符 * 或者 ; 分割
    typeEnumsPackage: com.baomidou.springboot.entity.enums
  ....
```

# [#](https://mp.baomidou.com/guide/enum.html#如何序列化枚举值为数据库存储值)如何序列化枚举值为数据库存储值？

## [#](https://mp.baomidou.com/guide/enum.html#jackson)Jackson

### [#](https://mp.baomidou.com/guide/enum.html#一、重写tostring方法)一、重写toString方法

#### [#](https://mp.baomidou.com/guide/enum.html#springboot)springboot

```java
    @Bean
    public Jackson2ObjectMapperBuilderCustomizer customizer(){
        return builder -> builder.featuresToEnable(SerializationFeature.WRITE_ENUMS_USING_TO_STRING);
    }
```

#### [#](https://mp.baomidou.com/guide/enum.html#jackson-2)jackson

```java
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.configure(SerializationFeature.WRITE_ENUMS_USING_TO_STRING, true);
```

以上两种方式任选其一,然后在枚举中复写toString方法即可.

### [#](https://mp.baomidou.com/guide/enum.html#二、注解处理)二、注解处理

```java
public enum GradeEnum {

    PRIMARY(1, "小学"),  SECONDORY(2, "中学"),  HIGH(3, "高中");

    GradeEnum(int code, String descp) {
        this.code = code;
        this.descp = descp;
    }

    @EnumValue
  	@JsonValue	//标记响应json值
    private final int code;
}
```

## [#](https://mp.baomidou.com/guide/enum.html#fastjson)Fastjson

### [#](https://mp.baomidou.com/guide/enum.html#一、重写tostring方法-2)一、重写toString方法

#### [#](https://mp.baomidou.com/guide/enum.html#全局处理方式)全局处理方式

```java
		FastJsonConfig config = new FastJsonConfig();
		config.setSerializerFeatures(SerializerFeature.WriteEnumUsingToString);
```

#### [#](https://mp.baomidou.com/guide/enum.html#局部处理方式)局部处理方式

```java
		@JSONField(serialzeFeatures= SerializerFeature.WriteEnumUsingToString)
		private UserStatus status;
```

以上两种方式任选其一,然后在枚举中复写toString方法即可.

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/enum.md) (opens new window)

# [#](https://mp.baomidou.com/guide/typehandler.html#字段类型处理器)字段类型处理器

> 类型处理器，用于 JavaType 与 JdbcType 之间的转换，用于 PreparedStatement 设置参数值和从 ResultSet 或 CallableStatement 中取出一个值，本文讲解 `mybaits-plus` 内置常用类型处理器如何通过`TableField`注解快速注入到 `mybatis` 容器中。

示例工程：

👉 [mybatis-plus-sample-typehandler(opens new window)](https://github.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-typehandler)

- JSON 字段类型

```java
@Data
@Accessors(chain = true)
@TableName(autoResultMap = true)
public class User {
    private Long id;

    ...


    /**
     * 注意！！ 必须开启映射注解
     *
     * @TableName(autoResultMap = true)
     *
     * 以下两种类型处理器，二选一 也可以同时存在
     *
     * 注意！！选择对应的 JSON 处理器也必须存在对应 JSON 解析依赖包
     */
    @TableField(typeHandler = JacksonTypeHandler.class)
    // @TableField(typeHandler = FastjsonTypeHandler.class)
    private OtherInfo otherInfo;

}
```

该注解对应了 XML 中写法为

```xml
<result column="other_info" jdbcType="VARCHAR" property="otherInfo" typeHandler="com.baomidou.mybatisplus.extension.handlers.JacksonTypeHandler" />
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/typehandler.md) (opens new window)

# [#](https://mp.baomidou.com/guide/auto-fill-metainfo.html#自动填充功能)自动填充功能

示例工程：

👉 [mybatis-plus-sample-auto-fill-metainfo(opens new window)](https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-auto-fill-metainfo)

原理:

- 实现元对象处理器接口：com.baomidou.mybatisplus.core.handlers.MetaObjectHandler
- 注解填充字段 `@TableField(.. fill = FieldFill.INSERT)` 生成器策略部分也可以配置！

```java
public class User {

    // 注意！这里需要标记为填充字段
    @TableField(.. fill = FieldFill.INSERT)
    private String fillField;

    ....
}
```

- 自定义实现类 MyMetaObjectHandler

```java
@Slf4j
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {

    @Override
    public void insertFill(MetaObject metaObject) {
        log.info("start insert fill ....");
        this.strictInsertFill(metaObject, "createTime", LocalDateTime.class, LocalDateTime.now()); // 起始版本 3.3.0(推荐使用)
        // 或者
        this.strictUpdateFill(metaObject, "createTime", () -> LocalDateTime.now(), LocalDateTime.class); // 起始版本 3.3.3(推荐)
        // 或者
        this.fillStrategy(metaObject, "createTime", LocalDateTime.now()); // 也可以使用(3.3.0 该方法有bug)
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        log.info("start update fill ....");
        this.strictUpdateFill(metaObject, "updateTime", LocalDateTime.class, LocalDateTime.now()); // 起始版本 3.3.0(推荐)
        // 或者
        this.strictUpdateFill(metaObject, "updateTime", () -> LocalDateTime.now(), LocalDateTime.class); // 起始版本 3.3.3(推荐)
        // 或者
        this.fillStrategy(metaObject, "updateTime", LocalDateTime.now()); // 也可以使用(3.3.0 该方法有bug)
    }
}
```

注意事项：

- 填充原理是直接给`entity`的属性设置值!!!
- 注解则是指定该属性在对应情况下必有值,如果无值则入库会是`null`
- `MetaObjectHandler`提供的默认方法的策略均为:如果属性有值则不覆盖,如果填充值为`null`则不填充
- 字段必须声明`TableField`注解,属性`fill`选择对应策略,该声明告知`Mybatis-Plus`需要预留注入`SQL`字段
- 填充处理器`MyMetaObjectHandler`在 Spring Boot 中需要声明`@Component`或`@Bean`注入
- 要想根据注解`FieldFill.xxx`和`字段名`以及`字段类型`来区分必须使用父类的`strictInsertFill`或者`strictUpdateFill`方法
- 不需要根据任何来区分可以使用父类的`fillStrategy`方法

```java
public enum FieldFill {
    /**
     * 默认不处理
     */
    DEFAULT,
    /**
     * 插入填充字段
     */
    INSERT,
    /**
     * 更新填充字段
     */
    UPDATE,
    /**
     * 插入和更新填充字段
     */
    INSERT_UPDATE
}
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/auto-fill-metainfo.md) (opens new window)

# [#](https://mp.baomidou.com/guide/sql-injector.html#sql-注入器)Sql 注入器

注入器配置

全局配置 `sqlInjector` 用于注入 `ISqlInjector` 接口的子类，实现自定义方法注入。

参考默认注入器 [DefaultSqlInjector(opens new window)](https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-core/src/main/java/com/baomidou/mybatisplus/core/injector/DefaultSqlInjector.java)

- SQL 自动注入器接口 `ISqlInjector`

```java
public interface ISqlInjector {

    /**
     * <p>
     * 检查SQL是否注入(已经注入过不再注入)
     * </p>
     *
     * @param builderAssistant mapper 信息
     * @param mapperClass      mapper 接口的 class 对象
     */
    void inspectInject(MapperBuilderAssistant builderAssistant, Class<?> mapperClass);
}
```

自定义自己的通用方法可以实现接口 `ISqlInjector` 也可以继承抽象类 `AbstractSqlInjector` 注入通用方法 `SQL 语句` 然后继承 `BaseMapper` 添加自定义方法，全局配置 `sqlInjector` 注入 MP 会自动将类所有方法注入到 `mybatis` 容器中。

> 参考[自定义BaseMapper示例 (opens new window)](https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-deluxe))

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/sql-injector.md) (opens new window)

# [#](https://mp.baomidou.com/guide/p6spy.html#执行-sql-分析打印)执行 SQL 分析打印

> 该功能依赖 `p6spy` 组件，完美的输出打印 SQL 及执行时长 `3.1.0` 以上版本

示例工程：

👉 [mybatis-plus-sample-crud(opens new window)](https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-crud)

- p6spy 依赖引入

Maven：

```xml
<dependency>
  <groupId>p6spy</groupId>
  <artifactId>p6spy</artifactId>
  <version>最新版本</version>
</dependency>
```

Gradle：

```groovy
compile group: 'p6spy', name: 'p6spy', version: '最新版本'
```

- application.yml 配置：

```yaml
spring:
  datasource:
    driver-class-name: com.p6spy.engine.spy.P6SpyDriver
    url: jdbc:p6spy:h2:mem:test
    ...
```

- spy.properties 配置：

```properties
#3.2.1以上使用
modulelist=com.baomidou.mybatisplus.extension.p6spy.MybatisPlusLogFactory,com.p6spy.engine.outage.P6OutageFactory
#3.2.1以下使用或者不配置
#modulelist=com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory
# 自定义日志打印
logMessageFormat=com.baomidou.mybatisplus.extension.p6spy.P6SpyLogger
#日志输出到控制台
appender=com.baomidou.mybatisplus.extension.p6spy.StdoutLogger
# 使用日志系统记录 sql
#appender=com.p6spy.engine.spy.appender.Slf4JLogger
# 设置 p6spy driver 代理
deregisterdrivers=true
# 取消JDBC URL前缀
useprefix=true
# 配置记录 Log 例外,可去掉的结果集有error,info,batch,debug,statement,commit,rollback,result,resultset.
excludecategories=info,debug,result,commit,resultset
# 日期格式
dateformat=yyyy-MM-dd HH:mm:ss
# 实际驱动可多个
#driverlist=org.h2.Driver
# 是否开启慢SQL记录
outagedetection=true
# 慢SQL记录标准 2 秒
outagedetectioninterval=2
```

注意！

- driver-class-name 为 p6spy 提供的驱动类
- url 前缀为 jdbc:p6spy 跟着冒号为对应数据库连接地址
- 打印出sql为null,在excludecategories增加commit
- 批量操作不打印sql,去除excludecategories中的batch
- 批量操作打印重复的问题请使用MybatisPlusLogFactory (3.2.1新增）
- 该插件有性能损耗，不建议生产环境使用。

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/p6spy.md) (opens new window)

# [#](https://mp.baomidou.com/guide/safety.html#数据安全保护)数据安全保护

> 该功能为了保护数据库配置及数据安全，在一定的程度上控制开发人员流动导致敏感信息泄露。

- 3.3.2 开始支持
- 配置安全

YML 配置：

```text
// 加密配置 mpw: 开头紧接加密内容（ 非数据库配置专用 YML 中其它配置也是可以使用的 ）
spring:
  datasource:
    url: mpw:qRhvCwF4GOqjessEB3G+a5okP+uXXr96wcucn2Pev6Bf1oEMZ1gVpPPhdDmjQqoM
    password: mpw:Hzy5iliJbwDHhjLs1L0j6w==
    username: mpw:Xb+EgsyuYRXw7U7sBJjBpA==
```

密钥加密：

```text
// 生成 16 位随机 AES 密钥
String randomKey = AES.generateRandomKey();

// 随机密钥加密
String result = AES.encrypt(data, randomKey);
```

如何使用：

```text
// Jar 启动参数（ idea 设置 Program arguments , 服务器可以设置为启动环境变量 ）
--mpw.key=d1104d7c3b616f0b
```

- 数据安全：

待完善

注意！

- 加密配置必须以 mpw: 字符串开头
- 随机密钥请负责人妥善保管，当然越少人知道越好。

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/safety.md) (opens new window)

# [#](https://mp.baomidou.com/guide/dynamic-datasource.html#多数据源)多数据源

**一个基于springboot的快速集成多数据源的启动器**

[![img](https://www.travis-ci.org/baomidou/dynamic-datasource-spring-boot-starter.svg?branch=master) ](https://www.travis-ci.org/baomidou/dynamic-datasource-spring-boot-starter)[![img](https://img.shields.io/maven-central/v/com.baomidou/dynamic-datasource-spring-boot-starter.svg)](http://mvnrepository.com/artifact/com.baomidou/dynamic-datasource-spring-boot-starter) [![img](http://img.shields.io/:license-apache-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.html) ![img](https://img.shields.io/badge/JDK-1.7+-green.svg) ![img](https://img.shields.io/badge/springBoot-1.5.x__2.x.x-green.svg) [![dynamic-sring-boot-starter](https://pub.idqqimg.com/wpa/images/group.png)](https://shang.qq.com/wpa/qunwpa?idkey=ded31006508b57d2d732c81266dd2c26e33283f84464e2c294309d90b9674992)

# [#](https://mp.baomidou.com/guide/dynamic-datasource.html#简介)简介

dynamic-datasource-spring-boot-starter 是一个基于springboot的快速集成多数据源的启动器。

其支持 **Jdk 1.7+, SpringBoot 1.4.x 1.5.x 2.x.x**。

## [#](https://mp.baomidou.com/guide/dynamic-datasource.html#文档-documentation)文档 | Documentation

[中文 (opens new window)](http://dynamic-datasource.com/)| [English(opens new window)](http://dynamic-datasource.com/en)

# [#](https://mp.baomidou.com/guide/dynamic-datasource.html#特性)特性

1. 支持 **数据源分组** ，适用于多种场景 纯粹多库 读写分离 一主多从 混合模式。
2. 支持数据库敏感配置信息 **加密** ENC()。
3. 支持每个数据库独立初始化表结构schema和数据库database。
4. 支持 **自定义注解** ，需继承DS(3.2.0+)。
5. 提供对Druid，Mybatis-Plus，P6sy，Jndi的快速集成。
6. 简化Druid和HikariCp配置，提供 **全局参数配置** 。配置一次，全局通用。
7. 提供 **自定义数据源来源** 方案。
8. 提供项目启动后 **动态增加移除数据源** 方案。
9. 提供Mybatis环境下的 **纯读写分离** 方案。
10. 提供使用 **spel动态参数** 解析数据源方案。内置spel，session，header，支持自定义。
11. 支持 **多层数据源嵌套切换** 。（ServiceA >>> ServiceB >>> ServiceC）。
12. 提供对shiro，sharding-jdbc,quartz等第三方库集成的方案,注意事项和示例。
13. 提供 **基于seata的分布式事务方案。** 附：不支持原生spring事务。
14. 提供 **本地多数据源事务方案。** 附：不支持原生spring事务。

# [#](https://mp.baomidou.com/guide/dynamic-datasource.html#约定)约定

1. 本框架只做 **切换数据源** 这件核心的事情，并**不限制你的具体操作**，切换了数据源可以做任何CRUD。
2. 配置文件所有以下划线 `_` 分割的数据源 **首部** 即为组的名称，相同组名称的数据源会放在一个组下。
3. 切换数据源可以是组名，也可以是具体数据源名称。组名则切换时采用负载均衡算法切换。
4. 默认的数据源名称为 **master** ，你可以通过 `spring.datasource.dynamic.primary` 修改。
5. 方法上的注解优先于类上注解。
6. 强烈建议只在service的类和方法上添加注解，不建议在mapper上添加注解。

# [#](https://mp.baomidou.com/guide/dynamic-datasource.html#使用方法)使用方法

1. 引入dynamic-datasource-spring-boot-starter。

```xml
<dependency>
  <groupId>com.baomidou</groupId>
  <artifactId>dynamic-datasource-spring-boot-starter</artifactId>
  <version>${version}</version>
</dependency>
```

1. 配置数据源。

```yaml
spring:
  datasource:
    dynamic:
      primary: master #设置默认的数据源或者数据源组,默认值即为master
      strict: false #设置严格模式,默认false不启动. 启动后在未匹配到指定数据源时候会抛出异常,不启动则使用默认数据源.
      datasource:
        master:
          url: jdbc:mysql://xx.xx.xx.xx:3306/dynamic
          username: root
          password: 123456
          driver-class-name: com.mysql.jdbc.Driver # 3.2.0开始支持SPI可省略此配置
        slave_1:
          url: jdbc:mysql://xx.xx.xx.xx:3307/dynamic
          username: root
          password: 123456
          driver-class-name: com.mysql.jdbc.Driver
        slave_2:
          url: ENC(xxxxx) # 内置加密,使用请查看详细文档
          username: ENC(xxxxx)
          password: ENC(xxxxx)
          driver-class-name: com.mysql.jdbc.Driver
          schema: db/schema.sql # 配置则生效,自动初始化表结构
          data: db/data.sql # 配置则生效,自动初始化数据
          continue-on-error: true # 默认true,初始化失败是否继续
          separator: ";" # sql默认分号分隔符
          
       #......省略
       #以上会配置一个默认库master，一个组slave下有两个子库slave_1,slave_2
# 多主多从                      纯粹多库（记得设置primary）                   混合配置
spring:                               spring:                               spring:
  datasource:                           datasource:                           datasource:
    dynamic:                              dynamic:                              dynamic:
      datasource:                           datasource:                           datasource:
        master_1:                             mysql:                                master:
        master_2:                             oracle:                               slave_1:
        slave_1:                              sqlserver:                            slave_2:
        slave_2:                              postgresql:                           oracle_1:
        slave_3:                              h2:                                   oracle_2:
```

1. 使用 **@DS** 切换数据源。

**@DS** 可以注解在方法上或类上，**同时存在就近原则 方法上注解 优先于 类上注解**。

|     注解      |                   结果                   |
| :-----------: | :--------------------------------------: |
|    没有@DS    |                默认数据源                |
| @DS("dsName") | dsName可以为组名也可以为具体某个库的名称 |

```java
@Service
@DS("slave")
public class UserServiceImpl implements UserService {

  @Autowired
  private JdbcTemplate jdbcTemplate;

  public List selectAll() {
    return  jdbcTemplate.queryForList("select * from user");
  }
  
  @Override
  @DS("slave_1")
  public List selectByCondition() {
    return  jdbcTemplate.queryForList("select * from user where age >10");
  }
}
```

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/dynamic-datasource.md) (opens new window)

# [#](https://mp.baomidou.com/guide/mybatisx-idea-plugin.html#mybatisx-快速开发插件)MybatisX 快速开发插件

MybatisX 是一款基于 IDEA 的快速开发插件，为效率而生。

安装方法：打开 IDEA，进入 File -> Settings -> Plugins -> Browse Repositories，输入 `mybatisx` 搜索并安装。

TIP

如果各位觉得好用，请为该插件打一个[五分好评 (opens new window)](https://plugins.jetbrains.com/plugin/10119-mybatisx)哦！

源码地址：[MybatisX 源码(opens new window)](https://gitee.com/baomidou/MybatisX)

## [#](https://mp.baomidou.com/guide/mybatisx-idea-plugin.html#功能)功能

**XML跳转** ![跳转](https://mp.baomidou.com/img/mybatisx-jump.gif)

**生成代码** ![生成代码](https://mp.baomidou.com/img/mybatisx-generate.gif)

**JPA提示**

生成新增
![生成新增](https://mp.baomidou.com/img/mybatisx-tip-insert.gif)

生成查询
![生成查询](https://mp.baomidou.com/img/mybatisx-tip-select.gif)

生成修改
![生成修改](https://mp.baomidou.com/img/mybatisx-tip-update.gif)

生成删除
![生成删除](https://mp.baomidou.com/img/mybatisx-tip-delete.gif)

## [#](https://mp.baomidou.com/guide/mybatisx-idea-plugin.html#常见问答)常见问答

**为什么JPA不能使用?**
JPA提示的方式需要根据Mapper找到实体类, 找到实体类有以下五种方式

1. 继承mybatis-plus的BaseMapper
2. Mapper.xml 文件有 resultMap 标签
3. 在Mapper类上增加注释指定实体类, 例如: `@Entity com.xx.xx.UserModel`

**为什么生成的表名和期望的表名不一致**
JPA提示生成代码, 按照以下规则找到表名

1. 实体类有JPA注解, 例如: `@Table(name="t_user")`
2. 实体类有mybais-plus注解, 例如: `@TableName("t_user")`
3. 实体类有注释: `@TableName com.xx.xx.UserModel`
4. 如果不存在以上规则, 将驼峰转下划线. 例如 UserMode 的表名为: user_model

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/mybatisx-idea-plugin.md) (opens new window)

# [#](https://mp.baomidou.com/guide/interceptor.html#插件主体-必看-since-3-4-0)插件主体(必看!)(since 3.4.0)

## [#](https://mp.baomidou.com/guide/interceptor.html#mybatisplusinterceptor)MybatisPlusInterceptor

该插件是核心插件,目前代理了 `Executor#query` 和 `Executor#update` 和 `StatementHandler#prepare` 方法

### [#](https://mp.baomidou.com/guide/interceptor.html#属性)属性

> ```
> private List<InnerInterceptor> interceptors = new ArrayList<>();
> ```

### [#](https://mp.baomidou.com/guide/interceptor.html#innerinterceptor)InnerInterceptor

我们提供的插件都将基于此接口来实现功能

目前已有的功能:

- 自动分页: PaginationInnerInterceptor
- 多租户: TenantLineInnerInterceptor
- 动态表名: DynamicTableNameInnerInterceptor
- 乐观锁: OptimisticLockerInnerInterceptor
- sql性能规范: IllegalSQLInnerInterceptor
- 防止全表更新与删除: BlockAttackInnerInterceptor

注意:

使用多个功能需要注意顺序关系,建议使用如下顺序

- 多租户,动态表名
- 分页,乐观锁
- sql性能规范,防止全表更新与删除

总结: 对sql进行单次改造的优先放入,不对sql进行改造的最后放入

## [#](https://mp.baomidou.com/guide/interceptor.html#使用方式-以分页插件举例)使用方式(以分页插件举例)

### [#](https://mp.baomidou.com/guide/interceptor.html#spring-mvc)spring-mvc

```xml
<bean id="sqlSessionFactory" class="com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean">
    <!-- 其他属性 略 --> 
    <property name="configuration" ref="configuration"/>
    <property name="plugins">
        <array>
            <ref bean="mybatisPlusInterceptor"/>
        </array>
    </property>
</bean>

<bean id="configuration" class="com.baomidou.mybatisplus.core.MybatisConfiguration">
    <!-- 需配置该值为false,避免1或2级缓存可能出现问题,该属性会在旧插件移除后一同移除 -->
    <property name="useDeprecatedExecutor" value="false"/>
</bean>

<bean id="mybatisPlusInterceptor" class="com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor">
    <property name="interceptors">
        <list>
            <ref bean="paginationInnerInterceptor"/>
        </list>
    </property>
</bean>

<bean id="paginationInnerInterceptor" class="com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor">
    <!-- 对于单一数据库类型来说,都建议配置该值,避免每次分页都去抓取数据库类型 -->
    <constructor-arg name="dbType" value="H2"/>
</bean>
```

### [#](https://mp.baomidou.com/guide/interceptor.html#spring-boot)spring-boot

```java
@Configuration
@MapperScan("scan.your.mapper.package")
public class MybatisPlusConfig {

    /**
     * 新的分页插件,一缓和二缓遵循mybatis的规则,需要设置 MybatisConfiguration#useDeprecatedExecutor = false 避免缓存出现问题(该属性会在旧插件移除后一同移除)
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.H2));
        return interceptor;
    }

    @Bean
    public ConfigurationCustomizer configurationCustomizer() {
        return configuration -> configuration.setUseDeprecatedExecutor(false);
    }
}
```

### [#](https://mp.baomidou.com/guide/interceptor.html#mybatis-config-xml)mybatis-config.xml

```xml
<plugins>
  <plugin interceptor="com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor">
    <property name="@page" value="com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor"/>
    <property name="page:dbType" value="h2"/>
  </plugin>
</plugins>
```

> property 的配置说明详见 `MybatisPlusInterceptor#setProperties` 的源码方法注释

## [#](https://mp.baomidou.com/guide/interceptor.html#拦截忽略注解-interceptorignore)拦截忽略注解 @InterceptorIgnore

|      属性名      |  类型  | 默认值 |                  描述                  |
| :--------------: | :----: | :----: | :------------------------------------: |
|    tenantLine    | String |   ""   |                行级租户                |
| dynamicTableName | String |   ""   |                动态表名                |
|   blockAttack    | String |   ""   | 攻击 SQL 阻断解析器,防止全表更新与删除 |
|    illegalSql    | String |   ""   |              垃圾SQL拦截               |

> 该注解作用于 xxMapper.java 方法之上 各属性代表对应的插件 各属性不给值则默认为 false 设置为 true 忽略拦截 更多说明详见源码注释

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/interceptor.md) (opens new window)

# [#](https://mp.baomidou.com/guide/interceptor-pagination.html#分页)分页

## [#](https://mp.baomidou.com/guide/interceptor-pagination.html#paginationinnerinterceptor)PaginationInnerInterceptor

### [#](https://mp.baomidou.com/guide/interceptor-pagination.html#支持的数据库)支持的数据库

- mysql 、mariadb 、oracle 、db2 、h2 、hsql 、sqlite 、postgresql 、sqlserver 、presto 、Gauss 、Firebird
- Phoenix 、clickhouse 、Sybase ASE 、 OceanBase 、达梦数据库 、虚谷数据库 、人大金仓数据库 、南大通用数据库

### [#](https://mp.baomidou.com/guide/interceptor-pagination.html#属性介绍)属性介绍

|  属性名  |   类型   | 默认值 |                             描述                             |
| :------: | :------: | :----: | :----------------------------------------------------------: |
| overflow | boolean  | false  | 溢出总页数后是否进行处理(默认不处理,参见 `插件#continuePage` 方法) |
| maxLimit |   Long   |        |  单页分页条数限制(默认无限制,参见 `插件#handlerLimit` 方法)  |
|  dbType  |  DbType  |        | 数据库类型(根据类型获取应使用的分页方言,参见 `插件#findIDialect` 方法) |
| dialect  | IDialect |        |          方言实现类(参见 `插件#findIDialect` 方法)           |

> 建议单一数据库类型的均设置 dbType

### [#](https://mp.baomidou.com/guide/interceptor-pagination.html#自定义的-mapper-method-使用分页)自定义的 mapper#method 使用分页

```java
IPage<UserVo> selectPageVo(IPage<?> page, Integer state);
// or (class MyPage extends Ipage<UserVo>{ private Integer state; })
MyPage selectPageVo(MyPage page);
// or
List<UserVo> selectPageVo(IPage<UserVo> page, Integer state);
<select id="selectPageVo" resultType="xxx.xxx.xxx.UserVo">
    SELECT id,name FROM user WHERE state=#{state}
</select>
```

> 如果返回类型是 IPage 则入参的 IPage 不能为null,因为 返回的IPage == 入参的IPage
> 如果返回类型是 List 则入参的 IPage 可以为 null(为 null 则不分页),但需要你手动 入参的IPage.setRecords(返回的 List);
> 如果 xml 需要从 page 里取值,需要 `page.属性` 获取

### [#](https://mp.baomidou.com/guide/interceptor-pagination.html#其他)其他:

> 生成 countSql 会在 `left join` 的表不参与 `where` 条件的情况下,把 `left join` 优化掉
> 所以建议任何带有 `left join` 的sql,都写标准sql既给于表一个别名,字段也要 `别名.字段`

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/interceptor-pagination.md) (opens new window)

# [#](https://mp.baomidou.com/guide/interceptor-optimistic-locker.html#乐观锁)乐观锁

## [#](https://mp.baomidou.com/guide/interceptor-optimistic-locker.html#optimisticlockerinnerinterceptor)OptimisticLockerInnerInterceptor

> 当要更新一条记录的时候，希望这条记录没有被别人更新
> 乐观锁实现方式：
>
> > - 取出记录时，获取当前version
> > - 更新时，带上这个version
> > - 执行更新时， set version = newVersion where version = oldVersion
> > - 如果version不对，就更新失败

### [#](https://mp.baomidou.com/guide/interceptor-optimistic-locker.html#使用方法)使用方法

字段上加上`@Version`注解

```java
@Version
private Integer version;
```

说明:

- **支持的数据类型只有:int,Integer,long,Long,Date,Timestamp,LocalDateTime**
- 整数类型下 `newVersion = oldVersion + 1`
- `newVersion` 会回写到 `entity` 中
- 仅支持 `updateById(id)` 与 `update(entity, wrapper)` 方法
- **在 `update(entity, wrapper)` 方法下, `wrapper` 不能复用!!!**

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/interceptor-optimistic-locker.md) (opens new window)

# [#](https://mp.baomidou.com/guide/interceptor-tenant-line.html#多租户)多租户

## [#](https://mp.baomidou.com/guide/interceptor-tenant-line.html#tenantlineinnerinterceptor)TenantLineInnerInterceptor

示例工程：

👉 [mybatis-plus-sample-tenant(opens new window)](https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-tenant)

### [#](https://mp.baomidou.com/guide/interceptor-tenant-line.html#属性介绍)属性介绍

|      属性名       |       类型        | 默认值 |             描述              |
| :---------------: | :---------------: | :----: | :---------------------------: |
| tenantLineHandler | TenantLineHandler |        | 租户处理器（ TenantId 行级 ） |

```java
public interface TenantLineHandler {

    /**
     * 获取租户 ID 值表达式，只支持单个 ID 值
     * <p>
     *
     * @return 租户 ID 值表达式
     */
    Expression getTenantId();

    /**
     * 获取租户字段名
     * <p>
     * 默认字段名叫: tenant_id
     *
     * @return 租户字段名
     */
    default String getTenantIdColumn() {
        return "tenant_id";
    }

    /**
     * 根据表名判断是否忽略拼接多租户条件
     * <p>
     * 默认都要进行解析并拼接多租户条件
     *
     * @param tableName 表名
     * @return 是否忽略, true:表示忽略，false:需要解析并拼接多租户条件
     */
    default boolean ignoreTable(String tableName) {
        return false;
    }
}
```

说明:

多租户 != 权限过滤,不要乱用,租户之间是完全隔离的!!!
启用多租户后所有执行的method的sql都会进行处理.
自写的sql请按规范书写(sql涉及到多个表的每个表都要给别名,特别是 inner join 的要写标准的 inner join)

[在 GitHub 上编辑此页](https://github.com/baomidou/mybatis-plus-doc/edit/master/guide/interceptor-tenant-line.md) (opens new window)