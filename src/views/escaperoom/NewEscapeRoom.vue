<template>
  <div class="main_container">

    <div class="form">
      <div class="register_form_container">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
              id="input-group-1"
              label="Nombre de Escape Room:"
              label-for="input-1"
              description=""
          >
            <b-form-input
                id="input-1"
                v-model="escapeRoom.name"
                placeholder=""
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Precio:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="escapeRoom.price"
                type="number"
                placeholder=""
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Estado:" label-for="input-3">
            <b-form-select
                id="input-3"
                v-model="escapeRoom.status"
                :options="status"
                required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
                v-model="escapeRoom.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
            >
              <b-form-checkbox value="registrar otro">Registrar otro</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Crear</b-button>
          <b-button type="reset" variant="danger">Limpiar</b-button>
        </b-form>
      </div>
      <div class="escape_rooms_list_container">
        <b-table
            label-sort-desc=""
            label-sort-asc=""
            striped
            hover
            responsive="sm"
            sort-icon-left
            caption-top
            sort-desc
            sort-by="id"
            :items="items"
            :fields="fields">
          <template #cell(price)="data">
            <p>{{ (Math.round(data.value * 100) / 100).toFixed(2) }} €</p>
          </template>
        </b-table>
      </div>
    </div>
    <ModalSuccessMessage
        :timeToShow="showModal"
        :message="modalMsg"
        :id="modalId"
    ></ModalSuccessMessage>
  </div>
</template>

<script>
import axios from "axios";
import ModalSuccessMessage from "@/components/ModalSuccessMessage";

export default {
  components: {ModalSuccessMessage},
  data() {
    return {
      escapeRoom: {
        price: '',
        name: '',
        status: null,
        checked: []
      },
      fields: [
        {
          key: 'id',
          label: 'ID',
          sortable: false
        },
        {
          key: 'name',
          label: 'Escape Room',
          sortable: true
        },
        {
          key: 'price',
          label: 'Precio',
          sortable: true
        }
      ],
      items: [
        {id: 101, name: 'La casa de papel', price: '25.00 €'},
        {id: 102, name: 'The Walking Dead', price: '30.00 €'},
        {id: 103, name: 'Saw', price: '15.00 €'},
        {id: 104, name: 'Gestión de Proyectos Software', price: '50.00 €'}
      ],
      status: [{text: 'Selecciona un estado', value: null}, 'Activo', 'Pendiente'],
      show: true,
      showModal: 0,
      modalId: 12,
      modalMsg: ""
    }
  },
  name: "NewEscapeRoom",
  methods: {
    onSubmit(event) {
      event.preventDefault()
      axios
          .post('http://localhost:8081/v1/escape-room/create', this.escapeRoom)
          .then(response => {
            this.items.push(response.data)
            this.showModal = 10
            this.modalMsg = "Escape Room: " + response.data.name
            console.log(response.data)
            this.modalId = response.data.id
            setTimeout(() => this.showModal = 0, 5000);
          })
    },
    onReset(event) {
      event.preventDefault()
      this.escapeRoom.price = ''
      this.escapeRoom.name = ''
      this.escapeRoom.status = null
      this.escapeRoom.checked = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  mounted() {

    axios
        .get('http://localhost:8081/v1/escape-room/list')
        .then(response => (this.items = response.data))
  }
}
</script>

<style scoped>
.form {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
}

.escape_rooms_list_container {
  padding: 20px;
}

.register_form_container {
  padding: 20px;
}
</style>