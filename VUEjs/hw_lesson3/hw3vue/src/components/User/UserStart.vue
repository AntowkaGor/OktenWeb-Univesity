<template>
  <div>
    <ul>
      <router-link to="/user/1" tag="li">User 1</router-link>
      <router-link to="/user/2" tag="li">User 2</router-link>
      <router-link to="/user/3" tag="li">User 3</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserStart',
  data() {
    return {
      id: 22
    }
  }
}
</script>