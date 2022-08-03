import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './constants/designTokens';
import CardsDisplay from './pages/CardsDisplay';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardsDisplay color="red" />
    </ThemeProvider>
  );
}

export default App;
