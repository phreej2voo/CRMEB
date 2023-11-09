(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-56a16a02"],{"024b":function(t,e,a){"use strict";a("c4c9")},"8f86":function(t,e,a){"use strict";a.r(e),a("b0c0");var i=a("5530"),s=(a("14d9"),a("a434"),a("2f62")),l=a("47c5"),o={name:"live_detail",props:{FormData:{type:Object,default:function(){}}},data:function(){return{option:{form:{labelWidth:"150px"}},loading:!1}},methods:{getData:function(t){var e=this;this.loading=!0,Object(l.h)(t).then((function(t){e.FormData=t.data,e.loading=!1})).catch((function(t){e.$message.error(t.msg),e.loading=!1}))}}},n=(a("024b"),a("2877"));o={name:"live",components:{goodsFrom:Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"divBox"},[e("div",[e("div",{staticClass:"box-container"},[e("div",{staticClass:"list sp"},[e("label",{staticClass:"name"},[t._v("商品名称：")]),e("span",{staticClass:"info"},[t._v(t._s(t.FormData.name))])]),e("div",{staticClass:"list sp"},[e("label",{staticClass:"name"},[t._v("直播价：")]),e("span",{staticClass:"info"},[t._v(t._s(t.FormData.price))])]),t.FormData.product?e("div",{staticClass:"list sp100",staticStyle:{display:"flex"}},[e("label",{staticClass:"name"},[t._v("商品图：")]),e("div",{directives:[{name:"viewer",rawName:"v-viewer"}]},[e("img",{attrs:{src:t.FormData.product.image,alt:""}})])]):t._e(),e("div",{staticClass:"list sp100"},[e("label",{staticClass:"name"},[t._v("审核结果：")]),e("span",{staticClass:"info"},[t._v(t._s(t._f("liveStatusFilter")(t.FormData.audit_status)))])])])])])}),[],!1,null,"602ffee1",null).exports},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},formValidate:{status:"",kerword:"",page:1,limit:20},treeData:{withdrawal:[{title:"全部",value:""},{title:"待审核",value:0},{title:"已通过",value:1},{title:"未通过",value:-1}]},columns1:[{key:"product_id",title:"商品ID",minWidth:35},{slot:"name",minWidth:35,title:"商品名称"},{key:"price",minWidth:35,title:"直播价"},{slot:"cost_price",minWidth:35,title:"原价"},{slot:"stock",minWidth:35,title:"库存"},{slot:"status",minWidth:35,title:"审核状态"},{slot:"is_mer_show",title:"是否显示",minWidth:80},{slot:"action",fixed:"right",title:"操作",minWidth:120}],tabList:[],loading:!1,modals:!1,total:0,FormData:{}}},computed:Object(i.a)(Object(i.a)({},Object(s.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.getList()},methods:{onchangeIsShow:function(t){var e=this,a=t.id;t=t.is_show;Object(l.i)(a,t).then((function(t){e.$message.success(t.msg)})).catch((function(t){e.$message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(l.e)(this.formValidate).then((function(e){t.total=e.data.count,t.tabList=e.data.list,t.loading=!1})).catch((function(e){t.$message.error(e.msg),t.loading=!1}))},selChange:function(){this.formValidate.page=1,this.getList()},menusAdd:function(){this.$router.push({path:this.$routeProStr+"/marketing/live/add_live_goods"})},syncGoods:function(){var t=this;Object(l.m)().then((function(e){t.$message.success(e.msg),t.getList()})).catch((function(e){t.$message.error(e.msg)}))},edit:function(t){var e=this;Object(l.h)(t.id).then((function(t){e.FormData=t.data,e.modals=!0})).catch((function(t){e.$message.error(t.msg)}))},del:function(t,e,a){var i=this;e={title:e,num:a,url:"live/goods/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){i.$message.success(t.msg),i.tabList.splice(a,1),i.getList()})).catch((function(t){i.$message.error(t.msg)}))}}},a("9973"),i=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never","body-style":{padding:0}}},[e("div",{staticClass:"padding-add"},[e("el-form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":"right",inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"审核状态："}},[e("el-select",{staticClass:"form_content_width",attrs:{clearable:""},on:{change:t.selChange},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},t._l(t.treeData.withdrawal,(function(t,a){return e("el-option",{key:a,attrs:{value:t.value,label:t.title}})})),1)],1),e("el-form-item",{attrs:{label:"搜索："}},[e("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入商品名称/ID"},model:{value:t.formValidate.kerword,callback:function(e){t.$set(t.formValidate,"kerword",e)},expression:"formValidate.kerword"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.selChange}},[t._v("查询")])],1)],1)],1)]),e("el-card",{staticClass:"ivu-mt mt16",attrs:{bordered:!1,shadow:"never"}},[e("el-button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_menus-add"],expression:"['setting-system_menus-add']"}],attrs:{type:"primary"},on:{click:function(e){return t.menusAdd("添加直播间")}}},[t._v("添加商品\n    ")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"mt14",attrs:{data:t.tabList,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},[e("el-table-column",{attrs:{label:"商品ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.product_id))])]}}])}),e("el-table-column",{attrs:{label:"商品名称","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"product_box"},[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}]},[e("img",{attrs:{src:a.row.product.image,alt:""}})]),e("div",{staticClass:"txt"},[t._v(t._s(a.row.name))])])]}}])}),e("el-table-column",{attrs:{label:"直播价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.price))])]}}])}),e("el-table-column",{attrs:{label:"原价","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.cost_price))])]}}])}),e("el-table-column",{attrs:{label:"库存","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.product.stock))])]}}])}),e("el-table-column",{attrs:{label:"审核状态","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(t._f("liveStatusFilter")(a.row.audit_status)))])]}}])}),e("el-table-column",{attrs:{label:"是否显示","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{staticClass:"defineSwitch",attrs:{"active-value":1,"inactive-value":0,value:a.row.is_show,size:"large",disabled:2!=a.row.audit_status,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(e){return t.onchangeIsShow(a.row)}},model:{value:a.row.is_show,callback:function(e){t.$set(a.row,"is_show",e)},expression:"scope.row.is_show"}})]}}])}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{on:{click:function(e){return t.edit(a.row,"编辑")}}},[t._v("详情")]),e("el-divider",{attrs:{direction:"vertical"}}),e("a",{on:{click:function(e){return t.del(a.row,"删除这条信息",a.$index)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"acea-row row-right page"},[t.total?e("pagination",{attrs:{total:t.total,page:t.formValidate.page,limit:t.formValidate.limit},on:{"update:page":function(e){return t.$set(t.formValidate,"page",e)},"update:limit":function(e){return t.$set(t.formValidate,"limit",e)},pagination:t.getList}}):t._e()],1)],1),e("el-dialog",{staticClass:"paymentFooter",attrs:{visible:t.modals,title:"商品详情",scrollable:"",width:"720px"},on:{"update:visible":function(e){t.modals=e}}},[e("goodsFrom",{ref:"goodsDetail",attrs:{FormData:t.FormData}})],1)],1)}),[],!1,null,"319087e0",null);e.default=i.exports},9973:function(t,e,a){"use strict";a("f3f7")},c4c9:function(t,e,a){},f3f7:function(t,e,a){}}]);