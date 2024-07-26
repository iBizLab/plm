!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},i.apply(this,arguments)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=c(e);if(n){var i=c(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(this,r)}}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}System.register(["@ibiz-template/runtime"],(function(t,n){"use strict";var l,f;return{setters:[function(t){l=t.ChartController,f=t.registerControlProvider}],execute:function(){var n=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(o,t);var n=u(o);function o(){return e(this,o),n.apply(this,arguments)}return r(o,[{key:"calcOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.items;this.options=this.generator.calcOptionsByData(t);var e=this.handleTotalData(this.options);this.customLabel(this.options,e),this.updateChart()}},{key:"customLabel",value:function(t,e){t&&Array.isArray(t.xAxis)&&t.xAxis.length>0&&(t.xAxis[0].axisLabel||(t.xAxis[0].axisLabel={}),Object.assign(t.xAxis[0].axisLabel,{formatter:function(t,n){var r=e[t]||0;return"".concat(t,"(").concat(r,")")}}))}},{key:"handleTotalData",value:function(t){var e=this,n={};return t&&t.series&&t.series.forEach((function(t){var r=t.name;t.data&&"bar"===t.type&&t.data.forEach((function(t){var o,i=t[0],a=null===(o=e.chart)||void 0===o?void 0:o.getOption(),u={};if(a&&a.legend&&Array.isArray(a.legend)&&a.legend.length>0&&(u=a.legend[0].selected),!Object.prototype.hasOwnProperty.call(u,r)||!1!==u[r]){var c=t[1];isNaN(c)&&(c=0),n[i]||0===n[i]?n[i]+=c:n[i]=c}}))})),n}},{key:"initChart",value:function(t){var e;i(c(o.prototype),"initChart",this).call(this,t);var n=this;null===(e=this.chart)||void 0===e||e.on("legendselectchanged",(function(t){var e,r=n.handleTotalData(n.options||{});n.customLabel(n.options||{},r),null===(e=n.chart)||void 0===e||e.setOption(n.options||{})}))}}]),o}(l),s=function(){function t(){var n,r,i;e(this,t),n=this,i="IBizChartControl",(r=o(r="component"))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i}return r(t,[{key:"createController",value:function(t,e,r,o){return new n(t,e,r,o)}}]),t}();t("default",{install:function(t){f("CHART_RENDER_CUSTOM_LABEL",(function(){return new s}))}})}}}))}();