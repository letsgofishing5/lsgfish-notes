# maven

## 配置maven

配置maven前首先要配置JDK

#### 安装JDK

下载JDK1.8

点击执行，可以选择新建两个新的文件夹，一个叫：jdk，一个叫：jre

点击执行后，第一个安装位置可以选择新建的第一个jdk文件夹中，第二个安装位置放在jre文件夹中

安装完成

#### 配置JDK环境变量

1. 找到之前新建的jdk文件夹，进入，找到jre目录，进入，把路径拷贝下来，在系统环境变量中新建系统变量：JAVA_HOME:拷贝的路径
2. 找到Path，添加步骤1 路径：%JAVA_HOME%\bin
3. ok

#### 安装maven

下载maven，解压

新建环境变量MAVEN_HOME，赋值D:\Program Files\Apache\maven（根据自己安装解压路径自定义）

编辑环境变量Path，追加%MAVEN_HOME%\bin;

## idea中配置maven

##### 配置路径

> file——settings——build,excution,deployment——build  tools——maven
>
> ###### 配置入口1，配置的值
>
> - maven home directory :maven 的安装目录
> - user settings file：maven的安装目录conf/settings.xml的位置
> - Local Repository：本机仓库的目录位置
>
> ###### 左边选择目录——Runner
>
> - VMOptions: -DarchetypeCatalog=internal
>
>   -DarchetypeCatalog=internal：maven项目创建时，会联网下载模板文件，比较大，使用-DarchetypeCatalog=internal，不用下载，创建模板速度快
>
> ###### 配置入口2
>
> New Project settings——Settings for New Projects——build,excution,deployment——build  tools——maven
>
> **配置的方法与入口1一样，两个入口都需要配置**

## maven父子工程

> pom：**是项目对象模型**，该文件可以被子文件继承的 ，**不管是依赖，还是插件**
>
> maven多模块管理，其实就是让他的子模块的pom文件来继承父工程的pom文件
>
> **maven父工程必须遵循以下两点**
>
> 1. **packaging**标签的文本内容必须设置为**pom**
> 2. 删除src目录
>
> **父子工程关系：**
>
> 1. 父工程添加的依赖，所有子模块会无条件的云继承
>
> 2. 父工程加强管理子模块的所有依赖
>
>    父类pom文件
>
>    ```xml
>        <dependencyManagement>
>            <dependencies>
>                <dependency>
>                    <groupId>mysql</groupId>
>                    <artifactId>mysql-connector-java</artifactId>
>                    <version>5.1.9</version>
>                </dependency>
>            </dependencies>
>        </dependencyManagement>
>    ```
>
>    子类pom文件
>
>    ```XML
>        <dependencies>
>    <!--       
>     声明式依赖
>     子模块依赖的版本号继承父工程的版本号
>     如果子模块指定依赖的版本号，则不会继承父工程依赖的版本号
>    -->
>            <dependency>
>                <groupId>mysql</groupId>
>                <artifactId>mysql-connector-java</artifactId>
>            </dependency>
>        </dependencies>
>    ```
>
>    **父子pom文件变形**——父管理依赖的版本号
>
>    ```xml
>    <!-- 父管理依赖的版本号  -->    
>    <properties>
>    <!-- 自定义标签名 
>    	通常管理依赖版本号的标签名由 = 项目名 + 字段 version
>    -->    
>        <mysql-connector-java-version>5.1.9</mysql-connector-java-version>
>    </properties>
>
>    <dependencyManagement>
>        <dependencies>
>            <dependency>
>                <groupId>mysql</groupId>
>                <artifactId>mysql-connector-java</artifactId>
>                <version>5.1.9</version>
>            </dependency>
>        </dependencies>
>    </dependencyManagement>
>    ```
>    ```xml
>
>    <!--子pom文件-->
>        <dependencies>
>    <!--        声明式依赖-->
>            <dependency>
>                <groupId>mysql</groupId>
>                <artifactId>mysql-connector-java</artifactId>
>                <version>${mysql-connector-java-version}</version>
>            </dependency>
>        </dependencies>
>    ```
> ```
> 
> 
> ```

### 创建父子工程步骤

1. 先创建一个空的工程，然后再里面创建一个普通java的maven项目，（或者直接创建一个普通java的maven项目）
2. 只保留项目中的 **pom**文件，其他统统删除
3. 在该工程下创建新的maven工程