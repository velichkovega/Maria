import { Weather } from '@/modules/weather';

import { ModuleContainer, Wrapper } from './Weather.styled';

export const WeatherPage = () => {
  return (
    <Wrapper>
      <ModuleContainer>
        <Weather />
      </ModuleContainer>
    </Wrapper>
  );
};
