(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c7a8d68e"],{"0908":function(t,s,i){},"523e":function(t,s,i){"use strict";i.r(s),i("a450"),i("a7fe");var e={created:function(){0==this.tagsList.length&&this.setTags(this.$route)},components:{},computed:{tagsList:{get:function(){return this.$store.state.tagsList},set:function(t){this.$store.commit("TAGES_LIST",t)}}},watch:{$route:function(t,s){this.setTags(t)}},methods:{isActive:function(t){return t===this.$route.fullPath},handleCommand:function(t){var s=this;if("closeOther"==t){var i=this.tagsList.filter((function(t){return t.path===s.$route.fullPath}));this.tagsList=i}},setTags:function(t){this.tagsList.some((function(s){return s.path===t.fullPath}))||(this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.name}),this.$store.commit("TAGES_LIST",this.tagsList))},closeTags:function(t,s){this.tagsList.splice(t,1),this.$store.commit("TAGES_LIST",this.tagsList),s===this.$route.fullPath&&this.$router.push(this.$store.state.tagsList[this.$store.state.tagsList.length-1])}}},a=(i("5fc1"),i("d532"),i("e607")),n=Object(a.a)(e,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,(function(i,e){return s("li",{key:e,staticClass:"tags-li",class:{active:t.isActive(i.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:i.path}},[t._v(t._s(t.$t("route."+i.title))+" ")]),"/home"!=i.path?s("span",{staticClass:"tags-li-icon",on:{click:function(s){return t.closeTags(e,i.path)}}},[s("i",{staticClass:"el-icon-close"})]):t._e()],1)})),0),t._e()])}),[],!1,null,"65a320ad",null);s.default=n.exports},"5fc1":function(t,s,i){"use strict";i("bbf9")},a450:function(t,s,i){var e=i("bb8b").f,a=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in a||i("26df")&&e(a,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},bbf9:function(t,s,i){},d532:function(t,s,i){"use strict";i("0908")}}]);