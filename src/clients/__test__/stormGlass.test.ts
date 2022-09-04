import { StormGlass } from '@src/clients/StormGlass';

describe('StormGlass client', () => {
  it('Should return the normalize from the StormGlass service',
    async () => {
      const lat = -33.792723;
      const long = 29.78689;

      const stormGlass = new StormGlass();
      const response = await stormGlass.fetchPoints(lat, long);
      expect(response).toEqual({});
    });
});
