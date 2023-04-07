<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1 class="mx-auto">Docente</h1>
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Nome do Docente
        </v-list-item-title>
        <v-list-item-subtitle>Email do Docente</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        rounded
        text
      >
        Minhas Disciplinas
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
      <v-col>
        <h1>Disciplinas Disponiveis</h1>
        <v-card>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">
                  Disciplina
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="d in listaDisciplinas" :key="d.id">
                  <td>
                      {{ d.disciplina }}  
                      
                  </td>
                  <td>
                      <v-btn icon @click="ofertar(d, id)">
                          <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                  </td>
              </tr>
            </tbody>
        </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { reactive, ref } from 'vue';
  import { onMounted } from 'vue';
  import TurmaService from '~/service/TurmaService';
  import DisciplinaService from '@/service/DisciplinaService';

  const listaDisciplinas = ref([])

  function ofertar(data, idDoc, idDis) {
    
  }
  
  function loadDisciplinas() {
    DisciplinaService.list().then (
      response => {
        listaDisciplinas.value = response.data;
      }
    )
  }

  const data = new reactive(
    {
      show: false
    }
  )

  const texto = new reactive(
    {
      valor: "<i>Valor</i>"
    }
  );

  onMounted(
    () => {loadDisciplinas();} 
  )
</script>