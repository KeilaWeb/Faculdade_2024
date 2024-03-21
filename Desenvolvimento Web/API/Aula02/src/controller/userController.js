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
    const {name, email, password} = req.body;
    try{
        await userService.createUser(name, email, password);

        res.status(201).json({ message: "Success"})
    }catch(error){
        res.status(500).send
({
    message: "Error adding user!",
    error:error.message,
})    }
}

module.exports = {
    getAllUser,
    createUser,
}