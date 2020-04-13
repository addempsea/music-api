import "dotenv/config";

const { MUSICPLAYERAPI_DATABASE_URL, SECRET } = process.env;
export default {
  MUSICPLAYERAPI_DATABASE_URL,
  SECRET,
};
