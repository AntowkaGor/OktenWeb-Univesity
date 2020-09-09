<template>
  <div>
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
      <li v-for="(user, i) in users" :key="i">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  
  data(){
    return {
      user:{
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
