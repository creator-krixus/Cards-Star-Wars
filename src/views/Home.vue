<template>
  <div class="home">
    <Card />
    {{ people }}
    <button @click="data">LLamar</button>
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
    ...mapState(['people']),
    ...mapActions(['data'])
  }
}
</script>
