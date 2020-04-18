/* Replace with your SQL commands */
CREATE TABLE songs (
    id  uuid PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    artist VARCHAR(500) NOT NULL,
    album VARCHAR(500),
    album_year VARCHAR(50) ,
    album_art VARCHAR(5000) , 
    song_file_name VARCHAR(5000) NOT NULL,
    song_id VARCHAR(50) UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ
)