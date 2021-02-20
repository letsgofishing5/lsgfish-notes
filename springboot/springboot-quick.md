# 手动创建springboot工程

1. 先创建一个普通java的maven工程
2. 修改pom文件，将下面配置拷进去，进行修改

#### 创建pom

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.1</version>
        <relativePath/>
    </parent>
    <groupId></groupId>
    <artifactId>项目包名</artifactId>
    <version></version>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <!--springboot项目起步依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

#### 逆向工程文件

3. 文件名（自定义）：GeneratorMapper.xml

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE generatorConfiguration
           PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
           "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
   <generatorConfiguration>
           <!--指定连接数据库的JDBC 驱动包所在位置，指定到你本机的完整路径-->
       <classPathEntry location="D:\softwares\Java_Softwares\maven\repository\mysql\mysql-connector-java\5.1.9\mysql-connector-java-5.1.9.jar" />
           <!--配置 table 表信息内容体，targetRuntime指定采用MyBatis3的版本-->
        <context id="tables" targetRuntime="MyBatis3">
           <!--抑制生成注释，由于生成的注释都是英文的，可以不让它生成-->
           <commentGenerator>
               <property name="suppressDate" value="true"/>
               <property name="suppressAllComments" value="true"/>
           </commentGenerator>
           <!--配置数据库连接信息-->
           <jdbcConnection driverClass="com.mysql.jdbc.Driver"
                           connectionURL="jdbc:mysql://localhost:3306/test"
                           userId="root"
                           password="cthcth">
           </jdbcConnection>
           <!--生成model类，targetPackage 指定 model 类的包名，targetProject 指定生成的 model放在eclipse的哪个工程下面-->
           <javaModelGenerator targetPackage="com.cth.domain"
                               targetProject="src/main/java">
               <property name="enableSubPackages" value="false"/>
               <property name="trimStrings" value="false"/>
           </javaModelGenerator>
                <!-- 生成MyBatis 的Mapper.xml 文件，targetPackage 指定mapper .xml 文件的
            包名， targetProject 指定生成的mapper.xml 放在eclipse 的哪个工程下面-->
                <sqlMapGenerator targetPackage="com.cth.dao"
                                 targetProject="src/main/java">
                    <property name= "enableSubPackages" value= "false"/>
                </sqlMapGenerator>
                <!-- 生成MyBatis 的Mapper 接口类文件, targetPackage 指定Mapper接口类的包名，
                targetProject指定生成的Mapper 接口放在eclipse 的哪个工程下面-->
           <javaClientGenerator type= "XMLMAPPER"
                targetPackage="com.cth.dao" targetProject= "src/main/java">
                <property name="enableSubPackages" value= "false"/>
           </javaClientGenerator>
       <!--数据库表名及对应的Java 模型类名-->
           <table tableName="tb_exam" domainObjectName="Exam"
                enableCountByExample= "false"
                enableUpdateByExample="false"
                enableDeleteByExample="false"
                enableSelectByExample="false"
               selectByExampleQueryId="false"/>
       </context>
   </generatorConfiguration>
   ```

#### 添加需求依赖

```xml
<dependencies>
    <!--springboot项目起步依赖-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <!--内置Tomcat解析jsp-->
    <dependency>
        <groupId>org.apache.tomcat.embed</groupId>
        <artifactId>tomcat-embed-jasper</artifactId>
    </dependency>
	<!--servlet依赖-->
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
    </dependency>
    <!--mysql依赖-->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>
    <!--mybatis集成springboot起步依赖-->
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>2.1.4</version>
    </dependency>
    <!--apache-commons-->
    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-lang3</artifactId>
    </dependency>
    <!--dubbo集成springboot起步依赖-->
    <dependency>
        <groupId>com.alibaba.spring.boot</groupId>
        <artifactId>dubbo-spring-boot-starter</artifactId>
        <version>2.0.0</version>
    </dependency>
    <!--zookeeper:注册中心-->
    <dependency>
        <groupId>com.101tec</groupId>
        <artifactId>zkclient</artifactId>
        <version>0.10</version>
    </dependency>
    <!--redis依赖-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-redis</artifactId>
	</dependency>
    <!--接口工程-->
</dependencies>
```

#### 添加插件与资源管理

```xml
<build>
    <resources>
        <!--指定webapp下的jsp资源-->
        <resource>
            <directory>src/main/webapp</directory>
            <targetPath>META-INF/resources</targetPath>
            <includes>
                <include>**/*.*</include>
            </includes>
        </resource>
        <!--指定src/main/java目录下的配置文件资源-->
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.*</include>
            </includes>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.*</include>
            </includes>
        </resource>
    </resources>
    <plugins>
        <!--代码自动生成插件-->
        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.4.0</version>
            <configuration>
                <!--配置文件的位置-->
                <configurationFile>GeneratorMapper.xml</configurationFile>
                <verbose>true</verbose>
                <overwrite>true</overwrite>
            </configuration>
        </plugin>
        <!--springboot打包插件-->
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```

#### 核心配置文件

```yaml
#端口号
server:
  port: 8001
  servlet:
    context-path: /
#redis设置
spring:
  redis:
    host: localhost
    password: 123456
    port: 6379

#jsp配置视图解析器
#视图解析器
spring:
  mvc:
    view:
      prefix: /
      suffix: .jsp
#dubbo设置
  application:
    name: dubbo-customer #dubbo提供者声明
  dubbo:
    server: true  #当前工程是一个服务提供者
    registry: zookeeper://192.168.31.228:2181 #设置注册中心
      
  #mysql数据库
  datasource:
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://localhost:3306/test
    username: root
    password: cthcth
```

