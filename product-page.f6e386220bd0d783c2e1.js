!function(e){function t(t){for(var r,i,c=t[0],a=t[1],f=t[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);d.length;)d.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={2:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=a;u.push([20,0]),n()}({20:function(e,t,n){"use strict";n.r(t),function(e){n(5),n(21);var t=[document.getElementById("features"),document.getElementById("support"),document.getElementById("specifications")],r=[document.getElementById("featuresNavItem"),document.getElementById("supportNavItem"),document.getElementById("specificationsNavItem")],o=e(".tab-bar").height();document.addEventListener("scroll",function(){var e=function(e){var t,n=e.map(function(e){var t=e.getBoundingClientRect();return{element:e,top:t.top-o}});if(n.reduce(function(e,t){return e&&t.top>0},!0))return n[(t=n.map(function(e){return e.top}),t.reduce(function(e,n,r){return n<t[e]?r:e},0))].element;var r=n.filter(function(e){return e.top<=0});return r[function(e){return e.reduce(function(t,n,r){return n>e[t]?r:t},0)}(r.map(function(e){return e.top}))].element}(t);t.map(function(t,n){t===e?r[n].classList.add("active"):r[n].classList.remove("active")})})}.call(this,n(1))},21:function(e,t,n){},5:function(e,t,n){"use strict";n(9),n(6),n(10),n(7);var r=n(0),o=n(2),u=n(3),i=n(4);r.b.add(o.a,u.a,i.a),r.a.i2svg(),document.body.classList.add("js-loading"),window.addEventListener("load",function(){document.body.classList.remove("js-loading")})},6:function(e,t,n){},7:function(e,t,n){e.exports=n.p+"assets/fonts/BrandonText-Regular_0.woff"}});