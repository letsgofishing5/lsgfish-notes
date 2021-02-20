## 简化dao层

1. **dao**层接口继承**BaseMapper<T>**这个类，并传入泛型即可，所有的**简单CRUD**已经完成

   ```java
   @Mapper
   public interface TestMapper extends BaseMapper<User> {
   }
   ```

## 配置日志

1. 核心配置文件配置

   ```properties
   mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
   ```


## 主键策略

1. 注解：@TableId(type=	idType.AUTO)，加在实体类**id**字段上

   ```java
       @TableId(type = IdType.AUTO)
       private Long id;
   ```

   ```java
       AUTO(0),//主键自增
       NONE(1),//未设置主键
       INPUT(2),//手动输入
       ASSIGN_ID(3),
       ASSIGN_UUID(4),
       /** @deprecated */
       @Deprecated
       ID_WORKER(3),//默认的全局唯一id
       /** @deprecated */
       @Deprecated
       ID_WORKER_STR(3),//ID_WORKER 字符串表示法
       /** @deprecated */
       @Deprecated
       UUID(4);//全球唯一id UUID
   ```

## 自动填充

### 方式一，数据库级别

1. 数据库添加两个字段：create_time，update_create，并给默认值：CURRENT_TIMESTAMP，数据类型：datetime

### 方式二，代码级别

1. 在实体类上添加注解：@TableField(fill=FieldFill.)

   ```java
       @TableField(fill = FieldFill.INSERT_UPDATE)
       private Date updateTime;
       @TableField(fill = FieldFill.INSERT)
       private Date createTime;
   ```

2. 实现自定义处理器，实现：MetaObjectHandler

   ```java
   @Component
   @Slf4j
   public class MyHandle implements MetaObjectHandler {
       @Override
       public void insertFill(MetaObject metaObject) {
           log.info("插入开始=================");
           setFieldValByName("createTime", new Date(), metaObject);
       }
   
       @Override
       public void updateFill(MetaObject metaObject) {
           log.info("更新开始=================");
           setFieldValByName("updateTime", new Date(), metaObject);
   
       }
   }
   
   ```

## 乐观锁

乐观锁:故名思意十分乐观，它总是认为不会出现问题，无论干什么不去上锁!如果出现了问题，再次更新值测试

悲观锁︰故名思意十分悲观，它总是认为总是出现问题，无论干什么都会上锁!再去操作!

### 设置乐观锁 

1. 数据库设置字段：version

2. 给字段设置默认值为：1

3. 实体类添加属性：version，并加注解：@Version

   ```java
       @Version
       private Integer version;
   ```

4. 注册主键组件

   ```JAVA
   @Configuration
   @MapperScan("com.cth.dao")
   @EnableTransactionManagement
   public class MybatisPlusConfig {
       @Bean
       public OptimisticLockerInterceptor OptimisticLockerInnerInterceptor() {
           return new OptimisticLockerInterceptor();
       }
   }
   ```

5. **使用时，先查询，再更新**

## 分页查询

```xml
<!-- spring xml 方式 -->
<property name="plugins">
    <array>
        <bean class="com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor">
            <property name="sqlParser" ref="自定义解析类、可以没有"/>
            <property name="dialectClazz" value="自定义方言类、可以没有"/>
            <!-- COUNT SQL 解析.可以没有 -->
            <property name="countSqlParser" ref="countSqlParser"/>
        </bean>
    </array>
</property>

<bean id="countSqlParser" class="com.baomidou.mybatisplus.extension.plugins.pagination.optimize.JsqlParserCountOptimize">
    <!-- 设置为 true 可以优化部分 left join 的sql -->
    <property name="optimizeJoin" value="true"/>
</bean>
```

```java
//Spring boot方式
@Configuration
@MapperScan("com.baomidou.cloud.service.*.mapper*")
public class MybatisPlusConfig {

    @Bean
    public Interceptor paginationInterceptor() {
        PaginationInterceptor paginationInterceptor = new PaginationInterceptor();
        // 设置请求的页面大于最大页后操作， true调回到首页，false 继续请求  默认false
        // paginationInterceptor.setOverflow(false);
        // 设置最大单页限制数量，默认 500 条，-1 不受限制
        // paginationInterceptor.setLimit(500);
        // 开启 count 的 join 优化,只针对部分 left join
        paginationInterceptor.setCountSqlParser(new JsqlParserCountOptimize(true));
        return paginationInterceptor;
    }
}
```

```java
//分页使用	
@Autowired
	private UserMapper mapper;
	@Test
	void contextLoads() {
		Page<User> page = new Page<>(3,3);
		Page<User> page1 = mapper.selectPage(page, null);
		List<User> records = page1.getRecords();
		records.forEach(System.out::println);
	}

```

## 逻辑删除

1. 物理删除：从数据库中直接移除
2. 逻辑删除：在数据库中没有删除，而是通过一个变量来让他失效，类似于回收站

### 测试

1. 在数据库中添加一个**deleted**字段

2. 实体类中增加 属性，并且添加注解：@TableLogic

   ```java
   @TableLogic
   private Integer deleted;
   ```

3. 配置

   ```java
   @Bean
   public ISqlInjector sqlInjector(){
       return new LogicSqlInjector();
   }
   ```

4. 核心配置文件

   ```properties
   mybatis-plus.global-config.db-config.logic-delete-value=1  #已经删除的值标记为1
   mybatis-plus.global-config.db-config.logic-not-delete-value=0 #没有删除的值标记为0
   ```

## 性能分析插件

1. 导入插件

   ```java
   @Bean
   @Profile({"dev","test"})//设置dev test 环境开启，保证我们的效率
   public performanceInterceptor performanceInterceptor( {
       PerformanceInterceptor p = new PerformanceInterceptor();
       p.setMaxTime(100);// ms设置sq1执行的最大时间，如果超过了则不执p.setFormat(true);//是否格式化代码
   	return p;
   }
   ```

## 条件构造器

