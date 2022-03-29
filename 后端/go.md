# 准备工作

### 安装环境

下载：https://golang.google.cn/dl/

然后安装，一直点下一步就行了

#### 查看是否安装成功

```bash
# 查看版本号
go version
```

#### 配置代理环境

```bash
#cmd下设置代理：
go env -w GOPROXY=https://goproxy.cn,direct
go env -w GO111MODULE=on
#或者如下命令，二者目的一样
set GO111MODULE=on
set GOPROXY=https://goproxy.cn,direct
```

#### 配置vscode编辑环境

1. 安装 go 插件
2. 在 vscode 中，按下：CTRL+shift+P 键，输入：go:install ，下面会自动搜索相关命令，我们选择`Go:Install/Update Tools`这个命令，选择全部安装
4. 设置代码片段快捷键，按下：CTRL+shift+P 键，输入 snippets，选择 Preferences:Configure User Snippets，然后再输入 go.json，选择 go.json 命令回车

#### 常用命令

1. go env
2. go run
3. go build
4. go build -o hello.exe  //给编译后的文件重命名



# GO

### 可见性

1. 声明在函数内部，是函数的本地值，类似private
2. 声明在函数外部，是对当前包可见(包内所有.go文件都可见)的全局值，类似protect
3. 声明在函数外部且首字母大写是所有包可见的全局值,类似public



## 数据类型

### 变量声明

```go
var bianliang string
var bl2 string = "字符串类型赋值"
var bl = "类型推导声明"
bl3 := "简化版声明变量并赋值，只能在函数内部使用"
var (
	bl4 = "批量变量声明"
    bl6 = 123
    bl7 = 123.456
)
const (
	pl = "常量批量声明"
    pl2 //常量批量声明如果不写值，则值同上
    
)
//iota:在const关键字出现的时候被重置为0，const中每新增一行常量声明将使 iota 计数一次（iota可以理解为const中的行索引）。使用iota能简化定义，在定义枚举时很有用
const (
	a1 = iota //iota = 0,自增
    a2 //a2=1
    a3 //a3=2
)
const (
	a1 = iota //iota = 0,自增
    a2 //a2=1
    _  //_是匿名变量的意思，表示不要
    a3 //a3=3
)
```

### 基本数据类型

整型、浮点型、复数、布尔值、字符串

#### 整型

##### 带符号

##### 不带符号

##### 特殊整形

| 类型    | 描述                                             |
| ------- | ------------------------------------------------ |
| uint    | 32位操作系统上就是uint32，64位操作系统就是uint64 |
| int     | 32位操作系统上就是int32，64位操作系统就是int64   |
| uintptr | 无符号整型，用于存放一个指针                     |

##### 进制

1. 八进制：0开头
2. 十六进制：0x开头

格式化输出进制数字

```go
fmt.Printf("%b",n)//输出二进制
fmt.Printf("%o",n)//输出八进制
fmt.Printf("%d",n)//输出十进制
fmt.Printf("%x",n)//输出十六进制
fmt.Printf("%f",n)//输出浮点数
fmt.Printf("%s",n)//输出字符串
fmt.Printf("%t",n)//输出布尔类型
fmt.Printf("%T",n)//输出值的类型
fmt.Printf("%v",n)//输出值，不管任何类型
fmt.Printf("%#v",n)//输出值，并表示类型，如果是字符串类型，会给字符串加个双引号

```

#### 浮点型

Go语言支持两种浮点型数：`float32`和`float64`

go语言中默认是`float64`位

```go
package main
import (
    "fmt"
)
func main() {
	f1  :=1.234
	fmt.Printf("%T\n",f1)
	f2 :=float32(f1) //float64转float32
	fmt.Printf("%T\n",f2)
    //float32不能转成float64
}
```

#### 复数

complex64 和complex128

#### bool布尔值

Go语言中以`bool`类型进行声明布尔型数据，布尔型数据只有`true（真）`和`false（假）`两个值。

**注意：**

1. 布尔类型变量的默认值为`false`。
2. Go 语言中不允许将整型强制转换为布尔型.
3. 布尔型无法参与数值运算，也无法与其他类型进行转换。

#### 字符串

1. go语言中字符串使用双引号包裹的
2. go语言中单引号包裹的是字符串

字节：一个 字节 =  8bit（8个二进制）

字符：单独的字母、汉字，符号表示一个字符

### 字符串的常用操作

|                方法                 |           介绍           | 用法                            |
| :---------------------------------: | :----------------------: | ------------------------------- |
|              len(str)               |          求长度          |                                 |
|           +或fmt.Sprintf            | 拼接字符串返回拼接的结果 | s3 := fmt.Sprintf("%s%s",s1,s2) |
|            strings.Split            |           分割           | strings.Split(s,",")            |
|          strings.contains           |       判断是否包含       |                                 |
| strings.HasPrefix,strings.HasSuffix |      前缀/后缀判断       |                                 |
| strings.Index(),strings.LastIndex() |      子串出现的位置      |                                 |
| strings.Join(a[]string, sep string) |         join操作         |                                 |

## 流程控制 

##### if判断

```go
if bool {
    fmt.Println("为真，怎么怎么样")
}else {
    fmt.Println("否则，怎么怎么样")
}

```

##### for循环

```go
//正常循环
for i:=0;i<5;i++{
    fmt.Println("i:",i)
}
//无限循环
for {
    fmt.Println("hello")
}
// for range 循环,遍历返回key-value
str:="hello"
for i,v :=range str{
    fmt.Printf("%d,%c",i,v)
}
```

##### switch

```go
func switchDemo1() {
	finger := 3
	switch finger {
	case 1:
		fmt.Println("大拇指")
	case 2:
		fmt.Println("食指")
	case 3:
		fmt.Println("中指")
	case 4:
		fmt.Println("无名指")
	case 5:
		fmt.Println("小拇指")
	default:
		fmt.Println("无效的输入！")
	}
}
//使用 fallthrough 会强制执行后面的 case 语句，fallthrough 不会判断下一条 case 的表达式结果是否为 true。
func switchDemo5() {
	s := "a"
	switch {
	case s == "a":
		fmt.Println("a")
		fallthrough
	case s == "b":
		fmt.Println("b")
	case s == "c":
		fmt.Println("c")
	default:
		fmt.Println("...")
	}
}
```

#####  goto、continue、break

```go
gotoTab:
fmt.Println("goto跳槽")
goto gotoTab

continueTab:
fmt.Println("continue跳槽")
continue continueTab

for i:=0;i<2;i++{
    if(i==1){
        break;
    }
}
```

## 数组

1.  数组在go中，**是值类型，不是引用类型**
2. 数组的长度是固定的，并且数组的长度属于类型的一部分

### 数组的声明

```go
var num1 [5]int{1,2,3,4}	//第一种，初始化声明
var num2 = [5]int{1,2,3,4}  //第二中，赋值声明
var num3 = [...]int{1,2,3,4}//第三种，根据赋值多少来决定数组长度
var num4 = [...]int{3:5,5:6}//第四种，根据下标来决定数组长度
```

##  切片 

1. 相当于一个可变长度的同类型元素数组，支持自动扩容
2. **切片是一个引用类型**，内部结构包含`地址`、`长度`和`容量`

### 切片声明

```go
var slice []T //初始化
var slice = make([]T,len,cap)//如果不给定容量，则容量与长度一致
```

### 切片表达式

```go
slice = arr[low:high:max]
//slice长度为：high - low
//slice容量为：max - low
```

### 切片的crud

> Go语言中并没有删除切片元素的专用方法，我们可以使用切片本身的特性来删除元素。要从切片a中删除索引为index的元素，操作方法是

```go
//添加
slice = append(slice,1,2,3)
//复制，复制元素，不是复制地址
copy(target,src)
//删除,a = append(a[:index], a[index+1:]...)
a := []int{30, 31, 32, 33, 34, 35, 36, 37}
// 要删除索引为2的元素
a = append(a[:2], a[3:]...)
fmt.Println(a) //[30 31 33 34 35 36 37]
//判断切片是否为空
len(slice) == 0
```

## map

> map是一种**无序**的基于`key-value`的数据结构，Go语言中的map是**引用类型，必须初始化才能使用**。

### map声明

```go
var val map[T]T //声明
val2 := map[string]bool{
    "name":true,
    "age":false
} //声明并赋值
//通过make函数生成
sourcMap := make(map[string]string,cap)
```

### 判断是否存在key

```go
sourceMap := map[string]string{
    "name":"张三"
}
value, ok := sourceMap["name"]
if ok{
    fmt.Printf("value:%v",value)
}
```

### 删除

```go
//delete
sourceMap := map[string]string{
    "name":    "张三",
    "age":     "23",
    "phone":   "13505657895",
    "address": "张家界狄磉偶第四大队",
    "qq":      "111235645",
}
fmt.Printf("删除age前：%v\n", sourceMap)
delete(sourceMap, "age")
fmt.Printf("删除age后：%v\n", sourceMap)
```

## 函数

### 函数定义

```go
func 函数名(参数) 返回值{
    函数体
}
```

1. 函数名：由字母、数字、下划线组成。但函数名的第一个字母不能是数字
2. 参数：参数由参数变量和参数变量的类型组成，多个参数之间使用`,`分隔
3. 返回值：返回值由返回值变量和其变量类型组成，也可以只写返回值的类型，多个返回值必须用`()`包裹，并用`,`分隔。
4. 函数体：实现指定功能的代码块

### 参数

```go
//参数简写
func fn1(x,y int){
    
}
//可变参数
func fn2(x ...int){
    
}
```

###  返回值

多返回值也支持类型简写

```go
//多返回值
func fn(){
    return x,y
}
//返回值命名
func fn1()(x,y int){
    x = 1,
    y = s
    return //这里不需要写上返回值名称，return即可返回声明过的返回值
}
```

###  变量作用域

##### 全局变量

全局变量是定义在函数外部的变量，它在程序整个运行周期内都有效。 在函数中可以访问到全局变量。

##### 局部变量

局部变量又分为两种： 函数内定义的变量无法在该函数外使用，

如果局部变量和全局变量重名，优先访问局部变量。

for循环定义的变量也只在for语句种生效

### defer语句

> Go语言中的`defer`语句会将其后面跟随的语句进行延迟处理。在`defer`归属的函数即将返回时，将延迟处理的语句按`defer`定义的逆序进行执行，也就是说，先被`defer`的语句最后被执行，最后被`defer`的语句，最先被执行。

##### defer执行时机

> 在Go语言的函数中`return`语句在底层并不是原子操作，它分为给返回值赋值和RET指令两步。而`defer`语句执行的时机就在返回值赋值操作后，RET指令执行前。
>
> **defer注册要延迟执行的函数时该函数所有的参数都需要确定其值**

###  panic与recover

> Go语言中目前（Go1.12）是没有异常机制，但是使用`panic/recover`模式来处理错误。 `panic`可以在任何地方引发，但`recover`只有在`defer`调用的函数中有效。 首先来看一个例子：

```go
func funcA() {
	fmt.Println("func A")
}

func funcB() {
	panic("panic in B")
}

func funcC() {
	fmt.Println("func C")
}
func main() {
	funcA()
	funcB()
	funcC()
}
```

> 程序运行期间`funcB`中引发了`panic`导致程序崩溃，异常退出了。这个时候我们就可以通过`recover`将程序恢复回来，继续往后执行。

```go
func funcA() {
	fmt.Println("func A")
}

func funcB() {
	defer func() {
		err := recover()
		//如果程序出出现了panic错误,可以通过recover恢复过来
		if err != nil {
			fmt.Println("recover in B")
		}
	}()
	panic("panic in B")
}

func funcC() {
	fmt.Println("func C")
}
func main() {
	funcA()
	funcB()
	funcC()
}
```

####  注意

1. `recover()`必须搭配`defer`使用。
2. `defer`一定要在可能引发`panic`的语句之前定义。

## 指针

#### 符号

```go 
&：取 值的地址
*：根据指针地址取指针指向的值
s := 1
fmt.Printf("s的地址：%p\n", &s)
```

### new与make

> 使用new函数得到的是一个类型的指针，并且该指针对应的值为该类型的零值。
>
> make也是用于内存分配的，区别于new，它只用于slice、map以及chan的内存创建，而且它返回的类型就是这三个类型本身，

```go
//new(T)*T
a := new(bool) //初始化引用类型
//make
make(t Type, size ...IntegerType) Type //初始化引用类型（map、slice、chan）
```

#### 区别

1. 二者都是用来做内存分配的。
2. make只用于slice、map以及channel的初始化，返回的还是这三个引用类型本身；
3. 而new用于类型的内存分配，并且内存对应的值为类型零值，返回的是指向类型的指针。

## 结构体struct

#### 自定义类型

> 通过`type`关键字的定义，`MyInt`就是一种新的类型，它具有`int`的特性。

```go
type MyInt int
```

#### 类型别名

> 类型别名规定：TypeAlias只是Type的别名，本质上TypeAlias与Type是同一个类型。就像一个孩子小时候有小名、乳名，上学后用学名，英语老师又会给他起英文名，但这些名字都指的是他本人。

```go
type MyInt = int
//我们之前见过的rune和byte就是类型别名，他们的定义如下：
type byte = uint8
type rune = int32
```



#### 实例化

```go
type 类型名 struct {
    字段名 字段类型
    字段名 字段类型
    …
}
//定义一个 Person （人）结构体
type person struct {
	name string
	city string
	age  int8
}
```

#### 匿名结构体

> 定义一些临时数据结构等场景下还可以使用匿名结构体

```go
var user struct{Name string; Age int}
user.Name = "小王子"
user.Age = 18
fmt.Printf("%#v\n", user)
```

### 方法和接收者

接收者分两种，一种是引用类型接收者，一种事值类型引用者

#### 方法声明 

```go
func(p Person) 方法名(参数列表) 返回参数{
    函数体
}
```

#### 结构体字段可见性

结构体中字段大写开头表示可公开访问，小写表示私有（仅在定义当前结构体的包中可访问）。

#### 结构体标签

```go
//Student 学生
type Student struct {
	ID     int    `json:"id" form:"id"` //通过指定tag实现json序列化该字段时的key，有多种类型时，用空格分开
	Gender string //json序列化是默认使用字段名作为key
	name   string //私有不能被json包访问
}
```



### json

```go
//序列号  go数据结构 -> json
data,err := json.Marshal(obj)
//反序列化 json-> go数据结构
err :=json.Unmarshal([]byte(data),obj)
```

## 包

##  接口

### 定义接口

> 接口就是一种数据类型
>
> 接口内部就是一堆方法的集合，
>
> 只要实现了接口里的所有方法，那么就可以认为两者是同一个类型的数据，从而达到多态的效果

```go
type 接口类型名 interface{
    方法名1( 参数列表1 ) 返回值列表1
    方法名2( 参数列表2 ) 返回值列表2
    …
}
```

> 例子

```go
package main

import "fmt"

type person struct {
}

func (p person) say() {
	fmt.Println("人说话了，啊啊啊")
}

type sayer interface {
	say()
}

func say(args sayer) {
	args.say()
}
func main() {
	p1 := person{}
	say(p1)
}
```

### 接口嵌套

```go
type sayer interface {
	say()
    mover//将mover接口嵌套进来，就相当于添加了mover中的方法
}
type mover interface {
	run()
}
```

## 反射reflect

#### 概念

> go 中，通过 reflect.Typeof() 可以获取**任意值**的**类型对象**
>
> 然后通过这个类型对象可以获取 类型的 Type 和 种类 Kind

```go
var num int32
tNum := reflect.Typeof(num)
fmt.Printf("type：%v，kind:%v\n", tNum.Name(), tNum.Kind())
//数组，切片，map，指针类型变量，他们的.Name()都返回空
```

> 通过 reflect.Valueof() 可以获取值的 类型对象

```go 
func reflectValueOf(x interface{}) {
    t := reflect.ValueOf(x)
    fmt.Printf("值：%v，类型：%T\n", t, t)
    fmt.Printf("获取值类型：%v\n", t.Kind())
}
```

#### 通过反射设置变量的值

需要传入地址类型（&num），然后通过Elem().SetInt(值)来设置值

```go
func reflectSetValue(x interface{}){
    t := reflect.ValueOf(x)
    if t.Elem().Kind() == reflect.Int
        t.Elem().SetInt(200)
    }
}
```

#### 个人总结反射

可以通过 `reflect.ValueOf()` 或 `reflect.TypeOf()` 来获取任意值的数据类型对象，而通过这个数据类型对象可以获取当前值`（Name）`和数据底层类型`（Kind）`

## 并发

### goroutine

go中，通过在函数前面添加一个 go 的声明则开启一个线程

```go
package main

func hello(){
    fmt.Println("hello")
}
func main(){
    go hello()
    fmt.Println("main")
}
```

#### 线程等待

使用 sync.WaitGroup

```go
var wg sync.WaitGroup
wg.Add(1)//添加一个标记
wg.Done()//减去一个标记
wg.Wait()//等到标记为0时，结束当前goroutine
```

#### 分配CPU核心数

```go
runtime.GOMAXPROCS(1)//默认是启动所有的核心数，可以自己设置
```

### channel

> chan是一个引用类型数据，声明chan后，需要使用make函数初始化后才可以使用 

#### 声明格式

```go
var ch chan int //声明一个传递整型的通道
ch := make(chan int)
```

#### 操作 

接收、发送、关闭

```go
//接受与发送都是通过 <- 符号来完成的
ch := make(chan int,2)//初始化一个chan,缓冲大小为2，
ch <- 10              //接收第一个值：10
ch <- 20			  //接收第二个值：20
x := <-ch			  //ch发送第一个值10 给 x
close(ch)			  //关闭ch通道
```

 #### 有无缓冲

初始化的时候给了容量，则是有缓冲，没给就是没有缓冲。

```go
ch1 := make(chan int,1)//有缓冲
ch2 := make(chan int)//无缓冲
```

#### 判断chan内的值是否输出结束

```go
ch := make(chan int,2)
ch <- 10
ch <- 20
for {
    v,ok := <- ch //判断ok是否为true，为true则没有输出结束
    if !ok {
        break;
    }
    fmt.Println("chan的值：",v)
}
```

#### select

> `select`的使用类似于switch语句，它有一系列case分支和一个默认的分支。每个case会对应一个通道的通信（接收或发送）过程。`select`会一直等待，直到某个`case`的通信操作完成时，就会执行`case`分支对应的语句。具体格式如下：

### 并发安全和锁

#### 互斥锁

使用 sync.Mutex 下的互斥锁

```go
package main

import (
	"fmt"
	"sync"
)

var x int64
var wg sync.WaitGroup
var lock sync.Mutex

func add() {
	for i := 0; i < 10000; i++ {
		lock.Lock()//加锁
		x = x + 1
		lock.Unlock()//解锁
	}
	wg.Done()
}
func main() {
	wg.Add(2)
	go add()
	go add()
	wg.Wait()
	fmt.Printf("x 的累计值：%v", x)
}
```

#### 读写互斥锁

使用 sync.RWMutex，来给读写分别执行加锁和解锁动作

```go
var rwlock sync.RWMutex
//给读执行加锁动作
rwlock.Rlock()
rwlock.RUnlock()
//给写执行加锁动作
rwlock.Lock()
rwlock.Unlock()

```

#### Map安全读写

使用 sync.Map

```go
var m sync.Map

```

## 网络

### 服务端流程

1. 开启服务端口
2. 循环监听端口，如果有请求则启动一个单独的goroutine去单独处理
3. 处理服务，读取流需要使用`[]byte`，处理完请求数据后 要关闭服务
