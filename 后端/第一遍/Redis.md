# Redis 

#### 概念

> Redis：非关系型数据库（non-relational)，Mysql是关系型数据库(RDBMS)
>
> **Redis是当今非常流行的基于KV结构的作为Cache使用的NoSQL数据库**

#####  为什么使用NoSQL

>1. 关系型 数据库无法应对每秒上万次 的读写请求
>2. 表中的存储记录 数量有限
>3. 无法简单的通过增加硬件、服务节点来提高系统性能
>4. 关系型数据库大多是收费的，对硬件要求较高，软硬 件成本较高

##### NoSQL优势

> 1. 大数据量，高性能
> 2. 灵活的数据模型，无需事先为数据建立字段，随时可以存储自定义的数据格式
> 3. 高可用，在不影响性能的情况下，可以方便的实现高可用的框架，能很好的解决关系型数据库扩展性差的问题
> 4. 低成本

##### NoSQL劣势

> 1. 无关系，数据之间是无联系的
> 2. 不支持标准的SQL，没有公认的NoSQL标准
> 3. 没有关系型数据库的约束，大多数也没有索引的概念
> 4. 没有事务，不能依靠事务实现ACID
> 5. 没有丰富的数据类型（数值，日期，字符，二进制，大文本等）

## Redis安装和使用

> 官网：[Redis官网](https://redis.io/)
>
> 中文版：[Redis中文版网址](http://redis.cn/)

### 下载

#### window版本

> 网址：[window版本网址](https://github.com/MicrosoftArchive/redis/releases)

###### 使用步骤

> 1. 下载Redis-x64-3.2.100.zip
>
> 2. 解压，双击：redis-server.exe，如果启动失败需要手动配置：redis.windows.conf
>
>    > 1. 在当前目录下，选择目录显示框，输入：cmd，进入命令行
>    >
>    > 2. 输入redis-server.exe  redis.windows.conf 回车
>    >
>    > 3. 出现上图的图形，则证明该服务已启动
>    
> 3. 双击：redis-cli.exe，打开Redis自带客户端，通过该客户端可以执行和Redis的数据交互
>
> 4. 输入：set，自动弹出语法格式
>
> 5. 将光标通过**空格键**移到**key**上，输入key的值，光标通过空格键移到value上，输入value的值，回车。
>
>    出现该结果代表值保存成功
>
> 6. 通过：get 方法取值
>
> 
>

#### Linux版本

> 网址：[Redis官网](https://redis.io/)

###### 安装步骤

> 1. 通过Xftp工具，将下载在window上的压缩包上传到Linux上目录：/home/soft
>
> 2. 解压到Linux上目录：usr/local目录：
>
>    解压命令：tar -zxvf 压缩包名 -C usr/local/
>
> 3. 编译Redis文件，Redis是使用C语言编写的。会使用**gcc**编译器
>
> 4. 在解压后的Redis安装目录执行**make**命令，
>
> 
>   > 注意事项：
>       >
>   > 1. make命令执行过程中可能报错，根据控制台输出的错误信息解决
>    >
>    > 2. 错误一：gcc命令找不到，是由于没有安装gcc导致
>    >
>    >    解决方式：安装gcc编译器后执行make命令
>    >
>    >    安装gcc编译器：在**src目录**下使用yum命令：yum -y install gcc
>    >
>    > 3. 错误二：error：jemalloc/jemalloc.h:No such file or directory
>    >
>    >    解决方式执行：make MALLOC=libc
> 
> 5. make命令之后，执行：make install，该命令类似于windows系统中配置环境变量，这样我们就可以在任何地方执行**Redis**的命令

##### Linux中的使用

###### 开启Redis

> Linux中的redis-server是服务窗口，redis-cli是客户端窗口
>
> 1. **在src目录下执行**：
>
>    **打开服务器**
>
>    前台启动：./redis-server
>
>    后台启动：./redis-server &（常用后台启动方式，如果修改了配置文件，则每次启动都需要指向配置文件）
>
> 2. 打开客户端，执行：./redis-cli 开启命令行

###### 关闭Redis

> 1. 在客户端中执行：shutdown
> 2. **在src目录**下执行：./redis-cli shutdown（如果有密码：./redis-cli -a 密码 shutdown）

#### Redis客户端

##### redis命令行客户端

> 1. 直接连接redis（默认ip:127.0.0.1，端口：6379）：./redis-cli
> 2. 指定IP和端口号连接redis：./redis-cli -h 127.0.0.1 -p 6379
>    - -h redis主机IP（可以指定任意redis服务器）
>    - -p 端口号（不同的端口号表示不同的redis应用）

##### 远程客户端连接Linux上redis

> 网址：[远程客户端网址](https://redisdesktop.com/)
>
> 国产：[客户端](https://github.com/caoxinyu/RedisClient)
>
> Redis服务器有安全保护措施，默认只有本机可以访问，配置信息在Redis安装目录下的redis.conf文件。修改此文件的两个设置。
>
> 远程连接redis需要修改redis主目录下的**redis.conf**配置文件：
>
> 1. bind ip 绑定ip，此行注释
> 2. protected-mode yes 保护模式改为no
>
> 使用**vi/vim**命令修改**redis.conf**文件，修改文件前**备份**此文件，执行**cp**命令
>
> ###### 步骤
>
> 1. 在/usr/local/redis/目录下执行： **cp redis.conf bak_redis.conf**
>
> 2. 使用vim/vi命令，执行：**vim redis.conf **再执行：**GG** 将光标移至最后一行，再执行：**/bind** 按回车查找，执行：**n** 往下查找，找到 **bind 127.0.0.1**后将其注释掉，
>
> 3. 找到**protected -mode  yes**，将**yes**改成**no**
>
> 4. 执行：esc按键，输入“:qw”，完成保存退出
>
> 5. 修改结束后，**每次**启动**redis**时，需要指定**redis.conf**
>
>    进入**src**目录下执行：./redis-server ../redis.conf &
>
> 6. 查看 防火墙的状态，执行：systemctl status firewalld
>
>    关闭防火墙命令：service firewalld stop

##### 编程 客户端连接Linux的redis

##### Redis基本操作命令

> ######  1、沟通命令
>
> 命令行输入：ping，返回PONG，表示服务端运行正常
>
> ###### 2、查看当前数据库中key的数目：dbsize
>
> 作用：返回当前数据库的 key 的数量，默认访问第0个库
>
> ###### 3、Redis默认使用16个 库
>
> 可以在**conf**配置文件中修改：**databases**的值
>
> ###### 4、切换库命令：select
>
> 执行：select index
>
> ###### 5、删除当前库的数据：flushdb
>
> 删除当前库中的所有数据
>
> ###### 6、redis自带的客户端退出当前redis连接：exit或quit
>
> 客户端退出连接，服务端继续运行

####  Redis的key的操作命令

> ###### keys：查询自己需要的key
>
> 语法：keys pattern
>
> 作用：查找所有符合模式pattern的key，pattern可以使用通配符
>
> 通配符：
>
> + *：表示0至多个字符，例如：keys * 查询所有的key
> + ？：表示单个字符，例如：wo?d，配置word，wold
>
> 注意：Redis是单线程接收命令
>
> ###### exists：查询key是否存在
>
> 语法：exists  key [key...]
>
> 作用：判断key 是否存在
>
> ###### expire：设置key的存活时间
>
> 语法：expire key seconds
>
> 作用：设置key的生存时间，超过时间，key自动删除。单位是**秒**
>
> 返回值：设置成功返回数字1，其他情况是0
>
> ######  ttl：查询key的剩余存活时间
>
> 语法：ttl key
>
> 作用：以秒为单位，返回 key的 剩余生存时间（ttl:time to live)
>
> 返回值：
>
> + -1：没有设置key的生存时间，key永不过期
> + -2：key不存在
> + 数字：key的生存时间，秒为单位
>
> ###### type
>
> 语法：type key
>
> 作用：查看key所存储值的数据类型
>
> 返回值：字符串表示的数据类型
>
> - none（key 不存在）
> - string（字符串）
> - list（列表）
> - set（集合）
> - zset（有序集）
> - hash（哈希表）
>
> ###### del
>
> 语法：del key[key...]
>
> 作用：删除存在的key，不存在的key忽略
>
> 返回值：数字，删除的key的数量

#### 五中数据类型

##### 字符串string

> 字符串类型是Redis中最基本的数据类型，他能存储任何形式的字符串，包括二进制，序列化后的数据，JSON化的对象甚至是一张图片，最大512M

###### 基本命令

> 1. **set key value**： 设置key和value
>
> 2. **get key**：获取key的value
>
> 3. **incr key** ：将key中存储的数字值加1并返回结果，如果 key不存在，则先初始化key的值为0，然后执行**incr**操作。**incr对  数据操作是 原子性的**
>
> 4. **decr  key**：将key中存储的数字值减1并返回结果，如果 key不存在，则先初始化key的值为0，然后执行**decr**操作。**decr 对  数据操作是 原子性的**
>
> 5. **append key value**：如果key存在，则 将value追加到key原来旧值的 末尾，如果没有则将key的值设置为value
>
>    返回值：追击字符串之后的长度

###### 常用命令

> 1. **strlen  key**：返回key所存储的字符串值的长度
>
>    返回值：
>
>    - 如果key存在，返回 长度
>    - key不存在，返回0
>
> 2. **getrange key start end**：获取key中字符串值从start开始 到 end结束的 子字符串，包括start 和 end，负数表示从字符串末尾开始，-1表示最后一个字符
>
>    返回值：截取的字符串
>
> 3. **setrange  key offset value**：用value 覆盖 key 的存储的值从offset开始，不存在的 key 做空白字符串。
>
>    返回值：修改后的字符串的长度
>
> 4. **mset key value**：同时设置 一个或多个key-value对
>
>    返回值：OK
>
> 5. **mget key value**：同时获取一个或多个key-value对
>
>    返回值：OK

##### 哈希类型 hash

> Redis hash 是一个string类型的**field和value**的映射表，hash特别适合用于**存储对象**

###### 基本命令

> 1. **hset hash 表的key field value**：将哈希表key 中的域 field 的值设置为 value，如果key不存在，则新建hash表，进行赋值，如果有field，则覆盖值
>
>    返回值：
>
>    - 如果field  是  hash 表中新 field，且设置值成功，返回 1
>    - 如果field 已经存在，旧值覆盖新值，返回0
>
> 2. **hgetall key**：获取哈希表key 中所有 的域和值
>
>    返回值：以列表形式返回hash中的域和域的值，key不存在，返回 空hash
>
> 3. **hdel key**：删除哈希表 key 中的一个或多个指定域field，不存在field  直接 忽略
>
>    返回值：成功删除的 field 的数量

###### 常用命令

> 1. **hkeys key**：查看哈希表 key 中的所有 field 域
>
>    返回值：包含所有 field 的列表，key不存在返回空表
>
> 2. **hvals key**：查看哈希表 key 中的所有 field 域的值
>
>    返回值：包含所有 field域的 值 的列表，key不存在返回空表
>
> 3. **hexists key field**：每次查询一个field域的值是否存在，
>
>    返回值：
>
>    - 存在返回1
>    - 不存在返回0

##### 列表类型 list

> Redis列表是 简单的字符串列表，按照**插入顺序 排序**，你可以 添加一个元素到列表的头部或尾部

###### 基本命令

> 1. **lpush key value**：将一个或多个值value**插入到列表key 的表头**（最左边）从左边开始加入值，从左到右的顺序依次插入到表头
>
>    返回值：数字，新列表的长度
>
> 2. **rpush key value**：将一个或多个值value**插入到列表key 的表尾部**（最右边）从左边开始加入值，从左到右的顺序依次插入到表尾
>
>    返回值：数字，新列表的长度
>
> 3. **lrange key start stop**：获取列表中 key 中指定的区间内的元素
>
>    返回值；指定区间的列表
>
> 4. **lindex key index**：获取列表 key 中下标为指定 index 的元素，列表元素不删除，只是查询
>
>    返回值：指定下标的元素；index不在列表范围，返回nil
>
> 5. **llen key**：返回列表 key 的长度

###### 常用命令

> 1. **lrem key count value**：根据参数count 的值，移除列表中参数 value 相等的元素，count>0，从列表的左侧向右侧开始移除；count<0 从列表的尾部开始删除；count=0 移除表中所有与value 相等的值
>
>    返回值：数值，移除的元素个数
>
> 2. **lset key index value**：将列表 key 下标 为 index 的元素的值设置为 value
>
>    返回值：设置 成功返回OK，反之报错
>
> 3. **linsert**：将值value 插入 到列表  key 当中位于值 pivot 之前或 之后的位置。key不存在，pivot不在列表中，不执行任何操作。
>
>    返回值：命令执行成功，返回新列表的长度。没有找到pivot 返回 -1，key 不存在返回 0

##### 集合类型 set

> Redis 的 Set 是string类型的**无序集合**，集合成员是**唯一** 的，即集合中**不能出现重复**的数据

###### 基本命令

> 1. **sadd**：添加一个或多个成员，有创建集合的功能
> 2. **smembers**：查看集合中的成员
> 3. **sismember**：检查是否是集合中的成员
> 4. **scard**：查看集合的大小
> 5. **srem**：删除集合中的元素

###### 常用命令

> 1. **srandmember key count**：随机从集合中返回元素，count是正数表示获取的元素不重复，负数则可能会重复多次
> 2. **spop**：随机从集合中删除一个元素，返回值是 被 删除的元素，key不存在返回nil

##### 有序集合类型 zset(sorted set)

> Redis 有序集合 zset 和集合set一样也是 string类型元素的集合，且**不允许重复**的成员。不同的zset的每个元素都会关联一个分数**（分数可以重复）**，redis通过 分数来为集合中的  成员进行从大到小的排序

###### 基本命令

> 1. **zadd**：将一个或多个成员加入到zset中
> 2. **zrange**：通过下标获取指定成员，**命令行末尾加上 widthscores**则获取**value值**，查询到的值从小到大排序，
> 3. **zrevrange**：通过下标获取指定成员，**命令行末尾加上 widthscores**则获取**value值**，查询到的值从大到小排序，
> 4. **zrem**：删除集合中 指定成员
> 5. **zcard**：返回集合中的元素个数

###### 常用命令

> 1. **zrangebyscore**：获取有序集合中，所有score 介于 min 和max 之间的成员，并从小到大排序
>
> 2. **zrevrangebyscore**：获取有序集合中，所有score 介于 min 和max 之间的成员，并从大到小排序,**同 zrangebyscore**
>
> 3. **zcount key min max**：返回有序 集合中最大值和最小值之间的成员数量

### 高级话题

#### Redis事务

##### 事务操作命令

###### 1、multiz

> 标记一个事务的开始。事务内的多条命令会按先后顺序被放进一个队列中，
>
> 返回值：总是返回OK
>
> 

###### 2、exec

> 执行所有事务块内的命令
>
> 返回值 ：事务内的所有执行语句内容，事务被打断（影响)返回nil

###### 3、discard

> 取消事务，放弃执行事务块内的所有命令
>
> 返回值：总是返回OK

###### 4、watch

>  监视一个或多个key，如果在事务执行之前这个或这些key被其他命令所改动，那么事务将被打断
>
> 返回值：总是返回OK

###### 5、unwatch

> 取消watch命令对 所有 key 的监视，如果在执行watch 命令之后，exec命令或discard命令先被执行了，那就不需要再执行unwanted了

#### 持久化

> 持久化可以理解为存储，就是 将数据存储到一个不会丢失的地方，如果把数据放在内存中，电脑关闭或重启数据就会丢失，所以放在内存中的数据时不会持久化的，放在磁盘可以

#####  Redis持久化方式 

###### RDB（Redis Database）

> 在指定时间间隔内将内存中的数据集快照写入磁盘，数据恢复时将快照文件直接再读到内存，是**默认开启**的
>
> 可以通过配置文件 redis.conf中搜索 SNAPSHOTTING，查找在注释开始和结束之间的关于RDB的配置说明。配 SNAPSHOTTING 置地方有三处
>
> - 1. 配置执行RDB生成快照文件的时间策略，对Redis 进行设置，让它在 “N” 秒内数据集至少有M个 key 改动，这一条件满足时，自动保存一次 数据集
>
>      配置格式：save <seconds>  <changes>
>
>      save 900 1  #900秒 发生一次改动时，进行数据备份
>
>      save 300 10
>
>      save 60 10000
>
>   2. dbfilename:设置RDB的文件名，默认是 dump.rdb
>
>   3. dir：指定 RDB 文件的存储位置，默认是 ./ 当前目录
>
> - 先停止Redis服务，然后进入/usr/local/redis-6.0.6/src 目录下，删除dump.rdb
>
> - 进入 /usr/local/redis-6.0.6/ 目录下，修改redis.conf 配置文件，搜索：snap
>
> - 还可修改   1  中的2,3项

###### RDB缺点

> 会造成一定的数据丢失的 可能（解决方法：修改保存策略）

###### AOF(Append-only File)

> Redis每次接收到一次 改变 数据命令时，它将把该命令写到一个AOF文件中（只记录写操作，读操作不记录），当redis重启时，他通过执行AOF文件中所有的命令来恢复数据
>
> ###### 实现方式
>
> 1. 在redis.conf 配置文件中修改配置
>
>    - appendonly：默认是 no，改成 yes，即开启了AOF持久化
>
>    - appendfilename：指定AOF文件名，默认文件名：appendonly.aof
>
>    - dir：指定RDB 和 AOF 文件存放的目录，默认是 ./
>
>    - appendfsync：配置向 aof 文件写 命令 数据的策略
>
>      no：不主动进行同步操作，而是完全交由操作系统来做（即30秒一次），比较快但不是很安全。
>
>      always：每次执行写入都会执行同步，慢一些但是 比较安全
>
>      everysec：每秒执行一次 同步操作，比较平衡，介于速度和安全之间。这是默认项
>
>    - auto-aof-rewrite-min-size：允许重写的最小 AOF 文件大小，默认是64M。当aof文件大于64M时，开始整理aof文件，去掉无用操作 命令，缩小aof文件
>
> 2. 停止运行的Redis，备份需要修改的redis.conf
>
> AOF 和 RDB 可以同时启动，AOF更加安全，RDB性能更加高，但是 同时启动消耗性能

##### 主从复制

###### 模拟一主多从--读写分离

> 1. 多次开启redis-server
>
>    - 方式一：修改配置文件，启动时，服务器读取配置 文件，并且自动成为指定服务器的从服务器，从而构成主从复制的关系
>    - 方式二：./redis-server  --slaveof <master-ip> <master-port>，在启动redis时指定当前服务成为某个主Redis服务的从Slave
>
>    **方式一的实现步骤：**
>
>    - 模拟多Redis服务器，在一台已经安装Redis的 机器上，运行多个Redis应用模拟多个Redis 服务器。一个 Master，两个Slave
>
>    - 新建三个Redis的配置文件
>
>      如果Redis启动，先停止。作为Master 的Redis 端口是 6380
>
>      作为Slave 的Redis 端口分别是 6382，6384
>
>      从原有的 redis.conf 拷贝三份，分别命名为 redis6380.conf，redis6382.conf，redis6384.conf
>
>    - 编辑Master 配置文件
>
>      编辑Master 的配置 文件  redis6380.conf，在空文件加入如下内容
>
>      include /usr/local/redis-6.0.6/redis.conf
>
>      daemonize yes
>
>      port 6380
>
>      pidfile /var/run/redis_6380.pid
>
>      logfile 6380.log
>
>      dbfilename dump6380.rdb
>
>      **配置说明**
>
>      include：包含原来的 配置 文件内容。/usr/local/redis-6.0.6/redis.conf 安照自己的目录设置
>
>      daemonize：yes 后台启动应用，相当于 ./redis-server & ,&的 作用
>
>      port：自定义端口号
>
>      pidfile：自定义的文件，表示当前程序的pid，进程id
>
>      logfile：日志文件名
>
>      dbfilename：持久化的rdb文件名
>
>    **编辑Slave配置 文件**
>
>    ​		编辑Slave 的配置文件 redis6382.conf  和 redis6384.conf：在空文件下加入如下内容：
>
>    + redis 6382.conf：
>
>      include /usr/local/redis-6.0.6/redis.conf
>
>      daemonize yes
>
>      port 6382
>
>      pidfile /var/run/redis_6382.pid
>
>      logfile 6382.log
>
>      dbfilename dump6382.rdb
>
>      slaveof 127.0.0.1 6380
>
>      **配置说明**
>
>      slaveof：表示当前Redis 是谁的 从。当前是127.0.0.1 端口6380 这个Master 的从
>
>    **启动主从服务器**
>
>    **登陆客户端，查看当前服务器信息：info replication**

##### 容灾处理 

> 当Master 服务出现故障，需要手动将 slave 中的  一个提升为 master，剩下的slave 挂至新的master上（冷处理：机器挂掉了 ，再处理）
>
> 命令：
>
> - slaveof no one，将一台 slave 服务器提升至 master （提升某 slave 为 master）
> - slaveof 127.0.0.1 6381 （将 slave 挂至新的 master 上)
>
> **执行步骤：**
>
>  1. 先将挂掉的机器停掉
>
>  2. 选择一个从服务器，执行：slaveof no one 提升至主服务器
>
>  3. 在其他从服务器上执行：slaveof 新主服务器ip 端口号port
>
>  4. 当挂掉的主服务器修好后，将其重新加入新的主从结构中
>
>     **步骤**：
>
>     1. 先启动修好的服务器，
>     2. 执行：slaveof 新主服务器ip 端口号

#####  高可用哨兵

> Sentinel哨兵是redis官方提供的高可用方案，可以用它来监控多个Redis 服务实例的运行情况。Redis Sentinel是一个运行在特殊模式下的Redis服务器。Redis Sentinel是在多个Sentinel进程环境下互相协作工作的。
>
> ###### Sentinel系统有三个主要任务:
>
> - **监控**: Sentinel不断的检查主服务和从服务器是否按照预期正常工作。
> - **提醒**:被监控的Redis 出现问题时，Sentinel会通知管理员或其他应用程序。
> - **自动故障转移**:监控的主Redis不能正常工作，Sentinel会开始进行故障迁移操作。将提供新的主服务器地址
>
> **注意**：哨兵（sentinel ）的数量是**奇数**（odd)个的，不能是偶数（even）个的
>
> 原理：每个sentinel都会独立运行，但相互之间保持通信进行**交换监控信息**，对于主服务器的健康状态，每个sentinel 都会有反馈信息，并将反馈结果进行投票 ，少数服从多数，**例子：**一共三个sentinel，前两个都返回主服务器宕机了，那么第三个sentinel 的反馈就不重要了，少数服从多数

##### sentinel配置

> 1. 复制三份sentinel.conf 文件
> 2. sentinel系统默认 port 是 26379。三个配置port 分别设置为26380,26382,26384，三个文件分别命名：
>    1. sentinel26380.conf
>    2. sentinel26382.conf
>    3. sentinel26384.conf
> 3. 在被复制的三份文件中，修改信息：
>    - 修改port
>    - 修改监控（monitor）的master地址
> 4. 一切准备结束，启动哨兵（sentinel），执行：./redis-sentinel ../sentinel26384.conf (这里的配置 文件是对应的配置文件)

##### 安全设置

###### 1、设置密码

> 访问Redis默认是没有密码的，这样不安全，任意用户都可以访问。可以启用使用密码才能访间Redis。设置Redis 的访问密码，修改redis.conf中这行requirepass密码。密码要比较复杂，不容易破解，而且需要定期修改。因为redis速度相当快，所以在一台比较好的服务器下，一个外部的用户可以在一秒钟进行150K次的密码尝试，需要指定非常非常强大的密码来防止暴力破解。
>
> **在redis.conf 配置文件中，找到requirepass，开启 密码设置，并在后面 设置密码，6-16位密码，密码越复杂越好**
>
> 设置密码后，访问服务器，
>
> - 方式一：需要执行：**./redis-cli -a 密码 **       (-h ip地址 -p 端口号)
> - 方式二：执行：**./redis-cli** 回车，再执行：**auth 密码**

###### 2、绑定ip

> 修改redis.conf文件，把# bind 127.0.0.1 前面的注释#号去掉，然后把127.0.0.1改成允许访问你redis服务器的ip地址，表示只允许该ip进行访问。多个ip使用空格分隔。
>
> <img src="C:\Users\cth\Pictures\Saved Pictures\redis10.png" alt="图片demo" style="zoom:50%;" />

###### 3、修改默认端口

> 修改redis的端口，这- -点很重要，使用默认的端口很危险，redis.conf 中修改port 6379 将其修改为自己指定的端口(可随意)，端口1024是保留给操作系统使用的。用户可以使用的范围是1024-65535

##  Jedis操作Redis

> 使用Redis官方推荐的Jedis，在java应用中操作Redis。Jedis 几乎涵盖了Redis 的所有命令。操作Redis的命令在Jedis中以方法的形式出现。jedis完全兼容redis2.8.xand3.x.x
>
> - ●Jedis 源码: https://github.com/xetorthio/jedis
> - api文档: http://xetorthio.github.io/jedis/
> - 下载: http://search.maven.org/ ，搜索jedis

### 下载Jedis和Commons-Pool

#### 下载Jedis

> 网址：[下载网址](http://search.maven.org/ )
>
> 1. java项目中导入jar包，创建Jedis 对象，指定连接的redis 服务器的ip，端口
>
> 2. 通过网络，访问 Redis 服务器
>
>    1. 修改 redis.conf，启动redis需要指定 redis.conf 的位置
>    2. 关闭Linux 防火墙，或者让 redis 的端口 通过防火墙
>
>    ```java
>    	//这是 主机地址        
>            String host = "192.168.192.131";
>        //这是 服务器端口号        
>            int port = 6379;
>            Jedis jedis = new Jedis(host,port);
>        //密码        
>            jedis.auth("cthcth");
>        //设置 string类型的数据        
>            jedis.set("break", "两个大肉包");
>            jedis.mset("launch", "红烧肉，菠萝饭","dinner","水饺");
>            List<String> mget = jedis.mget("break", "launch", "dinner");
>            for (String s : mget) {
>                System.out.println(s);
>            }
>    //java语法与redis语法保持 基本一致
>    ```
>
> 3. **注意：**Jedis 单独 使用有线程安全问题，所有需要结合线程池使用（Commons-Pool）
>
>    导入Commons-pool jar包后，创建一个**线程池工具类**
>
>    ```java
>    package com.cth;
>    
>    import redis.clients.jedis.JedisPool;
>    import redis.clients.jedis.JedisPoolConfig;
>    
>    public class RedisUtils {
>        private static JedisPool pool;
>    
>        public static JedisPool open(String ip, int port, String password){
>            if (pool==null)
>            {
>                //创建JedisPool
>                //创建JedisPoolConfig，给Config设置连接池参数，使用config 对象创建JedisPool
>                JedisPoolConfig config = new JedisPoolConfig();
>                //给config设置连接池的参数
>                //设置最大的线程数，一个线程就是一个Jedis
>                config.setMaxTotal(20);
>                //设置最大空闲数
>                config.setMaxIdle(2);
>                //设置检查项为true，表示从线程池中获取的对象一定是经过检查可用的
>                config.setTestOnBorrow(true);
>                //创建pool对象
>                pool = new JedisPool(config, ip, port, 1000, password);
>            }
>            return pool;
>        }
>    //    关闭池，使用时机：在整个项目都结束时，再使用close方法
>        public static void close(){
>            if (pool != null) {
>                pool.close();
>            }
>        }
>    }
>    
>    ```
>
>    **Jedis连接Redis**
>
>    ```java
>     public static void main(String[] args) {
>        //这是 主机地址
>            String host = "192.168.192.131";
>        //这是 服务器端口号
>            int port = 6379;
>            //密码
>            String auto = "cthcth";
>            JedisPool pool = null;
>            Jedis jedis=null;
>            try {
>                pool = RedisUtils.open(host, port, auto);
>                jedis = pool.getResource();
>                //设置 string类型的数据
>                jedis.set("break", "两个大肉包");
>                jedis.mset("launch", "红烧肉yes，菠萝饭","dinner","水饺");
>                List<String> mget = jedis.mget("break", "launch", "dinner");
>                for (String s : mget) {
>                    System.out.println(s);
>                }
>    
>                Set<String> keys = jedis.keys("*");
>                for (String key : keys) {
>                    System.out.println(key+",类型："+jedis.type(key));
>                }
>            }finally {
>    //            关闭Jedis对象，把从Pool中获取的Jedis放回Pool，供其他请求使用
>                if (jedis != null) {
>                    jedis.close();
>                }
>            }
>    ```

## 集群

> 概念：集群就是使用网络将若F台计算机联通起来,并提供统-的管理方式，使其对外呈现单机的服务效果
>
> 作用：
>
> - 分散单台服务器的访问压力， 实现负载均衡
> - 分散单台服务器的存储压力，实现可扩展性
> - 降低单台服务器宕机带来的业务灾难
>
> 