import{s as e}from"./rolldown-runtime-C5c2KzVm.js";import{a as t,t as n}from"./framework-B6rTIEna.js";import{Mr as r}from"./react-DDTyMoDw.js";import{r as i}from"./var-reference-picker-u8potPX0.js";import{b as a}from"./floating-ui.utils.dom-Ds7krDiP.js";import{t as o}from"./classnames-CXDsUba7.js";import{ir as s}from"./hooks-Dc2TzwsK.js";import{t as c}from"./button-DcOaKyZN.js";import{t as l}from"./option-card-D5TYIxlS.js";var u=e(t(),1),d=n(),f=u.memo(({value:e,onChange:t})=>{let n=e,r=(0,u.useCallback)(e=>()=>{t(e)},[t]);return(0,d.jsxs)(`div`,{className:`flex w-full space-x-1`,children:[(0,d.jsx)(l,{className:`grow`,selected:n,title:`True`,onSelect:r(!0)}),(0,d.jsx)(l,{className:`grow`,selected:!n,title:`False`,onSelect:r(!1)})]})}),p=u.memo(({className:e,list:t,onChange:n})=>{let{t:l}=a(),p=(0,u.useCallback)(e=>r=>{n(s(t,t=>{t[e]=r}))},[t,n]),m=(0,u.useCallback)(e=>()=>{n(s(t,t=>{t.splice(e,1)}))},[t,n]),h=(0,u.useCallback)(()=>{n(s(t,e=>{e.push(!1)}))},[t,n]);return(0,d.jsxs)(`div`,{className:o(`w-full space-y-2`,e),children:[t.map((e,t)=>(0,d.jsxs)(`div`,{className:`flex items-center space-x-1`,children:[(0,d.jsx)(f,{value:e,onChange:p(t)}),(0,d.jsx)(i,{className:`!bg-gray-100 !p-2 hover:!bg-gray-200`,onClick:m(t)})]},t)),(0,d.jsxs)(c,{variant:`tertiary`,className:`w-full`,onClick:h,children:[(0,d.jsx)(r,{className:`mr-1 h-4 w-4`}),(0,d.jsx)(`span`,{children:l(`chatVariable.modal.addArrayValue`,{ns:`workflow`})})]})]})}),m=`#  example
#  {
#     "name": "ray",
#     "age": 20
#  }`,h=`#  example
#  [
#     "value1",
#     "value2"
#  ]`,g=`#  example
#  [
#     100,
#     200
#  ]`,_=`#  example
#  [
#     {
#       "name": "ray",
#       "age": 20
#     },
#     {
#       "name": "lily",
#       "age": 18
#     }
#  ]`,v=`#  example
#  [
#     "True",
#     "False"
#  ]`;export{m as a,h as i,g as n,p as o,_ as r,f as s,v as t};