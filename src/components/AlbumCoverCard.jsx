import { useState,useEffect} from "react";  
import { getAlbum } from "../API/spotify";


const AlbumCoverCard = ({ albumID}) => {
    const [albumData, setAlbumData] = useState(null);
    useEffect(() => {
            const fetchAlbumData = async () => {
                //maybe replace it with a prop for "albumID" later"
                const data = await getAlbum("621OhgnZJ7Pz8iUazct1In");
                setAlbumData(data);
                // Do something with albumData
            };
            fetchAlbumData();
        }, [albumID]);
    console.log("Album data:", albumData);
    return(
        <>
        <div className="h-48 w-32 sm:h-56 sm:w-40 md:h-64 md:w-44">
        <img src = {albumData?.images[0]?.url} alt="title" className="h-full w-full object-cover"></img>
        </div>
        <div className="text-center text-[#a4b0c1] text-[14px]">
        <p>{ albumData?.name}</p>
        <p>{albumData?.artists[0]?.name}</p>
        <p>{albumData?.release_date}</p>
        </div>
        </>
    )
}

export default AlbumCoverCard;