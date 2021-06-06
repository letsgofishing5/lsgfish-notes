###  config配置

```js
url:地址
method:(get,post,delete,patch,put)
data:（请求需要的数据：put、post、patch）
headers:存请求体（一般情况下要满足http协议的规范）
```

请求配置可写在

- 发送请求时

  ```js
  axios({
      url,
      method
  })
  ```

- 创建实例

  ```js
  const axios  = axios.create({
      baseURL,
      headers
  })
  ```

- 全局配置

  ```js
  axios.default.baseURL = ""
  ```

### 拦截器

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});
```

