<template>
     <div class="usersList">


          <div class="user " v-for="user in this.$store.state.users" :key="user.id">
               <div class="userMain">
                    <p> {{ user.name }} </p>
                    <button @click="toOpen(user.id)">
                         <span v-if="isOpen !== user.id ">+</span>
                         <span v-else>-</span>
                    </button>
               </div>

               <div class="userInfo" v-if='isOpen === user.id'>
                    <p>Имя: <span>{{ user.name }}</span> </p>
                    <p>Никнейм: <span> {{ user.username }}</span> </p>
                    <p>Email: <span> {{ user.email }}</span> </p>
               </div>
          </div>

     </div>
</template>


<script>
     import { mapActions } from 'vuex';

     export default {
          data() {
               return {
                    isOpen: false, //видимость подробных данных о пользователе
               }
          },
          mounted() {
               this.GET_USERS_FROM_API() //вызов функции получения данных о пользователях из API
               this.toOpen(this.$store.getters.CLICKED_ID)
          },
          methods: {
               ...mapActions([ //получние функции из хранилища
                    'GET_USERS_FROM_API' 
               ]),
               toOpen(id) {  //открытие подробных данных о пользователе 
                    this.isOpen === id ? this.isOpen = false : this.isOpen = id
               }
          },

     }
</script>


<style>
     .usersList {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;

          padding: 20px 0;
          transition: all 0.9s;
     }
     .userMain {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 520px;
          box-shadow: 0 0 11px rgba(122, 122, 122, 0.342);
          border-radius: 20px;
          padding: 8px 15px;
          background-color: white;
          margin: 11px 21px 11px 0;
          font-weight: bold;
          font-size: 21px;
     }
     button {
          border-radius: 30px;
          background-color: white;
          box-shadow: 0 0 10px rgba(46, 46, 46, 0.342);
          border: none;
          cursor: pointer;
          font-size: 25px;
          width: 40px;
          height: 40px;
          font-weight: bold;
          transition: all 0.2s;
     }
     button:hover {
          background-color: rgb(236, 236, 236);
          transition: all 0.2s;
     }
     .userInfo {
          width: 520px;
          box-shadow: 0 0 11px rgba(122, 122, 122, 0.342);
          border-radius: 20px;
          background-color: rgb(228, 228, 228);
          padding: 15px;
          transition: all ease 3s;
     }
     .userInfo p {
          display: inline-block;
          padding: 7px;
          margin: 5px;
          border-radius: 10px;
          box-shadow: 0 0 11px rgba(122, 122, 122, 0.342);
          color: rgb(88, 88, 88);
          background-color: white;
          font-style: italic;
     }
     .userInfo p span {
          font-style: normal;
          font-weight: bold;
     }
</style>