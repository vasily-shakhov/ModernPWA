import React from 'react';
import Button from 'react-bootstrap/es/Button';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { ActionCreator, AnyAction } from 'redux';

interface ILoginDispatchProps {
  /** prop for navigating to another page url */
  push: ActionCreator<AnyAction>;
}

/**
 * view for Login page
 */
class LoginPage extends React.Component<ILoginDispatchProps> {
  /**
   * goto room after login
   */
  private navigateToRoom = () => {
    this.props.push('/room');
  };

  /** render v-dom */
  public render() {
    return (
      <div>
        Login page
        <Button onClick={this.navigateToRoom}>Go to room</Button>
      </div>
    );
  }
}

export default connect(
  null,
  { push }
)(LoginPage);
