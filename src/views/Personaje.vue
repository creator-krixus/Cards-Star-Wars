<template>
    <div>
        <h1>Character name:<br>{{ $route.params.name }}</h1>
        
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
        <h2>Characteristics</h2><hr>

        <div v-for="(persona, index) of personaje" :key="index">

            <h2 v-if="(persona.name === $route.params.name)">
                <p>Gender: {{persona.gender}}</p>
                <p>Eye Color: {{persona.eye_color}}</p>
                <p>Hair color: {{persona.hair_color}}</p>
                <p>height: {{persona.height}} cms</p>
            </h2>
       
<!-- En esta parte del codigo muestro las peliculas en las cuales aparece el personaje 
llamado desde la home page -->                                                                                
        
            <h2 v-if="(persona.name === $route.params.name)">
                Films:
                <ul v-for="(film, episode_id) of films" :key="episode_id">
                    <li v-if="(persona.films[episode_id] == film.url)">
                        {{ film.title }}
                    </li>
                </ul>
            </h2>
     
<!-- Aqui se deberian de mostrar los vehiculos usaddos por los personajes -->        
       
            <h2 v-if="(persona.name === $route.params.name)">
                Vehicles:
                <p v-if="persona.vehicles == ''"> 
                    This character does not drive any vehicle
                </p>
                <p v-else>{{ carDriverOne }}<br>
                          {{ carDriverTwo }}            
                </p>  
            </h2>
        
<!-- En esta parte nos muestran las naves espaciales -->               
       
            <h2 v-if="(persona.name === $route.params.name)">
                Starships:
                <p v-if="persona.starships == ''">
                    This character does not drive any ships
                </p>
                <p v-else>
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
<style scoped>
h2{
    font-size: 40px;
    color: white;
    margin-bottom: 30px;
}
h2 ul {
    font-size: 25px;
    list-style: none
}
h1{
    color: white;
}
div{
    margin-bottom: 30px;
}
p{
    font-size: 25px;
}

</style>