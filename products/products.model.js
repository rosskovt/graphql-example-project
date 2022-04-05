const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        reviews: [
            {
                rating: 10,
                comment: 'Nice Product',
            }
        ],
        price: 42.12,
    },
    {
        id: 'bluejean',
        description: 'Blue Jean',
        reviews: [
            {
                rating: 8,
                comment: 'Not too bad of a Product',
            }
        ],
        price: 55.55,
    }
];

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    })
}

function getProductById(id) {
    return products.find((product) => {
        return product.id === id;
    });
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id: id,
        description,
        reviews: [],
        price,
    };
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment) {
    const newReview = {
        rating,
        comment,
    };
    return products.find((product) => {
        if (product.id === id) {
            product.reviews.push(newReview);
        }
        return product;
    });
}
module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview,
};