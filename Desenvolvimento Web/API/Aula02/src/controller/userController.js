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

module.exports = {
    getAllUser,
}