import './Assets/Fonts/Gasalt/stylesheet.css';
import {hot} from 'react-hot-loader';
import React, {Fragment} from 'react';
import {
  Avatar,
  Box,
  Button,
  Typography,
  CssBaseline,
  Input,
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  CardActionArea,
  List,
  ListItem, ListItemText, ListItemAvatar, CircularProgress, LinearProgress, Paper
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4em;
  padding: 2em;
  box-sizing: border-box;
  
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
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
const Section = ({title = '', children, ...props} = {}) => (
  <Box
    {...props}
  >
    {!!title ? (<Typography variant='h6'>{title}</Typography>) : undefined}
    {children}
  </Box>
);
const SubSection = ({title = '', children, ...props} = {}) => (
  <SubSectionBox
    {...props}
  >
    {!!title ? (<Typography>{title}</Typography>) : undefined}
    {children}
  </SubSectionBox>
);

// **********
// Layouts
// **********

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
            rows={5}
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
const CardSection = () => (
  <Section
    title='Card'
  >
    <SubSection>
      <Card>
        <CardActionArea>
          <CardMedia
            image='https://resist.design/Console%20BG%202.jpg'
            title='Subtle Gray Structure'
            style={{
              height: 0,
              paddingTop: '50%'
            }}
          />
          <CardHeader
            title='Card Header'
          />
          <CardContent>
            Card Content
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box
            width='100%'
            display='flex'
            justifyContent='flex-end'
          >
            <Button
              variant='text'
              color='primary'
            >
              Ok
            </Button>
            <Button
              variant='text'
              color='secondary'
            >
              Cancel
            </Button>
          </Box>
        </CardActions>
      </Card>
    </SubSection>
  </Section>
);
const ListSection = () => (
  <Section
    title='List'
  >
    <SubSection>
      <Paper>
        <List
          component='nav'
        >
          {[...new Array(10)].map((x, i) => (
            <ListItem
              button
            >
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: THEME.palette.secondary.main
                  }}
                >
                  <Typography
                    variant='h6'
                    color='textPrimary'
                  >
                    I{i + 1}
                  </Typography>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary
              >
                Item #{i + 1}
              </ListItemText>
              <ListItemText
                secondary
              >
                This is a list item.
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
    </SubSection>
  </Section>
);
const ProgressSection = () => (
  <Section
    title='Progress'
  >
    <SubSection
      title='Circular'
    >
      <RowBox>
        <CircularProgress/>
        <CircularProgress
          color="secondary"
        />
      </RowBox>
    </SubSection>
    <SubSection
      title='Linear'
    >
      <br/>
      <LinearProgress/>
      <br/>
      <LinearProgress
        color="secondary"
      />
    </SubSection>
  </Section>
);

// **********
// Layouts
// **********

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
          <CardSection/>
          <ProgressSection/>
          <ListSection/>
          <InputSection/>
        </SectionGrid>
      </Base>
    </ThemeProvider>
  </Fragment>
);

export default hot(module)(App);
