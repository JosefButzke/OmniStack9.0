import React from 'react';

import Routes from './routes';

import { Container} from './styles/styles';

import GlobalStyle from './styles/global';

import logo from './assets/logo.svg';

function App() {
  return (
      <Container>
        <img src={logo} alt="AirCnC"/>
        <div>
          <Routes /> 
        </div>
        <GlobalStyle />
      </Container>
  );
}

export default App;
