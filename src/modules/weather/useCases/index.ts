import { api } from '@/api';

import { createGetCity } from './getCity';

export const UseCases = {
  getCity: createGetCity(api),
};
