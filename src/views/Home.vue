<template>
  <div class="container">
    <!-- Paginador de la home page este aparece en la parte superior  -->
    <button @click="changePage(page - 1)" class="p-2 mb-4">Prev</button>
        <button class="btn-show" @click="changePage(page - 1)">{{ page - 1 }}</button>
            <button class="btn-show">{{ page }}</button>
        <button class="btn-show" @click="changePage(page + 1)">{{ page + 1 }}</button>
    <button @click="changePage(page + 1)" class="p-2 mb-4">next</button>
<!-- En esta parte del codigo recorremos los datos traidos de la API y los pasamos
al componente card -->
      <div class="row align-items-start">
            <div v-for="(person, index) of people" :key="index">
                <Card :person="person">
                  <div>
                    {{ planets[index].name }}
                  </div>
                </Card>
            </div>
      </div>
    <!-- Paginador de la home page este aparece en la parte inferior  -->
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
/* Arreglo que se llena con los datos de los personajes traidos de la API */
      people: [],
/* Variables usadas para la paginacion */
      page: 1,
      pages: 20,
/* Arreglo que se llena con los datos de los planetas traidos de la API */
      planets: []
    }
  },
  methods: {
/* Peticiones hechas a la API */  
    async get_api(){
/* Constante creada para poder usar la paginacion ella sera llamada desde la URL
de la API para poder navegar entre las paginas */      
      const params = {
        page: this.page
      }
/* Peticiones a la API */
      try{
        await axios.get('https://swapi.dev/api/people/', { params })
          .then(res => {
            const data = res.data
            console.log(data)
            this.people = data.results
            console.log(this.people)
          })
        await axios.get('https://swapi.dev/api/planets/', { params })
          .then(res => {
            const resultado = res.data
            this.planets = resultado.results
            console.log(this.planets)
          })
      }catch(error){
        console.log(error)
      }
    },
    /* Metodo usado para navegar entre las paginas de la home page */
    changePage(page){
      this.page = (page <= 0 || page >= this.pages) ? this.page + 1 : page
      this.get_api()
    }

  },
  computed: {
    /* En esta parte estaba intentando usar la store pero aun no comprendo bien como
    se maneja  */
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
