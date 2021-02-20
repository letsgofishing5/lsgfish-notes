# 常见疑难杂症问题

#####  同源策略

1.1.1 所谓同源是指**"协议+域名+端口"**三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。同源策略/SOP（Same origin policy）是一种约定，由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，现在所有支持 JavaScript 的浏览器都会使用这个策略。如果缺少了同源策略，浏览器很容易受到 XSS、 CSFR 等攻击。

{1} 比如一个web应用，用户访问的页面，处理页面的请求的controller都是在同一个contextPath下的，无论在页面上请求AController还是BController，页面、A、B都是同源的，所处的空间位于同一个contextPath下。

{2} 同源策略是为了安全，确保一个应用中的资源只能被本应用的资源访问。否则，岂不是谁都能访问。

1.1.2 什么是源？

{1} 源（origin）就是协议、域名和端口号。

[1] 若地址里面的协议、域名和端口号均相同则属于同源。

{2} 以下是相对于 [http://www.a.com/test/index.html](https://link.zhihu.com/?target=http%3A//www.a.com/test/index.html) 的同源检测

[1] [http://www.a.com/dir/page.html](https://link.zhihu.com/?target=http%3A//www.a.com/dir/page.html) ----成功，port默认是80

[2] [http://www.child.a.com/test/index.html](https://link.zhihu.com/?target=http%3A//www.child.a.com/test/index.html) ----失败，域名不同

[3] [https://www.a.com/test/index.html](https://link.zhihu.com/?target=https%3A//www.a.com/test/index.html) ----失败，协议不同

[4] [http://www.a.com:8080/test/index.html](https://link.zhihu.com/?target=http%3A//www.a.com%3A8080/test/index.html) ----失败，端口号不同

[5] [http://www.domain.com/a.js](https://link.zhihu.com/?target=http%3A//www.domain.com/a.js) [http://192.168.4.12/b.js](https://link.zhihu.com/?target=http%3A//192.168.4.12/b.js) 虽然域名指向的ip和ip相同，也不是同源，因为域名不同。

##### 跨域

##### 如何解决跨域

