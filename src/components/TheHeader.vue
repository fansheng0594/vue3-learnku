<script setup lang="ts">
import { computed, ref } from "vue";

const logo = ref({
  title: "Vue3",
});

const navList = ref(["社区", "头条", "问答", "教程"]);

const activeIndex = ref(0);

function activeClass(index: number) {
  return { "bg-gray-200": activeIndex.value === index };
}

function changeNav(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <div
    class="nav-header flex items-center pl-20 border-t-4 border-green-600 text-gray-600"
  >
    <div class="logo flex items-center space-x-3">
      <!-- prettier-ignore -->
      <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"  xmlns:v="https://vecta.io/nano"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
      <span class="font-semibold">{{ logo.title }}</span>
      <!-- prettier-ignore -->
      <svg class="fill-current w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
    <div class="nav-items flex ml-4">
      <ul class="flex items-center">
        <li
          class="px-3 py-3 rounded-lg cursor-pointer hover:bg-gray-200"
          :class="activeClass(index)"
          v-for="(navItem, index) in navList"
          :key="index"
          @click="changeNav(index)"
        >
          {{ navItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
