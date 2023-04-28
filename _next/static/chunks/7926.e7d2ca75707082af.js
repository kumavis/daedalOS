"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7926],{31404:function(e,t,r){var n=r(85893),o=r(55785),i=r(56758),a=r(5152),l=r.n(a),c=r(67294);const b=l()((()=>r.e(6753).then(r.bind(r,26753))),{loadableGenerated:{webpack:()=>[26753]}});t.Z=e=>{let{id:t,useHook:r,StyledComponent:a,children:l}=e;const{processes:{[t]:{url:s=""}={}}}=(0,i.z)(),u=(0,c.useRef)(null),[d,g]=(0,c.useState)(!0),A=(0,c.useMemo)((()=>({contain:"strict",visibility:d?"hidden":"visible"})),[d]);return r(t,s,u,g,d),(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(b,{}),(0,n.jsx)(a,{ref:u,style:A,...(0,o.Z)({id:t}),children:l})]})}},27926:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(85893),o=r(31404),i=r(14141),a=r(38060),l=r(64358),c=i.ZP.div.withConfig({componentId:"sc-96c8037f-0"})`
  canvas[style*="cursor: none;"] {
    cursor: default !important;
  }

  canvas {
    height: 100%;
    width: 100%;
  }

  ol {
    ${(0,a.Z)(l.BQ)};

    background-color: rgb(32, 33, 36);
    color: rgb(232, 234, 237);
    font-family: "Lucida Grande", sans-serif, monospace;
    font-size: 13px;
    height: 100%;
    line-height: 19px;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;

    li {
      border-bottom: 1px solid rgb(58, 58, 58);
      padding: 0 25px;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`,b=r(25804);const{height:s=0,width:u=0}=b.Z.BoxedWine.defaultSize||{},d={"inline-default-ondemand-root-overlay":"/wine1.7.55-v8-min-online",ondemand:"root",resolution:`${u}x${s}`,root:"/fullWine1.7.55-v8"},g=e=>[...Object.entries(d),...Object.entries(e)].map((e=>{let[t,r]=e;return`${t}=${r}`})).join("&");var A=r(7459),p=r(26724),m=r(56758),k=r(1864),h=r(67294),v=r(34254),f=r(48764).Buffer,w=(e,t,n,o)=>{const{appendFileToTitle:i}=(0,A.Z)(e),{processes:{[e]:{libs:a=[]}={}}={}}=(0,m.z)(),{readFile:l}=(0,p.o)(),c=(0,h.useRef)(),b=(0,h.useRef)(),s=(0,h.useCallback)((async()=>{let e={},c=t?await l(t):f.from("");const s=(0,v.RT)(t),u=".exe"===s,{zipAsync:d}=await r.e(1264).then(r.bind(r,91264)),A=u||!t?(0,k.basename)(t,s):await(async e=>{const{unzip:t}=await r.e(1264).then(r.bind(r,91264)),n=Object.entries(await t(e)),[[o]=[]]=n.filter((e=>{let[t]=e;return t.toLowerCase().endsWith(".exe")})).sort(((e,t)=>{let[,r]=e,[,n]=t;return n.length-r.length}));return o})(c);u&&(c=f.from(await d({[(0,k.basename)(t)]:c}))),e={...c?{"app-payload":c.toString("base64")}:{},...A?{p:A}:{}},b.current||(n.current?.prepend(document.createElement("ol")),b.current=window.setInterval((()=>{(0,v.H5)(n.current?.querySelector("canvas"))&&(clearInterval(b.current),b.current=void 0,n.current?.querySelector("ol")?.remove())}),100)),window.BoxedWineConfig={...window.BoxedWineConfig,consoleLog:e=>{const t=n.current?.querySelector("ol");if(t){const r=document.createElement("li");r.textContent=e,t.append(r),t.scrollTop=t.scrollHeight,setTimeout((()=>t.scrollTo(0,t.scrollHeight)),10)}},urlParams:g(e)},(0,v.mb)(a).then((()=>{t&&i(A||(0,k.basename)(t));try{window.BoxedWineShell((()=>o(!1)))}catch{}}))}),[i,n,a,l,o,t]);(0,h.useEffect)((()=>(c.current!==t&&(c.current=t,s()),()=>{window.BoxedWineConfig={...window.BoxedWineConfig,isRunning:!1}})),[s,t])},x=e=>{let{id:t}=e;return(0,n.jsx)(o.Z,{StyledComponent:c,id:t,useHook:w,children:(0,n.jsx)("canvas",{id:"boxedWineCanvas",onContextMenu:v.nK})})}},55785:function(e,t,r){var n=r(62727),o=r(6529),i=r(42151),a=r(26724),l=r(56758),c=r(62065),b=r(1864),s=r(67294),u=r(64358),d=r(34254);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:g,onDragLeave:A,onDragOver:p,updatePositions:m}=e;const{url:k}=(0,l.z)(),{iconPositions:h,sortOrders:v,setIconPositions:f}=(0,c.k)(),{mkdirRecursive:w,updateFolder:x,writeFile:$}=(0,a.o)(),y=(0,s.useCallback)((async(e,t,r)=>{if(g)if(t){const n=(0,b.join)(u.Ll,e);await w(u.Ll),await $(n,t,!0)&&(r===i.v.UPDATE_URL&&k(g,n),x(u.Ll,e))}else r===i.v.UPDATE_URL&&k(g,e)}),[g,w,x,k,$]),{openTransferDialog:C}=(0,n.Z)();return{onDragLeave:A,onDragOver:e=>{p?.(e),(0,d.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,o.p4)(e);if(0===t.length&&""===n)return;const i={x:e.clientX,y:e.clientY};let a=[];if(n){try{a=JSON.parse(n)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(r)&&(0,b.basename)(e)===(0,b.relative)(r,e))return;a=a.map((e=>(0,b.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!h[`${r}/${e}`])return e;let t=0,n="";do{t+=1,n=`${r}/${(0,b.basename)(e,(0,b.extname)(e))} (${t})${(0,b.extname)(e)}`}while(h[n]);return(0,b.basename)(n)})),(0,d.vi)(r,e.target,h,v,i,a,f)}(0,o.WG)(e,t||y,r,C,Boolean(g))}}}},7459:function(e,t,r){var n=r(56758),o=r(25804),i=r(67294),a=r(64358);t.Z=e=>{const{title:t}=(0,n.z)(),[r]=e.split(a.CC),{title:l}=o.Z[r]||{};return{appendFileToTitle:(0,i.useCallback)(((r,n)=>{const o=r?` - ${r}${n?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)}),[e,l,t]),prependFileToTitle:(0,i.useCallback)(((r,n)=>{const o=r?`${n?`${a.xy} `:""}${r} - `:"";t(e,`${o}${l}`)}),[e,l,t])}}},38060:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(14141);const o={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${o[i].thumb} ${o[i].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${o[i].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${o[i].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${o[i].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${o[i].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${o[i].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${o[i].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${o[i].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${o[i].buttonHover};
    }

    &:active {
      background-color: ${o[i].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===r?"center":`${r}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${o[i].blendMode};
  }
`}}}]);