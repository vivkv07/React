import { User } from '@src/core/model';

export interface AuthState {
  isAuthenticating: boolean;
  user: User | null;
}
