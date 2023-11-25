const e="stencil-webcmp";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:false,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:true,element:false,event:true,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:true,hostListenerTargetBody:true,hostListenerTargetDocument:true,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:true,propNumber:true,propString:true,reflect:true,scoped:true,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:true,slot:true,slotChildNodesFix:false,slotRelocation:true,state:true,style:true,svg:true,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:false,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:false,vdomText:true,vdomXlink:false,watchCallback:false};let n;let s;let o;let l=false;let i=false;let c=false;let f=false;let r=false;const a=(e,t="")=>{{return()=>{}}};const u=(e,t)=>{{return()=>{}}};const d="{visibility:hidden}.hydrated{visibility:inherit}";const p="slot-fb{display:contents}slot-fb[hidden]{display:none}";const m={};const v="http://www.w3.org/2000/svg";const h="http://www.w3.org/1999/xhtml";const y=e=>e!=null;const b=e=>{e=typeof e;return e==="object"||e==="function"};function g(e){var t,n,s;return(s=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const w=(e,t,...n)=>{let s=null;let o=null;let l=false;let i=false;const c=[];const f=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(l=typeof e!=="function"&&!b(s)){s=String(s)}if(l&&i){c[c.length-1].t+=s}else{c.push(l?$(null,s):s)}i=l}}};f(n);if(t){if(t.name){o=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,c,C)}const r=$(e,null);r.o=t;if(c.length>0){r.l=c}{r.i=o}return r};const $=(e,t)=>{const n={u:0,p:e,t,m:null,l:null};{n.o=null}{n.i=null}return n};const S={};const k=e=>e&&e.p===S;const C={forEach:(e,t)=>e.map(j).forEach(t),map:(e,t)=>e.map(j).map(t).map(O)};const j=e=>({vattrs:e.o,vchildren:e.l,vkey:e.v,vname:e.i,vtag:e.p,vtext:e.t});const O=e=>{if(typeof e.vtag==="function"){const t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return w(e.vtag,t,...e.vchildren||[])}const t=$(e.vtag,e.vtext);t.o=e.vattrs;t.l=e.vchildren;t.v=e.vkey;t.i=e.vname;return t};const T=(e,t)=>{if(e!=null&&!b(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};const x=e=>De(e).$hostElement$;const L=(e,t,n)=>{const s=x(e);return{emit:e=>R(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}};const R=(e,t,n)=>{const s=Be.ce(t,n);e.dispatchEvent(s);return s};const D=new WeakMap;const F=(e,t,n)=>{let s=We.get(e);if(Qe&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}We.set(e,s)};const M=(e,t,n)=>{var s;const o=N(t);const l=We.get(o);e=e.nodeType===11?e:ze;if(l){if(typeof l==="string"){e=e.head||e;let n=D.get(e);let i;if(!n){D.set(e,n=new Set)}if(!n.has(o)){{i=ze.createElement("style");i.innerHTML=l;const t=(s=Be.h)!==null&&s!==void 0?s:g(ze);if(t!=null){i.setAttribute("nonce",t)}e.insertBefore(i,e.querySelector("link"))}if(t.u&4){i.innerHTML+=p}if(n){n.add(o)}}}else if(!e.adoptedStyleSheets.includes(l)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]}}return o};const A=e=>{const t=e.$;const n=e.$hostElement$;const s=t.u;const o=a("attachStyles",t.S);const l=M(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(s&10){n["s-sc"]=l;n.classList.add(l+"-h");if(s&2){n.classList.add(l+"-s")}}o()};const N=(e,t)=>"sc-"+e.S;const P=(e,t,n,s,o,l)=>{if(n!==s){let i=Ae(e,t);let c=t.toLowerCase();if(t==="class"){const t=e.classList;const o=W(n);const l=W(s);t.remove(...o.filter((e=>e&&!l.includes(e))));t.add(...l.filter((e=>e&&!o.includes(e))))}else if(t==="ref"){if(s){s(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Ae(Ee,c)){t=c.slice(2)}else{t=c[2]+t.slice(3)}if(n||s){const o=t.endsWith(E);t=t.replace(z,"");if(n){Be.rel(e,t,n,o)}if(s){Be.ael(e,t,s,o)}}}else{const c=b(s);if((i||c&&s!==null)&&!o){try{if(!e.tagName.includes("-")){const o=s==null?"":s;if(t==="list"){i=false}else if(n==null||e[t]!=o){e[t]=o}}else{e[t]=s}}catch(e){}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!i||l&4||o)&&!c){s=s===true?"":s;{e.setAttribute(t,s)}}}}};const U=/\s/;const W=e=>!e?[]:e.split(U);const E="Capture";const z=new RegExp(E+"$");const B=(e,t,n,s)=>{const o=t.m.nodeType===11&&t.m.host?t.m.host:t.m;const l=e&&e.o||m;const i=t.o||m;{for(s in l){if(!(s in i)){P(o,s,l[s],undefined,n,t.u)}}}for(s in i){P(o,s,l[s],i[s],n,t.u)}};const H=(e,t,i,r)=>{var a;const u=t.l[i];let d=0;let p;let m;let b;if(!l){c=true;if(u.p==="slot"){if(n){r.classList.add(n+"-s")}u.u|=u.l?2:1}}if(u.t!==null){p=u.m=ze.createTextNode(u.t)}else if(u.u&1){p=u.m=ze.createTextNode("")}else{if(!f){f=u.p==="svg"}p=u.m=ze.createElementNS(f?v:h,u.u&2?"slot-fb":u.p);if(f&&u.p==="foreignObject"){f=false}{B(null,u,f)}if(y(n)&&p["s-si"]!==n){p.classList.add(p["s-si"]=n)}if(u.l){for(d=0;d<u.l.length;++d){m=H(e,u,d,p);if(m){p.appendChild(m)}}}{if(u.p==="svg"){f=false}else if(p.tagName==="foreignObject"){f=true}}}{p["s-hn"]=o;if(u.u&(2|1)){p["s-sr"]=true;p["s-fs"]=(a=u.o)===null||a===void 0?void 0:a.slot;p["s-cr"]=s;p["s-sn"]=u.i||"";b=e&&e.l&&e.l[i];if(b&&b.p===u.p&&e.m){Q(e.m,false)}}}return p};const Q=(e,t)=>{var n;Be.u|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const l=s[e];if(l["s-hn"]!==o&&l["s-ol"]){_(l).insertBefore(l,X(l));l["s-ol"].remove();l["s-ol"]=undefined;l["s-sh"]=undefined;if(l.nodeType===1){l.setAttribute("slot",(n=l["s-sn"])!==null&&n!==void 0?n:"")}c=true}if(t){Q(l,t)}}Be.u&=~1};const q=(e,t,n,s,l,i)=>{let c=e["s-cr"]&&e["s-cr"].parentNode||e;let f;if(c.shadowRoot&&c.tagName===o){c=c.shadowRoot}for(;l<=i;++l){if(s[l]){f=H(null,n,l,e);if(f){s[l].m=f;c.insertBefore(f,X(t))}}}};const I=(e,t,n)=>{for(let s=t;s<=n;++s){const t=e[s];if(t){const e=t.m;te(t);if(e){{i=true;if(e["s-ol"]){e["s-ol"].remove()}else{Q(e,true)}}e.remove()}}}};const K=(e,t,n,s)=>{let o=0;let l=0;let i=t.length-1;let c=t[0];let f=t[i];let r=s.length-1;let a=s[0];let u=s[r];let d;while(o<=i&&l<=r){if(c==null){c=t[++o]}else if(f==null){f=t[--i]}else if(a==null){a=s[++l]}else if(u==null){u=s[--r]}else if(V(c,a)){G(c,a);c=t[++o];a=s[++l]}else if(V(f,u)){G(f,u);f=t[--i];u=s[--r]}else if(V(c,u)){if(c.p==="slot"||u.p==="slot"){Q(c.m.parentNode,false)}G(c,u);e.insertBefore(c.m,f.m.nextSibling);c=t[++o];u=s[--r]}else if(V(f,a)){if(c.p==="slot"||u.p==="slot"){Q(f.m.parentNode,false)}G(f,a);e.insertBefore(f.m,c.m);f=t[--i];a=s[++l]}else{{d=H(t&&t[l],n,l,e);a=s[++l]}if(d){{_(c.m).insertBefore(d,X(c.m))}}}}if(o>i){q(e,s[r+1]==null?null:s[r+1].m,n,s,l,r)}else if(l>r){I(t,o,i)}};const V=(e,t)=>{if(e.p===t.p){if(e.p==="slot"){return e.i===t.i}return true}return false};const X=e=>e&&e["s-ol"]||e;const _=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const G=(e,t)=>{const n=t.m=e.m;const s=e.l;const o=t.l;const l=t.p;const i=t.t;let c;if(i===null){{f=l==="svg"?true:l==="foreignObject"?false:f}{if(l==="slot");else{B(e,t,f)}}if(s!==null&&o!==null){K(n,s,t,o)}else if(o!==null){if(e.t!==null){n.textContent=""}q(n,null,t,o,0,o.length-1)}else if(s!==null){I(s,0,s.length-1)}if(f&&l==="svg"){f=false}}else if(c=n["s-cr"]){c.parentNode.textContent=i}else if(e.t!==i){n.data=i}};const J=e=>{const t=e.childNodes;for(const e of t){if(e.nodeType===1){if(e["s-sr"]){const n=e["s-sn"];e.hidden=false;for(const s of t){if(s!==e){if(s["s-hn"]!==e["s-hn"]||n!==""){if(s.nodeType===1&&(n===s.getAttribute("slot")||n===s["s-sn"])){e.hidden=true;break}}else{if(s.nodeType===1||s.nodeType===3&&s.textContent.trim()!==""){e.hidden=true;break}}}}}J(e)}}};const Y=[];const Z=e=>{let n;let s;let o;for(const l of e.childNodes){if(l["s-sr"]&&(n=l["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;const e=l["s-sn"];for(o=s.length-1;o>=0;o--){n=s[o];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==l["s-hn"]&&!t.experimentalSlotFixes){if(ee(n,e)){let t=Y.find((e=>e.k===n));i=true;n["s-sn"]=n["s-sn"]||e;if(t){t.k["s-sh"]=l["s-hn"];t.C=l}else{n["s-sh"]=l["s-hn"];Y.push({C:l,k:n})}if(n["s-sr"]){Y.map((e=>{if(ee(e.k,n["s-sn"])){t=Y.find((e=>e.k===n));if(t&&!e.C){e.C=t.C}}}))}}else if(!Y.some((e=>e.k===n))){Y.push({k:n})}}}}if(l.nodeType===1){Z(l)}}};const ee=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const te=e=>{{e.o&&e.o.ref&&e.o.ref(null);e.l&&e.l.map(te)}};const ne=(e,t,f=false)=>{var r,a;const u=e.$hostElement$;const d=e.$;const p=e.j||$(null,null);const m=k(t)?t:w(null,null,t);o=u.tagName;if(d.O){m.o=m.o||{};d.O.map((([e,t])=>m.o[t]=u[e]))}if(f&&m.o){for(const e of Object.keys(m.o)){if(u.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){m.o[e]=u[e]}}}m.p=null;m.u|=4;e.j=m;m.m=p.m=u.shadowRoot||u;{n=u["s-sc"]}{s=u["s-cr"];l=(d.u&1)!==0;i=false}G(p,m);{Be.u|=1;if(c){Z(m.m);for(const e of Y){const t=e.k;if(!t["s-ol"]){const e=ze.createTextNode("");e["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of Y){const t=e.k;const n=e.C;if(n){const e=n.parentNode;let s=n.nextSibling;{let n=(r=t["s-ol"])===null||r===void 0?void 0:r.previousSibling;while(n){let o=(a=n["s-nr"])!==null&&a!==void 0?a:null;if(o&&o["s-sn"]===t["s-sn"]&&e===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){s=o;break}}n=n.previousSibling}}if(!s&&e!==t.parentNode||t.nextSibling!==s){if(t!==s){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}e.insertBefore(t,s)}}}else{if(t.nodeType===1){t.hidden=true}}}}if(i){J(m.m)}Be.u&=~1;Y.length=0}};const se=(e,t)=>{if(t&&!e.T&&t["s-p"]){t["s-p"].push(new Promise((t=>e.T=t)))}};const oe=(e,t)=>{{e.u|=16}if(e.u&4){e.u|=512;return}se(e,e.L);const n=()=>le(e,t);return Ge(n)};const le=(e,t)=>{const n=a("scheduleUpdate",e.$.S);const s=e.R;let o;if(t){{e.u|=256;if(e.D){e.D.map((([e,t])=>de(s,e,t)));e.D=undefined}}{o=de(s,"componentWillLoad")}}n();return ie(o,(()=>fe(e,s,t)))};const ie=(e,t)=>ce(e)?e.then(t):t();const ce=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";const fe=async(e,t,n)=>{var s;const o=e.$hostElement$;const l=a("update",e.$.S);const i=o["s-rc"];if(n){A(e)}const c=a("render",e.$.S);{re(e,t,o,n)}if(i){i.map((e=>e()));o["s-rc"]=undefined}c();l();{const t=(s=o["s-p"])!==null&&s!==void 0?s:[];const n=()=>ae(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.u|=4;t.length=0}}};const re=(e,t,n,s)=>{try{t=t.render();{e.u&=~16}{e.u|=2}{{{ne(e,t,s)}}}}catch(t){Ne(t,e.$hostElement$)}return null};const ae=e=>{const t=e.$.S;const n=e.$hostElement$;const s=a("postUpdate",t);const o=e.R;const l=e.L;if(!(e.u&64)){e.u|=64;{pe(n)}{de(o,"componentDidLoad")}s();{e.F(n);if(!l){ue()}}}else{s()}{e.M(n)}{if(e.T){e.T();e.T=undefined}if(e.u&512){_e((()=>oe(e,false)))}e.u&=~(4|512)}};const ue=t=>{{pe(ze.documentElement)}_e((()=>R(Ee,"appload",{detail:{namespace:e}})))};const de=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){Ne(e)}}return undefined};const pe=e=>e.classList.add("hydrated");const me=(e,t)=>De(e).A.get(t);const ve=(e,t,n,s)=>{const o=De(e);const l=o.A.get(t);const i=o.u;const c=o.R;n=T(n,s.N[t][0]);const f=Number.isNaN(l)&&Number.isNaN(n);const r=n!==l&&!f;if((!(i&8)||l===undefined)&&r){o.A.set(t,n);if(c){if((i&(2|16))===2){oe(o,false)}}}};const he=(e,t,n)=>{var s;if(t.N){const o=Object.entries(t.N);const l=e.prototype;o.map((([e,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,e,{get(){return me(this,e)},set(n){ve(this,e,n,t)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(l,e,{value(...t){const n=De(this);return n.P.then((()=>n.R[e](...t)))}})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(e,s,o){Be.jmp((()=>{const i=n.get(e);if(this.hasOwnProperty(i)){o=this[i];delete this[i]}else if(l.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==o){return}else if(i==null){const n=De(this);const l=n===null||n===void 0?void 0:n.u;if(!(l&8)&&l&128&&o!==s){const l=n.R;const i=t.U[e];i===null||i===void 0?void 0:i.forEach((t=>{if(l[t]!=null){l[t].call(l,o,s,e)}}))}return}this[i]=o===null&&typeof this[i]==="boolean"?false:o}))};e.observedAttributes=Array.from(new Set([...Object.keys((s=t.U)!==null&&s!==void 0?s:{}),...o.filter((([e,t])=>t[0]&15)).map((([e,s])=>{const o=s[1]||e;n.set(o,e);if(s[0]&512){t.O.push([e,o])}return o}))]))}}return e};const ye=async(e,t,n,s)=>{let o;if((t.u&32)===0){t.u|=32;{o=Ue(n);if(o.then){const e=u();o=await o;e()}if(!o.isProxied){he(o,n,2);o.isProxied=true}const e=a("createInstance",n.S);{t.u|=8}try{new o(t)}catch(e){Ne(e)}{t.u&=~8}e()}if(o.style){let e=o.style;const t=N(n);if(!We.has(t)){const s=a("registerStyles",n.S);F(t,e,!!(n.u&1));s()}}}const l=t.L;const i=()=>oe(t,true);if(l&&l["s-rc"]){l["s-rc"].push(i)}else{i()}};const be=e=>{};const ge=e=>{if((Be.u&1)===0){const t=De(e);const n=t.$;const s=a("connectedCallback",n.S);if(!(t.u&1)){t.u|=1;{if(n.u&(4|8)){we(e)}}{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){se(t,t.L=n);break}}}if(n.N){Object.entries(n.N).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{ye(e,t,n)}}else{je(e,t,n.W);if(t===null||t===void 0?void 0:t.R);else if(t===null||t===void 0?void 0:t.B){t.B.then((()=>be()))}}s()}};const we=e=>{const t=e["s-cr"]=ze.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const $e=e=>{{de(e,"disconnectedCallback")}};const Se=async e=>{if((Be.u&1)===0){const t=De(e);{if(t.H){t.H.map((e=>e()));t.H=undefined}}if(t===null||t===void 0?void 0:t.R){$e(t.R)}else if(t===null||t===void 0?void 0:t.B){t.B.then((()=>$e(t.R)))}}};const ke=(e,t={})=>{var n;const s=a();const o=[];const l=t.exclude||[];const i=Ee.customElements;const c=ze.head;const f=c.querySelector("meta[charset]");const r=ze.createElement("style");const u=[];let m;let v=true;Object.assign(Be,t);Be.q=new URL(t.resourcesUrl||"./",ze.baseURI).href;let h=false;e.map((e=>{e[1].map((t=>{const n={u:t[0],S:t[1],N:t[2],W:t[3]};if(n.u&4){h=true}{n.N=t[2]}{n.W=t[3]}{n.O=[]}const s=n.S;const c=class extends HTMLElement{constructor(e){super(e);e=this;Me(e,n);if(n.u&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(m){clearTimeout(m);m=null}if(v){u.push(this)}else{Be.jmp((()=>ge(this)))}}disconnectedCallback(){Be.jmp((()=>Se(this)))}componentOnReady(){return De(this).B}};n.I=e[0];if(!l.includes(s)&&!i.get(s)){o.push(s);i.define(s,he(c,n,1))}}))}));if(h){r.innerHTML+=p}{r.innerHTML+=o+d}if(r.innerHTML.length){r.setAttribute("data-styles","");c.insertBefore(r,f?f.nextSibling:c.firstChild);const e=(n=Be.h)!==null&&n!==void 0?n:g(ze);if(e!=null){r.setAttribute("nonce",e)}}v=false;if(u.length){u.map((e=>e.connectedCallback()))}else{{Be.jmp((()=>m=setTimeout(ue,30)))}}s()};const Ce=(e,t)=>t;const je=(e,t,n,s)=>{if(n){n.map((([n,s,o])=>{const l=Te(e,n);const i=Oe(t,o);const c=xe(n);Be.ael(l,s,i,c);(t.H=t.H||[]).push((()=>Be.rel(l,s,i,c)))}))}};const Oe=(e,t)=>n=>{try{{if(e.u&256){e.R[t](n)}else{(e.D=e.D||[]).push([t,n])}}}catch(e){Ne(e)}};const Te=(e,t)=>{if(t&4)return ze;if(t&16)return ze.body;return e};const xe=e=>(e&2)!==0;const Le=e=>Be.h=e;const Re=new WeakMap;const De=e=>Re.get(e);const Fe=(e,t)=>Re.set(t.R=e,t);const Me=(e,t)=>{const n={u:0,$hostElement$:e,$:t,A:new Map};{n.P=new Promise((e=>n.M=e))}{n.B=new Promise((e=>n.F=e));e["s-p"]=[];e["s-rc"]=[]}je(e,n,t.W);return Re.set(e,n)};const Ae=(e,t)=>t in e;const Ne=(e,t)=>(0,console.error)(e,t);const Pe=new Map;const Ue=(e,t,n)=>{const s=e.S.replace(/-/g,"_");const o=e.I;const l=Pe.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((e=>{{Pe.set(o,e)}return e[s]}),Ne)};const We=new Map;const Ee=typeof window!=="undefined"?window:{};const ze=Ee.document||{head:{}};const Be={u:0,q:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};const He=e=>Promise.resolve(e);const Qe=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();const qe=[];const Ie=[];const Ke=(e,t)=>n=>{e.push(n);if(!r){r=true;if(t&&Be.u&4){_e(Xe)}else{Be.raf(Xe)}}};const Ve=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Ne(e)}}e.length=0};const Xe=()=>{Ve(qe);{Ve(Ie);if(r=qe.length>0){Be.raf(Xe)}}};const _e=e=>He().then(e);const Ge=Ke(Ie,true);export{Ce as F,S as H,ke as b,L as c,x as g,w as h,He as p,Fe as r,Le as s};
//# sourceMappingURL=p-06b48781.js.map