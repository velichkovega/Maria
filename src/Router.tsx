import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Page } from '@/components';
import { Main } from '@/pages';
import { WeatherPage } from '@/pages';
import { url } from '@/utils';

import { appRoutes } from './appRoutes';

export const MariaRouter = () => (
  <BrowserRouter>
    <Page>
      <Routes>
        <Route path={appRoutes.root} element={<Main />} />
        <Route
          path={url.join(appRoutes.weather, '/:weatherType')}
          element={<WeatherPage />}
        />
        <Route
          path={url.join(appRoutes.weather, '/:weatherType/:geo')}
          element={<WeatherPage />}
        />

        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </Page>
  </BrowserRouter>
);
