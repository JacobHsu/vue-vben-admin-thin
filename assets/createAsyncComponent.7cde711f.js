import{ba as e,q as o,aG as a}from"./vendor.3d602f9f.js";import{a6 as n}from"./index.e025cb94.js";function r(r,s={}){const{size:t="small",delay:i=100,timeout:m=3e4,loading:d=!1,retry:l=!0}=s;return e({loader:r,loadingComponent:d?o(a,{spinning:!0,size:t},null):void 0,timeout:m,delay:i,onError:l?(e,o,a,n)=>{e.message.match(/fetch/)&&n<=3?o():a()}:n})}export{r as c};
