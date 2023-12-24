import { Api } from '@/api';
import { City } from '@/domain';

export const createGetCity = (api: Api) => async (city: City['name']) => {
  try {
    const data = await api.weather.getCity(city);

    return data as City[];
  } catch (e) {
    console.log('error', e);
  }
};
