import React from 'react';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import Main from './pages/main';

export default function App() {
  return (
    <>
      <GlobalStyles />
        <Header />
        <Main />
    </>
  );
}

