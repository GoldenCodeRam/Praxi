<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Test</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=PT+Mono&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap);

body {
  background: $black0;
  margin: 2rem auto;
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
