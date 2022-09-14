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

onMounted(async () => {
  posts.value = await jsonplaceholdersService.getAllPostsByLimits(
    currentPage.value,
    limit.value
  );

  await getNamesForPosts();
});

const currentPosts = computed(() => {
  if (query.value === "") return posts.value;

  return posts.value.filter((post) => {
    return post.name
      ?.toLocaleLowerCase()
      .includes(query.value.toLocaleLowerCase().trim());
  });
});

const getNamesForPosts = async () => {
  const ids: number[] = [];
  for (const post of posts.value) {
    if (!ids.includes(post.userId)) {
      const user = await jsonplaceholdersService.getUserById(post.userId);

      posts.value.forEach((_post) => {
        if (_post.userId === user.id) _post.name = user.name;
      });
    }
    ids.push(post.userId);
  }
};
</script>
<style lang="scss" scoped>
</style>
