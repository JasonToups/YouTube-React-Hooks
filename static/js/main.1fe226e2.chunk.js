(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{28:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(20),i=c.n(a),n=c(4),r=(c(28),c(5)),o=c(7),j=c(21),l=c(0),d=function(){var e=Object(s.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){a((new Date).getFullYear())}),[]),Object(l.jsxs)("footer",{className:"contact",children:[Object(l.jsxs)("div",{className:"contact-items-container flex-container",children:[Object(l.jsx)("a",{className:"contact-item",href:"https://www.linkedin.com/in/jasontoups/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(r.a,{icon:o.b})}),Object(l.jsx)("a",{className:"contact-item",href:"https://github.com/JasonToups",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(r.a,{icon:o.a})}),Object(l.jsx)("a",{className:"contact-item",href:"mailto:me@jasontoups.com",children:Object(l.jsx)(r.a,{icon:j.a})}),Object(l.jsx)("a",{className:"contact-item",href:"https://twitter.com/jsontoups",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(r.a,{icon:o.c})})]}),Object(l.jsxs)("p",{className:"footer",children:["Copyright \xa9 Jason Toups ",c]})]})},u=c.p+"static/media/reactLogo-white.b72f6410.svg",b=function(e){var t=e.onFormSubmit,c=Object(s.useState)(""),a=Object(n.a)(c,2),i=a[0],r=a[1];return Object(l.jsxs)("div",{className:"search-bar",children:[Object(l.jsxs)("div",{className:"logo-container",children:[Object(l.jsx)("img",{src:u,className:"logo",alt:"react logo"}),Object(l.jsx)("h1",{children:"React Tube"})]}),Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},className:"form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"Video Search"}),Object(l.jsx)("input",{type:"text",value:i,onChange:function(e){return r(e.target.value)}})]})})]})},m=function(e){var t=e.video,c=e.onVideoSelect;return Object(l.jsxs)("div",{onClick:function(){return c(t)},className:"video-item item",children:[Object(l.jsx)("img",{className:"image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("h3",{className:"header",children:t.snippet.title})})]})},O=function(e){var t=e.videos,c=e.onVideoSelect,s=t.map((function(e){return Object(l.jsx)(m,{onVideoSelect:c,video:e},e.id.videoId)}));return Object(l.jsx)("div",{className:"video-previews-list",children:s})},h=function(e){var t=e.video;if(!t)return Object(l.jsx)("div",{children:"Loading Videos..."});var c="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"video-player",children:Object(l.jsx)("iframe",{title:"video player",src:c})}),Object(l.jsxs)("div",{className:"video-description",children:[Object(l.jsx)("h2",{className:"header",children:t.snippet.title}),Object(l.jsx)("p",{children:t.snippet.description})]})]})},v=c(22),p=c(10),x=c.n(p),f=c(23),N=c.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyDa1Rhivwgd9bPO7LVOiNVdKuRROsW9NEU"}}),g=function(e){var t=Object(s.useState)([]),c=Object(n.a)(t,2),a=c[0],i=c[1];Object(s.useEffect)((function(){r(e)}),[e]);var r=function(){var e=Object(v.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/search",{params:{q:t,part:"snippet",maxResults:5,type:"video",key:"AIzaSyDa1Rhivwgd9bPO7LVOiNVdKuRROsW9NEU"}});case 2:c=e.sent,i(c.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[a,r]},w=function(){var e=Object(s.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1],i=g("react js custom hooks"),r=Object(n.a)(i,2),o=r[0],j=r[1];return Object(s.useEffect)((function(){a(o[0])}),[o]),Object(l.jsxs)("div",{className:"youtube-search-page",children:[Object(l.jsx)("div",{className:"background"}),Object(l.jsx)(b,{onFormSubmit:j}),Object(l.jsxs)("div",{className:"video-content-section",children:[Object(l.jsx)("div",{className:"video-player-container",children:Object(l.jsx)(h,{video:c})}),Object(l.jsx)("div",{className:"video-previews-container",children:Object(l.jsx)(O,{onVideoSelect:a,videos:o})})]}),Object(l.jsx)(d,{})]})};i.a.render(Object(l.jsx)(w,{}),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1fe226e2.chunk.js.map