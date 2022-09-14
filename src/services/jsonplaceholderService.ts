import apiService from "./apiService";
import { TUser, TPost } from "@/types/types";

export default {
  getAllPosts: async (): Promise<TPost[]> => {
    const res = await fetch(apiService.posts.getAll());
    return await res.json();
  },
  getAllPostsByLimits: async (
    start: number,
    limit: number
  ): Promise<TPost[]> => {
    const res = await fetch(apiService.posts.getPostsByLimits(start, limit));
    return await res.json();
  },
  getUserById: async (id: number): Promise<TUser> => {
    const res = await fetch(apiService.users.getPostsByUserId(id));
    return await res.json();
  },
};
