import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSelectionStore = defineStore('selection', () => {
  // State
  const selectedFab = ref('')
  const selectedTool = ref('')

  // Available options
  const fabs = ['R3', 'M16', 'M15', 'M14', 'M11', 'M10']
  const tools = ['CD-SEM', 'HV-SEM']

  // Computed
  const isSelectionComplete = computed(() => {
    return selectedFab.value !== '' && selectedTool.value !== ''
  })

  const selectionSummary = computed(() => {
    return {
      fab: selectedFab.value,
      tool: selectedTool.value,
    }
  })

  // Actions
  function selectFab (fab) {
    selectedFab.value = fab
    saveToLocalStorage()
  }

  function selectTool (tool) {
    selectedTool.value = tool
    saveToLocalStorage()
  }

  function clearSelection () {
    selectedFab.value = ''
    selectedTool.value = ''
    localStorage.removeItem('skewnono_selection')
  }

  function saveToLocalStorage () {
    const data = {
      fab: selectedFab.value,
      tool: selectedTool.value,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('skewnono_selection', JSON.stringify(data))
  }

  function loadFromLocalStorage () {
    const saved = localStorage.getItem('skewnono_selection')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        selectedFab.value = data.fab || ''
        selectedTool.value = data.tool || ''
      } catch (error) {
        console.error('Failed to load selection from localStorage:', error)
      }
    }
  }

  // Initialize from localStorage
  loadFromLocalStorage()

  return {
    // State
    selectedFab,
    selectedTool,
    fabs,
    tools,

    // Computed
    isSelectionComplete,
    selectionSummary,

    // Actions
    selectFab,
    selectTool,
    clearSelection,
    saveToLocalStorage,
    loadFromLocalStorage,
  }
})
