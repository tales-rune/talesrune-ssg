(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{47158:function(n,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculators/waste-paper",function(){return e(57570)}])},39247:function(n,i,e){"use strict";e.d(i,{Z:function(){return c}});var t=e(85893),l=e(67294),r=e(11163);let s=[{value:"/calculators/waste-paper",label:"폐지 계산기",href:"/calculators/waste-paper"},{value:"/calculators/abendon-road",label:"어밴던로드 마정석 계산기",href:"/calculators/abendon-road"}];var a=e(75316),o=e(11703),d=e(1398);function c(){let{pathname:n}=(0,r.useRouter)(),[i,e]=(0,l.useState)("/calculators"===n?"/calculators/waste-paper":n);return(0,t.jsx)(o.Z,{value:i,onChange:(n,i)=>e(i),sx:{marginBottom:5},children:s.map(n=>(0,t.jsx)(a.Z,{LinkComponent:d.Z,href:n.href,label:n.label,value:n.value},n.value))})}},57570:function(n,i,e){"use strict";e.r(i),e.d(i,{__N_SSG:function(){return b},default:function(){return S}});var t=e(85893),l=e(41263),r=e(65582),s=e(23972),a=e(31633),o=e(58514),d=e(39247),c=e(67294),h=e(71543),x=e(11791),g=e(72882),j=e(7906),p=e(53184),u=e(75921),Z=e(295),f=e(98102),w=e(21177);function m(){var n,i,e,l;let{data:r=[]}=(0,h.pV)(),[a,o]=(0,c.useState)([]),[d,m]=(0,c.useState)([]),v=n=>i=>{let{value:e}=i.target,t=e.replace(/[^0-9]/g,"");if(t.length<=12){let i=Number(t||0),e=[...a];e[n]=i,o(e)}};return(0,c.useEffect)(()=>{let n=Array.from({length:r.length},()=>0);o(n),m(n)},[r]),(0,c.useEffect)(()=>{m(n=>(n[0]=0,n[1]=0,n[2]=0,n[3]=0,[...n]));let{length:n}=a;for(let i=0;i<n;i++){let n=a[i];m(e=>(e[0]+=r[i].wandering_sale*n,e[1]+=r[i].cantaparse_sale*n,e[2]+=r[i].woods_sale*n,e[3]+=r[i].fling_sale*n,[...e]))}},[a,r]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.Z,{component:x.Z,children:(0,t.jsxs)(j.Z,{sx:{minWidth:1e3},"aria-label":"waste paper table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{width:"auto"}),(0,t.jsx)("col",{width:"150px"}),(0,t.jsx)("col",{width:"200px"}),(0,t.jsx)("col",{width:"150px"}),(0,t.jsx)("col",{width:"150px"}),(0,t.jsx)("col",{width:"150px"})]}),(0,t.jsx)(p.Z,{children:(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(f.Z,{children:(0,t.jsx)(s.Z,{fontWeight:600,children:"이름"})}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"방랑상인"})}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"칸타파르스"})}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"우즈"})}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"플링"})}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"수량"})})]})}),(0,t.jsx)(Z.Z,{children:r.map((n,i)=>(0,t.jsxs)(u.Z,{hover:!0,children:[(0,t.jsx)(f.Z,{sx:{paddingTop:1,paddingBottom:1},children:n.name}),(0,t.jsx)(f.Z,{align:"right",sx:{paddingTop:1,paddingBottom:1},children:n.wandering_sale.toLocaleString()}),(0,t.jsx)(f.Z,{align:"right",sx:{paddingTop:1,paddingBottom:1},children:n.cantaparse_sale.toLocaleString()}),(0,t.jsx)(f.Z,{align:"right",sx:{paddingTop:1,paddingBottom:1},children:n.woods_sale.toLocaleString()}),(0,t.jsx)(f.Z,{align:"right",sx:{paddingTop:1,paddingBottom:1},children:n.fling_sale.toLocaleString()}),(0,t.jsx)(f.Z,{align:"right",sx:{paddingTop:1,paddingBottom:1},children:(0,t.jsx)(w.Z,{value:a[i]||0,onChange:v(i),placeholder:"수량",sx:{width:85},inputProps:{sx:{padding:1.2}}})})]},n.id))})]})}),(0,t.jsx)(s.Z,{variant:"h5",margin:"40px 0 10px",children:"총 합계"}),(0,t.jsx)(g.Z,{component:x.Z,children:(0,t.jsxs)(j.Z,{sx:{minWidth:800},"aria-label":"waste paper table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{width:"auto"}),(0,t.jsx)("col",{width:"150px"}),(0,t.jsx)("col",{width:"200px"}),(0,t.jsx)("col",{width:"150px"}),(0,t.jsx)("col",{width:"150px"}),(0,t.jsx)("col",{width:"150px"})]}),(0,t.jsx)(p.Z,{children:(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(f.Z,{}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"방랑상인"})}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"칸타파르스"})}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"우즈"})}),(0,t.jsx)(f.Z,{align:"right",children:(0,t.jsx)(s.Z,{fontWeight:600,children:"플링"})}),(0,t.jsx)(f.Z,{})]})}),(0,t.jsx)(Z.Z,{children:(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(f.Z,{}),(0,t.jsx)(f.Z,{align:"right",children:(null===(n=d[0])||void 0===n?void 0:n.toLocaleString())||0}),(0,t.jsx)(f.Z,{align:"right",children:(null===(i=d[1])||void 0===i?void 0:i.toLocaleString())||0}),(0,t.jsx)(f.Z,{align:"right",children:(null===(e=d[2])||void 0===e?void 0:e.toLocaleString())||0}),(0,t.jsx)(f.Z,{align:"right",children:(null===(l=d[3])||void 0===l?void 0:l.toLocaleString())||0}),(0,t.jsx)(f.Z,{})]})})]})})]})}function v(){let{themeStretch:n}=(0,o.K$)();return(0,t.jsxs)(r.Z,{component:"section",maxWidth:!n&&"xl",children:[(0,t.jsx)(a._f,{style:{display:"block",width:"100%",marginBottom:30},client:"ca-pub-4630727689655943",slot:"4321772552",format:"horizontal",responsive:"true"}),(0,t.jsx)(s.Z,{component:"h1",fontSize:25,marginBottom:2,children:"계산기"}),(0,t.jsx)(d.Z,{}),(0,t.jsx)(m,{})]})}var _=e(90229);S.getLayout=(n,i)=>(0,t.jsx)(l.Z,{...i,children:n});var b=!0;function S(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.Z,{title:"폐지 계산기 - 테일즈룬",description:"테일즈위버 폐지 계산기 입니다."}),(0,t.jsx)(v,{})]})}}},function(n){n.O(0,[861,683,177,986,576,774,888,179],function(){return n(n.s=47158)}),_N_E=n.O()}]);