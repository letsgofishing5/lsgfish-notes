## 中文文档

https://mybatis.org/mybatis-3/zh/getting-started.html

## 配置文件

mybatis 主要是两张配置文件

1. 单SQL映射文件
2. 主映射文件

#### 单映射文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.mybatis.example.BlogMapper">
  <select id="selectBlog" resultType="Blog">
    select * from Blog where id = #{id}
  </select>
</mapper>
```

#### 主文件映射

文件位置：放在`resource`目录下

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
  PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
  <environments default="development">
    <environment id="development">
      <transactionManager type="JDBC"/>
      <dataSource type="POOLED">
        <property name="driver" value="${driver}"/>
        <property name="url" value="${url}"/>
        <property name="username" value="${username}"/>
        <property name="password" value="${password}"/>
      </dataSource>
    </environment>
  </environments>
  <mappers>
    <mapper resource="org/mybatis/example/BlogMapper.xml"/>
  </mappers>
</configuration>
```

## 主文件配置

#### log打印

```xml
<settings>
    <setting name="logImpl" value="STDOUT_LOGGING"/>
</settings>
```

## 使用细节 

### 传参

#### 多参数，使用@Param

**参数重命名**

```java
//@Param("参数名") 参数类型 参数名
public List<Student> selectMuliParam(@Param("myName") String name,@Param("myAge") Integer age)
```

```xml
<!--mapper映射文件-->
<select>
	select * from student where name  = #{myName} and age = #{myAge}
</select>
```

#### 对象参数

使用最方便，直接传递一个对象，对象的字段要和数据库中的字段一致

### # 与 $

**#：占位符**，告诉`Mybatis`使用实际的参数值代替，并使用`PrepareStatement`对象执行`SQL`，`#{……}`代替`SQL`语句的`“?”`。这样更安全，更迅速，通常也是首选做法

$字符串替换，告诉`Mybatis`使用`$`包含的“字符串”替换所在位置 ，使用`Statement`把`Sql`语句和`${}`的**内容连接**起来。主要用在替换表名，列名，不同排序等操作。

### 查询返回Map

```xml
<resultMap id="res" type="Java类型全限定名称">
	<id column="" property=""/>
    <!--非主键列使用result-->
    <result column="" property=""/>
</resultMap>
<select resultMap="res">

</select>
```

#### 列名和属性名不一致

```xml
<!-- 解决方法一 使用resultMap-->
<resultMap id="res" type="Java类型全限定名称">
	<id column="" property=""/>
    <!--非主键列使用result-->
    <result column="" property=""/>
</resultMap>
<select resultMap="res">

</select>

<!-- 解决方法二 使用 as  别名-->
<select resultType='Student'>
	select name as stuName from student
</select>
```

### 模糊查询 like

#### 第一种方式

```java
String sql = "%模糊查%"
```

```xml
<select>
	select * from user name like #{name}
</select>
```

#### 第二种方式

```xml
<select>
	select * from user name like "%" #{name} "%"
</select>
```

## 动态SQL

#### if

判断条件

```xml
<!-- if -->
<select>
	select * from user 
    	where id > 0
    <if test="name != null and name != ''">
    	name = #{name}
    </if>
    <if test="age != null and age != ''">
    	and age = #{age}
    </if>
</select>
```

#### where

用来包含多个`<if>`的，当多个`if`有一个成立 ，`where`会 自动增加一个 `where` 关键字，并去掉if中多余的`and，or`等。

```xml
<!-- where -->
<select>
	select * from user 
    <where>
    	<if test="name != null and name != ''">
    		name = #{name}
    	</if>
    	<if test="age != null and age != ''">
    		and age = #{age}
    	</if>
    </where>
</select>
```

####  foreach

循环Java中的数组，`list`集合的。主要用在`SQL`的`in`语句中。

```xml
<!-- foreach -->
<select>
	select * from user where id in
    <foreach collection="list" item="id" open="(" close=")" separator=",">
    	#{id}
    </foreach>
</select>
<!-- 
 	collection：表示 接口中的方法参数的类型，如果是数组使用 array，如果是list集合，使用list
	item：自定义的，表示 数组和集合成员的变量
	open：循环开始时的字符
	close：循环结束时的字符
	separator：集合成员之间的分隔符
-->
```

#### SQL代码片段

```xml
<sql id="sqlId">
	select id,name,age from user
</sql>
<select>
	<include refid="sqlId"></include>
    where age = 18
</select>
```

### 配置文件

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/lgf
jdbc.user=root
jdbc.pwd=123456
```

```xml
<!--配置文件中添加properties标签引入配置文件-->
<properties  resource="jdbc.properties"/>
<dataSource type="POOLED">
	<property name="driver" value="${jdbc.driver}"/>
</dataSource>
```

