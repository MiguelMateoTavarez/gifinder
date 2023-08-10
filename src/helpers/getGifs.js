export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=2Tv6eNSWsk6vOhD30S160WWd1aSC4u2l&q=${category}&limit=12`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))

    return gifs;
}