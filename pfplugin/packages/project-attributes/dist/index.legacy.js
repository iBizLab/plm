!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t,e,r){return n=f()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&c(i,r.prototype),i},n.apply(null,arguments)}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),u=new z(n||[]);return a(o,"_invoke",{value:S(t,r,u)}),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var h="suspendedStart",v="suspendedYield",y="executing",m="completed",b={};function g(){}function w(){}function E(){}var O={};f(O,c,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(A([])));k&&k!==n&&o.call(k,c)&&(O=k);var j=E.prototype=g.prototype=Object.create(O);function P(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(e,r){function n(i,a,u,c){var s=d(e[i],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,i){n(t,e,r,i)}))}return i=i?i.then(o,o):o()}})}function S(t,r,n){var i=h;return function(o,a){if(i===y)throw new Error("Generator is already running");if(i===m){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var u=n.delegate;if(u){var c=I(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var s=d(t,r,n);if("normal"===s.type){if(i=n.done?m:v,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=m,n.method="throw",n.arg=s.arg)}}}function I(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=d(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function A(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function t(){for(;++i<r.length;)if(o.call(r,i))return t.value=r[i],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=E,a(j,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},P(L.prototype),f(L.prototype,s,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var a=new L(p(t,e,n,i),o);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(j),f(j,l,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,i){return u.type="throw",u.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;_(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}function o(t,e,r,n,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}u(void 0)}))}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:r):i.value}},u.apply(this,arguments)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function s(e){var r=f();return function(){var n,i=p(e);if(r){var o=p(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return function(e,r){if(r&&("object"===t(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}(this,n)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,m(n.key),n)}}function h(t,e,r){return e&&d(t.prototype,e),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e,r){return(e=m(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,r||"default");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}System.register(["@ibiz-template/vue3-util","@ibiz-template/runtime","vue","lodash-es","ramda"],(function(t,e){"use strict";var o,f,d,m,b,g,w,E,O,x,k,j,P,L,S,I,D,_,z,A,C;return{setters:[function(t){o=t.useNamespace,f=t.useClickOutside,d=t.useControlController,m=t.withInstall},function(t){b=t.EditFormController,g=t.convertNavData,w=t.EditFormService,E=t.getEntitySchema,O=t.registerControlProvider},function(t){x=t.ref,k=t.reactive,j=t.defineComponent,P=t.watch,L=t.onMounted,S=t.onUnmounted,I=t.createVNode,D=t.nextTick,_=t.resolveComponent,z=t.h},function(t){A=t.debounce},function(t){C=t.clone}],execute:function(){var e=h((function t(){v(this,t),y(this,"component","IBizProjectAttributes")})),F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(d,t);var e,r,n,o,f=s(d);function d(){var t;v(this,d);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return y(l(t=f.call.apply(f,[this].concat(r))),"jsonSchemaParams",{}),y(l(t),"calcFormDetail",(function(t){var e="span";"string"===t.type?e="TEXTBOX":"number"===t.type?e="NUMBER":"picker"===t.type?e="MDROPDOWNLIST":"date"===t.type&&(e="DATEPICKER");var r={allowEmpty:!0,appDEFieldId:t.key,appId:ibiz.env.appId,capLanguageRes:{lanResTag:"DEF.LNAME.ID",appId:ibiz.env.appId},caption:t.description,codeName:t.key,dataType:25,detailStyle:"DEFAULT",detailType:"FORMITEM",editor:{style:{},appId:ibiz.env.appId,editable:!0,editorType:e,halign:"LEFT",id:t.key,valign:"MIDDLE",valueType:"SIMPLE",wrapMode:"NOWRAP"},enableCond:3,id:t.key,labelPos:"LEFT",labelWidth:130,layoutPos:{colMD:24,layout:"TABLE_24COL",appId:ibiz.env.appId},noPrivDisplayMode:1,showCaption:!0};return"picker"===t.type&&(Object.assign(r.editor,{appCodeListId:t.codelistId,valueItemName:t.key}),t.codelistId&&Object.assign(r.editor,{appCodeListId:t.codelistId})),r})),y(l(t),"addAttributes",x([])),y(l(t),"addAttributesFormDetail",[]),t}return h(d,[{key:"onCreated",value:(o=a(i().mark((function t(){var e,r=this;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.parse(this.controlParams.jsonschemaparams||"{}"),this.jsonSchemaParams=g(e,this.params,this.context),t.next=4,this.initByEntitySchema();case 4:return this.model.deformPages&&this.model.deformPages[0]&&this.addAttributesFormDetail.forEach((function(t){var e;null===(e=r.model.deformPages[0].deformDetails)||void 0===e||e.push(t)})),t.next=7,u(p(d.prototype),"onCreated",this).call(this);case 7:return this.service=new w(this.model),t.next=10,this.service.init(this.context);case 10:this.autoSave=A(this.autoSave.bind(this),500,{trailing:!0});case 11:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"onMounted",value:(n=a(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(p(d.prototype),"onMounted",this).call(this);case 2:!this.state.isSimple&&this.state.loadDefault&&this.load();case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"calcColumnModelBySchema",value:(r=a(i().mark((function t(e,r){var n,o,a,u,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.properties){t.next=2;break}return t.abrupt("return");case 2:if(o=e.properties,Object.keys(o).length>0){t.next=5;break}return t.abrupt("return");case 5:return a={},t.next=8,ibiz.hub.getAppDataEntity(r.model.appDataEntityId,r.model.appId);case 8:return u=t.sent,null===(n=u.appDEFields)||void 0===n||n.forEach((function(t){a[t.codeName.toLowerCase()]=t.id})),c=[],Object.keys(o).forEach((function(t){if(!a[t]){var e;switch(o[t].type){case"string":e="string","date-time"===o[t].format&&(e="date");break;case"integer":e="integer";break;case"number":e="number";break;default:return void ibiz.log.error(ibiz.i18n.t("runtime.controller.control.grid.unsupported",{type:o[t].type}))}c.push({key:t,description:o[t].description||o[t].key,type:e,ref:k({isFocus:!0}),codelistId:o[t].enumSource?o[t].enumSource:""})}})),t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)}))),function(t,e){return r.apply(this,arguments)})},{key:"initByEntitySchema",value:(e=a(i().mark((function t(){var e,r,n,o=this;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=C(this.jsonSchemaParams),Object.assign(e,this.params),t.next=4,E(this.model.appDataEntityId,this.context,e);case 4:if(r=t.sent){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,this.calcColumnModelBySchema(r,this);case 9:(n=t.sent).length&&(this.addAttributes.value=n,this.addAttributes.value.forEach((function(t){o.addAttributesFormDetail.push(o.calcFormDetail(t))})));case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),d}(b),T=j({name:"AutoInput",props:{controller:{type:Object,required:!0},item:{type:Object,required:!0},emit:{type:Object,required:!0}},setup:function(t){var e=o("project-attributes-input"),r=t.controller,n=x(""),u=x(!1),c=x();P((function(){return r.state.data}),(function(t){if(t){var e=function(e){r.addAttributes.find((function(t){return t.key===e}))&&(n.value=t[e])};for(var i in t)e(i)}}),{immediate:!0});var s,l=x();return L((function(){l.value&&(s=f(l,function(){var t=a(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l.value){t.next=2;break}return t.abrupt("return");case 2:u.value=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))})),S((function(){s&&s.stop&&s.stop()})),{ns:e,c:r,startEdit:function(t){t.stopPropagation(),u.value=!0,D((function(){c.value&&c.value.focus()}))},stopEdit:function(t){t.stopPropagation(),u.value=!1},text:n,isEditing:u,change:function(e){n.value=e.target.value;var i=r.formItems.find((function(e){return e.name===t.item.key}));i&&(e.target.value?i.setDataValue(e.target.value,t.item.key):i.setDataValue(null,t.item.key))},componentRef:l,editSvg:function(){return I("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",preserveAspectRatio:"xMidYMid meet",focusable:"false"},[I("g",{id:"aizaction/edit","stroke-width":"1","fill-rule":"evenodd"},[I("path",{d:"M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z",id:"aiz编辑"},null)])])},inputRef:c}},render:function(){var t=this;return I("div",{ref:"componentRef",class:[this.ns.b(),this.isEditing?"edit":""]},[this.isEditing?I("input",{ref:"inputRef",type:"text",value:this.text,autofocus:!0,tabindex:"0",onChange:this.change,onBlur:function(e){return t.stopEdit(e)}},null):I("div",{class:this.ns.e("text"),onClick:function(e){return t.startEdit(e)}},[this.text]),I("div",{class:this.ns.e("item-edit-svg"),onClick:function(e){return t.startEdit(e)}},[this.editSvg()])])}}),R=j({name:"IBizProjectAttributes",component:[T],props:{modelData:{type:Object,required:!0},context:{type:Object,required:!0},params:{type:Object,default:function(){return{}}},provider:{type:Object},isSimple:{type:Boolean,required:!1},data:{type:Object,required:!1},loadDefault:{type:Boolean,default:!0}},setup:function(t,e){var u=e.emit,c=o("project-attributes"),s=d((function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n(F,e)}),{excludePropsKeys:["data"]});t.isSimple&&(s.evt.on("onMounted",(function(){s.setSimpleData(t.data||{})})),P((function(){return t.data}),(function(t){var e=t||{};Object.keys(s.data).find((function(t){return e[t]!==s.data[t]}))&&s.setSimpleData(e)}),{deep:!0})),s.evt.on("onCreated",(function(){Object.keys(s.details).forEach((function(t){var e=s.details[t];e.state=k(e.state)}))}));var l=x();L((function(){f(l,function(){var t=a(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.target){t.next=9;break}if("input"!==e.target.tagName.toLowerCase()&&"svg"!==e.target.tagName.toLowerCase()){t.next=3;break}return t.abrupt("return");case 3:if("ibiz-dropdown-select-option-content"!==e.target.className&&"el-date-table-cell__text"!==e.target.className){t.next=5;break}return t.abrupt("return");case 5:r=e.target.parentElement.id,n=s.addAttributes.value.find((function(t){return t.key===r})),"ibiz-project-attributes__item-edit"===e.target.className&&(r=e.target.id,n=s.addAttributes.value.find((function(t){return t.key===r}))),n?(s.addAttributes.value.forEach((function(t){t.ref.isFocus=!0})),n.ref.isFocus=!1):l.value.contains(e.target)||s.addAttributes.value.forEach((function(t){t.ref.isFocus=!0}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));return{c:s,ns:c,formItems:[],emit:u,renderEditor:function(t,e){var n={};if("string"===t.type?n.autofocus=!0:"number"===t.type&&(n.controlsPosition="right",n.controls=!0),e){var i=r({value:e.value,data:e.data,controller:e.editor,disabled:e.state.disabled,readonly:t.ref.isFocus,onChange:function(e,r){return function(t,e,r){var n=r||e;s.setDataValue(n,t)}(e,t.key,r)},controlParams:e.form.controlParams,onFocus:function(t){e.onFocus(t)},onBlur:function(t){e.onBlur(t)},onEnter:function(t){return e.onEnter(t)}},n),o="";"string"===t.type?o="IBizInput":"number"===t.type?o="IBizInputNumber":"picker"===t.type?o="IBizDropdown":"date"===t.type&&(o="IBizDatePicker");var a=_(o);return z(a,r({},i))}},editSvg:function(){return I("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",preserveAspectRatio:"xMidYMid meet",focusable:"false"},[I("g",{id:"aizaction/edit","stroke-width":"1","fill-rule":"evenodd"},[I("path",{d:"M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z",id:"aiz编辑"},null)])])},pxx:l,findController:function(t){return s.formItems.find((function(e){return e.name===t.key}))},startsWithHttpProtocol:function(t){return/^(http:\/\/|https:\/\/)/.test(t)},linkSvg:function(){return I("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4033",height:"1em",width:"1em"},[I("path",{d:"M832 128H640v64h146.752L521.376 457.376l45.248 45.248L832 237.248V384h64V128z",fill:"#181818","p-id":"4034"},null),I("path",{d:"M768 832H192V256h352v-64H160a32 32 0 0 0-32 32v640a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V480h-64v352z",fill:"#181818","p-id":"4035"},null)])},linkOpen:function(t){window.open(t)}}},render:function(){var t=this;return I("div",{class:this.ns.b()},[this.c.addAttributes.value.length>0&&this.c.addAttributes.value.map((function(e){var r=t.findController(e),n=!1;return r&&r.value&&"string"===e.type&&(n=t.startsWithHttpProtocol(r.value)),I("div",{class:[t.ns.e("item"),n?"link":""]},[I("div",{class:t.ns.e("item-text")},[e.description]),I("div",{class:[t.ns.e("item-edit"),e.ref.isFocus?"":"edit"],id:e.key},[t.renderEditor(e,r),I("div",{class:t.ns.e("item-edit-svg")},[t.editSvg()])]),n&&e.ref.isFocus?I("div",{class:t.ns.e("item-link-svg"),onClick:function(){return t.linkOpen(r.value)},title:"打开链接"},[t.linkSvg()]):null])})),I("div",{ref:"pxx"},null)])}}),M=t("IBizProjectAttributes",m(R,(function(t){t.component(R.name,R),O("EDITFORM_RENDER_PROJECT_ATTRIBUTES",(function(){return new e}))})));t("default",{install:function(t){t.use(M)}})}}}))}();