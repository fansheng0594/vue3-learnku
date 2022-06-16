<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader />
<!--    <nav>-->
<!--      <RouterLink to="/">Home</RouterLink>-->
<!--      <RouterLink to="/about">About</RouterLink>-->
<!--    </nav>-->
  </header>
  <p>Hello Vue3</p>
  <RouterView />
</template>

<style>
</style>
