import { buildSchema } from 'graphql';


export default buildSchema(`
    type User {
        id: ID
        name: String
    }
    type Transaction {
        id: ID
    }
    type Link {
        id: ID
    }
    type Query {
        statement(): [Transaction]
    }
    type Mutation {
        deposit(): Transaction
    }
    type Subscription {
       newLink: Link
    }
`);