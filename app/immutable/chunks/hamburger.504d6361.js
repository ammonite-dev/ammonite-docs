import{w as H}from"./index.8124a782.js";import{S as $,i as M,s as w,k as m,a as g,l as E,m as d,c as L,h as _,n as h,b as f,C as p,D as T,H as U,e as k,q as S,r as O}from"./index.98343197.js";import{b as P,c as G,F as y,a as N,B as Y}from"./fonts.f3db0f6d.js";import{A as b}from"./routes.b1c9d26b.js";import{I as F,W as V,S as W,T as K,B as q}from"./sections.498ab9d9.js";function X(){const{subscribe:i,set:e,update:r}=H({});return{subscribe:i,set:e,update:r,open:c=>r(()=>({open:!0,...c})),close:()=>r(c=>(c.open=!1,c))}}const ie=X(),R=[{section:0,name:"Introduction",url:b.DocsHome,subsections:F},{section:1,name:"Website 101",url:b.DocsWebsite101,subsections:V},{section:2,name:"Syntax",url:b.DocsSyntax,subsections:W},{section:3,name:"Templates",url:b.DocsTemplates,subsections:K},{section:4,name:"Built-in Templates",url:b.DocsTemplatesBuiltIn,subsections:q}];function C(i,e,r){const c=i.slice();return c[7]=e[r],c}function A(i,e,r){const c=i.slice();return c[10]=e[r],c}function Z(i){let e,r=i[7].name+"",c;return{c(){e=m("div"),c=S(r),this.h()},l(a){e=E(a,"DIV",{class:!0});var t=d(e);c=O(t,r),t.forEach(_),this.h()},h(){h(e,"class",i[1])},m(a,t){f(a,e,t),p(e,c)},p:T,d(a){a&&_(e)}}}function j(i){let e,r;function c(l,n){return n&1&&(r=null),r==null&&(r=l[7].url===l[0].slice(0,-1)),r?J:z}let a=c(i,-1),t=a(i);return{c(){e=m("div"),t.c(),this.h()},l(l){e=E(l,"DIV",{class:!0});var n=d(e);t.l(n),n.forEach(_),this.h()},h(){h(e,"class",i[1])},m(l,n){f(l,e,n),t.m(e,null)},p(l,n){a===(a=c(l,n))&&t?t.p(l,n):(t.d(1),t=a(l),t&&(t.c(),t.m(e,null)))},d(l){l&&_(e),t.d()}}}function z(i){let e,r=i[7].name+"",c;return{c(){e=m("a"),c=S(r),this.h()},l(a){e=E(a,"A",{class:!0,href:!0});var t=d(e);c=O(t,r),t.forEach(_),this.h()},h(){h(e,"class",i[2]),h(e,"href",i[7].url)},m(a,t){f(a,e,t),p(e,c)},p:T,d(a){a&&_(e)}}}function J(i){let e,r=i[7].name+"",c;return{c(){e=m("a"),c=S(r),this.h()},l(a){e=E(a,"A",{class:!0,href:!0});var t=d(e);c=O(t,r),t.forEach(_),this.h()},h(){h(e,"class",i[3]),h(e,"href",i[7].url)},m(a,t){f(a,e,t),p(e,c)},p:T,d(a){a&&_(e)}}}function Q(i){let e,r=i[10].name+"",c;return{c(){e=m("a"),c=S(r),this.h()},l(a){e=E(a,"A",{id:!0,class:!0,href:!0});var t=d(e);c=O(t,r),t.forEach(_),this.h()},h(){h(e,"id","#"+i[7].name),h(e,"class",i[4]),h(e,"href",i[10].url)},m(a,t){f(a,e,t),p(e,c)},p:T,d(a){a&&_(e)}}}function x(i){let e,r=i[10].name+"",c;return{c(){e=m("a"),c=S(r),this.h()},l(a){e=E(a,"A",{id:!0,class:!0,href:!0});var t=d(e);c=O(t,r),t.forEach(_),this.h()},h(){h(e,"id","#"+i[7].name),h(e,"class",i[5]),h(e,"href",i[10].url)},m(a,t){f(a,e,t),p(e,c)},p:T,d(a){a&&_(e)}}}function B(i){let e,r;function c(l,n){return n&1&&(e=null),e==null&&(e=l[10].url===l[0].slice(0,-1)),e?x:Q}let a=c(i,-1),t=a(i);return{c(){t.c(),r=k()},l(l){t.l(l),r=k()},m(l,n){t.m(l,n),f(l,r,n)},p(l,n){a===(a=c(l,n))&&t?t.p(l,n):(t.d(1),t=a(l),t&&(t.c(),t.m(r.parentNode,r)))},d(l){t.d(l),l&&_(r)}}}function D(i){let e,r;function c(s,u){return s[7].url?j:Z}let t=c(i)(i),l=i[7].subsections??[],n=[];for(let s=0;s<l.length;s+=1)n[s]=B(A(i,l,s));return{c(){t.c(),e=g(),r=m("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t.l(s),e=L(s),r=E(s,"DIV",{class:!0});var u=d(r);for(let o=0;o<n.length;o+=1)n[o].l(u);u.forEach(_),this.h()},h(){h(r,"class","flex flex-col")},m(s,u){t.m(s,u),f(s,e,u),f(s,r,u);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(r,null)},p(s,u){if(t.p(s,u),u&49){l=s[7].subsections??[];let o;for(o=0;o<l.length;o+=1){const v=A(s,l,o);n[o]?n[o].p(v,u):(n[o]=B(v),n[o].c(),n[o].m(r,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=l.length}},d(s){t.d(s),s&&_(e),s&&_(r),U(n,s)}}}function ee(i){let e,r,c,a=R,t=[];for(let l=0;l<a.length;l+=1)t[l]=D(C(i,a,l));return{c(){e=m("div");for(let l=0;l<t.length;l+=1)t[l].c();r=g(),c=m("div"),this.h()},l(l){e=E(l,"DIV",{});var n=d(e);for(let s=0;s<t.length;s+=1)t[s].l(n);r=L(n),c=E(n,"DIV",{class:!0}),d(c).forEach(_),n.forEach(_),this.h()},h(){h(c,"class","h-12")},m(l,n){f(l,e,n);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);p(e,r),p(e,c)},p(l,[n]){if(n&63){a=R;let s;for(s=0;s<a.length;s+=1){const u=C(l,a,s);t[s]?t[s].p(u,n):(t[s]=D(u),t[s].c(),t[s].m(e,r))}for(;s<t.length;s+=1)t[s].d(1);t.length=a.length}},i:T,o:T,d(l){l&&_(e),U(t,l)}}}function te(i,e,r){const c=`
        ${P.lg} ${G.bold}
        pt-4 pb-2
    `,a=`
		duration-300
		${y.accentPrimary}
    `,t=`
		${N.accentPrimary}
	`,l=`
		pl-1 pb-0.5
        duration-300
	`,n=`
        ${l}
        ${N.tertiary}
        ${y.accentPrimary}
    `,s=`
        ${l}
        ${N.accentPrimary}
    `;let{path:u}=e;return i.$$set=o=>{"path"in o&&r(0,u=o.path)},[u,c,a,t,n,s]}class oe extends ${constructor(e){super(),M(this,e,te,ee,w,{path:0})}}const le=`
    h-2 bg-current my-0.5 duration-300 ease-out
    `,_e=`
    w-8 ${Y.secondary} ${le}
    `,I=`
    h-0.5 bg-current my-2 duration-300 ease-out
    bg-light-text-primary
    dark:bg-dark-text-primary
    `,ue=`
    ${I}
    w-6 rotate-45 translate-y-2.5
    `,he=`
    ${I}
    w-6 opacity-0`,fe=`
    ${I}
    w-6 -rotate-45 -translate-y-2.5`;export{ue as H,oe as S,he as a,fe as b,_e as c,ie as d};
