"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[44],{6355:function(t,e,n){n.d(e,{t3v:function(){return r}});var o=n(9983);function r(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"}}]})(t)}},3853:function(t,e,n){n.d(e,{bTu:function(){return r},rH8:function(){return a}});var o=n(9983);function r(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(t)}function a(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(t)}},8617:function(t,e,n){n.d(e,{dOX:function(){return r},wkn:function(){return a}});var o=n(9983);function r(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"}}]})(t)}function a(t){return(0,o.w_)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}}]})(t)}},8174:function(t,e,n){n.d(e,{Am:function(){return j}});var o=n(4942),r=n(9439),a=n(1413);function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=n(3433),c=n(2791);function u(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=u(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var l=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=u(t))&&(o&&(o+=" "),o+=e);return o},d=["theme","type"],f=["delay","staleId"],p=function(t){return"number"==typeof t&&!isNaN(t)},m=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},g=function(t){return m(t)||v(t)?t:null},h=function(t){return(0,c.isValidElement)(t)||m(t)||v(t)||p(t)};function y(t){var e=t.enter,n=t.exit,o=t.appendPosition,r=void 0!==o&&o,a=t.collapse,i=void 0===a||a,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,a=t.position,u=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,m=r?"".concat(e,"--").concat(a):e,v=r?"".concat(n,"--").concat(a):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=f.current,n=m.split(" "),o=function t(o){var r;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,s.Z)(n)))};(t=e.classList).add.apply(t,(0,s.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,d,l):d()};p||(u?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),c.createElement(c.Fragment,null,o)}}function T(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var E={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(r)}))}},b=function(t){var e=t.theme,n=t.type,o=i(t,d);return c.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(b,(0,a.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function _(t){var e=(0,c.useReducer)((function(t){return t+1}),0),n=(0,r.Z)(e,2)[1],o=(0,c.useState)([]),u=(0,r.Z)(o,2),l=u[0],d=u[1],y=(0,c.useRef)(null),b=(0,c.useRef)(new Map).current,_=function(t){return-1!==l.indexOf(t)},I=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:_,getToast:function(t){return b.get(t)}}).current;function L(t){var e=t.containerId;!I.props.limit||e&&I.containerId!==e||(I.count-=I.queue.length,I.queue=[])}function O(t){d((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function Z(){var t=I.queue.shift();k(t.toastContent,t.toastProps,t.staleId)}function w(t,e){var o=e.delay,s=e.staleId,u=i(e,f);if(h(t)&&!function(t){return!y.current||I.props.enableMultiContainer&&t.containerId!==I.props.containerId||b.has(t.toastId)&&null==t.updateId}(u)){var l=u.toastId,d=u.updateId,_=u.data,L=I.props,w=function(){return O(l)},R=null==d;R&&I.count++;var N,x,M=(0,a.Z)((0,a.Z)((0,a.Z)({},L),{},{style:L.toastStyle,key:I.toastKey++},Object.fromEntries(Object.entries(u).filter((function(t){var e=(0,r.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:l,updateId:d,data:_,closeToast:w,isIn:!1,className:g(u.className||L.toastClassName),bodyClassName:g(u.bodyClassName||L.bodyClassName),progressClassName:g(u.progressClassName||L.progressClassName),autoClose:!u.isLoading&&(N=u.autoClose,x=L.autoClose,!1===N||p(N)&&N>0?N:x),deleteToast:function(){var t=T(b.get(l),"removed");b.delete(l),E.emit(4,t);var e=I.queue.length;if(I.count=null==l?I.count-I.displayedToast:I.count-1,I.count<0&&(I.count=0),e>0){var o=null==l?I.props.limit:1;if(1===e||1===o)I.displayedToast++,Z();else{var r=o>e?e:o;I.displayedToast=r;for(var a=0;a<r;a++)Z()}}else n()}});M.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,r=t.icon,a=null,i={theme:e,type:n};return!1===r||(v(r)?a=r(i):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,i):m(r)||p(r)?a=r:o?a=C.spinner():function(t){return t in C}(n)&&(a=C[n](i))),a}(M),v(u.onOpen)&&(M.onOpen=u.onOpen),v(u.onClose)&&(M.onClose=u.onClose),M.closeButton=L.closeButton,!1===u.closeButton||h(u.closeButton)?M.closeButton=u.closeButton:!0===u.closeButton&&(M.closeButton=!h(L.closeButton)||L.closeButton);var B=t;(0,c.isValidElement)(t)&&!m(t.type)?B=(0,c.cloneElement)(t,{closeToast:w,toastProps:M,data:_}):v(t)&&(B=t({closeToast:w,toastProps:M,data:_})),L.limit&&L.limit>0&&I.count>L.limit&&R?I.queue.push({toastContent:B,toastProps:M,staleId:s}):p(o)?setTimeout((function(){k(B,M,s)}),o):k(B,M,s)}}function k(t,e,n){var o=e.toastId;n&&b.delete(n);var r={content:t,props:e};b.set(o,r),d((function(t){return[].concat((0,s.Z)(t),[o]).filter((function(t){return t!==n}))})),E.emit(4,T(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return I.containerId=t.containerId,E.cancelEmit(3).on(0,w).on(1,(function(t){return y.current&&O(t)})).on(5,L).emit(2,I),function(){b.clear(),E.emit(3,I)}}),[]),(0,c.useEffect)((function(){I.props=t,I.isToastActive=_,I.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(b.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:y,isToastActive:_}}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function L(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function O(t){var e=(0,c.useState)(!1),n=(0,r.Z)(e,2),o=n[0],a=n[1],i=(0,c.useState)(!1),s=(0,r.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(t),m=t.autoClose,g=t.pauseOnHover,h=t.closeToast,y=t.onClick,T=t.closeOnClick;function E(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",Z),document.addEventListener("touchmove",O),document.addEventListener("touchend",Z);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=I(e.nativeEvent),f.y=L(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?_():C()}}function C(){a(!0)}function _(){a(!1)}function O(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=I(e),f.y=L(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function Z(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",Z),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",Z);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,c.useEffect)((function(){p.current=t})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),v(t.onOpen)&&t.onOpen((0,c.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;v(t.onClose)&&t.onClose((0,c.isValidElement)(t.children)&&t.children.props)}}),[]),(0,c.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",C),window.addEventListener("blur",_)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",_))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&g&&(w.onMouseEnter=_,w.onMouseLeave=C),T&&(w.onClick=function(t){y&&y(t),f.canCloseOnClick&&h()}),{playToast:C,pauseToast:_,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:w}}function Z(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(t){var e=t.delay,n=t.isRunning,r=t.closeToast,i=t.type,s=void 0===i?"default":i,u=t.hide,d=t.className,f=t.style,p=t.controlledProgress,m=t.progress,g=t.rtl,h=t.isIn,y=t.theme,T=u||p&&0===m,E=(0,a.Z)((0,a.Z)({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:T?0:1});p&&(E.transform="scaleX(".concat(m,")"));var b=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":g}),C=v(d)?d({rtl:g,type:s,defaultClassName:b}):l(b,d);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:C,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){h&&r()}))}var k=function(t){var e=O(t),n=e.isRunning,o=e.preventExitTransition,r=e.toastRef,i=e.eventHandlers,s=t.closeButton,u=t.children,d=t.autoClose,f=t.onClick,p=t.type,m=t.hideProgressBar,g=t.closeToast,h=t.transition,y=t.position,T=t.className,E=t.style,b=t.bodyClassName,C=t.bodyStyle,_=t.progressClassName,I=t.progressStyle,L=t.updateId,k=t.role,R=t.progress,N=t.rtl,x=t.toastId,M=t.deleteToast,B=t.isIn,P=t.isLoading,z=t.iconOut,A=t.closeOnClick,D=t.theme,S=l("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":A}),F=v(T)?T({rtl:N,position:y,type:p,defaultClassName:S}):l(S,T),H=!!R||!d,j={closeToast:g,type:p,theme:D},q=null;return!1===s||(q=v(s)?s(j):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,j):Z(j)),c.createElement(h,{isIn:B,done:M,position:y,preventExitTransition:o,nodeRef:r},c.createElement("div",(0,a.Z)((0,a.Z)({id:x,onClick:f,className:F},i),{},{style:E,ref:r}),c.createElement("div",(0,a.Z)((0,a.Z)({},B&&{role:k}),{},{className:v(b)?b({type:p}):l("Toastify__toast-body",b),style:C}),null!=z&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},z),c.createElement("div",null,u)),q,c.createElement(w,(0,a.Z)((0,a.Z)({},L&&!H?{key:"pb-".concat(L)}:{}),{},{rtl:N,theme:D,delay:d,isRunning:n,isIn:B,closeToast:g,hide:m,type:p,style:I,className:_,controlledProgress:H,progress:R||0}))))},R=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},N=y(R("bounce",!0)),x=(y(R("slide",!0)),y(R("zoom")),y(R("flip")),(0,c.forwardRef)((function(t,e){var n=_(t),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=t.className,u=t.style,d=t.rtl,f=t.containerId;function p(t){var e=l("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":d});return v(s)?s({position:t,rtl:d,defaultClassName:e}):l(e,g(s))}return(0,c.useEffect)((function(){e&&(e.current=r.current)}),[]),c.createElement("div",{ref:r,className:"Toastify",id:f},o((function(t,e){var n=e.length?(0,a.Z)({},u):(0,a.Z)((0,a.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:p(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,r=t.props;return c.createElement(k,(0,a.Z)((0,a.Z)({},r),{},{isIn:i(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(r.key)}),o)})))})))})));x.displayName="ToastContainer",x.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:Z,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,B=new Map,P=[],z=1;function A(){return""+z++}function D(t){return t&&(m(t.toastId)||p(t.toastId))?t.toastId:A()}function S(t,e){return B.size>0?E.emit(0,t,e):P.push({content:t,options:e}),e.toastId}function F(t,e){return(0,a.Z)((0,a.Z)({},e),{},{type:e&&e.type||t,toastId:D(e)})}function H(t){return function(e,n){return S(e,F(t,n))}}function j(t,e){return S(t,F("default",e))}j.loading=function(t,e){return S(t,F("default",(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},j.promise=function(t,e,n){var o,r=e.pending,i=e.error,s=e.success;r&&(o=m(r)?j.loading(r,n):j.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(t,e,r){if(null!=e){var i=(0,a.Z)((0,a.Z)((0,a.Z)({type:t},c),n),{},{data:r}),s=m(e)?{render:e}:e;return o?j.update(o,(0,a.Z)((0,a.Z)({},i),s)):j(s.render,(0,a.Z)((0,a.Z)({},i),s)),r}j.dismiss(o)},l=v(t)?t():t;return l.then((function(t){return u("success",s,t)})).catch((function(t){return u("error",i,t)})),l},j.success=H("success"),j.info=H("info"),j.error=H("error"),j.warning=H("warning"),j.warn=j.warning,j.dark=function(t,e){return S(t,F("default",(0,a.Z)({theme:"dark"},e)))},j.dismiss=function(t){B.size>0?E.emit(1,t):P=P.filter((function(e){return null!=t&&e.options.toastId!==t}))},j.clearWaitingQueue=function(t){return void 0===t&&(t={}),E.emit(5,t)},j.isActive=function(t){var e=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},j.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=B.get(n||M);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,r=n.content,i=(0,a.Z)((0,a.Z)((0,a.Z)({delay:100},o),e),{},{toastId:e.toastId||t,updateId:A()});i.toastId!==t&&(i.staleId=t);var s=i.render||r;delete i.render,S(s,i)}}),0)},j.done=function(t){j.update(t,{progress:1})},j.onChange=function(t){return E.on(4,t),function(){E.off(4,t)}},j.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},j.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(t){M=t.containerId||t,B.set(M,t),P.forEach((function(t){E.emit(0,t.content,t.options)})),P=[]})).on(3,(function(t){B.delete(t.containerId||t),0===B.size&&E.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=44.4d23f97f.chunk.js.map