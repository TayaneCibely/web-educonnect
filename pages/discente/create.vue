<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>
        <h1>Cadastro de Discente</h1>
        <br>
        <br>
        <div>
          <v-form @submit.prevent>
            <v-row>
              <v-col>
                <h4>Informações Pessoais</h4>
                <v-text-field v-model="data.nome" label="Nome"></v-text-field>
                <v-text-field v-model="data.email" label="Email"></v-text-field>


                <v-text-field v-model="data.phone" label="Telefone"></v-text-field>
                <v-text-field v-model="data.dataNasc" label="Data de Nascimento"></v-text-field>
                <v-text-field v-model="data.cpf" label="CPF"></v-text-field>
              </v-col>
              <v-col>
                <h4>Endereço</h4>
                <v-text-field v-model="data.endereco.cep" label="CEP"></v-text-field>
                <v-text-field v-model="data.endereco.municipio" label="Município"></v-text-field>
                <v-text-field v-model="data.endereco.uf" label="UF"></v-text-field>
                <v-text-field v-model="data.endereco.logradouro" label="Logradouro"></v-text-field>
                <v-text-field v-model="data.endereco.numero" label="Numero"></v-text-field>
                <v-text-field v-model="data.endereco.bairro" label="Bairro"></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="save">Cadastrar</v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import DiscenteService from '@/service/DiscenteService';
import { reactive } from 'vue'

const data = reactive({
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
    numero: 0,
    bairro: ""
  }
});

function save() {
  DiscenteService.create(data).then(
    response => { console.log(response.status); }
  )
}


</script>