import 'dotenv/config';

const { DATABASE_URL, SECRET } = process.env;
export default {
  MUSICPLAYERAPI_DATABASE_URL: DATABASE_URL,
  SECRET,
};
