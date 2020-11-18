/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-createelementattrs_createelement_attrs-cssexunit-ellipsis-textalignlast-textshadow-webgl-domprefixes-prefixedcss-prefixedcssvalue-setclasses-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),x.push((o?"":"no-")+a.join("-"))}}function s(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?w.className.baseVal=t:w.className=t)}function i(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function f(e,n,r,o){var s,i,l,f,d="modernizr",p=a("div"),c=u();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:d+(r+1),p.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+d,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),i=n(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=f,w.offsetHeight):p.parentNode.removeChild(p),!!i}function d(e,t){return!!~(""+e).indexOf(t)}function p(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var s in e)if(e[s]in t)return n===!1?e[s]:(o=t[e[s]],r(o,"function")?p(o,n||t):o);return!1}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(i(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+i(t[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function y(e,t,o,s){function i(){f&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=v(e,o);if(!r(u,"undefined"))return u}for(var f,p,c,m,y,g=["modernizr","tspan","samp"];!N.style&&g.length;)f=!0,N.modElem=a(g.shift()),N.style=N.modElem.style;for(c=e.length,p=0;c>p;p++)if(m=e[p],y=N.style[m],d(m,"-")&&(m=l(m)),N.style[m]!==n){if(s||r(o,"undefined"))return i(),"pfx"==t?m:!0;try{N.style[m]=o}catch(h){}if(N.style[m]!=y)return i(),"pfx"==t?m:!0}return i(),!1}function g(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?y(a,t,o,s):(a=(e+" "+T.join(i+" ")+i).split(" "),c(a,t,n))}function h(e,t,r){return g(e,n,n,t,r)}var x=[],C=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=t.documentElement,b="svg"===w.nodeName.toLowerCase(),_="Moz O ms Webkit",T=S._config.usePrefixes?_.toLowerCase().split(" "):[];S._domPrefixes=T;var z=function(e,t){var n=!1,r=a("div"),o=r.style;if(e in o){var s=T.length;for(o[e]=t,n=o[e];s--&&!n;)o[e]="-"+T[s]+"-"+t,n=o[e]}return""===n&&(n=!1),n};S.prefixedCSSValue=z,Modernizr.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("adownload",!e.externalHost&&"download"in a("a")),Modernizr.addTest("createelementattrs",function(){try{return"test"==a('<input name="test" />').getAttribute("name")}catch(e){return!1}},{aliases:["createelement-attrs"]});var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem}),Modernizr.addTest("cssexunit",function(){var e,t=P.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});var E=(S.testStyles=f,S._config.usePrefixes?_.split(" "):[]);S._cssomPrefixes=E;var L=function(t){var r,o=prefixes.length,s=e.CSSRule;if("undefined"==typeof s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+t;for(var i=0;o>i;i++){var a=prefixes[i],l=a.toUpperCase()+"_"+r;if(l in s)return"@-"+a.toLowerCase()+"-"+t}return!1};S.atRule=L;var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style});var A=S.testProp=function(e,t,r){return y([e],n,t,r)};Modernizr.addTest("textshadow",A("textShadow","1px 1px")),S.testAllProps=g;var O=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=l(e)),t?g(e,t,n):g(e,"pfx"))};S.prefixedCSS=function(e){var t=O(e);return t&&i(t)};S.testAllProps=h,Modernizr.addTest("ellipsis",h("textOverflow","ellipsis")),Modernizr.addTest("textalignlast",h("textAlignLast")),o(),s(x),delete S.addTest,delete S.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
