(this.webpackJsonpmovie_app_nico=this.webpackJsonpmovie_app_nico||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),r=n(25),i=n.n(r),o=n(10),j=n(2);var l=function(){return Object(s.jsx)("h1",{children:"Hi"})},m=n(13),d=n.n(m),u=n(26),b=n(27),v=n(28),h=n(32),p=n(31),x=n(29),O=n.n(x);n(57);var _=function(e){var t=e.year,n=e.title,a=e.summary,c=e.poster,r=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:c,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:n}),Object(s.jsx)("h5",{className:"movie__year",children:t}),Object(s.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsx)("p",{className:"movie__summary",children:a.slice(0,180)})]})]})},g=(n(58),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(d.a.mark((function t(){var n,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component));var f=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};var y=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(f,{}),Object(s.jsx)(j.a,{path:"/",exact:!0,component:g}),Object(s.jsx)(j.a,{path:"/about",component:l})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.39da7e98.chunk.js.map