"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9824],{80807:function(e,n,t){const o=t(14141).ZP.div.withConfig({componentId:"sc-8ce3e3c2-0"})`
  iframe {
    background-color: ${e=>{let{$hasSrcDoc:n}=e;return n?"#fff":"initial"}};
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
      font-family: ${e=>{let{theme:n}=e;return n.formats.systemFont}};
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
`;n.Z=o},59824:function(e,n,t){t.r(n),t.d(n,{default:function(){return x},defaultRuntimeConfig:function(){return h}});var o=t(85893),r=t(26724),i=t(56758),s=t(25804),c=t(19682),a=t(67294),l=t(30663),d=t(34254);var g=t(80807);const p=()=>(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})}),u=()=>(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}),f={referrerPolicy:"no-referrer",sandbox:"allow-same-origin allow-scripts"},h={libs:[],runtime:"{\n  const terminal = document.createElement('pre');\n  document.body.appendChild(terminal);\n  const _console = { ...console };\n  const createLogger = (type) => {\n    if (!(type in console)) {\n      throw new Error(`Invalid console type: ${type}`);\n    }\n    return (...args) => {\n      _console[type](...args);\n      terminal.innerText += `${type}: ${args.join()}\n`;\n    }\n  }\n  console.log = createLogger('log');\n  console.warn = createLogger('warn');\n  console.error = createLogger('error');\n  console.info = createLogger('info');\n  console.debug = createLogger('debug');\n  console.dir = createLogger('dir');\n}",transformInputSource:e=>e};var x=e=>{let{id:n,runtimeConfig:t=h,onMessage:x}=e;(e=>{const n=(0,a.useCallback)((n=>{const{origin:t,source:o}=n;"function"==typeof e&&e(n,(e=>{!function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";n?.postMessage(e,{targetOrigin:t})}(e,o,t)}))}),[e]);(0,a.useEffect)((()=>(globalThis.addEventListener("message",n),()=>globalThis.removeEventListener("message",n))),[n])})(x);const{icon:b,processes:{[n]:m}}=(0,i.z)(),w=m.url||"",{history:v,position:y}=(0,c.Z)(w,n),{exists:k,readFile:j}=(0,r.o)(),S=(0,a.useRef)(null),[C,L]=(0,a.useState)(!1),[$,E]=(0,a.useState)(""),[Z,_]=(0,a.useState)(""),z=(0,a.useCallback)((async e=>{const{contentWindow:o}=S.current||{};if(o?.location){const o=await k(e);if(L(!0),E(""),o){const n=(await j(e)).toString(),o=t.transformInputSource(n),r=t.runtime,i=Array.prototype.map.call(t.libs,(e=>`<script src="${e}"><\/script>`)).join("\n");E(`\n          <html>\n            <head>\n            ${i}\n            </head>\n            <body></body>\n            <script>${r}<\/script>\n            <script>${o}<\/script>\n          </html>`)}b(n,s.Z.Browser.icon)}}),[k,n,j,b,t]),B=(0,a.useMemo)((()=>({backgroundColor:$?"#fff":"initial"})),[$]);return(0,a.useEffect)((()=>{m&&v[y]!==Z&&(z(v[y]),_(v[y]))}),[Z,v,y,m,z]),(0,o.jsxs)(g.Z,{$hasSrcDoc:Boolean($),children:[(0,o.jsx)("nav",{children:(0,o.jsx)("div",{children:(0,o.jsx)(l.Z,{disabled:C,onClick:()=>z(v[y]),...(0,d.PS)("Reload this page"),children:C?(0,o.jsx)(u,{}):(0,o.jsx)(p,{})})})}),(0,o.jsx)("iframe",{ref:S,onLoad:()=>L(!1),srcDoc:$||void 0,style:B,title:n,...f})]})}},19682:function(e,n,t){var o=t(56758),r=t(67294);n.Z=(e,n)=>{const{url:t}=(0,o.z)(),[i,s]=(0,r.useState)(e),[c,a]=(0,r.useState)((()=>[e])),[l,d]=(0,r.useState)(0),g=(0,r.useCallback)((e=>{const o=l+e;d(o),s(c[o]),t(n,c[o])}),[t,c,n,l]);return(0,r.useEffect)((()=>{e!==i&&(d(l+1),s(e),a([...c.slice(0,l+1),e]))}),[i,c,l,e]),{canGoBack:l>0,canGoForward:l<c.length-1,currentUrl:i,history:c,moveHistory:g,position:l}}}}]);