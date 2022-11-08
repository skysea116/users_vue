<template>
  <div id="app">
    <div class="container">
      <usersList/>
    </div>
  </div>
</template>

<script>
import usersList from './components/usersList.vue'

export default {
  name: 'App',
  components: {
    usersList,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  padding: 20px;
  border-radius: 30px;
  width: 620px;
  height: 90vh;
}
</style>
