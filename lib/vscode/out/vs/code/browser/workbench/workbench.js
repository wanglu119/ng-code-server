"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var g=["vs/code/browser/workbench/workbench","require","exports","vs/base/browser/browser","vs/base/common/buffer","vs/base/common/event","vs/base/common/lifecycle","vs/base/common/marshalling","vs/base/common/network","vs/base/common/path","vs/base/common/resources","vs/base/common/strings","vs/base/common/uri","vs/platform/product/common/product","vs/platform/window/common/window","vs/platform/tunnel/common/tunnel","vs/workbench/workbench.web.main"],A=function(b){for(var u=[],m=0,y=b.length;m<y;m++)u[m]=g[b[m]];return u};define(g[0],A([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),function(b,u,m,y,v,C,k,w,p,$,R,d,S,h,T,O){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.LocalStorageSecretStorageProvider=void 0;class L{async seal(e){return e}async unseal(e){return e}}var U;(function(a){a.ALGORITHM="AES-GCM",a[a.KEY_LENGTH=256]="KEY_LENGTH",a[a.IV_LENGTH=12]="IV_LENGTH"})(U||(U={}));class I{static supported(){return!!crypto.subtle}constructor(e){this.b=e}async seal(e){const t=window.crypto.getRandomValues(new Uint8Array(12)),r=await window.crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),o=new Uint8Array(await window.crypto.subtle.exportKey("raw",r)),n=await this.c(o),s=new TextEncoder().encode(e),c=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:t},n,s),l=new Uint8Array([...o,...t,...new Uint8Array(c)]);return(0,y.$te)(y.$_d.wrap(l))}async unseal(e){const t=(0,y.$se)(e);if(t.byteLength<60)throw Error("Invalid length for the value for credentials.crypto");const r=256/8,o=t.slice(0,r),n=t.slice(r,r+12),s=t.slice(r+12),c=await this.c(o.buffer),l=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:n.buffer},c,s.buffer);return new TextDecoder().decode(new Uint8Array(l))}async c(e){if(!e||e.byteLength!==256/8)throw Error("Invalid length for clientKey");const t=await this.d(),r=new Uint8Array(256/8);for(let o=0;o<r.byteLength;o++)r[o]=e[o]^t[o];return window.crypto.subtle.importKey("raw",r,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}async d(){if(this.a)return this.a;let e=0,t;for(;e<=3;)try{const r=await fetch(this.b,{credentials:"include",method:"POST"});if(!r.ok)throw new Error(r.statusText);const o=new Uint8Array(await await r.arrayBuffer());if(o.byteLength!==256/8)throw Error("The key retrieved by the server is not 256 bit long.");return this.a=o,this.a}catch(r){t=r,e++,await new Promise(o=>setTimeout(o,e*e*100))}throw t}}class E{constructor(e){this.c=e,this.a="secrets.provider",this.b=this.d(),this.type="persisted"}async d(){const e=this.f(),t=window.localStorage.getItem(this.a);if(t)try{const r=JSON.parse(await this.c.unseal(t));return{...e,...r}}catch(r){console.error("Failed to decrypt secrets from localStorage",r),window.localStorage.removeItem(this.a)}return e}f(){let e;const t=document.getElementById("vscode-workbench-auth-session"),r=t?t.getAttribute("data-settings"):void 0;if(r)try{e=JSON.parse(r)}catch{}if(!e)return{};const o={};if(o[`${S.default.urlProtocol}.loginAccount`]=JSON.stringify(e),e.providerId!=="github")return console.error(`Unexpected auth provider: ${e.providerId}. Expected 'github'.`),o;const n=JSON.stringify({extensionId:"vscode.github-authentication",key:"github.auth"});return o[n]=JSON.stringify(e.scopes.map(s=>({id:e.id,scopes:s,accessToken:e.accessToken}))),o}async get(e){return(await this.b)[e]}async set(e,t){const r=await this.b;r[e]=t,this.b=Promise.resolve(r),this.g()}async delete(e){const t=await this.b;delete t[e],this.b=Promise.resolve(t),this.g()}async g(){try{const e=await this.c.seal(JSON.stringify(await this.b));window.localStorage.setItem(this.a,e)}catch(e){console.error(e)}}}u.LocalStorageSecretStorageProvider=E;class f extends C.$Qc{constructor(e){super(),this.m=e,this.c=this.B(new v.$Ld),this.onCallback=this.c.event,this.f=new Set,this.g=Date.now(),this.h=void 0}create(e={}){const t=++f.a,r=[`vscode-reqid=${t}`];for(const n of f.b){const s=e[n];s&&r.push(`vscode-${n}=${encodeURIComponent(s)}`)}if(!(e.authority==="vscode.github-authentication"&&e.path==="/dummy")){const n=`vscode-web.url-callbacks[${t}]`;window.localStorage.removeItem(n),this.f.add(t),this.n()}const o=(window.location.pathname+"/"+this.m).replace(/\/\/+/g,"/");return d.URI.parse(window.location.href).with({path:o,query:r.join("&")})}n(){if(this.j)return;const e=()=>this.s();window.addEventListener("storage",e),this.j={dispose:()=>window.removeEventListener("storage",e)}}r(){this.j?.dispose(),this.j=void 0}async s(){const e=Date.now()-this.g;e>1e3?this.t():this.h===void 0&&(this.h=setTimeout(()=>{this.h=void 0,this.t()},1e3-e))}t(){let e;for(const t of this.f){const r=`vscode-web.url-callbacks[${t}]`,o=window.localStorage.getItem(r);if(o!==null){try{this.c.fire(d.URI.revive(JSON.parse(o)))}catch(n){console.error(n)}e=e??new Set(this.f),e.delete(t),window.localStorage.removeItem(r)}}e&&(this.f=e,this.f.size===0&&this.r()),this.g=Date.now()}}f.a=0,f.b=["scheme","authority","path","query","fragment"];class i{static create(e){let t=!1,r,o=Object.create(null);return new URL(document.location.href).searchParams.forEach((s,c)=>{switch(c){case i.b:e.remoteAuthority&&s.startsWith(p.$ec.sep)?r={folderUri:d.URI.from({scheme:w.Schemas.vscodeRemote,path:s,authority:e.remoteAuthority})}:r={folderUri:d.URI.parse(s)},t=!0;break;case i.c:e.remoteAuthority&&s.startsWith(p.$ec.sep)?r={workspaceUri:d.URI.from({scheme:w.Schemas.vscodeRemote,path:s,authority:e.remoteAuthority})}:r={workspaceUri:d.URI.parse(s)},t=!0;break;case i.a:r=void 0,t=!0;break;case i.d:try{o=(0,k.$hh)(s)}catch(l){console.error(l)}break}}),t||(e.folderUri?r={folderUri:d.URI.revive(e.folderUri)}:e.workspaceUri&&(r={workspaceUri:d.URI.revive(e.workspaceUri)})),new i(r,o,e)}constructor(e,t,r){this.workspace=e,this.payload=t,this.f=r,this.trusted=!0}async open(e,t){if(t?.reuse&&!t.payload&&this.j(this.workspace,e))return!0;const r=this.g(e,t);if(r){if(t?.reuse)return window.location.href=r,!0;{let o;return(0,m.$mO)()?o=window.open(r,"_blank","toolbar=no"):o=window.open(r),!!o}}return!1}g(e,t){let r;if(!e)r=`${document.location.origin}${document.location.pathname}?${i.a}=true`;else if((0,h.$VC)(e)){const o=this.h(e.folderUri);r=`${document.location.origin}${document.location.pathname}?${i.b}=${o}`}else if((0,h.$UC)(e)){const o=this.h(e.workspaceUri);r=`${document.location.origin}${document.location.pathname}?${i.c}=${o}`}return t?.payload&&(r+=`&${i.d}=${encodeURIComponent(JSON.stringify(t.payload))}`),r}h(e){return this.f.remoteAuthority&&e.scheme===w.Schemas.vscodeRemote?encodeURIComponent(`${p.$ec.sep}${(0,R.$He)(e.path,p.$ec.sep)}`).replaceAll("%2F","/"):encodeURIComponent(e.toString(!0))}j(e,t){return!e||!t?e===t:(0,h.$VC)(e)&&(0,h.$VC)(t)?(0,$.$lg)(e.folderUri,t.folderUri):(0,h.$UC)(e)&&(0,h.$UC)(t)?(0,$.$lg)(e.workspaceUri,t.workspaceUri):!1}hasRemote(){if(this.workspace){if((0,h.$VC)(this.workspace))return this.workspace.folderUri.scheme===w.Schemas.vscodeRemote;if((0,h.$UC)(this.workspace))return this.workspace.workspaceUri.scheme===w.Schemas.vscodeRemote}return!0}}i.a="ew",i.b="folder",i.c="workspace",i.d="payload",function(){const a=document.getElementById("vscode-workbench-web-configuration"),e=a?a.getAttribute("data-settings"):void 0;if(!a||!e)throw new Error("Missing web configuration element");const t={...JSON.parse(e),remoteAuthority:location.host},r=(window.location.pathname+"/mint-key").replace(/\/\/+/g,"/"),o=r&&I.supported()?new I(r):new L;(0,O.create)(document.body,{...t,windowIndicator:t.windowIndicator??{label:"$(remote)",tooltip:`${S.default.nameShort} Web`},settingsSyncOptions:t.settingsSyncOptions?{enabled:t.settingsSyncOptions.enabled}:void 0,workspaceProvider:i.create(t),urlCallbackProvider:new f(t.callbackRoute),resolveExternalUri:n=>{let s=n;const c=(0,T.$5u)(s);if(c&&s.authority!==location.host)if(t.productConfiguration&&t.productConfiguration.proxyEndpointTemplate){const l=t.productConfiguration.proxyEndpointTemplate.replace("{{port}}",c.port.toString()).replace("{{host}}",window.location.host);s=d.URI.parse(new URL(l,window.location.href).toString())}else throw new Error(`Failed to resolve external URI: ${n.toString()}. Could not determine base url because productConfiguration missing.`);return Promise.resolve(s)},tunnelProvider:{tunnelFactory:(n,s)=>{const c=new v.$Ld;let l=!1;return Promise.resolve({remoteAddress:n.remoteAddress,localAddress:`localhost:${n.remoteAddress.port}`,onDidDispose:c.event,dispose:()=>{l||(l=!0,c.fire())}})}},secretStorageProvider:t.remoteAuthority&&!r?void 0:new E(o)})}()})}).call(this);

//# sourceMappingURL=workbench.js.map