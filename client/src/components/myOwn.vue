<template>
    <div>
    <b-card
            style="max-width: 15rem"
            :img-src="article.image"
            img-alt="ceritanya"
            img-top
             class="mb-2">
            <h4 slot="header">{{article.title}}</h4>
        <b-button-group class="">
          <b-button variant="danger" @click="deleteArticle(article._id)">delete</b-button>
          <b-button variant="info" @click="toUpdate(article._id)">update</b-button>
        </b-button-group>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['article'],
  methods: {
    ...mapActions([
      'deleteArticle'
    ]),
    toUpdate (id) {
      this.$router.push({name: 'Update', params: {id: id}})
    }
  }
}
</script>

<style>

</style>
