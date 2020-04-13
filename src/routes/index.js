import apiVersion1 from '../config/versioning/v1';

const router = (app) => {
  app.use('/api/v1', apiVersion1);
};

export default router;
