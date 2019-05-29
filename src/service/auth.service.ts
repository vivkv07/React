import {
  SignInFormData,
  SignUpFormData,
  ForgotPasswordFormData,
} from '@src/containers/auth';
import { AuthApi } from '../api';

export class AuthService {

  private api: AuthApi;

  constructor() {
    this.api = new AuthApi();
  }

  public signIn(formData: SignInFormData): Promise<any> {
    return this.api.signIn(formData);
  }

  public signUp(formData: SignUpFormData): Promise<any> {
    return this.api.signUp(formData);
  }

  public resetPassword(formData: ForgotPasswordFormData): Promise<any> {
    return this.api.resetPassword(formData);
  }
}
