import{B as e,K as t,aD as o,c as s,O as r,S as i}from"./index.e025cb94.js";import{k as n,bO as a,f as m,a as g,K as p,o as d,n as u,q as c,W as f,S as j}from"./vendor.3d602f9f.js";import{c as l}from"./createAsyncComponent.7cde711f.js";import S from"./SessionTimeoutLogin.7e94589d.js";import"./Login.f3ad23e9.js";import"./LoginForm.fe37516e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.92c53835.js";import"./ForgetPasswordForm.f3de8536.js";import"./CountdownInput.76f609c0.js";import"./RegisterForm.0b2834e7.js";import"./StrengthMeter.e997838c.js";import"./MobileForm.a084d170.js";import"./QrCodeForm.adb23561.js";import"./download.e3bd47f8.js";var T=n({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:l((()=>e((()=>import("./index.44d8b53a.js")),["/vue-vben-admin-thin/assets/index.44d8b53a.js","/vue-vben-admin-thin/assets/LockPage.5e42c165.js","/vue-vben-admin-thin/assets/LockPage.265a0b3b.css","/vue-vben-admin-thin/assets/vendor.3d602f9f.js","/vue-vben-admin-thin/assets/vendor.4fe9c491.css","/vue-vben-admin-thin/assets/index.e025cb94.js","/vue-vben-admin-thin/assets/index.47530ebe.css","/vue-vben-admin-thin/assets/lock.41c0015a.js","/vue-vben-admin-thin/assets/header.d801b988.js"]))),SettingDrawer:l((()=>e((()=>import("./index.7d7cd272.js").then((function(e){return e.i}))),["/vue-vben-admin-thin/assets/index.7d7cd272.js","/vue-vben-admin-thin/assets/index.3ffe1ea6.css","/vue-vben-admin-thin/assets/index.6d85b653.css","/vue-vben-admin-thin/assets/vendor.3d602f9f.js","/vue-vben-admin-thin/assets/vendor.4fe9c491.css","/vue-vben-admin-thin/assets/index.85a266ec.js","/vue-vben-admin-thin/assets/index.96128ebe.css","/vue-vben-admin-thin/assets/index.f722313c.css","/vue-vben-admin-thin/assets/index.e025cb94.js","/vue-vben-admin-thin/assets/index.47530ebe.css","/vue-vben-admin-thin/assets/createAsyncComponent.7cde711f.js","/vue-vben-admin-thin/assets/index.f83a1aa0.js","/vue-vben-admin-thin/assets/index.8631dfcb.css","/vue-vben-admin-thin/assets/useWindowSizeFn.c3422ffc.js","/vue-vben-admin-thin/assets/usePageContext.580e29b0.js","/vue-vben-admin-thin/assets/useSortable.c1c1818d.js","/vue-vben-admin-thin/assets/lock.41c0015a.js"]))),SessionTimeoutLogin:S},setup(){const{getUseOpenBackTop:e,getShowSettingButton:n,getSettingButtonPosition:a,getFullContent:p}=t(),d=o(),{prefixCls:u}=s("setting-drawer-fearure"),{getShowHeader:c}=r(),f=m((()=>d.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:m((()=>{if(!g(n))return!1;const e=g(a);return e===i.AUTO?!g(c)||g(p):e===i.FIXED})),prefixCls:u,getIsSessionTimeout:f}}});T.render=function(e,t,o,s,r,i){const n=p("LayoutLockPage"),a=p("BackTop"),m=p("SettingDrawer"),g=p("SessionTimeoutLogin");return d(),u(j,null,[c(n),e.getUseOpenBackTop?(d(),u(a,{key:0,target:e.getTarget},null,8,["target"])):f("",!0),e.getIsFixedSettingDrawer?(d(),u(m,{key:1,class:e.prefixCls},null,8,["class"])):f("",!0),e.getIsSessionTimeout?(d(),u(g,{key:2})):f("",!0)],64)};export default T;
