<template>
  <v-container class="pa-6">
    <!-- Welcome Section -->
    <v-card class="mb-6" elevation="2">
      <v-card-title class="text-h4 font-weight-bold text-center pa-6">
        <v-icon class="mr-3" color="primary" size="32">mdi-rocket-launch</v-icon>
        SKEWNONO 대시보드
      </v-card-title>
      <v-card-subtitle class="text-center pb-4">
        {{ selectionStore.selectedFab }} Fab, {{ selectionStore.selectedTool }} Tool 환경
      </v-card-subtitle>
    </v-card>

    <!-- Status Cards -->
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="text-center pa-6" color="blue-lighten-5" elevation="2">
          <v-icon color="blue" size="48">mdi-chart-line</v-icon>
          <v-card-title class="text-h6">실시간 모니터링</v-card-title>
          <v-card-text>시스템 상태를 실시간으로 확인합니다</v-card-text>
          <v-btn color="blue" variant="outlined">상세보기</v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="text-center pa-6" color="green-lighten-5" elevation="2">
          <v-icon color="green" size="48">mdi-cog</v-icon>
          <v-card-title class="text-h6">설정 관리</v-card-title>
          <v-card-text>시스템 설정을 관리합니다</v-card-text>
          <v-btn color="green" variant="outlined">설정하기</v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="text-center pa-6" color="orange-lighten-5" elevation="2">
          <v-icon color="orange" size="48">mdi-file-chart</v-icon>
          <v-card-title class="text-h6">리포트 생성</v-card-title>
          <v-card-text>분석 리포트를 생성합니다</v-card-text>
          <v-btn color="orange" variant="outlined">생성하기</v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Current Selection Info -->
    <v-card class="mt-6" elevation="2">
      <v-card-title class="text-h6 font-weight-bold">
        <v-icon class="mr-2" color="primary">mdi-information</v-icon>
        현재 선택 정보
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-chip color="primary" size="large" variant="outlined">
              <v-icon start>mdi-factory</v-icon>
              {{ selectionStore.selectedFab || '미선택' }}
            </v-chip>
          </v-col>
          <v-col cols="6">
            <v-chip color="primary" size="large" variant="outlined">
              <v-icon start>mdi-tools</v-icon>
              {{ selectionStore.selectedTool || '미선택' }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey"
          variant="outlined"
          @click="goBackToLanding"
        >
          <v-icon start>mdi-arrow-left</v-icon>
          선택 화면으로
        </v-btn>
        <v-btn
          color="error"
          variant="outlined"
          @click="selectionStore.clearSelection"
        >
          <v-icon start>mdi-refresh</v-icon>
          초기화
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { useSelectionStore } from '@/stores/selection'

  const selectionStore = useSelectionStore()
  const router = useRouter()

  function goBackToLanding () {
    router.push('/landing')
  }
</script>

<style scoped>
.v-card:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
</style>
