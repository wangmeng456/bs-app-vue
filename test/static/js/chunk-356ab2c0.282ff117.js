(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-356ab2c0"],{"6f8c":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"container-title"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"110px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"程序名称："}},[a("el-input",{attrs:{placeholder:"请输入程序名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"运行服务器："}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择运行服务器"},model:{value:e.form.reg,callback:function(t){e.$set(e.form,"reg",t)},expression:"form.reg"}},e._l(e.option,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:4}},[a("el-form",[a("el-button",{attrs:{type:"primary"}},[e._v("开始")]),a("el-button",{attrs:{type:"info"}},[e._v("取消")])],1)],1)],1)],1)],1),a("div",{staticClass:"container-main"},[a("el-button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"warning"},on:{click:e.developmentVerification}},[e._v("新增脚本")]),a("el-table",{attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),a("el-table-column",{attrs:{label:"脚本标识",prop:"identification"}}),a("el-table-column",{attrs:{label:"名称",prop:"name"}}),a("el-table-column",{attrs:{label:"创建人",width:"120",prop:"people"}}),a("el-table-column",{attrs:{label:"创建时间",width:"120",prop:"time"}}),a("el-table-column",{attrs:{label:"运行服务器",prop:"content"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button-group",[a("el-button",{staticStyle:{margin:"0px 4px"},attrs:{type:"text"},on:{click:e.handleWork}},[e._v(" 脚本编辑 ")]),a("el-button",{attrs:{type:"text"}},[e._v("/")]),a("el-button",{staticStyle:{margin:"0px 4px"},attrs:{type:"text"}},[e._v(" 业务逻辑 ")]),a("el-button",{attrs:{type:"text"}},[e._v("/")]),a("el-button",{staticStyle:{margin:"0px 4px"},attrs:{type:"text"},on:{click:function(a){return e.versionManagement(t.row)}}},[e._v(" 执行程序 ")])],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"新增脚本",visible:e.developmentVerifications,width:"50%","before-close":e.developmentVerificationClose},on:{"update:visible":function(t){e.developmentVerifications=t}}},[a("el-form",{ref:"form1",attrs:{model:e.form1,"label-width":"110px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"传参："}},[a("el-input",{model:{value:e.form1.name1,callback:function(t){e.$set(e.form1,"name1",t)},expression:"form1.name1"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"错误判断："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.name2,callback:function(t){e.$set(e.form1,"name2",t)},expression:"form1.name2"}},e._l(e.form1.option2,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"调用程序："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.name3,callback:function(t){e.$set(e.form1,"name3",t)},expression:"form1.name3"}},e._l(e.form1.option3,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"程序类型："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.name4,callback:function(t){e.$set(e.form1,"name4",t)},expression:"form1.name4"}},e._l(e.form1.option4,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"脚本类型："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.name5,callback:function(t){e.$set(e.form1,"name5",t)},expression:"form1.name5"}},e._l(e.form1.option5,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称："}},[a("el-input",{model:{value:e.form1.name6,callback:function(t){e.$set(e.form1,"name6",t)},expression:"form1.name6"}})],1)],1)],1),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"运行服务器："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.name7,callback:function(t){e.$set(e.form1,"name7",t)},expression:"form1.name7"}},e._l(e.form1.option7,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.developmentVerifications=!1}}},[e._v("脚本编译")])],1)],1)],1),a("el-dialog",{attrs:{title:"执行程序",visible:e.versionManagements,width:"50%","before-close":e.versionManagementClose},on:{"update:visible":function(t){e.versionManagements=t}}},[a("el-form",{ref:"form2",attrs:{model:e.form2,"label-width":"110px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"调度队列："}},[a("el-input",{model:{value:e.form2.name1,callback:function(t){e.$set(e.form2,"name1",t)},expression:"form2.name1"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"执行时间："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form2.name2,callback:function(t){e.$set(e.form2,"name2",t)},expression:"form2.name2"}},e._l(e.form2.option2,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"执行频次："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form2.name3,callback:function(t){e.$set(e.form2,"name3",t)},expression:"form2.name3"}},e._l(e.form2.option3,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"执行类型："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form2.name4,callback:function(t){e.$set(e.form2,"name4",t)},expression:"form2.name4"}},e._l(e.form2.option4,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.versionManagements=!1}}},[e._v("确定")])],1)],1)],1)],1)},n=[],o={name:"",data:function(){return{form:{name:"",reg:""},option:[{name:"10.20.96.1",value:"1"}],tableData:[{name:"渠道画像工作流",time:"2020/10/20",identification:"GX202010200005",content:"渠道画像",types:"关闭",people:"李锐"},{name:"正态分布工作流",time:"2020/10/20",identification:"GX202010200006",content:"渠道画像",types:"完结",people:"李锐"},{name:"百位数工作流",time:"2020/10/20",identification:"GX202010200008",content:"渠道画像",types:"进行中",people:"李锐"},{name:"中位数工作流",time:"2020/10/20",identification:"GX202010200007",content:"渠道画像",types:"完结",people:"李锐"},{name:"求和工作流",time:"2020/10/20",identification:"GX202010200009",content:"渠道画像",types:"完结",people:"李锐"}],developmentVerifications:!1,versionManagements:!1,form1:{name1:"",name2:"udaf",name3:"udaf",name4:"udaf",name5:"udaf",name6:"",name7:"udaf",option2:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}],option3:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}],option4:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}],option5:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}],option7:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}]},form2:{name1:"",name2:"udaf",name3:"udaf",name4:"udaf",option2:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}],option3:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}],option4:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}]}}},methods:{developmentVerification:function(){this.developmentVerifications=!0},developmentVerificationClose:function(){this.developmentVerifications=!1,this.activeOne=!1},handleWork:function(){this.workActive=!0},handleWorkClose:function(){this.workActive=!1},versionManagement:function(e){this.versionManagements=!0},versionManagementClose:function(){this.versionManagements=!1}}},r=o,i=(a("785d"),a("2877")),m=Object(i["a"])(r,l,n,!1,null,null,null);t["default"]=m.exports},"785d":function(e,t,a){"use strict";a("be76")},be76:function(e,t,a){}}]);