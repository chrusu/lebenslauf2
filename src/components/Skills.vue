<template>
<div>
            <h2 >{{title}}</h2>
    <div v-for="(item, i) in items" :key="i">
        <skill :item="item" />
    </div>
</div>
</template>

<script>
import Skill from './Skill.vue'

export default {
  name: 'SkillList',
  components: {
    Skill
  },
  props: {
    title: String,
    items: Array
  }
}
</script>

