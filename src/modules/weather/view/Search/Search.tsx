import { Select } from '@/ui-kit';

import { StyledSearch } from './Search.styled';

const options = [
  {
    label: 'kek',
    value: 1,
  },
  {
    label: 'qwe',
    value: 2,
  },
];

export const Search = () => {
  const test = (value: string) => {
    console.log('log', value);
  };
  return (
    <StyledSearch>
      <Select
        showSearch
        options={options}
        placeholder="Pleas select select place:"
        onSearch={test}
        style={{ width: '50%' }}
      />
    </StyledSearch>
  );
};
