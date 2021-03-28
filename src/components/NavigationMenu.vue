<template>
  <div>
    <b-navbar toggleable="lg" variant="primary">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/" class="item">Inicio</b-nav-item>
          <b-nav-item-dropdown class="item" text="Escape Room" left>
            <b-dropdown-item class="sub-item" href="/escaperoom/crear">Crear Escape Room</b-dropdown-item>
            <b-dropdown-item class="sub-item" href="/escaperoom/modificar">Modificar Escape Room</b-dropdown-item>
            <b-dropdown-item class="sub-item" href="/escaperoom/eliminar">Eliminar Escape Room</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="item" text="Cliente" left>
            <b-dropdown-item class="sub-item" href="/cliente/crear">Crear Cliente</b-dropdown-item>
            <b-dropdown-item class="sub-item" href="/cliente/modificar">Modificar Cliente</b-dropdown-item>
            <b-dropdown-item class="sub-item" href="/cliente/eliminar">Eliminar Cliente</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="item" href="#">Sobre Nosotros</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: "NavigationMenu"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');

.item {
  font-family: 'Chango', cursive;
  font-size: 15px;
}

.sub-item {
  font-family: 'Josefin Sans', sans-serif;
  color: black;
  font-size: 15px;
}

</style>