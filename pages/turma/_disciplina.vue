
<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1>Ofertar Disciplina</h1>
        <br>
        <br>
        <div>
          <v-form @submit.prevent>
            <v-row>
              <v-col>
                <h4>Informações</h4>
                <v-text-field v-model="data.periodo" label="Periodo"></v-text-field>
                <v-text-field v-model="data.horario.horario" label="Horario"></v-text-field>

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

import DisciplinaService from '@/service/DisciplinaService';
import TurmaService from '@/service/TurmaService';
import DocenteService from '@/service/DocenteService';

const route = useRoute()

const disciplina = ref([])
const docente = ref([])

const data = reactive({
	periodo: "",
	horario: {
	  horario: ""
	}
}
)
function load() {
  DisciplinaService.load(route.params.disciplina).then(
    response => {
      console.log(route.params);
      disciplina.value = response.data;
      console.log(response.data);
    }
  )
}

function loadDocente() {
  DocenteService.load(1).then(response => {
    docente.value = response.data;
    console.log(response.data);
  })
}

function save() {
  TurmaService.create(data, docente.value.id, disciplina.value.id).then(
    response => { console.log(response.status); }
  )
}

onMounted(
  () => {
    load();
    loadDocente();
  }
)
</script>