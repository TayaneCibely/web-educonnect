<template>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">
            Curso
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in listaCursos" :key="d.id">
            <td>
                {{ d.cursos }}  
                
            </td>
            <td>
              <v-btn icon>
                  <NuxtLink :to="`/curso/edit/${d.id}`">
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
    import CursoService from '@/service/CursoService';
  
    const listaCursos = ref([])
  
    function loadAll() {
        CursoService.list().then (
            response => {
              listaCursos.value = response.data;
            }
        );
    }
    
    function deletar(id){
        CursoService.delete(id).then (
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