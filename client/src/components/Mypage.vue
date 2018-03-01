<template>
  <div class="container">
    <b-form-group>
      <form @submit.prevent="submitArticle()">
      <b-form-file v-model="formData.image" :state="Boolean(formData.image)" placeholder="Choose a file..."></b-form-file>
      <b-form-input v-model="formData.title" placeholder="title"></b-form-input>
      <b-form-input v-model="formData.category" placeholder="category"></b-form-input>
      <b-form-input v-model="formData.content" placeholder="content"></b-form-input>
      <b-button type="submit" variant="outline-success">Add Articles</b-button>
      </form>
    </b-form-group>
    <br>
    <h3>Do What Ever You Want</h3>
    <b-card-group deck>
      <mine v-for="(article,index) in myArticles" :key="index" :article="article"/>
    </b-card-group>
  </div>
</template>

<script>
import mine from './myOwn'
import {mapActions, mapState} from 'vuex'
export default {
  components: {mine},
  data () {
    return {
      formData: {
        image: '',
        title: '',
        category: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapState([
      'myArticles'
    ])
  },
  created () {
    this.getMyarticle()
  },
  methods: {
    ...mapActions([
      'addarticle',
      'getMyarticle'
    ]),
    submitArticle () {
      this.addarticle(this.formData).then(() => {
        this.reset()
        this.$router.push({name: 'Home'})
      })
    },
    reset () {
      this.formData.image = ''
      this.formData.title = ''
      this.formData.category = ''
      this.formData.content = ''
    }
  }
}
</script>

<style>
</style>
