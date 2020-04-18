import { uploadServices } from '../../services';

const awsUpload = async(req, res, next) => {
  try {
    const file = [ ...req.files.song ];
    const data = await uploadServices.awsConfig(...file);

    req.song_file_name = data.Location;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default awsUpload;
