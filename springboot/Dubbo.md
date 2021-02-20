# Dubbo

## dubbo直连

> 网址：[dubbo网址](http://dubbo.apache.org/)
>
> **dubbo与Spring无缝对接**
>
> 1、**pom.xml**
>
> ```xml
> <!-- https://mvnrepository.com/artifact/org.apache.dubbo/dubbo -->
>  <dependency>
>       <groupId>org.springframework</groupId>
>       <artifactId>spring-webmvc</artifactId>
>       <version>5.2.5.RELEASE</version>
>     </dependency>
>     
>    <!--dubbo依赖-->
>     <dependency>
>       <groupId>com.alibaba</groupId>
>       <artifactId>dubbo</artifactId>
>    <version>2.7.3</version>
>     </dependency>
>    
>    ```
>    
>    2、**dubbo配置文件**
> 
> ```xml
> <!--访问服务协议的名称及端口号,ubbo官方推荐使用的是dubbo协议,端口号默认为20880-->
>  <dubbo:application name="dubbo-provider"/>
> <!--
>      name:指定协议的名称
>         port:指定协议的端口号(默认为20880)
>     -->
>     <dubbo:protocol name="dubbo" port="20880"/>
>     <!--
>         暴露服务接口->dubbo : service
>         interface:暴露服务接口的全限定类名
>         ref:接口引用的实现类在spring容器中的标识registry:如果不使用注册中心,则值为:N/A
>     -->
>     <dubbo:service interface="com.cth.service.StudentService" ref="实现类id" register="N/A"/>
>    <!--    将接口实现类加载到spring容器中-->
>     <bean id="studentService" class="com.cth.service.StudentServiceImpl"/>
>    ```
>    
> 3、**配置监听器**
>    
> ```xml
><listener>
>     <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
></listener>
>  <context-param>
>         <param-name>contextConfigLocation</param-name>
>         <param-value>classpath:dubbo.xml</param-value>
>     </context-param>
>    ```
>    
>    4、**给他配置Tomcat**，然后将其打成**jar包**
>    
> 5、**再创建一个dubbo的消费者**，一个maven Web工程
>
> 1. pom文件
>
>    ```xml
>     <!--    spring的依赖-->
>        <dependency>
>         <groupId>org.springframework</groupId>
>          <artifactId>spring-webmvc</artifactId>
>          <version>5.3.2</version>
>        </dependency>
>    <!--    dubbo依赖-->
>        <dependency>
>          <groupId>org.apache.dubbo</groupId>
>          <artifactId>dubbo</artifactId>
>          <version>2.7.3</version>
>        </dependency>
>    <!--    服务提供者的依赖，之前自己打的jar包-->
>        <dependency>
>          <groupId>com.cth</groupId>
>          <artifactId>dubbo</artifactId>
>          <version>1.0-SNAPSHOT</version>
>        </dependency>
>    ```
>    
> 2. dubbo的配置文件
> 
>    ```xml
>    <!--声明服务消费者的名称，保证唯一性-->
>        <dubbo:application name="dubbo2"/>
>    <!--    引用远程服务接口
>            id:远程服务接口名称
>            interface：调用远程接口的全限定类名
>           url:访问服务器接口的地址
>            registry：不使用注册中心，值：N/A
>     -->
>        <dubbo:reference id="studentService"
>                         interface="com.cth.service.StudentService"
>                         url="dubbo://localhost:20880"
>                         registry="N/A"/>
>    ```
> 
> 3. 声明控制层，并搭建springMVC配置文件
> 
>    ```xml
>    <!--组件扫描器-->
>        <context:component-scan base-package="com.cth.web"/>
>    <!--    注解驱动-->
>        <mvc:annotation-driven/>
>    <!--    视图解析器-->
>       <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
>            <property name="prefix" value="/"/>
>           <property name="suffix" value=".jsp"/>
>        </bean>
>    ```
> 
> 4. 先启动提供者服务，再启动消费者服务
> 
> 5. 调用消费者的控制层方法

###### 注意：

1. 实体类需要序列化

###### dubbo提供者核心配置四步走

1. 服务提供者名称，保证唯一性
2. 设置dubbo的协议和端口
3. 暴露服务接口
4. 加载业务接口实现类

###### dubbo消费者核心配置两步走

1. 消费者名称，保证唯一性
2. 引用远程服务接口

## 使用注册中心

1. 先创建三个工程：接口、提供者、消费者

2. 给**提供者与消费者**添加ZooKeeper依赖

   ```xml
   <!--ZooKeeper依赖-->
   <dependency>
       <groupId>org.apache.curator</groupId>
       <artifactId>curator-framework</artifactId>
       <version>4.1.0</version>
   </dependency>
   ```

   

3. 提供者的dubbo配置文件需要修改

   ```xml
   <dubbo:application name="dubbo-provider"/>
   
   <dubbo:protocol name="dubbo" port="20880"/>
   <!--指定注册中心地址和端口-->
   <dubbo:registry address="zookeeper://localhost:2181"/>
   
   <dubbo:service interface="" ref="A"/>
   
   <bean id="A" class="接口实现类"/>
   ```

4. 消费者的dubbo配置文件需要修改

   ```xml
   <dubbo:application name="dubbo-provider"/>
   <!--指定注册中心地址和端口-->
   <dubbo:registry address="zookeeper://localhost:2181"/>
   <!--引用远程服务接口-->    
   <dubbo:reference id="" interface=""/>    
   ```

5. 三个工程准备结束，先启动ZooKeeper服务器，然后启动提供者服务，在启动消费者服务

# ZooKeeper

>Zookeeper从设计模式角度来理解∶是一个基于观察者模式设计的分布式服务管理框架，它负责存储和管理大家都关心的数据，然后接受观察者的注册，一旦这些数据的状态发生变化，Zookeeper就将负责通知已经在Zookeeper上注册的那些观察者做出相应的反应。
>
>**文件系统+ 通知机制**

##### ZooKeeper特点

1. Zookeeper:一个领导者(Leader)，多个跟随者(Follower）组成的集群。
2. 集群中只要有半数以上节点存活，Zookeeper集群就能正常服务。
3. 全局数据一致:每个Server保存一份相同的数据副本，Client无论连接到哪个Server，数据都是一致的。
4. 更新请求顺序进行，来自同一个Client的更新请求按其发送顺序依次执行。
5. 数据更新原子性，一次数据更新要么成功，要么失败。
6. 实时性，在一定时间范围内，Client能读到最新的数据

##### ZooKeeper安装

1. 下载ZooKeeper
2. 解压，在ZooKeeper中创建目录：**data**，该目录用来存放一些临时数据
3. 复制**conf**目录下的**zoo_sample.cfg**文件，改名为：**zoo.cfg**
4. 编辑**zoo.cfg**文件，设置**dataDir=新建的data目录路径**，
5. 找到**clientPort**，在下方设置**admin.serverPort=8888**，端口名尽量使用不常用的端口，防止冲突

##### Linux下启动服务端和客户端

1. 启动服务：./zkServer.sh start
2. 关闭服务：./zkServer.sh stop
3. 查看状态：./zkServer.sh status
4. 启动客户端：./zkCli.sh
5. 退出客户端：quit

### ZooKeeper内部原理

##### 选举机制（面试重点）

1. 半数机制:集群中半数以上机器存活，集群可用。所以Zookeeper 适合安装**奇数台**
   服务器。
2. Zookeeper虽然在配置文件中并没有指定Master和 Slave。但是Zookeeper 工作时，是有一个节点为Leader，其他则为Follower，Leader是通过内部的选举机制临时产生的。
3. 以一个简单的例子来说明整个选举的过程。
   假设有五台服务器组成的Zookeeper集群,它们的id从1-5,同时它们都是最新启动的，也就是没有历史数据，在存放数据量这一点上，都是一样的。
4. 服务器1启动，此时只有它一台服务器启动了，它发出去的报文没有任何响应，所以它的选举状态一直是LOOKING状态。
5. 服务器2启动，它与最开始启动的服务器1进行通信，互相交换自己的选举结果，由于两者都没有历史数据，所以id值较大的服务器⒉胜出，但是由于没有达到超过半数以上，所以它的选举状态也一直是LOOKING状态。
6. 服务器3启动，它与最开始启动的两个服务器进行通信，由于三者都没有历史数据，所以id值较大的服务器3胜出，这是选举数目超过半数，服务器3成为**leader**，服务器4、5是**follower**

##### 节点类型

1. 持久（Persistent）：客户端和服务端断开连接点后，创建的节点不删除。

   **说明:**创建znode时设置顺序标识，znode名称后会附加一个值，顺序号是一个单调递增的计数器，由父节点维护
   **注意:**在分布式系统中，顺序号可以被用于为所有的事件进行全局排序，这样客户端可以通过顺序号推断事件的顺序

2. 短暂（Ephemeral）：客户端和服务端断开连接点后，创建的节点自己删除

   **临时目录节点**
   客户端与Zookeeper断开连接后，该节点被删除

   **临时顺序编号目录节点**
   客户端与Zookeeper断开连接后，该节点被删除，只是

### ZooKeeper实战

##### 分布式安装



