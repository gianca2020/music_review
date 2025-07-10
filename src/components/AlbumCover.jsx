import React, { useState, useEffect } from "react";
import AlbumCoverCard from "./AlbumCoverCard";
import { getNewReleases } from "../API/spotify";

const AlbumCover = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const newReleases = await getNewReleases();
            setAlbums(newReleases);
        };
        fetchData();
    }, []);

    return(
        <div className="grid grid-cols-5 grid-rows-4 gap-14 p-4 mx-auto max-w-fit place-items-center mt-6 ">
        {albums.map((album) => (  
            <AlbumCoverCard
                key={album.id}       
                albumID={album.id}
                title={album.name}  
                artist={album.artists[0]} 
                cover={album.images[0]?.url}   
            />
        ))}

        </div>
    )
}

export default AlbumCover;

// In AlbumCoverCard, change to:
// <div className="h-48 w-48"> // Fixed square size