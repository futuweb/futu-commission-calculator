!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.calculator=t():e.calculator=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=40)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var i=n(11),o=n(30),a=n(17),r=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(i(e),t=a(t,!0),i(n),o)try{return r(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t,n){var i=n(1),o=n(12);e.exports=n(2)?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var i=n(33),o=n(18);e.exports=function(e){return i(o(e))}},function(e,t,n){var i=n(21)("wks"),o=n(15),a=n(0).Symbol,r="function"==typeof a;(e.exports=function(e){return i[e]||(i[e]=r&&a[e]||(r?a:o)("Symbol."+e))}).store=i},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var i=n(0),o=n(4),a=n(45),r=n(5),s=n(3),u=function(e,t,n){var c,m,f,p=e&u.F,l=e&u.G,y=e&u.S,h=e&u.P,v=e&u.B,g=e&u.W,F=l?o:o[t]||(o[t]={}),d=F.prototype,x=l?i:y?i[t]:(i[t]||{}).prototype;l&&(n=t);for(c in n)(m=!p&&x&&void 0!==x[c])&&s(F,c)||(f=m?x[c]:n[c],F[c]=l&&"function"!=typeof x[c]?n[c]:v&&m?a(f,i):g&&x[c]==f?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):h&&"function"==typeof f?a(Function.call,f):f,h&&((F.virtual||(F.virtual={}))[c]=f,e&u.R&&d&&!d[c]&&r(d,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t,n){var i=n(8);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var i=n(32),o=n(22);e.exports=Object.keys||function(e){return i(e,o)}},function(e,t){e.exports=!0},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var i=n(8);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t,n){var i=n(21)("keys"),o=n(15);e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var i=n(4),o=n(0),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:i.version,mode:n(14)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){e.exports={}},function(e,t,n){var i=n(1).f,o=n(3),a=n(7)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,a)&&i(e,a,{configurable:!0,value:t})}},function(e,t,n){t.f=n(7)},function(e,t,n){var i=n(0),o=n(4),a=n(14),r=n(26),s=n(1).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=a?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:r.f(e)})}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var i=n(75),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()},function(e,t,n){e.exports=!n(2)&&!n(9)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(8),o=n(0).document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},function(e,t,n){var i=n(3),o=n(6),a=n(48)(!1),r=n(20)("IE_PROTO");e.exports=function(e,t){var n,s=o(e),u=0,c=[];for(n in s)n!=r&&i(s,n)&&c.push(n);for(;t.length>u;)i(s,n=t[u++])&&(~a(c,n)||c.push(n));return c}},function(e,t,n){var i=n(34);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var i=n(18);e.exports=function(e){return Object(i(e))}},function(e,t,n){"use strict";var i=n(14),o=n(10),a=n(37),r=n(5),s=n(24),u=n(56),c=n(25),m=n(59),f=n(7)("iterator"),p=!([].keys&&"next"in[].keys()),l=function(){return this};e.exports=function(e,t,n,y,h,v,g){u(n,t,y);var F,d,x,k=function(e){if(!p&&e in C)return C[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",R="values"==h,b=!1,C=e.prototype,P=C[f]||C["@@iterator"]||h&&C[h],T=P||k(h),L=h?R?k("entries"):T:void 0,O="Array"==t?C.entries||P:P;if(O&&(x=m(O.call(new e)))!==Object.prototype&&x.next&&(c(x,S,!0),i||"function"==typeof x[f]||r(x,f,l)),R&&P&&"values"!==P.name&&(b=!0,T=function(){return P.call(this)}),i&&!g||!p&&!b&&C[f]||r(C,f,T),s[t]=T,s[S]=l,h)if(F={values:R?T:k("values"),keys:v?T:k("keys"),entries:L},g)for(d in F)d in C||a(C,d,F[d]);else o(o.P+o.F*(p||b),t,F);return F}},function(e,t,n){e.exports=n(5)},function(e,t,n){var i=n(11),o=n(57),a=n(22),r=n(20)("IE_PROTO"),s=function(){},u=function(){var e,t=n(31)("iframe"),i=a.length;for(t.style.display="none",n(58).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;i--;)delete u.prototype[a[i]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=i(e),n=new s,s.prototype=null,n[r]=e):n=u(),void 0===t?n:o(n,t)}},function(e,t,n){var i=n(32),o=n(22).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},function(e,t,n){"use strict";var i=n(41);e.exports=function(e,t,n){return"string"==typeof t&&(n=t,t=void 0),new i(e,t,n)}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(42),a=i(o),r=n(51),s=i(r),u=n(28),c=i(u),m=n(29),f=i(m),p=n(78),l=n(79),y=n(80),h=n(81);e.exports=function(){function e(t,n,i){(0,c.default)(this,e),"string"==typeof n&&(i=n,n=void 0),this.stockCode=t.stockCode,this.free="free"in t&&!!t.free,this.market=t.market||1,this.price=t.price||0,this.shareNum=t.shareNum||1,this.instrument=t.instrument&&1===t.instrument?1:0,this.cost=this.price*this.shareNum,this.config=1!==this.market?h(i):y(i),this.config="object"===(void 0===n?"undefined":(0,s.default)(n))?n:this.config}return(0,f.default)(e,[{key:"getBrokerInfo",value:function(e,t){for(var n={spell:e.spell,name:e.name,packageList:[]},i=0;i<t.length;i++)n.packageList.push({broker:t[i],totalCost:this.getTotalCost(t[i]),totalCostInfo:this.getTotalCostInfo(t[i]),totalCostSource:this.getTotalCostSource(t[i])});return(0,a.default)({},n)}},{key:"getTotalCost",value:function(e){return 1!==this.market?e.getTotalCost(this.cost,this.shareNum,this.price,this.free):e.getTotalCost(this.cost,this.free,this.instrument)}},{key:"getTotalCostInfo",value:function(e){return 1!==this.market?e.getTotalCostInfo(this.cost,this.shareNum,this.price,this.free):e.getTotalCostInfo(this.cost,this.free,this.instrument)}},{key:"getTotalCostSource",value:function(e){return 1!==this.market?e.getTotalCostSource(this.cost,this.shareNum,this.price,this.free):e.getTotalCostSource(this.cost,this.free,this.instrument)}},{key:"getBrokerConfigBySpell",value:function(e){for(var t=0;t<this.config.length;t++)if(e&&e.toUpperCase()===this.config[t].spell.toUpperCase())return this.config[t];return this.config}},{key:"getBrokerList",value:function(e){for(var t=[],n=0;n<e.packageList.length;n++){var i=(0,a.default)({},e.packageList[n],{spell:e.spell,name:e.name});t.push(this.createBroker(i))}return t}},{key:"createBroker",value:function(e){return 1!==this.market?new l(e):new p(e)}},{key:"brokers",get:function(){for(var e=this.getBrokerConfigBySpell(),t=[],n=0;n<e.length;n++)t.push(this.getBrokerInfo(e[n],this.getBrokerList(e[n])));return t}},{key:"futu",get:function(){var e=this.getBrokerConfigBySpell("FUTU");return this.getBrokerInfo(e,this.getBrokerList(e))}}]),e}()},function(e,t,n){e.exports={default:n(43),__esModule:!0}},function(e,t,n){n(44),e.exports=n(4).Object.assign},function(e,t,n){var i=n(10);i(i.S+i.F,"Object",{assign:n(47)})},function(e,t,n){var i=n(46);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,o){return e.call(t,n,i,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var i=n(13),o=n(23),a=n(16),r=n(35),s=n(33),u=Object.assign;e.exports=!u||n(9)(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=i})?function(e,t){for(var n=r(e),u=arguments.length,c=1,m=o.f,f=a.f;u>c;)for(var p,l=s(arguments[c++]),y=m?i(l).concat(m(l)):i(l),h=y.length,v=0;h>v;)f.call(l,p=y[v++])&&(n[p]=l[p]);return n}:u},function(e,t,n){var i=n(6),o=n(49),a=n(50);e.exports=function(e){return function(t,n,r){var s,u=i(t),c=o(u.length),m=a(r,c);if(e&&n!=n){for(;c>m;)if((s=u[m++])!=s)return!0}else for(;c>m;m++)if((e||m in u)&&u[m]===n)return e||m||0;return!e&&-1}}},function(e,t,n){var i=n(19),o=Math.min;e.exports=function(e){return e>0?o(i(e),9007199254740991):0}},function(e,t,n){var i=n(19),o=Math.max,a=Math.min;e.exports=function(e,t){return e=i(e),e<0?o(e+t,0):a(e,t)}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(52),a=i(o),r=n(64),s=i(r),u="function"==typeof s.default&&"symbol"==typeof a.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===u(a.default)?function(e){return void 0===e?"undefined":u(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":u(e)}},function(e,t,n){e.exports={default:n(53),__esModule:!0}},function(e,t,n){n(54),n(60),e.exports=n(26).f("iterator")},function(e,t,n){"use strict";var i=n(55)(!0);n(36)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var i=n(19),o=n(18);e.exports=function(e){return function(t,n){var a,r,s=String(o(t)),u=i(n),c=s.length;return u<0||u>=c?e?"":void 0:(a=s.charCodeAt(u),a<55296||a>56319||u+1===c||(r=s.charCodeAt(u+1))<56320||r>57343?e?s.charAt(u):a:e?s.slice(u,u+2):r-56320+(a-55296<<10)+65536)}}},function(e,t,n){"use strict";var i=n(38),o=n(12),a=n(25),r={};n(5)(r,n(7)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=i(r,{next:o(1,n)}),a(e,t+" Iterator")}},function(e,t,n){var i=n(1),o=n(11),a=n(13);e.exports=n(2)?Object.defineProperties:function(e,t){o(e);for(var n,r=a(t),s=r.length,u=0;s>u;)i.f(e,n=r[u++],t[n]);return e}},function(e,t,n){var i=n(0).document;e.exports=i&&i.documentElement},function(e,t,n){var i=n(3),o=n(35),a=n(20)("IE_PROTO"),r=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),i(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?r:null}},function(e,t,n){n(61);for(var i=n(0),o=n(5),a=n(24),r=n(7)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],m=i[c],f=m&&m.prototype;f&&!f[r]&&o(f,r,c),a[c]=a.Array}},function(e,t,n){"use strict";var i=n(62),o=n(63),a=n(24),r=n(6);e.exports=n(36)(Array,"Array",function(e,t){this._t=r(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,n):"values"==t?o(0,e[n]):o(0,[n,e[n]])},"values"),a.Arguments=a.Array,i("keys"),i("values"),i("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(65),__esModule:!0}},function(e,t,n){n(66),n(72),n(73),n(74),e.exports=n(4).Symbol},function(e,t,n){"use strict";var i=n(0),o=n(3),a=n(2),r=n(10),s=n(37),u=n(67).KEY,c=n(9),m=n(21),f=n(25),p=n(15),l=n(7),y=n(26),h=n(27),v=n(68),g=n(69),F=n(11),d=n(8),x=n(6),k=n(17),S=n(12),R=n(38),b=n(70),C=n(71),P=n(1),T=n(13),L=C.f,O=P.f,_=b.f,w=i.Symbol,M=i.JSON,j=M&&M.stringify,A=l("_hidden"),D=l("toPrimitive"),I={}.propertyIsEnumerable,N=m("symbol-registry"),E=m("symbols"),B=m("op-symbols"),G=Object.prototype,U="function"==typeof w,J=i.QObject,V=!J||!J.prototype||!J.prototype.findChild,W=a&&c(function(){return 7!=R(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=L(G,t);i&&delete G[t],O(e,t,n),i&&e!==G&&O(G,t,i)}:O,H=function(e){var t=E[e]=R(w.prototype);return t._k=e,t},z=U&&"symbol"==typeof w.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof w},K=function(e,t,n){return e===G&&K(B,t,n),F(e),t=k(t,!0),F(n),o(E,t)?(n.enumerable?(o(e,A)&&e[A][t]&&(e[A][t]=!1),n=R(n,{enumerable:S(0,!1)})):(o(e,A)||O(e,A,S(1,{})),e[A][t]=!0),W(e,t,n)):O(e,t,n)},q=function(e,t){F(e);for(var n,i=v(t=x(t)),o=0,a=i.length;a>o;)K(e,n=i[o++],t[n]);return e},Y=function(e,t){return void 0===t?R(e):q(R(e),t)},Q=function(e){var t=I.call(this,e=k(e,!0));return!(this===G&&o(E,e)&&!o(B,e))&&(!(t||!o(this,e)||!o(E,e)||o(this,A)&&this[A][e])||t)},X=function(e,t){if(e=x(e),t=k(t,!0),e!==G||!o(E,t)||o(B,t)){var n=L(e,t);return!n||!o(E,t)||o(e,A)&&e[A][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=_(x(e)),i=[],a=0;n.length>a;)o(E,t=n[a++])||t==A||t==u||i.push(t);return i},$=function(e){for(var t,n=e===G,i=_(n?B:x(e)),a=[],r=0;i.length>r;)!o(E,t=i[r++])||n&&!o(G,t)||a.push(E[t]);return a};U||(w=function(){if(this instanceof w)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(n){this===G&&t.call(B,n),o(this,A)&&o(this[A],e)&&(this[A][e]=!1),W(this,e,S(1,n))};return a&&V&&W(G,e,{configurable:!0,set:t}),H(e)},s(w.prototype,"toString",function(){return this._k}),C.f=X,P.f=K,n(39).f=b.f=Z,n(16).f=Q,n(23).f=$,a&&!n(14)&&s(G,"propertyIsEnumerable",Q,!0),y.f=function(e){return H(l(e))}),r(r.G+r.W+r.F*!U,{Symbol:w});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)l(ee[te++]);for(var ne=T(l.store),ie=0;ne.length>ie;)h(ne[ie++]);r(r.S+r.F*!U,"Symbol",{for:function(e){return o(N,e+="")?N[e]:N[e]=w(e)},keyFor:function(e){if(!z(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){V=!0},useSimple:function(){V=!1}}),r(r.S+r.F*!U,"Object",{create:Y,defineProperty:K,defineProperties:q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),M&&r(r.S+r.F*(!U||c(function(){var e=w();return"[null]"!=j([e])||"{}"!=j({a:e})||"{}"!=j(Object(e))})),"JSON",{stringify:function(e){for(var t,n,i=[e],o=1;arguments.length>o;)i.push(arguments[o++]);if(n=t=i[1],(d(t)||void 0!==e)&&!z(e))return g(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!z(t))return t}),i[1]=t,j.apply(M,i)}}),w.prototype[D]||n(5)(w.prototype,D,w.prototype.valueOf),f(w,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},function(e,t,n){var i=n(15)("meta"),o=n(8),a=n(3),r=n(1).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(9)(function(){return u(Object.preventExtensions({}))}),m=function(e){r(e,i,{value:{i:"O"+ ++s,w:{}}})},f=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,i)){if(!u(e))return"F";if(!t)return"E";m(e)}return e[i].i},p=function(e,t){if(!a(e,i)){if(!u(e))return!0;if(!t)return!1;m(e)}return e[i].w},l=function(e){return c&&y.NEED&&u(e)&&!a(e,i)&&m(e),e},y=e.exports={KEY:i,NEED:!1,fastKey:f,getWeak:p,onFreeze:l}},function(e,t,n){var i=n(13),o=n(23),a=n(16);e.exports=function(e){var t=i(e),n=o.f;if(n)for(var r,s=n(e),u=a.f,c=0;s.length>c;)u.call(e,r=s[c++])&&t.push(r);return t}},function(e,t,n){var i=n(34);e.exports=Array.isArray||function(e){return"Array"==i(e)}},function(e,t,n){var i=n(6),o=n(39).f,a={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(e){return r.slice()}};e.exports.f=function(e){return r&&"[object Window]"==a.call(e)?s(e):o(i(e))}},function(e,t,n){var i=n(16),o=n(12),a=n(6),r=n(17),s=n(3),u=n(30),c=Object.getOwnPropertyDescriptor;t.f=n(2)?c:function(e,t){if(e=a(e),t=r(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return o(!i.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(27)("asyncIterator")},function(e,t,n){n(27)("observable")},function(e,t,n){e.exports={default:n(76),__esModule:!0}},function(e,t,n){n(77);var i=n(4).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},function(e,t,n){var i=n(10);i(i.S+i.F*!n(2),"Object",{defineProperty:n(1).f})},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(28),a=i(o),r=n(29),s=i(r);e.exports=function(){function e(t){(0,a.default)(this,e),this.name=t.name||"unkonw",this.spell=t.spell||"unkonw",this.packageId=t.packageId||0,this.packageName=t.packageName||"unkonw",this.commissionRate=t.commissionRate||0,this.minCommission=t.minCommission||0,this.maxCommission=t.maxCommission||1/0,this.maxCommissionRate=t.maxCommissionRate||1/0,this.platformFee=t.platformFee||0,this.payFeeRate=t.payFeeRate||0,this.minPayFee=t.minPayFee||0,this.maxPayFee=t.maxPayFee||1/0,this.tradingSystemFee=t.tradingSystemFee||0,this.stampDutyRate=t.stampDutyRate||0,this.minStampDutyFee=t.minStampDutyFee||0,this.tradeFeeRate=t.tradeFeeRate||0,this.minTradeFee=t.minTradeFee||0,this.transactionLevyRate=t.transactionLevyRate||0,this.minTransactionLevyFee=t.minTransactionLevyFee||0}return(0,s.default)(e,[{key:"getCommission",value:function(e,t){var n=Math.max(this.commissionRate*e,this.minCommission);return t?0:Math.max(this.minCommission,Math.min(this.maxCommission,this.maxCommissionRate*e,n))}},{key:"getPlatform",value:function(){return this.platformFee}},{key:"getPayFee",value:function(e){var t=Math.max(this.payFeeRate*e,this.minPayFee);return Math.min(this.maxPayFee,t)}},{key:"getTradingSystem",value:function(){return this.tradingSystemFee}},{key:"getStampDuty",value:function(e,t){return t?Math.max(Math.ceil(this.stampDutyRate*e),Math.ceil(this.minStampDutyFee)):0}},{key:"getTradeFee",value:function(e){return Math.max(this.tradeFeeRate*e,this.minTradeFee)}},{key:"getTransactionLevy",value:function(e){return Math.max(this.transactionLevyRate*e,this.minTransactionLevyFee)}},{key:"getTotalCostInfo",value:function(e,t,n){return{commission:+this.getCommission(e,t).toFixed(2),platform:+this.getPlatform().toFixed(2),payFee:+this.getPayFee(e).toFixed(2),tradingSystem:+this.getTradingSystem().toFixed(2),stampDuty:+this.getStampDuty(e,n).toFixed(2),tradeFee:+this.getTradeFee(e).toFixed(2),transactionLevy:+this.getTransactionLevy(e).toFixed(2)}}},{key:"getTotalCostSource",value:function(e,t,n){return{commission:this.getCommission(e,t),platform:this.getPlatform(),payFee:this.getPayFee(e),tradingSystem:this.getTradingSystem(),stampDuty:this.getStampDuty(e,n),tradeFee:this.getTradeFee(e),transactionLevy:this.getTransactionLevy(e)}}},{key:"getTotalCost",value:function(e,t,n){var i=this.getTotalCostInfo(e,t,n),o=0;for(var a in i)o+=+i[a].toFixed(2);return+o.toFixed(2)}}]),e}()},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(28),a=i(o),r=n(29),s=i(r);e.exports=function(){function e(t){(0,a.default)(this,e),this.name=t.name||"unkonw",this.spell=t.spell||"unkonw",this.packageId=t.packageId||0,this.packageName=t.packageName||"unkonw",this.minStockPrice=t.minStockPrice||0,this.paddingCommission=t.paddingCommission||0,this.commissionRate=t.commissionRate||0,this.minCommission=t.minCommission||0,this.maxCommission=t.maxCommission||1/0,this.maxCommissionRate=t.maxCommissionRate||1/0,this.commissionNeedPrice=t.commissionNeedPrice||!1,this.platformFee=t.platformFee||0,this.platformFeeRate=t.platformFeeRate||0,this.minPlatformFee=t.minPlatformFee||0,this.maxPlatformFeeRate=t.maxPlatformFeeRate||1/0,this.payFeeRate=t.payFeeRate||0,this.minPayFee=t.minPayFee||0,this.maxPayFee=t.maxPayFee||1/0,this.secFeeRate=t.secFeeRate||0,this.minSecFee=t.minSecFee||0,this.maxSecFee=t.maxSecFee||1/0,this.activityFeeRate=t.activityFeeRate||0,this.minActivityFee=t.minActivityFee||0,this.maxActivityFee=t.maxActivityFee||1/0}return(0,s.default)(e,[{key:"getCommission",value:function(e,t,n,i){var o=Math.max(this.commissionRate*t*(this.commissionNeedPrice?n:1),this.minCommission);return this.minStockPrice>0&&n<this.minStockPrice&&(o+=t*this.paddingCommission),i?0:Math.max(this.minCommission,Math.min(this.maxCommission,this.maxCommissionRate*e,o))}},{key:"getPlatform",value:function(e,t){var n=Math.max(this.platformFee,this.platformFeeRate*t,this.minPlatformFee);return Math.max(this.minPlatformFee,Math.min(this.maxPlatformFeeRate*e,n))}},{key:"getPayFee",value:function(e,t){var n=Math.max(this.payFeeRate*t,this.minPayFee);return Math.min(this.maxPayFee,n)}},{key:"getSecFee",value:function(e){var t=Math.max(this.secFeeRate*e,this.minSecFee);return Math.min(this.maxSecFee,t)}},{key:"getActivityFee",value:function(e){var t=Math.max(this.activityFeeRate*e,this.minActivityFee);return Math.min(this.maxActivityFee,t)}},{key:"getTotalCostInfo",value:function(e,t,n,i){return{commission:+this.getCommission(e,t,n,i).toFixed(2),platform:+this.getPlatform(e,t).toFixed(2),payFee:+this.getPayFee(e,t).toFixed(2),secFee:+this.getSecFee(e).toFixed(2),activityFee:+this.getActivityFee(t).toFixed(2)}}},{key:"getTotalCostSource",value:function(e,t,n,i){return{commission:this.getCommission(e,t,n,i),platform:this.getPlatform(e,t),payFee:this.getPayFee(e,t),secFee:this.getSecFee(e),activityFee:this.getActivityFee(t)}}},{key:"getTotalCost",value:function(e,t,n,i){var o=this.getTotalCostInfo(e,t,n,i);return+o.commission.toFixed(2)+ +o.payFee.toFixed(2)}}]),e}()},function(e,t,n){"use strict";e.exports=function(e){var t={default:{futu:{name:"富途证券",packageList:["旧套餐","套餐一","套餐二"]},boci:{name:"中银国际"},guotaijunan:{name:"国泰君安"},cms:{name:"招商证券"},guoxin:{name:"国信证券"},icbc:{name:"工银亚洲"}},hk:{futu:{name:"富途證券",packageList:["舊套餐","套餐一","套餐二"]},boci:{name:"中銀國際"},guotaijunan:{name:"國泰君安"},cms:{name:"招商證券"},guoxin:{name:"國信證券"},icbc:{name:"工銀亞洲"}},us:{futu:{name:"FUTU",packageList:["Old Package","Package One","Package Two"]},boci:{name:"BOCI"},guotaijunan:{name:"GuotaiJunan"},cms:{name:"CMS"},guoxin:{name:"Guoxin"},icbc:{name:"ICBC"}}},n=e?t[e]:t.default;return[{name:n.futu.name,spell:"FUTU",packageList:[{packageId:0,packageName:n.futu.packageList[0],commissionRate:5e-4,minCommission:50,platformFee:0,payFeeRate:5e-5,minPayFee:5.5,maxPayFee:200,tradingSystemFee:0,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,transactionLevyRate:27e-6},{packageId:1,packageName:n.futu.packageList[1],commissionRate:3e-4,minCommission:3,platformFee:15,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,tradingSystemFee:.5,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01},{packageId:2,packageName:n.futu.packageList[2],commissionRate:3e-4,minCommission:3,platformFee:30,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,tradingSystemFee:.5,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.boci.name,spell:"BOCI",packageList:[{commissionRate:.002,minCommission:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.guotaijunan.name,spell:"GuotaiJunan",packageList:[{commissionRate:.0018,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.cms.name,spell:"CMS",packageList:[{commissionRate:.00225,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.guoxin.name,spell:"Guoxin",packageList:[{commissionRate:.0025,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.icbc.name,spell:"ICBC",packageList:[{commissionRate:.0015,minCommission:88,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]}]}},function(e,t,n){"use strict";e.exports=function(e){var t={default:{futu:{name:"富途证券",packageList:["旧套餐","套餐一","套餐二"]},boci:{name:"中银国际"},guotaijunan:{name:"国泰君安"},fs:{name:"第一证券"},td:{name:"TD(含史考特)"},tiger:{name:"老虎证券"}},hk:{futu:{name:"富途證券",packageList:["舊套餐","套餐一","套餐二"]},boci:{name:"中銀國際"},guotaijunan:{name:"國泰君安"},fs:{name:"第一證券"},td:{name:"TD(含史考特)"},tiger:{name:"老虎證券"}},us:{futu:{name:"FUTU",packageList:["Old Package","Package One","Package Two"]},boci:{name:"BOCI"},guotaijunan:{name:"GuotaiJunan"},fs:{name:"FS"},td:{name:"TD"},tiger:{name:"Tiger"}}},n=e?t[e]:t.default;return[{name:n.futu.name,spell:"FUTU",packageList:[{packageId:0,packageName:n.futu.packageList[0],commissionRate:.01,minCommission:1.99,maxCommissionRate:.005,payFeeRate:.003,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59},{packageId:1,packageName:n.futu.packageList[1],commissionRate:.0049,minCommission:.99,maxCommissionRate:.005,payFeeRate:.003,platformFeeRate:.005,minPlatformFee:1,maxPlatformFeeRate:.005,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59},{packageId:2,packageName:n.futu.packageList[2],commissionRate:0,minCommission:5,payFeeRate:.003,minPayFee:3,platformFee:0,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.boci.name,spell:"BOCI",packageList:[{commissionRate:.01,minCommission:25,commissionNeedPrice:!0,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.guotaijunan.name,spell:"GuotaiJunan",packageList:[{commissionRate:.0015,minCommission:15,commissionNeedPrice:!0,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.fs.name,spell:"FS",packageList:[{minCommission:2.95,minStockPrice:1,paddingCommission:.005,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.td.name,spell:"TD",packageList:[{minCommission:6.95,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.tiger.name,spell:"Tiger",packageList:[{commissionRate:.01,minCommission:2.99,maxCommissionRate:.01,payFeeRate:.003,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]}]}}])});