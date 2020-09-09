<template>
  <div>
    <h1>Some user info</h1>
    <p>USER ID: {{$route.params.id}}</p>
    <router-link
        tag="button"
        :to="{name: 'UserEdit', params: {id: $route.params.id}, query: {item: 10, page: 1}}"
    >
      Edit User
    </router-link>
<!--    <router-link-->
<!--        tag="button"-->
<!--        :to="'/user/' + $route.params.id + '/edit/'"-->
<!--    >-->
<!--      Edit User-->
<!--    </router-link>-->
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    item: Object
  },
  beforeMount() {
    console.log(this.$route);
  }
}
</script>