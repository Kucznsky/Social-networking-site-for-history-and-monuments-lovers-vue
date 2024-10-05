import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useUserLikesStore = defineStore('userLikes', ()=>{
    const userLikes = ref([]);

    return {
        userLikes: computed(() => userLikes.value),
        setPostList: (likes) => {
            userLikes.value = likes
        },
      };
})