import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema, GraphQLSchema } from 'graphql';

class App {
  public express: express.Express;

  private schema: GraphQLSchema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
  `);

  private root: any = {
    quoteOfTheDay: () => {
      return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    random: () => {
      return Math.random();
    },
    rollThreeDice: () => {
      return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    },
  };

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
    this.express.use('/graphql', graphqlHTTP({
      schema: this.schema,
      rootValue: this.root,
      graphiql: true
    }));
  }
}

export default new App().express;
