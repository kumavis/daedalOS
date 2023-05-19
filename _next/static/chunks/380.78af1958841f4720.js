"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[380,6753,631],{82310:function(e,t,r){r.d(t,{Z:function(){return T}});var n=r(85893),o=r(50631),i=r(14141),s=i.ZP.div.withConfig({componentId:"sc-4b72021-0"})`
  background-position: 2px 5px;
  background-repeat: no-repeat;
  background-size: 16px;
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: 30px;
  margin: 6px 12px 6px 5px;
  padding: 0 22px 2px 24px;
  position: relative;
  width: 100%;

  input {
    background-color: rgb(25, 25, 25);
    border-right: 1px solid rgb(21, 21, 21);
    color: #fff;
    font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 6px);
  }

  img {
    left: 2px;
    position: absolute;
    top: 5px;
  }

  #refresh {
    background-color: rgb(25, 25, 25);
    height: 28px;
    margin: 0;
    position: absolute;
    right: 0;
    stroke: rgb(128, 128, 128);
    stroke-width: 3;
    top: 0;
    width: 28px;

    &:hover {
      background-color: rgb(27, 41, 49);
      border: 1px solid rgb(34, 114, 153);
    }

    &:active {
      background-color: rgb(28, 57, 71);
      border: 1px solid rgb(38, 160, 218);
    }
  }
`,a=r(25449),l=r(67294),c=e=>{const{contextMenu:t}=(0,a.H)();return(0,l.useMemo)((()=>t?.((()=>[{action:()=>navigator.clipboard?.writeText(e),label:"Copy address"}]))),[e,t])},u=r(26724),d=r(56758),p=r(1864),h=r(30663),x=r(42362),f=r(64358),g=r(34254),w=(0,l.forwardRef)(((e,t)=>{let{id:r}=e;const i=t,{url:a,processes:{[r]:{icon:w,url:b=""}}}=(0,d.z)(),m=(0,p.basename)(b)||f.SP,[v,k]=(0,l.useState)(m),{exists:j,updateFolder:y}=(0,u.o)();return(0,l.useEffect)((()=>{i.current&&(v===b?i.current.select():v===m?window.getSelection()?.removeAllRanges():document.activeElement!==i.current&&k(m))}),[v,i,m,b]),(0,n.jsxs)(s,{children:[(0,n.jsx)(x.Z,{alt:m,imgSize:16,src:w}),(0,n.jsx)("input",{ref:i,"aria-label":"Address",enterKeyHint:"go",onBlurCapture:()=>k(m),onChange:e=>{let{target:t}=e;return k(t.value)},onFocusCapture:()=>k(b),onKeyDown:async e=>{let{key:t}=e;if("Enter"===t&&i.current){const{value:e}=i.current;e&&await j(e)&&a(r,e),i.current.blur()}},spellCheck:!1,type:"text",value:v,...c(b)}),(0,n.jsx)(h.Z,{id:"refresh",onClick:()=>y(b),...(0,g.PS)(`Refresh "${m}" (F5)`),children:(0,n.jsx)(o.Refresh,{})})]})})),b=i.ZP.div.withConfig({componentId:"sc-22fbf6bc-0"})`
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: 30px;
  margin: 6px 12px 6px 0;
  max-width: 148px;
  padding: 0;
  position: relative;
  width: 100%;

  svg {
    fill: rgb(113, 113, 113);
    height: 12px;
    left: 14px;
    pointer-events: none;
    position: absolute;
    stroke: rgb(113, 113, 113);
    stroke-width: 1;
    top: 8px;
  }

  input {
    background-color: rgb(25, 25, 25);
    color: #fff;
    font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    padding-bottom: 2px;
    padding-left: 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`,m=r(64382),v=r(87426),k=r(22957),j=e=>{let{id:t}=e;const[r,i]=(0,l.useState)(""),s=(0,l.useRef)(!1),{open:c,processes:{[t]:{url:u=""}}}=(0,d.z)(),h=(0,l.useRef)(null),x=(0,k.Rx)(r),{contextMenu:f}=(0,a.H)();return(0,l.useEffect)((()=>{if(h.current&&s.current){const e=()=>[...x.filter((e=>{let{ref:t}=e;return t.startsWith(u)})),...x.filter((e=>{let{ref:t}=e;return!t.startsWith(u)}))].slice(0,9).map((e=>{let{ref:t}=e;return{action:()=>{c((0,v.Wd)((0,g.RT)(t))||m.y[0],{url:t}),i(""),h.current&&(h.current.value="",h.current.blur())},icon:(0,v.sK)((0,g.RT)(t)),label:(0,p.basename)(t)}}));f?.(e).onContextMenuCapture(void 0,h.current.getBoundingClientRect())}}),[f,c,x,u]),(0,l.useEffect)((()=>{h.current&&(h.current.value="",i(""))}),[u]),(0,n.jsxs)(b,{children:[(0,n.jsx)(o.Search,{}),(0,n.jsx)("input",{ref:h,"aria-label":"Search box",enterKeyHint:"search",onChange:e=>{let{target:t}=e;s.current=!0,i(t.value)},onFocus:()=>(0,g.Q4)(k.O9),placeholder:"Search",spellCheck:!1,type:"text"})]})},y=i.ZP.nav.withConfig({componentId:"sc-b01bb8a2-0"})`
  background-color: rgb(25, 25, 25);
  display: flex;
  height: ${e=>{let{theme:t}=e;return t.sizes.fileExplorer.navBarHeight}};

  button {
    height: 16px;
    margin: 13px 9px;
    width: 16px;

    svg {
      color: #fff;
      fill: currentColor;
      height: 16px;
      width: 16px;

      &:hover {
        color: rgb(50, 152, 254);
        transition: fill 0.5s ease;
      }

      &:active {
        color: rgb(54, 116, 178);
        transition: none;
      }
    }

    &[title^="Up"] {
      margin-right: 8px;
      position: relative;
      right: -8px;
    }

    &[title="Recent locations"] {
      left: 56px;
      position: absolute;

      svg {
        stroke: currentColor;
        stroke-width: 3px;
        width: 6px;
      }
    }

    &:disabled {
      svg {
        color: rgb(140, 140, 140);

        &:hover,
        &:active {
          color: rgb(140, 140, 140);
        }
      }
    }
  }
`,S=r(13645),C=r(19682),T=(0,l.forwardRef)(((e,t)=>{let{hideSearch:r,id:i}=e;const{url:s,processes:{[i]:{url:c=""}}}=(0,d.z)(),u="/"===c?"":(0,p.basename)((0,p.dirname)(c)),{contextMenu:x}=(0,a.H)(),{canGoBack:b,canGoForward:m,history:v,moveHistory:k,position:T}=(0,C.Z)(c,i),{onContextMenuCapture:z}=(0,l.useMemo)((()=>x?.((()=>v.map(((e,t)=>({action:()=>k(t-T),checked:T===t,label:(0,p.basename)(e)||f.SP,primary:T===t})))))),[x,v,k,T]);return(0,n.jsxs)(y,{...(0,S.Z)(i),onDragOver:g.nK,onDrop:g.nK,children:[(0,n.jsx)(h.Z,{disabled:!b,onClick:()=>k(-1),...(0,g.PS)(b?`Back to ${(0,p.basename)(v[T-1])||f.SP}`:"Back"),children:(0,n.jsx)(o.Back,{})}),(0,n.jsx)(h.Z,{disabled:!m,onClick:()=>k(1),...(0,g.PS)(m?`Forward to ${(0,p.basename)(v[T+1])||f.SP}`:"Forward"),children:(0,n.jsx)(o.Forward,{})}),(0,n.jsx)(h.Z,{disabled:1===v.length,onClick:z,...(0,g.PS)("Recent locations"),children:(0,n.jsx)(o.Down,{})}),(0,n.jsx)(h.Z,{disabled:"/"===c,onClick:()=>s(i,(0,p.dirname)(c)),...(0,g.PS)("/"===c?"Up one level":`Up to "${""===u?f.SP:u}"`),children:(0,n.jsx)(o.Up,{})}),(0,n.jsx)(w,{ref:t,id:i}),!r&&(0,n.jsx)(j,{id:i})]})}))},50631:function(e,t,r){r.r(t),r.d(t,{Back:function(){return i},Down:function(){return l},Forward:function(){return s},Refresh:function(){return a},Search:function(){return u},Up:function(){return c}});var n=r(85893),o=r(67294);const i=()=>(0,n.jsx)("svg",{viewBox:"-8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 14v4H7.656l7.172 7.172L12 28 0 16 12 4l2.828 2.828L7.656 14H32z"})}),s=()=>(0,n.jsx)("svg",{viewBox:"8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m20 4 12 12-12 12-2.828-2.828L24.344 18H0v-4h24.344l-7.172-7.172L20 4z"})}),a=()=>(0,n.jsx)("svg",{viewBox:"-10 -13 52 52",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20.266.594q2.594.703 4.75 2.195t3.711 3.531 2.414 4.516T32 16q0 2.203-.57 4.25t-1.609 3.828-2.5 3.242-3.242 2.5-3.828 1.609-4.25.57-4.25-.57-3.828-1.609-3.242-2.5-2.5-3.242-1.609-3.82T.002 16q0-2.188.578-4.25t1.648-3.883T4.83 4.554t3.453-2.555H4.002v-2h8v8h-2V3.358q-1.828.875-3.305 2.195T4.174 8.522t-1.609 3.555-.563 3.922q0 1.922.5 3.711t1.414 3.344 2.195 2.836 2.836 2.195 3.336 1.414 3.719.5q1.922 0 3.711-.5t3.344-1.414 2.836-2.195 2.195-2.836 1.414-3.336.5-3.719q0-2.344-.758-4.516T27.127 7.53t-3.242-3.086-4.148-1.93l.531-1.922z"})}),l=e=>{let{flip:t}=e;const r=(0,o.useMemo)((()=>t?{transform:"scaleY(-1)",transition:"all 0.2s"}:void 0),[t]);return(0,n.jsx)("svg",{style:r,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m28.109 5.453 3.781 3.766L15.999 25.11.108 9.219l3.781-3.766 12.109 12.109L28.107 5.453z"})})},c=()=>{const e=(0,o.useMemo)((()=>({marginTop:"-1px"})),[]);return(0,n.jsx)("svg",{style:e,viewBox:"0 -7 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m16 0 12 12-2.828 2.828L18 7.656V32h-4V7.656l-7.172 7.172L4 12 16 0z"})})},u=()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"})})},26753:function(e,t,r){r.r(t);const n=r(14141).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "Working on it...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;t.default=n},19682:function(e,t,r){var n=r(56758),o=r(67294);t.Z=(e,t)=>{const{url:r}=(0,n.z)(),[i,s]=(0,o.useState)(e),[a,l]=(0,o.useState)((()=>[e])),[c,u]=(0,o.useState)(0),d=(0,o.useCallback)((e=>{const n=c+e;u(n),s(a[n]),r(t,a[n])}),[r,a,t,c]);return(0,o.useEffect)((()=>{e!==i&&(u(c+1),s(e),l([...a.slice(0,c+1),e]))}),[i,a,c,e]),{canGoBack:c>0,canGoForward:c<a.length-1,currentUrl:i,history:a,moveHistory:d,position:c}}},22957:function(e,t,r){r.d(t,{O9:function(){return c},Kk:function(){return h},Rx:function(){return x}});var n=r(26724),o=r(1864),i=r(67294),s=JSON.parse('{"I":[".cache",".json",".url"],"K":[".md",".txt",".whtml"]}'),a=r(64358),l=r(34254);const c=["/System/lunr/lunr.min.js"];let u=Object.create(null);const d=async(e,t)=>{if(window.lunr||await(0,l.mb)(c),!t&&!u.search){const e=await fetch("/.index/search.lunr.json",a.P8);try{u=window.lunr?.Index.load(JSON.parse(await e.text()))}catch{}}const r=t??u;let n=[];try{n=r.search?.(e),0===n?.length&&(n=r.search?.(`${e}*`))}catch{}return n??[]},p=async(e,t)=>{const r=t?._getFs("/")?.fs,n=r?.getOverlayedFileSystems(),i=n?.writable,a=Object.keys(i?._cache?.map??{}).filter((e=>{const t=(0,l.RT)(e);return Boolean(t)&&!s.I.includes(t)})),c=await Promise.all(a.map((async t=>({name:(0,o.basename)(t,(0,o.extname)(t)),path:t,text:s.K.includes((0,l.RT)(t))?(await e(t)).toString():void 0})))),u=window.lunr?.((function(){this.ref("path"),this.field("name"),this.field("text"),c.forEach((e=>this.add(e)))}));return window.lunr?.Index.load(u.toJSON())},h=async(e,t,r)=>{const n=await d(e),o=await p(t,r);return[...n,...await d(e,o)].sort(((e,t)=>t.score-e.score))},x=e=>{const[t,r]=(0,i.useState)([]),{readFile:o,rootFs:s}=(0,n.o)();return(0,i.useEffect)((()=>{(async()=>{e.length>0?(window.lunr||await(0,l.mb)(c),d(e).then(r),p(o,s).then((t=>d(e,t).then((e=>r((t=>[...t,...e].sort(((e,t)=>t.score-e.score))))))))):r([])})()}),[o,s,e]),t}}}]);