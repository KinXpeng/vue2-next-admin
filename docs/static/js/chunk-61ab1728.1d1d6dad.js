(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-61ab1728"],{"47e6":function(t,e,a){"use strict";a("80eb")},"80eb":function(t,e,a){},"8dc3":function(t,e,a){"use strict";a.r(e);var n=a("9e2e"),i={components:{countTo:a.n(n).a},data:function(){return{setStartVal:0,setEndVal:2017,setDuration:4e3,setDecimals:0,setSeparator:",",setSuffix:" rmb",setPrefix:"¥ ",startVal1:0,endVal1:2017}},computed:{_startVal:function(){return this.setStartVal?this.setStartVal:0},_endVal:function(){return this.setEndVal?this.setEndVal:0},_duration:function(){return this.setDuration?this.setDuration:100},_decimals:function(){return this.setDecimals?this.setDecimals<0||this.setDecimals>20?(alert("digits argument must be between 0 and 20"),0):this.setDecimals:0},_separator:function(){return this.setSeparator},_suffix:function(){return this.setSuffix},_prefix:function(){return this.setPrefix}},methods:{changeExampleEndVal:function(){this.endVal1=this.endVal1+1e3},incrementalUpdate:function(){this.startVal1=this.endVal1,this.endVal1=this.endVal1+1e3},callback:function(){},start1:function(){this.$refs.example1.start()},start2:function(){this.$refs.example2.start()},start3:function(){this.$refs.example3.start()},pauseResume:function(){this.$refs.example3.pauseResume()}}},s=(a("47e6"),a("e607")),r=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"count"},[t._m(0),[e("h1",[t._v("Vue CountTo")]),e("div",{staticClass:"container"},[e("div",{staticClass:"example-item"},[e("h3",[t._v("simple example")]),e("code",[t._v("<count-to :startVal='0' :endVal='2018' :duration=4000></count-to>")]),e("count-to",{ref:"example1",staticClass:"example1",attrs:{"start-val":t.startVal1,"end-val":t.endVal1,duration:4e3}}),e("div",{staticClass:"example-btn",on:{click:t.start1}},[t._v("start")]),e("div",{staticClass:"example-btn",on:{click:t.changeExampleEndVal}},[t._v("change end-val")]),e("div",{staticClass:"example-btn",on:{click:t.incrementalUpdate}},[t._v("incremental update")])],1),e("div",{staticClass:"example-item"},[e("h3",[t._v("count down example")]),e("code",[t._v("<count-to :startVal='2017' :endVal='0' :duration=8000></count-to>")]),e("count-to",{ref:"example2",staticClass:"example2",attrs:{"start-val":2017,"end-val":0,duration:8e3}}),e("div",{staticClass:"example-btn",on:{click:t.start2}},[t._v("start")])],1),e("div",{staticClass:"example-item"},[e("h3",[t._v("custom example")]),e("count-to",{ref:"example3",staticClass:"example3",attrs:{"start-val":t._startVal,"end-val":t._endVal,duration:t._duration,decimals:t._decimals,separator:t._separator,prefix:t._prefix,suffix:t._suffix,autoplay:!1}}),e("div",[e("label",{staticClass:"label",attrs:{for:"startValInput"}},[t._v("\n            startVal:\n            "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setStartVal,expression:"setStartVal",modifiers:{number:!0}}],attrs:{type:"number",name:"startValInput"},domProps:{value:t.setStartVal},on:{input:function(e){e.target.composing||(t.setStartVal=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("label",{staticClass:"label",attrs:{for:"endValInput"}},[t._v("\n            endVal:\n            "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setEndVal,expression:"setEndVal",modifiers:{number:!0}}],attrs:{type:"number",name:"endVaInput"},domProps:{value:t.setEndVal},on:{input:function(e){e.target.composing||(t.setEndVal=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("label",{staticClass:"label",attrs:{for:"durationInput"}},[t._v("\n            duration:\n            "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setDuration,expression:"setDuration",modifiers:{number:!0}}],attrs:{type:"number",name:"durationInput"},domProps:{value:t.setDuration},on:{input:function(e){e.target.composing||(t.setDuration=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"startBtn example-btn",on:{click:t.start3}},[t._v("start")]),e("div",{staticClass:"pause-resume-btn example-btn",on:{click:t.pauseResume}},[t._v("pause/resume")]),e("br"),e("label",{staticClass:"label",attrs:{for:"decimalsInput"}},[t._v("\n            decimals:\n            "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setDecimals,expression:"setDecimals",modifiers:{number:!0}}],attrs:{type:"number",name:"decimalsInput"},domProps:{value:t.setDecimals},on:{input:function(e){e.target.composing||(t.setDecimals=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("label",{staticClass:"label",attrs:{for:"separatorInput"}},[t._v("\n            separator:\n            "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.setSeparator,expression:"setSeparator"}],attrs:{name:"separatorInput"},domProps:{value:t.setSeparator},on:{input:function(e){e.target.composing||(t.setSeparator=e.target.value)}}})]),e("label",{staticClass:"label",attrs:{for:"prefixInput"}},[t._v("\n            prefix:\n            "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.setPrefix,expression:"setPrefix"}],attrs:{name:"prefixInput"},domProps:{value:t.setPrefix},on:{input:function(e){e.target.composing||(t.setPrefix=e.target.value)}}})]),e("label",{staticClass:"label",attrs:{for:"suffixInput"}},[t._v("\n            suffix:\n            "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.setSuffix,expression:"setSuffix"}],attrs:{name:"suffixInput"},domProps:{value:t.setSuffix},on:{input:function(e){e.target.composing||(t.setSuffix=e.target.value)}}})])]),e("code",[t._v("\n          <count-to :start-val='"+t._s(t._startVal)+"' :end-val='"+t._s(t._endVal)+"' :duration='"+t._s(t._duration)+"' :decimals='"+t._s(t._decimals)+"'\n          :separator='"+t._s(t._separator)+"' :prefix='"+t._s(t._prefix)+"' :suffix='"+t._s(t._suffix)+"' :autoplay=false>\n        ")])],1)])]],2)}),[function(){var t=this._self._c;return t("p",{staticClass:"expain"},[this._v("\n    数字滚动插件我们选择了vue-count-to，请参考相关\n    "),t("a",{attrs:{href:"https://github.com/PanJiaChen/vue-countTo",target:"_blank"}},[this._v("文档")])])}],!1,null,"339c4c6b",null);e.default=r.exports},"9e2e":function(t,e,a){t.exports=function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(a(0));e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var l=void 0,o=0;o<i.length&&(!s||!r);o++)l=i[o],e.requestAnimationFrame=s=s||window[l+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[l+"CancelAnimationFrame"]||window[l+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout((function(){t(e+a)}),a);return n=e+a,i},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,n){var i,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,s=t.default);var l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),a&&(l._scopeId=a),n){var o=Object.create(l.computed||null);Object.keys(n).forEach((function(t){var e=n[t];o[t]=function(){return e}})),l.computed=o}return{esModule:i,exports:s,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}}]);