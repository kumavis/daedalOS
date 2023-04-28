"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9128],{31404:function(e,t,r){var o=r(85893),i=r(55785),n=r(56758),s=r(5152),a=r.n(s),l=r(67294);const c=a()((()=>r.e(6753).then(r.bind(r,26753))),{loadableGenerated:{webpack:()=>[26753]}});t.Z=e=>{let{id:t,useHook:r,StyledComponent:s,children:a}=e;const{processes:{[t]:{url:d=""}={}}}=(0,n.z)(),u=(0,l.useRef)(null),[p,h]=(0,l.useState)(!0),g=(0,l.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return r(t,d,u,h,p),(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)(c,{}),(0,o.jsx)(s,{ref:u,style:g,...(0,i.Z)({id:t}),children:a})]})}},29128:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var o=r(85893),i=r(31404),n=r(14141).ZP.div.withConfig({componentId:"sc-1c64d0b0-0"})`
  display: flex;
  height: 100%;
  width: 100%;

  .video-js {
    height: 100%;
    width: 100%;

    .vjs-big-play-button {
      display: none;
    }

    .vjs-control-bar {
      background-color: rgb(240, 240, 240);
      padding: 0 1;

      :not(.no-interaction) {
        display: flex !important;
        opacity: 100% !important;
      }

      .no-interaction {
        display: none !important;
        opacity: 0% !important;
        pointer-events: none !important;
      }
    }

    &.vjs-youtube,
    &.vjs-fullscreen.vjs-user-inactive {
      .vjs-control-bar {
        opacity: 0% !important;
      }
    }

    .vjs-button {
      color: rgb(116, 116, 116);
      height: 28px;
      position: relative;
      width: 28px;
      z-index: 0;

      &::after {
        background-color: rgb(225, 225, 225);
        border: 1px solid rgb(173, 173, 173);
        content: "";
        height: calc(100% - 4px);
        left: 0;
        margin: 2px 0 0 2px;
        position: absolute;
        top: 1px;
        width: calc(100% - 4px);
        z-index: -1;
      }

      &:hover {
        &::after {
          background-color: rgb(229, 241, 251);
          border-color: rgb(0, 120, 215);
        }
      }

      &:active {
        &::after {
          background-color: rgb(204, 228, 247);
          border-color: rgb(0, 84, 153);
        }
      }
    }

    .vjs-current-time,
    .vjs-duration {
      display: block;
    }

    .vjs-current-time {
      padding-left: 8px;
      padding-right: 2px;
    }

    .vjs-duration {
      padding-left: 2px;
      padding-right: 8px;
    }

    .vjs-current-time-display,
    .vjs-duration-display {
      color: #000;
      font-family: Sans-Serif;
      font-size: 11px;
    }

    .vjs-picture-in-picture-control {
      margin: 0 -2px;
    }

    .vjs-load-progress {
      border-radius: 5px;

      div {
        background: linear-gradient(
          180deg,
          rgb(189, 189, 189) 0%,
          rgb(219, 219, 219) 100%
        );
        border-radius: 5px;
      }
    }

    .vjs-play-progress {
      background: linear-gradient(
        180deg,
        rgb(44, 137, 224) 0%,
        rgb(40, 125, 204) 100%
      );
      border-radius: 5px;

      &::before {
        color: rgb(237, 237, 237);
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
        top: -3px;
      }
    }

    .vjs-progress-holder {
      border-radius: 5px;
      font-size: 1.7em !important;
      height: 9px;
    }

    .vjs-volume-control {
      background-color: rgb(240, 240, 240);
      border-radius: 5px 5px 0 0;
      left: -28px !important;
      position: relative;

      .vjs-volume-bar {
        height: 5.5em;
        margin: 1.5em auto;
      }

      .vjs-volume-level {
        background: linear-gradient(
          180deg,
          rgb(247, 76, 100) 0%,
          rgb(125, 210, 125) 50%
        );
        border-radius: 5px;
        color: rgb(237, 237, 237);
        font-size: 1.5em;
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
      }
    }

    .vjs-volume-panel {
      width: 28px !important;
    }

    .vjs-fullscreen-control,
    .vjs-play-control {
      .vjs-icon-placeholder {
        &::before {
          font-size: 2.4em;
          top: -5px;
        }
      }
    }

    .vjs-poster {
      background-size: contain;
    }

    video {
      background-image: url("/System/Icons/48x48/vlc.webp");
      background-position: center calc(50% - 15px);
      background-repeat: no-repeat;
      padding-bottom: 30px;
    }
  }
`;const s="video/youtube",a={1:4,2:2,3:1,4:.5},l={autoplay:!0,controlBar:{children:["playToggle","currentTimeDisplay","progressControl","durationDisplay","volumePanel","pictureInPictureToggle","fullscreenToggle"],volumePanel:{inline:!1}},inactivityTimeout:1e3,preload:"auto",youtube:{enablePrivacyEnhancedMode:!0,ytControls:2}};var c=r(87426),d=r(7459),u=r(23615),p=r(26724),h=r(56758),g=r(1864),b=r(67294),m=r(64358),x=r(34254),v=(e,t,r,o,i)=>{const{readFile:n}=(0,p.o)(),{linkElement:v,processes:{[e]:{closing:f=!1,libs:y=[]}={}}}=(0,h.z)(),{updateWindowSize:w}=(0,u.Z)(e),[k,j]=(0,b.useState)(),{prependFileToTitle:T}=(0,d.Z)(e),z=(0,b.useCallback)((()=>{const{src:e=[]}=k?.getMedia()||{};if(Array.isArray(e)&&e.length>0){const[{src:r,url:o}]=e;r.startsWith("blob:")&&(o!==t||f)&&(0,x.EK)(r)}}),[f,k,t]),C=(0,b.useCallback)((async()=>{z();const e=(0,x.yk)(t),r=e?s:(0,c.bh)(t)||m.iS;return{src:e?t:(0,x.YS)(await n(t),(0,x.G6)()?r:void 0),type:r,url:t}}),[z,n,t]),L=(0,b.useCallback)((()=>{const[i]=r.current?.childNodes??[],n=window.videojs(i,l,(()=>{n.on("firstplay",(()=>{const[e,t]=[n.videoHeight(),n.videoWidth()],[r,o]=[(0,x.sI)(),(0,x.E9)()];if(e&&t){const i=30+e;i>r||t>o?w(o*(i/t),o):w(i,t)}}));const s=()=>{try{n.isFullscreen()?n.exitFullscreen():n.requestFullscreen()}catch{}};i.addEventListener("dblclick",s),i.addEventListener("mousewheel",(e=>{n.volume(n.volume()+(e.deltaY>0?-.1:.1))})),r.current?.closest("section")?.addEventListener("keydown",(e=>{let{key:t,altKey:r,ctrlKey:o}=e;if(r)a[t]?w(n.videoHeight()/a[t],n.videoWidth()/a[t]):"Enter"===t&&s();else if(!o)switch(t){case" ":n.paused()?n.play():n.pause();break;case"ArrowUp":n.volume(n.volume()+.1);break;case"ArrowDown":n.volume(n.volume()-.1);break;case"ArrowLeft":n.currentTime(n.currentTime()-10);break;case"ArrowRight":n.currentTime(n.currentTime()+10)}})),j(n),o(!1),(0,x.yk)(t)||v(e,"peekElement",i)}))}),[r,e,v,o,w,t]),E=(0,b.useCallback)((e=>{const t=r.current?.querySelector(".vjs-control-bar");t instanceof HTMLElement&&(e===s?t.classList.add("no-interaction"):t.classList.remove("no-interaction"))}),[r]),$=(0,b.useCallback)((async()=>{if(k&&t)try{const e=await C();k.src(e),E(e.type),T((0,x.yk)(t)?"YouTube":(0,g.basename)(t))}catch{}}),[C,E,k,T,t]);(0,b.useEffect)((()=>(i&&!k&&(0,x.mb)(y).then((()=>{void 0!==window.videojs&&L()})),()=>{f&&(z(),k?.dispose())})),[z,f,y,L,i,k]),(0,b.useEffect)((()=>{!i&&!f&&k&&t&&$()}),[f,$,i,k,t])},f=e=>{let{id:t}=e;return(0,o.jsx)(i.Z,{StyledComponent:n,id:t,useHook:v,children:(0,o.jsx)("video",{className:"video-js vjs-big-play-centered",autoPlay:!0})})}},55785:function(e,t,r){var o=r(62727),i=r(6529),n=r(42151),s=r(26724),a=r(56758),l=r(62065),c=r(1864),d=r(67294),u=r(64358),p=r(34254);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:h,onDragLeave:g,onDragOver:b,updatePositions:m}=e;const{url:x}=(0,a.z)(),{iconPositions:v,sortOrders:f,setIconPositions:y}=(0,l.k)(),{mkdirRecursive:w,updateFolder:k,writeFile:j}=(0,s.o)(),T=(0,d.useCallback)((async(e,t,r)=>{if(h)if(t){const o=(0,c.join)(u.Ll,e);await w(u.Ll),await j(o,t,!0)&&(r===n.v.UPDATE_URL&&x(h,o),k(u.Ll,e))}else r===n.v.UPDATE_URL&&x(h,e)}),[h,w,k,x,j]),{openTransferDialog:z}=(0,o.Z)();return{onDragLeave:g,onDragOver:e=>{b?.(e),(0,p.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,i.p4)(e);if(0===t.length&&""===o)return;const n={x:e.clientX,y:e.clientY};let s=[];if(o){try{s=JSON.parse(o)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(r)&&(0,c.basename)(e)===(0,c.relative)(r,e))return;s=s.map((e=>(0,c.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!v[`${r}/${e}`])return e;let t=0,o="";do{t+=1,o=`${r}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(v[o]);return(0,c.basename)(o)})),(0,p.vi)(r,e.target,v,f,n,s,y)}(0,i.WG)(e,t||T,r,z,Boolean(h))}}}},99895:function(e,t,r){r.d(t,{BS:function(){return s},FC:function(){return i},F_:function(){return o},wV:function(){return n}});const o={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},i={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},n=30,s=166,a={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${n}px`,minWidth:`${s}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=a},4914:function(e,t,r){r.d(t,{Rf:function(){return a},b$:function(){return d},hu:function(){return s},ix:function(){return c},mZ:function(){return l}});var o=r(99895),i=r(64358),n=r(34254);const s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const[s]=e.split(i.CC),a=`${s}${i.CC}`,l=r.find((e=>e.startsWith(a)))||"",{componentWindow:c}=t?.[l]||{},{x:d=0,y:u=0,width:p=0,height:h=0}=c?.getBoundingClientRect()||{};return d+o+p>(0,n.E9)()||u+o+h>(0,n.sI)()||!d&&!u?void 0:{x:d+o,y:u+o}},a=e=>{let{height:t,width:r}=e;const[o,s]=[(0,n.sI)(),(0,n.E9)()];return{x:Math.floor(s/2-(0,n.Vy)(r)/2),y:Math.floor((o-i.bK)/2-(0,n.Vy)(t)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{position:o,size:i}=e||{},{x:s=0,y:a=0}=o||{},{height:c=0,width:d=0}=i||{};return r?s+l.RIGHT>t.x||s+(0,n.Vy)(d)-l.LEFT<0||a+l.BOTTOM>t.y||a+l.TOP<0:s<0||a<0||s+(0,n.Vy)(d)>t.x||a+(0,n.Vy)(c)>t.y},d=(e,t)=>{const r=Number(e.height),s=Number(e.width),[a,l]=[(0,n.sI)(),(0,n.E9)()],c=a-i.bK,d=Math.max(o.wV,Math.min(r,c)),u=Math.max(o.BS,Math.min(s,l));if(!t)return{height:d,width:u};const p=r===d,h=s===u;return p||h?p?h?{height:d,width:u}:{height:Math.round(d/(s/u)),width:u}:{height:d,width:Math.round(u/(r/d))}:r>s?{height:d,width:Math.round(u/(c/d))}:{height:Math.round(d/(l/u)),width:u}}},7459:function(e,t,r){var o=r(56758),i=r(25804),n=r(67294),s=r(64358);t.Z=e=>{const{title:t}=(0,o.z)(),[r]=e.split(s.CC),{title:a}=i.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)(((r,o)=>{const i=r?` - ${r}${o?` ${s.xy}`:""}`:"";t(e,`${a}${i}`)}),[e,a,t]),prependFileToTitle:(0,n.useCallback)(((r,o)=>{const i=r?`${o?`${s.xy} `:""}${r} - `:"";t(e,`${i}${a}`)}),[e,a,t])}}},23615:function(e,t,r){var o=r(4914),i=r(56758),n=r(62065),s=r(67294),a=r(14141);t.Z=e=>{const{setWindowStates:t}=(0,n.k)(),{processes:{[e]:{lockAspectRatio:r=!1,maximized:l=!1}={}}={}}=(0,i.z)(),{sizes:{titleBar:c}}=(0,a.Fg)();return{updateWindowSize:(0,s.useCallback)(((i,n)=>t((t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,o.b$)({height:i+c.height,width:n},r)}})))),[e,r,l,t,c.height])}}}}]);