(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{117:function(e,a,t){e.exports=t.p+"static/media/quizbee.288825a4.jpg"},118:function(e,a,t){e.exports=t.p+"static/media/youtube-clone.221a9893.jpg"},119:function(e,a,t){e.exports=t.p+"static/media/getwatch.459985af.jpg"},120:function(e,a,t){e.exports=t.p+"static/media/react-redux-rest.61324486.png"},121:function(e,a,t){e.exports=t.p+"static/media/mern-twitter-clone.156371b9.png"},122:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),o=t.n(i),c=(t(84),t(85),t(126)),s=t(127),l=t(17),m=t(49),p=t.n(m);function u(){return r.a.createElement(c.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",className:"fixed-top",id:"sideNav"},r.a.createElement(c.a.Brand,{onClick:function(){return window.location="/#about"}},r.a.createElement("span",{className:"d-block d-lg-none"},"Aashish Mahajran"),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement(l.b.img,{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:"Aashish Maharjan",drag:!0,dragConstraints:{left:0,top:0,right:0,bottom:0},dragElastic:.1}))),r.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},[{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Portfolio",href:"#portfolio"},{name:"Codepen",href:"#codepen"},{name:"Contact",href:"#contact"}].map((function(e,a){return r.a.createElement(s.a.Link,{href:e.href,key:a},e.name)})))))}function d(e){var a=e.id,t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"resume-section",id:a},r.a.createElement("div",{className:"resume-section-content"},t&&r.a.createElement("h2",{className:"mb-5"},t),n)),r.a.createElement("hr",{className:"m-0"}))}var h=t(55),f=t.n(h),g=t(19),b=function(e){var a=e.href,t=e.icon;return r.a.createElement("a",{className:"social-icon",href:a,target:"_blank",rel:"noopener noreferrer"},t)};function E(){var e=[{href:"https://www.linkedin.com/in/aashish-maharjan-788b661b0/",icon:r.a.createElement(g.d,null)},{href:"https://github.com/aacismaharjan",icon:r.a.createElement(g.c,null)},{href:"https://twitter.com/aacismhrzn",icon:r.a.createElement(g.f,null)},{href:"https://www.facebook.com/aashishmaharjan.2001",icon:r.a.createElement(g.b,null)}];return r.a.createElement(d,{id:"about"},r.a.createElement("h1",{className:"mb-0"},"Aashish",r.a.createElement("span",{className:"text-primary"},"Maharjan")),r.a.createElement("div",{className:"subheading mb-3"},"Purano Kalimati, Kathmandu, Nepal \xb7",r.a.createElement("a",{href:"mailto:aashishmaharjan2001@gmail.com"},"aashishmaharjan2001@gmail.com")),r.a.createElement("p",{className:"lead mb-4"},"Innovative, passionate and hard working certified Web Developer with more than 2 years of experience in Web Design and Web Development. Gained a lot experience in web development, specialized in frontend technologies. Had won SXC Web Design Competition at St. Xavier Computer Festival 2020."),r.a.createElement("div",{className:"btn-group mb-5"},r.a.createElement("button",{className:"btn btn-primary btn-custom py-2 px-5",type:"submit",onClick:function(){return window.open(f.a)}},"Download CV")),r.a.createElement("div",{className:"social-icons"},e.map((function(e,a){var t=e.href,n=e.icon;return r.a.createElement(b,{href:t,icon:n,key:a})}))))}var v=t(21),j=t(8),y=function(e){var a=e.skill,t=a.title,n=a.progress,i=e.secondary,o=void 0!==i&&i;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated ".concat(o?"bg-info":""),role:"progressbar",style:{width:n}},r.a.createElement("span",{className:"text-left pl-2"},t)))},w=t(56),N=t.n(w),S=t(57),x=t.n(S),k=t(36),C=t.n(k),O=t(58),M=t.n(O);C.a.fcRoot(N.a,x.a,M.a);var T=function(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],i=a[1],o=Object(n.useState)([]),c=Object(j.a)(o,2),s=(c[0],c[1]),l=[{title:"HTML",progress:"90%"},{title:"CSS",progress:"80%"},{title:"Javascript",progress:"65%"},{title:"Python",progress:"35%"}],m=[{title:"React.js",progress:"70%"},{title:"Redux",progress:"85%"},{title:"Ant Design",progress:"50%"},{title:"Photoshop / Figma",progress:"60%"},{title:"Django",progress:"30%"},{title:"Bootstrap",progress:"60%"},{title:"Material-UI",progress:"30%"}];Object(n.useEffect)((function(){fetch("https://api.github.com/users/aacismaharjan/repos?per_page=100").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(n.useEffect)((function(){var e=t.reduce((function(e,a){var t=a.language,n=a.stargazers_count;return t?(e[t]?e[t]=Object(v.a)(Object(v.a)({},e[t]),{},{value:e[t].value+1,stars:e[t].stars+1}):e[t]={label:t,value:1,stars:n},e):e}),{}),a=Object.values(e).sort((function(e,a){return a.value-e.value})).slice(0,5);s(a)}),[t]);var p=m,u=l.map((function(e,a){return r.a.createElement("div",{className:"col-md-8 py-1",key:a},r.a.createElement(y,{skill:e}))})),h=p.map((function(e,a){return r.a.createElement("div",{className:"col-md-8 py-1",key:a},r.a.createElement(y,{skill:e,secondary:!0}))}));return r.a.createElement(d,{id:"skills",title:"Skills"},r.a.createElement("div",{className:"subheading mb-3"},"Coding Languages"),r.a.createElement("div",{className:"row mb-4"},u),r.a.createElement("div",{className:"subheading mb-3"},"Frameworks / Libraries"),r.a.createElement("div",{className:"row mb-4"},h))},F=t(128),L=t(125),R=t(29),A=t.n(R);function D(e){var a=e.card,t=a.img,i=a.title,o=a.desc,c=a.demo,s=a.source,m=Object(n.useState)(!0),p=Object(j.a)(m,2),u=p[0],d=p[1],h={backgroundImage:"url(".concat(t,")")},f=function(){return r.a.createElement(l.a,null,u&&r.a.createElement(l.b.div,{className:"overlay"},r.a.createElement("img",{src:t,onLoad:function(){return setTimeout((function(){return d(!1)}),1e3)},onError:function(){return d(!1)},style:{display:"none"},alt:i}),r.a.createElement("img",{src:A.a,alt:"Loading card..."})))};return r.a.createElement(F.a,{"data-aos":"flip-left"},r.a.createElement("div",{className:"card-thumbnail",style:h},r.a.createElement(f,null)),r.a.createElement(F.a.Body,null,r.a.createElement(F.a.Title,{className:"title"},i),r.a.createElement(F.a.Text,null,o),r.a.createElement("div",{className:"btn-grp"},r.a.createElement(L.a,{href:c,target:"_blank"},"Live Demo"),r.a.createElement(L.a,{href:s,target:"_blank",variant:"secondary"},"Source Code"))))}var H=t(20),J=Object(H.b)((function(e){return{portfolios:e.portfolio.portfolios}}))((function(e){var a=e.portfolios,t=Object(n.useState)(8),i=Object(j.a)(t,2),o=i[0],c=i[1],s=Object(n.useState)([]),l=Object(j.a)(s,2),m=l[0],p=l[1];return Object(n.useEffect)((function(){p(a.slice(0,o))}),[o,a]),r.a.createElement(d,{id:"portfolio",title:"Major Open Source Projects"},r.a.createElement("div",{className:"cards"},m&&m.map((function(e,a){return r.a.createElement(D,{card:e,key:a})}))),r.a.createElement("div",{className:"d-flex justify-content-center"},o<a.length&&r.a.createElement("div",{className:"btn btn-primary mt-5 btn-lg",onClick:function(){return c(o+4)}},"See more")))})),_=t(6),W=function(e){var a=e.id,t=Object(n.useState)(!0),i=Object(j.a)(t,2),o=i[0],c=i[1],s="https://codepen.io/aashish2058/embed/".concat(a,"?theme-id=light&default-tab=result"),m=r.a.createElement(l.a,null,o&&r.a.createElement(l.b.div,{className:"overlay",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,type:"spring",stiffness:2e3},exit:{scale:2,opacity:0},transition:{duration:.25}},r.a.createElement("img",{src:A.a,alt:"Loading aacismaharjan..."})));return r.a.createElement("div",{className:"codepen-card mb-5","data-aos":"fade-up"},r.a.createElement("iframe",{scrolling:"no",src:s,frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0,title:a,onLoad:function(){return c(!1)}}),m)},P=Object(H.b)((function(e){return{codepens:e.codepen.codepens}}))((function(e){var a=e.codepens,t=Object(n.useState)(1),i=Object(j.a)(t,2),o=i[0],c=i[1],s=Object(n.useState)([]),l=Object(j.a)(s,2),m=l[0],p=l[1];return Object(n.useEffect)((function(){p(a.slice(0,o))}),[o,a]),r.a.createElement(d,{id:"codepen",title:"Codepen"},r.a.createElement("div",{className:"codepen-cards"},m&&m.map((function(e){return r.a.createElement(W,{id:e,key:e})})),r.a.createElement("div",{className:"d-flex justify-content-center"},o<a.length&&r.a.createElement("div",{className:"btn btn-primary mt-5 btn-lg",onClick:function(){return c(o+1)}},"See more"))))})),I=t(60),B=t.n(I),K=(t(98),t(28)),z=t(61),q=t.n(z),G=function(){var e=Object(n.useState)(new FormData),a=Object(j.a)(e,2),t=a[0],i=a[1],o=function(e){i(Object(v.a)(Object(v.a)({},t),{},Object(K.a)({},e.target.name,e.target.value)))};return r.a.createElement(d,{id:"contact",title:"Contact"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-md-5 order-last order-lg-first","data-aos":"fade-up"},r.a.createElement("div",{className:"subheading mb-3"},"I'd love to hear from you"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Full Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"name","aria-describedby":"emailHelp",placeholder:"Enter your name",value:t.name||"",onChange:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:t.email||"",onChange:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userMessage"},"Message"),r.a.createElement("textarea",{className:"form-control",id:"userMessage",name:"message",rows:"3",placeholder:"Enter message",value:t.message||"",onChange:o})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),t.name&&t.email&&t.message?(alert("Thanks ".concat(t.name,", I will shortly connect with you!")),q.a.post("https://formspree.io/f/xjvpwleg",t,{Accept:"application/json"}),i({})):alert("Something went wrong!")}},"Submit"))),r.a.createElement("div",{className:"col-md-6 mb-5 mb-lg-0","data-aos":"fade-up"},r.a.createElement("div",{className:"subheading mb-3"},"Reach out to me directly"),r.a.createElement("div",{className:"contact-direct"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"item"},r.a.createElement("span",null,r.a.createElement(g.a,null)),r.a.createElement("p",null,"Purano Kalimati, Kathmandu, Nepal"))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"item"},r.a.createElement("span",null,r.a.createElement(g.e,null)),r.a.createElement("p",null,"+977 9810154589"))))),r.a.createElement("div",{className:"contact-map"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.359276980507!2d85.2833091732747!3d27.69906977347229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1860ae22d385%3A0x7c2444e8284cef52!2sKalimati%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1603529732187!5m2!1sen!2snp",frameBorder:"0",allowFullScreen:"","aria-hidden":"false",title:"Contact Me",tabIndex:"0"})))),r.a.createElement("p",{className:"py-3 m-0 mt-5 text-center text-secondary"},"Made with \u2764 by Aashish"))},U=t(62);var X=function(){return Object(n.useEffect)((function(){B.a.init()}),[]),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/"},r.a.createElement(U.a,null,r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement("meta",{name:"description",content:"Aashish Maharjan - Frontend React Web Developer who loves javascript and modern web technologies."}),r.a.createElement("meta",{name:"author",content:"Aashish Maharjan"}),r.a.createElement("title",null,"Aashish Maharjan - A Frontend React Web Developer")),r.a.createElement("div",{id:"wrapper"},r.a.createElement(u,null),r.a.createElement(E,null),r.a.createElement(T,null),r.a.createElement(J,null),r.a.createElement(P,null),r.a.createElement(G,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=t(35),Y=t(16),$=t(65),Q=t(66),Z=t(67),ee=t.n(Z),ae=t(68),te=t.n(ae),ne=t(69),re=t.n(ne),ie=t(70),oe=t.n(ie),ce=(t(117),t(118),t(71)),se=t.n(ce),le=t(72),me=t.n(le),pe=(t(119),t(120),t(73)),ue=t.n(pe),de=(t(121),t(74)),he=t.n(de),fe=t(75),ge=t.n(fe),be=t(76),Ee=t.n(be),ve=t(77),je=t.n(ve),ye={portfolios:[{img:Ee.a,title:"Netflix Clone - ReactJS",desc:"Netflix Clone featuring Netflix's homepage and series / films page with authenticatio by the help of Firebase as backend.",demo:"https://netflix-clone-aacis.netlify.app/",source:"https://github.com/aacismaharjan/netflix-clone"},{img:re.a,title:"Himalayan Resort - ReactJS",desc:"A resort for fictional hotel, in which we can filter out the hotel rooms and see specific info about the hotel.",demo:"https://himalayanresort.netlify.app/",source:"https://github.com/aacismaharjan/himalayanresort"},{img:je.a,title:"Fav Films - Wishlist Your Movies",desc:"Netflix like web app using react.js which features user to wishlist their favourite films.",demo:"https://favfilms.netlify.app",source:"https://favfilms.netlify.app"},{img:he.a,title:"Landing Page Template - HTML & CSS",desc:"Landing page template for watch product. Created with HTML, CSS, JS, Jquery, Bootstrap and other production ready libraries.",demo:"https://getwatch.netlify.app/",source:"https://github.com/aacismaharjan/react_landing_page"},{img:ge.a,title:"Fusion App landing page - HTML & CSS",desc:"Fusion App HTML Template created using HTML, CSS, Bootstrap, JS, Jquery, and other thrid party libraries.",demo:"https://fusion-app-landing-page.netlify.app/",source:"https://fusion-app-landing-page.netlify.app/"},{img:ue.a,title:"Github User Stats - React.js",desc:"Fetches Github Api of user and processes it into meaningful information with the help of fusion charts and Auth0",demo:"https://github-user-stats.netlify.app/",source:"https://github.com/aacismaharjan/search-github-user"},{img:ee.a,title:"Corona Tracker - ReactJS",desc:"It shows the overall corona cases throughout the world, Also presents data in readable diagrams/charts.",demo:"https://aacismaharjan.github.io/coronatracker/",source:"https://github.com/aacismaharjan/coronatracker"},{img:se.a,title:"Simple Portfolio - HTML Template",desc:"Simple Portfolio Template using Pure HTML, CSS & Javascript. No use of any third party libraries.",demo:"https://aacismaharjan.github.io/simple_portfolio/",source:"https://github.com/aacismaharjan/simple_portfolio"},{img:te.a,title:"Hamro Journey - HTML, CSS & JS",desc:"This is simple HTML Template which I have created and won in SXC Web Design Competition 2019.",demo:"https://aacismaharjan.github.io/hamrojourney/",source:"https://github.com/aacismaharjan/hamrojourney"},{img:me.a,title:"Coolors Everywhere! - ReactJS",desc:"Coolors website for fullfiling every developers color need! Find colors, complementary colors, html colors & much more.",demo:"https://aacismaharjan.github.io/coolors/",source:"https://github.com/aacismaharjan/coolors"},{img:oe.a,title:"Result Management System - C Programming",desc:"My first C Programming project in +2. It has CRUD operation only with File handling and has ton of features.",demo:"https://github.com/aacismaharjan/RMS/tree/master/Result%20Managaement%20System%20-%20Version%202.1.0%20-%20Compiled",source:"https://github.com/aacismaharjan/RMS"}]},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye;return e},Ne={codepens:["MWyMjqR","MWydyoe"]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return e},xe=Object(Y.combineReducers)({portfolio:we,codepen:Se}),ke=[Q.a],Ce=Object(Y.createStore)(xe,{},Object($.composeWithDevTools)(Y.applyMiddleware.apply(void 0,ke)));o.a.render(r.a.createElement(H.a,{store:Ce},r.a.createElement(V.a,null,r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,a,t){e.exports=t.p+"static/media/aacismaharjan-loading-logo.90612ea9.svg"},49:function(e,a,t){e.exports=t.p+"static/media/avatar.252219c3.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/resume.02d0dc01.pdf"},67:function(e,a,t){e.exports=t.p+"static/media/coronatracker.90eaa978.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/hamrojourney.53afe366.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/himalayanresort.06356778.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/rms.f27da5af.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/simple_portfolio.269d81a2.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/coolors.432d7724.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/github_user_stats.07efa94c.jpg"},74:function(e,a,t){e.exports=t.p+"static/media/landing_page_template.0bbcde6d.jpg"},75:function(e,a,t){e.exports=t.p+"static/media/app-landingpage.b65312c8.png"},76:function(e,a,t){e.exports=t.p+"static/media/netflix-clone.8a88294f.png"},77:function(e,a,t){e.exports=t.p+"static/media/basic-netflix.505afac3.png"},79:function(e,a,t){e.exports=t(122)},85:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.290bf7db.chunk.js.map