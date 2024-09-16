<template>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col>
          <h1>Editar de Ementa</h1>
          <div>
            <v-form @submit.prevent>
              <v-text-field v-model="ementa.ementa" label="Nome"></v-text-field>
  
              <v-btn @click="save(ementa.id, ementa.ementa)">Salvar</v-btn>
            </v-form>
          </div>
        </v-col>
        <v-col> 
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  
  import CampusService from '@/service/EmentaService';
  import { ref } from 'vue'
  import { onMounted } from 'vue';
  import { useRoute } from 'vue2-helpers/vue-router';
  
  const route = useRoute()
  
  const ementa = ref({
    ementa: ""
  });
  
  
  function save(id) {
    EmentaService.update(id,ementa.value).then(
       response => { 
        console.log(response.status); 
        console.log(ementa); 
      }
    )
  }
  
  function load() {
      EmentaService.load(route.params.ementa).then(
          response => { 
              ementa.value = response.data;
          }
      )
  }
  
  onMounted(
          () => {
              load();
          } 
      )
  
  </script>