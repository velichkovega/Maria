import { CurrentWeatherDataDTO } from '@/api';
import { CurrentWeatherData } from '@/domain';

export const toCurrentWeatherDataFromDTO = (
  dto: CurrentWeatherDataDTO,
): CurrentWeatherData => ({
  weather: dto?.weather ?? [{}],
  main: dto?.main ?? {},
  visibility: dto?.visibility ?? 100,
  wind: dto?.wind ?? {},
  rain: dto?.rain ?? {},
  clouds: dto?.clouds ?? {},
  sys: dto?.sys ?? {},
  timezone: dto?.timezone ?? 0,
});
