import { Api } from '@/api';

import { toForecastWeatherFromDTO } from './adapter';

export const createGetWeatherForecast =
  (api: Api) => async (lat: string, lon: string, daysCount: number) => {
    try {
      const data = await api.weather.getWeatherForecast(lat, lon, daysCount);

      return toForecastWeatherFromDTO(data);
    } catch (e) {
      console.log('error', e);
    }
  };
