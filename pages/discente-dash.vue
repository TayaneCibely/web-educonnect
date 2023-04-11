<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1 class="mx-auto">Discente</h1>
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Nome do Discente
        </v-list-item-title>
        <v-list-item-subtitle>Email do discente</v-list-item-subtitle>
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
        Minhas Matriculas
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
      <v-col>
        <h1>Disciplinas Ofertadas</h1>
        <v-card>
          <v-row no-gutters>1

          </v-row>
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { reactive, ref } from 'vue';
  import { onMounted } from 'vue';
  import TurmaService from '~/service/TurmaService';

  const ListDisciplinas = ref([])

  function loadDisciplinasOfertadas() {
    TurmaService.list().then (
      response => {
        console.log(response.data);
        ListDisciplinas.value = response.data;
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
    () => {loadDisciplinasOfertadas();} 
  )
</script>