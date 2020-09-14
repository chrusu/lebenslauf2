<template>
    <div class="station">
        <div class="station-col">
            <div class="station-city">{{item.city}}</div>
            <div class="station-date">{{item.date}}</div>
            <div class="station-image"><img :src="item.image" :alt="item.name"></div>
        </div>
        <div class="station-col">
            <div class="station-name">{{item.name}}</div>
            <div class="station-workitems">
                <div v-for="(workitem, i) in item.workitems" :key="i" class="work-item">
                    <ul class="station-workitem">
                        <li>{{workitem}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'Station',
  props: {
    item: Object
  }
}
</script>

<style scoped>
.station {
    margin-top: 2rem;
    color:var(--color-neutral);
    display:flex;
    flex-wrap: wrap;
    width:100%;
    min-height:200px;
    position:relative;
    
}
.station-col {
    width:50%;
    display:flex;
    flex-wrap: wrap;
    position: relative;
}
.station-name {
    font-weight: bold;
    width:100%;
}

.station-city{
    font-weight: bold;
    width:30%;
}
.station-date{
    padding-right:3rem;
    width:70%;
    text-align: right;
}
.station-workitems {
    margin-top:1rem;
    width:100%;
    margin-bottom: 2rem;
}

.station-image{
    margin-top: 1rem;
    width:70%;
}

  .station-image img {
      width:100%;
  }
@media (max-width:768px){
  .station-col{
    width:100%;
  }
  .station-name {
      margin-top: 0.8rem;
  }
  .station-image {
      max-width:300px;
      width:100%;
  }

  .station-image img {
      width:100%;
  }
  .station-date {
      padding-right:0;
  }
}

@media (max-width: 480px){
    .station-city{
        font-weight: bold;
        width:100%;
    }
    .station-date{
        width:100%;
        text-align: left;
        padding:0;
    }
}


/* Clearfix */
</style>