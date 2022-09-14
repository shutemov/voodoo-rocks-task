<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span
        id="basic-addon1"
        class="input-group-text"
      >🔎</span>
    </div>
    <input
      v-model="model"
      type="text"
      class="form-control"
      placeholder="Filter by author..."
      aria-label="Username"
      aria-describedby="basic-addon1"
      @input="$emit('update:modelValue', model)"
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const model = ref("");

defineProps({
  modelValue: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>

<style></style>
