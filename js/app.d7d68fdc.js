(function(e){function t(t){for(var n,o,u=t[0],l=t[1],d=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);i&&i(t);while(f.length)f.shift()();return c.push.apply(c,d||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==a[l]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var i=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0544":function(e,t,r){},"0a9a":function(e,t,r){},"0f0d":function(e,t,r){},"53ff":function(e,t,r){"use strict";r("0544")},"9cdc":function(e,t,r){"use strict";r("d673")},"9e1f":function(e,t,r){"use strict";r("cd02")},a997:function(e,t,r){},b9c7:function(e,t,r){"use strict";r("0f0d")},cca5:function(e,t,r){},cd02:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"app"};function c(e,t){var r=Object(n["m"])("Home");return Object(n["h"])(),Object(n["d"])("div",a,[Object(n["e"])(r)])}var o=Object(n["n"])("data-v-c5d2fd5e");Object(n["j"])("data-v-c5d2fd5e");var u={class:"Main"};Object(n["i"])();var l=o((function(e,t){var r=Object(n["m"])("app-header"),a=Object(n["m"])("grid"),c=Object(n["m"])("app-footer");return Object(n["h"])(),Object(n["d"])("div",{class:["Home",[e.darkTheme?"theme-dark":"theme-light"]]},[Object(n["e"])(r,{darkTheme:e.darkTheme},null,8,["darkTheme"]),Object(n["e"])("main",u,[Object(n["e"])(a,{darkTheme:e.darkTheme,squares:e.squares},null,8,["darkTheme","squares"])]),Object(n["e"])(c,{darkTheme:e.darkTheme,score:e.score,"onToggle-theme":e.toggleTheme},null,8,["darkTheme","score","onToggle-theme"])],2)})),d=(r("99af"),r("cb29"),r("4de4"),r("d3b7"),r("25f0"),Object(n["n"])("data-v-3d4ee19a"));Object(n["j"])("data-v-3d4ee19a");var i={class:"Footer-streak"},s=Object(n["e"])("span",{class:"Footer-streak-icon"},"🔥",-1);Object(n["i"])();var f=d((function(e,t){var r=Object(n["m"])("theme-switcher");return Object(n["h"])(),Object(n["d"])("div",{class:["Footer",[e.darkTheme?"theme-dark":"theme-light"]]},[Object(n["e"])("div",i,[s,Object(n["e"])("span",{lass:"Footer-streak-text",textContent:e.score},null,8,["textContent"])]),Object(n["e"])(r,{darkTheme:e.darkTheme,"onToggle-theme":t[1]||(t[1]=function(){return e.$emit("toggle-theme")})},null,8,["darkTheme"])],2)})),v=(r("a9e3"),Object(n["n"])("data-v-10558a78"));Object(n["j"])("data-v-10558a78");var b={class:"ThemeSwitcher"};Object(n["i"])();var p=v((function(e,t){return Object(n["h"])(),Object(n["d"])("div",b,[Object(n["e"])("label",{class:"switch",id:"switch",onClick:t[1]||(t[1]=function(){return e.$emit("toggle-theme")})},[Object(n["e"])("span",{class:["slider",[e.darkTheme?"theme-dark":"theme-light"]]},null,2)])])})),h=Object(n["f"])({name:"ThemeSwitcher",props:{darkTheme:{default:!0,type:Boolean}}});r("d7c0");h.render=p,h.__scopeId="data-v-10558a78";var m=h,j=Object(n["f"])({name:"Footer",components:{ThemeSwitcher:m},props:{darkTheme:{default:!0,type:Boolean},score:{default:0,type:Number}}});r("b9c7");j.render=f,j.__scopeId="data-v-3d4ee19a";var g=j,k=Object(n["n"])("data-v-34f02ff8");Object(n["j"])("data-v-34f02ff8");var O=Object(n["e"])("h1",null,"2048",-1);Object(n["i"])();var y=k((function(e,t){return Object(n["h"])(),Object(n["d"])("div",{class:["Header",[e.darkTheme?"theme-dark":"theme-light"]]},[O],2)})),F=Object(n["f"])({name:"Header",props:{darkTheme:{default:!0,type:Boolean}}});r("9e1f");F.render=y,F.__scopeId="data-v-34f02ff8";var T=F,x=Object(n["n"])("data-v-4e5a9bf0");Object(n["j"])("data-v-4e5a9bf0");var B={class:"Grid"};Object(n["i"])();var w=x((function(e,t){var r=Object(n["m"])("square");return Object(n["h"])(),Object(n["d"])("div",B,[(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["l"])(e.squares,(function(t,a){return Object(n["h"])(),Object(n["d"])(r,{darkTheme:e.darkTheme,key:a,number:t},null,8,["darkTheme","number"])})),128))])})),I=Object(n["n"])("data-v-1901a319"),A=I((function(e,t){return Object(n["h"])(),Object(n["d"])("div",{class:"Square",style:e.style,textContent:e.number},null,12,["textContent"])})),C=Object(n["f"])({name:"Square",props:{darkTheme:{default:!0,type:Boolean},number:{required:!0,type:Number}},setup:function(e){var t=Object(n["b"])((function(){var t={0:{background:"#383838",text:"transparent"},2:{background:"#CCCCCC",text:"#383838"},4:{background:"#B8B8B8",text:"#383838"},8:{background:"#A3A3A3",text:"#383838"},16:{background:"#8F8F8F",text:"#383838"},32:{background:"#7A7A7A",text:"#B5B5B5"},64:{background:"#666666",text:"#B5B5B5"},128:{background:"#525252",text:"#B5B5B5"},256:{background:"#3D3D3D",text:"#B5B5B5"},512:{background:"#292929",text:"#B5B5B5"},1024:{background:"#141414",text:"#B5B5B5"},2048:{background:"#141414",text:"#B5B5B5"}},r={0:{background:"#65839B",text:"transparent"},2:{background:"#EDF4F8",text:"#798691"},4:{background:"#E9F6FE",text:"#6289A2"},8:{background:"#957869",text:"#6B4E40"},16:{background:"#B2E8FC",text:"#54AEF1"},32:{background:"#E7F4D3",text:"#6CA03B"},64:{background:"#ECE4FD",text:"#7F5FC4"},128:{background:"#FAE1EA",text:"#CE516E"},256:{background:"#FCEBD8",text:"#E77538"},512:{background:"#FFFA97",text:"#F3A53B"},1024:{background:"#ED669F",text:"#FFFFFF"},2048:{background:"#CF2E26",text:"#FFFFFF"}},n=e.darkTheme?t:r,a=n[e.number];return{backgroundColor:a.background,color:a.text}}));return{style:t}}});r("ec73");C.render=A,C.__scopeId="data-v-1901a319";var E=C,_=Object(n["f"])({name:"Grid",components:{Square:E},props:{darkTheme:{default:!0,type:Boolean},squares:{required:!0,type:Array}}});r("d36a");_.render=w,_.__scopeId="data-v-4e5a9bf0";var S=_,q=Object(n["f"])({name:"Home",components:{AppFooter:g,AppHeader:T,Grid:S},setup:function(){var e=Object(n["k"])(!0),t=Object(n["k"])(0),r=Object(n["k"])(Array(16).fill(0)),a=4,c=function e(){var t=Math.floor(Math.random()*r.value.length);0===r.value[t]?r.value[t]=2:e()},o=function(){for(var e=0;e<4;e++){var t=r.value[e],n=r.value[e+a],c=r.value[e+2*a],o=r.value[e+3*a],u=[parseInt(t),parseInt(n),parseInt(c),parseInt(o)],l=u.filter((function(e){return e})),d=4-l.length,i=Array(d).fill(0),s=i.concat(l);r.value[e]=s[0],r.value[e+a]=s[1],r.value[e+2*a]=s[2],r.value[e+3*a]=s[3]}},u=function(){for(var e=0;e<16;e++)if(e%4===0){var t=r.value[e],n=r.value[e+1],a=r.value[e+2],c=r.value[e+3],o=[parseInt(t),parseInt(n),parseInt(a),parseInt(c)],u=o.filter((function(e){return e})),l=4-u.length,d=Array(l).fill(0),i=u.concat(d);r.value[e]=i[0],r.value[e+1]=i[1],r.value[e+2]=i[2],r.value[e+3]=i[3]}},l=function(){for(var e=0;e<16;e++)if(e%4===0){var t=r.value[e],n=r.value[e+1],a=r.value[e+2],c=r.value[e+3],o=[parseInt(t),parseInt(n),parseInt(a),parseInt(c)],u=o.filter((function(e){return e})),l=4-u.length,d=Array(l).fill(0),i=d.concat(u);r.value[e]=i[0],r.value[e+1]=i[1],r.value[e+2]=i[2],r.value[e+3]=i[3]}},d=function(){for(var e=0;e<4;e++){var t=r.value[e],n=r.value[e+a],c=r.value[e+2*a],o=r.value[e+3*a],u=[parseInt(t),parseInt(n),parseInt(c),parseInt(o)],l=u.filter((function(e){return e})),d=4-l.length,i=Array(d).fill(0),s=l.concat(i);r.value[e]=s[0],r.value[e+a]=s[1],r.value[e+2*a]=s[2],r.value[e+3*a]=s[3]}},i=function(){for(var e=0;e<12;e++)if(r.value[e]===r.value[e+a]){var n=parseInt(r.value[e])+parseInt(r.value[e+a]);r.value[e]=n,r.value[e+a]=0,t.value=t.value+n}},s=function(){for(var e=0;e<15;e++)if(r.value[e]===r.value[e+1]){var n=parseInt(r.value[e])+parseInt(r.value[e+1]);r.value[e]=n,r.value[e+1]=0,t.value=t.value+n}},f=function(){o(),i(),o(),c()},v=function(){u(),s(),u(),c()},b=function(){l(),s(),l(),c()},p=function(){d(),i(),d(),c()};window.document.addEventListener("keyup",(function(e){37===e.keyCode?v():38===e.keyCode?p():39===e.keyCode?b():40===e.keyCode&&f()}));var h=0,m=0,j=function(e){return e.touches},g=function(e){var t=j(e)[0];h=t.clientX,m=t.clientY},k=function(e){if(h&&m){var t=e.touches[0].clientX,r=e.touches[0].clientY,n=h-t,a=m-r;Math.abs(n)>Math.abs(a)?n>0?v():b():a>0?p():f(),h=0,m=0}};window.document.addEventListener("touchstart",g,!1),window.document.addEventListener("touchmove",k,!1);var O=function(){e.value=!e.value,localStorage.setItem("darkTheme",e.value.toString())},y=function(){e.value="false"!==localStorage.getItem("darkTheme")};return Object(n["g"])((function(){c(),y()})),{darkTheme:e,score:t,squares:r,toggleTheme:O}}});r("53ff");q.render=l,q.__scopeId="data-v-c5d2fd5e";var M=q,D=Object(n["f"])({name:"App",components:{Home:M}});r("9cdc");D.render=c;var H=D,P=r("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(n["c"])(H).mount("#app")},d36a:function(e,t,r){"use strict";r("0a9a")},d673:function(e,t,r){},d7c0:function(e,t,r){"use strict";r("cca5")},ec73:function(e,t,r){"use strict";r("a997")}});
//# sourceMappingURL=app.d7d68fdc.js.map