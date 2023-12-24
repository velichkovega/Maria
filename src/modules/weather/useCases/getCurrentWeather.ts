import { Api } from '@/api';

import { toCurrentWeatherDataFromDTO } from './adapter';

export const createGetCurrentWeather = (api: Api) => async (lat: string, lon: string) => {
  try {
    const data = await api.weather.getCurrentWeather(lat, lon);

    return toCurrentWeatherDataFromDTO(data);
  } catch (e) {
    console.log('error', e);
  }
};
