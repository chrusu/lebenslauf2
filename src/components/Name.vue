<template>
<div>
          <h1>{{firstname}}</h1>
      <h1>{{lastname}}</h1>
        <div class="subtitle">
        <h3>{{lead}}</h3>
        <h3>{{text}}</h3>
        </div>
</div>
</template>

<script>
  export default {
    name: "Name",
    props: {    
        firstname: String,
        lastname: String,
        lead: String,
        text: String
    }
  }
</script>