import {
  SignInFormData,
  SignUpFormData,
  ForgotPasswordFormData,
} from '../containers/auth';
import {
  API_VERBS,
  ApiService,
} from '../core/http/api.service';

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
      .then((response: { token: string }) => {
        if (response && response.token) {
          return this.getCurrentUser()
            .then((user: any) => {
              return {
                success: true,
                user: user,
                token: response.token,
              };
            });
        } else {
          return { success: false };
        }
      });
  }

  public signUp(formData: SignUpFormData): Promise<any> {
    return new Promise((resolve: any) => {
      setTimeout(() => resolve({ message: 'sign up' }), 5000);
    });
  }

  public resetPassword(formData: ForgotPasswordFormData): Promise<any> {
    return new Promise((resolve: any) => {
      setTimeout(() => resolve({ message: 'reset' }), 5000);
    });
  }

  public getCurrentUser(): Promise<any> {
    return ApiService.fetchApi(
      endpoints.currentUser,
      {},
      API_VERBS.GET,
    );
  }
}
