const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const { makeExecutableSchema } = require('@graphql-tools/schema');

// "!" means required field
const schemaText = `
type Query {
    products: [Product]
    orders: [Order]
}

type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
}

type OrderItem {
   product: Product!
   quantity: Int! 
}

type Product {
    id: ID!
    description: String!
    reviews: [Review] 
    price: Float!
}

type Review {
    rating: Int!
    comment: String
}
`;
const schema = buildSchema(schemaText);
// const schema = makeExecutableSchema({
    // typeDefs: [schemaText]
// })


const root = {
    products: [
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
    ],
    orders: [
        {
            date: '2005-05-05',
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        description: 'Old Red Shoe',
                        price: 45.11,
                    },
                    quantity: 2,
                }
            ]
        }
    ]
};

const app = express();

app.listen(3000, () => {
    console.log('Running GraphQL server...');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
})); 