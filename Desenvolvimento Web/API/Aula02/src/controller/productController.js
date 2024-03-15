const productService = require('../service/product.js');

async function getAllProduct(req, res){
    try{
        const rows = await productService.getAllProduct();
        res.status(200).json(rows);
    }catch(error){
        res.status(500).send({
            message: "Error getting product",
            body: error.message,
        })
    }
}

module.exports = {
    getAllProduct,
}