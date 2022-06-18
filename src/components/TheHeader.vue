<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import * as heroIcons from "@heroicons/vue/solid";
import { ChevronDownIcon, MenuIcon } from "@heroicons/vue/solid";
import TheEntry from "@/components/TheEntry.vue";

const logo = ref({
  title: "Vue3",
});

interface Item {
  name: string;
  url: string;
  icon: string;
}

const navList = ref<Item[]>([
  { name: "社区", url: "/community", icon: "HomeIcon" },
  { name: "头条", url: "/hot", icon: "FireIcon" },
  { name: "问答", url: "/questions", icon: "ChatAlt2Icon" },
  { name: "教程", url: "/tutorial", icon: "LightBulbIcon" },
]);

const isLoaded = ref(false);
onMounted(() => {
  isLoaded.value = true;
});

const activeIndex = ref(0);

function activeClass(index: number) {
  return { "bg-gray-200": activeIndex.value === index };
}

function changeNav(index: number) {
  activeIndex.value = index;
}

// const classObj = computed(() => {
//
// });
</script>

<template>
  <div
    class="nav-header flex justify-between items-center px-4 py-2 lg:pl-20 border-t-4 border-green-600 text-gray-600"
  >
    <div class="flex flex-auto justify-between lg:justify-start items-center">
      <div class="logo">
        <RouterLink to="/" class="flex items-center space-x-2">
          <!-- prettier-ignore -->
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
          <span class="font-semibold">{{ logo.title }}</span>
          <ChevronDownIcon class="fill-current w-4 h-4" />
        </RouterLink>
      </div>
      <div class="nav-menu lg:hidden">
        <Menu>
          <MenuButton><MenuIcon class="fill-current w-5 h-5" /></MenuButton>
          <MenuItems
            class="flex flex-col absolute right-0 py-1 px-1 rounded-lg drop-shadow-xl bg-green-100 space-y-2"
          >
            <MenuItem
              v-for="(navItem, index) in navList"
              :key="index"
              v-slot="{ active, disabled }"
            >
              <a
                class="flex items-center space-x-2 w-48 px-2 py-1 rounded-lg hover:bg-indigo-500 hover:text-white"
                :class="[
                  active ? 'bg-indigo-500 text-white' : '',
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                ]"
                href="{{ navItem.url }}"
              >
                <component
                  class="fill-current w-5 h-5"
                  :is="heroIcons[navItem.icon]"
                ></component>
                <span>{{ navItem.name }}</span>
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <div class="nav-items hidden lg:flex nav-items ml-4">
        <ul class="flex items-center space-x-2">
          <li
            class="px-3 py-3 rounded-lg cursor-pointer hover:bg-gray-200"
            :class="activeClass(index)"
            v-for="(navItem, index) in navList"
            :key="index"
            @click="changeNav(index)"
          >
            {{ navItem.name }}
          </li>
        </ul>
      </div>
    </div>

    <TheEntry />
  </div>
</template>

<style scoped></style>
