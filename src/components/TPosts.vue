<template>
  <div class="container">
    <div class="row">
      <div
        class="col-sm-12 col-lg-10 col-lg-6 mt-4 d-flex justify-content-center align-items-center"
      >
        <MSearchInput
          :model-value="query"
          @update:modelValue="query = $event"
        />
      </div>
      <div
        class="col-xs-12 col-lg-2 mt-4 d-flex justify-content-center align-items-center"
      >
        <MPagination
          :current-page="currentPage"
          @click:incr="handleIncrPage"
          @click:decr="handleDecrPage"
        />
      </div>
    </div>
  </div>
  <div class="card-columns mt-4">
    <div
      v-for="{ id, title, body, name } in currentPosts"
      :key="id"
      class="col"
    >
      <div class="card">
        <div class="card-body text-left">
          <h5 class="card-title text-primary">
            {{ capitalizeString(title) }}
          </h5>
          <p class="card-text">
            {{ capitalizeString(body) }}
          </p>
          <h6 class="text-secondary">
            {{ name }}
          </h6>
        </div>
      </div>
    </div>
  </div>
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

const handleIncrPage = async () => {
  currentPage.value++;
  posts.value = await getPostsForPage();
  await getNamesForPosts();
};

const handleDecrPage = async () => {
  if (currentPage.value < 1) return;
  currentPage.value--;

  posts.value = await getPostsForPage();
  await getNamesForPosts();
};

const getPostsForPage = async () => {
  return await jsonplaceholdersService.getAllPostsByLimits(
    currentPage.value,
    limit.value
  );
};

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

const capitalizeString = (str: string) => str[0].toUpperCase() + str.slice(1);
</script>

<style lang="scss" scoped>
</style>
