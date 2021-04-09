<template>
  <div class="about">
    <div v-for="person of people" :key="person.name">
      <router-link :to="`/about/${person.name}`">
        {{ person.name }}
      </router-link>
        
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  methods: {

  },
  computed: {
    ...mapState(['people']),
    ...mapActions(['traer'])
  },
    created(){
    this.traer
  }
  
}
</script>
