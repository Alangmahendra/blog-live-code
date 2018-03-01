<template>
  <div class="container">
    <b-card 
    :title="article.title">
      <b-card>
        <img :src="article.image" alt="harusnya gambar">
      </b-card>
      oleh : {{article.author.username}}
    </b-card>
  </div>
</template>

<script>
export default {
 props : ['article']
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
