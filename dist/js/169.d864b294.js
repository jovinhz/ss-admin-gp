"use strict";(self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[]).push([[169],{6524:function(a,s,e){e.d(s,{Wj:function(){return t},aq:function(){return d},be:function(){return i},uV:function(){return n}});var r=e(9145);const o=new r.Z,t=(a={limit:1e4})=>o.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/administrators",{params:a}),n=a=>o.withOptions({successFeedbackMessage:"Admin berhasil ditambahkan",showSuccessFeedback:!0}).axiosInstance.post("/administrator/administrators",a),i=a=>o.withOptions({showProgressBar:!1}).axiosInstance.get(`/administrator/administrators/${a}`),d=(a,s)=>o.withOptions({successFeedbackMessage:"Admin berhasil diperbarui",showSuccessFeedback:!0}).axiosInstance.put(`/administrator/administrators/${a}`,s)},3169:function(a,s,e){e.r(s),e.d(s,{default:function(){return q}});var r=e(3396);const o=(0,r._)("div",{class:"content-title"},[(0,r._)("h5",null,"Tambah Admin")],-1),t={class:"card"},n={class:"card-body"},i={class:"row mb-2"},d={class:"col-sm-12 col-md-6"},m={class:"row mb-2"},l={class:"col-sm-12 col-md-6"},u={class:"row"},c={class:"col-sm-12 col-md-6"},f={class:"row"},p={class:"col-sm-12 col-md-6"},w={class:"row mb mt-3"},h={class:"col-md-6 mb-2"},b=["disabled"],v=(0,r._)("span",{class:"btn-addon"},[(0,r._)("i",{class:"btn-addon-icon fe fe-send"})],-1),_=(0,r.Uk)(" Simpan "),g=[v,_];function S(a,s,e,v,_,S){const k=(0,r.up)("a-input"),P=(0,r.up)("a-form-item"),F=(0,r.up)("a-input-password"),W=(0,r.up)("a-form");return(0,r.wg)(),(0,r.iD)("div",null,[o,(0,r._)("div",null,[(0,r.Wm)(W,{ref:"formRef",layout:"vertical",model:a.formState,rules:a.formRules,onFinish:a.handleFinish},{default:(0,r.w5)((()=>[(0,r._)("div",t,[(0,r._)("div",n,[(0,r._)("div",i,[(0,r._)("div",d,[(0,r.Wm)(P,{ref:"name",label:"Nama",name:"name"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,{value:a.formState.name,"onUpdate:value":s[0]||(s[0]=s=>a.formState.name=s),placeholder:"Nama admin"},null,8,["value"])])),_:1},512)])]),(0,r._)("div",m,[(0,r._)("div",l,[(0,r.Wm)(P,{ref:"username",label:"Username",name:"username"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,{value:a.formState.username,"onUpdate:value":s[1]||(s[1]=s=>a.formState.username=s),placeholder:"Username"},null,8,["value"])])),_:1},512)])]),(0,r._)("div",u,[(0,r._)("div",c,[(0,r.Wm)(P,{ref:"password",label:"Password",name:"password"},{default:(0,r.w5)((()=>[(0,r.Wm)(F,{value:a.formState.password,"onUpdate:value":s[2]||(s[2]=s=>a.formState.password=s),placeholder:"Password"},null,8,["value"])])),_:1},512)])]),(0,r._)("div",f,[(0,r._)("div",p,[(0,r.Wm)(P,{ref:"password_confirmation",label:"Konfirmasi Password",name:"password_confirmation"},{default:(0,r.w5)((()=>[(0,r.Wm)(F,{value:a.formState.password_confirmation,"onUpdate:value":s[3]||(s[3]=s=>a.formState.password_confirmation=s),placeholder:"Konfirmasi Password"},null,8,["value"])])),_:1},512)])]),(0,r._)("div",w,[(0,r._)("div",h,[(0,r._)("button",{type:"submit",class:"btn btn-primary btn-with-addon",disabled:a.loadingSubmit},g,8,b)])])])])])),_:1},8,["model","rules","onFinish"])])])}var k=e(4870),P=e(6524),F=(0,r.aZ)({name:"CreateAdmin",setup(){const a=(0,k.iH)(),s=(0,k.qj)({name:void 0,username:void 0,password:void 0,password_confirmation:void 0}),e=async(a,e)=>""===e?Promise.reject("Konfirmasi password tidak boleh kosong."):e!==s.password?Promise.reject("Password dan Konfirmasi password harus sama."):Promise.resolve(),r={name:[{required:!0,trigger:"change",message:"Nama tidak boleh kosong"}],username:[{required:!0,trigger:"change",message:"Username tidak boleh kosong"}],password:[{required:!0,trigger:"change",message:"Password tidak boleh kosong"}],password_confirmation:[{required:!0,trigger:"change",validator:e}]};return{formRef:a,formState:s,formRules:r}},data(){return{loadingSubmit:!1}},methods:{async onSubmit(){this.loadingSubmit=!0;const a=await(0,P.uV)({name:this.formState.name,username:this.formState.username,password:this.formState.password,password_confirmation:this.formState.password_confirmation});a.data.success&&this.formRef.resetFields(),this.loadingSubmit=!1},handleFinish(){this.formRef.validateFields().then((()=>this.onSubmit())).catch((()=>{}))}}}),W=e(89);const U=(0,W.Z)(F,[["render",S]]);var q=U}}]);