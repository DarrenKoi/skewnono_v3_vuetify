<template>
  <v-app>
    <ViewHeader />

    <v-main class="bg-grey-lighten-4">
      <slot />
    </v-main>

    <ViewFooter />
  </v-app>
</template>

<script setup>
  import ViewFooter from './ViewFooter.vue'
  import ViewHeader from './ViewHeader.vue'
</script>

<style scoped>
/* Layout-specific styles if needed */
</style>
