import { useParams } from 'react-router-dom';

import { WeatherType } from '@/domain';
import { Divider, Layout, theme } from '@/ui-kit';

import { ForestFire } from './ForestFire';
import { Menu } from './Menu';
import { Search } from './Search';
import { SolarIrradiance } from './SolarIrradiance';
import { Temperature } from './Temperature';

const contentMap = new Map([
  [WeatherType.Temperature, <Temperature key={WeatherType.Temperature} />],
  [WeatherType.SolarIrradiance, <SolarIrradiance key={WeatherType.SolarIrradiance} />],
  [WeatherType.ForestFire, <ForestFire key={WeatherType.ForestFire} />],
]);

export const Weather = () => {
  const {
    token: { borderRadius, colorBgBase },
  } = theme.useToken();
  const { weatherType = WeatherType.Temperature } = useParams<{
    weatherType: WeatherType;
  }>();

  return (
    <Layout
      style={{
        borderRadius: borderRadius,
        background: colorBgBase,
        backdropFilter: 'blur(5px) contrast(200%)',
        height: '100%',
        padding: '12px 0',
        boxShadow: '0px 0px 21px 0px rgba(66, 68, 90, 1)',
      }}
    >
      <Layout.Sider
        width={200}
        style={{ background: 'transparent', borderRight: '1px solid #fff' }}
      >
        <Menu />
      </Layout.Sider>
      <Layout.Content style={{ padding: '0 12px', minHeight: 280 }}>
        <Search />
        <Divider style={{ margin: '12px 0', height: '1px', background: '#fff' }} />
        {contentMap.get(weatherType)}
      </Layout.Content>
    </Layout>
  );
};
