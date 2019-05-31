import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { SignIn } from './signIn.component';
import { SignInFormData } from '../type';
import { AuthService } from '../../../service';
import {
  signIn,
  signInSuccess,
} from '../../../actions';
import { GlobalState } from '../../../store';
import { User } from '../../../core/model';

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
  auth: () => dispatch(signIn()),
  authSuccess: (user: User) => dispatch(signInSuccess(user)),
});

@connect(mapStateToProps, mapDispatchToProps)
export class SignInContainer extends React.Component<ComponentProps> {

  private service: AuthService = new AuthService();

  private onSignInPress = (data: SignInFormData): void => {
    this.props.auth();
    this.service.signIn(data)
      .then((response: { success: boolean, user?: User }) => {
        if (response.success) {
          this.props.authSuccess(response.user);
          this.props.navigation.navigate('Home');
        }
      });
  };

  private onSignUpPress = (): void => {
    this.props.navigation.navigate('Sign Up');
  };

  private onForgotPasswordPress = (): void => {
    this.props.navigation.navigate('Forgot Password');
  };

  public render(): React.ReactNode {
    return (
      <SignIn
        isAuthenticating={this.props.isAuthenticating}
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
