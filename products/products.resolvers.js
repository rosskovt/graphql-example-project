const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: async () => {
            console.log('Getting products');
            return await Promise.resolve(productsModel.getAllProducts());
        }
    }
}