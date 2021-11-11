### 读取配置文件信息

#### 方法一

```java
//可以根据classpath:来读取自定义配置文件
@Component
@PropertySource("classpath:custom.properties")
public class Test {
    @Value("${test.name}")
    private String name;
}
```

#### 方法二

```java
//根据配置注解，通过配置前缀来自动注入属性值
@Configuration
@ConfigurationProperties(prefix = "test")
public class Test {
    private String name;
}
```

