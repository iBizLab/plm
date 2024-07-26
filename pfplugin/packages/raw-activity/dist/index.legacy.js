(function(){function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",f=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),s=new S(n||[]);return i(a,"_invoke",{value:C(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=c;var u="suspendedStart",d="suspendedYield",p="executing",g="completed",v={};function _(){}function m(){}function y(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(k([])));x&&x!==r&&n.call(x,a)&&(b=x);var M=y.prototype=_.prototype=Object.create(b);function P(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,o,a,s){var f=h(t[i],t,o);if("throw"!==f.type){var l=f.arg,c=l.value;return c&&"object"==_typeof(c)&&n.call(c,"__await")?e.resolve(c.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(c).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(f.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function C(e,r,n){var i=u;return function(o,a){if(i===p)throw new Error("Generator is already running");if(i===g){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var f=D(s,n);if(f){if(f===v)continue;return f}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===u)throw i=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var l=h(e,r,n);if("normal"===l.type){if(i=n.done?g:d,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=g,n.method="throw",n.arg=l.arg)}}}function D(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,D(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function k(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(_typeof(e)+" is not iterable")}return m.prototype=y,i(M,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,f,"GeneratorFunction")),t.prototype=Object.create(M),t},e.awrap=function(t){return{__await:t}},P(E.prototype),l(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(M),l(M,f,"Generator"),l(M,a,(function(){return this})),l(M,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var f=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(f&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(f){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;N(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function asyncGeneratorStep(t,e,r,n,i,o,a){try{var s=t[o](a),f=s.value}catch(l){return void r(l)}s.done?e(f):Promise.resolve(f).then(n,i)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){asyncGeneratorStep(o,n,i,a,s,"next",t)}function s(t){asyncGeneratorStep(o,n,i,a,s,"throw",t)}a(void 0)}))}}System.register(["@ibiz-template/vue3-util","@ibiz-template/runtime","vue","lodash-es"],(function(exports,module){"use strict";var getRawProps,getEditorEmits,useNamespace,withInstall,EditorController,registerEditorProvider,defineComponent,ref,computed,watch,createVNode,createTextVNode,h,isArray;return{setters:[function(t){getRawProps=t.getRawProps,getEditorEmits=t.getEditorEmits,useNamespace=t.useNamespace,withInstall=t.withInstall},function(t){EditorController=t.EditorController,registerEditorProvider=t.registerEditorProvider},function(t){defineComponent=t.defineComponent,ref=t.ref,computed=t.computed,watch=t.watch,createVNode=t.createVNode,createTextVNode=t.createTextVNode,h=t.h},function(t){isArray=t.isArray}],execute:function execute(){var rawActivity="",RawActivity=defineComponent({name:"RawActivity",props:getRawProps(),emits:getEditorEmits(),setup:function setup(props){var _editorModel$editorPa,_editorModel$editorPa3,_editorModel$editorPa4,ns=useNamespace("raw"),ns2=useNamespace("raw-activity"),c=props.controller,editorModel=c.model,content=ref(""),type="TEXT",template="",_editorModel$editorPa2;(editorModel.contentType&&(type=editorModel.contentType),null!==(_editorModel$editorPa=editorModel.editorParams)&&void 0!==_editorModel$editorPa&&_editorModel$editorPa.contenttype)&&(type=null===(_editorModel$editorPa2=editorModel.editorParams)||void 0===_editorModel$editorPa2?void 0:_editorModel$editorPa2.contenttype);null!==(_editorModel$editorPa3=editorModel.editorParams)&&void 0!==_editorModel$editorPa3&&_editorModel$editorPa3.template&&(template=editorModel.editorParams.template.replaceAll("//n","\n")),null!==(_editorModel$editorPa4=editorModel.editorParams)&&void 0!==_editorModel$editorPa4&&_editorModel$editorPa4.TEMPLATE&&(template=editorModel.editorParams.TEMPLATE.replaceAll("//n","\n"));var showFormDefaultContent=computed((function(){return!(!props.controlParams||"hover"!==props.controlParams.editmode)}));watch((function(){return props.value}),function(){var t=_asyncToGenerator(_regeneratorRuntime().mark((function t(e,r){var n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e===r){t.next=8;break}if("string"!=typeof e&&"number"!=typeof e||(content.value=e),!template||!e){t.next=8;break}if(n=[],"string"==typeof e)try{(n=JSON.parse(e)).forEach((function(t){if("TAGS"===t.dataauditdetailname){if(t.newvalue){var e=JSON.parse(t.newvalue);isArray(e)&&(t.newvalue=e.map((function(t){return t.name})).join(","))}if(t.oldvalue){var r=JSON.parse(t.oldvalue);isArray(r)&&(t.oldvalue=r.map((function(t){return t.name})).join(","))}}}))}catch(i){ibiz.log.error("JSON字符串转换错误")}return t.next=7,ibiz.util.hbs.render(template,n||e);case 7:content.value=t.sent;case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),{immediate:!0});var handleClick=function(){var _ref2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(e){var clickValue;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(clickValue=e.target.getAttribute("click"),clickValue){_context2.next=3;break}return _context2.abrupt("return");case 3:try{eval(clickValue)}catch(error){ibiz.log.error("".concat(clickValue," 脚本执行错误"))}case 4:case"end":return _context2.stop()}}),_callee2)})));return function(t){return _ref2.apply(this,arguments)}}(),renderContent=function(){return"HTML"===type?createVNode("div",{class:ns2.e("paragraph"),innerHTML:content.value,onClick:function(t){handleClick(t)}},null):createVNode("span",{class:ns2.e("text")},[content.value])},onContrast=function(t){try{var e=JSON.parse(props.value);if(e){var r=e.find((function(e){return e.dataauditdetailname===t}));if(r){var n={name:t,oldValue:r.oldvalue,newValue:r.newvalue};c.openContrastModal(n)}}}catch(i){ibiz.log.error("JSON字符串转换错误")}};return{ns:ns,ns2:ns2,onContrast:onContrast,renderContent:renderContent,showFormDefaultContent:showFormDefaultContent}},render:function(){return createVNode("div",{class:[this.ns.b(),this.ns2.b(),this.disabled?this.ns.m("disabled"):"",this.readonly?this.ns.m("readonly"):"",this.ns.is("show-default",this.showFormDefaultContent)]},[this.renderContent()])}}),diffMatchPatch={exports:{}};!function(t){var e=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},r=-1;e.Diff=function(t,e){return[t,e]},e.prototype.diff_main=function(t,r,n,i){void 0===i&&(i=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+1e3*this.Diff_Timeout);var o=i;if(null==t||null==r)throw new Error("Null input. (diff_main)");if(t==r)return t?[new e.Diff(0,t)]:[];void 0===n&&(n=!0);var a=n,s=this.diff_commonPrefix(t,r),f=t.substring(0,s);t=t.substring(s),r=r.substring(s),s=this.diff_commonSuffix(t,r);var l=t.substring(t.length-s);t=t.substring(0,t.length-s),r=r.substring(0,r.length-s);var c=this.diff_compute_(t,r,a,o);return f&&c.unshift(new e.Diff(0,f)),l&&c.push(new e.Diff(0,l)),this.diff_cleanupMerge(c),c},e.prototype.diff_compute_=function(t,n,i,o){var a;if(!t)return[new e.Diff(1,n)];if(!n)return[new e.Diff(r,t)];var s=t.length>n.length?t:n,f=t.length>n.length?n:t,l=s.indexOf(f);if(-1!=l)return a=[new e.Diff(1,s.substring(0,l)),new e.Diff(0,f),new e.Diff(1,s.substring(l+f.length))],t.length>n.length&&(a[0][0]=a[2][0]=r),a;if(1==f.length)return[new e.Diff(r,t),new e.Diff(1,n)];var c=this.diff_halfMatch_(t,n);if(c){var h=c[0],u=c[1],d=c[2],p=c[3],g=c[4],v=this.diff_main(h,d,i,o),_=this.diff_main(u,p,i,o);return v.concat([new e.Diff(0,g)],_)}return i&&t.length>100&&n.length>100?this.diff_lineMode_(t,n,o):this.diff_bisect_(t,n,o)},e.prototype.diff_lineMode_=function(t,n,i){var o=this.diff_linesToChars_(t,n);t=o.chars1,n=o.chars2;var a=o.lineArray,s=this.diff_main(t,n,!1,i);this.diff_charsToLines_(s,a),this.diff_cleanupSemantic(s),s.push(new e.Diff(0,""));for(var f=0,l=0,c=0,h="",u="";f<s.length;){switch(s[f][0]){case 1:c++,u+=s[f][1];break;case r:l++,h+=s[f][1];break;case 0:if(l>=1&&c>=1){s.splice(f-l-c,l+c),f=f-l-c;for(var d=this.diff_main(h,u,!1,i),p=d.length-1;p>=0;p--)s.splice(f,0,d[p]);f+=d.length}c=0,l=0,h="",u=""}f++}return s.pop(),s},e.prototype.diff_bisect_=function(t,n,i){for(var o=t.length,a=n.length,s=Math.ceil((o+a)/2),f=s,l=2*s,c=new Array(l),h=new Array(l),u=0;u<l;u++)c[u]=-1,h[u]=-1;c[f+1]=0,h[f+1]=0;for(var d=o-a,p=d%2!=0,g=0,v=0,_=0,m=0,y=0;y<s&&!((new Date).getTime()>i);y++){for(var b=-y+g;b<=y-v;b+=2){for(var w=f+b,x=(D=b==-y||b!=y&&c[w-1]<c[w+1]?c[w+1]:c[w-1]+1)-b;D<o&&x<a&&t.charAt(D)==n.charAt(x);)D++,x++;if(c[w]=D,D>o)v+=2;else if(x>a)g+=2;else if(p){if((E=f+d-b)>=0&&E<l&&-1!=h[E])if(D>=(P=o-h[E]))return this.diff_bisectSplit_(t,n,D,x,i)}}for(var M=-y+_;M<=y-m;M+=2){for(var P,E=f+M,C=(P=M==-y||M!=y&&h[E-1]<h[E+1]?h[E+1]:h[E-1]+1)-M;P<o&&C<a&&t.charAt(o-P-1)==n.charAt(a-C-1);)P++,C++;if(h[E]=P,P>o)m+=2;else if(C>a)_+=2;else if(!p){if((w=f+d-M)>=0&&w<l&&-1!=c[w]){var D;x=f+(D=c[w])-w;if(D>=(P=o-P))return this.diff_bisectSplit_(t,n,D,x,i)}}}}return[new e.Diff(r,t),new e.Diff(1,n)]},e.prototype.diff_bisectSplit_=function(t,e,r,n,i){var o=t.substring(0,r),a=e.substring(0,n),s=t.substring(r),f=e.substring(n),l=this.diff_main(o,a,!1,i),c=this.diff_main(s,f,!1,i);return l.concat(c)},e.prototype.diff_linesToChars_=function(t,e){var r=[],n={};function i(t){for(var e="",i=0,a=-1,s=r.length;a<t.length-1;){-1==(a=t.indexOf("\n",i))&&(a=t.length-1);var f=t.substring(i,a+1);(n.hasOwnProperty?n.hasOwnProperty(f):void 0!==n[f])?e+=String.fromCharCode(n[f]):(s==o&&(f=t.substring(i),a=t.length),e+=String.fromCharCode(s),n[f]=s,r[s++]=f),i=a+1}return e}r[0]="";var o=4e4,a=i(t);return o=65535,{chars1:a,chars2:i(e),lineArray:r}},e.prototype.diff_charsToLines_=function(t,e){for(var r=0;r<t.length;r++){for(var n=t[r][1],i=[],o=0;o<n.length;o++)i[o]=e[n.charCodeAt(o)];t[r][1]=i.join("")}},e.prototype.diff_commonPrefix=function(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var r=0,n=Math.min(t.length,e.length),i=n,o=0;r<i;)t.substring(o,i)==e.substring(o,i)?o=r=i:n=i,i=Math.floor((n-r)/2+r);return i},e.prototype.diff_commonSuffix=function(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var r=0,n=Math.min(t.length,e.length),i=n,o=0;r<i;)t.substring(t.length-i,t.length-o)==e.substring(e.length-i,e.length-o)?o=r=i:n=i,i=Math.floor((n-r)/2+r);return i},e.prototype.diff_commonOverlap_=function(t,e){var r=t.length,n=e.length;if(0==r||0==n)return 0;r>n?t=t.substring(r-n):r<n&&(e=e.substring(0,r));var i=Math.min(r,n);if(t==e)return i;for(var o=0,a=1;;){var s=t.substring(i-a),f=e.indexOf(s);if(-1==f)return o;a+=f,0!=f&&t.substring(i-a)!=e.substring(0,a)||(o=a,a++)}},e.prototype.diff_halfMatch_=function(t,e){if(this.Diff_Timeout<=0)return null;var r=t.length>e.length?t:e,n=t.length>e.length?e:t;if(r.length<4||2*n.length<r.length)return null;var i=this;function o(t,e,r){for(var n,o,a,s,f=t.substring(r,r+Math.floor(t.length/4)),l=-1,c="";-1!=(l=e.indexOf(f,l+1));){var h=i.diff_commonPrefix(t.substring(r),e.substring(l)),u=i.diff_commonSuffix(t.substring(0,r),e.substring(0,l));c.length<u+h&&(c=e.substring(l-u,l)+e.substring(l,l+h),n=t.substring(0,r-u),o=t.substring(r+h),a=e.substring(0,l-u),s=e.substring(l+h))}return 2*c.length>=t.length?[n,o,a,s,c]:null}var a,s,f,l,c,h=o(r,n,Math.ceil(r.length/4)),u=o(r,n,Math.ceil(r.length/2));return h||u?(a=u?h&&h[4].length>u[4].length?h:u:h,t.length>e.length?(s=a[0],f=a[1],l=a[2],c=a[3]):(l=a[0],c=a[1],s=a[2],f=a[3]),[s,f,l,c,a[4]]):null},e.prototype.diff_cleanupSemantic=function(t){for(var n=!1,i=[],o=0,a=null,s=0,f=0,l=0,c=0,h=0;s<t.length;)0==t[s][0]?(i[o++]=s,f=c,l=h,c=0,h=0,a=t[s][1]):(1==t[s][0]?c+=t[s][1].length:h+=t[s][1].length,a&&a.length<=Math.max(f,l)&&a.length<=Math.max(c,h)&&(t.splice(i[o-1],0,new e.Diff(r,a)),t[i[o-1]+1][0]=1,o--,s=--o>0?i[o-1]:-1,f=0,l=0,c=0,h=0,a=null,n=!0)),s++;for(n&&this.diff_cleanupMerge(t),this.diff_cleanupSemanticLossless(t),s=1;s<t.length;){if(t[s-1][0]==r&&1==t[s][0]){var u=t[s-1][1],d=t[s][1],p=this.diff_commonOverlap_(u,d),g=this.diff_commonOverlap_(d,u);p>=g?(p>=u.length/2||p>=d.length/2)&&(t.splice(s,0,new e.Diff(0,d.substring(0,p))),t[s-1][1]=u.substring(0,u.length-p),t[s+1][1]=d.substring(p),s++):(g>=u.length/2||g>=d.length/2)&&(t.splice(s,0,new e.Diff(0,u.substring(0,g))),t[s-1][0]=1,t[s-1][1]=d.substring(0,d.length-g),t[s+1][0]=r,t[s+1][1]=u.substring(g),s++),s++}s++}},e.prototype.diff_cleanupSemanticLossless=function(t){function r(t,r){if(!t||!r)return 6;var n=t.charAt(t.length-1),i=r.charAt(0),o=n.match(e.nonAlphaNumericRegex_),a=i.match(e.nonAlphaNumericRegex_),s=o&&n.match(e.whitespaceRegex_),f=a&&i.match(e.whitespaceRegex_),l=s&&n.match(e.linebreakRegex_),c=f&&i.match(e.linebreakRegex_),h=l&&t.match(e.blanklineEndRegex_),u=c&&r.match(e.blanklineStartRegex_);return h||u?5:l||c?4:o&&!s&&f?3:s||f?2:o||a?1:0}for(var n=1;n<t.length-1;){if(0==t[n-1][0]&&0==t[n+1][0]){var i=t[n-1][1],o=t[n][1],a=t[n+1][1],s=this.diff_commonSuffix(i,o);if(s){var f=o.substring(o.length-s);i=i.substring(0,i.length-s),o=f+o.substring(0,o.length-s),a=f+a}for(var l=i,c=o,h=a,u=r(i,o)+r(o,a);o.charAt(0)===a.charAt(0);){i+=o.charAt(0),o=o.substring(1)+a.charAt(0),a=a.substring(1);var d=r(i,o)+r(o,a);d>=u&&(u=d,l=i,c=o,h=a)}t[n-1][1]!=l&&(l?t[n-1][1]=l:(t.splice(n-1,1),n--),t[n][1]=c,h?t[n+1][1]=h:(t.splice(n+1,1),n--))}n++}},e.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,e.whitespaceRegex_=/\s/,e.linebreakRegex_=/[\r\n]/,e.blanklineEndRegex_=/\n\r?\n$/,e.blanklineStartRegex_=/^\r?\n\r?\n/,e.prototype.diff_cleanupEfficiency=function(t){for(var n=!1,i=[],o=0,a=null,s=0,f=!1,l=!1,c=!1,h=!1;s<t.length;)0==t[s][0]?(t[s][1].length<this.Diff_EditCost&&(c||h)?(i[o++]=s,f=c,l=h,a=t[s][1]):(o=0,a=null),c=h=!1):(t[s][0]==r?h=!0:c=!0,a&&(f&&l&&c&&h||a.length<this.Diff_EditCost/2&&f+l+c+h==3)&&(t.splice(i[o-1],0,new e.Diff(r,a)),t[i[o-1]+1][0]=1,o--,a=null,f&&l?(c=h=!0,o=0):(s=--o>0?i[o-1]:-1,c=h=!1),n=!0)),s++;n&&this.diff_cleanupMerge(t)},e.prototype.diff_cleanupMerge=function(t){t.push(new e.Diff(0,""));for(var n,i=0,o=0,a=0,s="",f="";i<t.length;)switch(t[i][0]){case 1:a++,f+=t[i][1],i++;break;case r:o++,s+=t[i][1],i++;break;case 0:o+a>1?(0!==o&&0!==a&&(0!==(n=this.diff_commonPrefix(f,s))&&(i-o-a>0&&0==t[i-o-a-1][0]?t[i-o-a-1][1]+=f.substring(0,n):(t.splice(0,0,new e.Diff(0,f.substring(0,n))),i++),f=f.substring(n),s=s.substring(n)),0!==(n=this.diff_commonSuffix(f,s))&&(t[i][1]=f.substring(f.length-n)+t[i][1],f=f.substring(0,f.length-n),s=s.substring(0,s.length-n))),i-=o+a,t.splice(i,o+a),s.length&&(t.splice(i,0,new e.Diff(r,s)),i++),f.length&&(t.splice(i,0,new e.Diff(1,f)),i++),i++):0!==i&&0==t[i-1][0]?(t[i-1][1]+=t[i][1],t.splice(i,1)):i++,a=0,o=0,s="",f=""}""===t[t.length-1][1]&&t.pop();var l=!1;for(i=1;i<t.length-1;)0==t[i-1][0]&&0==t[i+1][0]&&(t[i][1].substring(t[i][1].length-t[i-1][1].length)==t[i-1][1]?(t[i][1]=t[i-1][1]+t[i][1].substring(0,t[i][1].length-t[i-1][1].length),t[i+1][1]=t[i-1][1]+t[i+1][1],t.splice(i-1,1),l=!0):t[i][1].substring(0,t[i+1][1].length)==t[i+1][1]&&(t[i-1][1]+=t[i+1][1],t[i][1]=t[i][1].substring(t[i+1][1].length)+t[i+1][1],t.splice(i+1,1),l=!0)),i++;l&&this.diff_cleanupMerge(t)},e.prototype.diff_xIndex=function(t,e){var n,i=0,o=0,a=0,s=0;for(n=0;n<t.length&&(1!==t[n][0]&&(i+=t[n][1].length),t[n][0]!==r&&(o+=t[n][1].length),!(i>e));n++)a=i,s=o;return t.length!=n&&t[n][0]===r?s:s+(e-a)},e.prototype.diff_prettyHtml=function(t){for(var e=[],n=/&/g,i=/</g,o=/>/g,a=/\n/g,s=0;s<t.length;s++){var f=t[s][0],l=t[s][1].replace(n,"&amp;").replace(i,"&lt;").replace(o,"&gt;").replace(a,"&para;<br>");switch(f){case 1:e[s]='<ins style="background:#e6ffe6;">'+l+"</ins>";break;case r:e[s]='<del style="background:#ffe6e6;">'+l+"</del>";break;case 0:e[s]="<span>"+l+"</span>"}}return e.join("")},e.prototype.diff_text1=function(t){for(var e=[],r=0;r<t.length;r++)1!==t[r][0]&&(e[r]=t[r][1]);return e.join("")},e.prototype.diff_text2=function(t){for(var e=[],n=0;n<t.length;n++)t[n][0]!==r&&(e[n]=t[n][1]);return e.join("")},e.prototype.diff_levenshtein=function(t){for(var e=0,n=0,i=0,o=0;o<t.length;o++){var a=t[o][0],s=t[o][1];switch(a){case 1:n+=s.length;break;case r:i+=s.length;break;case 0:e+=Math.max(n,i),n=0,i=0}}return e+=Math.max(n,i)},e.prototype.diff_toDelta=function(t){for(var e=[],n=0;n<t.length;n++)switch(t[n][0]){case 1:e[n]="+"+encodeURI(t[n][1]);break;case r:e[n]="-"+t[n][1].length;break;case 0:e[n]="="+t[n][1].length}return e.join("\t").replace(/%20/g," ")},e.prototype.diff_fromDelta=function(t,n){for(var i=[],o=0,a=0,s=n.split(/\t/g),f=0;f<s.length;f++){var l=s[f].substring(1);switch(s[f].charAt(0)){case"+":try{i[o++]=new e.Diff(1,decodeURI(l))}catch(u){throw new Error("Illegal escape in diff_fromDelta: "+l)}break;case"-":case"=":var c=parseInt(l,10);if(isNaN(c)||c<0)throw new Error("Invalid number in diff_fromDelta: "+l);var h=t.substring(a,a+=c);"="==s[f].charAt(0)?i[o++]=new e.Diff(0,h):i[o++]=new e.Diff(r,h);break;default:if(s[f])throw new Error("Invalid diff operation in diff_fromDelta: "+s[f])}}if(a!=t.length)throw new Error("Delta length ("+a+") does not equal source text length ("+t.length+").");return i},e.prototype.match_main=function(t,e,r){if(null==t||null==e||null==r)throw new Error("Null input. (match_main)");return r=Math.max(0,Math.min(r,t.length)),t==e?0:t.length?t.substring(r,r+e.length)==e?r:this.match_bitap_(t,e,r):-1},e.prototype.match_bitap_=function(t,e,r){if(e.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var n=this.match_alphabet_(e),i=this;function o(t,n){var o=t/e.length,a=Math.abs(r-n);return i.Match_Distance?o+a/i.Match_Distance:a?1:o}var a=this.Match_Threshold,s=t.indexOf(e,r);-1!=s&&(a=Math.min(o(0,s),a),-1!=(s=t.lastIndexOf(e,r+e.length))&&(a=Math.min(o(0,s),a)));var f,l,c=1<<e.length-1;s=-1;for(var h,u=e.length+t.length,d=0;d<e.length;d++){for(f=0,l=u;f<l;)o(d,r+l)<=a?f=l:u=l,l=Math.floor((u-f)/2+f);u=l;var p=Math.max(1,r-l+1),g=Math.min(r+l,t.length)+e.length,v=Array(g+2);v[g+1]=(1<<d)-1;for(var _=g;_>=p;_--){var m=n[t.charAt(_-1)];if(v[_]=0===d?(v[_+1]<<1|1)&m:(v[_+1]<<1|1)&m|(h[_+1]|h[_])<<1|1|h[_+1],v[_]&c){var y=o(d,_-1);if(y<=a){if(a=y,!((s=_-1)>r))break;p=Math.max(1,2*r-s)}}}if(o(d+1,r)>a)break;h=v}return s},e.prototype.match_alphabet_=function(t){for(var e={},r=0;r<t.length;r++)e[t.charAt(r)]=0;for(r=0;r<t.length;r++)e[t.charAt(r)]|=1<<t.length-r-1;return e},e.prototype.patch_addContext_=function(t,r){if(0!=r.length){if(null===t.start2)throw Error("patch not initialized");for(var n=r.substring(t.start2,t.start2+t.length1),i=0;r.indexOf(n)!=r.lastIndexOf(n)&&n.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)i+=this.Patch_Margin,n=r.substring(t.start2-i,t.start2+t.length1+i);i+=this.Patch_Margin;var o=r.substring(t.start2-i,t.start2);o&&t.diffs.unshift(new e.Diff(0,o));var a=r.substring(t.start2+t.length1,t.start2+t.length1+i);a&&t.diffs.push(new e.Diff(0,a)),t.start1-=o.length,t.start2-=o.length,t.length1+=o.length+a.length,t.length2+=o.length+a.length}},e.prototype.patch_make=function(t,n,i){var o,a;if("string"==typeof t&&"string"==typeof n&&void 0===i)o=t,(a=this.diff_main(o,n,!0)).length>2&&(this.diff_cleanupSemantic(a),this.diff_cleanupEfficiency(a));else if(t&&"object"==_typeof(t)&&void 0===n&&void 0===i)a=t,o=this.diff_text1(a);else if("string"==typeof t&&n&&"object"==_typeof(n)&&void 0===i)o=t,a=n;else{if("string"!=typeof t||"string"!=typeof n||!i||"object"!=_typeof(i))throw new Error("Unknown call format to patch_make.");o=t,a=i}if(0===a.length)return[];for(var s=[],f=new e.patch_obj,l=0,c=0,h=0,u=o,d=o,p=0;p<a.length;p++){var g=a[p][0],v=a[p][1];switch(l||0===g||(f.start1=c,f.start2=h),g){case 1:f.diffs[l++]=a[p],f.length2+=v.length,d=d.substring(0,h)+v+d.substring(h);break;case r:f.length1+=v.length,f.diffs[l++]=a[p],d=d.substring(0,h)+d.substring(h+v.length);break;case 0:v.length<=2*this.Patch_Margin&&l&&a.length!=p+1?(f.diffs[l++]=a[p],f.length1+=v.length,f.length2+=v.length):v.length>=2*this.Patch_Margin&&l&&(this.patch_addContext_(f,u),s.push(f),f=new e.patch_obj,l=0,u=d,c=h)}1!==g&&(c+=v.length),g!==r&&(h+=v.length)}return l&&(this.patch_addContext_(f,u),s.push(f)),s},e.prototype.patch_deepCopy=function(t){for(var r=[],n=0;n<t.length;n++){var i=t[n],o=new e.patch_obj;o.diffs=[];for(var a=0;a<i.diffs.length;a++)o.diffs[a]=new e.Diff(i.diffs[a][0],i.diffs[a][1]);o.start1=i.start1,o.start2=i.start2,o.length1=i.length1,o.length2=i.length2,r[n]=o}return r},e.prototype.patch_apply=function(t,e){if(0==t.length)return[e,[]];t=this.patch_deepCopy(t);var n=this.patch_addPadding(t);e=n+e+n,this.patch_splitMax(t);for(var i=0,o=[],a=0;a<t.length;a++){var s,f,l=t[a].start2+i,c=this.diff_text1(t[a].diffs),h=-1;if(c.length>this.Match_MaxBits?-1!=(s=this.match_main(e,c.substring(0,this.Match_MaxBits),l))&&(-1==(h=this.match_main(e,c.substring(c.length-this.Match_MaxBits),l+c.length-this.Match_MaxBits))||s>=h)&&(s=-1):s=this.match_main(e,c,l),-1==s)o[a]=!1,i-=t[a].length2-t[a].length1;else if(o[a]=!0,i=s-l,c==(f=-1==h?e.substring(s,s+c.length):e.substring(s,h+this.Match_MaxBits)))e=e.substring(0,s)+this.diff_text2(t[a].diffs)+e.substring(s+c.length);else{var u=this.diff_main(c,f,!1);if(c.length>this.Match_MaxBits&&this.diff_levenshtein(u)/c.length>this.Patch_DeleteThreshold)o[a]=!1;else{this.diff_cleanupSemanticLossless(u);for(var d,p=0,g=0;g<t[a].diffs.length;g++){var v=t[a].diffs[g];0!==v[0]&&(d=this.diff_xIndex(u,p)),1===v[0]?e=e.substring(0,s+d)+v[1]+e.substring(s+d):v[0]===r&&(e=e.substring(0,s+d)+e.substring(s+this.diff_xIndex(u,p+v[1].length))),v[0]!==r&&(p+=v[1].length)}}}}return[e=e.substring(n.length,e.length-n.length),o]},e.prototype.patch_addPadding=function(t){for(var r=this.Patch_Margin,n="",i=1;i<=r;i++)n+=String.fromCharCode(i);for(i=0;i<t.length;i++)t[i].start1+=r,t[i].start2+=r;var o=t[0],a=o.diffs;if(0==a.length||0!=a[0][0])a.unshift(new e.Diff(0,n)),o.start1-=r,o.start2-=r,o.length1+=r,o.length2+=r;else if(r>a[0][1].length){var s=r-a[0][1].length;a[0][1]=n.substring(a[0][1].length)+a[0][1],o.start1-=s,o.start2-=s,o.length1+=s,o.length2+=s}if(0==(a=(o=t[t.length-1]).diffs).length||0!=a[a.length-1][0])a.push(new e.Diff(0,n)),o.length1+=r,o.length2+=r;else if(r>a[a.length-1][1].length){s=r-a[a.length-1][1].length;a[a.length-1][1]+=n.substring(0,s),o.length1+=s,o.length2+=s}return n},e.prototype.patch_splitMax=function(t){for(var n=this.Match_MaxBits,i=0;i<t.length;i++)if(!(t[i].length1<=n)){var o=t[i];t.splice(i--,1);for(var a=o.start1,s=o.start2,f="";0!==o.diffs.length;){var l=new e.patch_obj,c=!0;for(l.start1=a-f.length,l.start2=s-f.length,""!==f&&(l.length1=l.length2=f.length,l.diffs.push(new e.Diff(0,f)));0!==o.diffs.length&&l.length1<n-this.Patch_Margin;){var h=o.diffs[0][0],u=o.diffs[0][1];1===h?(l.length2+=u.length,s+=u.length,l.diffs.push(o.diffs.shift()),c=!1):h===r&&1==l.diffs.length&&0==l.diffs[0][0]&&u.length>2*n?(l.length1+=u.length,a+=u.length,c=!1,l.diffs.push(new e.Diff(h,u)),o.diffs.shift()):(u=u.substring(0,n-l.length1-this.Patch_Margin),l.length1+=u.length,a+=u.length,0===h?(l.length2+=u.length,s+=u.length):c=!1,l.diffs.push(new e.Diff(h,u)),u==o.diffs[0][1]?o.diffs.shift():o.diffs[0][1]=o.diffs[0][1].substring(u.length))}f=(f=this.diff_text2(l.diffs)).substring(f.length-this.Patch_Margin);var d=this.diff_text1(o.diffs).substring(0,this.Patch_Margin);""!==d&&(l.length1+=d.length,l.length2+=d.length,0!==l.diffs.length&&0===l.diffs[l.diffs.length-1][0]?l.diffs[l.diffs.length-1][1]+=d:l.diffs.push(new e.Diff(0,d))),c||t.splice(++i,0,l)}}},e.prototype.patch_toText=function(t){for(var e=[],r=0;r<t.length;r++)e[r]=t[r];return e.join("")},e.prototype.patch_fromText=function(t){var n=[];if(!t)return n;for(var i=t.split("\n"),o=0,a=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;o<i.length;){var s=i[o].match(a);if(!s)throw new Error("Invalid patch string: "+i[o]);var f=new e.patch_obj;for(n.push(f),f.start1=parseInt(s[1],10),""===s[2]?(f.start1--,f.length1=1):"0"==s[2]?f.length1=0:(f.start1--,f.length1=parseInt(s[2],10)),f.start2=parseInt(s[3],10),""===s[4]?(f.start2--,f.length2=1):"0"==s[4]?f.length2=0:(f.start2--,f.length2=parseInt(s[4],10)),o++;o<i.length;){var l=i[o].charAt(0);try{var c=decodeURI(i[o].substring(1))}catch(h){throw new Error("Illegal escape in patch_fromText: "+c)}if("-"==l)f.diffs.push(new e.Diff(r,c));else if("+"==l)f.diffs.push(new e.Diff(1,c));else if(" "==l)f.diffs.push(new e.Diff(0,c));else{if("@"==l)break;if(""!==l)throw new Error('Invalid patch mode "'+l+'" in: '+c)}o++}}return n},(e.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0}).prototype.toString=function(){for(var t,e=["@@ -"+(0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1)+" +"+(0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2)+" @@\n"],n=0;n<this.diffs.length;n++){switch(this.diffs[n][0]){case 1:t="+";break;case r:t="-";break;case 0:t=" "}e[n+1]=t+encodeURI(this.diffs[n][1])+"\n"}return e.join("").replace(/%20/g," ")},t.exports=e,t.exports.diff_match_patch=e,t.exports.DIFF_DELETE=r,t.exports.DIFF_INSERT=1,t.exports.DIFF_EQUAL=0}(diffMatchPatch);var diffMatchPatchExports=diffMatchPatch.exports,Util=function(){function t(){_classCallCheck(this,t),_defineProperty(this,"dmp",void 0),_defineProperty(this,"tagMap",{}),_defineProperty(this,"unicodeRangeStart",57344),_defineProperty(this,"mapLength",0),this.init()}return _createClass(t,[{key:"init",value:function(){this.dmp=new diffMatchPatchExports.diff_match_patch}},{key:"doDiff",value:function(t,e){var r=this.convertHtmlToDiffString(t),n=this.convertHtmlToDiffString(e),i=this.dmp.diff_main(r,n);this.dmp.diff_cleanupSemantic(i);for(var o="",a=0;a<i.length;a++)i[a][1]=this.insertTagsForOperation(i[a][1],i[a][0]),o+=this.convertDiffBackToHtml(i[a][1]);return o}},{key:"convertHtmlToDiffString",value:function(t){var e="";if(null==t||0===t.length)return e;for(var r=0;r<t.length;){var n=t.indexOf("<",r);if(n<0){e+=t.substr(r);break}var i=t.indexOf(">",n);if(i<0){e+=t.substr(r,n-r);break}var o=t.substr(n,i+1-n),a=this.tagMap[o];a||(a=String.fromCharCode(this.mapLength+this.unicodeRangeStart),this.tagMap[o]=a,this.tagMap[a]=o,this.mapLength++),e+=t.substr(r,n-r),e+=a,r=i+1}return e}},{key:"insertTagsForOperation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,r="",n="</span>";if(1===e)r="<span class='add-text'>";else{if(-1!==e)return t;r="<span class='remove-text'>"}var i=-1;do{i++}while(t.charCodeAt(i)>=this.unicodeRangeStart);if(i>=t.length)return"".concat(r).concat(t).concat(n);for(var o="",a=!1,s=0;s<t.length;s++){var f=t[s];this.tagMap[f]?(a&&(o+=n,a=!1),o+=f):(a||(o+=r,a=!0),o+=f)}return a&&(o+=n),o}},{key:"convertDiffBackToHtml",value:function(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r),i=this.tagMap[t[r]];n<this.unicodeRangeStart?e+=t[r]:e+=void 0===i?t[r]:i}return e}}]),t}(),stepContrast="",StepContrast=defineComponent({name:"StepContrast",props:{item:{type:Object,required:!0},modal:{type:Object}},setup:function(t){var e=useNamespace("contrast-modal"),r=new Util,n=computed((function(){var e=t.item.oldValue;return"STEPS"===t.item.name&&e&&(e=JSON.parse(e)),e})),i=computed((function(){var e=t.item.newValue;return"STEPS"===t.item.name&&e&&(e=JSON.parse(e)),e})),o=computed((function(){var t=[],e=0,r=0;return isArray(n.value)&&n.value.forEach((function(n,i){!n.is_group&&i&&n.group_id?(r++,t.push("".concat(e,".").concat(r))):(e++,r=0,t.push("".concat(e)))})),t})),a=computed((function(){var t=[],e=0,r=0;return isArray(i.value)&&i.value.forEach((function(n,i){!n.is_group&&i&&n.group_id?(r++,t.push("".concat(e,".").concat(r))):(e++,r=0,t.push("".concat(e)))})),t})),s=function(t){return("oldValue"===t?n.value:i.value).map((function(e,r){return createVNode("tr",null,[createVNode("td",{class:"number-column"},["oldValue"===t?o.value[r]:a.value[r]]),createVNode("td",{class:"description-column",colspan:e.is_group?2:1},[e.is_group?e.name:e.description]),!e.is_group&&createVNode("td",{class:"expected-column"},[e.expected_value])])}))},f=function(t){return createVNode("table",{class:"steps-table"},[createVNode("tr",{class:"table-header"},[createVNode("td",{class:"number-column"},[createTextVNode("#")]),createVNode("td",{class:"description-column"},[createTextVNode("步骤描述")]),createVNode("td",{class:"expected-column"},[createTextVNode("预期结果")])]),s(t)])},l=function(t){return createVNode("div",{class:"html",innerHTML:"oldValue"===t?n.value:r.doDiff(n.value||"",i.value||"")},null)};return{ns:e,renderContainer:function(r){return createVNode("div",{class:e.e("container")},["STEPS"===t.item.name?f(r):l(r)])}}},render:function(){return createVNode("div",{class:[this.ns.b(),this.ns.e("".concat(this.item.name.toLowerCase()))]},[createVNode("div",{class:this.ns.e("modal-title")},[createTextVNode("变更对比")]),createVNode("div",{class:this.ns.e("modal-content")},[createVNode("div",{class:this.ns.m("change-content")},[createVNode("div",{class:"before-change"},[createVNode("span",null,[createTextVNode("变更前")])]),this.renderContainer("oldValue")]),createVNode("div",{class:this.ns.m("change-content")},[createVNode("div",{class:"after-change"},[createVNode("span",null,[createTextVNode("变更后")]),"STEPS"!==this.item.name&&createVNode("span",{class:"inserted"},[createTextVNode("新增 "),createVNode("span",{class:"add state"},null),createTextVNode("删除 "),createVNode("span",{class:"remove state"},null)])]),this.renderContainer("newValue")])])])}}),RawActivityEditorController=function(t){_inherits(n,t);var e,r=_createSuper(n);function n(){var t;_classCallCheck(this,n);for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return _defineProperty(_assertThisInitialized(t=r.call.apply(r,[this].concat(i))),"modal",null),t}return _createClass(n,[{key:"openContrastModal",value:(e=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){var r;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.modal=ibiz.overlay.createModal((function(t){return h(StepContrast,{item:e,modal:t})}),void 0,{width:"90%",height:"90%"}),t.next=3,this.modal.present();case 3:return t.next=5,this.modal.onWillDismiss();case 5:return r=t.sent,t.abrupt("return",r.data||[]);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),n}(EditorController),RawActivityEditorProvider=function(){function t(){_classCallCheck(this,t),_defineProperty(this,"formEditor","RawActivity"),_defineProperty(this,"gridEditor","RawActivity")}var e;return _createClass(t,[{key:"createController",value:(e=_asyncToGenerator(_regeneratorRuntime().mark((function t(e,r){var n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new RawActivityEditorController(e,r),t.next=3,n.init();case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),function(t,r){return e.apply(this,arguments)})}]),t}(),IBizRawActivity=exports("IBizRawActivity",withInstall(RawActivity,(function(t){t.component(RawActivity.name,RawActivity),registerEditorProvider("EDITOR_CUSTOMSTYLE_RAW_ACTIVITY",(function(){return new RawActivityEditorProvider}))}))),index=exports("default",{install:function(t){t.use(IBizRawActivity)}})}}}))})();