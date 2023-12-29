import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import connection from './database/db.js';
import Router from './routes/routes.js'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`listening on port ${PORT}`));
connection();