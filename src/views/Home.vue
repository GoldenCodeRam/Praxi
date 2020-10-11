<template>
  <h1 class="container">Praxi</h1>
  <div class="menu">
    <div class="listContainer">
      <list-element
        v-for="item in data"
        v-bind:key="item"
        v-bind:title="item.text"
        v-bind:showContent="item.show"
        v-on:click="item.show = !item.show"/>
    </div>
  </div>
</template>

<script lang="ts">
import ListElement from '@/components/ListElement.vue';
import { ref } from 'vue';

export default {
  setup() {
    interface Item {
      text: string;
      show: boolean;
    }

    const data = ref<Item[]>([]);
    for (let i = 0; i < 30; i += 1) {
      data.value.push({ text: `test ${i}`, show: false });
    }

    return {
      data,
    };
  },
  components: {
    ListElement,
  },
};
</script>

<style lang="scss" scoped>

h1 {
  font-size: 3rem;
  color: $base-dark-color;
  user-select: none;
}

.menu {
  .listContainer {
    height: 60vh;
    margin: 0rem;
    overflow: auto;
  }::-webkit-scrollbar {
    width: 10px;
    background: $base-dark-color;
    border-radius: 5px;
  }::-webkit-scrollbar-thumb {
    background: $base-color3;
    border-radius: 5px;
  }
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 20px;
  padding: 2rem;

  height: 60vh;

  background: $base-color;
  border: 3px solid $base-dark-color;
  overflow: hidden;
}
</style>
