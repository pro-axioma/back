"use strict";(self["webpackChunktask_front"]=self["webpackChunktask_front"]||[]).push([[268],{6924:function(t,e,l){l.r(e),l.d(e,{default:function(){return D}});var a=l(6252),s=l(3577),r=l(6919),o=l(6673),u=l(1669),i=l(9003),n=l(3379),d=l(1923),c=l(5959),h=l(5539),m=l(216),f=l(8942),w=l(2716),p=l(2323),v=l(2214),_=l(3099),b=l(8676);const g=(0,v.aZ)({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...(0,f.f)(),...(0,w.Q)(),...(0,p.x$)()},setup(t,e){let{slots:l}=e;const{themeClasses:s}=(0,p.ER)(t),{densityClasses:r}=(0,f.t)(t);return(0,_.L)((()=>{var e,o,u;return(0,a.Wm)(t.tag,{class:["v-table",{"v-table--fixed-height":!!t.height,"v-table--fixed-header":t.fixedHeader,"v-table--fixed-footer":t.fixedFooter,"v-table--has-top":!!l.top,"v-table--has-bottom":!!l.bottom,"v-table--hover":t.hover},s.value,r.value]},{default:()=>[null==(e=l.top)?void 0:e.call(l),l.default?(0,a.Wm)("div",{class:"v-table__wrapper",style:{height:(0,b.kb)(t.height)}},[(0,a.Wm)("table",null,[l.default()])]):null==(o=l.wrapper)?void 0:o.call(l),null==(u=l.bottom)?void 0:u.call(l)]})})),{}}}),k=(0,a._)("h2",null,"Все выплаты",-1),x=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-left"}," ID "),(0,a._)("th",{class:"text-left"}," Логин "),(0,a._)("th",{class:"text-left"}," Реквизиты "),(0,a._)("th",{class:"text-left"}," Сумма "),(0,a._)("th",{class:"text-left"}," Валюта "),(0,a._)("th",{class:"text-left"}," Статус ")])],-1),y={key:1};function W(t,e,l,f,w,p){return(0,a.wg)(),(0,a.j4)(u.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n.D,{cols:"12"},{default:(0,a.w5)((()=>[k,(0,a.Wm)(r.w,{modelValue:w.alerts.successAlert.active,"onUpdate:modelValue":e[0]||(e[0]=t=>w.alerts.successAlert.active=t),type:"success",closable:"","close-label":"Закрыть",title:"Успех!"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(w.alerts.successAlert.text),1)])),_:1},8,["modelValue"]),(0,a.Wm)(r.w,{modelValue:w.alerts.errorAlert.active,"onUpdate:modelValue":e[1]||(e[1]=t=>w.alerts.errorAlert.active=t),type:"error",closable:"","close-label":"Закрыть",title:"Успех!"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(w.alerts.errorAlert.text),1)])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(i.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(o.T,{color:"primary",to:"/payments/create"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Создать выплату ")])),_:1})])),_:1})])),_:1}),(0,a.Wm)(i.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n.D,{cols:"12"},{default:(0,a.w5)((()=>[this.items.length>0?((0,a.wg)(),(0,a.j4)(g,{key:0},{default:(0,a.w5)((()=>[x,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.items,((t,e)=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,s.zw)(t.id),1),(0,a._)("td",null,(0,s.zw)(t.login),1),(0,a._)("td",null,(0,s.zw)(t.properties),1),(0,a._)("td",null,(0,s.zw)(t.sum),1),(0,a._)("td",null,(0,s.zw)(t.currency),1),(0,a._)("td",null,[(0,a.Wm)(m.T,null,{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(o.T,(0,a.dG)({color:"primary"},e),{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(p.paymentStatus(t.status)),1)])),_:2},1040)])),default:(0,a.w5)((()=>[(0,a.Wm)(d.i,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)([{name:"Оплачен",status:!0},{name:"Не оплачен",status:!1}],((l,r)=>(0,a.Wm)(c.l,{key:r,value:r},{default:(0,a.w5)((()=>[(0,a.Wm)(h.V,{onClick:a=>p.changeStatus(t.id,l.status,e)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(l.name),1)])),_:2},1032,["onClick"])])),_:2},1032,["value"]))),64))])),_:2},1024)])),_:2},1024)])])))),128))])])),_:1})):((0,a.wg)(),(0,a.iD)("p",y," Выплат не найдено... "))])),_:1})])),_:1})])),_:1})}var A={data(){return{items:[],alerts:{successAlert:{active:!1,text:""},errorAlert:{active:!1,text:""}}}},methods:{getItems(){var t=new Headers;t.append("Authorization","Bearer "+this.$store.state.user.token);var e={method:"GET",headers:t,redirect:"follow"};fetch(this.$store.state.global.host+"/api/v1/admin/payments/get-list",e).then((t=>{t.ok&&t.json().then((t=>{this.items=t.result}))})).catch((t=>alert("Произошла ошибка")))},paymentStatus(t){return t?"Оплачен":"Не оплачен"},changeStatus(t,e,l){var a=new Headers;a.append("Authorization","Bearer "+this.$store.state.user.token),a.append("Content-Type","application/json");var s={method:"POST",headers:a,body:JSON.stringify({id:t,status:e}),redirect:"follow"};fetch(this.$store.state.global.host+"/api/v1/admin/payments/status-update",s).then((t=>{t.ok?(this.items[l].status=e,this.alerts.successAlert.text="Статус выплаты успешно изменён",this.alerts.successAlert.active=!0,setTimeout((()=>{this.alerts.successAlert.active=!1}),2e3)):(this.alerts.errorAlert.text="Не удалось изменить статус выплаты",this.alerts.errorAlert.active=!0,setTimeout((()=>{this.alerts.errorAlert.active=!1}),2e3))})).catch((t=>alert("Произошла ошибка")))}},mounted(){this.getItems()}},z=l(3744);const T=(0,z.Z)(A,[["render",W]]);var D=T}}]);
//# sourceMappingURL=268.efdbd7d6.js.map