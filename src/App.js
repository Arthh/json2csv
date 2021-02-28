import React from 'react';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import MainPage from './pages/mainPage';

export default function App() {
  return (
    <>
      <GlobalStyles />
        <Header />
        <MainPage />
    </>
  );
}

