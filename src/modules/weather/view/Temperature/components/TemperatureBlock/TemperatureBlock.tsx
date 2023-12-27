import { FC } from 'react';

import { CurrentWeatherData } from '@/domain';
import { Typography } from '@/ui-kit';

import { CurrentTemp, CurrentTempWrapper, WindWrapper } from './TemperatureBlock.styled';

interface Props {
  main: CurrentWeatherData['main'];
  weather: CurrentWeatherData['weather'];
  wind: CurrentWeatherData['wind'];
  smallSize?: boolean;
}

export const TemperatureBlock: FC<Props> = ({ main, weather, wind, smallSize }) => {
  return (
    <CurrentTempWrapper>
      <CurrentTemp small={`${Boolean(smallSize)}`}>{Math.round(main.temp)}°C</CurrentTemp>
      <Typography.Text>Feels like: {Math.round(main.feels_like)}°C</Typography.Text>
      <div>
        <Typography.Text>
          {weather[0].main}, {weather[0].description}
        </Typography.Text>
      </div>
      <div>
        <WindWrapper deg={wind.deg}>&larr;</WindWrapper>{' '}
        <Typography.Text> {wind.speed} m/s</Typography.Text>
      </div>
    </CurrentTempWrapper>
  );
};
