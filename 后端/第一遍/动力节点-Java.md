### package与import

package：

1. 出现在Java源文件的第一行 

import：

1. import什么 时候不需要
   1. Java.lang不需要
   2. 同包下不需要
2. 使用：import 完整类名；import 包名.*;

### 数组

#### 拷贝

```java
System.arraycopy()
```

#### Arrays工具类

### 包装类

```java
Integer integer = Integer.valueOf(str);//字符串转Integer，自动装箱
int i = integer.intValue();//拆箱，Integer转int
int i = Integer.parseInt(str);//字符串转int
int i = Integer.parseInt('11',2)//把11以二进制输入，十进制输出

```

### 日期类

```java
Date date = new Date();
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//日期转字符串
String format = sdf.format(date);
System.out.println(format);
//字符串转日期
String str = "2021-10-19 08:03:13";
Date parse = sdf.parse(str);
```

### 随机数

```java
Random random = new Random();
for (int i = 0; i < 10; i++) {
    System.out.println(random.nextInt(10));//随机数范围：[0,10)
}
```

###  异常

编译时异常与运行时异常，**都是发生在运行阶段**，编译阶段异常是不会发生的。

编译时异常必须在编译 阶段预先处理，如果不处理编译器会报错，

##### 编译时异常与运行时异常区别

**编译时异常**一般发生的概率比较高，所有Exception的直接子类，都叫做编译时异常。编译时异常是表示必须在编写程序的时候预先对这种异常进行处理，如果不处理编译器报错。

**运行时异常**一般发生的概率比较低，所有RuntimeException及子类都属于运行时异常。运行时异常在程序编写阶段，你可以选择处理，也可以选择不处理。

### 集合

1. 集合不能直接存储基本 数据类型（自动装箱） ，也不能存储Java对象，集合中 存储的都是Java对象的内存地址。集合任何时候存储的都是**引用**

#### 集合分类

#### Iterator

hasNext()

next()

remove()

##### List

有序可重复，存储的元素有下标

**ArrayList：**底层采用了数组结构，非线程安全的

##### Set

无序不可重复，

**HashSet：**底层创建了HashMap（new HashMap)

**TreeSet：**底层创建了 TreeMap（new TreeMap）

#### Map

1. Map 和 Conllection没有关系
2. Map  以键值对形式存在
3. key 和 value 都是存储 Java对象的内存地址
4. 所有的 key 都是无序不可重复的

##### HashMap

**key可以为null**

底层是哈希表，非线程安全

#####  TreeMap

底层是二叉树 ，**key** 可以自动 按照大小顺序自动 排序

#### Collection常用方法

```java
add();//添加
remove();//删除
clear();//清空
size();//集合中的元素个数
contains();//集合中包含什么元素
isEmpty();//是否是空集合
```

####  Map常用方法

```java
map.keySet();//map先将key转为set集合，然后进行遍历取值
```



#### crud方法查找

增：add、save、put、new

删：delete、drop、remove

改：update、set、modify

查：find、get、query、select

### IO流

I：input

O：output

硬盘的读写

#### 四大家族

InputeStream：字节输入流

OutputStream：字节输出流

Reader：字符输入流

Writer：字符输出流

这四个都是抽象类

**注意：`Java`中类名只要以`Stream`结尾的都是字节流，以`Reader/Writer`结尾的都是字符流**

#### 方法

```java
flush();//刷新流，输出流的时候记得刷新流
close();//关闭流，输出流结束的时候记得关闭流
```

#### 流分类

```java
//文件专属
FileInputStream
//转换流（字节转字符）
InputStreamReader
//缓冲流专属
BufferedReader
//数据专属
DataInputStream
//标准输出流
PrintStream
//对象专属流
ObjectInputStream
```

#### 操作流程

```java
String str = "D:\\Desktop\\temp\\electron-quick-start\\.gitignore";
FileInputStream fis = null;
try {
    fis = new FileInputStream(str);
    int read = fis.read();
    System.out.println((char) read);
} catch (FileNotFoundException e) {
    e.printStackTrace();
} catch (IOException e) {
    e.printStackTrace();
}
```

### File

File类不能完成文件的读和写

File代表文件和目录的路径名的抽象表现形式

```java
File file = new File(str);
file.exists();//判断文件是否存在
file.createNewFile();//创建文件
file.mkdir();//创建一个目录
file.mkdirs();//创建多级目录
```

### 序列化和反序列化

序列化：Java对象存储到文件中，将Java对象的状态保存下来的过程

反序列化：将硬盘中的数据恢复到内存当中，恢复成Java对象

```java
String str2 = "D:\\Desktop\\temp\\temp2.txt";
One one = new One();
one.setName("我是one");
ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(str2));
oos.writeObject(one);
oos.flush();
oos.close();
```

通过给 **One** 类实现 **Serializable** 接口，则可以实现Java类保存到硬盘操作

```java
//手动实现序列化UID
public static final long serialVersionUID
```

