import React from "react";  


const AlbumCoverCard = ({ title, artist, cover }) => {
    return(
        <>
        <img>{cover}</img>
        <p>{title}</p>
        <p>{artist}</p>
        </>
    )
}

export default AlbumCoverCard;