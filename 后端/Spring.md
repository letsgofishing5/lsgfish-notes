## Ioc

### 依赖

```xml
<!-- https://mvnrepository.com/artifact/org.springframework/spring -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.2.17.RELEASE</version>
</dependency>
```

### 使用案例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!--声明一个对象-->
    <bean id="test" class="com.cth.service.Impl.StudentDaoImpl"/>
</beans>
```

```java
//获取配置文件中声明的对象
String config = "bean.xml";
ApplicationContext ac = new ClassPathXmlApplicationContext(config);
StudentDaoImpl test = (StudentDaoImpl) ac.getBean("test");
test.test();
```

### 对象的创建时机

在读取配置文件后，使用new ClassPathXmlApplicationContext(config);一次性加载了 所有的对象，并创建所有对象

###  设值注入

1. 属性值注入

   ```xml
   <!--声明一个对象-->
   <bean id="school" class="com.cth.service.domain.School">
       <property name="name" value="横山小学"/>
       <property name="address" value="东城南组"/>
   </bean>
   <bean id="test" class="com.cth.service.Impl.StudentDaoImpl">
       <property name="age" value="12"/>
       <property name="name" value="张三"/>
       <!--引用类型注入-->
       <property name="school" ref="school"/>
   </bean>
   ```

2. 构造注入

   ```xml
   <!--声明一个对象-->
   <bean id="school" class="com.cth.service.domain.School">
       <property name="name" value="横山小学"/>
       <property name="address" value="东城南组"/>
   </bean>
   <bean id="test" class="com.cth.service.Impl.StudentDaoImpl">
       <constructor-arg name="age" value="13"/>
       <constructor-arg name="name" value="小李子"/>
       <constructor-arg name="school" ref="school"/>
   </bean>
   ```

### 自动注入

1. `byName`（按名称注入），根据引用类型的属性值名称，在spring容器中寻找`bean id` 一样的名称的对象，自动注入值

   ```xml
   <bean id="school" class="com.cth.service.domain.School">
       <property name="name" value="横山小学"/>
       <property name="address" value="东城南组"/>
   </bean>
   <!--需要主动声明使用了byName自动注入-->
   <bean id="test" class="com.cth.service.Impl.StudentDaoImpl"  autowire="byName">
       <property name="age" value="13"/>
       <property name="name" value="小李子"/>
   </bean>
   ```

2. byType（按类型注入），根据引用类型的数据类型，在spring容器中寻找bean 的 class 同源关系的对象，自动注入

   1. 引用类型的数据类型和bean 中的 class是一样的
   2. 引用类型的数据类型和bean 中的 class 是父子关系
   3. 引用类型的数据类型和bean 中的 class 是接口和实现类的关系

   ```xml
   <bean id="school2" class="com.cth.service.domain.School2">
       <property name="name" value="横山小学"/>
       <property name="address" value="东城南组"/>
   </bean>
   <!--需要主动声明使用了byType自动注入-->
   <bean id="test" class="com.cth.service.Impl.StudentDaoImpl"  autowire="byType">
       <property name="age" value="13"/>
       <property name="name" value="小李子"/>
   </bean>
   ```

### 多配置文件

```xml
<!--使用import导入其他配置文件-->
<import resource="classpath:beanTest.xml"/>
<!--加载properties配置文件-->
<context:property-placeholder location="classpath:*.properties"/>

```

### 注解

1. 在类上添加注解：`@Component("test")`，这个`test`相当于`bean`中的 `id`，test也可以不写，默认是类名首字母小写
2. 在配置文件中添加组件扫描器：`<context:component-scan base-package="com.cth.service"/>`

#### 创建对象的注解

1. @Component
2. @Repository：持久层
3. @Service：业务层
4. @Controller：控制器

#### 简单类型属性赋值

注解 ：@Value("值")

1. 可以放在属性的get/set方法上

2. 也可以放在属性上

**注解@Value可以不需要set方法，也可以赋值**

```java
@Value("张三")
public String name;
@Value("张三")
public String setName(val){
    this.name = val;
}
```

#### 引用类型属性赋值

注解：@Autowired，该注解默认使用byType自动注入

```java
//使用byName形式赋值，需要两个注解
@Autowired
@Qulifier("mySchool")
```

注解：@Resource，来自JDK中的注解，spring提供了支持，默认byName，支持byType

**先使用byName，如果byName失败，则使用byType**

```java
//指定使用byName方式
@Resource(name="school")
public String school;
```

## AOP

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aspects</artifactId>
    <version>5.3.10</version>
</dependency>
```

底层分两种

1. jdk动态代理，要求目标类必须实现接口
2. cglib动态代理，原理是继承，通过继承目标类，创建子类

动态代理作用：

1. 在不改变源码的情况下，做功能增强
2. 减少代码重复
3. 解耦合，让业务功能和日志，事务非业务功能分离

#### 知识点

1. Aspect：切面，表示增强的功能，就一堆代码完成某一个功能。**非业务功能**
2. Join Point：连接点，连接业务方法和切面的位置，就某类中的**业务方法**
3. Pointcut：切入点，指多个连接点方法的集合。多个方法
4. 目标对象：给哪个类的方法增加功能，这个类就是目标对象
5. Advice：通知，通知表示切面功能执行的时间

#### 切面三要素

1. 这个切面要干嘛？
2. 切面要在哪里执行：使用Pointcut表示切面的位置 
3. 切面要在什么 时间执行：使用Advice表示切面的通知时间

#### Aspect 实现

一般使用`aspect J`，一个专门做`aop`的框架。`spring`对他进行了集成

### AspectJ

#### 注解

1. @Before
2. @After
3. @Around
4. @AfterReturning
5. @AfterThrowing

#### 切入点表达式

```java
execution(访问权限? 方法返回值 方法声明(参数) 异常类型?)
```

符号：

*：0至多个任意字符

..：用在方法参数中，表示 任意多个参数，用在包名后，表示当前包及其子包路径

##### 举例

```java
//指定切入点为：任意公共方法
execution(public * *(..))
//指定切入点为：任何一个以 set 开始的方法
execution(* set*(..))
```

#### 切面类

注解：@Aspect

作用：表示当前类是切面类

位置：在类上定义

#### 切面方法

要求

1. 必须是 public 修饰符
2. 方法没有返回值
3. 方法名称自定义
4. 方法参数可有可无，如果有，参数不是自定义的

#### 配置文件配置

```xml
<!--声明aspectj自动代理-->
<aop:aspectj-autoproxy/>

```

#### JoinPoint

**业务方法**，要加入切面功能的业务方法

**作用**：可以在通知方法中获取到方法执行时的信息，例如方法名称，方法的参数

如果切面功能中需要用到方法的信息，就加入`JoinPoint`，这个`Join Point`参数是框架赋予的，必须是第一个位置的参数

```java
@Around(value = "execution(* *..UserDaoImpl.doAround(String,Integer))")
public void afterReturning(ProceedingJoinPoint joinPoint) throws Throwable {
    System.out.println("这是环绕通知：Around");
    Object[] args = joinPoint.getArgs();
    for (Object arg : args) {
        System.out.println("参数："+arg);
        if (arg == "张三丰")
        {
            joinPoint.proceed();//调用执行方法
        }
    }
    System.out.println("环绕通知后");
}
```

##### 后置通知

@AfterReturning

特点：能够获取目标方法返回值，可以根据这个返回值做不同的处理功能。可以修改返回值（当返回值是引用类型的时候）

有参数，类型推荐Object

```java
@AfterReturning(value = "execution(* *..UserDaoImpl.say())",returning = "res")
public void afterReturning(JoinPoint joinPoint,Object res){
    System.out.println("这是后置通知，afterReturning执行了"+res);
}
```



#### 环绕通知

@Around

必须有一个返回值，推荐是 Object。方法有参数:ProceedingJoinPoint

特点：最强通知，在目标方法前后都可以增强功能，控制目标方法是否被调用执行（proceed），修改原来的目标方法的执行结果 ，影响最后的调用结果

```java
@Around(value = "execution(* *..UserDaoImpl.doMap())")
public void afterReturning(ProceedingJoinPoint joinPoint) throws Throwable {
    System.out.println("这是环绕通知：Around");
    Object[] args = joinPoint.getArgs();
    for (Object arg : args) {
        if (arg == "")
        {
            joinPoint.proceed();
        }
    }
    System.out.println("环绕通知后");
}
```

#### 异常通知

@AfterThrowing

没有返回值，方法有一个Exception

#### 最终通知

@After

特点：总是会执行，类似于try/cathc中的finally

```java
@After(value = "execution(* *..UserDaoImpl.doAround(String,Integer))")
public void after(){
    System.out.println("最终通知，最终执行了");
}
```

#### Pointcut

定义和管理切入点的，如果项目中有重复的切入点表达式，可以复用，可以使用@Pointcut

```java
@After(value = "execute()")
public void after(){
    System.out.println("最终通知，最终执行了");
}
//    使用Pointcut复用切入点表达式
@Pointcut(value = "execution(* *..UserDaoImpl.doAround(String,Integer))")
public void execute(){

}
```

#### 动态代理

CGLIB：当不使用接口时，使用的时CGLIB动态代理；如果使用了接口还是希望使用CGLIB动态代理，可以在配置文件中进行修改

```xml
<aop:aspectj-autoproxy proxy-target-class="true"/>
```

## 集成Mybatis

```xml
<dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.11</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.2.17.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-tx</artifactId>
        <version>5.2.17.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-jdbc</artifactId>
        <version>5.2.5.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>3.5.1</version>
    </dependency>
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis-spring</artifactId>
        <version>1.3.1</version>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>5.1.9</version>
    </dependency>
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid</artifactId>
        <version>1.2.8</version>
    </dependency>
</dependencies>
```

#### Ioc集成配置

1. 数据源
2. SqlSessionFactory
3. Dao对象
4. 自定义声明的service

```xml
<!--application.xml-->
<!--    声明数据源dataSource，作用是连接连接数据库-->
<bean id="myDataSource" class="com.alibaba.druid.pool.DruidDataSource" 
      init-method="init" destroy-method="close">
    <property name="url" value="jdbc:mysql://localhost:3306/lgf"/>
    <property name="username" value="root"/>
    <property name="password" value="123456"/>
</bean>
<!--    声明的是mybatis中提供的sqlSessionFactoryBean类，这个类内部创建SqlSessionFactory-->
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <!--        首先连接数据库-->
    <property name="dataSource" ref="myDataSource"/>
    <!--        然后读取mybatis主配置文件-->
    <property name="configLocation" value="classpath:mybatis-config.xml"/>
</bean>
<!--    创建dao对象，使用SqlSession的getMapper(User.class)-->
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
    <!--指定SqlSessionFactory对象的id-->
    <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
    <property name="basePackage" value="com.cth.dao"/>
</bean>
```

### 事务

1. PROPAGATION_REQUIRED：指定的方法必须在事务内执行。当前有事务就加入，没有就创建新事务
2. PROPAGATION_SUPPORTS：指定的方法支持当前事务，但若当前没有事务，也可以以非事务方式执行
3. PROPAGATION_REQUIRES_NEW：总是新建一个事务，若当前存在事务则挂起当前事务，直到新事务执行结束

事务提交与回滚的时机

1. 业务方法执行成功没有异常抛出，方法执行完毕后spring自动commit
2. 业务方法抛出运行时异常或者Error，spring执行回滚，调用rollback
3. 业务方法抛出非运行时异常，则提交事务

#### 配置事务

在配置文件中声明事务管理器对象

```xml
<!--    声明事务管理器对象-->
<bean id="dataSourceTranscationManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="myDataSource"/>
</bean>
<tx:annotation-driven transaction-manager="dataSourceTranscationManager"/>
```

注解：@Transcational

