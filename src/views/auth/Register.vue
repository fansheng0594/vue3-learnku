<script setup lang="ts"></script>

<template>
  <!--  <div class="w-30 mx-auto">-->
  <!--    <form class="register-form mx-auto" action="#">-->
  <!--      <input type="text" placeholder="Type here" class="input rounded-lg" />-->
  <!--    </form>-->
  <!--  </div>-->
  <form
    class="px-4 py-6 w-1/3 bg-gray-100 text-gray-600 mx-auto rounded-lg shadow-xl block flex flex-col space-y-3"
    action="#"
    method="post"
  >
    <div class="flex flex-col space-y-2">
      <label class="" for="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        class="input w-4/6 rounded-lg border border-gray-700"
      />
    </div>
    <div class="flex flex-col space-y-2">
      <label class="" for="password">password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        class="input w-4/6 rounded-lg border border-gray-700"
      />
    </div>
    <div class="flex flex-col space-y-2">
      <label class="" for="password">confirm password</label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Confirm Password"
        class="input w-4/6 rounded-lg border border-gray-700"
      />
    </div>
    <div class="flex flex-col space-y-2">
      <label class="" for="thumbnail">thumbnail</label>
      <input
        type="text"
        id="thumbnail"
        placeholder="thumbnail"
        class="input w-4/6 rounded-lg border border-gray-700"
      />
    </div>
    <button class="border border-gray-400 rounded-md px-2 py-2 w-20">Register</button>
  </form>
</template>

<style scoped></style>
