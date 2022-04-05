const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: async () => {
            console.log('Getting products');
            return await Promise.resolve(productsModel.getAllProducts());
        },
        productsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.min, args.max);
        },
        productById: (_, args) => {
            return productsModel.getProductById(args.id);
        }
    }
}