import React from "react";
import AlbumCoverCard from "./AlbumCoverCard";
import coverData from "../data/covers";

const AlbumCover = () => {
    return(
        <>
        {coverData.map((album) => (  // ← Missing this map
            <AlbumCoverCard
                key={album.id}       // ← Missing key
                title={album.title}  // ← Missing dynamic data
                artist={album.artist} // ← Missing this prop
                cover={album.cover}   // ← Missing this prop
            />
        ))}
        </>
    )
}

export default AlbumCover;