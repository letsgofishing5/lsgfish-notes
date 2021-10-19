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

