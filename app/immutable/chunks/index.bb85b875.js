function w(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function O(){return Object.create(null)}function g(t){t.forEach(D)}function M(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ft(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function R(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(G(e,n))}function _t(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,u){if(r){const s=L(e,n,i,u);t.p(s,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t,e,n){return t.set(n),e}let E=!1;function I(){E=!0}function J(){E=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:K(1,r,x=>e[n[x]].claim_order,l))-1;i[c]=n[a]+1;const f=a+1;n[f]=c,r=Math.max(f,r)}const u=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(s[c],a)}}function W(t,e){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){E&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function xt(){return k(" ")}function bt(){return k("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Y=["width","height"];function wt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Y.indexOf(i)===-1?t[i]=e[i]:X(t,i,e[i])}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,r=!1){tt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return P(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Et(t,e,n){return et(t,e,n,V)}function nt(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function vt(t){return nt(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function jt(t,e){return new t(e)}let y;function p(t){y=t}function q(){if(!y)throw new Error("Function called outside component initialization");return y}function Ot(t){q().$$.on_mount.push(t)}function Tt(t){q().$$.after_update.push(t)}const h=[],T=[];let m=[];const C=[],B=Promise.resolve();let N=!1;function H(){N||(N=!0,B.then(z))}function Ct(){return H(),B}function A(t){m.push(t)}const v=new Set;let d=0;function z(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),it(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;T.length;)T.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;C.length;)C.pop()();N=!1,v.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function rt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Mt(){_.r||g(_.c),_=_.p}function ct(t,e){t&&t.i&&($.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Pt(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],o=e[u];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[u]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function qt(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function st(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const s=t.$$.on_mount.map(D).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),u.forEach(A)}function ot(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,i,r,u,s,o=[-1]){const c=y;p(t);const l=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:O(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,x,...S)=>{const j=S.length?S[0]:x;return l.ctx&&r(l.ctx[f],l.ctx[f]=j)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](j),a&&lt(t,f)),x}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){I();const f=Z(e.target);l.fragment&&l.fragment.l(f),f.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&ct(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),J(),z()}p(c)}class zt{$destroy(){ot(this,1),this.$destroy=w}$on(e,n){if(!M(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{st as A,ot as B,W as C,w as D,$t as E,at as F,pt as G,gt as H,kt as I,_t as J,ht as K,mt as L,dt as M,g as N,St as O,F as P,wt as Q,Pt as R,zt as S,ft as T,xt as a,yt as b,vt as c,Lt as d,bt as e,Mt as f,ct as g,U as h,Ht as i,Tt as j,V as k,Et as l,Z as m,X as n,Ot as o,At as p,k as q,nt as r,ut as s,Ct as t,Nt as u,Dt as v,T as w,jt as x,qt as y,Bt as z};
