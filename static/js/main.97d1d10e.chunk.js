(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(12),i=s.n(n),r=s(2),l=s(15),d=s(4),o=s(0),j=function(){var e=Object(c.useState)("https://www.linkedin.com/in/anderson-mendoza-aguiar-1b47a7203"),t=Object(d.a)(e,1)[0],s=Object(c.useState)(!1),n=Object(d.a)(s,2),i=n[0],r=n[1];return Object(o.jsx)(a.a.Fragment,{children:Object(o.jsxs)("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation",children:[Object(o.jsx)("div",{className:"navbar-brand",children:Object(o.jsxs)("button",{className:"navbar-burger ".concat(i?"is-active":""),onClick:function(){return r(!i)},"aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu",children:[Object(o.jsx)("span",{"aria-hidden":"true"}),Object(o.jsx)("span",{"aria-hidden":"true"}),Object(o.jsx)("span",{"aria-hidden":"true"})]})}),Object(o.jsx)("div",{id:"navbarMenu",className:"navbar-menu ".concat(i?"is-active":""),onClick:function(){return r(!i)},children:Object(o.jsxs)("div",{className:"navbar-end p-5",children:[Object(o.jsx)("a",{href:"#profile",className:"nav-item m-2 is-primary button",children:"Home"}),Object(o.jsx)("a",{href:"#description",className:"nav-item m-2 is-primary button",children:"About me"}),Object(o.jsx)("a",{href:"#skills",className:"nav-item m-2 is-primary button",children:"Skills"}),Object(o.jsx)("a",{href:"#works",className:"nav-item m-2 is-primary button",children:"Projects"}),Object(o.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"nav-item m-2 is-primary button contacme",children:"Contact me"})]})})]})})},h=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(null),i=Object(d.a)(n,2),r=i[0],l=i[1];return Object(c.useEffect)((function(){fetch("https://api.github.com/users/amendozaaguiar").then((function(e){return e.json()})).then((function(e){a(e.name),l(e.bio)}),(function(e){console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{id:"profile",className:"hero has-text-white is-fullheight",children:Object(o.jsx)("div",{className:"hero-body is-vcentered",children:Object(o.jsx)("div",{className:"columns",children:Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("h1",{className:"is-size-4 welcome-message",children:"Hello, my name is"}),Object(o.jsx)("br",{}),Object(o.jsx)("h1",{className:"is-size-1 has-text-weight-bold",children:s}),Object(o.jsx)("br",{}),Object(o.jsxs)("h1",{className:"is-size-4",children:[r," ",Object(o.jsx)("span",{className:"blink",children:"_"})]})]})})})})})},b=s(13),m=s(9),u=function(){var e=Object(c.useState)([{icon:m.c,title:"Back-end",description:"I like to code things from scratch and enjoy bringing ideas to life in the browser.",subtitle:"Languages and frameworks that I use:",subtitleDescription:"PHP, Laravel, MySql"},{icon:m.b,title:"Front-end",description:"I value simple content structure, clean design patterns, and thoughtful interactions.",subtitle:"Languages,libraries and frameworks that I use:",subtitleDescription:"HTML, CSS, JS, Jquery, React JS, Vue"},{icon:m.a,title:"Tools",description:"I really care about people and I love working with other developers in a collaborative way.",subtitle:"Experience in:",subtitleDescription:"Linux, Git, SCRUM"}]),t=Object(d.a)(e,1)[0];return Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)("section",{id:"skills",className:"hero is-fullheight",children:Object(o.jsx)("div",{className:"hero-body is-vcentered",children:Object(o.jsx)("div",{className:"columns is-gapless is-centered p-5",children:t.map((function(e,t){return Object(o.jsx)("div",{className:"column p-2 has-border-green",children:Object(o.jsxs)("div",{className:"card card-h-100",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("p",{className:"card-header-title is-centered",children:Object(o.jsx)(b.a,{icon:e.icon,className:"icon-skills mt-5"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("p",{className:"title has-text-centered has-text-white",children:e.title}),Object(o.jsxs)("div",{className:"content has-text-white",children:[" ",e.description," "]})]}),Object(o.jsxs)("footer",{className:"card-content",children:[Object(o.jsx)("p",{className:"subtitle has-text-weight-semibold mt-5 has-text-centered has-text-white",children:e.subtitle}),Object(o.jsxs)("div",{className:"content has-text-centered has-text-white",children:[" ",e.subtitleDescription," "]})]})]})},t)}))})})})})},x=function(){var e=Object(c.useState)("I'm a Colombian based back-end and front-end developer, with 3 years experience as a professional, I have acquired the skills and knowledge necessary to make the project a success. I enjoy every step of the concept, design and development process, from discussion and collaboration."),t=Object(d.a)(e,1)[0];return Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)("section",{id:"description",className:"hero has-text-white is-fullheight",children:Object(o.jsx)("div",{className:"hero-body is-vcentered",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"columns is-centered",children:Object(o.jsxs)("div",{className:"column is-three-fifths has-text-centered has-text-center-vertical",children:[Object(o.jsx)("h3",{className:"is-size-2 has-text-weight-bold",children:"About me!"}),Object(o.jsxs)("p",{className:"is-size-4 mt-5",children:[t," ",Object(o.jsx)("span",{className:"blink",children:"_"})]})]})})})})})})},O=s(14),p=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("https://api.github.com/users/amendozaaguiar/repos").then((function(e){return e.json()})).then((function(e){e.forEach((function(e){a((function(t){return[].concat(Object(O.a)(t),[e])}))}))}),(function(e){console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{id:"works",className:"hero has-text-white is-fullheight",children:Object(o.jsx)("div",{className:"hero-body is-vcentered",children:Object(o.jsxs)("div",{className:"columns is-gapless is-multiline p-5",children:[Object(o.jsxs)("div",{className:"column is-full has-text-centered mb-5",children:[Object(o.jsx)("h1",{className:"is-size-2 has-text-weight-bold",children:"My personal projects"}),Object(o.jsxs)("h3",{className:"is-size-5",children:["Here are some projects I have recently worked on: ",Object(o.jsx)("span",{className:"blink",children:"_"})]})]}),s.map((function(e,t){return Object(o.jsx)("div",{className:"column is-4 p-5",children:Object(o.jsxs)("div",{className:"card card-h-100",children:[Object(o.jsx)("header",{className:"card-header has-text-centered",children:Object(o.jsxs)("p",{className:"card-header-title is-centered is-uppercase has-text-white",children:[" ",e.name," "]})}),Object(o.jsx)("div",{className:"card-content has-text-centered",children:Object(o.jsx)("p",{className:"subtitle has-text-weight-semibold has-text-white",children:e.language})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsxs)("div",{className:"content has-text-white",children:[" ",e.description," "]})})]})},t)}))]})})})})},v=function(){var e=Object(c.useState)((new Date).getFullYear()),t=Object(d.a)(e,1)[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"columns",children:Object(o.jsxs)("div",{className:"column is-full has-text-white has-text-centered",children:["\xa9 ",t,". Todos los derechos reservados."]})})})})})},f=function(){return Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(h,{}),Object(o.jsx)(x,{}),Object(o.jsx)(u,{}),Object(o.jsx)(p,{}),Object(o.jsx)(v,{})]})},N=function(){return Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",element:Object(o.jsx)(f,{})}),Object(o.jsx)(r.a,{path:"/*",element:Object(o.jsx)(f,{})})]})})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};s(26),s(27);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),g()}},[[28,1,2]]]);
//# sourceMappingURL=main.97d1d10e.chunk.js.map