(function(e){function t(t){for(var n,a,c=t[0],o=t[1],u=t[2],d=0,l=[];d<c.length;d++)a=c[d],s[a]&&l.push(s[a][0]),s[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s={app:0},i=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-159871db":"94d45e8d","chunk-18ef6e80":"3e308bb4","chunk-27b35944":"31404ec2","chunk-2d0b2ec8":"35427af6","chunk-2d0d338e":"11d2a3ff","chunk-2d0e5e97":"84f2e961","chunk-2d0f09e1":"f7da0eac","chunk-2d228901":"b56d3e8e","chunk-31860f55":"3b1a5b7b","chunk-40f5db19":"945a07c1","chunk-6fa82215":"b7655551","chunk-778f45a5":"2e7d3d35","chunk-b2de7efe":"2b4c1331","chunk-d6c4c88c":"60c5083f","chunk-ee32eb08":"bc54f5e5"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r={"chunk-31860f55":1,"chunk-40f5db19":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-159871db":"31d6cfe0","chunk-18ef6e80":"31d6cfe0","chunk-27b35944":"31d6cfe0","chunk-2d0b2ec8":"31d6cfe0","chunk-2d0d338e":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d0f09e1":"31d6cfe0","chunk-2d228901":"31d6cfe0","chunk-31860f55":"23d834e1","chunk-40f5db19":"85185ff2","chunk-6fa82215":"31d6cfe0","chunk-778f45a5":"31d6cfe0","chunk-b2de7efe":"31d6cfe0","chunk-d6c4c88c":"31d6cfe0","chunk-ee32eb08":"31d6cfe0"}[e]+".css",s=o.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===s))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===n||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,r){n=s[e]=[t,r]});t.push(n[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e),u=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}s[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Forum-Vue/dist/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0717":function(e,t,r){},"12ab":function(e,t,r){},2375:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"bouncing-loader"},[r("div"),r("div"),r("div")])])}],s=(r("3f63"),r("2877")),i={},c=Object(s["a"])(i,n,a,!1,null,"4a83b227",null);t["a"]=c.exports},2708:function(e,t,r){"use strict";r.d(t,"b",function(){return s}),r.d(t,"a",function(){return i});var n=r("c1df"),a=r.n(n),s={filters:{fromNow:function(e){return e?a()(e).fromNow():"-"}}},i={filters:{emptyImage:function(e){return e||"https://via.placeholder.com/350x220/DFDFDF?text=No+Image"}}}},"2baf":function(e,t,r){},"2fa3":function(e,t,r){"use strict";r.d(t,"b",function(){return u}),r.d(t,"a",function(){return d});var n=r("bc3a"),a=r.n(n),s=r("3d20"),i=r.n(s),c="https://forum-express-api.herokuapp.com/api",o=a.a.create({baseURL:c});o.interceptors.request.use(function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e},function(e){return Promise.reject(e)});var u=o,d=i.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},3825:function(e,t,r){"use strict";var n=r("e622"),a=r.n(n);a.a},"3f63":function(e,t,r){"use strict";var n=r("d723"),a=r.n(n);a.a},4355:function(e,t,r){},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return r(t)}function s(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="4678"},"4cce":function(e,t,r){"use strict";var n=r("2fa3");t["a"]={getCurrentUser:function(){return n["b"].get("/get_current_user")},get:function(e){var t=e.userId;return n["b"].get("/users/".concat(t))},update:function(e){var t=e.userId,r=e.formData;return n["b"].put("/users/".concat(t),r)},getTopUsers:function(){return n["b"].get("/users/top")},addFollowing:function(e){var t=e.userId;return n["b"].post("/following/".concat(t),null)},deleteFollowing:function(e){var t=e.userId;return n["b"].delete("/following/".concat(t))},addFavorite:function(e){var t=e.restaurantId;return n["b"].post("/favorite/".concat(t),null)},deleteFavorite:function(e){var t=e.restaurantId;return n["b"].delete("/favorite/".concat(t))},addLike:function(e){var t=e.restaurantId;return n["b"].post("/like/".concat(t),null)},deleteLike:function(e){var t=e.restaurantId;return n["b"].delete("/like/".concat(t))}}},5232:function(e,t,r){"use strict";var n=r("58a0"),a=r.n(n);a.a},"52db":function(e,t,r){"use strict";var n=r("4355"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"restaurant-forum"}},[r("Navbar"),r("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[r("router-view")],1)],1)},s=[],i=(r("4989"),r("ab8b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[r("router-link",{staticClass:"text-white mr-3",attrs:{to:"/"}},[e._v("餐廳評論網")]),e._m(0),r("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[r("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.isAdmin?r("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin"}},[e._v("管理員後台")]):e._e(),e.isAuthenticated?[r("router-link",{staticClass:"text-white mr-3",attrs:{to:{name:"user",params:{id:e.currentUser.id}}}},[e._v(e._s(e.currentUser.name||"使用者")+" 您好")]),r("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:e.logout}},[e._v("登出")])]:e._e()],2)])],1)}),c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),u=r("2f62");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var f={computed:l({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}}},p=f,b=(r("e9ca"),r("2877")),m=Object(b["a"])(p,i,c,!1,null,"4095ae2c",null),h=m.exports,g={components:{Navbar:h}},v=g,j=(r("52db"),Object(b["a"])(v,a,s,!1,null,"5e206cb9",null)),k=j.exports,y=(r("2fdb"),r("7f7f"),r("6762"),r("96cf"),r("3b8d")),w=r("8c4f"),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit(t)}}},[e._m(0),r("div",{staticClass:"form-label-group mb-2"},[r("label",{attrs:{for:"email"}},[e._v("email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-3"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v("Submit")]),r("div",{staticClass:"text-center mb-3"},[r("p",[r("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)]),r("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center mb-4"},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign In")])])}],x=r("7696"),_=r("2fa3"),C={data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.email&&this.password){e.next=4;break}return _["a"].fire({type:"warning",title:"請填入 email 和 password"}),e.abrupt("return");case 4:return this.isProcessing=!0,e.next=7,x["a"].signIn({email:this.email,password:this.password});case 7:if(r=e.sent,n=r.data,a=r.statusText,"OK"===a&&"success"===n.status){e.next=11;break}throw new Error(a);case 11:localStorage.setItem("token",n.token),this.$store.commit("setCurrentUser",n.user),this.$router.push("/restaurants"),e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](0),this.password="",this.isProcessing=!1,_["a"].fire({type:"warning",title:"請確認您輸入的帳號密碼是否錯誤"});case 21:case"end":return e.stop()}},e,this,[[0,16]])}));function t(t){return e.apply(this,arguments)}return t}()}},E=C,I=Object(b["a"])(E,O,P,!1,null,null,null),S=I.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("RestaurantsNavPills",{attrs:{categories:e.categories}}),e.isLoading?r("Spinner"):[r("div",{staticClass:"row"},e._l(e.restaurants,function(e){return r("RestaurantCard",{key:e.id,attrs:{"initial-restaurant":e}})}),1),e.totalPage>1?r("RestaurantsPagination",{attrs:{"category-id":e.categoryId,"current-page":e.currentPage,"total-page":e.totalPage}}):e._e()],e.restaurants.length<1?r("div",[e._v("此類別目前無餐廳資料")]):e._e()],2)},D=[],U=r("8bb1"),N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-6 col-lg-4"},[r("div",{staticClass:"card mb-4"},[r("img",{staticClass:"card-img-top",attrs:{src:e._f("emptyImage")(e.restaurant.image),alt:"Card image cap",width:"286px",height:"180px"}}),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-text title-wrap"},[r("router-link",{attrs:{to:{name:"restaurant",params:{id:e.restaurant.id}}}},[e._v(e._s(e.restaurant.name))])],1),r("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.restaurant.Category.name))]),r("p",{staticClass:"card-text text-truncate"},[e._v(e._s(e.restaurant.description))])]),r("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFavorite(e.restaurant.id)}}},[e._v("移除最愛")]):r("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFavorite(e.restaurant.id)}}},[e._v("加到最愛")]),e.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteLike(e.restaurant.id)}}},[e._v("Unlike")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addLike(e.restaurant.id)}}},[e._v("Like")])])])])},z=[],A=r("2708"),L=r("4cce");function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var $={mixins:[A["a"]],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},methods:{addFavorite:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isProcessing=!0,e.next=4,L["a"].addFavorite({restaurantId:t});case 4:if(r=e.sent,n=r.data,a=r.statusText,"OK"===a&&"success"===n.status){e.next=9;break}throw new Error(a);case 9:this.restaurant=F({},this.restaurant,{isFavorited:!0}),this.isProcessing=!1,e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),this.isProcessing=!1,_["a"].fire({type:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 17:case"end":return e.stop()}},e,this,[[0,13]])}));function t(t){return e.apply(this,arguments)}return t}(),deleteFavorite:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isProcessing=!0,e.next=4,L["a"].deleteFavorite({restaurantId:t});case 4:if(r=e.sent,n=r.data,a=r.statusText,"OK"===a&&"success"===n.status){e.next=9;break}throw new Error(a);case 9:this.restaurant=F({},this.restaurant,{isFavorited:!1}),this.isProcessing=!1,e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),this.isProcessing=!1,_["a"].fire({type:"error",title:"無法將餐廳從最愛移除，請稍後再試"});case 17:case"end":return e.stop()}},e,this,[[0,13]])}));function t(t){return e.apply(this,arguments)}return t}(),addLike:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isProcessing=!0,e.next=4,L["a"].addLike({restaurantId:t});case 4:if(r=e.sent,n=r.data,a=r.statusText,"OK"===a&&"success"===n.status){e.next=9;break}throw new Error(a);case 9:this.restaurant=F({},this.restaurant,{isLiked:!0}),this.isProcessing=!1,e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),this.isProcessing=!1,_["a"].fire({type:"error",title:"無法按讚，請稍後再試"});case 17:case"end":return e.stop()}},e,this,[[0,13]])}));function t(t){return e.apply(this,arguments)}return t}(),deleteLike:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isProcessing=!0,e.next=4,L["a"].deleteLike({restaurantId:t});case 4:if(r=e.sent,n=r.data,a=r.statusText,"OK"===a&&"success"===n.status){e.next=9;break}throw new Error(a);case 9:this.restaurant=F({},this.restaurant,{isLiked:!1}),this.isProcessing=!1,e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),this.isProcessing=!1,_["a"].fire({type:"error",title:"無法取消按讚，請稍後再試"});case 17:case"end":return e.stop()}},e,this,[[0,13]])}));function t(t){return e.apply(this,arguments)}return t}()}},q=$,K=(r("5232"),Object(b["a"])(q,N,z,!1,null,"7480ccdb",null)),B=K.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"nav nav-pills mb-4"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants"}}},[e._v("全部")])],1),e._l(e.categories,function(t){return r("li",{key:t.id,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(e._s(t.name))])],1)})],2)},G=[],J={props:{categories:{type:Array,required:!0}}},H=J,V=(r("7187"),Object(b["a"])(H,M,G,!1,null,"0f1f66c8",null)),Q=V.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{attrs:{"aria-label":"Page navigation example"}},[r("ul",{staticClass:"pagination"},[r("li",{directives:[{name:"show",rawName:"v-show",value:e.previousPage,expression:"previousPage"}],staticClass:"page-item"},[r("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}}}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,function(t){return r("li",{key:t,class:["page-item",{active:e.currentPage===t}]},[r("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(e._s(t))])],1)}),r("li",{directives:[{name:"show",rawName:"v-show",value:e.nextPage,expression:"nextPage"}],staticClass:"page-item"},[r("router-link",{staticClass:"page-link",attrs:{"aria-label":"Next",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}}}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)])},X=[],Y=(r("c5f6"),{props:{categoryId:{type:[String,Number],default:""},currentPage:{type:Number,default:1},totalPage:{type:Number,default:0}},computed:{previousPage:function(){return 1===this.currentPage?null:this.currentPage-1},nextPage:function(){return this.currentPage+1>this.totalPage?null:this.currentPage+1}}}),Z=Y,ee=(r("3825"),Object(b["a"])(Z,W,X,!1,null,"852efac4",null)),te=ee.exports,re=r("2375"),ne=r("c4c3"),ae={data:function(){return{categories:[],categoryId:"",currentPage:1,restaurants:[],totalPage:0,isLoading:!0}},created:function(){var e=this.$route.query,t=e.page,r=e.categoryId;this.fetchRestaurants({page:t,categoryId:r})},beforeRouteUpdate:function(e,t,r){var n=e.query,a=n.page,s=n.categoryId;this.fetchRestaurants({page:a,categoryId:s}),r()},methods:{fetchRestaurants:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s,i,c,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.page,n=void 0===r?1:r,a=t.categoryId,s=void 0===a?"":a,e.prev=1,e.next=4,ne["a"].getRestaurants({page:n,categoryId:s});case 4:if(i=e.sent,c=i.data,o=i.statusText,"OK"===o){e.next=9;break}throw new Error(o);case 9:this.categories=c.categories,this.categoryId=c.categoryId,this.currentPage=c.page,this.restaurants=c.restaurants,this.totalPage=c.totalPage.length,this.isLoading=!1,e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](1),this.isLoading=!1,_["a"].fire({type:"error",title:"無法取得餐廳資料，請稍後再試"});case 21:case"end":return e.stop()}},e,this,[[1,17]])}));function t(t){return e.apply(this,arguments)}return t}()},components:{NavTabs:U["a"],RestaurantsNavPills:Q,RestaurantCard:B,RestaurantsPagination:te,Spinner:re["a"]}},se=ae,ie=Object(b["a"])(se,R,D,!1,null,null,null),ce=ie.exports;function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}n["a"].use(u["a"]);var de=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=ue({},e.currentUser,{},t),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,L["a"].getCurrentUser();case 4:if(n=e.sent,a=n.data,s=n.statusText,"OK"===s){e.next=9;break}throw new Error(s);case 9:return r("setCurrentUser",{id:a.id,name:a.name,email:a.email,image:a.image,isAdmin:a.isAdmin}),e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e["catch"](1),r("revokeAuthentication"),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,null,[[1,13]])}));function t(t){return e.apply(this,arguments)}return t}()}});n["a"].use(w["a"]);var le=function(e,t,r){var n=de.state.currentUser;!n||n.isAdmin?r():r("/404")},fe=new w["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"sign-in",component:S},{path:"/signup",name:"sign-up",component:function(){return r.e("chunk-2d0d338e").then(r.bind(null,"5c9c"))}},{path:"/restaurants",name:"restaurants",component:ce},{path:"/restaurants/feeds",name:"restaurants-feeds",component:function(){return r.e("chunk-2d0f09e1").then(r.bind(null,"9cab"))}},{path:"/restaurants/top",name:"restaurants-tops",component:function(){return r.e("chunk-6fa82215").then(r.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant",component:function(){return r.e("chunk-40f5db19").then(r.bind(null,"ad68"))}},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:function(){return r.e("chunk-2d0b2ec8").then(r.bind(null,"25d3"))}},{path:"/users/top",name:"users-top",component:function(){return r.e("chunk-27b35944").then(r.bind(null,"22ab"))}},{path:"/users/:id",name:"user",component:function(){return r.e("chunk-d6c4c88c").then(r.bind(null,"1511"))}},{path:"/users/:id/edit",name:"user-edit",component:function(){return r.e("chunk-2d228901").then(r.bind(null,"da5c"))}},{path:"/admin",exact:!0,redirect:"/admin/restaurants"},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return r.e("chunk-b2de7efe").then(r.bind(null,"b92c"))},beforeEnter:le},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return r.e("chunk-18ef6e80").then(r.bind(null,"7f47"))},beforeEnter:le},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:function(){return r.e("chunk-778f45a5").then(r.bind(null,"7270"))},beforeEnter:le},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:function(){return r.e("chunk-159871db").then(r.bind(null,"ad0d"))},beforeEnter:le},{path:"/admin/categories",name:"admin-categories",component:function(){return r.e("chunk-31860f55").then(r.bind(null,"34c9"))},beforeEnter:le},{path:"/admin/users/",name:"admin-users",component:function(){return r.e("chunk-ee32eb08").then(r.bind(null,"6e64"))},beforeEnter:le},{path:"*",name:"not-found",component:function(){return r.e("chunk-2d0e5e97").then(r.bind(null,"9703"))}}]});fe.beforeEach(function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t,r,n){var a,s,i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("token"),s=de.state.token,i=de.state.isAuthenticated,!a||a===s){e.next=7;break}return e.next=6,de.dispatch("fetchCurrentUser");case 6:i=e.sent;case 7:if(c=["sign-up"],!c.includes(t.name)){e.next=11;break}return n(),e.abrupt("return");case 11:if(i||"sign-in"===t.name){e.next=14;break}return n("/signin"),e.abrupt("return");case 14:if(!i||"sign-in"!==t.name){e.next=17;break}return n("/restaurants"),e.abrupt("return");case 17:n();case 18:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}());var pe=fe;r("12ab");n["a"].config.productionTip=!1,new n["a"]({router:pe,store:de,render:function(e){return e(k)}}).$mount("#app")},"58a0":function(e,t,r){},7187:function(e,t,r){"use strict";var n=r("aa77"),a=r.n(n);a.a},7696:function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),a=r("2fa3");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){Object(n["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}t["a"]={signIn:function(e){var t=e.email,r=e.password;return a["b"].post("/signin",{email:t,password:r})},signUp:function(e){return a["b"].post("/signup",i({},e))}}},"8bb1":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,function(t){return r("li",{key:t.id,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(e._s(t.title))])],1)}),0)},a=[],s=r("c64e"),i=r.n(s),c={data:function(){return{tabs:[{id:i()(),title:"首頁",path:"/restaurants"},{id:i()(),title:"最新動態",path:"/restaurants/feeds"},{id:i()(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:i()(),title:"美食達人",path:"/users/top"}]}}},o=c,u=(r("a322"),r("2877")),d=Object(u["a"])(o,n,a,!1,null,"3e242312",null);t["a"]=d.exports},a322:function(e,t,r){"use strict";var n=r("0717"),a=r.n(n);a.a},aa77:function(e,t,r){},c4c3:function(e,t,r){"use strict";r("6b54");var n=r("2fa3");t["a"]={getRestaurant:function(e){var t=e.restaurantId;return n["b"].get("/restaurants/".concat(t))},getRestaurants:function(e){var t=e.page,r=e.categoryId,a=new URLSearchParams({page:t,categoryId:r});return n["b"].get("/restaurants?".concat(a.toString()))},getFeeds:function(){return n["b"].get("/restaurants/feeds")},getTopRestaurants:function(){return n["b"].get("/restaurants/top")}}},d723:function(e,t,r){},e622:function(e,t,r){},e9ca:function(e,t,r){"use strict";var n=r("2baf"),a=r.n(n);a.a}});
//# sourceMappingURL=app.794d1668.js.map