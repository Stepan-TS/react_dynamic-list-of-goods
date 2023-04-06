(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var o,r,c=e(6),i=e.n(c),s=e(3),a=e(1),u=(e(12),e(13),e(0)),l=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},d=(e(15),function(t){return Object(u.jsx)("div",{className:"error",children:Object(u.jsx)("p",{className:"error-text",children:t.text})})}),f=e(7);!function(t){t.LoadingError="An error occured when loading goods!",t.ContentTypeError="Content-type is not supported"}(o||(o={})),function(t){t[t.Default=0]="Default",t[t.All=1]="All",t[t.FirstFive=2]="FirstFive",t[t.OnlyRed=3]="OnlyRed"}(r||(r={}));function j(){return(t=2e3,new Promise((function(n){return setTimeout(n,t)}))).then((function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json")})).then((function(t){var n;if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));if(null===(n=t.headers.get("content-type"))||void 0===n||!n.includes("application/json"))throw new Error(o.ContentTypeError);return t.json()}));var t}var b=function(){return j().then((function(t){return function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}(Object(f.a)(t))}))},h=function(){return j().then((function(t){return function(t){return t.filter((function(t){return"red"===t.color}))}(t)}))},O=(e(16),function(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)(u.Fragment,{})})}),m=function(){var t=Object(a.useState)([]),n=Object(s.a)(t,2),e=n[0],c=n[1],i=Object(a.useState)(!1),f=Object(s.a)(i,2),m=f[0],p=f[1],y=Object(a.useState)(!1),x=Object(s.a)(y,2),g=x[0],v=x[1],N=Object(a.useState)(r.Default),k=Object(s.a)(N,2),w=k[0],C=k[1],E=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.Default;n!==w&&(p(!0),t().then((function(t){return c(t)})).catch((function(){return v(!0)})).finally((function(){return p(!1)})),C(n))};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"App-content",children:[Object(u.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(u.jsxs)("div",{className:"button-container",children:[Object(u.jsx)("button",{disabled:m,className:"button is-link",type:"button","data-cy":"all-button",onClick:function(){return E(j,r.All)},children:"Load all goods"}),Object(u.jsx)("button",{disabled:m,type:"button",className:"button is-link","data-cy":"first-five-button",onClick:function(){return E(b,r.FirstFive)},children:"Load 5 first goods"}),Object(u.jsx)("button",{disabled:m,type:"button",className:"button is-link","data-cy":"red-button",onClick:function(){return E(h,r.OnlyRed)},children:"Load red goods"})]}),m?Object(u.jsx)(O,{}):Object(u.jsx)(l,{goods:e}),g&&Object(u.jsx)(d,{text:o.LoadingError})]})})};i.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c63418e6.chunk.js.map