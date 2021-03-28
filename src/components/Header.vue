<template>
  <header>
    <img class="logo" src="/icons/puzzle.svg">
    <div class="name">RoomScape</div>
    <b-avatar size="lg" class="ml-auto"></b-avatar>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');

header {
  display: flex;
  align-items: center;

  padding: 10px;
}

.name {
  font-family: 'Chango', cursive;
  font-size: 24px;
  line-height: 50px;
  height: 50px;
}

.logo {
  height: 50px;
}
</style>