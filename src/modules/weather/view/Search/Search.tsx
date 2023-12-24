import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getWeatherRoute } from '@/appRoutes';
import { WeatherType } from '@/domain';
import { City } from '@/domain';
import { Select } from '@/ui-kit';
import { useDebounce } from '@/utils';

import { UseCases } from '../../useCases';
import { StyledSearch } from './Search.styled';

export const Search = () => {
  const [city, setCity] = useState<string>('');
  const [optionsData, setOptionsData] = useState<Array<City>>([]);
  const { weatherType = WeatherType.Temperature } = useParams<{
    weatherType: WeatherType;
  }>();
  const debouncedValue = useDebounce<string>(city, 100);
  const navigate = useNavigate();

  const handlerSearch = (value: string) => {
    setCity(value);
  };

  const handlerSelect = (value: string) => {
    navigate(getWeatherRoute(weatherType, value));
  };

  useEffect(() => {
    const handlerRequest = async () => {
      const data = await UseCases.getCity(debouncedValue);

      setOptionsData(data ?? []);
    };

    if (Boolean(debouncedValue)) {
      handlerRequest();
    }
  }, [debouncedValue]);

  return (
    <StyledSearch>
      <Select
        showSearch
        filterOption={false}
        options={optionsData.map(({ country, name, lat, lon }) => ({
          label: `${name}, ${country}`,
          value: `${lat}_${lon}`.replaceAll('.', ','),
        }))}
        placeholder="Pleas select select place:"
        onSearch={handlerSearch}
        onSelect={handlerSelect}
        style={{ width: '50%' }}
      />
    </StyledSearch>
  );
};
