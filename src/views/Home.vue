<template>
  <div class="container">
    <button @click="changePage(page - 1)" class="p-2 mb-4">Prev</button>
        <button class="btn-show" @click="changePage(page - 1)">{{ page - 1 }}</button>
            <button class="btn-show">{{ page }}</button>
        <button class="btn-show" @click="changePage(page + 1)">{{ page + 1 }}</button>
    <button @click="changePage(page + 1)" class="p-2 mb-4">next</button>

      <div class="row align-items-start">
            <div v-for="(person, index) of people" :key="index">
                <Card :person="person" />
            </div>
      </div>

    <button @click="changePage(page - 1)" class="p-2 mb-4">Prev</button>
        <button class="btn-show" @click="changePage(page - 1)">{{ page - 1 }}</button>
            <button class="btn-show">{{ page }}</button>
        <button class="btn-show" @click="changePage(page + 1)">{{ page + 1 }}</button>
    <button @click="changePage(page + 1)" class="p-2 mb-4">next</button>  
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card'
/* import { mapState, mapActions } from 'vuex' */

export default {
  name: 'Home',
  components: {
   Card
  },
  data() {
    return {
      people: [],
      page: 1,
      pages: 8
    }
  },
  methods: {
    async get_api(){
      const params = {
        page: this.page
      }
      try{
        await axios.get('https://swapi.dev/api/people', { params })
          .then(res => {
            const data = res.data
            this.people = data.results
            console.log(data)
          })

      }catch(error){
        console.log("Error")
      }
    },
    changePage(page){
      this.page = (page <= 0 || page >= this.pages) ? this.page + 1 : page
      this.get_api()
    }

  },
  computed: {
/*     ...mapState(['people','planets']),
    ...mapActions(['traer','planet']) */
  },
  created(){
/*     this.traer,
    this.planet, */
    this.get_api()
  }
}
</script>
<style scoped>
.btn-show{
  border-radius: 50%;
  margin-right: 3px;
  margin-left: 3px;
}
button{
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 15px;
}

</style>
