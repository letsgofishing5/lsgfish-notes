# Mybatis

### 日志



| 设置名  | 描述                                                  | 有效值                                                       | 默认值 |
| :------ | ----------------------------------------------------- | ------------------------------------------------------------ | ------ |
| logImpl | 指定 MyBatis 所用日志的具体实现，未指定时将自动查找。 | SLF4J \| LOG4J \| LOG4J2 \| JDK_LOGGING \| COMMONS_LOGGING \| STDOUT_LOGGING \| NO_LOGGING | 未设置 |

	+ SLF4J 
	+ LOG4J  【掌握】
	+ LOG4J2 
	+ JDK_LOGGING 
	+ COMMONS_LOGGING 
	+ STDOUT_LOGGING  【掌握】：mybatis标准日志输出
	+ NO_LOGGING 



### 缓存

#### 一级缓存

1. 也叫本地缓存，SqlSession，一级缓存是默认开启的，无法关闭，只在一次SqlSession会话中有效，也就是拿到连接到关闭连接的这个时间段，一级相当于就是一个map

#### 缓存失效

1. 查询不同的数据
2. 增删改操作 ，可能会改变原来的数据，所以必定会刷新缓存
3. 查询不同的mapper.xml
4. 手动清理缓存：sqlSession.clearCache();

> Mybatis清除缓存策略
>
> + 最少使用，最长时间不使用的对象，
> + 先进先出，按对象进入缓存的顺序来移除他们

#### 二级缓存

+ 二级缓存也叫全局缓存，一级缓存作用域太低，所以诞生了二级缓存

+ 基于namespace级别的缓存，一个命名空间对应一个二级缓存

+ 工作机制

  + 一个会话 查询一条数据，这个数据 就会被放在当前会话的一级缓存中

  + 如果当前会话关闭了，这个会话对应的一级缓存就没了，但是我们想要的是，会话关闭了，一级缓存中的数据被保持到二级 缓存中；

  + 新的会话查询信息，就可以从二级缓存中获取内容

  + 不同的mapper查出的数据会放在自己对应的缓存（map）中

    > 1. 开启全局缓存（settings中开启）
    >
    > ```xml
    >     <settings>
    >                 <setting name="cacheEnable" value="true"/>
    >     </settings>
    > ```
    > 
    >2. 开启全局缓存（mapper映射文件中）
    > 
    >```xml
    >     <mapper namespace="">
    >         <cache/>
    > 	</mapper>
    > ```
  

**小结** ：

	+ 只要开启了二级缓存，在同一个mapper下就有效
	+ 所有的数据都会先放在一级缓存中
	+ 只有当会话提交，或者关闭的时候，才会 提交到二级缓存中

# Spring

## IOC

#### 概念

> IOC：控制反转，把对象的创建，赋值，管理工作都交给代码之外的容器实现
>
> 使用IOC的目的：减少对代码的改动，也能实现不同的功能，实现解耦合
>
> java中创建对象的方式：
>
> + 构造方法，new Object（）；
> + 反射
> + 序列化
> + 克隆
> + IOC：容器创建对象
> + 动态代理

#### spring创建对象

```java
    String config = "applicationContent.xml";
    //ApplicationContext就是表示Spring容器，通过容器获取对象
    //ClassPathXmlApplicationContext:表示从类路径中加载Spring的配置文件
    ApplicationContext ac = new ClassPathXmlApplicationContext(config);
    //获取对象，getBean("配置文件中的bean的id")
    Object object = ac.getBean("容器创建的对象id");
    //调用方法
    object.doOther();
```

#### 属性赋值

##### 1、set注入

> spring **调用类的set方法**，在set方法可以实现属性的赋值
>
> ```xml
>     <bean id="student" class="com.domain.Student">
>         <property name="name" value="张三"/><!--基本类型注入-->
>         <property name="gender" value="男"/>
>         <property name="school" ref="school"/><!--引用类型注入-->
>     </bean>
> ```
>
> 

##### 2、构造注入

> 构造注入，spring**调用类的有参构造方法**，创建对象，在构造方法中完成赋值
>
> ```xml
>   <bean id="student" class="com.domain.Student">
>         <constructor-arg name="name" value="张三"/>
>         <constructor-arg name="gender" value="女"/>
>         <constructor-arg name="school" ref="school"/>
>     </bean>
> ```

#### 引用类型的自动注入

##### 1、byName方式自动注入

> byName：按名称注入，**java类**中引用类型的属性名和**spring容器**中（配置文件）**<bean>的id**一样，且数据类型一致的，这样的容器中的bean，spring能够赋值给引用类型
>
> ```xml
>     <bean id="student" class="com.domain.Student"autowire="byName">
>         <property name="name" value="张三"/>
>         <property name="gender" value="男"/>
>     </bean>
>     <bean id="school" class="com.domain.School"><!-- 该id要与java类中School属性的属性名一致  -->
>         <property name="name" value="横山小学"/>
>         <property name="address" value="龙泉村东程"/>
>     </bean>
> ```
>
> 

##### 2、byType方式自动注入

> byType：按类型注入，**java类**中引用类型的数据类型和**spring容器**中（配置文件）**<bean>的class属性**是**同源**关系，这样的bean能够赋值给引用类型
>
> > 同源关系：
> >
> > + java类中引用类型的数据类型和bean的class的值是一样的
> > + java类中引用类型的数据类型和bean的class的值是父子类关系
> > + java类中引用类型的数据类型和bean的class的值是接口和实现类的关系
> >
> > 注意：在byType中，在XML配置文件中声明bean只能有一个符合条件的，多余的是错误的
>
> ```xml
>     <bean id="student" class="com.domain.Student" autowire="byType">
>         <property name="name" value="张三"/>
>         <property name="gender" value="男"/>
>     </bean>
> ```

#### 使用多配置文件

```xml
    <import resource="classpath:文件位置"/>
<!--
 	classpath:表示类路径（class文件所在的目录），
	在spring的配置 文件中要指定其他文件的位置，
	需要使用到classpath，告诉spring去哪加载读取
-->
<!-- 包含关系的配置文件中，可以使用通配符：* -->
```

#### 注解

1. 在类上加注解：@Component（组件）、@Repository（dao对象）、@Service（service对象）、@Controller（controller控制器对象），这些事给项目的对象进行分层

   ```java
   @Component("student")
   public class Student {
       
   }
   ```

2. 在spring配置文件上加：组件扫描器，组件就是 java对象

   ```xml
    <context:component-scan base-package="com.cth"/><!--方式一--> 
    <context:component-scan base-package="com.cth;com.cth2"/><!--方式二，使用分隔符（；或，）分隔包名-->
    <context:component-scan base-package="com"/><!--方式三，指定父包-->
   ```

##### 简单类型赋值

> 注解：@Value()，
>
> + 放在简单类型属性上，无需**set()**方法
> + 放到**set**方法上

##### 引用类型赋值

> 注解：
>
> + @Autowired:spring 框架提供的注解，实现引用类型的赋值，
>
>   + @Autowired:**默认**使用的是**byType**自动注入
>
>   + 位置：定义在属性上，无需set方法，推荐使用
>
>     ```java
>         @Autowired
>         private School school;
>     ```
>
>   + 如果想改成**byName**自动注入，需要加上一个注解：@Qualifier：表示使用指定名称的bean完成赋值
>
>     ```java
>         @Autowired
>         @Qualifier(value = "school")
>         private School school;
>     ```
>
>   + 属性：required，boolean类型，默认是true，等于**true**时，引用类型赋值失败，程序报错，等于**false**时，引用类型赋值失败，程序正常执行，引用类型为**null**
>
> + @Resource：JDK自带注解，spring也提供了对这个注解的支持，实现引用类型的自动赋值
>
>   + @Resource:**默认**使用的是**byName**自动注入，先使用byName，如果失败，则使用byType
>
>   + 位置：定义在属性上，无需set方法，推荐使用
>
>     ```java
>         @Resource
>         private School school;
>     ```
>
>   + 只使用byName方式，需要增加一个属性：name，name是bean的id
>
>     ```java
>         @Resource(name = "shcool")
>         private School school;
>     ```
>



## AOP

#### 动态代理

> 实现方式：JDK动态代理，使用JDK中的Proxy，Method，InvocationHandler创建代理对象。JDK动态代理要求目标类必须实现接口
>
> cglib动态代理：第三方的工具库，创建代理对象，原理是继承。通过继承目标类，创建子类。子类就是 代理对象。要求目标类不能是final的，方法也不能是final

#####  动态代理的作用

1. 在目标类源代码不改变的情况下，增加功能
2. 减少代码重复
3. 专注业务逻辑代码
4. 解耦合，让你的业务功能和日志，事务非业务功能分离

#### AOP

> （Aspect Orient Programming）
>
> 面向切面编程，基于动态代理，可以使用JDK，cglib两种代理方式
>
> AOP就是动态代理的规范化
>
> Aspect：切面，给目标类增加 的功能，就是切面。像日志，事务等
>
> Orient：面向
>
> Programming：编程

##### 怎么理解切面编程

1. 需要在分析项目功能时，找出切面
2. 合理的安排切面的执行时间
3. 合理的安排切面的执行位置

##### 术语

1. Aspect：切面，增强功能
2. JointPoint：连接点，连接业务方法和切面的位置，就某类中的业务方法
3. Pointcut：切入点，指多个连接点方法的集合。多个方法
4. Advice：通知，通知表示切面功能执行的时间

##### Aspect

######  切面功能定义方法要求

> 1. 公共方法public
> 2. 方法名自定义
> 3. 如果有参数，参数不是自定义的

###### 注解

1. @Aspect：是aspectj框架中的注解。表示当前类是切面类

2. @Before：前置通知，在方法之前先执行切面的功能

   + 方法没有返回值，参数可有可无，不可自定义参数

3. @AfterReturning：后置通知，在目标方法执行之后执行的，能获取到目标方法的返回值

   + 属性：value：切入点表达式，returning：自定义变量，变量名必须和方法参数名一致

4. @Around：环绕通知，在目标方法前和后都能增强功能，控制目标方法的访问，修改返回值

   + 环绕通知等同于JDK动态代理，InvocationHandler接口

   + 参数：ProceedingJointPoint 等同于 Method

   + 返回值：就是 目标方法的返回结果，可以被修改

5. @AfterThrowing：异常通知，在目标方法执行之后执行通知

6. @After：最终通知，总是会被执行的代码

7. @Pointcut：定义和管理切入点的辅助注解

8. -表示切面位置的切入点表达式：execution（访问修饰符，返回值，包名.类名.方法名称（方法参数）异常）
   				切入点表达式中，“..”代表多级，“*”代表通配符，“+”表示一个或多个



```xml
	<bean id="别名" class="切面类"/>
	<!--自动代理扫描器，使用aspect，必须加上该标签-->
    <aop:aspectj-autoproxy/><!--默认使用JDK动态代理-->
    <aop:aspectj-autoproxy proxy-target-class="true"/><!-- 表示使用cglib动态代理-->
```

##### JointPoint



##### 切入点表达式

> execution( 访问修饰符  方法返回值  方法声明(参数)  异常类型）
>
> 使用符合：
>
> > *****：0至多个任意字符
> >
> > **..**：用在方法参数中，表示 任意多个参数，用在包名后，表示当前包及其子包
> >
> > **+**：用在类名后，表示当前类及其子类，用在接口后，表示当前接口及其实现类

## Spring事务管理

##### 事务的隔离级别

> 读未提交
> 读已提交（Oracle默认级别）
> 可重复读（mysql默认级别）
> 串行化读

##### 事务的传播行为

> PROPAGATION_REQUIRED：如果有事务，则使用当前事务，没有则创建新的事务
> PROPAGATION_REQUIRES_NEW：必须要新的事务，不管有没有都需要创建新的事务
> PROPAGATION_SUPPORTED：可以有事务，也可以没有事务

##### 事务的回滚时机

> **1)**当你的业务方法，执行成功，没有抛出异常，当方法执行完毕，spring在方法执行完毕后提交事务。事务管理：commit
> **2）**当你的业务方法抛出运行时异常，spring执行回滚，调用事务管理器的rollback，
> 	     运行时异常的定义：RuntimeException和他的子类都是运行时异常，例如：NullPointException，NumberFormatException
> **3）**当你的业务方法抛出非运行时异常，主要是受查异常时，提交事务
> 	**什么是受查异常？**
> 	答：在你写代码时，需要处理的异常。例如：IOException，SQLException

##### spring框架中提供的事务处理方案

######  适合中小项目使用的，注解方案

> 1. 给**业务方法**增加事务的功能 **@Transactional**注解增加事务
>
>    ```txt
>    @Transactional的所有可选属性
>    		1）propagation：用于设置事务传播属性，该属性类型枚举，默认是PROPAGATION_REQUIRED
>    		2）isolution：用于设置事务的隔离级别，枚举
>    		3）readOnly：用于设置该方法对数据库的操作是否只是只读，该属性为boolean，默认为false
>    		4）timeout：用于设置本操作与数据库连接的超时时限，单位为秒，类型int，默认-1，即没有时限
>    		5）rollbackfor：用于设置本操作，在遇到哪些异常时，会回滚
>    ```
>
> 2. 声明事务管理器对象，DataSourceTransactionManager，属性：dataSource
>
> 3. 开启事务注解驱动，annotation-driven transaction-manager=“事务管理器别名（id）”

###### 适合大型项目使用的，注解方案

> 1. 给**业务方法**增加事务的功能 **@Transactional**注解增加事务
>
> 2. 事务通知：advice，需要关联：DataSourceTransactionManager
>
>    ```txt
>     属性：attribute，属性里给 方法 配置事务属性：隔离级别，传播行为，超时时间等
>    			name：方法名称，1）要完整的方法名，不要带包名，2）方法可以使用“*”通配符，表示任意字符
>    ```
>
> 3. 指定哪些类中的方法需要事务，使用AOP的切入点表达式
>
>    ```txt
>     aop:config
>    			属性： pointcut
>    				id：切入点表达式的名称，唯一值
>    				expression：切入点表达式，指定哪些类中的方法需要使用事务，aspectj会创建代理对象
>    			expression=“execution（*  *..service..*.*(..)）”解读：任意包下的任意service包下的任意类下的任意方法，参数任意
>    			           advisor
>    				advice-ref：事务通知id
>    				pointcut-ref：切入点表达式 id
>    ```

##### spring使用web，获取容器对象方法——工具类

```java
    WebApplicationContext ctx = null;
    ServletContext sc=getServletContext();
    ctx = WebApplicationContextUtils.getRequiredWebApplicationContext(sc);
    System.out.println("输出容器信息:"+ctx);
```



# SpringMVC

## SpringMVC概述

1. springmvc做web开发的框架，实际是spring框架的一个模块

2. springmvc的使用就是基于spring的概念，springmvc会创建容器，WebApplicationContext。SpringMVC作为容器是创建和管理控制对象的，使用@Controller创建控制器对象

3. 三层框架的对应

   > + SpringMVC-----界面层，接收用户请求，显示处理结果
   > + spring------业务层，处理业务逻辑，spring创建Service，Dao，工具类等
   > + Mybatis------持久层，访问数据库，对数据增删改查

4. SpringMVC底层是一个Servlet，使用DispatcherServlet（中央调度器）

   > + 1-创建WebApplicationContext，读取配置文件，进而创建控制器对象
   > + 2-他是一个Servlet，要接收用户的请求，显示处理结果

   ## SpringMVC工作流程

   1. 。一个请求匹配前端控制器DispatcherServlet的请求映射路径(在web.xml中指定),WEB容器将该请求转交给DispatcherServlet处理
   2. . DispatcherServlet 接收到请求后,将根据请求信息交给处理器映射器(HandlerMapping). HandlerMapping根据用户的url请求查找匹配该url的Handler，并返回一个执行链
   3. . DispatcherServlet再请求处理器适配器(HandlerAdapter)调用相应的Handler进行处理并返回ModelAndView给DispatcherServlet
   4. · DispatcherServlet将ModelAndView请求ViewReslover(视图解析器）解析，返回具体View. DispatcherServlet对View进行渲染视图（即将模型数据填充至视图中)
   5. . DispatcherServlet 将页面响应给用户

## springMVC处理web请求

### 中央调度器

> 中央调度器（DispatcherServlet）动态资源注册，需要指定初始化的资源文件路径（init-param），
>
> 需要手动设置加载时机（load-on-started）

```xml
    <!--    中央调度器-->
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
<!--        在Tomcat服务器启动后，创建DispatcherServlet对象实例，
            为什么 要创建DispatcherServlet对象的实例呢？
            因为DispatcherServlet在他的创建过程中，会同时创建springmvc的容器对象，
            读取springmvc的配置文件，把配置文件中的对象创建好，当用户发起请求时可以直
            接使用对象了
            相当于：servlet执行 init()方法，DispatcherServlet在init(){
            //创建容器对象，读取配置文件
            WebApplicationContent wac = new ClassPathXmlApplicationContent(springmvc.xml);
			//把容器放入到ServletContent中
            getServletContent().setAttribute(key,value);
            }
-->
        <load-on-startup>1</load-on-startup>
        <!-- 指定配置文件的读取位置-->
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springMVC.xml</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
```



### 注解

##### 1、@Controller

> 创建控制器类的对象

#####  2、@RequestMappering

> 请求映射，作用是把一个请求地址和一个方法绑定在一起。
>
> 可以放在方法上，也可以放在类上
>
> ```java
>  @RequestMappering（value=“/doSome.do”）//接收请求地址
>     @RequestMappering（value={“/doSome.do”,"/other.do"}）//处理多个请求地址
>     @RequestMappering（value=“/doSome.do”，method=RequestMethod.GET）//表示只接受get请求
> ```

##### 3、RequestParam

> 解决请求中参数名与形参名不一致的问题
>
> 属性：
>
> + value：请求中的参数名
> + required：是一个boolean，默认是true，true代表了请求中必须包含此参数，不包含报错
>
> 位置：在处理器方法的形参定义的前面
>
> ```java
>  	@RequestMapping("/a.do")
>     @ResponseBody
>     public void test(@RequestParam(value = "tt",required = true) String string) throws IOException {
>     
>     }
> ```



### 视图解析器

```xml
	<bean class="InternalResourceViewResolver">
	  <property name="prefix" value="/WEB-INF/view"/>//前缀：视图文件路径
	  <property name="suffix" value=".jsp"/>//后缀，视图文件扩展名
	</bean>
```



### 处理器方法的返回值

#### 1、ModelAndView

> 表示数据和视图，对视图执行forward，走视图解析器

```java
		ModelAndView mv = new ModelAndView();
        mv.addObject("string", "Object");//用来携带参数
        mv.setViewName("页面路径");//用来书写通往的页面路径
        return mv;返回
```

#### 2、String

> 表示视图的（返回一个页面地址），可以逻辑名称，完整视图路径。对视图执行forward ，走视图解析器
>
> 如果有@ResponseBody  注解，返回值是数据，如果造成乱码，在@RequestMapping()中设置
>
> ```java
> @RequestMapping(value = "/a.do",produces = "text/plain;charset=utf-8")
> ```

#### 3、void

> 返回值本身不能表示数据和视图，可以响应ajax请求，使用传统response响应

```java
		ObjectMapper om = new ObjectMapper();
        String json = om.writeValueAsString("对象");
        PrintWriter out = response.getWriter();
        out.print(out);
```

#### 4、Object

> 表示数据，响应ajax请求
>
> 在方法上，加入注解@ResponseBody  ，该注解使得返回值**不走视图解析器**，返回一个**文本**，不是json，所以需要把请求中的**返回值类型：dataType："json"**去掉
>
> 加入Jackson依赖
>
> 在springmvc配置文件加入注解驱动<mvc:annotation-driven/>
>
> ```xml
>     <mvc:annotation-driven/>
> ```

### 静态资源处理

1. 设置中央调度器的为：url-pattern："/"：当你使用了"/"，他会替代Tomcat中的default，导致所有的静态资源都给DispatcherServlet处理，默认情况下DispatcherServlet没有处理静态资源的能力，没有控制器对象能处理静态资源的访问，所以导致静态资源访问失败都是404，动态代理可以正常访问

   ```xml
   <!--    中央调度器-->
       <servlet>
           <servlet-name>dispatcher</servlet-name>
           <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
           <init-param>
               <param-name>contextConfigLocation</param-name>
               <param-value>classpath:springMVC.xml</param-value>
           </init-param>
           <load-on-startup>1</load-on-startup>
       </servlet>
       <servlet-mapping>
           <servlet-name>dispatcher</servlet-name>
           <url-pattern>/</url-pattern>
       </servlet-mapping>
   ```

   

2. 第一种解决静态资源访问的方案：在springmvc中加 

   > + <mvc:annotation-driven /> 
   > + <mvc:default-servlet-handler />
   >
   > > 原理：给程序内存中增加一个处理器对象：DefaultServletHttpRquestHandler。让这个对象可以把接收到的请求转发给Tomcat的default这个servlet。但是这个标签与@RequestMapping这个注解有冲突，所以需要加入注解驱动：<mvc:annotation-driven /> 

3. 第二种处理静态资源

   > + 使用框架中的：<mvc：resource mapping="" location=""/>标签，标签加入后框架会自己创建ResourceHttpRequestHandler这个处理器对象。让这个对象处理静态资源的访问，不依赖于Tomcat服务器。该标签与**@RequestMapping**注解有冲突，需要加注解驱动：<mvc:annotation-driven /> 
   >
   > + 参数：
   >
   >   + mapping：访问静态资源的**URI**地址，使用通配符 ** ，代表多级任意
   >   + location：静态资源在你的项目中的位置 
   >
   >   ```xml
   >   <mvc:resources mapping="/img/**" location="/img/"/>
   >   ```
   >
   >   



### 核心技术

#### 转发和重定向

> + 特点：都不和视图解析器一同工作，使用时，视图解析器失效
>
> + 转发：forward
>
>   ```java
>           mv.setViewName("forward:/test.jsp");
>   ```
>
> + 重定向：redirect
>
>   > 重定向传递参数，jsp页面使用**${param.key}**接收参数，**${param.key}**等于**<%=request.getParameter("key")$>**
>   >
>   > 重定向不可访问**/WEB-INF/**下的资源
>
>   ```java
>    		mv.setViewName("redirect:/test.jsp");
>   ```

### 全局异常处理

##### 异常处理步骤：

> + 创建一个自定义异常类，再定义他的子类，
> + 创建一个普通的类，作用全局异常处理类，
>   + 在类的上面加入@ControllerAdvice
>   
>   + 在类中定义方法，方法的上面加入@ExceptionHandler，@ExceptionHandler(异常类的class）表示异常的类型，当发生此类异常时，由当前方法处理 ，也可以单独使用，不加（异常类的class），但**只能有一个**，表示其他未知异常类的class，由当前方法处理
>   
>     ```java
>     @ControllerAdvice
>     public class PuTong {
>         @ExceptionHandler(value = SonException.class)
>         public ModelAndView test01(){
>             ModelAndView mv = new ModelAndView();
>             mv.setViewName("error");
>             return mv;
>         }
>         @ExceptionHandler
>         public ModelAndView test02(Exception e){
>             ModelAndView mv = new ModelAndView();
>             mv.addObject("exception", e);
>             mv.setViewName("error");
>             return mv;
>         }
>     }
>     ```
>   
>     
> + 创建处理异常类的视图界面(JSP页面)
> + 创建springmvc配置文件
>   + 组件扫描器（组件扫描器是给类上面的注解使用的），扫描@Controller注解
>   + 组件扫描器，扫描@ControllerAdvice所在的包名
>   + 声明注解驱动（注解驱动是给方法上的注解使用的）

### 拦截器

#### 概述

> - 拦截器是springMVC框架自己的，只有使用了SpringMVC的工程才能使用
> - 拦截器只会拦截被访问的**控制器**，如果访问的是**jsp/html/css/img/js**是不会拦截的

#### 拦截器的实现步骤

> - 创建一个类，实现接口HandlerInterceptor接口
>
> - 在springmvc配置文件中，声明拦截器，让框架知道拦截器的存在
>
>   ```xml
>   <mvc:interceptors>
>       <mvc:interceptor>
>           //指定拦截的请求的uri地址，path：就是地址，可以使用通配符 **，
>           //**：表示任意的字符，文件或者多级目录和目录中的文件
>           <mvc:mapping path="/**"/>//表示拦截所有
>           <bean class="自定义的拦截器类"
>   	</mvc:interceptor>
>   </mvc:interceptors>
>   ```



#### HandlerInterceptor接口中的三个方法

+ preHandle：预处理，在控制器方法执行之前先执行的

+ postHandle：后处理方法

  > 参数；
  >
  > + Object handler：被拦截的处理器对象MyController
  > + ModelAndView mv：处理器方法的返回值
  >
  > 特点：
  >
  > + 在处理器 方法执行之后执行
  > + 能获取到处理器方法的返回值ModelAndView，可以修改ModelAndView中的数据和视图，可以影响到最后的执行结果
  > + 主要是对原来的执行结果做二次修正

+ afterCompletion：最后执行的方法

  > 参数：
  >
  > + Object handler：被拦截的处理器对象
  > + Exception ex：程序中发生的异常
  >
  > 特点：
  >
  > + 在请求处理完成后执行的，框架中规定是当你的视图处理完成后 ，对视图执行了forward。就认为请求处理完成
  > + 一般做资源回收工作的，程序请求过程中的创建的一些对象，在这里可以删除，把占用的内容回收

#### 过滤器和拦截器的区别

```java
	1）过滤器是servlet中的对象，拦截器是框架中的对象
	2）过滤器实现filter接口，拦截器实现HandlerInterceptor接口
	3）过滤器用来设置request，response的参数，属性的，侧重对数据过滤的
	4）过滤器是在拦截器之前先执行的。
	5）过滤器是Tomcat服务器创建的对象，拦截器是springmvc容器中创建的对象
	6）过滤器是一个执行时间点。拦截器有三个执行时间点
	7）过滤器可以处理jsp，js，html等等，拦截器是侧重拦截对Controller的对象。如果你的请求不能被DispatcherServlet接收，
		这个请求不会执行拦截器内容
	8）拦截器拦截普通类方法执行，过滤器过滤servlet请求响应
```





# SSM整合

#### 1、加入依赖pom.xml

```xml
   <dependencies>
<!--        junit依赖-->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13</version>
            <scope>test</scope>
        </dependency>
<!--        servlet依赖-->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
        </dependency>
<!--        jsp-->
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>javax.servlet.jsp-api</artifactId>
            <version>2.3.0</version>
        </dependency>
<!--        jstl-->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>
<!--        EL表达式-->
        <dependency>
            <groupId>javax.el</groupId>
            <artifactId>javax.el-api</artifactId>
            <version>3.0.0</version>
        </dependency>
<!--        mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.9</version>
        </dependency>
<!--        mybatis-->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.1</version>
        </dependency>
<!--        druid-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.12</version>
        </dependency>
<!--        mybatis-spring-->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis-spring</artifactId>
            <version>1.3.1</version>
        </dependency>
<!--        spring-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.2.5.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-tx</artifactId>
            <version>5.2.5.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>5.2.5.RELEASE</version>
        </dependency>
<!--        jackson-->
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
    </dependencies>
```





#### 2、web.xml配置文件

##### 1、DispatcherServlet

> 中央调度器（DispatcherServlet）动态资源注册，需要指定初始化的资源文件路径（init-param），
>
> 需要手动设置加载时机（load-on-started）

```xml
 <!--    中央调度器-->
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springMVC.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
```

##### 2、ContextLoaderListener

> 目的：创建spring的容器对象，才能创建service，dao等对象

```xml
<!--    spring监听器-->
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:applicationContent.xml</param-value>
    </context-param>
```

##### 3、CharacterEncodingFilter

> 注册字符集过滤器，解决post乱码问题，

```xml
<!--    字符集过滤器-->
    <filter>
        <filter-name>characterFilter</filter-name>
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
        <filter-name>characterFilter</filter-name>
        <url-pattern>*.do</url-pattern>
    </filter-mapping>
```

#### 3、写SSM配置文件

#####  1、Mybatis

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <settings>
        <!--        控制Mybatis输出日志-->
        <setting name="logImpl" value="STDOUT_LOGGING"/>
    </settings>

    <mappers>
        <package name="com.cth.dao"/>
    </mappers>
</configuration>
```

##### 2、Spring

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

<!--    导入配置文件-->
    <context:property-placeholder location="classpath:jdbc.properties"/>
<!--    配置数据源-->
    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">
        <property name="url" value="${jdbc.url}"/>
        <property name="username" value="${jdbc.user}"/>
        <property name="password" value="${jdbc.password}"/>
        <property name="maxActive" value="${jdbc.maxActive}"/>
    </bean>
<!--    SqlSessionFactory-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <property name="configLocation" value="classpath:mybatis_config.xml"/>
    </bean>
<!--    dao层-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
        <property name="basePackage" value="com.cth.dao"/>
    </bean>
</beans>
```

##### 3、SpringMVC

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
<!--    组件扫描器-->
    <context:component-scan base-package="com.cth.controller"/>
<!--    视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
<!--    注解驱动-->
    <mvc:annotation-driven/>
</beans>
```

