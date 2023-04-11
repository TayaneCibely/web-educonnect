<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1>Editar de Discente</h1>
        <br>
        <br>
        <div>
          <v-form @submit.prevent>
            <v-row>
              <v-col>
                <h4>Informações Pessoais</h4>
                <v-text-field v-model="discente.nome" label="Nome"></v-text-field>
                <v-text-field v-model="discente.dataNasc" label="discente de Nascimento"></v-text-field>
                <v-text-field v-model="discente.cpf" label="CPF"></v-text-field>
                <v-text-field v-model="discente.email" label="Email"></v-text-field>
                <v-text-field v-model="discente.phone" label="Telefone"></v-text-field>
               
                
              </v-col>
              <v-col>
                <h4>Endereço</h4>
                <v-text-field v-model="discente.endereco.cep" label="CEP"></v-text-field>
                <v-text-field v-model="discente.endereco.municipio" label="Município"></v-text-field>
                <v-text-field v-model="discente.endereco.uf" label="UF"></v-text-field>
                <v-text-field v-model="discente.endereco.logradouro" label="Logradouro"></v-text-field>
                <v-text-field v-model="discente.endereco.numero" label="Numero"></v-text-field>
                <v-text-field v-model="discente.endereco.bairro" label="Bairro"></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="save(discente.id)">Salvar</v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import DiscenteService from '@/service/DiscenteService';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

const route = useRoute()

const discente = ref({
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
    DiscenteService.load(route.params.discente).then(
        response => { 
          discente.value = response.data;
          console.log(response.data);
        }
    )
}

function save(id) {
  console.log(id);
  DiscenteService.update(id, discente.value).then(
    response => { console.log(response.status); }
  )
}

onMounted(
        () => {
            load();
        } 
    )

</script>