import { Response } from '../../utils';
import { songServices } from '../../services';

const uploadSong = async(req, res) => {
  try {
    const data = { ...req.body };
    data.album_art = req.album_art;
    data.song_file_name = req.song_file_name;

    const newSong = await songServices.create(data);

    return newSong ?
      Response.createdOkResponse(res, newSong, 'Song created successfully.') :
      Response.serverError(res, 'Error Creating Song.');
  } catch (error) {
    return Response.serverError(res, 'Internal Server Error.');
  }
};

const getSongs = async(req, res) => {
  try {
    const allSongs = await songServices.getAllSongs();
    return allSongs ?
      Response.successResponse(res, allSongs, 'All songs returned ') :
      Response.serverError(res, 'Error Creating Song.');
  } catch (error) {
    return Response.serverError(res, 'Internal Server Error.');
  }
};

const getSongById = async(req, res) => {
  try {
    const { id } = req.params;
    const oneSong = await songServices.getOneSong(id);
    return oneSong ?
      Response.successResponse(res, oneSong, 'One song returned ') :
      Response.serverError(res, 'Error Getting Song.');
  } catch (error) {
    return Response.serverError(res, 'Internal Server Error.');
  }
};

const getSongByYear = async(req, res) => {
  try {
    const { year } = req.params;
    const songs = await songServices.getSongByAlbumYear(year);
    return songs ?
      Response.successResponse(res, songs, 'Successfully returned ') :
      Response.serverError(res, 'Error Getting Song.');
  } catch (error) {
    return Response.serverError(res, 'Internal Server Error.');
  }
};

const getSongByArtist = async(req, res) => {
  try {
    console.log(req.headers)
    const { artist } = req.params;
    const songs = await songServices.getSongByArtist(artist);
    return songs ?
      Response.successResponse(res, songs, 'Successfully returned ') :
      Response.serverError(res, 'Error Getting Song.');
  } catch (error) {
    return Response.serverError(res, 'Internal Server Error.');
  }
};

export {
  uploadSong, getSongs, getSongById, getSongByYear, getSongByArtist,
};
