(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f29c7112"],{"23e01":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"container-title"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"110px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"工程名称："}},[a("el-input",{attrs:{placeholder:"请输入工程名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"状态："}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择状态"},model:{value:e.form.reg,callback:function(t){e.$set(e.form,"reg",t)},expression:"form.reg"}},e._l(e.option,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:4}},[a("el-form",[a("el-button",{attrs:{type:"primary"}},[e._v("开始")]),a("el-button",{attrs:{type:"info"}},[e._v("取消")])],1)],1)],1)],1)],1),a("div",{staticClass:"container-main"},[a("el-button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"warning"},on:{click:e.developmentVerification}},[e._v("新增工程")]),a("el-table",{attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),a("el-table-column",{attrs:{label:"资源标识",prop:"identification"}}),a("el-table-column",{attrs:{label:"工程名称",prop:"name"}}),a("el-table-column",{attrs:{label:"状态",prop:"types"}}),a("el-table-column",{attrs:{label:"创建时间",prop:"time"}}),a("el-table-column",{attrs:{label:"负责人",prop:"people"}}),a("el-table-column",{attrs:{label:"描述",prop:"content"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button-group",[a("el-button",{staticStyle:{margin:"0px 4px"},attrs:{type:"text"},on:{click:e.handleWork}},[e._v(" 资源配置 ")]),a("el-button",{attrs:{type:"text"}},[e._v("/")]),a("el-button",{staticStyle:{margin:"0px 4px"},attrs:{type:"text"},on:{click:function(a){return e.versionManagement(t.row)}}},[e._v(" 安全配置 ")])],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"新增项目",visible:e.developmentVerifications,width:"50%","before-close":e.developmentVerificationClose},on:{"update:visible":function(t){e.developmentVerifications=t}}},[a("el-form",{ref:"form1",attrs:{model:e.form1,"label-width":"110px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工程名称："}},[a("el-input",{model:{value:e.form1.name,callback:function(t){e.$set(e.form1,"name",t)},expression:"form1.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"状态："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.status,callback:function(t){e.$set(e.form1,"status",t)},expression:"form1.status"}},e._l(e.form1.option1,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"创建时间："}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form1.date,callback:function(t){e.$set(e.form1,"date",t)},expression:"form1.date"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"负责人"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.people,callback:function(t){e.$set(e.form1,"people",t)},expression:"form1.people"}},e._l(e.form1.option2,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{attrs:{label:"描述："}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入"},model:{value:e.form1.content,callback:function(t){e.$set(e.form1,"content",t)},expression:"form1.content"}})],1),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.developmentVerifications=!1}}},[e._v("保存")]),a("el-button",{attrs:{type:"info"},on:{click:function(t){e.developmentVerifications=!1}}},[e._v("取消")])],1)],1)],1),a("el-dialog",{attrs:{title:"资源配置",visible:e.workActive,width:"50%","before-close":e.handleWorkClose},on:{"update:visible":function(t){e.workActive=t}}},[a("el-table",{attrs:{data:e.workData,border:""}},[a("el-table-column",{attrs:{label:"资源类型",prop:"name1"}}),a("el-table-column",{attrs:{label:"资源详情",prop:"name2"}}),a("el-table-column",{attrs:{label:"配置"}},[[a("el-button",{attrs:{type:"text"}},[e._v("点击")])]],2)],1)],1),a("el-dialog",{attrs:{title:"安全配置",visible:e.versionManagements,width:"50%","before-close":e.versionManagementClose},on:{"update:visible":function(t){e.versionManagements=t}}},[a("el-form",{ref:"form3",attrs:{model:e.form3,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"IP配置"}},[a("el-input",{staticStyle:{width:"90%"},model:{value:e.form3.ip,callback:function(t){e.$set(e.form3,"ip",t)},expression:"form3.ip"}})],1),a("el-form-item",{attrs:{label:"账号配置"}},[a("el-input",{staticStyle:{width:"90%"},model:{value:e.form3.name,callback:function(t){e.$set(e.form3,"name",t)},expression:"form3.name"}})],1),a("el-form-item",{attrs:{label:"结果查看下载权限"}},[a("el-select",{staticStyle:{width:"90%"},model:{value:e.form3.status,callback:function(t){e.$set(e.form3,"status",t)},expression:"form3.status"}},[a("el-option",{attrs:{label:"开通",value:"success"}}),a("el-option",{attrs:{label:"关闭",value:"fail"}})],1)],1),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.versionManagements=!1}}},[e._v("保存")]),a("el-button",{attrs:{type:"info"},on:{click:function(t){e.versionManagements=!1}}},[e._v("取消")])],1)],1)],1)],1)},n=[],o={name:"",data:function(){return{form:{name:"",reg:"",regw:""},option:[{name:"关闭",value:"1"},{name:"完结",value:"2"},{name:"进行中",value:"3"}],options:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}],tableData:[{name:"渠道画像工作流",time:"2020/10/20",identification:"GX202010200005",content:"渠道画像",types:"关闭",people:"李锐"},{name:"正态分布工作流",time:"2020/10/20",identification:"GX202010200006",content:"渠道画像",types:"完结",people:"李锐"},{name:"百位数工作流",time:"2020/10/20",identification:"GX202010200008",content:"渠道画像",types:"进行中",people:"李锐"},{name:"中位数工作流",time:"2020/10/20",identification:"GX202010200007",content:"渠道画像",types:"完结",people:"李锐"},{name:"求和工作流",time:"2020/10/20",identification:"GX202010200009",content:"渠道画像",types:"完结",people:"李锐"}],developmentVerifications:!1,versionManagements:!1,form1:{name:"",status:"",date:new Date(2020,10,10),people:"",option1:[{name:"关闭",value:"1"},{name:"完结",value:"2"},{name:"进行中",value:"3"}],option2:[{name:"李锐",value:"1"}],content:""},workActive:!1,workData:[{name1:"API计算资源",name2:"渠道画像接口、审计画像接口"},{name1:"模型计算资源",name2:"扫描分析模型、风险分析模型"},{name1:"生产开发计算资源",name2:""}],form3:{ip:"",name:"",status:"开通"}}},methods:{developmentVerification:function(){this.developmentVerifications=!0},developmentVerificationClose:function(){this.developmentVerifications=!1,this.activeOne=!1},handleWork:function(){this.workActive=!0},handleWorkClose:function(){this.workActive=!1},versionManagement:function(e){this.versionManagements=!0},versionManagementClose:function(){this.versionManagements=!1}}},i=o,r=(a("ae31"),a("2877")),s=Object(r["a"])(i,l,n,!1,null,null,null);t["default"]=s.exports},"846c":function(e,t,a){},ae31:function(e,t,a){"use strict";a("846c")}}]);