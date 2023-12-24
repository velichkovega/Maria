import { MetricSystems } from '@/domain';
import { HttpService } from '@/services';

import { CityDTO, CurrentWeatherDataDTO, WeatherForecastDTO } from './dto';

interface WeatherApi {
  getCity(city: string): Promise<CityDTO[]>;
  getCurrentWeather(lat: string, lon: string): Promise<CurrentWeatherDataDTO>;
  getWeatherForecast(
    lat: string,
    lon: string,
    daysCount: number,
  ): Promise<WeatherForecastDTO>;
}

export const createWeatherApi = (http: HttpService): WeatherApi => {
  const getCity = async (city: string): Promise<CityDTO[]> => {
    const { data } = await http.get<CityDTO[]>(`/geo/1.0/direct?q=${city}&limit=5`);

    return data;
  };

  const getCurrentWeather = async (
    lat: string,
    lon: string,
  ): Promise<CurrentWeatherDataDTO> => {
    const { data } = await http.get<CurrentWeatherDataDTO>(
      `/data/2.5/weather?lat=${lat}&lon=${lon}&units=${MetricSystems.Celsius}`,
    );

    return data;
  };

  const getWeatherForecast = async (
    lat: string,
    lon: string,
    daysCount: number,
  ): Promise<WeatherForecastDTO> => {
    const { data } = await http.get<WeatherForecastDTO>(
      `/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${daysCount}&units=${MetricSystems.Celsius}`,
    );

    return data;
  };

  return {
    getCity,
    getCurrentWeather,
    getWeatherForecast,
  };
};
