<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1>Editar de Docente</h1>
        <br>
        <br>
        <div>
          <v-form @submit.prevent>
            <v-row>
              <v-col>
                <h4>Informações Pessoais</h4>
                <v-text-field v-model="docente.nome" label="Nome"></v-text-field>
                <v-text-field v-model="docente.dataNasc" label="Data de Nascimento"></v-text-field>
                <v-text-field v-model="docente.cpf" label="CPF"></v-text-field>
                <v-text-field v-model="docente.email" label="Email"></v-text-field>
                <v-text-field v-model="docente.phone" label="Telefone"></v-text-field>
               
                
              </v-col>
              <v-col>
                <h4>Endereço</h4>
                <v-text-field v-model="docente.endereco.cep" label="CEP"></v-text-field>
                <v-text-field v-model="docente.endereco.municipio" label="Município"></v-text-field>
                <v-text-field v-model="docente.endereco.uf" label="UF"></v-text-field>
                <v-text-field v-model="docente.endereco.logradouro" label="Logradouro"></v-text-field>
                <v-text-field v-model="docente.endereco.numero" label="Numero"></v-text-field>
                <v-text-field v-model="docente.endereco.bairro" label="Bairro"></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="save(docente.id)">Salvar</v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import DocenteService from '@/service/DocenteService';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

const route = useRoute()

const docente = ref({
  nome: "",
  dataNasc: "",
  cpf: "",
  email: "",
  phone: "",
  endereco: {
    cep: "",
    municipio: "",
    uf: "",
    logradouro: "",
    numero: "",
    bairro: ""
  }
});

function load() {
  DocenteService.load(route.params.docente).then(
        response => { 
          docente.value = response.data;
          console.log(response.data);
        }
    )
}

function save(id) {
  console.log(id);
  DocenteService.update(id, docente.value).then(
    response => { console.log(response.status); }
  )
}

onMounted(
        () => {
            load();
        } 
    )

</script>