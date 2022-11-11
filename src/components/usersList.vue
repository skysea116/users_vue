<template>
     <div class="usersList">


          <div class="user " v-for="user in this.$store.state.users" :key="user.id">
               <div class="userMain">
                    <p> {{ user.name }} </p>
                    <button @click="isOpen === user.id ? isOpen = false : isOpen = user.id">+</button>
               </div>

               <div class="userInfo" v-if='isOpen === user.id'>
                    <p>Имя: {{user.name}}</p>
                    <p>Никнейм: {{user.username}}</p>
                    <p>Email: {{user.email}}</p>
               </div>
          </div>

     </div>
</template>


<script>
     import { mapActions } from 'vuex';

     export default {
          data() {
               return {
                    name: 'Имя Фамилин',
                    isOpen: false,
                    
               }
          },
          mounted() {
               //this.userInfo();
               this.GET_USERS_FROM_API()
          },
          methods: {
               ...mapActions([
                    'GET_USERS_FROM_API'
               ]),
              /* async userInfo() {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    const result = await response.json();

                    result.forEach(item=> { 
                         
                         this.users.push({
                              id: item.id, 
                              name: item.name,
                              username: item.username,
                              email: item.email,
                         })

                    });

                
               }*/
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
          background-color: white;
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
          font-weight: bold;
     }
</style>