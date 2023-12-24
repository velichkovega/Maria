import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CurrentWeatherData, ForecastWeather } from '@/domain';

import { UseCases } from '../../useCases';
import { CellTable } from './CellTable';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';
import { Wrapper } from './Temperature.styled';

export const Temperature = () => {
  const [weatherByGeo, setWeatherByGeo] = useState<CurrentWeatherData>(
    {} as CurrentWeatherData,
  );
  const [weatherForecastByGeo, setWeatherForecastByGeo] = useState<ForecastWeather[]>(
    [] as ForecastWeather[],
  );
  const { geo = '' } = useParams<{
    geo: string;
  }>();

  useEffect(() => {
    const [lat, lon] = geo.replaceAll(',', '.').split('_');

    UseCases.getCurrentWeather(lat, lon).then((data = {} as CurrentWeatherData) =>
      setWeatherByGeo(data),
    );

    UseCases.getWeatherForecast(lat, lon, 3).then((data = [] as ForecastWeather[]) =>
      setWeatherForecastByGeo(data),
    );
  }, [geo]);

  if (!Boolean(Object.keys(weatherByGeo).length)) {
    return <div>Empty</div>;
  }

  return (
    <Wrapper>
      <div className="current-weather" style={{ gridArea: 'current-weather' }}>
        <CurrentWeather data={weatherByGeo} />
      </div>
      <div className="map" style={{ gridArea: 'map' }}>
        <CellTable />
      </div>
      <div className="forecast" style={{ gridArea: 'forecast' }}>
        <Forecast data={weatherForecastByGeo} />
      </div>
    </Wrapper>
  );
};
