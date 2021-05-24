import e from "express";
import express from "express"
import { routes } from "./routes"


import "./database";

class AppController {

    app = express();
    constructor() {
        this.middlewares();
        this.routes();
        
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(routes);
    }
}

export { AppController }