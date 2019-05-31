import { SecureStore } from 'expo';

const TOKEN_KEY: string = 'token';

export class AuthStorageService {

  public static setToken(token: string): Promise<void> {
    return SecureStore.setItemAsync(TOKEN_KEY, token);
  }

  public static getToken(): Promise<string> {
    return SecureStore.getItemAsync(TOKEN_KEY);
  }
}
