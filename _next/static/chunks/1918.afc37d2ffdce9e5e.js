"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1918],{21918:function(e,t,r){r.r(t),r.d(t,{default:function(){return U}});var n=r(85893),a=r(64358);const o=`${a.sC}/AI Images`,i="0 0.5px 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",s={"/caption":{action:"CAPTIONING",icon:"📝",label:"Captioning"},"/classify":{action:"CLASSIFYING",icon:"🏷️",label:"Classifying"},"/draw":{action:"DRAWING",icon:"🎨",label:"Drawing"},"/summarize":{action:"SUMMARY",icon:"📋",label:"Summarizing"},"/translate":{action:"TRANSLATION",icon:"🌐",label:"Translating"},"/wallpaper":{action:"DRAWING",icon:"🖼️",label:"Creating Wallpaper"}},l={401:"Valid API key required.",404:"Model not found.",429:"Rate limit reached."},c=()=>{const e=Math.random();let t=150;return e<.3?t=30:e<.6?t=37.5:e<.9&&(t=50),Math.random()*(t-1+1)+1},u=()=>(0,n.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"})});var p=r(14141),d=r(38060),g=p.ZP.div.withConfig({componentId:"sc-313c4fce-0"})`
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
`,x=p.ZP.li.withConfig({componentId:"sc-68679167-0"})`
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
`,f=p.ZP.li.withConfig({componentId:"sc-6128ecab-0"})`
  background-color: rgb(70, 59, 63);
  border: 1px solid rgb(124, 70, 43);
  border-radius: 10px;
  color: rgb(248, 236, 234);
  font-size: 16px;
  margin: 25px;
  outline: 1px solid rgb(73, 48, 40);
  padding: 15px;
`,k=r(87426),A=r(6529),w=r(55785),y=r(26724),v=r(56758),$=r(25804),E=r(62065),C=r(34254),I=r(48764).Buffer;const T={text:"Hello, I'm an AI assistant. How can I help you?",type:"assistant"},S={chat:"textGeneration",conversational:"facebook/blenderbot-400M-distill",imageToText:"Salesforce/blip-image-captioning-large",summarization:"philschmid/bart-large-cnn-samsum",textGeneration:"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",textToImage:"stabilityai/stable-diffusion-2-1",translation:"t5-base",zeroShotClassification:"facebook/bart-large-mnli"},z={"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5":{assistantStartToken:"<|assistant|>",endToken:"<|endoftext|>",userStartToken:"<|prompter|>"}},j=(e,t)=>{const{assistantStartToken:r,endToken:n,userStartToken:a}=z[S.textGeneration];return`${[...t,{text:e,type:"user"}].filter((e=>{let{type:t}=e;return"system"!==t})).map((e=>{let{text:t,type:o}=e;return`${"assistant"===o?r:a}${t}${n}`})).join("")}${r}`},M={wait_for_model:!0};var R=r(48764).Buffer;const L={model:"gpt-4",n:1,temperature:.8},P={content:"You are a helpful assistant.",role:"system"},_={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"},B={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"};var H=r(67294);const O={HuggingFace:class{checkError(e){e.message.includes("Rate limit reached")&&this.setError(429)}constructor(e,t){this.inference={},this.greeting=T,this.apiKey=e,this.setError=t}async init(){await(0,C.mb)(["Program Files/HuggingFace/inference.min.js"]),window.HfInference&&(this.inference=new window.HfInference(this.apiKey))}async chat(e,t,r,n){let a="";const o=S[S.chat];try{({generated_text:a=""}="conversational"===S.chat?await this.inference.conversational({inputs:{generated_responses:r,past_user_inputs:t,text:e},model:o},M):await this.inference.textGeneration({inputs:j(e,n),model:o,parameters:{max_new_tokens:100,return_full_text:!1}},M))}catch(e){this.checkError(e)}return a}async classify(e,t){try{const[{labels:[r],scores:[n]}]=await this.inference.zeroShotClassification({inputs:[e],model:S.zeroShotClassification,parameters:{candidate_labels:t}},M);return`${r} (${(100*n).toFixed(1)}%)`}catch(e){this.checkError(e)}return""}async draw(e){try{const t=await this.inference.textToImage({inputs:e,model:S.textToImage,negative_prompt:"blurry"},M);return I.from(await t.arrayBuffer())}catch(e){return this.checkError(e)}}async imageToText(e,t,r){try{const[{generated_text:n}]=await this.inference.request({data:new File([(0,C.V4)(r,t)],e,{type:t}),model:S.imageToText},{...M,binary:!0});return n}catch(e){this.checkError(e)}return""}async summarization(e){try{return(await this.inference.summarization({inputs:e,model:S.summarization,parameters:{max_length:100}},M)).summary_text}catch(e){this.checkError(e)}return""}async translation(e){try{return(await this.inference.translation({inputs:e,model:S.translation},M)).translation_text}catch(e){this.checkError(e)}return""}},OpenAI:class{getHeaders(){return{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},method:"POST"}}constructor(e,t){this.apiKey="",this.greeting=_,this.apiKey=e,this.setError=t}async init(){return Promise.resolve()}async chat(e,t,r,n){const a=(n||[]).map((e=>{let{text:t,type:r}=e;return{content:t,role:r}})),o=await fetch("https://api.openai.com/v1/chat/completions",{body:JSON.stringify({messages:[P,...a,{content:e,role:"user"}],...L}),...this.getHeaders()});if(o?.ok){const e=await o.json(),[{message:t,finish_reason:r}]=e?.choices||[];if(t){const{content:e}=t;if("stop"===r)return e;if("length"===r)return`${e}\n\n[Incomplete Response]`;if("content_filter"===r)return`${e}\n\n[Content Filtered]`}}return o?.status&&this.setError(o?.status),""}async classify(e,t){return Promise.resolve("")}async draw(e){const t=await fetch("https://api.openai.com/v1/images/generations",{body:JSON.stringify({n:1,prompt:e,response_format:"b64_json",size:"256x256"}),...this.getHeaders()});if(t?.ok){const e=(await t.json())?.data?.[0]?.b64_json;return e?R.from(e,"base64"):void 0}t?.status&&this.setError(t?.status)}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}},WebLLM:class{destroy(){globalThis.tvmjsGlobalEnv?.asyncOnReset(),this.worker?.terminate()}async init(){return this.worker=new Worker(r.tu(new URL(r.p+r.u(496),r.b)),{name:"WebLLM"}),this.worker.postMessage("init"),Promise.resolve()}async chat(e,t,r,n,a){return requestAnimationFrame((()=>this.worker?.postMessage(e))),new Promise((e=>{this.worker?.addEventListener("message",(t=>{let{data:r}=t;const n=a||console.info;"string"==typeof r?(e(r),n("","")):n(r.type,r.message)}))}))}async classify(e,t){return Promise.resolve("")}async draw(e){return Promise.resolve()}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}constructor(){this.worker=void 0,this.greeting=B}}};var G=r(1864),N=r(30663),U=e=>{let{id:t}=e;const{aiApi:r,setWallpaper:i}=(0,E.k)(),{readFile:p,mkdirRecursive:d,writeFile:I}=(0,y.o)(),{processes:{[t]:T},title:S,url:z}=(0,v.z)(),{url:j}=T||{},[M,R]=(0,H.useMemo)((()=>r.split(":")),[r]),{engine:L,error:P,name:_,resetError:B}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[r,n]=(0,H.useState)(0),[o]=a.OG.split(":"),i="gpu"in navigator;let s=o;return t&&t in O?s="WebLLM"!==t||i?t:a.wB:"WebLLM"!==s||i||(s=a.wB),{engine:(0,H.useMemo)((()=>new O[s](e,n)),[s,e]),error:r,name:s,resetError:()=>n(0)}}(R,M),U=(0,H.useRef)(null),F=(0,H.useRef)(null),[D,Z]=(0,H.useState)(""),[Q,K]=(0,H.useState)([]),W=(0,H.useRef)(!1),Y=(0,H.useCallback)((function(e){let[t,...r]=e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=r.length>0;K((e=>{if(n)return[...e,{text:t,type:"assistant",writing:a}];const r=[...e],o=r.findIndex((e=>{let{writing:t}=e;return t}));return r[o]={text:`${r[o].text}${t}`,type:"assistant",writing:a},r})),a&&setTimeout((()=>Y(r)),c())}),[]),V=(0,H.useCallback)((e=>{const{image:t,text:r,type:n}=e;r&&("assistant"!==n||t?K((t=>[...t,e])):Y([...r],!0))}),[Y]),[J,q]=(0,H.useState)(!1),X=(0,H.useCallback)((async e=>{if(!e)return"";q(!0);const t=await e;return q(!1),t}),[]),[ee,te]=(0,H.useState)(""),re=(0,H.useCallback)(((e,t)=>{te(e&&t?`${e} ${t}`:"")}),[]),ne=(0,H.useCallback)((e=>{const[t,r]=Q.map((e=>e.command&&"user"===e.type?{...e,text:`${e.command.replace("/","").toUpperCase()}: ${e.text}`}:e.image&&"assistant"===e.type?{...e,text:`IMAGE: ${e.text}`}:e)).reduce(((e,t)=>{let[r,n]=e,{text:a,type:o}=t;return"assistant"===o?[[...r,a],n]:[r,[...n,a]]}),[[],[]]),n=e.trim();X(L.chat(n,r,t,Q,re)).then((async e=>{e&&(window.marked?.parse||await(0,C.mb)(["/Program Files/Marked/marked.min.js"]),V({text:window.marked.parse(e.trim(),{headerIds:!1}),type:"assistant"}))})),V({text:n,type:"user"})}),[L,V,Q,re,X]),[ae,oe]=(0,H.useState)([]),ie=(0,H.useCallback)((async(e,t,r)=>{const n=Date.now();q(!0),oe((r=>[...r,{command:e,text:t,timestamp:n}]));const a=await r;return oe((e=>e.filter((e=>{let{timestamp:t}=e;return t!==n})))),q(!1),a}),[]),se=(0,H.useCallback)(((e,t,r)=>{const[n,...a]=t.split(" "),o=a.join(" ");V({command:n,text:o,type:"user"}),ie(n,o,e).then((e=>e&&V({command:n,..."string"==typeof e?{text:`${r||"RESPONSE"}: ${e.trim()}`}:{image:(0,C.YS)(e),text:o},type:"assistant"})))}),[V,ie]),le=(0,H.useCallback)((()=>{F.current&&(F.current.style.height="0px",F.current.style.height=`${Math.max(40,F.current.scrollHeight+10)}px`)}),[]),ce=(0,H.useCallback)((async(e,t,r)=>{try{const n=(0,G.join)(o,`${(0,A.gL)(e)} (${(0,C.gE)()}).jpg`);await d(o),await I(n,t,!0),r&&i(n)}catch{}}),[d,i,I]),ue=(0,H.useCallback)((async()=>{if(F.current&&L){if(F.current.value.startsWith("/")){const[e,...t]=F.current.value.split(" "),r=t.join(" ");switch(e){case"/classify":se(L.classify(r,Object.keys(s).map((e=>e.replace("/",""))).filter((e=>"classify"!==e))),F.current.value,"CLASSIFYING");break;case"/draw":case"/wallpaper":se(L.draw(r).then((t=>(t&&ce(r,t,"/wallpaper"===e),t))),F.current.value,"DRAWING");break;case"/caption":se(L.imageToText((0,G.basename)(r),(0,k.bh)(r),await p(r)),F.current.value,"CAPTIONING");break;case"/summarize":se(L.summarization(r),F.current.value,"SUMMARY");break;case"/translate":se(L.translation(r),F.current.value,"TRANSLATION");break;default:ne(F.current.value)}}else ne(F.current.value);B(),F.current.value="",Z(""),le()}}),[L,se,p,B,ce,ne,le]),pe=(0,H.useMemo)((()=>Q.some((e=>{let{writing:t}=e;return t}))),[Q]),de=J||pe,ge=D&&!de;return(0,H.useEffect)((()=>{_&&S(t,`${$.Z.Chat.title} (${_})`)}),[t,_,S]),(0,H.useEffect)((()=>{U.current&&Q.length>0&&U.current.scrollTo(0,U.current.scrollHeight)}),[Q]),(0,H.useEffect)((()=>{let e;return W.current?e=()=>L?.destroy?.():(W.current=!0,L.init().then((()=>V(L.greeting))),F.current?.focus(a.eS)),e}),[L,V,R]),(0,H.useEffect)((()=>{if(j&&F.current&&a.lM.has((0,C.RT)(j))){const e=`${D?"":"/caption "}${D}${D?" ":""}${j}`;F.current.value=e,Z(e),le(),z(t,"")}}),[t,D,z,le,j]),(0,n.jsxs)(g,{...(0,w.Z)({id:t}),children:[(0,n.jsxs)("ul",{ref:U,children:[Q.map(((e,t)=>{let{command:r,image:a,text:o,type:i,writing:l}=e;const c="assistant"===i,u=r||!c?o:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:`${o}${l?"<span class='cursor'>|</span>":""}`}});return(0,n.jsxs)(x,{$image:a,$isCommand:Boolean(r),$type:i,title:a?o:"",children:[r&&!c?`${s[r].icon} `:"",a?"":u]},t)})),Boolean(P&&l[P])&&(0,n.jsx)(f,{children:l[P]}),ae.map((e=>{let{command:t,text:r}=e;return(0,n.jsx)(b,{children:(0,n.jsxs)("figure",{children:[s[t].icon,(0,n.jsxs)("figcaption",{children:[s[t].label,": ",(0,n.jsx)("b",{children:r}),"..."]})]})},`${t}-${r}`)}))]}),(0,n.jsxs)(m,{$hideSend:!ge,children:[ee&&(0,n.jsx)("div",{className:"status",children:ee}),(0,n.jsx)("textarea",{ref:F,onInput:le,onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()},onKeyUp:e=>{const{key:t,target:r,shiftKey:n}=e;if(!(r instanceof HTMLTextAreaElement))return;const a="Enter"===t;r.value&&a?n?(r.value+="\n",le()):ge&&ue():Z(r.value)},placeholder:"Ask me anything..."}),(0,n.jsx)(h,{$showLoading:de}),(0,n.jsx)(N.Z,{onClick:ue,children:(0,n.jsx)(u,{})})]})]})}},55785:function(e,t,r){var n=r(62727),a=r(6529),o=r(42151),i=r(26724),s=r(56758),l=r(62065),c=r(1864),u=r(67294),p=r(64358),d=r(34254);t.Z=e=>{let{callback:t,directory:r=p.Ll,id:g,onDragLeave:b,onDragOver:m,updatePositions:h}=e;const{url:x}=(0,s.z)(),{iconPositions:f,sortOrders:k,setIconPositions:A}=(0,l.k)(),{mkdirRecursive:w,updateFolder:y,writeFile:v}=(0,i.o)(),$=(0,u.useCallback)((async(e,t,r)=>{if(g)if(t){const n=(0,c.join)(p.Ll,e);await w(p.Ll),await v(n,t,!0)&&(r===o.v.UPDATE_URL&&x(g,n),y(p.Ll,e))}else r===o.v.UPDATE_URL&&x(g,e)}),[g,w,y,x,v]),{openTransferDialog:E}=(0,n.Z)();return{onDragLeave:b,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:e=>{if(h&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,a.p4)(e);if(0===t.length&&""===n)return;const o={x:e.clientX,y:e.clientY};let i=[];if(n){try{i=JSON.parse(n)}catch{}if(!Array.isArray(i))return;const[e]=i;if(!e)return;if(e.startsWith(r)&&(0,c.basename)(e)===(0,c.relative)(r,e))return;i=i.map((e=>(0,c.basename)(e)))}else i=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);i=i.map((e=>{if(!f[`${r}/${e}`])return e;let t=0,n="";do{t+=1,n=`${r}/${(0,c.basename)(e,(0,c.extname)(e))} (${t})${(0,c.extname)(e)}`}while(f[n]);return(0,c.basename)(n)})),(0,d.vi)(r,e.target,f,k,o,i,A)}(0,a.WG)(e,t||$,r,E,Boolean(g))}}}},38060:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(14141);const a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
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