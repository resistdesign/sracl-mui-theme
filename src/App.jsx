import './Assets/Fonts/Gasalt/stylesheet.css';
import {hot} from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import {
  Box,
  Typography,
  CssBaseline
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import styled, {createGlobalStyle} from 'styled-components';
import SRACLMUITheme from './theme';
import Logo from './Assets/Graphics/zap-logo.svg';

const THEME = createMuiTheme(SRACLMUITheme);

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app-root {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
  }
`;
const Base = styled(Box)`
  
`;
const HeaderBox = styled(Box)`
  box-sizing: border-box;
  padding: 2em;
`;
const LogoImg = styled.img`
  width: 7.5em;
`;
const Title = styled(Typography).attrs(p => ({
  ...p,
  style: {
    ...p.style,
    fontFamily: 'gasaltblack, sans-serif',
    letterSpacing: '0.05em'
  }
}))`
  
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
          <Base
            display='flex'
            flexDirection='column'
            alignItems='stretch'
            justifyContent='flex-start'
          >
            <HeaderBox
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='flex-start'
            >
              <LogoImg
                src={Logo}
              />
              <Title
                variant='h5'
              >
                SRACL <Title display='inline' variant='h5' color='textSecondary'>MUI Theme</Title>
              </Title>
            </HeaderBox>
          </Base>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default hot(module)(App);
