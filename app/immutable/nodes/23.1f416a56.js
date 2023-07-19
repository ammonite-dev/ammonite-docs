import{U as J,S as R,i as k,s as F,k as p,q as m,a as z,l as u,m as f,r as _,h as l,c as U,n as L,b as G,C as e,D as A}from"../chunks/index.d2f290a2.js";import{c as K}from"../chunks/syntax.d8b6a914.js";import{w as Q}from"../chunks/index.d83ce407.js";const M={};function W(n){return n==="local"?localStorage:sessionStorage}function C(n,t,i){const g=i?.serializer??JSON,v=i?.storage??"local";function s(c,r){W(v).setItem(c,g.stringify(r))}if(!M[n]){const c=Q(t,o=>{const a=W(v).getItem(n);a&&o(g.parse(a));{const b=w=>{w.key===n&&o(w.newValue?g.parse(w.newValue):null)};return window.addEventListener("storage",b),()=>window.removeEventListener("storage",b)}}),{subscribe:r,set:S}=c;M[n]={set(o){s(n,o),S(o)},update(o){const a=o(J(c));s(n,a),S(a)},subscribe:r}}return M[n]}C("modeOsPrefers",!1);C("modeUserPrefers",void 0);C("modeCurrent",!1);function X(n){let t,i,g,v,s,c,r,S,o,a,b,w,E,H,x,y,P,T,j=K("html",`<html>
	<head>
		<!-- content -->
	</head>
	<body>
		<!-- content -->
	</body>
</html>`)+"";return{c(){t=p("div"),i=p("h1"),g=m("Website 101"),v=z(),s=p("p"),c=m(`This section is geared towards an audience who has little to no knowledge of how websites work.
		In particular, HTML elements and their purposes. In general, an HTML document has the following
		structure. An `),r=p("span"),S=m("<html>"),o=m(` element with a
		`),a=p("span"),b=m("<head>"),w=m(`
		element and `),E=p("span"),H=m("<body>"),x=m(" element inside it."),y=z(),P=p("pre"),T=p("code"),this.h()},l(I){t=u(I,"DIV",{class:!0});var d=f(t);i=u(d,"H1",{});var N=f(i);g=_(N,"Website 101"),N.forEach(l),v=U(d),s=u(d,"P",{});var h=f(s);c=_(h,`This section is geared towards an audience who has little to no knowledge of how websites work.
		In particular, HTML elements and their purposes. In general, an HTML document has the following
		structure. An `),r=u(h,"SPAN",{class:!0});var D=f(r);S=_(D,"<html>"),D.forEach(l),o=_(h,` element with a
		`),a=u(h,"SPAN",{class:!0});var O=f(a);b=_(O,"<head>"),O.forEach(l),w=_(h,`
		element and `),E=u(h,"SPAN",{class:!0});var V=f(E);H=_(V,"<body>"),V.forEach(l),x=_(h," element inside it."),h.forEach(l),y=U(d),P=u(d,"PRE",{});var q=f(P);T=u(q,"CODE",{});var B=f(T);B.forEach(l),q.forEach(l),d.forEach(l),this.h()},h(){L(r,"class","inline_code"),L(a,"class","inline_code"),L(E,"class","inline_code"),L(t,"class","tech_doc")},m(I,d){G(I,t,d),e(t,i),e(i,g),e(t,v),e(t,s),e(s,c),e(s,r),e(r,S),e(s,o),e(s,a),e(a,b),e(s,w),e(s,E),e(E,H),e(s,x),e(t,y),e(t,P),e(P,T),T.innerHTML=j},p:A,i:A,o:A,d(I){I&&l(t)}}}class ee extends R{constructor(t){super(),k(this,t,null,X,F,{})}}export{ee as component};
