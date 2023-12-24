import { FC } from 'react';

import { CurrentWeatherData } from '@/domain';
import { Typography } from '@/ui-kit';

import { AdditionalWrapper } from './AdditionalWeatherInformation.styled';
import { getTime } from './getTime';

interface Props {
  sys: CurrentWeatherData['sys'];
  main: CurrentWeatherData['main'];
  visibility: CurrentWeatherData['visibility'];
}

export const AdditionalWeatherInformation: FC<Props> = ({ sys, main, visibility }) => {
  return (
    <AdditionalWrapper>
      <Typography.Text>
        Max: {Math.round(main.temp_max)}°C, Min: {Math.round(main.temp_min)}°C
      </Typography.Text>
      <Typography.Text>Pressure: {Math.round(main.pressure)} hPa</Typography.Text>
      <Typography.Text>Humidity: {Math.round(main.humidity)}%</Typography.Text>
      <Typography.Text>Visibility: {Math.round(visibility / 1000)} km</Typography.Text>
      <Typography.Text>Sunrise: {getTime(sys.sunrise)}</Typography.Text>
      <Typography.Text>Sunset: {getTime(sys.sunset)}</Typography.Text>
    </AdditionalWrapper>
  );
};
