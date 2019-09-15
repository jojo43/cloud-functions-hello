import { ApolloServer, gql } from 'apollo-server-cloud-functions'

const typeDefs = gql`
  type Query {
    hello(name: String): String
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }): string => `Hello ${name}!`,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

export const handler = server.createHandler()
