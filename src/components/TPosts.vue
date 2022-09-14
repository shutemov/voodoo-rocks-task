<template>
</template>
<script setup lang="ts">
import { ref, onMounted, Ref, computed } from "vue";
import jsonplaceholdersService from "@/services/jsonplaceholderService";
import { TPost } from "@/types/types";
import MPagination from "@/components/MPagination.vue";
import MSearchInput from "@/components/MSearchInput.vue";

const posts: Ref<TPost[]> = ref([]);
const query = ref("");
const currentPage = ref(0);
const limit = ref(20);
</script>
<style lang="scss" scoped>
</style>
