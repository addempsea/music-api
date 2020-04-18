import cloudinary from 'cloudinary';
import Datauri from 'datauri';
import AWS from 'aws-sdk';
import { config } from 'dotenv';

const datauri = new Datauri();
config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ID = process.env.Access_Key_ID;
const SECRET = process.env.Secret_Access_Key;
const { BUCKET_NAME } = process.env;

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const cloudinaryConfig = async(file) => {
  try {
    datauri.format('.png', file.buffer);
    const fileBuffer = datauri.content;
    const data = await cloudinary.v2.uploader.upload(fileBuffer);
    return data;
  } catch (error) {
    return error;
  }
};

const awsConfig = async(file) => {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read',
    };

    const data = s3.upload(params).promise();
    const song = data
      .then((result) => result)
      .catch((err) => err);
    return song;
  } catch (error) {
    return error;
  }
};

export { cloudinaryConfig, awsConfig };
