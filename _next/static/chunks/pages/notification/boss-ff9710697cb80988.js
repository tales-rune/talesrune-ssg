(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{32116:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notification/boss",function(){return n(46495)}])},51634:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var i=n(12691),a=n(10646),r=n(83566),o=n(56309),s=n(83105),c=n(46244),l=n(4535),u=n(62984),d=n(89350),f=n(28270),m=n(62458);let p=[{name:"공식 홈페이지",href:o.S_.TWHOMEPAGE,target:"_blank",rel:"noopener noreferrer"},{name:"고객센터",href:o.S_.SERVICECENTER,target:"_blank",rel:"noopener noreferrer"}];function h(){let{themeStretch:e}=(0,m.K$)(),{palette:t}=(0,d.Z)(),n=(0,i.tZ)(s.Z,{sx:{padding:"10px",borderWidth:"1px 0",borderStyle:"solid",borderColor:t.divider},children:(0,i.tZ)(l.Z,{maxWidth:!e&&"lg",children:(0,i.tZ)(c.ZP,{container:!0,spacing:2,children:p.map(e=>(0,i.tZ)(c.ZP,{item:!0,xs:12,sm:6,textAlign:"center",alignItems:{xs:"center",md:"flex-start"},children:(0,i.tZ)(f.Z,{href:e.href,target:e.target,rel:e.rel,variant:"body2",color:"inherit",fontSize:17,children:e.name})},e.name))})})}),a=(0,i.tZ)(l.Z,{maxWidth:!e&&"lg",children:(0,i.tZ)(u.Z,{variant:"caption",component:"div",sx:{padding:"10px 0",textAlign:{xs:"center",md:"left"}},children:"\xa9 2023 Tales Rune. Tales Rune isn’t endorsed by Nexon Korea and doesn’t reflect the views or opinions of Nexon Korea or anyone officially involved in producing or managing Tales Weaver. Tales Weaver and Nexon Korea are trademarks or registered trademarks of Nexon Korea , Inc. Tales Weaver \xa9 Nexon Korea, Inc."})});return(0,i.BX)(s.Z,{component:"footer",children:[n,a]})}function Z(e){let{children:t}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(r.Z,{}),(0,i.tZ)(a.Z,{children:t}),(0,i.tZ)(h,{})]})}},4931:function(e,t,n){"use strict";var i=n(7672),a=n.n(i);n(80672);var r=n(43030),o=n.n(r),s=n(19985),c=n.n(s),l=n(49301),u=n.n(l),d=n(49665),f=n.n(d),m=n(99572),p=n.n(m),h=n(8144),Z=n.n(h),g=n(25238),v=n.n(g),x=n(85235),b=n.n(x);a().extend(o()),a().extend(c()),a().extend(u()),a().extend(f()),a().extend(p()),a().extend(Z()),a().extend(v()),a().extend(b()),a().locale("ko"),a().updateLocale("ko",{relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"1시간",hh:"%d시간",d:"1일",dd:"%d일",M:"1달",MM:"%d달",y:"1년",yy:"%d년"}}),a().tz.setDefault("Asia/Seoul"),t.Z=a()},46495:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ed},default:function(){return ef}});var i=n(12691),a=n(51634),r=n(62458),o=n(4535),s=n(62984),c=n(75271),l=n(83105),u=n(28017),d=n(4931);function f(e,t){let n=(0,d.Z)(e).format(t||"YYYY-MM-DD HH:mm");return"Invalid Date"===n?"":n||""}function m(e){return e?(0,d.Z)(e).valueOf():0}function p(e){return(0,d.Z)().format(e||"YYYY-MM-DD HH:mm")}let h={currentTimeSetting:"current-time-setting"};function Z(e){let{title:t="현재 시간"}=e,a=(0,c.useRef)(),[r,o]=(0,c.useState)(p("hh")),[d,f]=(0,c.useState)(p("mm")),[m,Z]=(0,c.useState)(p("ss")),[g,v]=(0,c.useState)(p("A"));return(0,c.useEffect)(()=>{var e;return a.current=new Worker(n.tu(new URL(n.p+n.u(836),n.b))),a.current.onmessage=e=>{e.data===h.currentTimeSetting&&(o(p("hh")),f(p("mm")),Z(p("ss")),v(p("A")))},null===(e=a.current)||void 0===e||e.postMessage(h.currentTimeSetting),()=>{var e;null===(e=a.current)||void 0===e||e.terminate()}},[]),(0,i.BX)(l.Z,{sx:e=>({marginBottom:"30px",padding:"15px",border:"1px solid ".concat(e.palette.divider),borderRadius:"10px"}),children:[(0,i.tZ)(s.Z,{fontSize:25,textAlign:"center",children:t}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,children:[(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:15,sm:25,md:35},children:g}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:30,sm:40,md:50},children:r}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:25,sm:35,md:45},children:":"}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:30,sm:40,md:50},children:d}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:25,sm:35,md:45},children:":"}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:30,sm:40,md:50},sx:e=>({color:Number(m)>=50?"#ff4444":e.palette.text.primary}),children:m})]})]})}var g=n(72767),v=n(53759);function x(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(s.Z,{component:"h2",fontSize:25,margin:"30px 0 10px",children:"공지사항"}),(0,i.tZ)(v.Z,{sx:{padding:"15px",borderRadius:"10px"},children:(0,i.BX)(u.Z,{spacing:1,children:[(0,i.BX)(l.Z,{children:[(0,i.tZ)(s.Z,{children:"2023년 12월 20일 부터 주요 던전과 필드 보스의 상세 정보를 확인할 수 있는 콘텐츠 정보 시스템이 업데이트 되었습니다."}),(0,i.tZ)(s.Z,{children:"(게임 내 오른쪽 사이드 메뉴 버튼 또는 단축키(Ctrl+T)로 UI 오픈)"})]}),(0,i.tZ)(s.Z,{fontWeight:600,children:"이제 드랍아이템은 인게임에서 정확하게 확인이 가능해졌습니다."})]})})]})}var b=n(79774),N=n(55589),k=n(75746);function S(e,t){return{getItem:()=>{let n=localStorage.getItem(e);return null===n?t:JSON.parse(n)},setItem:t=>{let n=JSON.stringify(t)||"";localStorage.setItem(e,n)},removeItem:()=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}}}var C=n(74399),_=n(25463),w=n(56006),M=n(62874),y=n(20341),H=n(29660),Y=n(70029);let B=e=>({"& .MuiDialog-paper":{borderRadius:"10px",backgroundImage:"none"},top:-15,left:-20,right:-20,bottom:-15,...(0,Y.Q6)(e)}),I={display:"flex",alignItems:"center",justifyContent:"space-between"};var X=n(96257),R=n(72401),U=n(84690);function z(e){let{name:t,title:n,maxWidth:a="lg",children:r}=e,{popup1:o,popup2:l,popup3:u,popup4:d,popup5:f}=(0,R.v9)(e=>{let{popup:t}=e;return t},U.wU),{popupClose:m}=(0,b.y)(),p=(0,c.useCallback)(e=>{let t=!1;switch(e){case 1:default:t=o;break;case 2:t=l;break;case 3:t=u;break;case 4:t=d;break;case 5:t=f}return t},[o,l,u,d,f]),h=(0,c.useCallback)(()=>{m(t)},[t,m]);return(0,i.BX)(w.Z,{fullWidth:!0,maxWidth:a,open:p(t),onClose:h,"aria-labelledby":"dialog-title",sx:B,children:[(0,i.BX)(M.Z,{id:"dialog-title",sx:I,children:[(0,i.tZ)(s.Z,{fontSize:"19px",fontWeight:600,children:n}),(0,i.tZ)(H.Z,{onClick:h,"aria-label":"dialog-close",disableRipple:!0,sx:e=>({color:e.palette.grey[500],pr:0}),children:(0,i.tZ)(X.Z,{src:"/assets/icons/ic_xmark.svg"})})]}),(0,i.tZ)(y.Z,{sx:{pb:"24px"},children:r})]})}function D(){let{getItem:e,setItem:t}=S("boss-notification-settings",{isGolonNotification:!0,isGolmodapNotification:!0,isAKanNotification:!0,isSperchendNotification:!0,isOriginOfRuinNotification:!0,isBuffNotification:!0,is10MinutesNotification:!0,is5MinutesNotification:!0,is3MinutesNotification:!0,is1MinutesNotification:!0}),{data:n=[]}=(0,C.mT)(),[{isGolonNotification:a,isGolmodapNotification:r,isAKanNotification:o,isSperchendNotification:l,isOriginOfRuinNotification:d,isBuffNotification:f,is10MinutesNotification:m,is5MinutesNotification:p,is3MinutesNotification:h,is1MinutesNotification:Z},g]=(0,c.useState)(e()),v=e=>"골론"===e?a:"골모답"===e?r:"아칸"===e?o:"스페르첸드"===e?l:"파멸의 기원"===e?d:void 0,x=(e,n)=>(i,a)=>{"m"===n&&(10===e?g(e=>{let n={...e,is10MinutesNotification:a};return t(n),n}):5===e?g(e=>{let n={...e,is5MinutesNotification:a};return t(n),n}):3===e?g(e=>{let n={...e,is3MinutesNotification:a};return t(n),n}):1===e&&g(e=>{let n={...e,is1MinutesNotification:a};return t(n),n})),"s"===n&&20===e&&g(e=>{let n={...e,isBuffNotification:a};return t(n),n})},b=e=>(n,i)=>{"골론"===e?g(e=>{let n={...e,isGolonNotification:i};return t(n),n}):"골모답"===e?g(e=>{let n={...e,isGolmodapNotification:i};return t(n),n}):"아칸"===e?g(e=>{let n={...e,isAKanNotification:i};return t(n),n}):"스페르첸드"===e?g(e=>{let n={...e,isSperchendNotification:i};return t(n),n}):"파멸의 기원"===e&&g(e=>{let n={...e,isOriginOfRuinNotification:i};return t(n),n})};return(0,i.BX)(z,{name:1,title:"알림 설정",maxWidth:"md",children:[(0,i.tZ)(s.Z,{fontSize:17,children:"보스 알림 설정"}),(0,i.tZ)(u.Z,{direction:"row",spacing:3,flexWrap:"wrap",children:n.map(e=>(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(_.Z,{checked:v(e.name),onChange:b(e.name)}),(0,i.tZ)(s.Z,{children:e.name})]},e.id))}),(0,i.tZ)(k.Z,{sx:{mt:1,mb:2}}),(0,i.tZ)(s.Z,{fontSize:17,children:"시간 알림 설정"}),(0,i.BX)(u.Z,{direction:"row",spacing:4,flexWrap:"wrap",children:[(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(_.Z,{checked:m,onChange:x(10,"m")}),(0,i.tZ)(s.Z,{children:"10분"})]}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(_.Z,{checked:p,onChange:x(5,"m")}),(0,i.tZ)(s.Z,{children:"5분"})]}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(_.Z,{checked:h,onChange:x(3,"m")}),(0,i.tZ)(s.Z,{children:"3분"})]}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(_.Z,{checked:Z,onChange:x(1,"m")}),(0,i.tZ)(s.Z,{children:"1분"})]}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(_.Z,{checked:f,onChange:x(20,"s")}),(0,i.tZ)(s.Z,{children:"20초전 버프 알림"})]})]})]})}function O(e,t,n){return(0,d.Z)(e).diff(t,n)}function E(e,t,n){return(0,d.Z)(e).add(t,n)}function P(e,t,n){return(0,d.Z)(e).subtract(t,n)}n(7088);var W=n(77818),T=n(21743),G=n(44018),L=n(29597);function A(e){let{content:t,placement:n,...a}=e,r=(0,i.tZ)(s.Z,{variant:"caption",whiteSpace:"pre-line",sx:{display:"block",py:.6,px:.3},children:t&&t.trim()});return(0,i.tZ)(G.Z,{title:r,arrow:!0,placement:n||"top",...a,children:(0,i.tZ)(L.Z,{icon:"pajamas:question"})})}var j=n(36806);let K={pushNotification:"push-notification",pushBuffNotification:"push-buff-notification"};function V(){let{getItem:e,setItem:t}=S("boss-notification-settings",{isGolonNotification:!0,isGolmodapNotification:!0,isAKanNotification:!0,isSperchendNotification:!0,isOriginOfRuinNotification:!0,isBuffNotification:!0,isPushNotification:!1,is10MinutesNotification:!0,is5MinutesNotification:!0,is3MinutesNotification:!0,is1MinutesNotification:!0}),a=(0,c.useRef)(),r=(0,c.useRef)(),[o,s]=(0,c.useState)(!1),d=(0,R.v9)(e=>{let{notification:t}=e;return t.boss.nextBoss},U.wU),f=n=>{var i,r;h("푸시 알림이 활성화 되었습니다.","".concat(W.ENV_CONFIG.URL,"/assets/images/tw/error.png")),s(n),t({...e(),isPushNotification:n}),null===(i=a.current)||void 0===i||i.postMessage(K.pushNotification),null===(r=a.current)||void 0===r||r.postMessage(K.pushBuffNotification)},m=n=>{(0,j.yv)(n.trim(),{variant:"error"}),s(!1),t({...e(),isPushNotification:!1})},h=(e,t)=>{try{var n;null===(n=r.current)||void 0===n||n.showNotification("테일즈룬 보스 알리미",{body:e,icon:t})}catch(e){(0,j.yv)("정상적인 푸시 알림이 불가능한 상태입니다.",{variant:"error"})}},Z=()=>{let t=e(),n=p("HH:mm"),i=P(null==d?void 0:d.appearance_date,10,"minute").format("HH:mm"),a=P(null==d?void 0:d.appearance_date,5,"minute").format("HH:mm"),r=P(null==d?void 0:d.appearance_date,3,"minute").format("HH:mm"),o=P(null==d?void 0:d.appearance_date,1,"minute").format("HH:mm");if((null==d?void 0:d.id)===C.am[0].id){if(!1===t.isGolonNotification)return}else if((null==d?void 0:d.id)===C.am[1].id){if(!1===t.isGolmodapNotification)return}else if((null==d?void 0:d.id)===C.am[2].id){if(!1===t.isAKanNotification)return}else if((null==d?void 0:d.id)===C.am[3].id){if(!1===t.isSperchendNotification)return}else if((null==d?void 0:d.id)===C.am[4].id&&!1===t.isOriginOfRuinNotification)return;n===i?t.is10MinutesNotification&&h("필드 보스 ".concat(null==d?void 0:d.name," 출현 10분 전입니다."),"".concat(W.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==d?void 0:d.image)):n===a?t.is5MinutesNotification&&h("필드 보스 ".concat(null==d?void 0:d.name," 출현 5분 전입니다."),"".concat(W.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==d?void 0:d.image)):n===r?t.is3MinutesNotification&&h("필드 보스 ".concat(null==d?void 0:d.name," 출현 3분 전입니다."),"".concat(W.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==d?void 0:d.image)):n===o&&t.is1MinutesNotification&&h("필드 보스 ".concat(null==d?void 0:d.name," 출현 1분 전입니다."),"".concat(W.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==d?void 0:d.image))},g=()=>{let t=e();p("HH:mm:ss")===P(null==d?void 0:d.appearance_date,20,"second").format("HH:mm:ss")&&t.isBuffNotification&&h("".concat(20,"초 전입니다. 버프를 사용해 주세요."),"".concat(W.ENV_CONFIG.URL,"/assets/images/tw/error.png"))};return(0,c.useEffect)(()=>((async()=>{if("serviceWorker"in navigator){let e=await navigator.serviceWorker.register("/service-workers/notifications/boss/push-notification.worker.js");r.current=e}})(),()=>{r.current&&r.current.unregister()}),[]),(0,c.useEffect)(()=>(a.current=new Worker(n.tu(new URL(n.p+n.u(37),n.b)),{type:void 0}),a.current.onmessage=e=>{let t=e.data;t===K.pushNotification?Z():t===K.pushBuffNotification&&g()},()=>{a.current&&(a.current.postMessage("clean"),a.current.onmessage=null,a.current.terminate())}),[d]),(0,i.tZ)(l.Z,{minWidth:{md:154},children:(0,i.BX)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,i.tZ)(T.Z,{control:(0,i.tZ)(_.Z,{checked:o,onChange:(n,i)=>{(async()=>{if(i)"Notification"in window?"granted"===Notification.permission?f(i):"denied"!==Notification.permission?"granted"===await Notification.requestPermission()?f(i):m("\n                            현재 알림 권한이 없습니다.\n                            사이트 설정에서 알림 권한을 허용해 주세요.\n    \n                            *시크릿 모드, Private 모드에서는 알림이 활성화되지 않습니다.\n                        "):m("\n                        현재 알림 권한이 없습니다.\n                        사이트 설정에서 알림 권한을 허용해 주세요.\n\n                        *시크릿 모드, Private 모드에서는 알림이 활성화되지 않습니다.\n                    "):m("현재 사용중인 브라우저는 알림을 지원하지 않습니다.");else{var n;s(!1),t({...e(),isPushNotification:!1}),null===(n=a.current)||void 0===n||n.postMessage("clean")}})()}}),label:"푸시 알림 사용",sx:{mr:0}}),(0,i.tZ)(A,{content:"\n                        아래와 같은 알림을 받습니다.\n                        - 운영체제(윈도우, 맥 등) 알림 시스템 트레이 \n                        - 모바일(안드로이드, IOS 등) 푸시 알림\n\n                        아래와 같은 조건이 필요합니다.\n                        - 브라우저가 실행된 상태로있어야됩니다.\n                        - 알림 권한이 허용되어 있어야 합니다. (브라우저에서 사이트 설정 확인)\n                    "})]})})}let F=["/sounds/buff/audio_0.wav","/sounds/buff/audio_1.wav","/sounds/buff/audio_3.wav","/sounds/buff/audio_4.wav","/sounds/buff/audio_5.wav","/sounds/buff/audio_6.wav"];var $=n(86181);let q=(0,c.forwardRef)((e,t)=>{let{onChangeVolume:n}=e,[a,r]=(0,c.useState)(.5);return(0,i.BX)(u.Z,{direction:"row",spacing:2,width:"200px",alignItems:"center",children:[(0,i.BX)("audio",{ref:t,children:[(0,i.tZ)("track",{kind:"captions",label:"테일즈위버",default:!0}),"브라우저가 오디오를 지원하지 않습니다."]}),(0,i.tZ)(X.Z,{src:"/assets/icons/ic_volume_low.svg",sx:{width:40,heigth:40,marginLeft:"0 !important"}}),(0,i.tZ)($.ZP,{value:a,step:.01,min:0,max:1,onChange:(e,t)=>{let i=parseFloat(String(t));r(i),n&&n(i)},"aria-label":"Volume",sx:{"& .MuiSlider-thumb":{width:15,height:15},"& .MuiSlider-thumb:hover":{boxShadow:"0px 0px 0px 6px rgba(32, 101, 209, 0.16) !important"}}}),(0,i.tZ)(X.Z,{src:"/assets/icons/ic_volume_high.svg",sx:{width:50,heigth:50}})]})}),J={voiceNotification:"voice-notification",buffNotification:"buff-notification"};function Q(){let{getItem:e}=S("boss-notification-settings",{isGolonNotification:!0,isGolmodapNotification:!0,isAKanNotification:!0,isSperchendNotification:!0,isOriginOfRuinNotification:!0,isBuffNotification:!0,isPushNotification:!1,is10MinutesNotification:!0,is5MinutesNotification:!0,is3MinutesNotification:!0,is1MinutesNotification:!0}),t=(0,c.useRef)(),a=(0,c.useRef)(null),[r,o]=(0,c.useState)(!1),s=(0,R.v9)(e=>{let{notification:t}=e;return t.boss.nextBoss},U.wU),d=e=>{e&&a.current&&(a.current.src=e,a.current.play())},f=()=>{let t=e(),n=p("HH:mm"),i=P(null==s?void 0:s.appearance_date,10,"minute").format("HH:mm"),a=P(null==s?void 0:s.appearance_date,5,"minute").format("HH:mm"),r=P(null==s?void 0:s.appearance_date,3,"minute").format("HH:mm"),o=P(null==s?void 0:s.appearance_date,1,"minute").format("HH:mm");if((null==s?void 0:s.id)===C.am[0].id){if(!1===t.isGolonNotification)return}else if((null==s?void 0:s.id)===C.am[1].id){if(!1===t.isGolmodapNotification)return}else if((null==s?void 0:s.id)===C.am[2].id){if(!1===t.isAKanNotification)return}else if((null==s?void 0:s.id)===C.am[3].id){if(!1===t.isSperchendNotification)return}else if((null==s?void 0:s.id)===C.am[4].id&&!1===t.isOriginOfRuinNotification)return;n===i?t.is10MinutesNotification&&d(null==s?void 0:s.sound_path.minutes10_ago):n===a?t.is5MinutesNotification&&d(null==s?void 0:s.sound_path.minutes5_ago):n===r?t.is3MinutesNotification&&d(null==s?void 0:s.sound_path.minutes3_ago):n===o&&t.is1MinutesNotification&&d(null==s?void 0:s.sound_path.minutes1_ago)},m=()=>{let t=e();p("HH:mm:ss")===P(null==s?void 0:s.appearance_date,20,"second").format("HH:mm:ss")&&t.isBuffNotification&&d(F[Math.floor(Math.random()*F.length)])};return(0,c.useEffect)(()=>(t.current=new Worker(n.tu(new URL(n.p+n.u(828),n.b)),{type:void 0}),t.current.onmessage=e=>{let t=e.data;t===J.voiceNotification?f():t===J.buffNotification&&m()},()=>{t.current&&(t.current.postMessage("clean"),t.current.onmessage=null,t.current.terminate())}),[s]),(0,i.BX)(u.Z,{direction:{xs:"column",md:"row"},spacing:4,alignItems:"center",width:"100%",children:[(0,i.BX)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,i.tZ)(T.Z,{control:(0,i.tZ)(_.Z,{checked:r,onChange:(e,n)=>{var i,a,r;n?((0,j.yv)("음성 알림을 시작합니다.\n[ 음성알림 시간 ]\n- 필드보스 출현: 1, 3, 5, 10분 전\n- 필드보스 출현 전 버프 사용: 20초 전 \n\n* 이 콘텐츠는 인공지능 가상 연기자 서비스\n  타입캐스트를 활용하여 제작되었습니다.\n  출연진 : 류은\n  https://typecast.ai/kr",{variant:"info"}),d("/sounds/audio_음성알림시작.mp3"),null===(i=t.current)||void 0===i||i.postMessage(J.voiceNotification),null===(a=t.current)||void 0===a||a.postMessage(J.buffNotification)):((0,j.yv)("음성 알림을 중지합니다.",{variant:"success"}),null===(r=t.current)||void 0===r||r.postMessage("clean")),o(n)}}),label:"음성 알림 사용",sx:{mr:0}}),(0,i.tZ)(A,{content:"\n                        아래와 같은 알림을 받습니다.\n                        - 음성 알림\n\n                        아래와 같은 조건이 필요합니다.\n                        - 브라우저가 실행된 상태로있어야됩니다.\n                    "})]}),(0,i.tZ)(l.Z,{sx:{ml:{md:"auto !important"}},children:(0,i.BX)(u.Z,{spacing:1.2,alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(N.Z,{variant:"contained",color:"primary",onClick:()=>{d("/sounds/음성알림 테스트.mp3")},sx:{minWidth:167},children:"소리조절용 음성듣기"}),(0,i.tZ)(q,{ref:a,onChangeVolume:e=>{a.current&&(a.current.volume=e)}})]})})]})}var ee=n(46244);function et(){let[e,t]=(0,c.useState)("00:00:00"),a=(0,R.v9)(e=>{let{notification:t}=e;return t.boss.nextBoss},U.wU),r=(0,c.useCallback)(()=>{let e="",n=(0,d.Z)().hour(),i=O(p("YYYY-MM-DD HH:mm"),null==a?void 0:a.appearance_date,"days"),r=O(23===n?E(null==a?void 0:a.appearance_date,1,"day").format("YYYY-MM-DD HH:mm"):i>0?E(null==a?void 0:a.appearance_date,i,"day").format("YYYY-MM-DD HH:mm"):"".concat(p("YYYY-MM-DD")," ").concat(f(null==a?void 0:a.appearance_date,"HH:mm")),P(p("YYYY-MM-DD HH:mm:ss"),-1,"second")),o=String(Math.floor(r/36e5)).padStart(2,"0"),s=String(Math.floor(r%36e5/6e4)).padStart(2,"0"),c=String(Math.floor(r%6e4/1e3)).padStart(2,"0");t("".concat(o,":").concat(s,":").concat(c))},[a]);return(0,c.useEffect)(()=>{let e=new Worker(n.tu(new URL(n.p+n.u(764),n.b)),{type:void 0});return e.onmessage=e=>{"remaining-time-setting"===e.data&&r()},e.postMessage("remaining-time-setting"),()=>{e&&(e.postMessage("clean"),e.onmessage=null,e.terminate())}},[a]),(0,i.BX)(ee.ZP,{item:!0,xs:12,md:6,lg:3,sx:{mt:{xs:2,lg:0},textAlign:"center"},children:[(0,i.tZ)(s.Z,{fontSize:20,children:"남은 시간"}),(0,i.tZ)(s.Z,{fontSize:50,lineHeight:1.2,children:e})]})}var en=n(28270),ei=n(13864);function ea(){let{data:e=[]}=(0,C.mT)(),t=(0,R.v9)(e=>{let{notification:t}=e;return t.boss.nextBoss},U.wU),a=(0,R.v9)(e=>{let{notification:t}=e;return t.boss.bossTimeTable},U.wU),{setNextBoss:r,setBossTimeTable:o}=(0,b.j2)(),l=()=>{let t=[];return e.map(e=>{e.appearance_times.map(n=>{t.push({...e,appearance_date:"".concat(p("YYYY-MM-DD")," ").concat(n.time)})})}),t.sort((e,t)=>m(e.appearance_date)-m(t.appearance_date)),o(t),t},h=e=>{let t=e||a,{length:n}=t;for(let e=0;e<n;e++){var i,o;let n=t[e],a="",s=(0,d.Z)().hour(),c=O(p("YYYY-MM-DD HH:mm"),n.appearance_date,"days");if(a=23===s?E(n.appearance_date,1,"day").format("YYYY-MM-DD HH:mm"):c>0?E(n.appearance_date,c,"day").format("YYYY-MM-DD HH:mm"):"".concat(p("YYYY-MM-DD")," ").concat(f(n.appearance_date,"HH:mm")),i=p("YYYY-MM-DD HH:mm"),o=a,!(0,d.Z)(i).isSameOrAfter(o)){r(n);return}}};return(0,c.useEffect)(()=>{h(l())},[]),(0,c.useEffect)(()=>{let e=new Worker(n.tu(new URL(n.p+n.u(543),n.b)),{type:void 0});return e.onmessage=e=>{"next-boss-setting"===e.data&&h()},e.postMessage("next-boss-setting"),()=>{e&&(e.postMessage("clean"),e.onmessage=null,e.terminate())}},[t]),(0,i.BX)(i.HY,{children:[(0,i.tZ)(ee.ZP,{item:!0,xs:12,md:6,lg:2,sx:{"& img":{margin:{xs:"0 auto 13px",md:"0 auto",lg:"0 auto 0 0"}}},children:(null==t?void 0:t.image)&&(0,i.tZ)(ei.Z,{src:"".concat(W.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==t?void 0:t.image),alt:"보스",width:250,height:160,style:{display:"block",width:"auto"}})}),(0,i.BX)(ee.ZP,{item:!0,xs:12,md:6,lg:4,sx:{textAlign:{xs:"center",lg:"left"}},children:[(0,i.tZ)(s.Z,{fontSize:30,children:null==t?void 0:t.name}),(0,i.tZ)(s.Z,{fontSize:20,children:null==t?void 0:t.location}),(null==t?void 0:t.drop_link)&&(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:{xs:"center",lg:"left"},children:[(0,i.tZ)(X.Z,{src:"/assets/icons/navbar/ic_external.svg",color:"#388be3"}),(0,i.tZ)(en.Z,{href:null==t?void 0:t.drop_link,target:"_blank",rel:"noopener noreferrer",sx:{color:"#388be3",fontSize:20},children:"드랍아이템"})]})]}),(0,i.BX)(ee.ZP,{item:!0,xs:12,md:6,lg:3,sx:{mt:{xs:3,lg:0},textAlign:"center"},children:[(0,i.tZ)(s.Z,{fontSize:20,children:"출현 시간"}),(0,i.tZ)(s.Z,{fontSize:50,lineHeight:1.2,children:f(null==t?void 0:t.appearance_date,"HH:mm")})]})]})}function er(){return(0,i.BX)(ee.ZP,{container:!0,alignItems:"center",justifyItems:"center",marginBottom:1,children:[(0,i.tZ)(ea,{}),(0,i.tZ)(et,{})]})}function eo(){let{popupOpen:e}=(0,b.y)();return(0,i.BX)(i.HY,{children:[(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",margin:"30px 0 10px",spacing:1,children:[(0,i.tZ)(s.Z,{component:"h2",fontSize:25,children:"다음 필드보스"}),(0,i.tZ)(N.Z,{variant:"contained",onClick:()=>{e(1)},children:"알림 설정"})]}),(0,i.BX)(v.Z,{sx:{padding:"15px",borderRadius:"10px"},children:[(0,i.tZ)(er,{}),(0,i.tZ)(k.Z,{}),(0,i.BX)(u.Z,{direction:{xs:"column",md:"row"},spacing:{xs:0,md:2},alignItems:"center",margin:"20px 0 0",children:[(0,i.tZ)(V,{}),(0,i.tZ)(Q,{})]})]}),(0,i.tZ)(D,{})]})}function es(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(s.Z,{component:"h2",fontSize:25,margin:"30px 0 10px",children:"알림없는 보스"}),(0,i.BX)(v.Z,{sx:{padding:"15px",borderRadius:"10px"},children:[(0,i.tZ)(s.Z,{fontSize:18,children:"장소: 프라바 전초기지"}),(0,i.tZ)(s.Z,{fontSize:18,children:"프라바 방어전: 매시간 짝수"}),(0,i.tZ)(s.Z,{fontSize:18,children:"프라바 필드보스: 매시간 홀수"})]})]})}function ec(){let{data:e=[]}=(0,C.mT)();return(0,i.BX)(i.HY,{children:[(0,i.tZ)(s.Z,{component:"h2",fontSize:25,margin:"30px 0 10px",children:"필드보스 시간표"}),(0,i.tZ)(ee.ZP,{container:!0,spacing:2,children:null==e?void 0:e.map(e=>(0,i.tZ)(ee.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,i.BX)(v.Z,{sx:{padding:"15px",borderRadius:"10px",textAlign:"center"},children:[e.image&&(0,i.tZ)(ei.Z,{src:"".concat(W.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(e.image),alt:e.name,width:250,height:180,style:{width:"auto",margin:"0 auto"}}),(0,i.tZ)(s.Z,{fontSize:30,marginTop:2,children:e.name}),(0,i.tZ)(s.Z,{fontSize:20,children:e.location}),e.drop_link&&(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(X.Z,{src:"/assets/icons/navbar/ic_external.svg",color:"#388be3"}),(0,i.tZ)(en.Z,{href:e.drop_link,target:"_blank",rel:"noopener noreferrer",sx:{color:"#388be3",fontSize:20},children:"드랍아이템"})]}),(0,i.tZ)(u.Z,{marginTop:2,height:180,children:e.appearance_times.map((e,t)=>(0,i.tZ)(s.Z,{fontSize:20,children:e.time},"".concat(t).concat(e.time)))})]})},e.id))})]})}function el(){let{themeStretch:e}=(0,r.K$)();return(0,i.BX)(o.Z,{component:"section",maxWidth:!e&&"xl",children:[(0,i.tZ)(g._f,{style:{display:"block",width:"100%",marginBottom:30},client:"ca-pub-4630727689655943",slot:"4321772552",format:"horizontal",responsive:"true"}),(0,i.tZ)(s.Z,{component:"h1",fontSize:25,paragraph:!0,children:"보스 알리미"}),(0,i.tZ)(Z,{title:"테일즈위버 시간"}),(0,i.tZ)(eo,{}),(0,i.tZ)(es,{}),(0,i.tZ)(x,{}),(0,i.tZ)(ec,{})]})}var eu=n(40011);ef.getLayout=(e,t)=>(0,i.tZ)(a.Z,{...t,children:e});var ed=!0;function ef(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(eu.Z,{title:"보스 알리미 - 테일즈룬",description:"테일즈위버 보스 알림 입니다."}),(0,i.tZ)(el,{})]})}},79774:function(e,t,n){"use strict";n.d(t,{Cn:function(){return c},j2:function(){return u},y:function(){return o},sU:function(){return f}});var i=n(75271),a=n(72401),r=n(95321);let o=()=>{let e=(0,a.I0)();return{init:(0,i.useCallback)(()=>e((0,r.S1)()),[e]),popupOpen:(0,i.useCallback)(t=>e((0,r.$b)(t)),[e]),popupClose:(0,i.useCallback)(t=>e((0,r.u_)(t)),[e])}};var s=n(13914);let c=()=>{let e=(0,a.I0)();return{currentEncrypt:(0,a.v9)(e=>{let{encrypt:t}=e;return t.currentEncrypt}),currentPercentage:(0,a.v9)(e=>{let{encrypt:t}=e;return t.currentPercentage}),setCurrentEncrypt:(0,i.useCallback)(t=>e((0,s.WS)(t)),[e]),setCurrentPercentage:(0,i.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e((0,s.$i)(t))},[e])}};var l=n(14460);let u=()=>{let e=(0,a.I0)();return{init:(0,i.useCallback)(()=>e((0,l.S1)()),[e]),setNextBoss:(0,i.useCallback)(t=>e((0,l.tA)(t)),[e]),setBossTimeTable:(0,i.useCallback)(t=>e((0,l.hx)(t)),[e])}};var d=n(60553);let f=()=>{let e=(0,a.I0)();return{printLogs:(0,a.v9)(e=>{let{redistribution:t}=e;return t.printLogs}),type:(0,a.v9)(e=>{let{redistribution:t}=e;return t.type}),types:(0,a.v9)(e=>{let{redistribution:t}=e;return t.types}),status:(0,a.v9)(e=>{let{redistribution:t}=e;return t.status}),xien:(0,a.v9)(e=>{let{redistribution:t}=e;return t.xien}),xiens:(0,a.v9)(e=>{let{redistribution:t}=e;return t.xiens}),percentage:(0,a.v9)(e=>{let{redistribution:t}=e;return t.percentage}),character:(0,a.v9)(e=>{let{redistribution:t}=e;return t.character}),setType:(0,i.useCallback)(t=>e((0,d.Cw)(t)),[e]),setTypes:(0,i.useCallback)(t=>e((0,d.WX)(t)),[e]),setXien:(0,i.useCallback)(t=>e((0,d.O4)(t)),[e]),setXiens:(0,i.useCallback)(t=>e((0,d.qW)(t)),[e]),setStatus:(0,i.useCallback)(t=>e((0,d.Tf)(t)),[e]),setPercentage:(0,i.useCallback)(t=>e((0,d._Y)(t)),[e]),setCharacter:(0,i.useCallback)(t=>e((0,d.hh)(t)),[e]),setStatusLogs:(0,i.useCallback)(t=>e((0,d.S4)(t)),[e]),setRedistributionLogs:(0,i.useCallback)(t=>e((0,d.gg)(t)),[e]),setPrintLogs:(0,i.useCallback)(t=>e((0,d.PQ)(t)),[e]),levelUp:(0,i.useCallback)(()=>e((0,d.Hm)()),[e]),prevLogSetting:(0,i.useCallback)(()=>e((0,d.$o)()),[e]),stabUp:(0,i.useCallback)(()=>e((0,d.d7)()),[e]),hackUp:(0,i.useCallback)(()=>e((0,d.VZ)()),[e]),intUp:(0,i.useCallback)(()=>e((0,d._3)()),[e]),defUp:(0,i.useCallback)(()=>e((0,d.gS)()),[e]),mrUp:(0,i.useCallback)(()=>e((0,d.v3)()),[e]),agiUp:(0,i.useCallback)(()=>e((0,d.h6)()),[e]),dexUp:(0,i.useCallback)(()=>e((0,d.Sy)()),[e]),autoStabUp:(0,i.useCallback)(()=>e((0,d.ud)()),[e]),autoHackUp:(0,i.useCallback)(()=>e((0,d.fZ)()),[e]),autoIntUp:(0,i.useCallback)(()=>e((0,d.Gf)()),[e]),autoDefUp:(0,i.useCallback)(()=>e((0,d.ZP)()),[e]),autoMrUp:(0,i.useCallback)(()=>e((0,d.SY)()),[e]),autoAgiUp:(0,i.useCallback)(()=>e((0,d.S5)()),[e]),autoDexUp:(0,i.useCallback)(()=>e((0,d.Ch)()),[e])}}}},function(e){e.O(0,[889,244,858,772,888,774,179],function(){return e(e.s=32116)}),_N_E=e.O()}]);