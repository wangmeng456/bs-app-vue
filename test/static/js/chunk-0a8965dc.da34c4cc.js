(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a8965dc"],{"582c":function(e,t,a){"use strict";a("81fb")},"81fb":function(e,t,a){},f0b0:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"container-title"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"110px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"项目名称："}},[a("el-input",{attrs:{placeholder:"请输入项目名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"应用类型："}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择应用类型"},model:{value:e.form.reg,callback:function(t){e.$set(e.form,"reg",t)},expression:"form.reg"}},e._l(e.option,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"需求来源："}},[a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"请选择需求来源"},model:{value:e.form.regw,callback:function(t){e.$set(e.form,"regw",t)},expression:"form.regw"}},e._l(e.optionw,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:3}},[a("el-form",[a("el-button",{attrs:{type:"primary"}},[e._v("开始")]),a("el-button",{attrs:{type:"info"}},[e._v("取消")])],1)],1)],1)],1)],1),a("div",{staticClass:"container-main"},[a("el-button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"warning"},on:{click:e.developmentVerification}},[e._v("新增项目")]),a("el-table",{attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),a("el-table-column",{attrs:{label:"项目标识",prop:"identification"}}),a("el-table-column",{attrs:{label:"项目名称",prop:"name"}}),a("el-table-column",{attrs:{label:"需求来源",prop:"time"}}),a("el-table-column",{attrs:{label:"应用类型",prop:"types"}}),a("el-table-column",{attrs:{label:"操作"}},[[a("el-button",{staticStyle:{margin:"0px 4px"},attrs:{type:"text"},on:{click:e.handleWork}},[e._v(" 资源添加 ")])]],2)],1)],1),a("el-dialog",{attrs:{title:"新增项目",visible:e.developmentVerifications,width:"50%","before-close":e.developmentVerificationClose},on:{"update:visible":function(t){e.developmentVerifications=t}}},[a("el-form",{ref:"form1",attrs:{model:e.form1,"label-width":"110px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目名称："}},[a("el-input",{model:{value:e.form1.name,callback:function(t){e.$set(e.form1,"name",t)},expression:"form1.name"}})],1)],1)],1),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"应用类型："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.type2,callback:function(t){e.$set(e.form1,"type2",t)},expression:"form1.type2"}},e._l(e.form1.option2,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"需求来源："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.form1.type3,callback:function(t){e.$set(e.form1,"type3",t)},expression:"form1.type3"}},e._l(e.form1.option3,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{attrs:{label:"项目描述："}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入"},model:{value:e.form1.content,callback:function(t){e.$set(e.form1,"content",t)},expression:"form1.content"}})],1),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.developmentVerifications=!1}}},[e._v("保存")]),a("el-button",{attrs:{type:"info"},on:{click:function(t){e.developmentVerifications=!1}}},[e._v("取消")])],1)],1)],1),a("el-dialog",{attrs:{title:"资源添加",visible:e.workActive,width:"50%","before-close":e.handleWorkClose},on:{"update:visible":function(t){e.workActive=t}}},[a("el-table",{attrs:{data:e.workData,border:""}},[a("el-table-column",{attrs:{label:"节点",prop:"name1"}}),a("el-table-column",{attrs:{label:"节点资源"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{on:{command:e.handleCommands}},[a("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(t.row.name2)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:e.beforeHandleCommands(t.$index,"API")}},[e._v("API")]),a("el-dropdown-item",{attrs:{command:e.beforeHandleCommands(t.$index,"模型")}},[e._v("模型")]),a("el-dropdown-item",{attrs:{command:e.beforeHandleCommands(t.$index,"函数")}},[e._v("函数")])],1)],1)]}}])}),a("el-table-column",{attrs:{label:"操作"}},[[a("el-button",{attrs:{type:"text"}},[e._v("删除")])]],2)],1)],1)],1)},o=[],n={name:"",data:function(){return{form:{name:"",reg:"",regw:""},option:[{name:"渠道画像",value:"1"}],optionw:[{name:"产品部",value:"1"},{name:"市场部",value:"2"}],options:[{name:"udf",value:"1"},{name:"udaf",value:"2"},{name:"udtf",value:"3"},{name:"java class",value:"4"}],tableData:[{name:"渠道画像工作流",time:"产品部",identification:"GX202010200005",types:"渠道画像"},{name:"正态分布工作流",time:"市场部",identification:"GX202010200006",types:"渠道画像"},{name:"百位数工作流",time:"产品部",identification:"GX202010200008",types:"渠道画像"},{name:"中位数工作流",time:"市场部",identification:"GX202010200007",types:"渠道画像"},{name:"求和工作流",time:"市场部",identification:"GX202010200009",types:"渠道画像"}],developmentVerifications:!1,form1:{name:"",type2:"",type3:"",option2:[{name:"渠道画像",value:"1"}],option3:[{name:"产品部",value:"1"},{name:"市场部",value:"2"}],content:""},workActive:!1,workData:[{name1:"资源一",name2:"API",name3:"并行执行"},{name1:"资源二",name2:"API",name3:"顺序执行"}],form2:{name:"",content:""}}},methods:{developmentVerification:function(){this.developmentVerifications=!0},developmentVerificationClose:function(){this.developmentVerifications=!1,this.activeOne=!1},handleWork:function(){this.workActive=!0},handleWorkClose:function(){this.workActive=!1},handleCommands:function(e){this.workData[e.key1].name2=e.key2},beforeHandleCommands:function(e,t){return{key1:e,key2:t}}}},r=n,i=(a("582c"),a("2877")),s=Object(i["a"])(r,l,o,!1,null,null,null);t["default"]=s.exports}}]);