"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3106],{58363:function(e,t,n){n.d(t,{$3:function(){return s},QC:function(){return r},YH:function(){return a},dI:function(){return i},ov:function(){return o},vF:function(){return c}});const r={center:"center center",fill:"center center / cover",fit:"center center / contain",stretch:"center center / 100% 100%",tile:"50% 50%"},i={COASTAL_LANDSCAPE:()=>n.e(9973).then(n.bind(n,79973)),HEXELLS:()=>n.e(8699).then(n.bind(n,38699)),MATRIX:()=>n.e(5380).then(n.bind(n,85380)),STABLE_DIFFUSION:()=>n.e(7023).then(n.bind(n,27023)),VANTA:()=>n.e(473).then(n.bind(n,30473))},a={COASTAL_LANDSCAPE:()=>new Worker(n.tu(new URL(n.p+n.u(5183),n.b)),{name:"Wallpaper (Coastal Landscape)"}),HEXELLS:()=>new Worker(n.tu(new URL(n.p+n.u(3191),n.b)),{name:"Wallpaper (Hexells)"}),STABLE_DIFFUSION:()=>new Worker(n.tu(new URL(n.p+n.u(9629),n.b)),{name:"Wallpaper (Stable Diffusion)"}),VANTA:e=>new Worker(n.tu(new URL(n.p+n.u(8956),n.b)),{name:"Wallpaper (Vanta Waves)"+(e?` [${e}]`:"")})},o=[{id:"APOD",startsWith:!0},{id:"COASTAL_LANDSCAPE",name:"Coastal Landscape"},{id:"HEXELLS",name:"Hexells"},{id:"MATRIX 2D",name:"Matrix (2D)"},{id:"MATRIX 3D",name:"Matrix (3D)"},{id:"SLIDESHOW",name:"Picture Slideshow"},{id:"STABLE_DIFFUSION",name:"Stable Diffusion (Beta)",requiresWebGPU:!0},{id:"VANTA",name:"Vanta Waves",startsWith:!0}],s=":scope > canvas",c=":scope > video"},36717:function(e,t,n){n.d(t,{Z:function(){return H}});var r=n(85893),i=n(64382),a=n(87426),o=n(14141),s=o.ZP.figure.withConfig({componentId:"sc-5e52ee6b-0"})`
  pointer-events: ${e=>{let{$renaming:t}=e;return t?"all":void 0}};

  figcaption {
    pointer-events: none;
  }
`,c=n(48566),l=n(67294),u=n(42362),d=n(64358);const f=e=>{let{baseIcon:t,icon:n,isFirstImage:i,name:a,totalSubIcons:o,view:s}=e;const f=(0,l.useMemo)((()=>c.k[[d.MB,d.EV].includes(n)||n.startsWith("blob:")?s:"sub"]),[n,s]),m=(0,l.useMemo)((()=>{if(n===d.EV)return{zIndex:3};if(t===d._l){return{objectFit:"cover",transform:(i&&o-1>1?"matrix(0.4, 0.14, 0, 0.7, -4, 2)":"matrix(0.5, 0.05, 0, 0.7, 2, 1)")+" translateZ(0px)",zIndex:i?2:1}}}),[t,n,i,o]);return(0,r.jsx)(u.Z,{$eager:n===d.MB,alt:a,src:n,style:m,...f})};var m=e=>{let{icon:t,name:n,showShortcutIcon:i,subIcons:a,view:o}=e;const s=(0,l.useMemo)((()=>i?a?.filter((e=>e!==d.MB)):a),[i,a]),c=(0,l.useMemo)((()=>s?.filter((e=>e!==t))||[]),[t,s]);return(0,r.jsx)(r.Fragment,{children:c.map(((e,i)=>(0,r.jsx)(f,{baseIcon:t,icon:e,isFirstImage:0===i,name:n,totalSubIcons:c.length,view:o},e)))})},b=n(26724),g=n(56758),p=n(25804),h=n(62065),w=n(20876),v=n(1864),y=e=>{const{setForegroundId:t}=(0,h.k)(),{createPath:r,updateFolder:i}=(0,b.o)(),{minimize:a,open:o,url:s}=(0,g.z)(),c=(0,w.R)();return(0,l.useCallback)((async(l,u)=>{const{preferProcessIcon:f,singleton:m,icon:b}=p.Z[l]||{},g=Object.keys(c.current).find((e=>e.startsWith(`${l}${d.CC}`)));let h=e;if(e.startsWith("ipfs://")){const{getIpfsFileName:t,getIpfsResource:a}=await n.e(5062).then(n.bind(n,95062)),o=await a(e);h=(0,v.join)(d.Ll,await r(await t(e,o),d.Ll,o)),i(d.Ll,(0,v.basename)(h))}m&&g?(s(g,h),c.current[g].minimized&&a(g),t(g)):o(l,{url:h},m||u===d._l||f?b:u)}),[r,a,o,c,t,s,i,e])},A=n(25449);const k=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),E=[".aac",".mp3",".ogg",".wav"],x=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".ogv",".webm",".wmv"]),S=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"];var $=n(34254);const F=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),M=[".bmp",".gif",".jpeg",".jpg",".png",".psd",".svg",".tiff"];var L=n(48764).Buffer,T=(e,t,r,o,s,c,u,f,m)=>{let{archiveFiles:w,deleteLocalPath:T,downloadFiles:O,extractFiles:R,newShortcut:C}=s,{blurEntry:D,focusEntry:I}=c;const{open:j,url:Z}=(0,g.z)(),{setWallpaper:z}=(0,h.k)(),P=(0,v.basename)(r),W=u.includes(P),B=y(e),{copyEntries:N,createPath:U,lstat:H,mapFs:K,moveEntries:G,readFile:V,rootFs:Q,unMapFs:X,updateFolder:Y}=(0,b.o)(),{contextMenu:_}=(0,A.H)(),{onContextMenuCapture:q,...J}=(0,l.useMemo)((()=>_?.((()=>{const s=(0,$.RT)(e),{process:c=[]}=s in i.Z?i.Z[s]:{},l=c.filter((e=>e!==t)),b=l.filter((e=>e!==t)),g=()=>1!==u.length&&W?[...new Set([r,...u.map((e=>(0,v.join)((0,v.dirname)(r),e)))])]:[r],h=[],y=(0,$.RT)(r),A=y===d.zm,D=Q?.mountList.some((e=>e===r&&"FileSystemAccess"===Q?.mntMap[e]?.getName()));if(!m&&!D){const e=(0,a.Wd)(s);if(h.push({action:()=>G(g()),label:"Cut"},{action:()=>N(g()),label:"Copy"},d.Os),(e||A||!y&&!s)&&h.push({action:()=>g().forEach((async t=>{const n=e&&!(await H(t)).isDirectory()?e:"FileExplorer";C(t,n)})),label:"Create shortcut"}),h.push({action:()=>g().forEach((e=>T(e))),label:"Delete"},{action:()=>o(P),label:"Rename"}),r)if(r===(0,v.join)(d.Ll,d.Bb)){if("function"==typeof FileSystemHandle){const e=(e,t)=>{K(e,t).then((e=>{Y("/",e),j("FileExplorer",{url:(0,v.join)("/",e)})})).catch((()=>{}))},t="showDirectoryPicker"in window,n="function"==typeof navigator.storage?.getDirectory&&!(0,$.vU)();h.unshift(...t?[{action:()=>e("/"),label:"Map directory"}]:[],...n?[{action:async()=>{try{e("/OPFS",await navigator.storage.getDirectory())}catch{}},label:"Map OPFS"}]:[],...t||n?[d.Os]:[])}}else{h.unshift(d.Os),(d.Ao.has(y)||d.my.has(y))&&h.unshift({action:()=>R(r),label:"Extract Here"});const a=k.has(y),o=F.has(y),s=x.has(y);if(a||o||s){const e=a||s,t=e?a?E:S:M;h.unshift(d.Os,{label:"Convert to",menu:t.filter((e=>e!==y)).map((t=>{const i=t.replace(".","");return{action:async()=>{const t=await Promise.all(g().map((async e=>[e,await V(e)]))),a=e?(await n.e(8844).then(n.bind(n,98844))).transcode:(await n.e(1026).then(n.bind(n,51026))).convert,o=await a(t,i);await Promise.all(o.map((async e=>{let[t,n]=e;const i=(0,v.basename)(t),a=(0,v.dirname)(r);Y(a,await U(i,a,n))})))},label:i.toUpperCase()}}))})}d.Tj.includes(y)&&h.unshift(d.Os,{label:"Convert to",menu:d.Tj.filter((e=>e!==y)).map((e=>{const t=e.replace(".","");return{action:()=>{g().forEach((async e=>{const i=`${(0,v.dirname)(e)}/${(0,v.basename)(e,(0,v.extname)(e))}.${t}`,{convertSheet:a}=await n.e(7526).then(n.bind(n,37526)),o=await a(await V(e),t),s=(0,v.dirname)(r);Y(s,await U((0,v.basename)(i),s,L.from(o)))}))},label:t.toUpperCase()}}))}),".m3u"!==y&&d.uH.has(y)&&h.unshift(d.Os,{action:()=>{g().forEach((async e=>{const t=`${(0,v.dirname)(e)}/${(0,v.basename)(e,(0,v.extname)(e))}.m3u`,{createM3uPlaylist:i,tracksFromPlaylist:a}=await n.e(8757).then(n.bind(n,68757)),o=i(await a((await V(e)).toString(),(0,$.RT)(e))),s=(0,v.dirname)(r);Y(s,await U((0,v.basename)(t),s,L.from(o)))}))},label:"Convert to M3U"}),h.unshift({action:()=>w(g()),label:"Add to archive..."},{action:()=>O(g()),label:"Download"}),A||"FileExplorer"===t||i.y.forEach((t=>{t===e||b.includes(t)||b.push(t)}))}h.unshift(d.Os)}D&&h.push(d.Os,{action:()=>X(r),label:"Disconnect"}),d.ru.has(s)&&h.unshift({action:()=>{j("Paint",{url:e})},label:"Edit"});const I=d.qy.has(y);if((I||d.lM.has(y)&&!d.GM.has(y))&&h.unshift({label:"Set as desktop background",...I?{action:()=>z(r)}:{menu:[{action:()=>z(r,"fill"),label:"Fill"},{action:()=>z(r,"fit"),label:"Fit"},{action:()=>z(r,"stretch"),label:"Stretch"},{action:()=>z(r,"tile"),label:"Tile"},{action:()=>z(r,"center"),label:"Center"}]}}),b.length>0&&h.unshift({label:"Open with",menu:b.map((e=>{const{icon:t,title:n}=p.Z[e]||{};return{action:()=>{B(e,t)},icon:t,label:n}}))}),t){const{icon:n}=p.Z[t]||{};if(A&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")){const t=""===s||".zip"===s;h.unshift({action:()=>j("FileExplorer",{url:(0,v.dirname)(e)},""),label:`Open ${t?"folder":"file"} location`})}f&&"FileExplorer"===t&&!d.my.has(s)&&h.unshift({action:()=>{B(t,n)},label:"Open in new window"}),h.unshift({action:()=>{"FileExplorer"===t&&f&&!d.my.has(s)?Z(f,e):B(t,n)},icon:n,label:"Open",primary:!0})}return h}))),[w,P,Z,_,N,U,T,O,R,f,u,W,H,K,G,C,j,B,r,t,V,m,Q?.mntMap,Q?.mountList,o,z,X,Y,e]);return{onContextMenuCapture:e=>{W||(D(),I(P)),q(e)},...J}},O=n(30433),R=n(55785),C=n(21157),D=n(35778),I=n(5152),j=n.n(I),Z=n(30663),z=n(23988),P=n(48764).Buffer;const W=j()((()=>n.e(631).then(n.bind(n,50631)).then((e=>e.Down))),{loadableGenerated:{webpack:()=>[50631]}}),B=j()((()=>n.e(9932).then(n.bind(n,29932))),{loadableGenerated:{webpack:()=>[29932]}}),N=[],U=[];var H=e=>{let{fileActions:t,fileManagerId:n,fileManagerRef:f,focusedEntries:p,focusFunctions:h,hideShortcutIcon:w,isLoadingFileManager:A,loadIconImmediately:k,name:E,path:x,readOnly:S,renaming:F,selectionRect:M,setRenaming:L,stats:I,useNewFolderIcon:j,view:H,iconOverride:K}=e;const{blurEntry:G,focusEntry:V}=h,{url:Q}=(0,g.z)(),[{comment:X,getIcon:Y,icon:_,pid:q,subIcons:J,url:ee},te]=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[r,i]=(0,l.useState)((()=>({icon:"",pid:"",url:""}))),o=(0,l.useRef)(!1),s=e=>{i(e),o.current=!1},{fs:c,rootFs:u}=(0,b.o)();return(0,l.useEffect)((()=>{if(!o.current&&c&&u){o.current=!0;const r=(0,$.RT)(e);!r||t&&!d.my.has(r)&&"FileSystemAccess"!==u.mntMap[e]?.getName()?(0,a.g7)(c,u,e,t,n,s):(0,a.Z7)(c,e,r,s)}}),[c,t,e,u,n]),[r,i]}(x,I.isDirectory(),j),ne=K||_,re=y(ee),{createPath:ie,exists:ae,mkdirRecursive:oe,pasteList:se,readFile:ce,stat:le,unlink:ue,updateFolder:de,writeFile:fe}=(0,b.o)(),[me,be]=(0,l.useState)(!1),{formats:ge,sizes:pe}=(0,o.Fg)(),he="list"===H,we=(0,l.useRef)(null),ve=(0,l.useRef)(null),ye=(0,v.basename)(x),Ae=(0,$.RT)(ee),ke=(0,l.useMemo)((()=>d.lM.has(Ae)||d.qy.has(Ae)||(0,$.yk)(ee)),[ee,Ae]),Ee=1===p.length&&p[0]===ye,xe=(0,$.RT)(x),Se=xe===d.zm,$e=Se?ee:x,Fe=(0,R.Z)({callback:async(e,t)=>{if(!p.includes(ye)){const n=await ie(e,$e,t);n&&de($e,n)}},directory:$e,onDragLeave:()=>we.current?.parentElement?.classList.remove("focus-within"),onDragOver:()=>we.current?.parentElement?.classList.add("focus-within")}),Me="FileExplorer"===q,Le=(0,l.useMemo)((()=>((e,t,n,r)=>{const i=e.replace(/-/g,d.Zf),{lines:o}=(0,a.oc)(i,t,n,r);return o.length>2?`${(e.includes(" ")?o.slice(0,2).join(""):o[0]).slice(0,-3)}...`:i})(E,pe.fileEntry.fontSize,ge.systemFont,pe.fileEntry[he?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"])),[ge.systemFont,he,E,pe.fileEntry]),Te=(0,l.useRef)(null),Oe=(0,l.useRef)(!1),Re=(0,l.useRef)(!1),Ce=(0,l.useRef)(),De=(0,l.useCallback)((async()=>{if(I.isDirectory())return"";if(Se)return X||(ee?ee.startsWith("http:")||ee.startsWith("https:")?decodeURIComponent(ee):`Location: ${(0,v.basename)(ee,(0,v.extname)(ee))} (${(0,v.dirname)(ee)})`:"");const e=i.Z[xe]?.type||`${xe.toUpperCase().replace(".","")} File`,t=I.size<0?await le(x):I,{size:n}=t,r=(0,a.GA)(x,t),o=(0,$.UR)(n);return`Type: ${e}${"-1"===o?"":`\nSize: ${o}`}\nDate modified: ${new Date(r).toISOString().slice(0,10)} ${new Intl.DateTimeFormat(d.ZW,ge.dateModified).format(r)}`}),[X,xe,ge.dateModified,Se,x,le,I,ee]),[Ie,je]=(0,l.useState)(),Ze=(0,l.useCallback)((()=>{Me&&n&&!d.my.has(Ae)?(Q(n,ee),G()):Me&&he?be((e=>!e)):re(q,ke?void 0:ne)}),[G,Q,n,ne,ke,he,re,Me,q,ee,Ae]);return(0,l.useEffect)((()=>{if(!A&&!Oe.current){const e=async()=>{if(ne.startsWith("blob:")||ne.startsWith("data:")){if(ne.startsWith("data:image/jpeg;base64,"))return;Oe.current=!0;const e=(0,v.join)(d.Xo,`${x}${d.Qy}`);if(".ico"!==Ae&&!ee.startsWith(d.OT)&&!ee.startsWith(d.P7)&&!await ae(e)&&Te.current instanceof HTMLImageElement){const t=async()=>{if(Te.current instanceof HTMLImageElement){const n=()=>(U.shift(),U[0]?.());let r="";if(Te.current.currentSrc.startsWith("data:image/gif;base64,"))r=Te.current.currentSrc;else{const{clientHeight:e,clientWidth:n}=Te.current,{naturalHeight:i,naturalWidth:a}=Te.current,o=a/i;let s,c;o!==n/e&&(a>i?s=e/o:c=n*o);const l=await(0,$.mZ)();let u;try{u=await(l?.toCanvas(Te.current,{height:s,skipAutoScale:!0,style:{objectPosition:s?"top":c?"left":void 0},width:c}))}catch{}u&&!(0,$.Tv)(u)?r=u.toDataURL("image/png"):setTimeout(t,d.jx.WINDOW)}r&&U.push((async()=>{const t=(0,v.dirname)(e);await oe(t);const i=P.from(r.replace(/data:(.*);base64,/,""),"base64");return await fe(e,i,!0),te((e=>({...e,icon:(0,$.YS)(i)}))),de(t,(0,v.basename)(e)),n()})),1===U.length&&await U[0]()}};Te.current.complete?t():Te.current.addEventListener("load",t,d.K7)}}else{if(Oe.current)return;const e=(0,v.join)(d.Xo,`${x}${d.Qy}`);if(await ae(e)){const t=await ce(e);if(t.length>=d.zj)Oe.current||(Oe.current=!0,te((e=>({...e,icon:(0,$.YS)(t)}))));else try{await ue(e),de((0,v.dirname)(x))}catch{}}else!Re.current&&we.current&&"function"==typeof Y&&(Re.current=!0,new IntersectionObserver(((e,t)=>{let[{intersectionRatio:n}]=e;n>0&&(t.disconnect(),Ce.current=new AbortController,Y(Ce.current.signal))}),{root:f.current,rootMargin:"5px"}).observe(we.current))}};e()}}),[ae,f,Y,ne,A,oe,x,ce,te,ue,de,ee,Ae,fe]),(0,l.useEffect)((()=>()=>{try{Ce?.current?.abort?.()}catch{}}),[]),(0,l.useLayoutEffect)((()=>{if(we.current&&f.current){const e=p.includes(ye),t=N.includes(ye),n=e||t;if(e&&t&&N.splice(N.indexOf(ye),1),M){const e=((e,t,n,r)=>{const{x:i=0,y:a=0,width:o=0,height:s=0}=n,c=new DOMRect(i,a,Number(o),Number(s));return!(e.left-t.left>=c.right||e.top-t.top>=c.bottom||e.right-t.left<=c.left||e.bottom-t.top+r<=c.top)})(we.current.getBoundingClientRect(),f.current.getBoundingClientRect(),M,f.current.scrollTop);e&&!n?(N.push(ye),V(ye),we.current.focus(d.eS)):!e&&n&&G(ye)}else n&&1===p.length&&!we.current.contains(document.activeElement)&&(G(),V(ye),we.current.focus(d.eS))}}),[G,f,ye,V,p,M]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{ref:we,"aria-label":E,onMouseOver:()=>De().then(je),title:Ie,...he&&{...d.Cz,as:C.m.button},...(0,D.Z)(Ze,he),...Me&&Fe,...T(ee,q,x,L,t,h,p,n,S),children:(0,r.jsxs)(s,{ref:ve,$renaming:F,...he&&(0,z.G)(ve.current),children:[(0,r.jsx)(u.Z,{ref:Te,$eager:k,$moving:"move"===se[x],alt:E,src:ne,...c.k[H]}),(0,r.jsx)(m,{icon:ne,name:E,showShortcutIcon:Boolean(w||I.systemShortcut),subIcons:J,view:H}),F?(0,r.jsx)(B,{name:E,path:x,renameFile:(e,n)=>{t.renameFile(e,n),L("")}}):(0,r.jsx)("figcaption",{children:Ee&&E.length!==Le.length?E:Le}),he&&Me&&(0,r.jsx)(W,{flip:me})]})}),me&&(0,r.jsx)(O.Z,{url:ee,view:"list",hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})}},1756:function(e,t,n){var r=n(85893),i=n(14141);const a=i.vJ`
  body {
    pointer-events: none;
  }
`,o=i.ZP.span.withConfig({componentId:"sc-4e222ce4-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.highlightBackground}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.highlight}`}};
  position: absolute;
  z-index: 2;
`;t.Z=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsx)(o,{...e})]})},4798:function(e,t,n){var r=n(25449),i=n(67294);const a=n(64358).i2/60;t.Z=e=>{const[t,n]=(0,i.useState)((()=>Object.create(null))),[o,s]=(0,i.useState)((()=>Object.create(null))),{x:c,y:l}=t,{height:u,width:d}=o,f=(0,i.useRef)(),{menu:m,setMenu:b}=(0,r.H)(),g=Object.keys(m).length>0,p="number"==typeof c&&"number"==typeof l,h=()=>{s(Object.create(null)),n(Object.create(null))},w=!g&&"number"==typeof d&&"number"==typeof u&&p,v=w?{height:`${Math.abs(Number(u))}px`,transform:`translate(\n            ${Number(c)+(Number(d)<0?Number(d):0)}px,\n            ${Number(l)+(Number(u)<0?Number(u):0)}px)`,width:`${Math.abs(Number(d))}px`}:{};return{isSelecting:w,selectionEvents:{onMouseDown:t=>{let{clientX:r,clientY:i,target:a}=t;if(a===e.current){const{scrollTop:t}=e.current,{x:a=0,y:o=0}=e.current.getBoundingClientRect();s(Object.create(null)),n({x:r-a,y:i-o+t}),m&&b(Object.create(null))}},...p?{onMouseLeave:h,onMouseMove:t=>{let{clientX:n,clientY:r}=t;const{scrollTop:i=0}=e.current||{},{x:o=0,y:u=0}=e.current?.getBoundingClientRect()||{};f.current||(s({height:r-u-(l||0)+i,width:n-o-(c||0)}),f.current=window.setTimeout((()=>{f.current=void 0}),a))},onMouseUp:h}:{}},selectionRect:w?{...t,...o}:void 0,selectionStyling:v}}},30433:function(e,t,n){var r=n(85893),i=n(36717),a=n(1756),o=n(4798),s=n(54588),c=n(55785),l=n(88507),u=n(76478),d=n(42151),f=n(93927),m=n(48566),b=n(26724),g=n(89609),p=n(5152),h=n.n(p),w=n(1864),v=n(67294),y=n(64358),A=n(34254);const k=h()((()=>n.e(8598).then(n.bind(n,48598))),{loadableGenerated:{webpack:()=>[48598]}}),E=h()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}});t.Z=e=>{let{allowMovingDraggableEntries:t,hideFolders:n,hideLoading:p,hideScrolling:h,hideShortcutIcons:x,id:S,isDesktop:$,loadIconsImmediately:F,preloadShortcuts:M,readOnly:L,showStatusBar:T,skipFsWatcher:O,skipSorting:R,url:C,useNewFolderIcon:D,view:I}=e;const[j,Z]=(0,v.useState)(C),[z,P]=(0,v.useState)(""),[W,B]=(0,v.useState)(!1),N=(0,v.useRef)(null),{focusedEntries:U,focusableEntry:H,...K}=(0,u.Z)(N),{fileActions:G,files:V,folderActions:Q,isLoading:X,updateFiles:Y}=(0,d.Z)(C,P,K,{hideFolders:n,hideLoading:p,preloadShortcuts:M,skipFsWatcher:O,skipSorting:R}),{mountFs:_,rootFs:q,stat:J}=(0,b.o)(),{StyledFileEntry:ee,StyledFileManager:te}=m.c[I],{isSelecting:ne,selectionRect:re,selectionStyling:ie,selectionEvents:ae}=(0,o.Z)(N),oe=(0,s.Z)(U,K,N,ne,t),se=(0,c.Z)({callback:Q.newPath,directory:C,updatePositions:t}),ce=(0,f.Z)(C,Q,$),le=!p&&X||C!==j,ue=(0,l.Z)(V,C,U,P,K,Q,Y,N,S,I),[de,fe]=(0,v.useState)("prompt"),me=(0,v.useRef)(!1),be=(0,v.useMemo)((()=>""===z?ue():void 0),[ue,z]);return(0,v.useEffect)((()=>{me.current||"granted"===de||"FileSystemAccess"!==q?.mntMap[j]?.getName()||(me.current=!0,(0,g.ZK)(j).then((e=>{const t="granted"===e;e&&!t||(fe("granted"),t&&Y())})).catch((e=>{"Permission already granted"===e.message&&fe("granted")})).finally((()=>{me.current=!1})))}),[j,de,q?.mntMap,Y]),(0,v.useEffect)((()=>{!W&&y.my.has((0,A.RT)(C))&&(async()=>{(await J(C)).isDirectory()||B((e=>(e||_(C).then((()=>setTimeout(Y,100))).catch((()=>{})),!0)))})()}),[_,W,J,Y,C]),(0,v.useEffect)((()=>{C!==j&&(Q.resetFiles(),Z(C),fe("denied"))}),[j,Q,C]),(0,v.useEffect)((()=>{le||N.current?.focus(y.eS)}),[le]),(0,r.jsxs)(r.Fragment,{children:[le?(0,r.jsx)(E,{}):(0,r.jsxs)(te,{ref:N,$scrollable:!h,onKeyDown:be,...!L&&{$selecting:ne,...se,...ce,...ae},...y.LL,children:[ne&&(0,r.jsx)(a.Z,{style:ie}),Object.keys(V).map((e=>(0,r.jsx)(ee,{$selecting:ne,$visible:!X,...!L&&oe(C,e,z===e),...""===z&&{onKeyDown:ue(e)},...H(e),children:(0,r.jsx)(i.Z,{fileActions:G,fileManagerId:S,fileManagerRef:N,focusFunctions:K,focusedEntries:U,hideShortcutIcon:x,isLoadingFileManager:X,loadIconImmediately:F,name:(0,w.basename)(e,y.zm),path:(0,w.join)(C,e),readOnly:L,renaming:z===e,selectionRect:re,setRenaming:P,stats:V[e],useNewFolderIcon:D,view:I})},e)))]}),T&&(0,r.jsx)(k,{count:le?0:Object.keys(V).length,directory:C,fileDrop:se,selected:U})]})}},54588:function(e,t,n){var r=n(62065),i=n(1864),a=n(67294),o=n(64358),s=n(34254);t.Z=(e,t,n,c,l)=>{let{blurEntry:u,focusEntry:d}=t;const f=(0,a.useRef)(n.current?.lastElementChild),[m,b]=(0,a.useState)(-1),{iconPositions:g,sortOrders:p,setIconPositions:h,setSortOrder:w}=(0,r.k)(),v=(0,a.useRef)(),y=(0,a.useRef)(Object.create(null)),A=(0,a.useRef)(!1),k=e=>{let{clientX:t,clientY:n}=e;y.current={...y.current,x:t,y:n}},E="MAIN"===n.current?.parentElement?.tagName,x=t=>r=>{(0,s.nK)(r),l&&e.length>0?((0,s.vi)(t,n.current,g,p,y.current,e,h),n.current?.removeEventListener("dragover",k)):-1!==m&&w(t,(t=>{const n=t.filter((t=>!e.includes(t)));return n.splice(m,0,...e),n})),u()},S=t=>n=>{let{target:r}=n;if(!l&&r instanceof HTMLLIElement){const{children:n=[]}=r.parentElement||{},i=e.includes(t);b(i?-1:[...n].indexOf(r))}},$=(t,r,a)=>o=>{if(a)(0,s.nK)(o);else{if(d(r),o.nativeEvent.dataTransfer?.setData("application/json",JSON.stringify(e.length<=1?[(0,i.join)(t,r)]:e.map((e=>(0,i.join)(t,e))))),e.length>1&&v.current){const r=Object.keys(g);l&&!A.current&&(f.current&&n.current?.lastElementChild&&n.current.lastElementChild!==f.current||e.every((e=>r.includes(`${t}/${e}`))))&&(A.current=!0);const i=E?o.nativeEvent.clientX:o.nativeEvent.offsetX,a=A.current?o.nativeEvent.clientY:o.nativeEvent.offsetY;o.nativeEvent.dataTransfer?.setDragImage(v.current,i,a),l&&!A.current&&(A.current=!0)}Object.assign(o.dataTransfer,{effectAllowed:"move"}),l&&(y.current=e.length>1?{offsetX:o.nativeEvent.offsetX,offsetY:o.nativeEvent.offsetY}:Object.create(null),n.current?.addEventListener("dragover",k,{passive:!0}))}},F=(0,a.useCallback)((async()=>{if(n.current){const e=[...n.current.querySelectorAll(".focus-within")];if(e.length>1){v.current?v.current.src="":v.current=new Image;const t=await(0,s.mZ)();let r;try{r=await(t?.toPng(n.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some((e=>e.contains(t))),imagePlaceholder:o.RJ,skipAutoScale:!0}))}catch{}r&&(v.current.src=r)}}}),[n]),M=(0,a.useRef)();return(0,a.useEffect)((()=>{n.current?.lastElementChild&&!f.current&&(f.current=n.current.lastElementChild)}),[n,e]),(0,a.useEffect)((()=>{M.current&&window.clearTimeout(M.current),M.current=window.setTimeout((()=>{M.current=void 0,F()}),o.i2/2)}),[e,F]),(0,a.useEffect)((()=>{!c&&e.length>1&&F()}),[e.length,c,F]),(e,t,n)=>({draggable:!0,onDragEnd:x(e),onDragOver:S(t),onDragStart:$(e,t,n),style:E?g[(0,i.join)(e,t)]:void 0})}},55785:function(e,t,n){var r=n(62727),i=n(6529),a=n(42151),o=n(26724),s=n(56758),c=n(62065),l=n(1864),u=n(67294),d=n(64358),f=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:m,onDragLeave:b,onDragOver:g,updatePositions:p}=e;const{url:h}=(0,s.z)(),{iconPositions:w,sortOrders:v,setIconPositions:y}=(0,c.k)(),{mkdirRecursive:A,updateFolder:k,writeFile:E}=(0,o.o)(),x=(0,u.useCallback)((async(e,t,n)=>{if(m)if(t){const r=(0,l.join)(d.Ll,e);await A(d.Ll),await E(r,t,!0)&&(n===a.v.UPDATE_URL&&h(m,r),k(d.Ll,e))}else n===a.v.UPDATE_URL&&h(m,e)}),[m,A,k,h,E]),{openTransferDialog:S}=(0,r.Z)();return{onDragLeave:b,onDragOver:e=>{g?.(e),(0,f.nK)(e)},onDrop:e=>{if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,i.p4)(e);if(0===t.length&&""===r)return;const a={x:e.clientX,y:e.clientY};let o=[];if(r){try{o=JSON.parse(r)}catch{}if(!Array.isArray(o))return;const[e]=o;if(!e)return;if(e.startsWith(n)&&(0,l.basename)(e)===(0,l.relative)(n,e))return;o=o.map((e=>(0,l.basename)(e)))}else o=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);o=o.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,l.basename)(e,(0,l.extname)(e))} (${t})${(0,l.extname)(e)}`}while(w[r]);return(0,l.basename)(r)})),(0,f.vi)(n,e.target,w,v,a,o,y)}(0,i.WG)(e,t||x,n,S,Boolean(m))}}}},88507:function(e,t,n){var r=n(62727),i=n(6529),a=n(26724),o=n(56758),s=n(62065),c=n(1864),l=n(67294),u=n(64358),d=n(34254);t.Z=(e,t,n,f,m,b,g,p,h,w)=>{let{blurEntry:v,focusEntry:y}=m,{newPath:A,pasteToFolder:k}=b;const{copyEntries:E,deletePath:x,moveEntries:S}=(0,a.o)(),{url:$}=(0,o.z)(),{openTransferDialog:F}=(0,r.Z)(),{foregroundId:M}=(0,s.k)();return(0,l.useEffect)((()=>{const e=e=>{e.clipboardData?.files?.length&&(!M&&t===u.Ll||M===h)&&(e.stopImmediatePropagation?.(),(0,i.W)(e.clipboardData.files,t,A).then(F))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)}),[M,h,A,F,t]),(0,l.useCallback)((r=>i=>{if("list"===w)return;const{ctrlKey:a,key:o,target:s,shiftKey:l}=i;if(!l)if(a)switch(o.toLowerCase()){case"a":if((0,d.nK)(i),s instanceof HTMLOListElement){const[e]=s.querySelectorAll("button");e?.focus(u.eS)}Object.keys(e).forEach((e=>y(e)));break;case"c":(0,d.nK)(i),E(n.map((e=>(0,c.join)(t,e))));break;case"x":(0,d.nK)(i),S(n.map((e=>(0,c.join)(t,e))));break;case"v":i.stopPropagation(),k()}else switch(o){case"F2":r&&((0,d.nK)(i),f(r));break;case"F5":h&&((0,d.nK)(i),g());break;case"Delete":n.length>0&&((0,d.nK)(i),n.forEach((async e=>{const n=(0,c.join)(t,e);await x(n),g(void 0,n)})),v());break;case"Backspace":h&&((0,d.nK)(i),$(h,(0,c.dirname)(t)));break;case"Enter":s instanceof HTMLButtonElement&&((0,d.nK)(i),(0,d.TF)(s,2));break;default:if(o.startsWith("Arrow")){if((0,d.nK)(i),!(s instanceof HTMLElement))return;let e=s;if(!(s instanceof HTMLButtonElement||(e=s.querySelector("button"),e)))return;const{x:t,y:n,height:r,width:a}=e.getBoundingClientRect();let c="ArrowUp"===o||"ArrowDown"===o?document.elementFromPoint(t,n+("ArrowUp"===o?-r:2*r)):document.elementFromPoint(t+("ArrowLeft"===o?-a:2*a),n);if(c instanceof HTMLOListElement){const t=e.closest("li");if(t instanceof HTMLLIElement){const e=[...c.children],n=e.indexOf(t);"ArrowUp"!==o&&"ArrowDown"!==o||(c=e["ArrowUp"===o?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}const l=c?.closest("button");let u=l;l instanceof HTMLButtonElement&&p?.current?.contains(l)||(u=e),u?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}}),[v,$,E,x,p,e,y,n,h,S,k,f,g,t,w])}},76478:function(e,t,n){var r=n(67294),i=n(64358),a=n(34254);t.Z=e=>{const[t,n]=(0,r.useState)([]),o=(0,r.useCallback)((e=>n(e?t=>t.filter((t=>t!==e)):[])),[]),s=(0,r.useCallback)((e=>n((t=>t.includes(e)?t:[...t,e]))),[]),c=(0,r.useRef)(!1),l=(0,r.useCallback)((t=>{const{relatedTarget:n,target:r}=t,s=e.current===n;s&&c.current?((0,a.nK)(t),r?.focus(i.eS)):!s&&n instanceof HTMLElement&&e.current?.contains(n)||o()}),[o,e]),u=(0,r.useCallback)((()=>{c.current=!0,window.requestAnimationFrame((()=>{c.current=!1}))}),[]);return{blurEntry:o,focusEntry:s,focusableEntry:e=>{const n=t.includes(e),r=1===t.length&&t[0]===e;return{className:(0,a.Wy)({"focus-within":n,"only-focused":r}),onBlurCapture:l,onFocusCapture:u,onMouseDown:t=>{let{ctrlKey:r}=t;r?n?o(e):s(e):n||(o(),s(e))}}},focusedEntries:t}}},93927:function(e,t,n){var r=n(58363),i=n(87426),a=n(26724),o=n(25449),s=n(56758),c=n(62065),l=n(21638),u=n(1864),d=n(67294),f=n(64358),m=n(34254),b=n(48764).Buffer;const g=()=>window.WebampGlobal?.store.dispatch({enabled:!1,type:"SET_MILKDROP_DESKTOP"}),p=(0,i.sK)(".whtml"),h=(0,i.sK)(".txt"),w="video/webm",v="video/mp4";let y,A=2;t.Z=(e,t,i)=>{let{addToFolder:k,newPath:E,pasteToFolder:x,sortByOrder:[[S,$],F]}=t;const{contextMenu:M}=(0,o.H)(),{mapFs:L,pasteList:T={},readFile:O,writeFile:R,updateFolder:C}=(0,a.o)(),{setWallpaper:D,setIconPositions:I,wallpaperImage:j}=(0,c.k)(),Z=(0,d.useCallback)((e=>{if("VANTA"===e){A-=1;const e=0===A;D("VANTA"+(e?" WIREFRAME":"")),e&&(A=2)}else A=2,D(e)}),[D]),{open:z}=(0,s.z)(),P=(0,d.useCallback)(((t,n)=>{I((t=>Object.fromEntries(Object.entries(t).filter((t=>{let[n]=t;return(0,u.dirname)(n)!==e}))))),F(""===t?e=>{let[t]=e;return[t,n]}:((e,t)=>n=>{let[r,i]=n;return[e,r===e?!i:t]})(t,n))}),[I,F,e]),W=(0,d.useMemo)((()=>i&&"function"==typeof navigator?.mediaDevices?.getDisplayMedia&&(window?.MediaRecorder?.isTypeSupported(w)||window?.MediaRecorder?.isTypeSupported(v))&&!(0,m.G6)()),[i]),B=(0,d.useCallback)((async()=>{if(y){const{active:e}=y;if(y.getTracks().forEach((e=>e.stop())),y=void 0,e)return}const e={video:{frameRate:30},...!(0,m.vU)()&&!(0,m.G6)()&&{preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"include",systemAudio:"include"}};y=await navigator.mediaDevices.getDisplayMedia(e);const[t]=y.getVideoTracks(),{height:r,width:i}=t.getSettings(),a=new MediaRecorder(y,{bitsPerSecond:r&&i?r*i*30:void 0,mimeType:MediaRecorder.isTypeSupported(w)?w:v}),o=`Screen Capture ${(0,m.gE)()}.webm`,s=(0,u.join)(f.Ll,o),c=Date.now();let l=!1;a.start(),a.addEventListener("dataavailable",(async e=>{const{data:t}=e;if(t){const e=b.from(await t.arrayBuffer());if(await R(s,l?b.concat([await O(s),e]):e,l),"inactive"===a.state){const{default:e}=await n.e(6027).then(n.t.bind(n,86027,23));e((0,m.V4)(await O(s)),Date.now()-c,(async e=>{await R(s,b.from(await e.arrayBuffer()),!0),C(f.Ll,o)}))}l=!0}}))}),[O,C,R]),N=(0,l.Z)();return(0,d.useMemo)((()=>M?.((()=>{const t={action:()=>L(e).then((t=>{C(e,t),z("FileExplorer",{url:(0,u.join)(e,t)})})).catch((()=>{})),label:"Map directory"},n=[{action:()=>k(),label:"Add file(s)"},...(0,f.df)()?[t]:[]],a=document.querySelector("main .webamp-desktop canvas")instanceof HTMLCanvasElement;return[{label:"Sort by",menu:[{action:()=>P("name",!0),label:"Name",toggle:"name"===S},{action:()=>P("size",!1),label:"Size",toggle:"size"===S},{action:()=>P("type",!0),label:"Item type",toggle:"type"===S},{action:()=>P("date",!1),label:"Date modified",toggle:"date"===S},f.Os,{action:()=>P("",!0),label:"Ascending",toggle:$},{action:()=>P("",!1),label:"Descending",toggle:!$}]},{action:()=>C(e),label:"Refresh"},...i?[f.Os,{label:"Background",menu:r.ov.filter((e=>{let{requiresWebGPU:t}=e;return!t||N})).reduce(((e,t)=>[...e,{action:()=>{a&&g?.(),t.id&&Z(t.id)},label:t.name||t.id,toggle:t.startsWith?j.startsWith(t.id):j===t.id}]),a?[{action:g,checked:!0,label:"Music Visualization"},f.Os]:[])},...W?[{action:B,label:y?.active?"Stop screen capture":"Capture screen"}]:[]]:[],f.Os,...n,{action:()=>z("Terminal",{url:e}),label:"Open Terminal here"},{action:()=>x(),disabled:0===Object.keys(T).length,label:"Paste"},f.Os,{label:"New",menu:[{action:()=>E("New folder",void 0,"rename"),icon:f.XN,label:"Folder"},f.Os,{action:()=>E("New Rich Text Document.whtml",b.from(""),"rename"),icon:p,label:"Rich Text Document"},{action:()=>E("New Text Document.txt",b.from(""),"rename"),icon:h,label:"Text Document"}]},...i?[f.Os,{action:()=>z("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}))),[k,W,B,M,N,$,i,L,E,z,T,x,Z,S,C,P,e,j])}},62392:function(e,t,n){const r=n(14141).ZP.li.withConfig({componentId:"sc-2dc7a614-0"})`
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
`;t.Z=r},1347:function(e,t,n){var r=n(14141),i=n(38060),a=n(64358);const o=r.ZP.ol.withConfig({componentId:"sc-796d7865-0"})`
  ${e=>{let{$scrollable:t}=e;return t?(0,i.Z)(a.BQ):void 0}};

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
    height: calc(100% - ${a.bK}px);
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
`;t.Z=r},48566:function(e,t,n){n.d(t,{k:function(){return c},c:function(){return s}});var r=n(62392),i=n(1347),a=n(14141).ZP.li.withConfig({componentId:"sc-7f64d0dd-0"})`
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
`,o=n(8011);const s={icon:{StyledFileEntry:r.Z,StyledFileManager:i.Z},list:{StyledFileEntry:a,StyledFileManager:o.Z}},c={icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}}},35778:function(e,t,n){var r=n(67294),i=n(64358);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),a=(0,r.useRef)(0),o=(0,r.useCallback)((r=>{const o=()=>{r.stopPropagation(),e(r)},s=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},c=()=>{a.current>=5&&s(),void 0===n.current?(r.target.removeEventListener("pointermove",c),a.current=0):a.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(s,i.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",c,{passive:!0})):(s(),o())}),[e,t]);return{onClick:o}}},21638:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);const i=()=>{const[e,t]=(0,r.useState)(),n=(0,r.useCallback)((async()=>t(await(async()=>{if("undefined"==typeof navigator)return!1;if(!("gpu"in navigator))return!1;const e=await navigator.gpu.requestAdapter();return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,r.useEffect)((()=>{n()}),[n]),e}},38060:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(14141);const i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return r.iv`
  overflow: auto;
  scrollbar-color: ${i[a].thumb} ${i[a].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[a].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[a].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[a].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[a].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[a].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[a].buttonHover};
    }

    &:active {
      background-color: ${i[a].active};
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
    background-blend-mode: ${i[a].blendMode};
  }
`}},23988:function(e,t,n){n.d(t,{G:function(){return r}});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?{onMouseLeave:()=>e.removeAttribute("style"),onMouseMove:n=>{let{clientX:r,clientY:i,target:a}=n;if(e.contains(a)){const{left:n,top:a}=e.getBoundingClientRect(),o=r-n,s=i-a;Object.assign(e.style,{background:t?void 0:`radial-gradient(circle at ${o}px ${s}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`,borderImage:`radial-gradient(20% 75% at ${o}px ${s}px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / 1px / 0px stretch`})}}}:{}}}}]);