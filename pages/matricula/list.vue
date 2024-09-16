<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">
          Disciplina
        </th>
        <th class="text-left">
          Período
        </th>
        <th class="text-left">
          Horário
        </th>
        <th class="text-left">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="m in matriculas" :key="m.id">
          <td>
            {{ m.turma.disciplina.disciplina }}  
              
          </td>
          <td>
            {{ m.turma.periodo }}  
              
          </td>
          <td>
            {{ m.turma.horario.horario }}  
              
          </td>
          <td>
            <v-btn icon @click="deletar(m.id)">
                  <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
          </td>
      </tr>
    </tbody>
</v-simple-table>
</template>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

import MatriculaService from '@/service/MatriculaService';

const route = useRoute()

const matriculas = ref([])

function load() {
  MatriculaService.listMatriculasDiscente(2).then(
    response => {
      matriculas.value = response.data;
    }
  )
}

function deletar(id){
  MatriculaService.delete(2, id).then (
          response => {
            load();
          }
      );
}

onMounted(
  () => {
    load();
  }
)
</script>

<style>
tbody tr:nth-of-type(odd) {
background-color: rgba(0, 0, 0, .05);
}
</style>