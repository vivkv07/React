import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUp } from './signUp.component';
import { SignUpFormData } from '../type';
import { AuthService } from '../../../service';

export class SignUpContainer extends React.Component<NavigationScreenProps> {

  private service: AuthService = new AuthService();

  private onSignUpPress = (data: SignUpFormData) => {
    this.service.signUp(data)
      .then((result: any) => {
        console.log(result);
      });
  };

  private onSignInPress = () => {
    this.props.navigation.navigate('Sign In');
  };


  private onPhotoPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignUp
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
