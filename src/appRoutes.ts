import { url } from '@/utils';

export const appRoutes = {
  root: '/',
  weather: '/weather',
} as const;

export const getWeatherRoute = (weatherType: string, geo?: string) => {
  return url.join(appRoutes.weather, weatherType, geo ?? '');
};

export const getWeatherWithTypeRoute = (weatherType: string) => {
  return url.join(appRoutes.weather, weatherType);
};
