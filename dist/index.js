!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.calculator=t():e.calculator=t()}(window,function(){return i={},a.m=n=[function(e,t){e=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(e,t){e=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(e,t,n){var i=n(12),a=n(31),o=n(17),r=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(i(e),t=o(t,!0),i(n),a)try{return r(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var i=n(2),a=n(13);e.exports=n(3)?function(e,t,n){return i.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var i=n(34),a=n(18);e.exports=function(e){return i(a(e))}},function(e,t,n){var i=n(21)("wks"),a=n(15),o=n(0).Symbol,r="function"==typeof o;(e.exports=function(e){return i[e]||(i[e]=r&&o[e]||(r?o:a)("Symbol."+e))}).store=i},function(e,t,n){var h=n(0),g=n(1),v=n(45),F=n(5),d=n(4),x="prototype",k=function(e,t,n){var i,a,o,r=e&k.F,s=e&k.G,u=e&k.S,c=e&k.P,m=e&k.B,f=e&k.W,l=s?g:g[t]||(g[t]={}),p=l[x],y=s?h:u?h[t]:(h[t]||{})[x];for(i in s&&(n=t),n)(a=!r&&y&&void 0!==y[i])&&d(l,i)||(o=(a?y:n)[i],l[i]=s&&"function"!=typeof y[i]?n[i]:m&&a?v(o,h):f&&y[i]==o?function(i){function e(e,t,n){if(this instanceof i){switch(arguments.length){case 0:return new i;case 1:return new i(e);case 2:return new i(e,t)}return new i(e,t,n)}return i.apply(this,arguments)}return e[x]=i[x],e}(o):c&&"function"==typeof o?v(Function.call,o):o,c&&((l.virtual||(l.virtual={}))[i]=o,e&k.R&&p&&!p[i]&&F(p,i,o)))};k.F=1,k.G=2,k.S=4,k.P=8,k.B=16,k.W=32,k.U=64,k.R=128,e.exports=k},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var i=n(33),a=n(22);e.exports=Object.keys||function(e){return i(e,a)}},function(e,t,n){var i=n(10);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports=!0},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var a=n(10);e.exports=function(e,t){if(!a(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!a(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?i:n)(e)}},function(e,t,n){var i=n(21)("keys"),a=n(15);e.exports=function(e){return i[e]||(i[e]=a(e))}},function(e,t,n){var i=n(1),a=n(0),o="__core-js_shared__",r=a[o]||(a[o]={});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:i.version,mode:n(14)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var i=n(18);e.exports=function(e){return Object(i(e))}},function(e,t){e.exports={}},function(e,t,n){var i=n(2).f,a=n(4),o=n(8)("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,o)&&i(e,o,{configurable:!0,value:t})}},function(e,t,n){t.f=n(8)},function(e,t,n){var i=n(0),a=n(1),o=n(14),r=n(27),s=n(2).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=!o&&i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:r.f(e)})}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";t.__esModule=!0;var i,a=n(75),o=(i=a)&&i.__esModule?i:{default:i};function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(e,i.key,i)}}t.default=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,n){e.exports=!n(3)&&!n(6)(function(){return 7!=Object.defineProperty(n(32)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(10),a=n(0).document,o=i(a)&&i(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t,n){var r=n(4),s=n(7),u=n(48)(!1),c=n(20)("IE_PROTO");e.exports=function(e,t){var n,i=s(e),a=0,o=[];for(n in i)n!=c&&r(i,n)&&o.push(n);for(;t.length>a;)r(i,n=t[a++])&&(~u(o,n)||o.push(n));return o}},function(e,t,n){var i=n(35);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){"use strict";function F(){return this}var d=n(14),x=n(9),k=n(37),S=n(5),b=n(25),R=n(56),C=n(26),P=n(59),L=n(8)("iterator"),T=!([].keys&&"next"in[].keys()),O="values";e.exports=function(e,t,n,i,a,o,r){R(n,t,i);function s(e){if(!T&&e in y)return y[e];switch(e){case"keys":case O:return function(){return new n(this,e)}}return function(){return new n(this,e)}}var u,c,m,f=t+" Iterator",l=a==O,p=!1,y=e.prototype,h=y[L]||y["@@iterator"]||a&&y[a],g=h||s(a),v=a?l?s("entries"):g:void 0,i="Array"==t&&y.entries||h;if(i&&(m=P(i.call(new e)))!==Object.prototype&&m.next&&(C(m,f,!0),d||"function"==typeof m[L]||S(m,L,F)),l&&h&&h.name!==O&&(p=!0,g=function(){return h.call(this)}),d&&!r||!T&&!p&&y[L]||S(y,L,g),b[t]=g,b[f]=F,a)if(u={values:l?g:s(O),keys:o?g:s("keys"),entries:v},r)for(c in u)c in y||k(y,c,u[c]);else x(x.P+x.F*(T||p),t,u);return u}},function(e,t,n){e.exports=n(5)},function(e,t,n){function i(){}var a=n(12),o=n(57),r=n(22),s=n(20)("IE_PROTO"),u="prototype",c=function(){var e=n(32)("iframe"),t=r.length;for(e.style.display="none",n(58).appendChild(e),e.src="javascript:",(e=e.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;t--;)delete c[u][r[t]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(i[u]=a(e),n=new i,i[u]=null,n[s]=e):n=c(),void 0===t?n:o(n,t)}},function(e,t,n){var i=n(33),a=n(22).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,a)}},function(e,t,n){"use strict";var i=n(41);e.exports=function(e,t,n){return"string"==typeof t&&(n=t,t=void 0),new i(e,t,n)}},function(e,t,n){"use strict";var a=s(n(42)),i=s(n(51)),o=s(n(29)),r=s(n(30));function s(e){return e&&e.__esModule?e:{default:e}}var u=n(78),c=n(79),m=n(84),f=n(85);function l(e,t,n){(0,o.default)(this,l),"string"==typeof t&&(n=t,t=void 0),this.stockCode=e.stockCode,this.free="free"in e&&!!e.free,this.market=e.market||1,this.price=e.price||0,this.shareNum=e.shareNum||1,this.instrument=e.instrument&&1===e.instrument?1:0,this.cost=this.price*this.shareNum,this.config=(1!==this.market?f:m)(n),this.config="object"===(void 0===t?"undefined":(0,i.default)(t))?t:this.config}e.exports=((0,r.default)(l,[{key:"getBrokerInfo",value:function(e,t){for(var n={spell:e.spell,name:e.name,packageList:[]},i=0;i<t.length;i++)n.packageList.push({broker:t[i],totalCost:this.getTotalCost(t[i]),totalCostInfo:this.getTotalCostInfo(t[i]),totalCostSource:this.getTotalCostSource(t[i])});return(0,a.default)({},n)}},{key:"getTotalCost",value:function(e){return 1!==this.market?e.getTotalCost(this.cost,this.shareNum,this.price,this.free):e.getTotalCost(this.cost,this.free,this.instrument)}},{key:"getTotalCostInfo",value:function(e){return 1!==this.market?e.getTotalCostInfo(this.cost,this.shareNum,this.price,this.free):e.getTotalCostInfo(this.cost,this.free,this.instrument)}},{key:"getTotalCostSource",value:function(e){return 1!==this.market?e.getTotalCostSource(this.cost,this.shareNum,this.price,this.free):e.getTotalCostSource(this.cost,this.free,this.instrument)}},{key:"getBrokerConfigBySpell",value:function(e){for(var t=0;t<this.config.length;t++)if(e&&e.toUpperCase()===this.config[t].spell.toUpperCase())return this.config[t];return this.config}},{key:"getBrokerList",value:function(e){for(var t=[],n=0;n<e.packageList.length;n++){var i=(0,a.default)({},e.packageList[n],{spell:e.spell,name:e.name});t.push(this.createBroker(i))}return t}},{key:"createBroker",value:function(e){return new(1!==this.market?c:u)(e)}},{key:"brokers",get:function(){for(var e=this.getBrokerConfigBySpell(),t=[],n=0;n<e.length;n++)t.push(this.getBrokerInfo(e[n],this.getBrokerList(e[n])));return t}},{key:"futu",get:function(){var e=this.getBrokerConfigBySpell("FUTU");return this.getBrokerInfo(e,this.getBrokerList(e))}}]),l)},function(e,t,n){e.exports={default:n(43),__esModule:!0}},function(e,t,n){n(44),e.exports=n(1).Object.assign},function(e,t,n){var i=n(9);i(i.S+i.F,"Object",{assign:n(47)})},function(e,t,n){var o=n(46);e.exports=function(i,a,e){if(o(i),void 0===a)return i;switch(e){case 1:return function(e){return i.call(a,e)};case 2:return function(e,t){return i.call(a,e,t)};case 3:return function(e,t,n){return i.call(a,e,t,n)}}return function(){return i.apply(a,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var f=n(11),l=n(23),p=n(16),y=n(24),h=n(34),a=Object.assign;e.exports=!a||n(6)(function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach(function(e){t[e]=e}),7!=a({},e)[n]||Object.keys(a({},t)).join("")!=i})?function(e){for(var t=y(e),n=arguments.length,i=1,a=l.f,o=p.f;i<n;)for(var r,s=h(arguments[i++]),u=a?f(s).concat(a(s)):f(s),c=u.length,m=0;m<c;)o.call(s,r=u[m++])&&(t[r]=s[r]);return t}:a},function(e,t,n){var u=n(7),c=n(49),m=n(50);e.exports=function(s){return function(e,t,n){var i,a=u(e),o=c(a.length),r=m(n,o);if(s&&t!=t){for(;r<o;)if((i=a[r++])!=i)return!0}else for(;r<o;r++)if((s||r in a)&&a[r]===t)return s||r||0;return!s&&-1}}},function(e,t,n){var i=n(19),a=Math.min;e.exports=function(e){return 0<e?a(i(e),9007199254740991):0}},function(e,t,n){var i=n(19),a=Math.max,o=Math.min;e.exports=function(e,t){return(e=i(e))<0?a(e+t,0):o(e,t)}},function(e,t,n){"use strict";t.__esModule=!0;var i=r(n(52)),a=r(n(64)),o="function"==typeof a.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};function r(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof a.default&&"symbol"===o(i.default)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":o(e)}},function(e,t,n){e.exports={default:n(53),__esModule:!0}},function(e,t,n){n(54),n(60),e.exports=n(27).f("iterator")},function(e,t,n){"use strict";var i=n(55)(!0);n(36)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e=this._t,t=this._i;return t>=e.length?{value:void 0,done:!0}:(t=i(e,t),this._i+=t.length,{value:t,done:!1})})},function(e,t,n){var r=n(19),s=n(18);e.exports=function(o){return function(e,t){var n,i=String(s(e)),a=r(t),e=i.length;return a<0||e<=a?o?"":void 0:(t=i.charCodeAt(a))<55296||56319<t||a+1===e||(n=i.charCodeAt(a+1))<56320||57343<n?o?i.charAt(a):t:o?i.slice(a,a+2):n-56320+(t-55296<<10)+65536}}},function(e,t,n){"use strict";var i=n(38),a=n(13),o=n(26),r={};n(5)(r,n(8)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=i(r,{next:a(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(2),s=n(12),u=n(11);e.exports=n(3)?Object.defineProperties:function(e,t){s(e);for(var n,i=u(t),a=i.length,o=0;o<a;)r.f(e,n=i[o++],t[n]);return e}},function(e,t,n){n=n(0).document;e.exports=n&&n.documentElement},function(e,t,n){var i=n(4),a=n(24),o=n(20)("IE_PROTO"),r=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=a(e),i(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?r:null}},function(e,t,n){n(61);for(var i=n(0),a=n(5),o=n(25),r=n(8)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],m=i[c],m=m&&m.prototype;m&&!m[r]&&a(m,r,c),o[c]=o.Array}},function(e,t,n){"use strict";var i=n(62),a=n(63),o=n(25),r=n(7);e.exports=n(36)(Array,"Array",function(e,t){this._t=r(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,a(1)):a(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(65),__esModule:!0}},function(e,t,n){n(66),n(72),n(73),n(74),e.exports=n(1).Symbol},function(e,t,n){"use strict";function i(e){var t=V[e]=L(A[E]);return t._k=e,t}function a(e,t){S(e);for(var n,i=x(t=R(t)),a=0,o=i.length;a<o;)X(e,n=i[a++],t[n]);return e}function o(e){var t=U.call(this,e=C(e,!0));return!(this===W&&u(V,e)&&!u(H,e))&&(!(t||!u(this,e)||!u(V,e)||u(this,B)&&this[B][e])||t)}function r(e,t){if(e=R(e),t=C(t,!0),e!==W||!u(V,t)||u(H,t)){var n=j(e,t);return!n||!u(V,t)||u(e,B)&&e[B][t]||(n.enumerable=!0),n}}var s=n(0),u=n(4),c=n(3),m=n(9),f=n(37),l=n(67).KEY,p=n(6),y=n(21),h=n(26),g=n(15),v=n(8),F=n(27),d=n(28),x=n(68),k=n(69),S=n(12),b=n(10),R=n(7),C=n(17),P=n(13),L=n(38),T=n(70),O=n(71),M=n(2),w=n(11),j=O.f,_=M.f,I=T.f,A=s.Symbol,N=s.JSON,D=N&&N.stringify,E="prototype",B=v("_hidden"),G=v("toPrimitive"),U={}.propertyIsEnumerable,J=y("symbol-registry"),V=y("symbols"),H=y("op-symbols"),W=Object[E],K="function"==typeof A,z=s.QObject,q=!z||!z[E]||!z[E].findChild,Y=c&&p(function(){return 7!=L(_({},"a",{get:function(){return _(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=j(W,t);i&&delete W[t],_(e,t,n),i&&e!==W&&_(W,t,i)}:_,Q=K&&"symbol"==typeof A.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof A},X=function(e,t,n){return e===W&&X(H,t,n),S(e),t=C(t,!0),S(n),u(V,t)?(n.enumerable?(u(e,B)&&e[B][t]&&(e[B][t]=!1),n=L(n,{enumerable:P(0,!1)})):(u(e,B)||_(e,B,P(1,{})),e[B][t]=!0),Y(e,t,n)):_(e,t,n)},y=function(e){for(var t,n=I(R(e)),i=[],a=0;n.length>a;)u(V,t=n[a++])||t==B||t==l||i.push(t);return i},z=function(e){for(var t,n=e===W,i=I(n?H:R(e)),a=[],o=0;i.length>o;)!u(V,t=i[o++])||n&&!u(W,t)||a.push(V[t]);return a};K||(f((A=function(e){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=g(0<arguments.length?e:void 0),n=function(e){this===W&&n.call(H,e),u(this,B)&&u(this[B],t)&&(this[B][t]=!1),Y(this,t,P(1,e))};return c&&q&&Y(W,t,{configurable:!0,set:n}),i(t)})[E],"toString",function(){return this._k}),O.f=r,M.f=X,n(39).f=T.f=y,n(16).f=o,n(23).f=z,c&&!n(14)&&f(W,"propertyIsEnumerable",o,!0),F.f=function(e){return i(v(e))}),m(m.G+m.W+m.F*!K,{Symbol:A});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),$=0;Z.length>$;)v(Z[$++]);for(var ee=w(v.store),te=0;ee.length>te;)d(ee[te++]);m(m.S+m.F*!K,"Symbol",{for:function(e){return u(J,e+="")?J[e]:J[e]=A(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in J)if(J[t]===e)return t},useSetter:function(){q=!0},useSimple:function(){q=!1}}),m(m.S+m.F*!K,"Object",{create:function(e,t){return void 0===t?L(e):a(L(e),t)},defineProperty:X,defineProperties:a,getOwnPropertyDescriptor:r,getOwnPropertyNames:y,getOwnPropertySymbols:z}),N&&m(m.S+m.F*(!K||p(function(){var e=A();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,n,i=[e],a=1;a<arguments.length;)i.push(arguments[a++]);if(n=t=i[1],(b(t)||void 0!==e)&&!Q(e))return k(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Q(t))return t}),i[1]=t,D.apply(N,i)}}),A[E][G]||n(5)(A[E],G,A[E].valueOf),h(A,"Symbol"),h(Math,"Math",!0),h(s.JSON,"JSON",!0)},function(e,t,n){function i(e){s(e,a,{value:{i:"O"+ ++u,w:{}}})}var a=n(15)("meta"),o=n(10),r=n(4),s=n(2).f,u=0,c=Object.isExtensible||function(){return!0},m=!n(6)(function(){return c(Object.preventExtensions({}))}),f=e.exports={KEY:a,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!r(e,a)){if(!c(e))return"F";if(!t)return"E";i(e)}return e[a].i},getWeak:function(e,t){if(!r(e,a)){if(!c(e))return!0;if(!t)return!1;i(e)}return e[a].w},onFreeze:function(e){return m&&f.NEED&&c(e)&&!r(e,a)&&i(e),e}}},function(e,t,n){var s=n(11),u=n(23),c=n(16);e.exports=function(e){var t=s(e),n=u.f;if(n)for(var i,a=n(e),o=c.f,r=0;a.length>r;)o.call(e,i=a[r++])&&t.push(i);return t}},function(e,t,n){var i=n(35);e.exports=Array.isArray||function(e){return"Array"==i(e)}},function(e,t,n){var i=n(7),a=n(39).f,o={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return r&&"[object Window]"==o.call(e)?function(e){try{return a(e)}catch(e){return r.slice()}}(e):a(i(e))}},function(e,t,n){var i=n(16),a=n(13),o=n(7),r=n(17),s=n(4),u=n(31),c=Object.getOwnPropertyDescriptor;t.f=n(3)?c:function(e,t){if(e=o(e),t=r(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return a(!i.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(28)("asyncIterator")},function(e,t,n){n(28)("observable")},function(e,t,n){e.exports={default:n(76),__esModule:!0}},function(e,t,n){n(77);var i=n(1).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},function(e,t,n){var i=n(9);i(i.S+i.F*!n(3),"Object",{defineProperty:n(2).f})},function(e,t,n){"use strict";var i=a(n(29)),n=a(n(30));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){(0,i.default)(this,o),this.name=e.name||"unkonw",this.spell=e.spell||"unkonw",this.packageId=e.packageId||0,this.packageName=e.packageName||"unkonw",this.commissionRate=e.commissionRate||0,this.minCommission=e.minCommission||0,this.maxCommission=e.maxCommission||1/0,this.maxCommissionRate=e.maxCommissionRate||1/0,this.platformFee=e.platformFee||0,this.payFeeRate=e.payFeeRate||0,this.minPayFee=e.minPayFee||0,this.maxPayFee=e.maxPayFee||1/0,this.tradingSystemFee=e.tradingSystemFee||0,this.stampDutyRate=e.stampDutyRate||0,this.minStampDutyFee=e.minStampDutyFee||0,this.tradeFeeRate=e.tradeFeeRate||0,this.minTradeFee=e.minTradeFee||0,this.transactionLevyRate=e.transactionLevyRate||0,this.minTransactionLevyFee=e.minTransactionLevyFee||0}e.exports=((0,n.default)(o,[{key:"getCommission",value:function(e,t){var n=Math.max(this.commissionRate*e,this.minCommission);return t?0:Math.max(this.minCommission,Math.min(this.maxCommission,this.maxCommissionRate*e,n))}},{key:"getPlatform",value:function(){return this.platformFee}},{key:"getPayFee",value:function(e){e=Math.max(this.payFeeRate*e,this.minPayFee);return Math.min(this.maxPayFee,e)}},{key:"getTradingSystem",value:function(){return this.tradingSystemFee}},{key:"getStampDuty",value:function(e,t){return t?Math.max(Math.ceil(this.stampDutyRate*e),Math.ceil(this.minStampDutyFee)):0}},{key:"getTradeFee",value:function(e){return Math.max(this.tradeFeeRate*e,this.minTradeFee)}},{key:"getTransactionLevy",value:function(e){return Math.max(this.transactionLevyRate*e,this.minTransactionLevyFee)}},{key:"getTotalCostInfo",value:function(e,t,n){return{commission:Math.round(100*this.getCommission(e,t))/100,platform:Math.round(100*this.getPlatform())/100,payFee:Math.round(100*this.getPayFee(e))/100,tradingSystem:Math.round(100*this.getTradingSystem())/100,stampDuty:Math.round(100*this.getStampDuty(e,n))/100,tradeFee:Math.round(100*this.getTradeFee(e))/100,transactionLevy:Math.round(100*this.getTransactionLevy(e))/100}}},{key:"getTotalCostSource",value:function(e,t,n){return{commission:this.getCommission(e,t),platform:this.getPlatform(),payFee:this.getPayFee(e),tradingSystem:this.getTradingSystem(),stampDuty:this.getStampDuty(e,n),tradeFee:this.getTradeFee(e),transactionLevy:this.getTransactionLevy(e)}}},{key:"getTotalCost",value:function(e,t,n){var i,a=this.getTotalCostInfo(e,t,n),o=0;for(i in a)o+=a[i];return+o.toFixed(2)}}]),o)},function(e,t,n){"use strict";var u=a(n(80)),i=a(n(29)),n=a(n(30));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){(0,i.default)(this,o),this.name=e.name||"unkonw",this.spell=e.spell||"unkonw",this.packageId=e.packageId||0,this.packageName=e.packageName||"unkonw",this.minStockPrice=e.minStockPrice||0,this.paddingCommission=e.paddingCommission||0,this.commissionRate=e.commissionRate||0,this.minCommission=e.minCommission||0,this.maxCommission=e.maxCommission||1/0,this.maxCommissionRate=e.maxCommissionRate||1/0,this.commissionNeedPrice=e.commissionNeedPrice||!1,this.platformFee=e.platformFee||0,this.platformFeeRate=e.platformFeeRate||0,this.minPlatformFee=e.minPlatformFee||0,this.maxPlatformFeeRate=e.maxPlatformFeeRate||1/0,this.payFeeRate=e.payFeeRate||0,this.minPayFee=e.minPayFee||0,this.maxPayFee=e.maxPayFee||1/0,this.secFeeRate=e.secFeeRate||0,this.minSecFee=e.minSecFee||0,this.maxSecFee=e.maxSecFee||1/0,this.activityFeeRate=e.activityFeeRate||0,this.minActivityFee=e.minActivityFee||0,this.maxActivityFee=e.maxActivityFee||1/0}e.exports=((0,n.default)(o,[{key:"getCommission",value:function(e,t,n,i){var a=Math.max(this.commissionRate*t*(this.commissionNeedPrice?n:1),this.minCommission);return 0<this.minStockPrice&&n<this.minStockPrice&&(a+=t*this.paddingCommission),i?0:Math.max(this.minCommission,Math.min(this.maxCommission,this.maxCommissionRate*e,a))}},{key:"getPlatform",value:function(e,t){var n=this;if("Object"===Object.prototype.toString.call(this.platformFeeRate).slice(8,-1)){for(var i=0,a=(0,u.default)(this.platformFeeRate).sort(function(e,t){return+e-+t}),o={},r=0;r<a.length;r++){if(!(+t>+a[r+1])){o[a[r]]=t-a[r];break}o[a[r]]=+a[r+1]-a[r]}(0,u.default)(o).forEach(function(e){i+=n.platformFeeRate[e]*o[e]});var s=Math.max(this.minPlatformFee,i);return Math.max(this.minPlatformFee,Math.min(this.maxCommissionRate*e,s))}s=Math.max(this.platformFee,this.platformFeeRate*t,this.minPlatformFee);return Math.max(this.minPlatformFee,Math.min(this.maxPlatformFeeRate*e,s))}},{key:"getPayFee",value:function(e,t){t=Math.max(this.payFeeRate*t,this.minPayFee);return Math.min(this.maxPayFee,t)}},{key:"getSecFee",value:function(e){e=Math.max(this.secFeeRate*e,this.minSecFee);return Math.min(this.maxSecFee,e)}},{key:"getActivityFee",value:function(e){e=Math.max(this.activityFeeRate*e,this.minActivityFee);return Math.min(this.maxActivityFee,e)}},{key:"getTotalCostInfo",value:function(e,t,n,i){return{commission:Math.round(100*this.getCommission(e,t,n,i))/100,platform:Math.round(100*this.getPlatform(e,t))/100,payFee:Math.round(100*this.getPayFee(e,t))/100,secFee:Math.round(100*this.getSecFee(e))/100,activityFee:Math.round(100*this.getActivityFee(t))/100}}},{key:"getTotalCostSource",value:function(e,t,n,i){return{commission:this.getCommission(e,t,n,i),platform:this.getPlatform(e,t),payFee:this.getPayFee(e,t),secFee:this.getSecFee(e),activityFee:this.getActivityFee(t)}}},{key:"getTotalCost",value:function(e,t,n,i){i=this.getTotalCostInfo(e,t,n,i);return Math.round(100*(i.commission+i.payFee))/100}}]),o)},function(e,t,n){e.exports={default:n(81),__esModule:!0}},function(e,t,n){n(82),e.exports=n(1).Object.keys},function(e,t,n){var i=n(24),a=n(11);n(83)("keys",function(){return function(e){return a(i(e))}})},function(e,t,n){var a=n(9),o=n(1),r=n(6);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*r(function(){n(1)}),"Object",i)}},function(e,t,n){"use strict";e.exports=function(e){var t={default:{futu:{name:"富途证券(香港)",packageList:["旧套餐","套餐一","套餐二"]},boci:{name:"中银国际"},guotaijunan:{name:"国泰君安"},cms:{name:"招商证券"},guoxin:{name:"国信证券"},icbc:{name:"工银亚洲"}},hk:{futu:{name:"富途證券(香港)",packageList:["舊套餐","套餐一","套餐二"]},boci:{name:"中銀國際"},guotaijunan:{name:"國泰君安"},cms:{name:"招商證券"},guoxin:{name:"國信證券"},icbc:{name:"工銀亞洲"}},us:{futu:{name:"FUTU HK",packageList:["Old plan","Plan one","Plan two"]},boci:{name:"BOC International"},guotaijunan:{name:"Guotai Junan Securities"},cms:{name:"China Merchants Securities"},guoxin:{name:"Guosen Securities"},icbc:{name:"Industrial and Commercial Bank of China (Asia)"}}},t=e?t[e]:t.default;return[{name:t.futu.name,spell:"FUTU",packageList:[{packageId:0,packageName:t.futu.packageList[0],commissionRate:5e-4,minCommission:50,platformFee:0,payFeeRate:5e-5,minPayFee:5.5,maxPayFee:200,tradingSystemFee:0,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,transactionLevyRate:27e-6},{packageId:1,packageName:t.futu.packageList[1],commissionRate:3e-4,minCommission:3,platformFee:15,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,tradingSystemFee:.5,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01},{packageId:2,packageName:t.futu.packageList[2],commissionRate:3e-4,minCommission:3,platformFee:30,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,tradingSystemFee:.5,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:t.boci.name,spell:"BOCI",packageList:[{commissionRate:.002,minCommission:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:t.guotaijunan.name,spell:"GuotaiJunan",packageList:[{commissionRate:.0018,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:t.cms.name,spell:"CMS",packageList:[{commissionRate:.00225,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:t.guoxin.name,spell:"Guoxin",packageList:[{commissionRate:.0025,minCommission:100,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]},{name:t.icbc.name,spell:"ICBC",packageList:[{commissionRate:.0015,minCommission:88,payFeeRate:2e-5,minPayFee:2,maxPayFee:100,stampDutyRate:.001,minStampDutyFee:1,tradeFeeRate:5e-5,minTradeFee:.01,transactionLevyRate:27e-6,minTransactionLevyFee:.01}]}]}},function(e,t,n){"use strict";e.exports=function(e){var t={default:{futu:{name:"富途证券(香港)",packageList:["旧套餐","套餐一","套餐二","按股梯度式","企业套餐"]},boci:{name:"中银国际"},guotaijunan:{name:"国泰君安"},fs:{name:"第一证券"},td:{name:"TD(含史考特)"},snowball:{name:"雪盈证券",packageList:["低佣金套餐","低利率套餐"]}},hk:{futu:{name:"富途證券(香港)",packageList:["舊套餐","套餐一","套餐二","按股梯度式","企業套餐"]},boci:{name:"中銀國際"},guotaijunan:{name:"國泰君安"},fs:{name:"第一證券"},td:{name:"TD(含史考特)"},snowball:{name:"雪盈證券",packageList:["低佣金套餐","低利率套餐"]}},us:{futu:{name:"FUTU HK",packageList:["Old plan","Plan one","Plan two","Tiered plan","New plan"]},boci:{name:"BOC International"},guotaijunan:{name:"Guotai Junan Securities"},fs:{name:"Firstrade Securities"},td:{name:"TD(including Scottrade)"},snowball:{name:"Snowball Securities",packageList:["Low-Commission plan","Low-Interest rate plan"]}}},t=e?t[e]:t.default;return[{name:t.futu.name,spell:"FUTU",packageList:[{packageId:0,packageName:t.futu.packageList[0],commissionRate:.01,minCommission:1.99,maxCommissionRate:.5,payFeeRate:.003,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59},{packageId:1,packageName:t.futu.packageList[1],commissionRate:.0049,minCommission:.99,maxCommissionRate:.5,payFeeRate:.003,platformFeeRate:.005,minPlatformFee:1,maxPlatformFeeRate:.005,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59},{packageId:2,packageName:t.futu.packageList[2],commissionRate:0,minCommission:5,payFeeRate:.003,minPayFee:3,platformFee:0,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59},{packageId:3,packageName:t.futu.packageList[3],commissionRate:.0049,minCommission:.99,maxCommissionRate:.5,payFeeRate:.003,platformFeeRate:{0:.01,500:.008,1e3:.007,5e3:.006,1e4:.0055,5e4:.005,2e5:.0045,5e5:.004,1e6:.0035,5e6:.003},minPlatformFee:1,maxPlatformFeeRate:.5,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.95},{packageId:4,packageName:t.futu.packageList[4],commissionRate:.0039,minCommission:.99,maxCommissionRate:.005,minPayFee:.99,payFeeRate:.003841,platformFeeRate:.004,minPlatformFee:1,maxPlatformFeeRate:.5,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.95}]},{name:t.boci.name,spell:"BOCI",packageList:[{commissionRate:.01,minCommission:25,commissionNeedPrice:!0,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:t.guotaijunan.name,spell:"GuotaiJunan",packageList:[{commissionRate:.0015,minCommission:15,commissionNeedPrice:!0,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:t.fs.name,spell:"FS",packageList:[{minCommission:2.95,minStockPrice:1,paddingCommission:.005,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:t.td.name,spell:"TD",packageList:[{minCommission:6.95,secFeeRate:221e-7,minSecFee:.01,activityFeeRate:119e-6,minActivityFee:.01,maxActivityFee:5.59}]},{name:t.snowball.name,spell:"SnowBall",packageList:[{packageId:0,packageName:t.snowball.packageList[0],commissionRate:.002,minCommission:.99},{packageId:0,packageName:t.snowball.packageList[1],commissionRate:.008,minCommission:.99}]}]}}],a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=40);function a(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}var n,i});