<template>
  <!-- Header with Cascade Select -->
  <v-app-bar color="white" density="comfortable" elevation="2">
    <v-container class="d-flex align-center justify-center">
      <!-- Cascade Select Component -->
      <v-menu
        v-model="cascadeMenuOpen"
        :close-on-content-click="false"
        location="bottom"
        offset="8"
      >
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            class="cascade-trigger"
            color="primary"
            min-width="280"
            size="large"
            variant="outlined"
          >
            <v-icon start>mdi-factory</v-icon>
            <span class="font-weight-medium">
              {{ cascadeDisplayText }}
            </span>
            <v-icon end>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-card elevation="8" min-width="300">
          <!-- Step 1: Fab Selection -->
          <v-card-title class="text-subtitle-1 pb-2">
            <v-icon class="mr-2" color="primary">mdi-factory</v-icon>
            Fab 선택
          </v-card-title>
          <v-card-text class="pt-0 pb-2">
            <v-chip-group
              v-model="tempSelectedFab"
              mandatory
              selected-class="text-white"
            >
              <v-chip
                v-for="fab in selectionStore.fabs"
                :key="fab"
                class="ma-1"
                :class="{ 'selected-chip': tempSelectedFab === fab }"
                :color="tempSelectedFab === fab ? 'primary' : 'grey-lighten-3'"
                size="small"
                :value="fab"
                :variant="tempSelectedFab === fab ? 'flat' : 'outlined'"
                @click="selectFab(fab)"
              >
                <span :class="tempSelectedFab === fab ? 'text-white font-weight-bold' : 'text-grey-darken-2'">
                  {{ fab }}
                </span>
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <!-- Step 2: Tool Selection (shown only after Fab is selected) -->
          <template v-if="tempSelectedFab">
            <v-divider />
            <v-card-title class="text-subtitle-1 pb-2">
              <v-icon class="mr-2" color="primary">mdi-tools</v-icon>
              Tool 선택
            </v-card-title>
            <v-card-text class="pt-0 pb-2">
              <v-chip-group
                v-model="tempSelectedTool"
                mandatory
                selected-class="text-white"
              >
                <v-chip
                  v-for="tool in selectionStore.tools"
                  :key="tool"
                  class="ma-1"
                  :class="{ 'selected-chip': tempSelectedTool === tool }"
                  :color="tempSelectedTool === tool ? 'primary' : 'grey-lighten-3'"
                  size="small"
                  :value="tool"
                  :variant="tempSelectedTool === tool ? 'flat' : 'outlined'"
                  @click="selectTool(tool)"
                >
                  <span :class="tempSelectedTool === tool ? 'text-white font-weight-bold' : 'text-grey-darken-2'">
                    {{ tool }}
                  </span>
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </template>

          <!-- Action Buttons -->
          <v-card-actions v-if="tempSelectedFab">
            <v-spacer />
            <v-btn
              color="grey"
              variant="text"
              @click="cancelSelection"
            >
              취소
            </v-btn>
            <v-btn
              color="primary"
              :disabled="!tempSelectedTool"
              variant="flat"
              @click="confirmSelection"
            >
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { useSelectionStore } from '@/stores/selection'

  const selectionStore = useSelectionStore()

  // Cascade select state
  const cascadeMenuOpen = ref(false)
  const tempSelectedFab = ref(selectionStore.selectedFab)
  const tempSelectedTool = ref(selectionStore.selectedTool)

  // Display text for the cascade button
  const cascadeDisplayText = computed(() => {
    if (selectionStore.selectedFab && selectionStore.selectedTool) {
      return `${selectionStore.selectedFab} / ${selectionStore.selectedTool}`
    } else if (selectionStore.selectedFab) {
      return `${selectionStore.selectedFab} / Tool 선택`
    } else {
      return 'Fab / Tool 선택'
    }
  })

  function selectFab (fab) {
    tempSelectedFab.value = fab
    tempSelectedTool.value = '' // Reset tool when fab changes
  }

  function selectTool (tool) {
    tempSelectedTool.value = tool
  }

  function confirmSelection () {
    if (tempSelectedFab.value) {
      selectionStore.selectFab(tempSelectedFab.value)
    }
    if (tempSelectedTool.value) {
      selectionStore.selectTool(tempSelectedTool.value)
    }
    cascadeMenuOpen.value = false
  }

  function cancelSelection () {
    // Reset to current store values
    tempSelectedFab.value = selectionStore.selectedFab
    tempSelectedTool.value = selectionStore.selectedTool
    cascadeMenuOpen.value = false
  }
</script>

<style scoped>
.cascade-trigger {
  border-radius: 8px !important;
}

.cascade-trigger:hover {
  background-color: rgba(99, 102, 241, 0.1) !important;
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

.selected-chip {
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.3) !important;
  transform: scale(1.05);
  border: 2px solid currentColor !important;
}

.v-chip:not(.selected-chip) {
  transition: all 0.2s ease;
}

.v-chip:not(.selected-chip):hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
