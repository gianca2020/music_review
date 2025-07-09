//import React, { use, useEffect } from "react";
import AlbumCoverCard from "./AlbumCoverCard";
import coverData from "../data/covers";


const AlbumCover = () => {



    return(
        <>
        {coverData.map((album) => (  
            <AlbumCoverCard
                key={album.id}       
                title={album.title}  
                artist={album.artist} 
                cover={album.cover}   
            />
        ))}
        </>
    )
}

export default AlbumCover;