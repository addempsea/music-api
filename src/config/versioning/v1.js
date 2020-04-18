import { Router } from 'express';
import songs from '../../routes/songs';

const api = Router();

api.use('/songs', songs);

export default api;
