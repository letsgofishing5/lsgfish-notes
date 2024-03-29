import{_ as o,o as r,c as p,a as s,b as n,d as e,e as t,r as i}from"./app.54b132be.js";const c="/cesium-docs/assets/img/guide/ts-04.png",l="/cesium-docs/assets/img/guide/ts-03.png",d="/cesium-docs/assets/img/guide/ts-05.png",u={},k=t('<h2 id="\u5730\u5F62\u63D0\u4F9B\u8005\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5730\u5F62\u63D0\u4F9B\u8005\u793A\u4F8B" aria-hidden="true">#</a> \u5730\u5F62\u63D0\u4F9B\u8005\u793A\u4F8B</h2><p>\u4E0E\u5F71\u50CF\u7C7B\u4F3C\uFF0C\u5728Cesium\u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5730\u5F62\u63D0\u4F9B\u8005<code>TerrainProvider</code>\u7528\u4E8E\u52A0\u8F7D\u5404\u7C7B\u5730\u5F62\uFF0C\u622A\u6B622022\u5E744\u670812\u65E5\uFF0C\u5728Cesium 1.92\u7248\u672C\u4E2D\u5171\u67096\u79CD<code>TerrainProvider</code>\u5730\u5F62\u63D0\u4F9B\u8005\uFF08\u4E0D\u5305\u62EC\u63A5\u53E3<code>TerrainProvider</code>\uFF09\uFF1A</p><ul><li><code>ArcGISTiledElevationTerrainProvider</code>\uFF1A\u7531ArcGIS\u63D0\u4F9B\u7684\u5730\u5F62\u670D\u52A1\uFF1B</li><li><code>CesiumTerrainProvider</code>\uFF1A\u7531Cesium\u5B98\u65B9\u63D0\u4F9B\u7684\u5730\u5F62\u670D\u52A1\uFF1B</li><li><code>CustomHeightmapTerrainProvider</code>\uFF1A\u81EA\u5B9A\u4E49\u9AD8\u7A0B\u7684\u5730\u5F62\u670D\u52A1\uFF1B</li><li><code>EllipsoidTerrainProvider</code>\uFF1A\u9AD8\u7A0B\u4E3A 0 \u7684\u5730\u5F62\u670D\u52A1\uFF0C\u5982\u679C\u521D\u59CB\u5316\u65F6\u4E0D\u6307\u5B9A\u5730\u5F62\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u7684\u5C31\u662F\u4F7F\u7528\u7684\u8BE5\u5730\u5F62\u670D\u52A1\uFF1B</li><li><code>GoogleEarthEnterpriseTerrainProvider</code>\uFF1A\u7531GoogleEarth\u63D0\u4F9B\u7684\u5730\u5F62\u670D\u52A1\uFF1B</li><li><code>VRTheWorldTerrainProvider</code>\uFF1A\u7531VRTheWorld\u63D0\u4F9B\u7684\u5730\u5F62\u670D\u52A1\u3002</li></ul><p>\u7531\u4E8E\u7BC7\u5E45\u6709\u9650\uFF0C\u540E\u9762\u5C0F\u8282\u4E2D\u4EC5\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u7528\u7684<code>TerrainProvider</code>\u5730\u5F62\u63D0\u4F9B\u8005\u3002</p>',4),m={id:"arcgistiledelevationterrainprovider",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#arcgistiledelevationterrainprovider","aria-hidden":"true"},"#",-1),h={href:"https://cesium.com/learn/cesiumjs/ref-doc/ArcGISTiledElevationTerrainProvider.html?classFilter=ArcGISTiledElevationTerrainProvider#ArcGISTiledElevationTerrainProvider",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>\u52A0\u8F7DArcgis\u5730\u5F62\u670D\u52A1\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> terrainProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ArcGISTiledElevationTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> terrainProvider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u8F7D\u540E\u7684\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+c+'" alt="ts-04"></p>',4),b=s("details",{class:"custom-container details"},[s("summary",{class:"custom-container-title"},"\u70B9\u51FB\u67E5\u770B\u5728\u7EBF\u793A\u4F8B\uFF1AArcGISTiledElevationTerrainProvider"),s("br"),s("iframe",{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/terrain/ArcGISTiledElevationTerrainProvider.html",frameborder:"0"},`
 `)],-1),w={id:"cesiumterrainprovider",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#cesiumterrainprovider","aria-hidden":"true"},"#",-1),y={href:"https://cesium.com/learn/cesiumjs/ref-doc/CesiumTerrainProvider.html?classFilter=TerrainProvider#CesiumTerrainProvider",target:"_blank",rel:"noopener noreferrer"},T=t(`<p><code>CesiumTerrainProvider</code>\u7528\u4E8E\u52A0\u8F7D\u81EA\u884C\u53D1\u5E03\u7684\u5730\u5F62\u670D\u52A1\u6216\u5176\u4ED6\u5730\u5F62\u670D\u52A1\u5546\u53D1\u5E03\u7684\u5730\u5F62\u670D\u52A1\u3002</p><h3 id="\u81EA\u884C\u53D1\u5E03\u7684\u5730\u5F62\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u81EA\u884C\u53D1\u5E03\u7684\u5730\u5F62\u670D\u52A1" aria-hidden="true">#</a> \u81EA\u884C\u53D1\u5E03\u7684\u5730\u5F62\u670D\u52A1</h3><p>\u52A0\u8F7D\u81EA\u884C\u53D1\u5E03\u7684\u5730\u5F62\u670D\u52A1\u4EE3\u7801\u5982\u4E0B\uFF0C\u5176\u4E2D<code>https://localhost/terrain</code>\u4E3A\u5730\u5F62\u670D\u52A1\u7684<code>URL</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CesiumTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost/terrain&quot;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u706B\u661F\u79D1\u6280\u5730\u5F62" tabindex="-1"><a class="header-anchor" href="#\u706B\u661F\u79D1\u6280\u5730\u5F62" aria-hidden="true">#</a> \u706B\u661F\u79D1\u6280\u5730\u5F62</h3>`,5),f={class:"custom-container warning"},P=s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8v4"}),s("path",{d:"M12 16h.01"})])],-1),x=s("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),C={href:"http://mars3d.cn/editor.html?id=map/terrain/terrainProvider",target:"_blank",rel:"noopener noreferrer"},j={href:"http://mars3d.cn/",target:"_blank",rel:"noopener noreferrer"},E=t(`<p>\u52A0\u8F7D\u706B\u661F\u79D1\u6280\u5730\u5F62\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CesiumTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://data.marsgis.cn/terrain&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u8F7D\u540E\u7684\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+l+'" alt="ts-03"></p>',4),q=s("details",{class:"custom-container details"},[s("summary",{class:"custom-container-title"},"\u70B9\u51FB\u67E5\u770B\u5728\u7EBF\u793A\u4F8B\uFF1A\u706B\u661F\u79D1\u6280\u5730\u5F62"),s("br"),s("iframe",{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/terrain/CesiumTerrainProvider.html",frameborder:"0"},`
 `)],-1),V=s("h3",{id:"maptiler\u5730\u5F62",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#maptiler\u5730\u5F62","aria-hidden":"true"},"#"),n(" maptiler\u5730\u5F62")],-1),I={href:"https://www.maptiler.com/",target:"_blank",rel:"noopener noreferrer"},A=s("code",null,"key",-1),G=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> maptilerKey <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>
viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CesiumTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://api.maptiler.com/tiles/terrain-quantized-mesh/?key=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>maptilerKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">requestVertexNormals</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u8F7D\u540E\u7684\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+d+'" alt="ts-05"></p>',3),S={id:"customheightmapterrainprovider",tabindex:"-1"},H=s("a",{class:"header-anchor",href:"#customheightmapterrainprovider","aria-hidden":"true"},"#",-1),F={href:"https://cesium.com/learn/cesiumjs/ref-doc/CustomHeightmapTerrainProvider.html?classFilter=TerrainProvider#CustomHeightmapTerrainProvider",target:"_blank",rel:"noopener noreferrer"},M=t(`<p>\u52A0\u8F7D\u81EA\u5B9A\u4E49\u9AD8\u7A0B\u5730\u5F62\u7684\u4EE3\u7801\u5982\u4E0B\uFF0C\u901A\u8FC7\u56DE\u8C03\u51FD\u6570<code>callback</code>\u83B7\u53D6\u9AD8\u7A0B\uFF0C\u8FD9\u4E2A<code>TerrainProvider</code>\u7528\u7684\u5F88\u5C11\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token number">64</span>
<span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token number">64</span>
viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CustomHeightmapTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> level</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float32Array</span><span class="token punctuation">(</span>width <span class="token operator">*</span> height<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> yy <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> yy <span class="token operator">&lt;</span> height<span class="token punctuation">;</span> yy<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> xx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> xx <span class="token operator">&lt;</span> width<span class="token punctuation">;</span> xx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">+</span> yy <span class="token operator">/</span> <span class="token punctuation">(</span>height <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> level<span class="token punctuation">)</span>
        <span class="token keyword">let</span> heightValue <span class="token operator">=</span> <span class="token number">8000</span> <span class="token operator">*</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span><span class="token number">4000</span> <span class="token operator">*</span> v<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.5</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> yy <span class="token operator">*</span> width <span class="token operator">+</span> xx
        buffer<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> heightValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> buffer
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> width<span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> height<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),N=s("details",{class:"custom-container details"},[s("summary",{class:"custom-container-title"},"\u70B9\u51FB\u67E5\u770B\u5728\u7EBF\u793A\u4F8B\uFF1ACustomHeightmapTerrainProvider"),s("br"),s("iframe",{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/terrain/CustomHeightmapTerrainProvider.html",frameborder:"0"},`
 `)],-1),z={id:"ellipsoidterrainprovider",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#ellipsoidterrainprovider","aria-hidden":"true"},"#",-1),D={href:"https://cesium.com/learn/cesiumjs/ref-doc/EllipsoidTerrainProvider.html?classFilter=TerrainProvider#EllipsoidTerrainProvider",target:"_blank",rel:"noopener noreferrer"},L=t(`<p><code>EllipsoidTerrainProvider</code>\u662F\u9AD8\u7A0B\u4E3A 0 \u7684\u5730\u5F62\uFF0C\u82E5\u521D\u59CB\u5316\u65F6\u4E0D\u6307\u5B9A\u5730\u5F62\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u7684\u5C31\u662F\u4F7F\u7528\u7684\u8BE5\u5730\u5F62\u670D\u52A1\uFF0C\u52A0\u8F7D<code>EllipsoidTerrainProvider</code>\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipsoidTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function R(W,K){const a=i("ExternalLinkIcon");return r(),p("div",null,[k,s("h2",m,[v,n(),s("a",h,[n("ArcGISTiledElevationTerrainProvider"),e(a)])]),g,b,s("h2",w,[_,n(),s("a",y,[n("CesiumTerrainProvider"),e(a)])]),T,s("div",f,[P,x,s("p",null,[n("\u53C2\u8003"),s("a",C,[n("Mars3D \u5730\u5F62"),e(a)]),n("\uFF0C\u7248\u6743\u5F52"),s("a",j,[n("\u706B\u661F\u79D1\u6280"),e(a)]),n("\u6240\u6709\uFF0C\u5728\u6B64\u4EC5\u4F5C\u4E3A\u5B66\u4E60\u4EA4\u6D41\u6240\u7528\uFF0C\u4FB5\u5220\u3002")])]),E,q,V,s("p",null,[n("\u52A0\u8F7Dmaptiler\u5730\u5F62\u7684\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF0C\u9700\u8981\u8BBF\u95EE"),s("a",I,[n("maptiler\u5B98\u7F51"),e(a)]),n("\u6CE8\u518C\u8D26\u53F7\u83B7\u53D6"),A,n("\uFF1A")]),G,s("h2",S,[H,n(),s("a",F,[n("CustomHeightmapTerrainProvider"),e(a)])]),M,N,s("h2",z,[B,n(),s("a",D,[n("EllipsoidTerrainProvider"),e(a)])]),L])}const $=o(u,[["render",R],["__file","terrain-provider-example.html.vue"]]);export{$ as default};
