import './Assets/Fonts/Gasalt/stylesheet.css';
import {hot} from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import {
  Box,
  Button,
  Typography,
  CssBaseline, Input, TextField, Checkbox, Radio, RadioGroup
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
`;
const Base = styled(Box)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
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
const SectionGrid = styled.div`
  display: grid;
  grid-auto-flow: column dense;
  grid-gap: 1em;
  padding: 2em;
  box-sizing: border-box;
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
const Section = ({title = 'Section', children, ...props} = {}) => (
  <Box
    {...props}
  >
    <Typography variant='h6'>{title}</Typography>
    {children}
  </Box>
);
const SubSection = ({title = 'Section', children, ...props} = {}) => (
  <SubSectionBox
    {...props}
  >
    <Typography>{title}</Typography>
    {children}
  </SubSectionBox>
);

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
    <Section
      title='Button'
    >
      {Object.keys(variantMap).map(k => (
        <SubSection
          title={variantMap[k]}
        >
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
        </SubSection>
      ))}
    </Section>
  );
};

const InputSection = () => {
  return (
    <Section
      title='Inputs'
    >
      <SubSection
        title='Text Input'
      >
        <RowBox>
          <Input
            defaultValue='Value'
          />
        </RowBox>
      </SubSection>
      <SubSection
        title='Text Area'
      >
        <RowBox>
          <TextField
            defaultValue='Value'
            multiline
            rows={10}
          />
        </RowBox>
      </SubSection>
      <SubSection
        title='Form Components'
      >
        <RowBox>
          <Checkbox/>
          <Checkbox
            checked
          />
        </RowBox>
        <RowBox>
          <RadioGroup
            name='radio-group'
            value='two'
          >
            <Radio
              value='one'
            />
            <Radio
              value='two'
            />
          </RadioGroup>
        </RowBox>
      </SubSection>
    </Section>
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
        <SectionGrid>
          <ButtonSection/>
          <InputSection/>
        </SectionGrid>
      </Base>
    </ThemeProvider>
  </Fragment>
);

export default hot(module)(App);
