<script setup lang="ts">
import { LoginIcon, UserAddIcon } from "@heroicons/vue/solid";
</script>
<template>
  <div class="authorization">
    <ul class="flex space-x-2">
      <li class="px-2 py-1 rounded-md border border-gray-600 hover:bg-gray-200">
        <a class="flex space-x-2 items-center" href="#">
          <LoginIcon class="fill-current w-4 h-4" />
          <span>登录</span>
        </a>
      </li>
      <li class="px-2 py-1 rounded-md border border-gray-600 hover:bg-gray-200">
<!--        <a class="flex space-x-2 items-center" href="#">-->
          <RouterLink to="/auth/register" class="flex space-x-2 items-center">
            <UserAddIcon class="fill-current w-4 h-4" />
            <span>注册</span>
          </RouterLink>
<!--        </a>-->
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
