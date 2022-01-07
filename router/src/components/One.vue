<template>

<h2>This is the second page</h2>
<p>Here will be viewing a text</p>
<button @click="click"> One </button>
</template>

<script>

export default {
  name: 'One',
  methods: {
    click(){
      this.$router.push('/two')
    }
  }
}
</script>

<style>

</style>