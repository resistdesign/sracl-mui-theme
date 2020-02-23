import {hot} from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import {
  Box,
  Container,
  Typography,
  CssBaseline
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import styled, {createGlobalStyle} from 'styled-components';
import SRACLMUITheme from './theme';

const THEME = createMuiTheme(SRACLMUITheme);

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app-root {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;
const Base = styled(Container)`
  
`;

export class App extends Component {
  static propTypes = {};

  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <ThemeProvider
          theme={THEME}
        >
          <CssBaseline/>
          <Base>
            <Box>
              <Typography
                variant='h4'
              >
                Resist Design SRACL MUI Theme
              </Typography>
            </Box>
          </Base>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default hot(module)(App);
