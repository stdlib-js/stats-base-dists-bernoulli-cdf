"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=n(function(m,u){
var i=require('@stdlib/math-base-assert-is-nan/dist');function q(e,r){return i(e)||i(r)||r<0||r>1?NaN:e<0?0:e>=1?1:1-r}u.exports=q
});var s=n(function(F,c){
var v=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist');function N(e){if(f(e)||e<0||e>1)return v(NaN);return r;function r(t){return f(t)?NaN:t<0?0:t>=1?1:1-e}}c.exports=N
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=a(),d=s();y(o,"factory",d);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
