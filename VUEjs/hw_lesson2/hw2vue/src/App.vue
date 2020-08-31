<template>
  <div>
    <h1>MEGA FRUIT APP</h1>
    <FruitsList :fruits="fruits"/>
  </div>
</template>

<script>

import FruitsList from "@/components/Fruits/FruitsList";

export default {
  name: 'App',

  components: {
    FruitsList
  },

  data() {
    return {
      msg: 'hello',
      fruits: [
        {
          name: 'Orange',
          color: 'orange',
          fresh: true
        },
        {
          name: 'Apple',
          color: 'green',
          fresh: true
        },
        {
          name: 'Mango',
          color: 'red',
          fresh: true
        },
        {
          name: 'Banana',
          color: 'yellow',
          fresh: true
        },
      ]
    }
  }
}
</script>

<style>

</style>