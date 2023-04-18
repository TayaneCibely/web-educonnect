<template>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">
            Universidade
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in listaUniversidade" :key="d.id">
            <td>
                {{ d.universidade}}  
                
            </td>
            <td>
              <v-btn icon>
                  <NuxtLink :to="`/universidade/edit/${d.id}`">
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
    import CampusService from '@/service/UniversidadeService';
  
    const listaCampus = ref([])
  
    function loadAll() {
        UniversidadeService.list().then (
            response => {
              listaCampus.value = response.data;
            }
        );
    }
    
    function deletar(id){
        UniversidadeService.delete(id).then (
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