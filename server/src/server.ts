import express = require('express');
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//localhost:3000

app.listen(3000);