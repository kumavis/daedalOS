"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3339],{80807:function(e,t,n){const o=n(14141).ZP.div.withConfig({componentId:"sc-8ce3e3c2-0"})`
  iframe {
    background-color: ${e=>{let{$hasSrcDoc:t}=e;return t?"#fff":"initial"}};
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
`;t.Z=o},63339:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var o=n(85893),r=n(26724),i=n(56758),s=n(25804),c=n(19682),a=n(1864),l=n(67294),d=n(30663),p=n(34254),g=n(80807);const u=()=>(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})}),h=()=>(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}),x={referrerPolicy:"no-referrer",sandbox:"allow-same-origin allow-scripts"};var f=e=>{let{id:t}=e;const{icon:n,processes:{[t]:f}}=(0,i.z)(),{url:b=""}=f||{},m=b,{history:w,position:v}=(0,c.Z)(m,t),{exists:k,readFile:y}=(0,r.o)(),j=(0,l.useRef)(null),[S,C]=(0,l.useState)(!1),[Z,$]=(0,l.useState)(""),[_,z]=(0,l.useState)(""),B=(0,l.useCallback)((async e=>{const{contentWindow:o}=j.current||{};if(o?.location){const o=".eval"===(0,a.extname)(e).toLowerCase()&&await k(e);if(C(!0),$(""),o){const t=(await y(e)).toString();$(`<html><body></body><script>{\n  const terminal = document.createElement('pre')\n  document.body.appendChild(terminal)\n  const _log = console.log\n  console.log = log\n\n  function log (message) {\n    _log(message)\n    terminal.innerText += \`\${message}\n\`\n  }\n}<\/script><script>${t}<\/script></html>`)}n(t,s.Z.Browser.icon)}}),[k,t,y,n]),E=(0,l.useMemo)((()=>({backgroundColor:Z?"#fff":"initial"})),[Z]);return(0,l.useEffect)((()=>{f&&w[v]!==_&&(B(w[v]),z(w[v]))}),[_,w,v,f,B]),(0,o.jsxs)(g.Z,{$hasSrcDoc:Boolean(Z),children:[(0,o.jsx)("nav",{children:(0,o.jsx)("div",{children:(0,o.jsx)(d.Z,{disabled:S,onClick:()=>B(w[v]),...(0,p.PS)("Reload this page"),children:S?(0,o.jsx)(h,{}):(0,o.jsx)(u,{})})})}),(0,o.jsx)("iframe",{ref:j,onLoad:()=>C(!1),srcDoc:Z||void 0,style:E,title:t,...x})]})}},19682:function(e,t,n){var o=n(56758),r=n(67294);t.Z=(e,t)=>{const{url:n}=(0,o.z)(),[i,s]=(0,r.useState)(e),[c,a]=(0,r.useState)((()=>[e])),[l,d]=(0,r.useState)(0),p=(0,r.useCallback)((e=>{const o=l+e;d(o),s(c[o]),n(t,c[o])}),[n,c,t,l]);return(0,r.useEffect)((()=>{e!==i&&(d(l+1),s(e),a([...c.slice(0,l+1),e]))}),[i,c,l,e]),{canGoBack:l>0,canGoForward:l<c.length-1,currentUrl:i,history:c,moveHistory:p,position:l}}}}]);