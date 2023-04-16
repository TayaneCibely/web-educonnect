<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }, 
        {
          icon: 'mdi-university',
          title: 'Universidade Dashboard',
          to: '/universidade'
        },
        {
          icon: 'mdi-home-city',
          title: 'Campus Dashboard',
          to: '/campus'
        },
        {
          icon: 'mdi-graduation-caps',
          title: 'Curso',
          to: '/curso'
        }, 
        {
          icon: 'mdi-view-dashboard',
          title: 'Docente Dashboard',
          to: '/docente-dash'
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Discente Dashboard',
          to: '/discente-dash'
        }, 
        {
          icon: 'mdi-book',
          title: 'Disciplina',
          to: '/disciplina'
        }, 
        {
          icon: 'mdi-account',
          title: 'Discente',
          to: '/discente'
        },  
        {
          icon: 'mdi-account',
          title: 'Docentes',
          to: '/docente'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
