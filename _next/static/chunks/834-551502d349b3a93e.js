"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{51634:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(12691),r=n(10646),o=n(83566),l=n(56309),a=n(83105),c=n(46244),d=n(4535),s=n(62984),h=n(89350),u=n(28270),Z=n(62458);let p=[{name:"공식 홈페이지",href:l.S_.TWHOMEPAGE,target:"_blank",rel:"noopener noreferrer"},{name:"고객센터",href:l.S_.SERVICECENTER,target:"_blank",rel:"noopener noreferrer"}];function g(){let{themeStretch:e}=(0,Z.K$)(),{palette:t}=(0,h.Z)(),n=(0,i.tZ)(a.Z,{sx:{padding:"10px",borderWidth:"1px 0",borderStyle:"solid",borderColor:t.divider},children:(0,i.tZ)(d.Z,{maxWidth:!e&&"lg",children:(0,i.tZ)(c.ZP,{container:!0,spacing:2,children:p.map(e=>(0,i.tZ)(c.ZP,{item:!0,xs:12,sm:6,textAlign:"center",alignItems:{xs:"center",md:"flex-start"},children:(0,i.tZ)(u.Z,{href:e.href,target:e.target,rel:e.rel,variant:"body2",color:"inherit",fontSize:17,children:e.name})},e.name))})})}),r=(0,i.tZ)(d.Z,{maxWidth:!e&&"lg",children:(0,i.tZ)(s.Z,{variant:"caption",component:"div",sx:{padding:"10px 0",textAlign:{xs:"center",md:"left"}},children:"\xa9 2023 Tales Rune. Tales Rune isn’t endorsed by Nexon Korea and doesn’t reflect the views or opinions of Nexon Korea or anyone officially involved in producing or managing Tales Weaver. Tales Weaver and Nexon Korea are trademarks or registered trademarks of Nexon Korea , Inc. Tales Weaver \xa9 Nexon Korea, Inc."})});return(0,i.BX)(a.Z,{component:"footer",children:[n,r]})}function m(e){let{children:t}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(o.Z,{}),(0,i.tZ)(r.Z,{children:t}),(0,i.tZ)(g,{})]})}},19317:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(12691),r=n(75271),o=n(76056),l=n(10677),a=n(24570);let c=[{value:"/simulations/redistribution",label:"재분배 시뮬레이션",href:"/simulations/redistribution"},{value:"/simulations/encrypt",label:"인크립트 시뮬레이션",href:"/simulations/encrypt"}];var d=n(28270);function s(){let{pathname:e}=(0,o.useRouter)(),[t,n]=(0,r.useState)("/simulations"===e?"/simulations/redistribution":e);return(0,i.tZ)(a.Z,{value:t,onChange:(e,t)=>n(t),sx:{marginBottom:5},children:c.map(e=>(0,i.tZ)(l.Z,{LinkComponent:d.Z,href:e.href,label:e.label,value:e.value},e.value))})}},83834:function(e,t,n){n.r(t),n.d(t,{__N_SSG:function(){return H},default:function(){return T}});var i=n(12691),r=n(51634),o=n(62458),l=n(83105),a=n(46244),c=n(4535),d=n(62984),s=n(72767),h=n(75271),u=n(26021);let Z=async e=>{var t;return(null===(t=navigator)||void 0===t?void 0:t.clipboard)?await p(e):function(e){let t=document.createElement("input");document.body.appendChild(t),t.value=e,t.select();let n=document.execCommand("copy");return document.body.removeChild(t),{isCopy:n,copyValue:e}}(e)};async function p(e){try{return await navigator.clipboard.writeText(e),{isCopy:!0,copyValue:e}}catch(t){return{isCopy:!1,copyValue:e}}}var g=n(79774),m=n(28017),C=n(98303),b=n(55589);function x(){let{character:e,type:t,status:n,percentage:r,printLogs:o}=(0,g.sU)(),a=(0,h.useRef)(null);return(0,h.useEffect)(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[o]),(0,i.BX)(C.Z,{sx:{p:3},children:[(0,i.tZ)(b.Z,{onClick:()=>{(async()=>{let i="",{length:l}=o;for(let e=0;e<l;e++){let t=o[e];t.minLevel>1&&"XIEN"===t.statName?i+="\n\n".concat(t.text," \n"):i+="".concat(t.text," \n")}let a="캐릭터 : ".concat(e.name,"\n타입 : ").concat(t,"\n보정확률 : ").concat(r,"%\n\nHP : ").concat(n.randomHp," (").concat(n.minHp," ~ ").concat(n.maxHp,")\nMP : ").concat(n.randomMp," (").concat(n.minMp," ~ ").concat(n.maxMp,")\nSP : ").concat(n.randomSp," (").concat(n.minSp," ~ ").concat(n.maxSp,")\n\n\n레벨 ").concat(n.level," : STAB(").concat(n.stab,") / HACK(").concat(n.hack,") / INT(").concat(n.int,") / DEF(").concat(n.def,") / MR(").concat(n.mr,") / DEX(").concat(n.dex,") / AGI(").concat(n.agi,")\n남은포인트: ").concat(n.point,"\n보정받은스탯 : ").concat(n.randomStat," / ").concat(n.level-1,"\n보정받은확률 : ").concat(n.randomStatPercentage,"%\n\n\n").concat(i);await Z(a)&&(0,u.yv)("재분배 로그 복사완료!",{autoHideDuration:1e3})})()},variant:"contained",sx:{display:"block",mx:"auto",fontSize:20},children:"클립보드 복사"}),(0,i.tZ)(d.Z,{color:"#FFF",fontSize:20,fontWeight:600,padding:.7,textAlign:"center",mt:3,mb:1,children:"[ 재분배 로그 ]"}),(0,i.BX)(m.Z,{spacing:4.6,children:[(0,i.BX)(l.Z,{children:[(0,i.BX)(d.Z,{children:["캐릭터 : ",e.name||"캐릭터를 선택해주세요."," "]}),(0,i.BX)(d.Z,{children:["타입 : ",t||"캐릭터를 선택해주세요."," "]}),(0,i.BX)(d.Z,{children:["보정확률 : ",r,"% "]})]}),(0,i.BX)(l.Z,{children:[(0,i.BX)(d.Z,{children:["HP : ",n.randomHp," (",n.minHp," ~ ",n.maxHp,")"," "]}),(0,i.BX)(d.Z,{children:["MP : ",n.randomMp," (",n.minMp," ~ ",n.maxMp,")"," "]}),(0,i.BX)(d.Z,{children:["SP : ",n.randomSp," (",n.minSp," ~ ",n.maxSp,")"," "]})]}),(0,i.BX)(l.Z,{children:[(0,i.BX)(d.Z,{mb:1,children:["레벨 ",n.level," : STAB(",n.stab,") / HACK(",n.hack,") / INT(",n.int,") / DEF(",n.def,") / MR(",n.mr,") / DEX(",n.dex,") / AGI(",n.agi,")"]}),(0,i.BX)(d.Z,{children:["남은포인트: ",n.point]}),(0,i.BX)(d.Z,{children:["보정받은스탯 : ",n.randomStat," / ",n.level-1]}),(0,i.BX)(d.Z,{children:["보정받은확률 : ",n.randomStatPercentage,"%"]})]})]}),(0,i.tZ)(m.Z,{ref:a,spacing:1,sx:{mt:5,height:435,overflow:"auto"},children:o.map((e,t)=>e.minLevel>1&&"XIEN"===e.statName?(0,i.tZ)(d.Z,{mt:5,children:e.text},t):(0,i.tZ)(d.Z,{children:e.text},t))})]})}var v=n(82691),f=n.n(v),k=n(96194),B=n(2846),F=n(29597);function w(){let{character:e,status:t,levelUp:n,prevLogSetting:r,xien:o,stabUp:l,hackUp:a,intUp:c,defUp:s,mrUp:h,agiUp:Z,dexUp:p,autoStabUp:C,autoHackUp:x,autoIntUp:v,autoDefUp:w,autoMrUp:y,autoDexUp:D,autoAgiUp:A}=(0,g.sU)();return(0,i.BX)(i.HY,{children:[(0,i.BX)(m.Z,{children:[(0,i.tZ)(d.Z,{color:"#FFF",bgcolor:"#7B8694",fontWeight:600,padding:.7,textAlign:"center",children:"스탯 정보"}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,alignItems:"center",bgcolor:"STAB"===o.main||"STAB"===o.sub?(0,B.Fq)("#000",.1):void 0,children:[(0,i.tZ)(d.Z,{width:"100%",color:"#526173",fontWeight:600,textAlign:"center",children:"STAB"}),(0,i.tZ)(d.Z,{width:"100%",color:"#736152",textAlign:"center",children:t.stab}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.defaultStabPoint}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.stabChangePoint}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{0!==t.point&&l()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF",visibility:t.point>0&&t.point>=t.defaultStabPoint?"visible":"hidden"},children:(0,i.tZ)(F.Z,{icon:"bxs:up-arrow"})}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{t.level<k.Ey&&C()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF"},children:(0,i.tZ)(F.Z,{icon:"material-symbols:hdr-auto"})})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,alignItems:"center",bgcolor:"HACK"===o.main||"HACK"===o.sub?(0,B.Fq)("#000",.1):void 0,children:[(0,i.tZ)(d.Z,{width:"100%",color:"#526173",fontWeight:600,textAlign:"center",children:"HACK"}),(0,i.tZ)(d.Z,{width:"100%",color:"#736152",textAlign:"center",children:t.hack}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.defaultHackPoint}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.hackChangePoint}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{0!==t.point&&a()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF",visibility:t.point>0&&t.point>=t.defaultHackPoint?"visible":"hidden"},children:(0,i.tZ)(F.Z,{icon:"bxs:up-arrow"})}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{t.level<k.Ey&&x()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF"},children:(0,i.tZ)(F.Z,{icon:"material-symbols:hdr-auto"})})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,alignItems:"center",bgcolor:"INT"===o.main||"INT"===o.sub?(0,B.Fq)("#000",.1):void 0,children:[(0,i.tZ)(d.Z,{width:"100%",color:"#526173",fontWeight:600,textAlign:"center",children:"INT"}),(0,i.tZ)(d.Z,{width:"100%",color:"#736152",textAlign:"center",children:t.int}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.defaultIntPoint}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.intChangePoint}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{0!==t.point&&c()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF",visibility:t.point>0&&t.point>=t.defaultIntPoint?"visible":"hidden"},children:(0,i.tZ)(F.Z,{icon:"bxs:up-arrow"})}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{t.level<k.Ey&&v()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF"},children:(0,i.tZ)(F.Z,{icon:"material-symbols:hdr-auto"})})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,alignItems:"center",bgcolor:"DEF"===o.main||"DEF"===o.sub?(0,B.Fq)("#000",.1):void 0,children:[(0,i.tZ)(d.Z,{width:"100%",color:"#526173",fontWeight:600,textAlign:"center",children:"DEF"}),(0,i.tZ)(d.Z,{width:"100%",color:"#736152",textAlign:"center",children:t.def}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.defaultDefPoint}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.defChangePoint}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{0!==t.point&&s()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF",visibility:t.point>0&&t.point>=t.defaultDefPoint?"visible":"hidden"},children:(0,i.tZ)(F.Z,{icon:"bxs:up-arrow"})}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{t.level<k.Ey&&w()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF"},children:(0,i.tZ)(F.Z,{icon:"material-symbols:hdr-auto"})})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,alignItems:"center",bgcolor:"MR"===o.main||"MR"===o.sub?(0,B.Fq)("#000",.1):void 0,children:[(0,i.tZ)(d.Z,{width:"100%",color:"#526173",fontWeight:600,textAlign:"center",children:"MR"}),(0,i.tZ)(d.Z,{width:"100%",color:"#736152",textAlign:"center",children:t.mr}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.defaultMrPoint}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.mrChangePoint}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{0!==t.point&&h()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF",visibility:t.point>0&&t.point>=t.defaultMrPoint?"visible":"hidden"},children:(0,i.tZ)(F.Z,{icon:"bxs:up-arrow"})}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{t.level<k.Ey&&y()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF"},children:(0,i.tZ)(F.Z,{icon:"material-symbols:hdr-auto"})})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,alignItems:"center",bgcolor:"DEX"===o.main||"DEX"===o.sub?(0,B.Fq)("#000",.1):void 0,children:[(0,i.tZ)(d.Z,{width:"100%",color:"#526173",fontWeight:600,textAlign:"center",children:"DEX"}),(0,i.tZ)(d.Z,{width:"100%",color:"#736152",textAlign:"center",children:t.dex}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.defaultDexPoint}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.dexChangePoint}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{0!==t.point&&p()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF",visibility:t.point>0&&t.point>=t.defaultDexPoint?"visible":"hidden"},children:(0,i.tZ)(F.Z,{icon:"bxs:up-arrow"})}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{t.level<k.Ey&&D()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF"},children:(0,i.tZ)(F.Z,{icon:"material-symbols:hdr-auto"})})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,alignItems:"center",bgcolor:"AGI"===o.main||"AGI"===o.sub?(0,B.Fq)("#000",.1):void 0,children:[(0,i.tZ)(d.Z,{width:"100%",color:"#526173",fontWeight:600,textAlign:"center",children:"AGI"}),(0,i.tZ)(d.Z,{width:"100%",color:"#736152",textAlign:"center",children:t.agi}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.defaultAgiPoint}),(0,i.tZ)(d.Z,{width:"100%",color:"#426DD6",textAlign:"center",children:t.agiChangePoint}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{0!==t.point&&Z()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF",visibility:t.point>0&&t.point>=t.defaultAgiPoint?"visible":"hidden"},children:(0,i.tZ)(F.Z,{icon:"bxs:up-arrow"})}),(0,i.tZ)(b.Z,{variant:"contained",onClick:()=>{t.level<k.Ey&&A()},sx:{"&:hover":{backgroundColor:"#8CCBFF"},width:35,minWidth:35,px:0,border:"1px solid #738694",backgroundColor:"#8CCBFF"},children:(0,i.tZ)(F.Z,{icon:"material-symbols:hdr-auto"})})]})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,bgcolor:"#A5C7DE",justifyContent:"right",children:[(0,i.tZ)(d.Z,{color:"#526173",fontWeight:600,children:"레벨업 포인트"}),(0,i.tZ)(d.Z,{color:"#526173",ml:5,mr:1.5,children:t.point})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,bgcolor:"#A5C7DE",justifyContent:"right",children:[(0,i.tZ)(d.Z,{color:"#526173",fontWeight:600,children:"보정"}),(0,i.BX)(d.Z,{color:"#526173",ml:2,children:[t.randomStat,"/",t.level-1]}),(0,i.BX)(d.Z,{color:"#526173",ml:2,mr:1.5,children:[t.randomStatPercentage,"%"]})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,bgcolor:"#DEE7EF",children:[(0,i.tZ)(b.Z,{fullWidth:!0,onClick:()=>{if(f()(e.name)){(0,u.yv)("캐릭터를 선택해주세요.",{variant:"error",autoHideDuration:1e3});return}if(t.level<=1){(0,u.yv)("현재 레벨 1입니다.\n\n레벨업을 해주세요.",{variant:"error",autoHideDuration:1e3});return}r()},sx:{border:"1px solid #8C8E94",color:"#525D7B",fontWeight:600,backgroundColor:"#ADD7FF"},children:"레벨다운"}),(0,i.tZ)(b.Z,{fullWidth:!0,onClick:()=>{if(f()(e.name)){(0,u.yv)("캐릭터를 선택해주세요.",{variant:"error",autoHideDuration:1e3});return}if(t.level>309){(0,u.yv)("레벨이 310이 만렙입니다.",{variant:"error",autoHideDuration:1e3});return}n()},sx:{border:"1px solid #8C8E94",color:"#525D7B",fontWeight:600,backgroundColor:"#ADD7FF"},children:"레벨업"})]})]})}var y=n(19317),D=n(60553),A=n(77818),X=n(13864),S=n(93555),E=n(14690);function P(e){let{id:t="Select",name:n="Select",value:r="",options:o=[],optionTextKeyName:l="name",optionValueKeyName:a="code",initialMessage:c,errorMessage:d,onChange:s,formSx:u,disabled:Z,sx:p}=e,g=(0,h.useCallback)(e=>{s&&s(e.target.value)},[s]);return(0,i.tZ)(E.Z,{fullWidth:!0,sx:u,children:(0,i.tZ)(S.Z,{native:!0,variant:"outlined",value:r,disabled:Z,onChange:g,inputProps:{name:n,id:t},sx:p,children:d?(0,i.tZ)("option",{hidden:!0,children:d}):f()(o)||(0,i.BX)(i.HY,{children:[c&&(0,i.tZ)("option",{hidden:!0,children:c}),o.map((e,t)=>(0,i.tZ)("option",{value:e[a],children:e[l]},"".concat(e[a]).concat(t)))]})})})}function W(){let{character:e,percentage:t,printLogs:n,type:r,types:o,xien:a,xiens:c,status:s,setStatus:u,setCharacter:Z,setPercentage:p,setStatusLogs:C,setRedistributionLogs:b,setPrintLogs:x,setType:v,setTypes:B,setXien:F,setXiens:w}=(0,g.sU)(),y=e=>{Z({name:e.name,image:e.image}),u({...D.E3.status,...e.stat[0]}),v(e.stat[0].type),B(e.stat),F(e.xiens[0]),w(e.xiens),S(s.level,e.xiens[0].name)},S=(e,t)=>{C([]),b([]),x([{minLevel:1,maxLevel:1,selectLevels:[1],statName:"XIEN",clickStat:0,isPush:!1,text:"[ Level ".concat(e," ] 스킬 계열 선택 - ").concat(t)}])};return(0,h.useEffect)(()=>{k.Rr.length>0&&y(k.Rr[0])},[]),(0,i.BX)(m.Z,{children:[(0,i.tZ)(d.Z,{color:"#FFF",bgcolor:"#7B8694",fontWeight:600,padding:.7,textAlign:"center",children:"캐릭터 정보"}),(0,i.BX)(m.Z,{spacing:1,p:1,justifyContent:"center",children:[(0,i.tZ)(l.Z,{textAlign:"center",children:e.image&&(0,i.tZ)(X.Z,{src:"".concat(A.ENV_CONFIG.URL,"/").concat(e.image),alt:"룬의 아이들",width:100,height:120,style:{borderRadius:"3px"}})}),(0,i.BX)(l.Z,{mx:"auto",children:[(0,i.BX)(d.Z,{color:"#426DD6",fontWeight:600,fontSize:30,textAlign:"center",children:["Lv.",s.level]}),(0,i.BX)(m.Z,{direction:"row",children:[(0,i.tZ)(d.Z,{color:"#526173",fontWeight:600,fontSize:15,width:30,children:"HP"}),(0,i.BX)(d.Z,{color:"#526173",fontWeight:600,fontSize:15,children:[s.randomHp," (",s.minHp," ~ ",s.maxHp,")"]})]}),(0,i.BX)(m.Z,{direction:"row",children:[(0,i.tZ)(d.Z,{color:"#526173",fontWeight:600,fontSize:15,width:30,children:"MP"}),(0,i.BX)(d.Z,{color:"#526173",fontWeight:600,fontSize:15,children:[s.randomMp," (",s.minMp," ~ ",s.maxMp,")"]})]}),(0,i.BX)(m.Z,{direction:"row",children:[(0,i.tZ)(d.Z,{color:"#526173",fontWeight:600,fontSize:15,width:30,children:"SP"}),(0,i.BX)(d.Z,{color:"#526173",fontWeight:600,fontSize:15,children:[s.randomSp," (",s.minSp," ~ ",s.maxSp,")"]})]})]})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,children:[(0,i.tZ)(P,{id:"tw-charaters",name:"tw-charaters",value:e.name,options:k.Rr,optionTextKeyName:"name",optionValueKeyName:"name",initialMessage:"캐릭터 선택",disabled:f()(k.Rr),onChange:e=>{let t=k.Rr.filter(t=>t.name===e);t.length>0&&y(t[0])},sx:{"& select":{p:1.2},"& option":{backgroundColor:"#BDD7EF !important"},color:"#42495A"}}),(0,i.tZ)(P,{id:"percentage",name:"percentage",value:"".concat(t),options:k.eB,optionTextKeyName:"name",optionValueKeyName:"percentage",initialMessage:"확률 선택",disabled:f()(k.eB)||1!==s.level,onChange:e=>{p(parseInt(e,10))},sx:{"& select":{p:1.2},"& option":{backgroundColor:"#BDD7EF !important"},color:"#42495A"}})]}),(0,i.BX)(m.Z,{direction:"row",spacing:1,p:1,children:[(0,i.tZ)(P,{id:"tw-charaters-type",name:"tw-charaters-type",value:"".concat(r),options:o,optionTextKeyName:"type",optionValueKeyName:"type",initialMessage:"타입 선택",errorMessage:f()(o)&&"캐릭터를 선택해주세요.",disabled:f()(o),onChange:t=>{v(t);let n=k.Rr.filter(t=>t.name===e.name),i=n[0].stat.filter(e=>e.type===t);f()(n)||f()(i)||(u({...D.E3.status,...i[0]}),F(n[0].xiens[0]),S(D.E3.status.level,n[0].xiens[0].name))},sx:{"& select":{p:1.2},"& option":{backgroundColor:"#BDD7EF !important"},color:"#42495A"}}),(0,i.tZ)(P,{id:"tw-charaters-class",name:"tw-charaters-class",value:a.name,options:c,optionTextKeyName:"name",optionValueKeyName:"name",initialMessage:"계열 선택",errorMessage:f()(c)&&"타입을 선택해주세요.",disabled:f()(c),onChange:e=>{F(c.filter(t=>t.name===e)[0]);let t={minLevel:s.level,maxLevel:s.level,selectLevels:[s.level],statName:"XIEN",clickStat:0,isPush:!1,text:"[ Level ".concat(s.level," ] 스킬 계열 선택 - ").concat(e)};1===s.level?x([t]):x([...n,t])},sx:{"& select":{p:1.2},"& option":{backgroundColor:"#BDD7EF !important"},color:"#42495A"}})]})]})}function I(){let{themeStretch:e}=(0,o.K$)();return(0,i.BX)(c.Z,{component:"section",maxWidth:!e&&"xl",children:[(0,i.tZ)(s._f,{style:{display:"block",width:"100%",marginBottom:30},client:"ca-pub-4630727689655943",slot:"4321772552",format:"horizontal",responsive:"true"}),(0,i.tZ)(d.Z,{component:"h1",fontSize:25,marginBottom:2,children:"시뮬레이션"}),(0,i.tZ)(y.Z,{}),(0,i.BX)(a.ZP,{container:!0,spacing:3,children:[(0,i.tZ)(a.ZP,{item:!0,xs:12,md:6,lg:5,children:(0,i.tZ)(l.Z,{sx:{py:"12px",px:"10px !important",border:"5px double #73869C",borderRadius:1,backgroundColor:"#ADD3E7"},children:(0,i.BX)(l.Z,{sx:{px:"0 !important",border:"5px double #73869C",backgroundColor:"#BDD7EF"},children:[(0,i.tZ)(W,{}),(0,i.tZ)(w,{})]})})}),(0,i.tZ)(a.ZP,{item:!0,xs:12,md:6,lg:7,children:(0,i.tZ)(x,{})})]})]})}var N=n(40011);T.getLayout=(e,t)=>(0,i.tZ)(r.Z,{...t,children:e});var H=!0;function T(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(N.Z,{title:"재분배 시뮬레이션 - 테일즈룬",description:"테일즈위버 재분배 시뮬레이션 입니다."}),(0,i.tZ)(I,{})]})}},79774:function(e,t,n){n.d(t,{Cn:function(){return c},j2:function(){return s},y:function(){return l},sU:function(){return u}});var i=n(75271),r=n(72401),o=n(95321);let l=()=>{let e=(0,r.I0)();return{init:(0,i.useCallback)(()=>e((0,o.S1)()),[e]),popupOpen:(0,i.useCallback)(t=>e((0,o.$b)(t)),[e]),popupClose:(0,i.useCallback)(t=>e((0,o.u_)(t)),[e])}};var a=n(13914);let c=()=>{let e=(0,r.I0)();return{currentEncrypt:(0,r.v9)(e=>{let{encrypt:t}=e;return t.currentEncrypt}),currentPercentage:(0,r.v9)(e=>{let{encrypt:t}=e;return t.currentPercentage}),setCurrentEncrypt:(0,i.useCallback)(t=>e((0,a.WS)(t)),[e]),setCurrentPercentage:(0,i.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e((0,a.$i)(t))},[e])}};var d=n(14460);let s=()=>{let e=(0,r.I0)();return{init:(0,i.useCallback)(()=>e((0,d.S1)()),[e]),setNextBoss:(0,i.useCallback)(t=>e((0,d.tA)(t)),[e]),setBossTimeTable:(0,i.useCallback)(t=>e((0,d.hx)(t)),[e])}};var h=n(60553);let u=()=>{let e=(0,r.I0)();return{printLogs:(0,r.v9)(e=>{let{redistribution:t}=e;return t.printLogs}),type:(0,r.v9)(e=>{let{redistribution:t}=e;return t.type}),types:(0,r.v9)(e=>{let{redistribution:t}=e;return t.types}),status:(0,r.v9)(e=>{let{redistribution:t}=e;return t.status}),xien:(0,r.v9)(e=>{let{redistribution:t}=e;return t.xien}),xiens:(0,r.v9)(e=>{let{redistribution:t}=e;return t.xiens}),percentage:(0,r.v9)(e=>{let{redistribution:t}=e;return t.percentage}),character:(0,r.v9)(e=>{let{redistribution:t}=e;return t.character}),setType:(0,i.useCallback)(t=>e((0,h.Cw)(t)),[e]),setTypes:(0,i.useCallback)(t=>e((0,h.WX)(t)),[e]),setXien:(0,i.useCallback)(t=>e((0,h.O4)(t)),[e]),setXiens:(0,i.useCallback)(t=>e((0,h.qW)(t)),[e]),setStatus:(0,i.useCallback)(t=>e((0,h.Tf)(t)),[e]),setPercentage:(0,i.useCallback)(t=>e((0,h._Y)(t)),[e]),setCharacter:(0,i.useCallback)(t=>e((0,h.hh)(t)),[e]),setStatusLogs:(0,i.useCallback)(t=>e((0,h.S4)(t)),[e]),setRedistributionLogs:(0,i.useCallback)(t=>e((0,h.gg)(t)),[e]),setPrintLogs:(0,i.useCallback)(t=>e((0,h.PQ)(t)),[e]),levelUp:(0,i.useCallback)(()=>e((0,h.Hm)()),[e]),prevLogSetting:(0,i.useCallback)(()=>e((0,h.$o)()),[e]),stabUp:(0,i.useCallback)(()=>e((0,h.d7)()),[e]),hackUp:(0,i.useCallback)(()=>e((0,h.VZ)()),[e]),intUp:(0,i.useCallback)(()=>e((0,h._3)()),[e]),defUp:(0,i.useCallback)(()=>e((0,h.gS)()),[e]),mrUp:(0,i.useCallback)(()=>e((0,h.v3)()),[e]),agiUp:(0,i.useCallback)(()=>e((0,h.h6)()),[e]),dexUp:(0,i.useCallback)(()=>e((0,h.Sy)()),[e]),autoStabUp:(0,i.useCallback)(()=>e((0,h.ud)()),[e]),autoHackUp:(0,i.useCallback)(()=>e((0,h.fZ)()),[e]),autoIntUp:(0,i.useCallback)(()=>e((0,h.Gf)()),[e]),autoDefUp:(0,i.useCallback)(()=>e((0,h.ZP)()),[e]),autoMrUp:(0,i.useCallback)(()=>e((0,h.SY)()),[e]),autoAgiUp:(0,i.useCallback)(()=>e((0,h.S5)()),[e]),autoDexUp:(0,i.useCallback)(()=>e((0,h.Ch)()),[e])}}}}]);