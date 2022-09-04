import { AxiosStatic } from 'axios';
// cowasop938@lurenwu.com - login e senha do stormglass

export interface StormGlassPointSource {
    [key: string]: number;
}

export interface StormGlassPoint {
    readonly time: string;
    readonly waveHeight: StormGlassPointSource;
    readonly waveDirection: StormGlassPointSource;
    readonly swellDirection: StormGlassPointSource;
    readonly swellHeight: StormGlassPointSource;
    readonly swellPeriod: StormGlassPointSource;
    readonly windDirection: StormGlassPointSource;
    readonly windSpeed: StormGlassPointSource;
}

export interface StormGlassForecastResponse {
    hours: StormGlassPoint[];
}

export interface ForecastPoint {
    time: string;
    waveHeight: number;
    waveDirection: number;
    swellDirection: number;
    swellHeight: number;
    swellPeriod: number;
    windDirection: number;
    windSpeed: number;
}

export class StormGlass {
    readonly paramsStormGlass = 'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly apiSourceStormGlass = "noaa";

    constructor(protected request: AxiosStatic) {}

  public async fetchPoints(lat: Number, long: Number): Promise<ForecastPoint[]> {
    const response = await this.request.get<StormGlassForecastResponse>(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${this.paramsStormGlass}&source=${this.apiSourceStormGlass}`);
    return this.normalizeResponse(response.data);
  }

  private normalizeResponse(points: StormGlassForecastResponse): ForecastPoint[] {
    return points.hours.filter(this.isValidPoint.bind(this)).map((point) => ({
        swellDirection: point.swellDirection[this.apiSourceStormGlass],
        swellHeight: point.swellHeight[this.apiSourceStormGlass],
        swellPeriod: point.swellPeriod[this.apiSourceStormGlass],
        time: point.time,
        waveDirection: point.waveDirection[this.apiSourceStormGlass],
        waveHeight: point.waveHeight[this.apiSourceStormGlass],
        windDirection: point.windDirection[this.apiSourceStormGlass],
        windSpeed: point.windSpeed[this.apiSourceStormGlass],
      }));
  }

  private isValidPoint(point: Partial<StormGlassPoint>): boolean {
    return !!(
        point.time &&
        point.swellDirection?.[this.apiSourceStormGlass] &&
        point.swellHeight?.[this.apiSourceStormGlass] &&
        point.swellPeriod?.[this.apiSourceStormGlass] &&
        point.waveDirection?.[this.apiSourceStormGlass] &&
        point.waveHeight?.[this.apiSourceStormGlass] &&
        point.windDirection?.[this.apiSourceStormGlass] &&
        point.windSpeed?.[this.apiSourceStormGlass]
      );
  }
}
