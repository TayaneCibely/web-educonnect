<template>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col>
          <h1>Cadastro da Universidade</h1>
          <div>
            <v-form @submit.prevent>
              <v-text-field v-model="data.universidade" label="Nome"></v-text-field>
  
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
  import UniversidadeService from '@/service/UniversidadeService';
  import { reactive } from 'vue'
  
  const data = reactive({
    universidade: ""
  });
  
  function save() {
    UniversidadeService.create(data).then(
       response => { console.log(response.status); }
    )
  }
  
  </script>