import { v4 as uuidv4 } from 'uuid';
import { db, queries } from '../db';

const { songQuery } = queries;

const create = async(data) => {
  const id = uuidv4();
  const payload = [
    id,
    data.title,
    data.artist,
    data.album,
    data.album_year,
    data.song_id,
    data.album_art,
    data.song_file_name,
  ];
  console.log(payload);

  return db.any(songQuery.addSong, payload);
};

const getAllSongs = async() => db.any(songQuery.getSongs);

const getOneSong = async(id) => db.one(songQuery.checkIfSongExists, [ id ]);

const getSongByArtist = async(artist) => db.any(songQuery.findSongByArtist, [ artist ]);

const getSongByAlbumYear = async(year) => db.any(songQuery.findSongByAlbumYear, [ year ]);

export {
  create, getAllSongs, getOneSong, getSongByArtist, getSongByAlbumYear,
};
