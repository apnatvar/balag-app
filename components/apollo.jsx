   import { ApolloClient, InMemoryCache } from '@apollo/client';

   const QLClient = new ApolloClient({
     uri: 'https://your-graphql-endpoint.com/graphql',  // Replace with your GraphQL API endpoint
     cache: new InMemoryCache(),  // InMemoryCache is useful for caching queries
   });

   export default QLClient;