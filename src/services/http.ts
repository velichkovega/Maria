import axios, { AxiosInstance, AxiosResponse } from 'axios';

export type HttpResponse = AxiosResponse;
export type HttpService = AxiosInstance;

export const createHttpService = (baseUrl: string, apiKey: string) => {
  const instance = axios.create({
    baseURL: baseUrl,
    params: {
      appid: apiKey,
    },
  });

  return instance;
};
