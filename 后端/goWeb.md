## http服务

```go
func httpHandFunc(w http.ResponseWriter, r *http.Request){
    fmt.Fprintln(w,"Hello Go")
}
func main(){
    http.HandleFunc("/hello",httpHandFunc)
    err := http.ListenAndServe(":61998",nil)
    if err != nil{
        fmt.println("server fail,reason:",err)
    }
}
```

## Gin框架

#### 引入gin

```cmd
#cmd 下载
go get -u github.com/gin-gonic/gin
```

#### 导入gin

```go
package main
import "github.com/gin-gonic/gin"
func main(){
    //获取一个gin默认路由引擎
    r := gin.Default()
    //gin 使用的方法
    r.Get("/hello",func(c *gin.Context){
        c.JSON(http.State,)
    })
}
```

### template模板

模板文件，通常使用 {{ . }} 来代表变量，如果需要取出单独的某个变量，则使用 {{ .变量名 }}
