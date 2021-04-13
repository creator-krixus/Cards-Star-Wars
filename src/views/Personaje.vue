<template>
    <div>
        <h1>Nombre del personaje:<br>{{ $route.params.name }}</h1>
        
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
        
        <h2>Caracteristicas generales del personaje</h2><hr>

        <div v-for="(persona, index) of personaje" :key="index">

            <h2 v-if="(persona.name === $route.params.name)">
                <p>Genero: {{persona.gender}}</p>
                <p>Color de ojos: {{persona.eye_color}}</p>
                <p>Color del cabello: {{persona.hair_color}}</p>
                <p>Estatura: {{persona.height}} cms</p>
            </h2>
       
<!-- En esta parte del codigo muestro las peliculas en las cuales aparece el personaje 
llamado desde la home page -->                                                                                
        
            <h2 v-if="(persona.name === $route.params.name)">
                Peliculas en las que aparece:
                <ul v-for="(film, index) of films" :key="index">
                    <li v-if="(persona.films[index] == film.url)">
                        {{ film.title }}
                    </li>
                </ul> 
            </h2>
     
<!-- Aqui se deberian de mostrar los vehiculos usaddos por los personajes -->        
       
            <h2 v-if="(persona.name === $route.params.name)">
                Vehiculos usados:
                <p v-if="persona.vehicles == ''"> 
                    Este personaje no conduce ningun vehiculo
                </p>
                <p v-else>{{ persona.vehicles }}</p>
                <ul v-for="(vehicle, index) of vehicles" :key="index">
                    <li v-if="(persona.vehicles[index] == vehicles.url)">
                        {{ vehicles.name }}
                    </li>                    
                </ul>    
            </h2>
        
<!-- En esta parte nos muestran las naves espaciales -->               
       
            <h2 v-if="(persona.name === $route.params.name)">
                Naves espaciales
                <p v-if="persona.starships == ''">
                    Este personaje no conduce ninguna nave
                </p>
                <p v-else>{{ persona.starships }}</p>
                <ul v-for="(starship, index) of starships" :key="index">
                    <li>
                        {{ persona.starships }}
                    </li>
                </ul>    
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
            page: ''
    
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
   
                                        
                    await axios.get(`https://swapi.dev/api/films/`)
                        .then(res => {
                            const data = res.data
                            this.films = data.results
                            /* console.log(this.films) */
                        }) 
                    await axios.get(`https://swapi.dev/api/vehicles/`)
                        .then(res => {
                            const data = res.data
                            console.log(data)
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