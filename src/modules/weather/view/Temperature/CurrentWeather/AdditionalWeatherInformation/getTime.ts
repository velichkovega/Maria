export const getTime = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);

  return `${date.getHours()}:${date.getMinutes()}`;
};
