(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27b35944"],{"22ab":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("NavTabs"),t.isLoading?r("Spinner"):[r("h1",{staticClass:"mt-5"},[t._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},t._l(t.users,function(e){return r("div",{key:e.id,staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{attrs:{src:t._f("emptyImage")(e.image),width:"140px",height:"140px"}})]),r("h2",[t._v(t._s(e.name))]),r("span",{staticClass:"badge badge-secondary"},[t._v("追蹤人數："+t._s(e.FollowerCount))]),r("p",{staticClass:"mt-3"},[e.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.deleteFollowing(e.id)}}},[t._v("取消追蹤")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.addFollowing(e.id)}}},[t._v("追蹤")])])],1)}),0)]],2)},s=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=(r("55dd"),r("96cf"),r("3b8d")),a=r("8bb1"),c=r("2375"),u=r("2708"),l=r("4cce"),p=r("2fa3");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach(function(e){Object(o["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var h={mixins:[u["a"]],data:function(){return{users:[],isProcessing:!1,isLoading:!0}},created:function(){this.fetchTopUsers()},methods:{fetchTopUsers:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l["a"].getTopUsers();case 3:if(e=t.sent,r=e.data,n=e.statusText,"OK"===n){t.next=8;break}throw new Error(n);case 8:this.users=r.users,this.isLoading=!1,t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),this.isLoading=!1,p["a"].fire({type:"error",title:"無法取得美食達人，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[0,12]])}));function e(){return t.apply(this,arguments)}return e}(),addFollowing:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var r,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,l["a"].addFollowing({userId:e});case 4:if(r=t.sent,n=r.data,s=r.statusText,"OK"===s&&"success"===n.status){t.next=9;break}throw new Error(s);case 9:this.users=this.users.map(function(t){return t.id!==e?t:d({},t,{FollowerCount:t.FollowerCount+1,isFollowed:!0})}).sort(function(t,e){return e.FollowerCount-t.FollowerCount}),this.isProcessing=!1,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](0),this.isProcessing=!1,p["a"].fire({type:"error",title:"無法加入追蹤，請稍後再試"});case 17:case"end":return t.stop()}},t,this,[[0,13]])}));function e(e){return t.apply(this,arguments)}return e}(),removeFollowing:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var r,n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,l["a"].deleteFollowing({userId:e});case 4:if(r=t.sent,n=r.data,s=r.statusText,"OK"===s&&"success"===n.status){t.next=9;break}throw new Error(s);case 9:this.users=this.users.map(function(t){return t.id!==e?t:d({},t,{FollowerCount:t.FollowerCount-1,isFollowed:!1})}).sort(function(t,e){return e.FollowerCount-t.FollowerCount}),this.isProcessing=!1,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](0),this.isProcessing=!1,p["a"].fire({type:"error",title:"無法取消追蹤，請稍後再試"});case 17:case"end":return t.stop()}},t,this,[[0,13]])}));function e(e){return t.apply(this,arguments)}return e}()},components:{NavTabs:a["a"],Spinner:c["a"]}},w=h,b=r("2877"),g=Object(b["a"])(w,n,s,!1,null,null,null);e["default"]=g.exports},"2f21":function(t,e,r){"use strict";var n=r("79e5");t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,r){"use strict";var n=r("5ca1"),s=r("d8e8"),o=r("4bf8"),i=r("79e5"),a=[].sort,c=[1,2,3];n(n.P+n.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!r("2f21")(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),s(t))}})}}]);
//# sourceMappingURL=chunk-27b35944.31404ec2.js.map