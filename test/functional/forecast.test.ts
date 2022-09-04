describe('Branch forecast functional tests', () => {
  it('Should return a forecast with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/forecast');

    expect(status).toBe(200);

    expect(body).toEqual([
      {
        test: [
          {
            Apenas: 'Testando',
            SeErro: 'Faça novamente',
          },
        ],
      },
    ]);
  });
});
