"use strict";(self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[]).push([[348],{8726:function(t,a,e){e.d(a,{DY:function(){return r},T:function(){return i},X$:function(){return o},fP:function(){return l},mt:function(){return u}});var s=e(9145);const n=new s.Z,r=(t={limit:1e4})=>n.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/farmers",{params:t}),i=t=>n.withOptions({showProgressBar:!1}).axiosInstance.get(`/administrator/farmers/${t}`),o=t=>n.withOptions({successFeedbackMessage:"Petani berhasil ditambahkan",showSuccessFeedback:!0}).axiosInstance.post("/administrator/farmers",t),l=(t,a)=>n.withOptions({successFeedbackMessage:"Petani berhasil diperbarui",showSuccessFeedback:!0}).axiosInstance.put(`/administrator/farmers/${t}`,a),u=(t,a={limit:1e5})=>n.withOptions({showProgressBar:!1}).axiosInstance.get(`/administrator/farmers/${t}/farmer_point_logs`,{params:a})},6705:function(t,a,e){e.d(a,{p:function(){return s}});const s=t=>{const a=[];for(let e=0;e<t.length;e++)a.push({...t[e],seq:e+1});return a}},3348:function(t,a,e){e.r(a),e.d(a,{default:function(){return I}});var s=e(3396),n=e(7139);const r={class:"content-title"},i=(0,s._)("h5",null,"Daftar Petani",-1),o=["disabled"],l=(0,s._)("i",{class:"fe fe-refresh-cw mr-1"},null,-1),u=(0,s.Uk)(" Refresh "),d=[l,u],c=(0,s._)("button",{class:"btn btn-light"},[(0,s._)("i",{class:"fe fe-plus mr-1"}),(0,s.Uk)(" Tambah ")],-1),m=["src"];function h(t,a,e,l,u,h){const f=(0,s.up)("router-link"),p=(0,s.up)("a-tag"),w=(0,s.up)("a-table");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",r,[i,(0,s._)("div",null,[(0,s._)("button",{class:"btn btn-light mr-3",onClick:a[0]||(a[0]=(...a)=>t.refresh&&t.refresh(...a)),disabled:t.loading},d,8,o),(0,s.Wm)(f,{to:t.ROUTE.CreateFarmer.path},{default:(0,s.w5)((()=>[c])),_:1},8,["to"])])]),(0,s._)("div",null,[(0,s.Wm)(w,{columns:t.columns,"data-source":t.dataSource,"row-key":t=>t.id,loading:t.loading,scroll:{y:t.setting.maxTableContentHeight,x:!0},"custom-row":t.customRow},{bodyCell:(0,s.w5)((({column:t,text:a})=>["image_url"===t.dataIndex?((0,s.wg)(),(0,s.iD)("img",{key:0,src:a,alt:"Foto",style:{width:"70px",height:"70px","border-radius":"2px"}},null,8,m)):(0,s.kq)("",!0),"status_caption"===t.dataIndex?((0,s.wg)(),(0,s.j4)(p,{key:1,color:"Aktif"===a?"green":"red"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(a),1)])),_:2},1032,["color"])):(0,s.kq)("",!0)])),_:1},8,["columns","data-source","row-key","loading","scroll","custom-row"])])])}var f=e(4870),p=e(7417),w=e(678),g=e(6705),k=e(7182),b=e(8726),_=(0,s.aZ)({name:"Farmer",setup(){const t=(0,w.tv)(),a=(0,p.oR)(),e=(0,s.Fl)((()=>a.getters["Setting/settings"])),n=(0,f.iH)([{title:"#",key:"#",dataIndex:"seq",width:50},{title:"Nama",key:"name",dataIndex:"name"},{title:"Foto",key:"image",dataIndex:"image_url"},{title:"No Telp",key:"phone_number",dataIndex:"phone_number"},{title:"Alamat",key:"address",dataIndex:"address",maxWidth:400},{title:"Total Point",key:"total_point",dataIndex:"total_point",width:110},{title:"Status",key:"status",dataIndex:"status_caption",width:100}]),r=a=>({style:{cursor:"pointer"},onClick:()=>{t.push({path:`${k.Z.EditFarmer.path}/${a.id}`})}});return{store:a,setting:e,columns:n,ROUTE:k.Z,customRow:r}},data(){return{rowData:[],loading:!0}},computed:{dataSource(){return(0,g.p)(this.rowData)}},mounted(){this.fetchData()},methods:{async fetchData(){this.loading=!0;const t=await(0,b.DY)();t.data.success&&(this.rowData=t.data.data),this.loading=!1},refresh(){this.rowData=[],this.fetchData()}}}),x=e(89);const y=(0,x.Z)(_,[["render",h]]);var I=y}}]);