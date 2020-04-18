import { Router } from 'express';
import { multerUploads, awsUpload, cloudinaryUpload } from '../middlewares';
import {
  uploadSong, getSongs, getSongById, getSongByYear,
} from '../controllers/songs/index';


const router = new Router();

router.post('/upload', multerUploads, cloudinaryUpload, awsUpload, uploadSong);
router.get('/all', getSongs);
router.get('/song/:id', getSongById);
router.get('/year/:year', getSongByYear);

export default router;
