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
      text: "Software Developer",
      style: "light"
},
    {
      type: "image",
      title: "Image",
      cols: 3,
      images: [{url:"photo.png", alt:"profilbild tobias hinderling"}],
      height: "500",
      style:"light"
    },
    {
      type: "double-text",
      title: "Portrait",
      cols: 6,
      text1: `<p><b>Was macht gute Usability aus?</b></p>
      <p>Meine Passion ist es, umständliche Arbeitsabläufe zu vereinfachen und damit dem Kunden ein Lächeln zu entlocken. Der direkte und vor allem wiederholte Kontakt mit dem Kunden erachte ich als wegweisend für ein erfolgreiches Projekt.</p>`,
      text2: `<p>Meine Erfahrung als Software-Entwickler, Projektleiter und meine im August startende Ausbildung zum "Interation Desginer HF" helfen mir, die Bedürfnisse von Kunden, Projektleiter und Entwickler zu vereinen.</p>
      <p>Usability heisst: <b>"Finden statt Suchen"</b></p>`,
      style: "dark"
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
      type: "image",
      title: "Image",
      cols: 3,
      height:"300",
      images: [
        {url:"kajak.png", alt: "Kajak"},
        {url:"klettern.png", alt: "Climbing"},
        {url:"biken.png", alt: "MTB"}],
      style:"light"
    }, 
    {
      type: "single-text",
      title: "Interests",
      cols: 3,
      text: "Kajak<br/>Climbing<br/>MTB<br/>Pfadi (aktuell: Leitung Wasseraktivitäten im Bundeslager 2021)",
      style: "light"
    },
    {
      type: "large-text",
      title: "Thats what they said...",
      cols: 6,
      testimonials: [
        {
          text:`"Tobias agiert innerhalb eines Teams auf konstruktive, zielorientierte und erfrischende Art und Weise. Lacht viel, auch über sich, und vermag eine positive Zusammenarbeit etablieren."`, 
          author: "NewPlacement Academy"
        },
        {
          text:`"Tobias agiert innerhalb eines Teams auf konstruktive, zielorientierte und erfrischende Art und Weise. Lacht viel, auch über sich, und vermag eine positive Zusammenarbeit etablieren."`, 
          author: "NewPlacement Academy"
        }
      ],
      style: "dark"
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
      title: "Stations",
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
        }
      ]
    }
  ]
  }
    ),
  }
</script>

<style scoped>

</style>