(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{32116:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notification/boss",function(){return n(46495)}])},51634:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});var i=n(12691),a=n(10646),r=n(83566),o=n(56309),s=n(83105),c=n(46244),l=n(4535),u=n(62984),d=n(89350),f=n(28270),m=n(62458);let p=[{name:"공식 홈페이지",href:o.S_.TWHOMEPAGE,target:"_blank",rel:"noopener noreferrer"},{name:"고객센터",href:o.S_.SERVICECENTER,target:"_blank",rel:"noopener noreferrer"}];function h(){let{themeStretch:t}=(0,m.K$)(),{palette:e}=(0,d.Z)(),n=(0,i.tZ)(s.Z,{sx:{padding:"10px",borderWidth:"1px 0",borderStyle:"solid",borderColor:e.divider},children:(0,i.tZ)(l.Z,{maxWidth:!t&&"lg",children:(0,i.tZ)(c.ZP,{container:!0,spacing:2,children:p.map(t=>(0,i.tZ)(c.ZP,{item:!0,xs:12,sm:6,textAlign:"center",alignItems:{xs:"center",md:"flex-start"},children:(0,i.tZ)(f.Z,{href:t.href,target:t.target,rel:t.rel,variant:"body2",color:"inherit",fontSize:17,children:t.name})},t.name))})})}),a=(0,i.tZ)(l.Z,{maxWidth:!t&&"lg",children:(0,i.tZ)(u.Z,{variant:"caption",component:"div",sx:{padding:"10px 0",textAlign:{xs:"center",md:"left"}},children:"\xa9 2023 Tales Rune. Tales Rune isn’t endorsed by Nexon Korea and doesn’t reflect the views or opinions of Nexon Korea or anyone officially involved in producing or managing Tales Weaver. Tales Weaver and Nexon Korea are trademarks or registered trademarks of Nexon Korea , Inc. Tales Weaver \xa9 Nexon Korea, Inc."})});return(0,i.BX)(s.Z,{component:"footer",children:[n,a]})}function Z(t){let{children:e}=t;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(r.Z,{}),(0,i.tZ)(a.Z,{children:e}),(0,i.tZ)(h,{})]})}},4931:function(t,e,n){"use strict";var i=n(7672),a=n.n(i);n(80672);var r=n(43030),o=n.n(r),s=n(19985),c=n.n(s),l=n(49301),u=n.n(l),d=n(49665),f=n.n(d),m=n(99572),p=n.n(m),h=n(8144),Z=n.n(h),g=n(25238),v=n.n(g),b=n(85235),x=n.n(b);a().extend(o()),a().extend(c()),a().extend(u()),a().extend(f()),a().extend(p()),a().extend(Z()),a().extend(v()),a().extend(x()),a().locale("ko"),a().updateLocale("ko",{relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"1시간",hh:"%d시간",d:"1일",dd:"%d일",M:"1달",MM:"%d달",y:"1년",yy:"%d년"}}),a().tz.setDefault("Asia/Seoul"),e.Z=a()},46495:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return td},default:function(){return tf}});var i=n(12691),a=n(51634),r=n(62458),o=n(4535),s=n(62984),c=n(75271),l=n(83105),u=n(28017),d=n(4931);function f(t,e){let n=(0,d.Z)(t).format(e||"YYYY-MM-DD HH:mm");return"Invalid Date"===n?"":n||""}function m(t){return t?(0,d.Z)(t).valueOf():0}function p(t){return(0,d.Z)().format(t||"YYYY-MM-DD HH:mm")}let h={currentTimeSetting:"current-time-setting"};function Z(t){let{title:e="현재 시간"}=t,a=(0,c.useRef)(),[r,o]=(0,c.useState)(p("hh")),[d,f]=(0,c.useState)(p("mm")),[m,Z]=(0,c.useState)(p("ss")),[g,v]=(0,c.useState)(p("A"));return(0,c.useEffect)(()=>{var t;return a.current=new Worker(n.tu(new URL(n.p+n.u(836),n.b))),a.current.onmessage=t=>{t.data===h.currentTimeSetting&&(o(p("hh")),f(p("mm")),Z(p("ss")),v(p("A")))},null===(t=a.current)||void 0===t||t.postMessage(h.currentTimeSetting),()=>{var t;null===(t=a.current)||void 0===t||t.terminate()}},[]),(0,i.BX)(l.Z,{sx:t=>({marginBottom:"30px",padding:"15px",border:"1px solid ".concat(t.palette.divider),borderRadius:"10px"}),children:[(0,i.tZ)(s.Z,{fontSize:25,textAlign:"center",children:e}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:2,children:[(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:15,sm:25,md:35},children:g}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:30,sm:40,md:50},children:r}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:25,sm:35,md:45},children:":"}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:30,sm:40,md:50},children:d}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:25,sm:35,md:45},children:":"}),(0,i.tZ)(s.Z,{component:"span",fontSize:{xs:30,sm:40,md:50},sx:t=>({color:Number(m)>=50?"#ff4444":t.palette.text.primary}),children:m})]})]})}var g=n(72767),v=n(53759);function b(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(s.Z,{component:"h2",fontSize:25,margin:"30px 0 10px",children:"공지사항"}),(0,i.tZ)(v.Z,{sx:{padding:"15px",borderRadius:"10px"},children:(0,i.BX)(u.Z,{spacing:1,children:[(0,i.BX)(l.Z,{children:[(0,i.tZ)(s.Z,{children:"2023년 12월 20일 부터 주요 던전과 필드 보스의 상세 정보를 확인할 수 있는 콘텐츠 정보 시스템이 업데이트 되었습니다."}),(0,i.tZ)(s.Z,{children:"(게임 내 오른쪽 사이드 메뉴 버튼 또는 단축키(Ctrl+T)로 UI 오픈)"})]}),(0,i.tZ)(s.Z,{fontWeight:600,children:"이제 드랍아이템은 인게임에서 정확하게 확인이 가능해졌습니다."})]})})]})}var x=n(79774),N=n(55589),k=n(75746);function S(t,e){return{getItem:()=>{let n=localStorage.getItem(t);return null===n?e:JSON.parse(n)},setItem:e=>{let n=JSON.stringify(e)||"";localStorage.setItem(t,n)},removeItem:()=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}}}var C=n(74399),w=n(25463),_=n(56006),y=n(62874),M=n(20341),B=n(29660),H=n(70029);let I=t=>({"& .MuiDialog-paper":{borderRadius:"10px",backgroundImage:"none"},top:-15,left:-20,right:-20,bottom:-15,...(0,H.Q6)(t)}),X={display:"flex",alignItems:"center",justifyContent:"space-between"};var R=n(96257),Y=n(72401),U=n(84690);function z(t){let{name:e,title:n,maxWidth:a="lg",children:r}=t,{popup1:o,popup2:l,popup3:u,popup4:d,popup5:f}=(0,Y.v9)(t=>{let{popup:e}=t;return e},U.wU),{popupClose:m}=(0,x.y)(),p=(0,c.useCallback)(t=>{let e=!1;switch(t){case 1:default:e=o;break;case 2:e=l;break;case 3:e=u;break;case 4:e=d;break;case 5:e=f}return e},[o,l,u,d,f]),h=(0,c.useCallback)(()=>{m(e)},[e,m]);return(0,i.BX)(_.Z,{fullWidth:!0,maxWidth:a,open:p(e),onClose:h,"aria-labelledby":"dialog-title",sx:I,children:[(0,i.BX)(y.Z,{id:"dialog-title",sx:X,children:[(0,i.tZ)(s.Z,{fontSize:"19px",fontWeight:600,children:n}),(0,i.tZ)(B.Z,{onClick:h,"aria-label":"dialog-close",disableRipple:!0,sx:t=>({color:t.palette.grey[500],pr:0}),children:(0,i.tZ)(R.Z,{src:"/assets/icons/ic_xmark.svg"})})]}),(0,i.tZ)(M.Z,{sx:{pb:"24px"},children:r})]})}function O(){let{getItem:t,setItem:e}=S("boss-notification-settings",{isGolonNotification:!0,isGolmodapNotification:!0,isAKanNotification:!0,isSperchendNotification:!0,isOriginOfRuinNotification:!0,isBuffNotification:!0,is10MinutesNotification:!0,is5MinutesNotification:!0,is3MinutesNotification:!0,is1MinutesNotification:!0}),{data:n=[]}=(0,C.mT)(),[{isGolonNotification:a,isGolmodapNotification:r,isAKanNotification:o,isSperchendNotification:l,isOriginOfRuinNotification:d,isBuffNotification:f,is10MinutesNotification:m,is5MinutesNotification:p,is3MinutesNotification:h,is1MinutesNotification:Z},g]=(0,c.useState)(t()),v=t=>"골론"===t?a:"골모답"===t?r:"아칸"===t?o:"스페르첸드"===t?l:"파멸의 기원"===t?d:void 0,b=(t,n)=>(i,a)=>{"m"===n&&(10===t?g(t=>{let n={...t,is10MinutesNotification:a};return e(n),n}):5===t?g(t=>{let n={...t,is5MinutesNotification:a};return e(n),n}):3===t?g(t=>{let n={...t,is3MinutesNotification:a};return e(n),n}):1===t&&g(t=>{let n={...t,is1MinutesNotification:a};return e(n),n})),"s"===n&&20===t&&g(t=>{let n={...t,isBuffNotification:a};return e(n),n})},x=t=>(n,i)=>{"골론"===t?g(t=>{let n={...t,isGolonNotification:i};return e(n),n}):"골모답"===t?g(t=>{let n={...t,isGolmodapNotification:i};return e(n),n}):"아칸"===t?g(t=>{let n={...t,isAKanNotification:i};return e(n),n}):"스페르첸드"===t?g(t=>{let n={...t,isSperchendNotification:i};return e(n),n}):"파멸의 기원"===t&&g(t=>{let n={...t,isOriginOfRuinNotification:i};return e(n),n})};return(0,i.BX)(z,{name:1,title:"알림 설정",maxWidth:"md",children:[(0,i.tZ)(s.Z,{fontSize:17,children:"보스 알림 설정"}),(0,i.tZ)(u.Z,{direction:"row",spacing:3,flexWrap:"wrap",children:n.map(t=>(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(w.Z,{checked:v(t.name),onChange:x(t.name)}),(0,i.tZ)(s.Z,{children:t.name})]},t.id))}),(0,i.tZ)(k.Z,{sx:{mt:1,mb:2}}),(0,i.tZ)(s.Z,{fontSize:17,children:"시간 알림 설정"}),(0,i.BX)(u.Z,{direction:"row",spacing:4,flexWrap:"wrap",children:[(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(w.Z,{checked:m,onChange:b(10,"m")}),(0,i.tZ)(s.Z,{children:"10분"})]}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(w.Z,{checked:p,onChange:b(5,"m")}),(0,i.tZ)(s.Z,{children:"5분"})]}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(w.Z,{checked:h,onChange:b(3,"m")}),(0,i.tZ)(s.Z,{children:"3분"})]}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(w.Z,{checked:Z,onChange:b(1,"m")}),(0,i.tZ)(s.Z,{children:"1분"})]}),(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(w.Z,{checked:f,onChange:b(20,"s")}),(0,i.tZ)(s.Z,{children:"20초전 버프 알림"})]})]})]})}function E(t,e,n){return(0,d.Z)(t).subtract(e,n)}n(7088);var P=n(77818),W=n(21743),T=n(44018),D=n(29597);function G(t){let{content:e,placement:n,...a}=t,r=(0,i.tZ)(s.Z,{variant:"caption",whiteSpace:"pre-line",sx:{display:"block",py:.6,px:.3},children:e&&e.trim()});return(0,i.tZ)(T.Z,{title:r,arrow:!0,placement:n||"top",...a,children:(0,i.tZ)(D.Z,{icon:"pajamas:question"})})}var L=n(36806);let A={pushNotification:"push-notification",pushNotificationDisable:"push-notification-disable",pushBuffNotification:"push-buff-notification"};function j(){let{getItem:t,setItem:e}=S("boss-notification-settings",{isGolonNotification:!0,isGolmodapNotification:!0,isAKanNotification:!0,isSperchendNotification:!0,isOriginOfRuinNotification:!0,isBuffNotification:!0,isPushNotification:!1,is10MinutesNotification:!0,is5MinutesNotification:!0,is3MinutesNotification:!0,is1MinutesNotification:!0}),a=(0,c.useRef)(),r=(0,c.useRef)(),[o,s]=(0,c.useState)(!1),d=(0,Y.v9)(t=>{let{notification:e}=t;return e.boss.nextBoss},U.wU),f=n=>{var i,r;h("푸시 알림이 활성화 되었습니다.","".concat(P.ENV_CONFIG.URL,"/assets/images/tw/error.png")),s(n),e({...t(),isPushNotification:n}),null===(i=a.current)||void 0===i||i.postMessage(A.pushNotification),null===(r=a.current)||void 0===r||r.postMessage(A.pushBuffNotification)},m=n=>{(0,L.yv)(n.trim(),{variant:"error"}),s(!1),e({...t(),isPushNotification:!1})},h=(t,e)=>{try{var n;null===(n=r.current)||void 0===n||n.showNotification("테일즈룬 보스 알리미",{body:t,icon:e})}catch(t){(0,L.yv)("정상적인 푸시 알림이 불가능한 상태입니다.",{variant:"error"})}},Z=()=>{let e=t(),n=p("HH:mm"),i=E(null==d?void 0:d.appearance_date,10,"minute").format("HH:mm"),a=E(null==d?void 0:d.appearance_date,5,"minute").format("HH:mm"),r=E(null==d?void 0:d.appearance_date,3,"minute").format("HH:mm"),o=E(null==d?void 0:d.appearance_date,1,"minute").format("HH:mm");if((null==d?void 0:d.id)===C.am[0].id){if(!1===e.isGolonNotification)return}else if((null==d?void 0:d.id)===C.am[1].id){if(!1===e.isGolmodapNotification)return}else if((null==d?void 0:d.id)===C.am[2].id){if(!1===e.isAKanNotification)return}else if((null==d?void 0:d.id)===C.am[3].id){if(!1===e.isSperchendNotification)return}else if((null==d?void 0:d.id)===C.am[4].id&&!1===e.isOriginOfRuinNotification)return;n===i?e.is10MinutesNotification&&h("필드 보스 ".concat(null==d?void 0:d.name," 출현 10분 전입니다."),"".concat(P.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==d?void 0:d.image)):n===a?e.is5MinutesNotification&&h("필드 보스 ".concat(null==d?void 0:d.name," 출현 5분 전입니다."),"".concat(P.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==d?void 0:d.image)):n===r?e.is3MinutesNotification&&h("필드 보스 ".concat(null==d?void 0:d.name," 출현 3분 전입니다."),"".concat(P.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==d?void 0:d.image)):n===o&&e.is1MinutesNotification&&h("필드 보스 ".concat(null==d?void 0:d.name," 출현 1분 전입니다."),"".concat(P.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==d?void 0:d.image))},g=()=>{let e=t();p("HH:mm:ss")===E(null==d?void 0:d.appearance_date,20,"second").format("HH:mm:ss")&&e.isBuffNotification&&h("".concat(20,"초 전입니다. 버프를 사용해 주세요."),"".concat(P.ENV_CONFIG.URL,"/assets/images/tw/error.png"))};return(0,c.useEffect)(()=>((async()=>{if("serviceWorker"in navigator){let t=await navigator.serviceWorker.register("/service-workers/notifications/boss/push-notification.worker.js");r.current=t}})(),()=>{r.current&&r.current.unregister()}),[]),(0,c.useEffect)(()=>(a.current=new Worker(n.tu(new URL(n.p+n.u(37),n.b)),{type:void 0}),a.current.onmessage=t=>{let e=t.data;e===A.pushNotification?Z():e===A.pushBuffNotification&&g()},()=>{a.current&&a.current.terminate()}),[d]),(0,i.tZ)(l.Z,{minWidth:{md:154},children:(0,i.BX)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,i.tZ)(W.Z,{control:(0,i.tZ)(w.Z,{checked:o,onChange:(n,i)=>{(async()=>{if(i)"Notification"in window?"granted"===Notification.permission?f(i):"denied"!==Notification.permission?"granted"===await Notification.requestPermission()?f(i):m("\n                            현재 알림 권한이 없습니다.\n                            사이트 설정에서 알림 권한을 허용해 주세요.\n    \n                            *시크릿 모드, Private 모드에서는 알림이 활성화되지 않습니다.\n                        "):m("\n                        현재 알림 권한이 없습니다.\n                        사이트 설정에서 알림 권한을 허용해 주세요.\n\n                        *시크릿 모드, Private 모드에서는 알림이 활성화되지 않습니다.\n                    "):m("현재 사용중인 브라우저는 알림을 지원하지 않습니다.");else{var n;s(!1),e({...t(),isPushNotification:!1}),null===(n=a.current)||void 0===n||n.postMessage(A.pushNotificationDisable)}})()}}),label:"푸시 알림 사용",sx:{mr:0}}),(0,i.tZ)(G,{content:"\n                        아래와 같은 알림을 받습니다.\n                        - 운영체제(윈도우, 맥 등) 알림 시스템 트레이 \n                        - 모바일(안드로이드, IOS 등) 푸시 알림\n\n                        아래와 같은 조건이 필요합니다.\n                        - 브라우저가 실행된 상태로있어야됩니다.\n                        - 알림 권한이 허용되어 있어야 합니다. (브라우저에서 사이트 설정 확인)\n                    "})]})})}let K=["/sounds/buff/audio_0.wav","/sounds/buff/audio_1.wav","/sounds/buff/audio_3.wav","/sounds/buff/audio_4.wav","/sounds/buff/audio_5.wav","/sounds/buff/audio_6.wav"];var V=n(86181);let F=(0,c.forwardRef)((t,e)=>{let{onChangeVolume:n}=t,[a,r]=(0,c.useState)(.5);return(0,i.BX)(u.Z,{direction:"row",spacing:2,width:"200px",alignItems:"center",children:[(0,i.BX)("audio",{ref:e,children:[(0,i.tZ)("track",{kind:"captions",label:"테일즈위버",default:!0}),"브라우저가 오디오를 지원하지 않습니다."]}),(0,i.tZ)(R.Z,{src:"/assets/icons/ic_volume_low.svg",sx:{width:40,heigth:40,marginLeft:"0 !important"}}),(0,i.tZ)(V.ZP,{value:a,step:.01,min:0,max:1,onChange:(t,e)=>{let i=parseFloat(String(e));r(i),n&&n(i)},"aria-label":"Volume",sx:{"& .MuiSlider-thumb":{width:15,height:15},"& .MuiSlider-thumb:hover":{boxShadow:"0px 0px 0px 6px rgba(32, 101, 209, 0.16) !important"}}}),(0,i.tZ)(R.Z,{src:"/assets/icons/ic_volume_high.svg",sx:{width:50,heigth:50}})]})}),$={voiceNotification:"voice-notification",voiceNotificationDisable:"voice-notification-disable",buffNotification:"buff-notification"};function q(){let{getItem:t}=S("boss-notification-settings",{isGolonNotification:!0,isGolmodapNotification:!0,isAKanNotification:!0,isSperchendNotification:!0,isOriginOfRuinNotification:!0,isBuffNotification:!0,isPushNotification:!1,is10MinutesNotification:!0,is5MinutesNotification:!0,is3MinutesNotification:!0,is1MinutesNotification:!0}),e=(0,c.useRef)(),a=(0,c.useRef)(null),[r,o]=(0,c.useState)(!1),s=(0,Y.v9)(t=>{let{notification:e}=t;return e.boss.nextBoss},U.wU),d=t=>{t&&a.current&&(a.current.src=t,a.current.play())},f=()=>{let e=t(),n=p("HH:mm"),i=E(null==s?void 0:s.appearance_date,10,"minute").format("HH:mm"),a=E(null==s?void 0:s.appearance_date,5,"minute").format("HH:mm"),r=E(null==s?void 0:s.appearance_date,3,"minute").format("HH:mm"),o=E(null==s?void 0:s.appearance_date,1,"minute").format("HH:mm");if((null==s?void 0:s.id)===C.am[0].id){if(!1===e.isGolonNotification)return}else if((null==s?void 0:s.id)===C.am[1].id){if(!1===e.isGolmodapNotification)return}else if((null==s?void 0:s.id)===C.am[2].id){if(!1===e.isAKanNotification)return}else if((null==s?void 0:s.id)===C.am[3].id){if(!1===e.isSperchendNotification)return}else if((null==s?void 0:s.id)===C.am[4].id&&!1===e.isOriginOfRuinNotification)return;n===i?e.is10MinutesNotification&&d(null==s?void 0:s.sound_path.minutes10_ago):n===a?e.is5MinutesNotification&&d(null==s?void 0:s.sound_path.minutes5_ago):n===r?e.is3MinutesNotification&&d(null==s?void 0:s.sound_path.minutes3_ago):n===o&&e.is1MinutesNotification&&d(null==s?void 0:s.sound_path.minutes1_ago)},m=()=>{let e=t();p("HH:mm:ss")===E(null==s?void 0:s.appearance_date,20,"second").format("HH:mm:ss")&&e.isBuffNotification&&d(K[Math.floor(Math.random()*K.length)])};return(0,c.useEffect)(()=>(e.current=new Worker(n.tu(new URL(n.p+n.u(828),n.b)),{type:void 0}),e.current.onmessage=t=>{let e=t.data;e===$.voiceNotification?f():e===$.buffNotification&&m()},()=>{var t;null===(t=e.current)||void 0===t||t.terminate()}),[s]),(0,i.BX)(u.Z,{direction:{xs:"column",md:"row"},spacing:4,alignItems:"center",width:"100%",children:[(0,i.BX)(u.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,i.tZ)(W.Z,{control:(0,i.tZ)(w.Z,{checked:r,onChange:(t,n)=>{var i,a,r;n?((0,L.yv)("음성 알림을 시작합니다.\n[ 음성알림 시간 ]\n- 필드보스 출현: 1, 3, 5, 10분 전\n- 필드보스 출현 전 버프 사용: 20초 전 \n\n* 이 콘텐츠는 인공지능 가상 연기자 서비스\n  타입캐스트를 활용하여 제작되었습니다.\n  출연진 : 류은\n  https://typecast.ai/kr",{variant:"info"}),d("/sounds/audio_음성알림시작.mp3"),null===(i=e.current)||void 0===i||i.postMessage($.voiceNotification),null===(a=e.current)||void 0===a||a.postMessage($.buffNotification)):((0,L.yv)("음성 알림을 중지합니다.",{variant:"success"}),null===(r=e.current)||void 0===r||r.postMessage($.voiceNotificationDisable)),o(n)}}),label:"음성 알림 사용",sx:{mr:0}}),(0,i.tZ)(G,{content:"\n                        아래와 같은 알림을 받습니다.\n                        - 음성 알림\n\n                        아래와 같은 조건이 필요합니다.\n                        - 브라우저가 실행된 상태로있어야됩니다.\n                    "})]}),(0,i.tZ)(l.Z,{sx:{ml:{md:"auto !important"}},children:(0,i.BX)(u.Z,{spacing:1.2,alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(N.Z,{variant:"contained",color:"primary",onClick:()=>{d("/sounds/음성알림 테스트.mp3")},sx:{minWidth:167},children:"소리조절용 음성듣기"}),(0,i.tZ)(F,{ref:a,onChangeVolume:t=>{a.current&&(a.current.volume=t)}})]})})]})}var J=n(46244);let Q="remaining-time-setting";function tt(){let[t,e]=(0,c.useState)("00:00:00"),a=(0,Y.v9)(t=>{let{notification:e}=t;return e.boss.nextBoss},U.wU),r=(0,c.useCallback)(()=>{var t;let n=23===(0,d.Z)().hour()?(t=null==a?void 0:a.appearance_date,(0,d.Z)(t).add(1,"day")).format("YYYY-MM-DD HH:mm"):"".concat(p("YYYY-MM-DD")," ").concat(f(null==a?void 0:a.appearance_date,"HH:mm")),i=E(p("YYYY-MM-DD HH:mm:ss"),-1,"second"),r=(0,d.Z)(n).diff(i,void 0),o=String(Math.floor(r/36e5)).padStart(2,"0"),s=String(Math.floor(r%36e5/6e4)).padStart(2,"0"),c=String(Math.floor(r%6e4/1e3)).padStart(2,"0");e("".concat(o,":").concat(s,":").concat(c))},[a]);return(0,c.useEffect)(()=>{let t=new Worker(n.tu(new URL(n.p+n.u(764),n.b)),{type:void 0});return t.onmessage=t=>{t.data===Q&&r()},t.postMessage(Q),()=>{t.terminate()}},[a]),(0,i.BX)(J.ZP,{item:!0,xs:12,md:6,lg:3,sx:{mt:{xs:2,lg:0},textAlign:"center"},children:[(0,i.tZ)(s.Z,{fontSize:20,children:"남은 시간"}),(0,i.tZ)(s.Z,{fontSize:50,lineHeight:1.2,children:t})]})}var te=n(28270),tn=n(13864);let ti="next-boss-setting";function ta(){let{data:t=[]}=(0,C.mT)(),e=(0,Y.v9)(t=>{let{notification:e}=t;return e.boss.nextBoss},U.wU),a=(0,Y.v9)(t=>{let{notification:e}=t;return e.boss.bossTimeTable},U.wU),{setNextBoss:r,setBossTimeTable:o}=(0,x.j2)(),l=()=>{let e=[];return t.map(t=>{t.appearance_times.map(n=>{e.push({...t,appearance_date:"".concat(p("YYYY-MM-DD")," ").concat(n.time)})})}),e.sort((t,e)=>m(t.appearance_date)-m(e.appearance_date)),o(e),e},h=(0,c.useCallback)(t=>{let e=t||a,{length:n}=e;for(let t=0;t<n;t++){var i,o;let n=e[t];if(i=p("YYYY-MM-DD HH:mm"),o=n.appearance_date,!(0,d.Z)(i).isSameOrAfter(o)){r(n);break}}},[a,e]);return(0,c.useEffect)(()=>{h(l())},[]),(0,c.useEffect)(()=>{let t=new Worker(n.tu(new URL(n.p+n.u(543),n.b)),{type:void 0});return t.onmessage=t=>{t.data===ti&&h()},t.postMessage(ti),()=>{t.terminate()}},[a,e]),(0,i.BX)(i.HY,{children:[(0,i.tZ)(J.ZP,{item:!0,xs:12,md:6,lg:2,sx:{"& img":{margin:{xs:"0 auto 13px",md:"0 auto",lg:"0 auto 0 0"}}},children:(null==e?void 0:e.image)&&(0,i.tZ)(tn.Z,{src:"".concat(P.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(null==e?void 0:e.image),alt:"보스",width:250,height:160,style:{display:"block",width:"auto"}})}),(0,i.BX)(J.ZP,{item:!0,xs:12,md:6,lg:4,sx:{textAlign:{xs:"center",lg:"left"}},children:[(0,i.tZ)(s.Z,{fontSize:30,children:null==e?void 0:e.name}),(0,i.tZ)(s.Z,{fontSize:20,children:null==e?void 0:e.location}),(null==e?void 0:e.drop_link)&&(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:{xs:"center",lg:"left"},children:[(0,i.tZ)(R.Z,{src:"/assets/icons/navbar/ic_external.svg",color:"#388be3"}),(0,i.tZ)(te.Z,{href:null==e?void 0:e.drop_link,target:"_blank",rel:"noopener noreferrer",sx:{color:"#388be3",fontSize:20},children:"드랍아이템"})]})]}),(0,i.BX)(J.ZP,{item:!0,xs:12,md:6,lg:3,sx:{mt:{xs:3,lg:0},textAlign:"center"},children:[(0,i.tZ)(s.Z,{fontSize:20,children:"출현 시간"}),(0,i.tZ)(s.Z,{fontSize:50,lineHeight:1.2,children:f(null==e?void 0:e.appearance_date,"HH:mm")})]})]})}function tr(){return(0,i.BX)(J.ZP,{container:!0,alignItems:"center",justifyItems:"center",marginBottom:1,children:[(0,i.tZ)(ta,{}),(0,i.tZ)(tt,{})]})}function to(){let{popupOpen:t}=(0,x.y)();return(0,i.BX)(i.HY,{children:[(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",margin:"30px 0 10px",spacing:1,children:[(0,i.tZ)(s.Z,{component:"h2",fontSize:25,children:"다음 필드보스"}),(0,i.tZ)(N.Z,{variant:"contained",onClick:()=>{t(1)},children:"알림 설정"})]}),(0,i.BX)(v.Z,{sx:{padding:"15px",borderRadius:"10px"},children:[(0,i.tZ)(tr,{}),(0,i.tZ)(k.Z,{}),(0,i.BX)(u.Z,{direction:{xs:"column",md:"row"},spacing:{xs:0,md:2},alignItems:"center",margin:"20px 0 0",children:[(0,i.tZ)(j,{}),(0,i.tZ)(q,{})]})]}),(0,i.tZ)(O,{})]})}function ts(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(s.Z,{component:"h2",fontSize:25,margin:"30px 0 10px",children:"알림없는 보스"}),(0,i.BX)(v.Z,{sx:{padding:"15px",borderRadius:"10px"},children:[(0,i.tZ)(s.Z,{fontSize:18,children:"장소: 프라바 전초기지"}),(0,i.tZ)(s.Z,{fontSize:18,children:"프라바 방어전: 매시간 짝수"}),(0,i.tZ)(s.Z,{fontSize:18,children:"프라바 필드보스: 매시간 홀수"})]})]})}function tc(){let{data:t=[]}=(0,C.mT)();return(0,i.BX)(i.HY,{children:[(0,i.tZ)(s.Z,{component:"h2",fontSize:25,margin:"30px 0 10px",children:"필드보스 시간표"}),(0,i.tZ)(J.ZP,{container:!0,spacing:2,children:null==t?void 0:t.map(t=>(0,i.tZ)(J.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,i.BX)(v.Z,{sx:{padding:"15px",borderRadius:"10px",textAlign:"center"},children:[t.image&&(0,i.tZ)(tn.Z,{src:"".concat(P.ENV_CONFIG.URL,"/assets/images/tw/boss/").concat(t.image),alt:t.name,width:250,height:180,style:{width:"auto",margin:"0 auto"}}),(0,i.tZ)(s.Z,{fontSize:30,marginTop:2,children:t.name}),(0,i.tZ)(s.Z,{fontSize:20,children:t.location}),t.drop_link&&(0,i.BX)(u.Z,{direction:"row",alignItems:"center",justifyContent:"center",children:[(0,i.tZ)(R.Z,{src:"/assets/icons/navbar/ic_external.svg",color:"#388be3"}),(0,i.tZ)(te.Z,{href:t.drop_link,target:"_blank",rel:"noopener noreferrer",sx:{color:"#388be3",fontSize:20},children:"드랍아이템"})]}),(0,i.tZ)(u.Z,{marginTop:2,height:180,children:t.appearance_times.map((t,e)=>(0,i.tZ)(s.Z,{fontSize:20,children:t.time},"".concat(e).concat(t.time)))})]})},t.id))})]})}function tl(){let{themeStretch:t}=(0,r.K$)();return(0,i.BX)(o.Z,{component:"section",maxWidth:!t&&"xl",children:[(0,i.tZ)(g._f,{style:{display:"block",width:"100%",marginBottom:30},client:"ca-pub-4630727689655943",slot:"4321772552",format:"horizontal",responsive:"true"}),(0,i.tZ)(s.Z,{component:"h1",fontSize:25,paragraph:!0,children:"보스 알리미"}),(0,i.tZ)(Z,{title:"테일즈위버 시간"}),(0,i.tZ)(to,{}),(0,i.tZ)(ts,{}),(0,i.tZ)(b,{}),(0,i.tZ)(tc,{})]})}var tu=n(40011);tf.getLayout=(t,e)=>(0,i.tZ)(a.Z,{...e,children:t});var td=!0;function tf(){return(0,i.BX)(i.HY,{children:[(0,i.tZ)(tu.Z,{title:"보스 알리미 - 테일즈룬",description:"테일즈위버 보스 알림 입니다."}),(0,i.tZ)(tl,{})]})}},79774:function(t,e,n){"use strict";n.d(e,{Cn:function(){return c},j2:function(){return u},y:function(){return o},sU:function(){return f}});var i=n(75271),a=n(72401),r=n(95321);let o=()=>{let t=(0,a.I0)();return{init:(0,i.useCallback)(()=>t((0,r.S1)()),[t]),popupOpen:(0,i.useCallback)(e=>t((0,r.$b)(e)),[t]),popupClose:(0,i.useCallback)(e=>t((0,r.u_)(e)),[t])}};var s=n(13914);let c=()=>{let t=(0,a.I0)();return{currentEncrypt:(0,a.v9)(t=>{let{encrypt:e}=t;return e.currentEncrypt}),currentPercentage:(0,a.v9)(t=>{let{encrypt:e}=t;return e.currentPercentage}),setCurrentEncrypt:(0,i.useCallback)(e=>t((0,s.WS)(e)),[t]),setCurrentPercentage:(0,i.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t((0,s.$i)(e))},[t])}};var l=n(14460);let u=()=>{let t=(0,a.I0)();return{init:(0,i.useCallback)(()=>t((0,l.S1)()),[t]),setNextBoss:(0,i.useCallback)(e=>t((0,l.tA)(e)),[t]),setBossTimeTable:(0,i.useCallback)(e=>t((0,l.hx)(e)),[t])}};var d=n(60553);let f=()=>{let t=(0,a.I0)();return{printLogs:(0,a.v9)(t=>{let{redistribution:e}=t;return e.printLogs}),type:(0,a.v9)(t=>{let{redistribution:e}=t;return e.type}),types:(0,a.v9)(t=>{let{redistribution:e}=t;return e.types}),status:(0,a.v9)(t=>{let{redistribution:e}=t;return e.status}),xien:(0,a.v9)(t=>{let{redistribution:e}=t;return e.xien}),xiens:(0,a.v9)(t=>{let{redistribution:e}=t;return e.xiens}),percentage:(0,a.v9)(t=>{let{redistribution:e}=t;return e.percentage}),character:(0,a.v9)(t=>{let{redistribution:e}=t;return e.character}),setType:(0,i.useCallback)(e=>t((0,d.Cw)(e)),[t]),setTypes:(0,i.useCallback)(e=>t((0,d.WX)(e)),[t]),setXien:(0,i.useCallback)(e=>t((0,d.O4)(e)),[t]),setXiens:(0,i.useCallback)(e=>t((0,d.qW)(e)),[t]),setStatus:(0,i.useCallback)(e=>t((0,d.Tf)(e)),[t]),setPercentage:(0,i.useCallback)(e=>t((0,d._Y)(e)),[t]),setCharacter:(0,i.useCallback)(e=>t((0,d.hh)(e)),[t]),setStatusLogs:(0,i.useCallback)(e=>t((0,d.S4)(e)),[t]),setRedistributionLogs:(0,i.useCallback)(e=>t((0,d.gg)(e)),[t]),setPrintLogs:(0,i.useCallback)(e=>t((0,d.PQ)(e)),[t]),levelUp:(0,i.useCallback)(()=>t((0,d.Hm)()),[t]),prevLogSetting:(0,i.useCallback)(()=>t((0,d.$o)()),[t]),stabUp:(0,i.useCallback)(()=>t((0,d.d7)()),[t]),hackUp:(0,i.useCallback)(()=>t((0,d.VZ)()),[t]),intUp:(0,i.useCallback)(()=>t((0,d._3)()),[t]),defUp:(0,i.useCallback)(()=>t((0,d.gS)()),[t]),mrUp:(0,i.useCallback)(()=>t((0,d.v3)()),[t]),agiUp:(0,i.useCallback)(()=>t((0,d.h6)()),[t]),dexUp:(0,i.useCallback)(()=>t((0,d.Sy)()),[t]),autoStabUp:(0,i.useCallback)(()=>t((0,d.ud)()),[t]),autoHackUp:(0,i.useCallback)(()=>t((0,d.fZ)()),[t]),autoIntUp:(0,i.useCallback)(()=>t((0,d.Gf)()),[t]),autoDefUp:(0,i.useCallback)(()=>t((0,d.ZP)()),[t]),autoMrUp:(0,i.useCallback)(()=>t((0,d.SY)()),[t]),autoAgiUp:(0,i.useCallback)(()=>t((0,d.S5)()),[t]),autoDexUp:(0,i.useCallback)(()=>t((0,d.Ch)()),[t])}}}},function(t){t.O(0,[889,244,858,772,888,774,179],function(){return t(t.s=32116)}),_N_E=t.O()}]);