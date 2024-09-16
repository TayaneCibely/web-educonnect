<template>
    <div>
      
        <v-bottom-navigation :elevation="0">
          <NuxtLink to="/universidade/create">
            <v-btn>
  
              <span>Create</span>
              <v-icon>mdi-plus-circle-outline</v-icon>
  
            </v-btn>
          </NuxtLink>
          <NuxtLink to="/universidade/list">
            <v-btn>
  
              <span>List</span>
              <v-icon>mdi-view-list</v-icon>
            </v-btn>
          </NuxtLink>
        </v-bottom-navigation>
     
  
      <NuxtChild />
    </div>
  </template>
  
  <script>
  
  </script>