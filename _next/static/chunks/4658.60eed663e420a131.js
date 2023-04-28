"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4658,6753],{34658:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(85893),i=n(14141).ZP.div.withConfig({componentId:"sc-f808b011-0"})`
  iframe {
    opacity: ${e=>{let{$loaded:t}=e;return t?"100%":"0%"}};
    transition: opacity 0.25s ease-in;
  }

  .loading {
    &::before {
      color: #fff;
      font-weight: 500;
      mix-blend-mode: normal;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 50%);
    }
  }
`,o=n(26753),r=n(55785),s=n(7459),l=n(26724),c=n(56758),f=n(62065),d=n(1864),u=n(67294),p=n(64358),m=n(48764).Buffer,w=e=>{let{id:t}=e;const{closeWithTransition:n,processes:{[t]:{libs:[w=""]=[],url:g=""}={}}={}}=(0,c.z)(),{createPath:y,exists:b,readFile:h,updateFolder:v,writeFile:k}=(0,l.o)(),{foregroundId:x,setForegroundId:$,setWallpaper:F}=(0,f.k)(),L=(0,u.useRef)(null),[D,T]=(0,u.useState)(!1),[E,_]=(0,u.useState)(),{prependFileToTitle:C}=(0,s.Z)(t),B=(0,u.useCallback)((e=>t=>{const n=(0,d.join)(p.dA,"wallpaper.png");t.toBlob((async t=>{await k(n,m.from(await(t?.arrayBuffer())),!0),F(n,e)}))}),[F,k]),{onDragOver:W,onDrop:H}=(0,r.Z)({id:t});return(0,u.useEffect)((()=>{C("Untitled")}),[C]),(0,u.useEffect)((()=>{x!==t&&L.current?.contentWindow?.addEventListener("click",(()=>$(t)),p.K7)}),[x,t,$]),(0,u.useEffect)((()=>{const{contentWindow:e}=L.current||{};if(D&&e&&!E){const a=e,i=a.systemHooks.showOpenFileDialog,o=a.file_new;_(a),a.file_new=()=>{C("Untitled"),o()},a.systemHooks.setWallpaperTiled=B("tile"),a.systemHooks.setWallpaperCentered=B("center"),a.systemHooks.showOpenFileDialog=async e=>{const{file:t}=await i(e);return C(t.name),{file:t}},a.close=()=>n(t),a.storage_quota_exceeded=()=>{},a.systemHooks.showSaveFileDialog=async e=>{let{defaultFileName:t,getBlob:n}=e;return v(p.Ll,await y(`${t}.png`,p.Ll,m.from(await(await n("image/png")).arrayBuffer())))},a.systemHooks.writeBlobToHandle=async(e,t)=>{await b(e)&&(await k(e,m.from(await t.arrayBuffer()),!0),v((0,d.dirname)(e),(0,d.basename)(e)))},e.addEventListener("dragover",W),e.addEventListener("drop",H)}}),[n,y,b,t,E,D,W,H,C,B,v,k]),(0,u.useEffect)((()=>{E&&g&&h(g).then((e=>{E.open_from_file(new File([e],g),g),C((0,d.basename)(g))}))}),[E,C,h,g]),(0,a.jsxs)(i,{$loaded:D,children:[!D&&(0,a.jsx)(o.default,{className:"loading"}),(0,a.jsx)("iframe",{ref:L,height:"100%",id:"jspaint-iframe",onLoad:()=>T(!0),src:w,title:t,width:"100%",...p.v0})]})}},26753:function(e,t,n){n.r(t);const a=n(14141).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
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
`;t.default=a},55785:function(e,t,n){var a=n(62727),i=n(6529),o=n(42151),r=n(26724),s=n(56758),l=n(62065),c=n(1864),f=n(67294),d=n(64358),u=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:m,onDragOver:w,updatePositions:g}=e;const{url:y}=(0,s.z)(),{iconPositions:b,sortOrders:h,setIconPositions:v}=(0,l.k)(),{mkdirRecursive:k,updateFolder:x,writeFile:$}=(0,r.o)(),F=(0,f.useCallback)((async(e,t,n)=>{if(p)if(t){const a=(0,c.join)(d.Ll,e);await k(d.Ll),await $(a,t,!0)&&(n===o.v.UPDATE_URL&&y(p,a),x(d.Ll,e))}else n===o.v.UPDATE_URL&&y(p,e)}),[p,k,x,y,$]),{openTransferDialog:L}=(0,a.Z)();return{onDragLeave:m,onDragOver:e=>{w?.(e),(0,u.nK)(e)},onDrop:e=>{if(g&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,i.p4)(e);if(0===t.length&&""===a)return;const o={x:e.clientX,y:e.clientY};let r=[];if(a){try{r=JSON.parse(a)}catch{}if(!Array.isArray(r))return;const[e]=r;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;r=r.map((e=>(0,c.basename)(e)))}else r=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(b[a]);return(0,c.basename)(a)})),(0,u.vi)(n,e.target,b,h,o,r,v)}(0,i.WG)(e,t||F,n,L,Boolean(p))}}}},7459:function(e,t,n){var a=n(56758),i=n(25804),o=n(67294),r=n(64358);t.Z=e=>{const{title:t}=(0,a.z)(),[n]=e.split(r.CC),{title:s}=i.Z[n]||{};return{appendFileToTitle:(0,o.useCallback)(((n,a)=>{const i=n?` - ${n}${a?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,o.useCallback)(((n,a)=>{const i=n?`${a?`${r.xy} `:""}${n} - `:"";t(e,`${i}${s}`)}),[e,s,t])}}}}]);