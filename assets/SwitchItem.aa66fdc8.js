import{k as e,br as t,f as n,K as s,o as i,n as a,q as o,s as d,N as r,x as c}from"./vendor.3fb9be1a.js";/* empty css              */import{c as l,e as p}from"./index.3b55b5e4.js";import{b as m}from"./index.86a69c2e.js";import"./index.c3a929c7.js";import"./createAsyncComponent.2f8c37e1.js";import"./index.d5f9ab01.js";import"./useWindowSizeFn.c09f1ce5.js";import"./usePageContext.da74b1e2.js";/* empty css              */import"./useSortable.796c4f76.js";import"./lock.595c4eb4.js";/* empty css              */var f=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=l("setting-switch-item"),{t:s}=p();return{prefixCls:t,t:s,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const h=c()(((e,t,n,c,l,p)=>{const m=s("Switch");return i(),a("div",{class:e.prefixCls},[o("span",null,d(e.title),1),o(m,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=h,f.__scopeId="data-v-440e72fd";export default f;
