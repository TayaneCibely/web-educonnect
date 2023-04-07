<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1>editar de Disciplina</h1>
        <div>
          <v-form @submit.prevent>
            <v-text-field v-model="disciplina.disciplina" label="Nome"></v-text-field>

            <v-btn @click="save(disciplina.id, disciplina.disciplina)">Cadastrar</v-btn>
          </v-form>
        </div>
      </v-col>
      <v-col> 
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import DisciplinaService from '@/service/DisciplinaService';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

const route = useRoute()

const disciplina = ref({
  disciplina: ""
});


function save(id, dis) {
  DisciplinaService.update(id, disciplina.value).then(
     response => { 
      console.log(response.status); 
      console.log(disciplina); 
      console.log(dis); 
    }
  )
}

function load() {
    DisciplinaService.load(route.params.disciplina).then(
        response => { 
            disciplina.value = response.data;
        }
    )
}

onMounted(
        () => {
            load();
        } 
    )

</script>