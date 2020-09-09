<template>
  <ul class="nav nav-pills">
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        exact
        to="/"
        tag="li"
    >
      Home
    </router-link>
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        to="/user"
        exact
        tag="li"
    >
      User
    </router-link>
<!--    Потрібно прописати оригінальний шлях to-->
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        to="/no-page"
        tag="li"
    >
      NO PAGE
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.my-active {
  background-color: green;
}
</style>


<!--const arr = ['/', '/user'];-->
<!--<ul>-->
<!--<li v-for="item in arr" :to="item">-->
<!--  -->
<!--</li>-->
<!--</ul>-->

