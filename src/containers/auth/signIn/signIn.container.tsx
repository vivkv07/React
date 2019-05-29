import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignIn } from './signIn.component';
import { SignInFormData } from '../type';
import { AuthService } from '../../../service';

export class SignInContainer extends React.Component<NavigationScreenProps> {

  private service: AuthService = new AuthService();

  private onSignInPress = (data: SignInFormData) => {
    this.service.signIn(data)
      .then((result: any) => {
        console.log(result);
      });
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate('Sign Up');
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.navigate('Forgot Password');
  };

  public render(): React.ReactNode {
    return (
      <SignIn
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
