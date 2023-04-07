<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">
          Discente
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d in listaDiscentes" :key="d.id">
          <td>
              {{ d.nome }}  
              
          </td>
          <td>
            <v-btn icon>
                <NuxtLink :to="`/discente/edit/${d.id}`">
                      <v-icon >mdi-square-edit-outline</v-icon>
                </NuxtLink>
              </v-btn>
              <v-btn icon @click="deletar(d.id)">
                  <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
          </td>
      </tr>
    </tbody>
</v-simple-table>
</template>
<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import DiscenteService from '@/service/DiscenteService';

  const listaDiscentes = ref([])

  function loadAll() {
      DiscenteService.list().then (
          response => {
            listaDiscentes.value = response.data;
          }
      );
  }

  function deletar(id){
      DiscenteService.delete(id).then (
          response => {
              loadAll();
          }
      );
  }

  onMounted(
      () => {loadAll();} 
  )

</script>

<style>
tbody tr:nth-of-type(odd) {
background-color: rgba(0, 0, 0, .05);
}
</style>