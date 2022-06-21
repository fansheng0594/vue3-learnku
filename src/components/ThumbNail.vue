<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  count: {
    type: Number,
    default: 4,
  },
});
const emit = defineEmits(["capture"]);

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const str = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
let capture = ref<string[]>([]);
const captureStr = ref("");
changeCapture();

function changeCapture() {
  capture.value = [];
  for (let i = 0; i < props.count; i++) {
    const random = getRandomIntInclusive(0, str.length - 1);
    const char = str.substring(random, random + 1);
    capture.value.push(char);
  }
  captureStr.value = capture.value.join("").toLowerCase();
  emit("capture", captureStr.value);
}
</script>

<template>
  <div class="bg-gray-300" @click="changeCapture">
    <span
      class="capture text-2xl tracking-widest font-bold"
      v-for="(value, index) in capture"
      :key="index"
      >{{ value }}</span
    >
  </div>
</template>

<style scoped>
.capture {
  font-style: oblique 40turn;
  color: rgb(220 38 38);
}
</style>
