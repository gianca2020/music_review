import { useState,useEffect} from "react";  
import { getAlbum } from "../API/spotify";


const AlbumCoverCard = ({ albumID}) => {
    const [albumData, setAlbumData] = useState(null);
    useEffect(() => {
            const fetchAlbumData = async () => {
                //maybe replace it with a prop for "albumID" later"
                const data = await getAlbum("3mH6qwIy9crq0I9YQbOuDf");
                setAlbumData(data);
                // Do something with albumData
            };
            fetchAlbumData();
        }, [albumID]);
    console.log("Album data:", albumData);
    return(
        <>
        <img src = {albumData?.images[0]?.url} alt="title"></img>
        <p>{ albumData?.name}</p>
        <p>{albumData?.artists[0]?.name}</p>
        <p>{albumData?.release_date}</p>
        </>
    )
}

export default AlbumCoverCard;