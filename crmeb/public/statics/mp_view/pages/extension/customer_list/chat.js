require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extension/customer_list/chat"],{"1e5f":function(t,n,e){},2625:function(t,n,e){"use strict";e.r(n);var o=e("30ab"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"30ab":function(t,n,e){"use strict";(function(t){var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("448a")),a=e("8ba8"),s=e("1579"),r=e("451d"),d=(o(e("6e865")),o(e("8112"))),c=o(e("66ca")),u=e("989b"),l=getApp(),f=t.getSystemInfoSync().statusBarHeight+"px",h=function(t,n){n=1*n||1;var e=[];return t.forEach((function(t,o){o%n===0&&e.push([]),e[e.length-1].push(t)})),e},p={name:"adminChat_index",data:function(){return{status:!1,loading:!1,sysHead:f,isTool:!1,isSwiper:!1,isWords:!1,autoplay:!1,circular:!0,interval:3e3,duration:500,emojiGroup:h(d.default,21),wordsList:[],con:"",toUid:0,limit:15,upperId:0,chatList:[],kefuInfo:{},scrollTop:0,active:!0,isScroll:!0,oldHeight:0,myUid:0,productId:0,productInfo:{},orderId:0,page:1,orderInfo:{},uidTo:0,titleName:"",chatStatus:!1,userType:0,canvasWidth:"",canvasHeight:"",canvasStatus:!1,httpUrl:""}},mixins:[c.default],components:{Loading:function(){e.e("components/Loading/index").then(function(){return resolve(e("9bda"))}.bind(null,e)).catch(e.oe)}},computed:{isSend:function(){return 0!=this.con.length},records:function(){var t=this;return this.chatList.map((function(n,e){return e?n.add_time-t.chatList[e-1].add_time>=300?n.show=!0:n.show=!1:n.show=!0,n}))}},onLoad:function(n){t.showLoading({title:this.$t("客服连接中")}),this.myUid=this.$store.state.app.uid,this.toUid=n.to_uid,this.productId=parseInt(n.productId)||0,this.orderId=n.orderId||0,this.userType=n.type,this.getproductInfo(),this.getOrderInfo()},onUnload:function(){this.$socket.onClose(),t.$off()},onReady:function(){var n=this;this.httpUrl="".concat(u.HTTP_REQUEST_URL,"/statics/images/look.png");var e=function(){l.globalData.isWsOpen?(n.$socket.send({data:{token:n.$store.state.app.token,form_type:2},type:"login"}),n.getChatList()):n.$socket.onStart(n.$store.state.app.token,2);t.$once("socketOpen",(function(){n.$socket.send({data:n.$store.state.app.token,form_type:2,type:"login"}),n.$nextTick((function(t){n.getChatList()}))}))};e(),t.$on("to_transfer",(function(t){n.toUid=t.toUid,n.$socket.send({data:{id:n.toUid},type:"to_chat"}),n.chatList.forEach((function(e){e.uid!=n.myUid&&(e.avatar=t.avatar)}))})),t.$once("timeout",(function(){t.showLoading({title:"重连中",mask:!0}),n.chatList=[],e()})),t.$once("success",(function(){n.$socket.init()})),t.$on(["reply","chat"],(function(t){1==t.msn_type&&(t.msn=n.replace_em(t.msn)),t._add_time=t._add_time.substring(0,t._add_time.length-3),n.chatList.push(t),n.$nextTick((function(){n.height()}))})),t.$on("socket_error",(function(){n.$util.Tips({title:n.$t("连接失败")})})),t.$on("err_tip",(function(t){n.$util.Tips({title:t.msg})})),t.$on("online",(function(e){0==e.online&&t.showModal({title:n.$t("提示"),content:n.$t("客服已下线，是否需要反馈？"),success:function(n){n.confirm?t.redirectTo({url:"/pages/columnGoods/HotNewGoods/feedback"}):n.cancel}})})),this.$nextTick((function(){n.height()}))},methods:{previewImage:function(n){t.previewImage({urls:[n]})},goBack:function(){t.navigateBack()},getproductInfo:function(){var t=this;this.productId&&(0,s.getProductDetail)(this.productId).then((function(n){t.productInfo=n.data.storeInfo}))},goProduct:function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.msn)})},goOrder:function(n){this.userType?t.navigateTo({url:"/pages/admin/orderDetail/index?id=".concat(n.msn)}):t.navigateTo({url:"/pages/goods/order_details/index?order_id=".concat(n.msn)})},getOrderInfo:function(){var t=this;this.orderId&&(0,r.getOrderDetail)(this.orderId).then((function(n){t.orderInfo=n.data,t.orderInfo.add_time_h&&(t.orderInfo.add_time_h=t.orderInfo.add_time_h.substring(0,t.orderInfo.add_time_h.lastIndexOf(":"))),t.orderInfo.cartInfo.length&&(t.cartInfo=t.orderInfo.cartInfo[0])}))},addEmoji:function(t){var n="[".concat(t,"]");this.con+=n},replace_em:function(t){return t=t.replace(/\[([^\[\]]+)\]/g,"<span class='em $1' style='background-image:url("+this.httpUrl+")'></span>"),t},getChatList:function(){var n=this;(0,a.getChatRecord)({limit:this.limit,uidTo:this.uidTo,toUid:this.toUid}).then((function(e){var o="";e.data.serviceList.length&&(o=0==n.uidTo?"#msg-".concat(e.data.serviceList[e.data.serviceList.length-1].id):"#msg-".concat(n.chatList.length?n.chatList[0].id:0));t.hideLoading(),t.setNavigationBarTitle({title:e.data.nickname}),n.titleName=e.data.nickname,n.toUid=e.data.uid,e.data.serviceList.forEach((function(t){t._add_time=t._add_time.substring(0,t._add_time.length-3),1!=t.msn_type&&2!=t.msn_type||(t.msn=n.replace_em(t.msn))})),n.loading=!1,n.chatList=[].concat((0,i.default)(e.data.serviceList),(0,i.default)(n.chatList)),n.$nextTick((function(){n.chatList.length&&(n.setPageScrollTo(o),n.isScroll=e.data.serviceList.length>=n.limit)})),n.$socket.send({data:{id:n.toUid},type:"to_chat"})})).catch((function(e){t.hideLoading(),n.$util.Tips({title:e}),n.loading=!1,n.isScroll=!1,t.redirectTo({url:"/pages/columnGoods/HotNewGoods/feedback"})}))},setPageScrollTo:function(n){var e=this,o=t.createSelectorQuery().in(this).select(n);o.boundingClientRect((function(t){e.scrollTop=t?parseFloat(t.top)-60:0})).exec()},sendText:function(){if(!this.isSend)return this.$util.Tips({title:this.$t("请输入内容")});this.sendMsg(this.con,1),this.con=""},sendMsg:function(t,n){this.$socket.send({data:{msn:t,type:n,to_uid:this.toUid},form_type:2,type:"chat"})},uploadImg:function(){var t=this,n=this;n.canvasStatus=!0,n.$util.uploadImageChange("upload/image",(function(t){200==t.status&&n.sendMsg(t.data.url,3)}),(function(n){t.canvasStatus=!1}),(function(n){t.canvasWidth=n.w,t.canvasHeight=n.h}))},sendProduct:function(){this.sendMsg(this.productId,5),this.productId=0,this.productInfo={}},sendOrder:function(){this.sendMsg(this.orderId,6),this.orderId=0,this.orderInfo={}},height:function(){var n=this,e=0,o=t.createSelectorQuery().select(".chat");setTimeout((function(t){o.boundingClientRect((function(t){e=t.height,n.active?n.scrollTop=parseInt(e)+500:n.scrollTop=parseInt(e)+100})).exec()}),200)},scrollToTop:function(){var t=this;this.isScroll&&(this.loading=!0,this.uidTo=this.chatList.length?this.chatList[0].id:0,this.isScroll=!1,setTimeout((function(n){t.getChatList()}),800))}}};n.default=p}).call(this,e("543d")["default"])},5108:function(t,n,e){"use strict";e.r(n);var o=e("c0e8"),i=e("2625");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("55a6"),e("8ac7"),e("ba69");var s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=r.exports},"55a6":function(t,n,e){"use strict";var o=e("bb44"),i=e.n(o);i.a},"8ac7":function(t,n,e){"use strict";var o=e("d788"),i=e.n(o);i.a},ba69:function(t,n,e){"use strict";var o=e("1e5f"),i=e.n(o);i.a},bb44:function(t,n,e){},c0e8:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.productId&&t.productInfo.id?t.$t("￥"):null),o=t.productId&&t.productInfo.id&&t.productInfo.ot_price?t.$t("￥"):null,i=t.productId&&t.productInfo.id?t.$t("发送客服"):null,a=t.orderId&&t.orderInfo.id?t.$t("订单号"):null,s=t.orderId&&t.orderInfo.id&&t.orderInfo.cartInfo?t.orderInfo.cartInfo.length:null,r=t.orderId&&t.orderInfo.id?t.$t("件商品"):null,d=t.orderId&&t.orderInfo.id?t.$t("￥"):null,c=t.orderId&&t.orderInfo.id?t.$t("￥"):null,u=t.orderId&&t.orderInfo.id?t.$t("发送客服"):null,l=t.__map(t.records,(function(n,e){var o=t.__get_orig(n),i=5==n.msn_type?t.$t("￥"):null,a=6==n.msn_type&&n.orderInfo?t.$t("订单号"):null,s=6==n.msn_type&&n.orderInfo?t.$t("￥"):null;return{$orig:o,m8:i,m9:a,m10:s}})),f=t.$t("请输入内容"),h=t.isSwiper?t.emojiGroup.length:null;t._isMounted||(t.e0=function(n){t.isSwiper=!t.isSwiper}),t.$mp.data=Object.assign({},{$root:{m0:e,m1:o,m2:i,m3:a,g0:s,m4:r,m5:d,m6:c,m7:u,l0:l,m11:f,g1:h}})},i=[]},d788:function(t,n,e){},e9f1:function(t,n,e){"use strict";(function(t,n){var o=e("4ea4");e("248d");o(e("66fd"));var i=o(e("5108"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])}},[["e9f1","common/runtime","common/vendor","pages/extension/common/vendor"]]]);