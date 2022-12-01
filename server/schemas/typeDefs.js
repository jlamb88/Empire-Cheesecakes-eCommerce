const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    streetAddress: String
    city: String
    state: String
    zipcode: Int
    phone: Float
    email: String
    password: String
    payment: [Payment]
}

type Payment {
    cardType: cardTypeEnum
    cardNumber: Float
    expiration: String
    default: Boolean
}

enum cardTypeEnum {
    VISA
    MASTERCARD
    AMERICAN EXPRESS
    DISCOVER
}

type Product {
    _id: ID
    name: String
    description: String
    price: Int
    quantity: Int
    allergens: [String]
    comments: [Comment]
}

type Order {
    _id: ID
    total: Int
    user: User
    products: [Product]
    orderedAt: String
    transId: Int
}

type Comment {
    name: String
    text: String
    rating: Int
    dateAdded: String
}

type Cart {
    id: String!
    quantity: Int
}

type Auth {
    token: ID!
    user: User
}

type Checkout {
    transId: ID
}

input userPayment {
    _id: ID
    cardType: cardTypeEnum!
    cardNumber: Float!
    expiration: String!
    default: Boolean
}

type Query {
    user(_id: ID!): User
    users: [User]
    products: [Product]
    product(_id: ID!): Product
    userOrders(userId: ID!): Order
    order(_id: ID!):Order
    orders: [Order]
    cart(userId: ID!): Cart
    checkout(products: [ID]!): Checkout
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
        firstName: String 
        lastName: String
        streetAddress: String
        city: String
        state: String
        zipcode: Int
        phone: Float
        email: String!
        password: String!
        ): Auth
    addOrder(
        userId: ID, 
        products: [ID]!, 
        total:Int, 
        transId: Int): Order
    updateUser(
        firstName: String
        lastName: String
        streetAddress: String
        city: String
        state: String
        zipcode: Int
        phone: Int
        email: String!
        password: String!
        ):User
    addPayment(
        content: userPayment
    ):User
    updatePayment(
        _id:ID!, content: userPayment
    ):User
    deletePayment(_id:ID!, payId:ID!):User
    addComment(
        _id:ID!
        name: String!
        text: String!
        rating: Int
        ):Product
    addCart(
        id: ID!
        quantity: Int
    ):Cart
    updateCartItems(
        userID: ID!
        productID: ID!
        quantity: Int
    ):Cart  
    deleteCartItem(
        userID: ID!
        productID: ID!
    ):Cart

}`


module.exports = typeDefs

// changed typeCart and addCart for testing