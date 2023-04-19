<template>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col>
          <h1>Editar de Universidade</h1>
          <div>
            <v-form @submit.prevent>
              <v-text-field v-model="universidade.universidade" label="Nome"></v-text-field>
  
              <v-btn @click="save(universidade.id, universidade.universidade)">Salvar</v-btn>
            </v-form>
          </div>
        </v-col>
        <v-col> 
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  
  import UniversidadeService from '@/service/UniversidadeService';
  import { ref } from 'vue'
  import { onMounted } from 'vue';
  import { useRoute } from 'vue2-helpers/vue-router';
  
  const route = useRoute()
  
  const universidade = ref({
    universidade: ""
  });
  
  
  function save(id) {
    UniversidadeService.update(id, universidade.value).then(
       response => { 
        console.log(response.status); 
        console.log(universidade); 
      }
    )
  }
  
  function load() {
      CursoService.load(route.params.curso).then(
          response => { 
              curso.value = response.data;
          }
      )
  }
  
  onMounted(
          () => {
              load();
          } 
      )
  
  </script>