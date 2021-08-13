## 配置环境变量

1. GOPATH：保存的是以后项目的存放目录GO
2. GOROOT：保存的是安装包的目录
3. Path：go的bin目录
4. 在步骤一的GOPATH目录中，新建：src、pkg、bin

#### 常用命令

1. go env
2. go run
3. go build
4. go build -o hello.exe  //给编译后的文件重命名

### go开发目录

#### 个人使用

![image-20210729173558067](go_img/image-20210729173558067.png)

#### 多人

![image-20210729173742892](go_img/image-20210729173742892.png)

#### 企业

![image-20210729173757561](go_img/image-20210729173757561.png)

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

#### 整形

##### 带符号

##### 不带符号

##### 特殊整形

| 类型    | 描述                                             |
| ------- | ------------------------------------------------ |
| uint    | 32位操作系统上就是uint32，64位操作系统就是uint64 |
| int     | 32位操作系统上就是int32，64位操作系统就是int64   |
| uintptr | 无符号整型，用于存放一个指针                     |

#### 进制

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
fmt.Printf("%v",n)//输出值，不管任何类型
fmt.Printf("%#v",n)//输出值，并表示类型，如果是字符串类型，会给字符串加个双引号
fmt.Printf("%T",n)//类型检查

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
