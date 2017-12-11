import Vue from '@/lib/setup'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  user: {
    name: 'Vidar'
  }
}

const getters = {}

const actions = {}

const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
