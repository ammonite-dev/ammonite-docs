import{S as A,i as V,s as C,k as v,q as U,l as m,m as p,r as q,h as _,n as g,b as D,C as u,u as ee,D as L,y as N,a as I,z,c as S,A as H,g as $,d as O,B as j,E as te,F as P,G as se,H as le,p as T,I as x,f as ae,v as ne,J as re,K as oe,L as ie,M as ce}from"../chunks/index.d2f290a2.js";import{p as _e,n as fe}from"../chunks/stores.798667e9.js";import{w as ue}from"../chunks/index.d83ce407.js";import{F as X,B as J,a as B,b as de}from"../chunks/fonts.f3db0f6d.js";import{L as he}from"../chunks/company.5e87be2a.js";import{A as F}from"../chunks/routes.445203bd.js";import"../chunks/singletons.1494ca9d.js";const ve=!0,Ye=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve},Symbol.toStringTag,{value:"Module"}));const me="dark",pe=window.localStorage.getItem("theme")??me,Y=ue(pe==="dark");Y.subscribe(n=>{n?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")});function ge(n){let e,t;return{c(){e=v("a"),t=U(n[1]),this.h()},l(s){e=m(s,"A",{class:!0,href:!0});var l=p(e);t=q(l,n[1]),l.forEach(_),this.h()},h(){g(e,"class",n[2]),g(e,"href",n[0])},m(s,l){D(s,e,l),u(e,t)},p(s,[l]){l&2&&ee(t,s[1]),l&1&&g(e,"href",s[0])},i:L,o:L,d(s){s&&_(e)}}}function ye(n,e,t){let{url:s}=e,{label:l}=e;const o=`
		color-inherit
		duration-300
		no-underline
		${X.accentPrimary}
		font-logo
        font-semibold
		`;return n.$$set=i=>{"url"in i&&t(0,s=i.url),"label"in i&&t(1,l=i.label)},[s,l,o]}class be extends A{constructor(e){super(),V(this,e,ye,ge,C,{url:0,label:1})}}function Ee(n){let e,t,s,l,o,i,a,r,y;return l=new be({props:{url:F.Home,label:he}}),{c(){e=v("header"),t=v("nav"),s=v("div"),N(l.$$.fragment),o=I(),i=v("div"),a=I(),r=v("div"),this.h()},l(h){e=m(h,"HEADER",{class:!0});var E=p(e);t=m(E,"NAV",{class:!0});var b=p(t);s=m(b,"DIV",{});var w=p(s);z(l.$$.fragment,w),w.forEach(_),o=S(b),i=m(b,"DIV",{class:!0}),p(i).forEach(_),a=S(b),r=m(b,"DIV",{class:!0}),p(r).forEach(_),b.forEach(_),E.forEach(_),this.h()},h(){g(i,"class","sm:block hidden"),g(r,"class","sm:hidden block flex flex-row"),g(t,"class","w-full flex flex-row justify-between items-center"),g(e,"class",n[0])},m(h,E){D(h,e,E),u(e,t),u(t,s),H(l,s,null),u(t,o),u(t,i),u(t,a),u(t,r),y=!0},p:L,i(h){y||($(l.$$.fragment,h),y=!0)},o(h){O(l.$$.fragment,h),y=!1},d(h){h&&_(e),j(l)}}}function ke(n){return[`
		${J.primary}
		${B.primary}
		w-full
		py-1
		sm:px-6 px-3
		overflow-visible
		${de.subtitle}
	`]}class we extends A{constructor(e){super(),V(this,e,ke,Ee,C,{})}}const W=[{label:"Home",path:F.Home},{label:"Careers",path:F.Careers},{label:"Contact",path:F.Contact},{label:"About",path:F.About}];function De(n){let e,t,s,l,o,i;return{c(){e=v("button"),t=v("div"),s=v("div"),l=v("i"),this.h()},l(a){e=m(a,"BUTTON",{class:!0});var r=p(e);t=m(r,"DIV",{class:!0});var y=p(t);s=m(y,"DIV",{});var h=p(s);l=m(h,"I",{class:!0}),p(l).forEach(_),h.forEach(_),y.forEach(_),r.forEach(_),this.h()},h(){g(l,"class",n[0]),g(t,"class","flex flex-row justify-center"),g(e,"class",n[2])},m(a,r){D(a,e,r),u(e,t),u(t,s),u(s,l),o||(i=te(e,"click",n[1]),o=!0)},p(a,[r]){r&1&&g(l,"class",a[0])},i:L,o:L,d(a){a&&_(e),o=!1,i()}}}function Ie(n,e,t){let s,l,o;P(n,Y,r=>t(4,o=r));const i=()=>{se(Y,o=!o,o)},a=`
		hover:text-dark-link-hover2 duration-300
		hover:cursor-pointer
	`;return n.$$.update=()=>{n.$$.dirty&16&&t(3,s=o?"fa-moon":"fa-sun"),n.$$.dirty&8&&t(0,l=`
		fa-solid fa-lg ${s}
	`)},[l,i,a,s,o]}class Se extends A{constructor(e){super(),V(this,e,Ie,De,C,{})}}function Z(n,e,t){const s=n.slice();return s[5]=e[t],s}function Q(n){let e,t=n[5].label+"",s,l,o,i;return{c(){e=v("a"),s=U(t),o=I(),i=v("div"),this.h()},l(a){e=m(a,"A",{class:!0,href:!0});var r=p(e);s=q(r,t),r.forEach(_),o=S(a),i=m(a,"DIV",{class:!0}),p(i).forEach(_),this.h()},h(){g(e,"class",l=n[5].path==n[0].url.pathname?n[3]:n[2]),g(e,"href",n[5].path),g(i,"class","h-2")},m(a,r){D(a,e,r),u(e,s),D(a,o,r),D(a,i,r)},p(a,r){r&1&&l!==(l=a[5].path==a[0].url.pathname?a[3]:a[2])&&g(e,"class",l)},d(a){a&&_(e),a&&_(o),a&&_(i)}}}function $e(n){let e,t,s,l,o,i,a,r,y,h,E,b,w=W,c=[];for(let f=0;f<w.length;f+=1)c[f]=Q(Z(n,w,f));return r=new Se({}),{c(){e=v("footer"),t=v("div"),s=v("div");for(let f=0;f<c.length;f+=1)c[f].c();l=I(),o=v("div"),i=I(),a=v("div"),N(r.$$.fragment),y=I(),h=v("p"),E=U("2023"),this.h()},l(f){e=m(f,"FOOTER",{class:!0});var k=p(e);t=m(k,"DIV",{class:!0});var d=p(t);s=m(d,"DIV",{});var R=p(s);for(let G=0;G<c.length;G+=1)c[G].l(R);R.forEach(_),l=S(d),o=m(d,"DIV",{class:!0}),p(o).forEach(_),i=S(d),a=m(d,"DIV",{class:!0});var M=p(a);z(r.$$.fragment,M),y=S(M),h=m(M,"P",{});var K=p(h);E=q(K,"2023"),K.forEach(_),M.forEach(_),d.forEach(_),k.forEach(_),this.h()},h(){g(o,"class","h-8 w-8"),g(a,"class",`flex flex-col justify-end ${B.tertiary}`),g(t,"class",`my-3.5 flex sm:flex-row flex-col justify-between ${B.tertiary}`),g(e,"class",n[1])},m(f,k){D(f,e,k),u(e,t),u(t,s);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(s,null);u(t,l),u(t,o),u(t,i),u(t,a),H(r,a,null),u(a,y),u(a,h),u(h,E),b=!0},p(f,[k]){if(k&13){w=W;let d;for(d=0;d<w.length;d+=1){const R=Z(f,w,d);c[d]?c[d].p(R,k):(c[d]=Q(R),c[d].c(),c[d].m(s,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=w.length}},i(f){b||($(r.$$.fragment,f),b=!0)},o(f){O(r.$$.fragment,f),b=!1},d(f){f&&_(e),le(c,f),j(r)}}}function Oe(n,e,t){let s;P(n,_e,a=>t(0,s=a));const l=`
		${J.primary}
		border-0
		justify-between
		flex-col
		sm:px-12 px-4 py-2
	`,o=`
		${X.primary}
		ease-in
		duration-300
	`,i=`
		${B.primary}
		ease-in
		duration-300
	`;return[s,l,o,i]}class Le extends A{constructor(e){super(),V(this,e,Oe,$e,C,{})}}function Te(n){let e,t,s,l,o,i;return{c(){e=v("span"),t=v("div"),s=I(),l=v("div"),o=I(),i=v("div"),this.h()},l(a){e=m(a,"SPAN",{style:!0,class:!0});var r=p(e);t=m(r,"DIV",{class:!0}),p(t).forEach(_),s=S(r),l=m(r,"DIV",{class:!0}),p(l).forEach(_),o=S(r),i=m(r,"DIV",{class:!0}),p(i).forEach(_),r.forEach(_),this.h()},h(){g(t,"class","svelte-1kv7xw1"),g(l,"class","svelte-1kv7xw1"),g(i,"class","svelte-1kv7xw1"),T(e,"--size",n[3]+n[1]),T(e,"--color",n[0]),T(e,"--duration",n[2]),g(e,"class","svelte-1kv7xw1"),x(e,"pause-animation",n[4])},m(a,r){D(a,e,r),u(e,t),u(e,s),u(e,l),u(e,o),u(e,i)},p(a,[r]){r&10&&T(e,"--size",a[3]+a[1]),r&1&&T(e,"--color",a[0]),r&4&&T(e,"--duration",a[2]),r&16&&x(e,"pause-animation",a[4])},i:L,o:L,d(a){a&&_(e)}}}function Ae(n,e,t){let{color:s="#FF3E00"}=e,{unit:l="px"}=e,{duration:o="1.5s"}=e,{size:i="60"}=e,{pause:a=!1}=e;return n.$$set=r=>{"color"in r&&t(0,s=r.color),"unit"in r&&t(1,l=r.unit),"duration"in r&&t(2,o=r.duration),"size"in r&&t(3,i=r.size),"pause"in r&&t(4,a=r.pause)},[s,l,o,i,a]}class Ve extends A{constructor(e){super(),V(this,e,Ae,Te,C,{color:0,unit:1,duration:2,size:3,pause:4})}}function Ce(n){let e;const t=n[7].default,s=re(t,n,n[6],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,o){s&&s.m(l,o),e=!0},p(l,o){s&&s.p&&(!e||o&64)&&oe(s,t,l,l[6],e?ce(t,l[6],o,null):ie(l[6]),null)},i(l){e||($(s,l),e=!0)},o(l){O(s,l),e=!1},d(l){s&&s.d(l)}}}function Re(n){let e,t,s;return t=new Ve({props:{size:"64",color:n[1],unit:"px",duration:"3s"}}),{c(){e=v("div"),N(t.$$.fragment),this.h()},l(l){e=m(l,"DIV",{class:!0});var o=p(e);z(t.$$.fragment,o),o.forEach(_),this.h()},h(){g(e,"class","w-full flex flex-row justify-center mt-4")},m(l,o){D(l,e,o),H(t,e,null),s=!0},p(l,o){const i={};o&2&&(i.color=l[1]),t.$set(i)},i(l){s||($(t.$$.fragment,l),s=!0)},o(l){O(t.$$.fragment,l),s=!1},d(l){l&&_(e),j(t)}}}function Fe(n){let e,t,s,l,o,i,a,r,y,h;s=new we({});const E=[Re,Ce],b=[];function w(c,f){return c[2]?0:1}return i=w(n),a=b[i]=E[i](n),y=new Le({}),{c(){e=v("main"),t=v("div"),N(s.$$.fragment),l=I(),o=v("div"),a.c(),r=I(),N(y.$$.fragment),this.h()},l(c){e=m(c,"MAIN",{});var f=p(e);t=m(f,"DIV",{class:!0});var k=p(t);z(s.$$.fragment,k),l=S(k),o=m(k,"DIV",{class:!0});var d=p(o);a.l(d),d.forEach(_),r=S(k),z(y.$$.fragment,k),k.forEach(_),f.forEach(_),this.h()},h(){g(o,"class",n[4]),g(t,"class",n[3]),x(e,"dark",n[0])},m(c,f){D(c,e,f),u(e,t),H(s,t,null),u(t,l),u(t,o),b[i].m(o,null),u(t,r),H(y,t,null),h=!0},p(c,[f]){let k=i;i=w(c),i===k?b[i].p(c,f):(ne(),O(b[k],1,1,()=>{b[k]=null}),ae(),a=b[i],a?a.p(c,f):(a=b[i]=E[i](c),a.c()),$(a,1),a.m(o,null)),(!h||f&1)&&x(e,"dark",c[0])},i(c){h||($(s.$$.fragment,c),$(a),$(y.$$.fragment,c),h=!0)},o(c){O(s.$$.fragment,c),O(a),O(y.$$.fragment,c),h=!1},d(c){c&&_(e),j(s),b[i].d(),j(y)}}}function Ne(n,e,t){let s,l,o,i;P(n,Y,E=>t(5,o=E)),P(n,fe,E=>t(2,i=E));let{$$slots:a={},$$scope:r}=e;const y=`
		m-0 p-0
		overflow-none
		scroll-smooth
		z-0
		box-border
		font-sans
		duration-200

		${J.secondary}
		${B.primary}
		`,h=`
		min-h-screen sm:px-12 px-0
	`;return n.$$set=E=>{"$$scope"in E&&t(6,r=E.$$scope)},n.$$.update=()=>{n.$$.dirty&32&&t(0,s=o),n.$$.dirty&1&&t(1,l=s?"#ffffff":"#000000")},[s,l,i,y,h,o,r,a]}class Ge extends A{constructor(e){super(),V(this,e,Ne,Fe,C,{})}}export{Ge as component,Ye as universal};
