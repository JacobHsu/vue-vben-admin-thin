import{k as s,bj as e,f as a,K as t,o as r,n as l,q as n,s as c,bk as x}from"./vendor.3fb9be1a.js";/* empty css              */import{f as d}from"./index.3b55b5e4.js";import{h as o}from"./header.d801b988.js";var i=s({components:{Avatar:e},setup(){const s=d();return{userinfo:a((()=>s.getUserInfo)),headerImg:o}}});const f={class:"lg:flex"},m={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},p={class:"md:text-lg text-md"},u=n("span",{class:"text-secondary"}," 今日晴，20℃ - 32℃！ ",-1),v=x('<div class="flex flex-1 justify-end md:mt-0 mt-4"><div class="flex flex-col justify-center text-right"><span class="text-secondary"> 待办 </span><span class="text-2xl">2/10</span></div><div class="flex flex-col justify-center text-right md:mx-16 mx-12"><span class="text-secondary"> 项目 </span><span class="text-2xl">8</span></div><div class="flex flex-col justify-center text-right md:mr-10 mr-4"><span class="text-secondary"> 团队 </span><span class="text-2xl">300</span></div></div>',1);i.render=function(s,e,a,x,d,o){const i=t("Avatar");return r(),l("div",f,[n(i,{src:s.userinfo.avatar||s.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),n("div",m,[n("h1",p,"早安, "+c(s.userinfo.realName)+", 开始您一天的工作吧！",1),u]),v])};export default i;
