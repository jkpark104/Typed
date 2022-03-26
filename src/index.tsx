import React from 'react';
import ReactDom from 'react-dom';

import StoreProvider from 'store';
import GlobalStyle from 'styles/GlobalStyle';
import Main from 'components/Main/Main';

ReactDom.render(
  <React.StrictMode>
    <GlobalStyle />
    <StoreProvider>
      <Main />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
