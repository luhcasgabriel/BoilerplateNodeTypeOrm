import express, { Router} from "express" 
import { routes } from "./routes"
import { AppController } from "./app"

import "./database";

const app = new AppController().app;
   
/*const app = express();

app.use(express.json());

app.use(routes);*/

app.listen(3333, () => console.log('server is running on port 3333')); 

