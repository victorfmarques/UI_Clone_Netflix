const API_KEY = '8416f189ab454225daddfc6983cbd97c';
const API_BASE = 'https://api.themoviedb.org/3';
const LANG = 'en-US'

/*
 -Netflix Originals
 -Trending
 -Top Rated
 -Action
 -Comedy
 -Romance
 -Horror
 -Documentary
*/


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}


export default {
    getHomeList: async() => {
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await basicFetch(`/discover/tv?with_network=213&language=${LANG}&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Trending',
                items: await basicFetch(`/trending/all/week?language=${LANG}&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await basicFetch(`/movie/top_rated?language=${LANG}&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=${LANG}&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=${LANG}&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=${LANG}&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=${LANG}&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&language=${LANG}&api_key=${API_KEY}`)
            },
        ]
    }
}
