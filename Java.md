# Java

## IDEA详细配置

https://blog.csdn.net/qq_39816581/article/details/105384973

## String类



## 集合

#### 比较器



## IO流

### 字节流-InputStream

1. read();

   > read()无参数方法，他的返回值是获取的字节本身的大小，a就是97，b就是98……

2. read(byte[]);

   > read(byte[])，加入字节数组，返回值是获取的字节数量

![read方法存储字节数组内存demo](C:\Users\cth\Pictures\Camera Roll\IO流read方法存储demo.png)

所有，我们在输出流write的时候，需要加上最后获取的**byte.length**

```java
InputStream is = new FileInputStream("D:\\桌面\\1.txt");
        OutputStream os = new FileOutputStream("D:\\桌面\\2.txt");
        int readCount = 0;
        byte[] b = new byte[4];
        while ((readCount=is.read(b))!=-1)
        {
           os.write(b,0,readCount);
        }
        os.close();
        is.close();
```



### 标准输出流

```java
 PrintStream ps = new PrintStream(new FileOutputStream("被输出的地址",true));//标准输出流声明，true代表输出的内容追加
        System.setOut(ps);//改变输出流方向
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss SSS");
        String format = sdf.format(new Date());
        System.out.println(format+":完成了"+msg+"数据备份");
```



## 注解

### 自定义注解

> 格式：public @interface 注解名{}
>
> 参数格式：参数 类型 + 参数名（）；
>
> 1. 例：String name（）；如果有默认值;String name（）default "默认值"；

1. @Override：定义在java.long 包下，重写注解

2. @Deprecated：定义在java.long包下，已过时

3. @SuppressWarnings()；该注解需要添加参数 才可以正常使用，镇压警告，可以用在类上，也可以用在方法上

   > 参数
   >
   > - @SuppressWarnings（“all”）
   > - @SuppressWarnings（“unchecked”）
   > - @SuppressWarnings（value={“unchecked”，“deprecation”}）等等

### 元注解

1. @Target：用于描述注解的使用范围
2. @Retention：表示需要在什么级别保存该注释信息，用于描述注解的生命周期（**（SOURCE<CLASS<RUNTIME）**）
3. @Document：说明注解将被包含在javadoc中
4. @Inherited：说明子类可以继承父类中的该注解

> **注意**：如果**value**值只有一个，那么可以省略**value**直接写值

## 多线程

##### 多线程的三大特性

1. **原子性：**即一个操作或者多个操作 要么全部执行并且执行的过程不会被任何因素打断，要么就都不执行。

2. **可见性：**是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值。

   > **volatile**：保证可见性与有序性，但是不保证原子性，保证原子性需要借助synchronized这样的锁机制

3. **有序性：**即程序执行的顺序按照代码的先后顺序执行。

##### 停止线程

1. 设置一个标记：boolean flag = true;
2. sleep休眠，并不会释放锁

##### 设置守护线程

```java
Thread thread = new Thread(new Test());
thread.setDaemon(true);
```

##### 线程池

1. Executors：工具类，线程池的工厂类，用于创键并返回不同类型的线程池

2. ExecutorService：真正的线程池接口。常见子类：ThreadPoolExecutor

   - void execute(Runnable command)：执行任务/命令，没有返回值，一般用来执行Runable
   - <T>Future<T> submit(Callable<T> task)：执行任务，没有返回值，一般又来执行Callable
   - void shutdown()；关闭连接池

   ```java
   public class Test(){
   	public static void main(String[] args){
           //创建线程池，newFixedThreadPool 参数为：线程池大小
           ExecutorService service = Executors.newFixedThreadPool(10);
           //执行
           service.exectue(new TestThread());
           service.exectue(new TestThread());
           service.exectue(new TestThread());
           //关闭连接
           service.shutdown();
       }
   }
   class TestThread implements Runnable{
       @override
       public void run(){
           System.out.println(Thread.currentThread().getName());
       }
   }
   ```

   

## 排序算法

##### 冒泡排序

```java
    int t=0;
    int [] a={15,25,6,23,11,66,4,36,35,9};
    for (int i=0;i<a.length-1;i++)
    {
        for(int j=i+1;j<a.length;j++)
        {
            if (a[i]>a[j]) 
            {
                t=a[i];
                a[i]=a[j];
                a[j]=t;
            }
        }

    }
    for(int i=0;i<a.length;i++){
        System.out.print(a[i]+",");
    }
```

##### 选择排序

```java
	int [] a={15,25,6,23,11,66,4,36,35,9};
    int t=0,n=0;
    for (int i=0;i<a.length-1;i++)
    {
        t=i;
        for(int j=i+1;j<a.length;j++)
        {
            if (a[t]<a[j]) 
            {
                t=j;
            }
        }
        n=a[i];
        a[i]=a[t];
        a[t]=n;
    }
    for(int i=0;i<a.length;i++){
        System.out.print(a[i]+",");
    }
```

