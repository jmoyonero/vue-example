<template>
  <section class="error-container">
    <div class="message">No se como, pero ¡has logrado que esto explote!</div>
    <b-button variant="outline-primary" href="/">Volver a inicio</b-button>
  </section>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style scoped>

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 500px;
}

.message {
  font-family: 'Chango', cursive;
  font-size: 24px;
}
</style>