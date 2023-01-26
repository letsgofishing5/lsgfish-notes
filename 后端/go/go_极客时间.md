## 单元测试

1. 文件名要以 _test结尾：demo_test.go

2. 测试方法名要以 Testxxx 命名

   ```go
   func TestDemo(t *testing.T) {
   	fmt.Println("执行测试方法")
   }
   ```





## 命令行参数

通过 os.Args 获取命令行参数

```bash
go run . hello 命令行参数
```

示例代码

```go
func main() {
	fmt.Println("命令行参数：", os.Args)
	fmt.Println("命令行参数通过下标去取值：", os.Args[1])
}
```



## 赋值

go语言可以在一句代码中对多个变量进行赋值

```go
func TestFZ(t *testing.T) {
	var (
		a = 10
		b = 20
	)
	fmt.Printf("a:%v,b:%v\n", a, b)
	a, b = b, a
	fmt.Printf("a:%v,b:%v\n", a, b)
}
```

