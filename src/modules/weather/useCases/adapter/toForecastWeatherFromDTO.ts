import { WeatherForecastDTO } from '@/api';
import { ForecastWeather } from '@/domain';

export const toForecastWeatherFromDTO = (dto: WeatherForecastDTO): ForecastWeather[] => {
  return dto.list;
};
