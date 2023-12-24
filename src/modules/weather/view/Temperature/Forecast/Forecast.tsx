import { FC } from 'react';

import { ForecastWeather } from '@/domain';

import { TemperatureBlock } from '../components';
import { Wrapper } from './Forecast.styled';

interface Props {
  data: ForecastWeather[];
}

export const Forecast: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <TemperatureBlock key={`forecastKey=${index}`} {...item} smallSize />
      ))}
    </Wrapper>
  );
};
