## Hello World

```java
//继承 HttpServlet 类，重写 doGet、doPost方法
public class MyServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter writer = resp.getWriter();
        writer.println("Hello World");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
```

```xml
//在web.xml中配置对应的映射地址
<servlet>
    <servlet-name>servlet</servlet-name>
    <servlet-class>com.cth.MyServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>servlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

## ServletConfig 与 ServletContext

### ServletConfig

相当于封装了Servlet配置信息，每个Servlet都有唯一对应的ServletConfig对象

作用：

1. 获取当前Servlet名称
2. 获取ServletContext对象
3. 获取当前Servlet初始化参数

```java
ServletConfig servletConfig = getServletConfig();
String servletName = servletConfig.getServletName();
System.out.println(servletName);
String url = servletConfig.getInitParameter("url");
System.out.println(url);
```

### ServletContext

Servlet上下文，可以实现作用域共享，获取项目路径

### request 与 response

```java
//request转发
RequestDispatcher requestDispatcher = req.getRequestDispatcher("my.html");
requestDispatcher.forward(req,resp);
//response重定向
resp.sendRedirect("my.html");

```

重定向不会携带request对象

## 会话控制

### cookie

cookie是服务器保存（服务器创建的）在浏览器中的一小段信息（键值对形式存在）

用来帮助服务器识别浏览器

#### 使用

```java
Cookie cookie = new Cookie("hello", "world");
resp.addCookie(cookie);
```



### session

浏览器第一次发送请求时，服务器创建一个session对象，同时会创建一个特殊的cookie对象，name值是固定的JSESSIONID，之后浏览器每次访问服务器都会携带这个cookie

#### 使用

```java
HttpSession session = req.getSession();
session.setMaxInactiveInterval(20);
```

