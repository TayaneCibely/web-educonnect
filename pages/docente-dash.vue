<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1 class="mx-auto">Docente</h1>
        <br>
        <v-card max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ docente.nome }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ docente.email }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn>
              <NuxtLink style="text-decoration: none; color: white;" :to="`/turma/list`" rounded>
                Minhas Disciplinas
              </NuxtLink>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <h1>Disciplinas Disponiveis</h1>
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
              <tr v-for="d in listaDisciplinas" :key="d.id">
                <td>
                  {{ d.disciplina }}
                </td>
                <td>
                  <NuxtLink :to="`/turma/${d.id}`">
                    <v-icon>mdi-human-male-board</v-icon>
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
import { ref } from 'vue';
import { onMounted } from 'vue';
import DisciplinaService from '@/service/DisciplinaService';
import DocenteService from '@/service/DocenteService';

const listaDisciplinas = ref([])
const listaDocentes = ref([])
const docente = ref([])

//function ofertar() {
//const data = new Date(Date.now()).toLocaleString('pt-BR').split(',')[0]
//console.log(data);
//}

function loadDisciplinas() {
  DisciplinaService.list().then(
    response => {
      listaDisciplinas.value = response.data;
    }
  )
}

function load() {
  DocenteService.load(1).then(response => {
    docente.value = response.data;
  })
}

onMounted(
  () => {
    load();
    loadDisciplinas();

  }
)
</script>