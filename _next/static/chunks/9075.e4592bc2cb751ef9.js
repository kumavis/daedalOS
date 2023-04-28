"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9075],{19075:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(85893),i=n(57637),o=n(21157),a=n(14141),s=n(64358),c=(0,a.ZP)(o.m.div).withConfig({componentId:"sc-b2b41f69-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.background}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.taskbar.peekBorder}`}};
  border-bottom: 0;
  bottom: ${s.bK}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;
  transform: ${e=>{let{$offsetX:t}=e;return t?`translateX(${t}px)`:void 0}};

  ${i.Z}:hover & {
    background-color: hsla(0, 0%, 25%, 85%);

    &:active {
      background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.activeForeground}};
    }
  }

  img {
    height: ${e=>{let{theme:t}=e;return t.sizes.taskbar.entry.peekImage.height}}px;
    margin: ${e=>{let{theme:t}=e;return t.sizes.taskbar.entry.peekImage.margin}}px;
    max-height: ${s.yM}px;
    max-width: ${s.yM}px;
    min-height: 80px;
    min-width: 80px;
    object-fit: contain;
  }

  button {
    background-color: rgb(40, 40, 40);
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: rgb(252, 246, 247);
      width: 12px;
    }

    &:active {
      background-color: rgb(139, 10, 20);
    }

    &:hover {
      background-color: rgb(194, 22, 36);
    }
  }
`,l=()=>{const{sizes:{taskbar:e}}=(0,a.Fg)(),t=e.entry.peekImage.height+2*e.entry.peekImage.margin;return{animate:"active",exit:"initial",initial:"initial",transition:{duration:s.Nb.WINDOW,ease:"easeInOut"},variants:{active:{height:t,opacity:1},initial:{height:0,opacity:0}}}},h=n(56758),u=n(67294),d=n(34254);const g=async(e,t,n)=>{if(!t.current)return;const r=()=>window.requestAnimationFrame((()=>g(e,t,n))),i=await(0,d.mZ)();let o;try{o=await(i?.toCanvas(e,{...e.clientWidth>s.yM&&{canvasHeight:Math.round(s.yM/e.clientWidth*e.clientHeight),canvasWidth:s.yM},filter:e=>!(e instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0"}}))}catch{}if(o&&o.width>0&&o.height>0)if(o.getContext("2d")?.getImageData(0,0,o.width,o.height).data.some(Boolean)){const e=new Image,i=o.toDataURL();e.addEventListener("load",(()=>{t.current&&(n(i),window.setTimeout(r,s.i2/15))}),s.K7),e.src=i}else r()};var m=e=>{const{processes:{[e]:t}}=(0,h.z)(),{peekElement:n,componentWindow:r}=t||{},i=(0,u.useRef)(),[o,a]=(0,u.useState)(""),c=(0,u.useRef)(!0);return(0,u.useEffect)((()=>{const e=n||r;return!i.current&&e&&(i.current=window.setTimeout((()=>window.requestAnimationFrame((()=>g(e,c,a)))),document.querySelector(".peekWindow")?0:s.i2/2),c.current=!0),()=>{i.current&&(clearTimeout(i.current),i.current=void 0),c.current=!1}}),[r,n]),o},w=n(25420),p=n(84563),v=n(62065),x=n(30663),f=e=>{let{id:t}=e;const{minimize:n,processes:{[t]:{minimized:i=!1,title:o=t}={}}}=(0,h.z)(),{setForegroundId:a}=(0,v.k)(),{onClose:g}=(0,w.Z)(t),[f,b]=(0,u.useState)(0),k=m(t),y=l(),z=(0,u.useRef)(null);return(0,u.useLayoutEffect)((()=>{if(k){const{left:e=0,right:t=0}=z.current?.getBoundingClientRect()||{},n=(0,d.E9)();e<0?b(Math.abs(e)):t>n&&b(n-t)}}),[k]),k?(0,r.jsxs)(c,{ref:z,$offsetX:f,className:"peekWindow",onClick:()=>{i&&n(t),a(t)},...y,...s.LL,children:[(0,r.jsx)("img",{alt:o,decoding:"async",loading:"eager",src:k,...s.h7}),(0,r.jsx)(x.Z,{onClick:g,...(0,d.PS)("Close"),children:(0,r.jsx)(p.Tw,{})})]}):null}},84563:function(e,t,n){n.d(t,{J6:function(){return a},Tw:function(){return s},bJ:function(){return o},dO:function(){return i}});var r=n(85893);const i=()=>(0,r.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 0h10v1H0z"})}),o=()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})}),a=()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})}),s=()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})})}}]);