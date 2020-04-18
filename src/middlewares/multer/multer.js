import multer from 'multer';

const storage = multer.memoryStorage();

const upload = multer({ storage });
const multerUploads = upload.fields([ { name: 'image', maxCount: 1 }, { name: 'song', maxCount: 1 } ]);

export default multerUploads;
