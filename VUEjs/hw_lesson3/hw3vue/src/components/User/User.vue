<template>
  <div>
    <h1>User page</h1>
    <button @click="navigateToHome">GO TO HOME</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      id: ''
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>