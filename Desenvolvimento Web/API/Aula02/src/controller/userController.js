const userService = require('../service/user.js');

async function getAllUser(req, res){
    try{
        const rows = await userService.getAllUser();
        res.status(200).json(rows);
    }catch(error){
        res.status(500).send({
            message: "Error getting user",
            body: error.message,
        })
    }
}

async function createUser(req, res){
        try{
            const {name, email, password} = req.body;

            await userService.createUser(name, email, password);
            res.status(201).json({ message: "Success"})
        }catch(error){
            res.status(500).send
        ({
            message: "Error adding user!",
            error:error.message,
        })    
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { name, email, password } = req.params;

        await userService.updateUser(id, name, password);
        res.status(204).json("Sucess");
    }catch(error){
        res.status(500).send({
            message: 'Error updating user',
            body: error.message,
        })
    }
}

module.exports = {
    getAllUser,
    createUser,
}