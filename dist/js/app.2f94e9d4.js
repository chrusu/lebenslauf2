(function(e){function t(t){for(var r,l,i=t[0],s=t[1],u=t[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HelloWorld")},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cont"},e._l(e.data,(function(e){return n("Col",{key:e.key,attrs:{content:e}})})),1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"image"===e.content.type?n("div",{class:["column-3"]},[n("Carousel",{attrs:{images:e.content.images}})],1):"text"===e.content.type?n("div",{class:["column-3",e.content.style,e.content.type]},[n("h2",{domProps:{innerHTML:e._s(e.content.title)}},[e._v(e._s(e.content.title))]),n("div",{domProps:{innerHTML:e._s(e.content.text)}},[e._v(e._s(e.content.text))])]):"name"===e.content.type?n("div",{class:["column-3",e.content.style,e.content.type]},[n("h1",[e._v(e._s(e.content.title))]),n("div",{staticClass:"subtitle"},[n("h2",[e._v(e._s(e.content.lead))]),n("h2",[e._v(e._s(e.content.text))])])]):e._e()},u=[],c=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"24"}},[n("v-carousel",{attrs:{continuous:!0,cycle:e.cycle,"show-arrows":!0,"hide-delimiter-background":"","delimiter-icon":"mdi-minus","show-arrows-on-hover":""}},e._l(e.images,(function(e,t){return n("v-carousel-item",{key:t},[n("div",{staticClass:"bg-image",style:["background-image:url("]+e.url+[");"]})])})),1)],1)}),d=[],p={name:"Carousel",props:{images:Array},data:function(){return{colors:["green","secondary","yellow darken-4","red lighten-2","orange darken-1"],cycle:!1,slides:["First","Second","Third","Fourth","Fifth"]}}},f=p,m=n("2877"),h=n("6544"),y=n.n(h),v=n("b0af"),g=n("5e66"),b=n("3e35"),_=Object(m["a"])(f,c,d,!1,null,null,null),k=_.exports;y()(_,{VCard:v["a"],VCarousel:g["a"],VCarouselItem:b["a"]});var w={name:"Col",components:{Carousel:k},props:{content:Object,cols:Number}},x=w,j=Object(m["a"])(x,s,u,!1,null,"25c6caa3",null),O=j.exports,P={name:"HelloWorld",components:{Col:O},data:function(){return{data:[{key:"1",type:"image",title:"Image",images:[{url:"photo.png",alt:"profilbild tobias hinderling"}],style:"light"},{key:"name",type:"name",title:"Tobias Hinderling",lead:"Junior Usability Engineer",text:"Software Developer",style:"light"},{key:"2",type:"text",title:"Portrait",text:"<p><b>Was macht gute Usability aus?</b></p>\n      <p>Meine Passion ist es, umständliche Arbeitsabläufe zu vereinfachen und damit dem Kunden ein Lächeln zu entlocken. Der direkte und vor allem wiederholte Kontakt mit dem Kunden erachte ich als wegweisend für ein erfolgreiches Projekt.</p>",style:"dark"},{key:"3",type:"text",title:"&nbsp;",text:'<p>Meine Erfahrung als Software-Entwickler, Projektleiter und meine im August startende Ausbildung zum "Interation Desginer HF" helfen mir, die Bedürfnisse von Kunden, Projektleiter und Entwickler zu vereinen.</p>\n      <p>Usability heisst: <b>"Finden statt Suchen"</b></p>',style:"dark"},{key:"4",type:"text",title:"Sprachen",text:'<div class="left"><ul><li>Deutsch:</li><li>Französisch:</li><li>Englisch:</li></ul></div>\n      <div class="right">Muttersprache<br />Vatersprache<br />Gute Kenntnisse</div>',style:"light"},{key:"5",type:"image",title:"Image",images:[{url:"photo.png",alt:"bild1"},{url:"photo.png",alt:"bild2"}],style:"light"}]}}},C=P,S=Object(m["a"])(C,l,i,!1,null,"39cedea2",null),E=S.exports,M={name:"App",components:{HelloWorld:E},data:function(){return{}}},H=M,T=(n("034f"),Object(m["a"])(H,a,o,!1,null,null,null)),F=T.exports,z=n("8c4f");r["a"].use(z["a"]);var A=[],K=new z["a"]({routes:A}),$=K,D=n("2f62");r["a"].use(D["a"]);var I=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),V=n("f309");r["a"].use(V["a"]);var W=new V["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:$,store:I,vuetify:W,render:function(e){return e(F)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.2f94e9d4.js.map