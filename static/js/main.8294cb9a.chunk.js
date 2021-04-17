(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(7),r=n.n(o),s=(n(82),n(83),n(19)),i=n(49),l=n(44),u=n(137),p=n(16),h=Object(u.a)((function(e){return{root:Object(l.a)({},e.breakpoints.down("xs"),{flexGrow:1}),button:{fontWeight:"500",color:"white",height:"20px",width:"30px"},categories:{fontSize:"1.3em",color:"white",flexGrow:1},search:Object(l.a)({flexGrow:"1",marginTop:"10px",marginBottom:"10px",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.25)},marginLeft:0,width:"auto"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),menuItem:{fontColor:"black"}}})),j=n(139),d=n(140),b=n(141),f=n(142),g=n(38),O=n(149),m=n(148),x=n(150),w=n(48),N=n.n(w),v=n(68),E=n.n(v),S=n(14),k=n.n(S),y=n(24),C=n(25),T=n.n(C),_="37abc7b5d8fb43be92c052e416f18229",I="https://newsapi.org/v2/top-headlines?country=in&apiKey=".concat(_),H="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=".concat(_),R="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=".concat(_),L="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=".concat(_),W="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=".concat(_),A=function(e){return T.a.get("https://newsapi.org/v2/everything?q=".concat(e,"&apiKey=").concat(_))},B=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(I);case 3:n=e.sent,c=n.data,t({type:"FETCH_ALL",payload:c.articles}),console.log("Hello from getNews"),console.log(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},M=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(H);case 3:n=e.sent,c=n.data,t({type:"TECH_NEWS",payload:c.articles}),console.log("Hello from getTechNews"),console.log("TechNews : ",c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},P=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(R);case 3:n=e.sent,c=n.data,t({type:"ENT_NEWS",payload:c.articles}),console.log("Hello from getNewsEnt"),console.log("EntNews : ",c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},F=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(L);case 3:n=e.sent,c=n.data,t({type:"SPORTS_NEWS",payload:c.articles}),console.log("Hello from getNewsSports"),console.log("SportsNews : ",c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(W);case 3:n=e.sent,c=n.data,t({type:"BUSINESS_NEWS",payload:c.articles}),console.log("Hello from getNewsBusiness"),console.log("BusinessNews : ",c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},G=n(3),K=function(){var e=h(),t=Object(c.useState)("Search . . ."),n=Object(i.a)(t,2),o=n[0],r=n[1],l=Object(s.b)(),u=function(){console.log("searchValue : ",o),l(function(e){return function(){var t=Object(y.a)(k.a.mark((function t(n){var c,a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:c=t.sent,a=c.data,n({type:"SEARCH_NEWS",payload:a.articles}),console.log("Hello from getNEwsSearch"),console.log("The Search Value was : ",e),console.log("SearchNews : ",a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(o)),r("Search . . .")},p=Object(j.a)("(min-width:600px)"),w=a.a.useState(null),v=Object(i.a)(w,2),S=v[0],C=v[1],T=function(){C(null)};return Object(G.jsx)(d.a,{position:"static",className:e.root,children:p?Object(G.jsxs)(b.a,{children:[Object(G.jsx)(f.a,{onClick:function(){l(B())},children:Object(G.jsx)(g.a,{className:e.categories,children:" HOME "})}),Object(G.jsx)(f.a,{onClick:function(){l(D())},children:Object(G.jsx)(g.a,{className:e.categories,children:" BUSINESS "})}),Object(G.jsx)(f.a,{onClick:function(){l(M())},children:Object(G.jsx)(g.a,{className:e.categories,children:" TECHNOLOGY "})}),Object(G.jsx)(f.a,{onClick:function(){l(P())},children:Object(G.jsx)(g.a,{className:e.categories,children:" ENTERTAINMENT "})}),Object(G.jsx)(f.a,{onClick:function(){l(F())},children:Object(G.jsx)(g.a,{className:e.categories,children:" SPORTS "})}),Object(G.jsx)("div",{className:e.search,children:Object(G.jsx)(O.a,{placeholder:o,onChange:function(e){return r(e.target.value)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})}),Object(G.jsx)(f.a,{onClick:function(){u()},className:e.button,children:Object(G.jsx)(N.a,{className:e.searchIcon})})]}):Object(G.jsxs)("div",{children:[Object(G.jsx)(f.a,{onClick:function(e){C(e.currentTarget)},children:Object(G.jsx)(E.a,{})}),Object(G.jsxs)(m.a,{className:e.menu,id:"simple-menu",anchorEl:S,keepMounted:!0,open:Boolean(S),onClose:T,children:[Object(G.jsx)(x.a,{onClick:T,children:Object(G.jsx)(f.a,{onClick:function(){l(B())},children:Object(G.jsx)(g.a,{className:e.menuItem,children:"HOME"})})}),Object(G.jsx)(x.a,{onClick:T,children:Object(G.jsx)(f.a,{onClick:function(){l(D())},children:Object(G.jsx)(g.a,{className:e.menuItem,children:" BUSINESS "})})}),Object(G.jsx)(x.a,{onClick:T,children:Object(G.jsx)(f.a,{onClick:function(){l(M())},children:Object(G.jsx)(g.a,{className:e.menuItem,children:" TECHNOLOGY "})})}),Object(G.jsx)(x.a,{onClick:T,children:Object(G.jsx)(f.a,{onClick:function(){l(P())},children:Object(G.jsx)(g.a,{className:e.menuItem,children:" ENTERTAINMENT "})})}),Object(G.jsx)(x.a,{onClick:T,children:Object(G.jsx)(f.a,{onClick:function(){l(F())},children:Object(G.jsx)(g.a,{className:e.menuItem,children:" SPORTS "})})})]}),Object(G.jsx)(O.a,{className:e.search,placeholder:o,onChange:function(e){return r(e.target.value)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}),Object(G.jsx)(f.a,{onClick:function(){u()},className:e.button,children:Object(G.jsx)(N.a,{className:e.searchIcon})})]})})},U=n(143),Y=n(144),V=n(145),X=n(146),J=n(147),q=Object(u.a)((function(e){return{grid:{flexGrow:1,paddingLeft:"16px",width:"100%"},link:{color:"black"},card:{marginTop:"10px",height:"550px"},image:{position:"",height:"250px",width:"400px"},cardTitle:{position:""},cardCaption:{}}})),z=n.p+"static/media/googleNews.6ab146b2.jpg",Q=n(69),Z=n.n(Q),$=function(e){var t=q(),n=Object(s.c)((function(e){return e.news}));return console.log("Hello from News comp"),console.log("newsFromNewsComp : ",n),Object(G.jsx)(U.a,{container:!0,spacing:2,className:t.grid,children:n.map((function(e){return Object(G.jsx)(U.a,{item:!0,xs:12,sm:6,md:4,children:Object(G.jsxs)(Y.a,{className:t.card,children:[Object(G.jsx)(V.a,{className:t.cardTitle,title:Object(G.jsx)(X.a,{className:t.link,href:e.url,target:"_blank",children:e.title}),subheader:Z()(e.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}),Object(G.jsx)("img",{className:t.image,src:e.urlToImage||z}),Object(G.jsx)(J.a,{children:Object(G.jsx)(g.a,{children:e.description})})]})})}))})};var ee=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.news}));return Object(c.useEffect)((function(){e(B()),console.log("Hello from useEffect in App")}),[]),console.log("Hello from APP"),console.log("newsFromApp : ",t),Object(G.jsxs)("div",{children:[Object(G.jsx)(K,{}),Object(G.jsx)($,{children:t})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))},ne=n(21),ce=n(70),ae=Object(ne.c)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":case"TECH_NEWS":case"ENT_NEWS":case"SPORTS_NEWS":case"SEARCH_NEWS":case"BUSINESS_NEWS":return t.payload;default:return e}}}),oe=Object(ne.e)(ae,Object(ne.d)(Object(ne.a)(ce.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));r.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(s.a,{store:oe,children:Object(G.jsx)(ee,{})})}),document.getElementById("root")),te()},82:function(e,t,n){},83:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.8294cb9a.chunk.js.map