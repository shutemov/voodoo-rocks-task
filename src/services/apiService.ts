export default {
  posts: {
    getAll: () => `https://jsonplaceholder.typicode.com/posts`,
    getPostsByLimits: (start: number, limit: number) =>
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
  },
  users: {
    getPostsByUserId: (id: number) =>
      `https://jsonplaceholder.typicode.com/users/${id}`,
  },
};
