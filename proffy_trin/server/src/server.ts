import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//*o método listen faz a aplicação ouvir requisições http -> localhost:3333
app.listen(3333);
