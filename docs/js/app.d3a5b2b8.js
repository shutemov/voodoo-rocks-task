(function(){"use strict";var e={9621:function(e,t,n){var o=n(9242),a=n(3396);function r(e,t){const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(n)}var s=n(89);const i={},c=(0,s.Z)(i,[["render",r]]);var l=c,u=n(4870),d=n(7139),p={posts:{getAll:()=>"https://jsonplaceholder.typicode.com/posts",getPostsByLimits:(e,t)=>`https://jsonplaceholder.typicode.com/posts?_start=${e}&_limit=${t}`},users:{getPostsByUserId:e=>`https://jsonplaceholder.typicode.com/users/${e}`}},v={getAllPosts:async()=>{const e=await fetch(p.posts.getAll());return await e.json()},getAllPostsByLimits:async(e,t)=>{const n=await fetch(p.posts.getPostsByLimits(e,t));return await n.json()},getUserById:async e=>{const t=await fetch(p.users.getPostsByUserId(e));return await t.json()}};const f={class:"mr-2 ml-2"};var m=(0,a.aZ)({__name:"MPagination",props:{currentPage:{type:Number}},emits:["click:incr","click:decr"],setup(e){return(t,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{class:"btn btn-outline-primary",onClick:n[0]||(n[0]=n=>t.$emit("click:decr",e.currentPage))}," ◀️ "),(0,a._)("span",f,(0,d.zw)(e.currentPage),1),(0,a._)("button",{class:"btn btn-outline-primary",onClick:n[1]||(n[1]=n=>t.$emit("click:incr",e.currentPage))}," ▶️ ")],64))}});const y=m;var g=y;const w={class:"input-group"},b=(0,a._)("div",{class:"input-group-prepend"},[(0,a._)("span",{id:"basic-addon1",class:"input-group-text"},"🔎")],-1);var h=(0,a.aZ)({__name:"MSearchInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e){const t=(0,u.iH)("");return(e,n)=>((0,a.wg)(),(0,a.iD)("div",w,[b,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),type:"text",class:"form-control",placeholder:"Filter by author...","aria-label":"Username","aria-describedby":"basic-addon1",onInput:n[1]||(n[1]=n=>e.$emit("update:modelValue",t.value))},null,544),[[o.nr,t.value]])]))}});const _=h;var P=_;const j={class:"container"},k={class:"row"},x={class:"col-sm-12 col-lg-10 col-lg-6 mt-4 d-flex justify-content-center align-items-center"},O={class:"col-xs-12 col-lg-2 mt-4 d-flex justify-content-center align-items-center"},I={class:"card-columns mt-4"},B={class:"card"},C={class:"card-body text-left"},L={class:"card-title text-primary"},U={class:"card-text"},H={class:"text-secondary"};var S=(0,a.aZ)({__name:"TPosts",setup(e){const t=(0,u.iH)([]),n=(0,u.iH)(""),o=(0,u.iH)(0),r=(0,u.iH)(20);(0,a.bv)((async()=>{t.value=await v.getAllPostsByLimits(o.value,r.value),await p()}));const s=(0,a.Fl)((()=>""===n.value?t.value:t.value.filter((e=>e.name?.toLocaleLowerCase().includes(n.value.toLocaleLowerCase().trim()))))),i=async()=>{o.value++,t.value=await l(),await p()},c=async()=>{o.value<1||(o.value--,t.value=await l(),await p())},l=async()=>await v.getAllPostsByLimits(o.value,r.value),p=async()=>{const e=[];for(const n of t.value){if(!e.includes(n.userId)){const e=await v.getUserById(n.userId);t.value.forEach((t=>{t.userId===e.id&&(t.name=e.name)}))}e.push(n.userId)}},f=e=>e[0].toUpperCase()+e.slice(1);return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",j,[(0,a._)("div",k,[(0,a._)("div",x,[(0,a.Wm)(P,{"model-value":n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},null,8,["model-value"])]),(0,a._)("div",O,[(0,a.Wm)(g,{"current-page":o.value,"onClick:incr":i,"onClick:decr":c},null,8,["current-page"])])])]),(0,a._)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,u.SU)(s),(({id:e,title:t,body:n,name:o})=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"col"},[(0,a._)("div",B,[(0,a._)("div",C,[(0,a._)("h5",L,(0,d.zw)(f(t)),1),(0,a._)("p",U,(0,d.zw)(f(n)),1),(0,a._)("h6",H,(0,d.zw)(o),1)])])])))),128))])],64))}});const A=(0,s.Z)(S,[["__scopeId","data-v-6e662de2"]]);var $=A,D=n(2483);const M=[{path:"/",name:"home",component:$}],T=(0,D.p7)({history:(0,D.r5)(),routes:M});var V=T;n(5654);(0,o.ri)(l).use(V).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],r=e[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,s=o[0],i=o[1],c=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var u=c(n)}for(t&&t(o);l<s.length;l++)r=s[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkvoodoo_rocks"]=self["webpackChunkvoodoo_rocks"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9621)}));o=n.O(o)})();
//# sourceMappingURL=app.d3a5b2b8.js.map