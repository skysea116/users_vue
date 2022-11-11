<template>
  <div id="app">
    <div class="container">
    <nav>
      <div class="mainNavCont">

        <div class="tab"><router-link to="/">Пользователи</router-link></div>
        <div class="tab"><router-link to="/search">Поиск</router-link></div>

      </div>

      <div class="tab"><router-link to="/info">Инфо</router-link></div>
      
    </nav>
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
.container {
  background-color: #8db5cc;
  border-radius: 40px;
  height: 98vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0 0 15px rgba(43, 43, 43, 0.342);
  font-size: 23px;
  padding: 25px 0;
  margin-bottom: 29px;
  margin-top: 20px;
  width: 95%;
}
.mainNavCont {
  display: flex;
  flex-direction: row;
  margin-left: 25px;
}
.tab {
  padding: 5px 30px;
}
.tab:first-child {
  border-radius: 40px 0 0 30px;
  border-right: 2px solid black;
}
.tab:last-child {
  margin-right: 25px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #3bb41d;
  box-shadow: 0 0 15px rgba(43, 43, 43, 0.342);
  padding: 10px 25px;
  border-radius: 30px;
}
</style>
