import client from "./client";

export async function createArtist(artist) {

    const response = await client.post("/artists", artist);

    return response.data;

}

export async function getArtists() {
    const response = await client.get("/artists");
    return response.data;
}

export async function getArtist(slug) {

    const response = await client.get(`/artists/${slug}`);

    return response.data;

}

export async function getArtistById(id) {
    const response = await client.get(`/artists/id/${id}`);
    return response.data;
}

export async function updateArtist(id, artist) {
    const response = await client.put(`/artists/${id}`, artist);
    return response.data;
}
