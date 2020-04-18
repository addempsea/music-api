import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import router from '../routes';
import { Response } from '../utils';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to music_player');
});

router(app);

app.use((req, res) => {
  Response.notFoundError(res, 'Route not found!');
});

app.use((err, req, res) => {
  Response.notFoundError(res, err.message || err);
});

export default app;
