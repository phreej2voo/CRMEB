require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/lottery/grids/record"],{"266b":function(e,t,n){"use strict";(function(e,t){var i=n("4ea4");n("248d");i(n("66fd"));var o=i(n("4db2"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"3e1c":function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(n("cf40"));var o=n("0bad"),r=i(n("66ca")),d={components:{emptyPage:function(){n.e("components/emptyPage").then(function(){return resolve(n("2baa"))}.bind(null,n)).catch(n.oe)},userAddress:function(){Promise.all([n.e("common/vendor"),n.e("pages/goods/lottery/components/userAddress")]).then(function(){return resolve(n("5b96"))}.bind(null,n)).catch(n.oe)}},mixins:[r.default],data:function(){return{loading:!1,addressModel:!1,where:{page:1,limit:20},lotteryList:[],loadTitle:""}},onLoad:function(){this.getLotteryList()},filters:{typeName:function(e){return 2==e?"积分":3==e?"余额":4==e?"红包":5==e?"优惠券":6==e?"商品":void 0}},onReady:function(){},methods:{getAddress:function(e){var t=this,n=e;n.id=this.addid,n.address=e.address.province+e.address.city+e.address.district+e.detail,(0,o.receiveLottery)(n).then((function(e){t.$util.Tips({title:t.$t("领取成功")}),t.addressModel=!1,t.where.page=1,t.loadend=!1,t.lotteryList=[],t.getLotteryList()})).catch((function(e){t.$util.Tips({title:e})}))},fromAddress:function(e){this.addid=e.id,this.addressModel=!0},copyOrderId:function(t){e.setClipboardData({data:t})},getLotteryList:function(){var e=this,t=this;this.loadend||this.loading||(this.loading=!0,this.loadTitle="",(0,o.getLotteryList)(this.where).then((function(n){var i=n.data,o=e.$util.SplitArray(i,e.lotteryList),r=i.length<e.where.limit;e.loadend=r,e.loading=!1,e.loadTitle=r?t.$t("没有更多内容啦~"):t.$t("加载更多"),e.$set(e,"lotteryList",o),e.$set(e.where,"page",e.where.page+1)})).catch((function(e){t.loading=!1,t.loadTitle=t.$t("加载更多")})))}},onReachBottom:function(){this.lotteryList.length,this.getLotteryList()}};t.default=d}).call(this,n("543d")["default"])},"4db2":function(e,t,n){"use strict";n.r(t);var i=n("eb3d"),o=n("e952");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("f6be");var d=n("f0c5"),l=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"33eced8d",null,!1,i["a"],void 0);t["default"]=l.exports},c7bd:function(e,t,n){},e952:function(e,t,n){"use strict";n.r(t);var i=n("3e1c"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},eb3d:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.lotteryList.length),i=n?e.__map(e.lotteryList,(function(t,n){var i=e.__get_orig(t),o=e.$t("奖品类型"),r=e._f("typeName")(t.prize.type),d=6!=t.type||t.receive_time?null:e.$t("立即兑换"),l=6!=t.type||t.receive_time?e.$t("兑换时间"):null,a=t.deliver_info.deliver_name?e.$t("快递公司"):null,s=t.deliver_info.deliver_number?e.$t("快递单号"):null,c=t.deliver_info.deliver_number&&t.deliver_info.deliver_number?e.$t("复制"):null;return{$orig:i,m0:o,f0:r,m1:d,m2:l,m3:a,m4:s,m5:c}})):null,o=n?e.lotteryList.length:null,r=0===e.lotteryList.length&&!e.loading,d=r?e.$t("暂无中奖记录"):null;e._isMounted||(e.e0=function(){e.addressModel=!1},e.e1=function(){e.addressModel=!1}),e.$mp.data=Object.assign({},{$root:{g0:n,l0:i,g1:o,g2:r,m6:d}})},o=[]},f6be:function(e,t,n){"use strict";var i=n("c7bd"),o=n.n(i);o.a}},[["266b","common/runtime","common/vendor","pages/goods/common/vendor"]]]);