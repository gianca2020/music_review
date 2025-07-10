const APIController = (function () {
    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_SECRET_ID;

    const _getToken = async () => {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials'
            })
        });
        const data = await response.json();
        return data.access_token;
    }

    const getAlbum = async (albumID) => {
        const token = await _getToken();
        const response = await fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    }
    
    const getNewReleases = async (token) => {
        //const token = await _getToken();
        const res = await fetch(`https://api.spotify.com/v1/browse/new-releases`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await res.json();
        const albums = data.albums.items.map(album => ({
            id: album.id,
            name: album.name,
            artists: album.artists.map(artist => artist.name),
            images: album.images
        }));
        return albums;
    }

    return {
        getAlbum: async function(albumID) {
            return await getAlbum(albumID);
        },
        getNewReleases: async function() {
            const token = await _getToken();
            return await getNewReleases(token);
        }
    }
})();

export const getAlbum = APIController.getAlbum;
export const getNewReleases = APIController.getNewReleases;