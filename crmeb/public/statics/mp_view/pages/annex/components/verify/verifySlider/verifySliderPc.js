require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/components/verify/verifySlider/verifySliderPc"],{"06a6":function(t,e,i){"use strict";var n=i("1f2c"),o=i.n(n);o.a},"1f2c":function(t,e,i){},"4f4c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,"2"===t.type?parseInt(t.setSize.imgHeight):null),n=t.backImgBase&&"2"===t.type?Math.floor(47*parseInt(t.setSize.imgWidth)/310):null,o=t.backImgBase&&"2"===t.type?parseInt(t.setSize.imgHeight):null;t.$mp.data=Object.assign({},{$root:{m0:i,g0:n,m1:o}})},o=[]},"52d2":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("09c0"),o=i("4c8f"),s=i("d322"),r={name:"VerifySlide",props:{captchaType:{type:String,default:"blockPuzzle"},type:{type:String,default:"1"},mode:{type:String,default:"fixed"},vSpace:{type:Number,default:5},explain:{type:String,default:"向右滑动完成验证"},imgSize:{type:Object,default:function(){return{width:"310px",height:"155px"}}},blockSize:{type:Object,default:function(){return{width:"50px",height:"50px"}}},barSize:{type:Object,default:function(){return{width:"310px",height:"40px"}}},defaultImg:{type:String,default:""}},data:function(){return{secretKey:"",passFalg:"",backImgBase:"",blockBackImgBase:"",backToken:"",startMoveTime:"",endMovetime:"",tipsBackColor:"",tipWords:"",text:"",finishText:"",setSize:{imgHeight:0,imgWidth:0,barHeight:0,barWidth:0},top:0,left:0,moveBlockLeft:void 0,leftBarWidth:void 0,moveBlockBackgroundColor:void 0,leftBarBorderColor:"#ddd",iconColor:void 0,iconClass:"icon-right",status:!1,isEnd:!1,showRefresh:!0,transitionLeft:"",transitionWidth:""}},computed:{barArea:function(){return this.$el.querySelector(".verify-bar-area")},resetSize:function(){return o.resetSize}},watch:{type:{immediate:!0,handler:function(){this.init()}}},mounted:function(){this.$el.onselectstart=function(){return!1}},methods:{init:function(){var t=this;this.text=this.explain,this.getPictrue(),this.$nextTick((function(){var e=t.resetSize(t);for(var i in e)t.$set(t.setSize,i,e[i]);t.$parent.$emit("ready",t)}));var e=this;window.removeEventListener("touchmove",(function(t){e.move(t)})),window.removeEventListener("mousemove",(function(t){e.move(t)})),window.removeEventListener("touchend",(function(){e.end()})),window.removeEventListener("mouseup",(function(){e.end()})),window.addEventListener("touchmove",(function(t){e.move(t)})),window.addEventListener("mousemove",(function(t){e.move(t)})),window.addEventListener("touchend",(function(){e.end()})),window.addEventListener("mouseup",(function(){e.end()}))},start:function(t){if(t.preventDefault(),t=t||window.event,t.touches.length)e=t.touches[0].pageX;else var e=t.clientX;this.startLeft=Math.floor(e-this.barArea.getBoundingClientRect().left),this.startMoveTime=+new Date,0==this.isEnd&&(this.text="",this.moveBlockBackgroundColor="#337ab7",this.leftBarBorderColor="#337AB7",this.iconColor="#fff",t.stopPropagation(),this.status=!0)},move:function(t){if(t=t||window.event,this.status&&0==this.isEnd){if(t.touches)e=t.touches[0].pageX;else var e=t.clientX;var i=this.barArea.getBoundingClientRect().left,n=e-i;n>=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2&&(n=this.barArea.offsetWidth-parseInt(parseInt(this.blockSize.width)/2)-2),n<=0&&(n=parseInt(parseInt(this.blockSize.width)/2)),this.moveBlockLeft=n-this.startLeft+"px",this.leftBarWidth=n-this.startLeft+"px"}},end:function(){var t=this;this.endMovetime=+new Date;if(this.status&&0==this.isEnd){var e=parseInt((this.moveBlockLeft||"").replace("px",""));e=310*e/parseInt(this.setSize.imgWidth);var i=this.secretKey?(0,n.aesEncrypt)(this.backToken+"---"+JSON.stringify({x:e,y:5}),this.secretKey):this.backToken+"---"+JSON.stringify({x:e,y:5}),o={captchaType:this.captchaType,pointJson:this.secretKey?(0,n.aesEncrypt)(JSON.stringify({x:e,y:5}),this.secretKey):JSON.stringify({x:e,y:5}),token:this.backToken};(0,s.ajcaptchaCheck)(o).then((function(e){e.data;t.moveBlockBackgroundColor="#5cb85c",t.leftBarBorderColor="#5cb85c",t.iconColor="#fff",t.iconClass="icon-check",t.showRefresh=!0,t.isEnd=!0,setTimeout((function(){"pop"==t.mode&&(t.$parent.clickShow=!1),t.refresh()}),1500),t.passFalg=!0,t.tipWords="".concat(((t.endMovetime-t.startMoveTime)/1e3).toFixed(2),"s验证成功"),setTimeout((function(){t.tipWords="",t.$emit("success",{captchaVerification:i})}),1e3)})).catch((function(e){t.moveBlockBackgroundColor="#d9534f",t.leftBarBorderColor="#d9534f",t.iconColor="#fff",t.iconClass="icon-close",t.passFalg=!1,setTimeout((function(){t.refresh()}),1e3),t.$parent.$emit("error",t),t.tipWords="验证失败",setTimeout((function(){t.tipWords=""}),1e3)})),this.status=!1}},refresh:function(){var t=this;this.showRefresh=!0,this.finishText="",this.transitionLeft="left .3s",this.moveBlockLeft=0,this.leftBarWidth=void 0,this.transitionWidth="width .3s",this.leftBarBorderColor="#ddd",this.moveBlockBackgroundColor="#fff",this.iconColor="#000",this.iconClass="icon-right",this.isEnd=!1,this.getPictrue(),setTimeout((function(){t.transitionWidth="",t.transitionLeft="",t.text=t.explain}),300)},getPictrue:function(){var e=this,i={captchaType:this.captchaType,clientUid:t.getStorageSync("slider"),ts:Date.now()};(0,s.getAjcaptcha)(i).then((function(t){var i=t.data;e.backImgBase=i.originalImageBase64,e.blockBackImgBase=i.jigsawImageBase64,e.backToken=i.token,e.secretKey=i.secretKey})).catch((function(){e.backImgBase=null,e.blockBackImgBase=null}))}}};e.default=r}).call(this,i("543d")["default"])},"6b50":function(t,e,i){"use strict";i.r(e);var n=i("52d2"),o=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},"93a0":function(t,e,i){"use strict";i.r(e);var n=i("4f4c"),o=i("6b50");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("06a6");var r=i("f0c5"),a=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"7b255c17",null,!1,n["a"],void 0);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/annex/components/verify/verifySlider/verifySliderPc-create-component',
    {
        'pages/annex/components/verify/verifySlider/verifySliderPc-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("93a0"))
        })
    },
    [['pages/annex/components/verify/verifySlider/verifySliderPc-create-component']]
]);