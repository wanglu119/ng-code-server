"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var se=["require","exports","vs/base/common/platform","vs/base/common/path","vs/base/common/strings","vs/base/common/extpath","vs/base/common/uri","vs/base/common/resources","vs/base/common/async","vs/base/common/glob","vs/base/common/symbols","vs/base/common/network","vs/base/common/errors","vs/base/common/cancellation","vs/workbench/services/search/common/getFileResults","vs/workbench/services/search/common/ignoreFile","vs/base/common/types","vs/base/common/event","vs/base/common/lifecycle","vs/base/common/arrays","vs/base/common/map","vs/editor/common/core/range","vs/workbench/services/search/worker/localFileSearch"],re=function(x){for(var e=[],L=0,C=x.length;L<C;L++)e[L]=se[x[L]];return e};define(se[10],re([0,1]),function(x,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Id=void 0,e.$Id=Symbol("MicrotaskDelay")}),define(se[5],re([0,1,3,2,4,16]),function(x,e,L,C,M,w){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$4f=e.$3f=e.$2f=e.$1f=e.$Zf=e.$Yf=e.$Xf=e.$Wf=e.$Vf=e.$Uf=e.$Tf=e.$Sf=e.$Rf=e.$Qf=e.$Pf=e.$Of=void 0;function v(s){return s===47||s===92}e.$Of=v;function T(s){return s.replace(/[\\/]/g,L.$ec.sep)}e.$Pf=T;function U(s){return s.indexOf("/")===-1&&(s=T(s)),/^[a-zA-Z]:(\/|$)/.test(s)&&(s="/"+s),s}e.$Qf=U;function m(s,f=L.$ec.sep){if(!s)return"";const O=s.length,B=s.charCodeAt(0);if(v(B)){if(v(s.charCodeAt(1))&&!v(s.charCodeAt(2))){let W=3;const Y=W;for(;W<O&&!v(s.charCodeAt(W));W++);if(Y!==W&&!v(s.charCodeAt(W+1))){for(W+=1;W<O;W++)if(v(s.charCodeAt(W)))return s.slice(0,W+1).replace(/[\\/]/g,f)}}return f}else if(F(B)&&s.charCodeAt(1)===58)return v(s.charCodeAt(2))?s.slice(0,2)+f:s.slice(0,2);let Q=s.indexOf("://");if(Q!==-1){for(Q+=3;Q<O;Q++)if(v(s.charCodeAt(Q)))return s.slice(0,Q+1)}return""}e.$Rf=m;function g(s){if(!C.$d||!s||s.length<5)return!1;let f=s.charCodeAt(0);if(f!==92||(f=s.charCodeAt(1),f!==92))return!1;let O=2;const B=O;for(;O<s.length&&(f=s.charCodeAt(O),f!==92);O++);return!(B===O||(f=s.charCodeAt(O+1),isNaN(f)||f===92))}e.$Sf=g;const D=/[\\/:\*\?"<>\|]/g,K=/[\\/]/g,S=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function i(s,f=C.$d){const O=f?D:K;return!(!s||s.length===0||/^\s+$/.test(s)||(O.lastIndex=0,O.test(s))||f&&S.test(s)||s==="."||s===".."||f&&s[s.length-1]==="."||f&&s.length!==s.trim().length||s.length>255)}e.$Tf=i;function u(s,f,O){const B=s===f;return!O||B?B:!s||!f?!1:(0,M.$Ze)(s,f)}e.$Uf=u;function d(s,f,O,B=L.sep){if(s===f)return!0;if(!s||!f||f.length>s.length)return!1;if(O){if(!(0,M.$1e)(s,f))return!1;if(f.length===s.length)return!0;let W=f.length;return f.charAt(f.length-1)===B&&W--,s.charAt(W)===B}return f.charAt(f.length-1)!==B&&(f+=B),s.indexOf(f)===0}e.$Vf=d;function F(s){return s>=65&&s<=90||s>=97&&s<=122}e.$Wf=F;function z(s,f){return C.$d&&s.endsWith(":")&&(s+=L.sep),(0,L.$gc)(s)||(s=(0,L.$hc)(f,s)),s=(0,L.$fc)(s),C.$d?(s=(0,M.$Ie)(s,L.sep),s.endsWith(":")&&(s+=L.sep)):(s=(0,M.$Ie)(s,L.sep),s||(s=L.sep)),s}e.$Xf=z;function b(s){const f=(0,L.$fc)(s);return C.$d?s.length>3?!1:H(f)&&(s.length===2||f.charCodeAt(2)===92):f===L.$ec.sep}e.$Yf=b;function H(s,f=C.$d){return f?F(s.charCodeAt(0))&&s.charCodeAt(1)===58:!1}e.$Zf=H;function p(s,f=C.$d){return H(s,f)?s[0]:void 0}e.$1f=p;function R(s,f,O){return f.length>s.length?-1:s===f?0:(O&&(s=s.toLowerCase(),f=f.toLowerCase()),s.indexOf(f))}e.$2f=R;function q(s){const f=s.split(":");let O,B,Q;for(const W of f){const Y=Number(W);(0,w.$Af)(Y)?B===void 0?B=Y:Q===void 0&&(Q=Y):O=O?[O,W].join(":"):W}if(!O)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:O,line:B!==void 0?B:void 0,column:Q!==void 0?Q:B!==void 0?1:void 0}}e.$3f=q;const A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",Z="BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";function G(s,f,O=8){let B="";for(let W=0;W<O;W++){let Y;W===0&&C.$d&&!f&&(O===3||O===4)?Y=Z:Y=A,B+=Y.charAt(Math.floor(Math.random()*Y.length))}let Q;return f?Q=`${f}-${B}`:Q=B,s?(0,L.$hc)(s,Q):Q}e.$4f=G}),define(se[11],re([0,1,12,2,6]),function(x,e,L,C,M){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.COI=e.$_f=e.$$f=e.$0f=e.$9f=e.$8f=e.$7f=e.$6f=e.$5f=e.Schemas=void 0;var w;(function(m){m.inMemory="inmemory",m.vscode="vscode",m.internal="private",m.walkThrough="walkThrough",m.walkThroughSnippet="walkThroughSnippet",m.http="http",m.https="https",m.file="file",m.mailto="mailto",m.untitled="untitled",m.data="data",m.command="command",m.vscodeRemote="vscode-remote",m.vscodeRemoteResource="vscode-remote-resource",m.vscodeManagedRemoteResource="vscode-managed-remote-resource",m.vscodeUserData="vscode-userdata",m.vscodeCustomEditor="vscode-custom-editor",m.vscodeNotebookCell="vscode-notebook-cell",m.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",m.vscodeNotebookCellOutput="vscode-notebook-cell-output",m.vscodeInteractiveInput="vscode-interactive-input",m.vscodeSettings="vscode-settings",m.vscodeWorkspaceTrust="vscode-workspace-trust",m.vscodeTerminal="vscode-terminal",m.vscodeChatSesssion="vscode-chat-editor",m.webviewPanel="webview-panel",m.vscodeWebview="vscode-webview",m.extension="extension",m.vscodeFileResource="vscode-file",m.tmp="tmp",m.vsls="vsls",m.vscodeSourceControl="vscode-scm"})(w||(e.Schemas=w={})),e.$5f="vscode-tkn",e.$6f="tkn";class v{constructor(){this.a=Object.create(null),this.b=Object.create(null),this.c=Object.create(null),this.d="http",this.e=null,this.f=`/${w.vscodeRemoteResource}`}setPreferredWebSchema(g){this.d=g}setDelegate(g){this.e=g}setServerRootPath(g){this.f=`${g}/${w.vscodeRemoteResource}`}set(g,D,K){this.a[g]=D,this.b[g]=K}setConnectionToken(g,D){this.c[g]=D}getPreferredWebSchema(){return this.d}rewrite(g){if(this.e)try{return this.e(g)}catch(d){return L.$Y(d),g}const D=g.authority;let K=this.a[D];K&&K.indexOf(":")!==-1&&K.indexOf("[")===-1&&(K=`[${K}]`);const S=this.b[D],i=this.c[D];let u=`path=${encodeURIComponent(g.path)}`;return typeof i=="string"&&(u+=`&${e.$6f}=${encodeURIComponent(i)}`),M.URI.from({scheme:C.$j?this.d:w.vscodeRemoteResource,authority:`${K}:${S}`,path:C.$j?(window.location.pathname+"/"+this.f).replace(/\/\/+/g,"/"):this.f,query:u})}}e.$7f=new v,e.$8f="vs/../../extensions",e.$9f="vs/../../node_modules",e.$0f="vs/../../node_modules.asar",e.$$f="vs/../../node_modules.asar.unpacked";class T{asBrowserUri(g){const D=this.b(g,x);return this.uriToBrowserUri(D)}uriToBrowserUri(g){return g.scheme===w.vscodeRemote?e.$7f.rewrite(g):g.scheme===w.file&&(C.$h||C.$k&&C.$b.origin===`${w.vscodeFileResource}://${T.a}`)?g.with({scheme:w.vscodeFileResource,authority:g.authority||T.a,query:null,fragment:null}):g}asFileUri(g){const D=this.b(g,x);return this.uriToFileUri(D)}uriToFileUri(g){return g.scheme===w.vscodeFileResource?g.with({scheme:w.file,authority:g.authority!==T.a?g.authority:null,query:null,fragment:null}):g}b(g,D){return M.URI.isUri(g)?g:M.URI.parse(D.toUrl(g))}}T.a="vscode-app",e.$_f=new T;var U;(function(m){const g=new Map([["1",{"Cross-Origin-Opener-Policy":"same-origin"}],["2",{"Cross-Origin-Embedder-Policy":"require-corp"}],["3",{"Cross-Origin-Opener-Policy":"same-origin","Cross-Origin-Embedder-Policy":"require-corp"}]]);m.CoopAndCoep=Object.freeze(g.get("3"));const D="vscode-coi";function K(i){let u;typeof i=="string"?u=new URL(i).searchParams:i instanceof URL?u=i.searchParams:M.URI.isUri(i)&&(u=new URL(i.toString(!0)).searchParams);const d=u?.get(D);if(d)return g.get(d)}m.getHeadersFromQuery=K;function S(i,u,d){if(!globalThis.crossOriginIsolated)return;const F=u&&d?"3":d?"2":"1";i instanceof URLSearchParams?i.set(D,F):i[D]=F}m.addSearchParam=S})(U||(e.COI=U={}))}),define(se[7],re([0,1,5,11,3,2,4,6]),function(x,e,L,C,M,w,v,T){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Cg=e.DataUri=e.$Bg=e.$Ag=e.$zg=e.$yg=e.$xg=e.$wg=e.$vg=e.$ug=e.$tg=e.$sg=e.$rg=e.$qg=e.$pg=e.$og=e.$ng=e.$mg=e.$lg=e.$kg=e.$jg=e.$ig=e.$hg=e.$gg=void 0;function U(S){return(0,T.$uc)(S,!0)}e.$gg=U;class m{constructor(i){this.a=i}compare(i,u,d=!1){return i===u?0:(0,v.$Se)(this.getComparisonKey(i,d),this.getComparisonKey(u,d))}isEqual(i,u,d=!1){return i===u?!0:!i||!u?!1:this.getComparisonKey(i,d)===this.getComparisonKey(u,d)}getComparisonKey(i,u=!1){return i.with({path:this.a(i)?i.path.toLowerCase():void 0,fragment:u?null:void 0}).toString()}ignorePathCasing(i){return this.a(i)}isEqualOrParent(i,u,d=!1){if(i.scheme===u.scheme){if(i.scheme===C.Schemas.file)return L.$Vf(U(i),U(u),this.a(i))&&i.query===u.query&&(d||i.fragment===u.fragment);if((0,e.$xg)(i.authority,u.authority))return L.$Vf(i.path,u.path,this.a(i),"/")&&i.query===u.query&&(d||i.fragment===u.fragment)}return!1}joinPath(i,...u){return T.URI.joinPath(i,...u)}basenameOrAuthority(i){return(0,e.$pg)(i)||i.authority}basename(i){return M.$ec.basename(i.path)}extname(i){return M.$ec.extname(i.path)}dirname(i){if(i.path.length===0)return i;let u;return i.scheme===C.Schemas.file?u=T.URI.file(M.$kc(U(i))).path:(u=M.$ec.dirname(i.path),i.authority&&u.length&&u.charCodeAt(0)!==47&&(console.error(`dirname("${i.toString})) resulted in a relative path`),u="/")),i.with({path:u})}normalizePath(i){if(!i.path.length)return i;let u;return i.scheme===C.Schemas.file?u=T.URI.file(M.$fc(U(i))).path:u=M.$ec.normalize(i.path),i.with({path:u})}relativePath(i,u){if(i.scheme!==u.scheme||!(0,e.$xg)(i.authority,u.authority))return;if(i.scheme===C.Schemas.file){const z=M.$jc(U(i),U(u));return w.$d?L.$Pf(z):z}let d=i.path||"/";const F=u.path||"/";if(this.a(i)){let z=0;for(const b=Math.min(d.length,F.length);z<b&&!(d.charCodeAt(z)!==F.charCodeAt(z)&&d.charAt(z).toLowerCase()!==F.charAt(z).toLowerCase());z++);d=F.substr(0,z)+d.substr(z)}return M.$ec.relative(d,F)}resolvePath(i,u){if(i.scheme===C.Schemas.file){const d=T.URI.file(M.$ic(U(i),u));return i.with({authority:d.authority,path:d.path})}return u=L.$Qf(u),i.with({path:M.$ec.resolve(i.path,u)})}isAbsolutePath(i){return!!i.path&&i.path[0]==="/"}isEqualAuthority(i,u){return i===u||i!==void 0&&u!==void 0&&(0,v.$Ze)(i,u)}hasTrailingPathSeparator(i,u=M.sep){if(i.scheme===C.Schemas.file){const d=U(i);return d.length>L.$Rf(d).length&&d[d.length-1]===u}else{const d=i.path;return d.length>1&&d.charCodeAt(d.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(i.fsPath)}}removeTrailingPathSeparator(i,u=M.sep){return(0,e.$yg)(i,u)?i.with({path:i.path.substr(0,i.path.length-1)}):i}addTrailingPathSeparator(i,u=M.sep){let d=!1;if(i.scheme===C.Schemas.file){const F=U(i);d=F!==void 0&&F.length===L.$Rf(F).length&&F[F.length-1]===u}else{u="/";const F=i.path;d=F.length===1&&F.charCodeAt(F.length-1)===47}return!d&&!(0,e.$yg)(i,u)?i.with({path:i.path+"/"}):i}}e.$hg=m,e.$ig=new m(()=>!1),e.$jg=new m(S=>S.scheme===C.Schemas.file?!w.$f:!0),e.$kg=new m(S=>!0),e.$lg=e.$ig.isEqual.bind(e.$ig),e.$mg=e.$ig.isEqualOrParent.bind(e.$ig),e.$ng=e.$ig.getComparisonKey.bind(e.$ig),e.$og=e.$ig.basenameOrAuthority.bind(e.$ig),e.$pg=e.$ig.basename.bind(e.$ig),e.$qg=e.$ig.extname.bind(e.$ig),e.$rg=e.$ig.dirname.bind(e.$ig),e.$sg=e.$ig.joinPath.bind(e.$ig),e.$tg=e.$ig.normalizePath.bind(e.$ig),e.$ug=e.$ig.relativePath.bind(e.$ig),e.$vg=e.$ig.resolvePath.bind(e.$ig),e.$wg=e.$ig.isAbsolutePath.bind(e.$ig),e.$xg=e.$ig.isEqualAuthority.bind(e.$ig),e.$yg=e.$ig.hasTrailingPathSeparator.bind(e.$ig),e.$zg=e.$ig.removeTrailingPathSeparator.bind(e.$ig),e.$Ag=e.$ig.addTrailingPathSeparator.bind(e.$ig);function g(S,i){const u=[];for(let d=0;d<S.length;d++){const F=i(S[d]);S.some((z,b)=>b===d?!1:(0,e.$mg)(F,i(z)))||u.push(S[d])}return u}e.$Bg=g;var D;(function(S){S.META_DATA_LABEL="label",S.META_DATA_DESCRIPTION="description",S.META_DATA_SIZE="size",S.META_DATA_MIME="mime";function i(u){const d=new Map;u.path.substring(u.path.indexOf(";")+1,u.path.lastIndexOf(";")).split(";").forEach(b=>{const[H,p]=b.split(":");H&&p&&d.set(H,p)});const z=u.path.substring(0,u.path.indexOf(";"));return z&&d.set(S.META_DATA_MIME,z),d}S.parseMetaData=i})(D||(e.DataUri=D={}));function K(S,i,u){if(i){let d=S.path;return d&&d[0]!==M.$ec.sep&&(d=M.$ec.sep+d),S.with({scheme:u,authority:i,path:d})}return S.with({scheme:u})}e.$Cg=K}),define(se[8],re([0,1,13,12,17,18,7,2,10]),function(x,e,L,C,M,w,v,T,U){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$ch=e.$bh=e.$ah=e.Promises=e.$_g=e.$$g=e.$0g=e.$9g=e.$8g=e.$7g=e.$6g=e.$5g=e.$4g=e.$3g=e.$2g=e.$1g=e.$Zg=e.$Yg=e.$Xg=e.$Wg=e.$Vg=e.$Ug=e.$Tg=e.$Sg=e.$Rg=e.$Qg=e.$Pg=e.$Og=e.$Ng=e.$Mg=e.$Lg=e.$Kg=e.$Jg=e.$Ig=e.$Hg=e.$Gg=e.$Fg=e.$Eg=e.$Dg=void 0;function m(r){return!!r&&typeof r.then=="function"}e.$Dg=m;function g(r){const t=new L.$Vd,n=r(t.token),c=new Promise((o,j)=>{const V=t.token.onCancellationRequested(()=>{V.dispose(),t.dispose(),j(new C.$3)});Promise.resolve(n).then(ne=>{V.dispose(),t.dispose(),o(ne)},ne=>{V.dispose(),t.dispose(),j(ne)})});return new class{cancel(){t.cancel()}then(o,j){return c.then(o,j)}catch(o){return this.then(void 0,o)}finally(o){return c.finally(o)}}}e.$Eg=g;function D(r,t,n){return new Promise((c,o)=>{const j=t.onCancellationRequested(()=>{j.dispose(),c(n)});r.then(c,o).finally(()=>j.dispose())})}e.$Fg=D;function K(r,t){return new Promise((n,c)=>{const o=t.onCancellationRequested(()=>{o.dispose(),c(new C.$3)});r.then(n,c).finally(()=>o.dispose())})}e.$Gg=K;async function S(r){let t=-1;const n=r.map((c,o)=>c.then(j=>(t=o,j)));try{return await Promise.race(n)}finally{r.forEach((c,o)=>{o!==t&&c.cancel()})}}e.$Hg=S;function i(r,t,n){let c;const o=setTimeout(()=>{c?.(void 0),n?.()},t);return Promise.race([r.finally(()=>clearTimeout(o)),new Promise(j=>c=j)])}e.$Ig=i;function u(r){return new Promise((t,n)=>{const c=r();m(c)?c.then(t,n):t(c)})}e.$Jg=u;class d{constructor(){this.f=!1,this.a=null,this.b=null,this.d=null}queue(t){if(this.f)return Promise.reject(new Error("Throttler is disposed"));if(this.a){if(this.d=t,!this.b){const n=()=>{if(this.b=null,this.f)return;const c=this.queue(this.d);return this.d=null,c};this.b=new Promise(c=>{this.a.then(n,n).then(c)})}return new Promise((n,c)=>{this.b.then(n,c)})}return this.a=t(),new Promise((n,c)=>{this.a.then(o=>{this.a=null,n(o)},o=>{this.a=null,c(o)})})}dispose(){this.f=!0}}e.$Kg=d;class F{constructor(){this.a=Promise.resolve(null)}queue(t){return this.a=this.a.then(()=>t(),()=>t())}}e.$Lg=F;class z{constructor(){this.a=new Map}queue(t,n){const o=(this.a.get(t)??Promise.resolve()).catch(()=>{}).then(n).finally(()=>{this.a.get(t)===o&&this.a.delete(t)});return this.a.set(t,o),o}}e.$Mg=z;const b=(r,t)=>{let n=!0;const c=setTimeout(()=>{n=!1,t()},r);return{isTriggered:()=>n,dispose:()=>{clearTimeout(c),n=!1}}},H=r=>{let t=!0;return queueMicrotask(()=>{t&&(t=!1,r())}),{isTriggered:()=>t,dispose:()=>{t=!1}}};class p{constructor(t){this.defaultDelay=t,this.a=null,this.b=null,this.d=null,this.f=null,this.g=null}trigger(t,n=this.defaultDelay){this.g=t,this.h(),this.b||(this.b=new Promise((o,j)=>{this.d=o,this.f=j}).then(()=>{if(this.b=null,this.d=null,this.g){const o=this.g;return this.g=null,o()}}));const c=()=>{this.a=null,this.d?.(null)};return this.a=n===U.$Id?H(c):b(n,c),this.b}isTriggered(){return!!this.a?.isTriggered()}cancel(){this.h(),this.b&&(this.f?.(new C.$3),this.b=null)}h(){this.a?.dispose(),this.a=null}dispose(){this.cancel()}}e.$Ng=p;class R{constructor(t){this.a=new p(t),this.b=new d}trigger(t,n){return this.a.trigger(()=>this.b.queue(t),n)}isTriggered(){return this.a.isTriggered()}cancel(){this.a.cancel()}dispose(){this.a.dispose(),this.b.dispose()}}e.$Og=R;class q{constructor(){this.a=!1,this.b=new Promise((t,n)=>{this.d=t})}isOpen(){return this.a}open(){this.a=!0,this.d(!0)}wait(){return this.b}}e.$Pg=q;class A extends q{constructor(t){super(),this.f=setTimeout(()=>this.open(),t)}open(){clearTimeout(this.f),super.open()}}e.$Qg=A;function Z(r,t){return t?new Promise((n,c)=>{const o=setTimeout(()=>{j.dispose(),n()},r),j=t.onCancellationRequested(()=>{clearTimeout(o),j.dispose(),c(new C.$3)})}):g(n=>Z(r,n))}e.$Rg=Z;function G(r,t=0,n){const c=setTimeout(()=>{r(),n&&o.dispose()},t),o=(0,w.$Oc)(()=>{clearTimeout(c),n?.deleteAndLeak(o)});return n?.add(o),o}e.$Sg=G;function s(r){const t=[];let n=0;const c=r.length;function o(){return n<c?r[n++]():null}function j(V){V!=null&&t.push(V);const ne=o();return ne?ne.then(j):Promise.resolve(t)}return Promise.resolve(null).then(j)}e.$Tg=s;function f(r,t=c=>!!c,n=null){let c=0;const o=r.length,j=()=>{if(c>=o)return Promise.resolve(n);const V=r[c++];return Promise.resolve(V()).then(le=>t(le)?Promise.resolve(le):j())};return j()}e.$Ug=f;function O(r,t=c=>!!c,n=null){if(r.length===0)return Promise.resolve(n);let c=r.length;const o=()=>{c=-1;for(const j of r)j.cancel?.()};return new Promise((j,V)=>{for(const ne of r)ne.then(le=>{--c>=0&&t(le)?(o(),j(le)):c===0&&j(n)}).catch(le=>{--c>=0&&(o(),V(le))})})}e.$Vg=O;class B{constructor(t){this.a=0,this.d=t,this.f=[],this.b=0,this.g=new M.$Ld}get onDrained(){return this.g.event}get size(){return this.a}queue(t){return this.a++,new Promise((n,c)=>{this.f.push({factory:t,c:n,e:c}),this.h()})}h(){for(;this.f.length&&this.b<this.d;){const t=this.f.shift();this.b++;const n=t.factory();n.then(t.c,t.e),n.then(()=>this.j(),()=>this.j())}}j(){this.a--,this.b--,this.f.length>0?this.h():this.g.fire()}dispose(){this.g.dispose()}}e.$Wg=B;class Q extends B{constructor(){super(1)}}e.$Xg=Q;class W{constructor(){this.a=new a,this.b=0}queue(t){return this.a.isRunning()?this.a.queue(()=>this.a.run(this.b++,t())):this.a.run(this.b++,t())}}e.$Yg=W;class Y{constructor(){this.a=new Map,this.b=new Set,this.d=void 0,this.f=0}async whenDrained(){if(this.g())return;const t=new y;return this.b.add(t),t.p}g(){for(const[,t]of this.a)if(t.size>0)return!1;return!0}queueFor(t,n=v.$ig){const c=n.getComparisonKey(t);let o=this.a.get(c);if(!o){o=new Q;const j=this.f++,V=M.Event.once(o.onDrained)(()=>{o?.dispose(),this.a.delete(c),this.h(),this.d?.deleteAndDispose(j),this.d?.size===0&&(this.d.dispose(),this.d=void 0)});this.d||(this.d=new w.$Yc),this.d.set(j,V),this.a.set(c,o)}return o}h(){this.g()&&this.j()}j(){for(const t of this.b)t.complete();this.b.clear()}dispose(){for(const[,t]of this.a)t.dispose();this.a.clear(),this.j(),this.d?.dispose()}}e.$Zg=Y;class ie{constructor(t,n){this.a=-1,typeof t=="function"&&typeof n=="number"&&this.setIfNotSet(t,n)}dispose(){this.cancel()}cancel(){this.a!==-1&&(clearTimeout(this.a),this.a=-1)}cancelAndSet(t,n){this.cancel(),this.a=setTimeout(()=>{this.a=-1,t()},n)}setIfNotSet(t,n){this.a===-1&&(this.a=setTimeout(()=>{this.a=-1,t()},n))}}e.$1g=ie;class ee{constructor(){this.a=-1}dispose(){this.cancel()}cancel(){this.a!==-1&&(clearInterval(this.a),this.a=-1)}cancelAndSet(t,n){this.cancel(),this.a=setInterval(()=>{t()},n)}}e.$2g=ee;class _{constructor(t,n){this.b=-1,this.a=t,this.d=n,this.f=this.g.bind(this)}dispose(){this.cancel(),this.a=null}cancel(){this.isScheduled()&&(clearTimeout(this.b),this.b=-1)}schedule(t=this.d){this.cancel(),this.b=setTimeout(this.f,t)}get delay(){return this.d}set delay(t){this.d=t}isScheduled(){return this.b!==-1}flush(){this.isScheduled()&&(this.cancel(),this.h())}g(){this.b=-1,this.a&&this.h()}h(){this.a?.()}}e.$3g=_;class ce{constructor(t,n){n%1e3!==0&&console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${n}ms is not a multiple of 1000ms.`),this.a=t,this.b=n,this.d=0,this.f=-1,this.g=this.h.bind(this)}dispose(){this.cancel(),this.a=null}cancel(){this.isScheduled()&&(clearInterval(this.f),this.f=-1)}schedule(t=this.b){t%1e3!==0&&console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${t}ms is not a multiple of 1000ms.`),this.cancel(),this.d=Math.ceil(t/1e3),this.f=setInterval(this.g,1e3)}isScheduled(){return this.f!==-1}h(){this.d--,!(this.d>0)&&(clearInterval(this.f),this.f=-1,this.a?.())}}e.$4g=ce;class N extends _{constructor(t,n){super(t,n),this.j=[]}work(t){this.j.push(t),this.isScheduled()||this.schedule()}h(){const t=this.j;this.j=[],this.a?.(t)}dispose(){this.j=[],super.dispose()}}e.$5g=N;class J extends w.$Qc{constructor(t,n){super(),this.g=t,this.h=n,this.a=[],this.b=this.B(new w.$Rc),this.f=!1}get pending(){return this.a.length}work(t){if(this.f)return!1;if(typeof this.g.maxBufferedWork=="number"){if(this.b.value){if(this.pending+t.length>this.g.maxBufferedWork)return!1}else if(this.pending+t.length-this.g.maxWorkChunkSize>this.g.maxBufferedWork)return!1}for(const n of t)this.a.push(n);return this.b.value||this.j(),!0}j(){this.h(this.a.splice(0,this.g.maxWorkChunkSize)),this.a.length>0&&(this.b.value=new _(()=>{this.b.clear(),this.j()},this.g.throttleDelay),this.b.value.schedule())}dispose(){super.dispose(),this.f=!0}}e.$6g=J,function(){typeof requestIdleCallback!="function"||typeof cancelIdleCallback!="function"?e.$7g=r=>{(0,T.$v)(()=>{if(t)return;const n=Date.now()+15;r(Object.freeze({didTimeout:!0,timeRemaining(){return Math.max(0,n-Date.now())}}))});let t=!1;return{dispose(){t||(t=!0)}}}:e.$7g=(r,t)=>{const n=requestIdleCallback(r,typeof t=="number"?{timeout:t}:void 0);let c=!1;return{dispose(){c||(c=!0,cancelIdleCallback(n))}}}}();class X{constructor(t){this.d=!1,this.a=()=>{try{this.f=t()}catch(n){this.g=n}finally{this.d=!0}},this.b=(0,e.$7g)(()=>this.a())}dispose(){this.b.dispose()}get value(){if(this.d||(this.b.dispose(),this.a()),this.g)throw this.g;return this.f}get isInitialized(){return this.d}}e.$8g=X;async function te(r,t,n){let c;for(let o=0;o<n;o++)try{return await r()}catch(j){c=j,await Z(t)}throw c}e.$9g=te;class a{isRunning(t){return typeof t=="number"?this.a?.taskId===t:!!this.a}get running(){return this.a?.promise}cancelRunning(){this.a?.cancel()}run(t,n,c){return this.a={taskId:t,cancel:()=>c?.(),promise:n},n.then(()=>this.d(t),()=>this.d(t)),n}d(t){this.a&&t===this.a.taskId&&(this.a=void 0,this.f())}f(){if(this.b){const t=this.b;this.b=void 0,t.run().then(t.promiseResolve,t.promiseReject)}}queue(t){if(this.b)this.b.run=t;else{let n,c;const o=new Promise((j,V)=>{n=j,c=V});this.b={run:t,promise:o,promiseResolve:n,promiseReject:c}}return this.b.promise}hasQueued(){return!!this.b}async join(){return this.b?.promise??this.a?.promise}}e.$0g=a;class h{constructor(t,n=()=>Date.now()){this.d=t,this.f=n,this.a=0,this.b=0}increment(){const t=this.f();return t-this.a>this.d&&(this.a=t,this.b=0),this.b++,this.b}}e.$$g=h;var l;(function(r){r[r.Resolved=0]="Resolved",r[r.Rejected=1]="Rejected"})(l||(l={}));class y{get isRejected(){return this.d?.outcome===1}get isResolved(){return this.d?.outcome===0}get isSettled(){return!!this.d}get value(){return this.d?.outcome===0?this.d?.value:void 0}constructor(){this.p=new Promise((t,n)=>{this.a=t,this.b=n})}complete(t){return new Promise(n=>{this.a(t),this.d={outcome:0,value:t},n()})}error(t){return new Promise(n=>{this.b(t),this.d={outcome:1,value:t},n()})}cancel(){return this.error(new C.$3)}}e.$_g=y;var P;(function(r){async function t(c){let o;const j=await Promise.all(c.map(V=>V.then(ne=>ne,ne=>{o||(o=ne)})));if(typeof o<"u")throw o;return j}r.settled=t;function n(c){return new Promise(async(o,j)=>{try{await c(o,j)}catch(V){j(V)}})}r.withAsyncBody=n})(P||(e.Promises=P={}));var I;(function(r){r[r.Initial=0]="Initial",r[r.DoneOK=1]="DoneOK",r[r.DoneError=2]="DoneError"})(I||(I={}));class k{static fromArray(t){return new k(n=>{n.emitMany(t)})}static fromPromise(t){return new k(async n=>{n.emitMany(await t)})}static fromPromises(t){return new k(async n=>{await Promise.all(t.map(async c=>n.emitOne(await c)))})}static merge(t){return new k(async n=>{await Promise.all(t.map(async c=>{for await(const o of c)n.emitOne(o)}))})}constructor(t){this.a=0,this.b=[],this.d=null,this.f=new M.$Ld,queueMicrotask(async()=>{const n={emitOne:c=>this.g(c),emitMany:c=>this.h(c),reject:c=>this.k(c)};try{await Promise.resolve(t(n)),this.j()}catch(c){this.k(c)}finally{n.emitOne=void 0,n.emitMany=void 0,n.reject=void 0}})}[Symbol.asyncIterator](){let t=0;return{next:async()=>{do{if(this.a===2)throw this.d;if(t<this.b.length)return{done:!1,value:this.b[t++]};if(this.a===1)return{done:!0,value:void 0};await M.Event.toPromise(this.f.event)}while(!0)}}}static map(t,n){return new k(async c=>{for await(const o of t)c.emitOne(n(o))})}map(t){return k.map(this,t)}static filter(t,n){return new k(async c=>{for await(const o of t)n(o)&&c.emitOne(o)})}filter(t){return k.filter(this,t)}static coalesce(t){return k.filter(t,n=>!!n)}coalesce(){return k.coalesce(this)}static async toPromise(t){const n=[];for await(const c of t)n.push(c);return n}toPromise(){return k.toPromise(this)}g(t){this.a===0&&(this.b.push(t),this.f.fire())}h(t){this.a===0&&(this.b=this.b.concat(t),this.f.fire())}j(){this.a===0&&(this.a=1,this.f.fire())}k(t){this.a===0&&(this.a=2,this.d=t,this.f.fire())}}e.$ah=k,k.EMPTY=k.fromArray([]);class $ extends k{constructor(t,n){super(n),this.l=t}cancel(){this.l.cancel()}}e.$bh=$;function E(r){const t=new L.$Vd,n=r(t.token);return new $(t,async c=>{const o=t.token.onCancellationRequested(()=>{o.dispose(),t.dispose(),c.reject(new C.$3)});try{for await(const j of n){if(t.token.isCancellationRequested)return;c.emitOne(j)}o.dispose(),t.dispose()}catch(j){o.dispose(),t.dispose(),c.reject(j)}})}e.$ch=E}),define(se[9],re([0,1,19,8,5,20,3,2,4]),function(x,e,L,C,M,w,v,T,U){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$wj=e.$vj=e.$uj=e.$tj=e.$sj=e.$rj=e.$qj=e.$pj=e.$oj=e.$nj=void 0;function m(){return Object.create(null)}e.$nj=m,e.$oj="**",e.$pj="/";const g="[/\\\\]",D="[^/\\\\]",K=/\//g;function S(a,h){switch(a){case 0:return"";case 1:return`${D}*?`;default:return`(?:${g}|${D}+${g}${h?`|${g}${D}+`:""})*?`}}function i(a,h){if(!a)return[];const l=[];let y=!1,P=!1,I="";for(const k of a){switch(k){case h:if(!y&&!P){l.push(I),I="";continue}break;case"{":y=!0;break;case"}":y=!1;break;case"[":P=!0;break;case"]":P=!1;break}I+=k}return I&&l.push(I),l}e.$qj=i;function u(a){if(!a)return"";let h="";const l=i(a,e.$pj);if(l.every(y=>y===e.$oj))h=".*";else{let y=!1;l.forEach((P,I)=>{if(P===e.$oj){if(y)return;h+=S(2,I===l.length-1)}else{let k=!1,$="",E=!1,r="";for(const t of P){if(t!=="}"&&k){$+=t;continue}if(E&&(t!=="]"||!r)){let n;t==="-"?n=t:(t==="^"||t==="!")&&!r?n="^":t===e.$pj?n="":n=(0,U.$De)(t),r+=n;continue}switch(t){case"{":k=!0;continue;case"[":E=!0;continue;case"}":{const c=`(?:${i($,",").map(o=>u(o)).join("|")})`;h+=c,k=!1,$="";break}case"]":{h+="["+r+"]",E=!1,r="";break}case"?":h+=D;continue;case"*":h+=S(1);continue;default:h+=(0,U.$De)(t)}}I<l.length-1&&(l[I+1]!==e.$oj||I+2<l.length)&&(h+=g)}y=P===e.$oj})}return h}const d=/^\*\*\/\*\.[\w\.-]+$/,F=/^\*\*\/([\w\.-]+)\/?$/,z=/^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/,b=/^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/,H=/^\*\*((\/[\w\.-]+)+)\/?$/,p=/^([\w\.-]+(\/[\w\.-]+)*)\/?$/,R=new w.$Bc(1e4),q=function(){return!1},A=function(){return null};function Z(a,h){if(!a)return A;let l;typeof a!="string"?l=a.pattern:l=a,l=l.trim();const y=`${l}_${!!h.trimForExclusions}`;let P=R.get(y);if(P)return G(P,a);let I;return d.test(l)?P=f(l.substr(4),l):(I=F.exec(s(l,h)))?P=O(I[1],l):(h.trimForExclusions?b:z).test(l)?P=B(l,h):(I=H.exec(s(l,h)))?P=Q(I[1].substr(1),l,!0):(I=p.exec(s(l,h)))?P=Q(I[1],l,!1):P=W(l),R.set(y,P),G(P,a)}function G(a,h){if(typeof h=="string")return a;const l=function(y,P){return(0,M.$Vf)(y,h.base,!T.$f)?a((0,U.$He)(y.substr(h.base.length),v.sep),P):null};return l.allBasenames=a.allBasenames,l.allPaths=a.allPaths,l.basenames=a.basenames,l.patterns=a.patterns,l}function s(a,h){return h.trimForExclusions&&a.endsWith("/**")?a.substr(0,a.length-2):a}function f(a,h){return function(l,y){return typeof l=="string"&&l.endsWith(a)?h:null}}function O(a,h){const l=`/${a}`,y=`\\${a}`,P=function(k,$){return typeof k!="string"?null:$?$===a?h:null:k===a||k.endsWith(l)||k.endsWith(y)?h:null},I=[a];return P.basenames=I,P.patterns=[h],P.allBasenames=I,P}function B(a,h){const l=X(a.slice(1,-1).split(",").map($=>Z($,h)).filter($=>$!==A),a),y=l.length;if(!y)return A;if(y===1)return l[0];const P=function($,E){for(let r=0,t=l.length;r<t;r++)if(l[r]($,E))return a;return null},I=l.find($=>!!$.allBasenames);I&&(P.allBasenames=I.allBasenames);const k=l.reduce(($,E)=>E.allPaths?$.concat(E.allPaths):$,[]);return k.length&&(P.allPaths=k),P}function Q(a,h,l){const y=v.sep===v.$ec.sep,P=y?a:a.replace(K,v.sep),I=v.sep+P,k=v.$ec.sep+a;let $;return l?$=function(E,r){return typeof E=="string"&&(E===P||E.endsWith(I)||!y&&(E===a||E.endsWith(k)))?h:null}:$=function(E,r){return typeof E=="string"&&(E===P||!y&&E===a)?h:null},$.allPaths=[(l?"*/":"./")+a],$}function W(a){try{const h=new RegExp(`^${u(a)}$`);return function(l){return h.lastIndex=0,typeof l=="string"&&h.test(l)?a:null}}catch{return A}}function Y(a,h,l){return!a||typeof h!="string"?!1:ie(a)(h,void 0,l)}e.$rj=Y;function ie(a,h={}){if(!a)return q;if(typeof a=="string"||ee(a)){const l=Z(a,h);if(l===A)return q;const y=function(P,I){return!!l(P,I)};return l.allBasenames&&(y.allBasenames=l.allBasenames),l.allPaths&&(y.allPaths=l.allPaths),y}return N(a,h)}e.$sj=ie;function ee(a){const h=a;return h?typeof h.base=="string"&&typeof h.pattern=="string":!1}e.$tj=ee;function _(a){return a.allBasenames||[]}e.$uj=_;function ce(a){return a.allPaths||[]}e.$vj=ce;function N(a,h){const l=X(Object.getOwnPropertyNames(a).map($=>J($,a[$],h)).filter($=>$!==A)),y=l.length;if(!y)return A;if(!l.some($=>!!$.requiresSiblings)){if(y===1)return l[0];const $=function(t,n){let c;for(let o=0,j=l.length;o<j;o++){const V=l[o](t,n);if(typeof V=="string")return V;(0,C.$Dg)(V)&&(c||(c=[]),c.push(V))}return c?(async()=>{for(const o of c){const j=await o;if(typeof j=="string")return j}return null})():null},E=l.find(t=>!!t.allBasenames);E&&($.allBasenames=E.allBasenames);const r=l.reduce((t,n)=>n.allPaths?t.concat(n.allPaths):t,[]);return r.length&&($.allPaths=r),$}const P=function($,E,r){let t,n;for(let c=0,o=l.length;c<o;c++){const j=l[c];j.requiresSiblings&&r&&(E||(E=(0,v.$lc)($)),t||(t=E.substr(0,E.length-(0,v.$mc)($).length)));const V=j($,E,t,r);if(typeof V=="string")return V;(0,C.$Dg)(V)&&(n||(n=[]),n.push(V))}return n?(async()=>{for(const c of n){const o=await c;if(typeof o=="string")return o}return null})():null},I=l.find($=>!!$.allBasenames);I&&(P.allBasenames=I.allBasenames);const k=l.reduce(($,E)=>E.allPaths?$.concat(E.allPaths):$,[]);return k.length&&(P.allPaths=k),P}function J(a,h,l){if(h===!1)return A;const y=Z(a,l);if(y===A)return A;if(typeof h=="boolean")return y;if(h){const P=h.when;if(typeof P=="string"){const I=(k,$,E,r)=>{if(!r||!y(k,$))return null;const t=P.replace("$(basename)",()=>E),n=r(t);return(0,C.$Dg)(n)?n.then(c=>c?a:null):n?a:null};return I.requiresSiblings=!0,I}}return y}function X(a,h){const l=a.filter($=>!!$.basenames);if(l.length<2)return a;const y=l.reduce(($,E)=>{const r=E.basenames;return r?$.concat(r):$},[]);let P;if(h){P=[];for(let $=0,E=y.length;$<E;$++)P.push(h)}else P=l.reduce(($,E)=>{const r=E.patterns;return r?$.concat(r):$},[]);const I=function($,E){if(typeof $!="string")return null;if(!E){let t;for(t=$.length;t>0;t--){const n=$.charCodeAt(t-1);if(n===47||n===92)break}E=$.substr(t)}const r=y.indexOf(E);return r!==-1?P[r]:null};I.basenames=y,I.patterns=P,I.allBasenames=y;const k=a.filter($=>!$.basenames);return k.push(I),k}function te(a,h){return(0,L.$sb)(a,h,(l,y)=>typeof l=="string"&&typeof y=="string"?l===y:typeof l!="string"&&typeof y!="string"?l.base===y.base&&l.pattern===y.pattern:!1)}e.$wj=te}),define(se[14],re([0,1,21]),function(x,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Ngc=void 0;const C=(M,w,v)=>{let T;if(M[0]===255&&M[1]===254)T=new TextDecoder("utf-16le").decode(M);else if(M[0]===254&&M[1]===255)T=new TextDecoder("utf-16be").decode(M);else if(T=new TextDecoder("utf8").decode(M),T.slice(0,1e3).includes("\uFFFD")&&M.includes(0))return[];const U=[],m=[];let g=null,D=v.remainingResultQuota;for(;D>=0&&(g=w.exec(T));)m.push({matchStartIndex:g.index,matchedText:g[0]}),D--;if(m.length){const K=new Set,S=new Set,i=[],u=H=>T.slice(i[H].start,i[H].end);let d=0,F=null;const z=/\r?\n/g;for(;F=z.exec(T);)i.push({start:d,end:F.index}),d=F.index+F[0].length;d<T.length&&i.push({start:d,end:T.length});let b=0;for(const{matchStartIndex:H,matchedText:p}of m){if(D<0)break;for(;i[b+1]&&H>i[b].end;)b++;let R=b;for(;i[R+1]&&H+p.length>i[R].end;)R++;if(v.beforeContext)for(let f=Math.max(0,b-v.beforeContext);f<b;f++)K.add(f);let q="",A=0;for(let f=b;f<=R;f++){let O=u(f);v.previewOptions?.charsPerLine&&O.length>v.previewOptions.charsPerLine&&(A=Math.max(H-i[b].start-20,0),O=O.substr(A,v.previewOptions.charsPerLine)),q+=`${O}
`,S.add(f)}const Z=new L.$ms(b,H-i[b].start,R,H+p.length-i[R].start),G=new L.$ms(0,H-i[b].start-A,R-b,H+p.length-i[R].start-(R===b?A:0)),s={ranges:Z,preview:{text:q,matches:G}};if(U.push(s),v.afterContext)for(let f=R+1;f<=Math.min(R+v.afterContext,i.length-1);f++)K.add(f)}for(const H of K)S.has(H)||U.push({text:u(H),lineNumber:H+1})}return U};e.$Ngc=C}),define(se[15],re([0,1,9]),function(x,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$LIb=void 0;class C{constructor(w,v,T){if(this.b=v,this.c=T,v[v.length-1]==="\\")throw Error("Unexpected path format, do not use trailing backslashes");v[v.length-1]!=="/"&&(v+="/"),this.a=this.e(w,this.b,this.c)}updateContents(w){this.a=this.e(w,this.b,this.c)}isPathIncludedInTraversal(w,v){if(w[0]!=="/"||w[w.length-1]==="/")throw Error("Unexpected path format, expectred to begin with slash and end without. got:"+w);return!this.a(w,v)}isArbitraryPathIgnored(w,v){if(w[0]!=="/"||w[w.length-1]==="/")throw Error("Unexpected path format, expectred to begin with slash and end without. got:"+w);const T=w.split("/").filter(g=>g);let U=!1,m="";for(let g=0;g<T.length;g++){const D=g===T.length-1,K=T[g];if(m=m+"/"+K,!this.isPathIncludedInTraversal(m,D?v:!0)){U=!0;break}}return U}d(w,v,T){const U=w.map(g=>this.f(g,v)),m=Object.create(null);for(const g of U)m[g]=!0;return L.$sj(m,{trimForExclusions:T})}e(w,v,T){const U=w.split(`
`).map(b=>b.trim()).filter(b=>b&&b[0]!=="#"),m=U.filter(b=>!b.endsWith("/")),g=m.filter(b=>!b.includes("!")),D=this.d(g,v,!0),K=m.filter(b=>b.includes("!")).map(b=>b.replace(/!/g,"")),S=this.d(K,v,!1),i=U.filter(b=>!b.includes("!")),u=this.d(i,v,!0),d=U.filter(b=>b.includes("!")).map(b=>b.replace(/!/g,"")),F=this.d(d,v,!1);return(b,H)=>b.startsWith(v)?H&&u(b)&&!F(b)||D(b)&&!S(b)?!0:T?T.a(b,H):!1:!1}f(w,v){const T=w.indexOf("/");return T===-1||T===w.length-1?w="**/"+w:(T===0?v.slice(-1)==="/"&&(w=w.slice(1)):v.slice(-1)!=="/"&&(w="/"+w),w=v+w),w}}e.$LIb=C}),define(se[22],re([0,1,9,6,3,13,14,15,4,8,7]),function(x,e,L,C,M,w,v,T,U,m,g){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LocalFileSearchSimpleWorker=e.create=void 0;const D=!1,K=+new Date,S={},i=async(R,q)=>{if(!D)return q();const A=Date.now(),Z=(S[R]??0)+1;console.info(R,Z,"starting",Math.round((A-K)*10)/1e4),S[R]=Z;const G=await q(),s=Date.now();return console.info(R,Z,"took",s-A),G};function u(R){return new d(R)}e.create=u;class d{constructor(q){this.d=q,this.cancellationTokens=new Map}cancelQuery(q){this.cancellationTokens.get(q)?.cancel()}g(q){const A=new w.$Vd;return this.cancellationTokens.set(q,A),A}async listDirectory(q,A,Z,G,s){const f=z(Z),O=new g.$hg(()=>G),B=this.g(s),Q=[];let W=!1,Y=0;const ie=A.maxResults||512,ee=A.filePattern?_=>A.filePattern.split("").every(ce=>_.includes(ce)):_=>!0;return await i("listDirectory",()=>this.h(q,b(A),f,O,_=>{if(ee(_.name))return Y++,ie&&Y>ie&&(W=!0,B.cancel()),Q.push(_.path)},B.token)),{results:Q,limitHit:W}}async searchDirectory(q,A,Z,G,s){const f=z(Z),O=new g.$hg(()=>G);return i("searchInFiles",async()=>{const B=this.g(s),Q=[],W=F(A.contentPattern),Y=[];let ie=0,ee=0;const _=!1,ce=async N=>{if(B.token.isCancellationRequested)return;ie++;const J=await N.resolve();if(B.token.isCancellationRequested)return;const X=new Uint8Array(J),te=(0,v.$Ngc)(X,W,{afterContext:A.afterContext??0,beforeContext:A.beforeContext??0,previewOptions:A.previewOptions,remainingResultQuota:A.maxResults?A.maxResults-ee:1e4});if(te.length){ee+=te.length,A.maxResults&&ee>A.maxResults&&B.cancel();const a={resource:C.URI.joinPath(f.folder,N.path),results:te};this.d.sendTextSearchMatch(a,s),Q.push(a)}};return await i("walkFolderToResolve",()=>this.h(q,b(A),f,O,async N=>Y.push(ce(N)),B.token)),await i("resolveOngoingProcesses",()=>Promise.all(Y)),D&&console.log("Searched in",ie,"files"),{results:Q,limitHit:_}})}async h(q,A,Z,G,s,f){const O=L.$sj(Z.excludePattern??{},{trimForExclusions:!0}),B=(N,J,X)=>(N=N.slice(1),!!(O(N,J,X)||H(A,N))),Q=(N,J,X)=>(N=N.slice(1),!(O(N,J,X)||!p(A,N,G))),W=(N,J)=>({type:"file",name:N.name,path:J,resolve:()=>N.getFile().then(te=>te.arrayBuffer())}),Y=N=>N.kind==="directory",ie=N=>N.kind==="file",ee=async(N,J,X)=>{if(!Z.disregardIgnoreFiles){const a=await Promise.all([N.getFileHandle(".gitignore").catch(h=>{}),N.getFileHandle(".ignore").catch(h=>{})]);await Promise.all(a.map(async h=>{if(!h)return;const l=new TextDecoder("utf8").decode(new Uint8Array(await(await h.getFile()).arrayBuffer()));X=new T.$LIb(l,J,X)}))}const te=m.Promises.withAsyncBody(async a=>{const h=[],l=[],y=[],P=new Set;for await(const I of N.entries())y.push(I),P.add(I[0]);for(const[I,k]of y){if(f.isCancellationRequested)break;const $=J+I;if(X&&!X.isPathIncludedInTraversal($,k.kind==="directory"))continue;const E=r=>P.has(r);Y(k)&&!B($,I,E)?l.push(ee(k,$+"/",X)):ie(k)&&Q($,I,E)&&h.push(W(k,$))}a([...await Promise.all(l),...h])});return{type:"dir",name:N.name,entries:te}},_=async(N,J)=>{f.isCancellationRequested||await Promise.all((await N.entries).sort((X,te)=>-(X.type==="dir"?0:1)+(te.type==="dir"?0:1)).map(async X=>X.type==="dir"?_(X,J):J(X)))},ce=await i("process",()=>ee(q,"/"));await i("resolve",()=>_(ce,s))}}e.LocalFileSearchSimpleWorker=d;function F(R){return(0,U.$Le)(R.pattern,!!R.isRegExp,{wholeWord:R.isWordMatch,global:!0,matchCase:R.isCaseSensitive,multiline:!0,unicode:!0})}function z(R){return{...R,folder:C.URI.revive(R.folder)}}function b(R){return{...R,extraFileResources:R.extraFileResources?.map(q=>C.URI.revive(q)),folderQueries:R.folderQueries.map(q=>z(q))}}function H(R,q){return!!(R.excludePattern&&L.$rj(R.excludePattern,q))}function p(R,q,A){return R.excludePattern&&L.$rj(R.excludePattern,q)?!1:R.includePattern||R.usingSearchPaths?R.includePattern&&L.$rj(R.includePattern,q)?!0:R.usingSearchPaths?!!R.folderQueries&&R.folderQueries.some(Z=>{const G=Z.folder,s=C.URI.file(q);if(A.isEqualOrParent(s,G)){const f=M.$jc(G.path,s.path);return!Z.includePattern||!!L.$rj(Z.includePattern,f)}else return!1}):!1:!0}})}).call(this);

//# sourceMappingURL=localFileSearch.js.map