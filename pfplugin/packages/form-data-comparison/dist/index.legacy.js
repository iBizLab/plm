!function(){function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function e(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(t,e,n){return r=d()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var a=new(Function.bind.apply(t,n));return r&&c(a,r.prototype),a},r.apply(null,arguments)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),s=new L(n||[]);return o(i,"_invoke",{value:N(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function b(){}function D(){}function w(){}var O={};d(O,c,(function(){return this}));var E=Object.getPrototypeOf,T=E&&E(E(A([])));T&&T!==r&&i.call(T,c)&&(O=T);var x=w.prototype=b.prototype=Object.create(O);function P(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function r(a,o,s,c){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==n(d)&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}})}function N(e,r,n){var a=h;return function(i,o){if(a===v)throw new Error("Generator is already running");if(a===y){if("throw"===i)throw o;return{value:t,done:!0}}for(n.method=i,n.arg=o;;){var s=n.delegate;if(s){var c=j(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=v;var l=f(e,r,n);if("normal"===l.type){if(a=n.done?y:m,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=y,n.method="throw",n.arg=l.arg)}}}function j(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(a,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(i.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(n(e)+" is not iterable")}return D.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:D,configurable:!0}),D.displayName=d(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===D||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},P(R.prototype),d(R.prototype,l,(function(){return this})),e.AsyncIterator=R,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new R(p(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},P(x),d(x,u,"Generator"),d(x,c,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function s(t){i(o,n,a,s,c,"next",t)}function c(t){i(o,n,a,s,c,"throw",t)}s(void 0)}))}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(arguments.length<3?t:r):a.value}},s.apply(this,arguments)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function l(t){var e=d();return function(){var r,a=p(t);if(e){var i=p(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}(this,r)}}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function h(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e,r){return(e=y(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}System.register(["@ibiz-template/vue3-util","@ibiz-template/runtime","vue","lodash-es"],(function(t,i){"use strict";var d,f,y,g,b,D,w,O,E,T,x,P,R,N,j,I,S,L,A,C,V;return{setters:[function(t){d=t.useNamespace,f=t.useControlController,y=t.withInstall},function(t){g=t.EditFormController,b=t.ControlVO,D=t.ScriptFactory,w=t.hasDeCodeName,O=t.calcDeCodeNameById,E=t.FormNotifyState,T=t.calcNavParams,x=t.registerControlProvider},function(t){P=t.defineComponent,R=t.ref,N=t.watch,j=t.reactive,I=t.createVNode,S=t.createTextVNode,L=t.resolveComponent,A=t.isVNode,C=t.h},function(t){V=t.clone}],execute:function(){var i=h((function t(){m(this,t),v(this,"component","IBizFormDataComparison")})),k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(f,t);var e,r,i,d=l(f);function f(){var t;m(this,f);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return v(u(t=d.call.apply(d,[this].concat(r))),"baseResData",[]),v(u(t),"compareResData",[]),v(u(t),"oldData",new b),v(u(t),"versionData",[]),v(u(t),"comparisonArr",{}),v(u(t),"gridData",[]),v(u(t),"AllGridData",[]),v(u(t),"removeSameGridData",[]),v(u(t),"AlldruipartData",new Map),v(u(t),"druipartDataSize",0),v(u(t),"newDruipartData",{}),t}return h(f,[{key:"onMounted",value:(i=o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(p(f.prototype),"onMounted",this).call(this);case 2:return t.next=4,this.getVersion();case 4:this.model.deformPages&&this.model.deformPages[0].deformDetails&&this.calcGridData(this.model.deformPages[0].deformDetails),!this.state.isSimple&&this.state.loadDefault&&this.load();case 6:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"getVersion",value:(r=o(a().mark((function t(){var e,r,n,i,o,s,c,l,u,d,p;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null===(e=this.model.controlParam)||void 0===e?void 0:e.ctrlParams,n=r.REQUESTMETHOD,i=r.REQUESTPARAMS,o=r.REQUESTURL,s=r.RESPONSEMAP,c=n||"post",l=D.execScriptFn({context:this.context,params:this.params},i,{singleRowReturn:!0}),t.next=5,ibiz.net[c](o,{n_owner_id_eq:l});case 5:u=t.sent,d=JSON.parse(s),p=[],u.data.forEach((function(t){var e={};for(var r in d)e[r]=t[d[r]];p.push(e)})),this.versionData=p;case 10:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"calcAlldruipartData",value:function(t,e,r){this.AlldruipartData.set("".concat(t).concat(e),r)}},{key:"setdruipartData",value:function(t){var e="".concat(t.context.version).concat(t.context.versionItemName);if(this.AlldruipartData.get(e)){this.druipartDataSize+=1;var r=this.AlldruipartData.get(e),n=r.model.xdataControlName,a=r.getController(n),i=r.context,o=i.compareItem,s=i.compareViewFieldName,c=t.context.version,l=[];if(o){var u=o.split(",");a.state.items.forEach((function(t){var e=[];u.forEach((function(r){t[s]&&t[s][r]&&e.push(t[s][r])})),e.sort(),e.length>0&&l.push(e.join("."))}))}else l=a.state.items;l.sort(),"base"===t.context.version?this.baseResData[t.context.versionItemName]=l:this.compareResData[t.context.versionItemName]=l,this.newDruipartData[t.context.versionItemName]||(this.newDruipartData[t.context.versionItemName]={}),Object.assign(this.newDruipartData[t.context.versionItemName],v({},c,l))}if(this.druipartDataSize===this.AlldruipartData.size){var d=this.duripartDifference();this.calcCategorduriptData(this.AllGridData,d);var p=V(this.AllGridData);this.removeSameGridData=this.removeSame(p)}}},{key:"duripartDifference",value:function(){var t={},e={};for(var r in this.newDruipartData)Object.prototype.hasOwnProperty.call(this.newDruipartData,r)&&(t[r]=this.newDruipartData[r].base,e[r]=this.newDruipartData[r].compare);return this.diffObjects(t,e)}},{key:"calcCategorduriptData",value:function(t,e){var r=this;t.forEach((function(t){if("DRUIPART"===t.detailType){var n=r.caleduriptCategory(t.name,e);t.category=n}"GROUPPANEL"===t.detailType&&t.slot.length>0&&r.calcCategorduriptData(t.slot,e)}))}},{key:"caleduriptCategory",value:function(t,e){return e.added.includes(t)?"added":e.modified.includes(t)?"modified":e.deleted.includes(t)?"deleted":"samed"}},{key:"caleCategory",value:function(t){return this.comparisonArr.added.includes(t)?"added":this.comparisonArr.modified.includes(t)?"modified":this.comparisonArr.deleted.includes(t)?"deleted":"samed"}},{key:"calcGroupPanel",value:function(t){var e=[];return t.forEach((function(t){!0!==t.hidden&&("FORMITEM"===t.detailType&&e.push({detailType:t.detailType,caption:t.caption,name:t.codeName,oldItem:t,newItem:t}),"DRUIPART"===t.detailType&&e.push({detailType:t.detailType,caption:t.caption,name:t.codeName,oldItem:t,newItem:t}),"MDCTRL"===t.detailType&&e.push({detailType:t.detailType,caption:t.caption,name:t.codeName,oldItem:t,newItem:t}))})),e}},{key:"calcGridData",value:function(t){var e=this;t.forEach((function(t){if(!0!==t.hidden){if("FORMITEM"===t.detailType&&e.gridData.push({detailType:t.detailType,caption:t.caption,name:t.codeName,oldItem:t,newItem:t}),"GROUPPANEL"===t.detailType){var r=null;t.deformDetails&&(r=e.calcGroupPanel(t.deformDetails)),e.gridData.push({detailType:t.detailType,caption:t.caption,slot:r})}"DRUIPART"===t.detailType&&e.gridData.push({detailType:t.detailType,caption:t.caption,name:t.codeName,oldItem:t,newItem:t})}}))}},{key:"calcCategoryGridData",value:function(t){var e=this;t.forEach((function(t){if("FORMITEM"===t.detailType){var r=e.caleCategory(t.name);t.category=r}if("GROUPPANEL"===t.detailType&&t.slot.length>0&&e.calcCategoryGridData(t.slot),"MDCTRL"===t.detailType){var n=e.caleCategory(t.name);t.category=n}}))}},{key:"removeSame",value:function(t){var e=[];return t.forEach((function(t){if("FORMITEM"===t.detailType&&"samed"!==t.category&&e.push(t),"GROUPPANEL"===t.detailType){var r=[];t.slot.length>0&&t.slot.forEach((function(t){("FORMITEM"===t.detailType&&"samed"!==t.category||"MDCTRL"===t.detailType&&"samed"!==t.category||"DRUIPART"===t.detailType&&"samed"!==t.category)&&r.push(t)})),r.length>0&&e.push({caption:t.caption,detailType:t.detailType,slot:r})}})),e}},{key:"isFalseyButNotEmpty",value:function(t){return null==t||"string"==typeof t&&""===t||Array.isArray(t)&&0===t.length||"object"===n(t)&&0===Object.keys(t).length}},{key:"compareObjectValues",value:function(t,e){return JSON.stringify(t)!==JSON.stringify(e)}},{key:"diffObjects",value:function(t,e){var r=[],n=[],a=[];for(var i in e){var o=t[i],s=e[i];this.isFalseyButNotEmpty(o)&&!this.isFalseyButNotEmpty(s)&&r.push(i)}for(var c in e){var l=t[c],u=e[c];this.isFalseyButNotEmpty(l)||this.isFalseyButNotEmpty(u)||!this.compareObjectValues(l,u)||n.push(c)}for(var d in t)if(!Object.prototype.hasOwnProperty.call(e,d)||this.isFalseyButNotEmpty(e[d])){var p=t[d];this.isFalseyButNotEmpty(p)||a.push(d)}return{added:r,modified:n,deleted:a}}},{key:"load",value:(e=o(a().mark((function t(e){var r,n,i,o,s,c,l,u,d,p,f,h,m,v;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.druipartDataSize=0,this.newDruipartData={},this.AlldruipartData=new Map,r=this.params.srfcopymode,n="",i="",o=this.params,s=o.base_version,c=o.compare_version,n=e&&e.data&&e.data.baseVersion||s,i=e&&e.data&&e.data.compareVersion||c,this.state.isLoaded=!1,!r){t.next=12;break}return t.abrupt("return",this.copy());case 12:if(w(this.context,O(this.model.appDataEntityId))){t.next=15;break}return t.abrupt("return",this.loadDraft());case 15:return l=this.handlerAbilityParams(e),u=l.context,d=l.params,p=V(d),t.prev=17,t.next=20,this.startLoading();case 20:return t.next=22,this.evt.emit("onBeforeLoad",{args:p});case 22:return t.next=24,this.service.get(u,Object.assign(p,{srfversionid:n}));case 24:return f=t.sent,t.next=27,this.service.get(u,Object.assign(p,{srfversionid:i}));case 27:h=t.sent,m=this.diffObjects(f.data,h.data),this.comparisonArr=m,t.next=38;break;case 32:return t.prev=32,t.t0=t.catch(17),t.next=36,this.evt.emit("onLoadError",{args:t.t0});case 36:throw this.actionNotification("GETERROR",{error:t.t0}),t.t0;case 38:return t.prev=38,t.next=41,this.endLoading();case 41:return t.finish(38);case 42:return this.state.modified=!1,this.state.data=f.data,this.baseResData=f.data,this.compareResData=h.data,this.oldData=this.data.clone(),this.formStateNotify(E.LOAD),t.next=50,this.evt.emit("onLoadSuccess",{args:f.data});case 50:return this.actionNotification("GETSUCCESS"),this.state.isLoaded=!0,this.AllGridData=V(this.gridData),this.calcCategoryGridData(this.AllGridData),v=V(this.AllGridData),this.removeSameGridData=this.removeSame(v),t.abrupt("return",this.data);case 57:case"end":return t.stop()}}),t,this,[[17,32,38,42]])}))),function(t){return e.apply(this,arguments)})}]),f}(g);function M(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!A(t)}var _=P({name:"IBizFormDataComparison",props:{modelData:{type:Object,required:!0},context:{type:Object,required:!0},params:{type:Object,default:function(){return{}}},provider:{type:Object},isSimple:{type:Boolean,required:!1},data:{type:Object,required:!1},loadDefault:{type:Boolean,default:!0}},setup:function(t){var n=d("form-data-comparison"),a=f((function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r(k,e)}),{excludePropsKeys:["data"]}),i=R(""),o=R(""),s=R(!1),c=R([]),l=R([]),u=t.params,p=u.base_version,h=u.compare_version;p&&(i.value=p),h&&(o.value=h),N((function(){return i.value}),(function(){a.load({data:{baseVersion:i.value,compareVersion:o.value}})})),N((function(){return o.value}),(function(){a.load({data:{baseVersion:i.value,compareVersion:o.value}})})),t.isSimple&&(a.evt.on("onMounted",(function(){a.setSimpleData(t.data||{})})),N((function(){return t.data}),(function(t){var e=t||{};Object.keys(a.data).find((function(t){return e[t]!==a.data[t]}))&&a.setSimpleData(e)}),{deep:!0})),a.evt.on("onCreated",(function(){Object.keys(a.details).forEach((function(t){var e=a.details[t];e.state=j(e.state)}))}));var m=function(t){a.calcAlldruipartData(t.context.version,t.context.versionItemName,t.view)},v=function(t){a.setdruipartData(t)};return{baseVersion:i,compareVersion:o,switchValue:s,c:a,ns:n,gridData:l,formItems:[],activeNames:c,renderEditor:function(t,r){var n=a.formItems.find((function(e){return e.name===t.codeName})),i="";t.codeName&&(i=r[t.codeName]);var o=null;if(n){var s={value:i,data:a.data,controller:n.editor,readonly:!0,disabled:!0};if(n.editorProvider){var c=L(n.editorProvider.formEditor);o=C(c,e({},s))}}return o},renderDruipart:function(t,r,n){if(r[t.codeName]&&0===r[t.codeName].length)return null;var i=a.context.clone(),o=V(r);Object.assign(i,o);var s=function(t,r,n,a){var i=t.navigateContexts,o=t.navigateParams,s=T({navContexts:i,navParams:o},{context:n,params:a,data:r}),c=s.resultContext,l=s.resultParams;return{newContext:Object.assign(n.clone(),c,{currentSrfNav:t.id}),newParams:e(e({},a),l)}}(t,o,i,{}),c=s.newContext,l=s.newParams;return Object.assign(c,{version:n},{versionItemName:t.codeName},{compareItem:t.userTag2||""},{compareViewFieldName:t.userTag||""}),C(L("IBizViewShell"),{context:c,params:l,key:t.id,viewId:t.appViewId,onCreated:m,onDataChange:v})},renderMdctrl:function(t,e){var r=a.formMDCtrls.find((function(e){return t.codeName===e.name})),n=V(r),i=t.codeName;return"REPEATER"===t.contentType?I("div",null,[e[i]&&e[i].map((function(e){return I("div",null,[t.deformDetails&&t.deformDetails.map((function(t){return I("div",null,[e[t.codeName]])}))])}))]):I(L("iBizFormMDCtrl"),{modelData:n.model,controller:n},null)}}},render:function(){var t,e,r,n=this;return this.c.state.isLoaded?(this.switchValue?this.gridData=this.c.removeSameGridData:this.gridData=this.c.AllGridData,I("div",{class:[this.ns.b()]},[I("div",{class:this.ns.e("top-hidesame-content")},[I("div",{class:this.ns.e("top-hidesame-content-left")},[S("隐藏相同项 "),I(L("el-switch"),{modelValue:this.switchValue,"onUpdate:modelValue":function(t){return n.switchValue=t}},null)]),I("div",{class:this.ns.e("top-hidesame-content-right")},[I("div",{class:this.ns.e("top-hidesame-content-right-item")},[S("新增"),I("div",{class:this.ns.e("top-hidesame-content-right-item-add")},null)]),I("div",{class:this.ns.e("top-hidesame-content-right-item")},[S("修改"),I("div",{class:this.ns.e("top-hidesame-content-right-item-change")},null)]),I("div",{class:this.ns.e("top-hidesame-content-right-item")},[S("删除"),I("div",{class:this.ns.e("top-hidesame-content-right-item-delete")},null)])])]),I("div",{class:this.ns.e("top-content")},[I("div",{class:this.ns.e("top-content-left")},[I("div",{class:this.ns.e("top-content-left-attribute")},[S("属性")]),I("div",{class:this.ns.e("top-content-left-version")},[S("版本号")])]),I("div",{class:[this.ns.e("top-content-choose"),this.baseVersion!==this.compareVersion?"modified":""]},[I(L("el-select"),{modelValue:this.baseVersion,"onUpdate:modelValue":function(t){return n.baseVersion=t},size:"large",class:this.ns.e("top-content-choose-select")},M(t=this.c.versionData.map((function(t){return I(L("el-option"),{key:t.id,label:t.label,value:t.id},null)})))?t:{default:function(){return[t]}})]),I("div",{class:[this.ns.e("top-content-choose"),this.baseVersion!==this.compareVersion?"modified":""]},[I(L("el-select"),{modelValue:this.compareVersion,"onUpdate:modelValue":function(t){return n.compareVersion=t},size:"large",class:this.ns.e("top-content-choose-select")},M(e=this.c.versionData.map((function(t){return I(L("el-option"),{key:t.id,label:t.label,value:t.id},null)})))?e:{default:function(){return[e]}})])]),I(L("el-collapse"),{modelValue:this.activeNames,"onUpdate:modelValue":function(t){return n.activeNames=t}},M(r=this.gridData.map((function(t){return"FORMITEM"===t.detailType?I("div",{class:[n.ns.e("mid-content"),t.category]},[I("div",{class:n.ns.e("mid-content-left")},[t.caption]),I("div",{class:n.ns.e("mid-content-item")},[n.renderEditor(t.oldItem,n.c.baseResData)]),I("div",{class:n.ns.e("mid-content-item")},[n.renderEditor(t.newItem,n.c.compareResData)])]):"GROUPPANEL"===t.detailType?I(L("el-collapse-item"),{class:n.ns.e("collapse-item"),title:t.caption},{default:function(){return[t.slot&&t.slot.map((function(t){return I("div",{class:[n.ns.e("mid-content"),"slot",t.category]},[I("div",{class:[n.ns.e("mid-content-left"),"slot"]},[t.caption]),I("div",{class:n.ns.e("mid-content-item")},["FORMITEM"===t.detailType&&n.renderEditor(t.oldItem,n.c.baseResData),"DRUIPART"===t.detailType&&n.renderDruipart(t.oldItem,n.c.baseResData,"base"),"MDCTRL"===t.detailType&&n.renderMdctrl(t.oldItem,n.c.baseResData)]),I("div",{class:n.ns.e("mid-content-item")},["FORMITEM"===t.detailType&&n.renderEditor(t.newItem,n.c.compareResData),"DRUIPART"===t.detailType&&n.renderDruipart(t.newItem,n.c.compareResData,"compare"),"MDCTRL"===t.detailType&&n.renderMdctrl(t.newItem,n.c.compareResData)])])}))]}}):void 0})))?r:{default:function(){return[r]}})])):null}}),F=t("IBizFormDataComparison",y(_,(function(t){t.component(_.name,_),x("EDITFORM_RENDER_FORM_DATA_COMPARISON",(function(){return new i}))})));t("default",{install:function(t){t.use(F)}})}}}))}();