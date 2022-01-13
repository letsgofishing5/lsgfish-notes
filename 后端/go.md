## 配置环境变量

1. GOPATH：保存的是以后项目的存放目录GO
2. GOROOT：保存的是安装包的目录
3. Path：go的bin目录
4. 在步骤一的GOPATH目录中，新建：src、pkg、bin

#### 配置vscode编辑环境

1. 安装 go 插件
2. cmd下设置代理：go env -w GOPROXY=https://goproxy.cn,direct
3. 在 vscode 中，按下：CTRL+shift+P 键，输入：go:install ，下面会自动搜索相关命令，我们选择`Go:Install/Update Tools`这个命令，选择全部安装
4. 设置代码片段快捷键，按下：CTRL+shift+P 键，输入 snippets，选择 Preferences:Configure User Snippets，然后再输入 go.json，选择 go.json 命令回车

#### 常用命令

1. go env
2. go run
3. go build
4. go build -o hello.exe  //给编译后的文件重命名

## IDE -vsCode

### 插件

1. Go

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
//fallthrough语法可以执行满足条件的case的下一个case，是为了兼容C语言中的case设计的。
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
var slice []T
```

### 切片表达式

```go
arr := [4]int{1,2,3,4}
s := arr[:3]

```

