import{o as e,c as i,a as t,b as s,r as a,d as r,e as o,f as l,g as n}from"./vendor.8bc22f9e.js";var c="https://www.juso1.com/assets/logo-white.5490fc76.svg";const d={},g={key:1,class:"pusher"},m=t("div",{class:"ui large top fixed borderless hidden menu"},[t("div",{class:"ui container"},[t("a",{class:"header item loading-trigger",href:"https://hellogirls.github.io/"},[t("div",{class:"ui middle aligned image"},[t("img",{alt:"Logo",class:"logo-image",src:"https://www.juso1.com/assets/logo-dark.dfe529b1.svg"})]),t("div",{class:"logo-text"},"HELLOGIRLS")]),t("a",{class:"item loading-trigger",href:"/",title:""},[t("i",{class:"home icon"}),s("首页")]),t("a",{class:"item loading-trigger",href:"/pages",title:""},[t("i",{class:"qrcode icon"}),s("收录&留言")]),t("a",{class:"item loading-trigger",href:"/donate",title:""},[t("i",{class:"newspaper icon"}),s("值得一看")]),t("a",{class:"item loading-trigger",href:"https://github.com/hellogirls/XXFLDH/",title:""},[t("i",{class:"location arrow icon"}),s("最新地址")]),t("div",{class:"right menu"},[t("a",{class:"item"},[t("i",{class:"mail red icon"}),s("联系邮箱：wjdrkdbs9310@163.com")])])])],-1),h={class:"ui vertical inverted sidebar menu left"},u=t("a",{class:"header item loading-trigger"},[t("div",{class:"ui middle aligned image"},[t("img",{alt:"Logo",class:"logo-image",src:c})]),t("div",{class:"logo-text"},"HELLOGIRLS")],-1),p=t("i",{class:"home icon"},null,-1),f=s("首页"),v=t("i",{class:"qrcode icon"},null,-1),w=s("收录&留言"),x=t("i",{class:"newspaper icon"},null,-1),_=s("值得一看"),L=t("a",{class:"item loading-trigger",title:""},[t("i",{class:"location arrow icon"}),s("最新地址")],-1);d.render=function(s,r){const o=a("router-view");return s.$route.meta.hideHeader?(e(),i(o,{key:0})):(e(),i("div",g,[m,t("div",h,[u,t("a",{class:"item loading-trigger",title:"",onClick:r[1]||(r[1]=e=>s.$router.replace("/index/index"))},[p,f]),t("a",{class:"item loading-trigger",title:"",onClick:r[2]||(r[2]=e=>s.$router.replace("/richtext/index"))},[v,w]),t("a",{class:"item loading-trigger",title:"",onClick:r[3]||(r[3]=e=>s.$router.replace("/richtext/index"))},[x,_]),L]),t(o)]))};let b;const k={},E=function(e,i){if(!i||0===i.length)return e();if(void 0===b){const e=document.createElement("link").relList;b=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(i.map((e=>{if((e=`https://www.juso1.com/${e}`)in k)return;k[e]=!0;const i=e.endsWith(".css"),t=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const s=document.createElement("link");return s.rel=i?"stylesheet":b,i||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),i?new Promise(((e,i)=>{s.addEventListener("load",e),s.addEventListener("error",i)})):void 0}))).then((()=>e()))},j=r({history:o(),routes:[{path:"/",redirect:"/index/index"},{path:"/index/index",component:()=>E((()=>import("./index.5e8be7cc.js")),["assets/index.5e8be7cc.js","assets/database.81b98f90.js","assets/vendor.8bc22f9e.js"])},{path:"/richtext/index",component:()=>E((()=>import("./index.46f03a6a.js")),["assets/index.46f03a6a.js","assets/database.81b98f90.js","assets/vendor.8bc22f9e.js"])},{path:"/webview/index",meta:{hideHeader:!0},component:()=>E((()=>import("./index.21f8f8bb.js")),["assets/index.21f8f8bb.js","assets/index.64fb59d4.css","assets/vendor.8bc22f9e.js"])}]});var C={"首页":"Home","收录&留言":"신청&문의","值得一看":"공지사항","最新地址":"다음주소","联系邮箱":"텔레그램","Ctrl+D快速收藏本站":"Ctrl+D 웹페이지를 북마크로 저장,영구도메인: https://www.juso123.com","小X福利导航 - 满足您的欲望！":"웹사이트 주소 검색 BEST엔진!","本站宗旨：收录全面":"주소123,오피,웹툰,드라마,먹튀검증,실시간TV, 주소찾기!",TOP:"TOP-성인","推荐①区":"오피","推荐②区":"성인","站长推荐":"웹툰","在线视频":"티비/영화다시보기","福利导航":"커뮤니티","论坛博客":"웹툴","福利小说":"SNS","高清资源":"VPN","动漫ACG":"게임","国外视频":"쇼핑","购物":"구직","工具":"여행","社交":"방송","学习":"약국","求职":"공부","娱乐":"동맹사이트"};let O={};Object.keys(C).forEach((e=>{O[e]=e}));const P=l({locale:"ko_KR",fallbackLocale:"zh_CN",messages:{zh_CN:O,ko_KR:C}}),y=n(d);y.use(P),y.use(j),y.mount("#app");export{c as _};
