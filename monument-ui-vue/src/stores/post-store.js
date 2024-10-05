import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { UsersPost } from '../models';

export const usePostListStore = defineStore('listOfPosts', ()=>{
    const listOfPosts = ref([]);

    return {
        listOfPosts: computed(() => listOfPosts.value),
        setPostList: (posts) => {
            listOfPosts.value = posts.map((post) => new UsersPost(post));
        },
      };
})
