<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
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
  <TheFooter />
  <RouterView />
</template>

<style>
</style>
