import { createHttpService } from '@/services';

import { createWeatherApi } from './weather';

export * from './dto';

const baseURL = 'http://api.openweathermap.org';
const apiKey = import.meta.env.VITE_API_KEY;

const http = createHttpService(baseURL, apiKey);

export const api = {
  http,
  weather: createWeatherApi(http),
};

export type Api = typeof api;
