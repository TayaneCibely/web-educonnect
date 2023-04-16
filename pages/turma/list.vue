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
      <tr v-for="t in turmas" :key="t.id">
          <td>
            {{ t.disciplina.disciplina }}  
              
          </td>
          <td>
            {{ t.periodo }}  
              
          </td>
          <td>
            {{ t.horario.horario }}  
              
          </td>
          <td>
            <v-btn icon @click="deletar(t.id)">
                  <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
              <NuxtLink :to="`/matriculados/${t.id}`">
                    <v-icon>mdi-plus-thick</v-icon>
                </NuxtLink>
          </td>
      </tr>
    </tbody>
</v-simple-table>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { onMounted } from 'vue';

import TurmaService from '@/service/TurmaService';

const turmas = ref([])

function load() {
  TurmaService.listTurmasDocente(1).then(
    response => {
      turmas.value = response.data;
    }
  )
}

function deletar(id){
  TurmaService.delete(1, id).then (
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