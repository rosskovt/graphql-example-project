const ordersModel = require('./orders.model');

module.exports = {
    Query: {
        orders: async () => {
            console.log('Getting orders');
            return await Promise.resolve(ordersModel.getAllOrders());
        }
    }
};