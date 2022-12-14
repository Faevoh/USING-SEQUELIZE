import Sequelize from "sequelize"
const sequel = new Sequelize("coffeeDB", "root", "ROOT",{
    host: "localhost",
    dialect: "mysql"
});
export default sequel;