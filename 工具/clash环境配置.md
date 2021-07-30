Clash 使用[YAML](https://yaml.org/)，*YAML Ain't Markup Language*，用于配置文件。YAML 被设计为易于计算机读取、写入和解释，并且通常用于精确的配置文件。在本章中，我们将介绍 Clash 的常见功能以及如何使用和配置它们。

Clash 的工作原理是打开 HTTP、SOCKS5 或本地的透明代理服务器。当请求或数据包进入时，Clash使用 VMess、Shadowsocks、Snell、Trojan、SOCKS5 或 HTTP 协议将数据包*路由*到不同的远程服务器（“节点”）。

# 所有配置选项

```
# HTTP(S) 代理服务器在本端
端口的端口： 7890

#本端SOCKS5代理服务器
的端口socks-port： 7891

# Linux 和 macOS 的透明代理服务器端口（重定向 TCP 和 TProxy UDP）
# redir-port: 7892

# Linux 的透明代理服务器端口（TProxy TCP 和 TProxy UDP）
# tproxy-port: 7893

# HTTP(S) 和 SOCKS5 服务器在同一端口
#混合端口：7890

#本地 SOCKS5/HTTP(S) 服务器的
身份验证#身份验证：
#   - "user1:pass1" 
#   - "user2:pass2"

#设置为 true 以允许从
#其他 LAN IP 地址
连接到本地服务器allow-lan : false

#这只适用于 `allow-lan` 为 `true` 
# '*': 绑定所有 IP 地址
# 192.168.122.11: 绑定单个 IPv4 地址
# "[aaaa::a8aa:ff:fe09:57d8]":绑定单个 IPv6 地址
bind-address : ' * '

#冲突路由器工作模式
# rule：基于规则的数据包路由
# global：所有数据包都将转发到单个端点
# direct：直接将数据包转发到 Internet
模式：规则

# Clash 默认将日志打印到 STDOUT 
# info / warning / error / debug / silent 
log-level : info

#当设置为 false 时，解析器不会将主机名转换为 IPv6 地址
ipv6 : false

# RESTful web API 监听地址
external-controller : 127.0.0.1:9090

#配置目录的相对路径或
放置一些静态 Web 资源的#目录
的绝对路径。冲突然后核心将＃服务于它在`的http：// {{外部控制器}} / ui`。
external-ui :文件夹

＃揭秘REST风格的API（可选）
＃身份验证通过spedifying HTTP头`授权：承载$ {秘密}` 
＃总是设置一个秘密，如果基于REST的API是在0.0.0.0听
＃秘密：“”

#出站接口名称
interface-name : en0

# DNS 服务器和连接建立的静态主机（如 /etc/hosts）
# 
#支持通配符主机名（例如 *.clash.dev, *.foo.*.example.com）
#非通配符域名具有更高的优先级比通配符域名
# eg foo.example.com > *.example.com > .example.com 
# PS +.foo.com 等于 .foo.com 和 foo.com 
hosts :
   # '*.clash.dev': 127.0.0.1 
  # '.dev': 127.0.0.1 
  # 'alpha.clash.dev': '::1'

profile :
   #将 `select` 结果存储在 $HOME/.config/clash/.cache 
  # set false 如果您不希望这种行为
  #当两个不同的配置具有相同名称的组时，选定的值是共享的
  store-选择：假

# DNS 服务器设置
#此部分是可选的。如果不存在，DNS 服务器将被禁用。
dns :
   enable : false 
  listen : 0.0.0.0:53 
  # ipv6: false # 当 false 时，对 AAAA 问题的响应将为空

  #这些名称服务器用于解析下面的 DNS 名称服务器主机名。
  #仅指定 IP 地址
  default-nameserver :
    - 114.114.114.114 
    - 8.8.8.8
  增强模式: redir-host #或 fake-ip 
  fake-ip-range : 198.18.0.1/16 #假 IP 地址池 CIDR 
  # use-hosts: true # 查找主机并返回 IP 记录
  
  #此列表中的主机名不会用假 IP 解析
  #即对这些域名的问题将始终用它们的
  #真实 IP 地址
  来回答# fake-ip-filter: 
  #    - '*.lan' 
  #    - localhost.ptlogin2.qq .com
  
  #支持UDP、TCP、DoT、DoH。您可以指定要连接的端口。
  #所有 DNS 问题都直接发送到名称服务器，无需代理
  #参与。Clash 使用收集的第一个结果回答 DNS 问题。
  名称服务器：
    - 114.114.114.114 #默认值
    - 8.8.8.8 #默认值
    - tls://dns.rubyfish.cn:853 # DNS over TLS 
    - https://1.1.1.1/dns-query # DNS over HTTPS

  ＃当`fallback`存在，DNS服务器将发送并发请求
  ＃的服务器在此节`nameservers`服务器一起。
  ＃当GEOIP国家从后备服务器的答案被用来
  ＃不是`CN`。
  #回退：
  #    - tcp://1.1.1.1

  #如果用`nameservers` 中的服务器解析的IP 地址在
  下面指定的#子网中，它们被认为是无效的，并且使用`fallback` 
  #服务器的
  结果。# 
  #当
  # `fallback-filter.geoip` 为真且IP 地址的GEOIP 为`CN` 时，
  使用`nameserver` 中的服务器解析的IP 地址。# 
  #如果`fallback-filter.geoip` 为false，则来自`nameserver` 域名服务器的结果
  #如果与`fallback-filter.ipcidr` 不匹配，则始终使用。
  # 
  #这是针对 DNS 污染攻击的对策。
  回退过滤器：
     geoip： true
    ipcidr :
       # - 240.0.0.0/4 
    # domain: 
    #    - '+.google.com' 
    #    - '+.facebook.com' 
    #    - '+.youtube.com'
  
  #通过特定域名服务器查找域名
  # nameserver-policy: 
  #    'www.baidu.com': '114.114.114.114' 
  #    '+.internal.crop.com': '10.0.0.1'

proxies :
   # Shadowsocks 
  #支持的密码（加密方法）：
  #    aes-128-gcm aes-192-gcm aes-256-gcm 
  #    aes-128-cfb aes-192-cfb aes-256-cfb 
  #    aes-128- CTR AES-192-CTR AES-256-CTR 
  ＃    RC4，MD5 chacha20-IETF xchacha20 
  ＃    chacha20-IETF-poly1305 xchacha20-IETF-poly1305 
  -名称：“ SS1 ”
    类型：SS
    服务器：服务器
    端口：443
    加密：chacha20-IETF -poly1305
    密码："密码" 
    # udp: true

  -名称：“ ss2 ”
    类型：ss
    服务器：服务器
    端口：443
    密码：chacha20-ietf-poly1305
    密码：“密码”
    插件：obfs 
    plugin-opts：
      模式：tls #或 http 
      #主机：bing.com

  -名称：“ ss3 ”
    类型：ss
    服务器：服务器
    端口：443
    密码：chacha20-ietf-poly1305
    密码：“密码”
    插件：v2ray-plugin 
    plugin-opts：
      模式：websocket #现在没有 QUIC 
      # tls：true # wss 
      # skip-cert-verify: true 
      # host: bing.com 
      # path: "/" 
      # mux: true 
      # headers: 
      #   自定义：值

  # vmess 
  #密码支持 auto/aes-128-gcm/chacha20-poly1305/none 
  -名称： “ vmess ”
    类型： vmess
    服务器：服务器
    端口： 443 
    uuid： uuid 
    alterId： 32
    密码： auto 
    # udp：true 
    # tls：true 
    # skip-cert-verify: true 
    # servername: example.com # 优先于 wss 主机
    # network: ws 
    # ws-path: /path 
    # ws-headers: 
    #   主持人：v2ray.com

  -名称：“ vmess-h2 ”
    类型：vmess
    服务器：服务器
    端口：443 
    uuid：uuid 
    alterId：32
    密码：自动
    网络：h2 
    tls：true 
    h2-opts：
      主机：
        - http.example.com 
        - http-alt.example.com
      路径：/
  
  -名称：“ vmess-HTTP ”
    类型：vmess
    服务器：服务器
    端口：443
    的uuid：UUID 
    alterId：32
    密码：自动
    ＃ UDP：真
    ＃网：HTTP 
    ＃ HTTP-OPTS： ＃
    ＃   方法： “GET” ＃
    ＃   路径：
    #    # - '/' 
    #    # - '/video' 
    #    # 标题：
    #    # 连接：
    #    # - 保持活动

  -名称：vmess-grpc
    服务器：服务器
    端口：443
    类型：vmess 
    uuid：uuid 
    alterId：32
    密码：自动
    网络：grpc 
    tls：true 
    servername：example.com 
    # skip-cert-verify：true 
    grpc-opts：
       grpc-service -名称：“示例”

  ＃ SOCKS5 
  -名称： “袜子”
    类型： SOCKS5
    服务器：服务器
    端口： 443 
    ＃用户名：用户名
    ＃密码：密码
    ＃ TLS：真
    ＃跳过证书，验证：真
    ＃ UDP：真

  # http 
  - name : " http "
     type : http 
    server : server 
    port : 443 
    # username: username 
    # password: password 
    # tls: true # https 
    # skip-cert-verify: true 
    # sni: custom.com

  ＃斯内尔
  ＃要注意的是目前尚无UDP支持尚未
  -名称： “斯内尔”
    类型：斯内尔
    服务器：服务器
    端口： 44046 
    PSK： yourpsk 
    ＃版本：2 
    ＃ obfs-OPTS： 
      ＃模式：HTTP＃或TLS 
      ＃主持人：兵。电脑

  # Trojan 
  - name : " trojan "
     type : trojan 
    server : server 
    port : 443 
    password : yourpsk 
    # udp: true 
    # sni: example.com # aka server name 
    # alpn: 
    #    - h2 
    #    - http/1.1 
    # skip-cert-验证：真实

  -名称：trojan-grpc
    服务器：服务器
    端口：443
    类型：特洛伊木马
    密码：“ example ”
    网络：grpc 
    sni：example.com 
    # skip-cert-verify：true 
    udp：true 
    grpc-opts：
       grpc-service-name：”例子“

  ＃ ShadowsocksR 
  ＃支持的加密算法（加密方法）：在不锈钢全流密码
  ＃支持的obfses： 
  ＃   普通http_simple HTTP_POST 
  ＃    random_head tls1.2_ticket_auth tls1.2_ticket_fastauth 
  ＃支持的支持协议：
  ＃   起源auth_sha1_v4 auth_aes128_md5 
  ＃    auth_aes128_sha1 auth_chain_a auth_chain_b   
  -名称： “ ssr ”
    类型： ssr
    服务器：服务器
    端口： 443
    密码： chacha20-ietf
    密码: “密码”
     obfs : tls1.2_ticket_auth
    协议: auth_sha1_v4 
    # obfs-param: domain.tld 
    # protocol-param: "#" 
    # udp: true

proxy-groups :
   #中继链接代理。代理不应包含中继。不支持 UDP。
  #流量：冲突 <-> http <-> vmess <-> ss1 <-> ss2 <-> Internet 
  -名称：“中继”
    类型：中继
    代理：
      - http 
      - vmess 
      - ss1 
      - ss2

  # url-test 通过对 URL 的速度进行基准测试来选择将使用哪个代理。
  -名称： “自动”
    类型： url-test
    代理：
      - SS1 
      - SS2 
      - vmess1 
    ＃公差：150 
    ＃懒：真实
    URL：' http://www.gstatic.com/generate_204 '
    间隔：300

  # fallback 按优先级选择可用的策略。通过访问 URL 来测试可用性，就像自动 url-test 组一样。
  -名称： “后备自动”
    类型：后备
    代理：
      - ss1 
      - ss2 
      - vmess1
    网址：' http
     : //www.gstatic.com/generate_204 '间隔：300

  # load-balance：同一个eTLD+1的请求会拨号到同一个proxy。
  -名称： “负载平衡”
    类型：负载平衡
    代理：
      - ss1 
      - ss2 
      - vmess1 
    url：' http
     : //www.gstatic.com/generate_204 '间隔：300 
    #策略：一致散列#或循环

  # select 用于选择代理或代理组
  #您可以使用 RESTful API 切换代理，建议在 GUI 中使用。
  -名称：代理
    类型：选择
    # disable-udp：真正的
    代理：
      - ss1 
      - ss2 
      - vmess1 
      -自动
  
  -名称：UseProvider
    类型：选择
    使用：
      - provider1
    代理：
      -代理
      -直接

代理提供商：
   provider1：
    类型：HTTP 
    URL：“ URL ”
    间隔：3600
    路：./provider1.yaml
    健康检查：
      启用：真
      间隔：600 
      ＃懒：真
      网址：http://www.gstatic.com/ generate_204
  测试：
    类型：文件
    路径：/test.yaml
    健康检查：
      启用：真实
      间隔：36000
      网址：http : //www.gstatic.com/generate_204

规则：
  - DOMAIN-SUFFIX,google.com,auto 
  - DOMAIN-KEYWORD,google,auto 
  - DOMAIN,google.com,auto 
  - DOMAIN-SUFFIX,ad.com,REJECT 
  - SRC-IP-CIDR,192.168.1.201/32,DIRECT 
  # IP 规则（GEOIP、IP-CIDR、IP-CIDR6）的可选参数“no-resolve” 
  - IP-CIDR,127.0.0.0/8,DIRECT 
  - GEOIP,CN,DIRECT 
  - DST-PORT,80,DIRECT 
  - SRC -PORT,7777,DIRECT 
  - RULE-SET,apple,REJECT # Premium only 
  - MATCH,auto
```

# 指定配置目录

如果没有另外指定，默认情况下，Clash 会读取`$HOME/.config/clash/config.yaml`. 如果它不存在，Clash 将生成默认设置。

您可以使用命令行选项`-d`来指定配置目录：

```
$ clash -d . # current directory
$ clash -d /etc/clash
```

您可以使用命令行选项`-f`来指定配置：

```
$ clash -f ./config.yaml # current directory
$ clash -f /etc/clash/config.yaml
```

# 句法

- IPv6 地址应该用`[`和包裹`]`。例如：`[aaaa::a8aa:ff:fe09:57d8]`。

- 通配符。请注意，任何带有这些字符的域都应该用单引号括起来

  ```
  '
  ```

  。

  - `*`: 单级通配符。`*.google.com`匹配`www.google.com`但不匹配`foo.bar.google.com`。可以使用`*.*.*.google.com`.
  - `+`: 多级通配符。`+.google.com`匹配`google.com`,`www.google.com`和`foo.bar.google.com`。这与`DOMAIN-SUFFIX`.

# 域名系统

Clash 附带的 DNS 服务器旨在最大限度地减少 DNS 污染攻击的影响并提高网络性能。它有两种工作模式：`redir-host`和`fake-ip`。两者最大的区别在于IP地址的解析方式以及连接的建立方式。

## 重定向主机

这更像是代理如何工作的传统方式。在此模式下，根据`dns.nameserver`、`dns.fallback`和 中的设置`dns.fallback-filter`，目标 FQDN 以几种不同的方式解析。Clash DNS 模块收到的第一个结果将被发送回客户端。客户端然后可以通过 Clash 建立到所述 IP 地址的连接。

## 假IP

“假IP”地址的概念起源于[RFC 3089](https://tools.ietf.org/rfc/rfc3089)：

> “假IP”地址用作查找相应“FQDN”信息的键。

当 DNS 请求发送到 DNS 服务器时，Clash 会在假 IP 地址池中分配一个免费的*假 IP 地址*，这是一个管理 FQDN 和“假 IP”地址之间映射的映射表。请注意，虚假 IP 地址池中的 IP 地址不应用于实际通信。池的默认 CIDR 是保留的 IPv4 地址空间`198.18.0.1/16`，可以在`dns.fake-ip-range`.

然后 Clash 将查找 FQDN 并检查 IP 地址的 GEOIP，这仅适用于规则（如 GEOIP）。当对上述“假 IP”地址的请求发送到 Clash 时，Clash 通过 SOCKS5、Shadowsocks（或其他协议）服务器与与“假 IP”链接的 FQDN 建立连接。

# 代理组

代理组是一组代理，您可以利用 Clash 的一些特殊功能来管理和使用它们。

- `relay`: 发送到该代理组的请求将依次通过指定的代理服务器进行中继。目前对此没有 UDP 支持。指定的代理服务器不应包含另一个中继。
- `url-test`：Clash 对列表中的每个代理服务器进行基准测试，通过这些服务器定期向指定的 URL 发送 HTTP HEAD 请求。可以设置最大容差值、基准测试间隔和目标 URL。
- `fallback`: Clash 使用相同的机制定期测试列表中服务器的可用性`url-test`。将使用第一个可用的服务器。
- `load-balance`：对同一个 eTLD+1 的请求将使用同一个代理进行拨号。
- `select`：默认情况下，Clash 启动时使用第一台服务器。用户可以选择与 RESTful API 一起使用的服务器。在这种模式下，您可以在配置中硬编码服务器或使用[Proxy Providers](https://github.com/Dreamacro/clash/wiki/Configuration#proxy-providers)。

# 代理提供商

代理提供程序使用户能够动态加载代理服务器列表，而不是在配置文件中对其进行硬编码。当前有两个来源可供代理提供程序加载服务器列表：

- `http`: Clash 在启动时从指定的 URL 加载服务器列表。如果`interval`设置了该选项，Clash 会定期从远程拉取服务器列表。
- `file`: Clash 在启动时从文件系统上的指定位置加载服务器列表。

健康检查可用于两种模式，并且与`fallback`代理组中的工作方式完全相同。服务器列表文件的配置格式也与主配置文件完全相同：

```
# config.yaml 
proxy-providers :
   provider1 :
     type : http 
    url : " url "
     interval : 3600 
    path : ./provider1.yaml 
    health-check :
       enable : true 
      interval : 600 
      # lazy: true 
      url : http://www. gstatic.com/generate_204
  测试：
    类型：文件
    路径： /test.yaml
    健康检查：
      启用：真实
      间隔：36000
      网址：http : //www.gstatic.com/generate_204
# test.yaml
代理：
  -名称：“ ss1 ”
    类型：ss
    服务器：服务器
    端口：443
    密码：chacha20-ietf-poly1305
    密码：“密码”

  -名称：“ ss2 ”
    类型：ss
    服务器：服务器
    端口：443
    密码：chacha20-ietf-poly1305
    密码：“密码”
    插件：obfs 
    plugin-opts：
      模式：tls
  
  # ……
```

# 规则

可用关键字：

- `DOMAIN`:`DOMAIN,www.google.com,policy`只路由`www.google.com`到`policy`.
- `DOMAIN-SUFFIX`：将`DOMAIN-SUFFIX,youtube.com,policy`任何以`youtube.com`、`www.youtube.com`或结尾的 FQDN 路由`foo.bar.youtube.com`到`policy`。这就像通配符一样工作`+`。
- `DOMAIN-KEYWORD`：将`DOMAIN-KEYWORD,google,policy`任何包含`google`，例如`www.google.com`或 的FQDN 路由`googleapis.com`到`policy`。
- `GEOIP`: 将`GEOIP,CN,policy`任何对中国 IP 地址的请求路由到`policy`.
- `IP-CIDR`：将`IP-CIDR,127.0.0.0/8,DIRECT`任何数据包路由`127.0.0.0/8`到`DIRECT`策略。
- `IP-CIDR6`: 将`IP-CIDR6,2620:0:2d0:200::7/32,policy`任何数据包路由`2620:0:2d0:200::7/32`到`policy`.
- `SRC-IP-CIDR`：将`SRC-IP-CIDR,192.168.1.201/32,DIRECT`任何数据包**从** 策略路由`192.168.1.201/32`到`DIRECT`。
- `SRC-PORT`: 将`SRC-PORT,80,policy`任何数据包**从**端口 80路由到`policy`.
- `DST-PORT`: 将`DST-PORT,80,policy`任何数据包路由**到**端口 80 到`policy`.
- `PROCESS-NAME`:`PROCESS-NAME,nc,DIRECT`将进程路由`nc`到`DIRECT`. (支持 macOS、Linux、FreeBSD 和 Windows)
- `MATCH`:`MATCH,policy`将其余的数据包路由到`policy`. 这条规则是**必需的**。

还有两个额外的特殊政策：

- `DIRECT`: 直接连接到目标，不涉及任何代理
- `REJECT`：数据包的黑洞。Clash 不会处理此策略的任何 I/O。

策略可以是`DIRECT`、`REJECT`、代理组或代理服务器。

## 没有解决

`no-resolve`是一个额外的选项`GEOIP`，`IP-CIDR`或`IP-CIDR6`规则。附加`,no-resolve`到这些规则以启用。Clash 在遇到 IP 规则时默认将域名转换为 IP 地址。当遇到具有 FQDN 目标的数据包时，冲突会跳过启用此选项的 IP 规则。