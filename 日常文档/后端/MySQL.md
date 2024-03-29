## DOS命令

```bash
#启动数据库
>mysql -uroot -p123456
#展示数据库
>show databases;
#创建数据库
>create database database_name;
#查询当前使用的数据库
>select database();
#切换数据库
>use lgf;
#展示表的设计结构
>desc tables_name;
#执行sql脚本导入数据
source D:\demo.sql
#查看建表语句
show create table tb_table
```

### 查询条件

```sql
#between and
select * from user where age between 12 and 15;
# 是否为空：is null
select * from user where age is null;
```

| 运算符       | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| =            | 等于                                                         |
| <> 或 !=     | 不等于                                                       |
| <            | 小于                                                         |
| <=           | 小于等于                                                     |
| >            | 大于                                                         |
| >=           | 大于等于                                                     |
| between…and… | 两个值之间，等同于 `>= and <=`                               |
| is null      | 为 `null`（`is not null` 不为空）                            |
| and          | 并且                                                         |
| or           | 或者                                                         |
| in           | 包含，相当于多个`or`（`not in` 不在这个范围中）              |
| not          | `not` 可以取非，主要用在 `is` 或 `in` 中                     |
| like         | `like` 称为模糊查询，支持 % 或下划线\_匹配，\_ 代表一个字符，% 代表任意 |

### 排序

**order by desc;升序**

**order by asc;降序**

多字段排序时，用逗号隔开，字段越靠前权限越重

```sql
select * from user where name LIKE '%' ORDER BY `name`;
```

### 分组函数

`SQL`函数大全：http://c.biancheng.net/mysql/function/

**分组函数自动忽略`null`**

```sql
#所有的分组函数都是对某一组数据进行操作
select SUM(age) age from user;
```



**`SQL`中，任何与`null`值相加的值都为`null`**

```sql
#处理null值计算问题 ifnull(null字段,替换值)
select name,(salary + ifnull(null_column,0)) as '年薪' from tb_test;
```

> 分组函数自动忽略 null 值计算

| 分组函数 | 说明   |
| -------- | ------ |
| count    | 计数   |
| sum      | 求和   |
| avg      | 平均值 |
| max      | 最大值 |
| min      | 最小值 |

### 分组筛选查询

| 分组     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| group by | 按某个字段分组                                               |
| having   | **对分组之后的数据**经行筛选过滤（同where作用），可以使用**分组函数** |

注意：一旦使用了`group by`后，`select`后面只能跟**分组字段**，或者**分组函数**字段，**其他字段取值毫无意义**

### 去重

```sql
#distinct只能出现在所有字段最前面，联合去重
select distinct * from user;
```



### DQL语句执行顺序

```sql
select		5
	……
from		1
	……
where		2
	…… (where后面不能使用分组函数)
group by	3
	……
having		4
	……
order by	6
	……
```

### 连接查询

1. 内连接
   1. 等值连接
   2. 非等值连接
   3. 自连接
2. 外连接
   1. 左外连接
   2. 右外连接
3. 全连接

#### 笛卡尔积现象

当两张表进行连接查询的时候，没有任何条件进行限制，最终的查询结果条数是两张表记录条数的乘积，称之为笛卡尔积现象

怎么避免笛卡尔积现象？当然是加条件进行过滤。无法避免笛卡尔积现象，但是可以让显式的数据正常不重复

#### 等值连接

```sql
# a join b on a = b
select 
	a.name,b.name
from 
	aExmp a
join
	bExmp b
on
	a.name = b.name
where
	……
```

**内连接**：没有主副之分

**外连接**：有主副之分，主要查询主表数据，捎带着查副表数据，如果副表没有和主表数据匹配上，副表自动模拟NULL与之匹配

**左外连接**：表示左边的表是主表

**右外连接**：表示右边的表是主表

#### 多表联查

```sql
	……
	A
	join
	B
	on
	……
	join
	C
	on
	……
```

#### 子查询

`select` 语句嵌套 `select` 语句

```sql
select 
	……(select)
from
	……(select)
where
	……(select)
```

### limit分页查询

limit	startIndex	length

### MySQL中字段数据类型

| 类型    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| int     | 整数型（int）                                                |
| bigint  | 长整型（Java中的long）                                       |
| float   | 浮点型（Java中的float、double）                              |
| char    | 定长字符串（string）                                         |
| varchar | 可变字符串（stringbuffer/stringBuilder）                     |
| date    | 日期类型（Java中的 java.sql.Date 类型）                      |
| BLOB    | 二进制大对象 Binary Large Object（Object）                   |
| CLOB    | 字符大对象（存储较大文本，比如4G的字符串）Character Large Object |

#### crud

```sql
#插入
insert into t_tableName(val1,val2) values(colum_name1,colum_name2);
# 删表
drop table if exists t_tableName;
# 表复制：将查询结果当作表创建出来
create table 表名 as select 语句
#修改
update 表名 set 字段名=值 where 条件;
#删除表数据
delete from 表名 where 条件
```

### union

union与union all

### 约束

1. 非空约束：not null
2. 唯一约束：unique
3. 主键约束：primary key。不能为null，不能重复
4. 外键约束：foreign key

### 索引

Mysql中常见的索引类型有**普通索引、唯一索引、全文索引、空间索引Spatial**

```bash
#查看索引
show index from table_name;
#格式化输出
show index from table_name\G;
#创建索引
create index index_name on table_name(column_name)
#删除索引
drop index index_name on table_name;

#创建索引另外一种方式
alter table table_name add index index_name(column_name);
#删除索引
alter table table_name drop index index_name;
```



### 事务

#### 什么是事务

1. 一个事务是一个完整的业务逻辑单元，不可再分
2. 和事务相关的SQL语句只有：insert、delete、update（DML语句）

#### 事务特性

1. 原子性：事务是最小的工作单元，不可再分
2. 一致性：事务必须保证多条DML语句同时成功或者失败
3. 隔离性：事务A与事务B之间具有隔离
4. 持久性：最终数据必须持久化到硬盘中，事务才算成功

#### 事务隔离性

1. 第一级别：读未提交
   1. 对方事务还没有提交，我们当前事务可以读取到对方未提交的数据，存在脏读现象
2. 第二级别：读已提交（Oracle默认级别）
   1. 对方事务提交之后的数据我方可以读取到。
   2. 读已提交存在的问题是：不可重复读。
3. 第三级别：可重复读（MySQL默认的级别）
   1. 这种隔离级别解决了：不可重复读的问题
   2. 问题是：读取到的数据是幻象（永远是之前的数据）
4. 第四级别：序列化读/串行化读
   1. 解决了 所有问题
   2. 效率低，需要事务排队

#### mysql中使用事务

```bash
#开启事务
begin;
#执行数据更新操作
update users set balance = balance - 100 where name = '张三'

#如果在更新数据过程中出现错误，可以通过rollback;进行手动回滚
#rollback
update users set balance = balance + 100 where name = '里斯'
#提交事务，同步数据到数据库中
commit;
```



### 锁

Mysql中的锁有**表级锁和行级锁**，这里主要给大家讲讲最常用的表级锁

#### 添加读锁

可以并发读，但是不能并发写，读锁期间，没释放锁之前不能进行写操作。

```bash
lock table user read;

unlock tables;
```

#### 添加写锁

只有锁表的用户可以进行读写操作，其他用户不行

```bash
lock table user write;

unlock tables;
```



### 数据库设计三范式

1. 任何一张表**都应有主键**，每个字段原子性不可再分
2. 建立在第一范式上，另外要求所有非主键字段完全依赖主键，**不能产生部分依赖**
3. 第三范式建立在第二范式之上，所有非主键字段直接依赖主键字段，**不能产生传递依赖**





## 使用案例

### 函数

#### 条件表达式

1. if

   ```sql
   IF(expr1,expr2,expr3)
   ## 如果 expr1 是TRUE (expr1 <> 0 and expr1 <> NULL)，则 IF()的返回值为expr2;
   ## 否则返回值则为 expr3。
   ## IF() 的返回值为数字值或字符串值，具体情况视其所在语境而定。
   ```

2. if else

3. case when

   ```sql
   CASE 
   	WHEN MOD(employee_id,2)!=0 THEN salary #匹配当前 when 条件的则赋予 then 后面的值
       WHEN MOD(employee_id,2)=0  THEN 0
   END
   ```

4. ifnull(expr1,expr2)

   ```sql
   ifnull(v1,v2)
   #如果 v1 不为 NULL，则 IFNULL 函数返回 v1; 否则返回 v2 的结果。
   ```

   

#### 计算表达式

1. mod(a,b)

   ```sql
   Mod(a,b) 在sql中的意思是 a % b
   Mod基础用法：如果id需要是偶数或者奇数时就可以使用mod。
   ```

2. left(str,n)

   ```sql
   left("你好世界",2) = '你好'
   #返回最左边的 你好世界 从左边开始的两个字符
   ```

   

#### 分组函数字段拼接

1. group_concat

   ```sql
   select group_concat(distinct name) as name
   from users
   group by name
   ```

   



