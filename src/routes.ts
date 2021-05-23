import express, { request, response, Router } from "express";
import { ItemsController } from "./controllers/ItemsController";
import { MenusController } from "./controllers/MenusController";
import { OrdersController } from "./controllers/OrdersController";

const routes = Router();

const itemsController = new ItemsController();
const menuController = new MenusController();
const ordersController = new OrdersController();

/* items */
routes.post("/items" , itemsController.Create);
routes.get("/items"  , itemsController.Find);

/* menu - lunch */
routes.post("/menu", menuController.Create);
routes.get("/menu" , menuController.List);
routes.get("/menu/:id", menuController.Find);

/* orders */
routes.post("/orders" , ordersController.Create);
routes.get("/orders" , ordersController.List);
routes.get("/orders/:id", ordersController.Find);


export { routes };