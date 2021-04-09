import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    planets: []
  },
  mutations: {
    setPeople(state, payload){
      state.people = payload
    },
    setPlanets(state, payload){
      state.planets = payload
    }
  },
  actions: {
    async data({commit}){
      try{
        await axios.get('https://swapi.dev/api/people')
          .then(res => {
            const data = res.data
            this.people = data
            commit('setPeople', data.results)
 /*            console.log(data)
            console.log(data.results) */
          })
      }catch(error){
        console.log("Error")
      }
    },
    async planet({commit}){
      try{
        await axios.get('https://swapi.dev/api/planets')
          .then(res => {
            const data = res.data
            this.planets = data.results
            commit('setPlanets', data.results)
            console.log(this.planets)
          })
      }catch(error){
        console.log("Error")
      }
    }
  },
  modules: {
  }
})
