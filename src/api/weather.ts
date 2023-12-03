import { HttpService } from '@/services';

import { CityDTO } from './dto';

interface WeatherApi {
  getCity(city: string): Promise<CityDTO[]>;
}

export const createWeatherApi = (http: HttpService): WeatherApi => {
  const getCity = async (city: string): Promise<CityDTO[]> => {
    const { data } = await http.get<CityDTO[]>(`/geo/1.0/direct?q=${city}&limit=5`);

    return data;
  };

  return {
    getCity,
  };
};
