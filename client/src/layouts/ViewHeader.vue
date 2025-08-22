<template>
  <v-app-bar
    color="primary"
    prominent
    flat
  >
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
      class="d-lg-none"
    />

    <v-toolbar-title>
      <v-btn
        to="/"
        variant="text"
        class="text-h5 font-weight-bold"
      >
        Skewnono
      </v-btn>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      variant="text"
      class="d-none d-lg-inline-flex"
    >
      {{ item.title }}
    </v-btn>

    <v-btn
      icon="mdi-theme-light-dark"
      variant="text"
      @click="$vuetify.theme.global.name = $vuetify.theme.global.current.dark ? 'light' : 'dark'"
    />
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :title="item.title"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const items = [
  { title: 'Home', to: '/' },
  { title: 'About', to: '/about' },
  { title: 'Services', to: '/services' },
  { title: 'Contact', to: '/contact' }
]
</script>

<style scoped>
</style>