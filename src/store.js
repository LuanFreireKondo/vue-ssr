import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Assume we have a universal API that returns Promises
// and ignore the implementation details
import api from './api'

export function createStore () {
  return new Vuex.Store({
    state: {
      status: '',
      users: [],
    },

    mutations: {
      status: (state, status) => state.status = status,
      setUsers: (state, users) => state.users = users,
    },

    actions: {
      fetchUsers (context) {
        context.commit('status', 'loading...')

        return api.getUsers().then(response => {
          context.commit('status', 'done! :)')
          context.commit('setUsers', response.data)
        })
      },
    },
    
    getters: {
      status: state => state.status,
      allUsers: state => state.users,
    }
  })
}
