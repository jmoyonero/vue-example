<template>
  <div id="app">
    <Header></Header>
    <NavMenu></NavMenu>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import NavMenu from './components/NavigationMenu.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    NavMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

#app {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
}

</style>
