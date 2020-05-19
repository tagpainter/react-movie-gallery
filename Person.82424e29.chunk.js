(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[10],{259:function(e,t,n){"use strict";n.r(t);n(65),n(88);var o=n(0),a=n.n(o),i=n(38),r=n(40),l=n(73),d=n(470),c=n(62),s=n(474),m=n(177),u=n(26),p=(n(475),n(480));t.default=function(e){var t=e.padder,n=(Object(m.b)().isInitial,Object(u.i)().locale),o=Object(i.i)().id,r=Object(c.d)().tmdb.read("/person/"+o+"?language="+n.code);return console.log(r),a.a.createElement(_,{as:l.b.div,variants:I,initial:"hide",animate:"show",exit:"hide"},a.a.createElement(u.b,null,a.a.createElement("title",null,"person")),a.a.createElement(s.a,null),t&&t,a.a.createElement(f,null,a.a.createElement(w,null,a.a.createElement(h,null,a.a.createElement("img",{src:"https://image.tmdb.org/t/p/original"+r.profile_path}),a.a.createElement(b,null))),a.a.createElement(y,null,a.a.createElement(v,null,r.name&&a.a.createElement("h1",null,r.name),r.known_for_department&&a.a.createElement("h2",null,r.known_for_department)),a.a.createElement(g,null,a.a.createElement("dl",null,a.a.createElement("dt",null,"Popularity"),a.a.createElement("dd",null,a.a.createElement(p.a,{value:r.popularity})," ",a.a.createElement("strong",null,r.popularity))),r.birthday&&a.a.createElement("dl",null,a.a.createElement("dt",null,"Birthday"),a.a.createElement("dd",null,r.birthday)),r.place_of_birth&&a.a.createElement("dl",null,a.a.createElement("dt",null,"Place of birth"),a.a.createElement("dd",null,r.place_of_birth)),r.gender&&a.a.createElement("dl",null,a.a.createElement("dt",null,"Gender"),a.a.createElement("dd",null,1==r.gender?"Female":"Male")),r.also_known_as.length>0&&a.a.createElement("dl",null,a.a.createElement("dt",null,"Also known as"),a.a.createElement("dd",null,r.also_known_as.join(", ")))),r.biography&&a.a.createElement(E,null,r.biography))))};var f=r.b.div.withConfig({displayName:"Person__Info",componentId:"sc-1ck04bg-0"})(['max-width:60rem;width:100%;margin:0 auto;padding:0 1.5rem;padding-bottom:3rem;&:after{content:"";display:table;width:100%;}']),b=r.b.div.withConfig({displayName:"Person__InfoProfileFade",componentId:"sc-1ck04bg-1"})(["position:absolute;bottom:0;left:0;right:0;height:55%;background-image:linear-gradient(to top,#222,",");"],Object(d.a)(-1,"#222")),w=r.b.div.withConfig({displayName:"Person__InfoLeft",componentId:"sc-1ck04bg-2"})(["position:sticky;top:1.5rem;width:18rem;min-height:28rem;margin-bottom:1.5rem;@media screen and (min-width:45rem){float:left;}"]),h=r.b.div.withConfig({displayName:"Person__InfoProfile",componentId:"sc-1ck04bg-3"})(["position:relative;background-color:#111;img{display:block;width:100%;}"]),g=r.b.div.withConfig({displayName:"Person__Infos",componentId:"sc-1ck04bg-4"})(["margin-top:2rem;@media screen and (min-width:30rem){column-count:2;}@media screen and (min-width:45rem){column-count:1;}@media screen and (min-width:55rem){column-count:2;}dl{break-inside:avoid;margin-bottom:0.66rem;}dd{color:",";}dt{font-size:0.9rem;margin-bottom:0.33rem;}"],Object(d.a)(-.5,"#eee")),y=r.b.div.withConfig({displayName:"Person__InfoRight",componentId:"sc-1ck04bg-5"})(["display:block;background-image:linear-gradient( to bottom,"," 0%,#222 15rem );@media screen and (max-width:44.99rem){position:relative;clear:left;margin-top:-10rem;padding-left:1.5rem;}@media screen and (min-width:45rem){clear:none;float:left;width:calc(100% - 18rem);padding-left:2rem;}","{display:inline-block;vertical-align:middle;}p{color:",";}h1{font-size:2.33rem;}"],Object(d.a)(-1,"#222"),p.a,Object(d.a)(-.5,"#eee")),v=r.b.div.withConfig({displayName:"Person__Header",componentId:"sc-1ck04bg-6"})(["h2{font-style:italic;font-weight:normal;color:",";}"],Object(d.a)(-.5,"#eee")),E=r.b.p.withConfig({displayName:"Person__Bio",componentId:"sc-1ck04bg-7"})(["margin-top:2rem;"]),_=r.b.div.withConfig({displayName:"Person__Wrap",componentId:"sc-1ck04bg-8"})([""]),I={hide:{opacity:0,transition:{when:"afterChildren"}},show:{opacity:1,transition:{when:"beforeChildren"}}}},469:function(e,t,n){"use strict";var o=n(40),a=n(471);t.a=Object(o.b)(a.Icon).attrs({size:"1em",color:"currentColor"}).withConfig({displayName:"Icon",componentId:"uvcnnz-0"})([""])},474:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0),a=n.n(o),i=n(38),r=function(){var e=Object(i.h)(),t=Object(i.g)();return a.a.useEffect((function(){if("scrollRestoration"in window.history){window.history.scrollRestoration="manual";var e=function(){window.history.scrollRestoration="auto"};return window.addEventListener("unload",e),function(){return window.removeEventListener("unload",e)}}}),[]),a.a.useEffect((function(){if(!1 in window.history||"auto"==window.history.scrollRestoration||/CriOS/.test(window.navigator.userAgent)){var e=function(){var e;e=c(),document.body.style.width="100%",document.body.style.top=-e[1]+"px",document.body.style.left=-e[0]+"px",document.body.style.position="fixed"};return window.addEventListener("popstate",e),function(){document.body.style.position=null,document.body.style.top=null,document.body.style.left=null,document.body.style.width=null,window.removeEventListener("popstate",e)}}}),[]),a.a.useEffect((function(){var n=function(){if(e.key==t.location.key){var n=c();d(e.key,n)}};return window.requestAnimationFrame((function(){var o;switch(t.action){case"POP":var a=l(e.key);(o=window).scrollTo.apply(o,a);break;case"PUSH":window.scrollTo(0,0)}n()})),window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[e]),null},l=function(e){return(JSON.parse(window.sessionStorage.getItem("react-router-scroll-restore"))||{})[e]||[0,0]},d=function(e,t){var n=JSON.parse(window.sessionStorage.getItem("react-router-scroll-restore"))||{};n[e]=t,window.sessionStorage.setItem("react-router-scroll-restore",JSON.stringify(n))},c=function(){var e=void 0!==window.pageXOffset,t="CSS1Compat"===(document.compatMode||"");return[e?window.pageXOffset:t?document.documentElement.scrollLeft:document.body.scrollLeft,e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop]}},475:function(e,t,n){"use strict";var o=n(58),a=n.n(o),i=n(0),r=n.n(i),l=n(40);t.a=Object(l.b)((function(e){var t=e.ratio,n=void 0===t?1:t,o=e.as,i=void 0===o?"div":o,l=e.children,s=a()(e,["ratio","as","children"]);return r.a.createElement(i,s,r.a.createElement(d,{ratio:n}),r.a.createElement(c,null,l))})).withConfig({displayName:"RatioBox",componentId:"sc-4q2h0j-0"})(["position:relative;"]);var d=l.b.div.withConfig({displayName:"RatioBox__Padder",componentId:"sc-4q2h0j-1"})(["padding-top:",";"],(function(e){return 100*e.ratio+"%"})),c=l.b.div.withConfig({displayName:"RatioBox__Inner",componentId:"sc-4q2h0j-2"})(["position:absolute;top:0;bottom:0;left:0;right:0;"])},480:function(e,t,n){"use strict";n(87);var o=n(58),a=n.n(o),i=n(0),r=n.n(i),l=n(40),d=n(470),c=n(473),s=n(469);t.a=Object(l.b)((function(e){var t=e.value,n=a()(e,["value"]);return r.a.createElement("div",n,[0,2,4,6,8].map((function(e){return r.a.createElement(m,{key:e},r.a.createElement(u,null),r.a.createElement(p,{ratio:Math.max(Math.min(t-e,2),0)/2},r.a.createElement(f,null)))})))})).withConfig({displayName:"Stars",componentId:"sc-1dbr37r-0"})([""]);var m=l.b.div.withConfig({displayName:"Stars__Item",componentId:"sc-1dbr37r-1"})(["display:inline-block;position:relative;font-size:1.5em;"]),u=Object(l.b)(s.a).attrs({path:c.i}).withConfig({displayName:"Stars__BackStar",componentId:"sc-1dbr37r-2"})(["color:",";"],Object(d.a)(-.75,"#eee")),p=l.b.div.withConfig({displayName:"Stars__Cutter",componentId:"sc-1dbr37r-3"})(["position:absolute;top:0;bottom:0;left:0;width:0%;overflow:hidden;",""],(function(e){return e.ratio&&"width: "+100*e.ratio+"%; "})),f=Object(l.b)(s.a).attrs({path:c.h}).withConfig({displayName:"Stars__FrontStar",componentId:"sc-1dbr37r-4"})(["color:#fd3;"])}}]);
//# sourceMappingURL=Person.82424e29.chunk.js.map