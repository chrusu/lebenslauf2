(function(e){function t(t){for(var i,r,l=t[0],o=t[1],c=t[2],m=0,d=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,l=1;l<n.length;l++){var o=n[l];0!==s[o]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"267f":function(e,t,n){"use strict";var i=n("e174"),s=n.n(i);s.a},3559:function(e,t,n){},4418:function(e,t,n){},5659:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("HelloWorld")],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cont"},e._l(e.data,(function(e){return n("Col",{key:e.key,attrs:{content:e}})})),1)},l=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"image"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.type]},[n("Carousel",{attrs:{images:e.content.images,height:e.content.height}})],1):"large-text"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("LargeText",{attrs:{title:e.content.title,testimonials:e.content.testimonials}})],1):"double-text"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("DoubleText",{attrs:{title:e.content.title,text1:e.content.text1,text2:e.content.text2}})],1):"single-text"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("SingleText",{attrs:{title:e.content.title,text:e.content.text}})],1):"grid"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("Grid",{attrs:{left:e.content.left,right:e.content.right,title:e.content.title}})],1):"name"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("Name",{attrs:{firstname:e.content.firstname,lastname:e.content.lastname,lead:e.content.lead,text:e.content.text}})],1):"progress-list"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("ProgressList",{attrs:{items:e.content.items,title:e.content.title}})],1):"stations"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("StationList",{attrs:{items:e.content.items,title:e.content.title}})],1):"skills"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("Skills",{attrs:{items:e.content.items,title:e.content.title}})],1):"portfolio"===e.content.type?n("div",{class:["column-"+e.content.cols,e.content.style,e.content.type]},[n("PortfolioList",{attrs:{items:e.content.items,title:e.content.title}})],1):e._e()},c=[],u=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.images.length>1?n("div",[n("v-card",{staticClass:"mx-auto",attrs:{elevation:"24"}},[n("v-carousel",{attrs:{continuous:!0,"show-arrows":!1,"hide-delimiter-background":"",height:e.height}},e._l(e.images,(function(t,i){return n("v-carousel-item",{key:i},[n("div",{staticClass:"bg-image",style:["background-image:url("]+t.url+[");"]},[n("div",{staticClass:"carousel-title"},[n("p",[e._v(e._s(t.alt))])])])])})),1)],1)],1):n("div",[n("div",{staticClass:"bg-image",style:["height:"]+e.height+["px;background-image:url("]+e.images[0].url+[");"]})])])}),m=[],d={name:"Carousel",props:{images:Array,height:Number}},g=d,p=(n("d8bd"),n("2877")),h=n("6544"),b=n.n(h),f=n("b0af"),v=n("5e66"),y=n("3e35"),_=Object(p["a"])(g,u,m,!1,null,"6aa20e4a",null),k=_.exports;b()(_,{VCard:f["a"],VCarousel:v["a"],VCarouselItem:y["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),n("div",{staticClass:"wrapper"},[e._l(e.left,(function(t,i){return n("div",{key:i,class:["left_"+i]},[e._v(e._s(t))])})),e._l(e.right,(function(t,i){return n("div",{key:i,class:["right_"+i]},[e._v(e._s(t))])}))],2)])},w=[],S={name:"Grid",props:{title:String,left:Array,right:Array}},C=S,T=Object(p["a"])(C,x,w,!1,null,null,null),z=T.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{domProps:{innerHTML:e._s(e.title)}},[e._v(e._s(e.title))]),n("v-carousel",{attrs:{continuous:!0,"show-arrows":!1,"hide-delimiter-background":"",height:"100%"}},e._l(e.testimonials,(function(t,i){return n("v-carousel-item",{key:i},[n("div",{staticClass:"large-text text",domProps:{innerHTML:e._s(t.text)}},[e._v(e._s(t.text))]),n("div",{staticClass:"author",domProps:{innerHTML:e._s(t.author)}},[e._v(e._s(t.author))])])})),1)],1)},j=[],A={name:"LargeText",props:{title:String,testimonials:Array}},O=A,E=(n("60b0"),Object(p["a"])(O,P,j,!1,null,"b9356af2",null)),L=E.exports;b()(E,{VCarousel:v["a"],VCarouselItem:y["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.firstname))]),n("h1",[e._v(e._s(e.lastname))]),n("div",{staticClass:"subtitle"},[n("h3",[e._v(e._s(e.lead))]),n("h3",[e._v(e._s(e.text))])])])},V=[],I={name:"Name",props:{firstname:String,lastname:String,lead:String,text:String}},F=I,B=Object(p["a"])(F,M,V,!1,null,null,null),D=B.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),n("div",{staticClass:"text1",domProps:{innerHTML:e._s(e.text1)}},[e._v(e._s(e.text1))]),n("div",{staticClass:"text2",domProps:{innerHTML:e._s(e.text2)}},[e._v(e._s(e.text2))])])},K=[],W={name:"DoubleText",props:{title:String,text1:String,text2:String}},$=W,G=(n("ed97"),Object(p["a"])($,H,K,!1,null,"83f94d64",null)),N=G.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),n("div",{staticClass:"text",domProps:{innerHTML:e._s(e.text)}},[e._v(e._s(e.text))])])},U=[],X={name:"DoubleText",props:{title:String,text:String}},J=X,Z=(n("8e83"),Object(p["a"])(J,R,U,!1,null,"3c80e7c9",null)),q=Z.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),e._l(e.items,(function(e,t){return n("div",{key:t,staticClass:"progress-item"},[n("Progress",{attrs:{item:e}})],1)}))],2)},Q=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alignment"},[n("v-progress-circular",{attrs:{size:"80",value:e.item.value}},[e._v(e._s(e.item.value))]),n("div",{staticClass:"progress-image"},[n("div",{attrs:{stlye:"display:inline-block"}},[n("img",{attrs:{src:e.item.image,alt:e.item.name}})]),n("div",{staticClass:"progress-name"},[e._v(e._s(e.item.name))])])],1)},te=[],ne={name:"Progress",props:{item:Object}},ie=ne,se=(n("afc2"),n("490a")),ae=Object(p["a"])(ie,ee,te,!1,null,"e103b06c",null),re=ae.exports;b()(ae,{VProgressCircular:se["a"]});var le={name:"ProgressList",components:{Progress:re},props:{title:String,items:Array}},oe=le,ce=(n("d426"),Object(p["a"])(oe,Y,Q,!1,null,"40e10954",null)),ue=ce.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),e._l(e.items,(function(e,t){return n("div",{key:t},[n("Station",{attrs:{item:e}})],1)}))],2)},de=[],ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"station"},[n("div",{staticClass:"station-col"},[n("div",{staticClass:"station-city"},[e._v(e._s(e.item.city))]),n("div",{staticClass:"station-date"},[e._v(e._s(e.item.date))]),n("div",{staticClass:"station-image"},[n("img",{attrs:{src:e.item.image,alt:e.item.name}})])]),n("div",{staticClass:"station-col"},[n("div",{staticClass:"station-name"},[e._v(e._s(e.item.name))]),n("div",{staticClass:"station-workitems"},e._l(e.item.workitems,(function(t,i){return n("div",{key:i,staticClass:"work-item"},[n("ul",{staticClass:"station-workitem"},[n("li",[e._v(e._s(t))])])])})),0)])])},pe=[],he={name:"Station",props:{item:Object}},be=he,fe=(n("cbfd"),Object(p["a"])(be,ge,pe,!1,null,"17598e07",null)),ve=fe.exports,ye={name:"StationList",components:{Station:ve},props:{title:String,items:Array}},_e=ye,ke=Object(p["a"])(_e,me,de,!1,null,null,null),xe=ke.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),n("div",{staticClass:"skills"},e._l(e.items,(function(t,i){return n("div",{key:i,staticClass:"skills-container"},[n("div",{staticClass:"skill-set"},[n("div",{staticClass:"skill-set-name"},[e._v(e._s(t.name))]),e._l(t.skills,(function(e,t){return n("div",{key:t,staticClass:"skill-item"},[n("Skill",{attrs:{skill:e}})],1)}))],2)])})),0)])},Se=[],Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"skill-image"},[n("img",{attrs:{src:e.skill.image,alt:e.skill.name}})]),n("div",{staticClass:"skill-name",domProps:{innerHTML:e._s(e.skill.name)}},[e._v(e._s(e.skill.name))])])},Te=[],ze={name:"Skill",props:{skill:Object}},Pe=ze,je=(n("d58c"),Object(p["a"])(Pe,Ce,Te,!1,null,"36f60231",null)),Ae=je.exports,Oe={name:"SkillList",components:{Skill:Ae},props:{title:String,items:Array}},Ee=Oe,Le=(n("267f"),Object(p["a"])(Ee,we,Se,!1,null,"60806217",null)),Me=Le.exports,Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),n("div",{staticClass:"portfolios"},e._l(e.items,(function(e,t){return n("div",{key:t,staticClass:"portfolio-item"},[n("Portfolio",{attrs:{portfolio:e}})],1)})),0)])},Ie=[],Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("div",{staticClass:"portfolio-image"},[n("img",{attrs:{src:e.portfolio.image,alt:e.portfolio.name}})]),n("v-dialog",{attrs:{width:"800"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[n("v-btn",e._g(e._b({attrs:{dark:""}},"v-btn",s,!1),i),[e._v(" "+e._s(e.portfolio.name)+" ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{dark:""}},[n("v-card-title",{staticClass:"headline grey"},[e._v(" "+e._s(e.portfolio.name)+" ")]),n("v-card-text",{domProps:{innerHTML:e._s(e.portfolio.html)}},[e._v(" "+e._s(e.portfolio.html)+" ")]),n("v-img",{attrs:{alt:e.portfolio.name,src:e.portfolio.bigImage}}),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:"",href:e.portfolio.url,target:"_blank"}},[e._v(" Visit Prototype ")]),n("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")])],1)],1)],1)],1)},Be=[],De={name:"Portfolio",props:{portfolio:Object},data:function(){return{dialog:!1}}},He=De,Ke=(n("7b64"),n("8336")),We=n("99d9"),$e=n("169a"),Ge=n("ce7e"),Ne=n("adda"),Re=n("2fa4"),Ue=Object(p["a"])(He,Fe,Be,!1,null,"50748012",null),Xe=Ue.exports;b()(Ue,{VBtn:Ke["a"],VCard:f["a"],VCardActions:We["a"],VCardText:We["b"],VCardTitle:We["c"],VDialog:$e["a"],VDivider:Ge["a"],VImg:Ne["a"],VSpacer:Re["a"]});var Je={name:"PortfolioList",components:{Portfolio:Xe},props:{title:String,items:Array}},Ze=Je,qe=(n("8221"),Object(p["a"])(Ze,Ve,Ie,!1,null,"41d821a9",null)),Ye=qe.exports,Qe={name:"Col",components:{Carousel:k,Grid:z,LargeText:L,Name:D,DoubleText:N,ProgressList:ue,StationList:xe,SingleText:q,Skills:Me,PortfolioList:Ye},props:{content:Object,cols:Number}},et=Qe,tt=Object(p["a"])(et,o,c,!1,null,"56e6ea9e",null),nt=tt.exports,it={name:"HelloWorld",components:{Col:nt},data:function(){return{data:[{type:"name",cols:3,firstname:"Tobias",lastname:"Hinderling",lead:"Junior Usability Engineer",text:"Software Developer",style:"light"},{type:"image",title:"Image",cols:3,images:[{url:"photo.png",alt:"profilbild tobias hinderling"}],height:450,style:"light"},{type:"double-text",title:"Portrait",cols:6,text1:"<p><b>Was macht gute Usability aus?</b></p>\n      <p>Meine Passion ist es, umständliche Arbeitsabläufe zu vereinfachen und damit dem Kunden ein Lächeln zu entlocken. Der direkte und vor allem wiederholte Kontakt mit dem Kunden erachte ich als wegweisend für ein erfolgreiches Projekt.</p>",text2:'<p>Meine Erfahrung als Software-Entwickler, Projektleiter und meine im August startende Ausbildung zum "Interation Desginer HF" helfen mir, die Bedürfnisse von Kunden, Projektleiter und Entwickler zu vereinen.</p>\n      <p>Usability heisst: <b>"Finden statt Suchen"</b></p>',style:"dark"},{type:"single-text",title:"Soft Skills",cols:3,text:"Pragmatic<br/>Teamplayer<br/>Analytical<br/>Open Minded<br />Sarcastic",style:"light"},{type:"image",title:"Image",cols:3,height:320,images:[{url:"pragmatic_small.jpg",alt:"pragmatic"},{url:"teamplayer_small.jpg",alt:"teamplayer"},{url:"outsidethebox.png",alt:"open minded"},{url:"sarcastic.svg",alt:"sarcastic"}],style:"light"},{type:"skills",title:"Skills",cols:6,style:"dark",items:[{name:"Usability Engineering",skills:[{name:"Prototyping",value:4,image:"proto.png"},{name:"Usability<br />Testing",value:3,image:"testing.png"},{name:"Requirements <br />Engineering",value:4,image:"re.png"}]},{name:"Development",skills:[{name:"Java Script",value:5,image:"js.png"},{name:"CSS",value:4,image:"css.png"},{name:"HTML",value:4,image:"html.png"}]}]},{type:"progress-list",title:"Languages",cols:6,style:"light",items:[{name:"Swiss German",value:100,image:"swiss.png"},{name:"German",value:90,image:"german.png"},{name:"French",value:70,image:"french.png"},{name:"English",value:70,image:"english.png"}]},{type:"stations",title:"Stations",cols:6,style:"dark",items:[{date:"Nov 2012 - Nov 2017",name:"SwissTXT AG",image:"stxt.png",city:"Biel/Bienne",workitems:["RE neue Livestreaming-Plattform","UX-Konzept TV-App für lokale Fernsehbetreiber","UX-Analyse Sport-Ticker für die Redaktion"]},{date:"Juni 2011 - August 2012",name:"Biznet AG",image:"biznet.png",city:"Schönbühl",workitems:["Analyse / RE","Projektleitung","Development ContentXXL"]},{date:"Januar 2011 - März 2011",name:"Modan Software AG",image:"modan.png",city:"Kirchberg",workitems:["Weiterentwicklung CRM","Erweiterung bestehendes modan-CMS"]},{date:"Mai 2007 - Dezember 2010",name:"Gassmann AG",image:"gassmann.png",city:"Biel / Bienne",workitems:["Weiterentwicklung www.bielertagblatt.ch","Neuentwicklung www.canal3.ch","Neuentwicklung www.telebielingue.ch"]}]},{type:"image",title:"Image",cols:3,height:320,images:[{url:"kajak.png",alt:"Kajak"},{url:"klettern.png",alt:"Climbing"},{url:"biken.png",alt:"MTB"}],style:"light"},{type:"single-text",title:"Interests",cols:3,text:"Kajak<br/>Climbing<br/>MTB<br/>Pfadi (aktuell: Leitung Wasseraktivitäten im Bundeslager 2021)",style:"light"},{type:"portfolio",title:"Portfolio",cols:6,style:"dark",items:[{name:"Telesuisse",image:"Telesuisse.png",url:"https://xd.adobe.com/view/110fe794-f0dc-4e99-8a57-0d307507b12a-445c/",html:"<br /><p>HbbTV - Hybrid Broadband Broadcast Television<br><br>\n            Was ist das genau?<br>\n            <ul><li>Der Nachfolger des Teletext</li><li>Eine Webseite im Fernsehen</li><li>Mediathek</li><li>Radio</li><li>Internet</li></ul>\n            <BR/>Für mehrere Regionale TV-Stationen haben wir ein Usability-Konzept erstellt, wie dieses neue Konstrukt HbbTV, \n            welches wie der Teletext direkt aus dem aktuellen Sender gestartet werden kann \n            (mit dem Roten Knopf auf der Fernbedienung)\n            <br><br>Grundsätzlich ist es eine Web-App, welche über das Fernsehbild gelegt wird.\n            <br>Ist der TV am Internet angeschlossen, kann man dann z.B. auf die Mediathek des Senders zugreifen, oder Radio hören.\n            <br><br>Im Gegensatz zu einer normalen Webseite oder einer Mobile-App haben wir hier aber keine Maus und auch keine Finger zur Verfügung, \n            die Bedienung muss also mit einer klassischen Fernbedienung geschehen.\n            <br><br>Ich durfte mich dem Usability-Konzept annehmen. Wie bin ich also vorgegangen?\n            <br><br>Als erstes habe ich geschaut, was die Konkurrenz so macht, z.B. Netflix, Youtube, etc.\n            <br><br>Darauf aufbauend habe ich dann einen ersten Prototypen entwickelt, \n            welchen ich dann immer wieder in Hallway-Tests mit verschiedensten Mitarbeitern getestet habe und mit Hilfe vom gewonnenen Feedback weiter verfeinert habe.</p>",bigImage:"portfolio/telesuisse.png"},{name:"Ferien. Zuhause.",image:"ferien_zuhause.png",url:"https://xd.adobe.com/view/8ef97740-682b-43b3-b246-54e3dd5ca4ca-dbaa/",html:'<br><div><span><strong>Ferien. Zuhause.</strong> lässt dich dem Alltag entfliehen ohne in den Flieger zu sitzen!</span>\n            <br><br>  <div><strong>Ferien. Zuhause.</strong> ist ein Vision.<br></div><ul role="list" class="list"><li>Fremde Kulturen entdecken</li>\n            <li>Integration durch Kontakt</li><li>Freundschaften knüpfen</li></ul>\n            <br/>\n            <div>Ein Freund kam zu mir mit der Idee für ein Reisebüro der speziellen Art.\n            <br><br>Die Idee: Statt um die halbe Welt zu Reisen um neue Kulturen kennenzulernen, könnte man auch einfach die verschiedenen Kulturen, \n            welche in einer Stadt wie Biel vorhanden sind, miteinander Verknüpfen.\n            <br><br>Beispielsweise lässt man sich von einer Thailändischen Familie zu einem typischen Thailändischen Essen einladen, \n            eine Diashow schauen, und zum Schluss ev. sogar noch miteinander tanzen.\n            <br>Alles kann, nichts muss.\n            <br><br>Die Idee hat mich fasziniert und nachdem ich ein paar Skizzen gezeichnet habe, \n            habe ich mich entschieden einen kleinen Prototypen in Adobe XD zu gestalten.<br></div></div>',bigImage:"portfolio/ferien_zuhause.png"},{name:"mobility emotion",image:"mobility_emotion.png",url:"https://xd.adobe.com/view/19330c47-4313-4174-b639-5e25fb4aa472-4c60/",html:'<br><strong>Wie könnte <span style="color:red;">mobility </span>noch weiter verbessert werden?</strong>\n            <br><br><p>Die Aufgabe lautete, neue Ideen für Mobility zu finden.\n            <br><br>Wie bin ich vorgegangen?\n            <br><br>Als erstes habe ich mich mit verschiedenen Kollegen ausgetauscht, welche zum Teil mobility-Nutzer sind, \n            andere haben mobility noch nie verwendet.\n            <br><br>Folgende Punkte sind am häufigsten genannt worden:\n            <ul><li>mehr Fokus auf elektrische Antriebe</li><li>Verbesserung bei der Auswahl des Autos</li><li>Wie kann verhindert werden, dass eine einzelne Person im Auto sitzt?</li></ul>\n            <br><br>Entsprechend habe ich mir zu diesen Punkten ein paar Gedanken gemacht und habe diese in einen kleinen Prototypen einfliessen lassen.</p>',bigImage:"portfolio/mobility_emotion.png"}]},{type:"single-text",title:"Contact",cols:3,text:"Biel / Bienne <br />tobias.hinderling@bluewin.ch",style:"light"},{type:"image",title:"Image",cols:3,height:250,images:[{url:"map_small.jpg",alt:"map"}],style:"light"},{type:"large-text",title:"Thats what they said...",cols:6,testimonials:[{text:'"Tobias agiert innerhalb eines Teams auf konstruktive, zielorientierte und erfrischende Art und Weise. Lacht viel, auch über sich, und vermag eine positive Zusammenarbeit etablieren."',author:"NewPlacement Academy"},{text:'"Tobias besitzt die Fähigkeit, sich innert kurzer Zeit in neue Technologien und Konzepte einzuarbeiten und findet dank seinem generellen Interesse an Technologien ständig neue und kreative Wege zur Problemlösung."',author:"SwissTXT AG"},{text:'"Wir schätzten Tobias als ein begeisterungsfähiges und engagiertes Teammitglied, das seine Aufgaben mit viel Leistungsbereitschaft anging."',author:"Ronja und Specht, Unterlagerleiter BuLa 08"}],style:"dark"}]}}},st=it,at=Object(p["a"])(st,r,l,!1,null,"0b742f72",null),rt=at.exports,lt={name:"App",components:{HelloWorld:rt},data:function(){return{}}},ot=lt,ct=(n("034f"),n("7496")),ut=Object(p["a"])(ot,s,a,!1,null,null,null),mt=ut.exports;b()(ut,{VApp:ct["a"]});var dt=n("8c4f");i["a"].use(dt["a"]);var gt=[],pt=new dt["a"]({routes:gt}),ht=pt,bt=n("2f62");i["a"].use(bt["a"]);var ft=new bt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),vt=n("f309");i["a"].use(vt["a"]);var yt=new vt["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:ht,store:ft,vuetify:yt,render:function(e){return e(mt)}}).$mount("#app")},"60b0":function(e,t,n){"use strict";var i=n("4418"),s=n.n(i);s.a},"635c":function(e,t,n){},"7b64":function(e,t,n){"use strict";var i=n("836f"),s=n.n(i);s.a},8221:function(e,t,n){"use strict";var i=n("3559"),s=n.n(i);s.a},"836f":function(e,t,n){},"85ec":function(e,t,n){},"8e83":function(e,t,n){"use strict";var i=n("ff18"),s=n.n(i);s.a},"9fa8":function(e,t,n){},afc2:function(e,t,n){"use strict";var i=n("df29"),s=n.n(i);s.a},cbfd:function(e,t,n){"use strict";var i=n("5659"),s=n.n(i);s.a},d426:function(e,t,n){"use strict";var i=n("d5b4"),s=n.n(i);s.a},d58c:function(e,t,n){"use strict";var i=n("9fa8"),s=n.n(i);s.a},d5b4:function(e,t,n){},d851:function(e,t,n){},d8bd:function(e,t,n){"use strict";var i=n("635c"),s=n.n(i);s.a},df29:function(e,t,n){},e174:function(e,t,n){},ed97:function(e,t,n){"use strict";var i=n("d851"),s=n.n(i);s.a},ff18:function(e,t,n){}});
//# sourceMappingURL=app.b4a5461a.js.map