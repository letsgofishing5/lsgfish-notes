## ProtoBuf

### 安装protobuf

https://github.com/protocolbuffers/protobuf/releases/

解压，配置bin目录环境变量

### 安装grpc-gateway插件

https://github.com/grpc-ecosystem/grpc-gateway

使用vscode编辑器，可以配置**bash终端。**执行文档中的命令即可

然后在vscode编辑器中安装 **proto 插件（vscode-proto3)**

### grpc官网文档

https://doc.oschina.net/grpc?t=58008

### HelloWorld

```protobuf
syntax = "proto3";
package coolcar;
option go_package="coolcar/proto/gen/go;trippb";

message Trip{
    string start = 1;
    string end = 2;
    int64 duration_sec = 3;
    int64 fee_cent = 4;
}

```

编译命令

```bash
# -I=编译的文件路径
# --go_out= 表示编译成go文件代码
#	paths= 表示编译到哪个目录底下，
#			source_relative: 表示路径是相对路径
# trip.proto 表示要编译的文件的名称
protoc -I=. --go_out=paths=source_relative:gen/go trip.proto
```

