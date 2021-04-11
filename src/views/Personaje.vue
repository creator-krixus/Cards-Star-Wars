<template>
    <div>
        <h1>{{ $route.params.name }}</h1>
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
        <div v-for="(persona, index) of personaje" :key="index">
            <h2 v-if="(persona.name === $route.params.name)">
                Peliculas en las que aparece:
                <!-- {{persona.films}} -->
                <ul v-for="(film, index) of films" :key="index">
                    <li v-if="(persona.films[index] == film.url)">
                        {{ film.title }}
                    </li>
                </ul> 
            </h2>
        </div>
        <div v-for="(persona, index) of personaje" :key="index">
            <h2 v-if="(persona.name === $route.params.name)">
                Vehiculos usados:
                {{ persona.vehicles }}
                <ul v-for="(vehicle, index) of vehicles" :key="index">
                    <li v-if="(persona.vehicles[index] == vehicle.url)">
                        {{ vehicle.title }}
                    </li>                    
                    
                </ul>    
            </h2>
        </div>        
        <div v-for="(persona, index) of personaje" :key="index">
            <h2 v-if="(persona.name === $route.params.name)">
                Naves espaciales
                <ul>{{ persona.starships }}</ul>    
            </h2>
        </div>        

    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            rutas:[
                "@/assets/images/Luke Skywalker.png"
            ],
            personaje: [],
            films: [],
            vehicles: [],
            starships: [],
            count: 0
        }
    },
    methods: {
            async getData(){
                try{
                    await axios.get(`https://swapi.dev/api/people/`)
                        .then(res => {
                            const data = res.data
                            this.personaje = data.results
                            /* console.log(this.personaje) */
                        })
                    await axios.get(`https://swapi.dev/api/films/`)
                        .then(res => {
                            const data = res.data
                            this.films = data.results
                            /* console.log(this.films) */
                        }) 
                    await axios.get(`https://swapi.dev/api/vehicles/`)
                        .then(res => {
                            const data = res.data
                            this.vehicles = data.results
                            console.log(this.vehicles)
                        })                                             
                }catch(error){
                    console.log(error)
                }
            }
        },
        created(){
            this.getData()
        }
}
</script>
<style scoped>
h2{
    font-size: 40px;
    color: white;
}
h2 ul{
    font-size: 25px;
    list-style: none
}
h1{
    color: white;
}
</style>