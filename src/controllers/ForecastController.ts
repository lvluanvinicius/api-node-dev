import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('forecast')
export class ForecastController {
  @Get('')
  public getForecastForLoggedUser(_: Request, response: Response): void {
    response.send([
      {
        test: [
          {
            Apenas: 'Testando',
            SeErro: 'Faça novamente',
          },
        ],
      },
    ]);
  }
}
