import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Page } from '@/components';
import { Main } from '@/pages';
import { Weather } from '@/pages';

import { appRoutes } from './appRoutes';

export const MariaRouter = () => (
  <BrowserRouter>
    <Page>
      <Routes>
        <Route path={appRoutes.root} element={<Main />} />
        <Route path={appRoutes.weather} element={<Weather />} />

        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </Page>
  </BrowserRouter>
);
