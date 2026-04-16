import{t as e}from"./clsx-1dnHRn8W.js";import{t}from"./plugin-BjE24yoW.js";import{n,t as r}from"./A767CXXU-CI1kdF0J.js";import{n as i}from"./BNGI36V3-ByEmc4oS.js";import{A as a,C as o,D as s,E as c,F as l,I as u,L as d,M as f,N as p,O as m,P as h,R as g,S as _,T as v,_ as y,a as b,d as x,f as S,i as C,k as w,l as T,m as E,n as D,o as O,p as k,r as A,s as j,t as M,u as N,w as P,x as ee,y as F}from"./web-DLJX7gCi.js";import{t as te}from"./store-CP-YqTJG.js";import{a as ne,i as re,o as ie,s as I,t as ae}from"./AP5L3KAF-Y6RquXWo.js";import{D as oe,E as se,S as ce,T as L,_ as le,a as ue,b as de,d as fe,f as pe,g as me,h as he,i as ge,l as _e,m as ve,n as ye,p as be,r as xe,t as Se,u as Ce,v as we,w as R,x as Te,y as Ee}from"./main-panel-CBELOT4P.js";var De=!1;function Oe(e){return e!==null&&(typeof e==`object`||typeof e==`function`)}var z=(e,t)=>e===t||e.length===t.length&&e.every((e,n)=>e===t[n]),ke=e=>typeof e==`function`&&!e.length?e():e,Ae=e=>Array.isArray(e)?e:e?[e]:[];function je(e,...t){return typeof e==`function`?e(...t):e}var Me=De?e=>a()?h(e):e:h;function B(e,t,n,r){return e.addEventListener(t,n,r),Me(e.removeEventListener.bind(e,t,n,r))}function Ne(e,t,n,r){let i=()=>{Ae(ke(e)).forEach(e=>{e&&Ae(ke(t)).forEach(t=>B(e,t,n,r))})};typeof e==`function`?P(i):c(i)}function V(e,t=a()){let n=0,r,i;return()=>(n++,h(()=>{n--,queueMicrotask(()=>{!n&&i&&(i(),i=r=void 0)})}),i||s(t=>r=e(i=t),t),r)}function Pe(e,t){for(let n=e.length-1;n>=0;n--){let r=t.slice(0,n+1);if(!z(e[n],r))return!1}return!0}var Fe=V(()=>{let[e,t]=m(null);return B(window,`keydown`,e=>{t(e),setTimeout(()=>t(null))}),e}),Ie=V(()=>{let[e,t]=m([]),n=()=>t([]),r=Fe();return B(window,`keydown`,n=>{if(n.repeat||typeof n.key!=`string`)return;let r=n.key.toUpperCase(),i=e();if(i.includes(r))return;let a=[...i,r];i.length===0&&r!==`ALT`&&r!==`CONTROL`&&r!==`META`&&r!==`SHIFT`&&(n.shiftKey&&a.unshift(`SHIFT`),n.altKey&&a.unshift(`ALT`),n.ctrlKey&&a.unshift(`CONTROL`),n.metaKey&&a.unshift(`META`)),t(a)}),B(window,`keyup`,e=>{if(typeof e.key!=`string`)return;let n=e.key.toUpperCase();t(e=>e.filter(e=>e!==n))}),B(window,`blur`,n),B(window,`contextmenu`,e=>{e.defaultPrevented||n()}),e[0]=e,e[1]={event:r},e[Symbol.iterator]=function*(){yield e[0],yield e[1]},e}),Le=V(()=>{let e=Ie();return v(t=>e().length===0?[]:[...t,e()],[])});function Re(e,t,n={}){if(!e.length)return;e=e.map(e=>e.toUpperCase());let{preventDefault:r=!0}=n,i=Fe(),a=Le(),o=!1;P(p(a,n.requireReset?n=>{if(!n.length)return o=!1;if(o)return;let a=i();n.length<e.length?Pe(n,e.slice(0,n.length))?r&&a&&a.preventDefault():o=!0:(o=!0,Pe(n,e)&&(r&&a&&a.preventDefault(),t(a)))}:n=>{let a=n.at(-1);if(!a)return;let o=i();if(r&&a.length<e.length){z(a,e.slice(0,e.length-1))&&o&&o.preventDefault();return}if(z(a,e)){let i=n.at(-2);(!i||z(i,e.slice(0,e.length-1)))&&(r&&o&&o.preventDefault(),t(o))}}))}var ze=k(`<div><label><input type=checkbox><div>`),Be=k(`<span>`);function H(e){let t=R(),[n,r]=m(e.checked||!1),i=t=>{let n=t.target.checked;r(n),e.onChange?.(n)};return(()=>{var r=ze(),a=r.firstChild,o=a.firstChild,s=o.nextSibling;return o.$$input=i,O(s,(()=>{var n=j(()=>!!e.label);return()=>n()&&(()=>{var n=Be();return O(n,()=>e.label),c(()=>C(n,t().checkboxLabel)),n})()})(),null),O(s,(()=>{var n=j(()=>!!e.description);return()=>n()&&(()=>{var n=Be();return O(n,()=>e.description),c(()=>C(n,t().checkboxDescription)),n})()})(),null),c(e=>{var n=t().checkboxContainer,i=t().checkboxWrapper,c=t().checkbox,l=t().checkboxLabelContainer;return n!==e.e&&C(r,e.e=n),i!==e.t&&C(a,e.t=i),c!==e.a&&C(o,e.a=c),l!==e.o&&C(s,e.o=l),e},{e:void 0,t:void 0,a:void 0,o:void 0}),c(()=>o.checked=n()),r})()}b([`input`]);var Ve=k(`<div><div><input>`),He=k(`<label>`),Ue=k(`<p>`);function We(e){let t=R(),[n,r]=m(e.value||``),i=t=>{let n=t.target.value;r(e=>e===n?e:n),e.onChange?.(n)};return(()=>{var r=Ve(),a=r.firstChild,o=a.firstChild;return O(a,(()=>{var n=j(()=>!!e.label);return()=>n()&&(()=>{var n=He();return O(n,()=>e.label),c(()=>C(n,t().inputLabel)),n})()})(),o),O(a,(()=>{var n=j(()=>!!e.description);return()=>n()&&(()=>{var n=Ue();return O(n,()=>e.description),c(()=>C(n,t().inputDescription)),n})()})(),o),o.$$input=i,c(n=>{var i=t().inputContainer,s=t().inputWrapper,c=e.type||`text`,l=t().input,u=e.placeholder;return i!==n.e&&C(r,n.e=i),s!==n.t&&C(a,n.t=s),c!==n.a&&T(o,`type`,n.a=c),l!==n.o&&C(o,n.o=l),u!==n.i&&T(o,`placeholder`,n.i=u),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),c(()=>o.value=n()),r})()}b([`input`]);var Ge=k(`<div><div><select>`),Ke=k(`<label>`),qe=k(`<p>`),Je=k(`<option>`);function U(e){let t=R(),[n,r]=m(e.value||e.options[0]?.value),i=t=>{let n=t.target.value;r(e=>e===n?e:n),e.onChange?.(n)};return(()=>{var r=Ge(),a=r.firstChild,o=a.firstChild;return O(a,(()=>{var n=j(()=>!!e.label);return()=>n()&&(()=>{var n=Ke();return O(n,()=>e.label),c(()=>C(n,t().selectLabel)),n})()})(),o),O(a,(()=>{var n=j(()=>!!e.description);return()=>n()&&(()=>{var n=qe();return O(n,()=>e.description),c(()=>C(n,t().selectDescription)),n})()})(),o),o.$$input=i,O(o,()=>e.options.map(e=>(()=>{var t=Je();return O(t,()=>e.label),c(()=>t.value=e.value),t})())),c(e=>{var n=t().selectContainer,i=t().selectWrapper,s=t().select;return n!==e.e&&C(r,e.e=n),i!==e.t&&C(a,e.t=i),s!==e.a&&C(o,e.a=s),e},{e:void 0,t:void 0,a:void 0}),c(()=>o.value=n()),r})()}b([`input`]);var Ye=k(`<button>`);function Xe(t){let n=R(),r=v(()=>{let r=t.variant||`primary`;return e(n().button.base,n().button.variant(r,t.outline,t.ghost),t.className)});return(()=>{var e=Ye();return x(e,f(t,{get class(){return r()}}),!1,!0),O(e,()=>t.children),e})()}var Ze=k(`<section>`),Qe=k(`<h3>`),$e=k(`<p>`),et=k(`<span>`),W=({children:t,...n})=>{let r=R();return(()=>{var i=Ze();return x(i,f({get class(){return e(r().section.main,n.class)}},n),!1,!0),O(i,t),i})()},G=({children:t,...n})=>{let r=R();return(()=>{var i=Qe();return x(i,f({get class(){return e(r().section.title,n.class)}},n),!1,!0),O(i,t),i})()},K=({children:t,...n})=>{let r=R();return(()=>{var i=$e();return x(i,f({get class(){return e(r().section.description,n.class)}},n),!1,!0),O(i,t),i})()},q=({children:t,...n})=>{let r=R();return(()=>{var i=et();return x(i,f({get class(){return e(r().section.icon,n.class)}},n),!1,!0),O(i,t),i})()},J=new class extends t{constructor(){super({pluginId:`tanstack-devtools-core`})}};function tt(e){let t={...e},n={...e},r={},i=e=>{let n=r[e];if(!n){if(!w())return t[e];r[e]=n=m(t[e],{internal:!0}),delete t[e]}return n[0]()};for(let t in e)Object.defineProperty(n,t,{get:()=>i(t),enumerable:!0});let a=(e,n)=>{let i=r[e];if(i)return i[1](n);e in t&&(t[e]=je(n,t[e]))};return[n,(e,t)=>{if(Oe(e)){let t=d(()=>Object.entries(je(e,n)));ee(()=>{for(let[e,n]of t)a(e,()=>n)})}else a(e,t);return n}]}var nt={width:null,height:null};function rt(e){if(!e)return{...nt};let{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function it(e){let t=typeof e==`function`,[n,r]=tt(u.context||t?nt:rt(e)),i=new ResizeObserver(([e])=>r(rt(e.target)));return h(()=>i.disconnect()),t?P(()=>{let t=e();t&&(r(rt(t)),i.observe(t),h(()=>i.unobserve(t)))}):(i.observe(e),h(()=>i.unobserve(e))),n}var at=e=>{let[t,n]=m(!1),[r,i]=m(!1),a=v(()=>t()||r()),o=null;return h(()=>{o&&clearTimeout(o)}),{expanded:a,setForceExpand:i,hoverUtils:{enter:()=>{o&&=(clearTimeout(o),null),n(!0)},leave:()=>{o=setTimeout(()=>{n(!1)},e.animationMs)}},animationMs:e.animationMs}},ot=o(void 0),st=e=>{let t=at({animationMs:e.animationMs});return _(ot.Provider,{value:t,get children(){return e.children}})};function ct(){let e=g(ot);if(e===void 0)throw Error(`useDrawContext must be used within a DrawClientProvider`);return e}var lt=()=>{let e=g(ae);if(e===void 0)throw Error(`useDevtoolsShellContext must be used within a ShellContextProvider`);return e};function ut(){let{settings:e,setSettings:t}=X();return{theme:v(()=>e().theme),setTheme:e=>t({theme:e})}}var dt=()=>{let{store:e,setStore:t}=lt(),{setForceExpand:n}=ct(),r=v(()=>e.plugins),i=v(()=>e.state.activePlugins);return P(()=>{i().length===0?n(!0):n(!1)}),{plugins:r,toggleActivePlugins:n=>{t(t=>{let r=t.state.activePlugins.includes(n),i=e.plugins?.find(e=>e.id===n);i?.destroy&&r&&i.destroy(n);let a=r?t.state.activePlugins.filter(e=>e!==n):[...t.state.activePlugins,n];return a.length>3?t:{...t,state:{...t.state,activePlugins:a}}})},activePlugins:i}},Y=()=>{let{store:e,setStore:t}=lt();return{state:v(()=>e.state),setState:e=>{t(t=>({...t,state:{...t.state,...e}}))}}},X=()=>{let{store:e,setStore:t}=lt();return{setSettings:e=>{t(t=>({...t,settings:{...t.settings,...e}}))},settings:v(()=>e.settings)}},ft=()=>{let{state:e,setState:t}=Y();return{persistOpen:v(()=>e().persistOpen),setPersistOpen:e=>{t({persistOpen:e})}}},pt=()=>{let{state:e,setState:t}=Y();return{height:v(()=>e().height),setHeight:e=>{t({height:e})}}},mt=(e,t=!0)=>{t?e.setAttribute(`tabIndex`,`-1`):e.removeAttribute(`tabIndex`);for(let n of e.children)mt(n,t)},ht=e=>{P(()=>{let t=document.getElementById(re);t&&mt(t,!e())})},gt=e=>e.includes(`CtrlOrMeta`)?[e.map(e=>e===`CtrlOrMeta`?`Control`:e),e.map(e=>e===`CtrlOrMeta`?`Meta`:e)]:[e],_t=e=>gt(e).flatMap(e=>{let t=e.filter(e=>i.includes(e)),n=e.filter(e=>!i.includes(e));return t.length===0?[n]:ne(t).map(e=>[...e,...n])}),vt=(e,t)=>{let n=_t(t),r=e.map(e=>e.toUpperCase());return n.some(e=>e.every(e=>r.includes(String(e).toUpperCase()))&&r.every(t=>e.map(e=>String(e).toUpperCase()).includes(t)))},yt={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{100:`ff`,90:`e5`,80:`cc`,70:`b3`,60:`99`,50:`80`,40:`66`,30:`4d`,20:`33`,10:`1a`,0:`00`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`,lg:`calc(var(--tsrd-font-size) * 1.125)`,xl:`calc(var(--tsrd-font-size) * 1.25)`,"2xl":`calc(var(--tsrd-font-size) * 1.5)`,"3xl":`calc(var(--tsrd-font-size) * 1.875)`,"4xl":`calc(var(--tsrd-font-size) * 2.25)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.75)`,"7xl":`calc(var(--tsrd-font-size) * 4.5)`,"8xl":`calc(var(--tsrd-font-size) * 6)`,"9xl":`calc(var(--tsrd-font-size) * 8)`},lineHeight:{"3xs":`calc(var(--tsrd-font-size) * 0.75)`,"2xs":`calc(var(--tsrd-font-size) * 0.875)`,xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`,md:`calc(var(--tsrd-font-size) * 1.5)`,lg:`calc(var(--tsrd-font-size) * 1.75)`,xl:`calc(var(--tsrd-font-size) * 2)`,"2xl":`calc(var(--tsrd-font-size) * 2.25)`,"3xl":`calc(var(--tsrd-font-size) * 2.5)`,"4xl":`calc(var(--tsrd-font-size) * 2.75)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.25)`,"7xl":`calc(var(--tsrd-font-size) * 3.5)`,"8xl":`calc(var(--tsrd-font-size) * 3.75)`,"9xl":`calc(var(--tsrd-font-size) * 4)`},weight:{thin:`100`,extralight:`200`,light:`300`,normal:`400`,medium:`500`,semibold:`600`,bold:`700`,extrabold:`800`,black:`900`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},breakpoints:{xs:`320px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},border:{radius:{none:`0px`,xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,lg:`calc(var(--tsrd-font-size) * 0.5)`,xl:`calc(var(--tsrd-font-size) * 0.75)`,"2xl":`calc(var(--tsrd-font-size) * 1)`,"3xl":`calc(var(--tsrd-font-size) * 1.5)`,full:`9999px`}},size:{0:`0px`,.25:`calc(var(--tsrd-font-size) * 0.0625)`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,4.5:`calc(var(--tsrd-font-size) * 1.125)`,5:`calc(var(--tsrd-font-size) * 1.25)`,5.5:`calc(var(--tsrd-font-size) * 1.375)`,6:`calc(var(--tsrd-font-size) * 1.5)`,6.5:`calc(var(--tsrd-font-size) * 1.625)`,7:`calc(var(--tsrd-font-size) * 1.75)`,8:`calc(var(--tsrd-font-size) * 2)`,9:`calc(var(--tsrd-font-size) * 2.25)`,10:`calc(var(--tsrd-font-size) * 2.5)`,11:`calc(var(--tsrd-font-size) * 2.75)`,12:`calc(var(--tsrd-font-size) * 3)`,14:`calc(var(--tsrd-font-size) * 3.5)`,16:`calc(var(--tsrd-font-size) * 4)`,20:`calc(var(--tsrd-font-size) * 5)`,24:`calc(var(--tsrd-font-size) * 6)`,28:`calc(var(--tsrd-font-size) * 7)`,32:`calc(var(--tsrd-font-size) * 8)`,36:`calc(var(--tsrd-font-size) * 9)`,40:`calc(var(--tsrd-font-size) * 10)`,44:`calc(var(--tsrd-font-size) * 11)`,48:`calc(var(--tsrd-font-size) * 12)`,52:`calc(var(--tsrd-font-size) * 13)`,56:`calc(var(--tsrd-font-size) * 14)`,60:`calc(var(--tsrd-font-size) * 15)`,64:`calc(var(--tsrd-font-size) * 16)`,72:`calc(var(--tsrd-font-size) * 18)`,80:`calc(var(--tsrd-font-size) * 20)`,96:`calc(var(--tsrd-font-size) * 24)`},shadow:{xs:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 2px 0 rgb(0 0 0 / 0.05)`,sm:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e=`rgb(0 0 0 / 0.1)`)=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e=`rgb(0 0 0 / 0.1)`)=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e=`rgb(0 0 0 / 0.1)`)=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e=`rgb(0 0 0 / 0.25)`)=>`0 25px 50px -12px ${e}`,inner:(e=`rgb(0 0 0 / 0.05)`)=>`inset 0 2px 4px 0 ${e}`,none:()=>`none`},zIndices:{hide:-1,auto:`auto`,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},bt=e=>`${(e/1e3).toFixed(2)}s`,xt=L`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,St=L`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,Ct=L`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,wt=L`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Tt=L`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`,Et=L`
  to {
    transform: rotate(360deg);
  }
`,Dt=L`
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1) rotate(10deg);
  }
`,Ot=e=>{let{colors:t,font:n,size:r,border:i}=yt,{fontFamily:a,size:o}=n,s=se,c=(t,n)=>e===`light`?t:n;return{seoTabContainer:s`
      padding: 0;
      margin: 0 auto;
      background: ${c(t.white,t.darkGray[700])};
      border-radius: 8px;
      box-shadow: none;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
      overflow-y: auto;
    `,seoTabTitle:s`
      font-size: 1.25rem;
      font-weight: 600;
      color: ${c(t.gray[900],t.gray[100])};
      margin: 0;
      padding: 1rem 1.5rem 0.5rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid ${c(t.gray[200],t.gray[800])};
    `,seoTabSection:s`
      padding: 1.5rem;
      background: ${c(t.gray[50],t.darkGray[800])};
      border: 1px solid ${c(t.gray[200],t.gray[800])};
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 0.75rem;
    `,seoPreviewSection:s`
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      flex-wrap: wrap;
      padding-bottom: 0.5rem;
    `,seoPreviewCard:s`
      border: 1px solid ${c(t.gray[200],t.gray[800])};
      border-radius: 8px;
      padding: 12px 10px;
      background: ${c(t.white,t.darkGray[900])};
      margin-bottom: 0;
      box-shadow: 0 1px 3px ${c(`rgba(0,0,0,0.05)`,`rgba(0,0,0,0.1)`)};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 200px;
      max-width: 240px;
      font-size: 0.95rem;
      gap: 4px;
    `,seoPreviewHeader:s`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0;
      color: ${c(t.gray[700],t.gray[300])};
    `,seoPreviewImage:s`
      max-width: 100%;
      border-radius: 6px;
      margin-bottom: 6px;
      box-shadow: 0 1px 2px ${c(`rgba(0,0,0,0.03)`,`rgba(0,0,0,0.06)`)};
      height: 160px;
      object-fit: cover;
    `,seoPreviewTitle:s`
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 4px;
      color: ${c(t.gray[900],t.gray[100])};
    `,seoPreviewDesc:s`
      color: ${c(t.gray[600],t.gray[400])};
      margin-bottom: 4px;
      font-size: 0.8rem;
    `,seoPreviewUrl:s`
      color: ${c(t.gray[500],t.gray[500])};
      font-size: 0.75rem;
      margin-bottom: 0;
      word-break: break-all;
    `,seoMissingTagsSection:s`
      margin-top: 4px;
      font-size: 0.875rem;
      color: ${c(t.red[500],t.red[400])};
    `,seoMissingTagsList:s`
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 240px;
    `,seoMissingTag:s`
      background: ${c(t.red[100],t.red[500]+`22`)};
      color: ${c(t.red[700],t.red[500])};
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 0.75rem;
      font-weight: 500;
    `,seoAllTagsFound:s`
      color: ${c(t.green[700],t.green[500])};
      font-weight: 500;
      margin-left: 0;
      padding: 0 10px 8px 10px;
      font-size: 0.875rem;
    `,devtoolsPanelContainer:(e,n)=>s`
      direction: ltr;
      position: fixed;
      overflow-y: hidden;
      overflow-x: hidden;
      ${e}: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      ${n?``:`max-height: 90%;`}
      border-top: 1px solid ${c(t.gray[200],t.gray[800])};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>s`
        visibility: ${e?`visible`:`hidden`};
        height: ${e?`auto`:`0`};
      `,devtoolsPanelContainerResizing:e=>e()?s`
          transition: none;
        `:s`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t,n)=>e?s`
          pointer-events: auto;
          transform: translateY(0);
        `:s`
        pointer-events: none;
        transform: translateY(${n===`top`?-t:t}px);
      `,devtoolsPanel:s`
      display: flex;
      font-size: ${o.sm};
      font-family: ${a.sans};
      background-color: ${c(t.white,t.darkGray[700])};
      color: ${c(t.gray[900],t.gray[300])};
      width: w-screen;
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100%;
    `,dragHandle:e=>s`
      position: absolute;
      left: 0;
      ${e===`bottom`?`top`:`bottom`}: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      user-select: none;
      z-index: 100000;
      &:hover {
        background-color: ${c(t.gray[400],t.gray[500])};
      }
    `,mainCloseBtn:s`
      background: transparent;
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      align-items: center;
      padding: 0;
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;
      & > img {
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
        outline-offset: 2px;
        border-radius: ${i.radius.full};
        outline: 2px solid transparent;
      }
      &:hide-until-hover {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }
      &:hide-until-hover:hover {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }
      & > img:focus-visible,
      img:hover {
        outline: 2px solid ${c(t.black,t.black)};
      }
    `,mainCloseBtnPosition:e=>s`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`middle-left`?`top: 50%; left: ${r[2]}; transform: translateY(-50%);`:``}
        ${e===`middle-right`?`top: 50%; right: ${r[2]}; transform: translateY(-50%);`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:(e,t)=>e?s`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:t?s`
              opacity: 0;

              &:hover {
                opacity: 1;
                pointer-events: auto;
                visibility: visible;
              }
            `:s`
              opacity: 1;
              pointer-events: auto;
              visibility: visible;
            `,tabContainer:s`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      background-color: ${c(t.gray[50],t.darkGray[900])};
      border-right: 1px solid ${c(t.gray[200],t.gray[800])};
      box-shadow: none;
      position: relative;
      width: ${r[10]};
    `,tab:s`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${r[10]};
      cursor: pointer;
      font-size: ${o.sm};
      font-family: ${a.sans};
      color: ${c(t.gray[600],t.gray[400])};
      background-color: transparent;
      border: none;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      &:hover:not(.close):not(.active):not(.detach) {
        background-color: ${c(t.gray[100],t.gray[800])};
        color: ${c(t.gray[900],t.gray[100])};
        border-left: 2px solid ${c(t.gray[900],t.gray[100])};
      }
      &.active {
        background-color: ${c(t.gray[100],t.gray[800])};
        color: ${c(t.gray[900],t.gray[100])};
        border-left: 2px solid ${c(t.gray[900],t.gray[100])};
      }
      &.detach {
        &:hover {
          background-color: ${c(t.gray[100],t.gray[800])};
        }
        &:hover {
          color: ${c(t.green[700],t.green[500])};
        }
      }
      &.close {
        margin-top: auto;
        &:hover {
          background-color: ${c(t.gray[100],t.gray[800])};
        }
        &:hover {
          color: ${c(t.red[700],t.red[500])};
        }
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.2;
        pointer-events: none;
      }
      &.disabled:hover {
        background-color: transparent;
        color: ${t.gray[300]};
      }
      & > svg {
        flex-shrink: 0;
      }
    `,tabContent:s`
      transition: all 0.2s ease-in-out;
      width: 100%;
      height: 100%;
    `,pluginsTabPanel:s`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `,pluginsTabDraw:e=>s`
      width: ${e?r[48]:0};
      height: 100%;
      background-color: ${c(t.white,t.darkGray[900])};
      box-shadow: none;
      ${e?`border-right: 1px solid ${c(t.gray[200],t.gray[800])};`:``}
    `,pluginsTabDrawExpanded:s`
      width: ${r[48]};
      border-right: 1px solid ${c(t.gray[200],t.gray[800])};
    `,pluginsTabDrawTransition:e=>s`
        transition: width ${bt(e)} ease;
      `,pluginsTabSidebar:e=>s`
      width: ${r[48]};
      overflow-y: auto;
      transform: ${e?`translateX(0)`:`translateX(-100%)`};
      display: flex;
      flex-direction: column;
    `,pluginsTabSidebarTransition:e=>s`
        transition: transform ${bt(e)} ease;
      `,pluginsList:s`
      flex: 1;
      overflow-y: auto;
    `,pluginName:s`
      font-size: ${o.xs};
      font-family: ${a.sans};
      color: ${c(t.gray[600],t.gray[400])};
      padding: ${r[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;

      &:hover {
        background-color: ${c(t.gray[100],t.gray[800])};
        color: ${c(t.gray[900],t.gray[100])};
        padding: ${r[2]};
      }
      &.active {
        background-color: ${c(t.gray[100],t.gray[800])};
        color: ${c(t.gray[900],t.gray[100])};
        border-left: 2px solid ${c(t.gray[900],t.gray[100])};
      }
      &.active:hover {
        background-color: ${c(t.gray[200],t.gray[700])};
      }
    `,pluginsTabContent:s`
      width: 100%;
      height: 100%;

      &:not(:last-child) {
        border-right: 5px solid ${c(t.purple[200],t.purple[800])};
      }
    `,settingsGroup:s`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,conditionalSetting:s`
      margin-left: 1.5rem;
      padding-left: 1rem;
      border-left: 2px solid ${c(t.gray[300],t.gray[600])};
      background-color: ${c(t.gray[50],t.darkGray[900])};
      padding: 0.75rem;
      border-radius: 0.375rem;
      margin-top: 0.5rem;
    `,settingRow:s`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,settingsModifiers:s`
      display: flex;
      gap: 0.5rem;
    `,settingsStack:s`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `,noPluginsFallback:s`
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      padding: 2rem;
      background: ${c(t.gray[50],t.darkGray[700])};
      width: 100%;
      height: 100%;
    `,noPluginsFallbackContent:s`
      max-width: 600px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    `,noPluginsFallbackIcon:s`
      width: 64px;
      height: 64px;
      color: ${c(t.gray[400],t.gray[600])};
      margin-bottom: 0.5rem;

      svg {
        width: 100%;
        height: 100%;
      }
    `,noPluginsFallbackTitle:s`
      font-size: 1.5rem;
      font-weight: 600;
      color: ${c(t.gray[900],t.gray[100])};
      margin: 0;
    `,noPluginsFallbackDescription:s`
      font-size: 0.95rem;
      color: ${c(t.gray[600],t.gray[400])};
      line-height: 1.5;
      margin: 0;
    `,noPluginsSuggestions:s`
      width: 100%;
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${c(t.white,t.darkGray[800])};
      border: 1px solid ${c(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsSuggestionsTitle:s`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${c(t.gray[900],t.gray[100])};
      margin: 0 0 0.5rem 0;
    `,noPluginsSuggestionsDesc:s`
      font-size: 0.875rem;
      color: ${c(t.gray[600],t.gray[400])};
      margin: 0 0 1rem 0;
    `,noPluginsSuggestionsList:s`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,noPluginsSuggestionCard:s`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: ${c(t.gray[50],t.darkGray[900])};
      border: 1px solid ${c(t.gray[200],t.gray[700])};
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        border-color: ${c(t.gray[300],t.gray[600])};
        background: ${c(t.gray[100],t.darkGray[800])};
      }
    `,noPluginsSuggestionInfo:s`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      flex: 1;
    `,noPluginsSuggestionPackage:s`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${c(t.gray[900],t.gray[100])};
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,noPluginsSuggestionSource:s`
      font-size: 0.8rem;
      color: ${c(t.gray[500],t.gray[500])};
      margin: 0;
    `,noPluginsSuggestionStatus:s`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${c(t.green[600],t.green[400])};

      svg {
        width: 18px;
        height: 18px;
      }
    `,noPluginsSuggestionStatusText:s`
      font-size: 0.875rem;
      font-weight: 500;
    `,noPluginsSuggestionStatusTextError:s`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${c(t.red[600],t.red[400])};
    `,noPluginsEmptyState:s`
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${c(t.white,t.darkGray[800])};
      border: 1px solid ${c(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsEmptyStateText:s`
      font-size: 0.875rem;
      color: ${c(t.gray[600],t.gray[400])};
      margin: 0;
      line-height: 1.5;
    `,noPluginsFallbackLinks:s`
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.5rem;
    `,noPluginsFallbackLink:s`
      font-size: 0.875rem;
      color: ${c(t.gray[700],t.gray[300])};
      text-decoration: none;
      transition: color 0.15s ease;

      &:hover {
        color: ${c(t.gray[900],t.gray[100])};
        text-decoration: underline;
      }
    `,noPluginsFallbackLinkSeparator:s`
      color: ${c(t.gray[400],t.gray[600])};
    `,pluginMarketplace:s`
      width: 100%;
      overflow-y: auto;
      padding: 2rem;
      background: ${c(`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,`linear-gradient(135deg, #1a1d23 0%, #13161a 100%)`)};
      animation: ${xt} 0.3s ease;
    `,pluginMarketplaceHeader:s`
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid ${c(t.gray[200],t.gray[700])};
    `,pluginMarketplaceTitleRow:s`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 0.5rem;
    `,pluginMarketplaceTitle:s`
      font-size: 1.5rem;
      font-weight: 700;
      color: ${c(t.gray[900],t.gray[100])};
      margin: 0;
      letter-spacing: -0.02em;
    `,pluginMarketplaceDescription:s`
      font-size: 0.95rem;
      color: ${c(t.gray[600],t.gray[400])};
      margin: 0 0 1rem 0;
      line-height: 1.5;
    `,pluginMarketplaceSearchWrapper:s`
      position: relative;
      display: flex;
      align-items: center;
      max-width: 400px;
      flex-shrink: 0;

      svg {
        position: absolute;
        left: 1rem;
        color: ${c(t.gray[400],t.gray[500])};
        pointer-events: none;
      }
    `,pluginMarketplaceSearch:s`
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      background: ${c(t.gray[50],t.darkGray[900])};
      border: 2px solid ${c(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
      color: ${c(t.gray[900],t.gray[100])};
      font-size: 0.875rem;
      font-family: ${a.sans};
      transition: all 0.2s ease;

      &::placeholder {
        color: ${c(t.gray[400],t.gray[500])};
      }

      &:focus {
        outline: none;
        border-color: ${c(t.blue[500],t.blue[400])};
        background: ${c(t.white,t.darkGray[800])};
        box-shadow: 0 0 0 3px
          ${c(`rgba(59, 130, 246, 0.1)`,`rgba(96, 165, 250, 0.1)`)};
      }
    `,pluginMarketplaceFilters:s`
      margin-top: 1.5rem;
      padding-top: 1rem;
    `,pluginMarketplaceTagsContainer:s`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.5rem;
      padding: 1rem;
      background: ${c(t.gray[50],t.darkGray[800])};
      border: 1px solid ${c(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
    `,pluginMarketplaceTagButton:s`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      background: ${c(t.white,t.darkGray[700])};
      border: 2px solid ${c(t.gray[300],t.gray[600])};
      border-radius: 0.375rem;
      color: ${c(t.gray[700],t.gray[300])};
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        background: ${c(t.gray[100],t.darkGray[600])};
        border-color: ${c(t.gray[400],t.gray[500])};
        color: ${c(t.gray[900],t.gray[100])};
      }
    `,pluginMarketplaceTagButtonActive:s`
      background: ${c(`linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)`,`linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)`)} !important;
      border-color: ${c(`#2563eb`,`#3b82f6`)} !important;
      color: white !important;

      &:hover {
        background: ${c(`linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)`,`linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)`)} !important;
        border-color: ${c(`#1d4ed8`,`#2563eb`)} !important;
      }
    `,pluginMarketplaceSettingsButton:s`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      background: ${c(t.gray[100],t.darkGray[800])};
      border: 2px solid ${c(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
      color: ${c(t.gray[700],t.gray[300])};
      cursor: pointer;
      transition: all 0.2s ease;
      margin-left: 0.5rem;

      &:hover {
        background: ${c(t.gray[200],t.darkGray[700])};
        border-color: ${c(t.gray[300],t.gray[600])};
        color: ${c(t.gray[900],t.gray[100])};
      }

      &:active {
        transform: scale(0.95);
      }
    `,pluginMarketplaceSettingsPanel:s`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 350px;
      background: ${c(t.white,t.darkGray[800])};
      border-left: 1px solid ${c(t.gray[200],t.gray[700])};
      box-shadow: -4px 0 12px ${c(`rgba(0, 0, 0, 0.1)`,`rgba(0, 0, 0, 0.4)`)};
      z-index: 1000;
      display: flex;
      flex-direction: column;
      animation: ${St} 0.3s ease;
    `,pluginMarketplaceSettingsPanelHeader:s`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid ${c(t.gray[200],t.gray[700])};
    `,pluginMarketplaceSettingsPanelTitle:s`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${c(t.gray[900],t.gray[100])};
      margin: 0;
    `,pluginMarketplaceSettingsPanelClose:s`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: transparent;
      border: none;
      color: ${c(t.gray[600],t.gray[400])};
      cursor: pointer;
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${c(t.gray[100],t.darkGray[700])};
        color: ${c(t.gray[900],t.gray[100])};
      }
    `,pluginMarketplaceSettingsPanelContent:s`
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    `,pluginMarketplaceGrid:s`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
      animation: ${Ct} 0.4s ease;
    `,pluginMarketplaceCard:s`
      background: ${c(t.white,t.darkGray[800])};
      border: 2px solid ${c(t.gray[200],t.gray[700])};
      border-radius: 0.75rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${c(`linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)`,`linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)`)};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
      }

      &:hover {
        border-color: ${c(t.gray[400],t.gray[500])};
        box-shadow: 0 8px 24px ${c(`rgba(0,0,0,0.1)`,`rgba(0,0,0,0.4)`)};
        transform: translateY(-4px);

        &::before {
          transform: scaleX(1);
        }
      }
    `,pluginMarketplaceCardIcon:s`
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${c(`linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)`,`linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)`)};
      border-radius: 0.5rem;
      color: white;
      transition: transform 0.25s ease;

      svg {
        width: 20px;
        height: 20px;
      }

      &.custom-logo {
      }
    `,pluginMarketplaceCardHeader:s`
      flex: 1;
    `,pluginMarketplaceCardTitle:s`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${c(t.gray[900],t.gray[100])};
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    `,pluginMarketplaceCardDescription:s`
      font-size: 0.8rem;
      color: ${c(t.gray[500],t.gray[500])};
      margin: 0;
      padding: 0;
      background: transparent;
      border-radius: 0.375rem;
      display: block;
      font-weight: 500;
    `,pluginMarketplaceCardPackageBadge:s`
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      opacity: 0.6;
      padding: 4px 8px;
      padding-left: 0;
      background-color: var(--bg-tertiary);
      border-radius: 4px;
      word-break: break-all;
      display: inline-block;
    `,pluginMarketplaceCardDescriptionText:s`
      line-height: 1.5;
      margin-top: 0;
    `,pluginMarketplaceCardVersionInfo:s`
      margin-top: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,pluginMarketplaceCardVersionSatisfied:s`
      color: ${c(t.green[600],t.green[400])};
    `,pluginMarketplaceCardVersionUnsatisfied:s`
      color: ${c(t.red[600],t.red[400])};
    `,pluginMarketplaceCardDocsLink:s`
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      color: ${c(t.blue[600],t.blue[400])};
      text-decoration: none;
      margin-top: 0.5rem;
      transition: color 0.15s ease;

      &:hover {
        color: ${c(t.blue[700],t.blue[300])};
        text-decoration: underline;
      }

      svg {
        width: 12px;
        height: 12px;
      }
    `,pluginMarketplaceCardTags:s`
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-top: 0.75rem;
    `,pluginMarketplaceCardTag:s`
      font-size: 0.6875rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      background: ${c(t.gray[100],t.darkGray[700])};
      border: 1px solid ${c(t.gray[300],t.gray[600])};
      border-radius: 0.25rem;
      color: ${c(t.gray[700],t.gray[300])};
    `,pluginMarketplaceCardImage:s`
      width: 28px;
      height: 28px;
      object-fit: contain;
    `,pluginMarketplaceNewBanner:s`
      position: absolute;
      top: 12px;
      right: -35px;
      background-color: ${c(t.green[500],t.green[500])};
      color: white;
      padding: 4px 40px;
      font-size: 0.6875rem;
      font-weight: bold;
      text-transform: uppercase;
      transform: rotate(45deg);
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.5);
      z-index: 10;
      letter-spacing: 0.5px;
    `,pluginMarketplaceCardFeatured:s`
      border-color: ${c(t.blue[500],t.blue[400])};
      border-width: 2px;
    `,pluginMarketplaceCardActive:s`
      border-color: ${c(t.green[500],t.green[600])};
      border-width: 2px;

      &:hover {
        border-color: ${c(t.green[500],t.green[600])};
        box-shadow: none;
        transform: none;

        &::before {
          transform: scaleX(0);
        }
      }
    `,pluginMarketplaceCardStatus:s`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${c(t.green[600],t.green[400])};
      animation: ${wt} 0.3s ease;

      svg {
        width: 18px;
        height: 18px;
        animation: ${Tt} 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    `,pluginMarketplaceCardSpinner:s`
      width: 18px;
      height: 18px;
      border: 2px solid ${c(t.gray[200],t.gray[700])};
      border-top-color: ${c(t.blue[600],t.blue[400])};
      border-radius: 50%;
      animation: ${Et} 0.8s linear infinite;
    `,pluginMarketplaceCardStatusText:s`
      font-size: 0.875rem;
      font-weight: 600;
    `,pluginMarketplaceCardStatusTextError:s`
      font-size: 0.875rem;
      font-weight: 600;
      color: ${c(t.red[600],t.red[400])};
    `,pluginMarketplaceEmpty:s`
      padding: 3rem 2rem;
      text-align: center;
      background: ${c(t.white,t.darkGray[800])};
      border: 2px dashed ${c(t.gray[300],t.gray[700])};
      border-radius: 0.75rem;
      animation: ${xt} 0.3s ease;
    `,pluginMarketplaceEmptyText:s`
      font-size: 0.95rem;
      color: ${c(t.gray[600],t.gray[400])};
      margin: 0;
      line-height: 1.6;
    `,pluginMarketplaceSection:s`
      margin-bottom: 2.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    `,pluginMarketplaceSectionHeader:s`
      margin-bottom: 1rem;
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      background: ${c(t.gray[50],t.darkGray[800])};
      border: 1px solid ${c(t.gray[200],t.gray[700])};
      border-radius: 0.5rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${c(t.gray[100],t.darkGray[700])};
        border-color: ${c(t.gray[300],t.gray[600])};
      }
    `,pluginMarketplaceSectionHeaderLeft:s`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionChevron:s`
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${c(t.gray[700],t.gray[300])};
      transition: transform 0.2s ease;
    `,pluginMarketplaceSectionChevronCollapsed:s`
      transform: rotate(-90deg);
    `,pluginMarketplaceSectionTitle:s`
      font-size: 1.25rem;
      font-weight: 700;
      color: ${c(t.gray[900],t.gray[50])};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionBadge:s`
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      background: ${c(`linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)`,`linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)`)};
      color: white;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,pluginMarketplaceFeatureBanner:s`
      margin-top: 1rem;
      padding: 1.25rem 1.5rem;
      background: ${c(`linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)`,`linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)`)};
      border-radius: 0.75rem;
      border: 1px solid ${c(t.blue[400],t.blue[800])};
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    `,pluginMarketplaceFeatureBannerContent:s`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,pluginMarketplaceFeatureBannerTitle:s`
      font-size: 1.125rem;
      font-weight: 700;
      color: white;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceFeatureBannerIcon:s`
      width: 24px;
      height: 24px;
      display: inline-flex;
    `,pluginMarketplaceFeatureBannerText:s`
      font-size: 0.95rem;
      color: ${c(`rgba(255, 255, 255, 0.95)`,`rgba(255, 255, 255, 0.9)`)};
      line-height: 1.5;
      margin: 0;
    `,pluginMarketplaceFeatureBannerButton:s`
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1.25rem;
      background: white;
      color: ${t.blue[600]};
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      align-self: flex-start;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: ${c(t.gray[50],t.gray[100])};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
      }
    `,pluginMarketplaceFeatureBannerButtonIcon:s`
      width: 18px;
      height: 18px;
    `,pluginMarketplaceCardDisabled:s`
      opacity: 0.6;
      filter: grayscale(0.3);
      cursor: not-allowed;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `,pluginMarketplaceCardBadge:s`
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 0.25rem;
      letter-spacing: 0.05em;
    `,pluginMarketplaceCardBadgeInstall:s`
      background: ${c(t.green[100],t.green[900])};
      color: ${c(t.green[700],t.green[300])};
    `,pluginMarketplaceCardBadgeAdd:s`
      background: ${c(t.blue[100],t.blue[900])};
      color: ${c(t.blue[700],t.blue[300])};
    `,pluginMarketplaceCardBadgeRequires:s`
      background: ${c(t.gray[100],t.gray[800])};
      color: ${c(t.gray[600],t.gray[400])};
    `,pluginMarketplaceButtonInstalled:s`
      opacity: 0.5;
    `,pluginNameAddMore:s`
      font-size: ${o.xs};
      font-family: ${a.sans};
      color: ${c(t.gray[600],t.gray[400])};
      padding: ${r[3]} ${r[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      background: ${c(`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,`linear-gradient(135deg, #1f2937 0%, #111827 100%)`)};
      font-weight: 600;
      position: relative;
      margin-top: auto;

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        &::before {
          content: '✨';
          font-size: 0.875rem;
          animation: ${Dt} 2s ease-in-out infinite;
        }
      }

      &:hover {
        background: ${c(`linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)`,`linear-gradient(135deg, #374151 0%, #1f2937 100%)`)};
        color: ${c(t.gray[900],t.gray[100])};
        border-left-color: ${c(t.blue[500],t.blue[400])};

        h3::before {
          animation: ${Dt} 0.5s ease-in-out infinite;
        }
      }

      &.active {
        background: ${c(`linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)`,`linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)`)};
        color: ${c(t.white,t.white)};
        border-left: 2px solid ${c(t.blue[600],t.blue[300])};
        box-shadow: 0 4px 12px
          ${c(`rgba(59, 130, 246, 0.3)`,`rgba(96, 165, 250, 0.3)`)};

        h3::before {
          filter: brightness(0) invert(1);
        }
      }

      &.active:hover {
        background: ${c(`linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)`,`linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)`)};
      }
    `}};function Z(){let{theme:e}=ut(),[t,n]=m(Ot(e()));return P(()=>{n(Ot(e()))}),t}var kt=`data:image/png;base64,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`,At=k(`<div>`),jt=k(`<button type=button aria-label="Open TanStack Devtools">`),Mt=k(`<img alt="TanStack Devtools">`),Nt=t=>{let{settings:n}=X(),[r,i]=m(),a=Z(),o=v(()=>e(a().mainCloseBtn,a().mainCloseBtnPosition(n().position),a().mainCloseBtnAnimation(t.isOpen(),n().hideUntilHover)));return P(()=>{let e=n().customTrigger,t=r();e&&t&&e(t,{theme:n().theme})}),_(F,{get when(){return!n().triggerHidden},get children(){var e=jt();return e.$$click=()=>t.setIsOpen(!t.isOpen()),O(e,_(F,{get when(){return n().customTrigger},get fallback(){return(()=>{var e=Mt();return T(e,`src`,kt),e})()},get children(){var e=At();return E(i,e),e}})),c(()=>C(e,o())),e}})};b([`click`]);var Pt=k(`<div>`),Ft=t=>{let n=Z(),{height:r}=pt(),{settings:i}=X(),a=I();return(()=>{var o=Pt();return T(o,`id`,re),O(o,_(st,{animationMs:400,get children(){return t.children}})),c(s=>{var c=a().pipWindow?`100vh`:r()+`px`,l=a().pipWindow?`100vh`:r()+`px`,u=e(n().devtoolsPanelContainer(i().panelLocation,!!a().pipWindow),n().devtoolsPanelContainerAnimation(t.isOpen(),r(),i().panelLocation),n().devtoolsPanelContainerVisibility(t.isOpen()),n().devtoolsPanelContainerResizing(t.isResizing));return c!==s.e&&N(o,`height`,s.e=c),l!==s.t&&N(o,`--tsd-main-panel-height`,s.t=l),u!==s.a&&C(o,s.a=u),s},{e:void 0,t:void 0,a:void 0}),o})()},It=k(`<div>`),Lt=e=>{let t=Z(),{settings:n}=X();return(()=>{var r=It(),i=e.ref;return typeof i==`function`?E(i,r):e.ref=r,O(r,(()=>{var r=j(()=>!!e.handleDragStart);return()=>r()?(()=>{var r=It();return D(r,`mousedown`,e.handleDragStart,!0),c(()=>C(r,t().dragHandle(n().panelLocation))),r})():null})(),null),O(r,()=>e.children,null),c(()=>C(r,t().devtoolsPanel)),r})()};b([`mousedown`]);var Rt=k(`<div><h4 style=margin:0></h4><div></div>Final shortcut is: `),zt={Shift:`Shift`,Alt:`Alt`,Meta:`Meta`,Control:`Control`,CtrlOrMeta:`Ctrl Or Meta`},Bt=e=>{let t=Z(),n=t=>{if(e.hotkey.includes(t))e.onHotkeyChange(e.hotkey.filter(e=>e!==t));else{let n=e.hotkey.filter(t=>e.modifiers.includes(t)),r=e.hotkey.filter(t=>!e.modifiers.includes(t));e.onHotkeyChange([...n,t,...r])}},r=()=>e.hotkey.filter(t=>!e.modifiers.includes(t)).join(`+`),i=t=>{let n=e=>{if(e.length===1)return[ie(e)];let t=[];for(let n of e){let e=ie(n);t.includes(e)||t.push(e)}return t},r=e.hotkey.filter(t=>e.modifiers.includes(t)),i=t.split(`+`).flatMap(e=>n(e)).filter(Boolean);e.onHotkeyChange([...r,...i])},a=()=>e.hotkey.join(` + `);return(()=>{var o=Rt(),s=o.firstChild,l=s.nextSibling,u=l.nextSibling;return O(s,()=>e.description),O(l,_(F,{keyed:!0,get when(){return e.hotkey},get children(){return e.modifiers.map(t=>_(Xe,{variant:`success`,onclick:()=>n(t),get outline(){return!e.hotkey.includes(t)},get children(){return zt[t]||t}}))}})),O(o,_(We,{description:`Use '+' to combine keys (e.g., 'a+b' or 'd'). This will be used with the enabled modifiers from above`,placeholder:`a`,get value(){return r()},onChange:i}),u),O(o,a,null),c(e=>{var n=t().settingsGroup,r=t().settingsModifiers;return n!==e.e&&C(o,e.e=n),r!==e.t&&C(l,e.t=r),e},{e:void 0,t:void 0}),o})()},Q=k(`<div>`),Vt=k(`<div><div>`),Ht=()=>{let{setSettings:e,settings:t}=X(),n=Z(),r=[`CtrlOrMeta`,`Alt`,`Shift`];return _(Se,{withPadding:!0,get children(){return[_(W,{get children(){return[_(G,{get children(){return[_(q,{get children(){return _(we,{})}}),`General`]}}),_(K,{children:`Configure general behavior of the devtools panel.`}),(()=>{var r=Q();return O(r,_(H,{label:`Default open`,description:`Automatically open the devtools panel when the page loads`,onChange:()=>e({defaultOpen:!t().defaultOpen}),get checked(){return t().defaultOpen}}),null),O(r,_(H,{label:`Hide trigger until hovered`,description:`Keep the devtools trigger button hidden until you hover over its area`,onChange:()=>e({hideUntilHover:!t().hideUntilHover}),get checked(){return t().hideUntilHover}}),null),O(r,_(H,{label:`Completely hide trigger`,description:`Completely removes the trigger from the DOM (you can still open it with the hotkey)`,onChange:()=>e({triggerHidden:!t().triggerHidden}),get checked(){return t().triggerHidden}}),null),O(r,_(U,{label:`Theme`,description:`Choose the theme for the devtools panel`,get value(){return t().theme},options:[{label:`Dark`,value:`dark`},{label:`Light`,value:`light`}],onChange:t=>e({theme:t})}),null),c(()=>C(r,n().settingsGroup)),r})()]}}),_(W,{get children(){return[_(G,{get children(){return[_(q,{get children(){return _(pe,{})}}),`URL Configuration`]}}),_(K,{children:`Control when devtools are available based on URL parameters.`}),(()=>{var r=Q();return O(r,_(H,{label:`Require URL Flag`,description:`Only show devtools when a specific URL parameter is present`,get checked(){return t().requireUrlFlag},onChange:t=>e({requireUrlFlag:t})}),null),O(r,_(F,{get when(){return t().requireUrlFlag},get children(){var r=Q();return O(r,_(We,{label:`URL flag`,description:`Enter the URL parameter name (e.g., 'debug' for ?debug=true)`,placeholder:`debug`,get value(){return t().urlFlag},onChange:t=>e({urlFlag:t})})),c(()=>C(r,n().conditionalSetting)),r}}),null),c(()=>C(r,n().settingsGroup)),r})()]}}),_(W,{get children(){return[_(G,{get children(){return[_(q,{get children(){return _(fe,{})}}),`Keyboard`]}}),_(K,{children:`Customize keyboard shortcuts for quick access.`}),(()=>{var i=Q();return O(i,_(Bt,{title:`Open/Close Devtools`,description:`Hotkey to open/close devtools`,get hotkey(){return t().openHotkey},modifiers:r,onHotkeyChange:t=>e({openHotkey:t})}),null),O(i,_(Bt,{title:`Source Inspector`,description:`Hotkey to open source inspector`,get hotkey(){return t().inspectHotkey},modifiers:r,onHotkeyChange:t=>e({inspectHotkey:t})}),null),c(()=>C(i,n().settingsStack)),i})()]}}),_(W,{get children(){return[_(G,{get children(){return[_(q,{get children(){return _(Ce,{})}}),`Position`]}}),_(K,{children:`Adjust the position of the trigger button and devtools panel.`}),(()=>{var r=Vt(),i=r.firstChild;return O(i,_(U,{label:`Trigger Position`,options:[{label:`Bottom Right`,value:`bottom-right`},{label:`Bottom Left`,value:`bottom-left`},{label:`Top Right`,value:`top-right`},{label:`Top Left`,value:`top-left`},{label:`Middle Right`,value:`middle-right`},{label:`Middle Left`,value:`middle-left`}],get value(){return t().position},onChange:t=>e({position:t})}),null),O(i,_(U,{label:`Panel Position`,get value(){return t().panelLocation},options:[{label:`Top`,value:`top`},{label:`Bottom`,value:`bottom`}],onChange:t=>e({panelLocation:t})}),null),c(e=>{var t=n().settingsGroup,a=n().settingRow;return t!==e.e&&C(r,e.e=t),a!==e.t&&C(i,e.t=a),e},{e:void 0,t:void 0}),r})()]}})]}})},Ut=e=>{if(e.status===`installing`)return`Installing...`;if(e.status===`success`)return`Installed!`;if(e.status===`error`)return`Error`;switch(e.actionType){case`install`:return`Install`;case`install-devtools`:return`Install Devtools`;case`add-to-devtools`:return`Add to Devtools`;case`requires-package`:return`Requires ${e.requiredPackageName}`;case`wrong-framework`:return`Different Framework`;case`already-installed`:return`Already Installed`;case`bump-version`:return`Bump Version`;case`version-mismatch`:return`Version Mismatch`;default:return`Install`}},Wt=e=>e.actionType===`requires-package`||e.actionType===`wrong-framework`||e.actionType===`version-mismatch`?`danger`:e.actionType===`bump-version`?`warning`:e.actionType===`already-installed`?`secondary`:`primary`,Gt=(e,t)=>{let n=t(),r=n.pluginMarketplaceCardBadge;switch(e.actionType){case`install`:case`install-devtools`:return`${r} ${n.pluginMarketplaceCardBadgeInstall}`;case`add-to-devtools`:return`${r} ${n.pluginMarketplaceCardBadgeAdd}`;case`already-installed`:return`${r} ${n.pluginMarketplaceCardBadgeAdd}`;case`bump-version`:return`${r} ${n.pluginMarketplaceCardBadgeRequires}`;case`version-mismatch`:return`${r} ${n.pluginMarketplaceCardBadgeRequires}`;case`requires-package`:case`wrong-framework`:return`${r} ${n.pluginMarketplaceCardBadgeRequires}`;default:return r}},Kt=e=>{switch(e.actionType){case`install`:case`install-devtools`:return`Available`;case`add-to-devtools`:return`Installed`;case`already-installed`:return`Active`;case`version-mismatch`:return`Incompatible`;case`requires-package`:return`Unavailable`;case`wrong-framework`:return`Other Framework`;default:return``}},qt=k(`<div>New`),Jt=k(`<img>`),Yt=k(`<span>✓ v<!> • Min v`),Xt=k(`<p>`),Zt=k(`<a target=_blank rel="noopener noreferrer">Documentation `),Qt=k(`<div>`),$t=k(`<div style=position:relative><span></span><div></div><div><h3></h3><p></p><p>`),en=k(`<span>⚠️ v<!> • Requires v<!>+`),tn=k(`<span>`),nn=k(`<span>Installing...`),rn=k(`<span>Installed!`),an=e=>{let t=Z(),{card:n}=e;return(()=>{var r=$t(),i=r.firstChild,a=i.nextSibling,o=a.nextSibling,s=o.firstChild,l=s.nextSibling,u=l.nextSibling;return O(r,_(F,{get when(){return n.metadata?.isNew},get children(){var e=qt();return c(()=>C(e,t().pluginMarketplaceNewBanner)),e}}),i),O(i,()=>Kt(n)),O(a,_(F,{get when(){return n.metadata?.logoUrl},get fallback(){return _(ve,{})},get children(){var e=Jt();return c(r=>{var i=n.metadata?.logoUrl,a=n.metadata?.title||n.devtoolsPackage,o=t().pluginMarketplaceCardImage;return i!==r.e&&T(e,`src`,r.e=i),a!==r.t&&T(e,`alt`,r.t=a),o!==r.a&&C(e,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e}})),O(s,()=>n.metadata?.title||n.devtoolsPackage),O(l,()=>n.devtoolsPackage),O(u,(()=>{var e=j(()=>n.actionType===`requires-package`);return()=>e()?`Requires ${n.requiredPackageName}`:j(()=>n.actionType===`wrong-framework`)()?`For different framework projects`:j(()=>n.actionType===`already-installed`)()?`Active in your devtools`:j(()=>n.actionType===`version-mismatch`)()?n.versionInfo?.reason||`Version incompatible`:n.metadata?.description||`For ${n.requiredPackageName}`})()),O(o,_(F,{get when(){return n.versionInfo},get children(){var e=Xt();return O(e,_(F,{get when(){return n.versionInfo?.satisfied},get fallback(){return(()=>{var e=en(),r=e.firstChild.nextSibling,i=r.nextSibling.nextSibling;return i.nextSibling,O(e,()=>n.versionInfo?.current,r),O(e,()=>n.versionInfo?.required,i),c(()=>C(e,t().pluginMarketplaceCardVersionUnsatisfied)),e})()},get children(){var e=Yt(),r=e.firstChild.nextSibling;return r.nextSibling,O(e,()=>n.versionInfo?.current,r),O(e,()=>n.versionInfo?.required,null),c(()=>C(e,t().pluginMarketplaceCardVersionSatisfied)),e}})),c(()=>C(e,t().pluginMarketplaceCardVersionInfo)),e}}),null),O(o,_(F,{get when(){return n.metadata?.docsUrl},get children(){var e=Zt();return e.firstChild,O(e,_(_e,{}),null),c(r=>{var i=n.metadata?.docsUrl,a=t().pluginMarketplaceCardDocsLink;return i!==r.e&&T(e,`href`,r.e=i),a!==r.t&&C(e,r.t=a),r},{e:void 0,t:void 0}),e}}),null),O(o,_(F,{get when(){return j(()=>!!n.metadata?.tags)()&&n.metadata.tags.length>0},get children(){var e=Qt();return O(e,_(y,{get each(){return n.metadata?.tags},children:e=>(()=>{var n=tn();return O(n,e),c(()=>C(n,t().pluginMarketplaceCardTag)),n})()})),c(()=>C(e,t().pluginMarketplaceCardTags)),e}}),null),O(r,_(F,{get when(){return n.status===`idle`},get fallback(){return(()=>{var e=Qt();return O(e,_(F,{get when(){return n.status===`installing`},get children(){return[(()=>{var e=Qt();return c(()=>C(e,t().pluginMarketplaceCardSpinner)),e})(),(()=>{var e=nn();return c(()=>C(e,t().pluginMarketplaceCardStatusText)),e})()]}}),null),O(e,_(F,{get when(){return n.status===`success`},get children(){return[_(ye,{}),(()=>{var e=rn();return c(()=>C(e,t().pluginMarketplaceCardStatusText)),e})()]}}),null),O(e,_(F,{get when(){return n.status===`error`},get children(){return[_(ce,{}),(()=>{var e=tn();return O(e,()=>n.error||`Failed to install`),c(()=>C(e,t().pluginMarketplaceCardStatusTextError)),e})()]}}),null),c(()=>C(e,t().pluginMarketplaceCardStatus)),e})()},get children(){return _(Xe,{get variant(){return Wt(n)},onClick:()=>e.onAction(n),get disabled(){return n.status!==`idle`||n.actionType===`requires-package`||n.actionType===`wrong-framework`||n.actionType===`already-installed`||n.actionType===`version-mismatch`},get class(){return j(()=>n.actionType===`already-installed`)()?t().pluginMarketplaceButtonInstalled:``},get children(){return Ut(n)}})}}),null),c(e=>{var c=t().pluginMarketplaceCard,d={[t().pluginMarketplaceCardDisabled]:!n.isCurrentFramework&&n.actionType!==`already-installed`,[t().pluginMarketplaceCardFeatured]:!!n.metadata?.featured&&n.actionType!==`already-installed`,[t().pluginMarketplaceCardActive]:n.actionType===`already-installed`},f=Gt(n,t),p=t().pluginMarketplaceCardIcon,m=!!n.metadata?.logoUrl,h=t().pluginMarketplaceCardHeader,g=t().pluginMarketplaceCardTitle,_=t().pluginMarketplaceCardPackageBadge,v=t().pluginMarketplaceCardDescriptionText;return c!==e.e&&C(r,e.e=c),e.t=A(r,d,e.t),f!==e.a&&C(i,e.a=f),p!==e.o&&C(a,e.o=p),m!==e.i&&a.classList.toggle(`custom-logo`,e.i=m),h!==e.n&&C(o,e.n=h),g!==e.s&&C(s,e.s=g),_!==e.h&&C(l,e.h=_),v!==e.r&&C(u,e.r=v),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),r})()},on=k(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">`),sn=k(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><rect x=2 y=4 width=20 height=16 rx=2></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">`),cn=k(`<div><div><h4><span></span>Want to be featured here?</h4><p>If you've built a plugin for TanStack Devtools and would like to showcase it in the featured section, we'd love to hear from you! Reach out to us to discuss partnership opportunities.</p><a href="mailto:partners+devtools@tanstack.com?subject=Featured%20Plugin%20Partnership%20Inquiry"><span></span>Contact Us`),ln=k(`<div>`),un=k(`<div><div><div><div></div><h3>`),dn=()=>on(),fn=()=>sn(),pn=e=>{let t=Z();return(()=>{var n=un(),r=n.firstChild,i=r.firstChild,a=i.firstChild,o=a.nextSibling;return D(r,`click`,e.onToggleCollapse,!0),O(a,_(xe,{})),O(o,()=>e.section.displayName),O(n,_(F,{get when(){return!e.isCollapsed()},get children(){return[_(F,{get when(){return e.section.id===`featured`},get children(){var e=cn(),n=e.firstChild,r=n.firstChild,i=r.firstChild,a=r.nextSibling,o=a.nextSibling,s=o.firstChild;return O(i,_(dn,{})),O(s,_(fn,{})),c(c=>{var l=t().pluginMarketplaceFeatureBanner,u=t().pluginMarketplaceFeatureBannerContent,d=t().pluginMarketplaceFeatureBannerTitle,f=t().pluginMarketplaceFeatureBannerIcon,p=t().pluginMarketplaceFeatureBannerText,m=t().pluginMarketplaceFeatureBannerButton,h=t().pluginMarketplaceFeatureBannerButtonIcon;return l!==c.e&&C(e,c.e=l),u!==c.t&&C(n,c.t=u),d!==c.a&&C(r,c.a=d),f!==c.o&&C(i,c.o=f),p!==c.i&&C(a,c.i=p),m!==c.n&&C(o,c.n=m),h!==c.s&&C(s,c.s=h),c},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),e}}),(()=>{var n=ln();return O(n,_(y,{get each(){return e.section.cards},children:t=>_(an,{card:t,get onAction(){return e.onCardAction}})})),c(()=>C(n,t().pluginMarketplaceGrid)),n})()]}}),null),c(s=>{var c=t().pluginMarketplaceSection,l=t().pluginMarketplaceSectionHeader,u=t().pluginMarketplaceSectionHeaderLeft,d=t().pluginMarketplaceSectionChevron,f={[t().pluginMarketplaceSectionChevronCollapsed]:e.isCollapsed()},p=t().pluginMarketplaceSectionTitle;return c!==s.e&&C(n,s.e=c),l!==s.t&&C(r,s.t=l),u!==s.a&&C(i,s.a=u),d!==s.o&&C(a,s.o=d),s.i=A(a,f,s.i),p!==s.n&&C(o,s.n=p),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),n})()};b([`click`]);var mn=k(`<div><div><h3>Marketplace Settings</h3><button></button></div><div>`),hn=e=>{let t=Z();return _(F,{get when(){return e.isOpen()},get children(){var n=mn(),r=n.firstChild,i=r.firstChild,a=i.nextSibling,o=r.nextSibling;return D(a,`click`,e.onClose,!0),O(a,_(ge,{})),O(o,_(H,{label:`Show active plugins`,description:`Display installed plugins in a separate section`,get checked(){return e.showActivePlugins()},onChange:t=>e.setShowActivePlugins(t)})),c(e=>{var s=t().pluginMarketplaceSettingsPanel,c=t().pluginMarketplaceSettingsPanelHeader,l=t().pluginMarketplaceSettingsPanelTitle,u=t().pluginMarketplaceSettingsPanelClose,d=t().pluginMarketplaceSettingsPanelContent;return s!==e.e&&C(n,e.e=s),c!==e.t&&C(r,e.t=c),l!==e.a&&C(i,e.a=l),u!==e.o&&C(a,e.o=u),d!==e.i&&C(o,e.i=d),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),n}})};b([`click`]);var gn=k(`<div>`),_n=k(`<button>`),vn=e=>{let t=Z();return _(F,{get when(){return e.tags().length>0},get children(){var n=gn();return O(n,_(y,{get each(){return e.tags()},children:n=>(()=>{var r=_n();return r.$$click=()=>e.onToggleTag(n),O(r,n),c(i=>{var a=t().pluginMarketplaceTagButton,o={[t().pluginMarketplaceTagButtonActive]:e.selectedTags().has(n)};return a!==i.e&&C(r,i.e=a),i.t=A(r,o,i.t),i},{e:void 0,t:void 0}),r})()})),c(()=>C(n,t().pluginMarketplaceTagsContainer)),n}})};b([`click`]);var yn=k(`<div><div><h2>Plugin Marketplace</h2><div style=display:flex;align-items:center><div><input type=text placeholder="Search plugins..."></div><button></button></div></div><p>Discover and install devtools for TanStack Query, Router, Form, and Pacer`),bn=e=>{let t=Z();return(()=>{var n=yn(),r=n.firstChild,i=r.firstChild,a=i.nextSibling.firstChild,o=a.firstChild,s=a.nextSibling,l=r.nextSibling;return O(a,_(le,{}),o),o.$$input=t=>e.onSearchInput(t.currentTarget.value),D(s,`click`,e.onSettingsClick,!0),O(s,_(Ee,{})),O(n,_(vn,{get tags(){return e.tags},get selectedTags(){return e.selectedTags},get onToggleTag(){return e.onToggleTag}}),null),c(e=>{var c=t().pluginMarketplaceHeader,u=t().pluginMarketplaceTitleRow,d=t().pluginMarketplaceTitle,f=t().pluginMarketplaceSearchWrapper,p=t().pluginMarketplaceSearch,m=t().pluginMarketplaceSettingsButton,h=t().pluginMarketplaceDescription;return c!==e.e&&C(n,e.e=c),u!==e.t&&C(r,e.t=u),d!==e.a&&C(i,e.a=d),f!==e.o&&C(a,e.o=f),p!==e.i&&C(o,e.i=p),m!==e.n&&C(s,e.n=m),h!==e.s&&C(l,e.s=h),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),c(()=>o.value=e.searchInput()),n})()};b([`input`,`click`]);var xn=[`react`,`solid`,`vue`,`svelte`,`angular`],Sn={"@tanstack/react-query-devtools":{packageName:`@tanstack/react-query-devtools`,title:`TanStack Query Devtools`,description:`Powerful devtools for TanStack Query - inspect queries, mutations, and cache`,requires:{packageName:`@tanstack/react-query`,minVersion:`5.0.0`},pluginId:`tanstack-query`,docsUrl:`https://tanstack.com/query/latest/docs/devtools`,author:`TanStack`,framework:`react`,featured:!0,tags:[`TanStack`,`data-fetching`,`caching`,`state-management`]},"@tanstack/solid-query-devtools":{packageName:`@tanstack/solid-query-devtools`,title:`TanStack Query Devtools`,description:`Powerful devtools for TanStack Query - inspect queries, mutations, and cache`,requires:{packageName:`@tanstack/solid-query`,minVersion:`5.0.0`},pluginId:`tanstack-query`,docsUrl:`https://tanstack.com/query/latest/docs/devtools`,author:`TanStack`,framework:`solid`,tags:[`TanStack`,`data-fetching`,`caching`,`state-management`]},"@tanstack/react-router-devtools":{packageName:`@tanstack/react-router-devtools`,title:`TanStack Router Devtools`,description:`Inspect routes, navigation, and router state in real-time`,requires:{packageName:`@tanstack/react-router`,minVersion:`1.0.0`},pluginId:`tanstack-router`,docsUrl:`https://tanstack.com/router/latest/docs/devtools`,author:`TanStack`,framework:`react`,featured:!0,tags:[`TanStack`,`routing`,`navigation`]},"@tanstack/solid-router-devtools":{packageName:`@tanstack/solid-router-devtools`,title:`TanStack Router Devtools`,description:`Inspect routes, navigation, and router state in real-time`,requires:{packageName:`@tanstack/solid-router`,minVersion:`1.0.0`},pluginId:`tanstack-router`,docsUrl:`https://tanstack.com/router/latest/docs/devtools`,author:`TanStack`,framework:`solid`,tags:[`TanStack`,`routing`,`navigation`]},"@tanstack/react-form-devtools":{packageName:`@tanstack/react-form-devtools`,title:`TanStack Form Devtools`,description:`Debug form state, validation, and field values`,requires:{packageName:`@tanstack/react-form`,minVersion:`1.23.0`},pluginImport:{importName:`FormDevtoolsPlugin`,type:`function`},pluginId:`tanstack-form`,docsUrl:`https://tanstack.com/form/latest/docs/devtools`,author:`TanStack`,framework:`react`,isNew:!0,tags:[`TanStack`,`forms`,`validation`]},"@tanstack/solid-form-devtools":{packageName:`@tanstack/solid-form-devtools`,title:`TanStack Form Devtools`,description:`Debug form state, validation, and field values`,requires:{packageName:`@tanstack/solid-form`,minVersion:`1.23.0`},pluginImport:{importName:`FormDevtoolsPlugin`,type:`function`},pluginId:`tanstack-form`,docsUrl:`https://tanstack.com/form/latest/docs/devtools`,author:`TanStack`,isNew:!0,framework:`solid`,tags:[`TanStack`,`forms`,`validation`]},"@tanstack/react-pacer-devtools":{packageName:`@tanstack/react-pacer-devtools`,title:`Pacer Devtools`,description:`Monitor and debug your Pacer animations and transitions`,requires:{packageName:`@tanstack/react-pacer`,minVersion:`0.16.4`},author:`TanStack`,framework:`react`,isNew:!0,tags:[`TanStack`]},"@tanstack/solid-pacer-devtools":{packageName:`@tanstack/solid-pacer-devtools`,title:`Pacer Devtools`,description:`Monitor and debug your Pacer animations and transitions`,requires:{packageName:`@tanstack/solid-pacer`,minVersion:`0.14.4`},author:`TanStack`,framework:`solid`,isNew:!0,tags:[`TanStack`]},"@tanstack/devtools-a11y":{packageName:`@tanstack/devtools-a11y`,title:`Accessibility Devtools`,description:`Audit accessibility issues in real-time with axe-core. Supports WCAG 2.1/2.2, live monitoring, and visual overlays.`,pluginImport:{importName:`createA11yPlugin`,type:`function`},pluginId:`devtools-a11y`,docsUrl:`https://tanstack.com/devtools/latest/docs/plugins/a11y`,author:`TanStack`,framework:`react`,isNew:!0,tags:[`TanStack`,`a11y`]},"@dimano/ts-devtools-plugin-prefetch-heatmap":{packageName:`@dimano/ts-devtools-plugin-prefetch-heatmap`,title:`Prefetch Heatmap`,description:`Visualize TanStack Router prefetch intent, hits, and waste with a color overlay and a live metrics panel.`,requires:{packageName:`@tanstack/react-router`,minVersion:`1.0.0`},pluginImport:{importName:`registerPrefetchHeatmapPlugin`,type:`function`},pluginId:`prefetch-heatmap`,logoUrl:`https://raw.githubusercontent.com/dimitrianoudi/tanstack-prefetch-heatmap/main/assets/prefetch-heatmap-card.png`,docsUrl:`https://github.com/dimitrianoudi/tanstack-prefetch-heatmap#prefetch-heatmap-devtools-plugin`,repoUrl:`https://github.com/dimitrianoudi/tanstack-prefetch-heatmap`,author:`Dimitris Anoudis (@dimitrianoudi)`,framework:`react`,isNew:!0,tags:[`Router`,`Prefetch`,`Analytics`,`Overlay`,`TanStack`]}};function Cn(){return Object.values(Sn)}function $(e){if(!e)return null;let t=e.replace(/^[v^~]/,``).split(`-`)[0]?.split(`+`)[0];if(!t)return null;let n=t.split(`.`);if(n.length<2)return null;let r=parseInt(n[0]??`0`,10),i=parseInt(n[1]??`0`,10),a=parseInt(n[2]??`0`,10);return isNaN(r)||isNaN(i)||isNaN(a)?null:{major:r,minor:i,patch:a,raw:e}}function wn(e,t){return e.major===t.major?e.minor===t.minor?e.patch-t.patch:e.minor-t.minor:e.major-t.major}function Tn(e,t){let n=$(e),r=$(t);return!n||!r?!0:wn(n,r)>=0}function En(e,t){let n=$(e),r=$(t);return!n||!r?!0:wn(n,r)<=0}function Dn(e,t,n){return!t&&!n?{satisfied:!0}:t&&!Tn(e,t)?{satisfied:!1,reason:`Requires v${t} or higher (current: v${e})`}:n&&!En(e,n)?{satisfied:!1,reason:`Requires v${n} or lower (current: v${e})`}:{satisfied:!0}}var On=(e,t)=>{let n={...e.dependencies,...e.devDependencies},r={react:[`react`,`react-dom`],vue:[`vue`,`@vue/core`],solid:[`solid-js`],svelte:[`svelte`],angular:[`@angular/core`]};for(let e of t){let t=r[e];if(t&&t.some(e=>n[e]))return e}return`unknown`},kn=(e,t,n,r,i)=>{if(i)return Array.from(e).some(e=>{let t=e.toLowerCase(),n=i.toLowerCase();return t.startsWith(n)||t.includes(n)});if(e.has(t))return!0;let a=n.toLowerCase().split(/[-_/@]/).filter(e=>e.length>0),o=r.toLowerCase();return Array.from(e).some(e=>{let t=e.toLowerCase();if(t.includes(n.toLowerCase()))return!0;let r=a.filter(e=>t.includes(e));return!!(r.length>=2||t.includes(o)&&r.length>=1)})},An=(e,t,n,r)=>{let i={...e.dependencies,...e.devDependencies},a=[];return Cn().forEach(e=>{let o=e.packageName,s=e.framework===t||e.framework===`other`,c=e.requires?.packageName,l=c?!!i[c]:!1,u=!!i[o],d;if(l&&e.requires){let t=c?i[c]:void 0;if(t){let n=Dn(t,e.requires.minVersion,e.requires.maxVersion);d={current:t,required:e.requires.minVersion,satisfied:n.satisfied,reason:n.reason}}}let f=kn(n,o,e.packageName,e.framework,e.pluginId),p;p=s?e.requires&&!l?`requires-package`:d&&!d.satisfied?`bump-version`:u&&f?`already-installed`:u&&!f?`add-to-devtools`:!u&&e.requires&&l?`install-devtools`:`install`:`wrong-framework`;let m=r.find(e=>e.devtoolsPackage===o);a.push({requiredPackageName:c||``,devtoolsPackage:o,framework:e.framework,hasPackage:l,hasDevtools:u,isRegistered:f,actionType:p,status:m?.status||`idle`,error:m?.error,isCurrentFramework:s,metadata:e,versionInfo:d})}),a},jn=e=>{let t=[],n=e.filter(e=>e.metadata?.featured&&e.actionType!==`already-installed`&&e.isCurrentFramework);t.push({id:`featured`,displayName:`⭐ Featured`,cards:n});let r=e.filter(e=>e.actionType===`already-installed`&&e.isRegistered);r.length>0&&t.push({id:`active`,displayName:`✓ Active Plugins`,cards:r});let i=e.filter(e=>e.isCurrentFramework&&e.actionType!==`already-installed`&&!e.metadata?.featured);return i.length>0&&t.push({id:`available`,displayName:`Available Plugins`,cards:i}),t},Mn=k(`<div><p>`),Nn=k(`<div>`),Pn=()=>{let e=Z(),{plugins:t}=dt(),[n,r]=m([]),[i,a]=m(null),[o,s]=m(``),[u,d]=m(``),[f,p]=m(new Set),[g,v]=m(!0),[b,x]=m(new Set),[S,w]=m(!1),T,E=e=>{s(e),T&&clearTimeout(T),T=setTimeout(()=>{d(e)},300)},D=e=>{p(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},k=(e,t)=>{if(!t)return!0;let n=t.toLowerCase();return e.devtoolsPackage.toLowerCase().includes(n)||e.requiredPackageName.toLowerCase().includes(n)||e.framework.toLowerCase().includes(n)},A=()=>{let e=u(),r=g(),a=b(),o=i();if(!o)return[];let s=jn(An(o,On(o,xn),new Set(t()?.map(e=>e.id||``)||[]),n().flatMap(e=>e.cards)));return r||(s=s.filter(e=>e.id!==`active`)),a.size>0&&(s=s.map(e=>({...e,cards:e.cards.filter(e=>e.metadata?.tags?e.metadata.tags.some(e=>a.has(e)):!1)})).filter(e=>e.cards.length>0)),e?s.map(t=>({...t,cards:t.cards.filter(t=>k(t,e))})).filter(e=>e.cards.length>0):s};l(()=>{let e=J.on(`package-json-read`,e=>{a(e.payload.packageJson),M(e.payload.packageJson)}),t=J.on(`package-json-updated`,e=>{a(e.payload.packageJson),M(e.payload.packageJson)}),n=J.on(`devtools-installed`,e=>{r(t=>t.map(t=>({...t,cards:t.cards.map(t=>t.devtoolsPackage===e.payload.packageName?{...t,status:e.payload.success?`success`:`error`,error:e.payload.error}:t)})))}),o=J.on(`plugin-added`,e=>{if(r(t=>t.map(t=>({...t,cards:t.cards.map(t=>t.devtoolsPackage===e.payload.packageName?{...t,status:e.payload.success?`success`:`error`,error:e.payload.error}:t)}))),e.payload.success){let e=i();e&&M(e)}});h(()=>{e(),t(),n(),o()}),J.emit(`mounted`,void 0)});let M=e=>{e&&r(jn(An(e,On(e,xn),new Set(t()?.map(e=>e.id||``)||[]),n().flatMap(e=>e.cards))))},N=e=>{if(!(e.actionType===`requires-package`||e.actionType===`wrong-framework`||e.actionType===`already-installed`||e.actionType===`version-mismatch`)){if(r(t=>t.map(t=>({...t,cards:t.cards.map(t=>t.devtoolsPackage===e.devtoolsPackage?{...t,status:`installing`}:t)}))),e.actionType===`bump-version`){J.emit(`bump-package-version`,{packageName:e.requiredPackageName,devtoolsPackage:e.devtoolsPackage,pluginName:e.metadata?.title||e.devtoolsPackage,minVersion:e.metadata?.requires?.minVersion,pluginImport:e.metadata?.pluginImport});return}if(e.actionType===`add-to-devtools`){J.emit(`add-plugin-to-devtools`,{packageName:e.devtoolsPackage,pluginName:e.metadata?.title??e.devtoolsPackage,pluginImport:e.metadata?.pluginImport});return}J.emit(`install-devtools`,{packageName:e.devtoolsPackage,pluginName:e.metadata?.title??e.devtoolsPackage,pluginImport:e.metadata?.pluginImport})}},P=()=>{let e=new Set;return n().forEach(t=>{(t.id===`featured`||t.id===`available`)&&t.cards.forEach(t=>{t.metadata?.tags&&t.metadata.tags.forEach(t=>e.add(t))})}),Array.from(e).sort()},ee=e=>{x(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(()=>{var t=Nn();return O(t,_(hn,{isOpen:S,onClose:()=>w(!1),showActivePlugins:g,setShowActivePlugins:v}),null),O(t,_(bn,{searchInput:o,onSearchInput:E,onSettingsClick:()=>w(!S()),tags:P,selectedTags:b,onToggleTag:ee}),null),O(t,_(F,{get when(){return A().length>0},get children(){return _(y,{get each(){return A()},children:e=>_(pn,{section:e,isCollapsed:()=>f().has(e.id),onToggleCollapse:()=>D(e.id),onCardAction:N})})}}),null),O(t,_(F,{get when(){return A().length===0},get children(){var t=Mn(),n=t.firstChild;return O(n,(()=>{var e=j(()=>!!u());return()=>e()?`No plugins found matching "${u()}"`:`No additional plugins available. You have all compatible devtools installed and registered!`})()),c(r=>{var i=e().pluginMarketplaceEmpty,a=e().pluginMarketplaceEmptyText;return i!==r.e&&C(t,r.e=i),a!==r.t&&C(n,r.t=a),r},{e:void 0,t:void 0}),t}}),null),c(()=>C(t,e().pluginMarketplace)),t})()},Fn=k(`<div><div><div><div></div><div><h3>Add More`),In=k(`<div><h3>`),Ln=k(`<div>`),Rn=t=>{let{plugins:i,activePlugins:a,toggleActivePlugins:o}=dt(),{expanded:s,hoverUtils:l,animationMs:u,setForceExpand:d}=ct(),[f,p]=m(new Map),[h,g]=m(!1),b=Z(),{theme:x}=ut(),S=v(()=>i()?.length&&i().length>0);P(()=>{d(h())}),P(()=>{(i()?.filter(e=>a().includes(e.id)))?.forEach(e=>{let n=f().get(e.id);n&&e.render(n,{theme:x(),devtoolsOpen:t.isOpen})})});let w=()=>g(!h()),D=e=>{h()&&g(!1),o(e)};return _(F,{get when(){return S()},get fallback(){return _(Pn,{})},get children(){var o=Fn(),d=o.firstChild,f=d.firstChild,m=f.firstChild,g=m.nextSibling;return d.addEventListener(`mouseleave`,()=>{h()||l.leave()}),d.addEventListener(`mouseenter`,()=>l.enter()),O(m,_(y,{get each(){return i()},children:r=>{let i;P(()=>{i&&(typeof r.name==`string`?i.textContent=r.name:r.name(i,{theme:x(),devtoolsOpen:t.isOpen}))});let o=v(()=>a().includes(r.id));return(()=>{var t=In(),a=t.firstChild;t.$$click=()=>D(r.id);var s=i;return typeof s==`function`?E(s,a):i=a,c(i=>{var s=e(b().pluginName,{active:o()}),c=`${n}-${r.id}`;return s!==i.e&&C(t,i.e=s),c!==i.t&&T(a,`id`,i.t=c),i},{e:void 0,t:void 0}),t})()}})),g.$$click=w,O(o,_(F,{get when(){return h()},get fallback(){return _(y,{get each(){return a()},children:e=>(()=>{var t=Ln();return E(t=>{p(n=>{let r=new Map(n);return r.set(e,t),r})},t),T(t,`id`,`${r}-${e}`),c(()=>C(t,b().pluginsTabContent)),t})()})},get children(){return _(Pn,{})}}),null),c(t=>{var n=b().pluginsTabPanel,r=e(b().pluginsTabDraw(s()),{[b().pluginsTabDraw(s())]:s()},b().pluginsTabDrawTransition(u)),i=e(b().pluginsTabSidebar(s()),b().pluginsTabSidebarTransition(u)),a=b().pluginsList,c=e(b().pluginNameAddMore,{active:h()});return n!==t.e&&C(o,t.e=n),r!==t.t&&C(d,t.t=r),i!==t.a&&C(f,t.a=i),a!==t.o&&C(m,t.o=a),c!==t.i&&C(g,t.i=c),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),o}})};b([`click`]);function zn(e,t={}){let{attributes:n=!0,childList:r=!0,subtree:i=!0,observeTitle:a=!0}=t;l(()=>{let t=new MutationObserver(t=>{for(let n of t)if(n.type===`childList`)n.addedNodes.forEach(t=>e({kind:`added`,node:t},n)),n.removedNodes.forEach(t=>e({kind:`removed`,node:t},n));else if(n.type===`attributes`){let t=n.target;e({kind:`attr`,target:t,name:n.attributeName,oldValue:n.oldValue??null},n)}else n.target.parentNode&&n.target.parentNode.tagName.toLowerCase()===`title`&&e({kind:`title`,title:document.title},n)});t.observe(document.head,{childList:r,attributes:n,subtree:i,attributeOldValue:n,characterData:!0,characterDataOldValue:!1});let o;if(a){let t=document.head.querySelector(`title`)||document.head.appendChild(document.createElement(`title`));o=new MutationObserver(()=>{e({kind:`title`,title:document.title})}),o.observe(t,{childList:!0,characterData:!0,subtree:!0})}h(()=>{t.disconnect(),o?.disconnect()})})}var Bn=k(`<div><div> Preview</div><div></div><div></div><div>`),Vn=k(`<img alt=Preview>`),Hn=k(`<div style=background:#222;color:#888;display:flex;align-items:center;justify-content:center;min-height:80px;width:100%>No Image`),Un=k(`<div>`),Wn=k(`<div><strong>Missing tags for <!>:</strong><ul>`),Gn=k(`<li>`),Kn=[{network:`Facebook`,tags:[{key:`og:title`,prop:`title`},{key:`og:description`,prop:`description`},{key:`og:image`,prop:`image`},{key:`og:url`,prop:`url`}],color:`#4267B2`},{network:`X/Twitter`,tags:[{key:`twitter:title`,prop:`title`},{key:`twitter:description`,prop:`description`},{key:`twitter:image`,prop:`image`},{key:`twitter:url`,prop:`url`}],color:`#1DA1F2`},{network:`LinkedIn`,tags:[{key:`og:title`,prop:`title`},{key:`og:description`,prop:`description`},{key:`og:image`,prop:`image`},{key:`og:url`,prop:`url`}],color:`#0077B5`},{network:`Discord`,tags:[{key:`og:title`,prop:`title`},{key:`og:description`,prop:`description`},{key:`og:image`,prop:`image`},{key:`og:url`,prop:`url`}],color:`#5865F2`},{network:`Slack`,tags:[{key:`og:title`,prop:`title`},{key:`og:description`,prop:`description`},{key:`og:image`,prop:`image`},{key:`og:url`,prop:`url`}],color:`#4A154B`},{network:`Mastodon`,tags:[{key:`og:title`,prop:`title`},{key:`og:description`,prop:`description`},{key:`og:image`,prop:`image`},{key:`og:url`,prop:`url`}],color:`#6364FF`},{network:`Bluesky`,tags:[{key:`og:title`,prop:`title`},{key:`og:description`,prop:`description`},{key:`og:image`,prop:`image`},{key:`og:url`,prop:`url`}],color:`#1185FE`}];function qn(e){let t=Z();return(()=>{var n=Bn(),r=n.firstChild,i=r.firstChild,a=r.nextSibling,o=a.nextSibling,s=o.nextSibling;return O(r,()=>e.network,i),O(n,(()=>{var n=j(()=>!!e.meta.image);return()=>n()?(()=>{var n=Vn();return c(r=>{var i=e.meta.image,a=t().seoPreviewImage;return i!==r.e&&T(n,`src`,r.e=i),a!==r.t&&C(n,r.t=a),r},{e:void 0,t:void 0}),n})():(()=>{var e=Hn();return c(()=>C(e,t().seoPreviewImage)),e})()})(),a),O(a,()=>e.meta.title||`No Title`),O(o,()=>e.meta.description||`No Description`),O(s,()=>e.meta.url||window.location.href),c(i=>{var c=t().seoPreviewCard,l=e.color,u=t().seoPreviewHeader,d=e.color,f=t().seoPreviewTitle,p=t().seoPreviewDesc,m=t().seoPreviewUrl;return c!==i.e&&C(n,i.e=c),l!==i.t&&N(n,`border-color`,i.t=l),u!==i.a&&C(r,i.a=u),d!==i.o&&N(r,`color`,i.o=d),f!==i.i&&C(a,i.i=f),p!==i.n&&C(o,i.n=p),m!==i.s&&C(s,i.s=m),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),n})()}var Jn=()=>{let[e,t]=m(r()),n=Z();function r(){let e=Array.from(document.head.querySelectorAll(`meta`)),t=[];for(let n of Kn){let r={},i=[];for(let t of n.tags){let n=e.find(e=>(t.key.includes(`twitter:`)?!1:e.getAttribute(`property`)===t.key)||e.getAttribute(`name`)===t.key);n&&n.getAttribute(`content`)?r[t.prop]=n.getAttribute(`content`)||void 0:i.push(t.key)}t.push({network:n.network,found:r,missing:i})}return t}return zn(()=>{t(r())}),_(Se,{withPadding:!0,get children(){return _(W,{get children(){return[_(G,{get children(){return[_(q,{get children(){return _(de,{})}}),`Social previews`]}}),_(K,{children:`See how your current page will look when shared on popular social networks. The tool checks for essential meta tags and highlights any that are missing.`}),(()=>{var t=Un();return O(t,_(y,{get each(){return e()},children:(e,t)=>{let r=Kn[t()];return(()=>{var t=Un();return O(t,_(qn,{get meta(){return e.found},get color(){return r.color},get network(){return r.network}}),null),O(t,(()=>{var t=j(()=>e.missing.length>0);return()=>t()?(()=>{var t=Wn(),i=t.firstChild,a=i.firstChild.nextSibling;a.nextSibling;var o=i.nextSibling;return O(i,()=>r?.network,a),O(o,_(y,{get each(){return e.missing},children:e=>(()=>{var t=Gn();return O(t,e),c(()=>C(t,n().seoMissingTag)),t})()})),c(e=>{var r=n().seoMissingTagsSection,i=n().seoMissingTagsList;return r!==e.e&&C(t,e.e=r),i!==e.t&&C(o,e.t=i),e},{e:void 0,t:void 0}),t})():null})(),null),t})()}})),c(()=>C(t,n().seoPreviewSection)),t})()]}})}})},Yn=[{name:`Plugins`,id:`plugins`,component:e=>_(Rn,e),icon:()=>_(be,{})},{name:`SEO`,id:`seo`,component:()=>_(Jn,{}),icon:()=>_(he,{})},{name:`Settings`,id:`settings`,component:()=>_(Ht,{}),icon:()=>_(ue,{})}],Xn=k(`<div>`),Zn=k(`<button type=button>`),Qn=k(`<div style=margin-top:auto;width:100%><button type=button></button><button type=button>`),$n=t=>{let n=Z(),{state:r,setState:i}=Y(),a=I(),o=()=>{a().requestPipWindow(`width=${window.innerWidth},height=${r().height},top=${window.screen.height},left=${window.screenLeft}}`)},{hoverUtils:s}=ct();return(()=>{var l=Xn();return O(l,_(y,{each:Yn,children:t=>(()=>{var a=Zn();return a.addEventListener(`mouseleave`,()=>{t.id===`plugins`&&s.leave()}),a.addEventListener(`mouseenter`,()=>{t.id===`plugins`&&s.enter()}),a.$$click=()=>i({activeTab:t.id}),O(a,()=>t.icon()),c(()=>C(a,e(n().tab,{active:r().activeTab===t.id}))),a})()}),null),O(l,(()=>{var r=j(()=>a().pipWindow!==null);return()=>r()?null:(()=>{var r=Qn(),i=r.firstChild,a=i.nextSibling;return i.$$click=o,O(i,_(me,{})),a.$$click=()=>t.toggleOpen(),O(a,_(Te,{})),c(t=>{var r=e(n().tab,`detach`),o=e(n().tab,`close`);return r!==t.e&&C(i,t.e=r),o!==t.t&&C(a,t.t=o),t},{e:void 0,t:void 0}),r})()})(),null),c(()=>C(l,n().tabContainer)),l})()};b([`click`]);var er=k(`<div>`),tr=e=>{let{state:t}=Y(),n=Z(),r=v(()=>Yn.find(e=>e.id===t().activeTab)?.component||null);return(()=>{var t=er();return O(t,()=>r()?.({isOpen:e.isOpen})),c(()=>C(t,n().tabContent)),t})()},nr=k(`<div style=pointer-events:none>`),rr=()=>{let{settings:e}=X(),t=()=>({element:null,bounding:{width:0,height:0,left:0,top:0},dataSource:``}),[n,r]=te(t()),i=()=>{r(t())},[a,o]=m(null),s=it(()=>a()),[l,u]=te({x:0,y:0});Ne(document,`mousemove`,e=>{u({x:e.clientX,y:e.clientY})});let d=Ie(),f=v(()=>vt(d(),e().inspectHotkey));P(()=>{if(!f()){i();return}let e=document.elementFromPoint(l.x,l.y);if(!(e instanceof HTMLElement)){i();return}if(e===n.element)return;let t=e.getAttribute(`data-tsd-source`);if(!t){i();return}let a=e.getBoundingClientRect();r({element:e,bounding:{width:a.width,height:a.height,left:a.left,top:a.top},dataSource:t})}),Ne(document,`click`,e=>{if(!n.element)return;window.getSelection()?.removeAllRanges(),e.preventDefault(),e.stopPropagation();let t=new URL(`/`,location.origin),r=new URL(`__tsd/open-source?source=${encodeURIComponent(n.dataSource)}`,t);fetch(r).catch(()=>{})});let p=v(()=>n.element?{display:`block`,width:`${n.bounding.width}px`,height:`${n.bounding.height}px`,left:`${n.bounding.left}px`,top:`${n.bounding.top}px`,"background-color":`oklch(55.4% 0.046 257.417 /0.25)`,transition:`all 0.05s linear`,position:`fixed`,"z-index":9999}:{display:`none`}),h=v(()=>{if(n.element&&a()){let e=window.innerWidth,t=s.height||26,r=s.width||0,i=n.bounding.left,a=n.bounding.top-t-4;return a<0&&(a=n.bounding.top+n.bounding.height+4),i+r>e&&(i=e-r-4),i<0&&(i=4),{position:`fixed`,left:`${i}px`,top:`${a}px`,"background-color":`oklch(55.4% 0.046 257.417 /0.80)`,color:`white`,padding:`2px 4px`,fontSize:`12px`,"border-radius":`2px`,"z-index":1e4,visibility:`visible`,transition:`all 0.05s linear`}}return{display:`none`}});return[(()=>{var e=nr();return E(o,e),O(e,()=>n.dataSource),c(t=>S(e,{...h()},t)),e})(),(()=>{var e=nr();return c(t=>S(e,{...p()},t)),e})()]},ir=k(`<div>`);function ar(){let{settings:e}=X(),{setHeight:t}=pt(),{persistOpen:n,setPersistOpen:r}=ft(),[i,a]=m(),[o,s]=m(e().defaultOpen||n()),c=I(),l,[u,d]=m(!1),f=()=>{if(c().pipWindow)return;let e=!o();s(e),r(e),J.emit(`trigger-toggled`,{isOpen:e})};P(()=>{h(J.on(`trigger-toggled`,e=>{if(c().pipWindow)return;let t=e.payload.isOpen;t!==o()&&(s(t),r(t))}))});let p=(n,r)=>{if(r.button!==0||!n)return;d(!0);let i={originalHeight:n.getBoundingClientRect().height,pageY:r.pageY},a=n=>{let r=i.pageY-n.pageY,a=e().panelLocation===`bottom`?i.originalHeight+r:i.originalHeight-r;t(a),s(!(a<70))},o=()=>{d(!1),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseUp`,o)};document.addEventListener(`mousemove`,a),document.addEventListener(`mouseup`,o)};P(()=>{if(o()){let e=i()?.parentElement?.style.paddingBottom,t=()=>{l&&i()?.parentElement&&a(e=>(e?.parentElement,e))};if(t(),typeof window<`u`)return(c().pipWindow??window).addEventListener(`resize`,t),()=>{(c().pipWindow??window).removeEventListener(`resize`,t),i()?.parentElement&&typeof e==`string`&&a(e=>e)}}else i()?.parentElement&&a(e=>(e?.parentElement&&e.parentElement.removeAttribute(`style`),e))}),P(()=>{window.addEventListener(`keydown`,e=>{e.key===`Escape`&&o()&&f()})}),ht(o),P(()=>{if(i()){let e=i(),t=getComputedStyle(e).fontSize;e?.style.setProperty(`--tsrd-font-size`,t)}}),P(()=>{let t=e=>{if(!e||!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`?!0:e.getAttribute(`role`)===`textbox`},n=_t(e().openHotkey);for(let e of n)Re(e,()=>{t(document.activeElement)||f()})});let{theme:g}=ut();return P(()=>{typeof document>`u`||(document.documentElement.dataset.tanstackDevtoolsTheme=g())}),_(oe,{get theme(){return g()},get children(){return _(M,{get mount(){return(c().pipWindow??window).document.body},get children(){var t=ir();return E(a,t),T(t,`data-testid`,re),O(t,_(F,{get when(){return j(()=>c().pipWindow!==null)()?!0:j(()=>!!e().requireUrlFlag)()?window.location.search.includes(e().urlFlag):!0},get children(){return[_(Nt,{isOpen:o,setIsOpen:f}),_(Ft,{isResizing:u,isOpen:o,get children(){return _(Lt,{ref:e=>l=e,handleDragStart:e=>p(l,e),get children(){return[_($n,{toggleOpen:f}),_(tr,{get isOpen(){return o()}})]}})}})]}}),null),O(t,_(rr,{}),null),t}})}})}export{ar as default};