## HelloWorld

```java
class HelloWorld{
	public static void main(String[] args){
		System.out.println("Hello World");
	}
}
```

```bash
#编译
javac HelloWorld.java
#运行
java HelloWorld
```

## 数据类型

**byte**、**short**、**int（默认值）**、**long**、**float**、**double（默认值）**、**boolean**、**char**

在计算机内，定点数有3种表示法：原码、反码和补码 

**[原码]**二进制定点表示法，即最高位为符号位，“0”表示正，“1”表示负，其余位表示数值的大小。 

**[反码]**表示法规定：正数的反码与其原码相同；负数的反码是对其原码逐位取反，但符号位除外。 

**[补码]**表示法规定：正数的补码与其原码相同；负数的补码是在其反码的末位加1。

计算机数据是用补码表示的，正数的补码就是它的原码，而负数的补码是将其原码（取绝对值后的原码）取反加1得到的。

1. byte：正127~负128
2. short：正负3万之间
3. int：正负21亿之间
4. long：正负19位

#### 自动类型提升

小数据向大数据转换，会自动提升

大数据向小数据转换，需要强制转换

#### 强制类型转换

小数据类型	标识符	=	（小数据类型）大数据

#### 进制输出

0b开头的表示二进制

0开头的表示八进制

0x开头的表示十六进制

#### 扫描器

```java
Scanner in =new Scanner(System.in);
in.next()
```

### 数组

#### 声明

```java
int[] arr = new int[10];//指定初始化长度
int[] arr = new int[]{1，2，3，4};//初始化值
```

#### 输出数组

```java
int[][] arrs = {{1, 2, 3}, {2}};
System.out.println(arrs);
//输出结果：[[I@1540e19d
//[[：代表二维数组
//I：表示 int类型
//1540e19d：数组对象的hash码十六进制地址
```

## 面向对象

面向对象思想：OOP

面向对象特征：封装、继承 和 多态

#### 什么是类

是一类具有相同特性的事物的抽象描述，是一组相关属性和行为的集合

#### 什么是对象

一类事物的具体体现	

#### 代码块

1. 普通块：定义在方法内（不管 是 静态 还是 普通方法），方法被调用时执行
2. 构造块：直接定义在类中，但是没有static，优先于构造器执行，晚于静态块执行
3. 静态块：定义在类中，且有static，最先被执行且对于一个类的多个对象，只执行一次
4. 同步块：synchronized关键字修饰，和线程相关

#### 静态导入

```java
import static java.lang.Math.*;//导入Math包下的所有的静态资源
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println(PI);//这样就可以直接使用Math类下的静态资源
    }
}
```

#### 可变形参

```java
public void test(int...b){
    System.out.println(b);
}
//[I@1540e19d
//可变形参是一个数组，所以输出的是一个数组的地址
```

1. 可变形参实际上是一个数组
2. 可变参数只能放在参数列表的最后面

### 方法重载

1. 只有方法名相同 
2. 参数列表不同（个数不同、类型顺序不同、类型不同）

重载使得同一个行为特征具有不同的表现形式

### 方法重写

1. 方法的重写发生在继承中，子类重写父类方法
2. 参数列表、返回值、方法名要一致
3. 被子类重写的方法，它的访问权限要大于等于父类方法的访问权限（如果父类是`protected`，子类重写方法修饰符只能是`protected`或者`public`）
4. 父类方法抛出异常，则子类在重写时，也要抛出异常，但是抛出异常类型要小于等于父类，不能大于父类的异常类型

### 封装

1. 高内聚，低耦合
2. 通过权限修饰符来控制

#### 权限修饰符

| 修饰符          | 本类 | 本包 | 其他 包子类 | 其他包非子类 |
| --------------- | ---- | ---- | ----------- | ------------ |
| private         | √    |      |             |              |
| 缺省（default） | √    | √    |             |              |
| protected       | √    | √    | √           |              |
| public          | √    | √    | √           | √            |

#### JavaBean

数据模型，是`Java`语言编写类的一种标准规范。符合`Javabean`的类，要求：

1. 类必须是具体的，公共的
2. 并且具有无参的构造方法
3. 成员变量私有化，并提供用来操作的成员变量的`get/set`方法

### 继承

资源的复用

### 多态

#### 向下转型

向上转型与向下转型都是针对于运行时类型，从始至终不会发生改变

向下转型就是使用子类独有的资源

向下转型的前提是向上转型

```java
class Animal{}
class Cat extends Animal{}
Animal animal = new Cat()
Cat cat = (Cat)animal
```

#### instanceof

判断左边的是否是右边的实例对象

### 引用类型

#### final

1. 数据被final修饰，则变成了常量
2. 方法参数被final修饰，该参数不可修改
3. 方法被final修饰，表示该方法不可被重载和重写
4. 类被修饰，表示该类不可被继承

#### Object类

#### 抽象类

抽象类就是为了继承而存在的

抽象方法只能存在于抽象类中

#### 接口

1. 接口中的抽象方法默认被 public abstract 修饰
2. 接口中的变量默认被 public static final 修饰
3. 接口中有默认方法，使用 public default 修饰
4. 接口中有静态方法，使用 public static

[抽象类与接口](https://juejin.cn/post/6970145897829105678#heading-7)

#### 枚举

### 包装类

**Java中的方法与JS中的方法基本一致**

包装类对应着基本类型

byte	short	int	long	float	double	char	boolean

Byte	Short	Integer	Long	Float	Double	Character	Boolean

包装类多出来的方法：

```java
//转换二进制：
Integer.toBinaryString(127);//1111111
```

#### 基本类型与包装类型之间的转换

1. 基本类型转包装类型

   ```java
   //通过构造器：
   Integer integer = new Integer(1)
   //通过valueOf方法
   Integer integer = Integer.valueOf(1)
   //自动装箱
   Integer integer = 1
   ```

   

2. 包装类型转基本类型

   ```java
   //通过 intValue
   int i = integer.intValue();
   //自动拆箱
   int i = integer;
   ```

3. 字符串转包装类型

   ```java
   String str = "123"
   Integer integer = Integer.parseInt(str,10)
   ```

### String

#### StringBuffer

1. 单线程，效率低
2. 底层采用`char[]`数组，默认长度是16

#### StringBuilder

1. 线程不安全，效率高
2. 底层采用`char[]`数组，默认长度是16

### 内部类

把一个类定义在类的内部，地位与属性和方法一致，可以被很多修饰符进行修饰

### 注解

1. @Override：重写注解
2. @Deprecated：过时的注解
3. @SuppressWarning：抑制警告

### JavaDoc生成API文档

### 异常

```java
Throwable：所有的异常的祖师爷
    Error：处理不了的异常
    Exception：程序员能处理的异常
```

1. throw：处理运行时异常
2. throws：处理编译时异常

### 多线程

Java 提供了三种创建线程的方法：

- 通过实现 Runnable 接口；
- 通过继承 Thread 类本身；
- 通过 Callable 和 Future 创建线程。

重写run方法，start启动线程

### 常用API

1. BigInteger：保存大的整数

2. BigDecimal：存储确切的小数

3. Date：

   1. 日期转字符串

      ```java
      //使用日期格式化类
      SimpleDateFormat simpleDateFormat = new SimpleDateFormat("YYYY-MM-dd hh");
      Date date = new Date();
      String str = simpleDateFormat.format(date);
      System.out.println(str);
      ```

      

   2. 字符串转日期

      ```java
      //使用日期格式化类
      Date date = new Date();
      SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh");
      System.out.println(simpleDateFormat.parse("2021-10-3 21:23:18"));
      ```

#### LocalDate

时间类

#### System

```java
Properties properties = System.getProperties();
properties.list(System.out);
```

#### IDEA 模板

Editor——》Live Templates

### 集合

#### List集合

`ArrayList、LinkedList`

1. **有序**添加
2. 元素可以**重复**

#### Set集合

`HashSet（无序，唯一）、LinkedHashSet（有序，添加顺序）、TreeSet（有序，自然顺序）`

1. **无序**输出
2. 元素**唯一**

#### Map集合

HasMap（key不允许重复）

## 设计模式

### 单例模式

 1. 饿汉模式

    一开始 创建类的时候，就把此对象创建出来

 2. 懒汉模式

    等到需要的时候，再次创建出来

