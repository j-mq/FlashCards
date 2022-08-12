import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './constants/designTokens';
import CardsDisplay from './pages/CardsDisplay';
import cards from './data/testCards.json';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardsDisplay cards={cards} />
    </ThemeProvider>
  );
}

export default App;
