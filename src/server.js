import express from 'express';
import expressGraphql from 'express-graphql';
import schema from './graphql/schema/schema';
import resolvers from './graphql/resolvers'

const app = express();

app.set('port', (process.env.PORT || 3001));
app.set('host', (process.env.HOST || '0.0.0.0'));
app.use(
    "/graph",
    expressGraphql({
      schema,
      rootValue: resolvers,
      graphiql: true
    })
  );

app.get('/', (req, res) => { res.json({}) })



app.listen(app.get('port'), app.get('host'))
