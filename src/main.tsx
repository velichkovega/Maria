import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from '@/ui-kit';

// TO DO: provide theme to the app
// import { theme } from '@/ui-kit';
import { GlobalStyles } from './GlobalStyles';
import { MariaRouter } from './Router';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorItemTextSelected: '#000',
          },
          Select: {
            colorBgBase: '#fff',
            colorBgContainer: 'transparent',
            colorBgElevated: '#0000004d',
            colorBorder: '#fff',
            colorBorderBg: '#fff',
            optionSelectedBg: '#fff',
            optionSelectedColor: '#000',
          },
        },
        token: {
          fontSize: 16,
          colorBgContainer: 'transparent',
          colorBgBase: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 10,
          colorText: '#fff',
        },
      }}
    >
      <GlobalStyles />
      <MariaRouter />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
