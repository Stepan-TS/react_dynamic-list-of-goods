(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var o=e(6),c=e.n(o),r=e(3),i=e(1),a=(e(12),e(13),e(0)),s=function(t){var n=t.goods;return Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},u=(e(15),function(t){return Object(a.jsx)("div",{className:"error",children:Object(a.jsx)("p",{className:"error-text",children:t.text})})}),l=e(7);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))}var b,j,f=function(){return d().then((function(t){return function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}(Object(l.a)(t))}))},O=function(){return d().then((function(t){return function(t){return t.filter((function(t){return"red"===t.color}))}(t)}))},h=(e(16),function(){return Object(a.jsx)("div",{className:"loader"})});!function(t){t.LoadingError="Failed to load goods due to a network error!"}(b||(b={})),function(t){t.Default="default",t.All="all",t.FirstFive="firstFive",t.OnlyRed="onlyRed"}(j||(j={}));var m=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(i.useState)(!1),l=Object(r.a)(c,2),m=l[0],x=l[1],y=Object(i.useState)(!1),g=Object(r.a)(y,2),p=g[0],v=g[1],k=Object(i.useState)(j.Default),N=Object(r.a)(k,2),F=N[0],w=N[1],L=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.Default;x(!0),t().then((function(t){return o(t)})).catch((function(){return v(!0)})).finally((function(){return x(!1)})),v(!1),n!==F&&w(n)};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"App-content",children:[Object(a.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(a.jsxs)("div",{className:"button-container",children:[Object(a.jsx)("button",{disabled:m,className:"button is-link",type:"button","data-cy":"all-button",onClick:function(){return L(d,j.All)},children:"Load all goods"}),Object(a.jsx)("button",{disabled:m,type:"button",className:"button is-link","data-cy":"first-five-button",onClick:function(){return L(f,j.FirstFive)},children:"Load 5 first goods"}),Object(a.jsx)("button",{disabled:m,type:"button",className:"button is-link","data-cy":"red-button",onClick:function(){return L(O,j.OnlyRed)},children:"Load red goods"})]}),m?Object(a.jsx)(h,{}):Object(a.jsx)(a.Fragment,{children:p?Object(a.jsx)(u,{text:b.LoadingError}):Object(a.jsx)(s,{goods:e})})]})})};c.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e4120ccd.chunk.js.map