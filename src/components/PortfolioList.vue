<template>
<div>
  <h2 >{{title}}</h2>
  <div  class="portfolios">
    <div v-for="(item, i) in items" :key="i" class="portfolio-item">
          <Portfolio :portfolio="item" />
        </div>

  </div>
</div>
</template>

<script>
import Portfolio from './Portfolio'

export default {
  name: 'PortfolioList',
  components: {
    Portfolio
  },
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
.portfolios {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  color: var(--color-neutral);
}

.portfolio-set-name {
  width:100%;
}


.portfolio-item {
  width:33%;
  text-align:center;
}


@media (max-width:768px){
    .portfolio-item {
      width:100%;
        padding-left: 0;
    }
}

@media (max-width:400px){
    .portfolio-item {
      
        padding-left: 0;
        font-size: smaller;
    }
}
</style>