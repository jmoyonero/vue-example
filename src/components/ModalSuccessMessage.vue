<template>
  <div>
    <b-alert
        :show="timeToShow"
        @dismissed="timeToShow=0"
        @dismiss-count-down="timeToShow"
        variant="success">
      <h4 class="alert-heading">¡Operación exitosa!</h4>
      <p>
        Se ha registrado correctamente el {{ this.message }}
      </p>
      <hr>
      <p class="mb-0">
        Identificador: {{ this.id }}.
      </p>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "ModalSuccessMessage",
  data() {
    return {
      show: true,
    }
  },
  props: {
    timeToShow: Number,
    message: String,
    id: Number
  }
}
</script>

<style scoped>

</style>