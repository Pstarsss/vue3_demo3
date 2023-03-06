"use strict";(self.webpackChunkmy_demo3=self.webpackChunkmy_demo3||[]).push([[642],{4657:function(t,e,n){var l=n(8081),o=n.n(l),a=n(3645),d=n.n(a)()(o());d.push([t.id,".footer[data-v-2d44b5d6] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer .count[data-v-2d44b5d6] {\n  padding-left: 5px;\n}\n",""]),e.Z=d},8453:function(t,e,n){var l=n(8081),o=n.n(l),a=n(3645),d=n.n(a)()(o());d.push([t.id,".text[data-v-1f79dd6e] {\n  display: block;\n  width: 100%;\n  outline: none;\n  border: 0;\n  background: transparent;\n  border: 1px solid #ccc;\n  padding: 5px 0;\n  box-sizing: border-box;\n  text-indent: 10px;\n}\n",""]),e.Z=d},9589:function(t,e,n){var l=n(8081),o=n.n(l),a=n(3645),d=n.n(a)()(o());d.push([t.id,".item[data-v-37137f14] {\n  min-height: 30px;\n  list-style: none;\n  border: 1px solid #ccc;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.item:hover .btn[data-v-37137f14] {\n  display: block;\n}\n.item .btn[data-v-37137f14] {\n  display: none;\n  margin-right: 6px;\n}\n.item label[data-v-37137f14] {\n  display: flex;\n  align-items: center;\n  padding-left: 5px;\n}\n.item label .todo-title[data-v-37137f14] {\n  font-size: 12px;\n  text-indent: 4px;\n}\n",""]),e.Z=d},7679:function(t,e,n){var l=n(8081),o=n.n(l),a=n(3645),d=n.n(a)()(o());d.push([t.id,".todo-main[data-v-286dd0dc] {\n  margin: 0;\n  padding: 0;\n  margin: 10px 0;\n}\n",""]),e.Z=d},8047:function(t,e,n){var l=n(8081),o=n.n(l),a=n(3645),d=n.n(a)()(o());d.push([t.id,".card[data-v-fcc84e96] {\n  display: block;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  width: 600px;\n  margin: 0 auto;\n  padding: 10px;\n}\n",""]),e.Z=d},642:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var l=n(6252);const o={class:"card"};var a=n(2262),d=n(9963),i=(0,l.aZ)({name:"Header",setup(t,{emit:e}){let n=(0,a.iH)("");return{title:n,addInfo:function(){n&&(e("addInfo",n.value.trim()),n.value="")}}}}),s=n(3379),r=n.n(s),c=n(7795),u=n.n(c),p=n(569),m=n.n(p),f=n(3565),b=n.n(f),v=n(9216),g=n.n(v),h=n(4589),x=n.n(h),y=n(8453),Z={};Z.styleTagTransform=x(),Z.setAttributes=b(),Z.insert=m().bind(null,"head"),Z.domAPI=u(),Z.insertStyleElement=g(),r()(y.Z,Z),y.Z&&y.Z.locals&&y.Z.locals;var k=n(3744),C=(0,k.Z)(i,[["render",function(t,e,n,o,a,i){return(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{class:"text",type:"text",placeholder:"请输入你的任务名称，按回车键确认","onUpdate:modelValue":e[0]||(e[0]=e=>t.title=e),onKeyup:e[1]||(e[1]=(0,d.D2)(((...e)=>t.addInfo&&t.addInfo(...e)),["enter"]))},null,544)),[[d.nr,t.title]])}],["__scopeId","data-v-1f79dd6e"]]),A=n(3577);const T={class:"footer"},w={class:"count"};var I=(0,l.aZ)({name:"Footer",props:{completedCount:{type:Number,default:0},allCount:{type:Number,default:2},allState:{type:Boolean,default:!1}},setup(t,e){return{allState:(0,a.iH)(t.allState),tickAll:function(){e.emit("tickAll",!t.allState)},clearAllTasks:function(){e.emit("clearAllTasks")}}}}),_=n(4657),S={};S.styleTagTransform=x(),S.setAttributes=b(),S.insert=m().bind(null,"head"),S.domAPI=u(),S.insertStyleElement=g(),r()(_.Z,S),_.Z&&_.Z.locals&&_.Z.locals;var $=(0,k.Z)(I,[["render",function(t,e,n,o,a,i){return(0,l.wg)(),(0,l.iD)("div",T,[(0,l._)("div",w,[(0,l._)("label",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=e=>t.allState=e),onClick:e[1]||(e[1]=(...e)=>t.tickAll&&t.tickAll(...e))},null,512),[[d.e8,t.allState]])]),(0,l._)("span",null,[(0,l._)("span",null,"已完成"+(0,A.zw)(t.completedCount),1),(0,l.Uk)(" / 全部"+(0,A.zw)(t.allCount),1)])]),(0,l._)("button",{class:"btn btn-danger",onClick:e[2]||(e[2]=(...e)=>t.clearAllTasks&&t.clearAllTasks(...e))},"清除已完成的全部任务")])}],["__scopeId","data-v-2d44b5d6"]]);const D={class:"todo-main"},E={class:"item"},j={class:"todo-title"};n(4747);var z={bus:{},$on:function(t,e){(this.bus[t]||(this.bus[t]=[])).push(e)},$emit:function(t,e){var n=this,l=this.bus[t];l&&l.forEach((function(t){t.call(n,e)}))},$off:function(t){this.callback[t]=null}},H=(0,l.aZ)({name:"Item",props:{todo:{type:Object,required:!0},index:{type:Number,required:!0}},setup(t,{emit:e}){return{dele:()=>{window.confirm("您确定要删除吗")&&z.$emit("dele",t.index)},updateState:()=>{z.$emit("changeTodo",{index:t.index,isCompleted:!t.todo?.isCompleted})}}}}),P=n(9589),F={};F.styleTagTransform=x(),F.setAttributes=b(),F.insert=m().bind(null,"head"),F.domAPI=u(),F.insertStyleElement=g(),r()(P.Z,F),P.Z&&P.Z.locals&&P.Z.locals;var U=(0,k.Z)(H,[["render",function(t,e,n,o,a,i){return(0,l.wg)(),(0,l.iD)("li",E,[(0,l._)("label",null,[(0,l.wy)((0,l._)("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=e=>t.todo.isCompleted=e),onClick:e[1]||(e[1]=(...e)=>t.updateState&&t.updateState(...e))},null,512),[[d.e8,t.todo.isCompleted]]),(0,l._)("span",j,(0,A.zw)(t.todo.title),1)]),(0,l._)("button",{class:"btn btn-danger",onClick:e[2]||(e[2]=(...e)=>t.dele&&t.dele(...e))},"删除")])}],["__scopeId","data-v-37137f14"]]),q=(0,l.aZ)({name:"List",components:{Item:U},props:{todos:Object}}),K=n(7679),L={};L.styleTagTransform=x(),L.setAttributes=b(),L.insert=m().bind(null,"head"),L.domAPI=u(),L.insertStyleElement=g(),r()(K.Z,L),K.Z&&K.Z.locals&&K.Z.locals;var N=(0,k.Z)(q,[["render",function(t,e,n,o,a,d){const i=(0,l.up)("Item");return(0,l.wg)(),(0,l.iD)("ul",D,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.todos,((t,e)=>((0,l.wg)(),(0,l.j4)(i,{key:t.id,todo:t,index:e},null,8,["todo","index"])))),128))])}],["__scopeId","data-v-286dd0dc"]]),V=(0,l.aZ)({name:"IndexPractice",components:{Header:C,Footer:$,List:N},setup(){const t=(0,a.qj)({todos:[{id:1,title:"宝马",isCompleted:!0},{id:2,title:"奔驰",isCompleted:!1},{id:3,title:"玛莎",isCompleted:!0}]}),e=(0,a.Fl)((()=>t.todos.filter((t=>t.isCompleted)).length)),n=(0,a.Fl)((()=>t.todos.every((t=>t.isCompleted))));return(0,l.Ah)((()=>{z.$off("dele"),z.$off("changeTodo")})),(0,l.bv)((()=>{z.$on("dele",(e=>{t.todos.splice(e,1)})),z.$on("changeTodo",(({index:e,isCompleted:n})=>{t.todos[e].isCompleted=n}))})),{...(0,a.BK)(t),addInfo:function(e){t.todos.unshift({id:Date.now(),title:e,isCompleted:!1})},completedCount:e,allState:n,tickAll:function(e){t.todos.forEach((t=>t.isCompleted=e))},clearAllTasks:function(){t.todos=[]}}}}),W=n(8047),B={};B.styleTagTransform=x(),B.setAttributes=b(),B.insert=m().bind(null,"head"),B.domAPI=u(),B.insertStyleElement=g(),r()(W.Z,B),W.Z&&W.Z.locals&&W.Z.locals;var O=(0,k.Z)(V,[["render",function(t,e,n,a,d,i){const s=(0,l.up)("Header"),r=(0,l.up)("List"),c=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(s,{onAddInfo:t.addInfo},null,8,["onAddInfo"]),(0,l.Wm)(r,{todos:t.todos},null,8,["todos"]),(0,l.Wm)(c,{completedCount:t.completedCount,allCount:t.todos.length,allState:t.allState,onTickAll:t.tickAll,onClearAllTasks:t.clearAllTasks},null,8,["completedCount","allCount","allState","onTickAll","onClearAllTasks"])])}],["__scopeId","data-v-fcc84e96"]])}}]);