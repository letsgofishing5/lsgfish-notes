### github 开发者平台
    https://developer.github.com/

### axios安装&导入
    npm i axios
    import axios from "axios"

### 基本五种请求
#### get请求
    axios(config)
    axios(url,config)
    axios.get(url,config)
#### post请求
    axios(config)
    axios(url,config)
    axios.post(url,data,config)
#### put请求
    axios(config)
    axios(url,config)
    axios.put(url,data,config)
#### patch请求
    axios(config)
    axios(url,config)
    axios.patch(url,data,config)
#### delete请求
    axios(config)
    axios(url,config)
    axios.delete(url,config)

### 并发请求
    const body = await Promise.all([多个axios实例函数的执行结果])
    //body 数组 ; [第一个axios实例对应的结果,第二个axios实例对应的结果]

    axios.all([多个axios实例函数的执行结果]).then(axios.spread((a,b)=>{
        console.log(a); //a第一个axios实例对应的结果
        console.log(b); //b第二个axios实例对应的结果
     }))


### axios实例发送请求
    var axiosInstance = axios.create(config) //config:公共的config(实例级别)

    axiosInstance(config) //请求私有的config
    axiosInstance(url,config) //请求私有的config
    axiosInstance.get(url,config) //请求私有的config
    axiosInstance.post(url,data,config) //请求私有的config


### axios的全局配置 实例配置 私有配置
    全局配置 : axios.defaults.baseURL="https://api.a.com"
    实例配置 :
          var axiosIns = axios.create({
            baseURL:"https://api.b.com",
            timeout:100000
          })
    私有配置
         await axiosIns({
            baseURL:"https://api.c.com",
            url: '/repos/betterDamu/sh_200318/issues'
          })

    私有配置 > 实例配置 > 全局配置

### axios数据的响应结构
    {
      // `data` 由服务器提供的响应
      data: {},
      // `status` 来自服务器响应的 HTTP 状态码
      status: 200,
      // `statusText` 来自服务器响应的 HTTP 状态信息
      statusText: 'OK',
      // `headers` 服务器响应的头
      headers: {},
       // `config` 是为请求提供的配置信息
      config: {},
      // 'request'
      // `request` is the request that generated this response
      // It is the last ClientRequest instance in node.js (in redirects)
      // and an XMLHttpRequest instance the browser
      request: {}
    }

### axios拦截器
    实例&函数都可以拥有拦截器

    // 添加请求拦截器
    axiosInstance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
      });

    // 添加响应拦截器
    axiosInstance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response.data;
      }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      });

### config配置
    method:请求方式(默认get)
    baseURL:基地址(一定是要抽象成公共配置的)
    url   :后台接口的地址(不要包含基地址)
    data  :body数据;是一个对象(put patch post请求才能使用)
    params :url中的query数据;是一个对象(get delete put patch post请求才能使用)
    headers : 请求头
    timeout: 超时时间


###如何处理跨域(跨域请求到了后台 只是浏览器拒绝接受数据):
        1. jsonp
        2. cros
        3. 将静态资源服务器和后台接口服务器部署在同一个域的同一个端口
        4. 配代理!
            使用代理处理跨域的注意点
                1. 所有请求的baseURL中都不能把域指定死
                2. 在对应的静态资源服务器中配代理!
                    vue-cli脚手架去修改config/index.js.proxyTable
                    配跨单域
                        proxyTable:{
                            "/api":"真正接口的域(服务器的地址)"
                        }
                        发请求时 直接往 /api/path 上发
                    配跨多域
                        proxyTable:{
                            "/标识":{
                                target: "真正接口的域",
                                pathRewrite: {"^/标识" : ""}
                            }
                        }
                        发请求时 直接往  /标识/api/path 上发



### axios的二次封装
    1. 完成基本的配置化请求
    2. 抹平所有接口的传参差异
    3. 自定义配置项
        baseURL : 当前模块请求的基地址 字符串
        timeout : 当前模块请求的超时时间 数字
        corsUrl : 字符串 跨哪个域 结合dev-server中配置的代理字符串
        api     : 当前模块的请求的详细信息 对象
            api:{
               //key代表最终绑定到请求模块上的请求方法的名称
               //option:当前请求的信息
               key:option
            }
            option:
                url        : 请求的地址  字符串
                methods    : 请求的方法  字符串
                data       : 请求需要携带的数据 对象
                loading    : 请求是否需要loading图片 对象
                    need  是否启用loading图标
                    msgForLoaing loading文案
                    msgForSuccess 成功文案
                    msgForFail 失败文案
                isForm     : 请求体是否为formdata 布尔值
                hooks      :  钩子, 对象
                    beforeReq(){},
                    afterReqSuccess(data){},
                    afterReqFail(err){}
                token      : 函数 返回值是真正的token字符串


### 使用封装完的axios组件
    1. 复制一个模块
    2. 修改模块的config文件
    3. 注册新的模块