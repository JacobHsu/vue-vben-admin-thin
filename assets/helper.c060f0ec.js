import{aO as t}from"./vendor.3fb9be1a.js";function e(e,s="lang"){const n={};return Object.keys(e).forEach((o=>{const a=e[o].default;let r=o.replace(`./${s}/`,"").replace(/^\.\//,"");const c=r.lastIndexOf(".");r=r.substring(0,c);const f=r.split("/"),l=f.shift(),i=f.join(".");l&&(i?(t(n,l,n[l]||{}),t(n[l],i,a)):t(n,l,a||{}))})),n}export{e as g};
