<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1 class="mx-auto">Discente</h1>
        <br>
        <v-card max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
              {{ discente.nome }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ discente.email }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn>
              <NuxtLink style="text-decoration: none; color: white;" :to="`/matricula/list`" rounded>
                Minhas Matriculas
              </NuxtLink>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <h1>Disciplinas Ofertadas</h1>
        <br>
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
              <tr v-for="d in ListDisciplinas" :key="d.id">
                <td>
                  {{ d.disciplina.disciplina }}
                </td>
                <td>
                  <NuxtLink :to="`/matricula/${d.id}`">
                    <v-icon>mdi-plus-thick</v-icon>
                  </NuxtLink>

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
import TurmaService from '@/service/TurmaService';
import DiscenteService from '@/service/DiscenteService';

const ListDisciplinas = ref([])
const discente = ref([])

function loadDisciplinasOfertadas() {
  TurmaService.list().then(
    response => {
      ListDisciplinas.value = response.data;
    }
  )
}

function load() {
  DiscenteService.load(2).then(response => {
    discente.value = response.data;
  })
}


onMounted(
  () => {
    load();
    loadDisciplinasOfertadas();

  }
)
</script>