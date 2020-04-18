import { uploadServices } from '../../services';

const cloudinaryUpload = async(req, res, next) => {
  try {
    const file = [ ...req.files.image ];
    const data = await uploadServices.cloudinaryConfig(...file);

    req.album_art = data.secure_url;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default cloudinaryUpload;
