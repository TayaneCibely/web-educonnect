<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">
          Docente
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d in listaDocentes" :key="d.id">
          <td>
              {{ d.nome }}  
              
          </td>
          <td>
            <v-btn icon>
                <NuxtLink :to="`/docente/edit/${d.id}`">
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
  import DocenteService from '@/service/DocenteService';

  const listaDocentes = ref([])

  function loadAll() {
      DocenteService.list().then (
          response => {
            listaDocentes.value = response.data;
          }
      );
  }

  function deletar(id){
      DocenteService.delete(id).then (
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