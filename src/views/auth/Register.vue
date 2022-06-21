<script setup lang="ts">
import { vValidator, validates } from "@/directives/Validator.vue";
import ThumbNail from "@/components/ThumbNail.vue";
import { ref } from "vue";

const thumbnail = ref("");
const realThumbnail = ref("");
const errorMessage = ref("");
function register() {
  if (thumbnail.value.toLowerCase() !== realThumbnail.value) {
    errorMessage.value = "thumbnail fail";
    return;
  }
  const validateResult = Object.values(validates).every((val) => val);
  if (!validateResult) {
    errorMessage.value = "input fail";
    return;
  }
  errorMessage.value = "";

}

function getCaptureStr(data: string) {
  realThumbnail.value = data;
}
</script>

<template>
  <form
    class="px-4 py-6 w-1/3 bg-gray-100 text-gray-600 mx-auto rounded-lg shadow-xl block flex flex-col space-y-3"
    action="#"
    method="post"
    @submit.prevent="register"
  >
    <div class="flex flex-col space-y-2">
      <div class="text-red-600 text-center">{{ errorMessage }}</div>
      <label class="" for="email">Email</label>
      <div class="flex space-x-2 items-center">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          class="input w-4/6 rounded-lg border border-gray-700"
          v-validator:required="{
            regex: {
              rule: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$',
              msg: 'Must be email format',
            },
          }"
        />
        <p class="input-error hidden text-red-500"></p>
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <label class="" for="password">password</label>
      <div class="flex space-x-2 items-center">
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          class="input w-4/6 rounded-lg border border-gray-700"
          v-validator:required="{
            min: {
              rule: 6,
              msg: 'Min size: 6',
            },
            max: {
              rule: 20,
              msg: 'Max size: 20',
            },
            confirmed: {
              rule: 'confirmed_password',
              msg: 'Not equal to confirmed-password',
            },
          }"
        />
        <p class="input-error hidden text-red-500"></p>
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <label class="" for="password">confirmed password</label>
      <div class="flex space-x-2 items-center">
        <input
          type="text"
          id="confirmed_password"
          name="confirmed_password"
          placeholder="Confirm Password"
          class="input w-4/6 rounded-lg border border-gray-700"
          v-validator:required="{
            confirmed: {
              rule: 'password',
              msg: 'Must match password',
            },
          }"
        />
        <p class="input-error hidden text-red-500"></p>
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <label class="" for="thumbnail">thumbnail</label>
      <div class="flex space-x-2 items-center">
        <input
          type="text"
          id="thumbnail"
          placeholder="thumbnail"
          v-model="thumbnail"
          class="input w-4/6 rounded-lg border border-gray-700"
        />
        <ThumbNail
          class="p-2 rounded-lg cursor-pointer"
          :count="6"
          @capture="getCaptureStr"
        />
        <p class="input-error hidden text-red-500"></p>
      </div>
    </div>
    <button class="border border-gray-400 rounded-md px-2 py-2 w-20">
      Register
    </button>
  </form>
</template>

<style scoped></style>
