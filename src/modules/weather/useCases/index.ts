import { api } from '@/api';

import { createGetCity } from './getCity';
import { createGetCurrentWeather } from './getCurrentWeather';
import { createGetWeatherForecast } from './getWeatherForecast';

export const UseCases = {
  getCity: createGetCity(api),
  getCurrentWeather: createGetCurrentWeather(api),
  getWeatherForecast: createGetWeatherForecast(api),
};
