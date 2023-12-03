import { getWeatherWithTypeRoute } from '@/appRoutes';
import { WeatherType } from '@/domain';

import { ButtonNavigation } from './ButtonNavigation';

const link = [
  {
    name: 'Weather',
    link: getWeatherWithTypeRoute(WeatherType.Temperature),
  },
  {
    name: 'Forest fire',
    link: 'appRoutes.forestFire',
  },
  {
    name: 'Currency',
    link: 'appRoutes.currency',
  },
];

export const ServiceSelect = () => {
  return (
    <div>
      {link.map(({ name, link }, index) => (
        <ButtonNavigation key={`link_${index}`} name={name} link={link} />
      ))}
    </div>
  );
};
