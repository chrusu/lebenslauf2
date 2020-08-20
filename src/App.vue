<template>
<v-app>
      <HelloWorld/>
</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
 /* === GLOBAL === */

body{
    margin:0;
    padding:0;
    font-family: mr-eaves-modern, Lato, 'Helvetica Neue', Arial, sans-serif;
    font-size: 20px;
    --color-dark: hsl(0, 0%, 10%);
    --color-light: hsl(24, 73%, 45%);
    --color-neutral: #BEBEBE;
    --padding: 40px;

    background-color: var(--color-neutral);
}

* {
    box-sizing: border-box;
    font-family: mr-eaves-modern, sans-serif;
    font-style: normal;
}

/* === GENERELLES */


/* === GRID-SYSTEM === */

.cont {
    width: 80%;
    max-width:900px;
    margin: 0 auto;
    display:flex;
    flex-wrap: wrap;
    width:100%;
    min-height:200px;
    position:relative;
}

.cont [class*='column-']{
      padding: var(--padding);
    position:relative;
}

.cont .text, .cont .name {
  text-align: left;
  position:relative;
}

.cont .image {
  padding:0;
}

.cont .name h1 {
  text-align: left;
  font-family: Mr Eaves San OT;
  font-size: 4rem;
  font-weight: Bold;
  letter-spacing: 0px;
  line-height: 5.2rem;
  color: #BEBEBE;
  text-transform: uppercase;
  opacity: 1;
  margin:0;
}

h1::first-letter{
  font-size: 5.2rem;
}

.cont h2 {
  margin:0;
  margin-bottom: 0.5em;
  font-size:2rem;
}

.cont h3 {
  margin:0;
  font-size:1.6rem;
}

h1, h2, h3 {
  text-transform: uppercase;
}

h2::first-letter{
  font-size: 2.5rem;
}

h3::first-letter{
  font-size: 2rem;
}

.cont .name {
  min-height:400px;
}

.cont .name h2 {
  margin:0;
  color: var(--color-dark);
  font-weight: 900;
}

.cont .name .subtitle {
  position:absolute;
  bottom: var(--padding);
}

.cont .light {
  background-color: var(--color-light);
  color: var(--color-dark);
}

.cont .dark {
  background-color:var(--color-dark);
  color: var(--color-light);
}

.cont p{
    padding:0;
    margin:0;
    margin-bottom:1rem;
    font-weight: 400;
}

.cont ul{
  margin: 0;
}


.cont .column-1 {
    width: 16.666%;
}
.cont .column-2 {
    width:33.33%
}
.cont .column-3 {
    width: 50%;
}
.cont .column-6 {
    width:100%;
}

@media (max-width:1024px){


    .cont .column-1{
        width: 33.33%;
    }
    .cont .name h1 {
      font-size: 7vw;
      line-height: 8vw;
    }
h1::first-letter{
  font-size: 8vw;
}


}

@media (max-width:768px){
    .cont {
        width:100%;
    }
    .cont .column-1{
        width: 50%;
    }
    .cont .column-2 {
        width: 100%;
    }
    .cont .column-3 {
        width: 100%;
    }
    .cont .name h1 {
    font-size: 12vw;
    line-height: 15vw;
}
h1::first-letter{
  font-size: 15vw;
}
}

@media (max-width:480px){
    .cont .column-1{
        width: 100%;
    }
    .cont .name h1 {
      font-size: 12vw;
      line-height: 15vw;
    }

    .cont .name {
      min-height: 320px;
    }

    h1::first-letter{
      font-size: 15vw;
    }

        .cont h2 {
      margin:0;
      margin-bottom: 0.5em;
      font-size:1.5rem;
    }

    .cont h3 {
      margin:0;
      font-size:1.3rem;
    }

    h2::first-letter{
      font-size: 1.9rem;
    }

    h3::first-letter{
      font-size: 1.6rem;
    }

}

.cont div .right {
  float:right;

}

.cont div .left {
  float:left;
}



/*
480 Pixel iPhone Querformat
768 Pixel iPad Hochformat
1024 Pixel iPad Querformat
*/

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


/* === CSS GRID === */

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.left_0 {
  grid-column: 1;
  grid-row: 1;
}
.left_1 { 
  grid-column: 1;
  grid-row: 2;
}
.left_2 {
  grid-column: 1;
  grid-row: 3;
}
.right_0 {
  grid-column: 2;
  grid-row: 1;
}
.right_1 {
  grid-column: 2;
  grid-row: 2;
}
.right_2 {
  grid-column: 2;
  grid-row: 3;
}
</style>