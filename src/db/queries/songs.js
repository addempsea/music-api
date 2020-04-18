export default {
  addSong: `
          INSERT INTO
              songs(
                  id ,
                  title ,
                  artist ,
                  album ,
                  album_year ,
                  song_id,
                  album_art  , 
                  song_file_name
              )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING *
      `,

  getSongs: `
    SELECT * FROM songs`,

  checkIfSongExists: `
    SELECT *
    FROM songs
    WHERE song_id=($1)`,

  findSongByArtist: `
    SELECT *
    FROM songs
    WHERE artist=($1)
    `,
  findSongByAlbumYear: `
    SELECT *
    FROM songs
    WHERE album_year=($1)
    `,
};
