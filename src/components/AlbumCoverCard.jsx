import React from "react";  


const AlbumCoverCard = ({ title, artist, cover }) => {
    return(
        <>
        <img src = {cover} alt="title"></img>
        <p>{title}</p>
        <p>{artist}</p>
        </>
    )
}

export default AlbumCoverCard;