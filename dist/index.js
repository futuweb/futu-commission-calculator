!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.calculator=t():e.calculator=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=40)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var i=n(10),o=n(30),r=n(16),a=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(i(e),t=r(t,!0),i(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var i=n(1),o=n(12);e.exports=n(2)?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var i=n(33),o=n(17);e.exports=function(e){return i(o(e))}},function(e,t,n){var i=n(20)("wks"),o=n(14),r=n(0).Symbol,a="function"==typeof r;(e.exports=function(e){return i[e]||(i[e]=a&&r[e]||(a?r:o)("Symbol."+e))}).store=i},function(e,t){var n=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var i=n(0),o=n(7),r=n(45),a=n(4),s=function(e,t,n){var u,c,f,m=e&s.F,p=e&s.G,l=e&s.S,y=e&s.P,h=e&s.B,v=e&s.W,g=p?o:o[t]||(o[t]={}),F=g.prototype,d=p?i:l?i[t]:(i[t]||{}).prototype;p&&(n=t);for(u in n)(c=!m&&d&&void 0!==d[u])&&u in g||(f=c?d[u]:n[u],g[u]=p&&"function"!=typeof d[u]?n[u]:h&&c?r(f,i):v&&d[u]==f?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):y&&"function"==typeof f?r(Function.call,f):f,y&&((g.virtual||(g.virtual={}))[u]=f,e&s.R&&F&&!F[u]&&a(F,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){var i=n(11);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var i=n(32),o=n(21);e.exports=Object.keys||function(e){return i(e,o)}},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var i=n(11);e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t,n){var i=n(20)("keys"),o=n(14);e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var i=n(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){e.exports=!0},function(e,t){e.exports={}},function(e,t,n){var i=n(1).f,o=n(3),r=n(6)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,r)&&i(e,r,{configurable:!0,value:t})}},function(e,t,n){t.f=n(6)},function(e,t,n){var i=n(0),o=n(7),r=n(23),a=n(26),s=n(1).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=r?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var i=n(75),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()},function(e,t,n){e.exports=!n(2)&&!n(8)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(11),o=n(0).document,r=i(o)&&i(o.createElement);e.exports=function(e){return r?o.createElement(e):{}}},function(e,t,n){var i=n(3),o=n(5),r=n(48)(!1),a=n(19)("IE_PROTO");e.exports=function(e,t){var n,s=o(e),u=0,c=[];for(n in s)n!=a&&i(s,n)&&c.push(n);for(;t.length>u;)i(s,n=t[u++])&&(~r(c,n)||c.push(n));return c}},function(e,t,n){var i=n(34);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var i=n(17);e.exports=function(e){return Object(i(e))}},function(e,t,n){"use strict";var i=n(23),o=n(9),r=n(37),a=n(4),s=n(3),u=n(24),c=n(56),f=n(25),m=n(59),p=n(6)("iterator"),l=!([].keys&&"next"in[].keys()),y=function(){return this};e.exports=function(e,t,n,h,v,g,F){c(n,t,h);var d,x,k,R=function(e){if(!l&&e in P)return P[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",b="values"==v,C=!1,P=e.prototype,L=P[p]||P["@@iterator"]||v&&P[v],T=L||R(v),O=v?b?R("entries"):T:void 0,_="Array"==t?P.entries||L:L;if(_&&(k=m(_.call(new e)))!==Object.prototype&&k.next&&(f(k,S,!0),i||s(k,p)||a(k,p,y)),b&&L&&"values"!==L.name&&(C=!0,T=function(){return L.call(this)}),i&&!F||!l&&!C&&P[p]||a(P,p,T),u[t]=T,u[S]=y,v)if(d={values:b?T:R("values"),keys:g?T:R("keys"),entries:O},F)for(x in d)x in P||r(P,x,d[x]);else o(o.P+o.F*(l||C),t,d);return d}},function(e,t,n){e.exports=n(4)},function(e,t,n){var i=n(10),o=n(57),r=n(21),a=n(19)("IE_PROTO"),s=function(){},u=function(){var e,t=n(31)("iframe"),i=r.length;for(t.style.display="none",n(58).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;i--;)delete u.prototype[r[i]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=i(e),n=new s,s.prototype=null,n[a]=e):n=u(),void 0===t?n:o(n,t)}},function(e,t,n){var i=n(32),o=n(21).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},function(e,t,n){"use strict";var i=n(41);e.exports=function(e,t,n){return"string"==typeof t&&(n=t,t=void 0),new i(e,t,n)}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(42),r=i(o),a=n(51),s=i(a),u=n(28),c=i(u),f=n(29),m=i(f),p=n(78),l=n(79),y=n(80),h=n(81);e.exports=function(){function e(t,n,i){(0,c.default)(this,e),"string"==typeof n&&(i=n,n=void 0),this.stockCode=t.stockCode,this.free="free"in t&&!!t.free,this.market=t.market||1,this.price=t.price||0,this.shareNum=t.shareNum||1,this.instrument=t.instrument&&1===t.instrument?1:0,this.cost=this.price*this.shareNum,this.config=1!==this.market?h(i):y(i),this.config="object"===(void 0===n?"undefined":(0,s.default)(n))?n:this.config}return(0,m.default)(e,[{key:"getBrokerInfo",value:function(e,t){for(var n={spell:e.spell,name:e.name,packageList:[]},i=0;i<t.length;i++)n.packageList.push({broker:t[i],totalCost:this.getTotalCost(t[i]),totalCostInfo:this.getTotalCostInfo(t[i])});return(0,r.default)({},n)}},{key:"getTotalCost",value:function(e){return 1!==this.market?e.getTotalCost(this.cost,this.shareNum,this.price,this.free):e.getTotalCost(this.cost,this.free,this.instrument)}},{key:"getTotalCostInfo",value:function(e){return 1!==this.market?e.getTotalCostInfo(this.cost,this.shareNum,this.price,this.free):e.getTotalCostInfo(this.cost,this.free,this.instrument)}},{key:"getBrokerConfigBySpell",value:function(e){for(var t=0;t<this.config.length;t++)if(e&&e.toUpperCase()===this.config[t].spell.toUpperCase())return this.config[t];return this.config}},{key:"getBrokerList",value:function(e){for(var t=[],n=0;n<e.packageList.length;n++){var i=(0,r.default)({},e.packageList[n],{spell:e.spell,name:e.name});t.push(this.createBroker(i))}return t}},{key:"createBroker",value:function(e){return 1!==this.market?new l(e):new p(e)}},{key:"brokers",get:function(){for(var e=this.getBrokerConfigBySpell(),t=[],n=0;n<e.length;n++)t.push(this.getBrokerInfo(e[n],this.getBrokerList(e[n])));return t}},{key:"futu",get:function(){var e=this.getBrokerConfigBySpell("FUTU");return this.getBrokerInfo(e,this.getBrokerList(e))}}]),e}()},function(e,t,n){e.exports={default:n(43),__esModule:!0}},function(e,t,n){n(44),e.exports=n(7).Object.assign},function(e,t,n){var i=n(9);i(i.S+i.F,"Object",{assign:n(47)})},function(e,t,n){var i=n(46);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,o){return e.call(t,n,i,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var i=n(13),o=n(22),r=n(15),a=n(35),s=n(33),u=Object.assign;e.exports=!u||n(8)(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=i})?function(e,t){for(var n=a(e),u=arguments.length,c=1,f=o.f,m=r.f;u>c;)for(var p,l=s(arguments[c++]),y=f?i(l).concat(f(l)):i(l),h=y.length,v=0;h>v;)m.call(l,p=y[v++])&&(n[p]=l[p]);return n}:u},function(e,t,n){var i=n(5),o=n(49),r=n(50);e.exports=function(e){return function(t,n,a){var s,u=i(t),c=o(u.length),f=r(a,c);if(e&&n!=n){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===n)return e||f||0;return!e&&-1}}},function(e,t,n){var i=n(18),o=Math.min;e.exports=function(e){return e>0?o(i(e),9007199254740991):0}},function(e,t,n){var i=n(18),o=Math.max,r=Math.min;e.exports=function(e,t){return e=i(e),e<0?o(e+t,0):r(e,t)}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(52),r=i(o),a=n(64),s=i(a),u="function"==typeof s.default&&"symbol"==typeof r.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===u(r.default)?function(e){return void 0===e?"undefined":u(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":u(e)}},function(e,t,n){e.exports={default:n(53),__esModule:!0}},function(e,t,n){n(54),n(60),e.exports=n(26).f("iterator")},function(e,t,n){"use strict";var i=n(55)(!0);n(36)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var i=n(18),o=n(17);e.exports=function(e){return function(t,n){var r,a,s=String(o(t)),u=i(n),c=s.length;return u<0||u>=c?e?"":void 0:(r=s.charCodeAt(u),r<55296||r>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):r:e?s.slice(u,u+2):a-56320+(r-55296<<10)+65536)}}},function(e,t,n){"use strict";var i=n(38),o=n(12),r=n(25),a={};n(4)(a,n(6)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=i(a,{next:o(1,n)}),r(e,t+" Iterator")}},function(e,t,n){var i=n(1),o=n(10),r=n(13);e.exports=n(2)?Object.defineProperties:function(e,t){o(e);for(var n,a=r(t),s=a.length,u=0;s>u;)i.f(e,n=a[u++],t[n]);return e}},function(e,t,n){var i=n(0).document;e.exports=i&&i.documentElement},function(e,t,n){var i=n(3),o=n(35),r=n(19)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),i(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){n(61);for(var i=n(0),o=n(4),r=n(24),a=n(6)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],f=i[c],m=f&&f.prototype;m&&!m[a]&&o(m,a,c),r[c]=r.Array}},function(e,t,n){"use strict";var i=n(62),o=n(63),r=n(24),a=n(5);e.exports=n(36)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,n):"values"==t?o(0,e[n]):o(0,[n,e[n]])},"values"),r.Arguments=r.Array,i("keys"),i("values"),i("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(65),__esModule:!0}},function(e,t,n){n(66),n(72),n(73),n(74),e.exports=n(7).Symbol},function(e,t,n){"use strict";var i=n(0),o=n(3),r=n(2),a=n(9),s=n(37),u=n(67).KEY,c=n(8),f=n(20),m=n(25),p=n(14),l=n(6),y=n(26),h=n(27),v=n(68),g=n(69),F=n(10),d=n(5),x=n(16),k=n(12),R=n(38),S=n(70),b=n(71),C=n(1),P=n(13),L=b.f,T=C.f,O=S.f,_=i.Symbol,w=i.JSON,j=w&&w.stringify,M=l("_hidden"),A=l("toPrimitive"),I={}.propertyIsEnumerable,D=f("symbol-registry"),E=f("symbols"),N=f("op-symbols"),B=Object.prototype,G="function"==typeof _,U=i.QObject,V=!U||!U.prototype||!U.prototype.findChild,J=r&&c(function(){return 7!=R(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=L(B,t);i&&delete B[t],T(e,t,n),i&&e!==B&&T(B,t,i)}:T,W=function(e){var t=E[e]=R(_.prototype);return t._k=e,t},H=G&&"symbol"==typeof _.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof _},K=function(e,t,n){return e===B&&K(N,t,n),F(e),t=x(t,!0),F(n),o(E,t)?(n.enumerable?(o(e,M)&&e[M][t]&&(e[M][t]=!1),n=R(n,{enumerable:k(0,!1)})):(o(e,M)||T(e,M,k(1,{})),e[M][t]=!0),J(e,t,n)):T(e,t,n)},q=function(e,t){F(e);for(var n,i=v(t=d(t)),o=0,r=i.length;r>o;)K(e,n=i[o++],t[n]);return e},z=function(e,t){return void 0===t?R(e):q(R(e),t)},Y=function(e){var t=I.call(this,e=x(e,!0));return!(this===B&&o(E,e)&&!o(N,e))&&(!(t||!o(this,e)||!o(E,e)||o(this,M)&&this[M][e])||t)},Q=function(e,t){if(e=d(e),t=x(t,!0),e!==B||!o(E,t)||o(N,t)){var n=L(e,t);return!n||!o(E,t)||o(e,M)&&e[M][t]||(n.enumerable=!0),n}},X=function(e){for(var t,n=O(d(e)),i=[],r=0;n.length>r;)o(E,t=n[r++])||t==M||t==u||i.push(t);return i},Z=function(e){for(var t,n=e===B,i=O(n?N:d(e)),r=[],a=0;i.length>a;)!o(E,t=i[a++])||n&&!o(B,t)||r.push(E[t]);return r};G||(_=function(){if(this instanceof _)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(n){this===B&&t.call(N,n),o(this,M)&&o(this[M],e)&&(this[M][e]=!1),J(this,e,k(1,n))};return r&&V&&J(B,e,{configurable:!0,set:t}),W(e)},s(_.prototype,"toString",function(){return this._k}),b.f=Q,C.f=K,n(39).f=S.f=X,n(15).f=Y,n(22).f=Z,r&&!n(23)&&s(B,"propertyIsEnumerable",Y,!0),y.f=function(e){return W(l(e))}),a(a.G+a.W+a.F*!G,{Symbol:_});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)l($[ee++]);for(var te=P(l.store),ne=0;te.length>ne;)h(te[ne++]);a(a.S+a.F*!G,"Symbol",{for:function(e){return o(D,e+="")?D[e]:D[e]=_(e)},keyFor:function(e){if(!H(e))throw TypeError(e+" is not a symbol!");for(var t in D)if(D[t]===e)return t},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!G,"Object",{create:z,defineProperty:K,defineProperties:q,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),w&&a(a.S+a.F*(!G||c(function(){var e=_();return"[null]"!=j([e])||"{}"!=j({a:e})||"{}"!=j(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!H(e)){for(var t,n,i=[e],o=1;arguments.length>o;)i.push(arguments[o++]);return t=i[1],"function"==typeof t&&(n=t),!n&&g(t)||(t=function(e,t){if(n&&(t=n.call(this,e,t)),!H(t))return t}),i[1]=t,j.apply(w,i)}}}),_.prototype[A]||n(4)(_.prototype,A,_.prototype.valueOf),m(_,"Symbol"),m(Math,"Math",!0),m(i.JSON,"JSON",!0)},function(e,t,n){var i=n(14)("meta"),o=n(11),r=n(3),a=n(1).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(8)(function(){return u(Object.preventExtensions({}))}),f=function(e){a(e,i,{value:{i:"O"+ ++s,w:{}}})},m=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!r(e,i)){if(!u(e))return"F";if(!t)return"E";f(e)}return e[i].i},p=function(e,t){if(!r(e,i)){if(!u(e))return!0;if(!t)return!1;f(e)}return e[i].w},l=function(e){return c&&y.NEED&&u(e)&&!r(e,i)&&f(e),e},y=e.exports={KEY:i,NEED:!1,fastKey:m,getWeak:p,onFreeze:l}},function(e,t,n){var i=n(13),o=n(22),r=n(15);e.exports=function(e){var t=i(e),n=o.f;if(n)for(var a,s=n(e),u=r.f,c=0;s.length>c;)u.call(e,a=s[c++])&&t.push(a);return t}},function(e,t,n){var i=n(34);e.exports=Array.isArray||function(e){return"Array"==i(e)}},function(e,t,n){var i=n(5),o=n(39).f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==r.call(e)?s(e):o(i(e))}},function(e,t,n){var i=n(15),o=n(12),r=n(5),a=n(16),s=n(3),u=n(30),c=Object.getOwnPropertyDescriptor;t.f=n(2)?c:function(e,t){if(e=r(e),t=a(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return o(!i.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(27)("asyncIterator")},function(e,t,n){n(27)("observable")},function(e,t,n){e.exports={default:n(76),__esModule:!0}},function(e,t,n){n(77);var i=n(7).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},function(e,t,n){var i=n(9);i(i.S+i.F*!n(2),"Object",{defineProperty:n(1).f})},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(28),r=i(o),a=n(29),s=i(a);e.exports=function(){function e(t){(0,r.default)(this,e),this.name=t.name||"unkown",this.spell=t.spell||"unkown",this.packageId=t.packageId||0,this.packageName=t.packageName||"unkown",this.commissionRate=t.commissionRate||0,this.minCommission=t.minCommission||0,this.maxCommission=t.maxCommission||1/0,this.maxCommissionRate=t.maxCommissionRate||1/0,this.platformFee=t.platformFee||0,this.payFeeRate=t.payFeeRate||0,this.minPayFee=t.minPayFee||0,this.maxPayFee=t.maxPayFee||1/0,this.tradingSystemFee=t.tradingSystemFee||0,this.stampDutyRate=t.stampDutyRate||0,this.minStampDutyFee=t.minStampDutyFee||0,this.tradeFeeRate=t.tradeFeeRate||0,this.minTradeFee=t.minTradeFee||0,this.transactionLevyRate=t.transactionLevyRate||0,this.minTransactionLevyFee=t.minTransactionLevyFee||0}return(0,s.default)(e,[{key:"getCommission",value:function(e,t){var n=Math.max(this.commissionRate*e,this.minCommission);return t?0:Math.min(this.maxCommission,this.maxCommissionRate*e,n)}},{key:"getPlatform",value:function(){return this.platformFee}},{key:"getPayFee",value:function(e){var t=Math.max(this.payFeeRate*e,this.minPayFee);return Math.min(this.maxPayFee,t)}},{key:"getTradingSystem",value:function(){return this.tradingSystemFee}},{key:"getStampDuty",value:function(e,t){return t?Math.max(Math.ceil(this.stampDutyRate*e),Math.ceil(this.minStampDutyFee)):0}},{key:"getTradeFee",value:function(e){return Math.max(this.tradeFeeRate*e,this.minTradeFee)}},{key:"getTransactionLevy",value:function(e){return Math.max(this.transactionLevyRate*e,this.minTransactionLevyFee)}},{key:"getTotalCostInfo",value:function(e,t,n){return{commission:this.getCommission(e,t),platform:this.getPlatform(),payFee:this.getPayFee(e),tradingSystem:this.getTradingSystem(),stampDuty:this.getStampDuty(e,n),tradeFee:this.getTradeFee(e),transactionLevy:this.getTransactionLevy(e)}}},{key:"getTotalCost",value:function(e,t,n){var i=this.getTotalCostInfo(e,t,n),o=0;for(var r in i)o+=+i[r].toFixed(2);return+o.toFixed(2)}}]),e}()},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(28),r=i(o),a=n(29),s=i(a);e.exports=function(){function e(t){(0,r.default)(this,e),this.name=t.name||"unkown",this.spell=t.spell||"unkown",this.packageId=t.packageId||0,this.packageName=t.packageName||"unkown",this.minStockPrice=t.minStockPrice||0,this.paddingCommission=t.paddingCommission||0,this.commissionRate=t.commissionRate||0,this.minCommission=t.minCommission||0,this.maxCommission=t.maxCommission||1/0,this.maxCommissionRate=t.maxCommissionRate||1/0,this.platformFee=t.platformFee||0,this.platformFeeRate=t.platformFeeRate||0,this.minPlatformFee=t.minPlatformFee||0,this.maxPlatformFeeRate=t.maxPlatformFeeRate||1/0,this.payFeeRate=t.payFeeRate||0,this.minPayFee=t.minPayFee||0,this.maxPayFee=t.maxPayFee||1/0,this.secFeeRate=t.secFeeRate||0,this.minSecFee=t.minSecFee||0,this.maxSecFee=t.maxSecFee||1/0,this.activityFeeRate=t.activityFeeRate||0,this.minActivityFee=t.minActivityFee||0,this.maxActivityFee=t.maxActivityFee||1/0}return(0,s.default)(e,[{key:"getCommission",value:function(e,t,n,i){var o=Math.max(this.commissionRate*t,this.minCommission);return this.minStockPrice>0&&n<this.minStockPrice&&(o+=t*this.paddingCommission),i?0:Math.min(this.maxCommission,this.maxCommissionRate*e,o)}},{key:"getPlatform",value:function(e,t){var n=Math.max(this.platformFee,this.platformFeeRate*t,this.minPlatformFee);return Math.min(this.maxPlatformFeeRate*e,n)}},{key:"getPayFee",value:function(e,t){var n=Math.max(this.payFeeRate*t,this.minPayFee);return Math.min(this.maxPayFee,n)}},{key:"getSecFee",value:function(e){var t=Math.max(this.secFeeRate*e,this.minSecFee);return Math.min(this.maxSecFee,t)}},{key:"getActivityFee",value:function(e){var t=Math.max(this.activityFeeRate*e,this.minActivityFee);return Math.min(this.maxActivityFee,t)}},{key:"getTotalCostInfo",value:function(e,t,n,i){return{commission:this.getCommission(e,t,n,i),platform:this.getPlatform(e,t),payFee:this.getPayFee(e,t),secFee:this.getSecFee(e),activityFee:this.getActivityFee(t)}}},{key:"getTotalCost",value:function(e,t,n,i){var o=this.getTotalCostInfo(e,t,n,i);return+o.commission.toFixed(2)+ +o.payFee.toFixed(2)}}]),e}()},function(e,t,n){"use strict";e.exports=function(e){var t={default:{futu:{name:"富途证券",packageList:["旧套餐","套餐一","套餐二"]},boci:{name:"中银国际"},guotaijunan:{name:"国泰君安"},cms:{name:"招商证券"},guoxin:{name:"国信证券"},icbc:{name:"工银亚洲"}},hk:{futu:{name:"富途證券",packageList:["舊套餐","套餐一","套餐二"]},boci:{name:"中銀國際"},guotaijunan:{name:"國泰君安"},cms:{name:"招商證券"},guoxin:{name:"國信證券"},icbc:{name:"工銀亞洲"}}},n=e?t[e]:t.default;return[{name:n.futu.name,spell:"FUTU",packageList:[{packageId:0,packageName:n.futu.packageList[0],commissionRate:5e-4,minCommission:50,platformFee:0,payFeeRate:5e-5,minPayFee:5.5,maxPayFee:200,tradingSystemFee:0,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,transactionLevyRate:27e-6},{packageId:1,packageName:n.futu.packageList[1],commissionRate:3e-4,minCommission:3,platformFee:15,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,tradingSystemFee:.5,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01},{packageId:2,packageName:n.futu.packageList[2],commissionRate:3e-4,minCommission:3,platformFee:30,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,tradingSystemFee:.5,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.boci.name,spell:"BOCI",packageList:[{commissionRate:.002,minCommission:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.guotaijunan.name,spell:"GuotaiJunan",packageList:[{commissionRate:.0018,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.cms.name,spell:"CMS",packageList:[{commissionRate:.00225,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.guoxin.name,spell:"Guoxin",packageList:[{commissionRate:.0025,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:n.icbc.name,spell:"ICBC",packageList:[{commissionRate:.0015,minCommission:88,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]}]}},function(e,t,n){"use strict";e.exports=function(e){var t={default:{futu:{name:"富途证券",packageList:["旧套餐","套餐一","套餐二"]},boci:{name:"中银国际"},guotaijunan:{name:"国泰君安"},fs:{name:"第一证券"},scott:{name:"史考特"},tiger:{name:"老虎证券"}},hk:{futu:{name:"富途證券",packageList:["舊套餐","套餐一","套餐二"]},boci:{name:"中銀國際"},guotaijunan:{name:"國泰君安"},fs:{name:"第一證券"},scott:{name:"史考特"},tiger:{name:"老虎證券"}}},n=e?t[e]:t.default;return[{name:n.futu.name,spell:"FUTU",packageList:[{packageId:0,packageName:n.futu.packageList[0],commissionRate:.01,minCommission:1.99,maxCommissionRate:.005,payFeeRate:.003,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59},{packageId:1,packageName:n.futu.packageList[1],commissionRate:.0049,minCommission:.99,maxCommissionRate:.005,payFeeRate:.003,platformFeeRate:.005,minPlatformFee:1,maxPlatformFeeRate:.005,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59},{packageId:2,packageName:n.futu.packageList[2],commissionRate:0,minCommission:5,payFeeRate:.003,minPayFee:3,platformFee:0,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.boci.name,spell:"BOCI",packageList:[{commissionRate:.0012,minCommission:20,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.guotaijunan.name,spell:"GuotaiJunan",packageList:[{commissionRate:.0012,minCommission:20,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.fs.name,spell:"FS",packageList:[{minCommission:2.95,minStockPrice:1,paddingCommission:.005,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.scott.name,spell:"Scott",packageList:[{minCommission:6.95,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:n.tiger.name,spell:"Tiger",packageList:[{commissionRate:.01,minCommission:2.99,maxCommissionRate:.01,payFeeRate:.003,secFeeRate:231e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]}]}}])});