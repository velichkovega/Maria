export enum WeatherType {
  Temperature = '0',
  SolarIrradiance = '1',
  ForestFire = '2',
}

export enum MetricSystems {
  Celsius = 'metric',
  Fahrenheit = 'imperial',
  Kelvin = 'standard',
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface WeatherSysInfo {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherData {
  weather: WeatherCondition[];
  main: MainWeather;
  visibility: number;
  wind: Wind;
  rain: Record<string, number>;
  clouds: {
    all: number;
  };
  sys: WeatherSysInfo;
  timezone: number;
}

export interface ForecastWeather {
  dt: number;
  main: MainWeather;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Record<string, number>;
  sys: {
    pod: string;
  };
  dt_txt: string;
}
