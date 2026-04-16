import{s as e}from"./rolldown-runtime-C5c2KzVm.js";import{t}from"./dayjs.min-C2MO-Ofd.js";import{t as n}from"./clsx-1dnHRn8W.js";import{t as r}from"./EventClient-doIei7bV.js";import{t as i}from"./relativeTime-Bl6_Ry40.js";import{C as a,E as o,F as s,M as c,O as l,P as u,R as d,S as f,T as p,_ as m,a as h,b as g,d as _,i as v,l as y,n as b,o as x,p as S,s as C,u as w,v as T,w as E,y as D}from"./web-DLJX7gCi.js";import{t as O}from"./store-CP-YqTJG.js";import{C as k,D as A,E as j,O as M,c as N,o as P,s as F,t as I,w as L}from"./main-panel-CBELOT4P.js";var R=e(t(),1),z=S(`<span>`),B=S(`<span>&quot;<!>&quot;: `),ee=S(`<span>&quot;<!>&quot;`),te=S(`<span>null`),ne=S(`<span>undefined`),re=S(`<div>`),ie=S(`<span>,`),ae=S(`<span><span>[]`),V=S(`<span>...`),oe=S(`<span><span>[</span><span>]`),H=S(`<span>&quot;<!>&quot;: <span> items`),se=S(`<span><span>`),ce=S(`<span><span>{}`),le=S(`<span><span>{</span><span>}`),ue=S(`<button title="Copy object to clipboard">`),U=S(`<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);function W(e){return f(G,{isRoot:!0,get value(){return e.value},get copyable(){return e.copyable},depth:0,get defaultExpansionDepth(){return e.defaultExpansionDepth??1},path:``,get collapsePaths(){return e.collapsePaths},get config(){return e.config}})}function G(e){let t=L();return(()=>{var r=z();return x(r,(()=>{var n=C(()=>!!(e.keyName&&typeof e.value!=`object`&&!Array.isArray(e.value)));return()=>n()&&(()=>{var n=B(),r=n.firstChild.nextSibling;return r.nextSibling,x(n,()=>e.keyName,r),o(()=>v(n,t().tree.valueKey)),n})()})(),null),x(r,()=>typeof e.value==`string`?(()=>{var n=ee(),r=n.firstChild.nextSibling;return r.nextSibling,x(n,()=>e.value,r),o(()=>v(n,t().tree.valueString)),n})():typeof e.value==`number`?(()=>{var n=z();return x(n,()=>e.value),o(()=>v(n,t().tree.valueNumber)),n})():typeof e.value==`boolean`?(()=>{var n=z();return x(n,()=>String(e.value)),o(()=>v(n,t().tree.valueBoolean)),n})():e.value===null?(()=>{var e=te();return o(()=>v(e,t().tree.valueNull)),e})():e.value===void 0?(()=>{var e=ne();return o(()=>v(e,t().tree.valueNull)),e})():typeof e.value==`function`?(()=>{var n=z();return x(n,()=>String(e.value)),o(()=>v(n,t().tree.valueFunction)),n})():Array.isArray(e.value)?f(de,{get defaultExpansionDepth(){return e.defaultExpansionDepth},get depth(){return e.depth},get copyable(){return e.copyable},get keyName(){return e.keyName},get value(){return e.value},get collapsePaths(){return e.collapsePaths},get path(){return e.path},get config(){return e.config}}):typeof e.value==`object`?f(fe,{get defaultExpansionDepth(){return e.defaultExpansionDepth},get depth(){return e.depth},get copyable(){return e.copyable},get keyName(){return e.keyName},get value(){return e.value},get collapsePaths(){return e.collapsePaths},get path(){return e.path},get config(){return e.config}}):z(),null),x(r,(()=>{var r=C(()=>!!e.copyable);return()=>r()&&(()=>{var r=re();return x(r,f(pe,{get value(){return e.value}})),o(()=>v(r,n(t().tree.actions,`actions`))),r})()})(),null),x(r,(()=>{var t=C(()=>!!(e.isLastKey||e.isRoot));return()=>t()?``:ie()})(),null),o(()=>v(r,t().tree.valueContainer(e.isRoot??!1))),r})()}var de=e=>{let t=L(),[r,i]=l(e.depth<=e.defaultExpansionDepth&&!e.collapsePaths?.includes(e.path));return e.value.length===0?(()=>{var r=ae(),i=r.firstChild;return x(r,(()=>{var r=C(()=>!!e.keyName);return()=>r()&&(()=>{var r=B(),i=r.firstChild.nextSibling;return i.nextSibling,x(r,()=>e.keyName,i),o(()=>v(r,n(t().tree.valueKey,t().tree.collapsible))),r})()})(),i),o(e=>{var n=t().tree.expanderContainer,a=t().tree.valueBraces;return n!==e.e&&v(r,e.e=n),a!==e.t&&v(i,e.t=a),e},{e:void 0,t:void 0}),r})():(()=>{var a=oe(),s=a.firstChild,c=s.nextSibling;return x(a,f(K,{onClick:()=>i(!r()),get expanded(){return r()}}),s),x(a,(()=>{var a=C(()=>!!e.keyName);return()=>a()&&(()=>{var a=H(),s=a.firstChild.nextSibling,c=s.nextSibling.nextSibling,l=c.firstChild;return a.$$click=e=>{e.stopPropagation(),e.stopImmediatePropagation(),i(!r())},x(a,()=>e.keyName,s),x(c,()=>e.value.length,l),o(e=>{var r=n(t().tree.valueKey,t().tree.collapsible),i=t().tree.info;return r!==e.e&&v(a,e.e=r),i!==e.t&&v(c,e.t=i),e},{e:void 0,t:void 0}),a})()})(),s),x(a,f(D,{get when(){return r()},get children(){var n=z();return x(n,f(m,{get each(){return e.value},children:(t,n)=>f(G,{get copyable(){return e.copyable},value:t,isLastKey:n()===e.value.length-1,get defaultExpansionDepth(){return e.defaultExpansionDepth},get depth(){return e.depth+1},get collapsePaths(){return e.collapsePaths},get path(){return C(()=>!!e.path)()?`${e.path}[${n()}]`:`[${n()}]`},get config(){return e.config}})})),o(()=>v(n,t().tree.expandedLine(!!e.keyName))),n}}),c),x(a,f(D,{get when(){return!r()},get children(){var e=V();return e.$$click=e=>{e.stopPropagation(),e.stopImmediatePropagation(),i(!r())},o(()=>v(e,n(t().tree.valueKey,t().tree.collapsible))),e}}),c),o(e=>{var n=t().tree.expanderContainer,r=t().tree.valueBraces,i=t().tree.valueBraces;return n!==e.e&&v(a,e.e=n),r!==e.t&&v(s,e.t=r),i!==e.a&&v(c,e.a=i),e},{e:void 0,t:void 0,a:void 0}),a})()},fe=e=>{let t=L(),[r,i]=l(e.depth<=e.defaultExpansionDepth&&!e.collapsePaths?.includes(e.path)),a=Object.keys(e.value),s=a[a.length-1];return e.value instanceof Date?(()=>{var r=se(),i=r.firstChild;return x(r,(()=>{var r=C(()=>!!e.keyName);return()=>r()&&(()=>{var r=B(),i=r.firstChild.nextSibling;return i.nextSibling,x(r,()=>e.keyName,i),o(()=>v(r,n(t().tree.valueKey,t().tree.collapsible))),r})()})(),i),x(i,()=>(0,R.default)(e.value).format(e.config?.dateFormat?e.config.dateFormat:`DDMMMYY`)),o(e=>{var n=t().tree.expanderContainer,a=t().tree.valueBraces;return n!==e.e&&v(r,e.e=n),a!==e.t&&v(i,e.t=a),e},{e:void 0,t:void 0}),r})():a.length===0?(()=>{var r=ce(),i=r.firstChild;return x(r,(()=>{var r=C(()=>!!e.keyName);return()=>r()&&(()=>{var r=B(),i=r.firstChild.nextSibling;return i.nextSibling,x(r,()=>e.keyName,i),o(()=>v(r,n(t().tree.valueKey,t().tree.collapsible))),r})()})(),i),o(e=>{var n=t().tree.expanderContainer,a=t().tree.valueBraces;return n!==e.e&&v(r,e.e=n),a!==e.t&&v(i,e.t=a),e},{e:void 0,t:void 0}),r})():(()=>{var c=le(),l=c.firstChild,u=l.nextSibling;return x(c,(()=>{var t=C(()=>!!e.keyName);return()=>t()&&f(K,{onClick:()=>i(!r()),get expanded(){return r()}})})(),l),x(c,(()=>{var s=C(()=>!!e.keyName);return()=>s()&&(()=>{var s=H(),c=s.firstChild.nextSibling,l=c.nextSibling.nextSibling,u=l.firstChild;return s.$$click=e=>{e.stopPropagation(),e.stopImmediatePropagation(),i(!r())},x(s,()=>e.keyName,c),x(l,()=>a.length,u),o(e=>{var r=n(t().tree.valueKey,t().tree.collapsible),i=t().tree.info;return r!==e.e&&v(s,e.e=r),i!==e.t&&v(l,e.t=i),e},{e:void 0,t:void 0}),s})()})(),l),x(c,f(D,{get when(){return r()},get children(){var n=z();return x(n,f(m,{each:a,children:t=>f(G,{get value(){return e.value[t]},keyName:t,isLastKey:s===t,get copyable(){return e.copyable},get defaultExpansionDepth(){return e.defaultExpansionDepth},get depth(){return e.depth+1},get collapsePaths(){return e.collapsePaths},get path(){return`${e.path}${e.path?`.`:``}${t}`},get config(){return e.config}})})),o(()=>v(n,t().tree.expandedLine(!!e.keyName))),n}}),u),x(c,f(D,{get when(){return!r()},get children(){var e=V();return e.$$click=e=>{e.stopPropagation(),e.stopImmediatePropagation(),i(!r())},o(()=>v(e,n(t().tree.valueKey,t().tree.collapsible))),e}}),u),o(e=>{var n=t().tree.expanderContainer,r=t().tree.valueBraces,i=t().tree.valueBraces;return n!==e.e&&v(c,e.e=n),r!==e.t&&v(l,e.t=r),i!==e.a&&v(u,e.a=i),e},{e:void 0,t:void 0,a:void 0}),c})()},pe=e=>{let t=L(),[n,r]=l(`NoCopy`);return(()=>{var i=ue();return b(i,`click`,n()===`NoCopy`?()=>{navigator.clipboard.writeText(JSON.stringify(e.value,null,2)).then(()=>{r(`SuccessCopy`),setTimeout(()=>{r(`NoCopy`)},1500)},e=>{console.error(`Failed to copy: `,e),r(`ErrorCopy`),setTimeout(()=>{r(`NoCopy`)},1500)})}:void 0,!0),x(i,f(g,{get children(){return[f(T,{get when(){return n()===`NoCopy`},get children(){return f(F,{})}}),f(T,{get when(){return n()===`SuccessCopy`},get children(){return f(P,{theme:`dark`})}}),f(T,{get when(){return n()===`ErrorCopy`},get children(){return f(N,{})}})]}})),o(e=>{var r=t().tree.actionButton,a=`${n()===`NoCopy`?`Copy object to clipboard`:n()===`SuccessCopy`?`Object copied to clipboard`:`Error copying object to clipboard`}`;return r!==e.e&&v(i,e.e=r),a!==e.t&&y(i,`aria-label`,e.t=a),e},{e:void 0,t:void 0}),i})()},K=e=>{let t=L();return(()=>{var r=U();return b(r,`click`,e.onClick,!0),o(()=>v(r,n(t().tree.expander,k`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&k`
            & svg {
              top: -1px;
            }
          `))),r})()};h([`click`]);var me=S(`<header>`),he=S(`<div><button><span>TANSTACK</span><span>`);function ge({children:e,class:t,...r}){let i=L();return(()=>{var a=me();return _(a,c({get class(){return n(i().header.row,`tsqd-header`,t)}},r),!1,!0),x(a,e),a})()}function _e({children:e,flavor:t,onClick:r}){let i=L();return(()=>{var a=he(),s=a.firstChild,c=s.firstChild,l=c.nextSibling;return b(s,`click`,r,!0),x(l,e),o(e=>{var r=i().header.logoAndToggleContainer,o=n(i().header.logo),u=n(i().header.tanstackLogo),d=n(i().header.flavorLogo(t.light,t.dark));return r!==e.e&&v(a,e.e=r),o!==e.t&&v(s,e.t=o),u!==e.a&&v(c,e.a=u),d!==e.o&&v(l,e.o=d),e},{e:void 0,t:void 0,a:void 0,o:void 0}),a})()}h([`click`]);var ve=e(i(),1);function ye(){let[e,t]=O([]);return E(()=>{u(r.on(`form-api`,n=>{let r=n.payload.id,i=e.findIndex(e=>e.id===r);i>-1?t(i,{state:n.payload.state,options:n.payload.options,date:(0,R.default)()}):t(e=>[...e,{id:r,state:n.payload.state,options:n.payload.options,date:(0,R.default)(),history:[]}])}))}),E(()=>{u(r.on(`form-state`,n=>{let r=n.payload.id,i=e.findIndex(e=>e.id===r);i>-1?t(i,{state:n.payload.state,date:(0,R.default)()}):t(e=>[...e,{id:r,state:n.payload.state,options:{},date:(0,R.default)(),history:[]}])}))}),E(()=>{u(r.on(`form-submission`,n=>{let r=n.payload.id,i=e.findIndex(e=>e.id===r);if(i>-1&&e[i]){let{id:r,...a}=n.payload;t(i,`history`,[a,...e[i].history].slice(0,5))}}))}),E(()=>{u(r.on(`form-unmounted`,e=>{t(t=>t.filter(t=>t.id!==e.payload.id))}))}),{store:e}}var q=a(void 0),be=e=>{let t=ye();return f(q.Provider,{value:t,get children(){return e.children}})};function J(){let e=d(q);if(e===void 0)throw Error(`useFormEventClient must be used within a FormEventClientContext`);return{store:p(()=>e.store)}}var Y={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{100:`ff`,90:`e5`,80:`cc`,70:`b3`,60:`99`,50:`80`,40:`66`,30:`4d`,20:`33`,10:`1a`,0:`00`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`,lg:`calc(var(--tsrd-font-size) * 1.125)`,xl:`calc(var(--tsrd-font-size) * 1.25)`,"2xl":`calc(var(--tsrd-font-size) * 1.5)`,"3xl":`calc(var(--tsrd-font-size) * 1.875)`,"4xl":`calc(var(--tsrd-font-size) * 2.25)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.75)`,"7xl":`calc(var(--tsrd-font-size) * 4.5)`,"8xl":`calc(var(--tsrd-font-size) * 6)`,"9xl":`calc(var(--tsrd-font-size) * 8)`},lineHeight:{"3xs":`calc(var(--tsrd-font-size) * 0.75)`,"2xs":`calc(var(--tsrd-font-size) * 0.875)`,xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`,md:`calc(var(--tsrd-font-size) * 1.5)`,lg:`calc(var(--tsrd-font-size) * 1.75)`,xl:`calc(var(--tsrd-font-size) * 2)`,"2xl":`calc(var(--tsrd-font-size) * 2.25)`,"3xl":`calc(var(--tsrd-font-size) * 2.5)`,"4xl":`calc(var(--tsrd-font-size) * 2.75)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.25)`,"7xl":`calc(var(--tsrd-font-size) * 3.5)`,"8xl":`calc(var(--tsrd-font-size) * 3.75)`,"9xl":`calc(var(--tsrd-font-size) * 4)`},weight:{thin:`100`,extralight:`200`,light:`300`,normal:`400`,medium:`500`,semibold:`600`,bold:`700`,extrabold:`800`,black:`900`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},breakpoints:{xs:`320px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},border:{radius:{none:`0px`,xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,lg:`calc(var(--tsrd-font-size) * 0.5)`,xl:`calc(var(--tsrd-font-size) * 0.75)`,"2xl":`calc(var(--tsrd-font-size) * 1)`,"3xl":`calc(var(--tsrd-font-size) * 1.5)`,full:`9999px`}},size:{0:`0px`,.25:`calc(var(--tsrd-font-size) * 0.0625)`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,4.5:`calc(var(--tsrd-font-size) * 1.125)`,5:`calc(var(--tsrd-font-size) * 1.25)`,5.5:`calc(var(--tsrd-font-size) * 1.375)`,6:`calc(var(--tsrd-font-size) * 1.5)`,6.5:`calc(var(--tsrd-font-size) * 1.625)`,7:`calc(var(--tsrd-font-size) * 1.75)`,8:`calc(var(--tsrd-font-size) * 2)`,9:`calc(var(--tsrd-font-size) * 2.25)`,10:`calc(var(--tsrd-font-size) * 2.5)`,11:`calc(var(--tsrd-font-size) * 2.75)`,12:`calc(var(--tsrd-font-size) * 3)`,14:`calc(var(--tsrd-font-size) * 3.5)`,16:`calc(var(--tsrd-font-size) * 4)`,20:`calc(var(--tsrd-font-size) * 5)`,24:`calc(var(--tsrd-font-size) * 6)`,28:`calc(var(--tsrd-font-size) * 7)`,32:`calc(var(--tsrd-font-size) * 8)`,36:`calc(var(--tsrd-font-size) * 9)`,40:`calc(var(--tsrd-font-size) * 10)`,44:`calc(var(--tsrd-font-size) * 11)`,48:`calc(var(--tsrd-font-size) * 12)`,52:`calc(var(--tsrd-font-size) * 13)`,56:`calc(var(--tsrd-font-size) * 14)`,60:`calc(var(--tsrd-font-size) * 15)`,64:`calc(var(--tsrd-font-size) * 16)`,72:`calc(var(--tsrd-font-size) * 18)`,80:`calc(var(--tsrd-font-size) * 20)`,96:`calc(var(--tsrd-font-size) * 24)`},shadow:{xs:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 2px 0 rgb(0 0 0 / 0.05)`,sm:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e=`rgb(0 0 0 / 0.1)`)=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e=`rgb(0 0 0 / 0.1)`)=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e=`rgb(0 0 0 / 0.1)`)=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e=`rgb(0 0 0 / 0.25)`)=>`0 25px 50px -12px ${e}`,inner:(e=`rgb(0 0 0 / 0.05)`)=>`inset 0 2px 4px 0 ${e}`,none:()=>`none`},zIndices:{hide:-1,auto:`auto`,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},X=e=>{let{colors:t,font:n,size:r,alpha:i,border:a}=Y,{fontFamily:o,size:s}=n,c=j,l=(t,n)=>e===`light`?t:n;return{mainContainer:c`
      display: flex;
      flex: 1;
      min-height: 80%;
      overflow: hidden;
      padding: ${r[2]};
    `,dragHandle:c`
      width: 8px;
      background: ${l(t.gray[300],t.darkGray[600])};
      cursor: col-resize;
      position: relative;
      transition: all 0.2s ease;
      user-select: none;
      pointer-events: all;
      margin: 0 ${r[1]};
      border-radius: 2px;

      &:hover {
        background: ${l(t.blue[600],t.blue[500])};
        margin: 0 ${r[1]};
      }

      &.dragging {
        background: ${l(t.blue[700],t.blue[600])};
        margin: 0 ${r[1]};
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2px;
        height: 20px;
        background: ${l(t.gray[400],t.darkGray[400])};
        border-radius: 1px;
        pointer-events: none;
      }

      &:hover::after,
      &.dragging::after {
        background: ${l(t.blue[500],t.blue[300])};
      }
    `,leftPanel:c`
      background: ${l(t.gray[100],t.darkGray[800])};
      border-radius: ${a.radius.lg};
      border: 1px solid ${l(t.gray[200],t.darkGray[700])};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
      flex-shrink: 0;
    `,rightPanel:c`
      background: ${l(t.gray[100],t.darkGray[800])};
      border-radius: ${a.radius.lg};
      border: 1px solid ${l(t.gray[200],t.darkGray[700])};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
      flex: 1;
    `,panelHeader:c`
      font-size: ${s.md};
      font-weight: ${n.weight.bold};
      color: ${l(t.blue[700],t.blue[400])};
      padding: ${r[2]};
      border-bottom: 1px solid ${l(t.gray[200],t.darkGray[700])};
      background: ${l(t.gray[100],t.darkGray[800])};
      flex-shrink: 0;
    `,utilList:c`
      flex: 1;
      overflow-y: auto;
      padding: ${r[1]};
      min-height: 0;
    `,utilGroup:c`
      margin-bottom: ${r[2]};
    `,utilGroupHeader:c`
      font-size: ${s.xs};
      font-weight: ${n.weight.semibold};
      color: ${l(t.gray[600],t.gray[400])};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: ${r[1]};
      padding: ${r[1]} ${r[2]};
      background: ${l(t.gray[200],t.darkGray[700])};
      border-radius: ${a.radius.md};
    `,utilRow:c`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${r[2]};
      margin-bottom: ${r[1]};
      background: ${l(t.gray[200],t.darkGray[700])};
      border-radius: ${a.radius.md};
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;

      &:hover {
        background: ${l(t.gray[300],t.darkGray[600])};
        border-color: ${l(t.gray[400],t.darkGray[500])};
      }
    `,utilRowSelected:c`
      background: ${l(t.blue[100],t.blue[900]+i[20])};
      border-color: ${l(t.blue[600],t.blue[500])};
      box-shadow: 0 0 0 1px
        ${l(t.blue[600]+i[30],t.blue[500]+i[30])};
    `,utilKey:c`
      font-family: ${o.mono};
      font-size: ${s.xs};
      color: ${l(t.gray[900],t.gray[100])};
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,utilStatus:c`
      font-size: ${s.xs};
      color: ${l(t.gray[600],t.gray[400])};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: ${r[1]} ${r[1]};
      background: ${l(t.gray[300],t.darkGray[600])};
      border-radius: ${a.radius.sm};
      margin-left: ${r[1]};
    `,stateDetails:c`
      flex: 1;
      overflow-y: auto;
      padding: ${r[2]};
      min-height: 0;
    `,stateHeader:c`
      margin-bottom: ${r[2]};
      padding-bottom: ${r[2]};
      border-bottom: 1px solid ${l(t.gray[200],t.darkGray[700])};
    `,stateTitle:c`
      font-size: ${s.md};
      font-weight: ${n.weight.bold};
      color: ${l(t.blue[700],t.blue[400])};
      margin-bottom: ${r[1]};
    `,stateKey:c`
      font-family: ${o.mono};
      font-size: ${s.xs};
      color: ${l(t.gray[600],t.gray[400])};
      word-break: break-all;
    `,stateContent:c`
      background: ${l(t.gray[100],t.darkGray[700])};
      border-radius: ${a.radius.md};
      padding: ${r[2]};
      border: 1px solid ${l(t.gray[300],t.darkGray[600])};
    `,detailsGrid:c`
      display: grid;
      grid-template-columns: 1fr;
      gap: ${r[2]};
      align-items: start;
    `,detailSection:c`
      background: ${l(t.white,t.darkGray[700])};
      border: 1px solid ${l(t.gray[300],t.darkGray[600])};
      border-radius: ${a.radius.md};
      padding: ${r[2]};
    `,detailSectionHeader:c`
      font-size: ${s.sm};
      font-weight: ${n.weight.bold};
      color: ${l(t.gray[800],t.gray[200])};
      margin-bottom: ${r[1]};
      text-transform: uppercase;
      letter-spacing: 0.04em;
    `,actionsRow:c`
      display: flex;
      flex-wrap: wrap;
      gap: ${r[2]};
    `,actionButton:c`
      display: inline-flex;
      align-items: center;
      gap: ${r[1]};
      padding: ${r[1]} ${r[2]};
      border-radius: ${a.radius.md};
      border: 1px solid ${l(t.gray[300],t.darkGray[500])};
      background: ${l(t.gray[200],t.darkGray[600])};
      color: ${l(t.gray[900],t.gray[100])};
      font-size: ${s.xs};
      cursor: pointer;
      user-select: none;
      transition:
        background 0.15s,
        border-color 0.15s;
      &:hover {
        background: ${l(t.gray[300],t.darkGray[500])};
        border-color: ${l(t.gray[400],t.darkGray[400])};
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background: ${l(t.gray[200],t.darkGray[600])};
          border-color: ${l(t.gray[300],t.darkGray[500])};
        }
      }
    `,actionDotBlue:c`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${t.blue[400]};
    `,actionDotGreen:c`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${t.green[400]};
    `,actionDotRed:c`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${t.red[400]};
    `,actionDotYellow:c`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${t.yellow[400]};
    `,actionDotOrange:c`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${t.pink[400]};
    `,actionDotPurple:c`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${t.purple[400]};
    `,infoGrid:c`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${r[1]};
      row-gap: ${r[1]};
      align-items: center;
    `,infoLabel:c`
      color: ${l(t.gray[600],t.gray[400])};
      font-size: ${s.xs};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,infoValueMono:c`
      font-family: ${o.mono};
      font-size: ${s.xs};
      color: ${l(t.gray[900],t.gray[100])};
      word-break: break-all;
    `,noSelection:c`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${l(t.gray[500],t.gray[500])};
      font-style: italic;
      text-align: center;
      padding: ${r[4]};
    `,sectionContainer:c`
      display: flex;
      flex-wrap: wrap;
      gap: ${r[4]};
    `,section:c`
      background: ${l(t.gray[100],t.darkGray[800])};
      border-radius: ${a.radius.lg};
      box-shadow: ${Y.shadow.md(l(t.gray[400]+i[80],t.black+i[80]))};
      padding: ${r[4]};
      margin-bottom: ${r[4]};
      border: 1px solid ${l(t.gray[200],t.darkGray[700])};
      min-width: 0;
      max-width: 33%;
      max-height: fit-content;
    `,sectionHeader:c`
      font-size: ${s.lg};
      font-weight: ${n.weight.bold};
      margin-bottom: ${r[2]};
      color: ${l(t.blue[600],t.blue[400])};
      letter-spacing: 0.01em;
      display: flex;
      align-items: center;
      gap: ${r[2]};
    `,sectionEmpty:c`
      color: ${l(t.gray[500],t.gray[500])};
      font-size: ${s.sm};
      font-style: italic;
      margin: ${r[2]} 0;
    `,instanceList:c`
      display: flex;
      flex-direction: column;
      gap: ${r[2]};
      background: ${l(t.gray[200],t.darkGray[700])};
      border: 1px solid ${l(t.gray[300],t.darkGray[600])};
    `,instanceCard:c`
      background: ${l(t.gray[200],t.darkGray[700])};
      border-radius: ${a.radius.md};
      padding: ${r[3]};
      border: 1px solid ${l(t.gray[300],t.darkGray[600])};
      font-size: ${s.sm};
      color: ${l(t.gray[900],t.gray[100])};
      font-family: ${o.mono};
      overflow-x: auto;
      transition:
        box-shadow 0.3s,
        background 0.3s;
    `}};function Z(){let{theme:e}=M(),[t,n]=l(X(e()));return E(()=>{n(X(e()))}),t}var Q=S(`<div>`),xe=S(`<div><div>`);function Se(e){let t=Z(),{store:r}=J();return(()=>{var i=Q();return x(i,(()=>{var i=C(()=>r().length>0);return()=>i()&&(()=>{var i=Q();return x(i,f(m,{get each(){return r()},children:r=>(()=>{var i=xe(),a=i.firstChild;return i.$$click=()=>e.setSelectedKey(r.id),x(a,()=>r.id),o(o=>{var s=n(t().utilRow,e.selectedKey()===r.id&&t().utilRowSelected),c=t().utilKey;return s!==o.e&&v(i,o.e=s),c!==o.t&&v(a,o.t=c),o},{e:void 0,t:void 0}),i})()})),o(()=>v(i,t().utilGroup)),i})()})()),o(()=>v(i,t().utilList)),i})()}h([`click`]);var Ce=S(`<div><button><span></span>Flush</button><button><span></span>Reset</button><button><span></span>Submit (-f)`);function we(e){let t=Z();return(()=>{var n=Ce(),i=n.firstChild,a=i.firstChild,s=i.nextSibling,c=s.firstChild,l=s.nextSibling,u=l.firstChild;return i.$$mousedown=()=>{r.emit(`request-form-state`,{id:e.selectedInstance()?.id})},s.$$mousedown=()=>{r.emit(`request-form-reset`,{id:e.selectedInstance()?.id})},l.$$mousedown=()=>{r.emit(`request-form-force-submit`,{id:e.selectedInstance()?.id})},o(e=>{var r=t().actionsRow,o=t().actionButton,d=t().actionDotGreen,f=t().actionButton,p=t().actionDotRed,m=t().actionButton,h=t().actionDotYellow;return r!==e.e&&v(n,e.e=r),o!==e.t&&v(i,e.t=o),d!==e.a&&v(a,e.a=d),f!==e.o&&v(s,e.o=f),p!==e.i&&v(c,e.i=p),m!==e.n&&v(l,e.n=m),h!==e.s&&v(u,e.s=h),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),n})()}h([`mousedown`]);var Te=S(`<div><div>Form state</div><div style=display:flex;align-items:center;gap:16px><div><div>Key</div><div></div><div>Last Updated</div><div> (<!>)`);R.default.extend(ve.default);function Ee(e){let t=Z(),[n,r]=l((0,R.default)().unix());s(()=>{let e=setInterval(()=>r((0,R.default)().unix()),1e3);u(()=>clearInterval(e))});let i=e.selectedInstance,a=p(()=>i()?.date.unix()??(0,R.default)().unix()),c=p(()=>{let e=Math.max(n()-a(),0);return e<60?`${e} second${e===1?``:`s`} ago`:R.default.unix(a()).fromNow()});return i()?(()=>{var e=Te(),n=e.firstChild,r=n.nextSibling.firstChild,s=r.firstChild,l=s.nextSibling,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,p=f.nextSibling;return p.nextSibling,x(l,()=>i().id),x(d,()=>new Date(a()*1e3).toLocaleTimeString(),f),x(d,c,p),o(i=>{var a=t().stateHeader,o=t().stateTitle,c=t().infoGrid,f=t().infoLabel,p=t().infoValueMono,m=t().infoLabel,h=t().infoValueMono;return a!==i.e&&v(e,i.e=a),o!==i.t&&v(n,i.t=o),c!==i.a&&v(r,i.a=c),f!==i.o&&v(s,i.o=f),p!==i.i&&v(l,i.i=p),m!==i.n&&v(u,i.n=m),h!==i.s&&v(d,i.s=h),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),e})():null}var De=S(`<div><div><div>Actions</div></div><div><div>Individual Fields</div><div style=display:flex;flex-wrap:wrap;gap:8px></div></div><div><div>Form values</div><div></div></div><div><div>Form status</div><div></div></div><div><div>Form options</div><div></div></div><div><div>Submission history</div><div>`),$=S(`<div>`),Oe=S(`<div style=margin-bottom:16px><div style=font-weight:bold;margin-bottom:4px>`);function ke({selectedKey:e}){let t=Z(),{store:n}=J(),r=p(()=>n().findIndex(t=>t.id===e())),i=p(()=>r()>-1?n()[r()]:null),a=p(()=>i()?.state),s=p(()=>({canSubmit:a()?.canSubmit,isFormValid:a()?.isFormValid,isFormValidating:a()?.isFormValidating,isSubmitted:a()?.isSubmitted,isSubmitting:a()?.isSubmitting,isSubmitSuccessful:a()?.isSubmitSuccessful,submissionAttempts:a()?.submissionAttempts,errors:a()?.errors,errorMap:a()?.errorMap})),c=p(()=>{let e={},t=a()?.values||{},n=a()?.fieldMeta||{};return Object.keys(t).forEach(r=>{e[r]={value:t[r],meta:n[r]}}),e});return(()=>{var e=$();return x(e,f(D,{get when(){return i()},get children(){return[f(Ee,{selectedInstance:i}),(()=>{var e=De(),a=e.firstChild,l=a.firstChild,u=a.nextSibling,d=u.firstChild,p=d.nextSibling,h=u.nextSibling,g=h.firstChild,_=g.nextSibling,y=h.nextSibling,b=y.firstChild,S=b.nextSibling,C=y.nextSibling,w=C.firstChild,T=w.nextSibling,E=C.nextSibling,D=E.firstChild,O=D.nextSibling;return x(a,f(we,{selectedInstance:i}),null),x(p,f(m,{get each(){return Object.entries(c())},children:([e,n])=>(()=>{var r=Oe(),i=r.firstChild;return x(i,e),x(r,f(W,{copyable:!0,value:n}),null),o(()=>v(r,t().stateContent)),r})()})),x(_,f(W,{copyable:!0,get value(){return n()[r()].state.values}})),x(S,f(W,{copyable:!0,get value(){return s()}})),x(T,f(W,{copyable:!0,get value(){return n()[r()]?.options},collapsePaths:[`validators`]})),x(O,f(W,{copyable:!0,get value(){return n()[r()]?.history}})),o(n=>{var r=t().detailsGrid,i=t().detailSection,o=t().detailSectionHeader,s=t().detailSection,c=t().detailSectionHeader,f=t().detailSection,p=t().detailSectionHeader,m=t().stateContent,x=t().detailSection,k=t().detailSectionHeader,A=t().stateContent,j=t().detailSection,M=t().detailSectionHeader,N=t().stateContent,P=t().detailSection,F=t().detailSectionHeader,I=t().stateContent;return r!==n.e&&v(e,n.e=r),i!==n.t&&v(a,n.t=i),o!==n.a&&v(l,n.a=o),s!==n.o&&v(u,n.o=s),c!==n.i&&v(d,n.i=c),f!==n.n&&v(h,n.n=f),p!==n.s&&v(g,n.s=p),m!==n.h&&v(_,n.h=m),x!==n.r&&v(y,n.r=x),k!==n.d&&v(b,n.d=k),A!==n.l&&v(S,n.l=A),j!==n.u&&v(C,n.u=j),M!==n.c&&v(w,n.c=M),N!==n.w&&v(T,n.w=N),P!==n.m&&v(E,n.m=P),F!==n.f&&v(D,n.f=F),I!==n.y&&v(O,n.y=I),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0}),e})()]}})),o(()=>v(e,t().stateDetails)),e})()}var Ae=S(`<div>Details`),je=S(`<div><div style=min-width:150px;max-width:800px></div><div></div><div style=flex:1>`);function Me(){let e=Z(),[t,n]=l(300),[r,i]=l(!1),[a,c]=l(null),d=0,p=0,m=e=>{e.preventDefault(),e.stopPropagation(),i(!0),document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`,d=e.clientX,p=t()},h=e=>{if(!r())return;e.preventDefault();let t=e.clientX-d;n(Math.max(150,Math.min(800,p+t)))},g=()=>{i(!1),document.body.style.cursor=``,document.body.style.userSelect=``};return s(()=>{document.addEventListener(`mousemove`,h),document.addEventListener(`mouseup`,g)}),u(()=>{document.removeEventListener(`mousemove`,h),document.removeEventListener(`mouseup`,g)}),f(I,{get children(){return[f(ge,{get children(){return f(_e,{flavor:{light:`#eeaf00`,dark:`#eeaf00`},onClick:()=>{window.open(`https://tanstack.com/form/latest/docs/overview`,`_blank`)},children:`TanStack Form`})}}),(()=>{var n=je(),i=n.firstChild,s=i.nextSibling,l=s.nextSibling;return x(i,f(Se,{selectedKey:a,setSelectedKey:c})),s.$$mousedown=m,x(l,f(D,{get when(){return a()!=null},get children(){return[(()=>{var t=Ae();return o(()=>v(t,e().panelHeader)),t})(),f(ke,{selectedKey:a})]}})),o(a=>{var o=e().mainContainer,c=e().leftPanel,u=`${t()}px`,d=`${e().dragHandle} ${r()?`dragging`:``}`,f=e().rightPanel;return o!==a.e&&v(n,a.e=o),c!==a.t&&v(i,a.t=c),u!==a.a&&w(i,`width`,a.a=u),d!==a.o&&v(s,a.o=d),f!==a.i&&v(l,a.i=f),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),n})()]}})}h([`mousedown`]);function Ne(e){return f(A,{get theme(){return e.theme},get children(){return f(be,{get children(){return f(Me,{})}})}})}export{Ne as default};