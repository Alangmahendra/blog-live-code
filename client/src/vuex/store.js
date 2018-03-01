import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL:'http://localhost:3000/api'
})

Vue.use(Vuex)

const state = {

}

const actions = {

}

const mutations = {

}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store