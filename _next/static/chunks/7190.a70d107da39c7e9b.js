"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7190],{87190:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var n=o(85893),r=o(26724),i=o(56758),s=o(25804),l=o(19682),a=o(1864),c=o(67294),d=o(30663),p=o(34254);const g={referrerPolicy:"no-referrer",sandbox:"allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"},u=()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})}),h=()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})});var x=o(14141).ZP.div.withConfig({componentId:"sc-b4ef732f-0"})`
  iframe {
    border: 0;
    height: calc(100% - 36px - 33px);
    width: 100%;
  }

  nav {
    background-color: rgb(87, 87, 87);
    display: flex;
    padding: 4px 0;
    place-content: center;
    place-items: center;

    div {
      display: flex;
      justify-content: space-around;
      min-width: 102px;
      padding-left: 6px;
      width: 102px;
    }

    button {
      border-radius: 50%;
      display: flex;
      height: 28px;
      place-content: center;
      place-items: center;
      transition: background 0.2s ease-in-out;
      width: 28px;

      svg {
        fill: rgb(240, 240, 240);
        height: 22px;
        width: 22px;
      }

      &:hover {
        background-color: rgb(103, 103, 103);
      }

      &:active {
        background-color: rgb(110, 110, 110);
      }

      &:disabled {
        background-color: inherit;

        svg {
          fill: rgb(152, 152, 152);
        }
      }
    }

    &:not(:first-child) {
      border-bottom: 1px solid rgb(118, 115, 118);
      height: 33px;
      justify-content: left;
      padding: 0 8px;

      button {
        margin-bottom: 4px;
        margin-right: 4px;
      }
    }

    input {
      background-color: rgb(64, 62, 65);
      border-radius: 18px;
      color: rgb(255, 255, 255);
      font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
      font-size: 13px;
      height: 28px;
      letter-spacing: 0.2px;
      line-height: 26px;
      margin: 0 6px;
      padding: 0 13px;
      width: 100%;

      &:focus {
        outline: 2px solid rgb(138, 180, 248);
      }
    }
  }
`,f=e=>{let{id:t}=e;const{icon:o,processes:{[t]:f}}=(0,i.z)(),{url:b=""}=f||{},m=b,{history:w,position:v}=(0,l.Z)(m,t),{exists:k,readFile:y}=(0,r.o)(),j=(0,c.useRef)(null),[C,S]=(0,c.useState)(!1),[_,z]=(0,c.useState)(""),[E,Z]=(0,c.useState)(""),B=(0,c.useCallback)((async e=>{const{contentWindow:n}=j.current||{};if(n?.location){const n=".eval"===(0,a.extname)(e).toLowerCase()&&await k(e);if(S(!0),z(""),n){const t=(await y(e)).toString();z(`<html><body></body><script>{\n  const terminal = document.createElement('pre')\n  document.body.appendChild(terminal)\n  const _log = console.log\n  console.log = log\n\n  function log (message) {\n    _log(message)\n    terminal.innerText += \`\${message}\n\`\n  }\n}<\/script><script>${t}<\/script></html>`)}o(t,s.Z.Browser.icon)}}),[k,t,y,o]),F=(0,c.useMemo)((()=>({backgroundColor:_?"#fff":"initial"})),[_]);return(0,c.useEffect)((()=>{f&&w[v]!==E&&(B(w[v]),Z(w[v]))}),[E,w,v,f,B]),(0,n.jsxs)(x,{children:[(0,n.jsx)("nav",{children:(0,n.jsx)("div",{children:(0,n.jsx)(d.Z,{disabled:C,onClick:()=>B(w[v]),...(0,p.PS)("Reload this page"),children:C?(0,n.jsx)(h,{}):(0,n.jsx)(u,{})})})}),(0,n.jsx)("iframe",{ref:j,onLoad:()=>S(!1),srcDoc:_||void 0,style:F,title:t,...g})]})}},19682:function(e,t,o){var n=o(56758),r=o(67294);t.Z=(e,t)=>{const{url:o}=(0,n.z)(),[i,s]=(0,r.useState)(e),[l,a]=(0,r.useState)((()=>[e])),[c,d]=(0,r.useState)(0),p=(0,r.useCallback)((e=>{const n=c+e;d(n),s(l[n]),o(t,l[n])}),[o,l,t,c]);return(0,r.useEffect)((()=>{e!==i&&(d(c+1),s(e),a([...l.slice(0,c+1),e]))}),[i,l,c,e]),{canGoBack:c>0,canGoForward:c<l.length-1,currentUrl:i,history:l,moveHistory:p,position:c}}}}]);