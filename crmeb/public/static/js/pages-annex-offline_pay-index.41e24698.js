(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-offline_pay-index"],{"05ab":function(t,e,n){var i=n("6d39");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("07645352",i,!0,{sourceMap:!1,shadowMode:!1})},"305d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-13afb535]{background-color:#fff}body.?%PAGE?%[data-v-13afb535]{background-color:#fff}",""]),t.exports=e},"451d":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.adminExpress=function(t,e){return o.default.get("admin/order/express/"+t+"".concat(e?"/refund":""))},e.aliPay=function(t,e){return o.default.get("ali_pay",{key:t,quitUrl:e},{noAuth:!0})},e.cancelRefundOrder=function(t){return o.default.post("order/refund/cancel/"+t)},e.cartDel=function(t){"object"===(0,a.default)(t)&&(t=t.join(","));return o.default.post("cart/del",{ids:t})},e.changeCartNum=function(t,e){return o.default.post("cart/num",{id:t,number:e})},e.checkShipping=function(t,e){return o.default.post("order/check_shipping",{cartId:t,new:e})},e.express=function(t,e){return o.default.get("order/express/"+t+"".concat(e?"/refund":""))},e.getCartCounts=function(t){return o.default.get("cart/count",{numType:void 0===t?0:t})},e.getCartList=function(t){return o.default.get("cart/list",t)},e.getCashierOrder=function(t,e){return o.default.get("order/cashier/".concat(t,"/").concat(e))},e.getCouponsOrderPrice=function(t,e){return o.default.get("coupons/order/"+t,e)},e.getNewOrderList=function(t){return o.default.get("order/refund/list",t)},e.getOrderDetail=function(t,e){return o.default.get("order/detail/"+t+"".concat(e?"/".concat(e):""))},e.getOrderList=function(t){return o.default.get("order/list",t)},e.getRefundOrderDetail=function(t,e){return o.default.get("order/refund_detail/"+t+"".concat(e?"/".concat(e):""))},e.getResetCart=function(t){return o.default.post("v2/reset_cart",t)},e.offlineCheckPrice=function(t){return o.default.post("order/offline/check/price",t)},e.offlineCreate=function(t){return o.default.post("order/offline/create",t)},e.ordeRefundReason=function(){return o.default.get("order/refund/reason")},e.orderAgain=function(t){return o.default.post("order/again",{uni:t})},e.orderCancel=function(t){return o.default.post("order/cancel",{id:t})},e.orderComment=function(t){return o.default.post("order/comment",t)},e.orderConfirm=function(t,e,n,i){return o.default.post("order/confirm",{cartId:t,new:e,addressId:n,shipping_type:i})},e.orderCoupon=function(t){return o.default.post("v2/order/product_coupon/"+t)},e.orderCreate=function(t,e){return o.default.post("order/create/"+t,e)},e.orderData=function(){return o.default.get("order/data")},e.orderDel=function(t){return o.default.post("order/del",{uni:t})},e.orderInvoiceDetail=function(t){return o.default.get("v2/order/invoice_detail/".concat(t))},e.orderInvoiceList=function(t){return o.default.get("v2/order/invoice_list",t)},e.orderOfflinePayType=function(){return o.default.get("order/offline/pay/type")},e.orderPay=function(t){return o.default.post("order/pay",t)},e.orderProduct=function(t){return o.default.post("order/product",{unique:t})},e.orderRefundVerify=function(t){return o.default.post("order/refund/verify",t)},e.orderTake=function(t){return o.default.post("order/take",{uni:t})},e.postOrderComputed=function(t,e){return o.default.post("order/computed/"+t,e)},e.postRefundGoods=function(t){return o.default.post("order/refund/cart_info",t)},e.refundExpress=function(t){return o.default.post("order/refund/express",t)},e.refundGoodsList=function(t){return o.default.get("order/refund/cart_info/".concat(t))},e.refundOrderDel=function(t){return o.default.get("order/refund/del/"+t,{})},e.refundOrderDetail=function(t){return o.default.get("order/refund/detail/"+t)},e.returnGoodsSubmit=function(t,e){return o.default.post("order/refund/apply/".concat(t),e)},e.vcartList=function(){return o.default.get("v2/cart_list")},n("99af");var a=i(n("53ca")),o=i(n("3160"))},"6d39":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-13afb535] uni-radio .uni-radio-input.uni-radio-input-checked{border:1px solid #fdc383!important;background-color:#fdc383!important}.input-section .section-hd[data-v-13afb535]{padding:%?30?%;font-size:%?28?%;color:#666}.input-section .section-bd[data-v-13afb535]{padding-right:%?30?%;padding-left:%?30?%}.input-section .input-group[data-v-13afb535]{display:flex;align-items:flex-end;padding:%?45?% %?20?% %?47?%;font-size:%?80?%;color:#999}.input-section .input[data-v-13afb535]{flex:1;height:%?110?%;margin-left:%?15?%;font-size:%?100?%;color:#282828}.input-section .discount[data-v-13afb535]{padding:%?27?% %?20?%;border-top:%?1?% solid #eee;font-size:%?28?%;color:#e93323}.radio-section[data-v-13afb535]{border-top:%?20?% solid #f5f5f5}.radio-section .section-hd[data-v-13afb535]{padding:%?30?%;font-size:%?28?%;color:#666}.radio-section .section-bd[data-v-13afb535]{padding-left:%?50?%}.radio-section .item[data-v-13afb535]{display:flex;align-items:center;padding-top:%?30?%;padding-right:%?30?%;padding-bottom:%?30?%;border-bottom:%?1?% solid #f5f5f5}.radio-section .item .name[data-v-13afb535]{display:flex;align-items:center;justify-content:space-between}.radio-section .iconfont[data-v-13afb535]{font-size:%?44?%}.radio-section .icon-yue[data-v-13afb535]{color:#fe960f}.radio-section .icon-weixinzhifu[data-v-13afb535]{color:#41b035}.radio-section .icon-zhifubao[data-v-13afb535]{color:#099bdf}.radio-section .name[data-v-13afb535]{flex:1;margin-left:%?30?%;font-size:%?30?%;color:#333}.radio-section .money[data-v-13afb535]{float:right;padding-right:%?20?%;font-size:%?20?%}.button[data-v-13afb535]{height:%?86?%;border-radius:%?43?%;margin:%?114?% %?30?% %?30?%;background:linear-gradient(90deg,#fee2b7,#fdc383);font-size:%?30?%;line-height:%?86?%;color:#5d3324}.alipay[data-v-13afb535]{display:none}',""]),t.exports=e},"78c9":function(t,e,n){"use strict";n.r(e);var i=n("b57a"),a=n("cf1c");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("87fc"),n("d1f7");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"13afb535",null,!1,i["a"],void 0);e["default"]=u.exports},"87fc":function(t,e,n){"use strict";var i=n("e188"),a=n.n(i);a.a},b57a:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-form",{staticClass:"form",style:t.colorStyle,on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.checkForm.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"input-section"},[n("v-uni-view",{staticClass:"section-hd"},[t._v(t._s(t.$t("支付金额")))]),n("v-uni-view",{staticClass:"section-bd"},[n("v-uni-view",{staticClass:"input-group"},[t._v(t._s(t.$t("￥"))),n("v-uni-input",{staticClass:"input",attrs:{name:"money",type:"digit",placeholder:"0.00"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}},model:{value:t.money,callback:function(e){t.money=t._n(e)},expression:"money"}})],1),t.payPrice&&t.show?n("v-uni-view",{staticClass:"discount"},[t._v(t._s(t.$t("会员优惠价"))+"："+t._s(t.$t("￥"))+t._s(t.payPrice||0))]):t._e()],1)],1),n("v-uni-view",{staticClass:"radio-section"},[n("v-uni-view",{staticClass:"section-hd"},[t._v(t._s(t.$t("支付方式")))]),n("v-uni-radio-group",{staticClass:"section-bd",attrs:{name:"method"}},[t.yuePay?n("v-uni-label",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-yue"}),n("v-uni-view",{staticClass:"name"},[n("v-uni-text",[t._v(t._s(t.$t("余额支付")))]),n("v-uni-text",{staticClass:"money"},[t._v(t._s(t.$t("可用余额"))+":"+t._s(t.$t("￥"))+t._s(t.now_money||0))])],1),n("v-uni-radio",{attrs:{value:"yue",checked:"yue"===t.payType}})],1):t._e(),t.wxpay?n("v-uni-label",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-weixinzhifu"}),n("v-uni-text",{staticClass:"name"},[t._v(t._s(t.$t("微信支付")))]),n("v-uni-radio",{attrs:{value:"weixin",checked:"weixin"===t.payType}})],1):t._e()],1)],1),n("v-uni-button",{staticClass:"button",attrs:{"form-type":"submit"}},[t._v(t._s(t.$t("确认")))]),n("v-uni-view",{staticClass:"alipay",domProps:{innerHTML:t._s(t.alipayHtml)}})],1)},a=[]},cf1c:function(t,e,n){"use strict";n.r(e);var i=n("f609"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d1f7:function(t,e,n){"use strict";var i=n("05ab"),a=n.n(i);a.a},e188:function(t,e,n){var i=n("305d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("615b3422",i,!0,{sourceMap:!1,shadowMode:!1})},f609:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("466d"),n("99af");var a=n("451d"),o=n("666f"),r=n("26cb"),u=i(n("66ca")),s=getApp(),c={mixins:[u.default],data:function(){return{money:"",payPrice:"",payType:"weixin",alipayHtml:"",alipay:!1,wxpay:!1,yuePay:!1,paying:!1,now_money:0,isWeixin:!1,site_name:"",isCommitted:!1,show:!1}},computed:(0,r.mapGetters)(["isLogin"]),onLoad:function(t){if(this.isLogin||(0,o.toLogin)(),t.code){var e=s.globalData.spid?s.globalData.spid:"";wechatAuthV2(t.code,e).then((function(e){location.href=decodeURIComponent(decodeURIComponent(t.back_url))}))}},onShow:function(){this.isLogin&&this.getPayType(),this.isWeixin=this.$wechat.isWeixin()},methods:{inputChange:function(t){var e=this;t.target.value=t.target.value.match(/^\d*(.?\d{0,2})/g)[0]||"",this.$nextTick((function(){e.money=t.target.value,e.checkPrice()}))},getPayType:function(){var t=this;(0,a.orderOfflinePayType)().then((function(e){var n=e.data,i=n.ali_pay_status,a=n.pay_weixin_open,o=n.yue_pay_status,r=n.offline_pay_status,u=n.site_name,s=n.now_money;t.alipay=i,t.wxpay=a,t.yuePay=o,t.now_money=s,t.site_name=u,r||uni.showModal({title:t.$t("支付提醒"),content:t.$t("线下支付已关闭，请点击确认按钮返回主页"),showCancel:!1,success:function(){uni.switchTab({url:"/pages/index/index"})}}),u&&uni.setNavigationBarTitle({title:u})})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},checkForm:function(t){var e=t.detail.value,n=e.money,i=e.method;n?this.combData(i):uni.showToast({title:this.$t("请输入支付金额"),icon:"none"})},checkPrice:function(){var t=this;(0,a.offlineCheckPrice)({pay_price:this.money}).then((function(e){t.payPrice=e.data.pay_price,t.show=e.data.show})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},combData:function(t){var e=this,n={type:3,pay_type:t,from:"weixinh5",price:this.payPrice||this.money,money:this.money};this.isWeixin&&(n.from="weixin"),this.paying||(this.paying=!0,uni.showLoading({title:this.$t("正在确认")}),(0,a.offlineCreate)(n).then((function(t){uni.hideLoading(),e.callPay(t)})).catch((function(t){e.paying=!1,uni.showToast({title:t,icon:"none"})})))},callPay:function(t){var e=this,n=t.data,i=n.status,a=n.result,o=a.orderId,r=a.jsConfig,u="/pages/annex/offline_result/index?site_name="+this.site_name;switch(i){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":this.paying=!1,this.$util.Tips({title:t.msg},{tab:5,url:u});break;case"SUCCESS":this.paying=!1,this.money="",this.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:u});break;case"WECHAT_PAY":this.$wechat.pay(a.jsConfig).then((function(t){e.paying=!1,e.$util.Tips({title:e.$t("支付成功"),icon:"success"},{tab:5,url:"/pages/annex/offline_result/index"})})).catch((function(t){e.paying=!1,"chooseWXPay:cancel"==t.errMsg&&uni.showToast({title:e.$t("取消支付"),icon:"none"})}));break;case"PAY_DEFICIENCY":this.paying=!1,this.$util.Tips({title:t.msg});break;case"WECHAT_H5_PAY":this.paying=!1,uni.showToast({title:t.msg,success:function(){location.href=r.h5_url}});break;case"ALIPAY_PAY":this.paying=!1,this.$wechat.isWeixin()?uni.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(o,"&link=").concat(r.qrCode)}):(this.alipayHtml=r,this.$nextTick((function(){document.getElementById("alipaysubmit").submit()})));break}}}};e.default=c}}]);