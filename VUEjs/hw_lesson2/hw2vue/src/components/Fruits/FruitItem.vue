<template>
  <div>
<!--    <h1>{{title}}</h1>-->
    <h5>{{fruit.name}}</h5>
    <p>{{fruit.color}} - {{fruit.fresh}}</p>
    <button @click="edit">Edit title</button>
    <button @click="spoil">Become Bad</button>
  </div>
</template>

<script>
export default {
  name: 'FruitItem',

  props: {
    fruit: {
      type: Object,
      required: true
    },
    title: {
      type: String
    }
  },

  data() {
    return {
      dataPropsFruit: this.fruit
    }
  },

  methods: {
    edit() {
      // Не можна переприсвоювати пропси(мутувати)
      // this.title = this.fruit.name
      this.$emit('updateTitle', this.fruit.name);
      // @click
      // @updateTitle
    },

    spoil() {
      // this.$emit('updateFruitFresh', this.fruit)
      this.fruit.fresh = false;
    }
  }
}
</script>