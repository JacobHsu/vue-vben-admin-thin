import{_ as t}from"./useModal.d0225995.js";import{_ as e,u as s}from"./useDescription.18491154.js";import{e as o}from"./index.e025cb94.js";import{getDescSchema as r}from"./data.dc19c9bd.js";import{k as a,K as i,o as n,n as d,P as c,q as f,N as l}from"./vendor.3d602f9f.js";import"./useWindowSizeFn.c3422ffc.js";/* empty css              */var m=a({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:e},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[e]=s({column:2,schema:r()});return{register:e,useI18n:o,t:t}}});m.render=function(t,e,s,o,r,a){const m=i("Description"),p=i("BasicModal");return n(),d(p,l({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:c((()=>[f(m,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default m;
