var c=(o,_,n)=>new Promise((f,m)=>{var k=e=>{try{t(n.next(e))}catch(i){m(i)}},d=e=>{try{t(n.throw(e))}catch(i){m(i)}},t=e=>e.done?f(e.value):Promise.resolve(e.value).then(k,d);t((n=n.apply(o,_)).next())});import{B as T,aQ as w,bk as v,bl as S,$ as M,r as b,a1 as l,D as A,F as E,w as a,a6 as p,J as y,ab as R,ae as B}from"./vendor.967e16c7.js";/* empty css               */import{B as $,u as D}from"./useForm.89411c2a.js";import{ag as H,ai as P,_ as V,h as L}from"./index.a8fbe578.js";import{g as N,b as U,d as x}from"./user.6d930266.js";import{t as G}from"./data.87cd3e5c.js";import{u as J}from"./index.78f75e51.js";import Q from"./TokenModal.3ea277ce.js";/* empty css              *//* empty css                */import"./index.7a13db50.js";/* empty css               *//* empty css               *//* empty css               */import"./index.8de64682.js";import"./download.6e7532eb.js";import"./useWindowSizeFn.9d0c782c.js";const W=T({components:{BasicForm:$,CollapseContainer:H,Button:w,ARow:v,ACol:S,TokenModal:Q,PopConfirmButton:P},setup(){const{createMessage:o}=L(),[_,{getFieldsValue:n,updateSchema:f,resetFields:m}]=D({labelWidth:120,schemas:G,showActionButtonGroup:!1}),[k,{openModal:d}]=J();M(()=>c(this,null,function*(){yield e()}));const t=b({});function e(){return c(this,null,function*(){const s=yield N(),u=[];return s.forEach(r=>{t.value[r._id]=r,u.push({label:r.title,value:r._id,key:r._id})}),m(),i(u),u})}function i(s){return c(this,null,function*(){f({field:"_id",componentProps:({formModel:u})=>({onChange:r=>{u.title=t.value[r].title,u.value=t.value[r].value},options:s})})})}function g(){return c(this,null,function*(){try{yield U(n()),o.success("\u4FEE\u6539\u6210\u529F"),yield e()}catch(s){}})}function h(){return c(this,null,function*(){d(!0)})}function C(){return c(this,null,function*(){yield e()})}function F(){return c(this,null,function*(){n();const{_id:s}=n();if(s)try{yield x(s),o.success("\u5220\u9664\u6210\u529F"),yield e()}catch(u){}else return o.error("\u8BF7\u5148\u9009\u62E9Token")})}return{registerForm:_,addSuccess:C,registerModal:k,addTokenHandler:h,tokenDeleteHandle:F,handleSubmit:g}}}),j={class:"text-right py-2"},q=B(" \u6DFB\u52A0Token "),z={class:"text-center"},I=B(" \u66F4\u65B0Token "),K=B("\u5220\u9664Token");function O(o,_,n,f,m,k){const d=l("Button"),t=l("a-col"),e=l("BasicForm"),i=l("PopConfirmButton"),g=l("a-row"),h=l("CollapseContainer"),C=l("TokenModal");return A(),E(R,null,[a(h,{title:"token\u5217\u8868",canExpan:!1},{default:p(()=>[a(g,{gutter:24},{default:p(()=>[a(t,{span:24},{default:p(()=>[y("div",j,[a(d,{type:"primary",onClick:o.addTokenHandler},{default:p(()=>[q]),_:1},8,["onClick"])])]),_:1}),a(t,{span:24},{default:p(()=>[a(e,{onRegister:o.registerForm},null,8,["onRegister"]),y("div",z,[a(d,{type:"primary",onClick:o.handleSubmit},{default:p(()=>[I]),_:1},8,["onClick"]),a(i,{type:"primary",class:"ml-2",danger:"",title:"\u662F\u5426\u5220\u9664\u6B64Token",onConfirm:o.tokenDeleteHandle},{default:p(()=>[K]),_:1},8,["onConfirm"])])]),_:1})]),_:1})]),_:1}),a(C,{onRegister:o.registerModal,onSuccess:o.addSuccess},null,8,["onRegister","onSuccess"])],64)}var fe=V(W,[["render",O]]);export{fe as default};
