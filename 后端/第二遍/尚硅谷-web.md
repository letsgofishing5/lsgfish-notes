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

