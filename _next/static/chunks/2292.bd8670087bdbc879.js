"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2292,7023],{42292:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(85893),i=n(14141).ZP.div.withConfig({componentId:"sc-9305a510-0"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  place-content: center;
  place-items: center;

  &::after {
    align-items: center;
    background-color: rgba(0, 0, 0, 30%);
    color: #fff;
    content: "No WebGPU Support";
    display: ${e=>{let{$hasWebGPU:t}=e;return t?"none":"flex"}};
    font-size: 26px;
    font-weight: bold;
    inset: 0;
    justify-content: center;
    position: absolute;
    text-shadow: 2px 2px 4px #000;
  }

  canvas {
    aspect-ratio: 1 / 1;
    background-color: #fff;
    border: 2px solid rgb(52, 0, 104);
    border-radius: 10px;
    box-shadow: 0 0 4px #888;
    max-height: 512px;
    max-width: 512px;
    width: calc(100% - 32px);
  }

  nav {
    display: flex;
    gap: 5px;
    max-width: 512px;
    place-content: space-between;
    width: calc(100% - 32px);

    > div {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      gap: 3px;
      width: 512px;

      input {
        border: 2px solid rgb(52, 0, 104);
        border-radius: 5px;
        font-size: 12px;
        height: 22px;
        padding: 5px;
      }

      div {
        background-color: #fff;
        border: 2px solid rgb(52, 0, 104);
        border-radius: 5px;
        height: 47px;
        line-height: 43px;
        max-width: 422px;
        overflow: hidden;
        padding: 0 5px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    button {
      background-color: rgb(52, 0, 104);
      border: 2px solid rgb(52, 0, 104);
      border-radius: 5px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      padding: 5px 10px;

      &:active {
        background-color: #fff;
        color: rgb(52, 0, 104);
      }
    }
  }
`,a=n(27023),o=n(21638),s=n(36995),l=n(67294);const c=()=>new Worker(n.tu(new URL(n.p+n.u(6688),n.b)),{name:"Stable Diffusion"});var u=()=>{const e=(0,l.useRef)(null),t=(0,l.useRef)(null),n=(0,l.useRef)(null),u=(0,l.useRef)(!1),d=(0,l.useMemo)((()=>"OffscreenCanvas"in window),[]),f=(0,s.Z)(c),p=(0,l.useRef)(!1),[b,g]=(0,l.useState)(""),x=(0,l.useCallback)(((e,t)=>{g(e&&t?`${e} ${t}`:"")}),[]),h=(0,l.useCallback)((async()=>{if(e.current&&t.current&&n.current){const r={prompts:[[t.current.value,n.current.value]]};if(d&&f.current)if(p.current)f.current.postMessage({config:r});else{const t=e.current.transferControlToOffscreen();p.current=!0,f.current.postMessage({canvas:t,config:r},[t]),f.current.addEventListener("message",(e=>{let{data:t}=e;x(t.type,t.message)}))}else window.tvmjsGlobalEnv.logger=x,await(0,a.runStableDiffusion)(r,e.current),x("","");u.current=!0}}),[f,x,d]),v=(0,o.Z)();return(0,r.jsxs)(i,{$hasWebGPU:v,children:[(0,r.jsx)("canvas",{ref:e,height:512,width:512}),(0,r.jsxs)("nav",{children:[(0,r.jsxs)("div",{children:[b&&(0,r.jsx)("div",{children:b}),(0,r.jsx)("input",{ref:t,defaultValue:"A photo of an astronaut riding a elephant on jupiter",placeholder:"Input Prompt",style:{display:b?"none":"block"},type:"text"}),(0,r.jsx)("input",{ref:n,placeholder:"Negative Prompt",style:{display:b?"none":"block"},type:"text"})]}),(0,r.jsx)("button",{disabled:!!b,onClick:h,type:"button",children:"Generate"})]})]})}},27023:function(e,t,n){n.r(t),n.d(t,{libs:function(){return i},runStableDiffusion:function(){return a}});var r=n(34254);const i=["/System/tvm/tvmjs_runtime.wasi.js","/System/tvm/tvmjs.bundle.js","/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js","/Program Files/StableDiffusion/stable_diffusion.js"],a=async function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2]||(window.tvmjsGlobalEnv=window.tvmjsGlobalEnv||{},await(0,r.mb)(i)),globalThis.tvmjsGlobalEnv.getTokenizer=async()=>(globalThis.tvmjsGlobalEnv.initialized||await globalThis.Tokenizer.init(),globalThis.tvmjsGlobalEnv.initialized=!0,new globalThis.Tokenizer.TokenizerWasm(await(await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())),globalThis.tvmjsGlobalEnv.canvas=globalThis.tvmjsGlobalEnv.canvas||t;const{prompts:n}=e;globalThis.tvmjsGlobalEnv.prompts=n?.length?n:[["A photo of an astronaut riding a horse on mars",""]],await globalThis.tvmjsGlobalEnv.asyncOnGenerate()};t.default=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;const n=document.createElement("canvas");n.height=window.innerHeight,n.width=window.innerWidth,e.append(n),a(t,n)}},21638:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);const i=()=>{const[e,t]=(0,r.useState)(),n=(0,r.useCallback)((async()=>t(await(async()=>{if("undefined"==typeof navigator)return!1;if(!("gpu"in navigator))return!1;const e=await navigator.gpu.requestAdapter();return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,r.useEffect)((()=>{n()}),[n]),e}},36995:function(e,t,n){var r=n(67294);t.Z=(e,t,n)=>{const i=(0,r.useRef)();return(0,r.useEffect)((()=>(e&&!i.current&&(i.current=e(n),t&&i.current.addEventListener("message",t,{passive:!0}),i.current.postMessage("init")),()=>{i.current?.terminate(),i.current=void 0})),[t,n,e]),i}}}]);