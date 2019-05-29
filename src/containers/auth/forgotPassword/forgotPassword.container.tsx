import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ForgotPasswordFormData } from '../type';
import { ForgotPassword } from './forgotPassword.component';
import { AuthService } from '../../../service';

export class ForgotPasswordContainer extends React.Component<NavigationScreenProps> {

  private service: AuthService = new AuthService();

  private onResetPress = (data: ForgotPasswordFormData) => {
    this.service.resetPassword(data)
      .then((result: any) => {
        console.log(result);
      });
  };

  public render(): React.ReactNode {
    return (
      <ForgotPassword onResetPress={this.onResetPress}/>
    );
  }
}
