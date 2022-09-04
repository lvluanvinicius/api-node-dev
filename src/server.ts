import './utils/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import cors from 'cors';

export class SetupServer extends Server {
    
    constructor (
        private port = 8002
    ) {
        super();
    }

    public init(): void {
        this.setupExpress();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }
}