<template>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col>
          <h1>Cadastro do Campus</h1>
          <div>
            <v-form @submit.prevent>
              <v-text-field v-model="data.campus" label="Nome"></v-text-field>
  
              <v-btn @click="save">Cadastrar</v-btn>
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
  import { reactive } from 'vue'
  
  const data = reactive({
    campus: ""
  });
  
  function save() {
    CampusService.create(data).then(
       response => { console.log(response.status); }
    )
  }
  
  
  </script>