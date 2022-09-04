import { StormGlass } from '@src/clients/StormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalize3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('Should return the normalize from the StormGlass service',
    async () => {
      const lat = -33.792723;
      const long = 29.78689;

      axios.get = jest.fn().mockResolvedValue({
        data: stormGlassWeather3HoursFixture
      });

      const stormGlass = new StormGlass(axios);
      const response = await stormGlass.fetchPoints(lat, long);
      expect(response).toEqual(stormGlassNormalize3HoursFixture);
    });
});
