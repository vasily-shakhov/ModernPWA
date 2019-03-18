import React from 'react';
import Button from 'react-bootstrap/es/Button';
import { connect } from 'react-redux';
import { ActionCreator, AnyAction } from 'redux';
import { entities } from 'src/ioc/client';

const appActionCreators = entities.appActionCreators;

interface IHeaderDispatchProps {
  /** actionCreator to change theme */
  toggleTheme: ActionCreator<AnyAction>;
}

/**
 * Header Component of the App
 */
class Header extends React.Component<IHeaderDispatchProps> {
  /** switch theme to the other one */
  private toggleTheme = () => {
    this.props.toggleTheme();
  };

  /** render v-dom */
  public render() {
    return (
      <div>
        Header
        <Button onClick={this.toggleTheme}>Toggle theme</Button>
      </div>
    );
  }
}

export default connect(
  null,
  {
    toggleTheme: appActionCreators.toggleTheme,
  }
)(Header);
