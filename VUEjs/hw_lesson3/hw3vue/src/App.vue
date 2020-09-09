<template>
  <div>
    <div>
     <h1>Router Lesson</h1>
     <Header/>
     <router-view/>
    </div>
     <hr>
      <h1>HTTP fire base</h1>
    <div>
      <label>Username</label>
      <input type="text" v-model="user.userName" > 
    </div>
     <div>
      <label>Email</label>
      <input type="email" v-model="user.email" >
    </div>    
    <button @click="submitData">Submit</button>
    <button @click="getUsers">Get Users</button>
    <hr>
    <ul>
      <li v-for="(us , i) in users" :key="i">
        {{us}}
      </li>
    </ul>
</template>

<script>

 import Header from "@/components/Header";

  export default {
    name: 'App',
    components:{
      Header
    },

    data(){
      return {
        us:{
          userName:'',
          email: '',
        },
        users: [],
      }
    },

    methods: {
      submitData(){
      this.$http.post('https://okten-vue-hw3.firebaseio.com/hwVue3.json', this.user);
      },

      getUsers(){
        this.$http.get('https://okten-vue-hw3.firebaseio.com/hwVue3.json')
        .then( (res) => {
          return res.json()
        }) 
        .then ( (res) => {
          Object.values(res).forEach(u => this.users.push(u));
        })
      },
    
    },

  }


</script>

<style>
  
</style>
