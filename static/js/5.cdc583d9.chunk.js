(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{20:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",s=c(2);t.a=()=>Object(s.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"error"})},21:function(e,t,c){"use strict";var a=c(0);t.a=()=>{const e="https://gateway.marvel.com:443/v1/public/",t="apikey=c5d6fc8b83116d92ed468ce36bac6c62",{loading:c,error:s,request:n,clearError:i}=(()=>{const[e,t]=Object(a.useState)(!1),[c,s]=Object(a.useState)(null);return{loading:e,error:c,request:Object(a.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t(!0);try{const s=await fetch(e,{method:c,body:a,headers:n});if(!s.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));const i=await s.json();return t(!1),i}catch(i){throw t(!1),s(i.message),i}}),[]),clearError:Object(a.useCallback)((()=>s(null)),[])}})(),r=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),o=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:c,error:s,clearError:i,getAllCharacters:async function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;console.log("getAllCharacters");const a=await n("".concat(e,"characters?limit=9&offset=").concat(c,"&").concat(t));return a.data.results.map(r)},getCharacter:async c=>{const a=await n("".concat(e,"characters/").concat(c,"?").concat(t));return r(a.data.results[0])},getAllComics:async function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const a=await n("".concat(e,"comics?orderBy=issueNumber&limit=8&offset=").concat(c,"&").concat(t));return a.data.results.map(o)},getComic:async c=>{const a=await n("".concat(e,"comics/").concat(c,"?").concat(t));return o(a.data.results[0])}}}},22:function(e,t,c){},23:function(e,t,c){"use strict";c(22);var a=c.p+"static/media/Avengers.4065c8f9.png",s=c.p+"static/media/Avengers_logo.9eaf2193.png",n=c(2);t.a=()=>Object(n.jsxs)("div",{className:"app__banner",children:[Object(n.jsx)("img",{src:a,alt:"Avengers"}),Object(n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(n.jsx)("br",{}),"Stay tuned!"]}),Object(n.jsx)("img",{src:s,alt:"Avengers logo"})]})},29:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c(4),n=c(0),i=c(21),r=c(6),o=c(20),l=c(23),u=(c(29),c(2));const m=e=>{let{comic:t}=e;const{title:c,description:a,pageCount:n,thumbnail:i,language:r,price:o}=t;return Object(u.jsxs)("div",{className:"single-comic",children:[Object(u.jsx)("img",{src:i,alt:c,className:"single-comic__img"}),Object(u.jsxs)("div",{className:"single-comic__info",children:[Object(u.jsx)("h2",{className:"single-comic__name",children:c}),Object(u.jsx)("p",{className:"single-comic__descr",children:a}),Object(u.jsx)("p",{className:"single-comic__descr",children:n}),Object(u.jsxs)("p",{className:"single-comic__descr",children:["Language: ",r]}),Object(u.jsx)("div",{className:"single-comic__price",children:o})]}),Object(u.jsx)(s.b,{to:"..",className:"single-comic__back",children:"Back to all"})]})};t.default=()=>{const{comicId:e}=Object(a.r)(),[t,c]=Object(n.useState)(null),{loading:s,error:d,getComic:g,clearError:b}=Object(i.a)();Object(n.useEffect)((()=>{h()}),[e]);const h=()=>{b(),g(e).then(j)},j=e=>{c(e)},p=d?Object(u.jsx)(o.a,{}):null,O=s?Object(u.jsx)(r.a,{}):null,f=s||d||!t?null:Object(u.jsx)(m,{comic:t});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{}),p,O,f]})}}}]);
//# sourceMappingURL=5.cdc583d9.chunk.js.map