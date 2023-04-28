"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7557],{31404:function(e,t,n){var o=n(85893),i=n(55785),a=n(56758),r=n(5152),s=n.n(r),l=n(67294);const c=s()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}});t.Z=e=>{let{id:t,useHook:n,StyledComponent:r,children:s}=e;const{processes:{[t]:{url:d=""}={}}}=(0,a.z)(),u=(0,l.useRef)(null),[m,p]=(0,l.useState)(!0),f=(0,l.useMemo)((()=>({contain:"strict",visibility:m?"hidden":"visible"})),[m]);return n(t,d,u,p,m),(0,o.jsxs)(o.Fragment,{children:[m&&(0,o.jsx)(c,{}),(0,o.jsx)(r,{ref:u,style:f,...(0,i.Z)({id:t}),children:s})]})}},7557:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var o=n(85893),i=n(31404),a=n(14141).ZP.div.withConfig({componentId:"sc-7a94dddb-0"})`
  height: 100%;

  [role="application"] {
    border-radius: 0;
    height: 100% !important;

    button:disabled {
      pointer-events: none;
    }

    &[aria-disabled="true"] {
      .tox-editor-header {
        height: 39px;
        overflow: hidden;
        padding: 0;
        position: relative;

        &::before {
          background-color: rgba(255, 255, 255, 80%);
          content: "Click to switch to design mode.";
          cursor: pointer;
          display: flex;
          height: calc(100% - 1px);
          place-content: center;
          place-items: center;
          position: absolute;
          text-shadow: 0 0 25px rgba(0, 0, 0, 80%);
          width: 100%;
          z-index: 1;
        }

        .tox-toolbar-overlord {
          display: none;
        }
      }
    }
  }
`,r=n(64358);const s={base_url:"/Program Files/TinyMCE/",branding:!1,draggable_modal:!0,image_advtab:!0,plugins:"\n  code help image link lists media\n  preview save searchreplace table wordcount",promotion:!1,suffix:".min",toolbar:"\n  save undo redo | formatselect | bold italic underline | forecolor backcolor |\n  alignleft aligncenter alignright | bullist outdent indent | code | help"},l=`${r.Ll}/New Rich Text Document.whtml`,c=e=>e?.mode.isReadOnly()||!e?.getContent();var d=n(87426),u=n(55785),m=n(7459),p=n(26724),f=n(56758),b=n(62065),h=n(1864),v=n(67294),w=n(34254),g=(e,t,o,i)=>{const{open:a,processes:{[e]:{libs:g=[]}={}}={},url:y}=(0,f.z)(),[x,k]=(0,v.useState)(),{prependFileToTitle:C}=(0,m.Z)(e),{readFile:$,stat:E,updateFolder:L,writeFile:T}=(0,p.o)(),{onDragOver:D,onDrop:F}=(0,u.Z)({id:e}),{setForegroundId:S}=(0,b.k)(),W=(0,v.useCallback)((async e=>{const t=new Date((0,d.GA)(e,await E(e))),n=new Intl.DateTimeFormat(r.ZW,{dateStyle:"medium"}).format(t);C(`${(0,h.basename)(e,(0,h.extname)(e))} (${n})`)}),[C,E]),R=(0,v.useCallback)((()=>{const e=o.current?.querySelector("iframe");e?.contentWindow&&[...e.contentWindow.document.links].forEach((e=>e.addEventListener("click",(t=>{const n=e.dataset.mceHref||"";if(""===(0,h.relative)(n.startsWith("/")?n:`/${n}`,e.pathname)&&x?.mode.isReadOnly()){(0,w.nK)(t);const n=(0,d.Wd)((0,w.RT)(e.pathname));n&&a(n,{url:e.pathname})}}))))}),[o,x?.mode,a]),Z=(0,v.useCallback)((async()=>{if(x){const e=await $(t);if(e.length>0&&(e=>{const t=e.editorContainer?.querySelector(".tox-editor-header");t instanceof HTMLDivElement&&t.addEventListener("click",(()=>{t.removeAttribute("title"),e.mode.set("design")}),r.K7),e.mode.set("readonly")})(x),".rtf"===(0,w.RT)(t)){const{RTFJS:t}=await Promise.all([n.e(8705),n.e(3131)]).then(n.bind(n,83131)),o=new t.Document(e),i=await o.render();x.setContent(i.map((e=>e.outerHTML)).join(""))}else x.setContent(e.toString());R(),W(t)}}),[x,R,$,W,t]);(0,v.useEffect)((()=>{x&&x.options.set("save_onsavecallback",(async()=>{const e={closeButton:!0,text:"Successfully saved.",timeout:5e3,type:"success"},n=t||l;try{await T(".rtf"===(0,w.RT)(n)?n.replace(".rtf",".whtml"):n,x.getContent(),!0),L((0,h.dirname)(n),(0,h.basename)(n)),W(n)}catch{e.text="Error occurred while saving.",e.type="error"}x.notificationManager.open(e)}))}),[x,L,W,t,T]),(0,v.useEffect)((()=>{x||(0,w.mb)(g).then((()=>{window.tinymce&&o.current&&(window.tinymce.remove(),window.tinymce.init({selector:`.${[...o.current.classList].join(".")} div`,setup:t=>{t.on("ExecCommand",(t=>{let{command:n}=t;"mceNewDocument"===n&&(y(e,""),C(""))}))},...s}).then((t=>{let[n]=t;const a=o.current?.querySelector("iframe");a?.contentWindow&&(a.contentWindow.addEventListener("dragover",(e=>{c(n)&&D(e)})),a.contentWindow.addEventListener("drop",(e=>{c(n)&&F(e)})),a.contentWindow.addEventListener("blur",(()=>S((t=>t===e?"":t)))),a.contentWindow.addEventListener("focus",(()=>S(e)))),k(n),i(!1)})))}))}),[o,x,e,g,D,F,C,S,i,y]),(0,v.useEffect)((()=>{t&&x&&Z()}),[x,Z,$,t]),(0,v.useEffect)((()=>()=>{window.setTimeout((()=>x?.destroy()),0)}),[x])},y=e=>{let{id:t}=e;return(0,o.jsx)(i.Z,{StyledComponent:a,id:t,useHook:g,children:(0,o.jsx)("div",{})})}},55785:function(e,t,n){var o=n(62727),i=n(6529),a=n(42151),r=n(26724),s=n(56758),l=n(62065),c=n(1864),d=n(67294),u=n(64358),m=n(34254);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:p,onDragLeave:f,onDragOver:b,updatePositions:h}=e;const{url:v}=(0,s.z)(),{iconPositions:w,sortOrders:g,setIconPositions:y}=(0,l.k)(),{mkdirRecursive:x,updateFolder:k,writeFile:C}=(0,r.o)(),$=(0,d.useCallback)((async(e,t,n)=>{if(p)if(t){const o=(0,c.join)(u.Ll,e);await x(u.Ll),await C(o,t,!0)&&(n===a.v.UPDATE_URL&&v(p,o),k(u.Ll,e))}else n===a.v.UPDATE_URL&&v(p,e)}),[p,x,k,v,C]),{openTransferDialog:E}=(0,o.Z)();return{onDragLeave:f,onDragOver:e=>{b?.(e),(0,m.nK)(e)},onDrop:e=>{if(h&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,i.p4)(e);if(0===t.length&&""===o)return;const a={x:e.clientX,y:e.clientY};let r=[];if(o){try{r=JSON.parse(o)}catch{}if(!Array.isArray(r))return;const[e]=r;if(!e)return;if(e.startsWith(n)&&(0,c.basename)(e)===(0,c.relative)(n,e))return;r=r.map((e=>(0,c.basename)(e)))}else r=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,o="";do{t+=1,o=`${n}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(w[o]);return(0,c.basename)(o)})),(0,m.vi)(n,e.target,w,g,a,r,y)}(0,i.WG)(e,t||$,n,E,Boolean(p))}}}},7459:function(e,t,n){var o=n(56758),i=n(25804),a=n(67294),r=n(64358);t.Z=e=>{const{title:t}=(0,o.z)(),[n]=e.split(r.CC),{title:s}=i.Z[n]||{};return{appendFileToTitle:(0,a.useCallback)(((n,o)=>{const i=n?` - ${n}${o?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,a.useCallback)(((n,o)=>{const i=n?`${o?`${r.xy} `:""}${n} - `:"";t(e,`${i}${s}`)}),[e,s,t])}}}}]);