import './Assets/Fonts/Gasalt/stylesheet.css';
import {hot} from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import {
  Box,
  Button,
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
const SubSectionBox = styled.div`
  padding: 1em;
`;
const RowBox = styled(SubSectionBox)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 1em;
`;

const ButtonSection = () => {
  const variantMap = {
    contained: 'Contained',
    outlined: 'Outlined',
    text: 'Text'
  };
  const colors = [
    'primary',
    'secondary',
    'default'
  ];

  return (
    <Box>
      <Typography variant='h6'>Button</Typography>
      {Object.keys(variantMap).map(k => (
        <SubSectionBox>
          <Typography>{variantMap[k]}</Typography>
          <RowBox>
            {colors.map(c => (
              <Button
                variant={k}
                color={c}
              >
                Label
              </Button>
            ))}
          </RowBox>
        </SubSectionBox>
      ))}
    </Box>
  );
};

export const App = () => (
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
        <Container>
          <ButtonSection/>
        </Container>
      </Base>
    </ThemeProvider>
  </Fragment>
);

export default hot(module)(App);
