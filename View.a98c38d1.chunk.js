(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[12],{263:function(e,t,n){"use strict";n.r(t);var i=n(35),r=n.n(i),a=n(58),o=n.n(a),c=n(0),l=n.n(c),u=n(38),s=n(40),d=n(73),f=n(473),m="object"==typeof window,p=(n(496),function(e){Object(c.useEffect)(e,[])}),g=function(e){var t=Object(c.useRef)(e);t.current=e,p((function(){return function(){return t.current()}}))},h=function(e){var t=Object(c.useRef)(0),n=Object(c.useState)(e),i=n[0],r=n[1],a=Object(c.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){r(e)}))}),[]);return g((function(){cancelAnimationFrame(t.current)})),[i,a]},w=function(){var e=h({x:m?window.pageXOffset:0,y:m?window.pageYOffset:0}),t=e[0],n=e[1];return Object(c.useEffect)((function(){var e=function(){n({x:window.pageXOffset,y:window.pageYOffset})};return window.addEventListener("scroll",e,{capture:!1,passive:!0}),function(){window.removeEventListener("scroll",e)}}),[]),t},v=n(26),b=n(479),y=n(469),E=n(483),O=n(481),_=(t.default=function(e){var t=e.component,n=o()(e,["component"]),i=Object(u.g)();return l.a.createElement(x,{as:d.b.div,variants:z,initial:"hide",animate:"show",exit:"hide"},l.a.createElement(O.a,null),l.a.createElement(L,null,l.a.createElement(j,{onClick:function(){return i.goBack()}},l.a.createElement(y.a,{path:f.a})),l.a.createElement(N,null)),l.a.createElement(k,null,l.a.createElement(d.a,{initial:!1,exitBeforeEnter:!0},l.a.createElement(u.b,{key:n.location.pathname,location:n.location,computedMatch:n.computedMatch},l.a.createElement(t,r()({padder:l.a.createElement(_,null)},n))))),l.a.createElement(E.a,null))},s.b.div.withConfig({displayName:"View__Padder",componentId:"sc-1uy83aw-0"})(["height:7rem;"])),L=s.b.div.withConfig({displayName:"View__Topbar",componentId:"sc-1uy83aw-1"})(["z-index:1;position:fixed;top:0;left:0;right:0;max-width:60rem;margin:0 auto;height:0;"]),j=s.b.button.withConfig({displayName:"View__BackButton",componentId:"sc-1uy83aw-2"})(["border:0;margin:1.5rem;padding:0;width:4rem;height:4rem;background-color:#111;color:white;padding-top:0.1em;font-size:1.33em;"]),C=s.b.span.withConfig({displayName:"View__LogoHolder",componentId:"sc-1uy83aw-3"})(["display:inline-block;vertical-align:middle;font-size:1.33rem;"]),I={hide:{opacity:0},show:{opacity:1}},N=function(){var e=w().y;return l.a.createElement(C,{as:d.b.span,variants:I,initial:"show",animate:e>50?"hide":"show"},l.a.createElement(b.a,{as:v.c,to:"/"}))},k=s.b.div.withConfig({displayName:"View__Main",componentId:"sc-1uy83aw-4"})(["position:relative;min-height:100vh;"]),x=s.b.div.withConfig({displayName:"View__Wrap",componentId:"sc-1uy83aw-5"})(["position:relative;min-height:100vh;","{position:fixed;top:0;left:0;right:0;z-index:2;}","{position:relative;}"],O.a,E.a),z={hide:{opacity:0,transition:{when:"afterChildren"}},show:{opacity:1,transition:{delay:.33,when:"beforeChildren"}}}},469:function(e,t,n){"use strict";var i=n(40),r=n(471);t.a=Object(i.b)(r.Icon).attrs({size:"1em",color:"currentColor"}).withConfig({displayName:"Icon",componentId:"uvcnnz-0"})([""])},472:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return l}));n(246),n(89),n(87),n(90);var i=n(0),r=n.n(i);function a(e,t){r.a.useEffect((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}function o(e,t,n){if("undefined"==typeof window)return n;var i=e.map((function(e){return window.matchMedia(e)})),a=function(){var e=i.findIndex((function(e){return e.matches}));return void 0!==t[e]?t[e]:n},o=r.a.useState(a),c=o[0],l=o[1];return r.a.useEffect((function(){var e=function(){return l(a)};return i.forEach((function(t){return t.addListener(e)})),function(){return i.forEach((function(t){return t.removeListener(e)}))}}),[]),c}function c(e){r.a.useEffect((function(){if(e.current){var t=function(t){var n=e.current;(t.deltaY>0&&n.clientWidth+n.scrollLeft<n.scrollWidth||t.deltaY<0&&n.scrollLeft>0)&&(t.preventDefault(),n.scrollLeft+=t.deltaY)};return e.current.addEventListener("mousewheel",t),function(){return e.current.removeEventListener("mousewheel",t)}}}),[e.current])}function l(e,t){var n=r.a.useState((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(e){return console.log(e),t}})),i=n[0],a=n[1];return[i,function(t){try{var n=t instanceof Function?t(i):t;a(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(e){console.log(e)}}]}},479:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(40);t.a=a.b.a.attrs((function(e){return{children:r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null,"MOVIE"),r.a.createElement("br",null),r.a.createElement(c,null,"GALLERY"))}})).withConfig({displayName:"Logo",componentId:"sc-16zd5z7-0"})(["display:inline-block;line-height:0.7;font-weight:bold;text-align:center;"]);var o=a.b.span.withConfig({displayName:"Logo__First",componentId:"sc-16zd5z7-1"})(["position:relative;letter-spacing:0.32em;margin-right:-0.32em;"]),c=a.b.span.withConfig({displayName:"Logo__Second",componentId:"sc-16zd5z7-2"})(["position:relative;font-size:0.8em;letter-spacing:0.2em;margin-right:-0.2em;"])},481:function(e,t,n){"use strict";n(87),n(64),n(482);var i=n(0),r=n.n(i),a=n(38),o=n(59),c=n(40),l=n(73),u=n(473),s=n(472),d=n(26),f=n(469);t.a=Object(c.b)((function(e){var t=Object.assign({},e),n=Object(d.i)().locale,i=Object(a.h)(),c=r.a.useState(!1),y=c[0],E=c[1],O=r.a.useRef(null),_=d.a[n.code]||"";return Object(s.c)(O,(function(){return E(!1)})),r.a.createElement("div",t,r.a.createElement(v,null,r.a.createElement(g,{onClick:function(){return E(!0)}},r.a.createElement(f.a,{path:u.j}),r.a.createElement(p,null,_),r.a.createElement(m,{path:u.c})),r.a.createElement(w,{as:l.b.div,ref:O,variants:b,initial:"hide",animate:y?"show":"hide"},Object.entries(d.a).map((function(e){var t=e[0],n=e[1];return r.a.createElement(h,{as:o.b,key:t,to:Object(d.f)(t,i.pathname),onClick:function(){return E(!1)}},n)})))))})).withConfig({displayName:"Prepend",componentId:"sc-14w0c9o-0"})(["max-width:60rem;width:100%;margin:0 auto;height:0;padding:0 1.5rem;text-align:right;"]);var m=Object(c.b)(f.a).withConfig({displayName:"Prepend__ChevronIcon",componentId:"sc-14w0c9o-1"})([""]),p=c.b.span.withConfig({displayName:"Prepend__LangTitle",componentId:"sc-14w0c9o-2"})(["display:inline-block;vertical-align:middle;"]),g=c.b.button.withConfig({displayName:"Prepend__LangButton",componentId:"sc-14w0c9o-3"})(["display:block;float:right;background-color:#111;color:#eee;padding:0.33rem 1rem;border:0;font-size:0.8rem;","{display:inline-block;vertical-align:middle;}","{margin-left:0.5rem;}","{position:relative;margin-right:-0.5em;}"],f.a,p,m),h=c.b.a.withConfig({displayName:"Prepend__LangItem",componentId:"sc-14w0c9o-4"})(["display:block;padding:0.33rem 1.5rem;transition:background-color 0.15s ease,color 0.15s ease;&:hover{background-color:#eee;color:#333;}"]),w=c.b.div.withConfig({displayName:"Prepend__LangList",componentId:"sc-14w0c9o-5"})(["float:right;clear:right;min-width:15rem;padding:0.5rem 0;background-color:#111;color:#eee;"]),v=c.b.div.withConfig({displayName:"Prepend__Lang",componentId:"sc-14w0c9o-6"})(["position:relative;z-index:1;"]),b={hide:{opacity:0,visibility:"hidden"},show:{opacity:1,visibility:"visible"}}},482:function(e,t,n){var i=n(1),r=n(247).entries;i({target:"Object",stat:!0},{entries:function(e){return r(e)}})},483:function(e,t,n){"use strict";n(64);var i=n(0),r=n.n(i),a=n(40),o=n(470),c=n(479);t.a=Object(a.b)((function(e){var t=Object.assign({},e);return r.a.createElement("div",t,r.a.createElement(c.a,null),r.a.createElement("p",null,"Made by Tagpainter. Powered by TMDB API."))})).withConfig({displayName:"Footer",componentId:"epnff0-0"})(["padding:2rem 1.5rem;text-align:center;font-size:0.8rem;color:",";"],Object(o.a)(-.5,"#eee"))},496:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var i,r,a;if(Array.isArray(t)){if((i=t.length)!=n.length)return!1;for(r=i;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((i=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=i;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=i;0!=r--;){var o=a[r];if(("_owner"!==o||!t.$$typeof)&&!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n}}}]);
//# sourceMappingURL=View.a98c38d1.chunk.js.map