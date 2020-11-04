<template>
  <h1>Praxi</h1>
  <p class="welcome">{{textPageContent.welcomeMessage}}</p>
  <div class="cardContainer">
    <card
      :icon="programmingPractices"
      :cardTitle="'Good programming practices'"
      :buttonText="'See more'"
      :buttonLink="'/guide/programming'"
      :cardHelp="textPageContent.practicesHelp"
    />
    <card
      :icon="java"
      :cardTitle="'Java'"
      :buttonText="'See more'"
      :buttonLink="'/guide/java'"
      :cardHelp="textPageContent.javaHelp"
    />
  </div>
</template>

<script lang="ts">
import textPageContent from '@/assets/content/pageContent.json';

import gsap from 'gsap';
import Card from '@/components/Card.vue';
import { Ref, ref, watch } from 'vue';

import programmingPractices from '@/assets/programmingLogo.svg';
import java from '@/assets/javaLogo.svg';

interface Item {
  text: string;
  show: boolean;
}

export default {
  setup() {
    const textSearch = ref('');
    const menuEntries: Item[] = [];
    const searchMenuEntries = ref<Item[]>([]);

    function fillMenu(search: Ref<string>) {
      searchMenuEntries.value.length = 0;
      if (search.value === '') {
        searchMenuEntries.value = menuEntries.slice();
      } else {
        searchMenuEntries.value = menuEntries.filter(
          (entry) => entry.text.toUpperCase().indexOf(search.value.toUpperCase()) > -1,
        );
      }
    }

    function beforeEnter(listElement: HTMLElement) {
      const element = listElement;
      element.style.opacity = '0';
    }

    function enter(listElement: HTMLElement, done: gsap.Callback) {
      gsap.to(listElement, {
        opacity: 1,
        delay: +listElement.dataset.index! * 0.05,
        onComplete: done,
      });
    }

    function leave(listElement: HTMLElement, done: gsap.Callback) {
      gsap.to(listElement, {
        opacity: 0,
        delay: +listElement.dataset.index! * 0.05,
        onComplete: done,
      });
    }

    const test = require.context('@/views/guide', true);
    console.log(test.keys());

    watch(textSearch, () => fillMenu(textSearch), { immediate: true });

    return {
      textPageContent,
      beforeEnter,
      enter,
      leave,
      textSearch,
      searchMenuEntries,
      programmingPractices,
      java,
    };
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>

.welcome {
  color: $white1;
  font-size: 16pt;
  max-width: 60%;
  margin: auto;
  padding: 2rem;
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.menu {
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 20px;
  padding-bottom: auto;

  background: $white0;
  border: 3px solid $dark4;
  overflow: hidden;

  .menuHeader {
    display: block;
    background: $white2;
    padding: 2rem;
    outline: 3px solid $dark4;
    .menuSearchBar {
      display: inline-block;
      background: $white0;
      padding: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 15px;
      .searchBarInput {
        background: $white0;
        margin-left: 5px;
        outline: none;
        border: none;
      }
    }
  }
  .listContainer {
    height: 60vh;
    overflow: auto;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 3px;
  }
  .listContainer::-webkit-scrollbar {
    width: 10px;
  }
  .listContainer::-webkit-scrollbar-thumb {
    background: $dark4;
    border-radius: 5px;
  }
  .listContainer::-webkit-scrollbar-track {
    margin-top: 2rem;
    margin-bottom: 2rem;
    background: $white1;
    border-radius: 5px;
  }
}
</style>
