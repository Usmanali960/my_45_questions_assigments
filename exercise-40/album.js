"use strict";
function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("artist 1", "title1");
const album2 = makeAlbum("artist 2", "title2", 20);
const album3 = makeAlbum("artist 3", "title3", 30);
console.log(album1);
console.log(album2);
console.log(album3);
