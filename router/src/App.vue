<template>
<div class="grid">
  <div class="header">
    <ul class="list">
      <li class="el"> <router-link to="/">one</router-link> </li>
      <li class="el"> <router-link to="/two">two</router-link> </li>
      <li class="el"> <router-link to="/three">three</router-link> </li>
    </ul>
  </div>
  <div class="container">
    <h1>This is my the first application vue js</h1>
    <hr>
    <RouterView/>
  </div>
</div>

</template>


<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
*{
  margin: 0;
  padding: 0;
}
.grid{
  display: grid;
  grid-template-areas: "header container";
  grid-template-rows: repeat(1, 100vh);
  grid-auto-columns: auto 1fr;
}
.header{
  grid-area: header;
  height: 100%;
  width: 100px;
  background-color: white;
  box-shadow: 0 0 20px black;
}
.header .list{
  list-style-type: none;
  padding: 0;
  margin-top: 100px;
}
.header .list .el{
    font-size: 25px;
  font-weight: 700;
  margin: 30px auto;
}
.container{
  grid-area: container;
  padding-top: 20px;
}
.container h1{
  color: black;
  text-align: center;
}
hr{
  border: solid 1px black;
  margin: 10px auto;
  width: 50%;
}
a{
     color: dodgerblue;
  text-decoration: none;
}
a.router-link-active{
  color: orange;
  text-transform: uppercase;
}
</style>
