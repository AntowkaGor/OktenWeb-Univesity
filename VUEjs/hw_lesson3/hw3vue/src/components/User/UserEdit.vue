<template>
  <div>
    <h1>User edit</h1>
    <p>id: {{$route.params.id}}</p>
    <p>Pagination: {{$route.query.item}} - {{$route.query.page}}</p>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  beforeMount() {
    console.log(this.$route.query);
  }
}
</script>