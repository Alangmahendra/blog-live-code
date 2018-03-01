<template>
  <div class="container">
    <onearticle v-for="(article,index) in articles" :key="index" :article="article" />
  </div>
</template>

<script>
import onearticle from './article'
import {mapState,mapActions} from 'vuex'
export default {
  components: {
    onearticle
  },
  computed:{
    ...mapState([
      'articles'
    ])
  },
  created(){
    this.getAllarticles()
  },
  methods:{
    ...mapActions([
      'getAllarticles'
    ])
  }
}
</script>

<style>
 rapihin{
    margin:30px 0px 30px 0px
  }
</style>
