import urlJoin from 'url-join';

const toQuery = (params: { [key: string]: any }) =>
  Object.entries(params)
    .filter(([, value]) => typeof value !== 'undefined')
    .reduce((query, [key, value]) => {
      const param = `${key}=${value.toString()}`;

      return query ? query.concat('&', param) : '?'.concat(param);
    }, '');

const join = (...chunks: string[]) => urlJoin(...chunks);

export const url = {
  join,
  toQuery,
};
