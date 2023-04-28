"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8636],{31404:function(e,t,n){var r=n(85893),i=n(55785),o=n(56758),a=n(5152),l=n.n(a),s=n(67294);const c=l()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:a,children:l}=e;const{processes:{[t]:{url:d=""}={}}}=(0,o.z)(),b=(0,s.useRef)(null),[g,u]=(0,s.useState)(!0),h=(0,s.useMemo)((()=>({contain:"strict",visibility:g?"hidden":"visible"})),[g]);return n(t,d,b,u,g),(0,r.jsxs)(r.Fragment,{children:[g&&(0,r.jsx)(c,{}),(0,r.jsx)(a,{ref:b,style:h,...(0,i.Z)({id:t}),children:l})]})}},28636:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(85893),i=n(31404);const o=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 15v2H17v15h-2V17H0v-2h15V0h2v15h15z"})}),a=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 17H0v-2h32v2z"})}),l=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M6 32v-2h18v2H6zm18.703-15.297L15 26.484l-9.703-9.781 1.406-1.406L14 22.641V0h2v22.641l7.297-7.344z"})}),s=()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M30 12q0.406 0 0.773 0.156t0.641 0.43 0.43 0.641 0.156 0.773v14h-8v4h-16v-4h-8v-14q0-0.406 0.156-0.773t0.43-0.641 0.641-0.43 0.773-0.156h6v-12h16v12h6zM10 12h12v-10h-12v10zM22 22h-12v8h12v-8zM30 14h-28v12h6v-6h16v6h6v-12zM5 16q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297-0.703-0.297-0.297-0.703 0.297-0.703 0.703-0.297z"})});var c=n(14141),d=c.ZP.nav.withConfig({componentId:"sc-8d1911a-0"})`
  background-color: rgb(50, 54, 57);
  box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
  display: flex;
  height: 40px;
  position: absolute;
  top: ${e=>{let{theme:t}=e;return t.sizes.titleBar.height}}px;
  width: 100%;
  z-index: 1;

  .side-menu {
    display: flex;
    overflow: hidden;
    place-items: center;
    white-space: nowrap;
    width: 100%;

    span {
      margin-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:first-child {
      color: #fff;
      font-size: 14px;
      margin-left: 16px;
      place-content: flex-start;
    }

    &:last-child {
      margin-right: 16px;
      place-content: flex-end;
    }
  }

  button {
    border-radius: 50%;
    display: flex;
    font-size: 24px;
    height: 30px;
    place-content: center;
    place-items: center;
    width: 30px;

    &#subtract {
      margin-right: 7px;
    }

    &#add {
      margin-left: 7px;
    }

    &:last-child {
      margin-left: 7px;
    }

    &:hover {
      background-color: rgb(66, 70, 73);
    }

    svg {
      fill: #fff;
      height: 12px;
      stroke: #fff;
      width: 12px;
    }

    &:disabled {
      background-color: initial;

      svg {
        fill: rgb(110, 112, 114);
        stroke: rgb(110, 112, 114);
      }
    }

    &#download {
      svg {
        margin-left: 1px;
        scale: 1.15;
        stroke-width: 1.75;
        transform: scale(1.25, 1);
      }
    }
  }

  ol {
    display: flex;
    flex-direction: row;
    height: 100%;
    place-content: center;
    place-items: center;
    width: 100%;

    li {
      color: #fff;
      display: flex;
      flex-direction: row;
      font-size: 14px;

      input {
        background-color: rgb(25, 27, 28);
        color: #fff;
        height: 20px;
        text-align: center;

        &:disabled {
          color: rgb(110, 112, 114);
        }
      }

      &:not(:last-child)::after {
        background-color: rgb(112, 115, 117);
        content: "";
        margin-left: 20px;
        width: 1px;
      }

      &.pages {
        letter-spacing: 1.5px;
        line-height: 20px;
        padding-right: 10px;
        width: max-content;

        input {
          margin: 0 5px;
          width: 24px;
        }
      }

      &#scale {
        display: flex;
        place-items: center;

        input {
          width: 45px;
        }
      }
    }
  }
`,b=n(7459),g=n(26724),u=n(56758),h=n(1864),p=n(67294),m=n(64358),x=n(34254);const A=[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5];var w=(e,t,n,r)=>{const{readFile:i}=(0,g.o)(),{argument:o,processes:{[e]:a}={}}=(0,u.z)(),{libs:l=[],scale:s}=a||{},[c,d]=(0,p.useState)([]),w=(0,p.useCallback)((async(t,r)=>{const i=document.createElement("canvas"),a=i.getContext("2d",m.KU),l=await r.getPage(t);let c;if(s)c=l.getViewport({scale:s});else{const t=l.getViewport().viewBox[2],i=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-m.BQ;if(t>=e)return 1;const n=t/e,r=A.findIndex((e=>e>=n));return r>0?A[r-1]:1}(n.current?.clientWidth,t),{info:a}=await r.getMetadata();o(e,"scale",i),a?.Title&&o(e,"subTitle",a.Title),c=l.getViewport({scale:i})}return i.height=c.height,i.width=c.width,await l.render({canvasContext:a,viewport:c}).promise,i}),[o,n,e,s]),{prependFileToTitle:v}=(0,b.Z)(e),f=(0,p.useCallback)((async()=>{if(window.pdfjsLib&&t&&n.current){r(!0);const n=await window.pdfjsLib.getDocument(await i(t)).promise;o(e,"count",n.numPages),d(await Promise.all(Array.from({length:n.numPages}).map(((e,t)=>w(t+1,n))))),v((0,h.basename)(t))}r(!1)}),[o,n,e,v,i,w,r,t]);(0,p.useEffect)((()=>{(0,x.mb)(l).then((()=>{window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="/Program Files/PDF.js/pdf.worker.js",f())}))}),[l,f]),(0,p.useEffect)((()=>{if(c.length>0){const t=n.current?.querySelector("#pages");t&&([...t.children].forEach((e=>e.remove())),c.forEach(((r,i)=>{const a=document.createElement("li"),l=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&o(e,"page",i+1)}))}),{root:n.current,threshold:.4});a.append(r),t.append(a),l.observe(a)})))}}),[o,n,e,c])},v=n(30663),f=e=>{let{id:t}=e;const{readFile:i}=(0,g.o)(),{argument:c,processes:{[t]:b}={}}=(0,u.z)(),{count:p=0,page:w=1,componentWindow:f,scale:k=1,subTitle:$="",url:j=""}=b||{};return(0,r.jsxs)(d,{children:[(0,r.jsx)("div",{className:"side-menu",children:(0,r.jsx)("span",{children:$||(0,h.basename)(j)})}),(0,r.jsxs)("ol",{children:[0!==p&&(0,r.jsxs)("li",{className:"pages",children:[(0,r.jsx)("input",{enterKeyHint:"go",onChange:e=>{let{target:n}=e;const r=Number(n.value);Number.isNaN(r)||r<1||r>p||(c(t,"page",r),f?.querySelectorAll("li")[r-1].scrollIntoView())},value:w})," ","/ ",p]}),(0,r.jsxs)("li",{id:"scale",children:[(0,r.jsx)(v.Z,{disabled:.25===k||0===p,id:"subtract",onClick:()=>c(t,"scale",A[A.indexOf(k)-1]),...(0,x.PS)("Zoom out"),children:(0,r.jsx)(a,{})}),(0,r.jsx)("input",{disabled:0===p,enterKeyHint:"done",onChange:e=>{let{target:n}=e;if(!n.value.endsWith("%")||n.value.length>4||n.value.length<2)return;const r=Number(n.value.replace("%",""))/100;Number.isNaN(r)||r>A[A.length-1]||r<A[0]||c(t,"scale",A[A.findIndex((e=>e>=r))])},value:`${Math.round(100*k)}%`}),(0,r.jsx)(v.Z,{disabled:5===k||0===p,id:"add",onClick:()=>c(t,"scale",A[A.indexOf(k)+1]),...(0,x.PS)("Zoom in"),children:(0,r.jsx)(o,{})})]})]}),(0,r.jsxs)("div",{className:"side-menu",children:[(0,r.jsx)(v.Z,{disabled:0===p,id:"download",onClick:async()=>{const e=document.createElement("a");e.href=(0,x.YS)(await i(j)),e.download=(0,h.basename)(j),e.click()},...(0,x.PS)("Download"),children:(0,r.jsx)(l,{})}),(0,r.jsx)(v.Z,{disabled:0===p,onClick:async()=>{(0,x.G6)()&&(window.InstallTrigger=!0,setTimeout((()=>{delete window.InstallTrigger}),5*m.i2));const{default:e}=await n.e(8607).then(n.t.bind(n,68607,23));e({base64:!0,printable:(await i(j)).toString("base64"),type:"pdf"})},...(0,x.PS)("Print"),children:(0,r.jsx)(s,{})})]})]})},k=n(38060),$=c.ZP.div.withConfig({componentId:"sc-64beb09a-0"})`
  ${(0,k.Z)(m.BQ)};

  display: block;
  overflow: auto;
  position: relative;
  text-align: center;
  top: 40px;

  && {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px - 40px)`}};
  }

  canvas {
    box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
    margin: 4px 4px 0;
  }
`,j=e=>{let{id:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{StyledComponent:$,id:t,useHook:w,children:(0,r.jsx)("ol",{id:"pages"})}),(0,r.jsx)(f,{id:t})]})}},55785:function(e,t,n){var r=n(62727),i=n(6529),o=n(42151),a=n(26724),l=n(56758),s=n(62065),c=n(1864),d=n(67294),b=n(64358),g=n(34254);t.Z=e=>{let{callback:t,directory:n=b.Ll,id:u,onDragLeave:h,onDragOver:p,updatePositions:m}=e;const{url:x}=(0,l.z)(),{iconPositions:A,sortOrders:w,setIconPositions:v}=(0,s.k)(),{mkdirRecursive:f,updateFolder:k,writeFile:$}=(0,a.o)(),j=(0,d.useCallback)((async(e,t,n)=>{if(u)if(t){const r=(0,c.join)(b.Ll,e);await f(b.Ll),await $(r,t,!0)&&(n===o.v.UPDATE_URL&&x(u,r),k(b.Ll,e))}else n===o.v.UPDATE_URL&&x(u,e)}),[u,f,k,x,$]),{openTransferDialog:y}=(0,r.Z)();return{onDragLeave:h,onDragOver:e=>{p?.(e),(0,g.nK)(e)},onDrop:e=>{if(m&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,i.p4)(e);if(0===t.length&&""===r)return;const o={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;a=a.map((e=>(0,c.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!A[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(A[r]);return(0,c.basename)(r)})),(0,g.vi)(n,e.target,A,w,o,a,v)}(0,i.WG)(e,t||j,n,y,Boolean(u))}}}},7459:function(e,t,n){var r=n(56758),i=n(25804),o=n(67294),a=n(64358);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(a.CC),{title:l}=i.Z[n]||{};return{appendFileToTitle:(0,o.useCallback)(((n,r)=>{const i=n?` - ${n}${r?` ${a.xy}`:""}`:"";t(e,`${l}${i}`)}),[e,l,t]),prependFileToTitle:(0,o.useCallback)(((n,r)=>{const i=n?`${r?`${a.xy} `:""}${n} - `:"";t(e,`${i}${l}`)}),[e,l,t])}}},38060:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(14141);const i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return r.iv`
  overflow: auto;
  scrollbar-color: ${i[o].thumb} ${i[o].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[o].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[o].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[o].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[o].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[o].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[o].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[o].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[o].buttonHover};
    }

    &:active {
      background-color: ${i[o].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===n?"center":`${n}px`};
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
    background-blend-mode: ${i[o].blendMode};
  }
`}}}]);