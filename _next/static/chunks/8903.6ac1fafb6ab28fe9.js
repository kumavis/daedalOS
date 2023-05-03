"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8903],{18903:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(85893),a=r(64358);const i=`${a.sC}/AI Images`,o="0 0.5px 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",s={"/caption":{action:"CAPTIONING",icon:"📝",label:"Captioning"},"/classify":{action:"CLASSIFYING",icon:"🏷️",label:"Classifying"},"/draw":{action:"DRAWING",icon:"🎨",label:"Drawing"},"/summarize":{action:"SUMMARY",icon:"📋",label:"Summarizing"},"/translate":{action:"TRANSLATION",icon:"🌐",label:"Translating"},"/wallpaper":{action:"DRAWING",icon:"🖼️",label:"Creating Wallpaper"}},c={401:"Valid API key required.",404:"Model not found.",429:"Rate limit reached."},l=()=>{const e=Math.random();let t=150;return e<.3?t=30:e<.6?t=37.5:e<.9&&(t=50),Math.random()*(t-1+1)+1},u=()=>(0,n.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"})}),p=()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001C14.366 2.693 14.2 1.643 13.616 0h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847L2.372 4.657c.745 1.568 1.375 2.434.847 3.707C2.692 9.635 1.635 9.802 0 10.384v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"})});var g=r(14141),d=r(38060),b=g.ZP.div.withConfig({componentId:"sc-7e18b3ca-0"})`
  background-color: rgb(68, 70, 84);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  > button {
    fill: rgba(200, 200, 200, 75%);
    margin: 3px;
    padding: 4px;
    position: absolute;
    right: ${a.BQ}px;
    width: 24px;
    z-index: 1;

    &:hover {
      fill: rgba(200, 200, 200, 100%);
    }
  }

  > ul {
    ${(0,d.Z)(a.BQ)};

    height: 100%;
    overflow-y: scroll;
    padding-bottom: 84px;
    position: relative;
  }
`,m=g.ZP.li.withConfig({componentId:"sc-be59d8ad-0"})`
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
`,h=g.ZP.div.withConfig({componentId:"sc-10a9a179-0"})`
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
    box-shadow: ${o};
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
`,x=g.ZP.span.withConfig({componentId:"sc-3590d550-0"})`
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
`,f=g.ZP.li.withConfig({componentId:"sc-68679167-0"})`
  background-size: cover;
  border-radius: 18px;
  box-shadow: ${o};
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

  ${e=>{let{$image:t,$type:r}=e;return"assistant"===r&&g.iv`
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

  ${e=>{let{$isCommand:t,$type:r}=e;return"user"===r&&g.iv`
      background: linear-gradient(
        90deg,
        ${t?"rgb(224, 40, 234)":"rgb(40, 112, 234)"},
        ${t?"rgb(148, 27, 239)":"rgb(27, 74, 239)"}
      );
      color: #fff;
      margin-left: auto;
    `}}
`,k=g.ZP.li.withConfig({componentId:"sc-6128ecab-0"})`
  background-color: rgb(70, 59, 63);
  border: 1px solid rgb(124, 70, 43);
  border-radius: 10px;
  color: rgb(248, 236, 234);
  font-size: 16px;
  margin: 25px;
  outline: 1px solid rgb(73, 48, 40);
  padding: 15px;
`,w=r(87426),A=r(6529),y=r(55785),v=r(26724),$=r(25449),C=r(56758),S=r(25804),E=r(62065),z=r(34254),T=r(48764).Buffer;const I={text:"Hello, I'm an AI assistant. How can I help you?",type:"assistant"},M={chat:"textGeneration",conversational:"facebook/blenderbot-400M-distill",imageToText:"Salesforce/blip-image-captioning-large",summarization:"philschmid/bart-large-cnn-samsum",textGeneration:"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",textToImage:"stabilityai/stable-diffusion-2-1",translation:"t5-base",zeroShotClassification:"facebook/bart-large-mnli"},j={"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5":{assistantStartToken:"<|assistant|>",endToken:"<|endoftext|>",userStartToken:"<|prompter|>"}},L=(e,t)=>{const{assistantStartToken:r,endToken:n,userStartToken:a}=j[M.textGeneration];return`${[...t,{text:e,type:"user"}].filter((e=>{let{type:t}=e;return"system"!==t})).map((e=>{let{text:t,type:i}=e;return`${"assistant"===i?r:a}${t}${n}`})).join("")}${r}`},P={wait_for_model:!0};var R=r(48764).Buffer;const B={model:"gpt-4",n:1,temperature:.8},_={content:"You are a helpful assistant.",role:"system"},H={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"},O={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"};var G=r(21638),N=r(67294);const F={HuggingFace:class{checkError(e){e.message.includes("Rate limit reached")&&this.setError(429)}constructor(e,t){this.inference={},this.greeting=I,this.apiKey=e,this.setError=t}async init(){await(0,z.mb)(["Program Files/HuggingFace/inference.min.js"]),window.HfInference&&(this.inference=new window.HfInference(this.apiKey))}async chat(e,t,r,n){let a="";const i=M[M.chat];try{({generated_text:a=""}="conversational"===M.chat?await this.inference.conversational({inputs:{generated_responses:r,past_user_inputs:t,text:e},model:i},P):await this.inference.textGeneration({inputs:L(e,n),model:i,parameters:{max_new_tokens:100,return_full_text:!1}},P))}catch(e){this.checkError(e)}return a}async classify(e,t){try{const[{labels:[r],scores:[n]}]=await this.inference.zeroShotClassification({inputs:[e],model:M.zeroShotClassification,parameters:{candidate_labels:t}},P);return`${r} (${(100*n).toFixed(1)}%)`}catch(e){this.checkError(e)}return""}async draw(e){try{const t=await this.inference.textToImage({inputs:e,model:M.textToImage,negative_prompt:"blurry"},P);return T.from(await t.arrayBuffer())}catch(e){return this.checkError(e)}}async imageToText(e,t,r){try{const[{generated_text:n}]=await this.inference.request({data:new File([(0,z.V4)(r,t)],e,{type:t}),model:M.imageToText},{...P,binary:!0});return n}catch(e){this.checkError(e)}return""}async summarization(e){try{return(await this.inference.summarization({inputs:e,model:M.summarization,parameters:{max_length:100}},P)).summary_text}catch(e){this.checkError(e)}return""}async translation(e){try{return(await this.inference.translation({inputs:e,model:M.translation},P)).translation_text}catch(e){this.checkError(e)}return""}},OpenAI:class{getHeaders(){return{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},method:"POST"}}constructor(e,t){this.apiKey="",this.greeting=H,this.apiKey=e,this.setError=t}async init(){return Promise.resolve()}async chat(e,t,r,n,a,i){i&&_.content!==i&&(_.content=i);const o=(n||[]).map((e=>{let{text:t,type:r}=e;return{content:t,role:r}})),s=await fetch("https://api.openai.com/v1/chat/completions",{body:JSON.stringify({messages:[_,...o,{content:e,role:"user"}],...B}),...this.getHeaders()});if(s?.ok){const e=await s.json(),[{message:t,finish_reason:r}]=e?.choices||[];if(t){const{content:e}=t;if("stop"===r)return e;if("length"===r)return`${e}\n\n[Incomplete Response]`;if("content_filter"===r)return`${e}\n\n[Content Filtered]`}}return s?.status&&this.setError(s?.status),""}async classify(e,t){return Promise.resolve("")}async draw(e){const t=await fetch("https://api.openai.com/v1/images/generations",{body:JSON.stringify({n:1,prompt:e,response_format:"b64_json",size:"256x256"}),...this.getHeaders()});if(t?.ok){const e=(await t.json())?.data?.[0]?.b64_json;return e?R.from(e,"base64"):void 0}t?.status&&this.setError(t?.status)}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}},WebLLM:class{destroy(){globalThis.tvmjsGlobalEnv?.asyncOnReset(),this.worker?.terminate()}async init(){return this.worker=new Worker(r.tu(new URL(r.p+r.u(496),r.b)),{name:"WebLLM"}),this.worker.postMessage("init"),Promise.resolve()}async chat(e,t,r,n,a,i){return this.isChatting||(this.isChatting=!0,i&&this.worker?.postMessage({prompt:i,type:"system"})),requestAnimationFrame((()=>this.worker?.postMessage(e))),new Promise((e=>{this.worker?.addEventListener("message",(t=>{let{data:r}=t;const n=a||console.info;"string"==typeof r?(e(r),n("","")):n(r.type,r.message)}))}))}async classify(e,t){return Promise.resolve("")}async draw(e){return Promise.resolve()}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}constructor(){this.worker=void 0,this.isChatting=!1,this.greeting=O}}};var U=r(1864),Z=r(30663),D=e=>{let{id:t}=e;const{aiApi:r,setWallpaper:o}=(0,E.k)(),{readFile:g,mkdirRecursive:d,writeFile:T}=(0,v.o)(),{processes:{[t]:I},title:M,url:j}=(0,C.z)(),{url:L}=I||{},[P,R]=(0,N.useMemo)((()=>r.split(":")),[r]),{engine:B,error:_,name:H,resetError:O}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[r,n]=(0,N.useState)(0),i=(0,G.Z)(),[o,s]=(0,N.useState)("");return(0,N.useEffect)((()=>{if("boolean"==typeof i){const[e]=a.OG.split(":");let r=e;t&&t in F?r="WebLLM"!==t||i?t:a.wB:"WebLLM"!==r||i||(r=a.wB),s(r)}}),[t,i]),{engine:(0,N.useMemo)((()=>o?new F[o](t===o?e:"",n):void 0),[o,e,t]),error:r,name:o,resetError:()=>n(0)}}(R,P),D=(0,N.useRef)(null),Q=(0,N.useRef)(null),[W,K]=(0,N.useState)(""),[Y,V]=(0,N.useState)([]),J=(0,N.useRef)(!1),q=(0,N.useCallback)((function(e){let[t,...r]=e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=r.length>0;V((e=>{if(n)return[...e,{text:t,type:"assistant",writing:a}];const r=[...e],i=r.findIndex((e=>{let{writing:t}=e;return t}));return r[i]={text:`${r[i].text}${t}`,type:"assistant",writing:a},r})),a&&setTimeout((()=>q(r)),l())}),[]),X=(0,N.useCallback)((e=>{const{image:t,text:r,type:n}=e;r&&("assistant"!==n||t?V((t=>[...t,e])):q([...r],!0))}),[q]),[ee,te]=(0,N.useState)(!1),re=(0,N.useCallback)((async e=>{if(!e)return"";te(!0);const t=await e;return te(!1),t}),[]),[ne,ae]=(0,N.useState)(""),ie=(0,N.useCallback)(((e,t)=>{ae(e&&t?`${e} ${t}`:"")}),[]),[oe,se]=(0,N.useState)(""),ce=(0,N.useCallback)((e=>{if(!B)return;const[t,r]=Y.map((e=>e.command&&"user"===e.type?{...e,text:`${e.command.replace("/","").toUpperCase()}: ${e.text}`}:e.image&&"assistant"===e.type?{...e,text:`IMAGE: ${e.text}`}:e)).reduce(((e,t)=>{let[r,n]=e,{text:a,type:i}=t;return"assistant"===i?[[...r,a],n]:[r,[...n,a]]}),[[],[]]),n=e.trim();re(B.chat(n,r,t,Y,ie,oe)).then((async e=>{e&&(window.marked?.parse||await(0,z.mb)(["/Program Files/Marked/marked.min.js"]),X({text:window.marked.parse(e.trim(),{headerIds:!1}),type:"assistant"}))})),X({text:n,type:"user"})}),[B,X,Y,ie,oe,re]),[le,ue]=(0,N.useState)([]),pe=(0,N.useCallback)((async(e,t,r)=>{const n=Date.now();te(!0),ue((r=>[...r,{command:e,text:t,timestamp:n}]));const a=await r;return ue((e=>e.filter((e=>{let{timestamp:t}=e;return t!==n})))),te(!1),a}),[]),ge=(0,N.useCallback)(((e,t,r)=>{const[n,...a]=t.split(" "),i=a.join(" ");X({command:n,text:i,type:"user"}),pe(n,i,e).then((e=>e&&X({command:n,..."string"==typeof e?{text:`${r||"RESPONSE"}: ${e.trim()}`}:{image:(0,z.YS)(e),text:i},type:"assistant"})))}),[X,pe]),de=(0,N.useCallback)((()=>{Q.current&&(Q.current.style.height="0px",Q.current.style.height=`${Math.max(40,Q.current.scrollHeight+10)}px`)}),[]),be=(0,N.useCallback)((async(e,t,r)=>{try{const n=(0,U.join)(i,`${(0,A.gL)(e)} (${(0,z.gE)()}).jpg`);await d(i),await T(n,t,!0),r&&o(n)}catch{}}),[d,o,T]),me=(0,N.useCallback)((async()=>{if(Q.current&&B){if(Q.current.value.startsWith("/")){const[e,...t]=Q.current.value.split(" "),r=t.join(" ");switch(e){case"/classify":ge(B.classify(r,Object.keys(s).map((e=>e.replace("/",""))).filter((e=>"classify"!==e))),Q.current.value,"CLASSIFYING");break;case"/draw":case"/wallpaper":ge(B.draw(r).then((t=>(t&&be(r,t,"/wallpaper"===e),t))),Q.current.value,"DRAWING");break;case"/caption":ge(B.imageToText((0,U.basename)(r),(0,w.bh)(r),await g(r)),Q.current.value,"CAPTIONING");break;case"/summarize":ge(B.summarization(r),Q.current.value,"SUMMARY");break;case"/translate":ge(B.translation(r),Q.current.value,"TRANSLATION");break;default:ce(Q.current.value)}}else ce(Q.current.value);O(),Q.current.value="",K(""),de()}}),[B,ge,g,O,be,ce,de]),he=(0,N.useMemo)((()=>Y.some((e=>{let{writing:t}=e;return t}))),[Y]),xe=ee||he,fe=W&&!xe,ke=1===Y.length&&["OpenAI","WebLLM"].includes(H),{contextMenu:we}=(0,$.H)(),{onContextMenuCapture:Ae}=(0,N.useMemo)((()=>we?.((()=>ke?[{action:()=>{se(prompt("System Prompt")||"")},label:"Set System Prompt"}]:[]))),[we,ke]);return(0,N.useEffect)((()=>{H&&M(t,`${S.Z.Chat.title} (${H})`)}),[t,H,M]),(0,N.useEffect)((()=>{D.current&&Y.length>0&&D.current.scrollTo(0,D.current.scrollHeight)}),[Y]),(0,N.useEffect)((()=>{let e;return J.current?e=()=>B?.destroy?.():B&&(J.current=!0,B.init().then((()=>X(B.greeting))),Q.current?.focus(a.eS)),e}),[B,X,R]),(0,N.useEffect)((()=>{if(L&&Q.current&&a.lM.has((0,z.RT)(L))){const e=`${W?"":"/caption "}${W}${W?" ":""}${L}`;Q.current.value=e,K(e),de(),j(t,"")}}),[t,W,j,de,L]),(0,n.jsxs)(b,{...(0,y.Z)({id:t}),children:[ke&&(0,n.jsx)(Z.Z,{onClick:Ae,children:(0,n.jsx)(p,{})}),(0,n.jsxs)("ul",{ref:D,children:[Y.map(((e,t)=>{let{command:r,image:a,text:i,type:o,writing:c}=e;const l="assistant"===o,u=r||!l?i:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:`${i}${c?"<span class='cursor'>|</span>":""}`}});return(0,n.jsxs)(f,{$image:a,$isCommand:Boolean(r),$type:o,title:a?i:"",children:[r&&!l?`${s[r].icon} `:"",a?"":u]},t)})),Boolean(_&&c[_])&&(0,n.jsx)(k,{children:c[_]}),le.map((e=>{let{command:t,text:r}=e;return(0,n.jsx)(m,{children:(0,n.jsxs)("figure",{children:[s[t].icon,(0,n.jsxs)("figcaption",{children:[s[t].label,": ",(0,n.jsx)("b",{children:r}),"..."]})]})},`${t}-${r}`)}))]}),(0,n.jsxs)(h,{$hideSend:!fe,children:[ne&&(0,n.jsx)("div",{className:"status",children:ne}),(0,n.jsx)("textarea",{ref:Q,onInput:e=>{const{nativeEvent:t,target:r}=e;r instanceof HTMLTextAreaElement&&t instanceof InputEvent&&(["insertFromPaste","deleteByCut"].includes(t.inputType)&&K(r.value),de())},onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()},onKeyUp:e=>{const{key:t,target:r,shiftKey:n}=e;if(!(r instanceof HTMLTextAreaElement))return;const a="Enter"===t;r.value&&a?n?(r.value+="\n",de()):fe&&me():K(r.value)},placeholder:"Ask me anything..."}),(0,n.jsx)(x,{$showLoading:xe}),(0,n.jsx)(Z.Z,{onClick:me,children:(0,n.jsx)(u,{})})]})]})}},55785:function(e,t,r){var n=r(62727),a=r(6529),i=r(42151),o=r(26724),s=r(56758),c=r(62065),l=r(1864),u=r(67294),p=r(64358),g=r(34254);t.Z=e=>{let{callback:t,directory:r=p.Ll,id:d,onDragLeave:b,onDragOver:m,updatePositions:h}=e;const{url:x}=(0,s.z)(),{iconPositions:f,sortOrders:k,setIconPositions:w}=(0,c.k)(),{mkdirRecursive:A,updateFolder:y,writeFile:v}=(0,o.o)(),$=(0,u.useCallback)((async(e,t,r)=>{if(d)if(t){const n=(0,l.join)(p.Ll,e);await A(p.Ll),await v(n,t,!0)&&(r===i.v.UPDATE_URL&&x(d,n),y(p.Ll,e))}else r===i.v.UPDATE_URL&&x(d,e)}),[d,A,y,x,v]),{openTransferDialog:C}=(0,n.Z)();return{onDragLeave:b,onDragOver:e=>{m?.(e),(0,g.nK)(e)},onDrop:e=>{if(h&&e.target instanceof HTMLElement){const{files:t,text:n}=(0,a.p4)(e);if(0===t.length&&""===n)return;const i={x:e.clientX,y:e.clientY};let o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(r)&&(0,l.basename)(e)===(0,l.relative)(r,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!f[`${r}/${e}`])return e;let t=0,n="";do{t+=1,n=`${r}/${(0,l.basename)(e,(0,l.extname)(e))} (${t})${(0,l.extname)(e)}`}while(f[n]);return(0,l.basename)(n)})),(0,g.vi)(r,e.target,f,k,i,o,w)}(0,a.WG)(e,t||$,r,C,Boolean(d))}}}},21638:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);const a=()=>{const[e,t]=(0,n.useState)(),r=(0,n.useCallback)((async()=>t(await(async()=>{if("undefined"==typeof navigator)return!1;if(!("gpu"in navigator))return!1;const e=await navigator.gpu.requestAdapter();return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,n.useEffect)((()=>{r()}),[r]),e}},38060:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(14141);const a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${a[i].thumb} ${a[i].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${a[i].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${a[i].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${a[i].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${a[i].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${a[i].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${a[i].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${a[i].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${a[i].buttonHover};
    }

    &:active {
      background-color: ${a[i].active};
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
    background-blend-mode: ${a[i].blendMode};
  }
`}}}]);