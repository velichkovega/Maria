import { appRoutes } from '@/appRoutes';

import { ButtonNavigation } from './ButtonNavigation';

const link = [
  {
    name: 'Weather',
    link: appRoutes.weather,
  },
  {
    name: 'Forest fire',
    link: appRoutes.forestFire,
  },
  {
    name: 'Currency',
    link: appRoutes.currency,
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
