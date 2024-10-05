import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useUserAuthStore = defineStore('loggedUser', ()=>{
    const loggedUser = ref(null);
    // const errorMessage = ref('');

    return {
        loggedUser: computed(() => loggedUser.value),
        // errorMessage: computed(() => errorMessage.value),
        setLoggedUser: (user) => {
            loggedUser.value = user
        },
        // setErrorMessage: (message) => {
        //     errorMessage.value = message
        // }
    };
})