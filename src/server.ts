import './utils/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ForecastController } from './controllers/ForecastController';
import { Application } from 'express';

export class SetupServer extends Server {
    
    constructor (private port = 8002) {
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupCors();
        this.setupControllers()
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());        
    }

    private setupCors(): void {
        this.app.use(cors());
    }

    private setupControllers(): void {
        const forecastController = new ForecastController();
        this.addControllers([
            forecastController
        ]);
    }

    public getApp(): Application {
        return this.app;
    }
}