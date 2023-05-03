"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7424],{58363:function(e,t,n){n.d(t,{$3:function(){return s},QC:function(){return r},YH:function(){return i},dI:function(){return a},ov:function(){return o},vF:function(){return c}});const r={center:"center center",fill:"center center / cover",fit:"center center / contain",stretch:"center center / 100% 100%",tile:"50% 50%"},a={COASTAL_LANDSCAPE:()=>n.e(9973).then(n.bind(n,79973)),HEXELLS:()=>n.e(8699).then(n.bind(n,38699)),MATRIX:()=>n.e(5380).then(n.bind(n,85380)),STABLE_DIFFUSION:()=>n.e(7023).then(n.bind(n,27023)),VANTA:()=>n.e(473).then(n.bind(n,30473))},i={COASTAL_LANDSCAPE:()=>new Worker(n.tu(new URL(n.p+n.u(5183),n.b)),{name:"Wallpaper (Coastal Landscape)"}),HEXELLS:()=>new Worker(n.tu(new URL(n.p+n.u(3191),n.b)),{name:"Wallpaper (Hexells)"}),STABLE_DIFFUSION:()=>new Worker(n.tu(new URL(n.p+n.u(9629),n.b)),{name:"Wallpaper (Stable Diffusion)"}),VANTA:e=>new Worker(n.tu(new URL(n.p+n.u(8956),n.b)),{name:"Wallpaper (Vanta Waves)"+(e?` [${e}]`:"")})},o=[{id:"APOD",startsWith:!0},{id:"COASTAL_LANDSCAPE",name:"Coastal Landscape"},{id:"HEXELLS",name:"Hexells"},{id:"MATRIX 2D",name:"Matrix (2D)"},{id:"MATRIX 3D",name:"Matrix (3D)"},{id:"SLIDESHOW",name:"Picture Slideshow"},{id:"STABLE_DIFFUSION",name:"Stable Diffusion (Beta)",requiresWebGPU:!0},{id:"VANTA",name:"Vanta Waves",startsWith:!0}],s=":scope > canvas",c=":scope > video"},57424:function(e,t,n){n.d(t,{Z:function(){return ve}});var r=n(85893),a=n(64382),i=n(87426),o=n(14141),s=o.ZP.figure.withConfig({componentId:"sc-5e52ee6b-0"})`
  pointer-events: ${e=>{let{$renaming:t}=e;return t?"all":void 0}};

  figcaption {
    pointer-events: none;
  }
`,c=n(62392),l=n(1347),u=o.ZP.li.withConfig({componentId:"sc-7f64d0dd-0"})`
  display: flex;
  flex-direction: column;

  figure {
    border: 1px solid transparent;
    display: flex;
    height: 36px;
    padding-bottom: 1px;
    place-items: center;

    figcaption {
      color: #fff;
    }

    picture {
      margin-left: 3px;
      margin-right: 8px;
    }

    svg {
      fill: rgb(210, 210, 210);
      height: 8px;
      margin-left: auto;
      margin-right: 8px;
      width: 8px;
    }

    &:active {
      figcaption {
        letter-spacing: -0.15px;
        opacity: 90%;
      }

      picture {
        margin-left: 7px;
      }

      svg {
        margin-right: 12px;
      }
    }

    &:hover {
      background-color: hsla(0, 0%, 35%, 70%);
      border: 1px solid hsla(0, 0%, 45%, 70%);
    }
  }
`,d=n(8011);const m={icon:{StyledFileEntry:c.Z,StyledFileManager:l.Z},list:{StyledFileEntry:u,StyledFileManager:d.Z}},b={icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}};var f=n(67294),g=n(42362),p=n(64358);const h=e=>{let{baseIcon:t,icon:n,isFirstImage:a,name:i,totalSubIcons:o,view:s}=e;const c=(0,f.useMemo)((()=>b[[p.MB,p.EV].includes(n)||n.startsWith("blob:")?s:"sub"]),[n,s]),l=(0,f.useMemo)((()=>{if(n===p.EV)return{zIndex:3};if(t===p._l){return{objectFit:"cover",transform:(a&&o-1>1?"matrix(0.4, 0.14, 0, 0.7, -4, 2)":"matrix(0.5, 0.05, 0, 0.7, 2, 1)")+" translateZ(0px)",zIndex:a?2:1}}}),[t,n,a,o]);return(0,r.jsx)(g.Z,{$eager:n===p.MB,alt:i,src:n,style:l,...c})};var w=e=>{let{icon:t,name:n,showShortcutIcon:a,subIcons:i,view:o}=e;const s=(0,f.useMemo)((()=>a?i?.filter((e=>e!==p.MB)):i),[a,i]),c=(0,f.useMemo)((()=>s?.filter((e=>e!==t))||[]),[t,s]);return(0,r.jsx)(r.Fragment,{children:c.map(((e,a)=>(0,r.jsx)(h,{baseIcon:t,icon:e,isFirstImage:0===a,name:n,totalSubIcons:c.length,view:o},e)))})},v=n(26724),y=n(56758),A=n(25804),E=n(62065),k=n(20876),x=n(1864),S=e=>{const{setForegroundId:t}=(0,E.k)(),{createPath:r,updateFolder:a}=(0,v.o)(),{minimize:i,open:o,url:s}=(0,y.z)(),c=(0,k.R)();return(0,f.useCallback)((async(l,u)=>{const{preferProcessIcon:d,singleton:m,icon:b}=A.Z[l]||{},f=Object.keys(c.current).find((e=>e.startsWith(`${l}${p.CC}`)));let g=e;if(e.startsWith("ipfs://")){const{getIpfsFileName:t,getIpfsResource:i}=await n.e(5062).then(n.bind(n,95062)),o=await i(e);g=(0,x.join)(p.Ll,await r(await t(e,o),p.Ll,o)),a(p.Ll,(0,x.basename)(g))}m&&f?(s(f,g),c.current[f].minimized&&i(f),t(f)):o(l,{url:g},m||u===p._l||d?b:u)}),[r,i,o,c,t,s,a,e])},$=n(25449);const F=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),M=[".aac",".mp3",".ogg",".wav"],L=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".ogv",".webm",".wmv"]),T=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"];var O=n(34254);const R=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),C=[".bmp",".gif",".jpeg",".jpg",".png",".psd",".svg",".tiff"];var D=n(48764).Buffer,I=(e,t,r,o,s,c,l,u,d)=>{let{archiveFiles:m,deleteLocalPath:b,downloadFiles:g,extractFiles:h,newShortcut:w}=s,{blurEntry:k,focusEntry:I}=c;const{open:j,url:z}=(0,y.z)(),{setWallpaper:P}=(0,E.k)(),W=(0,x.basename)(r),B=l.includes(W),Z=S(e),{copyEntries:N,createPath:U,lstat:H,mapFs:K,moveEntries:G,readFile:V,rootFs:Q,unMapFs:X,updateFolder:Y}=(0,v.o)(),{contextMenu:_}=(0,$.H)(),{onContextMenuCapture:q,...J}=(0,f.useMemo)((()=>_?.((()=>{const s=(0,O.RT)(e),{process:c=[]}=s in a.Z?a.Z[s]:{},f=c.filter((e=>e!==t)),v=f.filter((e=>e!==t)),y=()=>1!==l.length&&B?[...new Set([r,...l.map((e=>(0,x.join)((0,x.dirname)(r),e)))])]:[r],E=[],k=(0,O.RT)(r),S=k===p.zm,$=Q?.mountList.some((e=>e===r&&"FileSystemAccess"===Q?.mntMap[e]?.getName()));if(!d&&!$){const e=(0,i.Wd)(s);if(E.push({action:()=>G(y()),label:"Cut"},{action:()=>N(y()),label:"Copy"},p.Os),(e||S||!k&&!s)&&E.push({action:()=>y().forEach((async t=>{const n=e&&!(await H(t)).isDirectory()?e:"FileExplorer";w(t,n)})),label:"Create shortcut"}),E.push({action:()=>y().forEach((e=>b(e))),label:"Delete"},{action:()=>o(W),label:"Rename"}),r)if(r===(0,x.join)(p.Ll,p.Bb)){if("function"==typeof FileSystemHandle){const e=(e,t)=>{K(e,t).then((e=>{Y("/",e),j("FileExplorer",{url:(0,x.join)("/",e)})})).catch((()=>{}))},t="showDirectoryPicker"in window,n="function"==typeof navigator.storage?.getDirectory&&!(0,O.vU)();E.unshift(...t?[{action:()=>e("/"),label:"Map directory"}]:[],...n?[{action:async()=>{try{e("/OPFS",await navigator.storage.getDirectory())}catch{}},label:"Map OPFS"}]:[],...t||n?[p.Os]:[])}}else{E.unshift(p.Os),(p.Ao.has(k)||p.my.has(k))&&E.unshift({action:()=>h(r),label:"Extract Here"});const i=F.has(k),o=R.has(k),s=L.has(k);if(i||o||s){const e=i||s,t=e?i?M:T:C;E.unshift(p.Os,{label:"Convert to",menu:t.filter((e=>e!==k)).map((t=>{const a=t.replace(".","");return{action:async()=>{const t=await Promise.all(y().map((async e=>[e,await V(e)]))),i=e?(await n.e(8844).then(n.bind(n,98844))).transcode:(await n.e(1026).then(n.bind(n,51026))).convert,o=await i(t,a);await Promise.all(o.map((async e=>{let[t,n]=e;const a=(0,x.basename)(t),i=(0,x.dirname)(r);Y(i,await U(a,i,n))})))},label:a.toUpperCase()}}))})}p.Tj.includes(k)&&E.unshift(p.Os,{label:"Convert to",menu:p.Tj.filter((e=>e!==k)).map((e=>{const t=e.replace(".","");return{action:()=>{y().forEach((async e=>{const a=`${(0,x.dirname)(e)}/${(0,x.basename)(e,(0,x.extname)(e))}.${t}`,{convertSheet:i}=await n.e(7526).then(n.bind(n,37526)),o=await i(await V(e),t),s=(0,x.dirname)(r);Y(s,await U((0,x.basename)(a),s,D.from(o)))}))},label:t.toUpperCase()}}))}),".m3u"!==k&&p.uH.has(k)&&E.unshift(p.Os,{action:()=>{y().forEach((async e=>{const t=`${(0,x.dirname)(e)}/${(0,x.basename)(e,(0,x.extname)(e))}.m3u`,{createM3uPlaylist:a,tracksFromPlaylist:i}=await n.e(8757).then(n.bind(n,68757)),o=a(await i((await V(e)).toString(),(0,O.RT)(e))),s=(0,x.dirname)(r);Y(s,await U((0,x.basename)(t),s,D.from(o)))}))},label:"Convert to M3U"}),E.unshift({action:()=>m(y()),label:"Add to archive..."},{action:()=>g(y()),label:"Download"}),S||"FileExplorer"===t||a.y.forEach((t=>{t===e||v.includes(t)||v.push(t)}))}E.unshift(p.Os)}$&&E.push(p.Os,{action:()=>X(r),label:"Disconnect"}),p.ru.has(s)&&E.unshift({action:()=>{j("Paint",{url:e})},label:"Edit"});const I=p.qy.has(k);if((I||p.lM.has(k)&&!p.GM.has(k))&&E.unshift({label:"Set as desktop background",...I?{action:()=>P(r)}:{menu:[{action:()=>P(r,"fill"),label:"Fill"},{action:()=>P(r,"fit"),label:"Fit"},{action:()=>P(r,"stretch"),label:"Stretch"},{action:()=>P(r,"tile"),label:"Tile"},{action:()=>P(r,"center"),label:"Center"}]}}),v.length>0&&E.unshift({label:"Open with",menu:v.map((e=>{const{icon:t,title:n}=A.Z[e]||{};return{action:()=>{Z(e,t)},icon:t,label:n}}))}),t){const{icon:n}=A.Z[t]||{};if(S&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")){const t=""===s||".zip"===s;E.unshift({action:()=>j("FileExplorer",{url:(0,x.dirname)(e)},""),label:`Open ${t?"folder":"file"} location`})}u&&"FileExplorer"===t&&!p.my.has(s)&&E.unshift({action:()=>{Z(t,n)},label:"Open in new window"}),E.unshift({action:()=>{"FileExplorer"===t&&u&&!p.my.has(s)?z(u,e):Z(t,n)},icon:n,label:"Open",primary:!0})}return E}))),[m,W,z,_,N,U,b,g,h,u,l,B,H,K,G,w,j,Z,r,t,V,d,Q?.mntMap,Q?.mountList,o,P,X,Y,e]);return{onContextMenuCapture:e=>{B||(k(),I(W)),q(e)},...J}},j=n(55785),z=n(21157),P=n(35778),W=n(5152),B=n.n(W),Z=n(30663),N=n(23988),U=n(48764).Buffer;const H=B()((()=>n.e(631).then(n.bind(n,50631)).then((e=>e.Down))),{loadableGenerated:{webpack:()=>[50631]}}),K=B()((()=>n.e(9932).then(n.bind(n,29932))),{loadableGenerated:{webpack:()=>[29932]}}),G=[],V=[];var Q=e=>{let{fileActions:t,fileManagerId:n,fileManagerRef:c,focusedEntries:l,focusFunctions:u,hideShortcutIcon:d,isLoadingFileManager:m,loadIconImmediately:h,name:A,path:E,readOnly:k,renaming:$,selectionRect:F,setRenaming:M,stats:L,useNewFolderIcon:T,view:R}=e;const{blurEntry:C,focusEntry:D}=u,{url:W}=(0,y.z)(),[{comment:B,getIcon:Q,icon:X,pid:Y,subIcons:_,url:q},J]=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[r,a]=(0,f.useState)((()=>({icon:"",pid:"",url:""}))),o=(0,f.useRef)(!1),s=e=>{a(e),o.current=!1},{fs:c,rootFs:l}=(0,v.o)();return(0,f.useEffect)((()=>{if(!o.current&&c&&l){o.current=!0;const r=(0,O.RT)(e);!r||t&&!p.my.has(r)&&"FileSystemAccess"!==l.mntMap[e]?.getName()?(0,i.g7)(c,l,e,t,n,s):(0,i.Z7)(c,e,r,s)}}),[c,t,e,l,n]),[r,a]}(E,L.isDirectory(),T),ee=S(q),{createPath:te,exists:ne,mkdirRecursive:re,pasteList:ae,readFile:ie,stat:oe,unlink:se,updateFolder:ce,writeFile:le}=(0,v.o)(),[ue,de]=(0,f.useState)(!1),{formats:me,sizes:be}=(0,o.Fg)(),fe="list"===R,ge=(0,f.useRef)(null),pe=(0,f.useRef)(null),he=(0,x.basename)(E),we=(0,O.RT)(q),ye=(0,f.useMemo)((()=>p.lM.has(we)||p.qy.has(we)||(0,O.yk)(q)),[q,we]),Ae=1===l.length&&l[0]===he,Ee=(0,O.RT)(E),ke=Ee===p.zm,xe=ke?q:E,Se=(0,j.Z)({callback:async(e,t)=>{if(!l.includes(he)){const n=await te(e,xe,t);n&&ce(xe,n)}},directory:xe,onDragLeave:()=>ge.current?.parentElement?.classList.remove("focus-within"),onDragOver:()=>ge.current?.parentElement?.classList.add("focus-within")}),$e="FileExplorer"===Y,Fe=(0,f.useMemo)((()=>((e,t,n,r)=>{const a=e.replace(/-/g,p.Zf),{lines:o}=(0,i.oc)(a,t,n,r);return o.length>2?`${(e.includes(" ")?o.slice(0,2).join(""):o[0]).slice(0,-3)}...`:a})(A,be.fileEntry.fontSize,me.systemFont,be.fileEntry[fe?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"])),[me.systemFont,fe,A,be.fileEntry]),Me=(0,f.useRef)(null),Le=(0,f.useRef)(!1),Te=(0,f.useRef)(!1),Oe=(0,f.useRef)(),Re=(0,f.useCallback)((async()=>{if(L.isDirectory())return"";if(ke)return B||(q?q.startsWith("http:")||q.startsWith("https:")?decodeURIComponent(q):`Location: ${(0,x.basename)(q,(0,x.extname)(q))} (${(0,x.dirname)(q)})`:"");const e=a.Z[Ee]?.type||`${Ee.toUpperCase().replace(".","")} File`,t=L.size<0?await oe(E):L,{size:n}=t,r=(0,i.GA)(E,t),o=(0,O.UR)(n);return`Type: ${e}${"-1"===o?"":`\nSize: ${o}`}\nDate modified: ${new Date(r).toISOString().slice(0,10)} ${new Intl.DateTimeFormat(p.ZW,me.dateModified).format(r)}`}),[B,Ee,me.dateModified,ke,E,oe,L,q]),[Ce,De]=(0,f.useState)(),Ie=(0,f.useCallback)((()=>{$e&&n&&!p.my.has(we)?(W(n,q),C()):$e&&fe?de((e=>!e)):ee(Y,ye?void 0:X)}),[C,W,n,X,ye,fe,ee,$e,Y,q,we]);return(0,f.useEffect)((()=>{if(!m&&!Le.current){const e=async()=>{if(X.startsWith("blob:")||X.startsWith("data:")){if(X.startsWith("data:image/jpeg;base64,"))return;Le.current=!0;const e=(0,x.join)(p.Xo,`${E}${p.Qy}`);if(".ico"!==we&&!q.startsWith(p.OT)&&!q.startsWith(p.P7)&&!await ne(e)&&Me.current instanceof HTMLImageElement){const t=async()=>{if(Me.current instanceof HTMLImageElement){const n=()=>(V.shift(),V[0]?.());let r="";if(Me.current.currentSrc.startsWith("data:image/gif;base64,"))r=Me.current.currentSrc;else{const{clientHeight:e,clientWidth:n}=Me.current,{naturalHeight:a,naturalWidth:i}=Me.current,o=i/a;let s,c;o!==n/e&&(i>a?s=e/o:c=n*o);const l=await(0,O.mZ)();let u;try{u=await(l?.toCanvas(Me.current,{height:s,skipAutoScale:!0,style:{objectPosition:s?"top":c?"left":void 0},width:c}))}catch{}u&&!(0,O.Tv)(u)?r=u.toDataURL("image/png"):setTimeout(t,p.jx.WINDOW)}r&&V.push((async()=>{const t=(0,x.dirname)(e);await re(t);const a=U.from(r.replace(/data:(.*);base64,/,""),"base64");return await le(e,a,!0),J((e=>({...e,icon:(0,O.YS)(a)}))),ce(t,(0,x.basename)(e)),n()})),1===V.length&&await V[0]()}};Me.current.complete?t():Me.current.addEventListener("load",t,p.K7)}}else{if(Le.current)return;const e=(0,x.join)(p.Xo,`${E}${p.Qy}`);if(await ne(e)){const t=await ie(e);if(t.length>=p.zj)Le.current||(Le.current=!0,J((e=>({...e,icon:(0,O.YS)(t)}))));else try{await se(e),ce((0,x.dirname)(E))}catch{}}else!Te.current&&ge.current&&"function"==typeof Q&&(Te.current=!0,new IntersectionObserver(((e,t)=>{let[{intersectionRatio:n}]=e;n>0&&(t.disconnect(),Oe.current=new AbortController,Q(Oe.current.signal))}),{root:c.current,rootMargin:"5px"}).observe(ge.current))}};e()}}),[ne,c,Q,X,m,re,E,ie,J,se,ce,q,we,le]),(0,f.useEffect)((()=>()=>{try{Oe?.current?.abort?.()}catch{}}),[]),(0,f.useLayoutEffect)((()=>{if(ge.current&&c.current){const e=l.includes(he),t=G.includes(he),n=e||t;if(e&&t&&G.splice(G.indexOf(he),1),F){const e=((e,t,n,r)=>{const{x:a=0,y:i=0,width:o=0,height:s=0}=n,c=new DOMRect(a,i,Number(o),Number(s));return!(e.left-t.left>=c.right||e.top-t.top>=c.bottom||e.right-t.left<=c.left||e.bottom-t.top+r<=c.top)})(ge.current.getBoundingClientRect(),c.current.getBoundingClientRect(),F,c.current.scrollTop);e&&!n?(G.push(he),D(he),ge.current.focus(p.eS)):!e&&n&&C(he)}else n&&1===l.length&&!ge.current.contains(document.activeElement)&&(C(),D(he),ge.current.focus(p.eS))}}),[C,c,he,D,l,F]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{ref:ge,"aria-label":A,onMouseOver:()=>Re().then(De),title:Ce,...fe&&{...p.Cz,as:z.m.button},...(0,P.Z)(Ie,fe),...$e&&Se,...I(q,Y,E,M,t,u,l,n,k),children:(0,r.jsxs)(s,{ref:pe,$renaming:$,...fe&&(0,N.G)(pe.current),children:[(0,r.jsx)(g.Z,{ref:Me,$eager:h,$moving:"move"===ae[E],alt:A,src:X,...b[R]}),(0,r.jsx)(w,{icon:X,name:A,showShortcutIcon:Boolean(d||L.systemShortcut),subIcons:_,view:R}),$?(0,r.jsx)(K,{name:A,path:E,renameFile:(e,n)=>{t.renameFile(e,n),M("")}}):(0,r.jsx)("figcaption",{children:Ae&&A.length!==Fe.length?A:Fe}),fe&&$e&&(0,r.jsx)(H,{flip:ue})]})}),ue&&(0,r.jsx)(ve,{url:q,view:"list",hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})};const X=o.vJ`
  body {
    pointer-events: none;
  }
`,Y=o.ZP.span.withConfig({componentId:"sc-4e222ce4-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.highlightBackground}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.highlight}`}};
  position: absolute;
  z-index: 2;
`;var _=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X,{}),(0,r.jsx)(Y,{...e})]});const q=p.i2/60;var J=e=>{const[t,n]=(0,f.useState)((()=>Object.create(null))),[r,a]=(0,f.useState)((()=>Object.create(null))),{x:i,y:o}=t,{height:s,width:c}=r,l=(0,f.useRef)(),{menu:u,setMenu:d}=(0,$.H)(),m=Object.keys(u).length>0,b="number"==typeof i&&"number"==typeof o,g=()=>{a(Object.create(null)),n(Object.create(null))},p=!m&&"number"==typeof c&&"number"==typeof s&&b,h=p?{height:`${Math.abs(Number(s))}px`,transform:`translate(\n            ${Number(i)+(Number(c)<0?Number(c):0)}px,\n            ${Number(o)+(Number(s)<0?Number(s):0)}px)`,width:`${Math.abs(Number(c))}px`}:{};return{isSelecting:p,selectionEvents:{onMouseDown:t=>{let{clientX:r,clientY:i,target:o}=t;if(o===e.current){const{scrollTop:t}=e.current,{x:o=0,y:s=0}=e.current.getBoundingClientRect();a(Object.create(null)),n({x:r-o,y:i-s+t}),u&&d(Object.create(null))}},...b?{onMouseLeave:g,onMouseMove:t=>{let{clientX:n,clientY:r}=t;const{scrollTop:s=0}=e.current||{},{x:c=0,y:u=0}=e.current?.getBoundingClientRect()||{};l.current||(a({height:r-u-(o||0)+s,width:n-c-(i||0)}),l.current=window.setTimeout((()=>{l.current=void 0}),q))},onMouseUp:g}:{}},selectionRect:p?{...t,...r}:void 0,selectionStyling:h}},ee=(e,t,n,r,a)=>{let{blurEntry:i,focusEntry:o}=t;const s=(0,f.useRef)(n.current?.lastElementChild),[c,l]=(0,f.useState)(-1),{iconPositions:u,sortOrders:d,setIconPositions:m,setSortOrder:b}=(0,E.k)(),g=(0,f.useRef)(),h=(0,f.useRef)(Object.create(null)),w=(0,f.useRef)(!1),v=e=>{let{clientX:t,clientY:n}=e;h.current={...h.current,x:t,y:n}},y="MAIN"===n.current?.parentElement?.tagName,A=t=>r=>{(0,O.nK)(r),a&&e.length>0?((0,O.vi)(t,n.current,u,d,h.current,e,m),n.current?.removeEventListener("dragover",v)):-1!==c&&b(t,(t=>{const n=t.filter((t=>!e.includes(t)));return n.splice(c,0,...e),n})),i()},k=t=>n=>{let{target:r}=n;if(!a&&r instanceof HTMLLIElement){const{children:n=[]}=r.parentElement||{},a=e.includes(t);l(a?-1:[...n].indexOf(r))}},S=(t,r,i)=>c=>{if(i)(0,O.nK)(c);else{if(o(r),c.nativeEvent.dataTransfer?.setData("application/json",JSON.stringify(e.length<=1?[(0,x.join)(t,r)]:e.map((e=>(0,x.join)(t,e))))),e.length>1&&g.current){const r=Object.keys(u);a&&!w.current&&(s.current&&n.current?.lastElementChild&&n.current.lastElementChild!==s.current||e.every((e=>r.includes(`${t}/${e}`))))&&(w.current=!0);const i=y?c.nativeEvent.clientX:c.nativeEvent.offsetX,o=w.current?c.nativeEvent.clientY:c.nativeEvent.offsetY;c.nativeEvent.dataTransfer?.setDragImage(g.current,i,o),a&&!w.current&&(w.current=!0)}Object.assign(c.dataTransfer,{effectAllowed:"move"}),a&&(h.current=e.length>1?{offsetX:c.nativeEvent.offsetX,offsetY:c.nativeEvent.offsetY}:Object.create(null),n.current?.addEventListener("dragover",v,{passive:!0}))}},$=(0,f.useCallback)((async()=>{if(n.current){const e=[...n.current.querySelectorAll(".focus-within")];if(e.length>1){g.current?g.current.src="":g.current=new Image;const t=await(0,O.mZ)();let r;try{r=await(t?.toPng(n.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some((e=>e.contains(t))),imagePlaceholder:p.RJ,skipAutoScale:!0}))}catch{}r&&(g.current.src=r)}}}),[n]),F=(0,f.useRef)();return(0,f.useEffect)((()=>{n.current?.lastElementChild&&!s.current&&(s.current=n.current.lastElementChild)}),[n,e]),(0,f.useEffect)((()=>{F.current&&window.clearTimeout(F.current),F.current=window.setTimeout((()=>{F.current=void 0,$()}),p.i2/2)}),[e,$]),(0,f.useEffect)((()=>{!r&&e.length>1&&$()}),[e.length,r,$]),(e,t,n)=>({draggable:!0,onDragEnd:A(e),onDragOver:k(t),onDragStart:S(e,t,n),style:y?u[(0,x.join)(e,t)]:void 0})},te=n(62727),ne=n(6529),re=(e,t,n,r,a,i,o,s,c,l)=>{let{blurEntry:u,focusEntry:d}=a,{newPath:m,pasteToFolder:b}=i;const{copyEntries:g,deletePath:h,moveEntries:w}=(0,v.o)(),{url:A}=(0,y.z)(),{openTransferDialog:k}=(0,te.Z)(),{foregroundId:S}=(0,E.k)();return(0,f.useEffect)((()=>{const e=e=>{e.clipboardData?.files?.length&&(!S&&t===p.Ll||S===c)&&(e.stopImmediatePropagation?.(),(0,ne.W)(e.clipboardData.files,t,m).then(k))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)}),[S,c,m,k,t]),(0,f.useCallback)((a=>i=>{if("list"===l)return;const{ctrlKey:m,key:f,target:v,shiftKey:y}=i;if(!y)if(m)switch(f.toLowerCase()){case"a":if((0,O.nK)(i),v instanceof HTMLOListElement){const[e]=v.querySelectorAll("button");e?.focus(p.eS)}Object.keys(e).forEach((e=>d(e)));break;case"c":(0,O.nK)(i),g(n.map((e=>(0,x.join)(t,e))));break;case"x":(0,O.nK)(i),w(n.map((e=>(0,x.join)(t,e))));break;case"v":i.stopPropagation(),b()}else switch(f){case"F2":a&&((0,O.nK)(i),r(a));break;case"F5":c&&((0,O.nK)(i),o());break;case"Delete":n.length>0&&((0,O.nK)(i),n.forEach((async e=>{const n=(0,x.join)(t,e);await h(n),o(void 0,n)})),u());break;case"Backspace":c&&((0,O.nK)(i),A(c,(0,x.dirname)(t)));break;case"Enter":v instanceof HTMLButtonElement&&((0,O.nK)(i),(0,O.TF)(v,2));break;default:if(f.startsWith("Arrow")){if((0,O.nK)(i),!(v instanceof HTMLElement))return;let e=v;if(!(v instanceof HTMLButtonElement||(e=v.querySelector("button"),e)))return;const{x:t,y:n,height:r,width:a}=e.getBoundingClientRect();let o="ArrowUp"===f||"ArrowDown"===f?document.elementFromPoint(t,n+("ArrowUp"===f?-r:2*r)):document.elementFromPoint(t+("ArrowLeft"===f?-a:2*a),n);if(o instanceof HTMLOListElement){const t=e.closest("li");if(t instanceof HTMLLIElement){const e=[...o.children],n=e.indexOf(t);"ArrowUp"!==f&&"ArrowDown"!==f||(o=e["ArrowUp"===f?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}const c=o?.closest("button");let l=c;c instanceof HTMLButtonElement&&s?.current?.contains(c)||(l=e),l?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}}),[u,A,g,h,s,e,d,n,c,w,b,r,o,t,l])},ae=n(42151),ie=n(58363),oe=n(21638),se=n(48764).Buffer;const ce=()=>window.WebampGlobal?.store.dispatch({enabled:!1,type:"SET_MILKDROP_DESKTOP"}),le=(0,i.sK)(".whtml"),ue=(0,i.sK)(".txt"),de="video/webm",me="video/mp4";let be,fe=2;var ge=(e,t,r)=>{let{addToFolder:a,newPath:i,pasteToFolder:o,sortByOrder:[[s,c],l]}=t;const{contextMenu:u}=(0,$.H)(),{mapFs:d,pasteList:m={},readFile:b,writeFile:g,updateFolder:h}=(0,v.o)(),{setWallpaper:w,setIconPositions:A,wallpaperImage:k}=(0,E.k)(),S=(0,f.useCallback)((e=>{if("VANTA"===e){fe-=1;const e=0===fe;w("VANTA"+(e?" WIREFRAME":"")),e&&(fe=2)}else fe=2,w(e)}),[w]),{open:F}=(0,y.z)(),M=(0,f.useCallback)(((t,n)=>{A((t=>Object.fromEntries(Object.entries(t).filter((t=>{let[n]=t;return(0,x.dirname)(n)!==e}))))),l(""===t?e=>{let[t]=e;return[t,n]}:((e,t)=>n=>{let[r,a]=n;return[e,r===e?!a:t]})(t,n))}),[A,l,e]),L=(0,f.useMemo)((()=>r&&"function"==typeof navigator?.mediaDevices?.getDisplayMedia&&(window?.MediaRecorder?.isTypeSupported(de)||window?.MediaRecorder?.isTypeSupported(me))&&!(0,O.G6)()),[r]),T=(0,f.useCallback)((async()=>{if(be){const{active:e}=be;if(be.getTracks().forEach((e=>e.stop())),be=void 0,e)return}const e={video:{frameRate:30},...!(0,O.vU)()&&!(0,O.G6)()&&{preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"include",systemAudio:"include"}};be=await navigator.mediaDevices.getDisplayMedia(e);const[t]=be.getVideoTracks(),{height:r,width:a}=t.getSettings(),i=new MediaRecorder(be,{bitsPerSecond:r&&a?r*a*30:void 0,mimeType:MediaRecorder.isTypeSupported(de)?de:me}),o=`Screen Capture ${(0,O.gE)()}.webm`,s=(0,x.join)(p.Ll,o),c=Date.now();let l=!1;i.start(),i.addEventListener("dataavailable",(async e=>{const{data:t}=e;if(t){const e=se.from(await t.arrayBuffer());if(await g(s,l?se.concat([await b(s),e]):e,l),"inactive"===i.state){const{default:e}=await n.e(6027).then(n.t.bind(n,86027,23));e((0,O.V4)(await b(s)),Date.now()-c,(async e=>{await g(s,se.from(await e.arrayBuffer()),!0),h(p.Ll,o)}))}l=!0}}))}),[b,h,g]),R=(0,oe.Z)();return(0,f.useMemo)((()=>u?.((()=>{const t={action:()=>d(e).then((t=>{h(e,t),F("FileExplorer",{url:(0,x.join)(e,t)})})).catch((()=>{})),label:"Map directory"},n=[{action:()=>a(),label:"Add file(s)"},...(0,p.df)()?[t]:[]],l=document.querySelector("main .webamp-desktop canvas")instanceof HTMLCanvasElement;return[{label:"Sort by",menu:[{action:()=>M("name",!0),label:"Name",toggle:"name"===s},{action:()=>M("size",!1),label:"Size",toggle:"size"===s},{action:()=>M("type",!0),label:"Item type",toggle:"type"===s},{action:()=>M("date",!1),label:"Date modified",toggle:"date"===s},p.Os,{action:()=>M("",!0),label:"Ascending",toggle:c},{action:()=>M("",!1),label:"Descending",toggle:!c}]},{action:()=>h(e),label:"Refresh"},...r?[p.Os,{label:"Background",menu:ie.ov.filter((e=>{let{requiresWebGPU:t}=e;return!t||R})).reduce(((e,t)=>[...e,{action:()=>{l&&ce?.(),t.id&&S(t.id)},label:t.name||t.id,toggle:t.startsWith?k.startsWith(t.id):k===t.id}]),l?[{action:ce,checked:!0,label:"Music Visualization"},p.Os]:[])},...L?[{action:T,label:be?.active?"Stop screen capture":"Capture screen"}]:[]]:[],p.Os,...n,{action:()=>F("Terminal",{url:e}),label:"Open Terminal here"},{action:()=>o(),disabled:0===Object.keys(m).length,label:"Paste"},p.Os,{label:"New",menu:[{action:()=>i("New folder",void 0,"rename"),icon:p.XN,label:"Folder"},p.Os,{action:()=>i("New Rich Text Document.whtml",se.from(""),"rename"),icon:le,label:"Rich Text Document"},{action:()=>i("New Text Document.txt",se.from(""),"rename"),icon:ue,label:"Text Document"}]},...r?[p.Os,{action:()=>F("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}))),[a,L,T,u,R,c,r,d,i,F,m,o,S,s,h,M,e,k])},pe=n(89609);const he=B()((()=>n.e(8598).then(n.bind(n,48598))),{loadableGenerated:{webpack:()=>[48598]}}),we=B()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}});var ve=e=>{let{allowMovingDraggableEntries:t,hideFolders:n,hideLoading:a,hideScrolling:i,hideShortcutIcons:o,id:s,isDesktop:c,loadIconsImmediately:l,preloadShortcuts:u,readOnly:d,showStatusBar:b,skipFsWatcher:g,skipSorting:h,url:w,useNewFolderIcon:y,view:A}=e;const[E,k]=(0,f.useState)(w),[S,$]=(0,f.useState)(""),[F,M]=(0,f.useState)(!1),L=(0,f.useRef)(null),{focusedEntries:T,focusableEntry:R,...C}=(e=>{const[t,n]=(0,f.useState)([]),r=(0,f.useCallback)((e=>n(e?t=>t.filter((t=>t!==e)):[])),[]),a=(0,f.useCallback)((e=>n((t=>t.includes(e)?t:[...t,e]))),[]),i=(0,f.useRef)(!1),o=(0,f.useCallback)((t=>{const{relatedTarget:n,target:a}=t,o=e.current===n;o&&i.current?((0,O.nK)(t),a?.focus(p.eS)):!o&&n instanceof HTMLElement&&e.current?.contains(n)||r()}),[r,e]),s=(0,f.useCallback)((()=>{i.current=!0,window.requestAnimationFrame((()=>{i.current=!1}))}),[]);return{blurEntry:r,focusEntry:a,focusableEntry:e=>{const n=t.includes(e),i=1===t.length&&t[0]===e;return{className:(0,O.Wy)({"focus-within":n,"only-focused":i}),onBlurCapture:o,onFocusCapture:s,onMouseDown:t=>{let{ctrlKey:i}=t;i?n?r(e):a(e):n||(r(),a(e))}}},focusedEntries:t}})(L),{fileActions:D,files:I,folderActions:z,isLoading:P,updateFiles:W}=(0,ae.Z)(w,$,C,{hideFolders:n,hideLoading:a,preloadShortcuts:u,skipFsWatcher:g,skipSorting:h}),{mountFs:B,rootFs:Z,stat:N}=(0,v.o)(),{StyledFileEntry:U,StyledFileManager:H}=m[A],{isSelecting:K,selectionRect:G,selectionStyling:V,selectionEvents:X}=J(L),Y=ee(T,C,L,K,t),q=(0,j.Z)({callback:z.newPath,directory:w,updatePositions:t}),te=ge(w,z,c),ne=!a&&P||w!==E,ie=re(I,w,T,$,C,z,W,L,s,A),[oe,se]=(0,f.useState)("prompt"),ce=(0,f.useRef)(!1),le=(0,f.useMemo)((()=>""===S?ie():void 0),[ie,S]);return(0,f.useEffect)((()=>{ce.current||"granted"===oe||"FileSystemAccess"!==Z?.mntMap[E]?.getName()||(ce.current=!0,(0,pe.ZK)(E).then((e=>{const t="granted"===e;e&&!t||(se("granted"),t&&W())})).catch((e=>{"Permission already granted"===e.message&&se("granted")})).finally((()=>{ce.current=!1})))}),[E,oe,Z?.mntMap,W]),(0,f.useEffect)((()=>{!F&&p.my.has((0,O.RT)(w))&&(async()=>{(await N(w)).isDirectory()||M((e=>(e||B(w).then((()=>setTimeout(W,100))).catch((()=>{})),!0)))})()}),[B,F,N,W,w]),(0,f.useEffect)((()=>{w!==E&&(z.resetFiles(),k(w),se("denied"))}),[E,z,w]),(0,f.useEffect)((()=>{ne||L.current?.focus(p.eS)}),[ne]),(0,r.jsxs)(r.Fragment,{children:[ne?(0,r.jsx)(we,{}):(0,r.jsxs)(H,{ref:L,$scrollable:!i,onKeyDown:le,...!d&&{$selecting:K,...q,...te,...X},...p.LL,children:[K&&(0,r.jsx)(_,{style:V}),Object.keys(I).map((e=>(0,r.jsx)(U,{$selecting:K,$visible:!P,...!d&&Y(w,e,S===e),...""===S&&{onKeyDown:ie(e)},...R(e),children:(0,r.jsx)(Q,{fileActions:D,fileManagerId:s,fileManagerRef:L,focusFunctions:C,focusedEntries:T,hideShortcutIcon:o,isLoadingFileManager:P,loadIconImmediately:l,name:(0,x.basename)(e,p.zm),path:(0,x.join)(w,e),readOnly:d,renaming:S===e,selectionRect:G,setRenaming:$,stats:I[e],useNewFolderIcon:y,view:A})},e)))]}),b&&(0,r.jsx)(he,{count:ne?0:Object.keys(I).length,directory:w,fileDrop:q,selected:T})]})}},55785:function(e,t,n){var r=n(62727),a=n(6529),i=n(42151),o=n(26724),s=n(56758),c=n(62065),l=n(1864),u=n(67294),d=n(64358),m=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:b,onDragLeave:f,onDragOver:g,updatePositions:p}=e;const{url:h}=(0,s.z)(),{iconPositions:w,sortOrders:v,setIconPositions:y}=(0,c.k)(),{mkdirRecursive:A,updateFolder:E,writeFile:k}=(0,o.o)(),x=(0,u.useCallback)((async(e,t,n)=>{if(b)if(t){const r=(0,l.join)(d.Ll,e);await A(d.Ll),await k(r,t,!0)&&(n===i.v.UPDATE_URL&&h(b,r),E(d.Ll,e))}else n===i.v.UPDATE_URL&&h(b,e)}),[b,A,E,h,k]),{openTransferDialog:S}=(0,r.Z)();return{onDragLeave:f,onDragOver:e=>{g?.(e),(0,m.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,a.p4)(e);if(0===t.length&&""===r)return;const i={x:e.clientX,y:e.clientY};let o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,l.basename)(e)===(0,l.relative)(n,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,l.basename)(e,(0,l.extname)(e))} (${t})${(0,l.extname)(e)}`}while(w[r]);return(0,l.basename)(r)})),(0,m.vi)(n,e.target,w,v,i,o,y)}(0,a.WG)(e,t||x,n,S,Boolean(b))}}}},62392:function(e,t,n){const r=n(14141).ZP.li.withConfig({componentId:"sc-2dc7a614-0"})`
  display: ${e=>{let{$visible:t}=e;return t?"flex":"none"}};
  height: min-content;
  padding: 2px;

  &.focus-within,
  &:hover {
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    &::before {
      content: "";
      inset: -1px;
      position: absolute;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -2px;
      place-items: center;

      figcaption {
        color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.text}};
        font-size: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.fontSize}};
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px 0;
        text-shadow: ${e=>{let{theme:t}=e;return t.colors.fileEntry.textShadow}};
        word-break: break-word;
      }

      picture {
        height: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};
        width: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};

        &:not(:first-of-type) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }
    }
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.background}};

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.border}`}};
    }
  }

  &.focus-within {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.backgroundFocused}};
    z-index: 1;

    &.only-focused {
      margin-bottom: -1000px;
    }

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocused}`}};
    }

    &:hover {
      background-color: ${e=>{let{theme:t,$selecting:n}=e;return n?t.colors.fileEntry.backgroundFocused:t.colors.fileEntry.backgroundFocusedHover}};

      &::before {
        border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocusedHover}`}};
      }
    }
  }
`;t.Z=r},1347:function(e,t,n){var r=n(14141),a=n(38060),i=n(64358);const o=r.ZP.ol.withConfig({componentId:"sc-796d7865-0"})`
  ${e=>{let{$scrollable:t}=e;return t?(0,a.Z)(i.BQ):void 0}};

  column-gap: ${e=>{let{theme:t}=e;return t.sizes.fileManager.columnGap}};
  contain: strict;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: ${e=>{let{theme:t}=e;return`repeat(auto-fill, ${t.sizes.fileManager.gridEntryWidth})`}};
  grid-template-rows: ${e=>{let{theme:t}=e;return`repeat(auto-fill, ${t.sizes.fileManager.gridEntryHeight})`}};
  height: 100%;
  overflow: ${e=>{let{$scrollable:t}=e;return t?void 0:"hidden"}};
  padding: ${e=>{let{theme:t}=e;return t.sizes.fileManager.padding}};
  place-content: flex-start;
  pointer-events: ${e=>{let{$selecting:t}=e;return t?"auto":void 0}};
  row-gap: ${e=>{let{theme:t}=e;return t.sizes.fileManager.rowGap}};

  main > & {
    grid-auto-flow: column;
    height: calc(100% - ${i.bK}px);
    overflow: visible;
    padding-bottom: 21px;
  }
`;t.Z=o},8011:function(e,t,n){const r=n(14141).ZP.ol.withConfig({componentId:"sc-b9b2a10d-0"})`
  margin-left: 7px;
  margin-top: 7px;
  width: 100%;

  picture:not(:first-of-type) {
    position: absolute;
  }
`;t.Z=r},35778:function(e,t,n){var r=n(67294),a=n(64358);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),i=(0,r.useRef)(0),o=(0,r.useCallback)((r=>{const o=()=>{r.stopPropagation(),e(r)},s=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},c=()=>{i.current>=5&&s(),void 0===n.current?(r.target.removeEventListener("pointermove",c),i.current=0):i.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(s,a.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",c,{passive:!0})):(s(),o())}),[e,t]);return{onClick:o}}},21638:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);const a=()=>{const[e,t]=(0,r.useState)(),n=(0,r.useCallback)((async()=>t(await(async()=>{if("undefined"==typeof navigator)return!1;if(!("gpu"in navigator))return!1;const e=await navigator.gpu.requestAdapter();return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,r.useEffect)((()=>{n()}),[n]),e}},38060:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(14141);const a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return r.iv`
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
    background-position-y: ${0===n?"center":`${n}px`};
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
`}},23988:function(e,t,n){n.d(t,{G:function(){return r}});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?{onMouseLeave:()=>e.removeAttribute("style"),onMouseMove:n=>{let{clientX:r,clientY:a,target:i}=n;if(e.contains(i)){const{left:n,top:i}=e.getBoundingClientRect(),o=r-n,s=a-i;Object.assign(e.style,{background:t?void 0:`radial-gradient(circle at ${o}px ${s}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`,borderImage:`radial-gradient(20% 75% at ${o}px ${s}px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / 1px / 0px stretch`})}}}:{}}}}]);