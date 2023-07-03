const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const schema = gql(`
  type Query {
    olaMundo: String
  }
`)
  
const resolvers = { 
  Query: {
    olaMundo: () => "Hello world! Nossa primeira consulta!" 
  }
}
  
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs: schema, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => console.log(`Servidor rodando na porta http://localhost:4000${server.graphqlPath}`));
}

startApolloServer();