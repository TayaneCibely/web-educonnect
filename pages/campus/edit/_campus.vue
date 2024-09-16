<template>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col>
          <h1>Editar de Campus</h1>
          <div>
            <v-form @submit.prevent>
              <v-text-field v-model="campus.campus" label="Nome"></v-text-field>
  
              <v-btn @click="save(campus.id, campus.campus)">Salvar</v-btn>
            </v-form>
          </div>
        </v-col>
        <v-col> 
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  
  import CampusService from '@/service/CampusService';
  import { ref } from 'vue'
  import { onMounted } from 'vue';
  import { useRoute } from 'vue2-helpers/vue-router';
  
  const route = useRoute()
  
  const campus = ref({
    campus: ""
  });
  
  
  function save(id) {
    CampusService.update(id, campus.value).then(
       response => { 
        console.log(response.status); 
        console.log(campus); 
      }
    )
  }
  
  function load() {
      CampusService.load(route.params.campus).then(
          response => { 
              campus.value = response.data;
          }
      )
  }
  
  onMounted(
          () => {
              load();
          } 
      )
  
  </script>