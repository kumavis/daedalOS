"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5277],{84563:function(e,t,r){r.d(t,{J6:function(){return l},Tw:function(){return s},bJ:function(){return i},dO:function(){return n}});var o=r(85893);const n=()=>(0,o.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M0 0h10v1H0z"})}),i=()=>(0,o.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})}),l=()=>(0,o.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})}),s=()=>(0,o.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})})},75277:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var o=r(85893),n=r(24576),i=r(1148),l=r(21157),s=r(14141),c=(0,s.ZP)(l.m.section).withConfig({componentId:"sc-3431639e-0"})`
  background-color: ${e=>{let{$backgroundColor:t,theme:r}=e;return t||r.colors.window.background}};
  box-shadow: ${e=>{let{$isForeground:t,theme:r}=e;return t?r.colors.window.shadow:r.colors.window.shadowInactive}};
  contain: strict;
  height: 100%;
  outline: ${e=>{let{$isForeground:t,theme:r}=e;return`${r.sizes.window.outline} solid ${t?r.colors.window.outline:r.colors.window.outlineInactive}`}};
  overflow: hidden;
  position: absolute;
  width: 100%;

  header + * {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px)`}};
  }
`,a=r(99895);const d=e=>{let{$foreground:t,theme:r}=e;return t?`1px solid ${r.colors.titleBar.background}`:`1px solid ${r.colors.titleBar.backgroundInactive}`};var u=s.ZP.header.withConfig({componentId:"sc-c9f657a8-0"})`
  background-color: ${e=>{let{$foreground:t,theme:r}=e;return t?r.colors.titleBar.background:r.colors.titleBar.backgroundInactive}};
  border-bottom: ${d};
  display: flex;
  height: ${e=>{let{theme:t}=e;return t.sizes.titleBar.height}}px;
  position: relative;
  top: 0;
  z-index: 2;

  h1 {
    color: ${e=>{let{$foreground:t,theme:r}=e;return t?r.colors.titleBar.text:r.colors.titleBar.textInactive}};
    display: flex;
    flex-grow: 1;
    font-size: ${e=>{let{theme:t}=e;return t.sizes.titleBar.fontSize}};
    font-weight: 400;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      min-width: inherit;
      position: relative;
      top: -1px;

      picture {
        height: ${e=>{let{theme:t}=e;return t.sizes.titleBar.iconSize}};
        margin-right: ${e=>{let{theme:t}=e;return t.sizes.titleBar.iconMarginRight}};
        width: ${e=>{let{theme:t}=e;return t.sizes.titleBar.iconSize}};
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  nav {
    display: flex;

    button {
      border-left: ${d};
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${e=>{let{theme:t}=e;return t.sizes.titleBar.buttonWidth}};

      svg {
        fill: ${e=>{let{$foreground:t,theme:r}=e;return t?r.colors.titleBar.text:r.colors.titleBar.buttonInactive}};
        margin: 0 1px 2px 0;
        width: ${e=>{let{theme:t}=e;return t.sizes.titleBar.buttonIconWidth}};
      }

      &.minimize {
        svg {
          margin-bottom: 1px;
          margin-right: 0;
        }
      }

      &:hover {
        background-color: ${e=>{let{theme:t}=e;return t.colors.titleBar.backgroundHover}};

        svg {
          fill: ${e=>{let{theme:t}=e;return t.colors.titleBar.text}};
        }

        &.close {
          background-color: ${e=>{let{theme:t}=e;return t.colors.titleBar.closeHover}};
          transition: background-color 0.25s ease;
        }
      }

      &:active {
        background-color: rgb(51, 51, 51);

        &.close {
          background-color: rgb(139, 10, 20);
        }
      }

      &:disabled {
        svg {
          fill: ${e=>{let{$foreground:t}=e;return t?"rgb(50, 50, 50)":"rgb(60, 60, 60)"}};
        }

        &:hover {
          background-color: inherit;
        }
      }
    }
  }
`,h=r(13645),g=r(25420),x=r(84563),m=r(56758),w=r(62065),p=r(35778),f=r(67294),v=r(30663),b=r(42362),z=r(64358),$=r(34254),k=e=>{let{id:t}=e;const{processes:{[t]:r}}=(0,m.z)(),{allowResizing:n=!0,closing:i,componentWindow:l,hideMaximizeButton:s,hideMinimizeButton:c,hideTitlebarIcon:d,icon:k,title:B,maximized:j}=r||{},{foregroundId:C}=(0,w.k)(),Z=t===C,{onClose:I,onMaximize:M,onMinimize:H}=(0,g.Z)(t),S=(0,p.Z)(I),N=(0,p.Z)(M),y=(0,h.Z)(t),R=(0,f.useRef)(0),E=(0,f.useRef)(),P=(0,f.useRef)(),V=(0,f.useCallback)((e=>{const{x:t,y:r}=l?.getBoundingClientRect()||{};Date.now()-R.current>=z.XX&&E.current&&E.current.x===t&&E.current.y===r&&y.onContextMenuCapture(Object.assign(e,{touches:P.current}))}),[l,y]),T=(0,f.useCallback)((e=>{let{touches:t}=e;l&&(l.blur(),l.focus(z.eS),R.current=Date.now(),E.current=l.getBoundingClientRect(),P.current=t)}),[l]);return(0,o.jsxs)(u,{$foreground:Z,className:a.ZP.dragHandleClassName,onDragOver:$.nK,onDrop:$.nK,...y,children:[(0,o.jsx)(v.Z,{as:"h1",...n&&!i?N:{},onTouchEndCapture:V,onTouchStartCapture:T,children:(0,o.jsxs)("figure",{children:[!d&&(0,o.jsx)(b.Z,{alt:B,imgSize:16,src:k,...S}),(0,o.jsx)("figcaption",{children:B})]})}),(0,o.jsxs)("nav",{className:"cancel",children:[!c&&(0,o.jsx)(v.Z,{className:"minimize",onClick:H,...(0,$.PS)("Minimize"),children:(0,o.jsx)(x.dO,{})}),!s&&(0,o.jsx)(v.Z,{className:"maximize",disabled:!n,onClick:M,...(0,$.PS)("Maximize"),children:j?(0,o.jsx)(x.J6,{}):(0,o.jsx)(x.bJ,{})}),(0,o.jsx)(v.Z,{$short:s&&c,className:"close",onClick:I,...(0,$.PS)("Close"),children:(0,o.jsx)(x.Tw,{})})]})]})},B=r(84017),j=r(87531),C=e=>{let{children:t,id:r}=e;const{linkElement:l,processes:{[r]:s}}=(0,m.z)(),{backgroundColor:a,Component:d,peekElement:u}=s||{},{foregroundId:h}=(0,w.k)(),g=r===h,{zIndex:x,...p}=(0,B.Z)(r),v=(0,j.Z)(r),b=(0,f.useCallback)((e=>d&&!u&&e&&l(r,"peekElement",e)),[d,r,l,u]);return(0,o.jsx)(i.Z,{id:r,zIndex:x,children:(0,o.jsx)(c,{$backgroundColor:a,$isForeground:g,...p,...v,children:(0,o.jsxs)(n.Z,{ref:b,children:[(0,o.jsx)(k,{id:r}),t]})})})}}}]);