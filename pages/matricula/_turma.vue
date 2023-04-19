
<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1>Matricula</h1>
        <br>
        <br>
        <div>
          <v-form @submit.prevent>
            <v-row>
              <v-col>
                <h4>Informações</h4>
                <v-text-field v-model="data.data" label="Data"></v-text-field>

              </v-col>
            </v-row>
            <v-btn @click="save">Salvar</v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

import TurmaService from '@/service/TurmaService';
import DiscenteService from '@/service/DiscenteService';
import MatriculaService from '@/service/MatriculaService';

const route = useRoute()

const turma = ref([])
const discente = ref([])

const data = reactive({
	data: "",
}
)
function load() {
  TurmaService.load(route.params.turma).then(
    response => {
      turma.value = response.data;
    }
  )
}

function loadDiscente() {
  DiscenteService.load(2).then(response => {
    discente.value = response.data;
  })
}

function save() {
  MatriculaService.create(data, discente.value.id, turma.value.id).then(
    response => { console.log(response.status); }
  )
}

onMounted(
  () => {
    load();
    loadDiscente();
  }
)
</script>