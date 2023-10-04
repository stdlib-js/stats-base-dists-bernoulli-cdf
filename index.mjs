// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function r(t,e){return n(t)||n(e)||e<0||e>1?NaN:t<0?0:t>=1?1:1-e}function s(t){return n(t)||t<0||t>1?e(NaN):function(e){if(n(e))return NaN;if(e<0)return 0;if(e>=1)return 1;return 1-t}}t(r,"factory",s);export{r as default,s as factory};
//# sourceMappingURL=index.mjs.map
