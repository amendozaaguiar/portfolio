(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,s,t){},19:function(e,s,t){},21:function(e,s,t){},22:function(e,s,t){},28:function(e,s,t){},29:function(e,s,t){},31:function(e,s,t){},32:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),n=t(12),c=t.n(n),r=(t(18),t(4)),l=t(6),o=(t(19),t(0)),d=function(){var e=Object(a.useState)(!1),s=Object(r.a)(e,2),t=s[0],i=s[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"navbar has-background-black-bis is-fixed-top",role:"navigation","aria-label":"main navigation",children:[Object(o.jsx)("div",{className:"navbar-brand",children:Object(o.jsxs)("button",{className:"navbar-burger has-text-green ".concat(t?"is-active":""),onClick:function(){return i(!t)},"aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu",children:[Object(o.jsx)("span",{"aria-hidden":"true"}),Object(o.jsx)("span",{"aria-hidden":"true"}),Object(o.jsx)("span",{"aria-hidden":"true"})]})}),Object(o.jsx)("div",{id:"navbarMenu",className:"navbar-menu has-background-black-bis ".concat(t?"is-active":""),onClick:function(){return i(!t)},children:Object(o.jsxs)("div",{className:"navbar-end pr-5 pt-5",children:[Object(o.jsx)(l.b,{to:"/",className:"nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch",children:"00. Inicio"}),Object(o.jsx)(l.b,{to:"/description",className:"nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch",children:"01. Acerca de m\xed"}),Object(o.jsx)(l.b,{to:"/skills",className:"nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch",children:"02. Habilidades"}),Object(o.jsx)(l.b,{to:"/works",className:"nav-item button is-ghost is-outlined is-rounded has-text-green is-block-touch",children:"03. Proyectos"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/anderson-mendoza-aguiar-1b47a7203",target:"_blank",rel:"noreferrer",className:"nav-item button is-light is-outlined has-text-green is-block-touch",children:"04. Cont\xe1ctame"})]})})]})})},b=(t(21),function(){var e=Object(a.useState)(null),s=Object(r.a)(e,2),t=s[0],i=s[1],n=Object(a.useState)(null),c=Object(r.a)(n,2),l=c[0],d=c[1];return Object(a.useEffect)((function(){fetch("https://api.github.com/users/amendozaaguiar").then((function(e){return e.json()})).then((function(e){i(e.name),d(e.bio)}),(function(e){console.log(e)}))})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{id:"profile",className:"hero has-text-white is-fullheight has-background-black-bis",children:Object(o.jsx)("div",{className:"hero-body is-vcentered",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"is-size-4",children:"Hola"}),Object(o.jsx)("br",{}),Object(o.jsxs)("h1",{className:"is-size-1 has-text-weight-bold",children:["Soy ",t]}),Object(o.jsx)("br",{}),Object(o.jsxs)("h1",{className:"is-size-4",children:[l," ",Object(o.jsx)("span",{className:"blink",children:"_"})]})]})})})})}),h=(t(22),t(13)),j=t(9),u=function(){var e=Object(a.useState)([{icon:j.c,title:"Backend",description:"Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.",subtitle:"Lenguajes y frameworks que empleo:",subtitleDescription:"PHP, Laravel, Livewire, MySql",heading:"Experiencia:",skills:["PHP: 3+ A\xf1os","Laravel, Livewire: 2+ A\xf1os","MySql: 8+ A\xf1os"]},{icon:j.b,title:"Frontend",description:"Valoro la estructura de contenido simple, los patrones de dise\xf1o limpios y las interacciones reflexivas.",subtitle:"Lenguajes y librerias que empleo:",subtitleDescription:"HTML, CSS, JS, React JS",heading:"Experiencia:",skills:["HTML, CSS, JS: 3+ A\xf1os","React JS: 1+ A\xf1os"]},{icon:j.a,title:"Herramientas",description:"Realmente me preocupo por la gente y me encanta trabajar con otros desarroladores de forma colaborativa.",subtitle:"Experiencia en:",subtitleDescription:"Linux, Git, SCRUM",heading:"Experiencia:",skills:["Linux: 7+ A\xf1os","Git: 3+ A\xf1os"]}]),s=Object(r.a)(e,1)[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{id:"skills",className:"hero has-text-white is-fullheight has-background-black-bis",children:Object(o.jsx)("div",{className:"columns is-gapless is-centered has-text-centered p-5",children:s.map((function(e,s){return Object(o.jsxs)("div",{className:"column p-5 has-border-green",children:[Object(o.jsx)(h.a,{icon:e.icon,className:"has-text-white icon-skills mt-5"}),Object(o.jsx)("h4",{className:"title is-size-3 is-spaced mt-6 has-text-weight-bold has-text-green",children:e.title}),Object(o.jsx)("p",{className:"pl-6 pr-6",children:e.description}),Object(o.jsx)("h5",{className:"is-size-5 mt-6 has-text-green has-text-weight-semibold",children:e.subtitle}),Object(o.jsx)("p",{className:"mt-4",children:e.subtitleDescription}),Object(o.jsx)("h5",{className:"is-size-5 mt-6 has-text-green has-text-weight-semibold",children:e.heading}),Object(o.jsx)("ul",{className:"mb-5",children:e.skills.map((function(e,s){return Object(o.jsx)("li",{className:"mt-2",children:e},s)}))})]},s)}))})})})},m=(t(28),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{id:"description",className:"hero has-text-white is-fullheight has-background-black-bis",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"columns is-centered",children:Object(o.jsxs)("div",{className:"column is-three-fifths has-text-centered",children:[Object(o.jsx)("h3",{className:"is-size-2 has-text-weight-bold",children:"Te cuento un poco sobre m\xed!"}),Object(o.jsxs)("p",{className:"is-size-4 mt-5",children:["Te cuento un poco sobre m\xed, soy Tecn\xf3logo en Gesti\xf3n de Bases de Datos, Tecn\xf3logo en An\xe1lisis y Desarrollo de Sistemas de Informaci\xf3n, T\xe9cnico en Sistemas y estudiante de Ingenier\xeda de Sistemas. Estoy tranquilamente confiado, naturalmente curioso y trabajando constantemente para mejorar mis habilidades, un problema que requiera ingenier\xeda a la vez ",Object(o.jsx)("span",{className:"blink",children:"_"})]})]})})})})})}),x=function(){var e=Object(a.useState)((new Date).getFullYear()),s=Object(r.a)(e,1)[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"section has-background-black-bis has-text-green has-text-centered",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"columns is-centered",children:["\xa9 ",s,". Todos los derechos reservados."]})})})})},O=(t(29),function(){var e=Object(a.useState)([{name:"LARAVELES-SPANISH-FOR-JETSTREAM",language:"Laravel",description:"Repositorio de idioma de Laravel 8 con Jetstream. Archivos de validaci\xf3n, contrase\xf1as y paginaci\xf3n por defecto de Laravel 8 traducidos a espa\xf1ol",url:"https://github.com/amendozaaguiar/laraveles-spanish-for-jetstream"},{name:"DOMI",language:"PHP, LiveWire",description:"DOMI es una prueba de desarrollo realizada en Laravel 8 + Livewire",url:"https://github.com/amendozaaguiar/domi"},{name:"ELIXIR",language:"PHP",description:"Es una aplicaci\xf3n web para apoyo al proceso de convocatoria docentes catedr\xe1ticos del Instituto de Educaci\xf3n a Distancia de la Universidad del Tolima.",url:"https://github.com/amendozaaguiar/elixir"}]),s=Object(r.a)(e,1)[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{id:"works",className:"hero has-text-white is-fullheight has-background-black-bis",children:[Object(o.jsxs)("div",{className:"columns is-gapless is-multiline p-5",children:[Object(o.jsxs)("div",{className:"column is-full has-text-centered mb-5",children:[Object(o.jsx)("h1",{className:"is-size-2 has-text-weight-bold",children:"Mis proyectos personales"}),Object(o.jsxs)("h3",{className:"is-size-5",children:["Aqu\xed hay algunos proyectos de dise\xf1o en los que he trabajado recientemente: ",Object(o.jsx)("span",{className:"blink",children:"_"})]})]}),s.map((function(e,s){return Object(o.jsx)("div",{className:"column is-4 p-5 has-text-centered has-border-green",children:Object(o.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("p",{className:"title has-text-green is-4 mt-5",children:e.name}),Object(o.jsx)("p",{className:"subtitle has-text-green is-6",children:e.language}),Object(o.jsx)("p",{className:"has-text-white mb-5",children:e.description})]})},s)}))]}),Object(o.jsx)(x,{})]})})}),g=t(2),p=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(g.c,{children:[Object(o.jsx)(g.a,{path:"/",element:Object(o.jsx)(b,{})}),Object(o.jsx)(g.a,{path:"description",element:Object(o.jsx)(m,{})}),Object(o.jsx)(g.a,{path:"skills",element:Object(o.jsx)(u,{})}),Object(o.jsx)(g.a,{path:"works",element:Object(o.jsx)(O,{})}),Object(o.jsx)(g.a,{path:"/*",element:Object(o.jsx)(b,{})})]})]})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,n=s.getLCP,c=s.getTTFB;t(e),a(e),i(e),n(e),c(e)}))};t(30),t(31);c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),v()}},[[32,1,2]]]);
//# sourceMappingURL=main.1174b6f4.chunk.js.map