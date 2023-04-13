<template>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">
            Ementa
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in listaEmentas" :key="d.id">
            <td>
                {{ d.ementa }}  
                
            </td>
            <td>
              <v-btn icon>
                  <NuxtLink :to="`/ementas/edit/${d.id}`">
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
    import EmentaService from '@/service/EmentaService';
  
    const listaEmentas = ref([])
  
    function loadAll() {
        EmentaService.list().then (
            response => {
              listaEmentas.value = response.data;
            }
        );
    }
    
    function deletar(id){
        EmentaService.delete(id).then (
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