## SSM整合

#### 思路

![image-20220625200710698](SSM整合.assets/image-20220625200710698.png)

![image-20220625201205526](SSM整合.assets/image-20220625201205526.png)

![image-20220625201318044](SSM整合.assets/image-20220625201318044.png)

#### web.xml注册

##### DispatchServlet 中央调度器

![image-20220625221337387](SSM整合.assets/image-20220625221337387.png)

##### ContextLoaderListener 监听器

![image-20220625221455965](SSM整合.assets/image-20220625221455965.png)

##### CharacterEncodingFilter 字符集过滤器

![image-20220625221625550](SSM整合.assets/image-20220625221625550.png)

#### spring.xml

##### mybatis配置

![image-20220626100533767](SSM整合.assets/image-20220626100533767.png)

##### spring service层注入

![image-20220626100622351](SSM整合.assets/image-20220626100622351.png)