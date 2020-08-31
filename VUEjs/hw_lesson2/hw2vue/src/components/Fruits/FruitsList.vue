<template>
  <div>
    <h1>{{ title }}</h1>
    <div
        v-for="(fruit, i) in fruits"
        :key="i"
    >
<!--      fruit.fresh = true - колір зелений-->
<!--      fruit.fresh = false - колір коричневий-->
      <div :class="fruit.fresh ? 'green' : 'brown'">
        <FruitItem
            :fruit="fruit"
            :title="title"
            @updateTitle="updateTitle"
            @updateFruitFresh="updateFruitFresh"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FruitItem from "@/components/Fruits/FruitItem";

export default {
  name: 'FruitsList',

  props: {
    fruits: {
      type: Array,
      required: true
    }
  },

  components: {
    FruitItem
  },

  data() {
    return {
      title: 'Abracadabra'
    }
  },

  methods: {
    updateTitle(event) {
      console.log(event);
      this.title = event
    },

    updateFruitFresh(event) {
      this.fruits.filter(e => {
        if (e.name == event.name) {
          e.fresh = false
        }
      })
      // console.log(idx);
      // console.log(event);
    }
  }
}
</script>

<style scoped>
.green {
  background-color: green;
}

.brown {
  background-color: brown;
}
</style>