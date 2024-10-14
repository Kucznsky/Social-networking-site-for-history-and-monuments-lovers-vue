import VueJwtDecode from 'vue-jwt-decode'
import { LocalStorageKeys } from "@/enums";
import { LocalStorageService } from "./local-storage.service";


const localStorageService = new LocalStorageService()

export class JwtService {
    constructor() {}
  
    public getAccessToken(): string | null {
      return localStorageService.getItem(LocalStorageKeys.JWT);
    }
  
    public getLoggedUsersId(): string {
      const token = this.getAccessToken();
      if (token) {
        const decodedToken = VueJwtDecode.decode(token);
        return decodedToken.sub;
      } else {
        return '';
      }
    }
  
    public isTokenValid(): boolean {
      const token = this.getAccessToken();
      if (token) {
        return !this.isTokenExpired(token);
      } else {
        return false;
      }
    }
  
    public saveTokenToStorage(token: string): void {
      localStorageService.setItem(LocalStorageKeys.JWT, token);
    }
  
    public removeToken(): void {
      localStorageService.removeItem(LocalStorageKeys.JWT);
    }

    private isTokenExpired(token: string): boolean {
        //TODO make this function from scratch or find some new library to do this for me
        return false
    }
  }