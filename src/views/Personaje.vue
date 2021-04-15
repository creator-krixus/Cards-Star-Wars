<template>
    <div>
        <h1 class="title-header">Character name:<br>{{ $route.params.name }}</h1>
        
<!-- Divs usados para mostrar las imagenes de cada uno de los 10 primeros personajes 
de la home page solo tienen imagen los primeros 10 -->

        <div v-if="$route.params.name == 'Luke Skywalker'">
            <img src="@/assets/images/Luke Skywalker.png" width="300" height="250">
        </div>   
        <div v-if="$route.params.name == 'C-3PO'">
            <img src="@/assets/images/c-3po.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'R2-D2'">
            <img src="@/assets/images/r2-d2.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'Darth Vader'">
            <img src="@/assets/images/Dart Vader.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'Leia Organa'">
            <img src="@/assets/images/Leia Organa.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'Owen Lars'">
            <img src="@/assets/images/Owen Lars.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'Beru Whitesun lars'">
            <img src="@/assets/images/Beru.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'R5-D4'">
            <img src="@/assets/images/r5-d4.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'Biggs Darklighter'">
            <img src="@/assets/images/Biggs.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'Obi-Wan Kenobi'">
            <img src="@/assets/images/Obi-wan.png" width="300" height="250">
        </div>
        <div v-if="$route.params.name == 'Anakin Skywalker'">
            <img src="@/assets/images/Anakin.png" width="300" height="250">
        </div>        
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Anakin Skywalker'" @click="changePage(page + 1)">Show data</button>
        </div>
                    <div v-if="$route.params.name == 'Wilhuff Tarkin'">
                        <img src="https://static.wikia.nocookie.net/starwarsrebels/images/4/44/Tarkin-HS.jpg/revision/latest/top-crop/width/360/height/450?cb=20150202194757" width="250" height="200">
                    </div>
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Wilhuff Tarkin'" @click="changePage(page + 1)">Show data</button>
        </div>
                    <div v-if="$route.params.name == 'Chewbacca'">
                        <img src="https://www.tonica.la/__export/1608834317696/sites/debate/img/2020/12/24/chewbacca-star-wars-legends.jpg_423682103.jpg" width="250" height="200">
                    </div>                                 
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Chewbacca'" @click="changePage(page + 1)">Show data</button>
        </div>
                    <div v-if="$route.params.name == 'Han Solo'">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVHfdp_yrEZf0UDIbeu6rKLVh61vTePH-81d8bnDG0fVC655eYGQUmoTYNCLCtNi1W0k&usqp=CAU" width="250" height="200">
                    </div>
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Han Solo'" @click="changePage(page + 1)">Show data</button>
        </div>  
                    <div v-if="$route.params.name == 'Greedo'">
                        <img src="https://static.wikia.nocookie.net/esstarwars/images/c/c6/Greedo.jpg/revision/latest/top-crop/width/360/height/450?cb=20190807064733" width="250" height="200">
                    </div> 
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Greedo'" @click="changePage(page + 1)">Show data</button>
        </div>
                    <div v-if="$route.params.name == 'Jabba Desilijic Tiure'">
                        <img src="https://static.wikia.nocookie.net/whillopedia/images/4/44/Jabba.png/revision/latest?cb=20190818044301" width="250" height="200">
                    </div> 
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Jabba Desilijic Tiure'" @click="changePage(page + 1)">Show data</button>
        </div>
                    <div v-if="$route.params.name == 'Wedge Antilles'">
                        <img src="https://www.cuartomundo.cl/wp-content/uploads/2015/12/Comandante_Wedge_Antilles-285x400.jpg" width="250" height="200">
                    </div>
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Wedge Antilles'" @click="changePage(page + 1)">Show data</button>
        </div>    
                    <div v-if="$route.params.name == 'Jek Tono Porkins'">
                        <img src="https://i.pinimg.com/originals/7a/e0/94/7ae094060e42dd3f34f49154232fba9b.jpg" width="250" height="200">
                    </div> 
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Jek Tono Porkins'" @click="changePage(page + 1)">Show data</button>
        </div> 
                    <div v-if="$route.params.name == 'Yoda'">
                        <img src="data:image/jpeg;base64,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" width="250" height="200">
                    </div> 
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Yoda'" @click="changePage(page + 1)">Show data</button>
        </div>  
                    <div v-if="$route.params.name == 'Palpatine'">
                        <img src="https://media.vandal.net/i/620x348/2-2021/2021281050635_3.jpg" width="250" height="200">
                    </div>
        <div v-if="page === 1"> 
            <button v-if="$route.params.name == 'Palpatine'" @click="changePage(page + 1)">Show data</button>
        </div>                                                                                                                                                                                          
        <h2 class="subtitle">Characteristics</h2><hr>

        <div v-for="(persona, index) of personaje" :key="index">

            <h2 v-if="(persona.name === $route.params.name)" class="subtitle">
                <p class="text">Gender: {{persona.gender}}</p>
                <p class="text">Eye Color: {{persona.eye_color}}</p>
                <p class="text">Hair color: {{persona.hair_color}}</p>
                <p class="text">height: {{persona.height}} cms</p>
            </h2>
       
<!-- En esta parte del codigo muestro las peliculas en las cuales aparece el personaje 
llamado desde la home page -->                                                                                
        
            <h2 v-if="(persona.name === $route.params.name)" class="subtitle">
                Films:
                <ul v-for="(film, episode_id) of films" :key="episode_id" class="list">
                    <li v-if="(persona.films[episode_id] == film.url)">
                        {{ film.title }}
                    </li>
                </ul>
            </h2>
     
<!-- Aqui se deberian de mostrar los vehiculos usaddos por los personajes -->        
       
            <h2 v-if="(persona.name === $route.params.name)" class="subtitle">
                Vehicles:
                <p v-if="persona.vehicles == ''" class="text"> 
                    This character does not drive any vehicle
                </p>
                <p class="text" v-else>{{ carDriverOne }}<br>
                          {{ carDriverTwo }}            
                </p>  
            </h2>
        
<!-- En esta parte nos muestran las naves espaciales -->               
       
            <h2 v-if="(persona.name === $route.params.name)" class="subtitle">
                Starships:
                <p v-if="persona.starships == ''" class="text">
                    This character does not drive any ships
                </p>
                <p v-else class="text">
                    <!-- {{ persona.starships }}<br> -->
                    {{ starshipDriveOne }}<br>
                    {{ starshipDriveTwo }}<br>
                    {{ starshipDriveThree }}<br>
                    {{ starshipDriveFour }}<br>
                    {{ starshipDriveFive }}<br>
                    {{ starshipDriveSix }}

                </p>
    
            </h2>

        </div>        
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            personaje: [],
            films: [],
            vehicles: [],
            starships: [],
            page: 1,
            pages: 3,
            carOne: null,
            carTwo: null,
            carDriverOne: null,
            carDriverTwo: null,

            starshipOne: null,
            starshipTwo: null,
            starshipThree: null,
            starshipFour: null,
            starshipFive: null,
            starshipSix: null,

            starshipDriveOne: null,
            starshipDriveTwo: null,
            starshipDriveThree: null,
            starshipDriveFour: null,
            starshipDriveFive: null,
            starshipDriveSix: null

    
        }
    },
    methods: {
            async getData(){
                const params = {
                    page: this.page
                } 
              
                try{
                    await axios.get(`https://swapi.dev/api/people/`,{params})
                        .then(res => {
                            const data = res.data
                            console.log(data)
                            this.personaje = data.results
                            console.log(this.personaje) 
                        })
// Iterador usado para capturar cada una de las direcciones http que me regresa el arrglo de
// vehiculos y asi poderlos pasar dinamicamente al llamado de la API y traer sus datos y
// poderlos mostrar en pantalla, solo muestro 2 vehiculos.

                     for (let i=0; i<this.personaje.length; i++){
                        if (this.personaje[i].name == `${this.$route.params.name}`){
                            this.carOne = this.personaje[i].vehicles[0],
                            this.carTwo = this.personaje[i].vehicles[1]
                        }  
                    } 
                    for (let i=0; i<this.personaje.length; i++){
                        if (this.personaje[i].name == `${this.$route.params.name}`){
                            this.starshipOne = this.personaje[i].starships[0],
                            this.starshipTwo = this.personaje[i].starships[1],
                            this.starshipThree = this.personaje[i].starships[2],
                            this.starshipFour = this.personaje[i].starships[3],
                            this.starshipFive = this.personaje[i].starships[4],
                            this.starshipSix = this.personaje[i].starships[5] 
                        }  
                    }                    
                     await axios.get(`${this.carOne}`)
                        .then(res => {
                            const data = res.data
                            console.log(data.name)
                            this.carDriverOne = data.name
                        })
                     await axios.get(`${this.carTwo}`)
                        .then(res => {
                            const data = res.data
                            console.log(data.name)
                            this.carDriverTwo = data.name
                        })
                    await axios.get(`${this.starshipOne}`)
                        .then(res => {
                            const data = res.data
                            console.log(data.name)
                            this.starshipDriveOne = (data.name)
                        })
                    await axios.get(`${this.starshipTwo}`)
                        .then(res => {
                            const data = res.data
                            console.log(data.name)
                            this.starshipDriveTwo = (data.name)
                        }) 
/*                    await axios.get(`${this.starshipThree}`)
                        .then(res => {
                            const data = res.data
                            console.log(data.name)
                            this.starshipDriveThree = (data.name)
                        }) 
                    await axios.get(`${this.starshipFour}`)
                        .then(res => {
                            const data = res.data
                            this.starshipDriveFour = (data.name)
                        })
                    await axios.get(`${this.starshipFive}`)
                        .then(res => {
                            const data = res.data
                            this.starshipDriveFive = (data.name)
                        })
                    await axios.get(`${this.starshipSix}`)
                        .then(res => {
                            const data = res.data
                            this.starshipDriveSix = (data.name)
                        })   */
                                                                                                                                                
/*                       await axios.get(`https://swapi.dev/api/films/`)
                        .then(res => {
                            const data = res.data
                            this.films = data.results
                            console.log(this.films)
                        }) */ 
                                        
                }catch(error){
                    console.log(error)
                }
            },
            async getFilms(){
                try {
                    await axios.get(`https://swapi.dev/api/films/`)
                        .then(res => {
                            const data = res.data
                            this.films = data.results
                            console.log(this.films)
                        })                    
                    
                } catch (error) {
                    console.log(error)
                }
            },
            changePage(page){
            this.page = (page <= 0 || page >= this.pages) ? this.page + 1 : page
            this.getData()
            }
        },
        created(){
            this.getData(),
            this.getFilms()
            
            
        }
}
</script>
<style scoped lang="scss">
@use 'styles/variables';

.subtitle{
    font-size: variables.$font-size-title;
    color: variables.$color-router;
    margin-bottom: variables.$margin-b;

   &.list{
        font-size: variables.$font-size-text;
        list-style: none
    }
}
.title-header{
    color: variables.$color-router;
}
// A este contenedor no le puse clase por que son muchos y se me olvido ponerla desde el primero
div{
    margin-bottom: variables.$margin-b;
}
.text{
    font-size: variables.$font-size-text;
}
button{
    background: blue;
    border-radius: 15px;
    width: 140px;
    height: 50px;
}

</style>