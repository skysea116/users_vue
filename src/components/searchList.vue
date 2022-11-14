<template>
     <div class="serachBar">
          <input v-model="query" placeholder="Поиск пользователей">
          <div class="li" v-for="(item, index) in computedList" v-bind:key="item.name">
               <li
               v-bind:data-index="index"
               v-show="query !== ''"
               v-html="toHilight(item.name)"
          ></li>
               <a :href="'http://'+ item.website" target="_blank" @click="toClean">{{item.website}}</a>

          </div>
     </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
     data() {
          return {
               query: "",   
          }
     },
     mounted() {
          this.GET_USERS_FROM_API()
     },

     computed: {
          computedList: function () {
               var vm = this;
               let res = this.$store.state.users.filter(function (item){
                    if(vm.query.length >= 3) {
                         let result = item.name.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
                         return result;
                    }
               });
               return res
          }
     },

     methods: {
          ...mapActions([
               'GET_USERS_FROM_API',
          ]),

          toClean() {
               this.query = ''
          },
          toHilight(current) {
               let reg = new RegExp(this.query, "i")
               return current.replace(reg, '<b class="hilight">'+this.query+'</b>')
          }
     }
}

</script>

<style>
     .hilight {
          background-color: yellow;
     }
     .hilight::first-letter {
          text-transform: uppercase !important;
     }
     input {
          border-radius: 30px;
          border: none;
          padding: 10px 17px;
          width: 500px;
          font-size: 24px;
          box-shadow: 0 0 11px rgba(122, 122, 122, 0.342);
          margin-top: 20px;
          margin-bottom: 10px;
     }

     input:focus {
          outline: 3px solid #3bb41d;
     }
     .li {
          display: flex;
          justify-content: space-between;
          background-color: white;
          border-radius: 30px;
          box-shadow: 0 0 11px rgba(122, 122, 122, 0.342);
          padding: 5px 17px;
          list-style: none;
          text-align: left;
          font-size: 18px;
          margin-top: 7px;

     }
</style>