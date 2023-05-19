"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2562],{16190:function(A,e,i){i.r(e),i.d(e,{default:function(){return h}});var n=i(85893),t=(i(82310),i(26753)),a=i(62392),o=i(1347),s=i(14141).ZP.div.withConfig({componentId:"sc-a2b07cfc-0"})`
  ${o.Z} {
    column-gap: 2px;
    height: ${A=>{let{theme:e,showNavigation:i,showStatusBar:n}=A;return`calc(100% - ${i?(A=>A.sizes.fileExplorer.navBarHeight)(e):0} - ${n?(A=>A.sizes.fileExplorer.statusBarHeight)(e):0})`}};
    padding-left: 5px;
    padding-right: 5px;
    backdrop-filter: ${A=>{let{theme:e}=A;return e.colors.fileExplorer?.backdropFilter||"none"}};
  }

  ${t.default} {
    height: ${A=>{let{theme:e}=A;return`calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`}};
  }

  ${a.Z} {
    &:hover {
      &::before {
        border-width: 0;
      }
    }

    &::before {
      border-width: 0;
    }
  }
`,r=i(87426),l=i(30433),c=i(26724),g=i(56758),u=i(1864),m=i(67294),E=i(64358),d=i(34254),h=A=>{let{id:e}=A;const{icon:i,title:t,processes:{[e]:a},url:o}=(0,g.z)(),{componentWindow:h,closing:p,icon:C="",url:f=""}=a||{},{fs:B,rootFs:R}=(0,c.o)(),[b,M]=(0,m.useState)(f),w=(0,m.useRef)(null),Q=(0,u.basename)(f),k=Boolean(R?.mntMap[f]&&Q),z=(0,m.useCallback)((A=>{A.altKey&&"D"===A.key.toUpperCase()&&((0,d.nK)(A),w?.current?.focus(E.eS))}),[]);return(0,m.useEffect)((()=>{f&&(t(e,Q||E.SP),(!C||f!==b||k&&C!==E.iR)&&(k?i(e,"FileSystemAccess"===R?.mntMap[f].getName()?E.iR:E.Wc):B&&(i(e,`/System/Icons/${Q?"folder":"pc"}.webp`),(0,r.nR)(B,f).then((A=>{A&&i(e,A)}))),M(f)))}),[b,Q,B,C,e,k,R?.mntMap,i,o,t,f]),(0,m.useEffect)((()=>{!h||p||f||(o(e,"/"),i(e,"/System/Icons/pc.webp"))}),[p,e,h,i,o,f]),(0,m.useEffect)((()=>(h?.addEventListener("keydown",z),()=>h?.removeEventListener("keydown",z))),[h,z]),f?(0,n.jsxs)(s,{showNavigation:!1,showStatusBar:!1,children:[!1,(0,n.jsx)(l.Z,{id:e,showStatusBar:!1,url:f,view:"icon"})]}):null}},13645:function(A,e,i){i.d(e,{Z:function(){return l}});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC";var t=i(25420),a=i(25449),o=i(56758),s=i(67294),r=i(64358),l=A=>{const{contextMenu:e}=(0,a.H)(),{onClose:i,onMaximize:l,onMinimize:c}=(0,t.Z)(A),{processes:{[A]:g}}=(0,o.z)(),{allowResizing:u=!0,maximized:m,minimized:E}=g||{};return(0,s.useMemo)((()=>e?.((()=>{const A=m||E;return[{action:E?c:l,disabled:!A,icon:A?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},{action:c,disabled:E,icon:E?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},u&&{action:l,disabled:A,icon:A?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},r.Os,{action:i,icon:n,label:"Close"}].filter(Boolean)}))),[u,e,m,E,i,l,c])}},25420:function(A,e,i){var n=i(52625),t=i(56758),a=i(62065),o=i(67294);e.Z=A=>{const e=(0,n.Z)(A),{setForegroundId:i,removeFromStack:s}=(0,a.k)(),{closeWithTransition:r,maximize:l,minimize:c}=(0,t.z)();return{onClose:(0,o.useCallback)((()=>{s(A),r(A),i(e)}),[r,A,e,s,i]),onMaximize:()=>l(A),onMinimize:()=>{c(A),i(e)}}}},52625:function(A,e,i){var n=i(56758),t=i(62065);e.Z=A=>{const{stackOrder:e=[]}=(0,t.k)(),{processes:i}=(0,n.z)();return e.find((e=>e!==A&&!i?.[e]?.minimized))||""}}}]);