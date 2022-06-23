<script setup lang="ts">
import { vValidator, validates } from "@/directives/Validator.vue";
import ThumbNail from "@/components/ThumbNail.vue";
import { onMounted, ref } from "vue";
import Cookies from "js-cookie";
import axios from "axios";

const username = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const thumbnail = ref("");
const realThumbnail = ref("");
const errorMessages = ref<string[]>([]);

// TODO refresh thumbnail
const thumbnailEl = ref(null);

const apiFetch = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
  },
  maxRedirects: 0,
});
function register() {
  errorMessages.value = [];
  if (thumbnail.value.toLowerCase() !== realThumbnail.value) {
    errorMessages.value.push("thumbnail fail");
    return;
  }
  const validateResult = Object.values(validates).every((val) => val);
  if (!validateResult) {
    errorMessages.value.push("input fail");
    return;
  }

  apiFetch.get("sanctum/csrf-cookie").then(() => {
    apiFetch
      .post("api/register", {
        name: username.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      })
      .then(() => {
        window.location.replace("/");
      })
      .catch((error) => {
        const errors = error.response.data.errors;
        for (const attr in errors) {
          for (const err of errors[attr]) {
            errorMessages.value.push(err);
          }
        }
      });
  });
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
      <div class="error-messages">
        <div
          v-for="(errorMessage, index) in errorMessages"
          :key="index"
          class="text-red-600 text-center"
        >
          {{ errorMessage }}
        </div>
      </div>
      <label class="" for="name">Name</label>
      <div class="flex space-x-2 items-center">
        <input
          v-model="username"
          max="text"
          name="name"
          id="name"
          placeholder="Name"
          class="input w-4/6 rounded-lg border border-gray-700"
          v-validator:required="{
            max: {
              rule: 255,
              msg: 'Max size: 255',
            },
          }"
        />
        <p class="input-error hidden text-red-500"></p>
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <label class="" for="email">Email</label>
      <div class="flex space-x-2 items-center">
        <input
          v-model="email"
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
          v-model="password"
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          class="input w-4/6 rounded-lg border border-gray-700"
          v-validator:required="{
            min: {
              rule: 8,
              msg: 'Min size: 8',
            },
            max: {
              rule: 20,
              msg: 'Max size: 20',
            },
            confirmed: {
              rule: 'password_confirmation',
              msg: 'Not equal to confirmed-password',
            },
          }"
        />
        <p class="input-error hidden text-red-500"></p>
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <label class="" for="password_confirmation">confirmed password</label>
      <div class="flex space-x-2 items-center">
        <input
          v-model="password_confirmation"
          type="text"
          id="password_confirmation"
          name="password_confirmation"
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
          :count="4"
          @capture="getCaptureStr"
          ref="thumbnailEl"
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
