<template>
  <h1>Java</h1>
  <div class="searchBar">
    <font-awesome-icon icon="search" color="white" style="font-size: 20pt"/>
    <input class="searchBarInput" type="text">
  </div>
  <div class="menu">
  </div>
</template>

<script lang="ts">
export default {
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
</style>
