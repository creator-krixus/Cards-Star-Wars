import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
  },
  actions: {
    async data(){
      try{
        await axios.get('https://swapi.dev/api/people')
          .then(res => {
            const data = res.data
            this.people = data
            console.log(data.results)
          })
      }catch(error){
        console.log("Error")
      }
    }
  },
  modules: {
  }
})
