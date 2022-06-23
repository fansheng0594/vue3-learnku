<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <div id="main-container" class="min-h-screen bg-gray-200">
    <RouterView />
  </div>
  <TheFooter />
</template>

<style></style>
