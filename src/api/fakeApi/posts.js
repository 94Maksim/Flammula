import axios from "axios";

async function getPosts(page, limit) {
  let skip = 0;
  if (page > 1) {
    skip = page * 10 - 10;
  }
  try {
    const request = axios.get("https://dummyjson.com/posts", {
      params: {
        skip: skip,
        limit: limit,
      },
    });
    const posts = (await request).data.posts;
    const totalPosts = (await request).data.total;
    const totalPages = Math.ceil(totalPosts / limit);
    return { posts: posts, totalPages: totalPages };
  } catch (error) {
    alert(error);
    return [];
  }
}

export default {
  getPosts,
};
