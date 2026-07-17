(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function $_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Nd={exports:{}},vo={},Ld={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function Tx(){if(hg)return At;hg=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function g(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(B,J,Fe){this.props=B,this.context=J,this.refs=b,this.updater=Fe||x}y.prototype.isReactComponent={},y.prototype.setState=function(B,J){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,J,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function S(){}S.prototype=y.prototype;function C(B,J,Fe){this.props=B,this.context=J,this.refs=b,this.updater=Fe||x}var N=C.prototype=new S;N.constructor=C,M(N,y.prototype),N.isPureReactComponent=!0;var w=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(B,J,Fe){var Ee,ve={},Q=null,_e=null;if(J!=null)for(Ee in J.ref!==void 0&&(_e=J.ref),J.key!==void 0&&(Q=""+J.key),J)L.call(J,Ee)&&!F.hasOwnProperty(Ee)&&(ve[Ee]=J[Ee]);var ce=arguments.length-2;if(ce===1)ve.children=Fe;else if(1<ce){for(var Ie=Array(ce),Ye=0;Ye<ce;Ye++)Ie[Ye]=arguments[Ye+2];ve.children=Ie}if(B&&B.defaultProps)for(Ee in ce=B.defaultProps,ce)ve[Ee]===void 0&&(ve[Ee]=ce[Ee]);return{$$typeof:s,type:B,key:Q,ref:_e,props:ve,_owner:P.current}}function I(B,J){return{$$typeof:s,type:B.type,key:J,ref:B.ref,props:B.props,_owner:B._owner}}function k(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function z(B){var J={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Fe){return J[Fe]})}var j=/\/+/g;function ae(B,J){return typeof B=="object"&&B!==null&&B.key!=null?z(""+B.key):J.toString(36)}function pe(B,J,Fe,Ee,ve){var Q=typeof B;(Q==="undefined"||Q==="boolean")&&(B=null);var _e=!1;if(B===null)_e=!0;else switch(Q){case"string":case"number":_e=!0;break;case"object":switch(B.$$typeof){case s:case e:_e=!0}}if(_e)return _e=B,ve=ve(_e),B=Ee===""?"."+ae(_e,0):Ee,w(ve)?(Fe="",B!=null&&(Fe=B.replace(j,"$&/")+"/"),pe(ve,J,Fe,"",function(Ye){return Ye})):ve!=null&&(k(ve)&&(ve=I(ve,Fe+(!ve.key||_e&&_e.key===ve.key?"":(""+ve.key).replace(j,"$&/")+"/")+B)),J.push(ve)),1;if(_e=0,Ee=Ee===""?".":Ee+":",w(B))for(var ce=0;ce<B.length;ce++){Q=B[ce];var Ie=Ee+ae(Q,ce);_e+=pe(Q,J,Fe,Ie,ve)}else if(Ie=g(B),typeof Ie=="function")for(B=Ie.call(B),ce=0;!(Q=B.next()).done;)Q=Q.value,Ie=Ee+ae(Q,ce++),_e+=pe(Q,J,Fe,Ie,ve);else if(Q==="object")throw J=String(B),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return _e}function K(B,J,Fe){if(B==null)return B;var Ee=[],ve=0;return pe(B,Ee,"","",function(Q){return J.call(Fe,Q,ve++)}),Ee}function oe(B){if(B._status===-1){var J=B._result;J=J(),J.then(function(Fe){(B._status===0||B._status===-1)&&(B._status=1,B._result=Fe)},function(Fe){(B._status===0||B._status===-1)&&(B._status=2,B._result=Fe)}),B._status===-1&&(B._status=0,B._result=J)}if(B._status===1)return B._result.default;throw B._result}var Z={current:null},Y={transition:null},se={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:Y,ReactCurrentOwner:P};function le(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:K,forEach:function(B,J,Fe){K(B,function(){J.apply(this,arguments)},Fe)},count:function(B){var J=0;return K(B,function(){J++}),J},toArray:function(B){return K(B,function(J){return J})||[]},only:function(B){if(!k(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},At.Component=y,At.Fragment=t,At.Profiler=a,At.PureComponent=C,At.StrictMode=i,At.Suspense=h,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,At.act=le,At.cloneElement=function(B,J,Fe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Ee=M({},B.props),ve=B.key,Q=B.ref,_e=B._owner;if(J!=null){if(J.ref!==void 0&&(Q=J.ref,_e=P.current),J.key!==void 0&&(ve=""+J.key),B.type&&B.type.defaultProps)var ce=B.type.defaultProps;for(Ie in J)L.call(J,Ie)&&!F.hasOwnProperty(Ie)&&(Ee[Ie]=J[Ie]===void 0&&ce!==void 0?ce[Ie]:J[Ie])}var Ie=arguments.length-2;if(Ie===1)Ee.children=Fe;else if(1<Ie){ce=Array(Ie);for(var Ye=0;Ye<Ie;Ye++)ce[Ye]=arguments[Ye+2];Ee.children=ce}return{$$typeof:s,type:B.type,key:ve,ref:Q,props:Ee,_owner:_e}},At.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:o,_context:B},B.Consumer=B},At.createElement=T,At.createFactory=function(B){var J=T.bind(null,B);return J.type=B,J},At.createRef=function(){return{current:null}},At.forwardRef=function(B){return{$$typeof:u,render:B}},At.isValidElement=k,At.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:oe}},At.memo=function(B,J){return{$$typeof:f,type:B,compare:J===void 0?null:J}},At.startTransition=function(B){var J=Y.transition;Y.transition={};try{B()}finally{Y.transition=J}},At.unstable_act=le,At.useCallback=function(B,J){return Z.current.useCallback(B,J)},At.useContext=function(B){return Z.current.useContext(B)},At.useDebugValue=function(){},At.useDeferredValue=function(B){return Z.current.useDeferredValue(B)},At.useEffect=function(B,J){return Z.current.useEffect(B,J)},At.useId=function(){return Z.current.useId()},At.useImperativeHandle=function(B,J,Fe){return Z.current.useImperativeHandle(B,J,Fe)},At.useInsertionEffect=function(B,J){return Z.current.useInsertionEffect(B,J)},At.useLayoutEffect=function(B,J){return Z.current.useLayoutEffect(B,J)},At.useMemo=function(B,J){return Z.current.useMemo(B,J)},At.useReducer=function(B,J,Fe){return Z.current.useReducer(B,J,Fe)},At.useRef=function(B){return Z.current.useRef(B)},At.useState=function(B){return Z.current.useState(B)},At.useSyncExternalStore=function(B,J,Fe){return Z.current.useSyncExternalStore(B,J,Fe)},At.useTransition=function(){return Z.current.useTransition()},At.version="18.3.1",At}var fg;function vf(){return fg||(fg=1,Ld.exports=Tx()),Ld.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function wx(){if(pg)return vo;pg=1;var s=vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,f){var m,_={},g=null,x=null;f!==void 0&&(g=""+f),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(x=h.ref);for(m in h)i.call(h,m)&&!o.hasOwnProperty(m)&&(_[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)_[m]===void 0&&(_[m]=h[m]);return{$$typeof:e,type:u,key:g,ref:x,props:_,_owner:a.current}}return vo.Fragment=t,vo.jsx=c,vo.jsxs=c,vo}var mg;function bx(){return mg||(mg=1,Nd.exports=wx()),Nd.exports}var D=bx(),We=vf();const Ax=$_(We);var ec={},Id={exports:{}},Zn={},Dd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function Rx(){return gg||(gg=1,(function(s){function e(Y,se){var le=Y.length;Y.push(se);e:for(;0<le;){var B=le-1>>>1,J=Y[B];if(0<a(J,se))Y[B]=se,Y[le]=J,le=B;else break e}}function t(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var se=Y[0],le=Y.pop();if(le!==se){Y[0]=le;e:for(var B=0,J=Y.length,Fe=J>>>1;B<Fe;){var Ee=2*(B+1)-1,ve=Y[Ee],Q=Ee+1,_e=Y[Q];if(0>a(ve,le))Q<J&&0>a(_e,ve)?(Y[B]=_e,Y[Q]=le,B=Q):(Y[B]=ve,Y[Ee]=le,B=Ee);else if(Q<J&&0>a(_e,le))Y[B]=_e,Y[Q]=le,B=Q;else break e}}return se}function a(Y,se){var le=Y.sortIndex-se.sortIndex;return le!==0?le:Y.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();s.unstable_now=function(){return c.now()-u}}var h=[],f=[],m=1,_=null,g=3,x=!1,M=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Y){for(var se=t(f);se!==null;){if(se.callback===null)i(f);else if(se.startTime<=Y)i(f),se.sortIndex=se.expirationTime,e(h,se);else break;se=t(f)}}function w(Y){if(b=!1,N(Y),!M)if(t(h)!==null)M=!0,oe(L);else{var se=t(f);se!==null&&Z(w,se.startTime-Y)}}function L(Y,se){M=!1,b&&(b=!1,S(T),T=-1),x=!0;var le=g;try{for(N(se),_=t(h);_!==null&&(!(_.expirationTime>se)||Y&&!z());){var B=_.callback;if(typeof B=="function"){_.callback=null,g=_.priorityLevel;var J=B(_.expirationTime<=se);se=s.unstable_now(),typeof J=="function"?_.callback=J:_===t(h)&&i(h),N(se)}else i(h);_=t(h)}if(_!==null)var Fe=!0;else{var Ee=t(f);Ee!==null&&Z(w,Ee.startTime-se),Fe=!1}return Fe}finally{_=null,g=le,x=!1}}var P=!1,F=null,T=-1,I=5,k=-1;function z(){return!(s.unstable_now()-k<I)}function j(){if(F!==null){var Y=s.unstable_now();k=Y;var se=!0;try{se=F(!0,Y)}finally{se?ae():(P=!1,F=null)}}else P=!1}var ae;if(typeof C=="function")ae=function(){C(j)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,K=pe.port2;pe.port1.onmessage=j,ae=function(){K.postMessage(null)}}else ae=function(){y(j,0)};function oe(Y){F=Y,P||(P=!0,ae())}function Z(Y,se){T=y(function(){Y(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,oe(L))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var se=3;break;default:se=g}var le=g;g=se;try{return Y()}finally{g=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,se){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var le=g;g=Y;try{return se()}finally{g=le}},s.unstable_scheduleCallback=function(Y,se,le){var B=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?B+le:B):le=B,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=le+J,Y={id:m++,callback:se,priorityLevel:Y,startTime:le,expirationTime:J,sortIndex:-1},le>B?(Y.sortIndex=le,e(f,Y),t(h)===null&&Y===t(f)&&(b?(S(T),T=-1):b=!0,Z(w,le-B))):(Y.sortIndex=J,e(h,Y),M||x||(M=!0,oe(L))),Y},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(Y){var se=g;return function(){var le=g;g=se;try{return Y.apply(this,arguments)}finally{g=le}}}})(Ud)),Ud}var _g;function Cx(){return _g||(_g=1,Dd.exports=Rx()),Dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Px(){if(vg)return Zn;vg=1;var s=vf(),e=Cx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function g(n){return h.call(_,n)?!0:h.call(m,n)?!1:f.test(n)?_[n]=!0:(m[n]=!0,!1)}function x(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,d){if(r===null||typeof r>"u"||x(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,l,d,p,v,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,C);y[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,C);y[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,C);y[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,r,l,d){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,d)&&(l=null),d||p===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,d=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var w=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),Y=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,B;function J(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var Fe=!1;function Ee(n,r){if(!n||Fe)return"";Fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(de){var d=de}Reflect.construct(n,[],r)}else{try{r.call()}catch(de){d=de}n.call(r.prototype)}else{try{throw Error()}catch(de){d=de}n()}}catch(de){if(de&&d&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),v=d.stack.split(`
`),A=p.length-1,O=v.length-1;1<=A&&0<=O&&p[A]!==v[O];)O--;for(;1<=A&&0<=O;A--,O--)if(p[A]!==v[O]){if(A!==1||O!==1)do if(A--,O--,0>O||p[A]!==v[O]){var V=`
`+p[A].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=A&&0<=O);break}}}finally{Fe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function ve(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Q(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case P:return"Portal";case I:return"Profiler";case T:return"StrictMode";case ae:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case j:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case K:return r=n.displayName||null,r!==null?r:Q(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return Q(n(r))}catch{}}return null}function _e(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ye(n){var r=Ie(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(A){d=""+A,v.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(A){d=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nt(n){n._valueTracker||(n._valueTracker=Ye(n))}function Vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Ie(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pt(n,r){var l=r.checked;return le({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function yt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=ce(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function St(n,r){r=r.checked,r!=null&&N(n,"checked",r,!1)}function Xt(n,r){St(n,r);var l=ce(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Be(n,r.type,l):r.hasOwnProperty("defaultValue")&&Be(n,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function ye(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Be(n,r,l){(r!=="number"||dt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var st=Array.isArray;function rt(n,r,l,d){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&d&&(n[l].defaultSelected=!0)}else{for(l=""+ce(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Mt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function G(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(st(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:ce(l)}}function sn(n,r){var l=ce(r.value),d=ce(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function Et(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?U(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function he(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){Re.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),we[r]=we[n]})});function fe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||we.hasOwnProperty(n)&&we[n]?(""+r).trim():r+"px"}function me(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=fe(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,p):n[l]=p}}var De=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(n,r){if(r){if(De[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ue(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,ht=null,H=null;function Pe(n){if(n=no(n)){if(typeof at!="function")throw Error(t(280));var r=n.stateNode;r&&(r=ml(r),at(n.stateNode,n.type,r))}}function ge(n){ht?H?H.push(n):H=[n]:ht=n}function Le(){if(ht){var n=ht,r=H;if(H=ht=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function Oe(n,r){return n(r)}function xe(){}var Ke=!1;function Xe(n,r,l){if(Ke)return n(r,l);Ke=!0;try{return Oe(n,r,l)}finally{Ke=!1,(ht!==null||H!==null)&&(xe(),Le())}}function Ht(n,r){var l=n.stateNode;if(l===null)return null;var d=ml(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Dt=!1;if(u)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Dt=!1}function li(n,r,l,d,p,v,A,O,V){var de=Array.prototype.slice.call(arguments,3);try{r.apply(l,de)}catch(Me){this.onError(Me)}}var is=!1,Is=null,rs=!1,ss=null,eu={onError:function(n){is=!0,Is=n}};function Zo(n,r,l,d,p,v,A,O,V){is=!1,Is=null,li.apply(eu,arguments)}function Jo(n,r,l,d,p,v,A,O,V){if(Zo.apply(this,arguments),is){if(is){var de=Is;is=!1,Is=null}else throw Error(t(198));rs||(rs=!0,ss=de)}}function kn(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ds(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Fa(n){if(kn(n)!==n)throw Error(t(188))}function Qo(n){var r=n.alternate;if(!r){if(r=kn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Fa(p),n;if(v===d)return Fa(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=v;else{for(var A=!1,O=p.child;O;){if(O===l){A=!0,l=p,d=v;break}if(O===d){A=!0,d=p,l=v;break}O=O.sibling}if(!A){for(O=v.child;O;){if(O===l){A=!0,l=v,d=p;break}if(O===d){A=!0,d=v,l=p;break}O=O.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function as(n){return n=Qo(n),n!==null?Oa(n):null}function Oa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Oa(n);if(r!==null)return r;n=n.sibling}return null}var os=e.unstable_scheduleCallback,ka=e.unstable_cancelCallback,el=e.unstable_shouldYield,tu=e.unstable_requestPaint,en=e.unstable_now,nu=e.unstable_getCurrentPriorityLevel,Ba=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,Ce=null;function He(n){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:mt,qe=Math.log,et=Math.LN2;function mt(n){return n>>>=0,n===0?32:31-(qe(n)/et|0)|0}var gt=64,Je=4194304;function Nt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,p=n.suspendedLanes,v=n.pingedLanes,A=l&268435455;if(A!==0){var O=A&~p;O!==0?d=Nt(O):(v&=A,v!==0&&(d=Nt(v)))}else A=l&~p,A!==0?d=Nt(A):v!==0&&(d=Nt(v));if(d===0)return 0;if(r!==0&&r!==d&&(r&p)===0&&(p=d&-d,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-Ae(r),p=1<<l,d|=n[l],r&=~p;return d}function Zt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-Ae(v),O=1<<A,V=p[A];V===-1?((O&l)===0||(O&d)!==0)&&(p[A]=Zt(O,r)):V<=r&&(n.expiredLanes|=O),v&=~O}}function cn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ze(){var n=gt;return gt<<=1,(gt&4194240)===0&&(gt=64),n}function An(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Tt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ae(r),n[r]=l}function Wn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ae(l),v=1<<p;r[p]=0,d[p]=-1,n[p]=-1,l&=~v}}function Xn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-Ae(l),p=1<<d;p&r|n[d]&r&&(n[d]|=r),l&=~p}}var bt=0;function ir(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ut,Kt,xi,Ot,yi,Bi=!1,ls=[],wr=null,br=null,Ar=null,za=new Map,Va=new Map,Rr=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(n,r){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":za.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(r.pointerId)}}function Ha(n,r,l,d,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:v,targetContainers:[p]},r!==null&&(r=no(r),r!==null&&Kt(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Y0(n,r,l,d,p){switch(r){case"focusin":return wr=Ha(wr,n,r,l,d,p),!0;case"dragenter":return br=Ha(br,n,r,l,d,p),!0;case"mouseover":return Ar=Ha(Ar,n,r,l,d,p),!0;case"pointerover":var v=p.pointerId;return za.set(v,Ha(za.get(v)||null,n,r,l,d,p)),!0;case"gotpointercapture":return v=p.pointerId,Va.set(v,Ha(Va.get(v)||null,n,r,l,d,p)),!0}return!1}function $f(n){var r=cs(n.target);if(r!==null){var l=kn(r);if(l!==null){if(r=l.tag,r===13){if(r=Ds(l),r!==null){n.blockedOn=r,yi(n.priority,function(){xi(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=ru(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Ne=d,l.target.dispatchEvent(d),Ne=null}else return r=no(l),r!==null&&Kt(r),n.blockedOn=l,!1;r.shift()}return!0}function Zf(n,r,l){tl(n)&&l.delete(r)}function K0(){Bi=!1,wr!==null&&tl(wr)&&(wr=null),br!==null&&tl(br)&&(br=null),Ar!==null&&tl(Ar)&&(Ar=null),za.forEach(Zf),Va.forEach(Zf)}function Ga(n,r){n.blockedOn===r&&(n.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,K0)))}function Wa(n){function r(p){return Ga(p,n)}if(0<ls.length){Ga(ls[0],n);for(var l=1;l<ls.length;l++){var d=ls[l];d.blockedOn===n&&(d.blockedOn=null)}}for(wr!==null&&Ga(wr,n),br!==null&&Ga(br,n),Ar!==null&&Ga(Ar,n),za.forEach(r),Va.forEach(r),l=0;l<Rr.length;l++)d=Rr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Rr.length&&(l=Rr[0],l.blockedOn===null);)$f(l),l.blockedOn===null&&Rr.shift()}var Us=w.ReactCurrentBatchConfig,nl=!0;function q0(n,r,l,d){var p=bt,v=Us.transition;Us.transition=null;try{bt=1,iu(n,r,l,d)}finally{bt=p,Us.transition=v}}function $0(n,r,l,d){var p=bt,v=Us.transition;Us.transition=null;try{bt=4,iu(n,r,l,d)}finally{bt=p,Us.transition=v}}function iu(n,r,l,d){if(nl){var p=ru(n,r,l,d);if(p===null)Su(n,r,d,il,l),qf(n,d);else if(Y0(p,n,r,l,d))d.stopPropagation();else if(qf(n,d),r&4&&-1<j0.indexOf(n)){for(;p!==null;){var v=no(p);if(v!==null&&Ut(v),v=ru(n,r,l,d),v===null&&Su(n,r,d,il,l),v===p)break;p=v}p!==null&&d.stopPropagation()}else Su(n,r,d,null,l)}}var il=null;function ru(n,r,l,d){if(il=null,n=it(d),n=cs(n),n!==null)if(r=kn(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ds(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return il=n,null}function Jf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nu()){case Ba:return 1;case R:return 4;case q:case ue:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Cr=null,su=null,rl=null;function Qf(){if(rl)return rl;var n,r=su,l=r.length,d,p="value"in Cr?Cr.value:Cr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var A=l-n;for(d=1;d<=A&&r[l-d]===p[v-d];d++);return rl=p.slice(n,1<d?1-d:void 0)}function sl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function al(){return!0}function ep(){return!1}function ei(n){function r(l,d,p,v,A){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(l=n[O],this[O]=l?l(v):v[O]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?al:ep,this.isPropagationStopped=ep,this}return le(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),r}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=ei(Fs),Xa=le({},Fs,{view:0,detail:0}),Z0=ei(Xa),ou,lu,ja,ol=le({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ja&&(ja&&n.type==="mousemove"?(ou=n.screenX-ja.screenX,lu=n.screenY-ja.screenY):lu=ou=0,ja=n),ou)},movementY:function(n){return"movementY"in n?n.movementY:lu}}),tp=ei(ol),J0=le({},ol,{dataTransfer:0}),Q0=ei(J0),ev=le({},Xa,{relatedTarget:0}),cu=ei(ev),tv=le({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=ei(tv),iv=le({},Fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rv=ei(iv),sv=le({},Fs,{data:0}),np=ei(sv),av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=lv[n])?!!r[n]:!1}function uu(){return cv}var uv=le({},Xa,{key:function(n){if(n.key){var r=av[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=sl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ov[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(n){return n.type==="keypress"?sl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dv=ei(uv),hv=le({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=ei(hv),fv=le({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),pv=ei(fv),mv=le({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=ei(mv),_v=le({},ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=ei(_v),xv=[9,13,27,32],du=u&&"CompositionEvent"in window,Ya=null;u&&"documentMode"in document&&(Ya=document.documentMode);var yv=u&&"TextEvent"in window&&!Ya,rp=u&&(!du||Ya&&8<Ya&&11>=Ya),sp=" ",ap=!1;function op(n,r){switch(n){case"keyup":return xv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Os=!1;function Sv(n,r){switch(n){case"compositionend":return lp(r);case"keypress":return r.which!==32?null:(ap=!0,sp);case"textInput":return n=r.data,n===sp&&ap?null:n;default:return null}}function Mv(n,r){if(Os)return n==="compositionend"||!du&&op(n,r)?(n=Qf(),rl=su=Cr=null,Os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return rp&&r.locale!=="ko"?null:r.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Ev[n.type]:r==="textarea"}function up(n,r,l,d){ge(d),r=hl(r,"onChange"),0<r.length&&(l=new au("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var Ka=null,qa=null;function Tv(n){Rp(n,0)}function ll(n){var r=Hs(n);if(Vt(r))return n}function wv(n,r){if(n==="change")return r}var dp=!1;if(u){var hu;if(u){var fu="oninput"in document;if(!fu){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),fu=typeof hp.oninput=="function"}hu=fu}else hu=!1;dp=hu&&(!document.documentMode||9<document.documentMode)}function fp(){Ka&&(Ka.detachEvent("onpropertychange",pp),qa=Ka=null)}function pp(n){if(n.propertyName==="value"&&ll(qa)){var r=[];up(r,qa,n,it(n)),Xe(Tv,r)}}function bv(n,r,l){n==="focusin"?(fp(),Ka=r,qa=l,Ka.attachEvent("onpropertychange",pp)):n==="focusout"&&fp()}function Av(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ll(qa)}function Rv(n,r){if(n==="click")return ll(r)}function Cv(n,r){if(n==="input"||n==="change")return ll(r)}function Pv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Si=typeof Object.is=="function"?Object.is:Pv;function $a(n,r){if(Si(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!h.call(r,p)||!Si(n[p],r[p]))return!1}return!0}function mp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gp(n,r){var l=mp(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=mp(l)}}function _p(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?_p(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function vp(){for(var n=window,r=dt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=dt(n.document)}return r}function pu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Nv(n){var r=vp(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&_p(l.ownerDocument.documentElement,l)){if(d!==null&&pu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(d.start,p);d=d.end===void 0?v:Math.min(d.end,p),!n.extend&&v>d&&(p=d,d=v,v=p),p=gp(l,v);var A=gp(l,d);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>d?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lv=u&&"documentMode"in document&&11>=document.documentMode,ks=null,mu=null,Za=null,gu=!1;function xp(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gu||ks==null||ks!==dt(d)||(d=ks,"selectionStart"in d&&pu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Za&&$a(Za,d)||(Za=d,d=hl(mu,"onSelect"),0<d.length&&(r=new au("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=ks)))}function cl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Bs={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},_u={},yp={};u&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function ul(n){if(_u[n])return _u[n];if(!Bs[n])return n;var r=Bs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in yp)return _u[n]=r[l];return n}var Sp=ul("animationend"),Mp=ul("animationiteration"),Ep=ul("animationstart"),Tp=ul("transitionend"),wp=new Map,bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,r){wp.set(n,r),o(r,[n])}for(var vu=0;vu<bp.length;vu++){var xu=bp[vu],Iv=xu.toLowerCase(),Dv=xu[0].toUpperCase()+xu.slice(1);Pr(Iv,"on"+Dv)}Pr(Sp,"onAnimationEnd"),Pr(Mp,"onAnimationIteration"),Pr(Ep,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Tp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function Ap(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,Jo(d,r,void 0,n),n.currentTarget=null}function Rp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],p=d.event;d=d.listeners;e:{var v=void 0;if(r)for(var A=d.length-1;0<=A;A--){var O=d[A],V=O.instance,de=O.currentTarget;if(O=O.listener,V!==v&&p.isPropagationStopped())break e;Ap(p,O,de),v=V}else for(A=0;A<d.length;A++){if(O=d[A],V=O.instance,de=O.currentTarget,O=O.listener,V!==v&&p.isPropagationStopped())break e;Ap(p,O,de),v=V}}}if(rs)throw n=ss,rs=!1,ss=null,n}function qt(n,r){var l=r[Au];l===void 0&&(l=r[Au]=new Set);var d=n+"__bubble";l.has(d)||(Cp(r,n,2,!1),l.add(d))}function yu(n,r,l){var d=0;r&&(d|=4),Cp(l,n,d,r)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Qa(n){if(!n[dl]){n[dl]=!0,i.forEach(function(l){l!=="selectionchange"&&(Uv.has(l)||yu(l,!1,n),yu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[dl]||(r[dl]=!0,yu("selectionchange",!1,r))}}function Cp(n,r,l,d){switch(Jf(r)){case 1:var p=q0;break;case 4:p=$0;break;default:p=iu}l=p.bind(null,r,l,n),p=void 0,!Dt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Su(n,r,l,d,p){var v=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var A=d.tag;if(A===3||A===4){var O=d.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(A===4)for(A=d.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;A=A.return}for(;O!==null;){if(A=cs(O),A===null)return;if(V=A.tag,V===5||V===6){d=v=A;continue e}O=O.parentNode}}d=d.return}Xe(function(){var de=v,Me=it(l),Te=[];e:{var Se=wp.get(n);if(Se!==void 0){var Ve=au,je=n;switch(n){case"keypress":if(sl(l)===0)break e;case"keydown":case"keyup":Ve=dv;break;case"focusin":je="focus",Ve=cu;break;case"focusout":je="blur",Ve=cu;break;case"beforeblur":case"afterblur":Ve=cu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=pv;break;case Sp:case Mp:case Ep:Ve=nv;break;case Tp:Ve=gv;break;case"scroll":Ve=Z0;break;case"wheel":Ve=vv;break;case"copy":case"cut":case"paste":Ve=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=ip}var $e=(r&4)!==0,on=!$e&&n==="scroll",ee=$e?Se!==null?Se+"Capture":null:Se;$e=[];for(var X=de,re;X!==null;){re=X;var be=re.stateNode;if(re.tag===5&&be!==null&&(re=be,ee!==null&&(be=Ht(X,ee),be!=null&&$e.push(eo(X,be,re)))),on)break;X=X.return}0<$e.length&&(Se=new Ve(Se,je,null,l,Me),Te.push({event:Se,listeners:$e}))}}if((r&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",Se&&l!==Ne&&(je=l.relatedTarget||l.fromElement)&&(cs(je)||je[rr]))break e;if((Ve||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Ve?(je=l.relatedTarget||l.toElement,Ve=de,je=je?cs(je):null,je!==null&&(on=kn(je),je!==on||je.tag!==5&&je.tag!==6)&&(je=null)):(Ve=null,je=de),Ve!==je)){if($e=tp,be="onMouseLeave",ee="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&($e=ip,be="onPointerLeave",ee="onPointerEnter",X="pointer"),on=Ve==null?Se:Hs(Ve),re=je==null?Se:Hs(je),Se=new $e(be,X+"leave",Ve,l,Me),Se.target=on,Se.relatedTarget=re,be=null,cs(Me)===de&&($e=new $e(ee,X+"enter",je,l,Me),$e.target=re,$e.relatedTarget=on,be=$e),on=be,Ve&&je)t:{for($e=Ve,ee=je,X=0,re=$e;re;re=zs(re))X++;for(re=0,be=ee;be;be=zs(be))re++;for(;0<X-re;)$e=zs($e),X--;for(;0<re-X;)ee=zs(ee),re--;for(;X--;){if($e===ee||ee!==null&&$e===ee.alternate)break t;$e=zs($e),ee=zs(ee)}$e=null}else $e=null;Ve!==null&&Pp(Te,Se,Ve,$e,!1),je!==null&&on!==null&&Pp(Te,on,je,$e,!0)}}e:{if(Se=de?Hs(de):window,Ve=Se.nodeName&&Se.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&Se.type==="file")var Qe=wv;else if(cp(Se))if(dp)Qe=Cv;else{Qe=Av;var ot=bv}else(Ve=Se.nodeName)&&Ve.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Qe=Rv);if(Qe&&(Qe=Qe(n,de))){up(Te,Qe,l,Me);break e}ot&&ot(n,Se,de),n==="focusout"&&(ot=Se._wrapperState)&&ot.controlled&&Se.type==="number"&&Be(Se,"number",Se.value)}switch(ot=de?Hs(de):window,n){case"focusin":(cp(ot)||ot.contentEditable==="true")&&(ks=ot,mu=de,Za=null);break;case"focusout":Za=mu=ks=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,xp(Te,l,Me);break;case"selectionchange":if(Lv)break;case"keydown":case"keyup":xp(Te,l,Me)}var lt;if(du)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else Os?op(n,l)&&(pt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(pt="onCompositionStart");pt&&(rp&&l.locale!=="ko"&&(Os||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Os&&(lt=Qf()):(Cr=Me,su="value"in Cr?Cr.value:Cr.textContent,Os=!0)),ot=hl(de,pt),0<ot.length&&(pt=new np(pt,n,null,l,Me),Te.push({event:pt,listeners:ot}),lt?pt.data=lt:(lt=lp(l),lt!==null&&(pt.data=lt)))),(lt=yv?Sv(n,l):Mv(n,l))&&(de=hl(de,"onBeforeInput"),0<de.length&&(Me=new np("onBeforeInput","beforeinput",null,l,Me),Te.push({event:Me,listeners:de}),Me.data=lt))}Rp(Te,r)})}function eo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function hl(n,r){for(var l=r+"Capture",d=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Ht(n,l),v!=null&&d.unshift(eo(n,v,p)),v=Ht(n,r),v!=null&&d.push(eo(n,v,p))),n=n.return}return d}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pp(n,r,l,d,p){for(var v=r._reactName,A=[];l!==null&&l!==d;){var O=l,V=O.alternate,de=O.stateNode;if(V!==null&&V===d)break;O.tag===5&&de!==null&&(O=de,p?(V=Ht(l,v),V!=null&&A.unshift(eo(l,V,O))):p||(V=Ht(l,v),V!=null&&A.push(eo(l,V,O)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var Fv=/\r\n?/g,Ov=/\u0000|\uFFFD/g;function Np(n){return(typeof n=="string"?n:""+n).replace(Fv,`
`).replace(Ov,"")}function fl(n,r,l){if(r=Np(r),Np(n)!==r&&l)throw Error(t(425))}function pl(){}var Mu=null,Eu=null;function Tu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,Bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(n){return Lp.resolve(null).then(n).catch(zv)}:wu;function zv(n){setTimeout(function(){throw n})}function bu(n,r){var l=r,d=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){n.removeChild(p),Wa(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Wa(r)}function Nr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Ip(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),zi="__reactFiber$"+Vs,to="__reactProps$"+Vs,rr="__reactContainer$"+Vs,Au="__reactEvents$"+Vs,Vv="__reactListeners$"+Vs,Hv="__reactHandles$"+Vs;function cs(n){var r=n[zi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[rr]||l[zi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Ip(n);n!==null;){if(l=n[zi])return l;n=Ip(n)}return r}n=l,l=n.parentNode}return null}function no(n){return n=n[zi]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ml(n){return n[to]||null}var Ru=[],Gs=-1;function Lr(n){return{current:n}}function $t(n){0>Gs||(n.current=Ru[Gs],Ru[Gs]=null,Gs--)}function Yt(n,r){Gs++,Ru[Gs]=n.current,n.current=r}var Ir={},Nn=Lr(Ir),jn=Lr(!1),us=Ir;function Ws(n,r){var l=n.type.contextTypes;if(!l)return Ir;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(n){return n=n.childContextTypes,n!=null}function gl(){$t(jn),$t(Nn)}function Dp(n,r,l){if(Nn.current!==Ir)throw Error(t(168));Yt(Nn,r),Yt(jn,l)}function Up(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in r))throw Error(t(108,_e(n)||"Unknown",p));return le({},l,d)}function _l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,us=Nn.current,Yt(Nn,n),Yt(jn,jn.current),!0}function Fp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=Up(n,r,us),d.__reactInternalMemoizedMergedChildContext=n,$t(jn),$t(Nn),Yt(Nn,n)):$t(jn),Yt(jn,l)}var sr=null,vl=!1,Cu=!1;function Op(n){sr===null?sr=[n]:sr.push(n)}function Gv(n){vl=!0,Op(n)}function Dr(){if(!Cu&&sr!==null){Cu=!0;var n=0,r=bt;try{var l=sr;for(bt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}sr=null,vl=!1}catch(p){throw sr!==null&&(sr=sr.slice(n+1)),os(Ba,Dr),p}finally{bt=r,Cu=!1}}return null}var Xs=[],js=0,xl=null,yl=0,ci=[],ui=0,ds=null,ar=1,or="";function hs(n,r){Xs[js++]=yl,Xs[js++]=xl,xl=n,yl=r}function kp(n,r,l){ci[ui++]=ar,ci[ui++]=or,ci[ui++]=ds,ds=n;var d=ar;n=or;var p=32-Ae(d)-1;d&=~(1<<p),l+=1;var v=32-Ae(r)+p;if(30<v){var A=p-p%5;v=(d&(1<<A)-1).toString(32),d>>=A,p-=A,ar=1<<32-Ae(r)+p|l<<p|d,or=v+n}else ar=1<<v|l<<p|d,or=n}function Pu(n){n.return!==null&&(hs(n,1),kp(n,1,0))}function Nu(n){for(;n===xl;)xl=Xs[--js],Xs[js]=null,yl=Xs[--js],Xs[js]=null;for(;n===ds;)ds=ci[--ui],ci[ui]=null,or=ci[--ui],ci[ui]=null,ar=ci[--ui],ci[ui]=null}var ti=null,ni=null,Jt=!1,Mi=null;function Bp(n,r){var l=pi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function zp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ti=n,ni=Nr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ti=n,ni=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ds!==null?{id:ar,overflow:or}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=pi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ti=n,ni=null,!0):!1;default:return!1}}function Lu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Iu(n){if(Jt){var r=ni;if(r){var l=r;if(!zp(n,r)){if(Lu(n))throw Error(t(418));r=Nr(l.nextSibling);var d=ti;r&&zp(n,r)?Bp(d,l):(n.flags=n.flags&-4097|2,Jt=!1,ti=n)}}else{if(Lu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,ti=n}}}function Vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ti=n}function Sl(n){if(n!==ti)return!1;if(!Jt)return Vp(n),Jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Tu(n.type,n.memoizedProps)),r&&(r=ni)){if(Lu(n))throw Hp(),Error(t(418));for(;r;)Bp(n,r),r=Nr(r.nextSibling)}if(Vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ni=Nr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ni=null}}else ni=ti?Nr(n.stateNode.nextSibling):null;return!0}function Hp(){for(var n=ni;n;)n=Nr(n.nextSibling)}function Ys(){ni=ti=null,Jt=!1}function Du(n){Mi===null?Mi=[n]:Mi.push(n)}var Wv=w.ReactCurrentBatchConfig;function io(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var p=d,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(A){var O=p.refs;A===null?delete O[v]:O[v]=A},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Gp(n){var r=n._init;return r(n._payload)}function Wp(n){function r(ee,X){if(n){var re=ee.deletions;re===null?(ee.deletions=[X],ee.flags|=16):re.push(X)}}function l(ee,X){if(!n)return null;for(;X!==null;)r(ee,X),X=X.sibling;return null}function d(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function p(ee,X){return ee=Hr(ee,X),ee.index=0,ee.sibling=null,ee}function v(ee,X,re){return ee.index=re,n?(re=ee.alternate,re!==null?(re=re.index,re<X?(ee.flags|=2,X):re):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function A(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function O(ee,X,re,be){return X===null||X.tag!==6?(X=wd(re,ee.mode,be),X.return=ee,X):(X=p(X,re),X.return=ee,X)}function V(ee,X,re,be){var Qe=re.type;return Qe===F?Me(ee,X,re.props.children,be,re.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===oe&&Gp(Qe)===X.type)?(be=p(X,re.props),be.ref=io(ee,X,re),be.return=ee,be):(be=jl(re.type,re.key,re.props,null,ee.mode,be),be.ref=io(ee,X,re),be.return=ee,be)}function de(ee,X,re,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=bd(re,ee.mode,be),X.return=ee,X):(X=p(X,re.children||[]),X.return=ee,X)}function Me(ee,X,re,be,Qe){return X===null||X.tag!==7?(X=ys(re,ee.mode,be,Qe),X.return=ee,X):(X=p(X,re),X.return=ee,X)}function Te(ee,X,re){if(typeof X=="string"&&X!==""||typeof X=="number")return X=wd(""+X,ee.mode,re),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case L:return re=jl(X.type,X.key,X.props,null,ee.mode,re),re.ref=io(ee,null,X),re.return=ee,re;case P:return X=bd(X,ee.mode,re),X.return=ee,X;case oe:var be=X._init;return Te(ee,be(X._payload),re)}if(st(X)||se(X))return X=ys(X,ee.mode,re,null),X.return=ee,X;Ml(ee,X)}return null}function Se(ee,X,re,be){var Qe=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Qe!==null?null:O(ee,X,""+re,be);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case L:return re.key===Qe?V(ee,X,re,be):null;case P:return re.key===Qe?de(ee,X,re,be):null;case oe:return Qe=re._init,Se(ee,X,Qe(re._payload),be)}if(st(re)||se(re))return Qe!==null?null:Me(ee,X,re,be,null);Ml(ee,re)}return null}function Ve(ee,X,re,be,Qe){if(typeof be=="string"&&be!==""||typeof be=="number")return ee=ee.get(re)||null,O(X,ee,""+be,Qe);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case L:return ee=ee.get(be.key===null?re:be.key)||null,V(X,ee,be,Qe);case P:return ee=ee.get(be.key===null?re:be.key)||null,de(X,ee,be,Qe);case oe:var ot=be._init;return Ve(ee,X,re,ot(be._payload),Qe)}if(st(be)||se(be))return ee=ee.get(re)||null,Me(X,ee,be,Qe,null);Ml(X,be)}return null}function je(ee,X,re,be){for(var Qe=null,ot=null,lt=X,pt=X=0,Mn=null;lt!==null&&pt<re.length;pt++){lt.index>pt?(Mn=lt,lt=null):Mn=lt.sibling;var It=Se(ee,lt,re[pt],be);if(It===null){lt===null&&(lt=Mn);break}n&&lt&&It.alternate===null&&r(ee,lt),X=v(It,X,pt),ot===null?Qe=It:ot.sibling=It,ot=It,lt=Mn}if(pt===re.length)return l(ee,lt),Jt&&hs(ee,pt),Qe;if(lt===null){for(;pt<re.length;pt++)lt=Te(ee,re[pt],be),lt!==null&&(X=v(lt,X,pt),ot===null?Qe=lt:ot.sibling=lt,ot=lt);return Jt&&hs(ee,pt),Qe}for(lt=d(ee,lt);pt<re.length;pt++)Mn=Ve(lt,ee,pt,re[pt],be),Mn!==null&&(n&&Mn.alternate!==null&&lt.delete(Mn.key===null?pt:Mn.key),X=v(Mn,X,pt),ot===null?Qe=Mn:ot.sibling=Mn,ot=Mn);return n&&lt.forEach(function(Gr){return r(ee,Gr)}),Jt&&hs(ee,pt),Qe}function $e(ee,X,re,be){var Qe=se(re);if(typeof Qe!="function")throw Error(t(150));if(re=Qe.call(re),re==null)throw Error(t(151));for(var ot=Qe=null,lt=X,pt=X=0,Mn=null,It=re.next();lt!==null&&!It.done;pt++,It=re.next()){lt.index>pt?(Mn=lt,lt=null):Mn=lt.sibling;var Gr=Se(ee,lt,It.value,be);if(Gr===null){lt===null&&(lt=Mn);break}n&&lt&&Gr.alternate===null&&r(ee,lt),X=v(Gr,X,pt),ot===null?Qe=Gr:ot.sibling=Gr,ot=Gr,lt=Mn}if(It.done)return l(ee,lt),Jt&&hs(ee,pt),Qe;if(lt===null){for(;!It.done;pt++,It=re.next())It=Te(ee,It.value,be),It!==null&&(X=v(It,X,pt),ot===null?Qe=It:ot.sibling=It,ot=It);return Jt&&hs(ee,pt),Qe}for(lt=d(ee,lt);!It.done;pt++,It=re.next())It=Ve(lt,ee,pt,It.value,be),It!==null&&(n&&It.alternate!==null&&lt.delete(It.key===null?pt:It.key),X=v(It,X,pt),ot===null?Qe=It:ot.sibling=It,ot=It);return n&&lt.forEach(function(Ex){return r(ee,Ex)}),Jt&&hs(ee,pt),Qe}function on(ee,X,re,be){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case L:e:{for(var Qe=re.key,ot=X;ot!==null;){if(ot.key===Qe){if(Qe=re.type,Qe===F){if(ot.tag===7){l(ee,ot.sibling),X=p(ot,re.props.children),X.return=ee,ee=X;break e}}else if(ot.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===oe&&Gp(Qe)===ot.type){l(ee,ot.sibling),X=p(ot,re.props),X.ref=io(ee,ot,re),X.return=ee,ee=X;break e}l(ee,ot);break}else r(ee,ot);ot=ot.sibling}re.type===F?(X=ys(re.props.children,ee.mode,be,re.key),X.return=ee,ee=X):(be=jl(re.type,re.key,re.props,null,ee.mode,be),be.ref=io(ee,X,re),be.return=ee,ee=be)}return A(ee);case P:e:{for(ot=re.key;X!==null;){if(X.key===ot)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){l(ee,X.sibling),X=p(X,re.children||[]),X.return=ee,ee=X;break e}else{l(ee,X);break}else r(ee,X);X=X.sibling}X=bd(re,ee.mode,be),X.return=ee,ee=X}return A(ee);case oe:return ot=re._init,on(ee,X,ot(re._payload),be)}if(st(re))return je(ee,X,re,be);if(se(re))return $e(ee,X,re,be);Ml(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,X!==null&&X.tag===6?(l(ee,X.sibling),X=p(X,re),X.return=ee,ee=X):(l(ee,X),X=wd(re,ee.mode,be),X.return=ee,ee=X),A(ee)):l(ee,X)}return on}var Ks=Wp(!0),Xp=Wp(!1),El=Lr(null),Tl=null,qs=null,Uu=null;function Fu(){Uu=qs=Tl=null}function Ou(n){var r=El.current;$t(El),n._currentValue=r}function ku(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function $s(n,r){Tl=n,Uu=qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kn=!0),n.firstContext=null)}function di(n){var r=n._currentValue;if(Uu!==n)if(n={context:n,memoizedValue:r,next:null},qs===null){if(Tl===null)throw Error(t(308));qs=n,Tl.dependencies={lanes:0,firstContext:n}}else qs=qs.next=n;return r}var fs=null;function Bu(n){fs===null?fs=[n]:fs.push(n)}function jp(n,r,l,d){var p=r.interleaved;return p===null?(l.next=l,Bu(r)):(l.next=p.next,p.next=l),r.interleaved=l,lr(n,d)}function lr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ur=!1;function zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Fr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Lt&2)!==0){var p=d.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),d.pending=r,lr(n,l)}return p=d.interleaved,p===null?(r.next=r,Bu(d)):(r.next=p.next,p.next=r),d.interleaved=r,lr(n,l)}function wl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Xn(n,l)}}function Kp(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=A:v=v.next=A,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function bl(n,r,l,d){var p=n.updateQueue;Ur=!1;var v=p.firstBaseUpdate,A=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var V=O,de=V.next;V.next=null,A===null?v=de:A.next=de,A=V;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,O=Me.lastBaseUpdate,O!==A&&(O===null?Me.firstBaseUpdate=de:O.next=de,Me.lastBaseUpdate=V))}if(v!==null){var Te=p.baseState;A=0,Me=de=V=null,O=v;do{var Se=O.lane,Ve=O.eventTime;if((d&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Ve,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var je=n,$e=O;switch(Se=r,Ve=l,$e.tag){case 1:if(je=$e.payload,typeof je=="function"){Te=je.call(Ve,Te,Se);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,Se=typeof je=="function"?je.call(Ve,Te,Se):je,Se==null)break e;Te=le({},Te,Se);break e;case 2:Ur=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Se=p.effects,Se===null?p.effects=[O]:Se.push(O))}else Ve={eventTime:Ve,lane:Se,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Me===null?(de=Me=Ve,V=Te):Me=Me.next=Ve,A|=Se;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;Se=O,O=Se.next,Se.next=null,p.lastBaseUpdate=Se,p.shared.pending=null}}while(!0);if(Me===null&&(V=Te),p.baseState=V,p.firstBaseUpdate=de,p.lastBaseUpdate=Me,r=p.shared.interleaved,r!==null){p=r;do A|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);gs|=A,n.lanes=A,n.memoizedState=Te}}function qp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var ro={},Vi=Lr(ro),so=Lr(ro),ao=Lr(ro);function ps(n){if(n===ro)throw Error(t(174));return n}function Vu(n,r){switch(Yt(ao,r),Yt(so,n),Yt(Vi,ro),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}$t(Vi),Yt(Vi,r)}function Zs(){$t(Vi),$t(so),$t(ao)}function $p(n){ps(ao.current);var r=ps(Vi.current),l=E(r,n.type);r!==l&&(Yt(so,n),Yt(Vi,l))}function Hu(n){so.current===n&&($t(Vi),$t(so))}var tn=Lr(0);function Al(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Gu=[];function Wu(){for(var n=0;n<Gu.length;n++)Gu[n]._workInProgressVersionPrimary=null;Gu.length=0}var Rl=w.ReactCurrentDispatcher,Xu=w.ReactCurrentBatchConfig,ms=0,nn=null,hn=null,yn=null,Cl=!1,oo=!1,lo=0,Xv=0;function Ln(){throw Error(t(321))}function ju(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Si(n[l],r[l]))return!1;return!0}function Yu(n,r,l,d,p,v){if(ms=v,nn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Rl.current=n===null||n.memoizedState===null?qv:$v,n=l(d,p),oo){v=0;do{if(oo=!1,lo=0,25<=v)throw Error(t(301));v+=1,yn=hn=null,r.updateQueue=null,Rl.current=Zv,n=l(d,p)}while(oo)}if(Rl.current=Ll,r=hn!==null&&hn.next!==null,ms=0,yn=hn=nn=null,Cl=!1,r)throw Error(t(300));return n}function Ku(){var n=lo!==0;return lo=0,n}function Hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function hi(){if(hn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var r=yn===null?nn.memoizedState:yn.next;if(r!==null)yn=r,hn=n;else{if(n===null)throw Error(t(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function co(n,r){return typeof r=="function"?r(n):r}function qu(n){var r=hi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=hn,p=d.baseQueue,v=l.pending;if(v!==null){if(p!==null){var A=p.next;p.next=v.next,v.next=A}d.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,d=d.baseState;var O=A=null,V=null,de=v;do{var Me=de.lane;if((ms&Me)===Me)V!==null&&(V=V.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),d=de.hasEagerState?de.eagerState:n(d,de.action);else{var Te={lane:Me,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};V===null?(O=V=Te,A=d):V=V.next=Te,nn.lanes|=Me,gs|=Me}de=de.next}while(de!==null&&de!==v);V===null?A=d:V.next=O,Si(d,r.memoizedState)||(Kn=!0),r.memoizedState=d,r.baseState=A,r.baseQueue=V,l.lastRenderedState=d}if(n=l.interleaved,n!==null){p=n;do v=p.lane,nn.lanes|=v,gs|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function $u(n){var r=hi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do v=n(v,A.action),A=A.next;while(A!==p);Si(v,r.memoizedState)||(Kn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,d]}function Zp(){}function Jp(n,r){var l=nn,d=hi(),p=r(),v=!Si(d.memoizedState,p);if(v&&(d.memoizedState=p,Kn=!0),d=d.queue,Zu(tm.bind(null,l,d,n),[n]),d.getSnapshot!==r||v||yn!==null&&yn.memoizedState.tag&1){if(l.flags|=2048,uo(9,em.bind(null,l,d,p,r),void 0,null),Sn===null)throw Error(t(349));(ms&30)!==0||Qp(l,r,p)}return p}function Qp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function em(n,r,l,d){r.value=l,r.getSnapshot=d,nm(r)&&im(n)}function tm(n,r,l){return l(function(){nm(r)&&im(n)})}function nm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Si(n,l)}catch{return!0}}function im(n){var r=lr(n,1);r!==null&&bi(r,n,1,-1)}function rm(n){var r=Hi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:n},r.queue=n,n=n.dispatch=Kv.bind(null,nn,n),[r.memoizedState,n]}function uo(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function sm(){return hi().memoizedState}function Pl(n,r,l,d){var p=Hi();nn.flags|=n,p.memoizedState=uo(1|r,l,void 0,d===void 0?null:d)}function Nl(n,r,l,d){var p=hi();d=d===void 0?null:d;var v=void 0;if(hn!==null){var A=hn.memoizedState;if(v=A.destroy,d!==null&&ju(d,A.deps)){p.memoizedState=uo(r,l,v,d);return}}nn.flags|=n,p.memoizedState=uo(1|r,l,v,d)}function am(n,r){return Pl(8390656,8,n,r)}function Zu(n,r){return Nl(2048,8,n,r)}function om(n,r){return Nl(4,2,n,r)}function lm(n,r){return Nl(4,4,n,r)}function cm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function um(n,r,l){return l=l!=null?l.concat([n]):null,Nl(4,4,cm.bind(null,r,n),l)}function Ju(){}function dm(n,r){var l=hi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&ju(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function hm(n,r){var l=hi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&ju(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function fm(n,r,l){return(ms&21)===0?(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=l):(Si(l,r)||(l=ze(),nn.lanes|=l,gs|=l,n.baseState=!0),r)}function jv(n,r){var l=bt;bt=l!==0&&4>l?l:4,n(!0);var d=Xu.transition;Xu.transition={};try{n(!1),r()}finally{bt=l,Xu.transition=d}}function pm(){return hi().memoizedState}function Yv(n,r,l){var d=zr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},mm(n))gm(r,l);else if(l=jp(n,r,l,d),l!==null){var p=zn();bi(l,n,d,p),_m(l,r,d)}}function Kv(n,r,l){var d=zr(n),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(mm(n))gm(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var A=r.lastRenderedState,O=v(A,l);if(p.hasEagerState=!0,p.eagerState=O,Si(O,A)){var V=r.interleaved;V===null?(p.next=p,Bu(r)):(p.next=V.next,V.next=p),r.interleaved=p;return}}catch{}finally{}l=jp(n,r,p,d),l!==null&&(p=zn(),bi(l,n,d,p),_m(l,r,d))}}function mm(n){var r=n.alternate;return n===nn||r!==null&&r===nn}function gm(n,r){oo=Cl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function _m(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Xn(n,l)}}var Ll={readContext:di,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},qv={readContext:di,useCallback:function(n,r){return Hi().memoizedState=[n,r===void 0?null:r],n},useContext:di,useEffect:am,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Pl(4194308,4,cm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Pl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Pl(4,2,n,r)},useMemo:function(n,r){var l=Hi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Hi();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=Yv.bind(null,nn,n),[d.memoizedState,n]},useRef:function(n){var r=Hi();return n={current:n},r.memoizedState=n},useState:rm,useDebugValue:Ju,useDeferredValue:function(n){return Hi().memoizedState=n},useTransition:function(){var n=rm(!1),r=n[0];return n=jv.bind(null,n[1]),Hi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=nn,p=Hi();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Sn===null)throw Error(t(349));(ms&30)!==0||Qp(d,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,am(tm.bind(null,d,v,n),[n]),d.flags|=2048,uo(9,em.bind(null,d,v,l,r),void 0,null),l},useId:function(){var n=Hi(),r=Sn.identifierPrefix;if(Jt){var l=or,d=ar;l=(d&~(1<<32-Ae(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=lo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Xv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},$v={readContext:di,useCallback:dm,useContext:di,useEffect:Zu,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:qu,useRef:sm,useState:function(){return qu(co)},useDebugValue:Ju,useDeferredValue:function(n){var r=hi();return fm(r,hn.memoizedState,n)},useTransition:function(){var n=qu(co)[0],r=hi().memoizedState;return[n,r]},useMutableSource:Zp,useSyncExternalStore:Jp,useId:pm,unstable_isNewReconciler:!1},Zv={readContext:di,useCallback:dm,useContext:di,useEffect:Zu,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:$u,useRef:sm,useState:function(){return $u(co)},useDebugValue:Ju,useDeferredValue:function(n){var r=hi();return hn===null?r.memoizedState=n:fm(r,hn.memoizedState,n)},useTransition:function(){var n=$u(co)[0],r=hi().memoizedState;return[n,r]},useMutableSource:Zp,useSyncExternalStore:Jp,useId:pm,unstable_isNewReconciler:!1};function Ei(n,r){if(n&&n.defaultProps){r=le({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Qu(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:le({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Il={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=zn(),p=zr(n),v=cr(d,p);v.payload=r,l!=null&&(v.callback=l),r=Fr(n,v,p),r!==null&&(bi(r,n,p,d),wl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=zn(),p=zr(n),v=cr(d,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Fr(n,v,p),r!==null&&(bi(r,n,p,d),wl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=zn(),d=zr(n),p=cr(l,d);p.tag=2,r!=null&&(p.callback=r),r=Fr(n,p,d),r!==null&&(bi(r,n,d,l),wl(r,n,d))}};function vm(n,r,l,d,p,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,v,A):r.prototype&&r.prototype.isPureReactComponent?!$a(l,d)||!$a(p,v):!0}function xm(n,r,l){var d=!1,p=Ir,v=r.contextType;return typeof v=="object"&&v!==null?v=di(v):(p=Yn(r)?us:Nn.current,d=r.contextTypes,v=(d=d!=null)?Ws(n,p):Ir),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Il,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function ym(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Il.enqueueReplaceState(r,r.state,null)}function ed(n,r,l,d){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},zu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=di(v):(v=Yn(r)?us:Nn.current,p.context=Ws(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Qu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Il.enqueueReplaceState(p,p.state,null),bl(n,l,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,r){try{var l="",d=r;do l+=ve(d),d=d.return;while(d);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function td(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function nd(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Jv=typeof WeakMap=="function"?WeakMap:Map;function Sm(n,r,l){l=cr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){zl||(zl=!0,_d=d),nd(n,r)},l}function Mm(n,r,l){l=cr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=r.value;l.payload=function(){return d(p)},l.callback=function(){nd(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){nd(n,r),typeof d!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function Em(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new Jv;var p=new Set;d.set(r,p)}else p=d.get(r),p===void 0&&(p=new Set,d.set(r,p));p.has(l)||(p.add(l),n=hx.bind(null,n,r,l),r.then(n,n))}function Tm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function wm(n,r,l,d,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=cr(-1,1),r.tag=2,Fr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Qv=w.ReactCurrentOwner,Kn=!1;function Bn(n,r,l,d){r.child=n===null?Xp(r,null,l,d):Ks(r,n.child,l,d)}function bm(n,r,l,d,p){l=l.render;var v=r.ref;return $s(r,p),d=Yu(n,r,l,d,v,p),l=Ku(),n!==null&&!Kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ur(n,r,p)):(Jt&&l&&Pu(r),r.flags|=1,Bn(n,r,d,p),r.child)}function Am(n,r,l,d,p){if(n===null){var v=l.type;return typeof v=="function"&&!Td(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Rm(n,r,v,d,p)):(n=jl(l.type,null,d,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var A=v.memoizedProps;if(l=l.compare,l=l!==null?l:$a,l(A,d)&&n.ref===r.ref)return ur(n,r,p)}return r.flags|=1,n=Hr(v,d),n.ref=r.ref,n.return=r,r.child=n}function Rm(n,r,l,d,p){if(n!==null){var v=n.memoizedProps;if($a(v,d)&&n.ref===r.ref)if(Kn=!1,r.pendingProps=d=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Kn=!0);else return r.lanes=n.lanes,ur(n,r,p)}return id(n,r,l,d,p)}function Cm(n,r,l){var d=r.pendingProps,p=d.children,v=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Yt(ea,ii),ii|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Yt(ea,ii),ii|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:l,Yt(ea,ii),ii|=d}else v!==null?(d=v.baseLanes|l,r.memoizedState=null):d=l,Yt(ea,ii),ii|=d;return Bn(n,r,p,l),r.child}function Pm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function id(n,r,l,d,p){var v=Yn(l)?us:Nn.current;return v=Ws(r,v),$s(r,p),l=Yu(n,r,l,d,v,p),d=Ku(),n!==null&&!Kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ur(n,r,p)):(Jt&&d&&Pu(r),r.flags|=1,Bn(n,r,l,p),r.child)}function Nm(n,r,l,d,p){if(Yn(l)){var v=!0;_l(r)}else v=!1;if($s(r,p),r.stateNode===null)Ul(n,r),xm(r,l,d),ed(r,l,d,p),d=!0;else if(n===null){var A=r.stateNode,O=r.memoizedProps;A.props=O;var V=A.context,de=l.contextType;typeof de=="object"&&de!==null?de=di(de):(de=Yn(l)?us:Nn.current,de=Ws(r,de));var Me=l.getDerivedStateFromProps,Te=typeof Me=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==d||V!==de)&&ym(r,A,d,de),Ur=!1;var Se=r.memoizedState;A.state=Se,bl(r,d,A,p),V=r.memoizedState,O!==d||Se!==V||jn.current||Ur?(typeof Me=="function"&&(Qu(r,l,Me,d),V=r.memoizedState),(O=Ur||vm(r,l,O,d,Se,V,de))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=V),A.props=d,A.state=V,A.context=de,d=O):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{A=r.stateNode,Yp(n,r),O=r.memoizedProps,de=r.type===r.elementType?O:Ei(r.type,O),A.props=de,Te=r.pendingProps,Se=A.context,V=l.contextType,typeof V=="object"&&V!==null?V=di(V):(V=Yn(l)?us:Nn.current,V=Ws(r,V));var Ve=l.getDerivedStateFromProps;(Me=typeof Ve=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==Te||Se!==V)&&ym(r,A,d,V),Ur=!1,Se=r.memoizedState,A.state=Se,bl(r,d,A,p);var je=r.memoizedState;O!==Te||Se!==je||jn.current||Ur?(typeof Ve=="function"&&(Qu(r,l,Ve,d),je=r.memoizedState),(de=Ur||vm(r,l,de,d,Se,je,V)||!1)?(Me||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(d,je,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(d,je,V)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=je),A.props=d,A.state=je,A.context=V,d=de):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),d=!1)}return rd(n,r,l,d,v,p)}function rd(n,r,l,d,p,v){Pm(n,r);var A=(r.flags&128)!==0;if(!d&&!A)return p&&Fp(r,l,!1),ur(n,r,v);d=r.stateNode,Qv.current=r;var O=A&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&A?(r.child=Ks(r,n.child,null,v),r.child=Ks(r,null,O,v)):Bn(n,r,O,v),r.memoizedState=d.state,p&&Fp(r,l,!0),r.child}function Lm(n){var r=n.stateNode;r.pendingContext?Dp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Dp(n,r.context,!1),Vu(n,r.containerInfo)}function Im(n,r,l,d,p){return Ys(),Du(p),r.flags|=256,Bn(n,r,l,d),r.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function ad(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dm(n,r,l){var d=r.pendingProps,p=tn.current,v=!1,A=(r.flags&128)!==0,O;if((O=A)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Yt(tn,p&1),n===null)return Iu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=d.children,n=d.fallback,v?(d=r.mode,v=r.child,A={mode:"hidden",children:A},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=Yl(A,d,0,null),n=ys(n,d,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=ad(l),r.memoizedState=sd,n):od(r,A));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return ex(n,r,A,d,O,p,l);if(v){v=d.fallback,A=r.mode,p=n.child,O=p.sibling;var V={mode:"hidden",children:d.children};return(A&1)===0&&r.child!==p?(d=r.child,d.childLanes=0,d.pendingProps=V,r.deletions=null):(d=Hr(p,V),d.subtreeFlags=p.subtreeFlags&14680064),O!==null?v=Hr(O,v):(v=ys(v,A,l,null),v.flags|=2),v.return=r,d.return=r,d.sibling=v,r.child=d,d=v,v=r.child,A=n.child.memoizedState,A=A===null?ad(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~l,r.memoizedState=sd,d}return v=n.child,n=v.sibling,d=Hr(v,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function od(n,r){return r=Yl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Dl(n,r,l,d){return d!==null&&Du(d),Ks(r,n.child,null,l),n=od(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ex(n,r,l,d,p,v,A){if(l)return r.flags&256?(r.flags&=-257,d=td(Error(t(422))),Dl(n,r,A,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=d.fallback,p=r.mode,d=Yl({mode:"visible",children:d.children},p,0,null),v=ys(v,p,A,null),v.flags|=2,d.return=r,v.return=r,d.sibling=v,r.child=d,(r.mode&1)!==0&&Ks(r,n.child,null,A),r.child.memoizedState=ad(A),r.memoizedState=sd,v);if((r.mode&1)===0)return Dl(n,r,A,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var O=d.dgst;return d=O,v=Error(t(419)),d=td(v,d,void 0),Dl(n,r,A,d)}if(O=(A&n.childLanes)!==0,Kn||O){if(d=Sn,d!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|A))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,lr(n,p),bi(d,n,p,-1))}return Ed(),d=td(Error(t(421))),Dl(n,r,A,d)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=fx.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,ni=Nr(p.nextSibling),ti=r,Jt=!0,Mi=null,n!==null&&(ci[ui++]=ar,ci[ui++]=or,ci[ui++]=ds,ar=n.id,or=n.overflow,ds=r),r=od(r,d.children),r.flags|=4096,r)}function Um(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),ku(n.return,r,l)}function ld(n,r,l,d,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=l,v.tailMode=p)}function Fm(n,r,l){var d=r.pendingProps,p=d.revealOrder,v=d.tail;if(Bn(n,r,d.children,l),d=tn.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Um(n,l,r);else if(n.tag===19)Um(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Yt(tn,d),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Al(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),ld(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Al(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}ld(r,!0,l,null,v);break;case"together":ld(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ul(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ur(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),gs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Hr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Hr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function tx(n,r,l){switch(r.tag){case 3:Lm(r),Ys();break;case 5:$p(r);break;case 1:Yn(r.type)&&_l(r);break;case 4:Vu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,p=r.memoizedProps.value;Yt(El,d._currentValue),d._currentValue=p;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Yt(tn,tn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Dm(n,r,l):(Yt(tn,tn.current&1),n=ur(n,r,l),n!==null?n.sibling:null);Yt(tn,tn.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return Fm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Yt(tn,tn.current),d)break;return null;case 22:case 23:return r.lanes=0,Cm(n,r,l)}return ur(n,r,l)}var Om,cd,km,Bm;Om=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},cd=function(){},km=function(n,r,l,d){var p=n.memoizedProps;if(p!==d){n=r.stateNode,ps(Vi.current);var v=null;switch(l){case"input":p=Pt(n,p),d=Pt(n,d),v=[];break;case"select":p=le({},p,{value:void 0}),d=le({},d,{value:void 0}),v=[];break;case"textarea":p=Mt(n,p),d=Mt(n,d),v=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=pl)}Ze(l,d);var A;l=null;for(de in p)if(!d.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var O=p[de];for(A in O)O.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?v||(v=[]):(v=v||[]).push(de,null));for(de in d){var V=d[de];if(O=p!=null?p[de]:void 0,d.hasOwnProperty(de)&&V!==O&&(V!=null||O!=null))if(de==="style")if(O){for(A in O)!O.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in V)V.hasOwnProperty(A)&&O[A]!==V[A]&&(l||(l={}),l[A]=V[A])}else l||(v||(v=[]),v.push(de,l)),l=V;else de==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(v=v||[]).push(de,V)):de==="children"?typeof V!="string"&&typeof V!="number"||(v=v||[]).push(de,""+V):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(V!=null&&de==="onScroll"&&qt("scroll",n),v||O===V||(v=[])):(v=v||[]).push(de,V))}l&&(v=v||[]).push("style",l);var de=v;(r.updateQueue=de)&&(r.flags|=4)}},Bm=function(n,r,l,d){l!==d&&(r.flags|=4)};function ho(n,r){if(!Jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function In(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function nx(n,r,l){var d=r.pendingProps;switch(Nu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(r),null;case 1:return Yn(r.type)&&gl(),In(r),null;case 3:return d=r.stateNode,Zs(),$t(jn),$t(Nn),Wu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Sl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mi!==null&&(yd(Mi),Mi=null))),cd(n,r),In(r),null;case 5:Hu(r);var p=ps(ao.current);if(l=r.type,n!==null&&r.stateNode!=null)km(n,r,l,d,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return In(r),null}if(n=ps(Vi.current),Sl(r)){d=r.stateNode,l=r.type;var v=r.memoizedProps;switch(d[zi]=r,d[to]=v,n=(r.mode&1)!==0,l){case"dialog":qt("cancel",d),qt("close",d);break;case"iframe":case"object":case"embed":qt("load",d);break;case"video":case"audio":for(p=0;p<Ja.length;p++)qt(Ja[p],d);break;case"source":qt("error",d);break;case"img":case"image":case"link":qt("error",d),qt("load",d);break;case"details":qt("toggle",d);break;case"input":yt(d,v),qt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},qt("invalid",d);break;case"textarea":G(d,v),qt("invalid",d)}Ze(l,v),p=null;for(var A in v)if(v.hasOwnProperty(A)){var O=v[A];A==="children"?typeof O=="string"?d.textContent!==O&&(v.suppressHydrationWarning!==!0&&fl(d.textContent,O,n),p=["children",O]):typeof O=="number"&&d.textContent!==""+O&&(v.suppressHydrationWarning!==!0&&fl(d.textContent,O,n),p=["children",""+O]):a.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&qt("scroll",d)}switch(l){case"input":nt(d),ye(d,v,!0);break;case"textarea":nt(d),Et(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=pl)}d=p,r.updateQueue=d,d!==null&&(r.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=A.createElement(l,{is:d.is}):(n=A.createElement(l),l==="select"&&(A=n,d.multiple?A.multiple=!0:d.size&&(A.size=d.size))):n=A.createElementNS(n,l),n[zi]=r,n[to]=d,Om(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ue(l,d),l){case"dialog":qt("cancel",n),qt("close",n),p=d;break;case"iframe":case"object":case"embed":qt("load",n),p=d;break;case"video":case"audio":for(p=0;p<Ja.length;p++)qt(Ja[p],n);p=d;break;case"source":qt("error",n),p=d;break;case"img":case"image":case"link":qt("error",n),qt("load",n),p=d;break;case"details":qt("toggle",n),p=d;break;case"input":yt(n,d),p=Pt(n,d),qt("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=le({},d,{value:void 0}),qt("invalid",n);break;case"textarea":G(n,d),p=Mt(n,d),qt("invalid",n);break;default:p=d}Ze(l,p),O=p;for(v in O)if(O.hasOwnProperty(v)){var V=O[v];v==="style"?me(n,V):v==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ie(n,V)):v==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&he(n,V):typeof V=="number"&&he(n,""+V):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(a.hasOwnProperty(v)?V!=null&&v==="onScroll"&&qt("scroll",n):V!=null&&N(n,v,V,A))}switch(l){case"input":nt(n),ye(n,d,!1);break;case"textarea":nt(n),Et(n);break;case"option":d.value!=null&&n.setAttribute("value",""+ce(d.value));break;case"select":n.multiple=!!d.multiple,v=d.value,v!=null?rt(n,!!d.multiple,v,!1):d.defaultValue!=null&&rt(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=pl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return In(r),null;case 6:if(n&&r.stateNode!=null)Bm(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=ps(ao.current),ps(Vi.current),Sl(r)){if(d=r.stateNode,l=r.memoizedProps,d[zi]=r,(v=d.nodeValue!==l)&&(n=ti,n!==null))switch(n.tag){case 3:fl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(d.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[zi]=r,r.stateNode=d}return In(r),null;case 13:if($t(tn),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ni!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Hp(),Ys(),r.flags|=98560,v=!1;else if(v=Sl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[zi]=r}else Ys(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;In(r),v=!1}else Mi!==null&&(yd(Mi),Mi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(tn.current&1)!==0?fn===0&&(fn=3):Ed())),r.updateQueue!==null&&(r.flags|=4),In(r),null);case 4:return Zs(),cd(n,r),n===null&&Qa(r.stateNode.containerInfo),In(r),null;case 10:return Ou(r.type._context),In(r),null;case 17:return Yn(r.type)&&gl(),In(r),null;case 19:if($t(tn),v=r.memoizedState,v===null)return In(r),null;if(d=(r.flags&128)!==0,A=v.rendering,A===null)if(d)ho(v,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=Al(n),A!==null){for(r.flags|=128,ho(v,!1),d=A.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)v=l,n=d,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Yt(tn,tn.current&1|2),r.child}n=n.sibling}v.tail!==null&&en()>ta&&(r.flags|=128,d=!0,ho(v,!1),r.lanes=4194304)}else{if(!d)if(n=Al(A),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ho(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!Jt)return In(r),null}else 2*en()-v.renderingStartTime>ta&&l!==1073741824&&(r.flags|=128,d=!0,ho(v,!1),r.lanes=4194304);v.isBackwards?(A.sibling=r.child,r.child=A):(l=v.last,l!==null?l.sibling=A:r.child=A,v.last=A)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=en(),r.sibling=null,l=tn.current,Yt(tn,d?l&1|2:l&1),r):(In(r),null);case 22:case 23:return Md(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(ii&1073741824)!==0&&(In(r),r.subtreeFlags&6&&(r.flags|=8192)):In(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function ix(n,r){switch(Nu(r),r.tag){case 1:return Yn(r.type)&&gl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Zs(),$t(jn),$t(Nn),Wu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Hu(r),null;case 13:if($t(tn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ys()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return $t(tn),null;case 4:return Zs(),null;case 10:return Ou(r.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var Fl=!1,Dn=!1,rx=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Qs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){an(n,r,d)}else l.current=null}function ud(n,r,l){try{l()}catch(d){an(n,r,d)}}var zm=!1;function sx(n,r){if(Mu=nl,n=vp(),pu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var A=0,O=-1,V=-1,de=0,Me=0,Te=n,Se=null;t:for(;;){for(var Ve;Te!==l||p!==0&&Te.nodeType!==3||(O=A+p),Te!==v||d!==0&&Te.nodeType!==3||(V=A+d),Te.nodeType===3&&(A+=Te.nodeValue.length),(Ve=Te.firstChild)!==null;)Se=Te,Te=Ve;for(;;){if(Te===n)break t;if(Se===l&&++de===p&&(O=A),Se===v&&++Me===d&&(V=A),(Ve=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=Ve}l=O===-1||V===-1?null:{start:O,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(Eu={focusedElem:n,selectionRange:l},nl=!1,Ge=r;Ge!==null;)if(r=Ge,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ge=n;else for(;Ge!==null;){r=Ge;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var $e=je.memoizedProps,on=je.memoizedState,ee=r.stateNode,X=ee.getSnapshotBeforeUpdate(r.elementType===r.type?$e:Ei(r.type,$e),on);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var re=r.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){an(r,r.return,be)}if(n=r.sibling,n!==null){n.return=r.return,Ge=n;break}Ge=r.return}return je=zm,zm=!1,je}function fo(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&ud(r,l,v)}p=p.next}while(p!==d)}}function Ol(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function dd(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Vm(n){var r=n.alternate;r!==null&&(n.alternate=null,Vm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[zi],delete r[to],delete r[Au],delete r[Vv],delete r[Hv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hm(n){return n.tag===5||n.tag===3||n.tag===4}function Gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=pl));else if(d!==4&&(n=n.child,n!==null))for(hd(n,r,l),n=n.sibling;n!==null;)hd(n,r,l),n=n.sibling}function fd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(fd(n,r,l),n=n.sibling;n!==null;)fd(n,r,l),n=n.sibling}var Rn=null,Ti=!1;function Or(n,r,l){for(l=l.child;l!==null;)Wm(n,r,l),l=l.sibling}function Wm(n,r,l){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(te,l)}catch{}switch(l.tag){case 5:Dn||Qs(l,r);case 6:var d=Rn,p=Ti;Rn=null,Or(n,r,l),Rn=d,Ti=p,Rn!==null&&(Ti?(n=Rn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Rn.removeChild(l.stateNode));break;case 18:Rn!==null&&(Ti?(n=Rn,l=l.stateNode,n.nodeType===8?bu(n.parentNode,l):n.nodeType===1&&bu(n,l),Wa(n)):bu(Rn,l.stateNode));break;case 4:d=Rn,p=Ti,Rn=l.stateNode.containerInfo,Ti=!0,Or(n,r,l),Rn=d,Ti=p;break;case 0:case 11:case 14:case 15:if(!Dn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var v=p,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&ud(l,r,A),p=p.next}while(p!==d)}Or(n,r,l);break;case 1:if(!Dn&&(Qs(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(O){an(l,r,O)}Or(n,r,l);break;case 21:Or(n,r,l);break;case 22:l.mode&1?(Dn=(d=Dn)||l.memoizedState!==null,Or(n,r,l),Dn=d):Or(n,r,l);break;default:Or(n,r,l)}}function Xm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new rx),r.forEach(function(d){var p=px.bind(null,n,d);l.has(d)||(l.add(d),d.then(p,p))})}}function wi(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var v=n,A=r,O=A;e:for(;O!==null;){switch(O.tag){case 5:Rn=O.stateNode,Ti=!1;break e;case 3:Rn=O.stateNode.containerInfo,Ti=!0;break e;case 4:Rn=O.stateNode.containerInfo,Ti=!0;break e}O=O.return}if(Rn===null)throw Error(t(160));Wm(v,A,p),Rn=null,Ti=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(de){an(p,r,de)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)jm(r,n),r=r.sibling}function jm(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wi(r,n),Gi(n),d&4){try{fo(3,n,n.return),Ol(3,n)}catch($e){an(n,n.return,$e)}try{fo(5,n,n.return)}catch($e){an(n,n.return,$e)}}break;case 1:wi(r,n),Gi(n),d&512&&l!==null&&Qs(l,l.return);break;case 5:if(wi(r,n),Gi(n),d&512&&l!==null&&Qs(l,l.return),n.flags&32){var p=n.stateNode;try{he(p,"")}catch($e){an(n,n.return,$e)}}if(d&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,A=l!==null?l.memoizedProps:v,O=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{O==="input"&&v.type==="radio"&&v.name!=null&&St(p,v),Ue(O,A);var de=Ue(O,v);for(A=0;A<V.length;A+=2){var Me=V[A],Te=V[A+1];Me==="style"?me(p,Te):Me==="dangerouslySetInnerHTML"?ie(p,Te):Me==="children"?he(p,Te):N(p,Me,Te,de)}switch(O){case"input":Xt(p,v);break;case"textarea":sn(p,v);break;case"select":var Se=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ve=v.value;Ve!=null?rt(p,!!v.multiple,Ve,!1):Se!==!!v.multiple&&(v.defaultValue!=null?rt(p,!!v.multiple,v.defaultValue,!0):rt(p,!!v.multiple,v.multiple?[]:"",!1))}p[to]=v}catch($e){an(n,n.return,$e)}}break;case 6:if(wi(r,n),Gi(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch($e){an(n,n.return,$e)}}break;case 3:if(wi(r,n),Gi(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Wa(r.containerInfo)}catch($e){an(n,n.return,$e)}break;case 4:wi(r,n),Gi(n);break;case 13:wi(r,n),Gi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(gd=en())),d&4&&Xm(n);break;case 22:if(Me=l!==null&&l.memoizedState!==null,n.mode&1?(Dn=(de=Dn)||Me,wi(r,n),Dn=de):wi(r,n),Gi(n),d&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Me&&(n.mode&1)!==0)for(Ge=n,Me=n.child;Me!==null;){for(Te=Ge=Me;Ge!==null;){switch(Se=Ge,Ve=Se.child,Se.tag){case 0:case 11:case 14:case 15:fo(4,Se,Se.return);break;case 1:Qs(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){d=Se,l=Se.return;try{r=d,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch($e){an(d,l,$e)}}break;case 5:Qs(Se,Se.return);break;case 22:if(Se.memoizedState!==null){qm(Te);continue}}Ve!==null?(Ve.return=Se,Ge=Ve):qm(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{p=Te.stateNode,de?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(O=Te.stateNode,V=Te.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=fe("display",A))}catch($e){an(n,n.return,$e)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=de?"":Te.memoizedProps}catch($e){an(n,n.return,$e)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:wi(r,n),Gi(n),d&4&&Xm(n);break;case 21:break;default:wi(r,n),Gi(n)}}function Gi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Hm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(he(p,""),d.flags&=-33);var v=Gm(n);fd(n,v,p);break;case 3:case 4:var A=d.stateNode.containerInfo,O=Gm(n);hd(n,O,A);break;default:throw Error(t(161))}}catch(V){an(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function ax(n,r,l){Ge=n,Ym(n)}function Ym(n,r,l){for(var d=(n.mode&1)!==0;Ge!==null;){var p=Ge,v=p.child;if(p.tag===22&&d){var A=p.memoizedState!==null||Fl;if(!A){var O=p.alternate,V=O!==null&&O.memoizedState!==null||Dn;O=Fl;var de=Dn;if(Fl=A,(Dn=V)&&!de)for(Ge=p;Ge!==null;)A=Ge,V=A.child,A.tag===22&&A.memoizedState!==null?$m(p):V!==null?(V.return=A,Ge=V):$m(p);for(;v!==null;)Ge=v,Ym(v),v=v.sibling;Ge=p,Fl=O,Dn=de}Km(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Ge=v):Km(n)}}function Km(n){for(;Ge!==null;){var r=Ge;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Dn||Ol(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Dn)if(l===null)d.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Ei(r.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&qp(r,v,d);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}qp(r,A,l)}break;case 5:var O=r.stateNode;if(l===null&&r.flags&4){l=O;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var de=r.alternate;if(de!==null){var Me=de.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Wa(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||r.flags&512&&dd(r)}catch(Se){an(r,r.return,Se)}}if(r===n){Ge=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function qm(n){for(;Ge!==null;){var r=Ge;if(r===n){Ge=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ge=l;break}Ge=r.return}}function $m(n){for(;Ge!==null;){var r=Ge;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Ol(4,r)}catch(V){an(r,l,V)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var p=r.return;try{d.componentDidMount()}catch(V){an(r,p,V)}}var v=r.return;try{dd(r)}catch(V){an(r,v,V)}break;case 5:var A=r.return;try{dd(r)}catch(V){an(r,A,V)}}}catch(V){an(r,r.return,V)}if(r===n){Ge=null;break}var O=r.sibling;if(O!==null){O.return=r.return,Ge=O;break}Ge=r.return}}var ox=Math.ceil,kl=w.ReactCurrentDispatcher,pd=w.ReactCurrentOwner,fi=w.ReactCurrentBatchConfig,Lt=0,Sn=null,un=null,Cn=0,ii=0,ea=Lr(0),fn=0,po=null,gs=0,Bl=0,md=0,mo=null,qn=null,gd=0,ta=1/0,dr=null,zl=!1,_d=null,kr=null,Vl=!1,Br=null,Hl=0,go=0,vd=null,Gl=-1,Wl=0;function zn(){return(Lt&6)!==0?en():Gl!==-1?Gl:Gl=en()}function zr(n){return(n.mode&1)===0?1:(Lt&2)!==0&&Cn!==0?Cn&-Cn:Wv.transition!==null?(Wl===0&&(Wl=ze()),Wl):(n=bt,n!==0||(n=window.event,n=n===void 0?16:Jf(n.type)),n)}function bi(n,r,l,d){if(50<go)throw go=0,vd=null,Error(t(185));Tt(n,l,d),((Lt&2)===0||n!==Sn)&&(n===Sn&&((Lt&2)===0&&(Bl|=l),fn===4&&Vr(n,Cn)),$n(n,d),l===1&&Lt===0&&(r.mode&1)===0&&(ta=en()+500,vl&&Dr()))}function $n(n,r){var l=n.callbackNode;Ft(n,r);var d=jt(n,n===Sn?Cn:0);if(d===0)l!==null&&ka(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&ka(l),r===1)n.tag===0?Gv(Jm.bind(null,n)):Op(Jm.bind(null,n)),Bv(function(){(Lt&6)===0&&Dr()}),l=null;else{switch(ir(d)){case 1:l=Ba;break;case 4:l=R;break;case 16:l=q;break;case 536870912:l=ne;break;default:l=q}l=ag(l,Zm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Zm(n,r){if(Gl=-1,Wl=0,(Lt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(na()&&n.callbackNode!==l)return null;var d=jt(n,n===Sn?Cn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Xl(n,d);else{r=d;var p=Lt;Lt|=2;var v=eg();(Sn!==n||Cn!==r)&&(dr=null,ta=en()+500,vs(n,r));do try{ux();break}catch(O){Qm(n,O)}while(!0);Fu(),kl.current=v,Lt=p,un!==null?r=0:(Sn=null,Cn=0,r=fn)}if(r!==0){if(r===2&&(p=cn(n),p!==0&&(d=p,r=xd(n,p))),r===1)throw l=po,vs(n,0),Vr(n,d),$n(n,en()),l;if(r===6)Vr(n,d);else{if(p=n.current.alternate,(d&30)===0&&!lx(p)&&(r=Xl(n,d),r===2&&(v=cn(n),v!==0&&(d=v,r=xd(n,v))),r===1))throw l=po,vs(n,0),Vr(n,d),$n(n,en()),l;switch(n.finishedWork=p,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:xs(n,qn,dr);break;case 3:if(Vr(n,d),(d&130023424)===d&&(r=gd+500-en(),10<r)){if(jt(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){zn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=wu(xs.bind(null,n,qn,dr),r);break}xs(n,qn,dr);break;case 4:if(Vr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,p=-1;0<d;){var A=31-Ae(d);v=1<<A,A=r[A],A>p&&(p=A),d&=~v}if(d=p,d=en()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*ox(d/1960))-d,10<d){n.timeoutHandle=wu(xs.bind(null,n,qn,dr),d);break}xs(n,qn,dr);break;case 5:xs(n,qn,dr);break;default:throw Error(t(329))}}}return $n(n,en()),n.callbackNode===l?Zm.bind(null,n):null}function xd(n,r){var l=mo;return n.current.memoizedState.isDehydrated&&(vs(n,r).flags|=256),n=Xl(n,r),n!==2&&(r=qn,qn=l,r!==null&&yd(r)),n}function yd(n){qn===null?qn=n:qn.push.apply(qn,n)}function lx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],v=p.getSnapshot;p=p.value;try{if(!Si(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vr(n,r){for(r&=~md,r&=~Bl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ae(r),d=1<<l;n[l]=-1,r&=~d}}function Jm(n){if((Lt&6)!==0)throw Error(t(327));na();var r=jt(n,0);if((r&1)===0)return $n(n,en()),null;var l=Xl(n,r);if(n.tag!==0&&l===2){var d=cn(n);d!==0&&(r=d,l=xd(n,d))}if(l===1)throw l=po,vs(n,0),Vr(n,r),$n(n,en()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,xs(n,qn,dr),$n(n,en()),null}function Sd(n,r){var l=Lt;Lt|=1;try{return n(r)}finally{Lt=l,Lt===0&&(ta=en()+500,vl&&Dr())}}function _s(n){Br!==null&&Br.tag===0&&(Lt&6)===0&&na();var r=Lt;Lt|=1;var l=fi.transition,d=bt;try{if(fi.transition=null,bt=1,n)return n()}finally{bt=d,fi.transition=l,Lt=r,(Lt&6)===0&&Dr()}}function Md(){ii=ea.current,$t(ea)}function vs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,kv(l)),un!==null)for(l=un.return;l!==null;){var d=l;switch(Nu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&gl();break;case 3:Zs(),$t(jn),$t(Nn),Wu();break;case 5:Hu(d);break;case 4:Zs();break;case 13:$t(tn);break;case 19:$t(tn);break;case 10:Ou(d.type._context);break;case 22:case 23:Md()}l=l.return}if(Sn=n,un=n=Hr(n.current,null),Cn=ii=r,fn=0,po=null,md=Bl=gs=0,qn=mo=null,fs!==null){for(r=0;r<fs.length;r++)if(l=fs[r],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,v=l.pending;if(v!==null){var A=v.next;v.next=p,d.next=A}l.pending=d}fs=null}return n}function Qm(n,r){do{var l=un;try{if(Fu(),Rl.current=Ll,Cl){for(var d=nn.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}Cl=!1}if(ms=0,yn=hn=nn=null,oo=!1,lo=0,pd.current=null,l===null||l.return===null){fn=1,po=r,un=null;break}e:{var v=n,A=l.return,O=l,V=r;if(r=Cn,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var de=V,Me=O,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Ve=Tm(A);if(Ve!==null){Ve.flags&=-257,wm(Ve,A,O,v,r),Ve.mode&1&&Em(v,de,r),r=Ve,V=de;var je=r.updateQueue;if(je===null){var $e=new Set;$e.add(V),r.updateQueue=$e}else je.add(V);break e}else{if((r&1)===0){Em(v,de,r),Ed();break e}V=Error(t(426))}}else if(Jt&&O.mode&1){var on=Tm(A);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),wm(on,A,O,v,r),Du(Js(V,O));break e}}v=V=Js(V,O),fn!==4&&(fn=2),mo===null?mo=[v]:mo.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var ee=Sm(v,V,r);Kp(v,ee);break e;case 1:O=V;var X=v.type,re=v.stateNode;if((v.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(kr===null||!kr.has(re)))){v.flags|=65536,r&=-r,v.lanes|=r;var be=Mm(v,O,r);Kp(v,be);break e}}v=v.return}while(v!==null)}ng(l)}catch(Qe){r=Qe,un===l&&l!==null&&(un=l=l.return);continue}break}while(!0)}function eg(){var n=kl.current;return kl.current=Ll,n===null?Ll:n}function Ed(){(fn===0||fn===3||fn===2)&&(fn=4),Sn===null||(gs&268435455)===0&&(Bl&268435455)===0||Vr(Sn,Cn)}function Xl(n,r){var l=Lt;Lt|=2;var d=eg();(Sn!==n||Cn!==r)&&(dr=null,vs(n,r));do try{cx();break}catch(p){Qm(n,p)}while(!0);if(Fu(),Lt=l,kl.current=d,un!==null)throw Error(t(261));return Sn=null,Cn=0,fn}function cx(){for(;un!==null;)tg(un)}function ux(){for(;un!==null&&!el();)tg(un)}function tg(n){var r=sg(n.alternate,n,ii);n.memoizedProps=n.pendingProps,r===null?ng(n):un=r,pd.current=null}function ng(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=nx(l,r,ii),l!==null){un=l;return}}else{if(l=ix(l,r),l!==null){l.flags&=32767,un=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,un=null;return}}if(r=r.sibling,r!==null){un=r;return}un=r=n}while(r!==null);fn===0&&(fn=5)}function xs(n,r,l){var d=bt,p=fi.transition;try{fi.transition=null,bt=1,dx(n,r,l,d)}finally{fi.transition=p,bt=d}return null}function dx(n,r,l,d){do na();while(Br!==null);if((Lt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Wn(n,v),n===Sn&&(un=Sn=null,Cn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Vl||(Vl=!0,ag(q,function(){return na(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=fi.transition,fi.transition=null;var A=bt;bt=1;var O=Lt;Lt|=4,pd.current=null,sx(n,l),jm(l,n),Nv(Eu),nl=!!Mu,Eu=Mu=null,n.current=l,ax(l),tu(),Lt=O,bt=A,fi.transition=v}else n.current=l;if(Vl&&(Vl=!1,Br=n,Hl=p),v=n.pendingLanes,v===0&&(kr=null),He(l.stateNode),$n(n,en()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(zl)throw zl=!1,n=_d,_d=null,n;return(Hl&1)!==0&&n.tag!==0&&na(),v=n.pendingLanes,(v&1)!==0?n===vd?go++:(go=0,vd=n):go=0,Dr(),null}function na(){if(Br!==null){var n=ir(Hl),r=fi.transition,l=bt;try{if(fi.transition=null,bt=16>n?16:n,Br===null)var d=!1;else{if(n=Br,Br=null,Hl=0,(Lt&6)!==0)throw Error(t(331));var p=Lt;for(Lt|=4,Ge=n.current;Ge!==null;){var v=Ge,A=v.child;if((Ge.flags&16)!==0){var O=v.deletions;if(O!==null){for(var V=0;V<O.length;V++){var de=O[V];for(Ge=de;Ge!==null;){var Me=Ge;switch(Me.tag){case 0:case 11:case 15:fo(8,Me,v)}var Te=Me.child;if(Te!==null)Te.return=Me,Ge=Te;else for(;Ge!==null;){Me=Ge;var Se=Me.sibling,Ve=Me.return;if(Vm(Me),Me===de){Ge=null;break}if(Se!==null){Se.return=Ve,Ge=Se;break}Ge=Ve}}}var je=v.alternate;if(je!==null){var $e=je.child;if($e!==null){je.child=null;do{var on=$e.sibling;$e.sibling=null,$e=on}while($e!==null)}}Ge=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,Ge=A;else e:for(;Ge!==null;){if(v=Ge,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:fo(9,v,v.return)}var ee=v.sibling;if(ee!==null){ee.return=v.return,Ge=ee;break e}Ge=v.return}}var X=n.current;for(Ge=X;Ge!==null;){A=Ge;var re=A.child;if((A.subtreeFlags&2064)!==0&&re!==null)re.return=A,Ge=re;else e:for(A=X;Ge!==null;){if(O=Ge,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Ol(9,O)}}catch(Qe){an(O,O.return,Qe)}if(O===A){Ge=null;break e}var be=O.sibling;if(be!==null){be.return=O.return,Ge=be;break e}Ge=O.return}}if(Lt=p,Dr(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(te,n)}catch{}d=!0}return d}finally{bt=l,fi.transition=r}}return!1}function ig(n,r,l){r=Js(l,r),r=Sm(n,r,1),n=Fr(n,r,1),r=zn(),n!==null&&(Tt(n,1,r),$n(n,r))}function an(n,r,l){if(n.tag===3)ig(n,n,l);else for(;r!==null;){if(r.tag===3){ig(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(kr===null||!kr.has(d))){n=Js(l,n),n=Mm(r,n,1),r=Fr(r,n,1),n=zn(),r!==null&&(Tt(r,1,n),$n(r,n));break}}r=r.return}}function hx(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=zn(),n.pingedLanes|=n.suspendedLanes&l,Sn===n&&(Cn&l)===l&&(fn===4||fn===3&&(Cn&130023424)===Cn&&500>en()-gd?vs(n,0):md|=l),$n(n,r)}function rg(n,r){r===0&&((n.mode&1)===0?r=1:(r=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var l=zn();n=lr(n,r),n!==null&&(Tt(n,r,l),$n(n,l))}function fx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),rg(n,l)}function px(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),rg(n,l)}var sg;sg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||jn.current)Kn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Kn=!1,tx(n,r,l);Kn=(n.flags&131072)!==0}else Kn=!1,Jt&&(r.flags&1048576)!==0&&kp(r,yl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Ul(n,r),n=r.pendingProps;var p=Ws(r,Nn.current);$s(r,l),p=Yu(null,r,d,n,p,l);var v=Ku();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yn(d)?(v=!0,_l(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,zu(r),p.updater=Il,r.stateNode=p,p._reactInternals=r,ed(r,d,n,l),r=rd(null,r,d,!0,v,l)):(r.tag=0,Jt&&v&&Pu(r),Bn(null,r,p,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Ul(n,r),n=r.pendingProps,p=d._init,d=p(d._payload),r.type=d,p=r.tag=gx(d),n=Ei(d,n),p){case 0:r=id(null,r,d,n,l);break e;case 1:r=Nm(null,r,d,n,l);break e;case 11:r=bm(null,r,d,n,l);break e;case 14:r=Am(null,r,d,Ei(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Ei(d,p),id(n,r,d,p,l);case 1:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Ei(d,p),Nm(n,r,d,p,l);case 3:e:{if(Lm(r),n===null)throw Error(t(387));d=r.pendingProps,v=r.memoizedState,p=v.element,Yp(n,r),bl(r,d,null,l);var A=r.memoizedState;if(d=A.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Js(Error(t(423)),r),r=Im(n,r,d,l,p);break e}else if(d!==p){p=Js(Error(t(424)),r),r=Im(n,r,d,l,p);break e}else for(ni=Nr(r.stateNode.containerInfo.firstChild),ti=r,Jt=!0,Mi=null,l=Xp(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ys(),d===p){r=ur(n,r,l);break e}Bn(n,r,d,l)}r=r.child}return r;case 5:return $p(r),n===null&&Iu(r),d=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,A=p.children,Tu(d,p)?A=null:v!==null&&Tu(d,v)&&(r.flags|=32),Pm(n,r),Bn(n,r,A,l),r.child;case 6:return n===null&&Iu(r),null;case 13:return Dm(n,r,l);case 4:return Vu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Ks(r,null,d,l):Bn(n,r,d,l),r.child;case 11:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Ei(d,p),bm(n,r,d,p,l);case 7:return Bn(n,r,r.pendingProps,l),r.child;case 8:return Bn(n,r,r.pendingProps.children,l),r.child;case 12:return Bn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,p=r.pendingProps,v=r.memoizedProps,A=p.value,Yt(El,d._currentValue),d._currentValue=A,v!==null)if(Si(v.value,A)){if(v.children===p.children&&!jn.current){r=ur(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var O=v.dependencies;if(O!==null){A=v.child;for(var V=O.firstContext;V!==null;){if(V.context===d){if(v.tag===1){V=cr(-1,l&-l),V.tag=2;var de=v.updateQueue;if(de!==null){de=de.shared;var Me=de.pending;Me===null?V.next=V:(V.next=Me.next,Me.next=V),de.pending=V}}v.lanes|=l,V=v.alternate,V!==null&&(V.lanes|=l),ku(v.return,l,r),O.lanes|=l;break}V=V.next}}else if(v.tag===10)A=v.type===r.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=l,O=A.alternate,O!==null&&(O.lanes|=l),ku(A,l,r),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===r){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}Bn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,d=r.pendingProps.children,$s(r,l),p=di(p),d=d(p),r.flags|=1,Bn(n,r,d,l),r.child;case 14:return d=r.type,p=Ei(d,r.pendingProps),p=Ei(d.type,p),Am(n,r,d,p,l);case 15:return Rm(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Ei(d,p),Ul(n,r),r.tag=1,Yn(d)?(n=!0,_l(r)):n=!1,$s(r,l),xm(r,d,p),ed(r,d,p,l),rd(null,r,d,!0,n,l);case 19:return Fm(n,r,l);case 22:return Cm(n,r,l)}throw Error(t(156,r.tag))};function ag(n,r){return os(n,r)}function mx(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,r,l,d){return new mx(n,r,l,d)}function Td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gx(n){if(typeof n=="function")return Td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===K)return 14}return 2}function Hr(n,r){var l=n.alternate;return l===null?(l=pi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function jl(n,r,l,d,p,v){var A=2;if(d=n,typeof n=="function")Td(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case F:return ys(l.children,p,v,r);case T:A=8,p|=8;break;case I:return n=pi(12,l,r,p|2),n.elementType=I,n.lanes=v,n;case ae:return n=pi(13,l,r,p),n.elementType=ae,n.lanes=v,n;case pe:return n=pi(19,l,r,p),n.elementType=pe,n.lanes=v,n;case Z:return Yl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:A=10;break e;case z:A=9;break e;case j:A=11;break e;case K:A=14;break e;case oe:A=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pi(A,l,r,p),r.elementType=n,r.type=d,r.lanes=v,r}function ys(n,r,l,d){return n=pi(7,n,d,r),n.lanes=l,n}function Yl(n,r,l,d){return n=pi(22,n,d,r),n.elementType=Z,n.lanes=l,n.stateNode={isHidden:!1},n}function wd(n,r,l){return n=pi(6,n,null,r),n.lanes=l,n}function bd(n,r,l){return r=pi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function _x(n,r,l,d,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=An(0),this.expirationTimes=An(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ad(n,r,l,d,p,v,A,O,V){return n=new _x(n,r,l,O,V),r===1?(r=1,v===!0&&(r|=8)):r=0,v=pi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(v),n}function vx(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function og(n){if(!n)return Ir;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Yn(l))return Up(n,l,r)}return r}function lg(n,r,l,d,p,v,A,O,V){return n=Ad(l,d,!0,n,p,v,A,O,V),n.context=og(null),l=n.current,d=zn(),p=zr(l),v=cr(d,p),v.callback=r??null,Fr(l,v,p),n.current.lanes=p,Tt(n,p,d),$n(n,d),n}function Kl(n,r,l,d){var p=r.current,v=zn(),A=zr(p);return l=og(l),r.context===null?r.context=l:r.pendingContext=l,r=cr(v,A),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Fr(p,r,A),n!==null&&(bi(n,p,A,v),wl(n,p,A)),A}function ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Rd(n,r){cg(n,r),(n=n.alternate)&&cg(n,r)}function xx(){return null}var ug=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cd(n){this._internalRoot=n}$l.prototype.render=Cd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Kl(n,r,null,null)},$l.prototype.unmount=Cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;_s(function(){Kl(null,n,null,null)}),r[rr]=null}};function $l(n){this._internalRoot=n}$l.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ot();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Rr.length&&r!==0&&r<Rr[l].priority;l++);Rr.splice(l,0,n),l===0&&$f(n)}};function Pd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dg(){}function yx(n,r,l,d,p){if(p){if(typeof d=="function"){var v=d;d=function(){var de=ql(A);v.call(de)}}var A=lg(r,d,n,0,null,!1,!1,"",dg);return n._reactRootContainer=A,n[rr]=A.current,Qa(n.nodeType===8?n.parentNode:n),_s(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var O=d;d=function(){var de=ql(V);O.call(de)}}var V=Ad(n,0,!1,null,null,!1,!1,"",dg);return n._reactRootContainer=V,n[rr]=V.current,Qa(n.nodeType===8?n.parentNode:n),_s(function(){Kl(r,V,l,d)}),V}function Jl(n,r,l,d,p){var v=l._reactRootContainer;if(v){var A=v;if(typeof p=="function"){var O=p;p=function(){var V=ql(A);O.call(V)}}Kl(r,A,n,p)}else A=yx(l,r,n,p,d);return ql(A)}Ut=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Nt(r.pendingLanes);l!==0&&(Xn(r,l|1),$n(r,en()),(Lt&6)===0&&(ta=en()+500,Dr()))}break;case 13:_s(function(){var d=lr(n,1);if(d!==null){var p=zn();bi(d,n,1,p)}}),Rd(n,1)}},Kt=function(n){if(n.tag===13){var r=lr(n,134217728);if(r!==null){var l=zn();bi(r,n,134217728,l)}Rd(n,134217728)}},xi=function(n){if(n.tag===13){var r=zr(n),l=lr(n,r);if(l!==null){var d=zn();bi(l,n,r,d)}Rd(n,r)}},Ot=function(){return bt},yi=function(n,r){var l=bt;try{return bt=n,r()}finally{bt=l}},at=function(n,r,l){switch(r){case"input":if(Xt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var p=ml(d);if(!p)throw Error(t(90));Vt(d),Xt(d,p)}}}break;case"textarea":sn(n,l);break;case"select":r=l.value,r!=null&&rt(n,!!l.multiple,r,!1)}},Oe=Sd,xe=_s;var Sx={usingClientEntryPoint:!1,Events:[no,Hs,ml,ge,Le,Sd]},_o={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mx={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=as(n),n===null?null:n.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{te=Ql.inject(Mx),Ce=Ql}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx,Zn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(r))throw Error(t(200));return vx(n,r,null,l)},Zn.createRoot=function(n,r){if(!Pd(n))throw Error(t(299));var l=!1,d="",p=ug;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ad(n,1,!1,null,null,l,!1,d,p),n[rr]=r.current,Qa(n.nodeType===8?n.parentNode:n),new Cd(r)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=as(r),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return _s(n)},Zn.hydrate=function(n,r,l){if(!Zl(r))throw Error(t(200));return Jl(null,n,r,!0,l)},Zn.hydrateRoot=function(n,r,l){if(!Pd(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,v="",A=ug;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=lg(r,null,n,1,l??null,p,!1,v,A),n[rr]=r.current,Qa(n),d)for(n=0;n<d.length;n++)l=d[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new $l(r)},Zn.render=function(n,r,l){if(!Zl(r))throw Error(t(200));return Jl(null,n,r,!1,l)},Zn.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(t(40));return n._reactRootContainer?(_s(function(){Jl(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1},Zn.unstable_batchedUpdates=Sd,Zn.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!Zl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Jl(n,r,l,!1,d)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var xg;function Nx(){if(xg)return Id.exports;xg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Id.exports=Px(),Id.exports}var yg;function Lx(){if(yg)return ec;yg=1;var s=Nx();return ec.createRoot=s.createRoot,ec.hydrateRoot=s.hydrateRoot,ec}var Ix=Lx();const Dx=$_(Ix),Ux={gear:"/assets/icons/gear.svg",bell:"/assets/icons/bell.svg",profile:"/assets/icons/profile.svg",expand:"/assets/icons/expand.svg",close:"/assets/icons/close.svg",generate:"/assets/icons/generate.svg",chevronDown:"/assets/icons/chevron-down.svg",history:"/assets/icons/history.svg",chevronUpDouble:"/assets/icons/chevron-up-double.svg",home:"/assets/icons/home.svg"};function Cs({ariaLabel:s,icon:e,active:t=!1,onClick:i,className:a,imageClassName:o}){return D.jsx("button",{type:"button",className:`icon-button${t?" is-active":""}${a?` ${a}`:""}`,"aria-label":s,onClick:i,children:D.jsx("img",{src:Ux[e],alt:"","aria-hidden":"true",className:`icon-button__image${o?` ${o}`:""}`})})}function Fx({onClick:s}){return D.jsxs("button",{type:"button",className:"logo","aria-label":"Botari 홈 새로고침",onClick:s,children:[D.jsx("img",{src:"/assets/logo/botari-logo.svg",alt:"",className:"logo-mark","aria-hidden":"true"}),D.jsxs("div",{className:"logo-copy",children:[D.jsx("span",{className:"logo-version",children:"0.1"}),D.jsx("span",{className:"logo-subtitle",children:"Korean Heritage Asset Generator"})]})]})}function Z_(){const s=()=>{window.location.href="/"};return D.jsxs("header",{className:"header",children:[D.jsx("div",{className:"brand-block",children:D.jsx(Fx,{onClick:s})}),D.jsxs("div",{className:"header-actions","aria-label":"상단 바로가기",children:[D.jsx(Cs,{ariaLabel:"설정 열기",icon:"gear",imageClassName:"icon-button__image--header"}),D.jsx(Cs,{ariaLabel:"홈으로 이동",icon:"home",imageClassName:"icon-button__image--header",onClick:()=>window.location.href="/home"}),D.jsx(Cs,{ariaLabel:"계정 메뉴 열기",icon:"profile",active:!0,imageClassName:"icon-button__image--header"})]})]})}function Sg({title:s}){return D.jsxs("section",{className:"result-panel",children:[D.jsxs("header",{className:"result-panel-header",children:[D.jsx("h2",{className:"result-panel-title",children:s}),D.jsx("div",{className:"result-panel-actions",children:D.jsx(Cs,{ariaLabel:`${s} 크게 보기`,icon:"expand",imageClassName:"icon-button__image--panel"})})]}),D.jsx("div",{className:"result-panel-body result-panel-body--loading",children:D.jsxs("div",{className:"generated-loading-stage","aria-label":"이미지 생성 중",children:[D.jsx("div",{className:"generated-loading-halo","aria-hidden":"true"}),D.jsx("div",{className:"generated-loading-symbol-frame","aria-hidden":"true",children:D.jsx("img",{className:"generated-loading-symbol",src:"/assets/logo/symbol.svg",alt:""})}),D.jsx("p",{className:"generated-loading-title",children:"···한국의 미를 그려내는 중입니다···"})]})})]})}function Ox({items:s,title:e="2D 이미지 정보"}){return D.jsxs("div",{className:"generated-image-metadata","aria-label":e,children:[D.jsx("p",{className:"generated-image-metadata-title",children:e}),D.jsx("dl",{className:"generated-image-metadata-list",children:s.map(t=>D.jsxs("div",{className:"generated-image-metadata-row",children:[D.jsx("dt",{children:t.label}),t.label==="프롬프트"?D.jsx("dd",{className:"generated-image-metadata-value",children:D.jsxs("span",{className:"prompt-tooltip-shell",children:[D.jsx("button",{type:"button",className:"prompt-tooltip-trigger","aria-label":"프롬프트 전문 보기",children:D.jsx("span",{className:"prompt-tooltip-trigger-mark","aria-hidden":"true",children:"i"})}),D.jsxs("div",{className:"prompt-tooltip",role:"tooltip","aria-label":"사용한 프롬프트 전문",children:[D.jsx("p",{className:"prompt-tooltip-title",children:"사용한 프롬프트"}),D.jsx("pre",{className:"prompt-tooltip-body",children:t.value})]})]})}):D.jsx("dd",{children:t.value})]},t.label))})]})}const Ps=[{value:"tiger",label:"호랑이",thumbnail:"/assets/characters/tiger.svg",promptTemplate:"호랑이의 강인하고 용맹한 분위기를 강조합니다."},{value:"haetae",label:"해태",thumbnail:"/assets/characters/haetae.svg",promptTemplate:"해태의 수호적이고 위엄 있는 분위기를 담습니다."},{value:"dragon",label:"용",thumbnail:"/assets/characters/dragon.svg",promptTemplate:"용의 역동적이고 신비로운 기운을 표현합니다."},{value:"magpie",label:"까치",thumbnail:"/assets/characters/magpie.svg",promptTemplate:"Convert the original Korean minhwa magpie into an original character while preserving the distinctive facial features, silhouette, proportions, and personality of the original bird. Keep the character clearly recognizable as the original minhwa magpie. Create an original design instead of copying any existing commercial character. Use the reference image only as inspiration for rendering style, proportions, materials, and visual language. Do not copy facial details, accessories, colors, poses, or copyrighted design elements. Design a unique character suitable for games and animation. Full body. Standing naturally. Transparent background."},{value:"carp",label:"잉어",thumbnail:"/assets/characters/carp.svg",promptTemplate:"잉어의 힘찬 도약과 풍요로운 상징성을 강조합니다."},{value:"other",label:"기타",thumbnail:"/assets/characters/landscape.svg",promptTemplate:"기타 캐릭터의 자유로운 특징을 반영합니다."}],Io=[{id:"traditional",label:"전통 민화",tone:"burnt",thumbnail:"/assets/styles/traditional.svg",promptTemplate:"Render the character in a traditional Korean minhwa style. Preserve flat colors, decorative brush lines, hand-painted textures, and Korean folk painting aesthetics. Keep the original exaggerated facial expression and simple body proportions. Do not modernize the design."},{id:"ink",label:"수묵 담채화",tone:"ink",thumbnail:"/assets/styles/ink.svg",promptTemplate:"Render the character in a Korean ink-and-light-color painting style. Soft ink wash. Minimal watercolor coloring. Visible brush strokes. Traditional paper texture. Keep the design simple and elegant."},{id:"modern",label:"모던화",tone:"sepia",thumbnail:"/assets/styles/modern.svg",promptTemplate:"Render the character as a modern illustration. Clean shapes. Soft gradients. Simple geometric forms. Stylized proportions. Friendly design. Create an original interpretation inspired by the reference style rather than copying it."},{id:"realistic",label:"실사화",tone:"gold",thumbnail:"/assets/styles/realistic.svg",promptTemplate:"Render the character as a believable stylized bird. Detailed feathers. Natural lighting. Realistic beak and legs. Preserve the recognizable face and proportions of the original minhwa bird. Avoid photorealistic wildlife photography."},{id:"sketch",label:"스케치",tone:"stone",thumbnail:"/assets/styles/sketch.svg",promptTemplate:"Render the character as a concept sketch. Clean pencil drawing. Construction lines. Hand-drawn feeling. Focus on the silhouette and facial expression. No color rendering."},{id:"character3d",label:"캐릭터(3D)",tone:"pearl",thumbnail:"/assets/styles/character3d.svg",promptTemplate:"Render the original minhwa magpie as an original stylized 3D animation character. Large expressive eyes. Rounded forms. Clean topology. Smooth surfaces. Game-ready proportions. Inspired by modern stylized animation characters. Do not imitate any existing copyrighted character. Unique facial design. Full body. Neutral standing pose."}];function J_({options:s,selectedValue:e,selectedLabel:t,defaultLabel:i,selectedThumbnail:a,isOpen:o,onToggle:c,onSelect:u,showTrigger:h=!0,allowDeselect:f=!1,inlineLabel:m="캐릭터 선택 옵션"}){const _=t||i,g=!!e,x=!h,M=h?o:!0;return D.jsxs("div",{className:"dropdown-shell",children:[h?D.jsxs("button",{type:"button",className:`dropdown-trigger${g?" is-selected":""}${g?"":" is-empty"}`,onClick:c,"aria-expanded":o,children:[D.jsxs("span",{className:"character-trigger-content",children:[a?D.jsx("img",{src:a,alt:"","aria-hidden":"true",className:"character-trigger-thumb"}):null,D.jsx("span",{children:_})]}),D.jsx("img",{src:"/assets/icons/chevron-down.svg",alt:"","aria-hidden":"true",className:`dropdown-chevron${o?" is-open":""}`})]}):null,M?D.jsx("div",{className:`dropdown-menu${x?" dropdown-menu--inline":""}`,role:"listbox","aria-label":m,children:s.map(b=>{const y=e===b.value;return D.jsxs("button",{type:"button",role:"option","aria-selected":y,className:`dropdown-option${y?" is-selected":""}`,onClick:()=>u(y&&f?"":b.value),children:[D.jsx("img",{src:b.thumbnail,alt:"","aria-hidden":"true",className:"dropdown-option-thumb"}),D.jsx("span",{children:b.label})]},b.value)})}):null]})}function Q_({options:s,selectedValue:e,onSelect:t}){return D.jsx("div",{className:"style-grid",children:s.map(i=>D.jsxs("button",{type:"button",className:`style-tile tone-${i.tone}${e===i.id?" is-selected":""}`,onClick:()=>t(e===i.id?"":i.id),"aria-pressed":e===i.id,"aria-label":i.label,children:[D.jsx("img",{src:i.thumbnail,alt:"","aria-hidden":"true",className:"style-tile-image"}),e===i.id?D.jsx("img",{src:"/assets/icons/check.svg",alt:"","aria-hidden":"true",className:"style-tile-check"}):null,D.jsx("span",{className:"style-tile-label",children:i.label})]},i.id))})}function kx({isOpen:s,initialMode:e,currentValues:t,onClose:i,onSubmit:a}){const[o,c]=We.useState(e),[u,h]=We.useState(t.character),[f,m]=We.useState(t.style),[_,g]=We.useState(t.prompt),x=We.useMemo(()=>Ps.find(M=>M.value===u),[u]);return We.useEffect(()=>{s&&(c(e),h(t.character),m(t.style),g(t.prompt))},[t.character,t.prompt,t.style,e,s]),s?D.jsxs("div",{className:"generated-image-edit-modal",role:"dialog","aria-modal":"true","aria-label":"2차 편집 모달",children:[D.jsx("div",{className:"generated-image-edit-modal__backdrop",onClick:i}),D.jsxs("div",{className:"generated-image-edit-modal__card",children:[D.jsxs("header",{className:"generated-image-edit-modal__header",children:[D.jsx("div",{children:D.jsx("p",{className:"generated-image-edit-modal__eyebrow",children:"2차 편집"})}),D.jsx("button",{type:"button",className:"generated-image-edit-modal__close",onClick:i,"aria-label":"닫기",children:"×"})]}),D.jsxs("div",{className:"generated-image-edit-modal__tabs",role:"tablist","aria-label":"편집 항목 선택",children:[D.jsx("button",{type:"button",className:`generated-image-edit-modal__tab${o==="character"?" is-active":""}`,onClick:()=>c("character"),children:"캐릭터"}),D.jsx("button",{type:"button",className:`generated-image-edit-modal__tab${o==="style"?" is-active":""}`,onClick:()=>c("style"),children:"스타일"}),D.jsx("button",{type:"button",className:`generated-image-edit-modal__tab${o==="prompt"?" is-active":""}`,onClick:()=>c("prompt"),children:"프롬프트"})]}),D.jsxs("div",{className:"generated-image-edit-modal__body",children:[o==="character"?D.jsxs("section",{className:"generated-image-edit-modal__section",children:[D.jsxs("div",{className:"generated-image-edit-modal__section-head",children:[D.jsx("img",{src:"/assets/icons/character-section.svg",alt:"","aria-hidden":"true",className:"generated-image-edit-modal__section-icon"}),D.jsx("span",{children:"캐릭터"})]}),D.jsx(J_,{options:Ps,selectedValue:u,selectedLabel:(x==null?void 0:x.label)??"",defaultLabel:"캐릭터 선택",selectedThumbnail:(x==null?void 0:x.thumbnail)??"",isOpen:!0,onToggle:()=>{},onSelect:M=>h(M),showTrigger:!1,allowDeselect:!0,inlineLabel:"캐릭터 선택 리스트"})]}):null,o==="style"?D.jsxs("section",{className:"generated-image-edit-modal__section",children:[D.jsxs("div",{className:"generated-image-edit-modal__section-head",children:[D.jsx("img",{src:"/assets/icons/style-section.svg",alt:"","aria-hidden":"true",className:"generated-image-edit-modal__section-icon"}),D.jsx("span",{children:"스타일"})]}),D.jsx(Q_,{options:Io,selectedValue:f,onSelect:m})]}):null,o==="prompt"?D.jsxs("section",{className:"generated-image-edit-modal__section",children:[D.jsxs("div",{className:"generated-image-edit-modal__section-head",children:[D.jsx("img",{src:"/assets/icons/prompt-section.svg",alt:"","aria-hidden":"true",className:"generated-image-edit-modal__section-icon"}),D.jsx("span",{children:"프롬프트"})]}),D.jsxs("label",{className:"generated-image-edit-modal__prompt-card",children:[D.jsx("span",{className:"sr-only",children:"프롬프트 입력"}),D.jsx("textarea",{value:_,onChange:M=>g(M.target.value),className:"generated-image-edit-modal__prompt-input",placeholder:"수정할 내용을 입력하세요."})]})]}):null]}),D.jsx("footer",{className:"generated-image-edit-modal__footer",children:D.jsx("button",{type:"button",className:"generated-image-edit-modal__submit",onClick:()=>a({character:u,style:f,prompt:_}),children:"수정하기"})})]})]}):null}function Bx({isBackgroundElementsEnabled:s,isRefining:e,isPoseApplied:t,onOpenEditMode:i,onGeneratePose:a,onToggleBackgroundElements:o}){return D.jsxs("div",{className:`generated-image-hover-overlay${e?" is-refining":""}`,"aria-hidden":!1,children:[D.jsx("div",{className:"generated-image-hover-overlay__shade"}),e?D.jsx("div",{className:"generated-image-hover-overlay__loading","aria-label":"배경 요소 적용 중",children:D.jsx("div",{className:"generated-image-hover-overlay__loading-symbol","aria-hidden":"true",children:D.jsx("img",{src:"/assets/logo/symbol.svg",alt:""})})}):null,D.jsx("div",{className:"generated-image-hover-overlay__panel",children:D.jsxs("div",{className:"generated-image-hover-overlay__groups",children:[D.jsxs("div",{className:"generated-image-hover-overlay__group generated-image-hover-overlay__group--edit",children:[D.jsx("span",{className:"generated-image-hover-overlay__group-label",children:"편집"}),D.jsx("span",{className:"generated-image-hover-overlay__divider","aria-hidden":"true",children:"|"}),D.jsxs("button",{type:"button",className:"generated-image-hover-overlay__chip",onClick:()=>i("character"),children:[D.jsx("img",{src:"/assets/icons/character-section.svg",alt:"","aria-hidden":"true",className:"generated-image-hover-overlay__chip-icon"}),"캐릭터"]}),D.jsxs("button",{type:"button",className:"generated-image-hover-overlay__chip",onClick:()=>i("style"),children:[D.jsx("img",{src:"/assets/icons/style-section.svg",alt:"","aria-hidden":"true",className:"generated-image-hover-overlay__chip-icon"}),"스타일"]}),D.jsxs("button",{type:"button",className:"generated-image-hover-overlay__chip",onClick:()=>i("prompt"),children:[D.jsx("img",{src:"/assets/icons/prompt-section.svg",alt:"","aria-hidden":"true",className:"generated-image-hover-overlay__chip-icon"}),"프롬프트"]})]}),D.jsxs("div",{className:"generated-image-hover-overlay__group generated-image-hover-overlay__group--option",children:[D.jsx("span",{className:"generated-image-hover-overlay__group-label",children:"옵션"}),D.jsx("span",{className:"generated-image-hover-overlay__divider","aria-hidden":"true",children:"|"}),D.jsxs("button",{type:"button",className:`generated-image-hover-overlay__chip generated-image-hover-overlay__chip--pose${t?" is-active":""}`,disabled:t,"aria-disabled":t,onClick:a,children:[D.jsx("img",{src:"/assets/icons/pose.svg",alt:"","aria-hidden":"true",className:"generated-image-hover-overlay__chip-icon"}),"포즈"]})]}),D.jsxs("div",{className:"generated-image-hover-overlay__group generated-image-hover-overlay__group--toggle",children:[D.jsx("span",{className:"generated-image-hover-overlay__group-label",children:"배경요소"}),D.jsx("span",{className:"generated-image-hover-overlay__divider","aria-hidden":"true",children:"|"}),D.jsx("button",{type:"button",className:`generated-image-hover-overlay__switch${s?" is-on":""}`,"aria-label":"배경요소 토글",onClick:o,children:D.jsx("span",{className:"generated-image-hover-overlay__switch-thumb","aria-hidden":"true"})})]})]})})]})}const zx=[1,2,3,4],Vx=["JPEG","PNG","SVG"];function Hx({imageSrc:s,onAction:e}){const[t,i]=We.useState(1),[a,o]=We.useState("JPEG"),[c,u]=We.useState(null),h=We.useMemo(()=>1024*t,[t]),f=()=>u(null),m=async()=>{const x=`botari-2d-${h}x${h}`,b=await(await fetch(s)).blob();if(a==="SVG"){const T=new FileReader,I=await new Promise((pe,K)=>{T.onload=()=>pe(String(T.result)),T.onerror=()=>K(new Error("이미지 변환에 실패했습니다.")),T.readAsDataURL(b)}),k=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${h}" viewBox="0 0 ${h} ${h}"><image href="${I}" width="${h}" height="${h}" preserveAspectRatio="none" /></svg>`,z=new Blob([k],{type:"image/svg+xml;charset=utf-8"}),j=URL.createObjectURL(z),ae=document.createElement("a");ae.href=j,ae.download=`${x}.svg`,ae.click(),URL.revokeObjectURL(j),e("download");return}const y=URL.createObjectURL(b),S=await new Promise((T,I)=>{const k=new Image;k.onload=()=>T(k),k.onerror=()=>I(new Error("이미지 다운로드에 실패했습니다.")),k.src=y}),C=document.createElement("canvas");C.width=h,C.height=h;const N=C.getContext("2d");if(!N)throw new Error("캔버스 컨텍스트를 가져오지 못했습니다.");N.drawImage(S,0,0,h,h);const w=a==="PNG"?"image/png":"image/jpeg",L=await new Promise((T,I)=>{C.toBlob(k=>{if(!k){I(new Error("파일 변환에 실패했습니다."));return}T(k)},w,.92)}),P=URL.createObjectURL(L),F=document.createElement("a");F.href=P,F.download=`${x}.${a.toLowerCase()==="jpeg"?"jpg":a.toLowerCase()}`,F.click(),URL.revokeObjectURL(P),URL.revokeObjectURL(y),e("download")},_=x=>{i(x),f(),e("size")},g=x=>{o(x),f(),e("format")};return D.jsxs("div",{className:"generated-image-actions","aria-label":"2D 이미지 추출",children:[D.jsx("p",{className:"generated-image-actions-title",children:"2D 이미지 추출"}),D.jsxs("div",{className:"generated-image-actions-controls",children:[D.jsxs("div",{className:"generated-image-control-group",children:[D.jsxs("button",{type:"button",className:`generated-image-control${c==="size"?" is-open":""}`,onClick:()=>u(x=>x==="size"?null:"size"),children:[D.jsxs("span",{children:[t,"x"]}),D.jsx("span",{className:"generated-image-control-chevron","aria-hidden":"true",children:"▾"})]}),c==="size"?D.jsx("div",{className:"generated-image-control-menu",role:"menu","aria-label":"사이즈 선택",children:zx.map(x=>D.jsxs("button",{type:"button",className:`generated-image-control-menu-item${t===x?" is-selected":""}`,onClick:()=>_(x),children:[x,"x"]},x))}):null]}),D.jsxs("div",{className:"generated-image-control-group",children:[D.jsxs("button",{type:"button",className:`generated-image-control${c==="format"?" is-open":""}`,onClick:()=>u(x=>x==="format"?null:"format"),children:[D.jsx("span",{children:a}),D.jsx("span",{className:"generated-image-control-chevron","aria-hidden":"true",children:"▾"})]}),c==="format"?D.jsx("div",{className:"generated-image-control-menu",role:"menu","aria-label":"포맷 선택",children:Vx.map(x=>D.jsx("button",{type:"button",className:`generated-image-control-menu-item${a===x?" is-selected":""}`,onClick:()=>g(x),children:x},x))}):null]}),D.jsx("button",{type:"button",className:"generated-image-download",onClick:m,"aria-label":"이미지 다운로드",children:D.jsx("img",{src:"/assets/icons/download.svg",alt:"","aria-hidden":"true"})})]}),D.jsx("p",{className:"generated-image-actions-hint",children:"사이즈: 1024 x 1024"})]})}const Gx=2600,Mg=(s,e)=>{var t;return((t=s.find(i=>i.label===e))==null?void 0:t.value)??""};function Wx({title:s,imageSrc:e,prompt:t,metadataItems:i,onAction:a,onApplyEdit:o,onGeneratePose:c,onToggleBackgroundElements:u,allowSecondaryEdit:h=!0,isPoseApplied:f=!1,initialBackgroundElementsEnabled:m=!0}){const[_,g]=We.useState(!1),[x,M]=We.useState(!1),[b,y]=We.useState(m),[S,C]=We.useState("기본"),[N,w]=We.useState(null),L=We.useRef(null),P=Mg(i,"캐릭터"),F=Mg(i,"스타일"),T=t,I=(K=b)=>({imageSrc:e,metadataItems:i,backgroundEnabled:K,poseLabel:S,character:P,style:F,prompt:T}),k=K=>{L.current&&window.clearTimeout(L.current),M(!0),L.current=window.setTimeout(()=>{M(!1),K()},Gx)},z=K=>{w(K)},j=K=>{const oe=I();w(null),k(()=>o(K,oe))},ae=()=>{const K=!b,oe=I(K);y(K),w(null),k(()=>u(K,oe))},pe=()=>{const K=I();w(null),C("포즈 적용"),k(()=>c(K))};return We.useEffect(()=>(y(m),C(f?"포즈 적용":"기본"),()=>{L.current&&window.clearTimeout(L.current)}),[e,m,f]),D.jsxs("section",{className:"result-panel",children:[D.jsxs("header",{className:"result-panel-header",children:[D.jsx("h2",{className:"result-panel-title",children:s}),D.jsx("div",{className:"result-panel-actions",children:D.jsx(Cs,{ariaLabel:`${s} 크게 보기`,icon:"expand",imageClassName:"icon-button__image--panel"})})]}),D.jsx("div",{className:"result-panel-body result-panel-body--generated",children:D.jsxs("div",{className:"generated-image-shell",children:[D.jsxs("div",{className:`generated-image-preview generated-image-preview--reveal${_?" is-hovered":""}${x?" is-refining":""}`,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[D.jsx("img",{src:e,alt:"생성된 2D 이미지",className:"generated-image generated-image--reveal"},e),h&&(_||x)?D.jsx(Bx,{isBackgroundElementsEnabled:b,isRefining:x,isPoseApplied:f,onOpenEditMode:z,onGeneratePose:pe,onToggleBackgroundElements:ae}):null,h&&N?D.jsx(kx,{isOpen:!0,initialMode:N,currentValues:{character:P,style:F,prompt:T},onClose:()=>w(null),onSubmit:j}):null]}),D.jsxs("div",{className:"generated-image-footer generated-image-footer--reveal",children:[D.jsx(Ox,{items:i}),D.jsx(Hx,{imageSrc:e,onAction:a})]})]})})]})}const Xx=s=>{const e=new Date(s),t=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}.${i}.${a}`};function jx({items:s,selectedHistoryId:e,onClose:t,onSelectItem:i,isOpen:a}){const o=We.useMemo(()=>{const c=[...s].sort((h,f)=>f.createdAt-h.createdAt),u=new Map;return c.forEach(h=>{const f=Xx(h.createdAt),m=u.get(f)??[];m.push(h),u.set(f,m)}),Array.from(u.entries()).map(([h,f])=>({dateLabel:h,items:f}))},[s]);return D.jsxs("div",{className:`history-gallery-panel${a?" is-open":""}`,"aria-label":"히스토리 목록 화면",children:[D.jsxs("header",{className:"history-gallery-panel__header",children:[D.jsx("div",{className:"history-gallery-panel__title-block",children:D.jsxs("h2",{className:"history-gallery-panel__title",children:["히스토리 (",s.length,")"]})}),D.jsx("button",{type:"button",className:"scroll-top-button scroll-top-button--rotated","aria-label":"히스토리 닫기",onClick:t,children:D.jsx("img",{src:"/assets/icons/chevron-up-double.svg",alt:"","aria-hidden":"true",className:"scroll-top-icon"})})]}),D.jsx("div",{className:"history-gallery-panel__body",children:o.length>0?o.map(c=>D.jsxs("section",{className:"history-gallery-group",children:[D.jsxs("div",{className:"history-gallery-group__header",children:[D.jsx("span",{className:"history-gallery-group__date",children:c.dateLabel}),D.jsx("span",{className:"history-gallery-group__rule","aria-hidden":"true"})]}),D.jsx("div",{className:"history-gallery-grid",children:c.items.map(u=>D.jsx("button",{type:"button",className:`history-gallery-card${e===u.id?" is-selected":""}`,onClick:()=>i(u.id),"aria-label":`${u.kind} ${c.dateLabel} 선택`,children:D.jsx("img",{src:u.thumbnail,alt:"","aria-hidden":"true",className:`history-gallery-card__image history-gallery-card__image--${u.variant}`})},u.id))})]},c.dateLabel)):D.jsxs("div",{className:"history-gallery-empty",children:[D.jsx("p",{className:"history-gallery-empty__title",children:"히스토리 내역이 없습니다."}),D.jsx("p",{className:"history-gallery-empty__text",children:"2D 또는 3D 이미지를 생성하면 여기에 목록으로 표시됩니다."})]})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="185",ya={ROTATE:0,DOLLY:1,PAN:2},xa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yx=0,Eg=1,Kx=2,Nc=1,qx=2,Po=3,Mr=0,Qn=1,Ki=2,yr=0,Sa=1,Tg=2,wg=3,bg=4,$x=5,bs=100,Zx=101,Jx=102,Qx=103,ey=104,ty=200,ny=201,iy=202,ry=203,Eh=204,Th=205,sy=206,ay=207,oy=208,ly=209,cy=210,uy=211,dy=212,hy=213,fy=214,wh=0,bh=1,Ah=2,wa=3,Rh=4,Ch=5,Ph=6,Nh=7,e0=0,py=1,my=2,Ji=0,t0=1,n0=2,i0=3,r0=4,s0=5,a0=6,o0=7,Ag="attached",gy="detached",l0=300,Ns=301,ba=302,Fd=303,Od=304,Kc=306,Aa=1e3,qi=1001,Bc=1002,gn=1003,c0=1004,No=1005,_n=1006,Lc=1007,vr=1008,ai=1009,u0=1010,d0=1011,Oo=1012,yf=1013,tr=1014,_i=1015,Er=1016,Sf=1017,Mf=1018,ko=1020,h0=35902,f0=35899,p0=1021,m0=1022,vi=1023,Tr=1026,Rs=1027,Ef=1028,Tf=1029,Ls=1030,wf=1031,bf=1033,Ic=33776,Dc=33777,Uc=33778,Fc=33779,Lh=35840,Ih=35841,Dh=35842,Uh=35843,Fh=36196,Oh=37492,kh=37496,Bh=37488,zh=37489,zc=37490,Vh=37491,Hh=37808,Gh=37809,Wh=37810,Xh=37811,jh=37812,Yh=37813,Kh=37814,qh=37815,$h=37816,Zh=37817,Jh=37818,Qh=37819,ef=37820,tf=37821,nf=36492,rf=36494,sf=36495,af=36283,of=36284,Vc=36285,lf=36286,Bo=2300,zo=2301,kd=2302,Rg=2303,Cg=2400,Pg=2401,Ng=2402,_y=2500,vy=0,g0=1,cf=2,xy=3200,uf=0,yy=1,Qr="",Tn="srgb",oi="srgb-linear",Hc="linear",kt="srgb",ia=7680,Lg=519,Sy=512,My=513,Ey=514,Af=515,Ty=516,wy=517,Rf=518,by=519,df=35044,Ig="300 es",$i=2e3,Vo=2001;function Ay(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ry(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cy(){const s=Ho("canvas");return s.style.display="block",s}const Dg={};function Gc(...s){const e="THREE."+s.shift();console.log(e,...s)}function _0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function tt(...s){s=_0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ft(...s){s=_0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ma(...s){const e=s.join(" ");e in Dg||(Dg[e]=!0,tt(...s))}function Py(s,e,t){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Ny={[wh]:bh,[Ah]:Ph,[Rh]:Nh,[wa]:Ch,[bh]:wh,[Ph]:Ah,[Nh]:Rh,[Ch]:wa};class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ug=1234567;const Do=Math.PI/180,Ra=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function Cf(s,e){return(s%e+e)%e}function Ly(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function Iy(s,e,t){return s!==e?(t-s)/(e-s):0}function Uo(s,e,t){return(1-t)*s+t*e}function Dy(s,e,t,i){return Uo(s,e,1-Math.exp(-t*i))}function Uy(s,e=1){return e-Math.abs(Cf(s,e*2)-e)}function Fy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Oy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ky(s,e){return s+Math.floor(Math.random()*(e-s+1))}function By(s,e){return s+Math.random()*(e-s)}function zy(s){return s*(.5-Math.random())}function Vy(s){s!==void 0&&(Ug=s);let e=Ug+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hy(s){return s*Do}function Gy(s){return s*Ra}function Wy(s){return(s&s-1)===0&&s!==0}function Xy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yy(s,e,t,i,a){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),f=o((e+i)/2),m=c((e+i)/2),_=o((e-i)/2),g=c((e-i)/2),x=o((i-e)/2),M=c((i-e)/2);switch(a){case"XYX":s.set(u*m,h*_,h*g,u*f);break;case"YZY":s.set(h*g,u*m,h*_,u*f);break;case"ZXZ":s.set(h*_,h*g,u*m,u*f);break;case"XZX":s.set(u*m,h*M,h*x,u*f);break;case"YXY":s.set(h*x,u*m,h*M,u*f);break;case"ZYZ":s.set(h*M,h*x,u*m,u*f);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const v0={DEG2RAD:Do,RAD2DEG:Ra,generateUUID:Ii,clamp:wt,euclideanModulo:Cf,mapLinear:Ly,inverseLerp:Iy,lerp:Uo,damp:Dy,pingpong:Uy,smoothstep:Fy,smootherstep:Oy,randInt:ky,randFloat:By,randFloatSpread:zy,seededRandom:Vy,degToRad:Hy,radToDeg:Gy,isPowerOfTwo:Wy,ceilPowerOfTwo:Xy,floorPowerOfTwo:jy,setQuaternionFromProperEuler:Yy,normalize:Bt,denormalize:Pi},Wf=class Wf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wf.prototype.isVector2=!0;let ct=Wf;class Di{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,u){let h=i[a+0],f=i[a+1],m=i[a+2],_=i[a+3],g=o[c+0],x=o[c+1],M=o[c+2],b=o[c+3];if(_!==b||h!==g||f!==x||m!==M){let y=h*g+f*x+m*M+_*b;y<0&&(g=-g,x=-x,M=-M,b=-b,y=-y);let S=1-u;if(y<.9995){const C=Math.acos(y),N=Math.sin(C);S=Math.sin(S*C)/N,u=Math.sin(u*C)/N,h=h*S+g*u,f=f*S+x*u,m=m*S+M*u,_=_*S+b*u}else{h=h*S+g*u,f=f*S+x*u,m=m*S+M*u,_=_*S+b*u;const C=1/Math.sqrt(h*h+f*f+m*m+_*_);h*=C,f*=C,m*=C,_*=C}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,o,c){const u=i[a],h=i[a+1],f=i[a+2],m=i[a+3],_=o[c],g=o[c+1],x=o[c+2],M=o[c+3];return e[t]=u*M+m*_+h*x-f*g,e[t+1]=h*M+m*g+f*_-u*x,e[t+2]=f*M+m*x+u*g-h*_,e[t+3]=m*M-u*_-h*g-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(i/2),m=u(a/2),_=u(o/2),g=h(i/2),x=h(a/2),M=h(o/2);switch(c){case"XYZ":this._x=g*m*_+f*x*M,this._y=f*x*_-g*m*M,this._z=f*m*M+g*x*_,this._w=f*m*_-g*x*M;break;case"YXZ":this._x=g*m*_+f*x*M,this._y=f*x*_-g*m*M,this._z=f*m*M-g*x*_,this._w=f*m*_+g*x*M;break;case"ZXY":this._x=g*m*_-f*x*M,this._y=f*x*_+g*m*M,this._z=f*m*M+g*x*_,this._w=f*m*_-g*x*M;break;case"ZYX":this._x=g*m*_-f*x*M,this._y=f*x*_+g*m*M,this._z=f*m*M-g*x*_,this._w=f*m*_+g*x*M;break;case"YZX":this._x=g*m*_+f*x*M,this._y=f*x*_+g*m*M,this._z=f*m*M-g*x*_,this._w=f*m*_-g*x*M;break;case"XZY":this._x=g*m*_-f*x*M,this._y=f*x*_-g*m*M,this._z=f*m*M+g*x*_,this._w=f*m*_+g*x*M;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],u=t[5],h=t[9],f=t[2],m=t[6],_=t[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(m-h)*x,this._y=(o-f)*x,this._z=(c-a)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(m-h)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+f)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(o-f)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(c-a)/x,this._x=(o+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,u=t._x,h=t._y,f=t._z,m=t._w;return this._x=i*m+c*u+a*f-o*h,this._y=a*m+c*h+o*u-i*f,this._z=o*m+c*f+i*h-a*u,this._w=c*m-i*u-a*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,a=-a,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),m=Math.sin(f);h=Math.sin(h*f)/m,t=Math.sin(t*f)/m,this._x=this._x*h+i*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xf=class Xf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*a-u*i),m=2*(u*t-o*a),_=2*(o*i-c*t);return this.x=t+h*f+c*_-u*m,this.y=i+h*m+u*f-o*_,this.z=a+h*_+o*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=a*h-o*u,this.y=o*c-i*h,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bd.copy(this).projectOnVector(e),this.sub(Bd)}reflect(e){return this.sub(Bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xf.prototype.isVector3=!0;let W=Xf;const Bd=new W,Fg=new Di,jf=class jf{constructor(e,t,i,a,o,c,u,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,h,f)}set(e,t,i,a,o,c,u,h,f){const m=this.elements;return m[0]=e,m[1]=a,m[2]=u,m[3]=t,m[4]=o,m[5]=h,m[6]=i,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],m=i[4],_=i[7],g=i[2],x=i[5],M=i[8],b=a[0],y=a[3],S=a[6],C=a[1],N=a[4],w=a[7],L=a[2],P=a[5],F=a[8];return o[0]=c*b+u*C+h*L,o[3]=c*y+u*N+h*P,o[6]=c*S+u*w+h*F,o[1]=f*b+m*C+_*L,o[4]=f*y+m*N+_*P,o[7]=f*S+m*w+_*F,o[2]=g*b+x*C+M*L,o[5]=g*y+x*N+M*P,o[8]=g*S+x*w+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],m=e[8];return t*c*m-t*u*f-i*o*m+i*u*h+a*o*f-a*c*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],m=e[8],_=m*c-u*f,g=u*h-m*o,x=f*o-c*h,M=t*_+i*g+a*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=_*b,e[1]=(a*f-m*i)*b,e[2]=(u*i-a*c)*b,e[3]=g*b,e[4]=(m*t-a*h)*b,e[5]=(a*o-u*t)*b,e[6]=x*b,e[7]=(i*h-f*t)*b,e[8]=(c*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,u){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*u)+c+e,-a*f,a*h,-a*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return Ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zd.makeScale(e,t)),this}rotate(e){return Ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zd.makeRotation(-e)),this}translate(e,t){return Ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jf.prototype.isMatrix3=!0;let _t=jf;const zd=new _t,Og=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ky(){const s={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===kt&&(a.r=Sr(a.r),a.g=Sr(a.g),a.b=Sr(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(a.r=Ea(a.r),a.g=Ea(a.g),a.b=Ea(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Qr?Hc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[oi]:{primaries:e,whitePoint:i,transfer:Hc,toXYZ:Og,fromXYZ:kg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:Og,fromXYZ:kg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),s}const Ct=Ky();function Sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ea(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ra;class qy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ra===void 0&&(ra=Ho("canvas")),ra.width=e.width,ra.height=e.height;const a=ra.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ra}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Sr(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sr(t[i]/255)*255):t[i]=Sr(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $y=0;class Pf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(Vd(a[c].image)):o.push(Vd(a[c]))}else o=Vd(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Zy=0;const Hd=new W;class wn extends ns{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,i=qi,a=qi,o=_n,c=vr,u=vi,h=ai,f=wn.DEFAULT_ANISOTROPY,m=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Ii(),this.name="",this.source=new Pf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hd).x}get height(){return this.source.getSize(Hd).y}get depth(){return this.source.getSize(Hd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=l0;wn.DEFAULT_ANISOTROPY=1;const Yf=class Yf{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const h=e.elements,f=h[0],m=h[4],_=h[8],g=h[1],x=h[5],M=h[9],b=h[2],y=h[6],S=h[10];if(Math.abs(m-g)<.01&&Math.abs(_-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+b)<.1&&Math.abs(M+y)<.1&&Math.abs(f+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(f+1)/2,w=(x+1)/2,L=(S+1)/2,P=(m+g)/4,F=(_+b)/4,T=(M+y)/4;return N>w&&N>L?N<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(N),a=P/i,o=F/i):w>L?w<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(w),i=P/a,o=T/a):L<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(L),i=F/o,a=T/o),this.set(i,a,o,t),this}let C=Math.sqrt((y-M)*(y-M)+(_-b)*(_-b)+(g-m)*(g-m));return Math.abs(C)<.001&&(C=1),this.x=(y-M)/C,this.y=(_-b)/C,this.z=(g-m)/C,this.w=Math.acos((f+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yf.prototype.isVector4=!0;let Wt=Yf;class Jy extends ns{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new wn(a),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Pf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Jy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class x0 extends wn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qy extends wn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=class Yc{constructor(e,t,i,a,o,c,u,h,f,m,_,g,x,M,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,h,f,m,_,g,x,M,b,y)}set(e,t,i,a,o,c,u,h,f,m,_,g,x,M,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=a,S[1]=o,S[5]=c,S[9]=u,S[13]=h,S[2]=f,S[6]=m,S[10]=_,S[14]=g,S[3]=x,S[7]=M,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/sa.setFromMatrixColumn(e,0).length(),o=1/sa.setFromMatrixColumn(e,1).length(),c=1/sa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(a),f=Math.sin(a),m=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const g=c*m,x=c*_,M=u*m,b=u*_;t[0]=h*m,t[4]=-h*_,t[8]=f,t[1]=x+M*f,t[5]=g-b*f,t[9]=-u*h,t[2]=b-g*f,t[6]=M+x*f,t[10]=c*h}else if(e.order==="YXZ"){const g=h*m,x=h*_,M=f*m,b=f*_;t[0]=g+b*u,t[4]=M*u-x,t[8]=c*f,t[1]=c*_,t[5]=c*m,t[9]=-u,t[2]=x*u-M,t[6]=b+g*u,t[10]=c*h}else if(e.order==="ZXY"){const g=h*m,x=h*_,M=f*m,b=f*_;t[0]=g-b*u,t[4]=-c*_,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*m,t[9]=b-g*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const g=c*m,x=c*_,M=u*m,b=u*_;t[0]=h*m,t[4]=M*f-x,t[8]=g*f+b,t[1]=h*_,t[5]=b*f+g,t[9]=x*f-M,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,x=c*f,M=u*h,b=u*f;t[0]=h*m,t[4]=b-g*_,t[8]=M*_+x,t[1]=_,t[5]=c*m,t[9]=-u*m,t[2]=-f*m,t[6]=x*_+M,t[10]=g-b*_}else if(e.order==="XZY"){const g=c*h,x=c*f,M=u*h,b=u*f;t[0]=h*m,t[4]=-_,t[8]=f*m,t[1]=g*_+b,t[5]=c*m,t[9]=x*_-M,t[2]=M*_-x,t[6]=u*m,t[10]=b*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eS,e,tS)}lookAt(e,t,i){const a=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Wr.crossVectors(i,ri),Wr.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Wr.crossVectors(i,ri)),Wr.normalize(),tc.crossVectors(ri,Wr),a[0]=Wr.x,a[4]=tc.x,a[8]=ri.x,a[1]=Wr.y,a[5]=tc.y,a[9]=ri.y,a[2]=Wr.z,a[6]=tc.z,a[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],m=i[1],_=i[5],g=i[9],x=i[13],M=i[2],b=i[6],y=i[10],S=i[14],C=i[3],N=i[7],w=i[11],L=i[15],P=a[0],F=a[4],T=a[8],I=a[12],k=a[1],z=a[5],j=a[9],ae=a[13],pe=a[2],K=a[6],oe=a[10],Z=a[14],Y=a[3],se=a[7],le=a[11],B=a[15];return o[0]=c*P+u*k+h*pe+f*Y,o[4]=c*F+u*z+h*K+f*se,o[8]=c*T+u*j+h*oe+f*le,o[12]=c*I+u*ae+h*Z+f*B,o[1]=m*P+_*k+g*pe+x*Y,o[5]=m*F+_*z+g*K+x*se,o[9]=m*T+_*j+g*oe+x*le,o[13]=m*I+_*ae+g*Z+x*B,o[2]=M*P+b*k+y*pe+S*Y,o[6]=M*F+b*z+y*K+S*se,o[10]=M*T+b*j+y*oe+S*le,o[14]=M*I+b*ae+y*Z+S*B,o[3]=C*P+N*k+w*pe+L*Y,o[7]=C*F+N*z+w*K+L*se,o[11]=C*T+N*j+w*oe+L*le,o[15]=C*I+N*ae+w*Z+L*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],u=e[5],h=e[9],f=e[13],m=e[2],_=e[6],g=e[10],x=e[14],M=e[3],b=e[7],y=e[11],S=e[15],C=h*x-f*g,N=u*x-f*_,w=u*g-h*_,L=c*x-f*m,P=c*g-h*m,F=c*_-u*m;return t*(b*C-y*N+S*w)-i*(M*C-y*L+S*P)+a*(M*N-b*L+S*F)-o*(M*w-b*P+y*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[1],c=e[5],u=e[9],h=e[2],f=e[6],m=e[10];return t*(c*m-u*f)-i*(o*m-u*h)+a*(o*f-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],m=e[8],_=e[9],g=e[10],x=e[11],M=e[12],b=e[13],y=e[14],S=e[15],C=t*u-i*c,N=t*h-a*c,w=t*f-o*c,L=i*h-a*u,P=i*f-o*u,F=a*f-o*h,T=m*b-_*M,I=m*y-g*M,k=m*S-x*M,z=_*y-g*b,j=_*S-x*b,ae=g*S-x*y,pe=C*ae-N*j+w*z+L*k-P*I+F*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/pe;return e[0]=(u*ae-h*j+f*z)*K,e[1]=(a*j-i*ae-o*z)*K,e[2]=(b*F-y*P+S*L)*K,e[3]=(g*P-_*F-x*L)*K,e[4]=(h*k-c*ae-f*I)*K,e[5]=(t*ae-a*k+o*I)*K,e[6]=(y*w-M*F-S*N)*K,e[7]=(m*F-g*w+x*N)*K,e[8]=(c*j-u*k+f*T)*K,e[9]=(i*k-t*j-o*T)*K,e[10]=(M*P-b*w+S*C)*K,e[11]=(_*w-m*P-x*C)*K,e[12]=(u*I-c*z-h*T)*K,e[13]=(t*z-i*I+a*T)*K,e[14]=(b*N-M*L-y*C)*K,e[15]=(m*L-_*N+g*C)*K,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,f=o*c,m=o*u;return this.set(f*c+i,f*u-a*h,f*h+a*u,0,f*u+a*h,m*u+i,m*h-a*c,0,f*h-a*u,m*h+a*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,f=o+o,m=c+c,_=u+u,g=o*f,x=o*m,M=o*_,b=c*m,y=c*_,S=u*_,C=h*f,N=h*m,w=h*_,L=i.x,P=i.y,F=i.z;return a[0]=(1-(b+S))*L,a[1]=(x+w)*L,a[2]=(M-N)*L,a[3]=0,a[4]=(x-w)*P,a[5]=(1-(g+S))*P,a[6]=(y+C)*P,a[7]=0,a[8]=(M+N)*F,a[9]=(y-C)*F,a[10]=(1-(g+b))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let c=sa.set(a[0],a[1],a[2]).length();const u=sa.set(a[4],a[5],a[6]).length(),h=sa.set(a[8],a[9],a[10]).length();o<0&&(c=-c),Ai.copy(this);const f=1/c,m=1/u,_=1/h;return Ai.elements[0]*=f,Ai.elements[1]*=f,Ai.elements[2]*=f,Ai.elements[4]*=m,Ai.elements[5]*=m,Ai.elements[6]*=m,Ai.elements[8]*=_,Ai.elements[9]*=_,Ai.elements[10]*=_,t.setFromRotationMatrix(Ai),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,a,o,c,u=$i,h=!1){const f=this.elements,m=2*o/(t-e),_=2*o/(i-a),g=(t+e)/(t-e),x=(i+a)/(i-a);let M,b;if(h)M=o/(c-o),b=c*o/(c-o);else if(u===$i)M=-(c+o)/(c-o),b=-2*c*o/(c-o);else if(u===Vo)M=-c/(c-o),b=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=m,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=_,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,o,c,u=$i,h=!1){const f=this.elements,m=2/(t-e),_=2/(i-a),g=-(t+e)/(t-e),x=-(i+a)/(i-a);let M,b;if(h)M=1/(c-o),b=c/(c-o);else if(u===$i)M=-2/(c-o),b=-(c+o)/(c-o);else if(u===Vo)M=-1/(c-o),b=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=m,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=_,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=M,f[14]=b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Yc.prototype.isMatrix4=!0;let vt=Yc;const sa=new W,Ai=new vt,eS=new W(0,0,0),tS=new W(1,1,1),Wr=new W,tc=new W,ri=new W,Bg=new vt,zg=new Di;class ts{constructor(e=0,t=0,i=0,a=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],h=a[1],f=a[5],m=a[9],_=a[2],g=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-wt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-m,x),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zg.setFromEuler(this),this.setFromQuaternion(zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nS=0;const Vg=new W,aa=new Di,hr=new vt,nc=new W,xo=new W,iS=new W,rS=new Di,Hg=new W(1,0,0),Gg=new W(0,1,0),Wg=new W(0,0,1),Xg={type:"added"},sS={type:"removed"},oa={type:"childadded",child:null},Gd={type:"childremoved",child:null};class rn extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new W,t=new ts,i=new Di,a=new W(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new vt},normalMatrix:{value:new _t}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(Hg,e)}rotateY(e){return this.rotateOnAxis(Gg,e)}rotateZ(e){return this.rotateOnAxis(Wg,e)}translateOnAxis(e,t){return Vg.copy(e).applyQuaternion(this.quaternion),this.position.add(Vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hg,e)}translateY(e){return this.translateOnAxis(Gg,e)}translateZ(e){return this.translateOnAxis(Wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nc.copy(e):nc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(xo,nc,this.up):hr.lookAt(nc,xo,this.up),this.quaternion.setFromRotationMatrix(hr),a&&(hr.extractRotation(a.matrixWorld),aa.setFromRotationMatrix(hr),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xg),oa.child=e,this.dispatchEvent(oa),oa.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sS),Gd.child=e,this.dispatchEvent(Gd),Gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xg),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,iS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,rS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const _=h[f];o(e.shapes,_)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(e.materials,this.material[h]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),f=c(e.textures),m=c(e.images),_=c(e.shapes),g=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=a,i;function c(u){const h=[];for(const f in u){const m=u[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Li extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aS={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,i),S=this._getHandJoint(f,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],g=m.position.distanceTo(_.position),x=.02,M=.005;f.inputState.pinching&&g>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(aS)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Xd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Ct.workingColorSpace){if(e=Cf(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Xd(c,o,e+1/3),this.g=Xd(c,o,e),this.b=Xd(c,o,e-1/3)}return Ct.colorSpaceToWorking(this,a),this}setStyle(e,t=Tn){function i(o){o!==void 0&&parseFloat(o)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=S0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Ct.workingToColorSpace(Fn.copy(this),e),Math.round(wt(Fn.r*255,0,255))*65536+Math.round(wt(Fn.g*255,0,255))*256+Math.round(wt(Fn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,a=Fn.g,o=Fn.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let h,f;const m=(u+c)/2;if(u===c)h=0,f=0;else{const _=c-u;switch(f=m<=.5?_/(c+u):_/(2-c-u),c){case i:h=(a-o)/_+(a<o?6:0);break;case a:h=(o-i)/_+2;break;case o:h=(i-a)/_+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Tn){Ct.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,i=Fn.g,a=Fn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(ic);const i=Uo(Xr.h,ic.h,t),a=Uo(Xr.s,ic.s,t),o=Uo(Xr.l,ic.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new ut;ut.NAMES=S0;class Nf{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=i}clone(){return new Nf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class oS extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new W,fr=new W,jd=new W,pr=new W,la=new W,ca=new W,jg=new W,Yd=new W,Kd=new W,qd=new W,$d=new Wt,Zd=new Wt,Jd=new Wt;class Ni{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Ri.subVectors(e,t),a.cross(Ri);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Ri.subVectors(a,t),fr.subVectors(i,t),jd.subVectors(e,t);const c=Ri.dot(Ri),u=Ri.dot(fr),h=Ri.dot(jd),f=fr.dot(fr),m=fr.dot(jd),_=c*f-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,x=(f*h-u*m)*g,M=(c*m-u*h)*g;return o.set(1-x-M,M,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,i,a,o,c,u,h){return this.getBarycoord(e,t,i,a,pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,pr.x),h.addScaledVector(c,pr.y),h.addScaledVector(u,pr.z),h)}static getInterpolatedAttribute(e,t,i,a,o,c){return $d.setScalar(0),Zd.setScalar(0),Jd.setScalar(0),$d.fromBufferAttribute(e,t),Zd.fromBufferAttribute(e,i),Jd.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector($d,o.x),c.addScaledVector(Zd,o.y),c.addScaledVector(Jd,o.z),c}static isFrontFacing(e,t,i,a){return Ri.subVectors(i,t),fr.subVectors(e,t),Ri.cross(fr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ri.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return Ni.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,u;la.subVectors(a,i),ca.subVectors(o,i),Yd.subVectors(e,i);const h=la.dot(Yd),f=ca.dot(Yd);if(h<=0&&f<=0)return t.copy(i);Kd.subVectors(e,a);const m=la.dot(Kd),_=ca.dot(Kd);if(m>=0&&_<=m)return t.copy(a);const g=h*_-m*f;if(g<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(i).addScaledVector(la,c);qd.subVectors(e,o);const x=la.dot(qd),M=ca.dot(qd);if(M>=0&&x<=M)return t.copy(o);const b=x*f-h*M;if(b<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(i).addScaledVector(ca,u);const y=m*M-x*_;if(y<=0&&_-m>=0&&x-M>=0)return jg.subVectors(o,a),u=(_-m)/(_-m+(x-M)),t.copy(a).addScaledVector(jg,u);const S=1/(y+b+g);return c=b*S,u=g*S,t.copy(i).addScaledVector(la,c).addScaledVector(ca,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ui{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ci):Ci.fromBufferAttribute(o,c),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),sc.subVectors(this.max,yo),ua.subVectors(e.a,yo),da.subVectors(e.b,yo),ha.subVectors(e.c,yo),jr.subVectors(da,ua),Yr.subVectors(ha,da),Ss.subVectors(ua,ha);let t=[0,-jr.z,jr.y,0,-Yr.z,Yr.y,0,-Ss.z,Ss.y,jr.z,0,-jr.x,Yr.z,0,-Yr.x,Ss.z,0,-Ss.x,-jr.y,jr.x,0,-Yr.y,Yr.x,0,-Ss.y,Ss.x,0];return!Qd(t,ua,da,ha,sc)||(t=[1,0,0,0,1,0,0,0,1],!Qd(t,ua,da,ha,sc))?!1:(ac.crossVectors(jr,Yr),t=[ac.x,ac.y,ac.z],Qd(t,ua,da,ha,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new W,new W,new W,new W,new W,new W,new W,new W],Ci=new W,rc=new Ui,ua=new W,da=new W,ha=new W,jr=new W,Yr=new W,Ss=new W,yo=new W,sc=new W,ac=new W,Ms=new W;function Qd(s,e,t,i,a){for(let o=0,c=s.length-3;o<=c;o+=3){Ms.fromArray(s,o);const u=a.x*Math.abs(Ms.x)+a.y*Math.abs(Ms.y)+a.z*Math.abs(Ms.z),h=e.dot(Ms),f=t.dot(Ms),m=i.dot(Ms);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>u)return!1}return!0}const dn=new W,oc=new ct;let lS=0;class On extends ns{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=df,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oc.fromBufferAttribute(this,t),oc.applyMatrix3(e),this.setXY(t,oc.x,oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array),o=Bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==df&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class M0 extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class E0 extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}const cS=new Ui,So=new W,eh=new W;class Fi{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cS.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(So,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(eh)),this.expandByPoint(So.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uS=0;const mi=new vt,th=new rn,fa=new W,si=new Ui,Mo=new Ui,En=new W;class bn extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ay(e)?E0:M0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new _t().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,i){return mi.makeTranslation(e,t,i),this.applyMatrix4(mi),this}scale(e,t,i){return mi.makeScale(e,t,i),this.applyMatrix4(mi),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fa).negate(),this.translate(fa.x,fa.y,fa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];si.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Mo.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(si.min,Mo.min),si.expandByPoint(En),En.addVectors(si.max,Mo.max),si.expandByPoint(En)):(si.expandByPoint(Mo.min),si.expandByPoint(Mo.max))}si.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)En.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(En));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)En.fromBufferAttribute(u,f),h&&(fa.fromBufferAttribute(e,f),En.add(fa)),a=Math.max(a,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new On(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],h=[];for(let T=0;T<i.count;T++)u[T]=new W,h[T]=new W;const f=new W,m=new W,_=new W,g=new ct,x=new ct,M=new ct,b=new W,y=new W;function S(T,I,k){f.fromBufferAttribute(i,T),m.fromBufferAttribute(i,I),_.fromBufferAttribute(i,k),g.fromBufferAttribute(o,T),x.fromBufferAttribute(o,I),M.fromBufferAttribute(o,k),m.sub(f),_.sub(f),x.sub(g),M.sub(g);const z=1/(x.x*M.y-M.x*x.y);isFinite(z)&&(b.copy(m).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(z),y.copy(_).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(z),u[T].add(b),u[I].add(b),u[k].add(b),h[T].add(y),h[I].add(y),h[k].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,I=C.length;T<I;++T){const k=C[T],z=k.start,j=k.count;for(let ae=z,pe=z+j;ae<pe;ae+=3)S(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const N=new W,w=new W,L=new W,P=new W;function F(T){L.fromBufferAttribute(a,T),P.copy(L);const I=u[T];N.copy(I),N.sub(L.multiplyScalar(L.dot(I))).normalize(),w.crossVectors(P,I);const z=w.dot(h[T])<0?-1:1;c.setXYZW(T,N.x,N.y,N.z,z)}for(let T=0,I=C.length;T<I;++T){const k=C[T],z=k.start,j=k.count;for(let ae=z,pe=z+j;ae<pe;ae+=3)F(e.getX(ae+0)),F(e.getX(ae+1)),F(e.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const a=new W,o=new W,c=new W,u=new W,h=new W,f=new W,m=new W,_=new W;if(e)for(let g=0,x=e.count;g<x;g+=3){const M=e.getX(g+0),b=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,b),c.fromBufferAttribute(t,y),m.subVectors(c,o),_.subVectors(a,o),m.cross(_),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),u.add(m),h.add(m),f.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let g=0,x=t.count;g<x;g+=3)a.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,o),_.subVectors(a,o),m.cross(_),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(u,h){const f=u.array,m=u.itemSize,_=u.normalized,g=new f.constructor(h.length*m);let x=0,M=0;for(let b=0,y=h.length;b<y;b++){u.isInterleavedBufferAttribute?x=h[b]*u.data.stride+u.offset:x=h[b]*m;for(let S=0;S<m;S++)g[M++]=f[x++]}return new On(g,m,_)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,a=this.attributes;for(const u in a){const h=a[u],f=e(h,i);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const h=[],f=o[u];for(let m=0,_=f.length;m<_;m++){const g=f[m],x=e(g,i);h.push(x)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let _=0,g=f.length;_<g;_++){const x=f[_];m.push(x.toJSON(e.data))}m.length>0&&(a[h]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const f in a){const m=a[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],_=o[f];for(let g=0,x=_.length;g<x;g++)m.push(_[g].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=df,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new W;class Lf{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array),o=Bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){Gc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let hS=0;class er extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Sa,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sa&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eh&&(i.blendSrc=this.blendSrc),this.blendDst!==Th&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new W,nh=new W,lc=new W,Kr=new W,ih=new W,cc=new W,rh=new W;class Ko{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){nh.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(nh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(lc),u=Kr.dot(this.direction),h=-Kr.dot(lc),f=Kr.lengthSq(),m=Math.abs(1-c*c);let _,g,x,M;if(m>0)if(_=c*h-u,g=c*u-h,M=o*m,_>=0)if(g>=-M)if(g<=M){const b=1/m;_*=b,g*=b,x=_*(_+c*g+2*u)+g*(c*_+g+2*h)+f}else g=o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;else g=-o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;else g<=-M?(_=Math.max(0,-(-c*o+u)),g=_>0?-o:Math.min(Math.max(-o,-h),o),x=-_*_+g*(g+2*h)+f):g<=M?(_=0,g=Math.min(Math.max(-o,-h),o),x=g*(g+2*h)+f):(_=Math.max(0,-(c*o+u)),g=_>0?o:Math.min(Math.max(-o,-h),o),x=-_*_+g*(g+2*h)+f);else g=c>0?-o:o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(nh).addScaledVector(lc,g),x}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const i=gr.dot(this.direction),a=gr.dot(gr)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,u,h;const f=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,a=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,a=(e.min.x-g.x)*f),m>=0?(o=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(o=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),_>=0?(u=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),i>h||u>a)||((u>i||i!==i)&&(i=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,i,a,o){ih.subVectors(t,e),cc.subVectors(i,e),rh.crossVectors(ih,cc);let c=this.direction.dot(rh),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Kr.subVectors(this.origin,e);const h=u*this.direction.dot(cc.crossVectors(Kr,cc));if(h<0)return null;const f=u*this.direction.dot(ih.cross(Kr));if(f<0||h+f>c)return null;const m=-u*Kr.dot(rh);return m<0?null:this.at(m/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zi extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yg=new vt,Es=new Ko,uc=new Fi,Kg=new W,dc=new W,hc=new W,fc=new W,sh=new W,pc=new W,qg=new W,mc=new W;class mn extends rn{constructor(e=new bn,t=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){pc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const m=u[h],_=o[h];m!==0&&(sh.fromBufferAttribute(_,e),c?pc.addScaledVector(sh,m):pc.addScaledVector(sh.sub(t),m))}t.add(pc)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(o),Es.copy(e.ray).recast(e.near),!(uc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(uc,Kg)===null||Es.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&(Yg.copy(o).invert(),Es.copy(e.ray).applyMatrix4(Yg),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,_=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,b=g.length;M<b;M++){const y=g[M],S=c[y.materialIndex],C=Math.max(y.start,x.start),N=Math.min(u.count,Math.min(y.start+y.count,x.start+x.count));for(let w=C,L=N;w<L;w+=3){const P=u.getX(w),F=u.getX(w+1),T=u.getX(w+2);a=gc(this,S,e,i,f,m,_,P,F,T),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),b=Math.min(u.count,x.start+x.count);for(let y=M,S=b;y<S;y+=3){const C=u.getX(y),N=u.getX(y+1),w=u.getX(y+2);a=gc(this,c,e,i,f,m,_,C,N,w),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,b=g.length;M<b;M++){const y=g[M],S=c[y.materialIndex],C=Math.max(y.start,x.start),N=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let w=C,L=N;w<L;w+=3){const P=w,F=w+1,T=w+2;a=gc(this,S,e,i,f,m,_,P,F,T),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let y=M,S=b;y<S;y+=3){const C=y,N=y+1,w=y+2;a=gc(this,c,e,i,f,m,_,C,N,w),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function fS(s,e,t,i,a,o,c,u){let h;if(e.side===Qn?h=i.intersectTriangle(c,o,a,!0,u):h=i.intersectTriangle(a,o,c,e.side===Mr,u),h===null)return null;mc.copy(u),mc.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(mc);return f<t.near||f>t.far?null:{distance:f,point:mc.clone(),object:s}}function gc(s,e,t,i,a,o,c,u,h,f){s.getVertexPosition(u,dc),s.getVertexPosition(h,hc),s.getVertexPosition(f,fc);const m=fS(s,e,t,i,dc,hc,fc,qg);if(m){const _=new W;Ni.getBarycoord(qg,dc,hc,fc,_),a&&(m.uv=Ni.getInterpolatedAttribute(a,u,h,f,_,new ct)),o&&(m.uv1=Ni.getInterpolatedAttribute(o,u,h,f,_,new ct)),c&&(m.normal=Ni.getInterpolatedAttribute(c,u,h,f,_,new W),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:h,c:f,normal:new W,materialIndex:0};Ni.getNormal(dc,hc,fc,g.normal),m.face=g,m.barycoord=_}return m}const Eo=new Wt,$g=new Wt,Zg=new Wt,pS=new Wt,Jg=new vt,_c=new W,ah=new Fi,Qg=new vt,oh=new Ko;class mS extends mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ag,this.bindMatrix=new vt,this.bindMatrixInverse=new vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,_c),this.boundingBox.expandByPoint(_c)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,_c),this.boundingSphere.expandByPoint(_c)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ah.copy(this.boundingSphere),ah.applyMatrix4(a),e.ray.intersectsSphere(ah)!==!1&&(Qg.copy(a).invert(),oh.copy(e.ray).applyMatrix4(Qg),!(this.boundingBox!==null&&oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Wt,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ag?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gy?this.bindMatrixInverse.copy(this.bindMatrix).invert():tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;$g.fromBufferAttribute(a.attributes.skinIndex,e),Zg.fromBufferAttribute(a.attributes.skinWeight,e),t.isVector4?(Eo.copy(t),t.set(0,0,0,0)):(Eo.set(...t,1),t.set(0,0,0)),Eo.applyMatrix4(this.bindMatrix);for(let o=0;o<4;o++){const c=Zg.getComponent(o);if(c!==0){const u=$g.getComponent(o);Jg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(pS.copy(Eo).applyMatrix4(Jg),c)}}return t.isVector4&&(t.w=Eo.w),t.applyMatrix4(this.bindMatrixInverse)}}class T0 extends rn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class If extends wn{constructor(e=null,t=1,i=1,a,o,c,u,h,f=gn,m=gn,_,g){super(null,c,u,h,f,m,a,o,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const e_=new vt,gS=new vt;class Df{constructor(e=[],t=[]){this.uuid=Ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new vt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new vt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let o=0,c=e.length;o<c;o++){const u=e[o]?e[o].matrixWorld:gS;e_.multiplyMatrices(u,t[o]),e_.toArray(i,o*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Df(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new If(t,e,e,vi,_i);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const o=e.bones[i];let c=t[o];c===void 0&&(tt("Skeleton: No bone found with UUID:",o),c=new T0),this.bones.push(c),this.boneInverses.push(new vt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,o=t.length;a<o;a++){const c=t[a];e.bones.push(c.uuid);const u=i[a];e.boneInverses.push(u.toArray())}return e}}class hf extends On{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pa=new vt,t_=new vt,vc=[],n_=new Ui,_S=new vt,To=new mn,wo=new Fi;class vS extends mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,_S)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pa),n_.copy(e.boundingBox).applyMatrix4(pa),this.boundingBox.union(n_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pa),wo.copy(e.boundingSphere).applyMatrix4(pa),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=a[c+u]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),e.ray.intersectsSphere(wo)!==!1))for(let o=0;o<a;o++){this.getMatrixAt(o,pa),t_.multiplyMatrices(i,pa),To.matrixWorld=t_,To.raycast(e,vc);for(let c=0,u=vc.length;c<u;c++){const h=vc[c];h.instanceId=o,h.object=this,t.push(h)}vc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new If(new Float32Array(a*this.count),a,this.count,Ef,_i));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,h=a*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lh=new W,xS=new W,yS=new _t;class Jr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=lh.subVectors(i,t).cross(xS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(lh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yS.getNormalMatrix(e),a=this.coplanarPoint(lh).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Fi,SS=new ct(.5,.5),xc=new W;class Uf{constructor(e=new Jr,t=new Jr,i=new Jr,a=new Jr,o=new Jr,c=new Jr){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$i,i=!1){const a=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],f=o[3],m=o[4],_=o[5],g=o[6],x=o[7],M=o[8],b=o[9],y=o[10],S=o[11],C=o[12],N=o[13],w=o[14],L=o[15];if(a[0].setComponents(f-c,x-m,S-M,L-C).normalize(),a[1].setComponents(f+c,x+m,S+M,L+C).normalize(),a[2].setComponents(f+u,x+_,S+b,L+N).normalize(),a[3].setComponents(f-u,x-_,S-b,L-N).normalize(),i)a[4].setComponents(h,g,y,w).normalize(),a[5].setComponents(f-h,x-g,S-y,L-w).normalize();else if(a[4].setComponents(f-h,x-g,S-y,L-w).normalize(),t===$i)a[5].setComponents(f+h,x+g,S+y,L+w).normalize();else if(t===Vo)a[5].setComponents(h,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=SS.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(xc.x=a.normal.x>0?e.max.x:e.min.x,xc.y=a.normal.y>0?e.max.y:e.min.y,xc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qo extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wc=new W,Xc=new W,i_=new vt,bo=new Ko,yc=new Fi,ch=new W,r_=new W;class Go extends rn{constructor(e=new bn,t=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)Wc.fromBufferAttribute(t,a-1),Xc.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Wc.distanceTo(Xc);e.setAttribute("lineDistance",new Qt(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(a),yc.radius+=o,e.ray.intersectsSphere(yc)===!1)return;i_.copy(a).invert(),bo.copy(e.ray).applyMatrix4(i_);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let b=x,y=M-1;b<y;b+=f){const S=m.getX(b),C=m.getX(b+1),N=Sc(this,e,bo,h,S,C,b);N&&t.push(N)}if(this.isLineLoop){const b=m.getX(M-1),y=m.getX(x),S=Sc(this,e,bo,h,b,y,M-1);S&&t.push(S)}}else{const x=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let b=x,y=M-1;b<y;b+=f){const S=Sc(this,e,bo,h,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=Sc(this,e,bo,h,M-1,x,M-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Sc(s,e,t,i,a,o,c){const u=s.geometry.attributes.position;if(Wc.fromBufferAttribute(u,a),Xc.fromBufferAttribute(u,o),t.distanceSqToSegment(Wc,Xc,ch,r_)>i)return;ch.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(ch);if(!(f<e.near||f>e.far))return{distance:f,point:r_.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const s_=new W,a_=new W;class Wo extends Go{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,o=t.count;a<o;a+=2)s_.fromBufferAttribute(t,a),a_.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+s_.distanceTo(a_);e.setAttribute("lineDistance",new Qt(i,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class MS extends Go{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class w0 extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const o_=new vt,ff=new Ko,Mc=new Fi,Ec=new W;class ES extends rn{constructor(e=new bn,t=new w0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(a),Mc.radius+=o,e.ray.intersectsSphere(Mc)===!1)return;o_.copy(a).invert(),ff.copy(e.ray).applyMatrix4(o_);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=i.index,_=i.attributes.position;if(f!==null){const g=Math.max(0,c.start),x=Math.min(f.count,c.start+c.count);for(let M=g,b=x;M<b;M++){const y=f.getX(M);Ec.fromBufferAttribute(_,y),l_(Ec,y,h,a,e,t,this)}}else{const g=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let M=g,b=x;M<b;M++)Ec.fromBufferAttribute(_,M),l_(Ec,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function l_(s,e,t,i,a,o,c){const u=ff.distanceSqToPoint(s);if(u<t){const h=new W;ff.closestPointToPoint(s,h),h.applyMatrix4(i);const f=a.ray.origin.distanceTo(h);if(f<a.near||f>a.far)return;o.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class b0 extends wn{constructor(e=[],t=Ns,i,a,o,c,u,h,f,m){super(e,t,i,a,o,c,u,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ca extends wn{constructor(e,t,i=tr,a,o,c,u=gn,h=gn,f,m=Tr,_=1){if(m!==Tr&&m!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,a,o,c,u,h,m,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class TS extends Ca{constructor(e,t=tr,i=Ns,a,o,c=gn,u=gn,h,f=Tr){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,i,a,o,c,u,h,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class A0 extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $o extends bn{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],m=[],_=[];let g=0,x=0;M("z","y","x",-1,-1,i,t,e,c,o,0),M("z","y","x",1,-1,i,t,-e,c,o,1),M("x","z","y",1,1,e,i,t,a,c,2),M("x","z","y",1,-1,e,i,-t,a,c,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(m,3)),this.setAttribute("uv",new Qt(_,2));function M(b,y,S,C,N,w,L,P,F,T,I){const k=w/F,z=L/T,j=w/2,ae=L/2,pe=P/2,K=F+1,oe=T+1;let Z=0,Y=0;const se=new W;for(let le=0;le<oe;le++){const B=le*z-ae;for(let J=0;J<K;J++){const Fe=J*k-j;se[b]=Fe*C,se[y]=B*N,se[S]=pe,f.push(se.x,se.y,se.z),se[b]=0,se[y]=0,se[S]=P>0?1:-1,m.push(se.x,se.y,se.z),_.push(J/F),_.push(1-le/T),Z+=1}}for(let le=0;le<T;le++)for(let B=0;B<F;B++){const J=g+B+K*le,Fe=g+B+K*(le+1),Ee=g+(B+1)+K*(le+1),ve=g+(B+1)+K*le;h.push(J,Fe,ve),h.push(Fe,Ee,ve),Y+=6}u.addGroup(x,Y,I),x+=Y,g+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ff extends bn{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const o=[],c=[],u=[],h=[],f=new W,m=new ct;c.push(0,0,0),u.push(0,0,1),h.push(.5,.5);for(let _=0,g=3;_<=t;_++,g+=3){const x=i+_/t*a;f.x=e*Math.cos(x),f.y=e*Math.sin(x),c.push(f.x,f.y,f.z),u.push(0,0,1),m.x=(c[g]/e+1)/2,m.y=(c[g+1]/e+1)/2,h.push(m.x,m.y)}for(let _=1;_<=t;_++)o.push(_,_+1,0);this.setIndex(o),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Of extends bn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],c=[];u(a),f(i),m(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function u(C){const N=new W,w=new W,L=new W;for(let P=0;P<t.length;P+=3)x(t[P+0],N),x(t[P+1],w),x(t[P+2],L),h(N,w,L,C)}function h(C,N,w,L){const P=L+1,F=[];for(let T=0;T<=P;T++){F[T]=[];const I=C.clone().lerp(w,T/P),k=N.clone().lerp(w,T/P),z=P-T;for(let j=0;j<=z;j++)j===0&&T===P?F[T][j]=I:F[T][j]=I.clone().lerp(k,j/z)}for(let T=0;T<P;T++)for(let I=0;I<2*(P-T)-1;I++){const k=Math.floor(I/2);I%2===0?(g(F[T][k+1]),g(F[T+1][k]),g(F[T][k])):(g(F[T][k+1]),g(F[T+1][k+1]),g(F[T+1][k]))}}function f(C){const N=new W;for(let w=0;w<o.length;w+=3)N.x=o[w+0],N.y=o[w+1],N.z=o[w+2],N.normalize().multiplyScalar(C),o[w+0]=N.x,o[w+1]=N.y,o[w+2]=N.z}function m(){const C=new W;for(let N=0;N<o.length;N+=3){C.x=o[N+0],C.y=o[N+1],C.z=o[N+2];const w=y(C)/2/Math.PI+.5,L=S(C)/Math.PI+.5;c.push(w,1-L)}M(),_()}function _(){for(let C=0;C<c.length;C+=6){const N=c[C+0],w=c[C+2],L=c[C+4],P=Math.max(N,w,L),F=Math.min(N,w,L);P>.9&&F<.1&&(N<.2&&(c[C+0]+=1),w<.2&&(c[C+2]+=1),L<.2&&(c[C+4]+=1))}}function g(C){o.push(C.x,C.y,C.z)}function x(C,N){const w=C*3;N.x=e[w+0],N.y=e[w+1],N.z=e[w+2]}function M(){const C=new W,N=new W,w=new W,L=new W,P=new ct,F=new ct,T=new ct;for(let I=0,k=0;I<o.length;I+=9,k+=6){C.set(o[I+0],o[I+1],o[I+2]),N.set(o[I+3],o[I+4],o[I+5]),w.set(o[I+6],o[I+7],o[I+8]),P.set(c[k+0],c[k+1]),F.set(c[k+2],c[k+3]),T.set(c[k+4],c[k+5]),L.copy(C).add(N).add(w).divideScalar(3);const z=y(L);b(P,k+0,C,z),b(F,k+2,N,z),b(T,k+4,w,z)}}function b(C,N,w,L){L<0&&C.x===1&&(c[N]=C.x-1),w.x===0&&w.z===0&&(c[N]=L/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function S(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Of(e.vertices,e.indices,e.radius,e.detail)}}class kf extends Of{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kf(e.radius,e.detail)}}class qc extends bn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(a),f=u+1,m=h+1,_=e/u,g=t/h,x=[],M=[],b=[],y=[];for(let S=0;S<m;S++){const C=S*g-c;for(let N=0;N<f;N++){const w=N*_-o;M.push(w,-C,0),b.push(0,0,1),y.push(N/u),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let C=0;C<u;C++){const N=C+f*S,w=C+f*(S+1),L=C+1+f*(S+1),P=C+1+f*S;x.push(N,w,P),x.push(w,L,P)}this.setIndex(x),this.setAttribute("position",new Qt(M,3)),this.setAttribute("normal",new Qt(b,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bf extends bn{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(c+u,Math.PI);let f=0;const m=[],_=new W,g=new W,x=[],M=[],b=[],y=[];for(let S=0;S<=i;S++){const C=[],N=S/i,w=c+N*u,L=e*Math.cos(w),P=Math.sqrt(e*e-L*L);let F=0;S===0&&c===0?F=.5/t:S===i&&h===Math.PI&&(F=-.5/t);for(let T=0;T<=t;T++){const I=T/t,k=a+I*o;_.x=-P*Math.cos(k),_.y=L,_.z=P*Math.sin(k),M.push(_.x,_.y,_.z),g.copy(_).normalize(),b.push(g.x,g.y,g.z),y.push(I+F,1-N),C.push(f++)}m.push(C)}for(let S=0;S<i;S++)for(let C=0;C<t;C++){const N=m[S][C+1],w=m[S][C],L=m[S+1][C],P=m[S+1][C+1];(S!==0||c>0)&&x.push(N,w,P),(S!==i-1||h<Math.PI)&&x.push(w,L,P)}this.setIndex(x),this.setAttribute("position",new Qt(M,3)),this.setAttribute("normal",new Qt(b,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Pa(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];if(c_(a))a.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(c_(a[0])){const o=[];for(let c=0,u=a.length;c<u;c++)o[c]=a[c].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Hn(s){const e={};for(let t=0;t<s.length;t++){const i=Pa(s[t]);for(const a in i)e[a]=i[a]}return e}function c_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function wS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function R0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const bS={clone:Pa,merge:Hn};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=wS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(a.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(a.value);break;case"v3":this.uniforms[i].value=new W().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Wt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new _t().fromArray(a.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class CS extends nr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xo extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oi extends Xo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class PS extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NS extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Tc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function LS(s){function e(a,o){return s[a]-s[o]}const t=s.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function u_(s,e,t){const i=s.length,a=new s.constructor(i);for(let o=0,c=0;c!==i;++o){const u=t[o]*e;for(let h=0;h!==e;++h)a[c++]=s[u+h]}return a}function IS(s,e,t,i){let a=1,o=s[0];for(;o!==void 0&&o[i]===void 0;)o=s[a++];if(o===void 0)return;let c=o[i];if(c!==void 0)if(Array.isArray(c))do c=o[i],c!==void 0&&(e.push(o.time),t.push(...c)),o=s[a++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[i],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=s[a++];while(o!==void 0);else do c=o[i],c!==void 0&&(e.push(o.time),t.push(c)),o=s[a++];while(o!==void 0)}class Na{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],o=t[i-1];e:{t:{let c;n:{i:if(!(e<a)){for(let u=i+2;;){if(a===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(o=a,a=t[++i],e<a)break t}c=t.length;break n}if(!(e>=o)){const u=t[1];e<u&&(i=2,o=u);for(let h=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(a=o,o=t[--i-1],e>=o)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(a=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,a)}return this.interpolate_(i,o,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=e*a;for(let c=0;c!==a;++c)t[c]=i[o+c];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class DS extends Na{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cg,endingEnd:Cg}}intervalChanged_(e,t,i){const a=this.parameterPositions;let o=e-2,c=e+1,u=a[o],h=a[c];if(u===void 0)switch(this.getSettings_().endingStart){case Pg:o=e,u=2*t-i;break;case Ng:o=a.length-2,u=t+a[o]-a[o+1];break;default:o=e,u=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Pg:c=e,h=2*i-t;break;case Ng:c=1,h=i+a[1]-a[0];break;default:c=e-1,h=t}const f=(i-t)*.5,m=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(h-i),this._offsetPrev=o*m,this._offsetNext=c*m}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,f=h-u,m=this._offsetPrev,_=this._offsetNext,g=this._weightPrev,x=this._weightNext,M=(i-t)/(a-t),b=M*M,y=b*M,S=-g*y+2*g*b-g*M,C=(1+g)*y+(-1.5-2*g)*b+(-.5+g)*M+1,N=(-1-x)*y+(1.5+x)*b+.5*M,w=x*y-x*b;for(let L=0;L!==u;++L)o[L]=S*c[m+L]+C*c[f+L]+N*c[h+L]+w*c[_+L];return o}}class US extends Na{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,f=h-u,m=(i-t)/(a-t),_=1-m;for(let g=0;g!==u;++g)o[g]=c[f+g]*_+c[h+g]*m;return o}}class FS extends Na{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class OS extends Na{interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,f=h-u,m=this.inTangents,_=this.outTangents;if(!m||!_){const M=(i-t)/(a-t),b=1-M;for(let y=0;y!==u;++y)o[y]=c[f+y]*b+c[h+y]*M;return o}const g=u*2,x=e-1;for(let M=0;M!==u;++M){const b=c[f+M],y=c[h+M],S=x*g+M*2,C=_[S],N=_[S+1],w=e*g+M*2,L=m[w],P=m[w+1];let F=(i-t)/(a-t),T,I,k,z,j;for(let ae=0;ae<8;ae++){T=F*F,I=T*F,k=1-F,z=k*k,j=z*k;const K=j*t+3*z*F*C+3*k*T*L+I*a-i;if(Math.abs(K)<1e-10)break;const oe=3*z*(C-t)+6*k*F*(L-C)+3*T*(a-L);if(Math.abs(oe)<1e-10)break;F=F-K/oe,F=Math.max(0,Math.min(1,F))}o[M]=j*b+3*z*F*N+3*k*T*P+I*y}return o}}class ki{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tc(t,this.TimeBufferType),this.values=Tc(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Tc(e.times,Array),values:Tc(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new FS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new US(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new DS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new OS(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case zo:t=this.InterpolantFactoryMethodLinear;break;case kd:t=this.InterpolantFactoryMethodSmooth;break;case Rg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return tt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return kd;case this.InterpolantFactoryMethodBezier:return Rg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let o=0,c=a-1;for(;o!==a&&i[o]<e;)++o;for(;c!==-1&&i[c]>t;)--c;if(++c,o!==0||c!==a){o>=c&&(c=Math.max(c,1),o=c-1);const u=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,o=i.length;o===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==o;u++){const h=i[u];if(typeof h=="number"&&isNaN(h)){ft("KeyframeTrack: Time is not a valid number.",this,u,h),e=!1;break}if(c!==null&&c>h){ft("KeyframeTrack: Out of order keys.",this,u,h,c),e=!1;break}c=h}if(a!==void 0&&Ry(a))for(let u=0,h=a.length;u!==h;++u){const f=a[u];if(isNaN(f)){ft("KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===kd,o=e.length-1;let c=1;for(let u=1;u<o;++u){let h=!1;const f=e[u],m=e[u+1];if(f!==m&&(u!==1||f!==e[0]))if(a)h=!0;else{const _=u*i,g=_-i,x=_+i;for(let M=0;M!==i;++M){const b=t[_+M];if(b!==t[g+M]||b!==t[x+M]){h=!0;break}}}if(h){if(u!==c){e[c]=e[u];const _=u*i,g=c*i;for(let x=0;x!==i;++x)t[g+x]=t[_+x]}++c}}if(o>0){e[c]=e[o];for(let u=o*i,h=c*i,f=0;f!==i;++f)t[h+f]=t[u+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}ki.prototype.ValueTypeName="";ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=zo;class La extends ki{constructor(e,t,i){super(e,t,i)}}La.prototype.ValueTypeName="bool";La.prototype.ValueBufferType=Array;La.prototype.DefaultInterpolation=Bo;La.prototype.InterpolantFactoryMethodLinear=void 0;La.prototype.InterpolantFactoryMethodSmooth=void 0;class C0 extends ki{constructor(e,t,i,a){super(e,t,i,a)}}C0.prototype.ValueTypeName="color";class jo extends ki{constructor(e,t,i,a){super(e,t,i,a)}}jo.prototype.ValueTypeName="number";class kS extends Na{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=(i-t)/(a-t);let f=e*u;for(let m=f+u;f!==m;f+=4)Di.slerpFlat(o,0,c,f-u,c,f,h);return o}}class Yo extends ki{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new kS(this.times,this.values,this.getValueSize(),e)}}Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ia extends ki{constructor(e,t,i){super(e,t,i)}}Ia.prototype.ValueTypeName="string";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=Bo;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;class jc extends ki{constructor(e,t,i,a){super(e,t,i,a)}}jc.prototype.ValueTypeName="vector";class BS{constructor(e="",t=-1,i=[],a=_y){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=Ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(VS(i[c]).scale(a));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,c=i.length;o!==c;++o)t.push(ki.toJSON(i[o]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const o=t.length,c=[];for(let u=0;u<o;u++){let h=[],f=[];h.push((u+o-1)%o,u,(u+1)%o),f.push(0,1,0);const m=LS(h);h=u_(h,1,m),f=u_(f,1,m),!a&&h[0]===0&&(h.push(o),f.push(f[0])),c.push(new jo(".morphTargetInfluences["+t[u].name+"]",h,f).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},o=/^([\w-]*?)([\d]+)$/;for(let u=0,h=e.length;u<h;u++){const f=e[u],m=f.name.match(o);if(m&&m.length>1){const _=m[1];let g=a[_];g||(a[_]=g=[]),g.push(f)}}const c=[];for(const u in a)c.push(this.CreateFromMorphTargetSequence(u,a[u],t,i));return c}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function zS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jo;case"vector":case"vector2":case"vector3":case"vector4":return jc;case"color":return C0;case"quaternion":return Yo;case"bool":case"boolean":return La;case"string":return Ia}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function VS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zS(s.type);if(s.times===void 0){const t=[],i=[];IS(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const xr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(d_(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!d_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function d_(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class HS{constructor(e,t,i){const a=this;let o=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(m){u++,o===!1&&a.onStart!==void 0&&a.onStart(m,c,u),o=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return f.push(m,_),this},this.removeHandler=function(m){const _=f.indexOf(m);return _!==-1&&f.splice(_,2),this},this.getHandler=function(m){for(let _=0,g=f.length;_<g;_+=2){const x=f[_],M=f[_+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const GS=new HS;class Da{constructor(e){this.manager=e!==void 0?e:GS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Da.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r={};class WS extends Error{constructor(e,t){super(e),this.response=t}}class P0 extends Da{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=xr.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(_r[e]!==void 0){_r[e].push({onLoad:t,onProgress:i,onError:a});return}_r[e]=[],_r[e].push({onLoad:t,onProgress:i,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const m=_r[e],_=f.body.getReader(),g=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),x=g?parseInt(g):0,M=x!==0;let b=0;const y=new ReadableStream({start(S){C();function C(){_.read().then(({done:N,value:w})=>{if(N)S.close();else{b+=w.byteLength;const L=new ProgressEvent("progress",{lengthComputable:M,loaded:b,total:x});for(let P=0,F=m.length;P<F;P++){const T=m[P];T.onProgress&&T.onProgress(L)}S.enqueue(w),C()}},N=>{S.error(N)})}}});return new Response(y)}else throw new WS(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return f.json();default:if(u==="")return f.text();{const _=/charset="?([^;"\s]*)"?/i.exec(u),g=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(g);return f.arrayBuffer().then(M=>x.decode(M))}}}).then(f=>{xr.add(`file:${e}`,f);const m=_r[e];delete _r[e];for(let _=0,g=m.length;_<g;_++){const x=m[_];x.onLoad&&x.onLoad(f)}}).catch(f=>{const m=_r[e];if(m===void 0)throw this.manager.itemError(e),f;delete _r[e];for(let _=0,g=m.length;_<g;_++){const x=m[_];x.onError&&x.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ma=new WeakMap;class XS extends Da{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=xr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let _=ma.get(c);_===void 0&&(_=[],ma.set(c,_)),_.push({onLoad:t,onError:a})}return c}const u=Ho("img");function h(){m(),t&&t(this);const _=ma.get(this)||[];for(let g=0;g<_.length;g++){const x=_[g];x.onLoad&&x.onLoad(this)}ma.delete(this),o.manager.itemEnd(e)}function f(_){m(),a&&a(_),xr.remove(`image:${e}`);const g=ma.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onError&&M.onError(_)}ma.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){u.removeEventListener("load",h,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),xr.add(`image:${e}`,u),o.manager.itemStart(e),u.src=e,u}}class jS extends Da{constructor(e){super(e)}load(e,t,i,a){const o=new wn,c=new XS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class $c extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const uh=new vt,h_=new W,f_=new W;class zf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uf,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;h_.setFromMatrixPosition(e.matrixWorld),t.position.copy(h_),f_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(f_),t.updateMatrixWorld(),uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Vo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wc=new W,bc=new Di,Wi=new W;class N0 extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,bc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,bc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wc,bc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,bc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new W,p_=new ct,m_=new ct;class Gn extends N0{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,p_,m_),t.subVectors(m_,p_)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Do*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*a/h,t-=c.offsetY*i/f,a*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class YS extends zf{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ra*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||a!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=a,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class KS extends $c{constructor(e,t,i=0,a=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=i,this.angle=a,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new YS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class qS extends zf{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class $S extends $c{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new qS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zc extends N0{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ZS extends zf{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oc extends $c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new ZS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class JS extends $c{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const dh=new WeakMap;class QS extends Da{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=xr.get(`image-bitmap:${e}`);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(f=>{dh.has(c)===!0?(a&&a(dh.get(c)),o.manager.itemError(e),o.manager.itemEnd(e)):(t&&t(f),o.manager.itemEnd(e))});return}setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);return}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader,u.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,u).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(f){xr.add(`image-bitmap:${e}`,f),t&&t(f),o.manager.itemEnd(e)}).catch(function(f){a&&a(f),dh.set(h,f),xr.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});xr.add(`image-bitmap:${e}`,h),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ga=-90,_a=1;class eM extends rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Gn(ga,_a,e,t);a.layers=this.layers,this.add(a);const o=new Gn(ga,_a,e,t);o.layers=this.layers,this.add(o);const c=new Gn(ga,_a,e,t);c.layers=this.layers,this.add(c);const u=new Gn(ga,_a,e,t);u.layers=this.layers,this.add(u);const h=new Gn(ga,_a,e,t);h.layers=this.layers,this.add(h);const f=new Gn(ga,_a,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,u,h]=t;for(const f of t)this.remove(f);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,f,m]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(_,g,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class tM extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vf="\\[\\]\\.:\\/",nM=new RegExp("["+Vf+"]","g"),Hf="[^"+Vf+"]",iM="[^"+Vf.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",Hf),sM=/(WCOD+)?/.source.replace("WCOD",iM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hf),oM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hf),lM=new RegExp("^"+rM+sM+aM+oM+"$"),cM=["material","materials","bones","map"];class uM{constructor(e,t,i){const a=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=i.length;a!==o;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class zt{constructor(e,t,i){this.path=t,this.parsedPath=i||zt.parseTrackName(t),this.node=zt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new zt.Composite(e,t,i):new zt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nM,"")}static parseTrackName(e){const t=lM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const o=i.nodeName.substring(a+1);cM.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let c=0;c<o.length;c++){const u=o[c];if(u.name===t||u.uuid===t)return u;const h=i(u.children);if(h)return h}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let o=t.propertyIndex;if(e||(e=zt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[a];if(c===void 0){const f=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+f+"."+a+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?u=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=a;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zt.Composite=uM;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class g_{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kf=class Kf{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};Kf.prototype.isMatrix2=!0;let __=Kf;const $r=new W,Ac=new vt,hh=new vt;class dM extends Wo{constructor(e){const t=L0(e),i=new bn,a=[],o=[];for(let f=0;f<t.length;f++){const m=t[f];m.parent&&m.parent.isBone&&(a.push(0,0,0),a.push(0,0,0),o.push(0,0,0),o.push(0,0,0))}i.setAttribute("position",new Qt(a,3)),i.setAttribute("color",new Qt(o,3));const c=new qo({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const u=new ut(255),h=new ut(65280);this.setColors(u,h)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,a=i.getAttribute("position");hh.copy(this.root.matrixWorld).invert();for(let o=0,c=0;o<t.length;o++){const u=t[o];u.parent&&u.parent.isBone&&(Ac.multiplyMatrices(hh,u.matrixWorld),$r.setFromMatrixPosition(Ac),a.setXYZ(c,$r.x,$r.y,$r.z),Ac.multiplyMatrices(hh,u.parent.matrixWorld),$r.setFromMatrixPosition(Ac),a.setXYZ(c+1,$r.x,$r.y,$r.z),c+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const a=this.geometry.getAttribute("color");for(let o=0;o<a.count;o+=2)a.setXYZ(o,e.r,e.g,e.b),a.setXYZ(o+1,t.r,t.g,t.b);return a.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function L0(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...L0(s.children[t]));return e}class hM extends Wo{constructor(e=10,t=10,i=4473924,a=8947848){i=new ut(i),a=new ut(a);const o=t/2,c=e/t,u=e/2,h=[],f=[];for(let g=0,x=0,M=-u;g<=t;g++,M+=c){h.push(-u,0,M,u,0,M),h.push(M,0,-u,M,0,u);const b=g===o?i:a;b.toArray(f,x),x+=3,b.toArray(f,x),x+=3,b.toArray(f,x),x+=3,b.toArray(f,x),x+=3}const m=new bn;m.setAttribute("position",new Qt(h,3)),m.setAttribute("color",new Qt(f,3));const _=new qo({vertexColors:!0,toneMapped:!1});super(m,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fM extends ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){tt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function v_(s,e,t,i){const a=pM(i);switch(t){case p0:return s*e;case Ef:return s*e/a.components*a.byteLength;case Tf:return s*e/a.components*a.byteLength;case Ls:return s*e*2/a.components*a.byteLength;case wf:return s*e*2/a.components*a.byteLength;case m0:return s*e*3/a.components*a.byteLength;case vi:return s*e*4/a.components*a.byteLength;case bf:return s*e*4/a.components*a.byteLength;case Ic:case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:case Uh:return Math.max(s,16)*Math.max(e,8)/4;case Lh:case Dh:return Math.max(s,8)*Math.max(e,8)/2;case Fh:case Oh:case Bh:case zh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kh:case zc:case Vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ef:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nf:case rf:case sf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case af:case of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vc:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pM(s){switch(s){case ai:case u0:return{byteLength:1,components:1};case Oo:case d0:case Er:return{byteLength:2,components:1};case Sf:case Mf:return{byteLength:2,components:4};case tr:case yf:case _i:return{byteLength:4,components:1};case h0:case f0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let s=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function mM(s){const e=new WeakMap;function t(u,h){const f=u.array,m=u.usage,_=f.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,f,m),u.onUploadCallback();let x;if(f instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=s.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=s.SHORT;else if(f instanceof Uint32Array)x=s.UNSIGNED_INT;else if(f instanceof Int32Array)x=s.INT;else if(f instanceof Int8Array)x=s.BYTE;else if(f instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,h,f){const m=h.array,_=h.updateRanges;if(s.bindBuffer(f,u),_.length===0)s.bufferSubData(f,0,m);else{_.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<_.length;x++){const M=_[g],b=_[x];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++g,_[g]=b)}_.length=g+1;for(let x=0,M=_.length;x<M;x++){const b=_[x];s.bufferSubData(f,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(s.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:a,remove:o,update:c}}var gM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",YM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_T=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ET=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:gM,alphahash_pars_fragment:_M,alphamap_fragment:vM,alphamap_pars_fragment:xM,alphatest_fragment:yM,alphatest_pars_fragment:SM,aomap_fragment:MM,aomap_pars_fragment:EM,batching_pars_vertex:TM,batching_vertex:wM,begin_vertex:bM,beginnormal_vertex:AM,bsdfs:RM,iridescence_fragment:CM,bumpmap_pars_fragment:PM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:DM,color_fragment:UM,color_pars_fragment:FM,color_pars_vertex:OM,color_vertex:kM,common:BM,cube_uv_reflection_fragment:zM,defaultnormal_vertex:VM,displacementmap_pars_vertex:HM,displacementmap_vertex:GM,emissivemap_fragment:WM,emissivemap_pars_fragment:XM,colorspace_fragment:jM,colorspace_pars_fragment:YM,envmap_fragment:KM,envmap_common_pars_fragment:qM,envmap_pars_fragment:$M,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:lE,envmap_vertex:JM,fog_vertex:QM,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_pars_fragment:rE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:aE,lights_pars_begin:oE,lights_toon_fragment:cE,lights_toon_pars_fragment:uE,lights_phong_fragment:dE,lights_phong_pars_fragment:hE,lights_physical_fragment:fE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:_E,lightprobes_pars_fragment:vE,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:TE,map_particle_fragment:wE,map_particle_pars_fragment:bE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:RE,morphinstance_vertex:CE,morphcolor_vertex:PE,morphnormal_vertex:NE,morphtarget_pars_vertex:LE,morphtarget_vertex:IE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:FE,normal_pars_vertex:OE,normal_vertex:kE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:HE,iridescence_pars_fragment:GE,opaque_fragment:WE,packing:XE,premultiplied_alpha_fragment:jE,project_vertex:YE,dithering_fragment:KE,dithering_pars_fragment:qE,roughnessmap_fragment:$E,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:QE,shadowmap_vertex:eT,shadowmask_pars_fragment:tT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:rT,skinnormal_vertex:sT,specularmap_fragment:aT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:dT,uv_pars_fragment:hT,uv_pars_vertex:fT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:_T,backgroundCube_vert:vT,backgroundCube_frag:xT,cube_vert:yT,cube_frag:ST,depth_vert:MT,depth_frag:ET,distance_vert:TT,distance_frag:wT,equirect_vert:bT,equirect_frag:AT,linedashed_vert:RT,linedashed_frag:CT,meshbasic_vert:PT,meshbasic_frag:NT,meshlambert_vert:LT,meshlambert_frag:IT,meshmatcap_vert:DT,meshmatcap_frag:UT,meshnormal_vert:FT,meshnormal_frag:OT,meshphong_vert:kT,meshphong_frag:BT,meshphysical_vert:zT,meshphysical_frag:VT,meshtoon_vert:HT,meshtoon_frag:GT,points_vert:WT,points_frag:XT,shadow_vert:jT,shadow_frag:YT,sprite_vert:KT,sprite_frag:qT},ke={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Yi={basic:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Hn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Hn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new ut(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Hn([ke.points,ke.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Hn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Hn([ke.common,ke.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Hn([ke.sprite,ke.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Hn([ke.common,ke.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Hn([ke.lights,ke.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Yi.physical={uniforms:Hn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Rc={r:0,b:0,g:0},$T=new vt,D0=new _t;D0.set(-1,0,0,0,1,0,0,0,1);function ZT(s,e,t,i,a,o){const c=new ut(0);let u=a===!0?0:1,h,f,m=null,_=0,g=null;function x(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const w=C.backgroundBlurriness>0;N=e.get(N,w)}return N}function M(C){let N=!1;const w=x(C);w===null?y(c,u):w&&w.isColor&&(y(w,1),N=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(C,N){const w=x(N);w&&(w.isCubeTexture||w.mapping===Kc)?(f===void 0&&(f=new mn(new $o(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Pa(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=w,f.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(N.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(D0),f.material.toneMapped=Ct.getTransfer(w.colorSpace)!==kt,(m!==w||_!==w.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,m=w,_=w.version,g=s.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new mn(new qc(2,2),new nr({name:"BackgroundMaterial",uniforms:Pa(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(w.colorSpace)!==kt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||_!==w.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,m=w,_=w.version,g=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function y(C,N){C.getRGB(Rc,R0(s)),t.buffers.color.setClear(Rc.r,Rc.g,Rc.b,N,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,N=1){c.set(C),u=N,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,y(c,u)},render:M,addToRenderList:b,dispose:S}}function JT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function u(z,j,ae,pe,K){let oe=!1;const Z=_(z,pe,ae,j);o!==Z&&(o=Z,f(o.object)),oe=x(z,pe,ae,K),oe&&M(z,pe,ae,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(oe||c)&&(c=!1,w(z,j,ae,pe),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function h(){return s.createVertexArray()}function f(z){return s.bindVertexArray(z)}function m(z){return s.deleteVertexArray(z)}function _(z,j,ae,pe){const K=pe.wireframe===!0;let oe=i[j.id];oe===void 0&&(oe={},i[j.id]=oe);const Z=z.isInstancedMesh===!0?z.id:0;let Y=oe[Z];Y===void 0&&(Y={},oe[Z]=Y);let se=Y[ae.id];se===void 0&&(se={},Y[ae.id]=se);let le=se[K];return le===void 0&&(le=g(h()),se[K]=le),le}function g(z){const j=[],ae=[],pe=[];for(let K=0;K<t;K++)j[K]=0,ae[K]=0,pe[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ae,attributeDivisors:pe,object:z,attributes:{},index:null}}function x(z,j,ae,pe){const K=o.attributes,oe=j.attributes;let Z=0;const Y=ae.getAttributes();for(const se in Y)if(Y[se].location>=0){const B=K[se];let J=oe[se];if(J===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),B===void 0||B.attribute!==J||J&&B.data!==J.data)return!0;Z++}return o.attributesNum!==Z||o.index!==pe}function M(z,j,ae,pe){const K={},oe=j.attributes;let Z=0;const Y=ae.getAttributes();for(const se in Y)if(Y[se].location>=0){let B=oe[se];B===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(B=z.instanceColor));const J={};J.attribute=B,B&&B.data&&(J.data=B.data),K[se]=J,Z++}o.attributes=K,o.attributesNum=Z,o.index=pe}function b(){const z=o.newAttributes;for(let j=0,ae=z.length;j<ae;j++)z[j]=0}function y(z){S(z,0)}function S(z,j){const ae=o.newAttributes,pe=o.enabledAttributes,K=o.attributeDivisors;ae[z]=1,pe[z]===0&&(s.enableVertexAttribArray(z),pe[z]=1),K[z]!==j&&(s.vertexAttribDivisor(z,j),K[z]=j)}function C(){const z=o.newAttributes,j=o.enabledAttributes;for(let ae=0,pe=j.length;ae<pe;ae++)j[ae]!==z[ae]&&(s.disableVertexAttribArray(ae),j[ae]=0)}function N(z,j,ae,pe,K,oe,Z){Z===!0?s.vertexAttribIPointer(z,j,ae,K,oe):s.vertexAttribPointer(z,j,ae,pe,K,oe)}function w(z,j,ae,pe){b();const K=pe.attributes,oe=ae.getAttributes(),Z=j.defaultAttributeValues;for(const Y in oe){const se=oe[Y];if(se.location>=0){let le=K[Y];if(le===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),le!==void 0){const B=le.normalized,J=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const Ee=Fe.buffer,ve=Fe.type,Q=Fe.bytesPerElement,_e=ve===s.INT||ve===s.UNSIGNED_INT||le.gpuType===yf;if(le.isInterleavedBufferAttribute){const ce=le.data,Ie=ce.stride,Ye=le.offset;if(ce.isInstancedInterleavedBuffer){for(let nt=0;nt<se.locationSize;nt++)S(se.location+nt,ce.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let nt=0;nt<se.locationSize;nt++)y(se.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let nt=0;nt<se.locationSize;nt++)N(se.location+nt,J/se.locationSize,ve,B,Ie*Q,(Ye+J/se.locationSize*nt)*Q,_e)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<se.locationSize;ce++)S(se.location+ce,le.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<se.locationSize;ce++)y(se.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ce=0;ce<se.locationSize;ce++)N(se.location+ce,J/se.locationSize,ve,B,J*Q,J/se.locationSize*ce*Q,_e)}}else if(Z!==void 0){const B=Z[Y];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(se.location,B);break;case 3:s.vertexAttrib3fv(se.location,B);break;case 4:s.vertexAttrib4fv(se.location,B);break;default:s.vertexAttrib1fv(se.location,B)}}}}C()}function L(){I();for(const z in i){const j=i[z];for(const ae in j){const pe=j[ae];for(const K in pe){const oe=pe[K];for(const Z in oe)m(oe[Z].object),delete oe[Z];delete pe[K]}}delete i[z]}}function P(z){if(i[z.id]===void 0)return;const j=i[z.id];for(const ae in j){const pe=j[ae];for(const K in pe){const oe=pe[K];for(const Z in oe)m(oe[Z].object),delete oe[Z];delete pe[K]}}delete i[z.id]}function F(z){for(const j in i){const ae=i[j];for(const pe in ae){const K=ae[pe];if(K[z.id]===void 0)continue;const oe=K[z.id];for(const Z in oe)m(oe[Z].object),delete oe[Z];delete K[z.id]}}}function T(z){for(const j in i){const ae=i[j],pe=z.isInstancedMesh===!0?z.id:0,K=ae[pe];if(K!==void 0){for(const oe in K){const Z=K[oe];for(const Y in Z)m(Z[Y].object),delete Z[Y];delete K[oe]}delete ae[pe],Object.keys(ae).length===0&&delete i[j]}}}function I(){k(),c=!0,o!==a&&(o=a,f(o.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:I,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:y,disableUnusedAttributes:C}}function QT(s,e,t){let i;function a(h){i=h}function o(h,f){s.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,m){m!==0&&(s.drawArraysInstanced(i,h,f,m),t.update(f,i,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,m);let g=0;for(let x=0;x<m;x++)g+=f[x];t.update(g,i,1)}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function ew(s,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==vi&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const T=F===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ai&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==_i&&!T)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(tt("WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:w,maxSamples:L,samples:P}}function tw(s){const e=this;let t=null,i=0,a=!1,o=!1;const c=new Jr,u=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||a;return a=g,i=_.length,x},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){t=m(_,g,0)},this.setState=function(_,g,x){const M=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,S=s.get(_);if(!a||M===null||M.length===0||o&&!y)o?m(null):f();else{const C=o?0:i,N=C*4;let w=S.clippingState||null;h.value=w,w=m(M,g,N,x);for(let L=0;L!==N;++L)w[L]=t[L];S.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,g,x,M){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=h.value,M!==!0||y===null){const S=x+b*4,C=g.matrixWorldInverse;u.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,w=x;N!==b;++N,w+=4)c.copy(_[N]).applyMatrix4(C,u),c.normal.toArray(y,w),y[w+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const es=4,x_=[.125,.215,.35,.446,.526,.582],As=20,nw=256,Ao=new Zc,y_=new ut;let fh=null,ph=0,mh=0,gh=!1;const iw=new W;class S_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:c=256,position:u=iw}=o;fh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,a,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,ph,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Er,format:vi,colorSpace:oi,depthBuffer:!1},a=M_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M_(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rw(o)),this._blurMaterial=aw(o,e,t),this._ggxMaterial=sw(o,e,t)}return a}_compileMaterial(e){const t=new mn(new bn,e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,i,a,o){const h=new Gn(90,1,t,i),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(y_),_.toneMapping=Ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new $o,new Zi({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,S=!0):(y.color.copy(y_),S=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(h.up.set(0,f[N],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+m[N],o.y,o.z)):w===1?(h.up.set(0,0,f[N]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+m[N],o.z)):(h.up.set(0,f[N],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+m[N]));const L=this._cubeSize;va(a,w*L,N>2?L:0,L,L),_.setRenderTarget(a),S&&_.render(b,h),_.render(e,h)}_.toneMapping=x,_.autoClear=g,e.background=C}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ns||e.mapping===ba;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;va(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Ao)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(f*f-m*m),g=0+f*1.25,x=_*g,{_lodMax:M}=this,b=this._sizeLods[i],y=3*b*(i>M-es?i-M+es:0),S=4*(this._cubeSize-b);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,va(o,y,S,3*b,2*b),a.setRenderTarget(o),a.render(u,Ao),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=M-i,va(e,y,S,3*b,2*b),a.setRenderTarget(e),a.render(u,Ao)}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const m=3,_=this._lodMeshes[a];_.material=f;const g=f.uniforms,x=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*As-1),b=o/M,y=isFinite(o)?1+Math.floor(m*b):As;y>As&&tt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${As}`);const S=[];let C=0;for(let F=0;F<As;++F){const T=F/b,I=Math.exp(-T*T/2);S.push(I),F===0?C+=I:F<y&&(C+=2*I)}for(let F=0;F<S.length;F++)S[F]=S[F]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:N}=this;g.dTheta.value=M,g.mipInt.value=N-i;const w=this._sizeLods[a],L=3*w*(a>N-es?a-N+es:0),P=4*(this._cubeSize-w);va(t,L,P,3*w,2*w),h.setRenderTarget(t),h.render(_,Ao)}}function rw(s){const e=[],t=[],i=[];let a=s;const o=s-es+1+x_.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);let h=1/u;c>s-es?h=x_[c-s+es-1]:c===0&&(h=0),t.push(h);const f=1/(u-2),m=-f,_=1+f,g=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,M=6,b=3,y=2,S=1,C=new Float32Array(b*M*x),N=new Float32Array(y*M*x),w=new Float32Array(S*M*x);for(let P=0;P<x;P++){const F=P%3*2/3-1,T=P>2?0:-1,I=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];C.set(I,b*M*P),N.set(g,y*M*P);const k=[P,P,P,P,P,P];w.set(k,S*M*P)}const L=new bn;L.setAttribute("position",new On(C,b)),L.setAttribute("uv",new On(N,y)),L.setAttribute("faceIndex",new On(w,S)),i.push(new mn(L,null)),a>es&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function M_(s,e,t){const i=new Qi(s,e,t);return i.texture.mapping=Kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function sw(s,e,t){return new nr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function aw(s,e,t){const i=new Float32Array(As),a=new W(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function E_(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function T_(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class U0 extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new b0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new $o(5,5,5),o=new nr({name:"CubemapFromEquirect",uniforms:Pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:yr});o.uniforms.tEquirect.value=t;const c=new mn(a,o),u=t.minFilter;return t.minFilter===vr&&(t.minFilter=_n),new eM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}function ow(s){let e=new WeakMap,t=new WeakMap,i=null;function a(g,x=!1){return g==null?null:x?c(g):o(g)}function o(g){if(g&&g.isTexture){const x=g.mapping;if(x===Fd||x===Od)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const b=new U0(M.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",f),u(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const x=g.mapping,M=x===Fd||x===Od,b=x===Ns||x===ba;if(M||b){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return i===null&&(i=new S_(s)),y=M?i.fromEquirectangular(g,y):i.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return M&&C&&C.height>0||b&&C&&h(C)?(i===null&&(i=new S_(s)),y=M?i.fromEquirectangular(g):i.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",m),y.texture):null}}}return g}function u(g,x){return x===Fd?g.mapping=Ns:x===Od&&(g.mapping=ba),g}function h(g){let x=0;const M=6;for(let b=0;b<M;b++)g[b]!==void 0&&x++;return x===M}function f(g){const x=g.target;x.removeEventListener("dispose",f);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function m(g){const x=g.target;x.removeEventListener("dispose",m);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:_}}function lw(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=s.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Ma("WebGLRenderer: "+i+" extension not supported."),a}}}function cw(s,e,t,i){const a={},o=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete a[g.id];const x=o.get(g);x&&(e.remove(x),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const x in g)e.update(g[x],s.ARRAY_BUFFER)}function f(_){const g=[],x=_.index,M=_.attributes.position;let b=0;if(M===void 0)return;if(x!==null){const C=x.array;b=x.version;for(let N=0,w=C.length;N<w;N+=3){const L=C[N+0],P=C[N+1],F=C[N+2];g.push(L,P,P,F,F,L)}}else{const C=M.array;b=M.version;for(let N=0,w=C.length/3-1;N<w;N+=3){const L=N+0,P=N+1,F=N+2;g.push(L,P,P,F,F,L)}}const y=new(M.count>=65535?E0:M0)(g,1);y.version=b;const S=o.get(_);S&&e.remove(S),o.set(_,y)}function m(_){const g=o.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&f(_)}else f(_);return o.get(_)}return{get:u,update:h,getWireframeAttribute:m}}function uw(s,e,t){let i;function a(_){i=_}let o,c;function u(_){o=_.type,c=_.bytesPerElement}function h(_,g){s.drawElements(i,g,o,_*c),t.update(g,i,1)}function f(_,g,x){x!==0&&(s.drawElementsInstanced(i,g,o,_*c,x),t.update(g,i,x))}function m(_,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,_,0,x);let b=0;for(let y=0;y<x;y++)b+=g[y];t.update(b,i,1)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=m}function dw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(o/3);break;case s.LINES:t.lines+=u*(o/2);break;case s.LINE_STRIP:t.lines+=u*(o-1);break;case s.LINE_LOOP:t.lines+=u*o;break;case s.POINTS:t.points+=u*o;break;default:ft("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function hw(s,e,t){const i=new WeakMap,a=new Wt;function o(c,u,h){const f=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let k=function(){T.dispose(),i.delete(u),u.removeEventListener("dispose",k)};var x=k;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let w=0;M===!0&&(w=1),b===!0&&(w=2),y===!0&&(w=3);let L=u.attributes.position.count*w,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*P*4*_),T=new x0(F,L,P,_);T.type=_i,T.needsUpdate=!0;const I=w*4;for(let z=0;z<_;z++){const j=S[z],ae=C[z],pe=N[z],K=L*P*4*z;for(let oe=0;oe<j.count;oe++){const Z=oe*I;M===!0&&(a.fromBufferAttribute(j,oe),F[K+Z+0]=a.x,F[K+Z+1]=a.y,F[K+Z+2]=a.z,F[K+Z+3]=0),b===!0&&(a.fromBufferAttribute(ae,oe),F[K+Z+4]=a.x,F[K+Z+5]=a.y,F[K+Z+6]=a.z,F[K+Z+7]=0),y===!0&&(a.fromBufferAttribute(pe,oe),F[K+Z+8]=a.x,F[K+Z+9]=a.y,F[K+Z+10]=a.z,F[K+Z+11]=pe.itemSize===4?a.w:1)}}g={count:_,texture:T,size:new ct(L,P)},i.set(u,g),u.addEventListener("dispose",k)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<f.length;y++)M+=f[y];const b=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",f)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:o}}function fw(s,e,t,i,a){let o=new WeakMap;function c(f){const m=a.render.frame,_=f.geometry,g=e.get(f,_);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==m&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,m))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return g}function u(){o=new WeakMap}function h(f){const m=f.target;m.removeEventListener("dispose",h),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:u}}const pw={[t0]:"LINEAR_TONE_MAPPING",[n0]:"REINHARD_TONE_MAPPING",[i0]:"CINEON_TONE_MAPPING",[r0]:"ACES_FILMIC_TONE_MAPPING",[a0]:"AGX_TONE_MAPPING",[o0]:"NEUTRAL_TONE_MAPPING",[s0]:"CUSTOM_TONE_MAPPING"};function mw(s,e,t,i,a,o){const c=new Qi(e,t,{type:s,depthBuffer:a,stencilBuffer:o,samples:i?4:0,depthTexture:a?new Ca(e,t):void 0}),u=new Qi(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),h=new bn;h.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const f=new CS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new mn(h,f),_=new Zc(-1,1,1,-1,0,1);let g=null,x=null,M=!1,b,y=null,S=[],C=!1;this.setSize=function(N,w){c.setSize(N,w),u.setSize(N,w);for(let L=0;L<S.length;L++){const P=S[L];P.setSize&&P.setSize(N,w)}},this.setEffects=function(N){S=N,C=S.length>0&&S[0].isRenderPass===!0;const w=c.width,L=c.height;for(let P=0;P<S.length;P++){const F=S[P];F.setSize&&F.setSize(w,L)}},this.begin=function(N,w){if(M||N.toneMapping===Ji&&S.length===0)return!1;if(y=w,w!==null){const L=w.width,P=w.height;(c.width!==L||c.height!==P)&&this.setSize(L,P)}return C===!1&&N.setRenderTarget(c),b=N.toneMapping,N.toneMapping=Ji,!0},this.hasRenderPass=function(){return C},this.end=function(N,w){N.toneMapping=b,M=!0;let L=c,P=u;for(let F=0;F<S.length;F++){const T=S[F];if(T.enabled!==!1&&(T.render(N,P,L,w),T.needsSwap!==!1)){const I=L;L=P,P=I}}if(g!==N.outputColorSpace||x!==N.toneMapping){g=N.outputColorSpace,x=N.toneMapping,f.defines={},Ct.getTransfer(g)===kt&&(f.defines.SRGB_TRANSFER="");const F=pw[x];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(y),N.render(m,_),y=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),f.dispose()}}const F0=new wn,pf=new Ca(1,1),O0=new x0,k0=new Qy,B0=new b0,w_=[],b_=[],A_=new Float32Array(16),R_=new Float32Array(9),C_=new Float32Array(4);function Ua(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=w_[a];if(o===void 0&&(o=new Float32Array(a),w_[a]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(o,u)}return o}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Qc(s,e){let t=b_[e];t===void 0&&(t=new Int32Array(e),b_[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function gw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function vw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function yw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;C_.set(i),s.uniformMatrix2fv(this.addr,!1,C_),xn(t,i)}}function Sw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;R_.set(i),s.uniformMatrix3fv(this.addr,!1,R_),xn(t,i)}}function Mw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,i))return;A_.set(i),s.uniformMatrix4fv(this.addr,!1,A_),xn(t,i)}}function Ew(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function bw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function Aw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function Cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function Pw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function Nw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(pf.compareFunction=t.isReversedDepthBuffer()?Rf:Af,o=pf):o=F0,t.setTexture2D(e||o,a)}function Lw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||k0,a)}function Iw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||B0,a)}function Dw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||O0,a)}function Uw(s){switch(s){case 5126:return gw;case 35664:return _w;case 35665:return vw;case 35666:return xw;case 35674:return yw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return Tw;case 35668:case 35672:return ww;case 35669:case 35673:return bw;case 5125:return Aw;case 36294:return Rw;case 36295:return Cw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Nw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Fw(s,e){s.uniform1fv(this.addr,e)}function Ow(s,e){const t=Ua(e,this.size,2);s.uniform2fv(this.addr,t)}function kw(s,e){const t=Ua(e,this.size,3);s.uniform3fv(this.addr,t)}function Bw(s,e){const t=Ua(e,this.size,4);s.uniform4fv(this.addr,t)}function zw(s,e){const t=Ua(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vw(s,e){const t=Ua(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hw(s,e){const t=Ua(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gw(s,e){s.uniform1iv(this.addr,e)}function Ww(s,e){s.uniform2iv(this.addr,e)}function Xw(s,e){s.uniform3iv(this.addr,e)}function jw(s,e){s.uniform4iv(this.addr,e)}function Yw(s,e){s.uniform1uiv(this.addr,e)}function Kw(s,e){s.uniform2uiv(this.addr,e)}function qw(s,e){s.uniform3uiv(this.addr,e)}function $w(s,e){s.uniform4uiv(this.addr,e)}function Zw(s,e,t){const i=this.cache,a=e.length,o=Qc(t,a);vn(i,o)||(s.uniform1iv(this.addr,o),xn(i,o));let c;this.type===s.SAMPLER_2D_SHADOW?c=pf:c=F0;for(let u=0;u!==a;++u)t.setTexture2D(e[u]||c,o[u])}function Jw(s,e,t){const i=this.cache,a=e.length,o=Qc(t,a);vn(i,o)||(s.uniform1iv(this.addr,o),xn(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||k0,o[c])}function Qw(s,e,t){const i=this.cache,a=e.length,o=Qc(t,a);vn(i,o)||(s.uniform1iv(this.addr,o),xn(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||B0,o[c])}function eb(s,e,t){const i=this.cache,a=e.length,o=Qc(t,a);vn(i,o)||(s.uniform1iv(this.addr,o),xn(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||O0,o[c])}function tb(s){switch(s){case 5126:return Fw;case 35664:return Ow;case 35665:return kw;case 35666:return Bw;case 35674:return zw;case 35675:return Vw;case 35676:return Hw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return jw;case 5125:return Yw;case 36294:return Kw;case 36295:return qw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return eb}}class nb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Uw(t.type)}}class ib{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tb(t.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],i)}}}const _h=/(\w+)(\])?(\[|\.)?/g;function P_(s,e){s.seq.push(e),s.map[e.id]=e}function sb(s,e,t){const i=s.name,a=i.length;for(_h.lastIndex=0;;){const o=_h.exec(i),c=_h.lastIndex;let u=o[1];const h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===a){P_(t,f===void 0?new nb(u,s,e):new ib(u,s,e));break}else{let _=t.map[u];_===void 0&&(_=new rb(u),P_(t,_)),t=_}}}class kc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);sb(u,h,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function N_(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const ab=37297;let ob=0;function lb(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const L_=new _t;function cb(s){Ct._getMatrix(L_,Ct.workingColorSpace,s);const e=`mat3( ${L_.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Hc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function I_(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+lb(s.getShaderSource(e),u)}else return o}function ub(s,e){const t=cb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const db={[t0]:"Linear",[n0]:"Reinhard",[i0]:"Cineon",[r0]:"ACESFilmic",[a0]:"AgX",[o0]:"Neutral",[s0]:"Custom"};function hb(s,e){const t=db[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cc=new W;function fb(){Ct.getLuminanceCoefficients(Cc);const s=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function mb(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gb(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),c=o.name;let u=1;o.type===s.FLOAT_MAT2&&(u=2),o.type===s.FLOAT_MAT3&&(u=3),o.type===s.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function Lo(s){return s!==""}function D_(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _b=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(s){return s.replace(_b,xb)}const vb=new Map;function xb(s,e){let t=xt[e];if(t===void 0){const i=vb.get(e);if(i!==void 0)t=xt[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mf(t)}const yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F_(s){return s.replace(yb,Sb)}function Sb(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function O_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Mb={[Nc]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};function Eb(s){return Mb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tb={[Ns]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function wb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Tb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const bb={[ba]:"ENVMAP_MODE_REFRACTION"};function Ab(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":bb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Rb={[e0]:"ENVMAP_BLENDING_MULTIPLY",[py]:"ENVMAP_BLENDING_MIX",[my]:"ENVMAP_BLENDING_ADD"};function Cb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Rb[s.combine]||"ENVMAP_BLENDING_NONE"}function Pb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Nb(s,e,t,i){const a=s.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=Eb(t),f=wb(t),m=Ab(t),_=Cb(t),g=Pb(t),x=pb(t),M=mb(o),b=a.createProgram();let y,S,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Lo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Lo).join(`
`),S.length>0&&(S+=`
`)):(y=[O_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),S=[O_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?xt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,ub("linearToOutputTexel",t.outputColorSpace),fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),c=mf(c),c=D_(c,t),c=U_(c,t),u=mf(u),u=D_(u,t),u=U_(u,t),c=F_(c),u=F_(u),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=C+y+c,w=C+S+u,L=N_(a,a.VERTEX_SHADER,N),P=N_(a,a.FRAGMENT_SHADER,w);a.attachShader(b,L),a.attachShader(b,P),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function F(z){if(s.debug.checkShaderErrors){const j=a.getProgramInfoLog(b)||"",ae=a.getShaderInfoLog(L)||"",pe=a.getShaderInfoLog(P)||"",K=j.trim(),oe=ae.trim(),Z=pe.trim();let Y=!0,se=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,L,P);else{const le=I_(a,L,"vertex"),B=I_(a,P,"fragment");ft("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+K+`
`+le+`
`+B)}else K!==""?tt("WebGLProgram: Program Info Log:",K):(oe===""||Z==="")&&(se=!1);se&&(z.diagnostics={runnable:Y,programLog:K,vertexShader:{log:oe,prefix:y},fragmentShader:{log:Z,prefix:S}})}a.deleteShader(L),a.deleteShader(P),T=new kc(a,b),I=gb(a,b)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(b,ab)),k},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ob++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=P,this}let Lb=0;class Ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Db(e),t.set(e,i)),i}}class Db{constructor(e){this.id=Lb++,this.code=e,this.usedTimes=0}}function Ub(s){return s===Ls||s===zc||s===Vc}function Fb(s,e,t,i,a,o){const c=new y0,u=new Ib,h=new Set,f=[],m=new Map,_=i.logarithmicDepthBuffer;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function b(T,I,k,z,j,ae){const pe=z.fog,K=j.geometry,oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Y=e.get(T.envMap||oe,Z),se=Y&&Y.mapping===Kc?Y.image.height:null,le=x[T.type];T.precision!==null&&(g=i.getMaxPrecision(T.precision),g!==T.precision&&tt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const B=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,J=B!==void 0?B.length:0;let Fe=0;K.morphAttributes.position!==void 0&&(Fe=1),K.morphAttributes.normal!==void 0&&(Fe=2),K.morphAttributes.color!==void 0&&(Fe=3);let Ee,ve,Q,_e;if(le){const Xe=Yi[le];Ee=Xe.vertexShader,ve=Xe.fragmentShader}else{Ee=T.vertexShader,ve=T.fragmentShader;const Xe=u.getVertexShaderStage(T),Ht=u.getFragmentShaderStage(T);u.update(T,Xe,Ht),Q=Xe.id,_e=Ht.id}const ce=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ye=j.isInstancedMesh===!0,nt=j.isBatchedMesh===!0,Vt=!!T.map,dt=!!T.matcap,Pt=!!Y,yt=!!T.aoMap,St=!!T.lightMap,Xt=!!T.bumpMap&&T.wireframe===!1,ye=!!T.normalMap,Be=!!T.displacementMap,st=!!T.emissiveMap,rt=!!T.metalnessMap,Mt=!!T.roughnessMap,G=T.anisotropy>0,sn=T.clearcoat>0,Et=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,$=T.transmission>0,ie=G&&!!T.anisotropyMap,he=sn&&!!T.clearcoatMap,we=sn&&!!T.clearcoatNormalMap,Re=sn&&!!T.clearcoatRoughnessMap,fe=U&&!!T.iridescenceMap,me=U&&!!T.iridescenceThicknessMap,De=E&&!!T.sheenColorMap,Ze=E&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Ne=!!T.specularColorMap,it=!!T.specularIntensityMap,at=$&&!!T.transmissionMap,ht=$&&!!T.thicknessMap,H=!!T.gradientMap,Pe=!!T.alphaMap,ge=T.alphaTest>0,Le=!!T.alphaHash,Oe=!!T.extensions;let xe=Ji;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Ke={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Ee,fragmentShader:ve,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:_e,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:nt,batchingColor:nt&&j._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&j.instanceColor!==null,instancingMorph:Ye&&j.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Vt,matcap:dt,envMap:Pt,envMapMode:Pt&&Y.mapping,envMapCubeUVHeight:se,aoMap:yt,lightMap:St,bumpMap:Xt,normalMap:ye,displacementMap:Be,emissiveMap:st,normalMapObjectSpace:ye&&T.normalMapType===yy,normalMapTangentSpace:ye&&T.normalMapType===uf,packedNormalMap:ye&&T.normalMapType===uf&&Ub(T.normalMap.format),metalnessMap:rt,roughnessMap:Mt,anisotropy:G,anisotropyMap:ie,clearcoat:sn,clearcoatMap:he,clearcoatNormalMap:we,clearcoatRoughnessMap:Re,dispersion:Et,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:me,sheen:E,sheenColorMap:De,sheenRoughnessMap:Ze,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:it,transmission:$,transmissionMap:at,thicknessMap:ht,gradientMap:H,opaque:T.transparent===!1&&T.blending===Sa&&T.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ge,alphaHash:Le,combine:T.combine,mapUv:Vt&&M(T.map.channel),aoMapUv:yt&&M(T.aoMap.channel),lightMapUv:St&&M(T.lightMap.channel),bumpMapUv:Xt&&M(T.bumpMap.channel),normalMapUv:ye&&M(T.normalMap.channel),displacementMapUv:Be&&M(T.displacementMap.channel),emissiveMapUv:st&&M(T.emissiveMap.channel),metalnessMapUv:rt&&M(T.metalnessMap.channel),roughnessMapUv:Mt&&M(T.roughnessMap.channel),anisotropyMapUv:ie&&M(T.anisotropyMap.channel),clearcoatMapUv:he&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&M(T.sheenRoughnessMap.channel),specularMapUv:Ue&&M(T.specularMap.channel),specularColorMapUv:Ne&&M(T.specularColorMap.channel),specularIntensityMapUv:it&&M(T.specularIntensityMap.channel),transmissionMapUv:at&&M(T.transmissionMap.channel),thicknessMapUv:ht&&M(T.thicknessMap.channel),alphaMapUv:Pe&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ye||G),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(Vt||Pe),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&ye===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ie,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Fe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:Vt&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:st&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ki,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=h.has(1),Ke.vertexUv2s=h.has(2),Ke.vertexUv3s=h.has(3),h.clear(),Ke}function y(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)I.push(k),I.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(S(I,T),C(I,T),I.push(s.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function S(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function C(T,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),I.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function N(T){const I=x[T.type];let k;if(I){const z=Yi[I];k=bS.clone(z.uniforms)}else k=T.uniforms;return k}function w(T,I){let k=m.get(I);return k!==void 0?++k.usedTimes:(k=new Nb(s,I,T,a),f.push(k),m.set(I,k)),k}function L(T){if(--T.usedTimes===0){const I=f.indexOf(T);f[I]=f[f.length-1],f.pop(),m.delete(T.cacheKey),T.destroy()}}function P(T){u.remove(T)}function F(){u.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:N,acquireProgram:w,releaseProgram:L,releaseShaderCache:P,programs:f,dispose:F}}function Ob(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function a(c,u,h){s.get(c)[u]=h}function o(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function kb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function k_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function B_(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function u(g,x,M,b,y,S){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:x,material:M,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:y,group:S},s[e]=C):(C.id=g.id,C.object=g,C.geometry=x,C.material=M,C.materialVariant=c(g),C.groupOrder=b,C.renderOrder=g.renderOrder,C.z=y,C.group=S),e++,C}function h(g,x,M,b,y,S){const C=u(g,x,M,b,y,S);M.transmission>0?i.push(C):M.transparent===!0?a.push(C):t.push(C)}function f(g,x,M,b,y,S){const C=u(g,x,M,b,y,S);M.transmission>0?i.unshift(C):M.transparent===!0?a.unshift(C):t.unshift(C)}function m(g,x,M){t.length>1&&t.sort(g||kb),i.length>1&&i.sort(x||k_),a.length>1&&a.sort(x||k_),M&&(t.reverse(),i.reverse(),a.reverse())}function _(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:h,unshift:f,finish:_,sort:m}}function Bb(){let s=new WeakMap;function e(i,a){const o=s.get(i);let c;return o===void 0?(c=new B_,s.set(i,[c])):a>=o.length?(c=new B_,o.push(c)):c=o[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function zb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ut};break;case"SpotLight":t={position:new W,direction:new W,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function Vb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hb=0;function Gb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Wb(s){const e=new zb,t=Vb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new W);const a=new W,o=new vt,c=new vt;function u(f){let m=0,_=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let x=0,M=0,b=0,y=0,S=0,C=0,N=0,w=0,L=0,P=0,F=0;f.sort(Gb);for(let I=0,k=f.length;I<k;I++){const z=f[I],j=z.color,ae=z.intensity,pe=z.distance;let K=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ls?K=z.shadow.map.texture:K=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=j.r*ae,_+=j.g*ae,g+=j.b*ae;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)i.probe[oe].addScaledVector(z.sh.coefficients[oe],ae);F++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,Y=t.get(z);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.directionalShadow[x]=Y,i.directionalShadowMap[x]=K,i.directionalShadowMatrix[x]=z.shadow.matrix,C++}i.directional[x]=oe,x++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(j).multiplyScalar(ae),oe.distance=pe,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,i.spot[b]=oe;const Z=z.shadow;if(z.map&&(i.spotLightMap[L]=z.map,L++,Z.updateMatrices(z),z.castShadow&&P++),i.spotLightMatrix[b]=Z.matrix,z.castShadow){const Y=t.get(z);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.spotShadow[b]=Y,i.spotShadowMap[b]=K,w++}b++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(j).multiplyScalar(ae),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=oe,y++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const Z=z.shadow,Y=t.get(z);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,i.pointShadow[M]=Y,i.pointShadowMap[M]=K,i.pointShadowMatrix[M]=z.shadow.matrix,N++}i.point[M]=oe,M++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(ae),oe.groundColor.copy(z.groundColor).multiplyScalar(ae),i.hemi[S]=oe,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==x||T.pointLength!==M||T.spotLength!==b||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==N||T.numSpotShadows!==w||T.numSpotMaps!==L||T.numLightProbes!==F)&&(i.directional.length=x,i.spot.length=b,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=w+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=F,T.directionalLength=x,T.pointLength=M,T.spotLength=b,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=N,T.numSpotShadows=w,T.numSpotMaps=L,T.numLightProbes=F,i.version=Hb++)}function h(f,m){let _=0,g=0,x=0,M=0,b=0;const y=m.matrixWorldInverse;for(let S=0,C=f.length;S<C;S++){const N=f[S];if(N.isDirectionalLight){const w=i.directional[_];w.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(y),_++}else if(N.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(y),x++}else if(N.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),c.identity(),o.copy(N.matrixWorld),o.premultiply(y),c.extractRotation(o),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),M++}else if(N.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),g++}else if(N.isHemisphereLight){const w=i.hemi[b];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(y),b++}}}return{setup:u,setupView:h,state:i}}function z_(s){const e=new Wb(s),t=[],i=[],a=[];function o(g){_.camera=g,t.length=0,i.length=0,a.length=0}function c(g){t.push(g)}function u(g){i.push(g)}function h(g){a.push(g)}function f(){e.setup(t)}function m(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:_,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function Xb(s){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new z_(s),e.set(a,[u])):o>=c.length?(u=new z_(s),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kb=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],qb=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],V_=new vt,Ro=new W,vh=new W;function $b(s,e,t){let i=new Uf;const a=new ct,o=new ct,c=new Wt,u=new PS,h=new NS,f={},m=t.maxTextureSize,_={[Mr]:Qn,[Qn]:Mr,[Ki]:Ki},g=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:jb,fragmentShader:Yb}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new bn;M.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new mn(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let S=this.type;this.render=function(P,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===qx&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nc);const I=s.getRenderTarget(),k=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),j=s.state;j.setBlending(yr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ae=S!==this.type;ae&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(K=>K.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,K=P.length;pe<K;pe++){const oe=P[pe],Z=oe.shadow;if(Z===void 0){tt("WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;a.copy(Z.mapSize);const Y=Z.getFrameExtents();a.multiply(Y),o.copy(Z.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/Y.x),a.x=o.x*Y.x,Z.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/Y.y),a.y=o.y*Y.y,Z.mapSize.y=o.y));const se=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=se,Z.map===null||ae===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Po){if(oe.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Qi(a.x,a.y,{format:Ls,type:Er,minFilter:_n,magFilter:_n,generateMipmaps:!1}),Z.map.texture.name=oe.name+".shadowMap",Z.map.depthTexture=new Ca(a.x,a.y,_i),Z.map.depthTexture.name=oe.name+".shadowMapDepth",Z.map.depthTexture.format=Tr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=gn,Z.map.depthTexture.magFilter=gn}else oe.isPointLight?(Z.map=new U0(a.x),Z.map.depthTexture=new TS(a.x,tr)):(Z.map=new Qi(a.x,a.y),Z.map.depthTexture=new Ca(a.x,a.y,tr)),Z.map.depthTexture.name=oe.name+".shadowMap",Z.map.depthTexture.format=Tr,this.type===Nc?(Z.map.depthTexture.compareFunction=se?Rf:Af,Z.map.depthTexture.minFilter=_n,Z.map.depthTexture.magFilter=_n):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=gn,Z.map.depthTexture.magFilter=gn);Z.camera.updateProjectionMatrix()}const le=Z.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<le;B++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,B),s.clear();else{B===0&&(s.setRenderTarget(Z.map),s.clear());const J=Z.getViewport(B);c.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),j.viewport(c)}if(oe.isPointLight){const J=Z.camera,Fe=Z.matrix,Ee=oe.distance||J.far;Ee!==J.far&&(J.far=Ee,J.updateProjectionMatrix()),Ro.setFromMatrixPosition(oe.matrixWorld),J.position.copy(Ro),vh.copy(J.position),vh.add(Kb[B]),J.up.copy(qb[B]),J.lookAt(vh),J.updateMatrixWorld(),Fe.makeTranslation(-Ro.x,-Ro.y,-Ro.z),V_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(V_,J.coordinateSystem,J.reversedDepth)}else Z.updateMatrices(oe);i=Z.getFrustum(),w(F,T,Z.camera,oe,this.type)}Z.isPointLightShadow!==!0&&this.type===Po&&C(Z,T),Z.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(I,k,z)};function C(P,F){const T=e.update(b);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Qi(a.x,a.y,{format:Ls,type:Er})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,T,g,b,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,T,x,b,null)}function N(P,F,T,I){let k=null;const z=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)k=z;else if(k=T.isPointLight===!0?h:u,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=k.uuid,ae=F.uuid;let pe=f[j];pe===void 0&&(pe={},f[j]=pe);let K=pe[ae];K===void 0&&(K=k.clone(),pe[ae]=K,F.addEventListener("dispose",L)),k=K}if(k.visible=F.visible,k.wireframe=F.wireframe,I===Po?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:_[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const j=s.properties.get(k);j.light=T}return k}function w(P,F,T,I,k){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===Po)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ae=e.update(P),pe=P.material;if(Array.isArray(pe)){const K=ae.groups;for(let oe=0,Z=K.length;oe<Z;oe++){const Y=K[oe],se=pe[Y.materialIndex];if(se&&se.visible){const le=N(P,se,I,k);P.onBeforeShadow(s,P,F,T,ae,le,Y),s.renderBufferDirect(T,null,ae,le,P,Y),P.onAfterShadow(s,P,F,T,ae,le,Y)}}}else if(pe.visible){const K=N(P,pe,I,k);P.onBeforeShadow(s,P,F,T,ae,K,null),s.renderBufferDirect(T,null,ae,K,P,null),P.onAfterShadow(s,P,F,T,ae,K,null)}}const j=P.children;for(let ae=0,pe=j.length;ae<pe;ae++)w(j[ae],F,T,I,k)}function L(P){P.target.removeEventListener("dispose",L);for(const T in f){const I=f[T],k=P.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function Zb(s,e){function t(){let H=!1;const Pe=new Wt;let ge=null;const Le=new Wt(0,0,0,0);return{setMask:function(Oe){ge!==Oe&&!H&&(s.colorMask(Oe,Oe,Oe,Oe),ge=Oe)},setLocked:function(Oe){H=Oe},setClear:function(Oe,xe,Ke,Xe,Ht){Ht===!0&&(Oe*=Xe,xe*=Xe,Ke*=Xe),Pe.set(Oe,xe,Ke,Xe),Le.equals(Pe)===!1&&(s.clearColor(Oe,xe,Ke,Xe),Le.copy(Pe))},reset:function(){H=!1,ge=null,Le.set(-1,0,0,0)}}}function i(){let H=!1,Pe=!1,ge=null,Le=null,Oe=null;return{setReversed:function(xe){if(Pe!==xe){const Ke=e.get("EXT_clip_control");xe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Pe=xe;const Xe=Oe;Oe=null,this.setClear(Xe)}},getReversed:function(){return Pe},setTest:function(xe){xe?ce(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(xe){ge!==xe&&!H&&(s.depthMask(xe),ge=xe)},setFunc:function(xe){if(Pe&&(xe=Ny[xe]),Le!==xe){switch(xe){case wh:s.depthFunc(s.NEVER);break;case bh:s.depthFunc(s.ALWAYS);break;case Ah:s.depthFunc(s.LESS);break;case wa:s.depthFunc(s.LEQUAL);break;case Rh:s.depthFunc(s.EQUAL);break;case Ch:s.depthFunc(s.GEQUAL);break;case Ph:s.depthFunc(s.GREATER);break;case Nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=xe}},setLocked:function(xe){H=xe},setClear:function(xe){Oe!==xe&&(Oe=xe,Pe&&(xe=1-xe),s.clearDepth(xe))},reset:function(){H=!1,ge=null,Le=null,Oe=null,Pe=!1}}}function a(){let H=!1,Pe=null,ge=null,Le=null,Oe=null,xe=null,Ke=null,Xe=null,Ht=null;return{setTest:function(Dt){H||(Dt?ce(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Dt){Pe!==Dt&&!H&&(s.stencilMask(Dt),Pe=Dt)},setFunc:function(Dt,Pn,li){(ge!==Dt||Le!==Pn||Oe!==li)&&(s.stencilFunc(Dt,Pn,li),ge=Dt,Le=Pn,Oe=li)},setOp:function(Dt,Pn,li){(xe!==Dt||Ke!==Pn||Xe!==li)&&(s.stencilOp(Dt,Pn,li),xe=Dt,Ke=Pn,Xe=li)},setLocked:function(Dt){H=Dt},setClear:function(Dt){Ht!==Dt&&(s.clearStencil(Dt),Ht=Dt)},reset:function(){H=!1,Pe=null,ge=null,Le=null,Oe=null,xe=null,Ke=null,Xe=null,Ht=null}}}const o=new t,c=new i,u=new a,h=new WeakMap,f=new WeakMap;let m={},_={},g={},x=new WeakMap,M=[],b=null,y=!1,S=null,C=null,N=null,w=null,L=null,P=null,F=null,T=new ut(0,0,0),I=0,k=!1,z=null,j=null,ae=null,pe=null,K=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(se)[1]),Z=Y>=1):se.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Z=Y>=2);let le=null,B={};const J=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),Ee=new Wt().fromArray(J),ve=new Wt().fromArray(Fe);function Q(H,Pe,ge,Le){const Oe=new Uint8Array(4),xe=s.createTexture();s.bindTexture(H,xe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ge;Ke++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Pe+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return xe}const _e={};_e[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ce(s.DEPTH_TEST),c.setFunc(wa),Xt(!1),ye(Eg),ce(s.CULL_FACE),yt(yr);function ce(H){m[H]!==!0&&(s.enable(H),m[H]=!0)}function Ie(H){m[H]!==!1&&(s.disable(H),m[H]=!1)}function Ye(H,Pe){return g[H]!==Pe?(s.bindFramebuffer(H,Pe),g[H]=Pe,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function nt(H,Pe){let ge=M,Le=!1;if(H){ge=x.get(Pe),ge===void 0&&(ge=[],x.set(Pe,ge));const Oe=H.textures;if(ge.length!==Oe.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Ke=Oe.length;xe<Ke;xe++)ge[xe]=s.COLOR_ATTACHMENT0+xe;ge.length=Oe.length,Le=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ge)}function Vt(H){return b!==H?(s.useProgram(H),b=H,!0):!1}const dt={[bs]:s.FUNC_ADD,[Zx]:s.FUNC_SUBTRACT,[Jx]:s.FUNC_REVERSE_SUBTRACT};dt[Qx]=s.MIN,dt[ey]=s.MAX;const Pt={[ty]:s.ZERO,[ny]:s.ONE,[iy]:s.SRC_COLOR,[Eh]:s.SRC_ALPHA,[cy]:s.SRC_ALPHA_SATURATE,[oy]:s.DST_COLOR,[sy]:s.DST_ALPHA,[ry]:s.ONE_MINUS_SRC_COLOR,[Th]:s.ONE_MINUS_SRC_ALPHA,[ly]:s.ONE_MINUS_DST_COLOR,[ay]:s.ONE_MINUS_DST_ALPHA,[uy]:s.CONSTANT_COLOR,[dy]:s.ONE_MINUS_CONSTANT_COLOR,[hy]:s.CONSTANT_ALPHA,[fy]:s.ONE_MINUS_CONSTANT_ALPHA};function yt(H,Pe,ge,Le,Oe,xe,Ke,Xe,Ht,Dt){if(H===yr){y===!0&&(Ie(s.BLEND),y=!1);return}if(y===!1&&(ce(s.BLEND),y=!0),H!==$x){if(H!==S||Dt!==k){if((C!==bs||L!==bs)&&(s.blendEquation(s.FUNC_ADD),C=bs,L=bs),Dt)switch(H){case Sa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tg:s.blendFunc(s.ONE,s.ONE);break;case wg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ft("WebGLState: Invalid blending: ",H);break}else switch(H){case Sa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wg:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bg:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",H);break}N=null,w=null,P=null,F=null,T.set(0,0,0),I=0,S=H,k=Dt}return}Oe=Oe||Pe,xe=xe||ge,Ke=Ke||Le,(Pe!==C||Oe!==L)&&(s.blendEquationSeparate(dt[Pe],dt[Oe]),C=Pe,L=Oe),(ge!==N||Le!==w||xe!==P||Ke!==F)&&(s.blendFuncSeparate(Pt[ge],Pt[Le],Pt[xe],Pt[Ke]),N=ge,w=Le,P=xe,F=Ke),(Xe.equals(T)===!1||Ht!==I)&&(s.blendColor(Xe.r,Xe.g,Xe.b,Ht),T.copy(Xe),I=Ht),S=H,k=!1}function St(H,Pe){H.side===Ki?Ie(s.CULL_FACE):ce(s.CULL_FACE);let ge=H.side===Qn;Pe&&(ge=!ge),Xt(ge),H.blending===Sa&&H.transparent===!1?yt(yr):yt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);const Le=H.stencilWrite;u.setTest(Le),Le&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),st(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(H){z!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),z=H)}function ye(H){H!==Yx?(ce(s.CULL_FACE),H!==j&&(H===Eg?s.cullFace(s.BACK):H===Kx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),j=H}function Be(H){H!==ae&&(Z&&s.lineWidth(H),ae=H)}function st(H,Pe,ge){H?(ce(s.POLYGON_OFFSET_FILL),(pe!==Pe||K!==ge)&&(pe=Pe,K=ge,c.getReversed()&&(Pe=-Pe),s.polygonOffset(Pe,ge))):Ie(s.POLYGON_OFFSET_FILL)}function rt(H){H?ce(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function Mt(H){H===void 0&&(H=s.TEXTURE0+oe-1),le!==H&&(s.activeTexture(H),le=H)}function G(H,Pe,ge){ge===void 0&&(le===null?ge=s.TEXTURE0+oe-1:ge=le);let Le=B[ge];Le===void 0&&(Le={type:void 0,texture:void 0},B[ge]=Le),(Le.type!==H||Le.texture!==Pe)&&(le!==ge&&(s.activeTexture(ge),le=ge),s.bindTexture(H,Pe||_e[H]),Le.type=H,Le.texture=Pe)}function sn(){const H=B[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Et(){try{s.compressedTexImage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function E(){try{s.texSubImage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function $(){try{s.texSubImage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function we(){try{s.texStorage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function Re(){try{s.texStorage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function fe(){try{s.texImage2D(...arguments)}catch(H){ft("WebGLState:",H)}}function me(){try{s.texImage3D(...arguments)}catch(H){ft("WebGLState:",H)}}function De(H){return _[H]!==void 0?_[H]:s.getParameter(H)}function Ze(H,Pe){_[H]!==Pe&&(s.pixelStorei(H,Pe),_[H]=Pe)}function Ue(H){Ee.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function Ne(H){ve.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),ve.copy(H))}function it(H,Pe){let ge=f.get(Pe);ge===void 0&&(ge=new WeakMap,f.set(Pe,ge));let Le=ge.get(H);Le===void 0&&(Le=s.getUniformBlockIndex(Pe,H.name),ge.set(H,Le))}function at(H,Pe){const Le=f.get(Pe).get(H);h.get(Pe)!==Le&&(s.uniformBlockBinding(Pe,Le,H.__bindingPointIndex),h.set(Pe,Le))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),m={},_={},le=null,B={},g={},x=new WeakMap,M=[],b=null,y=!1,S=null,C=null,N=null,w=null,L=null,P=null,F=null,T=new ut(0,0,0),I=0,k=!1,z=null,j=null,ae=null,pe=null,K=null,Ee.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:ce,disable:Ie,bindFramebuffer:Ye,drawBuffers:nt,useProgram:Vt,setBlending:yt,setMaterial:St,setFlipSided:Xt,setCullFace:ye,setLineWidth:Be,setPolygonOffset:st,setScissorTest:rt,activeTexture:Mt,bindTexture:G,unbindTexture:sn,compressedTexImage2D:Et,compressedTexImage3D:U,texImage2D:fe,texImage3D:me,pixelStorei:Ze,getParameter:De,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:we,texStorage3D:Re,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:ie,compressedTexSubImage3D:he,scissor:Ue,viewport:Ne,reset:ht}}function Jb(s,e,t,i,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ct,m=new WeakMap,_=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return M?new OffscreenCanvas(U,E):Ho("canvas")}function y(U,E,$){let ie=1;const he=Et(U);if((he.width>$||he.height>$)&&(ie=$/Math.max(he.width,he.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const we=Math.floor(ie*he.width),Re=Math.floor(ie*he.height);g===void 0&&(g=b(we,Re));const fe=E?b(we,Re):g;return fe.width=we,fe.height=Re,fe.getContext("2d").drawImage(U,0,0,we,Re),tt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+we+"x"+Re+")."),fe}else return"data"in U&&tt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function S(U){return U.generateMipmaps}function C(U){s.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,E,$,ie,he,we=!1){if(U!==null){if(s[U]!==void 0)return s[U];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Re;ie&&(Re=e.get("EXT_texture_norm16"),Re||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===s.RED&&($===s.FLOAT&&(fe=s.R32F),$===s.HALF_FLOAT&&(fe=s.R16F),$===s.UNSIGNED_BYTE&&(fe=s.R8),$===s.UNSIGNED_SHORT&&Re&&(fe=Re.R16_EXT),$===s.SHORT&&Re&&(fe=Re.R16_SNORM_EXT)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.R8UI),$===s.UNSIGNED_SHORT&&(fe=s.R16UI),$===s.UNSIGNED_INT&&(fe=s.R32UI),$===s.BYTE&&(fe=s.R8I),$===s.SHORT&&(fe=s.R16I),$===s.INT&&(fe=s.R32I)),E===s.RG&&($===s.FLOAT&&(fe=s.RG32F),$===s.HALF_FLOAT&&(fe=s.RG16F),$===s.UNSIGNED_BYTE&&(fe=s.RG8),$===s.UNSIGNED_SHORT&&Re&&(fe=Re.RG16_EXT),$===s.SHORT&&Re&&(fe=Re.RG16_SNORM_EXT)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RG8UI),$===s.UNSIGNED_SHORT&&(fe=s.RG16UI),$===s.UNSIGNED_INT&&(fe=s.RG32UI),$===s.BYTE&&(fe=s.RG8I),$===s.SHORT&&(fe=s.RG16I),$===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),$===s.UNSIGNED_INT&&(fe=s.RGB32UI),$===s.BYTE&&(fe=s.RGB8I),$===s.SHORT&&(fe=s.RGB16I),$===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),$===s.UNSIGNED_INT&&(fe=s.RGBA32UI),$===s.BYTE&&(fe=s.RGBA8I),$===s.SHORT&&(fe=s.RGBA16I),$===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&($===s.UNSIGNED_SHORT&&Re&&(fe=Re.RGB16_EXT),$===s.SHORT&&Re&&(fe=Re.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const me=we?Hc:Ct.getTransfer(he);$===s.FLOAT&&(fe=s.RGBA32F),$===s.HALF_FLOAT&&(fe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(fe=me===kt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Re&&(fe=Re.RGBA16_EXT),$===s.SHORT&&Re&&(fe=Re.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function L(U,E){let $;return U?E===null||E===tr||E===ko?$=s.DEPTH24_STENCIL8:E===_i?$=s.DEPTH32F_STENCIL8:E===Oo&&($=s.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===tr||E===ko?$=s.DEPTH_COMPONENT24:E===_i?$=s.DEPTH_COMPONENT32F:E===Oo&&($=s.DEPTH_COMPONENT16),$}function P(U,E){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==gn&&U.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&_.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),z(E)}function I(U){const E=i.get(U);if(E.__webglInit===void 0)return;const $=U.source,ie=x.get($);if(ie){const he=ie[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(U),Object.keys(ie).length===0&&x.delete($)}i.remove(U)}function k(U){const E=i.get(U);s.deleteTexture(E.__webglTexture);const $=U.source,ie=x.get($);delete ie[E.__cacheKey],c.memory.textures--}function z(U){const E=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let he=0;he<E.__webglFramebuffer[ie].length;he++)s.deleteFramebuffer(E.__webglFramebuffer[ie][he]);else s.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)s.deleteFramebuffer(E.__webglFramebuffer[ie]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let ie=0,he=$.length;ie<he;ie++){const we=i.get($[ie]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),c.memory.textures--),i.remove($[ie])}i.remove(U)}let j=0;function ae(){j=0}function pe(){return j}function K(U){j=U}function oe(){const U=j;return U>=a.maxTextures&&tt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),j+=1,U}function Z(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function Y(U,E){const $=i.get(U);if(U.isVideoTexture&&G(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const ie=U.image;if(ie===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie($,U,E);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function se(U,E){const $=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){Ie($,U,E);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function le(U,E){const $=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){Ie($,U,E);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function B(U,E){const $=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){Ye($,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const J={[Aa]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[Bc]:s.MIRRORED_REPEAT},Fe={[gn]:s.NEAREST,[c0]:s.NEAREST_MIPMAP_NEAREST,[No]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[Lc]:s.LINEAR_MIPMAP_NEAREST,[vr]:s.LINEAR_MIPMAP_LINEAR},Ee={[Sy]:s.NEVER,[by]:s.ALWAYS,[My]:s.LESS,[Af]:s.LEQUAL,[Ey]:s.EQUAL,[Rf]:s.GEQUAL,[Ty]:s.GREATER,[wy]:s.NOTEQUAL};function ve(U,E){if(E.type===_i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_n||E.magFilter===Lc||E.magFilter===No||E.magFilter===vr||E.minFilter===_n||E.minFilter===Lc||E.minFilter===No||E.minFilter===vr)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,J[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Fe[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Fe[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gn||E.minFilter!==No&&E.minFilter!==vr||E.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Q(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const ie=E.source;let he=x.get(ie);he===void 0&&(he={},x.set(ie,he));const we=Z(E);if(we!==U.__cacheKey){he[we]===void 0&&(he[we]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),he[we].usedTimes++;const Re=he[U.__cacheKey];Re!==void 0&&(he[U.__cacheKey].usedTimes--,Re.usedTimes===0&&k(E)),U.__cacheKey=we,U.__webglTexture=he[we].texture}return $}function _e(U,E,$){return Math.floor(Math.floor(U/$)/E)}function ce(U,E,$,ie){const we=U.updateRanges;if(we.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,ie,E.data);else{we.sort((Ze,Ue)=>Ze.start-Ue.start);let Re=0;for(let Ze=1;Ze<we.length;Ze++){const Ue=we[Re],Ne=we[Ze],it=Ue.start+Ue.count,at=_e(Ne.start,E.width,4),ht=_e(Ue.start,E.width,4);Ne.start<=it+1&&at===ht&&_e(Ne.start+Ne.count-1,E.width,4)===at?Ue.count=Math.max(Ue.count,Ne.start+Ne.count-Ue.start):(++Re,we[Re]=Ne)}we.length=Re+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),me=t.getParameter(s.UNPACK_SKIP_PIXELS),De=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ze=0,Ue=we.length;Ze<Ue;Ze++){const Ne=we[Ze],it=Math.floor(Ne.start/4),at=Math.ceil(Ne.count/4),ht=it%E.width,H=Math.floor(it/E.width),Pe=at,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,ht,H,Pe,ge,$,ie,E.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,me),t.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function Ie(U,E,$){let ie=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=s.TEXTURE_3D);const he=Q(U,E),we=E.source;t.bindTexture(ie,U.__webglTexture,s.TEXTURE0+$);const Re=i.get(we);if(we.version!==Re.__version||he===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=Ct.getPrimaries(Ct.workingColorSpace),Le=E.colorSpace===Qr?null:Ct.getPrimaries(E.colorSpace),Oe=E.colorSpace===Qr||ge===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let me=y(E.image,!1,a.maxTextureSize);me=sn(E,me);const De=o.convert(E.format,E.colorSpace),Ze=o.convert(E.type);let Ue=w(E.internalFormat,De,Ze,E.normalized,E.colorSpace,E.isVideoTexture);ve(ie,E);let Ne;const it=E.mipmaps,at=E.isVideoTexture!==!0,ht=Re.__version===void 0||he===!0,H=we.dataReady,Pe=P(E,me);if(E.isDepthTexture)Ue=L(E.format===Rs,E.type),ht&&(at?t.texStorage2D(s.TEXTURE_2D,1,Ue,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Ue,me.width,me.height,0,De,Ze,null));else if(E.isDataTexture)if(it.length>0){at&&ht&&t.texStorage2D(s.TEXTURE_2D,Pe,Ue,it[0].width,it[0].height);for(let ge=0,Le=it.length;ge<Le;ge++)Ne=it[ge],at?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,De,Ze,Ne.data):t.texImage2D(s.TEXTURE_2D,ge,Ue,Ne.width,Ne.height,0,De,Ze,Ne.data);E.generateMipmaps=!1}else at?(ht&&t.texStorage2D(s.TEXTURE_2D,Pe,Ue,me.width,me.height),H&&ce(E,me,De,Ze)):t.texImage2D(s.TEXTURE_2D,0,Ue,me.width,me.height,0,De,Ze,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ue,it[0].width,it[0].height,me.depth);for(let ge=0,Le=it.length;ge<Le;ge++)if(Ne=it[ge],E.format!==vi)if(De!==null)if(at){if(H)if(E.layerUpdates.size>0){const Oe=v_(Ne.width,Ne.height,E.format,E.type);for(const xe of E.layerUpdates){const Ke=Ne.data.subarray(xe*Oe/Ne.data.BYTES_PER_ELEMENT,(xe+1)*Oe/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,xe,Ne.width,Ne.height,1,De,Ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Ne.width,Ne.height,me.depth,De,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ue,Ne.width,Ne.height,me.depth,0,Ne.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Ne.width,Ne.height,me.depth,De,Ze,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ue,Ne.width,Ne.height,me.depth,0,De,Ze,Ne.data)}else{at&&ht&&t.texStorage2D(s.TEXTURE_2D,Pe,Ue,it[0].width,it[0].height);for(let ge=0,Le=it.length;ge<Le;ge++)Ne=it[ge],E.format!==vi?De!==null?at?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,De,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ue,Ne.width,Ne.height,0,Ne.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,De,Ze,Ne.data):t.texImage2D(s.TEXTURE_2D,ge,Ue,Ne.width,Ne.height,0,De,Ze,Ne.data)}else if(E.isDataArrayTexture)if(at){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ue,me.width,me.height,me.depth),H)if(E.layerUpdates.size>0){const ge=v_(me.width,me.height,E.format,E.type);for(const Le of E.layerUpdates){const Oe=me.data.subarray(Le*ge/me.data.BYTES_PER_ELEMENT,(Le+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,me.width,me.height,1,De,Ze,Oe)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,De,Ze,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,me.width,me.height,me.depth,0,De,Ze,me.data);else if(E.isData3DTexture)at?(ht&&t.texStorage3D(s.TEXTURE_3D,Pe,Ue,me.width,me.height,me.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,De,Ze,me.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,me.width,me.height,me.depth,0,De,Ze,me.data);else if(E.isFramebufferTexture){if(ht)if(at)t.texStorage2D(s.TEXTURE_2D,Pe,Ue,me.width,me.height);else{let ge=me.width,Le=me.height;for(let Oe=0;Oe<Pe;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Ue,ge,Le,0,De,Ze,null),ge>>=1,Le>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),me.parentNode!==ge){ge.appendChild(me),_.add(E),ge.onpaint=Le=>{const Oe=Le.changedElements;for(const xe of _)Oe.includes(xe.image)&&(xe.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,me);else{const Oe=s.RGBA,xe=s.RGBA,Ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Oe,xe,Ke,me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&ht){const ge=Et(it[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Ue,ge.width,ge.height)}for(let ge=0,Le=it.length;ge<Le;ge++)Ne=it[ge],at?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,De,Ze,Ne):t.texImage2D(s.TEXTURE_2D,ge,Ue,De,Ze,Ne);E.generateMipmaps=!1}else if(at){if(ht){const ge=Et(me);t.texStorage2D(s.TEXTURE_2D,Pe,Ue,ge.width,ge.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ze,me)}else t.texImage2D(s.TEXTURE_2D,0,Ue,De,Ze,me);S(E)&&C(ie),Re.__version=we.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ye(U,E,$){if(E.image.length!==6)return;const ie=Q(U,E),he=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+$);const we=i.get(he);if(he.version!==we.__version||ie===!0){t.activeTexture(s.TEXTURE0+$);const Re=Ct.getPrimaries(Ct.workingColorSpace),fe=E.colorSpace===Qr?null:Ct.getPrimaries(E.colorSpace),me=E.colorSpace===Qr||Re===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Ze=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let xe=0;xe<6;xe++)!De&&!Ze?Ue[xe]=y(E.image[xe],!0,a.maxCubemapSize):Ue[xe]=Ze?E.image[xe].image:E.image[xe],Ue[xe]=sn(E,Ue[xe]);const Ne=Ue[0],it=o.convert(E.format,E.colorSpace),at=o.convert(E.type),ht=w(E.internalFormat,it,at,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,Pe=we.__version===void 0||ie===!0,ge=he.dataReady;let Le=P(E,Ne);ve(s.TEXTURE_CUBE_MAP,E);let Oe;if(De){H&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ht,Ne.width,Ne.height);for(let xe=0;xe<6;xe++){Oe=Ue[xe].mipmaps;for(let Ke=0;Ke<Oe.length;Ke++){const Xe=Oe[Ke];E.format!==vi?it!==null?H?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Xe.width,Xe.height,it,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,ht,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Xe.width,Xe.height,it,at,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,ht,Xe.width,Xe.height,0,it,at,Xe.data)}}}else{if(Oe=E.mipmaps,H&&Pe){Oe.length>0&&Le++;const xe=Et(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ht,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ze){H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ue[xe].width,Ue[xe].height,it,at,Ue[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ht,Ue[xe].width,Ue[xe].height,0,it,at,Ue[xe].data);for(let Ke=0;Ke<Oe.length;Ke++){const Ht=Oe[Ke].image[xe].image;H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,Ht.width,Ht.height,it,at,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,ht,Ht.width,Ht.height,0,it,at,Ht.data)}}else{H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,it,at,Ue[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ht,it,at,Ue[xe]);for(let Ke=0;Ke<Oe.length;Ke++){const Xe=Oe[Ke];H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,it,at,Xe.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,ht,it,at,Xe.image[xe])}}}S(E)&&C(s.TEXTURE_CUBE_MAP),we.__version=he.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function nt(U,E,$,ie,he,we){const Re=o.convert($.format,$.colorSpace),fe=o.convert($.type),me=w($.internalFormat,Re,fe,$.normalized,$.colorSpace),De=i.get(E),Ze=i.get($);if(Ze.__renderTarget=E,!De.__hasExternalTextures){const Ue=Math.max(1,E.width>>we),Ne=Math.max(1,E.height>>we);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,we,me,Ue,Ne,E.depth,0,Re,fe,null):t.texImage2D(he,we,me,Ue,Ne,0,Re,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Mt(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,he,Ze.__webglTexture,0,rt(E)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,he,Ze.__webglTexture,we),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(U,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const ie=E.depthTexture,he=ie&&ie.isDepthTexture?ie.type:null,we=L(E.stencilBuffer,he),Re=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Mt(E)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(E),we,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(E),we,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,we,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,U)}else{const ie=E.textures;for(let he=0;he<ie.length;he++){const we=ie[he],Re=o.convert(we.format,we.colorSpace),fe=o.convert(we.type),me=w(we.internalFormat,Re,fe,we.normalized,we.colorSpace);Mt(E)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(E),me,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(E),me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,me,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(U,E,$){const ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ve(s.TEXTURE_CUBE_MAP,E.depthTexture);const De=o.convert(E.depthTexture.format),Ze=o.convert(E.depthTexture.type);let Ue;E.depthTexture.format===Tr?Ue=s.DEPTH_COMPONENT24:E.depthTexture.format===Rs&&(Ue=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ue,E.width,E.height,0,De,Ze,null)}}else Y(E.depthTexture,0);const we=he.__webglTexture,Re=rt(E),fe=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,me=E.depthTexture.format===Rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Tr)Mt(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,fe,we,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,me,fe,we,0);else if(E.depthTexture.format===Rs)Mt(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,fe,we,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,me,fe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pt(U){const E=i.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ie=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",he)};ie.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ie}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let ie=0;ie<6;ie++)dt(E.__webglFramebuffer[ie],U,ie);else{const ie=U.texture.mipmaps;ie&&ie.length>0?dt(E.__webglFramebuffer[0],U,0):dt(E.__webglFramebuffer,U,0)}else if($){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=s.createRenderbuffer(),Vt(E.__webglDepthbuffer[ie],U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,we)}}else{const ie=U.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Vt(E.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,we)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(U,E,$){const ie=i.get(U);E!==void 0&&nt(ie.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Pt(U)}function St(U){const E=U.texture,$=i.get(U),ie=i.get(E);U.addEventListener("dispose",T);const he=U.textures,we=U.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=E.version,c.memory.textures++),we){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let me=0;me<E.mipmaps.length;me++)$.__webglFramebuffer[fe][me]=s.createFramebuffer()}else $.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)$.__webglFramebuffer[fe]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Re)for(let fe=0,me=he.length;fe<me;fe++){const De=i.get(he[fe]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&Mt(U)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const me=he[fe];$.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const De=o.convert(me.format,me.colorSpace),Ze=o.convert(me.type),Ue=w(me.internalFormat,De,Ze,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),Ne=rt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Ue,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt($.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),ve(s.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)nt($.__webglFramebuffer[fe][me],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else nt($.__webglFramebuffer[fe],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(E)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,me=he.length;fe<me;fe++){const De=he[fe],Ze=i.get(De);let Ue=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Ze.__webglTexture),ve(Ue,De),nt($.__webglFramebuffer,U,De,s.COLOR_ATTACHMENT0+fe,Ue,0),S(De)&&C(Ue)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),ve(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)nt($.__webglFramebuffer[me],U,E,s.COLOR_ATTACHMENT0,fe,me);else nt($.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,fe,0);S(E)&&C(fe),t.unbindTexture()}U.depthBuffer&&Pt(U)}function Xt(U){const E=U.textures;for(let $=0,ie=E.length;$<ie;$++){const he=E[$];if(S(he)){const we=N(U),Re=i.get(he).__webglTexture;t.bindTexture(we,Re),C(we),t.unbindTexture()}}}const ye=[],Be=[];function st(U){if(U.samples>0){if(Mt(U)===!1){const E=U.textures,$=U.width,ie=U.height;let he=s.COLOR_BUFFER_BIT;const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=i.get(U),fe=E.length>1;if(fe)for(let De=0;De<E.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<E.length;De++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const Ze=i.get(E[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,$,ie,0,0,$,ie,he,s.NEAREST),h===!0&&(ye.length=0,Be.length=0,ye.push(s.COLOR_ATTACHMENT0+De),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ye.push(we),Be.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let De=0;De<E.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const Ze=i.get(E[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function rt(U){return Math.min(a.maxSamples,U.samples)}function Mt(U){const E=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function G(U){const E=c.render.frame;m.get(U)!==E&&(m.set(U,E),U.update())}function sn(U,E){const $=U.colorSpace,ie=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==oi&&$!==Qr&&(Ct.getTransfer($)===kt?(ie!==vi||he!==ai)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",$)),E}function Et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=oe,this.resetTextureUnits=ae,this.getTextureUnits=pe,this.setTextureUnits=K,this.setTexture2D=Y,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=yt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qb(s,e){function t(i,a=Qr){let o;const c=Ct.getTransfer(a);if(i===ai)return s.UNSIGNED_BYTE;if(i===Sf)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Mf)return s.UNSIGNED_SHORT_5_5_5_1;if(i===h0)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===f0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===u0)return s.BYTE;if(i===d0)return s.SHORT;if(i===Oo)return s.UNSIGNED_SHORT;if(i===yf)return s.INT;if(i===tr)return s.UNSIGNED_INT;if(i===_i)return s.FLOAT;if(i===Er)return s.HALF_FLOAT;if(i===p0)return s.ALPHA;if(i===m0)return s.RGB;if(i===vi)return s.RGBA;if(i===Tr)return s.DEPTH_COMPONENT;if(i===Rs)return s.DEPTH_STENCIL;if(i===Ef)return s.RED;if(i===Tf)return s.RED_INTEGER;if(i===Ls)return s.RG;if(i===wf)return s.RG_INTEGER;if(i===bf)return s.RGBA_INTEGER;if(i===Ic||i===Dc||i===Uc||i===Fc)if(c===kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ic)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ic)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lh||i===Ih||i===Dh||i===Uh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ih)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===zc||i===Vh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Fh||i===Oh)return c===kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===kh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bh)return o.COMPRESSED_R11_EAC;if(i===zh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===zc)return o.COMPRESSED_RG11_EAC;if(i===Vh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hh||i===Gh||i===Wh||i===Xh||i===jh||i===Yh||i===Kh||i===qh||i===$h||i===Zh||i===Jh||i===Qh||i===ef||i===tf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Hh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$h)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qh)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ef)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tf)return c===kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nf||i===rf||i===sf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===nf)return c===kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===af||i===of||i===Vc||i===lf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===af)return o.COMPRESSED_RED_RGTC1_EXT;if(i===of)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ko?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const eA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new A0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nr({vertexShader:eA,fragmentShader:tA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new qc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iA extends ns{constructor(e,t){super();const i=this;let a=null,o=1,c=null,u="local-floor",h=1,f=null,m=null,_=null,g=null,x=null,M=null;const b=typeof XRWebGLBinding<"u",y=new nA,S={},C=t.getContextAttributes();let N=null,w=null;const L=[],P=[],F=new ct;let T=null;const I=new Gn;I.viewport=new Wt;const k=new Gn;k.viewport=new Wt;const z=[I,k],j=new tM;let ae=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _e=L[Q];return _e===void 0&&(_e=new Wd,L[Q]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Q){let _e=L[Q];return _e===void 0&&(_e=new Wd,L[Q]=_e),_e.getGripSpace()},this.getHand=function(Q){let _e=L[Q];return _e===void 0&&(_e=new Wd,L[Q]=_e),_e.getHandSpace()};function K(Q){const _e=P.indexOf(Q.inputSource);if(_e===-1)return;const ce=L[_e];ce!==void 0&&(ce.update(Q.inputSource,Q.frame,f||c),ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function oe(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<L.length;Q++){const _e=P[Q];_e!==null&&(P[Q]=null,L[Q].disconnect(_e))}ae=null,pe=null,y.reset();for(const Q in S)delete S[Q];e.setRenderTarget(N),x=null,g=null,_=null,a=null,w=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(Q){f=Q},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(N=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",Z),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ie=null,Ye=null;C.depth&&(Ye=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=C.stencil?Rs:Tr,Ie=C.stencil?ko:tr);const nt={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:o};_=this.getBinding(),g=_.createProjectionLayer(nt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Qi(g.textureWidth,g.textureHeight,{format:vi,type:ai,depthTexture:new Ca(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Qi(x.framebufferWidth,x.framebufferHeight,{format:vi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await a.requestReferenceSpace(u),ve.setContext(a),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(Q){for(let _e=0;_e<Q.removed.length;_e++){const ce=Q.removed[_e],Ie=P.indexOf(ce);Ie>=0&&(P[Ie]=null,L[Ie].disconnect(ce))}for(let _e=0;_e<Q.added.length;_e++){const ce=Q.added[_e];let Ie=P.indexOf(ce);if(Ie===-1){for(let nt=0;nt<L.length;nt++)if(nt>=P.length){P.push(ce),Ie=nt;break}else if(P[nt]===null){P[nt]=ce,Ie=nt;break}if(Ie===-1)break}const Ye=L[Ie];Ye&&Ye.connect(ce)}}const Y=new W,se=new W;function le(Q,_e,ce){Y.setFromMatrixPosition(_e.matrixWorld),se.setFromMatrixPosition(ce.matrixWorld);const Ie=Y.distanceTo(se),Ye=_e.projectionMatrix.elements,nt=ce.projectionMatrix.elements,Vt=Ye[14]/(Ye[10]-1),dt=Ye[14]/(Ye[10]+1),Pt=(Ye[9]+1)/Ye[5],yt=(Ye[9]-1)/Ye[5],St=(Ye[8]-1)/Ye[0],Xt=(nt[8]+1)/nt[0],ye=Vt*St,Be=Vt*Xt,st=Ie/(-St+Xt),rt=st*-St;if(_e.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(rt),Q.translateZ(st),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ye[10]===-1)Q.projectionMatrix.copy(_e.projectionMatrix),Q.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Mt=Vt+st,G=dt+st,sn=ye-rt,Et=Be+(Ie-rt),U=Pt*dt/G*Mt,E=yt*dt/G*Mt;Q.projectionMatrix.makePerspective(sn,Et,U,E,Mt,G),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function B(Q,_e){_e===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_e.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let _e=Q.near,ce=Q.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),j.near=k.near=I.near=_e,j.far=k.far=I.far=ce,(ae!==j.near||pe!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),ae=j.near,pe=j.far),j.layers.mask=Q.layers.mask|6,I.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;const Ie=Q.parent,Ye=j.cameras;B(j,Ie);for(let nt=0;nt<Ye.length;nt++)B(Ye[nt],Ie);Ye.length===2?le(j,I,k):j.projectionMatrix.copy(I.projectionMatrix),J(Q,j,Ie)};function J(Q,_e,ce){ce===null?Q.matrix.copy(_e.matrixWorld):(Q.matrix.copy(ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_e.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_e.projectionMatrix),Q.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ra*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(Q){h=Q,g!==null&&(g.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(Q){return S[Q]};let Fe=null;function Ee(Q,_e){if(m=_e.getViewerPose(f||c),M=_e,m!==null){const ce=m.views;x!==null&&(e.setRenderTargetFramebuffer(w,x.framebuffer),e.setRenderTarget(w));let Ie=!1;ce.length!==j.cameras.length&&(j.cameras.length=0,Ie=!0);for(let dt=0;dt<ce.length;dt++){const Pt=ce[dt];let yt=null;if(x!==null)yt=x.getViewport(Pt);else{const Xt=_.getViewSubImage(g,Pt);yt=Xt.viewport,dt===0&&(e.setRenderTargetTextures(w,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(w))}let St=z[dt];St===void 0&&(St=new Gn,St.layers.enable(dt),St.viewport=new Wt,z[dt]=St),St.matrix.fromArray(Pt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Pt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(yt.x,yt.y,yt.width,yt.height),dt===0&&(j.matrix.copy(St.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ie===!0&&j.cameras.push(St)}const Ye=a.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){_=i.getBinding();const dt=_.getDepthInformation(ce[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,a.renderState)}if(Ye&&Ye.includes("camera-access")&&b){e.state.unbindTexture(),_=i.getBinding();for(let dt=0;dt<ce.length;dt++){const Pt=ce[dt].camera;if(Pt){let yt=S[Pt];yt||(yt=new A0,S[Pt]=yt);const St=_.getCameraImage(Pt);yt.sourceTexture=St}}}}for(let ce=0;ce<L.length;ce++){const Ie=P[ce],Ye=L[ce];Ie!==null&&Ye!==void 0&&Ye.update(Ie,_e,f||c)}Fe&&Fe(Q,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),M=null}const ve=new I0;ve.setAnimationLoop(Ee),this.setAnimationLoop=function(Q){Fe=Q},this.dispose=function(){}}}const rA=new vt,z0=new _t;z0.set(-1,0,0,0,1,0,0,0,1);function sA(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,R0(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,C,N,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),_(y,S)):S.isMeshPhongMaterial?(o(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),g(y,S),S.isMeshPhysicalMaterial&&x(y,S,w)):S.isMeshMatcapMaterial?(o(y,S),M(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),b(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&u(y,S)):S.isPointsMaterial?h(y,S,C,N):S.isSpriteMaterial?f(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=e.get(S),N=C.envMap,w=C.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(w)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(z0),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function u(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,C,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=N*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const C=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function aA(s,e,t,i){let a={},o={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,L){const P=L.program;i.uniformBlockBinding(w,P)}function f(w,L){let P=a[w.id];P===void 0&&(y(w),P=m(w),a[w.id]=P,w.addEventListener("dispose",C));const F=L.program;i.updateUBOMapping(w,F);const T=e.render.frame;o[w.id]!==T&&(g(w),o[w.id]=T)}function m(w){const L=_();w.__bindingPointIndex=L;const P=s.createBuffer(),F=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function _(){for(let w=0;w<u;w++)if(c.indexOf(w)===-1)return c.push(w),w;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const L=a[w.id],P=w.uniforms,F=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let T=0,I=P.length;T<I;T++){const k=P[T];if(Array.isArray(k))for(let z=0,j=k.length;z<j;z++)x(k[z],T,z,F);else x(k,T,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(w,L,P,F){if(b(w,L,P,F)===!0){const T=w.__offset,I=w.value;if(Array.isArray(I)){let k=0;for(let z=0;z<I.length;z++){const j=I[z],ae=S(j);M(j,w.__data,k),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(k+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(I,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function M(w,L,P){typeof w=="number"||typeof w=="boolean"?L[0]=w:w.isMatrix3?(L[0]=w.elements[0],L[1]=w.elements[1],L[2]=w.elements[2],L[3]=0,L[4]=w.elements[3],L[5]=w.elements[4],L[6]=w.elements[5],L[7]=0,L[8]=w.elements[6],L[9]=w.elements[7],L[10]=w.elements[8],L[11]=0):ArrayBuffer.isView(w)?L.set(new w.constructor(w.buffer,w.byteOffset,L.length)):w.toArray(L,P)}function b(w,L,P,F){const T=w.value,I=L+"_"+P;if(F[I]===void 0)return typeof T=="number"||typeof T=="boolean"?F[I]=T:ArrayBuffer.isView(T)?F[I]=T.slice():F[I]=T.clone(),!0;{const k=F[I];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return F[I]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function y(w){const L=w.uniforms;let P=0;const F=16;for(let I=0,k=L.length;I<k;I++){const z=Array.isArray(L[I])?L[I]:[L[I]];for(let j=0,ae=z.length;j<ae;j++){const pe=z[j],K=Array.isArray(pe.value)?pe.value:[pe.value];for(let oe=0,Z=K.length;oe<Z;oe++){const Y=K[oe],se=S(Y),le=P%F,B=le%se.boundary,J=le+B;P+=B,J!==0&&F-J<se.storage&&(P+=F-J),pe.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=P,P+=se.storage}}}const T=P%F;return T>0&&(P+=F-T),w.__size=P,w.__cache={},this}function S(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",w),L}function C(w){const L=w.target;L.removeEventListener("dispose",C);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function N(){for(const w in a)s.deleteBuffer(a[w]);c=[],a={},o={}}return{bind:h,update:f,dispose:N}}const oA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function lA(){return Xi===null&&(Xi=new If(oA,16,16,Ls,Er),Xi.name="DFG_LUT",Xi.minFilter=_n,Xi.magFilter=_n,Xi.wrapS=qi,Xi.wrapT=qi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class cA{constructor(e={}){const{canvas:t=Cy(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:x=ai}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const b=x,y=new Set([bf,wf,Tf]),S=new Set([ai,tr,Oo,ko,Sf,Mf]),C=new Uint32Array(4),N=new Int32Array(4),w=new W;let L=null,P=null;const F=[],T=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let z=!1,j=null,ae=null,pe=null,K=null;this._outputColorSpace=Tn;let oe=0,Z=0,Y=null,se=-1,le=null;const B=new Wt,J=new Wt;let Fe=null;const Ee=new ut(0);let ve=0,Q=t.width,_e=t.height,ce=1,Ie=null,Ye=null;const nt=new Wt(0,0,Q,_e),Vt=new Wt(0,0,Q,_e);let dt=!1;const Pt=new Uf;let yt=!1,St=!1;const Xt=new vt,ye=new W,Be=new Wt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Mt(){return Y===null?ce:1}let G=i;function sn(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xf}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),G===null){const q="webgl2";if(G=sn(q,R),G===null)throw sn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw ft("WebGLRenderer: "+R.message),R}let Et,U,E,$,ie,he,we,Re,fe,me,De,Ze,Ue,Ne,it,at,ht,H,Pe,ge,Le,Oe,xe;function Ke(){Et=new lw(G),Et.init(),Le=new Qb(G,Et),U=new ew(G,Et,e,Le),E=new Zb(G,Et),U.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ae=G.createFramebuffer(),pe=G.createFramebuffer(),K=G.createFramebuffer(),$=new dw(G),ie=new Ob,he=new Jb(G,Et,E,ie,U,Le,$),we=new ow(k),Re=new mM(G),Oe=new JT(G,Re),fe=new cw(G,Re,$,Oe),me=new fw(G,fe,Re,Oe,$),H=new hw(G,U,he),it=new tw(ie),De=new Fb(k,we,Et,U,Oe,it),Ze=new sA(k,ie),Ue=new Bb,Ne=new Xb(Et),ht=new ZT(k,we,E,me,M,h),at=new $b(k,me,U),xe=new aA(G,$,U,E),Pe=new QT(G,Et,$),ge=new uw(G,Et,$),$.programs=De.programs,k.capabilities=U,k.extensions=Et,k.properties=ie,k.renderLists=Ue,k.shadowMap=at,k.state=E,k.info=$}Ke(),b!==ai&&(I=new mw(b,t.width,t.height,u,a,o));const Xe=new iA(k,G);this.xr=Xe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(Q,_e,!1))},this.getSize=function(R){return R.set(Q,_e)},this.setSize=function(R,q,ue=!0){if(Xe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,_e=q,t.width=Math.floor(R*ce),t.height=Math.floor(q*ce),ue===!0&&(t.style.width=R+"px",t.style.height=q+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Q*ce,_e*ce).floor()},this.setDrawingBufferSize=function(R,q,ue){Q=R,_e=q,ce=ue,t.width=Math.floor(R*ue),t.height=Math.floor(q*ue),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(b===ai){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,q,ue,ne){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,q,ue,ne),E.viewport(B.copy(nt).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(Vt)},this.setScissor=function(R,q,ue,ne){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,q,ue,ne),E.scissor(J.copy(Vt).multiplyScalar(ce).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){E.setScissorTest(dt=R)},this.setOpaqueSort=function(R){Ie=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ue=!0){let ne=0;if(R){let te=!1;if(Y!==null){const Ce=Y.texture.format;te=y.has(Ce)}if(te){const Ce=Y.texture.type,He=S.has(Ce),Ae=ht.getClearColor(),qe=ht.getClearAlpha(),et=Ae.r,mt=Ae.g,gt=Ae.b;He?(C[0]=et,C[1]=mt,C[2]=gt,C[3]=qe,G.clearBufferuiv(G.COLOR,0,C)):(N[0]=et,N[1]=mt,N[2]=gt,N[3]=qe,G.clearBufferiv(G.COLOR,0,N))}else ne|=G.COLOR_BUFFER_BIT}q&&(ne|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),j=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),ht.dispose(),Ue.dispose(),Ne.dispose(),ie.dispose(),we.dispose(),me.dispose(),Oe.dispose(),xe.dispose(),De.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Zo),Xe.removeEventListener("sessionend",Jo),kn.stop()};function Ht(R){R.preventDefault(),Gc("WebGLRenderer: Context Lost."),z=!0}function Dt(){Gc("WebGLRenderer: Context Restored."),z=!1;const R=$.autoReset,q=at.enabled,ue=at.autoUpdate,ne=at.needsUpdate,te=at.type;Ke(),$.autoReset=R,at.enabled=q,at.autoUpdate=ue,at.needsUpdate=ne,at.type=te}function Pn(R){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function li(R){const q=R.target;q.removeEventListener("dispose",li),is(q)}function is(R){Is(R),ie.remove(R)}function Is(R){const q=ie.get(R).programs;q!==void 0&&(q.forEach(function(ue){De.releaseProgram(ue)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ue,ne,te,Ce){q===null&&(q=st);const He=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ae=en(R,q,ue,ne,te);E.setMaterial(ne,He);let qe=ue.index,et=1;if(ne.wireframe===!0){if(qe=fe.getWireframeAttribute(ue),qe===void 0)return;et=2}const mt=ue.drawRange,gt=ue.attributes.position;let Je=mt.start*et,Nt=(mt.start+mt.count)*et;Ce!==null&&(Je=Math.max(Je,Ce.start*et),Nt=Math.min(Nt,(Ce.start+Ce.count)*et)),qe!==null?(Je=Math.max(Je,0),Nt=Math.min(Nt,qe.count)):gt!=null&&(Je=Math.max(Je,0),Nt=Math.min(Nt,gt.count));const jt=Nt-Je;if(jt<0||jt===1/0)return;Oe.setup(te,ne,Ae,ue,qe);let Zt,Ft=Pe;if(qe!==null&&(Zt=Re.get(qe),Ft=ge,Ft.setIndex(Zt)),te.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*Mt()),Ft.setMode(G.LINES)):Ft.setMode(G.TRIANGLES);else if(te.isLine){let cn=ne.linewidth;cn===void 0&&(cn=1),E.setLineWidth(cn*Mt()),te.isLineSegments?Ft.setMode(G.LINES):te.isLineLoop?Ft.setMode(G.LINE_LOOP):Ft.setMode(G.LINE_STRIP)}else te.isPoints?Ft.setMode(G.POINTS):te.isSprite&&Ft.setMode(G.TRIANGLES);if(te.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const cn=te._multiDrawStarts,ze=te._multiDrawCounts,An=te._multiDrawCount,Tt=qe?Re.get(qe).bytesPerElement:1,Wn=ie.get(ne).currentProgram.getUniforms();for(let Xn=0;Xn<An;Xn++)Wn.setValue(G,"_gl_DrawID",Xn),Ft.render(cn[Xn]/Tt,ze[Xn])}else if(te.isInstancedMesh)Ft.renderInstances(Je,jt,te.count);else if(ue.isInstancedBufferGeometry){const cn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ze=Math.min(ue.instanceCount,cn);Ft.renderInstances(Je,jt,ze)}else Ft.render(Je,jt)};function rs(R,q,ue){R.transparent===!0&&R.side===Ki&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,os(R,q,ue),R.side=Mr,R.needsUpdate=!0,os(R,q,ue),R.side=Ki):os(R,q,ue)}this.compile=function(R,q,ue=null){ue===null&&(ue=R),P=Ne.get(ue),P.init(q),T.push(P),ue.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),R!==ue&&R.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights();const ne=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ce=te.material;if(Ce)if(Array.isArray(Ce))for(let He=0;He<Ce.length;He++){const Ae=Ce[He];rs(Ae,ue,te),ne.add(Ae)}else rs(Ce,ue,te),ne.add(Ce)}),P=T.pop(),ne},this.compileAsync=function(R,q,ue=null){const ne=this.compile(R,q,ue);return new Promise(te=>{function Ce(){if(ne.forEach(function(He){ie.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){te(R);return}setTimeout(Ce,10)}Et.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ss=null;function eu(R){ss&&ss(R)}function Zo(){kn.stop()}function Jo(){kn.start()}const kn=new I0;kn.setAnimationLoop(eu),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(R){ss=R,Xe.setAnimationLoop(R),R===null?kn.stop():kn.start()},Xe.addEventListener("sessionstart",Zo),Xe.addEventListener("sessionend",Jo),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;j!==null&&j.renderStart(R,q);const ue=Xe.enabled===!0&&Xe.isPresenting===!0,ne=I!==null&&(Y===null||ue)&&I.begin(k,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(q),q=Xe.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,q,Y),P=Ne.get(R,T.length),P.init(q),P.state.textureUnits=he.getTextureUnits(),T.push(P),Xt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Pt.setFromProjectionMatrix(Xt,$i,q.reversedDepth),St=this.localClippingEnabled,yt=it.init(this.clippingPlanes,St),L=Ue.get(R,F.length),L.init(),F.push(L),Xe.enabled===!0&&Xe.isPresenting===!0){const He=k.xr.getDepthSensingMesh();He!==null&&Ds(He,q,-1/0,k.sortObjects)}Ds(R,q,0,k.sortObjects),L.finish(),k.sortObjects===!0&&L.sort(Ie,Ye,q.reversedDepth),rt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,rt&&ht.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&it.beginShadows();const te=P.state.shadowsArray;if(at.render(te,R,q),yt===!0&&it.endShadows(),(ne&&I.hasRenderPass())===!1){const He=L.opaque,Ae=L.transmissive;if(P.setupLights(),q.isArrayCamera){const qe=q.cameras;if(Ae.length>0)for(let et=0,mt=qe.length;et<mt;et++){const gt=qe[et];Qo(He,Ae,R,gt)}rt&&ht.render(R);for(let et=0,mt=qe.length;et<mt;et++){const gt=qe[et];Fa(L,R,gt,gt.viewport)}}else Ae.length>0&&Qo(He,Ae,R,q),rt&&ht.render(R),Fa(L,R,q)}Y!==null&&Z===0&&(he.updateMultisampleRenderTarget(Y),he.updateRenderTargetMipmap(Y)),ne&&I.end(k),R.isScene===!0&&R.onAfterRender(k,R,q),Oe.resetDefaultState(),se=-1,le=null,T.pop(),T.length>0?(P=T[T.length-1],he.setTextureUnits(P.state.textureUnits),yt===!0&&it.setGlobalState(k.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,j!==null&&j.renderEnd()};function Ds(R,q,ue,ne){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Pt.intersectsSprite(R)){ne&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Xt);const He=me.update(R),Ae=R.material;Ae.visible&&L.push(R,He,Ae,ue,Be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Pt.intersectsObject(R))){const He=me.update(R),Ae=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Be.copy(He.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(Xt)),Array.isArray(Ae)){const qe=He.groups;for(let et=0,mt=qe.length;et<mt;et++){const gt=qe[et],Je=Ae[gt.materialIndex];Je&&Je.visible&&L.push(R,He,Je,ue,Be.z,gt)}}else Ae.visible&&L.push(R,He,Ae,ue,Be.z,null)}}const Ce=R.children;for(let He=0,Ae=Ce.length;He<Ae;He++)Ds(Ce[He],q,ue,ne)}function Fa(R,q,ue,ne){const{opaque:te,transmissive:Ce,transparent:He}=R;P.setupLightsView(ue),yt===!0&&it.setGlobalState(k.clippingPlanes,ue),ne&&E.viewport(B.copy(ne)),te.length>0&&as(te,q,ue),Ce.length>0&&as(Ce,q,ue),He.length>0&&as(He,q,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Qo(R,q,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const Je=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new Qi(1,1,{generateMipmaps:!0,type:Je?Er:ai,minFilter:vr,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ce=P.state.transmissionRenderTarget[ne.id],He=ne.viewport||B;Ce.setSize(He.z*k.transmissionResolutionScale,He.w*k.transmissionResolutionScale);const Ae=k.getRenderTarget(),qe=k.getActiveCubeFace(),et=k.getActiveMipmapLevel();k.setRenderTarget(Ce),k.getClearColor(Ee),ve=k.getClearAlpha(),ve<1&&k.setClearColor(16777215,.5),k.clear(),rt&&ht.render(ue);const mt=k.toneMapping;k.toneMapping=Ji;const gt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),yt===!0&&it.setGlobalState(k.clippingPlanes,ne),as(R,ue,ne),he.updateMultisampleRenderTarget(Ce),he.updateRenderTargetMipmap(Ce),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Nt=0,jt=q.length;Nt<jt;Nt++){const Zt=q[Nt],{object:Ft,geometry:cn,material:ze,group:An}=Zt;if(ze.side===Ki&&Ft.layers.test(ne.layers)){const Tt=ze.side;ze.side=Qn,ze.needsUpdate=!0,Oa(Ft,ue,ne,cn,ze,An),ze.side=Tt,ze.needsUpdate=!0,Je=!0}}Je===!0&&(he.updateMultisampleRenderTarget(Ce),he.updateRenderTargetMipmap(Ce))}k.setRenderTarget(Ae,qe,et),k.setClearColor(Ee,ve),gt!==void 0&&(ne.viewport=gt),k.toneMapping=mt}function as(R,q,ue){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Ce=R.length;te<Ce;te++){const He=R[te],{object:Ae,geometry:qe,group:et}=He;let mt=He.material;mt.allowOverride===!0&&ne!==null&&(mt=ne),Ae.layers.test(ue.layers)&&Oa(Ae,q,ue,qe,mt,et)}}function Oa(R,q,ue,ne,te,Ce){R.onBeforeRender(k,q,ue,ne,te,Ce),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(k,q,ue,ne,R,Ce),te.transparent===!0&&te.side===Ki&&te.forceSinglePass===!1?(te.side=Qn,te.needsUpdate=!0,k.renderBufferDirect(ue,q,ne,te,R,Ce),te.side=Mr,te.needsUpdate=!0,k.renderBufferDirect(ue,q,ne,te,R,Ce),te.side=Ki):k.renderBufferDirect(ue,q,ne,te,R,Ce),R.onAfterRender(k,q,ue,ne,te,Ce)}function os(R,q,ue){q.isScene!==!0&&(q=st);const ne=ie.get(R),te=P.state.lights,Ce=P.state.shadowsArray,He=te.state.version,Ae=De.getParameters(R,te.state,Ce,q,ue,P.state.lightProbeGridArray),qe=De.getProgramCacheKey(Ae);let et=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const mt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=we.get(R.envMap||ne.environment,mt),ne.envMapRotation=ne.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",li),et=new Map,ne.programs=et);let gt=et.get(qe);if(gt!==void 0){if(ne.currentProgram===gt&&ne.lightsStateVersion===He)return el(R,Ae),gt}else Ae.uniforms=De.getUniforms(R),j!==null&&R.isNodeMaterial&&j.build(R,ue,Ae),R.onBeforeCompile(Ae,k),gt=De.acquireProgram(Ae,qe),et.set(qe,gt),ne.uniforms=Ae.uniforms;const Je=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=it.uniform),el(R,Ae),ne.needsLights=Ba(R),ne.lightsStateVersion=He,ne.needsLights&&(Je.ambientLightColor.value=te.state.ambient,Je.lightProbe.value=te.state.probe,Je.directionalLights.value=te.state.directional,Je.directionalLightShadows.value=te.state.directionalShadow,Je.spotLights.value=te.state.spot,Je.spotLightShadows.value=te.state.spotShadow,Je.rectAreaLights.value=te.state.rectArea,Je.ltc_1.value=te.state.rectAreaLTC1,Je.ltc_2.value=te.state.rectAreaLTC2,Je.pointLights.value=te.state.point,Je.pointLightShadows.value=te.state.pointShadow,Je.hemisphereLights.value=te.state.hemi,Je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Je.spotLightMatrix.value=te.state.spotLightMatrix,Je.spotLightMap.value=te.state.spotLightMap,Je.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=gt,ne.uniformsList=null,gt}function ka(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=kc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function el(R,q){const ue=ie.get(R);ue.outputColorSpace=q.outputColorSpace,ue.batching=q.batching,ue.batchingColor=q.batchingColor,ue.instancing=q.instancing,ue.instancingColor=q.instancingColor,ue.instancingMorph=q.instancingMorph,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function tu(R,q){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let ue=0,ne=R.length;ue<ne;ue++){const te=R[ue];if(te.texture!==null&&te.boundingBox.containsPoint(w))return te}return null}function en(R,q,ue,ne,te){q.isScene!==!0&&(q=st),he.resetTextureUnits();const Ce=q.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ae=Y===null?k.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ct.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,et=we.get(ne.envMap||He,qe),mt=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,gt=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!ue.morphAttributes.position,Nt=!!ue.morphAttributes.normal,jt=!!ue.morphAttributes.color;let Zt=Ji;ne.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Zt=k.toneMapping);const Ft=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,cn=Ft!==void 0?Ft.length:0,ze=ie.get(ne),An=P.state.lights;if(yt===!0&&(St===!0||R!==le)){const Ot=R===le&&ne.id===se;it.setState(ne,R,Ot)}let Tt=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==An.state.version||ze.outputColorSpace!==Ae||te.isBatchedMesh&&ze.batching===!1||!te.isBatchedMesh&&ze.batching===!0||te.isBatchedMesh&&ze.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ze.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ze.instancing===!1||!te.isInstancedMesh&&ze.instancing===!0||te.isSkinnedMesh&&ze.skinning===!1||!te.isSkinnedMesh&&ze.skinning===!0||te.isInstancedMesh&&ze.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ze.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ze.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ze.instancingMorph===!1&&te.morphTexture!==null||ze.envMap!==et||ne.fog===!0&&ze.fog!==Ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==it.numPlanes||ze.numIntersection!==it.numIntersection)||ze.vertexAlphas!==mt||ze.vertexTangents!==gt||ze.morphTargets!==Je||ze.morphNormals!==Nt||ze.morphColors!==jt||ze.toneMapping!==Zt||ze.morphTargetsCount!==cn||!!ze.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,ze.__version=ne.version);let Wn=ze.currentProgram;Tt===!0&&(Wn=os(ne,q,te),j&&ne.isNodeMaterial&&j.onUpdateProgram(ne,Wn,ze));let Xn=!1,bt=!1,ir=!1;const Ut=Wn.getUniforms(),Kt=ze.uniforms;if(E.useProgram(Wn.program)&&(Xn=!0,bt=!0,ir=!0),ne.id!==se&&(se=ne.id,bt=!0),ze.needsLights){const Ot=tu(P.state.lightProbeGridArray,te);ze.lightProbeGrid!==Ot&&(ze.lightProbeGrid=Ot,bt=!0)}if(Xn||le!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ut.setValue(G,"projectionMatrix",R.projectionMatrix),Ut.setValue(G,"viewMatrix",R.matrixWorldInverse);const yi=Ut.map.cameraPosition;yi!==void 0&&yi.setValue(G,ye.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Ut.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ut.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),le!==R&&(le=R,bt=!0,ir=!0)}if(ze.needsLights&&(An.state.directionalShadowMap.length>0&&Ut.setValue(G,"directionalShadowMap",An.state.directionalShadowMap,he),An.state.spotShadowMap.length>0&&Ut.setValue(G,"spotShadowMap",An.state.spotShadowMap,he),An.state.pointShadowMap.length>0&&Ut.setValue(G,"pointShadowMap",An.state.pointShadowMap,he)),te.isSkinnedMesh){Ut.setOptional(G,te,"bindMatrix"),Ut.setOptional(G,te,"bindMatrixInverse");const Ot=te.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ut.setValue(G,"boneTexture",Ot.boneTexture,he))}te.isBatchedMesh&&(Ut.setOptional(G,te,"batchingTexture"),Ut.setValue(G,"batchingTexture",te._matricesTexture,he),Ut.setOptional(G,te,"batchingIdTexture"),Ut.setValue(G,"batchingIdTexture",te._indirectTexture,he),Ut.setOptional(G,te,"batchingColorTexture"),te._colorsTexture!==null&&Ut.setValue(G,"batchingColorTexture",te._colorsTexture,he));const xi=ue.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&H.update(te,ue,Wn),(bt||ze.receiveShadow!==te.receiveShadow)&&(ze.receiveShadow=te.receiveShadow,Ut.setValue(G,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Kt.envMapIntensity.value=q.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=lA()),bt){if(Ut.setValue(G,"toneMappingExposure",k.toneMappingExposure),ze.needsLights&&nu(Kt,ir),Ce&&ne.fog===!0&&Ze.refreshFogUniforms(Kt,Ce),Ze.refreshMaterialUniforms(Kt,ne,ce,_e,P.state.transmissionRenderTarget[R.id]),ze.needsLights&&ze.lightProbeGrid){const Ot=ze.lightProbeGrid;Kt.probesSH.value=Ot.texture,Kt.probesMin.value.copy(Ot.boundingBox.min),Kt.probesMax.value.copy(Ot.boundingBox.max),Kt.probesResolution.value.copy(Ot.resolution)}kc.upload(G,ka(ze),Kt,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(kc.upload(G,ka(ze),Kt,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ut.setValue(G,"center",te.center),Ut.setValue(G,"modelViewMatrix",te.modelViewMatrix),Ut.setValue(G,"normalMatrix",te.normalMatrix),Ut.setValue(G,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Ot=ne.uniformsGroups;for(let yi=0,Bi=Ot.length;yi<Bi;yi++){const ls=Ot[yi];xe.update(ls,Wn),xe.bind(ls,Wn)}}return Wn}function nu(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ba(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,q,ue){const ne=ie.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ie.get(R.texture).__webglTexture=q,ie.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ue=ie.get(R);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ue=0){Y=R,oe=q,Z=ue;let ne=null,te=!1,Ce=!1;if(R){const Ae=ie.get(R);if(Ae.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(G.FRAMEBUFFER,Ae.__webglFramebuffer),B.copy(R.viewport),J.copy(R.scissor),Fe=R.scissorTest,E.viewport(B),E.scissor(J),E.setScissorTest(Fe),se=-1;return}else if(Ae.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(Ae.__hasExternalTextures)he.rebindTextures(R,ie.get(R.texture).__webglTexture,ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const mt=R.depthTexture;if(Ae.__boundDepthTexture!==mt){if(mt!==null&&ie.has(mt)&&(R.width!==mt.image.width||R.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ce=!0);const et=ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[q])?ne=et[q][ue]:ne=et[q],te=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?ne=ie.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?ne=et[ue]:ne=et,B.copy(R.viewport),J.copy(R.scissor),Fe=R.scissorTest}else B.copy(nt).multiplyScalar(ce).floor(),J.copy(Vt).multiplyScalar(ce).floor(),Fe=dt;if(ue!==0&&(ne=ae),E.bindFramebuffer(G.FRAMEBUFFER,ne)&&E.drawBuffers(R,ne),E.viewport(B),E.scissor(J),E.setScissorTest(Fe),te){const Ae=ie.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ae.__webglTexture,ue)}else if(Ce){const Ae=q;for(let qe=0;qe<R.textures.length;qe++){const et=ie.get(R.textures[qe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qe,et.__webglTexture,ue,Ae)}}else if(R!==null&&ue!==0){const Ae=ie.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ae.__webglTexture,ue)}se=-1},this.readRenderTargetPixels=function(R,q,ue,ne,te,Ce,He,Ae=0){if(!(R&&R.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){E.bindFramebuffer(G.FRAMEBUFFER,qe);try{const et=R.textures[Ae],mt=et.format,gt=et.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ae),!U.textureFormatReadable(mt)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(gt)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ne&&ue>=0&&ue<=R.height-te&&G.readPixels(q,ue,ne,te,Le.convert(mt),Le.convert(gt),Ce)}finally{const et=Y!==null?ie.get(Y).__webglFramebuffer:null;E.bindFramebuffer(G.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,q,ue,ne,te,Ce,He,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe)if(q>=0&&q<=R.width-ne&&ue>=0&&ue<=R.height-te){E.bindFramebuffer(G.FRAMEBUFFER,qe);const et=R.textures[Ae],mt=et.format,gt=et.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ae),!U.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Je),G.bufferData(G.PIXEL_PACK_BUFFER,Ce.byteLength,G.STREAM_READ),G.readPixels(q,ue,ne,te,Le.convert(mt),Le.convert(gt),0);const Nt=Y!==null?ie.get(Y).__webglFramebuffer:null;E.bindFramebuffer(G.FRAMEBUFFER,Nt);const jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Py(G,jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Je),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ce),G.deleteBuffer(Je),G.deleteSync(jt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ue=0){const ne=Math.pow(2,-ue),te=Math.floor(R.image.width*ne),Ce=Math.floor(R.image.height*ne),He=q!==null?q.x:0,Ae=q!==null?q.y:0;he.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ue,0,0,He,Ae,te,Ce),E.unbindTexture()},this.copyTextureToTexture=function(R,q,ue=null,ne=null,te=0,Ce=0){let He,Ae,qe,et,mt,gt,Je,Nt,jt;const Zt=R.isCompressedTexture?R.mipmaps[Ce]:R.image;if(ue!==null)He=ue.max.x-ue.min.x,Ae=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,et=ue.min.x,mt=ue.min.y,gt=ue.isBox3?ue.min.z:0;else{const Kt=Math.pow(2,-te);He=Math.floor(Zt.width*Kt),Ae=Math.floor(Zt.height*Kt),R.isDataArrayTexture?qe=Zt.depth:R.isData3DTexture?qe=Math.floor(Zt.depth*Kt):qe=1,et=0,mt=0,gt=0}ne!==null?(Je=ne.x,Nt=ne.y,jt=ne.z):(Je=0,Nt=0,jt=0);const Ft=Le.convert(q.format),cn=Le.convert(q.type);let ze;q.isData3DTexture?(he.setTexture3D(q,0),ze=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),ze=G.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),ze=G.TEXTURE_2D),E.activeTexture(G.TEXTURE0),E.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const An=E.getParameter(G.UNPACK_ROW_LENGTH),Tt=E.getParameter(G.UNPACK_IMAGE_HEIGHT),Wn=E.getParameter(G.UNPACK_SKIP_PIXELS),Xn=E.getParameter(G.UNPACK_SKIP_ROWS),bt=E.getParameter(G.UNPACK_SKIP_IMAGES);E.pixelStorei(G.UNPACK_ROW_LENGTH,Zt.width),E.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Zt.height),E.pixelStorei(G.UNPACK_SKIP_PIXELS,et),E.pixelStorei(G.UNPACK_SKIP_ROWS,mt),E.pixelStorei(G.UNPACK_SKIP_IMAGES,gt);const ir=R.isDataArrayTexture||R.isData3DTexture,Ut=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Kt=ie.get(R),xi=ie.get(q),Ot=ie.get(Kt.__renderTarget),yi=ie.get(xi.__renderTarget);E.bindFramebuffer(G.READ_FRAMEBUFFER,Ot.__webglFramebuffer),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Bi=0;Bi<qe;Bi++)ir&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ie.get(R).__webglTexture,te,gt+Bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ie.get(q).__webglTexture,Ce,jt+Bi)),G.blitFramebuffer(et,mt,He,Ae,Je,Nt,He,Ae,G.DEPTH_BUFFER_BIT,G.NEAREST);E.bindFramebuffer(G.READ_FRAMEBUFFER,null),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||ie.has(R)){const Kt=ie.get(R),xi=ie.get(q);E.bindFramebuffer(G.READ_FRAMEBUFFER,pe),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,K);for(let Ot=0;Ot<qe;Ot++)ir?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Kt.__webglTexture,te,gt+Ot):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Kt.__webglTexture,te),Ut?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,xi.__webglTexture,Ce,jt+Ot):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,xi.__webglTexture,Ce),te!==0?G.blitFramebuffer(et,mt,He,Ae,Je,Nt,He,Ae,G.COLOR_BUFFER_BIT,G.NEAREST):Ut?G.copyTexSubImage3D(ze,Ce,Je,Nt,jt+Ot,et,mt,He,Ae):G.copyTexSubImage2D(ze,Ce,Je,Nt,et,mt,He,Ae);E.bindFramebuffer(G.READ_FRAMEBUFFER,null),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ut?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(ze,Ce,Je,Nt,jt,He,Ae,qe,Ft,cn,Zt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(ze,Ce,Je,Nt,jt,He,Ae,qe,Ft,Zt.data):G.texSubImage3D(ze,Ce,Je,Nt,jt,He,Ae,qe,Ft,cn,Zt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ce,Je,Nt,He,Ae,Ft,cn,Zt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ce,Je,Nt,Zt.width,Zt.height,Ft,Zt.data):G.texSubImage2D(G.TEXTURE_2D,Ce,Je,Nt,He,Ae,Ft,cn,Zt);E.pixelStorei(G.UNPACK_ROW_LENGTH,An),E.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tt),E.pixelStorei(G.UNPACK_SKIP_PIXELS,Wn),E.pixelStorei(G.UNPACK_SKIP_ROWS,Xn),E.pixelStorei(G.UNPACK_SKIP_IMAGES,bt),Ce===0&&q.generateMipmaps&&G.generateMipmap(ze),E.unbindTexture()},this.initRenderTarget=function(R){ie.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){oe=0,Z=0,Y=null,E.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}function H_(s,e){if(e===vy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===cf||e===g0){let t=s.getIndex();if(t===null){const c=[],u=s.getAttribute("position");if(u!==void 0){for(let h=0;h<u.count;h++)c.push(h);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,a=[];if(e===cf)for(let c=1;c<=i;c++)a.push(t.getX(0)),a.push(t.getX(c)),a.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(a.push(t.getX(c)),a.push(t.getX(c+1)),a.push(t.getX(c+2))):(a.push(t.getX(c+2)),a.push(t.getX(c+1)),a.push(t.getX(c)));a.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(a),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function uA(s){const e=new Map,t=new Map,i=s.clone();return V0(s,i,function(a,o){e.set(o,a),t.set(a,o)}),i.traverse(function(a){if(!a.isSkinnedMesh)return;const o=a,c=e.get(a),u=c.skeleton.bones;o.skeleton=c.skeleton.clone(),o.bindMatrix.copy(c.bindMatrix),o.skeleton.bones=u.map(function(h){return t.get(h)}),o.bind(o.skeleton,o.bindMatrix)}),i}function V0(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)V0(s.children[i],e.children[i],t)}class dA extends Da{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gA(t)}),this.register(function(t){return new _A(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new AA(t)}),this.register(function(t){return new RA(t)}),this.register(function(t){return new xA(t)}),this.register(function(t){return new yA(t)}),this.register(function(t){return new SA(t)}),this.register(function(t){return new MA(t)}),this.register(function(t){return new mA(t)}),this.register(function(t){return new EA(t)}),this.register(function(t){return new vA(t)}),this.register(function(t){return new wA(t)}),this.register(function(t){return new TA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new G_(t,Rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new G_(t,Rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new CA(t)})}load(e,t,i,a){const o=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const f=Fo.extractUrlBase(e);c=Fo.resolveURL(f,this.path)}else c=Fo.extractUrlBase(e);this.manager.itemStart(e);const u=function(f){a?a(f):console.error(f),o.manager.itemError(e),o.manager.itemEnd(e)},h=new P0(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(f){try{o.parse(f,c,function(m){t(m),o.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,a){let o;const c={},u={},h=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===H0){try{c[Rt.KHR_BINARY_GLTF]=new PA(e)}catch(_){a&&a(_);return}o=JSON.parse(c[Rt.KHR_BINARY_GLTF].content)}else o=JSON.parse(h.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new GA(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const _=this.pluginCallbacks[m](f);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[_.name]=_,c[_.name]=!0}if(o.extensionsUsed)for(let m=0;m<o.extensionsUsed.length;++m){const _=o.extensionsUsed[m],g=o.extensionsRequired||[];switch(_){case Rt.KHR_MATERIALS_UNLIT:c[_]=new pA;break;case Rt.KHR_DRACO_MESH_COMPRESSION:c[_]=new NA(o,this.dracoLoader);break;case Rt.KHR_TEXTURE_TRANSFORM:c[_]=new LA;break;case Rt.KHR_MESH_QUANTIZATION:c[_]=new IA;break;default:g.indexOf(_)>=0&&u[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}f.setExtensions(c),f.setPlugins(u),f.parse(i,a)}parseAsync(e,t){const i=this;return new Promise(function(a,o){i.parse(e,t,a,o)})}}function hA(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function ln(s,e,t){const i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fA{constructor(e){this.parser=e,this.name=Rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,a=t.length;i<a;i++){const o=t[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let a=t.cache.get(i);if(a)return a;const o=t.json,h=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let f;const m=new ut(16777215);h.color!==void 0&&m.setRGB(h.color[0],h.color[1],h.color[2],oi);const _=h.range!==void 0?h.range:0;switch(h.type){case"directional":f=new Oc(m),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new $S(m),f.distance=_;break;case"spot":f=new KS(m),f.distance=_,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,f.angle=h.spot.outerConeAngle,f.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return f.position.set(0,0,0),ji(f,h),h.intensity!==void 0&&(f.intensity=h.intensity),f.name=t.createUniqueName(h.name||"light_"+e),a=Promise.resolve(f),t.cache.add(i,a),a}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,o=i.json.nodes[e],u=(o.extensions&&o.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(h){return i._getNodeRef(t.cache,u,h)})}}class pA{constructor(){this.name=Rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Zi}extendParams(e,t,i){const a=[];e.color=new ut(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const c=o.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],oi),e.opacity=c[3]}o.baseColorTexture!==void 0&&a.push(i.assignTexture(e,"map",o.baseColorTexture,Tn))}return Promise.all(a)}}class mA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class gA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);if(i===null)return Promise.resolve();const a=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&a.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(a.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const o=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(o,o)}return Promise.all(a)}}class _A{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class vA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);if(i===null)return Promise.resolve();const a=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&a.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&a.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(a)}}class xA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);if(i===null)return Promise.resolve();const a=[];if(t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const o=i.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],oi)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&a.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Tn)),i.sheenRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(a)}}class yA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);if(i===null)return Promise.resolve();const a=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&a.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(a)}}class SA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);if(i===null)return Promise.resolve();const a=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&a.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const o=i.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(o[0],o[1],o[2],oi),Promise.all(a)}}class MA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IOR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class EA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);if(i===null)return Promise.resolve();const a=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&a.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const o=i.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(o[0],o[1],o[2],oi),i.specularColorTexture!==void 0&&a.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Tn)),Promise.all(a)}}class TA{constructor(e){this.parser=e,this.name=Rt.EXT_MATERIALS_BUMP}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);if(i===null)return Promise.resolve();const a=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&a.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(a)}}class wA{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ln(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const i=ln(this.parser,e,this.name);if(i===null)return Promise.resolve();const a=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&a.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(a)}}class bA{constructor(e){this.parser=e,this.name=Rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,a=i.textures[e];if(!a.extensions||!a.extensions[this.name])return null;const o=a.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,c)}}class AA{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,a=i.json,o=a.textures[e];if(!o.extensions||!o.extensions[t])return null;const c=o.extensions[t],u=a.images[c.source];let h=i.textureLoader;if(u.uri){const f=i.options.manager.getHandler(u.uri);f!==null&&(h=f)}return i.loadTextureImage(e,c.source,h)}}class RA{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,a=i.json,o=a.textures[e];if(!o.extensions||!o.extensions[t])return null;const c=o.extensions[t],u=a.images[c.source];let h=i.textureLoader;if(u.uri){const f=i.options.manager.getHandler(u.uri);f!==null&&(h=f)}return i.loadTextureImage(e,c.source,h)}}class G_{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const a=i.extensions[this.name],o=this.parser.getDependency("buffer",a.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(u){const h=a.byteOffset||0,f=a.byteLength||0,m=a.count,_=a.byteStride,g=new Uint8Array(u,h,f);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,_,g,a.mode,a.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(m*_);return c.decodeGltfBuffer(new Uint8Array(x),m,_,g,a.mode,a.filter),x})})}else return null}}class CA{constructor(e){this.name=Rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const a=t.meshes[i.mesh];for(const f of a.primitives)if(f.mode!==gi.TRIANGLES&&f.mode!==gi.TRIANGLE_STRIP&&f.mode!==gi.TRIANGLE_FAN&&f.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],h={};for(const f in c)u.push(this.parser.getDependency("accessor",c[f]).then(m=>(h[f]=m,h[f])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(f=>{const m=f.pop(),_=m.isGroup?m.children:[m],g=f[0].count,x=[];for(const M of _){const b=new vt,y=new W,S=new Di,C=new W(1,1,1),N=new vS(M.geometry,M.material,g);for(let w=0;w<g;w++)h.TRANSLATION&&y.fromBufferAttribute(h.TRANSLATION,w),h.ROTATION&&S.fromBufferAttribute(h.ROTATION,w),h.SCALE&&C.fromBufferAttribute(h.SCALE,w),N.setMatrixAt(w,b.compose(y,S,C));for(const w in h)if(w==="_COLOR_0"){const L=h[w];N.instanceColor=new hf(L.array,L.itemSize,L.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,h[w]);rn.prototype.copy.call(N,M),this.parser.assignFinalMaterial(N),x.push(N)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const H0="glTF",Co=12,W_={JSON:1313821514,BIN:5130562};class PA{constructor(e){this.name=Rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Co),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==H0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const a=this.header.length-Co,o=new DataView(e,Co);let c=0;for(;c<a;){const u=o.getUint32(c,!0);c+=4;const h=o.getUint32(c,!0);if(c+=4,h===W_.JSON){const f=new Uint8Array(e,Co+c,u);this.content=i.decode(f)}else if(h===W_.BIN){const f=Co+c;this.body=e.slice(f,f+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,a=this.dracoLoader,o=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},h={},f={};for(const m in c){const _=gf[m]||m.toLowerCase();u[_]=c[m]}for(const m in e.attributes){const _=gf[m]||m.toLowerCase();if(c[m]!==void 0){const g=i.accessors[e.attributes[m]],x=Ta[g.componentType];f[_]=x.name,h[_]=g.normalized===!0}}return t.getDependency("bufferView",o).then(function(m){return new Promise(function(_,g){a.decodeDracoFile(m,function(x){for(const M in x.attributes){const b=x.attributes[M],y=h[M];y!==void 0&&(b.normalized=y)}_(x)},u,f,oi,g)})})}}class LA{constructor(){this.name=Rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class IA{constructor(){this.name=Rt.KHR_MESH_QUANTIZATION}}class G0 extends Na{constructor(e,t,i,a){super(e,t,i,a)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=e*a*3+a;for(let c=0;c!==a;c++)t[c]=i[o+c];return t}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=u*2,f=u*3,m=a-t,_=(i-t)/m,g=_*_,x=g*_,M=e*f,b=M-f,y=-2*x+3*g,S=x-g,C=1-y,N=S-g+_;for(let w=0;w!==u;w++){const L=c[b+w+u],P=c[b+w+h]*m,F=c[M+w+u],T=c[M+w]*m;o[w]=C*L+N*P+y*F+S*T}return o}}const DA=new Di;class UA extends G0{interpolate_(e,t,i,a){const o=super.interpolate_(e,t,i,a);return DA.fromArray(o).normalize().toArray(o),o}}const gi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ta={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},X_={9728:gn,9729:_n,9984:c0,9985:Lc,9986:No,9987:vr},j_={33071:qi,33648:Bc,10497:Aa},xh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FA={CUBICSPLINE:void 0,LINEAR:zo,STEP:Bo},yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OA(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),s.DefaultMaterial}function ws(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ji(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kA(s,e,t){let i=!1,a=!1,o=!1;for(let f=0,m=e.length;f<m;f++){const _=e[f];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(a=!0),_.COLOR_0!==void 0&&(o=!0),i&&a&&o)break}if(!i&&!a&&!o)return Promise.resolve(s);const c=[],u=[],h=[];for(let f=0,m=e.length;f<m;f++){const _=e[f];if(i){const g=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):s.attributes.position;c.push(g)}if(a){const g=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):s.attributes.normal;u.push(g)}if(o){const g=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):s.attributes.color;h.push(g)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(f){const m=f[0],_=f[1],g=f[2];return i&&(s.morphAttributes.position=m),a&&(s.morphAttributes.normal=_),o&&(s.morphAttributes.color=g),s.morphTargetsRelative=!0,s})}function BA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,a=t.length;i<a;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zA(s){let e;const t=s.extensions&&s.extensions[Rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sh(t.attributes):e=s.indices+":"+Sh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,a=s.targets.length;i<a;i++)e+=":"+Sh(s.targets[i]);return e}function Sh(s){let e="";const t=Object.keys(s).sort();for(let i=0,a=t.length;i<a;i++)e+=t[i]+":"+s[t[i]]+";";return e}function _f(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HA=new vt;class GA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,a=-1,o=!1,c=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const h=u.match(/Version\/(\d+)/);a=i&&h?parseInt(h[1],10):-1,o=u.indexOf("Firefox")>-1,c=o?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&a<17||o&&c<98?this.textureLoader=new jS(this.options.manager):this.textureLoader=new QS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new P0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,a=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][a.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:a.asset,parser:i,userData:{}};return ws(o,u,a),ji(u,a),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(u)})).then(function(){for(const h of u.scenes)h.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let a=0,o=t.length;a<o;a++){const c=t[a].joints;for(let u=0,h=c.length;u<h;u++)e[c[u]].isBone=!0}for(let a=0,o=e.length;a<o;a++){const c=e[a];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const a=i.clone(),o=(c,u)=>{const h=this.associations.get(c);h!=null&&this.associations.set(u,h);for(const[f,m]of c.children.entries())o(m,u.children[f])};return o(i,a),a.name+="_instance_"+e.uses[t]++,a}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const a=e(t[i]);if(a)return a}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let a=0;a<t.length;a++){const o=e(t[a]);o&&i.push(o)}return i}getDependency(e,t){const i=e+":"+t;let a=this.cache.get(i);if(!a){switch(e){case"scene":a=this.loadScene(t);break;case"node":a=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":a=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":a=this.loadAccessor(t);break;case"bufferView":a=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":a=this.loadBuffer(t);break;case"material":a=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":a=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":a=this.loadSkin(t);break;case"animation":a=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":a=this.loadCamera(t);break;default:if(a=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!a)throw new Error("Unknown type: "+e);break}this.cache.add(i,a)}return a}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,a=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(a.map(function(o,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Rt.KHR_BINARY_GLTF].body);const a=this.options;return new Promise(function(o,c){i.load(Fo.resolveURL(t.uri,a.path),o,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const a=t.byteLength||0,o=t.byteOffset||0;return i.slice(o,o+a)})}loadAccessor(e){const t=this,i=this.json,a=this.json.accessors[e];if(a.bufferView===void 0&&a.sparse===void 0){const c=xh[a.type],u=Ta[a.componentType],h=a.normalized===!0,f=new u(a.count*c);return Promise.resolve(new On(f,c,h))}const o=[];return a.bufferView!==void 0?o.push(this.getDependency("bufferView",a.bufferView)):o.push(null),a.sparse!==void 0&&(o.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(o).then(function(c){const u=c[0],h=xh[a.type],f=Ta[a.componentType],m=f.BYTES_PER_ELEMENT,_=m*h,g=a.byteOffset||0,x=a.bufferView!==void 0?i.bufferViews[a.bufferView].byteStride:void 0,M=a.normalized===!0;let b,y;if(x&&x!==_){const S=Math.floor(g/x),C="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+S+":"+a.count;let N=t.cache.get(C);N||(b=new f(u,S*x,a.count*x/m),N=new dS(b,x/m),t.cache.add(C,N)),y=new Lf(N,h,g%x/m,M)}else u===null?b=new f(a.count*h):b=new f(u,g,a.count*h),y=new On(b,h,M);if(a.sparse!==void 0){const S=xh.SCALAR,C=Ta[a.sparse.indices.componentType],N=a.sparse.indices.byteOffset||0,w=a.sparse.values.byteOffset||0,L=new C(c[1],N,a.sparse.count*S),P=new f(c[2],w,a.sparse.count*h);u!==null&&(y=new On(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let F=0,T=L.length;F<T;F++){const I=L[F];if(y.setX(I,P[F*h]),h>=2&&y.setY(I,P[F*h+1]),h>=3&&y.setZ(I,P[F*h+2]),h>=4&&y.setW(I,P[F*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=M}return y})}loadTexture(e){const t=this.json,i=this.options,o=t.textures[e].source,c=t.images[o];let u=this.textureLoader;if(c.uri){const h=i.manager.getHandler(c.uri);h!==null&&(u=h)}return this.loadTextureImage(e,o,u)}loadTextureImage(e,t,i){const a=this,o=this.json,c=o.textures[e],u=o.images[t],h=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[h])return this.textureCache[h];const f=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const g=(o.samplers||{})[c.sampler]||{};return m.magFilter=X_[g.magFilter]||_n,m.minFilter=X_[g.minFilter]||vr,m.wrapS=j_[g.wrapS]||Aa,m.wrapT=j_[g.wrapT]||Aa,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==gn&&m.minFilter!==_n,a.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[h]=f,f}loadImageSource(e,t){const i=this,a=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const c=a.images[e],u=self.URL||self.webkitURL;let h=c.uri||"",f=!1;if(c.bufferView!==void 0)h=i.getDependency("bufferView",c.bufferView).then(function(_){f=!0;const g=new Blob([_],{type:c.mimeType});return h=u.createObjectURL(g),h});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(h).then(function(_){return new Promise(function(g,x){let M=g;t.isImageBitmapLoader===!0&&(M=function(b){const y=new wn(b);y.needsUpdate=!0,g(y)}),t.load(Fo.resolveURL(_,o.path),M,void 0,x)})}).then(function(_){return f===!0&&u.revokeObjectURL(h),ji(_,c),_.userData.mimeType=c.mimeType||VA(c.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),_});return this.sourceCache[e]=m,m}assignTexture(e,t,i,a){const o=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),o.extensions[Rt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[Rt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const h=o.associations.get(c);c=o.extensions[Rt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),o.associations.set(c,h)}}return a!==void 0&&(c.colorSpace=a),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const a=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let h=this.cache.get(u);h||(h=new w0,er.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(u,h)),i=h}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let h=this.cache.get(u);h||(h=new qo,er.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(u,h)),i=h}if(a||o||c){let u="ClonedMaterial:"+i.uuid+":";a&&(u+="derivative-tangents:"),o&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let h=this.cache.get(u);h||(h=i.clone(),o&&(h.vertexColors=!0),c&&(h.flatShading=!0),a&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(u,h),this.associations.set(h,this.associations.get(i))),i=h}e.material=i}getMaterialType(){return Xo}loadMaterial(e){const t=this,i=this.json,a=this.extensions,o=i.materials[e];let c;const u={},h=o.extensions||{},f=[];if(h[Rt.KHR_MATERIALS_UNLIT]){const _=a[Rt.KHR_MATERIALS_UNLIT];c=_.getMaterialType(),f.push(_.extendParams(u,o,t))}else{const _=o.pbrMetallicRoughness||{};if(u.color=new ut(1,1,1),u.opacity=1,Array.isArray(_.baseColorFactor)){const g=_.baseColorFactor;u.color.setRGB(g[0],g[1],g[2],oi),u.opacity=g[3]}_.baseColorTexture!==void 0&&f.push(t.assignTexture(u,"map",_.baseColorTexture,Tn)),u.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,u.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(u,"metalnessMap",_.metallicRoughnessTexture)),f.push(t.assignTexture(u,"roughnessMap",_.metallicRoughnessTexture))),c=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,u)})))}o.doubleSided===!0&&(u.side=Ki);const m=o.alphaMode||yh.OPAQUE;if(m===yh.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===yh.MASK&&(u.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&c!==Zi&&(f.push(t.assignTexture(u,"normalMap",o.normalTexture)),u.normalScale=new ct(1,1),o.normalTexture.scale!==void 0)){const _=o.normalTexture.scale;u.normalScale.set(_,_)}if(o.occlusionTexture!==void 0&&c!==Zi&&(f.push(t.assignTexture(u,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&c!==Zi){const _=o.emissiveFactor;u.emissive=new ut().setRGB(_[0],_[1],_[2],oi)}return o.emissiveTexture!==void 0&&c!==Zi&&f.push(t.assignTexture(u,"emissiveMap",o.emissiveTexture,Tn)),Promise.all(f).then(function(){const _=new c(u);return o.name&&(_.name=o.name),ji(_,o),t.associations.set(_,{materials:e}),o.extensions&&ws(a,_,o),_})}createUniqueName(e){const t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,a=this.primitiveCache;function o(u){return i[Rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(h){return Y_(h,u,t)})}const c=[];for(let u=0,h=e.length;u<h;u++){const f=e[u],m=zA(f),_=a[m];if(_)c.push(_.promise);else{let g;f.extensions&&f.extensions[Rt.KHR_DRACO_MESH_COMPRESSION]?g=o(f):g=Y_(new bn,f,t),a[m]={primitive:f,promise:g},c.push(g)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,a=this.extensions,o=i.meshes[e],c=o.primitives,u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h].material===void 0?OA(this.cache):this.getDependency("material",c[h].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(h){const f=h.slice(0,h.length-1),m=h[h.length-1],_=[];for(let x=0,M=m.length;x<M;x++){const b=m[x],y=c[x];let S;const C=f[x];if(y.mode===gi.TRIANGLES||y.mode===gi.TRIANGLE_STRIP||y.mode===gi.TRIANGLE_FAN||y.mode===void 0)S=o.isSkinnedMesh===!0?new mS(b,C):new mn(b,C),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),y.mode===gi.TRIANGLE_STRIP?S.geometry=H_(S.geometry,g0):y.mode===gi.TRIANGLE_FAN&&(S.geometry=H_(S.geometry,cf));else if(y.mode===gi.LINES)S=new Wo(b,C);else if(y.mode===gi.LINE_STRIP)S=new Go(b,C);else if(y.mode===gi.LINE_LOOP)S=new MS(b,C);else if(y.mode===gi.POINTS)S=new ES(b,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(S.geometry.morphAttributes).length>0&&BA(S,o),S.name=t.createUniqueName(o.name||"mesh_"+e),ji(S,o),y.extensions&&ws(a,S,y),t.assignFinalMaterial(S),_.push(S)}for(let x=0,M=_.length;x<M;x++)t.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return o.extensions&&ws(a,_[0],o),_[0];const g=new Li;o.extensions&&ws(a,g,o),t.associations.set(g,{meshes:e});for(let x=0,M=_.length;x<M;x++)g.add(_[x]);return g})}loadCamera(e){let t;const i=this.json.cameras[e],a=i[i.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gn(v0.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):i.type==="orthographic"&&(t=new Zc(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ji(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let a=0,o=t.joints.length;a<o;a++)i.push(this._loadNodeShallow(t.joints[a]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(a){const o=a.pop(),c=a,u=[],h=[];for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_){u.push(_);const g=new vt;o!==null&&g.fromArray(o.array,f*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new Df(u,h)})}loadAnimation(e){const t=this.json,i=this,a=t.animations[e],o=a.name?a.name:"animation_"+e,c=[],u=[],h=[],f=[],m=[];for(let _=0,g=a.channels.length;_<g;_++){const x=a.channels[_],M=a.samplers[x.sampler],b=x.target,y=b.node,S=a.parameters!==void 0?a.parameters[M.input]:M.input,C=a.parameters!==void 0?a.parameters[M.output]:M.output;b.node!==void 0&&(c.push(this.getDependency("node",y)),u.push(this.getDependency("accessor",S)),h.push(this.getDependency("accessor",C)),f.push(M),m.push(b))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(h),Promise.all(f),Promise.all(m)]).then(function(_){const g=_[0],x=_[1],M=_[2],b=_[3],y=_[4],S=[];for(let N=0,w=g.length;N<w;N++){const L=g[N],P=x[N],F=M[N],T=b[N],I=y[N];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();const k=i._createAnimationTracks(L,P,F,T,I);if(k)for(let z=0;z<k.length;z++)S.push(k[z])}const C=new BS(o,void 0,S);return ji(C,a),C})}createNodeMesh(e){const t=this.json,i=this,a=t.nodes[e];return a.mesh===void 0?null:i.getDependency("mesh",a.mesh).then(function(o){const c=i._getNodeRef(i.meshCache,a.mesh,o);return a.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let h=0,f=a.weights.length;h<f;h++)u.morphTargetInfluences[h]=a.weights[h]}),c})}loadNode(e){const t=this.json,i=this,a=t.nodes[e],o=i._loadNodeShallow(e),c=[],u=a.children||[];for(let f=0,m=u.length;f<m;f++)c.push(i.getDependency("node",u[f]));const h=a.skin===void 0?Promise.resolve(null):i.getDependency("skin",a.skin);return Promise.all([o,Promise.all(c),h]).then(function(f){const m=f[0],_=f[1],g=f[2];g!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(g,HA)});for(let x=0,M=_.length;x<M;x++)m.add(_[x]);if(m.userData.pivot!==void 0&&_.length>0){const x=m.userData.pivot,M=_[0];m.pivot=new W().fromArray(x),m.position.x-=x[0],m.position.y-=x[1],m.position.z-=x[2],M.position.set(0,0,0),delete m.userData.pivot}return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,a=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],c=o.name?a.createUniqueName(o.name):"",u=[],h=a._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return h&&u.push(h),o.camera!==void 0&&u.push(a.getDependency("camera",o.camera).then(function(f){return a._getNodeRef(a.cameraCache,o.camera,f)})),a._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){u.push(f)}),this.nodeCache[e]=Promise.all(u).then(function(f){let m;if(o.isBone===!0?m=new T0:f.length>1?m=new Li:f.length===1?m=f[0]:m=new rn,m!==f[0])for(let _=0,g=f.length;_<g;_++)m.add(f[_]);if(o.name&&(m.userData.name=o.name,m.name=c),ji(m,o),o.extensions&&ws(i,m,o),o.matrix!==void 0){const _=new vt;_.fromArray(o.matrix),m.applyMatrix4(_)}else o.translation!==void 0&&m.position.fromArray(o.translation),o.rotation!==void 0&&m.quaternion.fromArray(o.rotation),o.scale!==void 0&&m.scale.fromArray(o.scale);if(!a.associations.has(m))a.associations.set(m,{});else if(o.mesh!==void 0&&a.meshCache.refs[o.mesh]>1){const _=a.associations.get(m);a.associations.set(m,{..._})}return a.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],a=this,o=new Li;i.name&&(o.name=a.createUniqueName(i.name)),ji(o,i),i.extensions&&ws(t,o,i);const c=i.nodes||[],u=[];for(let h=0,f=c.length;h<f;h++)u.push(a.getDependency("node",c[h]));return Promise.all(u).then(function(h){for(let m=0,_=h.length;m<_;m++){const g=h[m];g.parent!==null?o.add(uA(g)):o.add(g)}const f=m=>{const _=new Map;for(const[g,x]of a.associations)(g instanceof er||g instanceof wn)&&_.set(g,x);return m.traverse(g=>{const x=a.associations.get(g);x!=null&&_.set(g,x)}),_};return a.associations=f(o),o})}_createAnimationTracks(e,t,i,a,o){const c=[],u=e.name?e.name:e.uuid,h=[];function f(x){x.morphTargetInfluences&&h.push(x.name?x.name:x.uuid)}Zr[o.path]===Zr.weights?(f(e),e.isGroup&&e.children.forEach(f)):h.push(u);let m;switch(Zr[o.path]){case Zr.weights:m=jo;break;case Zr.rotation:m=Yo;break;case Zr.translation:case Zr.scale:m=jc;break;default:switch(i.itemSize){case 1:m=jo;break;case 2:case 3:default:m=jc;break}break}const _=a.interpolation!==void 0?FA[a.interpolation]:zo,g=this._getArrayFromAccessor(i);for(let x=0,M=h.length;x<M;x++){const b=new m(h[x]+"."+Zr[o.path],t.array,g,_);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),c.push(b)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=_f(t.constructor),a=new Float32Array(t.length);for(let o=0,c=t.length;o<c;o++)a[o]=t[o]*i;t=a}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const a=this instanceof Yo?UA:G0;return new a(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function WA(s,e,t){const i=e.attributes,a=new Ui;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],h=u.min,f=u.max;if(h!==void 0&&f!==void 0){if(a.set(new W(h[0],h[1],h[2]),new W(f[0],f[1],f[2])),u.normalized){const m=_f(Ta[u.componentType]);a.min.multiplyScalar(m),a.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const u=new W,h=new W;for(let f=0,m=o.length;f<m;f++){const _=o[f];if(_.POSITION!==void 0){const g=t.json.accessors[_.POSITION],x=g.min,M=g.max;if(x!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),g.normalized){const b=_f(Ta[g.componentType]);h.multiplyScalar(b)}u.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(u)}s.boundingBox=a;const c=new Fi;a.getCenter(c.center),c.radius=a.min.distanceTo(a.max)/2,s.boundingSphere=c}function Y_(s,e,t){const i=e.attributes,a=[];function o(c,u){return t.getDependency("accessor",c).then(function(h){s.setAttribute(u,h)})}for(const c in i){const u=gf[c]||c.toLowerCase();u in s.attributes||a.push(o(i[c],u))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(u){s.setIndex(u)});a.push(c)}return Ct.workingColorSpace!==oi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),ji(s,e),WA(s,e,t),Promise.all(a).then(function(){return e.targets!==void 0?kA(s,e.targets,t):s})}const K_={type:"change"},Gf={type:"start"},W0={type:"end"},Pc=new Ko,q_=new Jr,XA=Math.cos(70*v0.DEG2RAD),pn=new W,Jn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mh=1e-6;class jA extends fM{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ya.ROTATE,MIDDLE:ya.DOLLY,RIGHT:ya.PAN},this.touches={ONE:xa.ROTATE,TWO:xa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Di,this._lastTargetPosition=new W,this._quat=new Di().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new g_,this._sphericalDelta=new g_,this._scale=1,this._panOffset=new W,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new W,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KA.bind(this),this._onPointerDown=YA.bind(this),this._onPointerUp=qA.bind(this),this._onContextMenu=n1.bind(this),this._onMouseWheel=JA.bind(this),this._onKeyDown=QA.bind(this),this._onTouchStart=e1.bind(this),this._onTouchMove=t1.bind(this),this._onMouseDown=$A.bind(this),this._onMouseMove=ZA.bind(this),this._interceptControlDown=i1.bind(this),this._interceptControlUp=r1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K_),this.update(),this.state=Gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;pn.copy(t).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Jn:i>Math.PI&&(i-=Jn),a<-Math.PI?a+=Jn:a>Math.PI&&(a-=Jn),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),t.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=pn.length();c=this._clampDistance(u*this._scale);const h=u-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const u=new W(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const f=new W(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),c=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Pc.origin.copy(this.object.position),Pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pc.direction))<XA?this.object.lookAt(this.target):(q_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pc.intersectPlane(q_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Mh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mh||this._lastTargetPosition.distanceToSquared(this.target)>Mh?(this.dispatchEvent(K_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jn/60*this.autoRotateSpeed*e:Jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pn.setFromMatrixColumn(t,0),pn.multiplyScalar(-e),this._panOffset.add(pn)}_panUp(e,t){this.screenSpacePanning===!0?pn.setFromMatrixColumn(t,1):(pn.setFromMatrixColumn(t,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(e),this._panOffset.add(pn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;pn.copy(a).sub(this.target);let o=pn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,o=t-i.top,c=i.width,u=i.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function YA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function KA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function qA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W0),this.state=Gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $A(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ya.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Gt.DOLLY;break;case ya.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Gt.ROTATE}break;case ya.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Gf)}function ZA(s){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function JA(s){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(s.preventDefault(),this.dispatchEvent(Gf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(W0))}function QA(s){this.enabled!==!1&&this._handleKeyDown(s)}function e1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case xa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Gt.TOUCH_ROTATE;break;case xa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case xa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Gt.TOUCH_DOLLY_PAN;break;case xa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Gf)}function t1(s){switch(this._trackPointer(s),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Gt.NONE}}function n1(s){this.enabled!==!1&&s.preventDefault()}function i1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function r1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s1({wireframe:s,skeleton:e=!1,onSkeletonSupportChange:t,modelUrl:i="/assets/generated/rigged-example.glb"}){const a=We.useRef(null),o=We.useRef(null),c=We.useRef(null),u=We.useRef(null),h=We.useRef(null),f=We.useRef([]),m=We.useRef(null),_=We.useRef([]),g=We.useRef([]),[x,M]=We.useState("loading");return We.useEffect(()=>{const b=a.current;if(!b)return;const y=new oS;y.background=new ut(1119256),y.fog=new Nf(724239,12,30);const S=new Gn(40,1,.1,100);S.position.set(7.2,4.8,8.4);const C=new cA({antialias:!0,alpha:!1,powerPreference:"high-performance"});C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.outputColorSpace=Tn,C.setClearColor(724239,1),C.domElement.className="three-d-asset-viewer__canvas",b.appendChild(C.domElement),o.current=C;const N=new jA(S,C.domElement);N.enableDamping=!0,N.dampingFactor=.08,N.enablePan=!0,N.minDistance=4.6,N.maxDistance=16,N.target.set(0,1.7,0),N.update();const w=new JS(16777215,2.2);y.add(w);const L=new Oc(16774114,3.6);L.position.set(5,8,6),y.add(L);const P=new Oc(9357803,1.8);P.position.set(-4,3,-5),y.add(P);const F=new Oc(15374729,1.1);F.position.set(-2,-1,4),y.add(F);const T=new hM(12,12,3686473,2304561);T.position.y=-1.14,y.add(T);const I=new mn(new Ff(3.8,40),new Zi({color:0,transparent:!0,opacity:.22}));I.rotation.x=-Math.PI/2,I.position.y=-.08,y.add(I);const k=new Li;y.add(k),c.current=k;const z=new Li;k.add(z),u.current=z;const j=new Li;j.renderOrder=1e3,k.add(j),h.current=j,f.current=[];const ae=new Li;ae.renderOrder=1e3,k.add(ae),m.current=ae,_.current=[];const pe=g.current;pe.length=0;const K=new dA;let oe=!1;K.load(i,Ee=>{if(oe){Ee.scene.traverse(ye=>{if(ye.isMesh){const Be=ye;Be.geometry.dispose();const st=Be.material;Array.isArray(st)?st.forEach(rt=>rt.dispose()):st.dispose()}});return}for(;k.children.length>0;)k.remove(k.children[0]);u.current&&k.add(u.current),h.current&&k.add(h.current),m.current&&k.add(m.current),g.current=[];const ve=Ee.scene,Q=new Ui().setFromObject(ve),_e=Q.getCenter(new W),ce=Q.getBoundingSphere(new Fi),Ye=2.75/Math.max(ce.radius,1);ve.position.sub(_e),ve.scale.setScalar(Ye);const Vt=new Ui().setFromObject(ve).getCenter(new W);ve.position.sub(Vt),ve.position.y-=.15,ve.rotation.y=-.9,ve.traverse(ye=>{if(ye.isMesh){const st=ye.material;Array.isArray(st)?st.forEach(rt=>{g.current.push(rt)}):g.current.push(st)}}),k.add(ve);let dt=!1,Pt=0,yt=0;if(u.current)for(;u.current.children.length>0;){const ye=u.current.children[0];u.current.remove(ye)}if(f.current.forEach(({marker:ye})=>{if(ye instanceof mn||ye instanceof Wo){ye.geometry.dispose();const Be=ye.material;Array.isArray(Be)?Be.forEach(st=>st.dispose()):Be&&Be.dispose()}}),f.current=[],h.current)for(;h.current.children.length>0;){const ye=h.current.children[0];h.current.remove(ye)}if(_.current.forEach(({geometry:ye,line:Be})=>{ye.dispose();const st=Be.material;Array.isArray(st)?st.forEach(rt=>rt.dispose()):st&&st.dispose()}),_.current=[],m.current)for(;m.current.children.length>0;){const ye=m.current.children[0];m.current.remove(ye)}ve.traverse(ye=>{var st;const Be=ye;if(Be.isSkinnedMesh&&Be.skeleton){Pt++;const rt=Be.skeleton.bones||[];yt+=rt.length;const Mt=new dM(Be);Mt.visible=e,Mt.frustumCulled=!1,Mt.renderOrder=999;const G=Mt.material;G.depthTest=!1,G.transparent=!0,G.opacity=1,G.color=new ut(65535),(st=u.current)==null||st.add(Mt);const sn=new Bf(.035,10,10);rt.forEach(Et=>{var ie,he;const U=new Zi({color:16740096,depthTest:!1,transparent:!0,opacity:.9}),E=new mn(sn.clone(),U);E.visible=e,E.renderOrder=1e3,(ie=h.current)==null||ie.add(E),f.current.push({bone:Et,marker:E});const $=Et.parent;if($&&$.isBone){const we=new Float32Array(6),Re=new bn;Re.setAttribute("position",new On(we,3));const fe=new qo({color:65535,depthTest:!1,transparent:!0,opacity:.65,linewidth:2}),me=new Go(Re,fe);me.renderOrder=1e3,me.visible=e,(he=m.current)==null||he.add(me),_.current.push({bone:Et,parent:$,geometry:Re,line:me,positions:we})}}),sn.dispose(),dt=!0}}),console.info("[3D Viewer] SkinnedMesh count:",Pt,"Bone count:",yt),dt||console.warn("[3D Viewer] No skeleton data detected in model:",i),t==null||t(dt),N.target.set(0,0,0),S.position.set(4.8,3.8,5.8),N.update(),M("ready")},void 0,()=>{if(oe)return;t==null||t(!1);const Ee=new Xo({color:15253644,roughness:.82,metalness:.04,flatShading:!0,wireframe:s});g.current=[Ee];const ve=new mn(new kf(1.2,1),Ee);ve.position.set(0,.2,0),k.add(ve),N.target.set(0,0,0),S.position.set(4.8,3.8,5.8),N.update(),M("error")});const Z=()=>{const{clientWidth:Ee,clientHeight:ve}=b;Ee===0||ve===0||(S.aspect=Ee/ve,S.updateProjectionMatrix(),C.setSize(Ee,ve,!1))},Y=new W,se=new W,le=new W,B=new ResizeObserver(Z);B.observe(b),Z();let J=0;const Fe=()=>{J=window.requestAnimationFrame(Fe),k.children.length>0&&(k.rotation.y+=.0022),N.update(),u.current&&u.current.children.forEach(ve=>{ve.update&&ve.update()});const Ee=c.current;Ee&&(f.current.length>0&&f.current.forEach(({bone:ve,marker:Q})=>{ve.getWorldPosition(le),Ee.worldToLocal(le),Q.position.copy(le)}),_.current.length>0&&_.current.forEach(({bone:ve,parent:Q,geometry:_e,positions:ce})=>{ve.getWorldPosition(Y),Q.getWorldPosition(se),Ee.worldToLocal(Y),Ee.worldToLocal(se),ce[0]=se.x,ce[1]=se.y,ce[2]=se.z,ce[3]=Y.x,ce[4]=Y.y,ce[5]=Y.z;const Ie=_e.getAttribute("position");Ie.needsUpdate=!0})),C.render(y,S)};return Fe(),()=>{oe=!0,window.cancelAnimationFrame(J),B.disconnect(),N.dispose(),C.dispose(),pe.forEach(Ee=>{Ee.dispose()}),u.current&&u.current.traverse(Ee=>{var ve,Q,_e,ce;Ee.geometry&&((Q=(ve=Ee.geometry).dispose)==null||Q.call(ve)),Ee.material&&((ce=(_e=Ee.material).dispose)==null||ce.call(_e))}),h.current&&h.current.traverse(Ee=>{if(Ee instanceof mn||Ee instanceof Wo){Ee.geometry.dispose();const ve=Ee.material;Array.isArray(ve)?ve.forEach(Q=>Q.dispose()):ve&&ve.dispose()}}),f.current=[],m.current&&m.current.traverse(Ee=>{if(Ee instanceof Go){Ee.geometry.dispose();const ve=Ee.material;Array.isArray(ve)?ve.forEach(Q=>Q.dispose()):ve&&ve.dispose()}}),_.current=[],y.traverse(Ee=>{Ee instanceof mn&&Ee.geometry.dispose()}),g.current=[],c.current=null,C.domElement.parentElement===b&&b.removeChild(C.domElement),o.current=null}},[]),We.useEffect(()=>{g.current.forEach(b=>{(b instanceof Xo||b instanceof Oi||b instanceof Zi)&&(b.wireframe=s,b.needsUpdate=!0)})},[s]),We.useEffect(()=>{const b=u.current,y=h.current,S=m.current;b&&(b.visible=e,b.children.forEach(C=>{C.visible=e})),y&&(y.visible=e,y.children.forEach(C=>{C.visible=e})),S&&(S.visible=e,S.children.forEach(C=>{C.visible=e}))},[e]),D.jsx("div",{ref:a,className:"three-d-asset-viewer","aria-label":"3D 캔버스",children:x!=="ready"?D.jsxs("div",{className:`three-d-asset-viewer__status${x==="error"?" is-error":""}`,children:[D.jsx("p",{className:"three-d-asset-viewer__status-title",children:x==="error"?"3D 예제를 불러오지 못했습니다":"3D 예제 로딩 중"}),D.jsx("p",{className:"three-d-asset-viewer__status-text",children:x==="error"?"대체 프리뷰를 표시 중입니다.":"모델을 준비하는 중입니다."})]}):null})}function a1({referenceImageSrc:s}){return D.jsxs("div",{className:"three-d-asset-info","aria-label":"3D 에셋 정보",children:[D.jsx("p",{className:"three-d-asset-info__title",children:"3D 에셋 정보"}),D.jsxs("dl",{className:"three-d-asset-info__list",children:[D.jsxs("div",{className:"three-d-asset-info__row three-d-asset-info__row--thumbnail",children:[D.jsx("dt",{children:"2D 이미지"}),D.jsx("dd",{children:D.jsx("img",{src:s,alt:"2D 이미지 썸네일",className:"three-d-asset-info__thumbnail"})})]}),D.jsxs("div",{className:"three-d-asset-info__row",children:[D.jsx("dt",{children:"폴리곤 수"}),D.jsx("dd",{children:"285,073"})]}),D.jsxs("div",{className:"three-d-asset-info__row",children:[D.jsx("dt",{children:"텍스처(PBR)"}),D.jsx("dd",{children:"지원"})]})]})]})}const o1=["GLB"];function l1({onAction:s}){const[e,t]=We.useState("GLB"),[i,a]=We.useState(!1),o=()=>a(!1),c=h=>{t(h),o(),s("format")},u=()=>{o(),s("download")};return D.jsxs("div",{className:"generated-image-actions three-d-asset-export","aria-label":"3D 에셋 추출",children:[D.jsx("p",{className:"generated-image-actions-title",children:"3D 에셋 추출"}),D.jsxs("div",{className:"generated-image-actions-controls",children:[D.jsxs("div",{className:"generated-image-control-group",children:[D.jsxs("button",{type:"button",className:`generated-image-control${i?" is-open":""}`,onClick:()=>a(h=>!h),children:[D.jsx("span",{children:e}),D.jsx("span",{className:"generated-image-control-chevron","aria-hidden":"true",children:"▾"})]}),i?D.jsx("div",{className:"generated-image-control-menu",role:"menu","aria-label":"3D 포맷 선택",children:o1.map(h=>D.jsx("button",{type:"button",className:`generated-image-control-menu-item${e===h?" is-selected":""}`,onClick:()=>c(h),children:h},h))}):null]}),D.jsx("button",{type:"button",className:"generated-image-download",onClick:u,"aria-label":"3D 에셋 다운로드",children:D.jsx("img",{src:"/assets/icons/download.svg",alt:"","aria-hidden":"true"})})]}),D.jsx("p",{className:"generated-image-actions-hint",children:"SIZE: 18.2MB"})]})}function c1({title:s,emptyLabel:e,onGenerateClick:t,isGenerateDisabled:i=!1,hasAsset:a,wireframe:o,onWireframeChange:c,skeleton:u,onSkeletonChange:h,referenceImageSrc:f,onAction:m,skeletonAvailable:_=!0,onSkeletonSupportChange:g,modelUrl:x}){const M="+ 변환하기",b=f!=="/assets/icons/result-empty.svg";return D.jsxs("section",{className:"result-panel result-panel--three-d",children:[D.jsxs("header",{className:"result-panel-header",children:[D.jsx("h2",{className:"result-panel-title",children:s}),D.jsx("div",{className:"result-panel-actions",children:D.jsx(Cs,{ariaLabel:`${s} 크게 보기`,icon:"expand",imageClassName:"icon-button__image--panel"})})]}),a?D.jsxs("div",{className:"result-panel-body result-panel-body--three-d",children:[D.jsxs("div",{className:"three-d-asset-stage",children:[D.jsx(s1,{wireframe:o,skeleton:u,onSkeletonSupportChange:g,modelUrl:x}),D.jsxs("div",{className:"three-d-asset-stage__wireframe",children:[D.jsx("span",{className:"three-d-asset-stage__wireframe-label",children:"Wireframe"}),D.jsx("button",{type:"button",className:`three-d-asset-stage__wireframe-switch${o?" is-on":""}`,"aria-label":"와이어프레임 전환","aria-pressed":o,onClick:()=>c(!o),children:D.jsx("span",{className:"three-d-asset-stage__wireframe-thumb","aria-hidden":"true"})})]}),D.jsxs("div",{className:"three-d-asset-stage__wireframe three-d-asset-stage__wireframe--secondary",children:[D.jsx("span",{className:"three-d-asset-stage__wireframe-label",children:"Skeleton"}),D.jsx("button",{type:"button",className:`three-d-asset-stage__wireframe-switch${u?" is-on":""}${_?"":" is-disabled"}`,"aria-label":"스켈레톤 전환","aria-pressed":u,onClick:()=>_&&h(!u),disabled:!_,title:_?void 0:"이 모델에는 스켈레톤이 없습니다",children:D.jsx("span",{className:"three-d-asset-stage__wireframe-thumb","aria-hidden":"true"})})]})]}),D.jsxs("div",{className:"three-d-asset-footer",children:[D.jsx(a1,{referenceImageSrc:f}),D.jsx(l1,{onAction:m})]})]}):D.jsx("div",{className:"result-panel-body",children:D.jsxs("div",{className:"empty-state",children:[D.jsx("img",{src:f,alt:"","aria-hidden":"true",className:b?"empty-visual empty-visual--three-d":"empty-mark empty-mark--three-d"}),D.jsx("p",{className:"empty-copy",children:e}),D.jsx("button",{type:"button",className:"empty-generate","aria-label":`${s} 생성하기`,onClick:t,disabled:i||!t,children:M})]})})]})}function u1({promptPrefix:s,prompt:e,onPromptChange:t,selectedCharacter:i,selectedCharacterLabel:a,isCharacterOpen:o,onCharacterToggle:c,onCharacterSelect:u,selectedStyle:h,onStyleSelect:f,onGenerate:m,canGenerate:_}){const g=We.useRef(null),x=We.useRef(null),[M,b]=We.useState(0),y=Ps.find(w=>w.value===i),S=i?"1/1":"0/1",C=h?"1/1":"0/1",N=s?`${s}
`:"";return We.useEffect(()=>{const w=x.current;if(!s||!w){b(0);return}const L=()=>{b(w.offsetHeight)};L();const P=new ResizeObserver(L);return P.observe(w),()=>{P.disconnect()}},[s]),We.useEffect(()=>{if(!s)return;const w=g.current;w&&window.requestAnimationFrame(()=>{w.focus({preventScroll:!0});const L=w.value.length;w.setSelectionRange(L,L),window.requestAnimationFrame(()=>{w.scrollTop=w.scrollHeight})})},[s]),D.jsxs("aside",{className:"sidebar",children:[D.jsxs("div",{className:"section-block",children:[D.jsxs("div",{className:"section-header",children:[D.jsxs("div",{className:"section-title-row",children:[D.jsx("img",{src:"/assets/icons/character-section.svg",alt:"","aria-hidden":"true",className:"section-title-icon"}),D.jsxs("h2",{className:"section-title",children:["캐릭터 ",D.jsx("span",{className:"section-asterisk",children:"*"})]})]}),D.jsx("span",{className:"section-count",children:S})]}),D.jsx(J_,{options:Ps,selectedValue:i,selectedLabel:a,defaultLabel:"생성 캐릭터 선택",selectedThumbnail:(y==null?void 0:y.thumbnail)??"",isOpen:o,onToggle:c,onSelect:u})]}),D.jsxs("div",{className:"section-block",children:[D.jsxs("div",{className:"section-header",children:[D.jsxs("div",{className:"section-title-row",children:[D.jsx("img",{src:"/assets/icons/style-section.svg",alt:"","aria-hidden":"true",className:"section-title-icon"}),D.jsxs("h2",{className:"section-title",children:["스타일 ",D.jsx("span",{className:"section-asterisk",children:"*"})]})]}),D.jsx("span",{className:"section-count",children:C})]}),D.jsx(Q_,{options:Io,selectedValue:h,onSelect:f})]}),D.jsxs("div",{className:"sidebar-prompt-actions",children:[D.jsxs("div",{className:"section-block section-block--prompt",children:[D.jsxs("div",{className:"section-header compact section-header--with-hint",children:[D.jsxs("div",{className:"section-title-row",children:[D.jsx("img",{src:"/assets/icons/prompt-section.svg",alt:"","aria-hidden":"true",className:"section-title-icon"}),D.jsx("h2",{className:"section-title",children:"프롬프트"})]}),D.jsx("span",{className:"section-hint",children:"선택한 캐릭터, 스타일의 프롬프트는 자동 입력됩니다."})]}),D.jsx("div",{className:"prompt-card prompt-card--editor",children:s?D.jsxs("div",{className:"prompt-card__overlay-shell",children:[D.jsx("div",{ref:x,className:"prompt-card__overlay-text",children:N}),D.jsx("textarea",{ref:g,value:e,onChange:w=>t(w.target.value),onFocus:w=>{const L=w.currentTarget;window.requestAnimationFrame(()=>{const P=L.value.length;L.setSelectionRange(P,P),L.scrollTop=L.scrollHeight})},className:"prompt-input prompt-input--prefix",style:{fontSize:"14px",lineHeight:1.6,paddingTop:`${Math.max(M+24,52)}px`},placeholder:"추가로 강조하고 싶은 내용을 입력하세요."})]}):D.jsx("textarea",{ref:g,value:e,onChange:w=>t(w.target.value),className:"prompt-input",style:{fontSize:"14px",lineHeight:1.6},placeholder:"생성할 이미지에 상세한 특징을 입력하세요."})})]}),D.jsxs("button",{type:"button",className:"generate-cta",onClick:m,disabled:!_,children:[D.jsx("img",{src:"/assets/icons/generate.svg",alt:"","aria-hidden":"true",className:"generate-cta-icon"}),"생성하기"]})]})]})}function d1({title:s,emptyLabel:e,onGenerateClick:t,isGenerateDisabled:i=!1,emptyVisualSrc:a,emptyVisualAlt:o=""}){const c=s==="3D 에셋"?"+ 변환하기":"+ 생성하기";return D.jsxs("section",{className:"result-panel",children:[D.jsxs("header",{className:"result-panel-header",children:[D.jsx("h2",{className:"result-panel-title",children:s}),D.jsx("div",{className:"result-panel-actions",children:D.jsx(Cs,{ariaLabel:`${s} 크게 보기`,icon:"expand",imageClassName:"icon-button__image--panel"})})]}),D.jsx("div",{className:"result-panel-body",children:D.jsxs("div",{className:"empty-state",children:[a?D.jsx("img",{src:a,alt:o,"aria-hidden":"true",className:"empty-visual"}):D.jsx("img",{src:"/assets/icons/result-empty.svg",alt:"","aria-hidden":"true",className:"empty-mark"}),D.jsx("p",{className:"empty-copy",children:e}),D.jsx("button",{type:"button",className:"empty-generate","aria-label":`${s} 생성하기`,onClick:t,disabled:i||!t,children:c})]})})]})}const X0="/assets/generated/2d-completed.jpg",h1="/assets/generated/2d-completed-remove.jpg",f1="/assets/generated/2d-completed-3dstyle.jpg",p1="/assets/generated/2d-completed-3dstyle-acc.jpg",m1="/assets/generated/:Users:dawoonkim:Desktop:botari:public:assets:generated:2d-completed-3dstyle.jpg-t.jpg",g1=s=>s==="background-off"?h1:s==="pose"?m1:s==="edit"?f1:s==="edit-prompt"?p1:X0;function _1(){const[s,e]=We.useState(""),[t,i]=We.useState(""),[a,o]=We.useState(""),[c,u]=We.useState(!1),[h,f]=We.useState(""),[m,_]=We.useState("idle"),[g,x]=We.useState(null),[M,b]=We.useState([]),[y,S]=We.useState(null),[C,N]=We.useState(!1),[w,L]=We.useState(!1),[P,F]=We.useState(!1),[T,I]=We.useState("idle"),[k,z]=We.useState(!0),j=We.useRef(null),ae=We.useRef(null),pe=We.useRef(1),K=ye=>[{label:"캐릭터",value:ye.character||"-"},{label:"스타일",value:ye.style||"-"},{label:"프롬프트",value:ye.prompt||"-"}],oe=(ye,Be)=>{const st=g1(Be),rt={id:pe.current++,title:"2D 이미지",kind:"2D 이미지",thumbnail:st,imageSrc:st,prompt:ye.prompt,createdAt:Date.now(),metadataItems:K(ye),variant:Be};b(Mt=>[rt,...Mt]),S(rt.id),_("generated"),x({imageSrc:rt.imageSrc,prompt:rt.prompt,metadataItems:rt.metadataItems})},Z=We.useMemo(()=>{var ye;return((ye=Ps.find(Be=>Be.value===t))==null?void 0:ye.label)??""},[t]),Y=We.useMemo(()=>{var ye;return((ye=Ps.find(Be=>Be.value===t))==null?void 0:ye.promptTemplate)??""},[t]),se=We.useMemo(()=>{var ye;return((ye=Io.find(Be=>Be.id===a))==null?void 0:ye.promptTemplate)??""},[a]),le=We.useMemo(()=>[Y,se].filter(Boolean).join(`
`),[Y,se]),B=(ye,Be)=>[ye.trim(),Be.trim()].filter(Boolean).join(`
`),J=()=>{var rt;j.current&&window.clearTimeout(j.current);const ye=((rt=Io.find(Mt=>Mt.id===a))==null?void 0:rt.label)??"-",Be=B(le,s),st={imageSrc:X0,prompt:Be,metadataItems:K({character:Z||"-",style:ye,prompt:Be||"-"})};_("loading"),x(st),f("이미지 생성 중입니다. 잠시만 기다려 주세요."),j.current=window.setTimeout(()=>{oe({character:Z||"-",style:ye,prompt:Be},"base"),f(`임시 생성 이벤트가 실행되었습니다. 프롬프트: ${Be}`)},8e3)},Fe=()=>{if(!t){u(!0),f("캐릭터를 먼저 선택해 주세요.");return}if(!a){f("스타일을 선택해 주세요.");return}J()},Ee=()=>{ae.current&&window.clearTimeout(ae.current),I("loading"),f("3D 에셋으로 변환 중입니다. 잠시만 기다려 주세요."),ae.current=window.setTimeout(()=>{b(ye=>{const Be={id:pe.current++,title:"3D 에셋",kind:"3D 에셋",thumbnail:"/assets/styles/character3d.svg",imageSrc:"/assets/styles/character3d.svg",prompt:"3D 에셋 히스토리",createdAt:Date.now(),metadataItems:[{label:"유형",value:"3D 에셋"},{label:"상태",value:"변환 완료"},{label:"프롬프트",value:"3D 에셋 히스토리"}],variant:"3d"};return S(Be.id),I("generated"),f("3D 에셋이 히스토리에 추가되었습니다."),[Be,...ye]})},8e3)},ve=M.find(ye=>ye.id===y)??null,Q=M.find(ye=>ye.kind==="2D 이미지")??null,_e=(ve==null?void 0:ve.kind)==="2D 이미지"?ve:null,ce=(ve==null?void 0:ve.kind)==="3D 에셋"?_e??Q:ve,Ie=ce?{imageSrc:ce.imageSrc,prompt:ce.prompt,metadataItems:ce.metadataItems}:g,Ye=m==="loading"?null:_e??Q,nt=!!Q&&m!=="loading"&&T!=="loading",Vt=(ve==null?void 0:ve.kind)==="3D 에셋";We.useMemo(()=>{const ye=[...M].sort((st,rt)=>rt.createdAt-st.createdAt),Be=new Map;return ye.forEach(st=>{const rt=new Date(st.createdAt),Mt=`${rt.getFullYear()}.${String(rt.getMonth()+1).padStart(2,"0")}.${String(rt.getDate()).padStart(2,"0")}`,G=Be.get(Mt)??[];G.push(st),Be.set(Mt,G)}),Array.from(Be.entries()).map(([st,rt])=>({dateLabel:st,items:rt}))},[M]);const dt=()=>{N(ye=>!ye)},Pt=ye=>{S(ye),N(!1),f("선택한 히스토리 이미지로 이동했습니다.")},yt=(ye,Be)=>{oe({...Be},ye?"background-on":"background-off"),f(`배경요소를 ${ye?"ON":"OFF"} 상태로 다시 생성했습니다.`)},St=ye=>{oe({...ye},"pose"),f("포즈 이미지를 새로 생성했습니다.")},Xt=(ye,Be)=>{var Et,U;const st=ye.character&&((Et=Ps.find(E=>E.value===ye.character))==null?void 0:Et.label)||Be.character,rt=ye.style&&((U=Io.find(E=>E.id===ye.style))==null?void 0:U.label)||Be.style,Mt=ye.prompt||Be.prompt,sn=!!(ye.prompt&&ye.prompt.trim()&&ye.prompt!==Be.prompt)?"edit-prompt":"edit";oe({character:st,style:rt,prompt:Mt,backgroundEnabled:Be.backgroundEnabled,poseLabel:Be.poseLabel},sn),f("2차 편집이 적용되었습니다.")};return We.useEffect(()=>()=>{j.current&&window.clearTimeout(j.current),ae.current&&window.clearTimeout(ae.current)},[]),D.jsxs("div",{className:"app-shell",children:[D.jsx(Z_,{}),D.jsxs("main",{className:"app-main",children:[D.jsx(u1,{promptPrefix:le,prompt:s,onPromptChange:e,selectedCharacter:t,selectedCharacterLabel:Z,isCharacterOpen:c,onCharacterToggle:()=>u(ye=>!ye),onCharacterSelect:ye=>{i(ye),u(!1)},selectedStyle:a,onStyleSelect:o,onGenerate:J,canGenerate:!!(t&&a)}),D.jsx("section",{className:"workspace","aria-label":"이미지 생성 결과 영역",children:C?D.jsx(jx,{items:M,selectedHistoryId:y,onClose:dt,onSelectItem:Pt,isOpen:C}):D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"workspace-grid",children:[m==="loading"?D.jsx(Sg,{title:"2D 이미지"}):Ie?D.jsx(Wx,{title:(ce==null?void 0:ce.kind)??"2D 이미지",imageSrc:Ie.imageSrc,prompt:Ie.prompt,metadataItems:Ie.metadataItems,onAction:ye=>{f(`임시 ${ye} 이벤트가 실행되었습니다.`)},onApplyEdit:Xt,onGeneratePose:St,onToggleBackgroundElements:yt,allowSecondaryEdit:!!ce,isPoseApplied:(ce==null?void 0:ce.variant)==="pose",initialBackgroundElementsEnabled:(ce==null?void 0:ce.variant)!=="background-off"}):D.jsx(d1,{title:"2D 이미지",emptyLabel:"생성된 2D 이미지가 없습니다.",onGenerateClick:Fe}),T==="loading"?D.jsx(Sg,{title:"3D 에셋"}):D.jsx(c1,{title:"3D 에셋",emptyLabel:Ye?`생성된 이미지를
3D 에셋으로 변환 가능합니다.`:"변환된 3D 에셋이 없습니다.",hasAsset:Vt,onGenerateClick:Ee,isGenerateDisabled:!nt,wireframe:w,onWireframeChange:L,skeleton:P,onSkeletonChange:F,skeletonAvailable:k,onSkeletonSupportChange:z,modelUrl:"/assets/generated/duck-example.glb",referenceImageSrc:(Ye==null?void 0:Ye.imageSrc)??"/assets/icons/result-empty.svg",onAction:ye=>{f(`임시 3D ${ye} 이벤트가 실행되었습니다.`)}})]}),D.jsxs("div",{className:"history-bar","aria-label":"생성 히스토리",children:[D.jsxs("button",{type:"button",className:"history-button","aria-label":"히스토리 열기",onClick:dt,"aria-expanded":C,children:[D.jsx("img",{src:"/assets/icons/history.svg",alt:"","aria-hidden":"true",className:"history-icon"}),"히스토리"]}),M.length>0?D.jsx("div",{className:"history-list",children:M.map(ye=>D.jsx("button",{type:"button",className:`history-item${y===ye.id?" is-selected":""}`,onClick:()=>{S(ye.id),f(`${ye.kind} 히스토리를 선택했습니다.`)},"aria-label":`${ye.kind} 선택`,children:D.jsx("img",{src:ye.thumbnail,alt:"","aria-hidden":"true",className:`history-thumb history-thumb--${ye.variant}`})},ye.id))}):null,D.jsx("button",{type:"button",className:"scroll-top-button","aria-label":"상단으로 이동",onClick:dt,"aria-expanded":C,children:D.jsx("img",{src:"/assets/icons/chevron-up-double.svg",alt:"","aria-hidden":"true",className:"scroll-top-icon"})})]})]})})]})]})}function v1(){const[s,e]=We.useState([]);We.useEffect(()=>{let i=!0;return fetch("/assets/slide/manifest.json").then(a=>a.json()).then(a=>{i&&e(a.map(o=>`/assets/slide/${o}`))}).catch(()=>{}),()=>{i=!1}},[]);const t=We.useMemo(()=>s.concat(s),[s]);return s.length?D.jsx("div",{className:"slider-shell","aria-label":"작품 미리보기 슬라이드",children:D.jsx("div",{className:"slider-track",children:t.map((i,a)=>D.jsx("div",{className:"slider-item",children:D.jsx("img",{className:"slider-image",src:i,alt:"","aria-hidden":"true"})},`${i}-${a}`))})}):null}function x1(){return D.jsxs("div",{className:"app-shell",children:[D.jsx(Z_,{}),D.jsx("main",{className:"landing-main",children:D.jsxs("section",{className:"landing-hero","aria-label":"보따리 소개",children:[D.jsxs("div",{className:"landing-headline","aria-label":"타이틀",children:[D.jsxs("h1",{className:"landing-title",children:[D.jsx("span",{className:"landing-title-line landing-title-strong",children:"한국의 아름다움을 그려내다"}),D.jsx("span",{className:"landing-title-line landing-title-light",children:"한국 전통민화 이미지 생성 AI"})]}),D.jsxs("div",{className:"landing-subtitle","aria-label":"라이브 안내",children:[D.jsx("span",{className:"live-indicator","aria-hidden":"true",children:D.jsx("span",{className:"live-dot"})}),D.jsx("span",{className:"live-text",children:"사용자들이 실시간을 생산한 이미지 입니다."})]})]}),D.jsx("div",{className:"landing-slider",children:D.jsx(v1,{})})]})})]})}Dx.createRoot(document.getElementById("root")).render(D.jsx(Ax.StrictMode,{children:window.location.pathname==="/home"?D.jsx(x1,{}):D.jsx(_1,{})}));
