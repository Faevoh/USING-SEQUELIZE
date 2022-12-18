import express from "express";
import { allCoffee ,coffeeSingle, newCoffee, updateCoffee, deleteCoffee} from "../CONTROLLER/control.js";
import { Sequelize } from "sequelize";

 export const coffeeRoute = express.Router();
coffeeRoute.get("/coffee", allCoffee);
//display single coffee
coffeeRoute.get("/coffee/:id", coffeeSingle);
//creating new coffee
coffeeRoute.post("/coffee", newCoffee);
//update coffee
coffeeRoute.patch("/coffee/:id", updateCoffee);
//delete coffee
coffeeRoute.delete("/coffee/:id", deleteCoffee);