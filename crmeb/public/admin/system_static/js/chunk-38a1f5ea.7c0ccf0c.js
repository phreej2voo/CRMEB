(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-38a1f5ea"],{"3fea":function(t,e,i){},"4e82":function(t,e,i){"use strict";var a=i("23e7"),n=i("e330"),r=i("59ed"),s=i("7b0b"),o=i("07fa"),l=i("577e"),c=i("d039"),d=i("addb"),p=i("a640"),u=i("04d1"),m=i("d998"),f=i("2d00"),h=i("512ce"),y=[],v=n(y.sort),_=n(y.push),b=(i=c((function(){y.sort(void 0)})),n=c((function(){y.sort(null)})),p=p("sort"),!c((function(){if(f)return f<70;if(!(u&&3<u)){if(m)return!0;if(h)return h<603;for(var t,e,i,a="",n=65;n<76;n++){switch(t=String.fromCharCode(n),n){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(i=0;i<47;i++)y.push({k:t+i,v:e})}for(y.sort((function(t,e){return e.v-t.v})),i=0;i<y.length;i++)t=y[i].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})));a({target:"Array",proto:!0,forced:i||!n||!p||!b},{sort:function(t){void 0!==t&&r(t);var e=s(this);if(b)return void 0===t?v(e):v(e,t);for(var i,a,n=[],c=o(e),p=0;p<c;p++)p in e&&_(n,e[p]);for(d(n,(a=t,function(t,e){return void 0===e?-1:void 0===t?1:void 0!==a?+a(t,e)||0:l(t)>l(e)?1:-1})),i=n.length,p=0;p<i;)e[p]=n[p++];for(;p<c;)delete e[p++];return e}})},5334:function(t,e,i){"use strict";i("4e82"),i("b0c0"),i("a15b"),i("d81d"),i("99af"),i("498a"),i("a434"),i("a9e3"),i("d3b7"),i("159b");var a=i("90e7"),n={name:"city",props:{type:{type:Number,default:0},selectArr:{type:Array,default:[]}},data:function(){return{iSselect:!1,addressModal:!1,cityList:[],activeCity:-1,loading:!1}},computed:{},methods:{enter:function(t){this.activeCity=t},leave:function(){this.activeCity=null},getCityList:function(){var t=this;this.loading=!0,Object(a.Pb)().then((function(e){t.loading=!1,t.selectArr=[],e.data.forEach((function(e,i,a){e.isShow=!0,e.children.forEach((function(e,i){e.isShow=!0,0<t.selectArr.length&&t.selectArr.forEach((function(t,i){t.children.forEach((function(t,i){e.city_id==t.city_id&&(e.isShow=!1)}))}))}))})),e.data.forEach((function(t,e,i){var a=0,n=0;t.children.forEach((function(t,e){t.isShow?n++:a++})),a==t.children.length&&(t.isShow=!1),t.childNum=n})),t.cityList=e.data}))},allCheckbox:function(){var t=this,e=this.iSselect;t.cityList.forEach((function(i,a){t.$set(t.cityList[a],"checked",e),e?t.$set(t.cityList[a],"count",t.cityList[a].children.length):t.$set(t.cityList[a],"count",0),t.cityList[a].children.forEach((function(i,n){t.$set(t.cityList[a].children[n],"checked",e)}))}))},empty:function(){var t=this;t.cityList.forEach((function(e,i){t.$set(t.cityList[i],"checked",!1),t.cityList[i].children.forEach((function(e,a){t.$set(t.cityList[i].children[a],"checked",!1)})),t.$set(t.cityList[i],"count",0)})),this.iSselect=!1},checkedClick:function(t){var e=this;e.cityList[t].checked?(e.$set(e.cityList[t],"count",e.cityList[t].childNum),e.cityList[t].children.forEach((function(i,a){e.$set(e.cityList[t].children[a],"checked",!0)}))):(e.$set(e.cityList[t],"count",0),e.$set(e.cityList[t],"checked",!1),e.cityList[t].children.forEach((function(i,a){e.$set(e.cityList[t].children[a],"checked",!1)})),e.iSselect=!1)},primary:function(t,e){var i=!1,a=0;this.cityList[t].children.forEach((function(t,e){t.checked&&(i=!0,a++)})),this.$set(this.cityList[t],"count",a),this.$set(this.cityList[t],"checked",i)},confirm:function(){var t=this,e=[];if(t.cityList.forEach((function(i,a){var n={};i.checked&&(n={name:i.name,city_id:i.city_id,children:[]}),t.cityList[a].children.forEach((function(t,e){t.checked&&n.children.push({city_id:t.city_id})})),void 0!==n.city_id&&e.push(n)})),0===e.length)return t.$message.error("至少选择一个省份或者城市");this.$emit("selectCity",e,this.type),t.addressModal=!1,this.cityList=[]},close:function(){this.addressModal=!1,this.cityList=[]}},mounted:function(){}},r=(i("8c7d"),i("2877"));n={name:"freightTemplate",components:{city:Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{staticClass:"modal",attrs:{visible:t.addressModal,title:"选择可配送区域",width:"50%"},on:{"update:visible":function(e){t.addressModal=e}}},[i("el-row",{attrs:{gutter:24}},[i("el-col",{staticClass:"item",attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[i("div",{staticClass:"acea-row row-right row-middle"},[i("el-checkbox",{on:{change:t.allCheckbox},model:{value:t.iSselect,callback:function(e){t.iSselect=e},expression:"iSselect"}},[t._v("全选")]),i("div",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])],1)])],1),i("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:24}},t._l(t.cityList,(function(e,a){return e.isShow?i("el-col",{key:a,staticClass:"item",attrs:{xl:6,lg:6,md:6,sm:8,xs:6}},[i("el-popover",{attrs:{placement:"top-start",width:"600",trigger:"hover","open-delay":600}},[i("div",[i("div",{staticClass:"city"},[i("div",{staticClass:"checkBox"},[i("div",{staticClass:"arrow"}),i("div",t._l(e.children,(function(e,n){return i("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"city.isShow"}],key:n,staticClass:"itemn",attrs:{label:e.name},on:{change:function(e){return t.primary(a,n)}},model:{value:e.checked,callback:function(i){t.$set(e,"checked",i)},expression:"city.checked"}},[t._v(t._s(e.name))])})),1)])])]),i("el-checkbox",{attrs:{slot:"reference",label:e.name},on:{change:function(e){return t.checkedClick(a)}},slot:"reference",model:{value:e.checked,callback:function(i){t.$set(e,"checked",i)},expression:"item.checked"}},[t._v(t._s(e.name))]),i("span",{staticClass:"red"},[t._v("("+t._s((e.count||0)+"/"+e.childNum)+")")])],1)],1):t._e()})),1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.close}},[t._v("取消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确定")])],1)],1)],1)}),[],!1,null,"1eb43181",null).exports},props:{},data:function(){return{isTemplate:!1,templateList:[{region:[{name:"默认全国",city_id:0}],regionName:"默认全国",first:1,price:0,continue:1,continue_price:0}],appointList:[],noDeliveryList:[],type:1,formData:{type:1,sort:0,name:"",appoint_check:0,no_delivery_check:0},id:0,addressModal:!1,indeterminate:!0,checkAll:!1,checkAllGroup:[],activeCity:-1,provinceAllGroup:[],index:-1,displayData:"",currentProvince:"",selectArr:[],noShippingArr:[],yesShippingArr:[],noDeliveryArr:[]}},computed:{},methods:{close:function(){this.$emit("close")},editFrom:function(t){var e=this;this.id=t,Object(a.qb)(t).then((function(t){var i=t.data.formData;e.templateList=t.data.templateList,e.appointList=t.data.appointList,e.noDeliveryList=t.data.noDeliveryList,e.formData={type:i.type,sort:i.sort,name:i.name,appoint_check:i.appoint_check,no_delivery_check:i.no_delivery_check}}))},selectCity:function(t,e){var i=t.map((function(t){return t.name})).join(";");switch(e){case 1:this.templateList.push({region:t,regionName:i,first:1,price:0,continue:1,continue_price:0}),this.noShippingArr=this.noShippingArr.concat(t);break;case 2:this.appointList.push({place:t,placeName:i,a_num:0,a_price:0}),this.yesShippingArr=this.yesShippingArr.concat(t);break;case 3:this.noDeliveryList.push({place:t,placeName:i}),this.noDeliveryArr=this.noDeliveryArr.concat(t)}},addCity:function(t){this.selectArr=1==t?this.noShippingArr:2==t?this.yesShippingArr:this.noDeliveryArr,this.type=t,this.$refs.city.getCityList(),this.$refs.city.addressModal=!0},changeRadio:function(){},handleSubmit:function(){var t=this,e=this;if(!e.formData.name.trim().length)return e.$message.error("请填写模板名称");for(var i=0;i<e.templateList.length;i++){if(e.templateList[i].first<=0)return e.$message.error("首件/重量/体积应大于0");if(e.templateList[i].price<0)return e.$message.error("运费应大于等于0");if(e.templateList[i].continue<=0)return e.$message.error("续件/重量/体积应大于0");if(e.templateList[i].continue_price<0)return e.$message.error("续费应大于等于0")}if(1===e.formData.appoint_check)for(var n=0;n<e.appointList.length;n++){if(e.appointList[n].a_num<=0)return e.$message.error("包邮件数应大于0");if(e.appointList[n].a_price<0)return e.$message.error("包邮金额应大于等于0")}var r={appoint_info:e.appointList,region_info:e.templateList,no_delivery_info:e.noDeliveryList,sort:e.formData.sort,type:e.formData.type,name:e.formData.name,appoint:e.formData.appoint_check,no_delivery:e.formData.no_delivery_check};Object(a.Qb)(e.id,r).then((function(e){t.isTemplate=!1,t.formData={type:1,sort:0,name:"",appoint_check:0,no_delivery_check:0},t.appointList=[],t.noDeliveryList=[],t.addressModal=!1,t.templateList=[{region:[{name:"默认全国",city_id:0}],regionName:"默认全国",first:1,price:0,continue:1,continue_price:0}],t.$emit("addSuccess"),t.$message.success(e.msg)}))},delCity:function(t,e,i,a){(1===a?this.templateList:2==a?this.appointList:this.noDeliveryList).splice(i,1)},cancel:function(){this.noShippingArr=[],this.noDeliveryArr=[],this.yesShippingArr=[],this.selectArr=[],this.formData={type:1,sort:0,name:"",appoint_check:0,no_delivery_check:0},this.appointList=[],this.noDeliveryList=[],this.addressModal=!1,this.templateList=[{region:[{name:"默认全国",city_id:0}],regionName:"默认全国",first:0,price:0,continue:0,continue_price:0}]},address:function(){this.addressModal=!0},enter:function(t){this.activeCity=t},leave:function(){this.activeCity=null}},mounted:function(){}},i("7662"),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{visible:t.isTemplate,title:"运费模版",width:"1000px",if:"isTemplate"},on:{"update:visible":function(e){t.isTemplate=e},"on-cancel":t.cancel,closed:t.close}},[i("div",{staticClass:"Modals"},[i("el-form",{ref:"formData",staticClass:"form",attrs:{"label-width":"120px","label-position":"right"}},[i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{xl:18,lg:18,md:18,sm:24,xs:24}},[i("el-form-item",{attrs:{label:"模板名称：",prop:"name"}},[i("el-input",{attrs:{type:"text",placeholder:"请输入模板名称",maxlength:20},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1)],1),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{xl:18,lg:18,md:18,sm:24,xs:24}},[i("el-form-item",{attrs:{label:"计费方式：",props:"state","label-for":"state"}},[i("el-radio-group",{staticClass:"radio",attrs:{"element-id":"state"},on:{input:t.changeRadio},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[i("el-radio",{attrs:{label:1}},[t._v("按件数")]),i("el-radio",{attrs:{label:2}},[t._v("按重量")]),i("el-radio",{attrs:{label:3}},[t._v("按体积")])],1)],1)],1)],1),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[i("el-form-item",{staticClass:"label",attrs:{label:"配送区域及运费：",props:"state","label-for":"state"}},[i("el-table",{ref:"table",staticClass:"ivu-mt",attrs:{data:t.templateList,"empty-text":"暂无数据",border:""}},[i("el-table-column",{attrs:{label:"可配送区域",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{model:{value:t.templateList[e.$index].regionName,callback:function(i){t.$set(t.templateList[e.$index],"regionName",i)},expression:"templateList[scope.$index].regionName"}})]}}])}),i("el-table-column",{attrs:{label:2===t.formData.type?"首件重量(KG)":3===t.formData.type?"首件体积(m³)":"首件",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{type:"number"},model:{value:t.templateList[e.$index].first,callback:function(i){t.$set(t.templateList[e.$index],"first",i)},expression:"templateList[scope.$index].first"}})]}}])}),i("el-table-column",{attrs:{label:"运费（元）",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{type:"number"},model:{value:t.templateList[e.$index].price,callback:function(i){t.$set(t.templateList[e.$index],"price",i)},expression:"templateList[scope.$index].price"}})]}}])}),i("el-table-column",{attrs:{label:2===t.formData.type?"续件重量(KG)":3===t.formData.type?"续件体积(m³)":"续件",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{type:"number"},model:{value:t.templateList[e.$index].continue,callback:function(i){t.$set(t.templateList[e.$index],"continue",i)},expression:"templateList[scope.$index].continue"}})]}}])}),i("el-table-column",{attrs:{label:"续费（元）",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{type:"number"},model:{value:t.templateList[e.$index].continue_price,callback:function(i){t.$set(t.templateList[e.$index],"continue_price",i)},expression:"templateList[scope.$index].continue_price"}})]}}])}),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["默认全国"!==e.row.regionName?i("a",{on:{click:function(i){return t.delCity(e.row,"配送区域",e.$index,1)}}},[t._v("删除")]):t._e()]}}])})],1),i("el-row",{staticClass:"addTop"},[i("el-col",[i("el-button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.addCity(1)}}},[t._v("添加配送区域")])],1)],1)],1)],1)],1),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[i("el-form-item",{attrs:{label:"指定包邮：",prop:"store_name","label-for":"store_name"}},[i("el-radio-group",{staticClass:"radio",model:{value:t.formData.appoint_check,callback:function(e){t.$set(t.formData,"appoint_check",e)},expression:"formData.appoint_check"}},[i("el-radio",{attrs:{label:1}},[t._v("开启")]),i("el-radio",{attrs:{label:0}},[t._v("关闭")])],1),1===t.formData.appoint_check?i("el-table",{ref:"table",staticClass:"addTop mt10",attrs:{data:t.appointList,"empty-text":"暂无数据",border:""}},[i("el-table-column",{attrs:{label:"选择区域",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{model:{value:t.appointList[e.$index].placeName,callback:function(i){t.$set(t.appointList[e.$index],"placeName",i)},expression:"appointList[scope.$index].placeName"}})]}}],null,!1,1987755132)}),i("el-table-column",{attrs:{label:2===t.formData.type?"包邮重量":3===t.formData.type?"包邮体积(m³)":"包邮件数",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{type:"number"},model:{value:t.appointList[e.$index].a_num,callback:function(i){t.$set(t.appointList[e.$index],"a_num",i)},expression:"appointList[scope.$index].a_num"}})]}}],null,!1,1469309913)}),i("el-table-column",{attrs:{label:"包邮金额（元）",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{type:"number"},model:{value:t.appointList[e.$index].a_price,callback:function(i){t.$set(t.appointList[e.$index],"a_price",i)},expression:"appointList[scope.$index].a_price"}})]}}],null,!1,2667129250)}),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["默认全国"!==e.row.regionName?i("a",{on:{click:function(i){return t.delCity(e.row,"配送区域",e.$index,2)}}},[t._v("删除")]):t._e()]}}],null,!1,1184296130)})],1):t._e(),1===t.formData.appoint_check?i("div",{staticClass:"free_tips"},[t._v("指定地区需同时满足包邮（件数/重量/体积）和包邮金额的条件，才可实现包邮")]):t._e(),1===t.formData.appoint_check?i("el-row",{staticClass:"addTop mt5"},[i("el-col",[i("el-button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.addCity(2)}}},[t._v("添加包邮区域")])],1)],1):t._e()],1)],1)],1),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[i("el-form-item",{attrs:{label:"指定不送达：",prop:"store_name","label-for":"store_name"}},[i("el-radio-group",{staticClass:"radio",model:{value:t.formData.no_delivery_check,callback:function(e){t.$set(t.formData,"no_delivery_check",e)},expression:"formData.no_delivery_check"}},[i("el-radio",{attrs:{label:1}},[t._v("开启")]),i("el-radio",{attrs:{label:0}},[t._v("关闭")])],1),1===t.formData.no_delivery_check?i("el-table",{ref:"table",staticClass:"addTop mt10",attrs:{data:t.noDeliveryList,"empty-text":"暂无数据",border:""}},[i("el-table-column",{attrs:{label:"选择区域",minWidth:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{model:{value:t.noDeliveryList[e.$index].placeName,callback:function(i){t.$set(t.noDeliveryList[e.$index],"placeName",i)},expression:"noDeliveryList[scope.$index].placeName"}})]}}],null,!1,821089340)}),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["默认全国"!==e.row.regionName?i("a",{on:{click:function(i){return t.delCity(e.row,"配送区域",e.$index,3)}}},[t._v("删除")]):t._e()]}}],null,!1,443559139)})],1):t._e(),1===t.formData.no_delivery_check?i("el-row",{staticClass:"addTop"},[i("el-col",[i("el-button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.addCity(3)}}},[t._v("添加不送达区域")])],1)],1):t._e()],1)],1)],1),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{xl:18,lg:18,md:18,sm:24,xs:24}},[i("el-form-item",{attrs:{label:"排序：",prop:"store_name","label-for":"store_name"}},[i("el-input-number",{attrs:{controls:!1,min:0,placeholder:"输入值越大越靠前"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort",e)},expression:"formData.sort"}})],1)],1)],1),i("el-row",{attrs:{gutter:24}},[i("el-col",[i("el-form-item",{attrs:{prop:"store_name","label-for":"store_name"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(t._s(t.id?"立即修改":"立即提交"))])],1)],1)],1)],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"})]),i("city",{ref:"city",attrs:{type:t.type,selectArr:t.selectArr},on:{selectCity:t.selectCity}})],1)}),[],!1,null,"99351d8a",null);e.a=i.exports},7662:function(t,e,i){"use strict";var a=i("3fea");i.n(a).a},8775:function(t,e,i){},"8c7d":function(t,e,i){"use strict";var a=i("8775");i.n(a).a}}]);