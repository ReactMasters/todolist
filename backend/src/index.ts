import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({
    port: 4000
}).then(info => console.log(info))