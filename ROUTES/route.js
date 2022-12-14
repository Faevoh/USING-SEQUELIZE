import express from "express";
import { allCoffee } from "../CONTROLLER/control.js";
import { Sequelize } from "sequelize";

 export const coffeeRoute = express.Router();
coffeeRoute.get("/coffee", allCoffee);