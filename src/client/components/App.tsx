import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Login from 'src/client/routes/Login';
import Room from 'src/client/routes/Room';
import { ITheme, IThemedProps } from 'src/ioc/interfaces';
import Header from './Header/index';

const ConnectedSwitch = connect(({ router }: any) => ({
  location: router.location,
}))(Switch);

const StyledApp = styled.div`
  ${(props: IThemedProps) => `
  height: 100%;
  width: 100%; 
  background-color: ${props.theme.backgroundColor}
  color: ${props.theme.textColor}`}
`;

interface IAppStateProps extends IThemedProps {
  /** object with theme(color, fonts, etc) properties */
  theme: ITheme;
}

/**
 * Root App component
 */
class App extends React.Component<IAppStateProps> {
  /** render v-dom */
  public render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <StyledApp className="mpwa">
          <Header />
          <ConnectedSwitch>
            <Route path="/room" component={Room} />
            <Route component={Login} />
          </ConnectedSwitch>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default hot(
  connect((state: any) => ({
    theme: state.theme.selectedTheme,
  }))(App)
);
