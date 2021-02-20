## 事后待解决的问题

##### 知识点疑问

1. JSP的内置对象与四大作用域——阅

2. JavaScript函数执行问题——解

3. 代码块的执行顺序——阅：变量>代码块>构造方法

   - 父类静态变量--》父类静态代码块--》--》子类静态变量--》子类静态代码块--》父类非静态变量--》父类非静态代码块--》

     ​         父类构造方法--》子类非静态变量--》子类非静态代码块--》子类构造方法

   - https://blog.csdn.net/weixin_42218884/article/details/82084725

4. 什么是运行时异常——阅

   - https://blog.csdn.net/qq_22860341/article/details/73610537
   - 非运行时异常：编译不通过的异常
   - 运行时异常：程序运行时发生的异常，打印在控制台上
   
5. 短信验证——解

6. 随机函数——解

   ```java
   long round = Math.round(Math.random() * 9);
   ```

   

##### 未解决问题TODO

1. th:inline，页面解析失败——解

2. 控制层代码迁移——解

3. Thymeleaf 获取当前页面地址和参数——解

   ```java
   <input type="hidden" id="currentURL" th:value="${#httpServletRequest.requestURL +'?'+ #httpServletRequest.queryString }"/>
   ```

4. 登陆页面方法失效

##  可能遇到的问题

##### 逆向工程失败

1. 首先是接口工程没有安装到本地仓库中
2. 然后父工程也需要安装到本地仓库中
3. 父工程的packing标签没有设置为：pom

##### 代码写完后不生效 不报错 

1. 清空浏览器的缓存

##### 抽取公共页面失效

1. 

### 使用dubbo

##### 提供者pom

```xml
<dependencies>
		<!--springboot项目起步依赖-->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
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
<!--		Apache commons工具类，（封装了大量的常用工具类-->
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
<!--		apache-commons-->
		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
		</dependency>
		<!--		接口工程-->
		<dependency>
			<groupId>com.cth</groupId>
			<artifactId>03-p2p-exterface</artifactId>
			<version>1.0-SNAPSHOT</version>
		</dependency>
	</dependencies>
```

##### 消费者pom

```xml
<dependencies>
        <!--springboot项目起步依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
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
<!--        接口工程-->
        <dependency>
            <groupId>com.cth</groupId>
            <artifactId>03-p2p-exterface</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>
    </dependencies>
```

## 关于知识点的进步

##### JSON——fastjson

```java
//第一步，将json格式的字符串解析成JSON对象
JSONObject jsonObject = JSON.parseObject(jsonString);
//通过各种get方法来获取json对象的值
jsonObject.getXXX();
```



##### 登陆功能

1. 获取当前请求页面，从哪来登陆后回哪儿去

##### 解决请求上下文根

1. 通过basepath

```html
<script type="text/javascript" th:inline="none">
	//http://localhost:8080/p2p
    var basepath = [[${#httpServletRequest.getScheme()+"://"+#httpServletRequest.getServerName()+":"+#httpServletRequest.getServerPort()+"/"+#httpServletRequest.getContextPath()}]];
    $(function(){
       $.ajax({
              url:basepath+"相对路径",      
       })             
    })               
</script>
```

##### 提高竞争力

1. 去查看竞品，看看别人怎么写的

##### 脱敏操作 

```html
th:text="|${#strings.substring(user.phone,0,3)}****${#strings.substring(user.phone,7)}|"
```

##### 日期格式化

```html
th:text="${#dates.format(user.bidInfo.bidTime,'yyyy-MM-dd hh:mm:ss')}"
```

##### 格式化金钱

```html

```

##### 自定义常量

1. 约定俗称使用：**Constants**类

##### 多线程

1. 创建线程池

```java
//创建线程池
ExecutorService executorService = Executors.newFixedThreadPool(100);
for (int i = 0; i < 1000; i++) {
    //创建线程
    executorService.submit(new Runnable() {
        @Override
        public void run() {
            Double historyAverageRate = loanInfoService.queryHistoryAverageRate();
            model.addAttribute("rate", historyAverageRate);
        }
    });
}
//关闭线程
executorService.shutdownNow();
```

2. synchronize可以放在方法上，也可以放在代码块上，但是不能放在类上

##### IDEA连接数据库

在左侧选择**driver**里选择数据库驱动，自定义驱动位置

##### RedisTemplates

1. 设置**key**值可读性

   ```java
   redisTemplate.setKeySerializer(new StringRedisSerializer());
   ```

##### 序列化实体类

1. 所有需要被传输的对象都需要实现**Serializable**接口

##### 文本注释

1. 多行注释：Ctrl+shift+/

2. 在方法上：Ctrl+Q，可以查询方法使用，鼠标长时间停留达相同效果

3. 类上的注释模板：file——settings——editor——File and Code Templates，然后选择右边的：Include下的 File Header

   ```java
   /**
   *ClassName:${NAME}
   *Package:${PACKAGE_NAME}
   *Description:
   *@data:${DATA}这是年月日 ${TIME}这是时分
   *@author:
   */
   ```

##### 解析xml方式

1. 



##### 快捷键使用

1. 大小写互换：Ctrl+shift+U

##### 标注提示未完成的业务

```java
//TODO
//哪些未完成的业务，在上方添加TODO
```

### 支付宝支付

登陆地址：open.alipay.com

选择：自研开发者选项

### 短信验证

##### 短信验证的组成

1. 短信签名：必须由【xxx】，其中xxx 是公司简称
2. 短信正文：您的短信验证码是：123456，一分钟内有效

##### 短信验证解析

1. code：代表通信的结果，通信标识

#### 解析xml

1. SAX解析
2. DOM解析

##### 区别

1. sax解析是边读边解析
2. DOM解析是一次性将解析的内容加载到内存，然后再开始解析
3. 根本区别：DOM解析可以对文档中的节点进行增删改，而sax只能读取信息

##### 使用DOM解析

1. xPath语法：https://www.w3school.com.cn/xpath/xpath_syntax.asp

2. 导入依赖

   ```xml
   <dependency>
       <groupId>org.dom4j</groupId>
       <artifactId>dom4j</artifactId>
       <version>2.1.0</version>
   </dependency>
   <!--注意高版本dom4j需要导入依赖：jaxen:jaxen-->
   <dependency>
       <groupId>jaxen</groupId>
       <artifactId>jaxen</artifactId>
       <version>1.1.6</version>
   </dependency>
   ```

3. 代码

   ```java
   String xPath="";
   Document document = DocumentHelper.parseText(xPath);
   Node node = document.selectSingleNode("bookstore/book[2]/title[@*]");
   String text = node.getText();
   ```

#### 短信验证条件

1. 依赖

   ```xml
   <dependency>
       <groupId>org.apache.httpcomponents</groupId>
       <artifactId>httpclient</artifactId>
   </dependency>
   ```

2. 工具类

   ```java
   package com.bjpowernode.httpclient;
   
   import java.io.IOException;
   import java.io.UnsupportedEncodingException;
   import java.util.ArrayList;
   import java.util.HashMap;
   import java.util.Iterator;
   import java.util.List;
   import java.util.Map;
   import java.util.Map.Entry;
   import java.util.Set;
   
   import org.apache.http.HttpEntity;
   import org.apache.http.NameValuePair;
   import org.apache.http.client.ClientProtocolException;
   import org.apache.http.client.HttpClient;
   import org.apache.http.client.config.RequestConfig;
   import org.apache.http.client.entity.UrlEncodedFormEntity;
   import org.apache.http.client.methods.CloseableHttpResponse;
   import org.apache.http.client.methods.HttpGet;
   import org.apache.http.client.methods.HttpPost;
   import org.apache.http.impl.client.CloseableHttpClient;
   import org.apache.http.impl.client.HttpClients;
   import org.apache.http.message.BasicNameValuePair;
   import org.apache.http.util.EntityUtils;
   
   public class HttpClientTest03 {
   
   	/**
   	 * Get 请求方法
   	 *
   	 * @param url
   	 * @return
   	 */
   	public static String doGet(String url) {
   		CloseableHttpClient httpClient = null;
   		CloseableHttpResponse response = null;
   		String result = "";
   
   		try {
   			//通过址默认配置创建一个httpClient实例
   			httpClient = HttpClients.createDefault();
   			//创建httpGet远程连接实例
   			HttpGet httpGet = new HttpGet(url);
   			//设置配置请求参数
   			RequestConfig requestConfig = RequestConfig.custom()
   					.setConnectTimeout(35000)//连接主机服务超时时间
   					.setConnectionRequestTimeout(35000)//请求超时时间
   					.setSocketTimeout(60000)//数据读取超时时间
   					.build();
   			//为httpGet实例设置配置
   			httpGet.setConfig(requestConfig);
   			//执行get请求得到返回对象
   			response = httpClient.execute(httpGet);
   			//通过返回对象获取返回数据
   			HttpEntity entity = response.getEntity();
   			//通过EntityUtils中的toString方法将结果转换为字符串
   			result = EntityUtils.toString(entity);
   
   		} catch (Exception e) {
   			e.printStackTrace();
   		} finally {
   			//关闭资源
   			if (null != response) {
   				try {
   					response.close();
   				} catch (IOException e) {
   					e.printStackTrace();
   				}
   			}
   
   			if (null != httpClient) {
   				try {
   					httpClient.close();
   				} catch (IOException e) {
   					e.printStackTrace();
   				}
   			}
   		}
   
   		return result;
   	}
   
   	public static String doPost(String url, Map<String, Object> paramMap) {
   		CloseableHttpClient httpClient = null;
   		CloseableHttpResponse response = null;
   		String result = "";
   
   		try {
   			//创建httpClient实例
   			httpClient = HttpClients.createDefault();
   			//创建httpPost远程连接实例
   			HttpPost httpPost = new HttpPost(url);
   			//配置请求参数实例
   			RequestConfig requestConfig = RequestConfig.custom()
   					.setConnectTimeout(35000)//设置连接主机服务超时时间
   					.setConnectionRequestTimeout(35000)//设置连接请求超时时间
   					.setSocketTimeout(60000)//设置读取数据连接超时时间
   					.build();
   			//为httpPost实例设置配置
   			httpPost.setConfig(requestConfig);
   
   			//封装post请求参数
   			if (null != paramMap && paramMap.size() > 0) {
   				List<NameValuePair> nvps = new ArrayList<NameValuePair>();
   				//通过map集成entrySet方法获取entity
   				Set<Entry<String, Object>> entrySet = paramMap.entrySet();
   				//循环遍历，获取迭代器
   				Iterator<Entry<String, Object>> iterator = entrySet.iterator();
   				while (iterator.hasNext()) {
   					Entry<String, Object> mapEntry = iterator.next();
   					nvps.add(new BasicNameValuePair(mapEntry.getKey(), mapEntry.getValue().toString()));
   				}
   
   				//为httpPost设置封装好的请求参数
   				httpPost.setEntity(new UrlEncodedFormEntity(nvps, "UTF-8"));
   			}
   
   			//执行post请求得到返回对象
   			response = httpClient.execute(httpPost);
   			//通过返回对象获取数据
   			HttpEntity entity = response.getEntity();
   			//将返回的数据转换为字符串
   			result = EntityUtils.toString(entity);
   		} catch (Exception e) {
   			e.printStackTrace();
   		} finally {
   			//关闭资源
   			if (null != response) {
   				try {
   					response.close();
   				} catch (IOException e) {
   					e.printStackTrace();
   				}
   			}
   
   			if (null != httpClient) {
   				try {
   					httpClient.close();
   				} catch (IOException e) {
   					e.printStackTrace();
   				}
   			}
   		}
   		return result;
   	}
   }
   ```

   

### 注解

1. **@RequestParam**（value="age",required=true,defaultValue="0"）Integer age：**required表示是否必须要有值**

### SQL

1. 取小数点后两位

```sql
--取平均值小数点后两位
SELECT CAST(AVG(rate) AS DECIMAL(10,2)) from b_loan_info
--decimal(5,2)中的“2”表示小数部分的位数，如果插入的值未指定小数部分或者小数部分不足两位则会自动补到2位小数，若插入的值小数部分超过了2为则会发生截断，截取前2位小数。
--“5”指的是整数部分加小数部分的总长度，也即插入的数字整数部分不能超过“5-2”位，否则不能成功插入，会报超出范围的错误。
```

2. 查询主键值

```sql
--查询MySQL自增ID值，并赋值给传入的User对象的id属性，keyProperty 描述表中的主键名称
<selectKey resultType="java.lang.Integer" keyProperty="id" order="AFTER">
	select @@IDENTITY as id
</selectKey>
```



### jQuery

##### 密码加密

1. 引入jQuery.md5.js
2. 使用：$.md5(val()) 即可

##### 倒计时

1. 引入leftTime.min.js
2. 搜索轻量级倒计时插件

### 异常信息

1. 对于后台异常信息，需要往上抛，将他展现在前端页面上

### JSP

#### 四大作用域

博客地址：https://www.cnblogs.com/whgk/p/6427759.html

### 状态码

1. 400：bad request，请求存在语法错误，最大的可能就是前后端参数传递有问题
2. 404：如果资源存在，那么一定是请求路径有问题

### 插件

#### IBatis插件

1. IDEA安装IBatis插件后 后，可以通过：Ctrl+Alt+B 快捷键从dao层跳转到SQL语句中

### Thymeleaf

##### th:class

```html
<!--
三元表达式：
已满标时追加pro-full
-->
<div th:class="${loanInfo.leftProductMoney==0 ? 'pro-box pro-full':'pro-box'}">
```

##### th:inline

博客地址 ：https://blog.csdn.net/mygzs/article/details/52667897

```html
<script type="text/javascript" th:inline="javascript">
    //http://localhost:8080/p2p
    var basepath = /*[[${#httpServletRequest.getScheme()+"://"+
                        #httpServletRequest.getServerName()+":"+
                        #httpServletRequest.getServerPort()+
                        #httpServletRequest.getContextPath()}]]*/
        "http://localhost:8080/p2p";

</script>
```

表达式同样可以在javascript中使用。先用属性声明一下：javascript ( th:inline=”javascript” )，然后我们开始在js中声明变量：

```html
<script th:inline="javascript">
    var username = /*[[${session.user.name}]]*/ 'Sebastian';
</script>
```

/*[[…]]*/表达式的理解如下：

- /*…*/中的内容在用浏览器打开静态 网页时，会被忽略.

- ‘Sebastian’会在浏览器中显示。静态时。

- Thymeleaf解析时，会解析/*[[…]]*/的内容，并把获得的值替换掉/*[[…]]*/后面的内容。

  所以执行的结果如下：

  ```html
  <script th:inline="javascript">
      var username = 'John Apricot';
  </script>
  ```

##### 拼接字符串

```html
<span th:text="|共${total}条 ${pageTotal}页 当前为第${currentPage}页|"></span>
```

##### 功能表达式

```html
<span th:if="${!#lists.isEmpty(userList)}">
                <dd th:each="user:${userList}">
                    <span class="record-num" th:text="${userStat.count}">1</span>
                    <span class="invest-user" th:text="|${#strings.substring(user.phone,0,3)}****${#strings.substring(user.phone,7)}|">137******89</span>
                    <span class="invest-money" th:text="${user.bidInfo.bidMoney}">1000.0</span>
                    <span class="invest-time" th:text="${#dates.format(user.bidInfo.bidTime,'yyyy-MM-dd hh:mm:ss')}">2017-09-12 13:34:22</span>
                </dd>
            </span>
```



## Commons lang3工具类

1. ObjectUtil使用

## 总结点

1. 隐藏域