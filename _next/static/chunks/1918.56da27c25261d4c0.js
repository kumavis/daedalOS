"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1918],{21918:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var n=r(85893),a=r(64358);const o=`${a.sC}/AI Images`,i="0 0.5px 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",s={"/caption":{action:"CAPTIONING",icon:"📝",label:"Captioning"},"/classify":{action:"CLASSIFYING",icon:"🏷️",label:"Classifying"},"/draw":{action:"DRAWING",icon:"🎨",label:"Drawing"},"/summarize":{action:"SUMMARY",icon:"📋",label:"Summarizing"},"/translate":{action:"TRANSLATION",icon:"🌐",label:"Translating"},"/wallpaper":{action:"DRAWING",icon:"🖼️",label:"Creating Wallpaper"}},l={401:"Valid API key required.",404:"Model not found.",429:"Rate limit reached."},c=()=>{const e=Math.random();let t=150;return e<.3?t=30:e<.6?t=37.5:e<.9&&(t=50),Math.random()*(t-1+1)+1},u=()=>(0,n.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"})});var p=r(14141),d=r(38060),g=p.ZP.div.withConfig({componentId:"sc-313c4fce-0"})`
  background-color: rgb(68, 70, 84);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ul {
    ${(0,d.Z)(a.BQ)};

    height: 100%;
    overflow-y: scroll;
    padding-bottom: 84px;
    position: relative;
  }
`,b=p.ZP.li.withConfig({componentId:"sc-be59d8ad-0"})`
  padding-bottom: 15px;

  figure {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    padding-left: 15px;

    figcaption {
      color: rgba(236, 236, 241);
      padding-left: 5px;

      b {
        font-weight: 600;
      }
    }
  }
`,m=p.ZP.div.withConfig({componentId:"sc-10a9a179-0"})`
  align-items: flex-end;
  background-color: rgb(52, 53, 65);
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  right: ${a.BQ}px;

  .status {
    background-color: rgb(52, 53, 65);
    border-top-right-radius: 5px;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    max-width: 95%;
    overflow: hidden;
    padding: 5px 10px;
    position: absolute;
    text-overflow: ellipsis;
    top: -26px;
    white-space: nowrap;
    width: fit-content;
  }

  textarea {
    background-color: rgb(64, 65, 79);
    border: 5px solid rgb(64, 65, 79);
    border-radius: 24px;
    box-shadow: ${i};
    color: #fff;
    font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
    font-size: 16px;
    height: 40px;
    line-height: 20px;
    margin: 22px;
    overflow: hidden;
    padding: 4px 40px 4px 16px;
    resize: none;
    width: 100%;

    ::placeholder {
      color: rgba(200, 200, 200, 75%);
    }
  }

  button {
    bottom: 25px;
    cursor: pointer;
    opacity: ${e=>{let{$hideSend:t}=e;return t?"0%":"100%"}};
    pointer-events: ${e=>{let{$hideSend:t}=e;return t?"none":"all"}};
    position: absolute;
    right: 28px;
    transition: opacity 0.1s ease-in-out;
    width: min-content;

    &:hover {
      background-color: rgb(52, 53, 65);
      border-radius: 50%;
    }

    svg {
      color: rgb(0, 132, 255);
      margin: 8px 8px 3px 6px;
      pointer-events: none;
      width: 20px;
    }
  }
`,h=p.ZP.span.withConfig({componentId:"sc-3590d550-0"})`
  height: 32px;
  opacity: ${e=>{let{$showLoading:t}=e;return t?"100%":"0%"}};
  position: absolute;
  right: 24px;
  top: 18px;
  transition: opacity 0.1s ease-in-out;
  width: 32px;

  &::after {
    animation: ellipsis steps(4, end) 900ms infinite;
    color: rgb(142, 142, 160);
    content: "";
    font-size: 25px;
    letter-spacing: 0.5px;
  }

  @keyframes ellipsis {
    0% {
      content: ".";
    }
    50% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }
`,f=p.ZP.li.withConfig({componentId:"sc-68679167-0"})`
  background-size: cover;
  border-radius: 18px;
  box-shadow: ${i};
  cursor: ${e=>{let{$image:t}=e;return t?void 0:"text"}};
  font-size: 16px;
  height: ${e=>{let{$image:t}=e;return t?"256px":void 0}};
  line-height: 20px;
  margin: 20px;
  max-width: calc(100% - 40px);
  overflow-wrap: break-word;
  padding: 10px 15px;
  user-select: text;
  white-space: break-spaces;
  width: ${e=>{let{$image:t}=e;return t?"256px":"max-content"}};

  ${e=>{let{$image:t,$type:r}=e;return"assistant"===r&&p.iv`
      background: ${t?`url(${t})`:"linear-gradient(90deg, rgb(248, 249, 253), rgb(245, 248, 253))"};
      background-size: contain;
      color: #000;
      margin-left: 56px;
      margin-right: auto;
      max-width: calc(100% - 78px);
      position: relative;

      &::before {
        background-color: black;
        background-image: url("/favicon.ico");
        background-size: contain;
        border-radius: 50%;
        content: "";
        height: 31px;
        left: -40px;
        position: absolute;
        top: 9px;
        width: 31px;
      }

      .cursor {
        display: contents;
        font-size: 14px;
      }

      > span {
        cursor: text;
        display: flex;
        flex-direction: column;
        gap: 10px;
        user-select: text;

        code {
          background-color: rgb(25, 25, 25);
          border-radius: 6px;
          color: rgb(250, 250, 250);
          cursor: text;
          font-size: 12px;
          padding: 2px 5px;
          user-select: text;
        }

        p {
          cursor: text;
          user-select: text;
        }

        pre > code {
          display: block;
          font-size: 14px;
          padding: 10px;
          white-space: pre-wrap;
        }

        ol,
        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: auto;
          user-select: text;

          li {
            user-select: text;
          }
        }
      }
    `}}

  ${e=>{let{$isCommand:t,$type:r}=e;return"user"===r&&p.iv`
      background: linear-gradient(
        90deg,
        ${t?"rgb(224, 40, 234)":"rgb(40, 112, 234)"},
        ${t?"rgb(148, 27, 239)":"rgb(27, 74, 239)"}
      );
      color: #fff;
      margin-left: auto;
    `}}
`,x=p.ZP.li.withConfig({componentId:"sc-6128ecab-0"})`
  background-color: rgb(70, 59, 63);
  border: 1px solid rgb(124, 70, 43);
  border-radius: 10px;
  color: rgb(248, 236, 234);
  font-size: 16px;
  margin: 25px;
  outline: 1px solid rgb(73, 48, 40);
  padding: 15px;
`,k=r(87426),A=r(6529),w=r(55785),y=r(26724),v=r(56758),$=r(25804),E=r(62065),S=r(34254),C=r(48764).Buffer;const z={text:"Hello, I'm an AI assistant. How can I help you?",type:"assistant"},I={chat:"textGeneration",conversational:"facebook/blenderbot-400M-distill",imageToText:"Salesforce/blip-image-captioning-large",summarization:"philschmid/bart-large-cnn-samsum",textGeneration:"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",textToImage:"stabilityai/stable-diffusion-2-1",translation:"t5-base",zeroShotClassification:"facebook/bart-large-mnli"},T={"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5":{assistantStartToken:"<|assistant|>",endToken:"<|endoftext|>",userStartToken:"<|prompter|>"}},j=(e,t)=>{const{assistantStartToken:r,endToken:n,userStartToken:a}=T[I.textGeneration];return`${[...t,{text:e,type:"user"}].filter((e=>{let{type:t}=e;return"system"!==t})).map((e=>{let{text:t,type:o}=e;return`${"assistant"===o?r:a}${t}${n}`})).join("")}${r}`},M={wait_for_model:!0};var R=r(48764).Buffer;const L={model:"gpt-4",n:1,temperature:.8},P={content:"You are a helpful assistant.",role:"system"},B={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"},_={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"};var H=r(21638),O=r(67294);const G={HuggingFace:class{checkError(e){e.message.includes("Rate limit reached")&&this.setError(429)}constructor(e,t){this.inference={},this.greeting=z,this.apiKey=e,this.setError=t}async init(){await(0,S.mb)(["Program Files/HuggingFace/inference.min.js"]),window.HfInference&&(this.inference=new window.HfInference(this.apiKey))}async chat(e,t,r,n){let a="";const o=I[I.chat];try{({generated_text:a=""}="conversational"===I.chat?await this.inference.conversational({inputs:{generated_responses:r,past_user_inputs:t,text:e},model:o},M):await this.inference.textGeneration({inputs:j(e,n),model:o,parameters:{max_new_tokens:100,return_full_text:!1}},M))}catch(e){this.checkError(e)}return a}async classify(e,t){try{const[{labels:[r],scores:[n]}]=await this.inference.zeroShotClassification({inputs:[e],model:I.zeroShotClassification,parameters:{candidate_labels:t}},M);return`${r} (${(100*n).toFixed(1)}%)`}catch(e){this.checkError(e)}return""}async draw(e){try{const t=await this.inference.textToImage({inputs:e,model:I.textToImage,negative_prompt:"blurry"},M);return C.from(await t.arrayBuffer())}catch(e){return this.checkError(e)}}async imageToText(e,t,r){try{const[{generated_text:n}]=await this.inference.request({data:new File([(0,S.V4)(r,t)],e,{type:t}),model:I.imageToText},{...M,binary:!0});return n}catch(e){this.checkError(e)}return""}async summarization(e){try{return(await this.inference.summarization({inputs:e,model:I.summarization,parameters:{max_length:100}},M)).summary_text}catch(e){this.checkError(e)}return""}async translation(e){try{return(await this.inference.translation({inputs:e,model:I.translation},M)).translation_text}catch(e){this.checkError(e)}return""}},OpenAI:class{getHeaders(){return{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},method:"POST"}}constructor(e,t){this.apiKey="",this.greeting=B,this.apiKey=e,this.setError=t}async init(){return Promise.resolve()}async chat(e,t,r,n){const a=(n||[]).map((e=>{let{text:t,type:r}=e;return{content:t,role:r}})),o=await fetch("https://api.openai.com/v1/chat/completions",{body:JSON.stringify({messages:[P,...a,{content:e,role:"user"}],...L}),...this.getHeaders()});if(o?.ok){const e=await o.json(),[{message:t,finish_reason:r}]=e?.choices||[];if(t){const{content:e}=t;if("stop"===r)return e;if("length"===r)return`${e}\n\n[Incomplete Response]`;if("content_filter"===r)return`${e}\n\n[Content Filtered]`}}return o?.status&&this.setError(o?.status),""}async classify(e,t){return Promise.resolve("")}async draw(e){const t=await fetch("https://api.openai.com/v1/images/generations",{body:JSON.stringify({n:1,prompt:e,response_format:"b64_json",size:"256x256"}),...this.getHeaders()});if(t?.ok){const e=(await t.json())?.data?.[0]?.b64_json;return e?R.from(e,"base64"):void 0}t?.status&&this.setError(t?.status)}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}},WebLLM:class{destroy(){globalThis.tvmjsGlobalEnv?.asyncOnReset(),this.worker?.terminate()}async init(){return this.worker=new Worker(r.tu(new URL(r.p+r.u(496),r.b)),{name:"WebLLM"}),this.worker.postMessage("init"),Promise.resolve()}async chat(e,t,r,n,a){return requestAnimationFrame((()=>this.worker?.postMessage(e))),new Promise((e=>{this.worker?.addEventListener("message",(t=>{let{data:r}=t;const n=a||console.info;"string"==typeof r?(e(r),n("","")):n(r.type,r.message)}))}))}async classify(e,t){return Promise.resolve("")}async draw(e){return Promise.resolve()}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}constructor(){this.worker=void 0,this.greeting=_}}};var N=r(1864),U=r(30663),F=e=>{let{id:t}=e;const{aiApi:r,setWallpaper:i}=(0,E.k)(),{readFile:p,mkdirRecursive:d,writeFile:C}=(0,y.o)(),{processes:{[t]:z},title:I,url:T}=(0,v.z)(),{url:j}=z||{},[M,R]=(0,O.useMemo)((()=>r.split(":")),[r]),{engine:L,error:P,name:B,resetError:_}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[r,n]=(0,O.useState)(0),o=(0,H.Z)(),[i,s]=(0,O.useState)("");return(0,O.useEffect)((()=>{if("boolean"==typeof o){const[e]=a.OG.split(":");let r=e;t&&t in G?r="WebLLM"!==t||o?t:a.wB:"WebLLM"!==r||o||(r=a.wB),s(r)}}),[t,o]),{engine:(0,O.useMemo)((()=>i?new G[i](e,n):void 0),[i,e]),error:r,name:i,resetError:()=>n(0)}}(R,M),F=(0,O.useRef)(null),Z=(0,O.useRef)(null),[D,Q]=(0,O.useState)(""),[K,W]=(0,O.useState)([]),Y=(0,O.useRef)(!1),V=(0,O.useCallback)((function(e){let[t,...r]=e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=r.length>0;W((e=>{if(n)return[...e,{text:t,type:"assistant",writing:a}];const r=[...e],o=r.findIndex((e=>{let{writing:t}=e;return t}));return r[o]={text:`${r[o].text}${t}`,type:"assistant",writing:a},r})),a&&setTimeout((()=>V(r)),c())}),[]),J=(0,O.useCallback)((e=>{const{image:t,text:r,type:n}=e;r&&("assistant"!==n||t?W((t=>[...t,e])):V([...r],!0))}),[V]),[q,X]=(0,O.useState)(!1),ee=(0,O.useCallback)((async e=>{if(!e)return"";X(!0);const t=await e;return X(!1),t}),[]),[te,re]=(0,O.useState)(""),ne=(0,O.useCallback)(((e,t)=>{re(e&&t?`${e} ${t}`:"")}),[]),ae=(0,O.useCallback)((e=>{if(!L)return;const[t,r]=K.map((e=>e.command&&"user"===e.type?{...e,text:`${e.command.replace("/","").toUpperCase()}: ${e.text}`}:e.image&&"assistant"===e.type?{...e,text:`IMAGE: ${e.text}`}:e)).reduce(((e,t)=>{let[r,n]=e,{text:a,type:o}=t;return"assistant"===o?[[...r,a],n]:[r,[...n,a]]}),[[],[]]),n=e.trim();ee(L.chat(n,r,t,K,ne)).then((async e=>{e&&(window.marked?.parse||await(0,S.mb)(["/Program Files/Marked/marked.min.js"]),J({text:window.marked.parse(e.trim(),{headerIds:!1}),type:"assistant"}))})),J({text:n,type:"user"})}),[L,J,K,ne,ee]),[oe,ie]=(0,O.useState)([]),se=(0,O.useCallback)((async(e,t,r)=>{const n=Date.now();X(!0),ie((r=>[...r,{command:e,text:t,timestamp:n}]));const a=await r;return ie((e=>e.filter((e=>{let{timestamp:t}=e;return t!==n})))),X(!1),a}),[]),le=(0,O.useCallback)(((e,t,r)=>{const[n,...a]=t.split(" "),o=a.join(" ");J({command:n,text:o,type:"user"}),se(n,o,e).then((e=>e&&J({command:n,..."string"==typeof e?{text:`${r||"RESPONSE"}: ${e.trim()}`}:{image:(0,S.YS)(e),text:o},type:"assistant"})))}),[J,se]),ce=(0,O.useCallback)((()=>{Z.current&&(Z.current.style.height="0px",Z.current.style.height=`${Math.max(40,Z.current.scrollHeight+10)}px`)}),[]),ue=(0,O.useCallback)((async(e,t,r)=>{try{const n=(0,N.join)(o,`${(0,A.gL)(e)} (${(0,S.gE)()}).jpg`);await d(o),await C(n,t,!0),r&&i(n)}catch{}}),[d,i,C]),pe=(0,O.useCallback)((async()=>{if(Z.current&&L){if(Z.current.value.startsWith("/")){const[e,...t]=Z.current.value.split(" "),r=t.join(" ");switch(e){case"/classify":le(L.classify(r,Object.keys(s).map((e=>e.replace("/",""))).filter((e=>"classify"!==e))),Z.current.value,"CLASSIFYING");break;case"/draw":case"/wallpaper":le(L.draw(r).then((t=>(t&&ue(r,t,"/wallpaper"===e),t))),Z.current.value,"DRAWING");break;case"/caption":le(L.imageToText((0,N.basename)(r),(0,k.bh)(r),await p(r)),Z.current.value,"CAPTIONING");break;case"/summarize":le(L.summarization(r),Z.current.value,"SUMMARY");break;case"/translate":le(L.translation(r),Z.current.value,"TRANSLATION");break;default:ae(Z.current.value)}}else ae(Z.current.value);_(),Z.current.value="",Q(""),ce()}}),[L,le,p,_,ue,ae,ce]),de=(0,O.useMemo)((()=>K.some((e=>{let{writing:t}=e;return t}))),[K]),ge=q||de,be=D&&!ge;return(0,O.useEffect)((()=>{B&&I(t,`${$.Z.Chat.title} (${B})`)}),[t,B,I]),(0,O.useEffect)((()=>{F.current&&K.length>0&&F.current.scrollTo(0,F.current.scrollHeight)}),[K]),(0,O.useEffect)((()=>{let e;return Y.current?e=()=>L?.destroy?.():L&&(Y.current=!0,L.init().then((()=>J(L.greeting))),Z.current?.focus(a.eS)),e}),[L,J,R]),(0,O.useEffect)((()=>{if(j&&Z.current&&a.lM.has((0,S.RT)(j))){const e=`${D?"":"/caption "}${D}${D?" ":""}${j}`;Z.current.value=e,Q(e),ce(),T(t,"")}}),[t,D,T,ce,j]),(0,n.jsxs)(g,{...(0,w.Z)({id:t}),children:[(0,n.jsxs)("ul",{ref:F,children:[K.map(((e,t)=>{let{command:r,image:a,text:o,type:i,writing:l}=e;const c="assistant"===i,u=r||!c?o:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:`${o}${l?"<span class='cursor'>|</span>":""}`}});return(0,n.jsxs)(f,{$image:a,$isCommand:Boolean(r),$type:i,title:a?o:"",children:[r&&!c?`${s[r].icon} `:"",a?"":u]},t)})),Boolean(P&&l[P])&&(0,n.jsx)(x,{children:l[P]}),oe.map((e=>{let{command:t,text:r}=e;return(0,n.jsx)(b,{children:(0,n.jsxs)("figure",{children:[s[t].icon,(0,n.jsxs)("figcaption",{children:[s[t].label,": ",(0,n.jsx)("b",{children:r}),"..."]})]})},`${t}-${r}`)}))]}),(0,n.jsxs)(m,{$hideSend:!be,children:[te&&(0,n.jsx)("div",{className:"status",children:te}),(0,n.jsx)("textarea",{ref:Z,onInput:ce,onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()},onKeyUp:e=>{const{key:t,target:r,shiftKey:n}=e;if(!(r instanceof HTMLTextAreaElement))return;const a="Enter"===t;r.value&&a?n?(r.value+="\n",ce()):be&&pe():Q(r.value)},placeholder:"Ask me anything..."}),(0,n.jsx)(h,{$showLoading:ge}),(0,n.jsx)(U.Z,{onClick:pe,children:(0,n.jsx)(u,{})})]})]})}},55785:function(e,t,r){var n=r(62727),a=r(6529),o=r(42151),i=r(26724),s=r(56758),l=r(62065),c=r(1864),u=r(67294),p=r(64358),d=r(34254);t.Z=e=>{let{callback:t,directory:r=p.Ll,id:g,onDragLeave:b,onDragOver:m,updatePositions:h}=e;const{url:f}=(0,s.z)(),{iconPositions:x,sortOrders:k,setIconPositions:A}=(0,l.k)(),{mkdirRecursive:w,updateFolder:y,writeFile:v}=(0,i.o)(),$=(0,u.useCallback)((async(e,t,r)=>{if(g)if(t){const n=(0,c.join)(p.Ll,e);await w(p.Ll),await v(n,t,!0)&&(r===o.v.UPDATE_URL&&f(g,n),y(p.Ll,e))}else r===o.v.UPDATE_URL&&f(g,e)}),[g,w,y,f,v]),{openTransferDialog:E}=(0,n.Z)();return{onDragLeave:b,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:e=>{if(h&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,a.p4)(e);if(0===t.length&&""===n)return;const o={x:e.clientX,y:e.clientY};let i=[];if(n){try{i=JSON.parse(n)}catch{}if(!Array.isArray(i))return;const[e]=i;if(!e)return;if(e.startsWith(r)&&(0,c.basename)(e)===(0,c.relative)(r,e))return;i=i.map((e=>(0,c.basename)(e)))}else i=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);i=i.map((e=>{if(!x[`${r}/${e}`])return e;let t=0,n="";do{t+=1,n=`${r}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(x[n]);return(0,c.basename)(n)})),(0,d.vi)(r,e.target,x,k,o,i,A)}(0,a.WG)(e,t||$,r,E,Boolean(g))}}}},21638:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);const a=()=>{const[e,t]=(0,n.useState)(),r=(0,n.useCallback)((async()=>t(await(async()=>{if("undefined"==typeof navigator)return!1;if(!("gpu"in navigator))return!1;const e=await navigator.gpu.requestAdapter();return!!e&&!(1<<30>e.limits.maxBufferSize||1<<30>e.limits.maxStorageBufferBindingSize||32768>e.limits.maxComputeWorkgroupStorageSize)})())),[]);return(0,n.useEffect)((()=>{r()}),[r]),e}},38060:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(14141);const a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${a[o].thumb} ${a[o].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${a[o].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${a[o].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${a[o].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${a[o].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${a[o].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${a[o].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${a[o].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${a[o].buttonHover};
    }

    &:active {
      background-color: ${a[o].active};
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
    background-blend-mode: ${a[o].blendMode};
  }
`}}}]);