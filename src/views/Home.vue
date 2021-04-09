<template>
  <div class="container">
      <div class="row align-items-start">
          <div v-for="(planet, index) of planets" :key="index">
            <div v-for="(person, index) of people" :key="index">
                <Card :person="person" :planet="planet"/> 
            </div> 
          </div>      
      </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
   Card
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['people','planets']),
    ...mapActions(['data','planet'])
  },
  created(){
    this.data,
    this.planet
  }
}
</script>
<style scoped>
.row{
  text-align: left;
}

</style>
