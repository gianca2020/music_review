//import React, { use, useEffect } from "react";
import AlbumCoverCard from "./AlbumCoverCard";
import coverData from "../data/covers";


const AlbumCover = () => {
    return(
        <div className="flex flex-col justify-center align-middle items-center gap-4 p-4 mx-auto h-48 w-32 sm:h-56 sm:w-40 md:h-64 md:w-44 mt-8" >
        {coverData.map((album) => (  
            <AlbumCoverCard
                key={album.id}       
                albumID={album.albumID}
                title={album.title}  
                artist={album.artist} 
                cover={album.cover}   
            />
        ))}
        </div>
    )
}

export default AlbumCover;