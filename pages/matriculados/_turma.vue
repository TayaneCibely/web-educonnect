<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">
          Nome
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d in discentes">
          <td>
            {{ d }}    
          </td>
      </tr>
    </tbody>
</v-simple-table>
</template>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

import DiscenteService from '@/service/DiscenteService';

const route = useRoute()

const discentes = ref([])

function load() {
  DiscenteService.listDiscentesByTurma(route.params.turma).then(
    response => {
      console.log(response.data);
      discentes.value = response.data;
    }
  )
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