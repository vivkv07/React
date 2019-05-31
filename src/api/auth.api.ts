import {
  SignInFormData,
  SignUpFormData,
  ForgotPasswordFormData,
} from '../containers/auth';
import {
  API_VERBS,
  ApiService,
} from '../core/http/api.service';
import { AuthStorageService } from '@src/core/authStorage/authStorage.service';
import { User } from '@src/core/model';

interface AuthApiEndpoints {
  signIn: string;
  signUp: string;
  resetPassword: string;
  currentUser: string;
}

const endpoints: AuthApiEndpoints = {
  signIn: '/auth/login',
  signUp: '/auth/sign-up',
  resetPassword: '/auth/reset-pass',
  currentUser: '/users/current',
};

export interface AuthApiResponse {
  success: boolean;

  [key: string]: any;
}

export class AuthApi {

  public signIn(formData: SignInFormData): Promise<AuthApiResponse> {
    return ApiService.fetchApi(
      endpoints.signIn,
      { email: formData.username, password: formData.password },
      API_VERBS.POST,
      {},
      false,
    )
      .then(this.processToken);
  }

  public signUp(formData: SignUpFormData): Promise<AuthApiResponse> {
    const payload = {
      fullName: formData.username,
      confirmPassword: formData.password,
      email: formData.email,
      password: formData.password,
    };
    return ApiService.fetchApi(
      endpoints.signUp,
      payload,
      API_VERBS.POST,
      {},
      false,
    )
      .then(this.processToken);
  }

  public resetPassword(formData: ForgotPasswordFormData): Promise<any> {
    return new Promise((resolve: any) => {
      setTimeout(() => resolve({ message: 'reset' }), 5000);
    });
  }

  private processToken = (response: { token: string }): Promise<AuthApiResponse> => {
    return this.setToken(response.token)
      .then((token: string) => {
        if (token) {
          return this.getCurrentUser()
            .then((user: any) => {
              return {
                success: true,
                user: user,
                token: token,
              };
            });
        } else {
          return { success: false };
        }
      });
  };

  private setToken(token: string): Promise<string> {
    return AuthStorageService.setToken(token)
      .then(() => token);
  }

  private getCurrentUser(): Promise<User> {
    return ApiService.fetchApi(
      endpoints.currentUser,
      {},
      API_VERBS.GET,
    );
  }
}
