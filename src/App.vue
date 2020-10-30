<template>
  <router-view/>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=PT+Mono&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap);

h1 {
  font-size: 3rem;
  color: $white0;
  user-select: none;
}

body {
  background: $black0;
}

#app {
  font-family: 'PT Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

input {
  font-family: 'PT Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12pt;
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
