<template>
  <button
    class="btn btn-outline-primary"
    @click="$emit('click:decr', currentPage)"
  >
    ◀️
  </button>
  <span class="mr-2 ml-2">
    {{ currentPage }}
  </span>
  <button
    class="btn btn-outline-primary"
    @click="$emit('click:incr', currentPage)"
  >
    ▶️
  </button>
</template>

<script setup lang="ts">
defineProps({
  currentPage: { type: Number },
});

defineEmits(["click:incr", "click:decr"]);
</script>

<style></style>
