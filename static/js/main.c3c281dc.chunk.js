(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/avatar.a42176f4.jpg"},function(e,a,t){e.exports=t.p+"static/media/resume.f3dfe663.pdf"},,,function(e,a,t){e.exports=t.p+"static/media/thumb.be5e8be4.png"},function(e,a,t){e.exports=t.p+"static/media/hamrojourney.23fb6110.png"},function(e,a,t){e.exports=t.p+"static/media/himalayanresort.29a7b106.png"},function(e,a,t){e.exports=t.p+"static/media/rms.86885b54.png"},function(e,a,t){e.exports=t.p+"static/media/quizbee.b34977b6.png"},function(e,a,t){e.exports=t.p+"static/media/youtube-clone.f4940144.png"},function(e,a,t){e.exports=t.p+"static/media/simple_portfolio.7ebadcf6.png"},function(e,a,t){e.exports=t.p+"static/media/coolors.730804f4.png"},function(e,a,t){e.exports=t.p+"static/media/landing_page_template.94f80a85.png"},function(e,a,t){e.exports=t.p+"static/media/getwatch.6a34d1ad.png"},function(e,a,t){e.exports=t.p+"static/media/github_user_stats.7bb6b9f8.png"},,,,,function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/loading.11cc34bb.svg"},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),i=t.n(o),s=(t(40),t(41),t(7)),c=t(16),l=t.n(c);function m(){var e=Object(n.useState)(l.a),a=Object(s.a)(e,2),t=a[0],o=a[1],i=Object(n.useState)(""),c=Object(s.a)(i,2),m=c[0],p=c[1];return Object(n.useEffect)((function(){fetch("https://api.github.com/users/aacismaharjan").then((function(e){return e.json()})).then((function(e){e.avatar_url&&(o(e.avatar_url),p(e.name))})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"/"},r.a.createElement("span",{className:"d-block d-lg-none"},m),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:t,alt:"Aashish Maharjan"}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#portfolio"},"Portfolio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#codepen"},"Codepen")))))}function p(e){var a=e.id,t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"resume-section",id:a},r.a.createElement("div",{className:"resume-section-content"},t&&r.a.createElement("h2",{className:"mb-5"},t),n)),r.a.createElement("hr",{className:"m-0"}))}var u=t(17),h=t.n(u),d=function(e){var a=e.href,t=e.icon;return r.a.createElement("a",{className:"social-icon",href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab ".concat(t)}))};function g(){return r.a.createElement(p,{id:"about"},r.a.createElement("h1",{className:"mb-0"},"Aashish",r.a.createElement("span",{className:"text-primary"},"Maharjan")),r.a.createElement("div",{className:"subheading mb-3"},"Purano Kalimati, Kathmandu, Nepal \xb7",r.a.createElement("a",{href:"mailto:aashishmaharjan2001@gmail.com"},"aashishmaharjan2001@gmail.com")),r.a.createElement("p",{className:"lead mb-4"},"Aashish Maharjan connects online brands to their target audiences for the perfect communicating experience. At the Gyanodaya School, Aashish learned the importance of applying classic web designing ideas to modern brands strategies from experts in the field, including his Computer Teacher, Mr. Mannor Shakya."),r.a.createElement("div",{className:"btn-group mb-5"},r.a.createElement("button",{className:"btn btn-primary btn-custom py-2 px-5",type:"submit",onClick:function(){return window.open(h.a)}},"Download CV")),r.a.createElement("div",{className:"social-icons"},[{href:"https://www.linkedin.com/in/aashish-maharjan-788b661b0/",icon:"fa-linkedin-in"},{href:"https://github.com/aacismaharjan",icon:"fa-github"},{href:"https://twitter.com/aacismhrzn",icon:"fa-twitter"},{href:"https://www.facebook.com/aashishmaharjan.2001",icon:"fa-facebook-f"}].map((function(e,a){var t=e.href,n=e.icon;return r.a.createElement(d,{href:t,icon:n,key:a})}))))}var b=t(18),f=t(19),v=t(34),E=t(33),j=function(e){var a=e.skill,t=a.title,n=a.progress,o=e.secondary,i=void 0!==o&&o;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated ".concat(i?"bg-info":""),role:"progressbar",style:{width:n}},r.a.createElement("span",{className:"text-left pl-2"},t)))},y=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={workData:[{icon:"fa-check",text:"Mobile-First, Responsive Design"},{icon:"fa-check",text:"Cross Browser Testing & Debugging"},{icon:"fa-check",text:"Cross Functional Teams"},{icon:"fa-check",text:"Agile Development & Scrum"}],skills:[{title:"HTML",progress:"90%"},{title:"CSS",progress:"80%"},{title:"Javascript",progress:"65%"},{title:"Python",progress:"35%"},{title:"C Programming",progress:"40%"},{title:"Photoshop / Figma",progress:"60%"}],frameworks:[{title:"Bootstrap",progress:"60%"},{title:"Material-UI",progress:"30%"},{title:"React.js",progress:"55%"},{title:"Django",progress:"30%"}]},e}return Object(f.a)(t,[{key:"render",value:function(){var e=this.state,a=e.skills,t=e.frameworks,n=a.map((function(e,a){return r.a.createElement("div",{className:"col-md-8 py-1",key:a},r.a.createElement(j,{skill:e}))})),o=t.map((function(e,a){return r.a.createElement("div",{className:"col-md-8 py-1",key:a},r.a.createElement(j,{skill:e,secondary:!0}))}));return r.a.createElement(p,{id:"skills",title:"Skills"},r.a.createElement("div",{className:"subheading mb-3"},"Coding Languages"),r.a.createElement("div",{className:"row mb-4"},n),r.a.createElement("div",{className:"subheading mb-3"},"Frameworks / Libraries"),r.a.createElement("div",{className:"row mb-4"},o))}}]),t}(n.Component);t(42);function w(e){var a=e.card,t=a.img,n=a.title,o=a.desc,i=a.demo,s=a.source;return r.a.createElement("div",{className:"card","data-aos":"flip-left"},r.a.createElement("div",{className:"card-thumbnail",style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"title"},n),r.a.createElement("p",null,o),r.a.createElement("div",{className:"btn-grp"},r.a.createElement("a",{href:i,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),r.a.createElement("a",{href:s,className:"btn btn-secondary",target:"_blank",rel:"noopener noreferrer"},"Source Code"))))}var N=["MWydyoe","MWyMjqR"],k=t(20),S=t.n(k),x=t(21),C=t.n(x),M=t(22),R=t.n(M),_=t(23),T=t.n(_),O=t(24),A=t.n(O),P=t(25),J=t.n(P),L=t(26),I=t.n(L),D=t(27),F=t.n(D),z=t(28),H=t.n(z),W=t(29),B=t.n(W),q=t(30),G=t.n(q),U=[{img:B.a,title:"Apple Watch - ReactJs Template",desc:"Created with highly reusable components, can be updated from remote file.",demo:"https://getwatch.netlify.app/",source:"https://github.com/aacismaharjan/react_landing_page"},{img:G.a,title:"Github User Stats - React.js",desc:"Fetches Github Api of user and processes it into meaningful information with the help of fusion charts and Auth0",demo:"https://github-user-stats.netlify.app/",source:"https://github.com/aacismaharjan/search-github-user"},{img:R.a,title:"Himalayan Resort - ReactJS",desc:"A resort for fictional hotel, in which we can filter out the hotel rooms and see specific info about the hotel.",demo:"https://himalayanresort.netlify.app/",source:"https://github.com/aacismaharjan/himalayanresort"},{img:S.a,title:"Corona Tracker - ReactJS",desc:"It shows the overall corona cases throughout the world, Also presents data in readable diagrams/charts.",demo:"https://aacismaharjan.github.io/coronatracker/",source:"https://github.com/aacismaharjan/coronatracker"},{img:J.a,title:"Youtube Clone - ReactJS",desc:"Simple Youtube Clone with React.js. It utilizes the Youtube api to fetch the data and display it",demo:"https://aacismaharjan.github.io/youtube-clone/",source:"https://github.com/aacismaharjan/youtube-clone"},{img:H.a,title:"Product Landing Page - HTML Template",desc:"Landing page for client with Modern Looks, Design and Framework!",demo:"https://aacismaharjan.github.io/product_landing_page/",source:"https://github.com/aacismaharjan/product_landing_page"},{img:I.a,title:"Simple Portfolio - HTML Template",desc:"Simple Portfolio Template using Pure HTML, CSS & Javascript. No use of any third party libraries.",demo:"https://aacismaharjan.github.io/simple_portfolio/",source:"https://github.com/aacismaharjan/simple_portfolio"},{img:C.a,title:"Hamro Journey - HTML, CSS & JS",desc:"This is simple HTML Template which I have created and won in SXC Web Design Competition 2019.",demo:"https://aacismaharjan.github.io/hamrojourney/",source:"https://github.com/aacismaharjan/hamrojourney"},{img:A.a,title:"Quizbee - Reactjs and External Api",desc:"Simple Quizbee web app build with ReactJS which eats the api and interacts with users!",demo:"https://aacismaharjan.github.io/quizbee/",source:"https://github.com/aacismaharjan/quizbee"},{img:F.a,title:"Coolors Everywhere! - ReactJS",desc:"Coolors website for fullfiling every developers color need! Find colors, complementary colors, html colors & much more.",demo:"https://aacismaharjan.github.io/coolors/",source:"https://github.com/aacismaharjan/coolors"},{img:T.a,title:"Result Management System - C Programming",desc:"My first C Programming project in +2. It has CRUD operation only with File handling and has ton of features.",demo:"https://github.com/aacismaharjan/RMS/tree/master/Result%20Managaement%20System%20-%20Version%202.1.0%20-%20Compiled",source:"https://github.com/aacismaharjan/RMS"}],Y=r.a.createContext(),K=function(e){var a=e.children,t=Object(n.useState)(N),o=Object(s.a)(t,2),i=o[0],c=(o[1],Object(n.useState)(U)),l=Object(s.a)(c,2),m=l[0];l[1];return r.a.createElement(Y.Provider,{value:{codepenItems:i,portfolioItems:m}},a)};function Q(){var e=Object(n.useContext)(Y).portfolioItems;return r.a.createElement(p,{id:"portfolio",title:"portfolio"},r.a.createElement("div",{className:"cards"},e&&e.map((function(e,a){return r.a.createElement(w,{card:e,key:a})}))))}var V=t(1),X=function(e){var a=e.id,t="https://codepen.io/aashish2058/embed/".concat(a,"?theme-id=light&default-tab=result");return r.a.createElement("div",{className:"codepen-card mb-5","data-aos":"fade-up"},r.a.createElement("iframe",{scrolling:"no",src:t,frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}))};function $(){var e=Object(n.useContext)(Y).codepenItems;return r.a.createElement(p,{id:"codepen",title:"Codepen"},r.a.createElement("div",{className:"codepen-cards"},e&&e.map((function(e){return r.a.createElement(X,{id:e,key:e})}))))}var Z=t(31),ee=t.n(Z);t(43);var ae=function(){return Object(n.useEffect)((function(){ee.a.init()}),[]),r.a.createElement(V.c,null,r.a.createElement(V.a,{exact:!0,path:"/"},r.a.createElement("div",{id:"wrapper"},r.a.createElement(m,null),r.a.createElement(g,null),r.a.createElement(y,null),r.a.createElement(Q,null),r.a.createElement($,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=t(10);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null,r.a.createElement(te.a,null,r.a.createElement(ae,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.c3c281dc.chunk.js.map