<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">
          Disciplina
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d in listaDisciplinas" :key="d.id">
          <td>
              {{ d.disciplina }}  
              
          </td>
          <td>
            <v-btn icon>
                <NuxtLink :to="`/disciplina/edit/${d.id}`">
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
  import DisciplinaService from '@/service/DisciplinaService';

  const listaDisciplinas = ref([])

  function loadAll() {
      DisciplinaService.list().then (
          response => {
            listaDisciplinas.value = response.data;
          }
      );
  }
  //da problema caso tenha matriculas
  function deletar(id){
      DisciplinaService.delete(id).then (
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