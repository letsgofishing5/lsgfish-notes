import{_ as p,o,c as l,a as n,b as s,d as e,e as t,r as i}from"./app.54b132be.js";const c="/cesium-docs/assets/img/advance/gltf-01.png",r={},u=t('<h2 id="gltf-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#gltf-\u7B80\u4ECB" aria-hidden="true">#</a> glTF \u7B80\u4ECB</h2><p>\u56FE\u50CF\u5E93\u4F20\u8F93\u683C\u5F0F\uFF08Graphic Library Transmission Format, glTF\uFF09\u672C\u8D28\u4E0A\u662F\u4E00\u79CDJSON\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u63CF\u8FF0\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\u7684\u573A\u666F\u7684\u7ED3\u6784\u548C\u7EC4\u62103D\u6A21\u578B\u3002\u6B64\u6587\u4EF6\u7684\u9876\u7EA7\u5143\u7D20\u5305\u62EC\uFF1A</p><ol><li>scenes, nodes\uFF1A\u573A\u666F\u7684\u57FA\u672C\u7ED3\u6784\uFF1B</li><li>cameras\uFF1A\u573A\u666F\u7684\u89C6\u89D2\u914D\u7F6E\uFF1B</li><li>meshes\uFF1A3D\u5BF9\u8C61\u7684\u51E0\u4F55\u4FE1\u606F\uFF1B</li><li>buffers, bufferViews, accessors\uFF1A\u6570\u636E\u5F15\u7528\u548C\u6570\u636E\u5E03\u5C40\u63CF\u8FF0\uFF1B</li><li>materials\uFF1A\u5B9A\u4E493D\u5BF9\u8C61\u7684\u6E32\u67D3\u65B9\u5F0F\uFF1B</li><li>textures, images, samplers\uFF1A3D\u5BF9\u8C61\u7684\u5916\u89C2\u4FE1\u606F\uFF1B</li><li>skins\uFF1A3D\u5BF9\u8C61\u7684\u9876\u70B9\u6750\u8D28\u4FE1\u606F\uFF1B</li><li>animations\uFF1A\u52A8\u753B\uFF0C\u5373\u968F\u65F6\u95F4\u53D8\u5316\u7684\u5C5E\u6027\u3002</li></ol><p>\u4E0A\u8FF0\u5143\u7D20\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><p><img src="'+c+'" alt="gltf-01"></p><p>\u66F4\u591A\u5173\u4E8EglTF\u6587\u4EF6\u7684\u7EC4\u7EC7\u65B9\u5F0F\u548C\u7ED3\u6784\u53EF\u4EE5\u67E5\u9605\u5B98\u65B9\u6587\u6863\uFF1A</p>',6),d={href:"https://www.khronos.org/files/gltf20-reference-guide.pdf",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#foreword",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"\u901A\u8FC7\u4E0A\u8FF0\u7B80\u4ECB\uFF0C\u53EF\u4EE5\u4E86\u89E3\u5230glTF\u5177\u6709\u7279\u6027\u5341\u5206\u4E30\u5BCC\uFF0C\u4E0D\u4EC5\u63CF\u8FF0\u4E863D\u573A\u666F\u7684\u6574\u4E2A\u5185\u5BB9\uFF0C\u8FD8\u80FD\u5305\u542B\u52A8\u753B\u5C5E\u6027\u3002\u4F46glTF\u7684\u6700\u5927\u4F18\u52BF\u5728\u4E8EWebGL\u7AEF\u7684\u6027\u80FD\uFF0CglTF\u683C\u5F0F\u662F\u7531OpenGL\u7EC4\u7EC7\u63A8\u51FA\u7684\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u5F62\u6210\u4E00\u79CD\u901A\u7528\u7684\u3001\u9002\u7528\u4E8E\u5B9E\u65F6\u6E32\u67D3\u76843D\u683C\u5F0F\u3002glTF\u5B58\u50A8\u7740OpenGL\u6E32\u67D3\u56FE\u5F62\u6240\u9700\u7684\u9876\u70B9\u5750\u6807\u3001\u6CD5\u7EBF\u5750\u6807\u3001\u8D34\u56FE\u7EB9\u7406\u5750\u6807\u548C\u9876\u70B9\u5750\u6807\u989C\u8272\u7B49\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u6B63\u662FOpenGL\u7AEF\u6E32\u67D33D\u56FE\u5F62\u76F4\u63A5\u6240\u9700\u7684\u4FE1\u606F\uFF0C\u56E0\u6B64\u79F0glTF\u662F\u9762\u5411\u7EC8\u70B9\u7684\u3002\u7531\u4E8EWebGL\u662F\u57FA\u4E8EOpenGL ES\u7684\uFF0C\u56E0\u6B64glTF\u683C\u5F0F\u4E5F\u662F\u4E3AWebGL\u91CF\u8EAB\u6253\u9020\u7684\uFF0CglTF\u662F\u6700\u9002\u5408WebGL\u7684\u6A21\u578B\u683C\u5F0F\u3002",-1),v=n("h2",{id:"glb-\u7B80\u4ECB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#glb-\u7B80\u4ECB","aria-hidden":"true"},"#"),s(" glb \u7B80\u4ECB")],-1),b=n("p",null,"glTF\u6587\u4EF6\u6709\u4E24\u79CD\u62D3\u5C55\u6587\u4EF6\u5F62\u5F0F\uFF1A",-1),g=n("ol",null,[n("li",null,".gltf\uFF08JSON / ASCII\uFF09\uFF1A\u81EA\u5305\u542B\u7684\uFF0C\u4E5F\u53EF\u80FD\u5F15\u7528\u5916\u90E8\u4E8C\u8FDB\u5236\u548C\u7EB9\u7406\u8D44\u6E90\uFF1B"),n("li",null,".glb\uFF08Binary\uFF09\uFF1A\u5B8C\u5168\u81EA\u5305\u542B\u7684\u3002")],-1),h=n("p",null,"\u82E5\u4F7F\u7528gzip\u538B\u7F29\uFF0C\u4F46\u52A0\u5BC6\u548C\u89E3\u7801\u8FC7\u7A0B\u4E2D\u4F1A\u589E\u52A0\u5904\u7406\u65F6\u95F4\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8BE5\u95EE\u9898\uFF0C\u5219\u5F15\u5165\u4E86\u4E8C\u8FDB\u5236\u7684.glb\u6587\u4EF6\u3002",-1),f={href:"https://www.shuzhiduo.com/A/mo5kVZoQJw/",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="\u52A0\u8F7D-gltf-glb" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D-gltf-glb" aria-hidden="true">#</a> \u52A0\u8F7D glTF / glb</h2><p>\u52A0\u8F7D glTF / glb \u5B9E\u9645\u4E0A\u76F8\u5BF9\u4E8E\u6DFB\u52A0\u4E86\u4E00\u4E2A\u5B9E\u4F53\uFF08Entity\uFF09\uFF0C\u901A\u8FC7\u5B9E\u4F53\u7684<code>model</code>\u5C5E\u6027\u5BF9\u8C61\u6307\u5B9A\u6A21\u578B\u7684<code>url</code>\u7B49\u53C2\u6570\u4FE1\u606F\uFF0C\u52A0\u8F7D\u6A21\u578B\u7684\u6838\u5FC3\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> entity <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;CesiumDrone&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A21\u578B\u7684\u540D\u79F0</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> position<span class="token punctuation">,</span> <span class="token comment">// \u6A21\u578B\u7684\u4F4D\u7F6E</span>
  <span class="token literal-property property">orientation</span><span class="token operator">:</span> orientation<span class="token punctuation">,</span> <span class="token comment">// \u6A21\u578B\u7684\u89C2\u5BDF\u89C6\u89D2</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&#39;./CesiumDrone.glb&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minimumPixelSize</span><span class="token operator">:</span> <span class="token number">128</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maximumScale</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_=n("details",{class:"custom-container details"},[n("summary",{class:"custom-container-title"},"\u70B9\u51FB\u67E5\u770B\u5728\u7EBF\u793A\u4F8B\uFF1A\u52A0\u8F7D"),n("br"),n("iframe",{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/gltf/loadgltf.html",frameborder:"0"},`
 `)],-1),w=t(`<p>\u52A0\u8F7D glTF / glb \u7684\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6307\u5B9A\u6A21\u578B\u52A0\u8F7D\u7684\u4F4D\u7F6E</span>
<span class="token keyword">const</span> position <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>
  <span class="token operator">-</span><span class="token number">123.0744619</span><span class="token punctuation">,</span>
  <span class="token number">44.0503706</span><span class="token punctuation">,</span>
  <span class="token number">150.0</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u6307\u5B9A\u89C6\u89D2\u89C2\u5BDF\u7684\u65B9\u5411</span>
<span class="token keyword">const</span> heading <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">135</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> pitch <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">const</span> roll <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">const</span> hpr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRoll</span><span class="token punctuation">(</span>heading<span class="token punctuation">,</span> pitch<span class="token punctuation">,</span> roll<span class="token punctuation">)</span>
<span class="token keyword">const</span> orientation <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">headingPitchRollQuaternion</span><span class="token punctuation">(</span>
  position<span class="token punctuation">,</span>
  hpr
<span class="token punctuation">)</span>

<span class="token comment">// \u52A0\u8F7D\u6A21\u578B</span>
<span class="token keyword">const</span> entity <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;CesiumDrone&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> position<span class="token punctuation">,</span>
  <span class="token literal-property property">orientation</span><span class="token operator">:</span> orientation<span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&#39;./CesiumDrone.glb&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minimumPixelSize</span><span class="token operator">:</span> <span class="token number">128</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maximumScale</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5C06\u89C6\u89D2\u9501\u5B9A\u5230entity</span>
viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> entity 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function T(F,x){const a=i("ExternalLinkIcon");return o(),l("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[s("gltf20-reference-guide"),e(a)]),s("\uFF1AglTF\u53C2\u8003\u624B\u518C\uFF1B")]),n("li",null,[n("a",k,[s("glTF\u2122 2.0 Specification"),e(a)]),s("\uFF1AglTF\u6587\u4EF6\u683C\u5F0F\u89E3\u6790\u3002")])]),m,v,b,g,h,n("p",null,[s("\u5BF9glb\u548C\u548CglTF\u6587\u4EF6\u538B\u7F29\u611F\u5174\u8DA3\u7684\u8BFB\u8005\u53EF\u4EE5\u9605\u8BFB\uFF1A"),n("a",f,[s("3D\u6027\u80FD\u4F18\u5316 | \u8BF4\u4E00\u8BF4glTF\u6587\u4EF6\u538B\u7F29"),e(a)]),s("\u3002")]),y,_,w])}const C=p(r,[["render",T],["__file","gltf.html.vue"]]);export{C as default};
