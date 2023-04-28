"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7890],{57637:function(e,A,r){var t=r(21157);const i=(0,r(14141).ZP)(t.m.li).withConfig({componentId:"sc-93955fe5-0"})`
  display: flex;
  min-width: 0;
  overflow: hidden;
  place-content: center;
  position: relative;
  width: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.maxWidth}};

  &::before {
    background-color: ${e=>{let{$foreground:A,$progress:r,theme:t}=e;return A?r&&r>0&&r<100?t.colors.taskbar.foregroundProgress:t.colors.taskbar.foreground:""}};
    background-image: ${e=>{let{$progress:A,theme:r}=e;return A&&A>0&&A<100?`linear-gradient(to right, ${r.colors.progressBackground} 0% ${A}%, transparent ${A}% 100%)`:""}};
    border-bottom: ${e=>{let{$progress:A,theme:r}=e;return`\n        ${r.sizes.taskbar.entry.borderSize} solid ${A&&A>0&&A<100?r.colors.progress:r.colors.highlight}\n      `}};
    bottom: 0;
    content: "";
    height: ${e=>{let{$foreground:A}=e;return A?"100%":0}};
    margin: ${e=>{let{$foreground:A}=e;return A?"":"0 4px"}};
    position: absolute;
    transition-duration: 0.1s;
    transition-property: ${e=>{let{$foreground:A}=e;return A?"all":"width"}};
    width: ${e=>{let{$foreground:A}=e;return A?"100%":"calc(100% - 8px)"}};
    z-index: -1;
  }

  &:hover {
    &::before {
      background-color: ${e=>{let{$foreground:A,theme:r}=e;return A?r.colors.taskbar.foregroundHover:r.colors.taskbar.hover}};
      height: 100%;
      margin: 0;
      width: 100%;
    }
  }

  &:active {
    &::before {
      background-color: ${e=>{let{$foreground:A,theme:r}=e;return A?r.colors.taskbar.activeForeground:r.colors.taskbar.active}};
    }
  }

  figure {
    align-items: center;
    display: flex;
    margin-bottom: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.borderSize}};
    margin-left: 4px;
    padding: 4px;

    figcaption {
      color: ${e=>{let{theme:A}=e;return A.colors.text}};
      font-size: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.fontSize}};
      margin: 0 4px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    picture {
      height: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.iconSize}};
      position: relative;
      top: 1px;
      width: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.iconSize}};
    }
  }
`;A.Z=i},7890:function(e,A,r){r.r(A),r.d(A,{default:function(){return C}});var t=r(85893),i=r(57637),n=r(14141),o=r(64358),a=()=>{const{sizes:{taskbar:e}}=(0,n.Fg)();return{animate:"active",exit:"initial",initial:"initial",transition:{duration:o.Nb.WINDOW},variants:{active:{width:e.entry.maxWidth},initial:{width:0}}}},s=r(13645),l=r(52625),g=r(56758),c=r(62065),d=r(51526),u=r(5152),m=r.n(u),h=r(67294),b=r(30663),p=r(42362),f=r(34254);const k=m()((()=>r.e(9075).then(r.bind(r,19075))),{loadableGenerated:{webpack:()=>[19075]}});var C=e=>{let{icon:A,id:r,title:n}=e;const o=(0,l.Z)(r),{foregroundId:u,setForegroundId:m}=(0,c.k)(),C=r===u,{linkElement:z,minimize:E,processes:{[r]:x}}=(0,g.z)(),{minimized:B,progress:$}=x||{},w=(0,h.useCallback)((e=>e&&z(r,"taskbarEntry",e)),[r,z]),[M,Q]=(0,h.useState)(!1),R=()=>Q(!1);return(0,t.jsxs)(i.Z,{$foreground:C,$progress:$,onClick:R,onMouseEnter:()=>Q(!0),onMouseLeave:R,...a(),...(0,s.Z)(r),children:[(0,t.jsx)(d.M,{initial:!1,presenceAffectsLayout:!1,children:M&&(0,t.jsx)(k,{id:r})}),(0,t.jsx)(b.Z,{ref:w,onClick:()=>{(B||C)&&E(r),m(C?o:r)},...(0,f.PS)(n),children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(p.Z,{alt:n,imgSize:16,src:A}),(0,t.jsx)("figcaption",{children:n})]})})]})}},13645:function(e,A,r){r.d(A,{Z:function(){return l}});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC";var i=r(25420),n=r(25449),o=r(56758),a=r(67294),s=r(64358),l=e=>{const{contextMenu:A}=(0,n.H)(),{onClose:r,onMaximize:l,onMinimize:g}=(0,i.Z)(e),{processes:{[e]:c}}=(0,o.z)(),{allowResizing:d=!0,maximized:u,minimized:m}=c||{};return(0,a.useMemo)((()=>A?.((()=>{const e=u||m;return[{action:m?g:l,disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},{action:g,disabled:m,icon:m?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},d&&{action:l,disabled:e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},s.Os,{action:r,icon:t,label:"Close"}].filter(Boolean)}))),[d,A,u,m,r,l,g])}},25420:function(e,A,r){var t=r(52625),i=r(56758),n=r(62065),o=r(67294);A.Z=e=>{const A=(0,t.Z)(e),{setForegroundId:r,removeFromStack:a}=(0,n.k)(),{closeWithTransition:s,maximize:l,minimize:g}=(0,i.z)();return{onClose:(0,o.useCallback)((()=>{a(e),s(e),r(A)}),[s,e,A,a,r]),onMaximize:()=>l(e),onMinimize:()=>{g(e),r(A)}}}},52625:function(e,A,r){var t=r(56758),i=r(62065);A.Z=e=>{const{stackOrder:A=[]}=(0,i.k)(),{processes:r}=(0,t.z)();return A.find((A=>A!==e&&!r?.[A]?.minimized))||""}}}]);