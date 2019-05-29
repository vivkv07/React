export interface SignInFormData {
  username: string;
  password: string;
}

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

export interface ForgotPasswordFormData {
  email: string;
}
