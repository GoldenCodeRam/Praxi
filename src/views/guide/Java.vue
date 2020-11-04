<template>
  <h1>Java</h1>
  <div class="searchBar">
    <font-awesome-icon icon="search" color="white" style="font-size: 20pt"/>
    <input class="searchBarInput" type="text">
  </div>
  <div class="menu">
    <card
      v-for="(card, key) in cards" :key="key"
      :cardTitle="card.cardTitle"
      :cardHelp="card.cardHelp"
      :buttonLink="card.buttonLink"
      :buttonText="'See more'"/>
  </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import javaCardsContent from '@/assets/content/javaCardsContent.json';
import { ref } from 'vue';

interface Card {
  cardTitle: string;
  buttonLink: string;
  cardHelp: string;
}

export default {
  setup() {
    const cards = ref(Array<Card>());

    Object.entries(javaCardsContent).forEach((element) => {
      cards.value.push({
        cardTitle: element[0].toString(),
        buttonLink: Object.values(element[1])[0],
        cardHelp: Object.values(element[1])[1],
      });
    });

    return {
      cards,
    };
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.searchBar {
  display: flex;
  align-content: center;
  align-items: center;
  align-self: center;
  margin: auto;

  background: $gray0;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 15px;
  min-width: 40%;
  max-width: 60%;

  .searchBarInput {
    background: $gray0;
    color: $white0;
    width: 95%;
    font-size: 16pt;
    margin-left: 5px;
    outline: none;
    border: none;
  }
}
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
