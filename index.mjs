// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-quantile@v0.1.0-esm/index.mjs";function g(e,t){return!h(e)||f(e)?new TypeError(a("0ob6v,NI",e)):j(t)?null:new TypeError(a("0ob72,Go",t))}function v(e,t,s){var n=u(1-e()/2,0,1);return t+s/(n*n)}function c(){var h,j,f,u,c,b;if(0===arguments.length)j=m();else if(1===arguments.length){if(!n(h=arguments[0]))throw new TypeError(a("0ob2V,FD",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0ob6u,JI","prng",h.prng));j=h.prng}else j=m(h)}else{if(u=g(c=arguments[0],b=arguments[1]))throw u;if(arguments.length>2){if(!n(h=arguments[2]))throw new TypeError(a("0ob2V,FD",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0ob6u,JI","prng",h.prng));j=h.prng}else j=m(h)}else j=m()}return e(f=void 0===c?J:G,"NAME","levy"),h&&h.prng?(e(f,"seed",null),e(f,"seedLength",null),s(f,"state",o(null),d),e(f,"stateLength",null),e(f,"byteLength",null),e(f,"toJSON",o(null)),e(f,"PRNG",j)):(t(f,"seed",y),t(f,"seedLength",x),s(f,"state",L,E),t(f,"stateLength",w),t(f,"byteLength",N),e(f,"toJSON",T),e(f,"PRNG",j),j=j.normalized),f;function y(){return j.seed}function x(){return j.seedLength}function w(){return j.stateLength}function N(){return j.byteLength}function L(){return j.state}function E(e){j.state=e}function T(){var e={type:"PRNG"};return e.name=f.NAME,e.state=p(j.state),e.params=void 0===c?[]:[c,b],e}function G(){return v(j,c,b)}function J(e,t){return l(e)||l(t)||t<=0?NaN:v(j,e,t)}}var b=c();e(b,"factory",c);export{b as default,c as factory};
//# sourceMappingURL=index.mjs.map
