<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
<div class="footer">
  <a href="https://twitter.com/kiwiidb">My Twitter</a>

  <a href="https://github.com/kiwiidb">My Github</a>
</div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>
