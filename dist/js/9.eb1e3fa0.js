"use strict";(self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[]).push([[9],{3093:function(e,a,s){s.r(a),s.d(a,{default:function(){return q}});var t=s(3396),r=s.p+"img/welcome.65d79f66.svg",i=s.p+"img/tree.0c47f7db.svg",o=s.p+"img/banner.4fd5e4df.png";const n=e=>((0,t.dD)("data-v-5dee8167"),e=e(),(0,t.Cn)(),e),l={class:"pt-5"},d=n((()=>(0,t._)("img",{src:r,alt:"welcome",id:"welcome-illustration"},null,-1))),m=n((()=>(0,t._)("div",{id:"trees"},[(0,t._)("img",{src:i,alt:"",class:"tree-illustration"}),(0,t._)("img",{src:i,alt:"",class:"tree-illustration"})],-1))),u={class:"container p-4"},c=n((()=>(0,t._)("div",{class:"brand row align-items-center justify-content-center"},[(0,t._)("img",{id:"logo",src:o,alt:"Sumatera Soil"})],-1))),p={class:"card py-5 px-5"},g=n((()=>(0,t._)("h4",{class:"text-center mb-5 pt-2"},"Admin Signin",-1))),f={key:0},w=n((()=>(0,t._)("p",{class:"text-center text-gray-5"},"Copyright © 2022",-1)));function h(e,a,s,r,i,o){const n=(0,t.up)("a-alert"),h=(0,t.up)("a-input"),k=(0,t.up)("a-form-item"),v=(0,t.up)("a-input-password"),_=(0,t.up)("a-button"),S=(0,t.up)("a-form");return(0,t.wg)(),(0,t.iD)("div",l,[d,m,(0,t._)("div",u,[c,(0,t._)("div",p,[g,e.error?((0,t.wg)(),(0,t.j4)(n,{key:0,message:"Gagal",description:e.error,type:"error","show-icon":"",class:"mb-4"},null,8,["description"])):(0,t.kq)("",!0),(0,t.Wm)(S,{ref:"formRef",model:e.formState,rules:e.rules,layout:"vertical","hide-required-mark":!0},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{class:"mb-4",ref:"username",label:"Username",name:"username"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{value:e.formState.username,"onUpdate:value":a[0]||(a[0]=a=>e.formState.username=a),size:"large",placeholder:"Masukkan username"},null,8,["value"])])),_:1},512),(0,t.Wm)(k,{ref:"password",label:"Password",name:"password"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{value:e.formState.password,"onUpdate:value":a[1]||(a[1]=a=>e.formState.password=a),size:"large",placeholder:"Masukkan password"},null,8,["value"])])),_:1},512),(0,t.Wm)(k,{class:"mt-5"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{type:"primary","html-type":"submit",onClick:e.onSubmit,class:"w-100",size:"large",loading:e.loading},{default:(0,t.w5)((()=>[e.loading?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("span",f,"Sign in"))])),_:1},8,["onClick","loading"])])),_:1})])),_:1},8,["model","rules"])]),w])])}var k=s(4870),v=s(9145);const _=new v.Z,S=e=>_.axiosInstance.post("/administrator/sessions",e);var b=(0,t.aZ)({name:"Login",setup(){const e=(0,k.iH)(),a=(0,k.qj)({username:"",password:""}),s=(0,k.iH)(!1),t=(0,k.iH)(),r={username:[{required:!0,message:"Username tidak boleh kosong.",trigger:"change"}],password:[{required:!0,message:"Password tidak boleh kosong.",trigger:"change"}]};return{formRef:e,formState:a,rules:r,loading:s,error:t}},methods:{onSubmit(){this.formRef&&this.formRef.validate().then((()=>this.doLogin())).catch((()=>{}))},async doLogin(){this.loading=!0;try{const e=await S({username:this.formState.username,password:this.formState.password});e.data.success&&(await this.$store.dispatch("User/setUser",{authorized:!0,administrator:e.data.data.administrator,token:e.data.data.token}),this.$notification.success({message:"Sukses",description:"Selamat datang di Sumatra Soil",duration:4}))}catch(e){console.log(e)}this.loading=!1}}}),y=s(89);const W=(0,y.Z)(b,[["render",h],["__scopeId","data-v-5dee8167"]]);var q=W}}]);