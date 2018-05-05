import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema, GraphQLSchema } from 'graphql';

class App {
  public express: express.Express;

  private schema: GraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
  `);
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
    let root: any = { hello: () => 'Hello world!' };
    this.express.use('/graphql', graphqlHTTP({
      schema: this.schema,
      rootValue: root,
      graphiql: true
    }));
  }
}

export default new App().express;
