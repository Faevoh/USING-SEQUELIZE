import { Sequelize, DataTypes } from "sequelize";
import sequel from "../CONFIG/connection.js";
// const {DataTypes} = Sequelize;

export const coffeeModel = sequel.define("coffeeTab", {
    coffeeName: {
        type: DataTypes.STRING
    },
    coffeePrice: {
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});