<template>
    <button @click="increment">добавить</button>
    <div>{{ count }}</div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
