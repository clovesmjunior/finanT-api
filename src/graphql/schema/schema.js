import { buildSchema } from 'graphql';


export default buildSchema(`
    type User {
        id: ID
        name: String
    }
    type Query {
        user(id: ID!): User
        users: [User]
    }
    type Mutation {
        createUser(name: String!, repo: String!, age: Int!): User
    }
`);