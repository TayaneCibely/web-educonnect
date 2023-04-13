<template>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col>
          <h1>Editar de Curso</h1>
          <div>
            <v-form @submit.prevent>
              <v-text-field v-model="curso.curso" label="Nome"></v-text-field>
  
              <v-btn @click="save(curso.id, curso.cursos)">Salvar</v-btn>
            </v-form>
          </div>
        </v-col>
        <v-col> 
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  
  import CursoService from '@/service/CursoService';
  import { ref } from 'vue'
  import { onMounted } from 'vue';
  import { useRoute } from 'vue2-helpers/vue-router';
  
  const route = useRoute()
  
  const curso = ref({
    curso: ""
  });
  
  
  function save(id) {
    CursoService.update(id, curso.value).then(
       response => { 
        console.log(response.status); 
        console.log(curso); 
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