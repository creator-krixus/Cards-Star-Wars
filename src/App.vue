<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@use './styles/variables';

#app {
  font-family: variables.$font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: variables.$primary;
  background-image: url('https://wallpaperstock.net/wallpapers/thumbs1/30921.png');
  background-size: contain;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: variables.$primary;

    &.router-link-exact-active {
      color: variables.$color-router;
    }
  }
}
</style>
