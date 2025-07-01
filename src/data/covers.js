import {v4 as uuid} from 'uuid';

const covers = [
    {   
        title: "IGOR",
        artist: "Tyler, The Creator",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Igor_-_Tyler%2C_the_Creator.jpg/250px-Igor_-_Tyler%2C_the_Creator.jpg",
        id: uuid(),

    }
]

const coverData = covers.map((AlbumCover, originalIndex) => ({
    id: uuid(),
    originalIndex: originalIndex,
    ...AlbumCover,
}));

export default coverData;