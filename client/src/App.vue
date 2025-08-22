<template>
  <!-- Conditional layout based on route -->
  <DefaultLayout v-if="useDefaultLayout">
    <router-view />
  </DefaultLayout>

  <!-- No layout (for LandingPage) -->
  <v-app v-else>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'

  const route = useRoute()

  // Define which routes should NOT use DefaultLayout (only landing page)
  const useDefaultLayout = computed(() => {
    const routesWithoutLayout = ['/', '/landing']
    return !routesWithoutLayout.includes(route.path)
  })
</script>
