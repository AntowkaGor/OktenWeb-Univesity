<template>
  <div>
    <h1>MY Todo list</h1>
    <input type="text" v-model="text" placeholder="mast do IT" >
    <button @click="add">➕</button> 
    <ul>
      <li  class="style_li" v-for="(item, i) in arr" 
          :key="i">
        <span>{{item}}</span>
        <button @click="del(i)">🗑</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      text: '',
      arr: []
    }
  },

  methods: {
    add() {
      this.arr.push(this.text);
      this.text = '';
    },

    del(i) {
      this.arr.splice(i, 1)
    }
  }
}
</script>

<style>
.style_li{
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: 10px
  }
</style>