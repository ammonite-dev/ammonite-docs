import{S as oe,i as ce,s as _e,k as m,a as D,l as p,m as v,h as c,c as k,n as h,b as g,C as f,E as pe,D as A,H as x,N as Ce,F as Ne,e as Z,q as U,r as w,J as Be,y as se,z as re,A as ae,K as Me,L as Ue,M as we,g as q,d as J,B as ne}from"../chunks/index.bb85b875.js";import{p as Oe}from"../chunks/stores.7a84a922.js";import{M as He}from"../chunks/MetaTags.6c399de2.js";import{B as Ae,a as W,F as j,b as Re,c as Le}from"../chunks/fonts.f3db0f6d.js";import{A as K}from"../chunks/routes.445203bd.js";import{I as Pe,W as Ge,S as Ye,T as Fe,B as Ke}from"../chunks/sections.e73bebcf.js";const We=!0,Tt=Object.freeze(Object.defineProperty({__proto__:null,prerender:We},Symbol.toStringTag,{value:"Module"})),Q=[{section:0,name:"Introduction",url:K.DocsHome,subsections:Pe},{section:1,name:"Website 101",url:K.DocsWebsite101,subsections:Ge},{section:2,name:"Syntax",url:K.DocsSyntax,subsections:Ye},{section:3,name:"Templates",url:K.DocsTemplates,subsections:Fe},{section:4,name:"Built-in Templates",url:K.DocsTemplatesBuiltIn,subsections:Ke}],je=`
    h-2 bg-current my-0.5 duration-300 ease-out
    `,X=`
    w-8 ${Ae.secondary} ${je}
    `,ue=`
    h-0.5 bg-current my-2 duration-300 ease-out
    bg-light-text-primary
    dark:bg-dark-text-primary
    `,ze=`
    ${ue}
    w-6 rotate-45 translate-y-2.5
    `,qe=`
    ${ue}
    w-6 opacity-0`,Je=`
    ${ue}
    w-6 -rotate-45 -translate-y-2.5`,Ve=`
    ${Ae.secondary}
    fixed w-full z-10
    overflow-auto
    left-0 top-0 right-0 bottom-0
    duration-500
    transition-all
    `,ve=`
    opacity-0 translate-x-full
    ${Ve}`,Ee=`${Ve}`;function be(a,e,r){const s=a.slice();return s[9]=e[r],s}function Te(a,e,r){const s=a.slice();return s[12]=e[r],s}function Xe(a){let e,r=a[9].name+"",s;return{c(){e=m("div"),s=U(r),this.h()},l(l){e=p(l,"DIV",{class:!0});var t=v(e);s=w(t,r),t.forEach(c),this.h()},h(){h(e,"class",a[2])},m(l,t){g(l,e,t),f(e,s)},p:A,d(l){l&&c(e)}}}function Ze(a){let e,r,s=a[9].name+"",l;return{c(){e=m("div"),r=m("a"),l=U(s),this.h()},l(t){e=p(t,"DIV",{class:!0});var i=v(e);r=p(i,"A",{class:!0,href:!0});var u=v(r);l=w(u,s),u.forEach(c),i.forEach(c),this.h()},h(){h(r,"class",a[3]),h(r,"href",a[9].url),h(e,"class",a[2])},m(t,i){g(t,e,i),f(e,r),f(r,l)},p:A,d(t){t&&c(e)}}}function Qe(a){let e,r=a[12].name+"",s;return{c(){e=m("a"),s=U(r),this.h()},l(l){e=p(l,"A",{id:!0,class:!0,href:!0});var t=v(e);s=w(t,r),t.forEach(c),this.h()},h(){h(e,"id","#"+a[9].name),h(e,"class",a[4]),h(e,"href",a[12].url)},m(l,t){g(l,e,t),f(e,s)},p:A,d(l){l&&c(e)}}}function xe(a){let e,r=a[12].name+"",s;return{c(){e=m("a"),s=U(r),this.h()},l(l){e=p(l,"A",{id:!0,class:!0,href:!0});var t=v(e);s=w(t,r),t.forEach(c),this.h()},h(){h(e,"id","#"+a[9].name),h(e,"class",a[5]),h(e,"href",a[12].url)},m(l,t){g(l,e,t),f(e,s)},p:A,d(l){l&&c(e)}}}function ge(a){let e;function r(t,i){return t[12].url===t[1].url.pathname?xe:Qe}let s=r(a),l=s(a);return{c(){l.c(),e=Z()},l(t){l.l(t),e=Z()},m(t,i){l.m(t,i),g(t,e,i)},p(t,i){s===(s=r(t))&&l?l.p(t,i):(l.d(1),l=s(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&c(e)}}}function Ie(a){let e,r,s;function l(o,_){return o[9].url?Ze:Xe}let i=l(a)(a),u=a[9].subsections??[],n=[];for(let o=0;o<u.length;o+=1)n[o]=ge(Te(a,u,o));return{c(){i.c(),e=D(),r=m("div");for(let o=0;o<n.length;o+=1)n[o].c();s=D(),this.h()},l(o){i.l(o),e=k(o),r=p(o,"DIV",{class:!0});var _=v(r);for(let d=0;d<n.length;d+=1)n[d].l(_);s=k(_),_.forEach(c),this.h()},h(){h(r,"class","flex flex-col")},m(o,_){i.m(o,_),g(o,e,_),g(o,r,_);for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(r,null);f(r,s)},p(o,_){if(i.p(o,_),_&50){u=o[9].subsections??[];let d;for(d=0;d<u.length;d+=1){const b=Te(o,u,d);n[d]?n[d].p(b,_):(n[d]=ge(b),n[d].c(),n[d].m(r,s))}for(;d<n.length;d+=1)n[d].d(1);n.length=u.length}},d(o){i.d(o),o&&c(e),o&&c(r),x(n,o)}}}function et(a){let e,r,s,l,t,i,u,n,o,_,d,b,R,O,N,I,E,$,V,C,H,L,ee,F,z,te,fe,P=Q,y=[];for(let S=0;S<P.length;S+=1)y[S]=Ie(be(a,P,S));return{c(){e=m("div"),r=m("button"),s=m("div"),l=m("div"),t=D(),i=m("div"),u=D(),n=m("div"),o=D(),_=m("div"),d=D(),b=m("div"),R=m("div"),O=m("div"),N=m("button"),I=m("div"),E=D(),$=m("div"),V=D(),C=m("div"),H=D(),L=m("div");for(let S=0;S<y.length;S+=1)y[S].c();ee=D(),F=m("div"),this.h()},l(S){e=p(S,"DIV",{});var M=v(e);r=p(M,"BUTTON",{});var T=v(r);s=p(T,"DIV",{class:!0});var B=v(s);l=p(B,"DIV",{class:!0}),v(l).forEach(c),t=k(B),i=p(B,"DIV",{class:!0}),v(i).forEach(c),u=k(B),n=p(B,"DIV",{class:!0}),v(n).forEach(c),o=k(B),_=p(B,"DIV",{class:!0}),v(_).forEach(c),B.forEach(c),T.forEach(c),d=k(M),b=p(M,"DIV",{class:!0});var G=v(b);R=p(G,"DIV",{class:!0});var he=v(R);O=p(he,"DIV",{class:!0});var de=v(O);N=p(de,"BUTTON",{});var Y=v(N);I=p(Y,"DIV",{class:!0}),v(I).forEach(c),E=k(Y),$=p(Y,"DIV",{class:!0}),v($).forEach(c),V=k(Y),C=p(Y,"DIV",{class:!0}),v(C).forEach(c),Y.forEach(c),de.forEach(c),he.forEach(c),H=k(G),L=p(G,"DIV",{class:!0});var me=v(L);for(let le=0;le<y.length;le+=1)y[le].l(me);me.forEach(c),ee=k(G),F=p(G,"DIV",{class:!0}),v(F).forEach(c),G.forEach(c),M.forEach(c),this.h()},h(){h(l,"class",X),h(i,"class",X),h(n,"class",X),h(_,"class",X),h(s,"class","duration-300 bg-light-text-primary dark:bg-dark-text-primary hover:bg-light-primary hover:dark:bg-dark-primary"),h(I,"class",ze),h($,"class",qe),h(C,"class",Je),h(O,"class",W.primary+" "+j.accentPrimary),h(R,"class","flex justify-end w-full pt-2 px-6"),h(L,"class","px-6"),h(F,"class","h-12"),h(b,"class",z=a[0]?Ee:ve)},m(S,M){g(S,e,M),f(e,r),f(r,s),f(s,l),f(s,t),f(s,i),f(s,u),f(s,n),f(s,o),f(s,_),f(e,d),f(e,b),f(b,R),f(R,O),f(O,N),f(N,I),f(N,E),f(N,$),f(N,V),f(N,C),f(b,H),f(b,L);for(let T=0;T<y.length;T+=1)y[T]&&y[T].m(L,null);f(b,ee),f(b,F),te||(fe=[pe(r,"click",a[6]),pe(N,"click",a[6])],te=!0)},p(S,[M]){if(M&62){P=Q;let T;for(T=0;T<P.length;T+=1){const B=be(S,P,T);y[T]?y[T].p(B,M):(y[T]=Ie(B),y[T].c(),y[T].m(L,null))}for(;T<y.length;T+=1)y[T].d(1);y.length=P.length}M&1&&z!==(z=S[0]?Ee:ve)&&h(b,"class",z)},i:A,o:A,d(S){S&&c(e),x(y,S),te=!1,Ce(fe)}}}function tt(a,e,r){let s;Ne(a,Oe,b=>r(1,s=b));const l=`
        ${Re.lg} ${Le.bold}
        pt-4 pb-2
    `,t=`
		duration-300
		${j.accentPrimary}
    `,i=`
		pl-1 pb-0.5
        duration-300
	`,u=`
        ${i}
        text-gray-300
        ${j.accentPrimary}
    `,n=`
        ${i}
        ${W.accentPrimary}
    `;let{path:o}=e,{open:_}=e;const d=()=>{r(0,_=!_)};return a.$$set=b=>{"path"in b&&r(7,o=b.path),"open"in b&&r(0,_=b.open)},[_,s,l,t,u,n,d,o]}class lt extends oe{constructor(e){super(),ce(this,e,tt,et,_e,{path:7,open:0})}}function $e(a,e,r){const s=a.slice();return s[7]=e[r],s}function Se(a,e,r){const s=a.slice();return s[10]=e[r],s}function st(a){let e,r=a[7].name+"",s;return{c(){e=m("div"),s=U(r),this.h()},l(l){e=p(l,"DIV",{class:!0});var t=v(e);s=w(t,r),t.forEach(c),this.h()},h(){h(e,"class",a[1])},m(l,t){g(l,e,t),f(e,s)},p:A,d(l){l&&c(e)}}}function rt(a){let e;function r(t,i){return t[7].url===t[0]?nt:at}let s=r(a),l=s(a);return{c(){e=m("div"),l.c(),this.h()},l(t){e=p(t,"DIV",{class:!0});var i=v(e);l.l(i),i.forEach(c),this.h()},h(){h(e,"class",a[1])},m(t,i){g(t,e,i),l.m(e,null)},p(t,i){s===(s=r(t))&&l?l.p(t,i):(l.d(1),l=s(t),l&&(l.c(),l.m(e,null)))},d(t){t&&c(e),l.d()}}}function at(a){let e,r=a[7].name+"",s;return{c(){e=m("a"),s=U(r),this.h()},l(l){e=p(l,"A",{class:!0,href:!0});var t=v(e);s=w(t,r),t.forEach(c),this.h()},h(){h(e,"class",a[2]),h(e,"href",a[7].url)},m(l,t){g(l,e,t),f(e,s)},p:A,d(l){l&&c(e)}}}function nt(a){let e,r=a[7].name+"",s;return{c(){e=m("a"),s=U(r),this.h()},l(l){e=p(l,"A",{class:!0,href:!0});var t=v(e);s=w(t,r),t.forEach(c),this.h()},h(){h(e,"class",a[3]),h(e,"href",a[7].url)},m(l,t){g(l,e,t),f(e,s)},p:A,d(l){l&&c(e)}}}function it(a){let e,r=a[10].name+"",s;return{c(){e=m("a"),s=U(r),this.h()},l(l){e=p(l,"A",{id:!0,class:!0,href:!0});var t=v(e);s=w(t,r),t.forEach(c),this.h()},h(){h(e,"id","#"+a[7].name),h(e,"class",a[4]),h(e,"href",a[10].url)},m(l,t){g(l,e,t),f(e,s)},p:A,d(l){l&&c(e)}}}function ot(a){let e,r=a[10].name+"",s;return{c(){e=m("a"),s=U(r),this.h()},l(l){e=p(l,"A",{id:!0,class:!0,href:!0});var t=v(e);s=w(t,r),t.forEach(c),this.h()},h(){h(e,"id","#"+a[7].name),h(e,"class",a[5]),h(e,"href",a[10].url)},m(l,t){g(l,e,t),f(e,s)},p:A,d(l){l&&c(e)}}}function ye(a){let e;function r(t,i){return t[10].url===t[0]?ot:it}let s=r(a),l=s(a);return{c(){l.c(),e=Z()},l(t){l.l(t),e=Z()},m(t,i){l.m(t,i),g(t,e,i)},p(t,i){s===(s=r(t))&&l?l.p(t,i):(l.d(1),l=s(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&c(e)}}}function De(a){let e,r;function s(n,o){return n[7].url?rt:st}let t=s(a)(a),i=a[7].subsections??[],u=[];for(let n=0;n<i.length;n+=1)u[n]=ye(Se(a,i,n));return{c(){t.c(),e=D(),r=m("div");for(let n=0;n<u.length;n+=1)u[n].c();this.h()},l(n){t.l(n),e=k(n),r=p(n,"DIV",{class:!0});var o=v(r);for(let _=0;_<u.length;_+=1)u[_].l(o);o.forEach(c),this.h()},h(){h(r,"class","flex flex-col")},m(n,o){t.m(n,o),g(n,e,o),g(n,r,o);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(r,null)},p(n,o){if(t.p(n,o),o&49){i=n[7].subsections??[];let _;for(_=0;_<i.length;_+=1){const d=Se(n,i,_);u[_]?u[_].p(d,o):(u[_]=ye(d),u[_].c(),u[_].m(r,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=i.length}},d(n){t.d(n),n&&c(e),n&&c(r),x(u,n)}}}function ct(a){let e,r,s,l=Q,t=[];for(let i=0;i<l.length;i+=1)t[i]=De($e(a,l,i));return{c(){e=m("div");for(let i=0;i<t.length;i+=1)t[i].c();r=D(),s=m("div"),this.h()},l(i){e=p(i,"DIV",{});var u=v(e);for(let n=0;n<t.length;n+=1)t[n].l(u);r=k(u),s=p(u,"DIV",{class:!0}),v(s).forEach(c),u.forEach(c),this.h()},h(){h(s,"class","h-12")},m(i,u){g(i,e,u);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null);f(e,r),f(e,s)},p(i,[u]){if(u&63){l=Q;let n;for(n=0;n<l.length;n+=1){const o=$e(i,l,n);t[n]?t[n].p(o,u):(t[n]=De(o),t[n].c(),t[n].m(e,r))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},i:A,o:A,d(i){i&&c(e),x(t,i)}}}function _t(a,e,r){const s=`
        ${Re.lg} ${Le.bold}
        pt-4 pb-2
    `,l=`
		duration-300
		${j.accentPrimary}
    `,t=`
		${W.accentPrimary}
	`,i=`
		pl-1 pb-0.5
        duration-300
	`,u=`
        ${i}
        ${W.tertiary}
        ${j.accentPrimary}
    `,n=`
        ${i}
        ${W.accentPrimary}
    `;let{path:o}=e;return a.$$set=_=>{"path"in _&&r(0,o=_.path)},[o,s,l,t,u,n]}class ut extends oe{constructor(e){super(),ce(this,e,_t,ct,_e,{path:0})}}function ft(a){let e,r,s,l,t,i,u,n,o,_,d,b,R,O;e=new He({props:{title:ie,twitter:{title:ie,description:ke,cardType:"summary_large_image"},openGraph:{site_name:"Ammonite",type:"website",title:ie,description:ke}}}),i=new ut({props:{path:a[0].url.pathname}}),o=new lt({props:{path:a[0].url.pathname,open:!1}});const N=a[2].default,I=Be(N,a,a[1],null);return{c(){se(e.$$.fragment),r=D(),s=m("div"),l=m("div"),t=m("div"),se(i.$$.fragment),u=D(),n=m("div"),se(o.$$.fragment),_=D(),d=m("div"),I&&I.c(),b=D(),R=m("div"),this.h()},l(E){re(e.$$.fragment,E),r=k(E),s=p(E,"DIV",{class:!0});var $=v(s);l=p($,"DIV",{});var V=v(l);t=p(V,"DIV",{class:!0});var C=v(t);re(i.$$.fragment,C),C.forEach(c),u=k(V),n=p(V,"DIV",{class:!0});var H=v(n);re(o.$$.fragment,H),H.forEach(c),V.forEach(c),_=k($),d=p($,"DIV",{class:!0});var L=v(d);I&&I.l(L),b=k(L),R=p(L,"DIV",{class:!0}),v(R).forEach(c),L.forEach(c),$.forEach(c),this.h()},h(){h(t,"class","sm:block hidden pr-4 w-52 overflow-y-auto max-h-screen"),h(n,"class","sm:hidden block sm:p-0 px-4"),h(R,"class","h-12"),h(d,"class","min-w-0 px-4"),h(s,"class","flex sm:flex-row flex-col flex-nowrap")},m(E,$){ae(e,E,$),g(E,r,$),g(E,s,$),f(s,l),f(l,t),ae(i,t,null),f(l,u),f(l,n),ae(o,n,null),f(s,_),f(s,d),I&&I.m(d,null),f(d,b),f(d,R),O=!0},p(E,[$]){const V={};$&1&&(V.path=E[0].url.pathname),i.$set(V);const C={};$&1&&(C.path=E[0].url.pathname),o.$set(C),I&&I.p&&(!O||$&2)&&Me(I,N,E,E[1],O?we(N,E[1],$,null):Ue(E[1]),null)},i(E){O||(q(e.$$.fragment,E),q(i.$$.fragment,E),q(o.$$.fragment,E),q(I,E),O=!0)},o(E){J(e.$$.fragment,E),J(i.$$.fragment,E),J(o.$$.fragment,E),J(I,E),O=!1},d(E){ne(e,E),E&&c(r),E&&c(s),ne(i),ne(o),I&&I.d(E)}}}const ie="Ammonite Docs",ke="Learn how to use Ammonite to generate great wiki pages";function ht(a,e,r){let s;Ne(a,Oe,i=>r(0,s=i));let{$$slots:l={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&r(1,t=i.$$scope)},[s,t,l]}class gt extends oe{constructor(e){super(),ce(this,e,ht,ft,_e,{})}}export{gt as component,Tt as universal};
