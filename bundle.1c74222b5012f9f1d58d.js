"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[223],{67:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(6540);const r=t=>{let{title:e,subTitle:n}=t;return a.createElement("div",{"data-aos":"fade-up","data-aos-anchor-placement":"center-center","data-aos-delay":"300",className:"section-title"},e," ",n)}},4856:(t,e,n)=>{var a=n(6540),r=n(6991);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){var a,r,i;a=t,r=e,i=n[e],(r=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(r))in a?Object.defineProperty(a,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[r]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function d(t){var e=a.useRef(t);return c((function(){e.current=t})),a.useCallback((function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.current.apply(void 0,n)}),[])}var f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},h=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==(e=t,n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,r,i,s,o=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=i.call(n)).done)&&(o.push(a.value),o.length!==e);l=!0);}catch(t){u=!0,r=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}(e,n)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1];var e,n}))),n=a.useMemo((function(){return s(s({},p),e)}),[t]),i=n.ref,o=n.startOnMount,c=n.enableReinitialize,h=n.delay,m=n.onEnd,g=n.onStart,v=n.onPauseResume,y=n.onReset,E=n.onUpdate,b=l(n,f),V=a.useRef(),w=a.useRef(),O=a.useRef(!1),S=d((function(){return function(t,e){var n=e.decimal,a=e.decimals,i=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,d=e.separator,f=e.start,p=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,v=e.enableScrollSpy,y=e.scrollSpyDelay,E=e.scrollSpyOnce,b=e.plugin;return new r.CountUp(t,o,{startVal:f,duration:i,decimal:n,decimalPlaces:a,easingFn:s,formattingFn:l,numerals:u,separator:d,prefix:c,suffix:p,plugin:b,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:v,scrollSpyDelay:y,scrollSpyOnce:E})}("string"==typeof i?i:i.current,b)})),N=d((function(t){var e=V.current;if(e&&!t)return e;var n=S();return V.current=n,n})),x=d((function(){var t=function(){return N(!0).start((function(){null==m||m({pauseResume:F,reset:A,start:P,update:j})}))};h&&h>0?w.current=setTimeout(t,1e3*h):t(),null==g||g({pauseResume:F,reset:A,update:j})})),F=d((function(){N().pauseResume(),null==v||v({reset:A,start:P,update:j})})),A=d((function(){N().el&&(w.current&&clearTimeout(w.current),N().reset(),null==y||y({pauseResume:F,start:P,update:j}))})),j=d((function(t){N().update(t),null==E||E({pauseResume:F,reset:A,start:P})})),P=d((function(){A(),x()})),R=d((function(t){o&&(t&&A(),x())}));return a.useEffect((function(){O.current?c&&R(!0):(O.current=!0,R())}),[c,O,R,h,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),a.useEffect((function(){return function(){A()}}),[A]),{start:P,pauseResume:F,reset:A,update:j,getCountUp:N}},m=["className","redraw","containerProps","children","style"];e.Ay=function(t){var e=t.className,n=t.redraw,r=t.containerProps,i=t.children,u=t.style,c=l(t,m),f=a.useRef(null),p=a.useRef(!1),g=h(s(s({},c),{},{ref:f,startOnMount:"function"!=typeof i||0===t.delay,enableReinitialize:!1})),v=g.start,y=g.reset,E=g.update,b=g.pauseResume,V=g.getCountUp,w=d((function(){v()})),O=d((function(e){t.preserveValue||y(),E(e)})),S=d((function(){"function"!=typeof t.children||f.current instanceof Element?V():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));a.useEffect((function(){S()}),[S]),a.useEffect((function(){p.current&&O(t.end)}),[t.end,O]);var N=n&&t;return a.useEffect((function(){n&&p.current&&w()}),[w,n,N]),a.useEffect((function(){!n&&p.current&&w()}),[w,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),a.useEffect((function(){p.current=!0}),[]),"function"==typeof i?i({countUpRef:f,start:v,reset:y,update:E,pauseResume:b,getCountUp:V}):a.createElement("span",o({className:e,ref:f,style:u},r),void 0!==t.start?V().formattingFn(t.start):"")}},6991:(t,e,n)=>{n.r(e),n.d(e,{CountUp:()=>r});var a=function(){return a=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},a.apply(this,arguments)},r=function(){function t(t,e,n){var r=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var n=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=n?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,a,i,s=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],a=o.length>1?r.options.decimal+o[1]:"",r.options.useGrouping){i="";for(var l=3,u=0,c=0,d=n.length;c<d;++c)r.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(i=r.options.separator+i),u++,i=n[d-c-1]+i;n=i}return r.options.numerals&&r.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]})),a=a.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]}))),s+r.options.prefix+n+a+r.options.suffix},this.easeOutExpo=function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e},this.options=a(a({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),a=n.top+window.pageYOffset,r=n.top+n.height+window.pageYOffset;r<e&&r>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>r||a>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},9223:(t,e,n)=>{n.r(e),n.d(e,{default:()=>o});var a=n(6540),r=n(3813),i=n(4856),s=n(67);const o=()=>{const[t,e]=(0,a.useState)([!1,!1,!1,!1]),n=(n,a)=>{const r=JSON.parse(JSON.stringify(t));r[n]=a,e(r)};return a.createElement("div",{className:"w-full"},a.createElement(s.A,{title:"Our",subTitle:"Insights"}),a.createElement("div",{className:"insights-cards"},a.createElement("div",{"data-aos":"fade-up-right","data-aos-duration":"1000",className:"insights-card-inner insights-c-1 text-white",onMouseEnter:()=>n(0,!0),onMouseLeave:()=>n(0,!1)},a.createElement("div",{className:"insights-card-front"},a.createElement("img",{src:r,alt:"Logo"}),a.createElement("div",{className:"insights-card-content"},"Happy Clients")),a.createElement("div",{className:"insights-card-back"},a.createElement("div",{className:"insights-card-text"},t[0]?a.createElement(i.Ay,{start:0,end:50,separator:" ",suffix:"+",duration:2}):null))),a.createElement("div",{"data-aos":"fade-up-left","data-aos-duration":"1000",className:"insights-card-inner insights-c-2 text-white hover:text-black",onMouseEnter:()=>n(1,!0),onMouseLeave:()=>n(1,!1)},a.createElement("div",{className:"insights-card-front"},a.createElement("img",{src:r,alt:"Logo"}),a.createElement("div",{className:"insights-card-content"},"Projects Completed")),a.createElement("div",{className:"insights-card-back"},a.createElement("div",{className:"insights-card-text"},t[1]?a.createElement(i.Ay,{start:0,end:100,separator:" ",suffix:"+",duration:2}):null))),a.createElement("div",{"data-aos":"fade-up-right","data-aos-duration":"1000",className:"insights-card-inner insights-c-3 text-white hover:text-black",onMouseEnter:()=>n(2,!0),onMouseLeave:()=>n(2,!1)},a.createElement("div",{className:"insights-card-front"},a.createElement("img",{src:r,alt:"Logo"}),a.createElement("div",{className:"insights-card-content"},"Acheivments")),a.createElement("div",{className:"insights-card-back"},a.createElement("div",{className:"insights-card-text"},t[2]?a.createElement(i.Ay,{start:0,end:10,separator:" ",suffix:"+",duration:2}):null))),a.createElement("div",{"data-aos":"fade-up-left","data-aos-duration":"1000",className:"insights-card-inner insights-c-4 text-white",onMouseEnter:()=>n(3,!0),onMouseLeave:()=>n(3,!1)},a.createElement("div",{className:"insights-card-front"},a.createElement("img",{src:r,alt:"Logo"}),a.createElement("div",{className:"insights-card-content"},"Year's of Experience")),a.createElement("div",{className:"insights-card-back "},a.createElement("div",{className:"insights-card-text"},t[3]?a.createElement(i.Ay,{start:0,end:8,separator:" ",suffix:"+",duration:2}):null)))))}}}]);