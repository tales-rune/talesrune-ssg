(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[182],{96838:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/simulations/encrypt",function(){return n(70776)}])},51634:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(12691),a=n(10646),l=n(83566),o=n(56309),c=n(83105),i=n(46244),s=n(4535),u=n(62984),d=n(89350),p=n(28270),g=n(62458);let h=[{name:"공식 홈페이지",href:o.S_.TWHOMEPAGE,target:"_blank",rel:"noopener noreferrer"},{name:"고객센터",href:o.S_.SERVICECENTER,target:"_blank",rel:"noopener noreferrer"}];function Z(){let{themeStretch:e}=(0,g.K$)(),{palette:t}=(0,d.Z)(),n=(0,r.tZ)(c.Z,{sx:{padding:"10px",borderWidth:"1px 0",borderStyle:"solid",borderColor:t.divider},children:(0,r.tZ)(s.Z,{maxWidth:!e&&"lg",children:(0,r.tZ)(i.ZP,{container:!0,spacing:2,children:h.map(e=>(0,r.tZ)(i.ZP,{item:!0,xs:12,sm:6,textAlign:"center",alignItems:{xs:"center",md:"flex-start"},children:(0,r.tZ)(p.Z,{href:e.href,target:e.target,rel:e.rel,variant:"body2",color:"inherit",fontSize:17,children:e.name})},e.name))})})}),a=(0,r.tZ)(s.Z,{maxWidth:!e&&"lg",children:(0,r.tZ)(u.Z,{variant:"caption",component:"div",sx:{padding:"10px 0",textAlign:{xs:"center",md:"left"}},children:"\xa9 2023 Tales Rune. Tales Rune isn’t endorsed by Nexon Korea and doesn’t reflect the views or opinions of Nexon Korea or anyone officially involved in producing or managing Tales Weaver. Tales Weaver and Nexon Korea are trademarks or registered trademarks of Nexon Korea , Inc. Tales Weaver \xa9 Nexon Korea, Inc."})});return(0,r.BX)(c.Z,{component:"footer",children:[n,a]})}function f(e){let{children:t}=e;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l.Z,{}),(0,r.tZ)(a.Z,{children:t}),(0,r.tZ)(Z,{})]})}},19317:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(12691),a=n(75271),l=n(76056),o=n(10677),c=n(24570);let i=[{value:"/simulations/redistribution",label:"재분배 시뮬레이션",href:"/simulations/redistribution"},{value:"/simulations/encrypt",label:"인크립트 시뮬레이션",href:"/simulations/encrypt"}];var s=n(28270);function u(){let{pathname:e}=(0,l.useRouter)(),[t,n]=(0,a.useState)("/simulations"===e?"/simulations/redistribution":e);return(0,r.tZ)(c.Z,{value:t,onChange:(e,t)=>n(t),sx:{marginBottom:5},children:i.map(e=>(0,r.tZ)(o.Z,{LinkComponent:s.Z,href:e.href,label:e.label,value:e.value},e.value))})}},70776:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return E},default:function(){return W}});var r=n(12691),a=n(51634),l=n(4535),o=n(62984),c=n(72767),i=n(62458),s=n(19317),u=n(75271),d=n(79774),p=n(83105),g=n(28017),h=n(71159);let Z=[{name:"20주년 인크립트 ",percentage:.2},{name:"[넥슨30주년] 인크립트 ",percentage:.3},{name:"로드 인크립트",percentage:21},{name:"가호의 인크립트",percentage:26},{name:"축복받은 인크립트",percentage:31},{name:"왕실 인크립트",percentage:36},{name:"비아누의 인크립트",percentage:.07,percentage1:.065,percentage2:.06,percentage3:.055,percentage4:.05,percentage5:.045,percentage6:.04,percentage7:.035,percentage8:.03,percentage9:.025,percentage10:.02,percentage11:.015,percentage12:.01}];function f(){let{setCurrentEncrypt:e,setCurrentPercentage:t}=(0,d.Cn)(),[n,a]=(0,u.useState)(0),c=n=>{let{value:r}=n.target,l=parseInt(r,10);a(l),e(Z[l]),t(Z[l].percentage)};return(0,u.useEffect)(()=>{e(Z[0]),t(Z[0].percentage)},[e,t]),(0,r.tZ)(l.Z,{maxWidth:"sm",sx:{px:"0 !important",border:"5px double #73869C",backgroundColor:"#BDD7EF"},children:(0,r.BX)(g.Z,{children:[(0,r.tZ)(o.Z,{color:"#6B615A",bgcolor:"#CEE3F7",fontWeight:600,padding:1.5,textAlign:"center",children:"인크립트 선택"}),(0,r.tZ)(p.Z,{mx:"auto",children:Z.map((e,t)=>(0,r.BX)(p.Z,{display:"flex",alignItems:"center",children:[(0,r.tZ)(h.Z,{name:"encrypt-radio",value:t,onChange:c,sx:{"&.Mui-checked":{color:"#009acf"}},checked:t===n}),(0,r.tZ)(o.Z,{color:"#736963",children:e.name})]},e.name))})]})})}var b=n(93338),C=n(55589),m=n(56194),k=n(58819),x=n(2846);function B(){let{currentEncrypt:e,currentPercentage:t,setCurrentPercentage:n}=(0,d.Cn)(),[a,c]=(0,u.useState)("0"),[i,s]=(0,u.useState)(0),[p,h]=(0,u.useState)(0),[Z,f]=(0,u.useState)(0),[B,v]=(0,u.useState)(0),A=()=>Math.random()<=t/100,E=()=>{A()?v(t=>{let r=t+1;return"비아누의 인크립트"===e.name&&(1===r?n(e.percentage1):2===r?n(e.percentage2):3===r?n(e.percentage3):4===r?n(e.percentage4):5===r?n(e.percentage5):6===r?n(e.percentage6):7===r?n(e.percentage7):8===r?n(e.percentage8):9===r?n(e.percentage9):10===r?n(e.percentage10):11===r?n(e.percentage11):r>=12&&n(e.percentage12)),r}):f(e=>e+1),h(e=>e+1);let t=parseInt(a,10);s(e=>e+t)},W=e=>()=>{for(let t=0;t<e;t++)E()};return(0,u.useEffect)(()=>{c("0"),s(0),h(0),f(0),v(0)},[e]),(0,r.tZ)(l.Z,{maxWidth:"sm",sx:{mt:1,px:"0 !important"},children:(0,r.BX)(g.Z,{spacing:1,justifyContent:"center",children:[(0,r.BX)(o.Z,{textAlign:"center",color:"#6B615A",children:[(0,r.BX)(o.Z,{component:"span",fontWeight:600,color:"#6B615A",children:[t,"% 확률"]}),"로 인크립트가 성공합니다."]}),(0,r.BX)(o.Z,{textAlign:"center",color:"#6B615A",children:["인크립트 성공 시"," ",(0,r.tZ)(o.Z,{component:"span",fontWeight:600,color:"#6B615A",children:"합성횟수가 1 감소"})," ","합니다."]}),(0,r.BX)(o.Z,{textAlign:"center",color:"#6B615A",children:["인크립트 실패 시"," ",(0,r.tZ)(o.Z,{component:"span",fontWeight:600,color:"#6B615A",children:"아이템이 파괴"})," ","됩니다."]}),(0,r.BX)(o.Z,{textAlign:"center",color:"#6B615A",children:["비아누의 인크립트는 실패해도"," ",(0,r.tZ)(o.Z,{component:"span",fontWeight:600,color:"#6B615A",children:"아이템이 파괴"})," ","되지 않습니다."]}),(0,r.tZ)(m.Z,{value:a,onChange:e=>{let{value:t}=e.target;c(t.replace(/[^0-9]/g,""))},InputProps:{startAdornment:(0,r.tZ)(k.Z,{position:"start",sx:{"& > .MuiTypography-root":{color:"#919EAB"}},children:"비용"}),sx:{"& input":{py:"12px"},color:"#E3E3E3"}},sx:{"& > div":{backgroundColor:(0,x.Fq)("#000000",.5)}}}),(0,r.BX)(o.Z,{textAlign:"center",color:"#6B615A",children:["사용 비용: ",(0,b.FK)(i),"시드"]}),(0,r.BX)(o.Z,{textAlign:"center",color:"#6B615A",children:["사용 인크립트 수: ",p,"장"]}),(0,r.BX)(o.Z,{textAlign:"center",color:"#6B615A",children:["성공: ",B,"번"]}),(0,r.BX)(o.Z,{textAlign:"center",color:"#6B615A",children:["실패: ",Z,"번"]}),(0,r.BX)(g.Z,{direction:"row",spacing:1,children:[(0,r.tZ)(C.Z,{fullWidth:!0,onClick:W(50),sx:{border:"1px solid #8C8E94",color:"#525D7B",fontWeight:600,backgroundColor:"#ADD7FF"},children:"50번 시도"}),(0,r.tZ)(C.Z,{fullWidth:!0,onClick:W(100),sx:{border:"1px solid #8C8E94",color:"#525D7B",fontWeight:600,backgroundColor:"#ADD7FF"},children:"100번 시도"})]}),(0,r.BX)(g.Z,{direction:"row",spacing:1,children:[(0,r.tZ)(C.Z,{fullWidth:!0,onClick:W(300),sx:{border:"1px solid #8C8E94",color:"#525D7B",fontWeight:600,backgroundColor:"#ADD7FF"},children:"300번 시도"}),(0,r.tZ)(C.Z,{fullWidth:!0,onClick:W(500),sx:{border:"1px solid #8C8E94",color:"#525D7B",fontWeight:600,backgroundColor:"#ADD7FF"},children:"500번 시도"})]}),(0,r.tZ)(C.Z,{onClick:()=>{E()},sx:{border:"1px solid #8C8E94",color:"#525D7B",fontWeight:600,backgroundColor:"#ADD7FF"},children:"1번 시도"})]})})}function v(){let{themeStretch:e}=(0,i.K$)();return(0,r.BX)(l.Z,{component:"section",maxWidth:!e&&"xl",children:[(0,r.tZ)(c._f,{style:{display:"block",width:"100%",marginBottom:30},client:"ca-pub-4630727689655943",slot:"4321772552",format:"horizontal",responsive:"true"}),(0,r.tZ)(o.Z,{component:"h1",fontSize:25,marginBottom:2,children:"시뮬레이션"}),(0,r.tZ)(s.Z,{}),(0,r.BX)(l.Z,{maxWidth:"sm",sx:{py:"12px",px:"10px !important",border:"5px double #73869C",borderRadius:1,backgroundColor:"#ADD3E7"},children:[(0,r.tZ)(f,{}),(0,r.tZ)(B,{})]})]})}var A=n(40011);W.getLayout=(e,t)=>(0,r.tZ)(a.Z,{...t,children:e});var E=!0;function W(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(A.Z,{title:"인크립트 시뮬레이션 - 테일즈룬",description:"테일즈위버 인크립트 시뮬레이션 입니다."}),(0,r.tZ)(v,{})]})}},79774:function(e,t,n){"use strict";n.d(t,{Cn:function(){return i},j2:function(){return u},y:function(){return o},iJ:function(){return p}});var r=n(75271),a=n(72401),l=n(95321);let o=()=>{let e=(0,a.I0)();return{init:(0,r.useCallback)(()=>e((0,l.S1)()),[e]),popupOpen:(0,r.useCallback)(t=>e((0,l.$b)(t)),[e]),popupClose:(0,r.useCallback)(t=>e((0,l.u_)(t)),[e])}};var c=n(13914);let i=()=>{let e=(0,a.I0)();return{currentEncrypt:(0,a.v9)(e=>{let{encrypt:t}=e;return t.currentEncrypt}),currentPercentage:(0,a.v9)(e=>{let{encrypt:t}=e;return t.currentPercentage}),setCurrentEncrypt:(0,r.useCallback)(t=>e((0,c.WS)(t)),[e]),setCurrentPercentage:(0,r.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e((0,c.$i)(t))},[e])}};var s=n(14460);let u=()=>{let e=(0,a.I0)();return{init:(0,r.useCallback)(()=>e((0,s.S1)()),[e]),setNextBoss:(0,r.useCallback)(t=>e((0,s.tA)(t)),[e]),setBossTimeTable:(0,r.useCallback)(t=>e((0,s.hx)(t)),[e])}};var d=n(60553);let p=()=>{let e=(0,a.I0)();return{initCharacter:(0,r.useCallback)(t=>e((0,d.zh)(t)),[e]),initLogs:(0,r.useCallback)(t=>e((0,d.FA)(t)),[e]),setName:(0,r.useCallback)(t=>e((0,d.qC)(t)),[e]),setImage:(0,r.useCallback)(t=>e((0,d.QL)(t)),[e]),setType:(0,r.useCallback)(t=>e((0,d.Cw)(t)),[e]),setTypes:(0,r.useCallback)(t=>e((0,d.WX)(t)),[e]),setXien:(0,r.useCallback)(t=>e((0,d.O4)(t)),[e]),setXiens:(0,r.useCallback)(t=>e((0,d.qW)(t)),[e]),setPercentage:(0,r.useCallback)(t=>e((0,d._Y)(t)),[e]),setStatus:(0,r.useCallback)(t=>e((0,d.Tf)(t)),[e]),setStatusLogs:(0,r.useCallback)(t=>e((0,d.S4)(t)),[e]),setRedistributionLogs:(0,r.useCallback)(t=>e((0,d.gg)(t)),[e]),setPrintLogs:(0,r.useCallback)(t=>e((0,d.PQ)(t)),[e]),levelUp:(0,r.useCallback)(()=>e((0,d.Hm)()),[e]),prevLogSetting:(0,r.useCallback)(()=>e((0,d.$o)()),[e]),stabUp:(0,r.useCallback)(()=>e((0,d.d7)()),[e]),hackUp:(0,r.useCallback)(()=>e((0,d.VZ)()),[e]),intUp:(0,r.useCallback)(()=>e((0,d._3)()),[e]),defUp:(0,r.useCallback)(()=>e((0,d.gS)()),[e]),mrUp:(0,r.useCallback)(()=>e((0,d.v3)()),[e]),agiUp:(0,r.useCallback)(()=>e((0,d.h6)()),[e]),dexUp:(0,r.useCallback)(()=>e((0,d.Sy)()),[e]),autoStabUp:(0,r.useCallback)(()=>e((0,d.ud)()),[e]),autoHackUp:(0,r.useCallback)(()=>e((0,d.fZ)()),[e]),autoIntUp:(0,r.useCallback)(()=>e((0,d.Gf)()),[e]),autoDefUp:(0,r.useCallback)(()=>e((0,d.ZP)()),[e]),autoMrUp:(0,r.useCallback)(()=>e((0,d.SY)()),[e]),autoAgiUp:(0,r.useCallback)(()=>e((0,d.S5)()),[e]),autoDexUp:(0,r.useCallback)(()=>e((0,d.Ch)()),[e])}}},93338:function(e,t,n){"use strict";n.d(t,{FK:function(){return l}});var r=n(4587),a=n.n(r);function l(e){return a()(e).format()}}},function(e){e.O(0,[478,244,445,194,587,398,772,888,774,179],function(){return e(e.s=96838)}),_N_E=e.O()}]);