<template>
  <div>
    <h3 :class="{ active: showContent}">{{title}}</h3>
    <transition name="slide">
      <div v-if="showContent">
        testing
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
interface ListElement {
  title: string;
  showContent: boolean;
}

export default {
  props: {
    title: String,
    showContent: Boolean,
  },
  setup(props: ListElement) {
    function getClass(element: object) {
      console.log(element);
    }

    console.log(props.title);
    return {
      getClass,
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: 'Source Sans Pro';
  font-size: 16pt;

  background-color: $base-color2;
  margin: 2rem;
  padding: 1rem;

  border: 2px solid $base-color3;
  border-radius: 10px;
  box-shadow: 0px 5px 0px $base-color3;
  -webkit-user-select: none;
}
h3.active {
  transform: translateY(5px);
  box-shadow: none;
}
</style>
