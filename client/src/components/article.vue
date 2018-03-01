<template>
  <div class="container">
    <b-card 
    :title="article.title">
      <b-card>
        <img :src="article.image" alt="harusnya gambar" @click="toseeArticle(article._id)">
      </b-card>
      oleh : {{article.author.username}}
    </b-card>
  </div>
</template>

<script>
export default {
 props : ['article'],
 methods:{
   toseeArticle(id){
     this.$router.push({name:'Article', params:{id:id}})
   }
 }
}
</script>

<style scoped>
  img{
    max-width: 200px;
    height: auto;
  }
  rapihin{
    margin:30px 0px 30px 0px
  }
</style>
