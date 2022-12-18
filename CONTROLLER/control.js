import { coffeeModel } from "../MODEL/model.js";

//to display all coffee in list
export const allCoffee = async (req,res)=>{
    const coffee = await coffeeModel.findAll();
    try{
        if(coffee.length === 0){
            res.status(404).json({
                message: "This table has no existing field"
            });
        }else{
            res.status(200).json({
                message: "Displaying allCoffees " + coffee.length,
                data: coffee
            });
        }
    }catch(error){
        console.log(err.message)
    }
};

//to display single coffee
export const coffeeSingle = async(req, res)=>{
    try{
        const id = req.params.id;
        const singleCoffee = await coffeeModel.findAll({
            where:{
                id: id
            }
        });
        if(singleCoffee.length === 0){
            res.status(404).json({
                message: `id ${id} doesnt exist`
            });
        }else{
            res.status(200).json({
                message: `Id ${id} : `,
                data: singleCoffee
            });
        }
    }catch(error){
        res.status(404).json({
            message: err.message
        });
    }
};

//to create or add to the coffee list
export const newCoffee = async(req, res)=>{
    try{
        const newcoffees = await coffeeModel.create(req.body);
        res.status(200).json({
            message: "New Coffee Added to list",
            data: newcoffees
        });
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

//to update an existing coffee
export const updateCoffee = async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedCoffee = await coffeeModel.update(req.body,{
            where: {
                id: id
            }
        });
        if(updatedCoffee[0] === 0){
            res.status(404).json({
                message: `Coffee with id${id} not updated`
            });
        }else{
            res.status(200).json({
                message: `Coffee has been updated`,
                data: updatedCoffee
            });
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

//to delete a coffee
export const deleteCoffee = async(req,res)=>{
    try{
        const id = req.params.id;
        const deletedCoffee = await coffeeModel.destroy({
            where: {
                id: id
            }
        });
        if(deletedCoffee === 0){
            res.status(404).json({
                message: `Coffee with id ${id} not found`
            });
        }else{
            res.status(200).json({
                message: `Coffee with id ${id} has been deleted.`
            });
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};