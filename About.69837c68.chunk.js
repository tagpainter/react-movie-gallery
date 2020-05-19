(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{260:function(e,o,t){"use strict";t.r(o);var n=t(0),r=t.n(n),a=t(40),c=t(470),i=t(474),d=t(26),s=t(477);o.default=function(e){var o=e.padder,n=Object(d.i)().locale,a=r.a.useMemo((function(){var e;try{e=t(514)("./"+n.code+"/README.md")}catch(o){e=t(488)}return e}),[n.code]);return r.a.createElement(s.a,null,r.a.createElement(d.b,null),r.a.createElement(i.a,null),o&&o,r.a.createElement(u,{dangerouslySetInnerHTML:{__html:a}}))};var u=a.b.div.withConfig({displayName:"About__Main",componentId:"sc-1gbg94z-0"})(["width:100%;max-width:60rem;margin:0 auto;padding:3rem 1.5rem;hr{margin:3rem 0;border:0;background-color:transparent;}p{color:",";}"],Object(c.a)(-.5,"#eee"))},474:function(e,o,t){"use strict";t.d(o,"a",(function(){return c}));var n=t(0),r=t.n(n),a=t(38),c=function(){var e=Object(a.h)(),o=Object(a.g)();return r.a.useEffect((function(){if("scrollRestoration"in window.history){window.history.scrollRestoration="manual";var e=function(){window.history.scrollRestoration="auto"};return window.addEventListener("unload",e),function(){return window.removeEventListener("unload",e)}}}),[]),r.a.useEffect((function(){if(!1 in window.history||"auto"==window.history.scrollRestoration||/CriOS/.test(window.navigator.userAgent)){var e=function(){var e;e=s(),document.body.style.width="100%",document.body.style.top=-e[1]+"px",document.body.style.left=-e[0]+"px",document.body.style.position="fixed"};return window.addEventListener("popstate",e),function(){document.body.style.position=null,document.body.style.top=null,document.body.style.left=null,document.body.style.width=null,window.removeEventListener("popstate",e)}}}),[]),r.a.useEffect((function(){var t=function(){if(e.key==o.location.key){var t=s();d(e.key,t)}};return window.requestAnimationFrame((function(){var n;switch(o.action){case"POP":var r=i(e.key);(n=window).scrollTo.apply(n,r);break;case"PUSH":window.scrollTo(0,0)}t()})),window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[e]),null},i=function(e){return(JSON.parse(window.sessionStorage.getItem("react-router-scroll-restore"))||{})[e]||[0,0]},d=function(e,o){var t=JSON.parse(window.sessionStorage.getItem("react-router-scroll-restore"))||{};t[e]=o,window.sessionStorage.setItem("react-router-scroll-restore",JSON.stringify(t))},s=function(){var e=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return[e?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft,e?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop]}},477:function(e,o,t){"use strict";t.d(o,"a",(function(){return u}));var n=t(35),r=t.n(n),a=t(58),c=t.n(a),i=t(0),d=t.n(i),s=t(73),u=function(e){var o=e.children,t=c()(e,["children"]);return d.a.createElement(s.b.div,r()({variants:{hide:{opacity:0,transition:{when:"afterChildren"}},show:{opacity:1,transition:{when:"beforeChildren"}}},initial:"hide",animate:"show",exit:"hide"},t),o)}},488:function(e,o){e.exports="<h1 id=react-movie-gallery>react-movie-gallery</h1> <p>this example focused on show way to provide way to SSR React.Suspense &amp; react resources.</p> <hr> <h2 id=movie-information-application-using-tmdb-api>Movie information application using TMDB API</h2> <p>This demo application uses TMDB API for backend database.</p> <hr> <h2 id=simple--beautiful-design>Simple &amp; Beautiful design</h2> <p>I avoided to abuse using box-shadow for simple flat design. And i designed with concept of straight lines and a soft high-resolution backdrop images.</p> <hr> <h2 id=new-reactsuspense-react-cache-and-server-side-rendering>New <code>React.Suspense</code>, <code>react-cache</code> and server side rendering.</h2> <p>Till now, we should store every data on component tree for SSR, and we coudn&#39;t struct free router structure or we cannot use <code>react-router-dom</code>. But as you can see, The best advantage of <code>react-router-dom</code> is that you can struct router freely and declarative way.</p> <p>In this example, I adapted concept of <code>react-cache</code> and fetch all data in component tree, and wait until fetched at server side using <code>react-ssr-prepass</code>.</p> <p>With this, you can composit component tree in highly free manner, and you can code in react-way, and share code with only-CSR apps.</p> <hr> <h2 id=delayed-rendering-and-page-transition-animation>Delayed rendering and page transition animation</h2> <p>I used <code>framer-motion</code> for animation, but it causes location information gap when route transition is occured. Normally, you can resolve it by providing <code>location</code> prop on <code>&lt;Switch&gt;</code> component, but when you need provide common layout system its more difficult to resolve.</p> <p>In this example, I show you way to solve it by providing <code>computedMatch</code> and <code>location</code> prop to <code>&lt;Route&gt;</code> component.</p> "},514:function(e,o,t){var n={"./en/README.md":488,"./ko/README.md":515};function r(e){var o=a(e);return t(o)}function a(e){if(!t.o(n,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=514},515:function(e,o){e.exports="<h1 id=react-movie-gallery>react-movie-gallery</h1> <p>이 예제는 React.Suspense와 react resource를 활용한 서버사이드 렌더링 구현에 대한 예시입니다.</p> <hr> <h2 id=tmdb-api를-활용한-영화정보앱-예시>TMDB API를 활용한 영화정보앱 예시</h2> <p>이 어플리케이션은 백엔드로써 TMDB API를 활용하였습니다.</p> <hr> <h2 id=단순하고-미려한-디자인>단순하고 미려한 디자인</h2> <p>심플하고 플랫한 디자인을 위하여 box-shadow의 사용을 의도적으로 피하였고, 직선 라인과 부드럽고 은은하게 깔리는 고화질 백드롭 이미지를 컨셉으로 제작하였습니다.</p> <hr> <h2 id=새로운-reactsuspense와-react-cache를-활용한-서버사이드-렌더링>새로운 <code>React.Suspense</code>와 <code>react-cache</code>를 활용한 서버사이드 렌더링</h2> <p>지금까지는 리액트에서의 SSR을 위하여 트리의 모든 데이터를 스토어에 저장해야 했고, 자유로운 라우터 구조를 사용할 수 없거나 아예 <code>react-router-dom</code>을 사용할 수 없었습니다. 그러나 <code>react-rotuer-dom</code>의 최대 장점은 &#39;선언적인 방식&#39;으로 &#39;자유롭게 라우트를 구성 가능하다&#39; 는 것이겠지요?</p> <p>이 예제에서는 <code>react-cache</code>의 컨셉을 활용하여 모든 데이터를 컴포넌트 트리 안에서 불러오며, 서버에서는 데이터가 로드 될 때 까지 <code>react-ssr-prepass</code>를 활용하여 기다립니다.</p> <p>이러한 방식으로, 컴포넌트를 온전히 자유로운 방식으로 구성할 수 있으며, &#39;리액트 다운 방식&#39;으로 코딩할 수 있고 CSR용 앱을 쉽게 SSR과 호환이 되도록 포팅 할 수 있겠지요.</p> <hr> <h2 id=지연된-렌더링과-페이지-전환-애니메이션>지연된 렌더링과 페이지 전환 애니메이션</h2> <p>저는 이 프로젝트에서 <code>framer-motion</code>을 활용하여 애니메이션을 구현하였습니다. 그러나 라우트가 바뀔 때 마다 <code>react-router-dom</code>이 제공하는 <code>location</code>에 대한 정보에 대한 갭이 생깁니다. 애니메이션을 할 때 생기는 0.5~1초의 시간 사이에 이미 업데이트 된 location 정보가 제공되는 거죠. 이를 일반적으로는 <code>&lt;Switch&gt;</code> 컴포넌트에 <code>location</code> prop을 제공하여 해결 할 수 있습니다. 그러나 공통 레이아웃 시스템을 구축하여야 할 때에는 조금 더 상황이 복잡해집니다.</p> <p>이 예시에서는 <code>computedMatch</code> prop과 <code>location</code> prop을 <code>&lt;Route&gt;</code> 컴포넌트에 제공함으로써 이 문제를 해결하는 방법을 제시합니다.</p> "}}]);
//# sourceMappingURL=About.69837c68.chunk.js.map