import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { SignIn } from './signIn.component';
import { SignInFormData } from '../type';
import { AuthService } from '../../../service';
import { signIn } from '../../../actions';
import { GlobalState } from '../../../store';

interface StateProps {
  isAuthenticating: boolean;
  auth: () => void;
}

type ComponentProps = StateProps & NavigationScreenProps;

const mapStateToProps = (state: GlobalState) => ({
  isAuthenticating: state.auth.isAuthenticating,
});

const mapDispatchToProps = (dispatch: Function) => ({
  auth: () => dispatch(signIn()),
});

@connect(mapStateToProps, mapDispatchToProps)
export class SignInContainer extends React.Component<ComponentProps> {

  private service: AuthService = new AuthService();

  private onSignInPress = (data: SignInFormData) => {
    this.service.signIn(data)
      .then((result: any) => {
        this.props.auth();
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
