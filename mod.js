// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(e,r,t){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},_=r()?c:f;var p=function(e){return e!=e},b=p;var v=function(e){return function(){return e}},y=p;var d=function(e,r){return b(e)||b(r)||r<0||r>1?NaN:e<0?0:e>=1?1:1-r},s=function(e){return y(e)||e<0||e>1?v(NaN):function(r){if(y(r))return NaN;if(r<0)return 0;if(r>=1)return 1;return 1-e}};(function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(d,"factory",s);var j=d;export{j as default,s as factory};
//# sourceMappingURL=mod.js.map
