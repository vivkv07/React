import {
  SignInFormData,
  SignUpFormData,
  ForgotPasswordFormData,
} from '@src/containers/auth';

export class AuthApi {

  public signIn(formData: SignInFormData): Promise<any> {
    return new Promise((resolve: any) => {
      setTimeout(() => resolve({ message: 'sign in' }), 5000);
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
}
