import ("./CONFIG/connection.js");
import express from "express";
import { coffeeRoute } from "./ROUTES/route.js";
import { Sequelize } from "sequelize";

const app = express();
app.use(express.json());

app.use("/api/v2", coffeeRoute);

const port = 5050;
app.listen(port, ()=>{
    console.log(`Server is connected to: ${port}`)
});