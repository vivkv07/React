import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUp } from './signUp.component';
import { SignUpFormData } from '../type';
import { AuthService } from '../../../service';
import { User } from '@src/core/model';
import { GlobalState } from '@src/store';
import {
  singUp,
  singUpSuccess,
} from '../../../actions';
import { connect } from 'react-redux';

interface StateProps {
  isAuthenticating: boolean;
  auth: () => void;
  authSuccess: (user: User) => void;
}

type ComponentProps = StateProps & NavigationScreenProps;

const mapStateToProps = (state: GlobalState) => ({
  isAuthenticating: state.auth.isAuthenticating,
});

const mapDispatchToProps = (dispatch: Function) => ({
  auth: () => dispatch(singUp()),
  authSuccess: (user: User) => dispatch(singUpSuccess(user)),
});

@connect(mapStateToProps, mapDispatchToProps)
export class SignUpContainer extends React.Component<ComponentProps> {

  private service: AuthService = new AuthService();

  private onSignUpPress = (data: SignUpFormData): void => {
    this.props.auth();
    this.service.signUp(data)
      .then((response: { success: boolean, user?: User }) => {
        if (response.success) {
          this.props.authSuccess(response.user);
          this.props.navigation.navigate('Home');
        }
      });
  };

  private onSignInPress = (): void => {
    this.props.navigation.navigate('Sign In');
  };


  private onPhotoPress = (): void => {

  };

  public render(): React.ReactNode {
    return (
      <SignUp
        isAuthenticating={this.props.isAuthenticating}
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
