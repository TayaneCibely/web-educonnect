<template>
    <div>
      
        <v-bottom-navigation :elevation="0">
          <NuxtLink to="/curso/create">
            <v-btn>
  
              <span>Create</span>
              <v-icon>mdi-history</v-icon>
  
            </v-btn>
          </NuxtLink>
          <NuxtLink to="/curso/list">
            <v-btn>
  
              <span>List</span>
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>
          </NuxtLink>
        </v-bottom-navigation>
     
  
      <NuxtChild />
    </div>
  </template>
  
  <script>
  
  </script>