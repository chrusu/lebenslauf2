<template>
    <div class="education">
        <div class="education-col">
            <div class="education-city">{{item.city}}</div>
            <div class="education-date">{{item.date}}</div>
        </div>
        <div class="education-col">
            <div class="education-school">{{item.school}}</div>
            <div class="education-separator">/</div>
            <div class="education-name">{{item.name}}</div>
        </div>
    </div>
</template>

<script>    
export default {
   name: 'Education',
  props: {
    item: Object
  }
}
</script>

<style scoped>
.education {
    margin-top: 2rem;
    color:var(--color-neutral);
    display:flex;
    flex-wrap: wrap;
    width:100%;
    position:relative;
    
}
.education-col {
    width:50%;
    display:flex;
    flex-wrap: wrap;
    position: relative;
}
.education-name {
    display: inline;
}

.education-separator {
    display:inline;
}

.education-school {
    display:inline;    
    font-weight: bold;
}

.education-city{
    font-weight: bold;
    width:40%;
}
.education-date{
    padding-right:3rem;
    width:60%;
    text-align: right;
}
.education-workitems {
    margin-top:1rem;
    width:100%;
    margin-bottom: 2rem;
}

.education-image{
    margin-top: 1rem;
    width:80%;
}

  .education-image img {
      width:100%;
  }
@media (max-width:768px){
  .education-col{
    width:100%;
  }

  .education-image {
      max-width:300px;
      width:100%;
  }

  .education-image img {
      width:100%;
  }
  .education-date {
      padding-right:0;
  }

  .education-school{
      display:inline-block;
      width: 40%;
  }

  .education-separator {
      display:none;
  }

  .education-name{
      display:inline-block;
      width: 60%;
      text-align: right;
  }

}

@media (max-width: 480px){
    .education-city{
        font-weight: bold;
        width:100%;
    }
    .education-date{
        width:100%;
        text-align: left;
        padding:0;
    }

      .education-school{
      width: 100%;
  }


  .education-name{
      width: 100%;
      text-align: left;
  }

}


/* Clearfix */
</style>