import React from 'react';
import { connect } from 'react-redux';
/*import resolveUrl from 'resolve-url';*/
import { entities } from 'src/ioc/client';

const LoginPage = entities.components.auth.LoginPage;

interface ILoginStateProps {
  /** url to backend */
  remoteServiceUrl: string;
}

/**
 * Login route
 */
class Login extends React.Component<ILoginStateProps> {
  /** render v-dom */
  public render() {
    /*const loginUrl = resolveUrl(this.props.remoteServiceUrl, 'login');*/

    return <LoginPage />;
  }
}

export default connect((store) => ({
  remoteServiceUrl: '' /*store.config.remoteServiceUrl*/,
}))(Login);
