"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{646:function(t,e,r){r.d(e,{Z:function(){return _}});var n=r(689),a=r(87),c=r(545),s="MovieCard_cardWrapp__SJf0q",i="MovieCard_image__ZrmcG",o="MovieCard_text__NNMdE",u="MovieCard_textWrap__E3iER",p=r(184),l=function(t){var e=t.poster_path,r=t.title,n=t.release_date.slice(0,4);return(0,p.jsxs)("li",{className:s,children:[(0,p.jsx)("img",{className:i,src:e?(0,c.qR)(e):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:r}),(0,p.jsx)("div",{className:u,children:(0,p.jsxs)("p",{className:o,children:[r,(0,p.jsxs)("strong",{children:[" ",n]})]})})]})},f="MoviesList_list__0Owr9",d="MoviesList_link__8rTGX",v="MoviesList_title__PB2c8",_=function(t){var e=t.movies,r=t.totalResults,c=t.title,s=(0,n.TH)();return console.log(e),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:v,children:c}),e&&(0,p.jsx)("div",{children:0!==r?(0,p.jsx)("ul",{className:f,children:e.map((function(t){var e=t.title,r=t.poster_path,n=t.id,c=t.release_date;return(0,p.jsx)(a.rU,{className:d,to:"/movies/".concat(n),state:{from:s},children:(0,p.jsx)(l,{title:e,poster_path:r,release_date:c})},n)}))}):(0,p.jsx)("p",{children:"Sorry we don't found this movie, please try again"})})]})}},983:function(t,e,r){r.r(e);var n=r(433),a=r(861),c=r(439),s=r(757),i=r.n(s),o=r(791),u=r(545),p=r(646),l=r(184);e.default=function(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),r=e[0],s=e[1],f=(0,o.useState)(null),d=(0,c.Z)(f,2),v=d[0],_=d[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u._k)();case 3:e=t.sent,r=e.results,s((0,n.Z)(r)),a=e.total_results,_(a),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsx)("div",{children:(0,l.jsx)(p.Z,{movies:r,totalResults:v,title:"Tranding today:"})})}},545:function(t,e,r){r.d(e,{BG:function(){return p},Jw:function(){return l},LI:function(){return d},_k:function(){return u},c_:function(){return f},qR:function(){return v}});var n=r(861),a=r(757),c=r.n(a),s=r(243),i="https://api.themoviedb.org/3",o="a197af2e5cbf9f65cf4b05209460ed0e",u=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(o));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/search/movie?query=").concat(e,"&api_key=").concat(o));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){return"https://image.tmdb.org/t/p/original".concat(t)}}}]);
//# sourceMappingURL=983.80de4fff.chunk.js.map