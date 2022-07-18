(()=>{"use strict";var n,e,t,r,o,a,i,c,s,l,u,p,f,d,m={426:(n,e,t)=>{t.d(e,{Z:()=>g});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(526),t.b),u=new URL(t(354),t.b),p=new URL(t(596),t.b),f=new URL(t(131),t.b),d=i()(o()),m=s()(l),v=s()(u),h=s()(p),y=s()(f);d.push([n.id,"@font-face {\n    font-family: 'TitleFont';\n    src: url("+m+") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'NavBarFont';\n    src: url("+v+") format('truetype');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'HomeFont';\n    src: url("+h+") format('truetype');\n    font-style: normal;\n}\n\n\n\n\n\np{\n    margin: 0;\n    padding: 0; \n}\n\nhtml,body{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n#navbar{\n    background-color: #042F4B;\n    display: flex;\n    justify-content: space-around;\n    padding: 20px 0;\n}\n\n.title{\n    color: #ED1250;\n    font-family: 'TitleFont';\n    font-size: 50px;\n}\n\n.buttons{\n    display: flex;\n    gap: 40px;\n    align-items: center;\n    color: white;\n    font-size: 30px;\n    font-family: 'NavBarFont';\n}\n\n.button:hover{\n    cursor: pointer;\n    color: #ED1250;\n}\n\n.container{\n    background-color: rgba(0, 0, 0, 0.4);\n    background-image: url("+y+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-blend-mode: multiply;\n    flex: 1;    \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\n.container p{\n    color: white;\n    font-size: 80px;\n}\n\n.welcomeText{\n    font-family: 'HomeFont';\n    font-weight: 800;\n}\n\n\n\n\n\n",""]);const g=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var f=t(p),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var m=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},526:(n,e,t)=>{n.exports=t.p+"76486fb5cc170dab15a5.ttf"},596:(n,e,t)=>{n.exports=t.p+"0ce3f146c3f5a9ee0d20.ttf"},354:(n,e,t)=>{n.exports=t.p+"46cd98a815b9874526ad.ttf"},131:(n,e,t)=>{n.exports=t.p+"f699ee0e8496d82be526.jpeg"}},v={};function h(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.m=m,h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var e=h.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),l=h.n(s),u=h(589),p=h.n(u),f=h(426),(d={}).styleTagTransform=p(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=l(),e()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals})();