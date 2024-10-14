import { computed, ref } from "vue";
import { defineStore } from "pinia";
import * as api from "@/monument-api";
import { LocalStorageService, JwtService } from "@/services";
import { LocalStorageKeys } from "@/enums";

export const useUserAuthStore = defineStore('loggedUser', ()=>{
    const loggedUser = ref(null);
    const errorMessage = ref('');
    loggedUser: computed(() => loggedUser.value);
    errorMessage: computed(() => errorMessage.value);

    const localStorageService = new LocalStorageService()
    const jwtService = new JwtService()

    const registerUser = (userName: string, email: string, password: string): void => {
        api.authControllerRegister({email: email, password: password, userName: userName}).catch((e)=>{
            errorMessage.value = e.error.message
        }).then(()=>{
            //TODO to replace with proper vue routing 
            document.location.href = "/user-registered";
        })
    }

    const loginUser = (email: string, password: string): void => {
        api.authControllerLogin({email: email, password: password}).catch((e)=>{
            errorMessage.value = e.error.message
        }).then((response)=>{
            //TODO to replace with proper vue routing
            if(response){
                const token = response.data.jwtToken.access_token
                localStorageService.setItem(LocalStorageKeys.JWT, token)
                window.location.reload();
            }
        })
    }

    const getLoggedUser = (): void => {
        if (jwtService.isTokenValid()) {
            const loggedUsersId = jwtService.getLoggedUsersId();

            // this.userApiService
            //   .fetchUser(loggedUsersId)
            //   .pipe(takeUntil(this.unsubscriber))
            //   .subscribe((userResponse) => {
            //     this.loggedUser.next(userResponse);
            //   });
            // this.likeService.getUsersLikes(this.jwtService.getLoggedUsersId());

        }
    }

    return {

    };
})