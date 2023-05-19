"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6923],{86923:function(e,t,o){o.r(t),o.d(t,{default:function(){return q}});var n=o(85893),r=(o(82310),o(87426)),i=o(26724),s=o(56758),l=o(1864),a=o(67294),c=o(64358),d=o(34254),u=o(36717),f=o(1756),h=o(4798),p=o(54588),g=o(55785),m=o(88507),b=o(76478),x=o(42151),w=o(93927),y=o(1347),k=o(89609),$=o(5152),v=o.n($),S=o(14141),z=S.ZP.li.withConfig({componentId:"sc-a8530706-0"})`
  display: ${e=>{let{$visible:t}=e;return t?"flex":"none"}};
  height: min-content;
  padding: 2px;

  &.focus-within,
  &:hover {
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    &::before {
      content: "";
      inset: -1px;
      position: absolute;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -2px;
      place-items: center;

      figcaption {
        color: #000;
        font-size: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.fontSize}};
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px 0;
        word-break: break-word;
      }

      picture {
        height: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};
        width: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};

        &:not(:first-of-type) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }
    }
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.background}};

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.border}`}};
    }
  }

  &.focus-within {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.backgroundFocused}};
    z-index: 1;

    &.only-focused {
      margin-bottom: -1000px;
    }

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocused}`}};
    }

    &:hover {
      background-color: ${e=>{let{theme:t,$selecting:o}=e;return o?t.colors.fileEntry.backgroundFocused:t.colors.fileEntry.backgroundFocusedHover}};

      &::before {
        border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocusedHover}`}};
      }
    }
  }
`;const E=v()((()=>o.e(8598).then(o.bind(o,48598))),{loadableGenerated:{webpack:()=>[48598]}}),j=v()((()=>Promise.resolve().then(o.bind(o,26753))),{loadableGenerated:{webpack:()=>[26753]}});var Z=e=>{let{allowMovingDraggableEntries:t,hideFolders:o,hideLoading:r,hideScrolling:s,hideShortcutIcons:$,id:v,isDesktop:S,loadIconsImmediately:Z,preloadShortcuts:F,readOnly:C,showStatusBar:B,skipFsWatcher:I,skipSorting:R,url:M,useNewFolderIcon:D,view:N}=e;const[P,L]=(0,a.useState)(M),[H,K]=(0,a.useState)(""),[O,W]=(0,a.useState)(!1),A=(0,a.useRef)(null),{focusedEntries:T,focusableEntry:_,...X}=(0,b.Z)(A),{fileActions:G,files:U,folderActions:q,isLoading:J,updateFiles:Q}=(0,x.Z)(M,K,X,{hideFolders:o,hideLoading:r,preloadShortcuts:F,skipFsWatcher:I,skipSorting:R}),{mountFs:V,rootFs:Y,stat:ee}=(0,i.o)(),te=z,oe=y.Z,{isSelecting:ne,selectionRect:re,selectionStyling:ie,selectionEvents:se}=(0,h.Z)(A),le=(0,p.Z)(T,X,A,ne,t),ae=(0,g.Z)({callback:q.newPath,directory:M,updatePositions:t}),ce=(0,w.Z)(M,q,S),de=!r&&J||M!==P,ue=(0,m.Z)(U,M,T,K,X,q,Q,A,v,N),[fe,he]=(0,a.useState)("prompt"),pe=(0,a.useRef)(!1),ge=(0,a.useMemo)((()=>""===H?ue():void 0),[ue,H]);return(0,a.useEffect)((()=>{pe.current||"granted"===fe||"FileSystemAccess"!==Y?.mntMap[P]?.getName()||(pe.current=!0,(0,k.ZK)(P).then((e=>{const t="granted"===e;e&&!t||(he("granted"),t&&Q())})).catch((e=>{"Permission already granted"===e.message&&he("granted")})).finally((()=>{pe.current=!1})))}),[P,fe,Y?.mntMap,Q]),(0,a.useEffect)((()=>{!O&&c.my.has((0,d.RT)(M))&&(async()=>{(await ee(M)).isDirectory()||W((e=>(e||V(M).then((()=>setTimeout(Q,100))).catch((()=>{})),!0)))})()}),[V,O,ee,Q,M]),(0,a.useEffect)((()=>{M!==P&&(q.resetFiles(),L(M),he("denied"))}),[P,q,M]),(0,a.useEffect)((()=>{de||A.current?.focus(c.eS)}),[de]),(0,n.jsxs)(n.Fragment,{children:[de?(0,n.jsx)(j,{}):(0,n.jsxs)(oe,{ref:A,$scrollable:!s,onKeyDown:ge,...!C&&{$selecting:ne,...ae,...ce,...se},...c.LL,children:[ne&&(0,n.jsx)(f.Z,{style:ie}),Object.keys(U).map((e=>(0,n.jsx)(te,{$selecting:ne,$visible:!J,...!C&&le(M,e,H===e),...""===H&&{onKeyDown:ue(e)},..._(e),children:(0,n.jsx)(u.Z,{fileActions:G,fileManagerId:v,fileManagerRef:A,focusFunctions:X,focusedEntries:T,hideShortcutIcon:$,iconOverride:"https://www.hypertalking.com/wp-content/themes/hypertalking/images/icon-folder.png",isLoadingFileManager:J,loadIconImmediately:Z,name:(0,l.basename)(e,c.zm),path:(0,l.join)(M,e),readOnly:C,renaming:H===e,selectionRect:re,setRenaming:K,stats:U[e],useNewFolderIcon:D,view:N})},e)))]}),B&&(0,n.jsx)(E,{count:de?0:Object.keys(U).length,directory:M,fileDrop:ae,selected:T})]})},F=o(26753),C=o(62392),B=S.ZP.div.withConfig({componentId:"sc-f1cac496-0"})`
  ${y.Z} {
    column-gap: 2px;
    height: ${e=>{let{theme:t,showNavigation:o,showStatusBar:n}=e;return`calc(100% - ${o?(e=>e.sizes.fileExplorer.navBarHeight)(t):0} - ${n?(e=>e.sizes.fileExplorer.statusBarHeight)(t):0})`}};
    padding-left: 5px;
    padding-right: 5px;
  }

  ${F.default} {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.fileExplorer.navBarHeight} - ${t.sizes.fileExplorer.statusBarHeight})`}};
  }

  ${C.Z} {
    &:hover {
      &::before {
        border-width: 0;
      }
    }

    &::before {
      border-width: 0;
    }
  }
`,I=e=>{let{id:t}=e;const{icon:o,title:u,processes:{[t]:f},url:h}=(0,s.z)(),{componentWindow:p,closing:g,icon:m="",url:b=""}=f||{},{fs:x,rootFs:w}=(0,i.o)(),[y,k]=(0,a.useState)(b),$=(0,a.useRef)(null),v=(0,l.basename)(b),S=Boolean(w?.mntMap[b]&&v),z=(0,a.useCallback)((e=>{e.altKey&&"D"===e.key.toUpperCase()&&((0,d.nK)(e),$?.current?.focus(c.eS))}),[]);return(0,a.useEffect)((()=>{b&&(u(t,v||c.SP),(!m||b!==y||S&&m!==c.iR)&&(S?o(t,"FileSystemAccess"===w?.mntMap[b].getName()?c.iR:c.Wc):x&&(o(t,`/System/Icons/${v?"folder":"pc"}.webp`),(0,r.nR)(x,b).then((e=>{e&&o(t,e)}))),k(b)))}),[y,v,x,m,t,S,w?.mntMap,o,h,u,b]),(0,a.useEffect)((()=>{!p||g||b||(h(t,"/"),o(t,"/System/Icons/pc.webp"))}),[g,t,p,o,h,b]),(0,a.useEffect)((()=>(p?.addEventListener("keydown",z),()=>p?.removeEventListener("keydown",z))),[p,z]),b?(0,n.jsxs)(B,{showNavigation:!1,showStatusBar:!1,children:[!1,(0,n.jsx)(Z,{id:t,showStatusBar:!1,url:b,view:"icon"})]}):null},R=o(24576),M=o(1148),D=o(84017),N=o(87531),P=o(62065),L=o(21157),H=(0,S.ZP)(L.m.section).withConfig({componentId:"sc-906b354f-0"})`
  background-color: #fff;
  box-shadow: none;
  contain: strict;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  header + * {
    height: calc(100% - 16px);
  }

  @font-face {
    font-family: "ChicagoRegular";
    src: url("./System/Fonts/bitchicago12-webfont.eot?iefix") format("eot"),
      url("./System/Fonts/bitchicago12-webfont.woff") format("woff"),
      url("./System/Fonts/bitchicago12-webfont.ttf") format("truetype"),
      url("./System/Fonts/bitchicago12-webfont.svg#webfontvbCjnPDX")
        format("svg");
    font-style: normal;
    font-weight: 400;
  }

  font-family: "ChicagoRegular", Sans-Serif;
`,K=o(99895),O=o(13645),W=o(25420),A=o(35778),T=o(30663);const _=e=>{let{$foreground:t,theme:o}=e;return t?`1px solid ${o.colors.titleBar.background}`:`1px solid ${o.colors.titleBar.backgroundInactive}`};var X=S.ZP.header.withConfig({componentId:"sc-20d16d86-0"})`
  background-color: #fff;
  border-bottom: ${_};
  display: flex;
  height: 16px;
  position: relative;
  top: 0;
  z-index: 2;

  image-rendering: pixelated;
  background-image: url(//www.hypertalking.com/wp-content/themes/hypertalking/images/titlebar-bg-tile@2x.png);
  background-repeat: repeat-x;
  background-size: 1px 15px;
  line-height: 15px;
  padding: 1px;

  h1 {
    color: ${e=>{let{$foreground:t,theme:o}=e;return t?o.colors.titleBar.text:o.colors.titleBar.textInactive}};
    display: flex;
    flex-grow: 1;
    justify-content: center;
    font-size: ${e=>{let{theme:t}=e;return t.sizes.titleBar.fontSize}};
    font-weight: 400;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      min-width: inherit;
      position: relative;

      picture {
        height: ${e=>{let{theme:t}=e;return t.sizes.titleBar.iconSize}};
        margin-right: ${e=>{let{theme:t}=e;return t.sizes.titleBar.iconMarginRight}};
        width: ${e=>{let{theme:t}=e;return t.sizes.titleBar.iconSize}};
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: #fff;
        padding: 0 6px;
        color: #000;
      }
    }
  }

  nav {
    display: flex;
    background-color: #fff;
    border: solid 1px #fff;
    display: block;
    position: absolute;
    top: 1px;
    left: 7px;

    button {
      border-left: ${_};
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${e=>{let{theme:t}=e;return t.sizes.titleBar.buttonWidth}};

      background-image: url(//www.hypertalking.com/wp-content/themes/hypertalking/images/close-active.png);
      background-position: -10px -10px;
      background-repeat: no-repeat;
      background-size: 9px 9px;
      border: solid 1px #000;
      display: block;
      height: 9px;
      width: 9px;
    }
  }
`,G=e=>{let{id:t}=e;const{processes:{[t]:o}}=(0,s.z)(),{allowResizing:r=!0,closing:i,componentWindow:l,hideMaximizeButton:u,hideMinimizeButton:f,title:h}=o||{},{foregroundId:p}=(0,P.k)(),g=t===p,{onClose:m,onMaximize:b}=(0,W.Z)(t),x=(0,A.Z)(b),w=(0,O.Z)(t),y=(0,a.useRef)(0),k=(0,a.useRef)(),$=(0,a.useRef)(),v=(0,a.useCallback)((e=>{const{x:t,y:o}=l?.getBoundingClientRect()||{};Date.now()-y.current>=c.XX&&k.current&&k.current.x===t&&k.current.y===o&&w.onContextMenuCapture(Object.assign(e,{touches:$.current}))}),[l,w]),S=(0,a.useCallback)((e=>{let{touches:t}=e;l&&(l.blur(),l.focus(c.eS),y.current=Date.now(),k.current=l.getBoundingClientRect(),$.current=t)}),[l]);return(0,n.jsxs)(X,{$foreground:g,className:K.ZP.dragHandleClassName,onDragOver:d.nK,onDrop:d.nK,...w,children:[(0,n.jsx)("nav",{className:"cancel",children:(0,n.jsx)(T.Z,{$short:u&&f,className:"close",onClick:m,...(0,d.PS)("Close")})}),(0,n.jsx)(T.Z,{as:"h1",...r&&!i?x:{},onTouchEndCapture:v,onTouchStartCapture:S,children:(0,n.jsx)("figure",{children:(0,n.jsx)("figcaption",{children:h})})})]})},U=e=>{let{children:t,id:o}=e;const{linkElement:r,processes:{[o]:i}}=(0,s.z)(),{Component:l,peekElement:c}=i||{},{foregroundId:d}=(0,P.k)(),u=o===d,{zIndex:f,...h}=(0,D.Z)(o),p=(0,N.Z)(o),g=(0,a.useCallback)((e=>l&&!c&&e&&r(o,"peekElement",e)),[l,o,r,c]);return(0,n.jsx)(M.Z,{id:o,zIndex:f,children:(0,n.jsx)(H,{$isForeground:u,...h,...p,children:(0,n.jsxs)(R.Z,{ref:g,children:[(0,n.jsx)(G,{id:o}),t]})})})},q=e=>{let{id:t}=e;return(0,n.jsx)(U,{id:t,children:(0,n.jsx)(I,{id:t})})}}}]);