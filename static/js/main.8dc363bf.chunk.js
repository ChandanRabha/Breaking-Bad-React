(this["webpackJsonpbreaking-bad-characters"]=this["webpackJsonpbreaking-bad-characters"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),r=c.n(a),i=(c(9),c(2)),j=c(0),l=function(e){for(var t=e.elementsPerPage,c=e.totalElements,s=e.paginate,n=[],a=1;a<=Math.ceil(c/t);a++)n.push(a);return Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(j.jsx)("li",{className:"page-item",children:Object(j.jsx)("a",{onClick:function(){return s(e)},href:"/",className:"page-link",children:e})},e)}))})})},d=function(e){for(var t=e.elementsPerPage,c=e.totalElements,s=e.paginate,n=[],a=1;a<=Math.ceil(c/t);a++)n.push(a);return Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(j.jsx)("li",{className:"page-item",children:Object(j.jsx)("a",{onClick:function(){return s(e)},href:"!#",className:"page-link",children:e})},e)}))})})},h=(c(11),c(12),function(e){var t=e.character;return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-inner",children:[Object(j.jsxs)("div",{className:"card-front",children:[Object(j.jsx)("img",{src:t.img,alt:""}),Object(j.jsx)("h5",{className:"card-text",children:t.name})]}),Object(j.jsxs)("div",{className:"card-back",children:[Object(j.jsx)("h1",{children:t.name}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})}),b=function(e){var t=e.dataset;return Object(j.jsx)("div",{className:"cards",children:t.map((function(e){return Object(j.jsx)(h,{character:e},e.char_id)}))})},o=(c(13),c(14),function(e){var t=e.episode;return Object(j.jsxs)("div",{className:"per-episode",children:[Object(j.jsxs)("div",{className:"episode-info",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Episode"}),":   ",t.episode]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Title"}),":     ",Object(j.jsx)("i",{children:t.title})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Season"}),":   ",t.season]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Air Date"}),":  ",t.air_date]})]}),Object(j.jsxs)("div",{class:"parent-characters",children:[Object(j.jsx)("h5",{class:"character_title",children:"Characters"}),Object(j.jsx)("div",{className:"per-episode-characters",children:t.characters.map((function(e,t){return Object(j.jsx)("h5",{children:e},t)}))})]})]})}),u=function(e){var t=e.dataset;return Object(j.jsx)("div",{className:"episodes-grid",children:t.map((function(e){return Object(j.jsx)(o,{episode:e},"".concat(e.episode_id))}))})},O=function(e){var t=e.characters,c=e.episodes,n=e.filter,a=Object(s.useState)(1),r=Object(i.a)(a,2),h=r[0],o=r[1],O=Object(s.useState)(1),x=Object(i.a)(O,2),p=x[0],f=x[1],m=Object(s.useState)(8),v=Object(i.a)(m,1)[0],g=h*v,N=g-v,k=t.slice(N,g),P=4*p,S=P-4,w=c.slice(S,P);return"1"===n?Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{elementsPerPage:v,totalElements:t.length,paginate:function(e){return o(e)}}),Object(j.jsx)(b,{dataset:k,filter:n})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{elementsPerPage:v,totalElements:c.length,paginate:function(e){return f(e)}}),Object(j.jsx)(u,{dataset:w,filter:n})]})};c(15);var x=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(i.a)(a,2),l=r[0],d=r[1],h=Object(s.useState)("1"),b=Object(i.a)(h,2),o=b[0],u=b[1];return Object(s.useEffect)((function(){fetch("https://www.breakingbadapi.com/api/episodes/").then((function(e){return e.json()})).then((function(e){return n(e)})),fetch("https://www.breakingbadapi.com/api/characters/").then((function(e){return e.json()})).then((function(e){d(e)}))}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"filterBoxes",children:[Object(j.jsx)("h1",{className:"headerText",children:"Breaking Bad API"}),Object(j.jsxs)("select",{onChange:function(e){return u(e.target.value)},value:o,children:[Object(j.jsx)("option",{value:"1",children:"Characters"}),Object(j.jsx)("option",{value:"2",children:"Episodes"})]})]}),Object(j.jsx)(O,{characters:l,episodes:c,filter:o})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.8dc363bf.chunk.js.map