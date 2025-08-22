<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <v-container class="fill-height">
        <v-row align="center" class="fill-height" justify="center">
          <v-col cols="12" lg="8" md="10">
            <!-- Logo Section -->
            <v-card class="pa-8 mb-6" elevation="2">
              <div class="text-center">
                <img
                  alt="SKEWNONO Logo"
                  class="logo-image"
                  src="@/assets/skewnono.png"
                >

              </div>
            </v-card>

            <!-- Fab Selection -->
            <v-card class="pa-6 mb-6" elevation="2">
              <h2 class="text-h5 font-weight-bold mb-4">
                <v-icon class="mr-2" icon="mdi-factory" />
                Fab 선택
              </h2>
              <v-chip-group
                v-model="selectedFabIndex"
                mandatory
              >
                <v-chip
                  v-for="fab in selectionStore.fabs"
                  :key="fab"
                  class="ma-2"
                  :color="selectionStore.selectedFab === fab ? 'primary' : 'grey-lighten-3'"
                  elevation="2"
                  size="x-large"
                  :value="fab"
                  :variant="selectionStore.selectedFab === fab ? 'flat' : 'outlined'"
                  @click="selectionStore.selectFab(fab)"
                >
                  <span
                    class="text-h6 font-weight-bold"
                    :class="selectionStore.selectedFab === fab ? 'text-white' : 'text-grey-darken-2'"
                  >
                    {{ fab }}
                  </span>
                </v-chip>
              </v-chip-group>
            </v-card>

            <!-- Tool Selection -->
            <v-card class="pa-6 mb-6" elevation="2">
              <h2 class="text-h5 font-weight-bold mb-4">
                <v-icon class="mr-2" icon="mdi-tools" />
                Tool 선택
              </h2>
              <v-row>
                <v-col
                  v-for="tool in selectionStore.tools"
                  :key="tool"
                  cols="12"
                  sm="6"
                >
                  <v-card
                    class="pa-8 text-center cursor-pointer d-flex align-center justify-center"
                    :color="selectionStore.selectedTool === tool ? 'primary' : 'grey-lighten-5'"
                    height="120"
                    :variant="selectionStore.selectedTool === tool ? 'flat' : 'outlined'"
                    @click="selectionStore.selectTool(tool)"
                  >
                    <div
                      class="text-h3 font-weight-bold"
                      :class="selectionStore.selectedTool === tool ? 'text-white' : 'text-grey-darken-3'"
                    >
                      {{ tool }}
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>

            <!-- Action Button -->
            <v-card class="pa-6" elevation="2">
              <v-row>
                <v-col class="text-center" cols="12">
                  <v-btn
                    color="primary"
                    :disabled="!selectionStore.isSelectionComplete"
                    min-width="200"
                    size="x-large"
                    @click="handleStart"
                  >
                    <v-icon class="mr-2" icon="mdi-rocket-launch" />
                    출발하기
                  </v-btn>
                  <div v-if="!selectionStore.isSelectionComplete" class="mt-3 text-grey">
                    Fab과 Tool을 모두 선택해주세요
                  </div>
                </v-col>
              </v-row>
            </v-card>

            <!-- Selection Summary -->
            <v-expand-transition>
              <v-card
                v-if="selectionStore.isSelectionComplete"
                class="mt-6 pa-4"
                color="green-lighten-5"
                elevation="2"
              >
                <v-row align="center" no-gutters>
                  <v-col cols="auto">
                    <v-icon color="green" size="24">mdi-check-circle</v-icon>
                  </v-col>
                  <v-col class="ml-3">
                    <div class="text-body-1">
                      <strong>선택 완료:</strong>
                      {{ selectionStore.selectedFab }} Fab,
                      {{ selectionStore.selectedTool }} Tool
                    </div>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn
                      size="small"
                      variant="text"
                      @click="selectionStore.clearSelection"
                    >
                      초기화
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-expand-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useSelectionStore } from '@/stores/selection'

  const router = useRouter()
  const selectionStore = useSelectionStore()
  const selectedFabIndex = ref(null)

  function handleStart () {
    if (selectionStore.isSelectionComplete) {
      // Navigate to MainView with selections
      console.log('Starting with:', selectionStore.selectionSummary)
      router.push('/main')
    }
  }
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.cursor-pointer:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

.logo-image {
  max-width: 100%;
  height: auto;
  max-height: 120px;
}
</style>
