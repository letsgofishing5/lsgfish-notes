## 安装

...待整理

## Hello World

### 初始化项目

```bash
# 初始化项目，并生成一个 go.mod 文件，用来描述项目基本信息与依赖管理
go mod init hello-golang
```

### 创建main.go文件并打印hello world

```go
package main //声明当前包

import ’fmt'

func main(){
    fmt.Print("Hello golang")
}
```

### 运行程序

```bash
# go run 命令跟上需要运行的文件名
go run main.go
```



## 变量

### 声明变量

```go
func main(){
    //声明常量
    const constant = 10;//使用关键字 const 声明常量
    //声明变量
    var useName string//初始化指定 string 类型
    var valiable = 10;//使用关键字 var 声明变量
    valiable := 123//字面量声明 字面量语法：当前电脑是64位则为64位，电脑为32位，则为32位
}
```

## 基本数据类型

### 整型

![image-20221205221458710](./go_youtube.assets/image-20221205221458710.png)

![image-20221205221858707](./go_youtube.assets/image-20221205221858707.png)

```go
num := 18
fmt.Printf("num值：%v,类型：%T\n", num, num)
fmt.Printf("size:%v", unsafe.Sizeof(num))
```

#### 类型转换

go语言中只有强转类型，没有隐式转换，高位向低位转换要注意不能超出低位类型范围

```go
var num1 int16 = 130
//高向低转换（错误，超出低位类型范围）
fmt.Println(int8(num1))//得出的值超出预期
```

### 浮点型

浮点类型默认是 float64

#### 精度丢失

引入第三方包解决

### bool 布尔类型

Go语言中以bool类型进行声明布尔型数据，布尔型数据只true(真)和false(假)两个值。
注意：
1.布尔类型变量的默认值为false。
2.G0语言中不允许将其他类型强制转换为布尔型
3.布尔型无法参与数值运算，也无法与其他类型进行转换。

### 字符串

Go 语言中，默认使用的是 UTF-8

#### 字符串拼接

1. 通过 + 拼接
2. resStr :=  fmt.Sprintf("%v", str)，把打印的结果字符串返回给变量

#### 多行字符串

定义多行字符串时，需要用反引号

```go
str := `
	hello gay
	你好呀 兄弟
	`
fmt.Println(str)
```



### byte 与 rune

组成每个字符串的元素叫做“字符”，可以通过遍历字符串元素获得字符。字符用单引号包裹起来

Go 语言中，字符有两种类型

1. uint8，或者叫 byte ，代表一个ASCII 的字符
2. rune，代表一个 UTF-8 字符

当需要处理中文、日文或者其他复合字符时，则需要用到rune类型。rune类型实际是一个 int32。
Go使用了特殊的 rune 类型来处理 Unicode ,让基于 Unicode 的文本处理更为方便，也可以使用 byte 型进行默认字符串处理，性能和扩展性都有照顾。

一个汉子占用3个字节(utf-8)，一个字母占用一个字节

#### 处理汉字与字母共存打印错误问题

```go
func main() {
	s := "你好 go"
	for i := 0; i < len(s); i++ { // 使用 byte 处理
		fmt.Printf("%v(%c)", s[i], s[i])
	}
	fmt.Println()
	fmt.Println("分隔符")
	for _, value := range s { //range 使用 rune 处理
		fmt.Printf("%v(%c)", value, value)
	}
}
```

#### 修改字符串

要修改字符串，需要先将其转换成**[]rune**或**[]byte**,完成后再转换为**string**。无论哪种转换，都会重新分配内存，并复制字节数组。

```go
func main() {
	s := "hello"
	fmt.Printf("s改变前打印：%v\n", s)
	rune8 := []byte(s)
	rune8[0] = 'H'
	s = string(rune8)
	fmt.Printf("s改变后打印：%v\n", s)

	s2 := "你好"
	fmt.Printf("s2改变前打印：%v\n", s2)
	rune32 := []rune(s2)
	rune32[0] = '我'
	s2 = string(rune32)
	fmt.Printf("s2改变后打印：%v\n", s2)
}
```

## 基本类型转换

### 数值类型转换

注意：转换时建议低位转高位，整形转浮点型

```go
//整形与整形之间转换
var num1 int8 = 12
var num2 int16 = 120
var num3 = int16(num1) + num2
//浮点型与浮点型之间转换
var f1 float32 = 3.14
var f2 float64 = 6.18
var f3 = float64(f1) + f2
//浮点型与整形之间转换
var num int8 = 10
var f float32 = 3.14
var fn = float32(num) + f
```

### 其他类型转string

```go
//方式一 ：通过 Sprintf
func main(){
    num := 100
    f := 3.14
    b := true
    by := 'a'
    strNum := fmt.Sprintf("%d", num)
    fmt.Printf("strNum:%v\n", strNum)
    strF := fmt.Sprintf("%f", f)
    fmt.Printf("strF:%v\n", strF)
    strB := fmt.Sprintf("%t", b)
    fmt.Printf("by:%v\n", strB)
    strBy := fmt.Sprintf("%c", by)
    fmt.Printf("strBy:%v\n", strBy)
}

//方式二 ：通过strconv格式化转换
func main() {
    num := 100
    f := 3.14
    b := true
    by := 'a'
    /**
	参数1：要格式化变量
	参数2：格式化的类型
	*/
    strNum := strconv.FormatInt(int64(num), 10)
    fmt.Printf("strNum:%v\n", strNum)
    /**
	参数1：要格式化的变量
	参数2：格式化类型
			'f' (常用的小数类型)
			'b' (二进制类型)
			'e' (十进制指数)
			'E' (十进制指数)
			'g' (指数很大时用 'e' 格式，否则 'f' 格式)
			'G' (指数很大时用 'E' 格式，否则 'f' 格式)
	参数3：保留的小数点
	参数4：格式化的类型
			64 或 32
	*/
    strF := strconv.FormatFloat(f, 'f', 2, 64)
    fmt.Printf("strF:%v\n", strF)
    strB := strconv.FormatBool(b)
    fmt.Printf("by:%v\n", strB)
    strBy := strconv.FormatUint(uint64(by), 10)
    fmt.Printf("strBy:%v\n", strBy)
}

```

### string 转其他类型

```go
func main(){
    str := "1234"
    //string 转 int
    num, ok := strconv.ParseInt(str, 10, 16)
    if ok == nil {
        fmt.Printf("num:%v", num)
    } else {
        fmt.Println("转换错误", ok)
    }
	//string 转 float
    f, ok := strconv.ParseFloat(str, 64)
    if ok == nil {
        fmt.Printf("f:%f", f)
    } else {
        fmt.Println("转换错误", ok)
    }
}
```

## 运算符

算术运算符
关系运算符
逻辑运算符
位运算符
赋值运算符

| 运算符 | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| +      | 相加                                                         |
| -      | 相减                                                         |
| *      | 相乘                                                         |
| /      | 相除。即被整除的数 100 / 9 = 11                              |
| %      | 求余。即被整除后剩余的数 100 % 9 = 1                         |
| ++、-- | 自增与自减，在Go语言中是单独的语句，并不是运算符，<br />1. 不能参与赋值运算： num := i++ （错误，不能参与赋值运算）<br />2. 没有前置运算：++i   （错误，只有后置++ 、--） |

### 位运算符

位运算符对整数在内存中的二进制位进行操作

| 运算符 | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| &      | 参与运算的两数各对应的二进制位相与（两位均为1 才为 1）       |
| \|     | 参与运算的两数各对应的二进制位相与（两位有一个为 1 就为 1）  |
| ^      | 参与运算的两数各对应的二进制位相异，或当两对应的二进制位相异时，结果为 1（两位不一样则为 1） |
| <<     | 左移n位就是乘以2的n次方。“a<<b”是把a的各二进位全部左移b位，高位丢弃，低位补0。 |
| >>     | 右移n位就是除以2的n次方。“a>>b”是把a的各二进位全部右移b位。  |

```go
func main(){
    a := 5                         //二进制 101
    b := 2                         //二进制 010
    fmt.Printf("a|b:,%v\n", a|b)   //二进制 000     二进制两位都为1才为1，十进制：0
    fmt.Printf("a&b:,%v\n", a&b)   //二进制 111		二进制一位为1则为1，十进制：7
    fmt.Printf("a^b:,%v\n", a^b)   //二进制 111		两位不同则为1，十进制：7
    fmt.Printf("a<<b:,%v\n", a<<b) // 5 * 2的2次方  101向左进两位，低位补0 10100 十进制：20
    fmt.Printf("a>>b:,%v\n", a>>b) // 5 / 2的2次方  101向右进两位，高位补0 001	 十进制：1
}
```

## 流程控制

### 循环

```go
// for无限循环
for{
    fmt.Println("无线循环执行")
}

// for范围循环
for index,value : range slice {
    fmt.Print(index)
    fmt.Print(value)
}
// for条件循环
for len(slice)<50{
    fmt.Println("当slice长度小于50时，执行循环语句")
}
```

#### break、continue

break：终止当前语句并跳出循环

continue：跳过当前循环执行下一个循环语句

### switch

```go
func main() {
	str := "你好"
    
    //基础用法
	switch str {
	case "nihao":
		fmt.Println("nihao")
	case "你好呀":
		fmt.Println("你好")
	default:
		fmt.Println("default")
	}
    
    
    //一个分支多个值，多个case值可以使用英文逗号分隔
	switch str {
	case "nihao":
		fmt.Println("nihao")
        break//break可以写也可以不写
	case "你好呀","你好":
		fmt.Println("你好")
	default:
		fmt.Println("default")
	}
   
    
    //分支后面可以使用表达式
    num := 59
	switch num {
	case num>60:
		fmt.Println("及格了")
        break//break可以写也可以不写
	case num<60:
		fmt.Println("不及格")
	default:
		fmt.Println("刚好60分")
	}
    
    // case 穿透
	switch str {
	case "nihao":
		fmt.Println("nihao")
        fallthrough//只会穿透一层case，不会多层穿透
	case "你好呀":
		fmt.Println("你好")
	default:
		fmt.Println("default")
	}
    
}
```



### Array

值类型

声明数组

```go
func main(){
    var arr [10]string//声明一个长度为10的字符串数组
}
```

### slice

引用类型

声明切片

```go
func main(){
    var sli []string
}
```

切片的增删改

```go
func main(){
    var sli = []string{}
    sli = append(sli,"hello")//增
}
```

### map

引用类型

```go
//定义map[key]value
var m1 map[string]string//声明map类型变量
var m2 = make(map[string]string)//通过make内建方法创建map
//只要创建map，就需要make函数，
var m3 = make([]map[string]string,1)//创建一个map集合，需要为 m3 集合指定一个集合初始值大小，这是一个动态集合（slice），后期可以自动扩展数据
```

### 结构体 struct

```go
type User struct {
    name string
    age uint8
}
func main(){
    user := User{
        name = "张三",
        age:16
    }
}
```



### 内置函数

#### 长度

```go
len(varible)//查询varible变量的长度
```

#### 追加

```go 
slice = append(slice,ele)//将ele追加到slice中
```

### 数据类型默认值

| 数据类型 | 默认值 | 类型    |
| -------- | ------ | ------- |
| bool     | false  |         |
| float    | 0      | float64 |
| int      | 0      | int     |



## 打印 Print

### 换行打印

```go
func main(){
	fmt.Println("hello world")
}
```

### 格式化打印

```go
func main(){
	const constant = 10
	fmt.Printf("hello %v",constant)
}

//%v 默认格式打印
//%T 输入数据类型
//%d 十进制输出
//%o 八进制输出
//%b 二进制输出
//%x 十六进制输出
//%f 输出浮点型，与%v的打印区别在于 %f 会输出6位小数位
//%.2f 输出浮点型，保存两位小数
//%c 输出字符，原样输出字符
//%t 输出布尔值
```



### 开关switch

```go
func main(){
    city := "大连"
    switch city{
        case "大连":
        //执行代码

        default:
        fmt.Println("无匹配条件执行语句")
    }
}
```

## package分包

同一个文件夹下文件属于同一个包，他们的包名相同，如果需要引入自定义的包的方法，只需要在 go.mod 文件中，找到 module 关键字声明的字段，以它为根路径，拼接上包名即可

```go
//导入demo包下的Tdemo方法
package main

import "hello-golang/demo"

func main() {
	demo.Tdemo()
}
```



# 总结

1. go只有类型强转
2. 布尔值不能与其他类型互换（没意义）
3. string与其他类型转换可以通过 Sprintf，或者 strconv 包，进行转换

## 练手demo

### 询问demo

```go
package main

import "fmt"

func main() {
	var (
		userName string
		age      uint8
		phone    uint64
		address  string
	)

	fmt.Println("请输入你的姓名")
	fmt.Scan(&userName)
	fmt.Println("请输入你的年龄")
	fmt.Scan(&age)
	fmt.Println("请输入你的手机号码")
	fmt.Scan(&phone)
	fmt.Println("请输入地址")
	fmt.Scan(&address)
	fmt.Printf("姓名：%v，年龄：%v，手机号：%v，地址：%v", userName, age, phone, address)
}
```



### 协程与主程序退出等待

```go 
package main

import (
	"fmt"
	"sync"
	"time"
)

type User struct {
	name string
	age  uint8
}

var wg = sync.WaitGroup{}

func main() {
	var (
		name string
		age  uint8
	)
	fmt.Println("请输入姓名")
	fmt.Scan(&name)
	fmt.Println("请输入年龄")
	fmt.Scan(&age)
	wg.Add(1)
	go createUser(name, uint(age))
	wg.Wait()
}
func createUser(name string, age uint) {
	time.Sleep(2 * time.Second)
	user := User{
		name: name,
		age:  uint8(age),
	}
	fmt.Printf("用户信息：%v\n", user)
	wg.Done()
}
```

