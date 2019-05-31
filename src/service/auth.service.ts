import {
  SignInFormData,
  SignUpFormData,
  ForgotPasswordFormData,
} from '../containers/auth';
import { AuthApi } from '../api';
import { AuthApiResponse } from '../api/auth.api';
import { User } from '../core/model';

export class AuthService {

  private api: AuthApi;

  constructor() {
    this.api = new AuthApi();
  }

  public signIn(formData: SignInFormData): Promise<AuthApiResponse & { user?: User }> {
    return this.api.signIn(formData);
  }

  public signUp(formData: SignUpFormData): Promise<AuthApiResponse & { user?: User }> {
    return this.api.signUp(formData);
  }

  public resetPassword(formData: ForgotPasswordFormData): Promise<any> {
    return this.api.resetPassword(formData);
  }
}
