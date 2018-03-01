<template>
  <div class="container">
    <b-card :title="oneArticle.title">
      <img :src="oneArticle.image" alt="harusnya gambar">
      <b-card>
         kategory : {{oneArticle.category}}
         <br>
        content : {{oneArticle.content}}
      </b-card>
    </b-card>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState([
    'oneArticle'
    ])
  },
  methods:{
    ...mapActions([
      'getOneArticle'
    ])
  },
  created(){
    this.getOneArticle(this.$route.params.id)
  }
}
</script>

<style>
img{
  max-width: 500px;
  height: auto;
}
</style>
