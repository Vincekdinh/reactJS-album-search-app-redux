import React from "react";
import AlbumItem from "./AlbumItem";
import Spinner from "./Spinner";

//pass an array of albums as a prop and use map function
const AlbumsList = ({ albums, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="ui grid">
                {albums.map((album) => (
                    <AlbumItem key={album.collectionId} album={album} />
                ))}
            </div>
        );
    };
}

export default AlbumsList;
