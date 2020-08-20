<template>
      <div class="cont">
        <Col v-for="row in data" :content="row" v-bind:key="row.key" />
    </div>
</template>

<script>
  import Col from './Col.vue';

  export default {
    name: 'HelloWorld',
  components: {
    Col,
  },
    data: () => (
{data:[

    {
      type: "name",
      cols: 3,
      firstname: "Tobias",
      lastname: "Hinderling",
      lead: "Junior Usability Engineer",
      text: "Dipl. Ing. Informatik",
      style: "light"
},
    {
      type: "image",
      title: "Image",
      cols: 3,
      images: [{url:"profile_small.jpg", alt:"profilbild tobias hinderling"}],
      height: 450,
      style:"light"
    },
    {
      type: "double-text",
      title: "Portrait",
      cols: 6,
      text1: `<p><b>Was macht gute Usability aus?</b></p>
      <p>Meine Passion ist es, umständliche Arbeitsabläufe zu vereinfachen und damit dem Kunden ein Lächeln zu entlocken.</p><p>Ich bin in der Lage, die Wünsche der Kunden mit ihren tatsächlichen Bedürfnissen abzugleichen und eine pragmatische und bezahlbare Lösung zu präsentieren..</p>`,
      text2: `<p>Meine Erfahrung als Software-Entwickler, Projektleiter und meine im August startende Ausbildung zum "Interation Desginer HF" helfen mir, die Bedürfnisse von Kunden, Projektleiter und Entwickler zu vereinen.</p>
      <p>Usability bedeutet für mich: <b>"Finden statt Suchen"</b></p>`,
      style: "dark"
    },
    {
      type: "single-text",
      title: "Soft Skills",
      cols: 3,
      text: "Pragmatic<br/>Teamplayer<br/>Analytical<br/>Open Minded",
      style: "light"
    },
{
      type: "image",
      title: "Image",
      cols: 3,
      height:280,
      images: [
        {url:"pragmatic2_small.jpg", alt: "pragmatic"},
        {url:"teamplayer_small.jpg", alt: "teamplayer"},
        {url:"outsidethebox.png", alt: "open minded"},
        {url:"analytical.jpg", alt: "analytical"}],
      style:"light"
    },
    {
      type: "skills",
      title: "Skills",
      cols: 6,
      style:"dark",
      items:[
        {name:"Usability Engineering", skills : [
          {name:"Prototyping", value: 4, image: "proto.png"},
          {name:"Usability<br />Testing", value: 3, image: "testing.png"},
          {name:"Requirements <br />Engineering", value: 4, image: "re.png"},
        ]},
        {name:"Development", skills : [
          {name:"Java Script", value: 5, image: "js.png"},
          {name:"CSS", value: 4, image: "css.png"},
          {name:"HTML", value: 4, image: "html.png"},
        ]}]
    },
    {
      type: "progress-list",
      title: "Languages",
      cols: 6,
      style:"light",
      items:[
        {name:"Swiss German", value: 100, image: "swiss.png"},
        {name:"German", value: 90, image: "german.png"},
        {name:"French", value: 70, image: "french.png"},
        {name:"English", value: 70, image: "english.png"}]
    },
    {
      type: "stations",
      title: "Werdegang",
      cols:6,
      style:"dark",
      items: [
        {
          date: "Nov 2012 - Nov 2017",
          name: "SwissTXT AG",
          image: "stxt.png",
          city: "Biel/Bienne",
          workitems: [
            "RE neue Livestreaming-Plattform",
            "UX-Konzept TV-App für lokale Fernsehbetreiber",
            "UX-Analyse Sport-Ticker für die Redaktion"
          ]
        },
        {
          date: "Juni 2011 - August 2012",
          name: "Biznet AG",
          image: "biznet.png",
          city: "Schönbühl",
          workitems: [
            "Analyse / RE",
            "Projektleitung",
            "Development ContentXXL"
          ]
        },
        {
          date: "Januar 2011 - März 2011",
          name: "Modan Software AG",
          image: "modan.png",
          city: "Kirchberg",
          workitems: [
            "Weiterentwicklung CRM",
            "Erweiterung bestehendes modan-CMS"
          ]
        },
        {
          date: "Mai 2007 - Dezember 2010",
          name: "Gassmann AG",
          image: "gassmann.png",
          city: "Biel / Bienne",
          workitems: [
            "Weiterentwicklung www.bielertagblatt.ch",
            "Neuentwicklung www.canal3.ch",
            "Neuentwicklung www.telebielingue.ch"
          ]
        }
      ]
    },
{
      type: "large-text",
      title: "Was andere über mich sagen...",
      cols: 6,
      testimonials: [
        {
          text:`"Tobias agiert innerhalb eines Teams auf konstruktive, zielorientierte und erfrischende Art und Weise. Lacht viel, auch über sich, und vermag eine positive Zusammenarbeit etablieren."`, 
          author: "NewPlacement Academy"
        },
        {
          text:`"Tobias besitzt die Fähigkeit, sich innert kurzer Zeit in neue Technologien und Konzepte einzuarbeiten und findet dank seinem generellen Interesse an Technologien ständig neue und kreative Wege zur Problemlösung."`, 
          author: "SwissTXT AG"
        },
        {
          text:`"Wir schätzten Tobias als ein begeisterungsfähiges und engagiertes Teammitglied, das seine Aufgaben mit viel Leistungsbereitschaft anging."`, 
          author: "Ronja und Specht, Unterlagerleiter BuLa 08"
        }
      ],
      style: "light"
    },
    {
      type: "education",
      title: "Ausbildungen",
      cols:6,
      style:"dark",
      items: [
        {
          date: "Feb 2017 - Jun 2017",
          name: "CAS Web Usability",
          school: "FFHS",
          city: "Regensdorf-Watt"
        },
        {
          date: "Okt 2003 - Jan 2007",
          name: "Dipl. Ing. Informatik",
          school: "BFH TI",
          city: "Biel / Bienne"
        },
        {
          date: "Aug 1999 - Jul 2003",
          name: "Lehre als Informatiker",
          school: "Swisscom AG",
          city: "Biel / Bienne"
        }
      ]
    },

    {
      type: "image",
      title: "Image",
      cols: 3,
      height:320,
      images: [
        {url:"kajak.png", alt: "Kajak"},
        {url:"klettern.png", alt: "Climbing"},
        {url:"biken.png", alt: "MTB"}],
      style:"light"
    }, 
    
    {
      type: "single-text",
      title: "Andere Interessen",
      cols: 3,
      text: `<p>In meiner Freizeit bin ich gerne in der Natur unterwegs. Dabei ist mir egal ob auf oder im Wasser, im Wald oder in den Bergen.</p>`,
      style: "light"
    },
    {
      type: "portfolio",
      title: "Portfolio",
      cols: 6,
      style:"dark",
      items:[
          {
            name:"Telesuisse", 
            image: "Telesuisse.png", 
            url: "https://xd.adobe.com/view/110fe794-f0dc-4e99-8a57-0d307507b12a-445c/",
            html: `<br /><p>HbbTV - Hybrid Broadband Broadcast Television<br><br>
            Was ist das genau?<br>
            <ul><li>Der Nachfolger des Teletext</li><li>Eine Webseite im Fernsehen</li><li>Mediathek</li><li>Radio</li><li>Internet</li></ul>
            <BR/>Für mehrere Regionale TV-Stationen haben wir ein Usability-Konzept erstellt, wie dieses neue Konstrukt HbbTV, 
            welches wie der Teletext direkt aus dem aktuellen Sender gestartet werden kann 
            (mit dem Roten Knopf auf der Fernbedienung)
            <br><br>Grundsätzlich ist es eine Web-App, welche über das Fernsehbild gelegt wird.
            <br>Ist der TV am Internet angeschlossen, kann man dann z.B. auf die Mediathek des Senders zugreifen, oder Radio hören.
            <br><br>Im Gegensatz zu einer normalen Webseite oder einer Mobile-App haben wir hier aber keine Maus und auch keine Finger zur Verfügung, 
            die Bedienung muss also mit einer klassischen Fernbedienung geschehen.
            <br><br>Ich durfte mich dem Usability-Konzept annehmen. Wie bin ich also vorgegangen?
            <br><br>Als erstes habe ich geschaut, was die Konkurrenz so macht, z.B. Netflix, Youtube, etc.
            <br><br>Darauf aufbauend habe ich dann einen ersten Prototypen entwickelt, 
            welchen ich dann immer wieder in Hallway-Tests mit verschiedensten Mitarbeitern getestet habe und mit Hilfe vom gewonnenen Feedback weiter verfeinert habe.</p>`,
            bigImage: "portfolio/telesuisse.png"
          },
          {
            name:"Ferien. Zuhause.", 
            image: "ferien_zuhause.png", 
            url: "https://xd.adobe.com/view/8ef97740-682b-43b3-b246-54e3dd5ca4ca-dbaa/",
            html: `<br><div><span><strong>Ferien. Zuhause.</strong> lässt dich dem Alltag entfliehen ohne in den Flieger zu sitzen!</span>
            <br><br>  <div><strong>Ferien. Zuhause.</strong> ist ein Vision.<br></div><ul role="list" class="list"><li>Fremde Kulturen entdecken</li>
            <li>Integration durch Kontakt</li><li>Freundschaften knüpfen</li></ul>
            <br/>
            <div>Ein Freund kam zu mir mit der Idee für ein Reisebüro der speziellen Art.
            <br><br>Die Idee: Statt um die halbe Welt zu Reisen um neue Kulturen kennenzulernen, könnte man auch einfach die verschiedenen Kulturen, 
            welche in einer Stadt wie Biel vorhanden sind, miteinander Verknüpfen.
            <br><br>Beispielsweise lässt man sich von einer Thailändischen Familie zu einem typischen Thailändischen Essen einladen, 
            eine Diashow schauen, und zum Schluss ev. sogar noch miteinander tanzen.
            <br>Alles kann, nichts muss.
            <br><br>Die Idee hat mich fasziniert und nachdem ich ein paar Skizzen gezeichnet habe, 
            habe ich mich entschieden einen kleinen Prototypen in Adobe XD zu gestalten.<br></div></div>`,
            bigImage: "portfolio/ferien_zuhause.png"},
          {
            name:"mobility emotion", 
            image: "mobility_emotion.png", 
            url: "https://xd.adobe.com/view/19330c47-4313-4174-b639-5e25fb4aa472-4c60/",
            html: `<br><strong>Wie könnte <span style="color:red;">mobility </span>noch weiter verbessert werden?</strong>
            <br><br><p>Die Aufgabe lautete, neue Ideen für Mobility zu finden.
            <br><br>Wie bin ich vorgegangen?
            <br><br>Als erstes habe ich mich mit verschiedenen Kollegen ausgetauscht, welche zum Teil mobility-Nutzer sind, 
            andere haben mobility noch nie verwendet.
            <br><br>Folgende Punkte sind am häufigsten genannt worden:
            <ul><li>mehr Fokus auf elektrische Antriebe</li><li>Verbesserung bei der Auswahl des Autos</li><li>Wie kann verhindert werden, dass eine einzelne Person im Auto sitzt?</li></ul>
            <br><br>Entsprechend habe ich mir zu diesen Punkten ein paar Gedanken gemacht und habe diese in einen kleinen Prototypen einfliessen lassen.</p>`,
            bigImage: "portfolio/mobility_emotion.png"}
        ]
    },
    {
      type: "single-text",
      title: "Kontakt",
      cols: 3,
      text: "Biel / Bienne <br />tobias.hinderling@bluewin.ch",
      style: "light"
    },
{
      type: "image",
      title: "Image",
      cols: 3,
      height:250,
      images: [
        {url:"map_small.jpg", alt: "map"}],
      style:"light"
    },

        
  ]
  }
    ),
  }
</script>

<style scoped>

</style>