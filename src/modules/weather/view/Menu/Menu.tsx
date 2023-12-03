import { useNavigate, useParams } from 'react-router-dom';

import { getWeather } from '@/appRoutes';
import { WeatherType } from '@/domain';
import { Menu as MenuModule, theme } from '@/ui-kit';

const menuItems = [
  {
    key: WeatherType.Temperature,
    label: 'Temperature',
  },
  {
    key: WeatherType.Wind,
    label: 'Wind',
  },
  {
    key: WeatherType.ForestFire,
    label: 'Forest fire',
  },
];

export const Menu = () => {
  const {
    token: { borderRadius },
  } = theme.useToken();
  const { weatherType = WeatherType.Temperature, geo = '' } = useParams<{
    weatherType: WeatherType;
    geo: string;
  }>();
  const navigate = useNavigate();

  const handlerChange = (key: WeatherType) => {
    navigate(getWeather(key, geo));
  };

  return (
    <MenuModule
      mode="inline"
      defaultSelectedKeys={[weatherType]}
      style={{
        borderRadius: `${borderRadius}px 0 0 ${borderRadius}px`,
        padding: '0 8px',
      }}
      items={menuItems}
      onSelect={({ key }) => handlerChange(key as WeatherType)}
    />
  );
};
