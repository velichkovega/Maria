import { FC } from 'react';

import { CurrentWeatherData } from '@/domain';

import { TemperatureBlock } from '../components';
import { AdditionalWeatherInformation } from './AdditionalWeatherInformation';
import { Wrapper } from './CurrentWeather.styled';

interface Props {
  data: CurrentWeatherData;
}

export const CurrentWeather: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <TemperatureBlock {...data} />
      <AdditionalWeatherInformation {...data} />
    </Wrapper>
  );
};
