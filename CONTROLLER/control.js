import { coffeeModel } from "../MODEL/model.js";

export const allCoffee = async (req,res)=>{
    const coffee = await coffeeModel.findAll();
    try{
        if(coffee.length === 0){
            res.status(404).json({
                message: "This table has no existing field"
            });
        }else{
            res.status(200).json({
                message: "Displaying allCoffees",
                data: rows
            });
        }
    }catch(error){
        console.log(err.message)
    }
};