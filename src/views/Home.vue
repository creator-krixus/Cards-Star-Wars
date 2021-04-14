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
      <div class="row align-items-start container ml-5">
            <div v-for="(person, index) of people" :key="index">
                <Card :person="person">  
                  <div>
                    <div v-if="person.name == 'Luke Skywalker'">
                        <img src="@/assets/images/Luke Skywalker.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'C-3PO'">
                        <img src="@/assets/images/c-3po.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'R2-D2'">
                        <img src="@/assets/images/r2-d2.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Darth Vader'">
                        <img src="@/assets/images/Dart Vader.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Leia Organa'">
                        <img src="@/assets/images/Leia Organa.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Owen Lars'">
                        <img src="@/assets/images/Owen Lars.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Beru Whitesun lars'">
                        <img src="@/assets/images/Beru.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'R5-D4'">
                        <img src="@/assets/images/r5-d4.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Biggs Darklighter'">
                        <img src="@/assets/images/Biggs.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Obi-Wan Kenobi'">
                        <img src="@/assets/images/Obi-wan.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Anakin Skywalker'">
                        <img src="@/assets/images/Anakin.png" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Wilhuff Tarkin'">
                        <img src="https://static.wikia.nocookie.net/starwarsrebels/images/4/44/Tarkin-HS.jpg/revision/latest/top-crop/width/360/height/450?cb=20150202194757" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Chewbacca'">
                        <img src="https://www.tonica.la/__export/1608834317696/sites/debate/img/2020/12/24/chewbacca-star-wars-legends.jpg_423682103.jpg" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Han Solo'">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVHfdp_yrEZf0UDIbeu6rKLVh61vTePH-81d8bnDG0fVC655eYGQUmoTYNCLCtNi1W0k&usqp=CAU" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Greedo'">
                        <img src="https://static.wikia.nocookie.net/esstarwars/images/c/c6/Greedo.jpg/revision/latest/top-crop/width/360/height/450?cb=20190807064733" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Jabba Desilijic Tiure'">
                        <img src="https://static.wikia.nocookie.net/whillopedia/images/4/44/Jabba.png/revision/latest?cb=20190818044301" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Wedge Antilles'">
                        <img src="https://www.cuartomundo.cl/wp-content/uploads/2015/12/Comandante_Wedge_Antilles-285x400.jpg" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Jek Tono Porkins'">
                        <img src="https://i.pinimg.com/originals/7a/e0/94/7ae094060e42dd3f34f49154232fba9b.jpg" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Yoda'">
                        <img src="data:image/jpeg;base64,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" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Palpatine'">
                        <img src="https://media.vandal.net/i/620x348/2-2021/2021281050635_3.jpg" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Boba Fett'">
                        <img src="data:image/jpeg;base64,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" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'IG-88'">
                        <img src="https://depor.com/resizer/yDmXAztH8TTBip3-KMBZ-HLHaog=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BHMYOYF365DWHMZS2LIARVEKUU.jpg" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Bossk'">
                        <img src="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-bossk-16x9-xl.jpg.adapt.crop1x1.320w.jpg" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Lando Calrissian'">
                        <img src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/03/star-wars-episodio-ix-lando-calrissian-spoiler.jpg?fit=1080%2C608&quality=80&ssl=1" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Lobot'">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/lobot_0ee16719.jpeg?region=173%2C150%2C1540%2C770&width=960" width="250" height="200">
                    </div>
                    <div v-if="person.name == 'Ackbar'">
                        <img src="https://static.wikia.nocookie.net/4126f785-e7fa-46ae-93c2-3be34e5d14e0" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Mon Mothma'">
                        <img src="https://i.pinimg.com/originals/a1/da/6b/a1da6bcbc9705ea0694c3c19b8a90ca5.jpg" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Arvel Crynyd'">
                        <img src="https://static.wikia.nocookie.net/esstarwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20180818202306" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Wicket Systri Warrick'">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/databank_wickettwwarrick_01_169_86d1210c.jpeg?region=0%2C3%2C1560%2C780&width=1536" width="250" height="200">
                    </div> 
                    <div v-if="person.name == 'Nien Nunb'">
                        <img src="https://i.kinja-img.com/gawker-media/image/upload/c_scale,fl_progressive,q_80,w_800/dwuccer1fxc1rbdn7fvc.jpg" width="250" height="200">
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    Home planet {{ planets[index].name }}
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
  border-radius: 18px;
}

</style>
