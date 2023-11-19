import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from '@/ui-kit';

// TO DO: provide theme to the app
// import { theme } from '@/ui-kit';
import { GlobalStyles } from './GlobalStyles';
import { MariaRouter } from './Router';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider theme={{ hashed: false }}>
      <GlobalStyles />
      <MariaRouter />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
