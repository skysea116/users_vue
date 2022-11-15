import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [], //массив пользователей
    id: '', //id пользователя, выбранного в поиске
  },


  getters: {
    USERS(state) { //геттер пользователей
      return state.users;
    },

    CLICKED_ID(state) { //геттер id
      return state.id;
    }
  },


  mutations: {
    SET_USERS_TO_STATE: (state, users) => { //мутация пользователей
      state.users = users.data;
    },

    SET_ID_OF_CLICKED_NAME_TO_STATE: (state, payload) => { //мутация id
      state.id = payload;
    }
  },


  actions: {
    GET_USERS_FROM_API({commit}) { //получение данных из API
       return axios('https://jsonplaceholder.typicode.com/users', {
        method: "GET"
       })
       .then((users) => {
        commit('SET_USERS_TO_STATE', users);
        return users;
       })
    }
  },

  
  modules: {
  }
})
