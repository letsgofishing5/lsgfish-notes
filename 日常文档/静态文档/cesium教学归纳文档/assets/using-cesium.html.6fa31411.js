import{_ as o,o as c,c as i,a as s,b as n,d as a,e as t,r as p}from"./app.54b132be.js";const l="/cesium-docs/assets/img/guide/hc-01.png",r="/cesium-docs/assets/img/guide/hc-02.png",u="/cesium-docs/assets/img/guide/hc-03.png",d="/cesium-docs/assets/img/guide/hc-04.png",m="/cesium-docs/assets/img/guide/hc-05.png",h="/cesium-docs/assets/img/guide/hc-06.png",k="/cesium-docs/assets/img/guide/hc-07.png",g="/cesium-docs/assets/img/guide/hc-08.png",_={},v=s("div",{class:"custom-container warning"},[s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8v4"}),s("path",{d:"M12 16h.01"})])]),s("p",{class:"custom-container-title"},"\u6CE8\u610F"),s("p",null,"\u672C\u6587\u5047\u8BBE\u8BFB\u8005\u6709\u4E00\u5B9A\u7684\u524D\u7AEF\u57FA\u7840\u3002")],-1),x=s("h2",{id:"\u4E0B\u8F7Dcesium\u5230\u672C\u5730",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E0B\u8F7Dcesium\u5230\u672C\u5730","aria-hidden":"true"},"#"),n(" \u4E0B\u8F7DCesium\u5230\u672C\u5730")],-1),C={href:"https://cesium.com/platform/cesiumjs/",target:"_blank",rel:"noopener noreferrer"},f=t('<p><img src="'+l+'" alt="hc-01"></p><p>\u518D\u70B9\u51FB\u201CDOWNLOAD CESIUMJS\u201D\uFF1A</p><p><img src="'+r+'" alt="hc-02"></p><p>\u6CE8\u610F\uFF0C\u7531\u4E8ECesium\u7684\u670D\u52A1\u5668\u4F4D\u4E8E\u56FD\u5916\uFF0C\u76F4\u63A5\u4E0B\u8F7D\u7684\u8BDD\u901F\u5EA6\u5F88\u6162\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0B\u8F7D\u540E\u590D\u5236\u4E0B\u8F7D\u94FE\u63A5\uFF0C\u7136\u540E\u5728\u8FC5\u96F7\u4E2D\u65B0\u5EFA\u4E0B\u8F7D\u4EFB\u52A1\u7C98\u8D34\u4E0B\u8F7D\u94FE\u63A5\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E0B\u8F7D\u901F\u5EA6\u4F1A\u5FEB\u5F88\u591A\u3002\u63A5\u4E0B\u6765\u521B\u5EFACesium\u9879\u76EE\u76EE\u5F55\uFF0C\u5982\u65B0\u5EFA\u6587\u4EF6\u5939\u201CCesiumExample185\u201D\uFF0C\u518D\u89E3\u538B\u4E0B\u8F7D\u5B8C\u6210\u540E\u7684\u201CCesium-1.85.zip\u201D\u6587\u4EF6\uFF0C\u5C06\u89E3\u538B\u6587\u4EF6\u5939\u4E2D\u7684<code>build</code>\u6587\u4EF6\u5939\u4EE5\u53CA<code>Apps/HelloWorld.html</code>\u6587\u4EF6\u590D\u5236\u5230\u6587\u4EF6\u5939\u201CCesiumExample185\u201D\u4E2D\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="'+u+'" alt="hc-03"></p><h2 id="cesium\u76EE\u5F55\u7ED3\u6784\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#cesium\u76EE\u5F55\u7ED3\u6784\u5206\u6790" aria-hidden="true">#</a> Cesium\u76EE\u5F55\u7ED3\u6784\u5206\u6790</h2><p><code>Build</code>\u6587\u4EF6\u5939\u4E0B\u5305\u542B\u5982\u4E0B\u4E09\u4E2A\u5B50\u6587\u4EF6\u5939\uFF1A</p><ul><li><code>Cesium</code>\uFF1ACesium\u4E2D\u7684\u8D44\u6E90\u53CA\u4EE3\u7801 <ul><li><code>Assets</code>\uFF1ACesium\u4E2D\u7684\u9759\u6001\u8D44\u6E90\uFF0C\u5305\u62EC\u56FE\u7247\u6570\u636E\u53CAJSON\u6570\u636E</li><li><code>Scene</code>\uFF1A\u81EA\u5B9A\u4E49\u7740\u8272\u5668\u6307\u5357\uFF0C\u65B0\u624B\u53EF\u4EE5\u76F4\u63A5\u5FFD\u7565\u3002</li><li><code>ThirdParty</code>\uFF1ACesium\u4E2D\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u5E93\u3002</li><li><code>Widgets</code>\uFF1ACesium\u4E2D\u7684CSS\u6837\u5F0F\u6587\u4EF6\u3002</li><li><code>Workers</code>\uFF1ACesium\u6838\u5FC3\u5DE5\u4F5C\u4EE3\u7801\u3002</li></ul></li><li><code>CesiumUnminified</code>\uFF1A\u540C\u4E0A\uFF0C\u533A\u522B\u662F\u8BE5\u6587\u4EF6\u5939\u4E0B\u7684\u4EE3\u7801\u90FD\u662F\u672A\u7ECF\u8FC7\u538B\u7F29\uFF08Unminified\uFF09\u7684\u3002</li><li><code>Documentation</code>\uFF1ACesium\u7684API\u6587\u6863\u3002</li></ul><h2 id="\u65B9\u6CD51-\u5FEB\u901F\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD51-\u5FEB\u901F\u642D\u5EFA" aria-hidden="true">#</a> \u65B9\u6CD51\uFF1A\u5FEB\u901F\u642D\u5EFA</h2><p>\u4E0B\u8F7D\u5E76\u5B89\u88C5VS Code\uFF0C\u5728\u4FA7\u8FB9\u680F\u7684\u63D2\u4EF6\u4E00\u680F\u4E2D\u5B89\u88C5\u63D2\u4EF6\u201CLive Server\u201D\uFF1A</p><p><img src="'+d+'" alt="hc-04"></p><p>\u901A\u8FC7VS Code\u6253\u5F00\u4E4B\u524D\u521B\u5EFA\u7684\u201CCesiumExample185\u201D\u6587\u4EF6\u5939\uFF0C\u53F3\u952E\u201DHelloWorld.html\u201C\u6587\u4EF6\uFF0C\u70B9\u51FB\u201DOpen with Live Server\u201C\uFF1A</p><p><img src="'+m+'" alt="hc-05"></p><p>\u70B9\u51FB\u540E\u201DLive Server\u201C\u4F1A\u81EA\u52A8\u5F00\u542F\u4E00\u4E2A\u7AEF\u53E3\u53F7\u4E3A5500\u7684\u670D\u52A1\uFF0C\u5E76\u4F1A\u7531\u672C\u673A\u7684\u9ED8\u8BA4\u6D4F\u89C8\u5668~\u6253\u5F00\uFF0C\u80FD\u591F\u770B\u5230Cesium\u521B\u5EFA\u7684\u865A\u62DF\u5730\u7403\uFF1A</p><p><img src="'+h+'" alt="hc-06"></p><h2 id="\u65B9\u6CD52-\u624B\u52A8\u521B\u5EFA\u670D\u52A1\u5668\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD52-\u624B\u52A8\u521B\u5EFA\u670D\u52A1\u5668\u642D\u5EFA" aria-hidden="true">#</a> \u65B9\u6CD52\uFF1A\u624B\u52A8\u521B\u5EFA\u670D\u52A1\u5668\u642D\u5EFA</h2>',16),w={class:"custom-container warning"},b=s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8v4"}),s("path",{d:"M12 16h.01"})])],-1),S=s("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),N={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},j=t('<p>\u6253\u5F00\u6587\u4EF6\u5939\u201CCesiumExample185\u201D\uFF0C\u6253\u5F00\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8F93\u5165<code>npm i express</code>\u5B89\u88C5<code>express</code>\u670D\u52A1\u5668\uFF0C\u5B89\u88C5\u5B8C\u6210\u540E\u63D0\u793A\u5982\u4E0B\uFF1A</p><p><img src="'+k+`" alt="hc-07"></p><p>\u5728\u6587\u4EF6\u5939\u201CCesiumExample185\u201D\u4E0B\u521B\u5EFA\u6587\u4EF6<code>server.js</code>\uFF0C\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">App listening at port 8080</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u542B\u4E49\u662F\u5C06\u6587\u4EF6\u5939\u201CCesiumExample185\u201D\u4F5C\u4E3A\u4E00\u4E2A\u670D\u52A1\u53D1\u5E03\uFF0C\u76D1\u542C\u7684\u7AEF\u53E3\u4E3A8080\u7AEF\u53E3\uFF0C\u5728\u547D\u4EE4\u884C\u8F93\u5165<code>node server.js</code>\u5373\u53EF\u6253\u5F00\u8BE5\u670D\u52A1\uFF0C\u518D\u5728\u6D4F\u89C8\u5668\u8F93\u5165 http://localhost:8080/helloworld.html \u5373\u53EF\u6253\u5F00\u9879\u76EE\uFF1A</p><p><img src="`+g+'" alt="hc-08"></p>',6);function E(y,L){const e=p("ExternalLinkIcon");return c(),i("div",null,[v,x,s("p",null,[n("\u6253\u5F00"),s("a",C,[n("Cesium\u5B98\u7F51"),a(e)]),n("\uFF0C\u5728\u9875\u9762\u4E0B\u65B9\u627E\u5230\u201CStart building your 3D globe app\u201D\uFF0C\u518D\u70B9\u51FB\u4E0B\u65B9\u7684\u201CDOWNLOAD NOW\u201D\u3002")]),f,s("div",w,[b,S,s("p",null,[n("\u4EE5\u4E0B\u64CD\u4F5C\u9700\u8981\u5728Node\u73AF\u5883\u4E0B\u8FD0\u884C\uFF0C\u82E5\u6CA1\u6709\u5B89\u88C5Node\uFF0C\u8BF7\u8BBF\u95EE"),s("a",N,[n("Node\u5B98\u7F51"),a(e)]),n("\u4E0B\u8F7D\u5B89\u88C5\u3002")])]),j])}const W=o(_,[["render",E],["__file","using-cesium.html.vue"]]);export{W as default};
