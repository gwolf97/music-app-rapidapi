import axios from "axios";
import { GENRE_FAIL, GENRE_REQUEST, GENRE_SUCCESS, GET_ARTIST_DETAILS_FAIL, GET_ARTIST_DETAILS_REQUEST, GET_ARTIST_DETAILS_SUCCESS, GET_RELATED_TRACKS_FAIL, GET_RELATED_TRACKS_REQUEST, GET_RELATED_TRACKS_SUCCESS, GET_TRACK_FAIL, GET_TRACK_REQUEST, GET_TRACK_SUCCESS, SEARCH_FAIL, SEARCH_REQUEST, SEARCH_SUCCESS, SET_PLAYER_SONG_FAIL, SET_PLAYER_SONG_REQUEST, SET_PLAYER_SONG_SUCCESS, TOP_ARTISTS_FAIL, TOP_ARTISTS_REQUEST, TOP_ARTISTS_SUCCESS, TOP_CHARTS_FAIL, TOP_CHARTS_REQUEST, TOP_CHARTS_SUCCESS } from "../constants/constants";

export const getTracksByGenere = (genre) => async (dispatch) =>{
    try {
        dispatch({
            type: GENRE_REQUEST
        })

        const options = {
            method: 'GET',
            url: 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world',
            params: {genre_code: `${genre}`},
            headers: {
              'X-RapidAPI-Key': 'c933348c15mshf224bd49aee5258p1121c9jsn39e8cfa0a0b2',
              'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
          };

        const {data} = await axios.request(options)

        dispatch({
            type: GENRE_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GENRE_FAIL,
            payload: error.message
        })
    }
}

export const getTopCharts = () => async (dispatch) =>{
    try {
        dispatch({
            type: TOP_CHARTS_REQUEST
        })

        const options = {
            method: 'GET',
            url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
            headers: {
              'X-RapidAPI-Key': 'c933348c15mshf224bd49aee5258p1121c9jsn39e8cfa0a0b2',
              'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
          };

        const {data} = await axios.request(options)

        dispatch({
            type: TOP_CHARTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: TOP_CHARTS_FAIL,
            payload: error.message
        })
    }
}

export const getTrack = (songKey) => async (dispatch) =>{
    try {
        dispatch({
            type: GET_TRACK_REQUEST
        })

        const options = {
            method: 'GET',
            url: 'https://shazam-core.p.rapidapi.com/v1/tracks/details',
            params: {track_id: `${songKey}`},
            headers: {
              'X-RapidAPI-Key': 'c933348c15mshf224bd49aee5258p1121c9jsn39e8cfa0a0b2',
              'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
          };

        const {data} = await axios.request(options)

        dispatch({
            type: GET_TRACK_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GET_TRACK_FAIL,
            payload: error.message
        })
    }
}

export const getRelatedTracks = (songKey) => async (dispatch) =>{
    try {
        dispatch({
            type: GET_RELATED_TRACKS_REQUEST
        })

        const options = {
            method: 'GET',
            url: 'https://shazam-core.p.rapidapi.com/v1/tracks/related',
            params: {track_id: `${songKey}`},
            headers: {
              'X-RapidAPI-Key': 'c933348c15mshf224bd49aee5258p1121c9jsn39e8cfa0a0b2',
              'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
          };

        const {data} = await axios.request(options)

        dispatch({
            type: GET_RELATED_TRACKS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GET_RELATED_TRACKS_FAIL,
            payload: error.message
        })
    }
}

export const getArtistDetails = (artistId) => async (dispatch) =>{
    try {
        dispatch({
            type: GET_ARTIST_DETAILS_REQUEST
        })

        const options = {
            method: 'GET',
            url: 'https://shazam-core.p.rapidapi.com/v1/artists/details',
            params: {artist_id: `${artistId}`},
            headers: {
              'X-RapidAPI-Key': 'c933348c15mshf224bd49aee5258p1121c9jsn39e8cfa0a0b2',
              'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
          };

        const {data} = await axios.request(options)

        const artistName = data.artists[artistId].attributes.name.toLowerCase()

        const options2 = {
            method: 'GET',
            url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
            params: {offset: '0', query: `${artistName}`, search_type: 'ARTISTS'},
            headers: {
              'X-RapidAPI-Key': 'c933348c15mshf224bd49aee5258p1121c9jsn39e8cfa0a0b2',
              'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
          };

        const {data: data2} = await axios.request(options2)

        dispatch({
            type: GET_ARTIST_DETAILS_SUCCESS,
            payload: {data: data, data2: data2}
        })
        
    } catch (error) {
        dispatch({
            type: GET_ARTIST_DETAILS_FAIL,
            payload: error.message
        })
    }
}

export const search = (search) => async (dispatch) =>{
    try {
        dispatch({
            type: SEARCH_REQUEST
        })

        const options = {
            method: 'GET',
            url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
            params: {offset: '0', query: `${search}`, search_type: 'SONGS'},
            headers: {
              'X-RapidAPI-Key': 'c933348c15mshf224bd49aee5258p1121c9jsn39e8cfa0a0b2',
              'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
          };

        const {data} = await axios.request(options)

        dispatch({
            type: SEARCH_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: SEARCH_FAIL,
            payload: error.message
        })
    }
}

export const setPlayerSong = (songData) => async (dispatch) =>{
    try {
        dispatch({
            type: SET_PLAYER_SONG_REQUEST
        })

        if(songData){
            dispatch({
                type: SET_PLAYER_SONG_SUCCESS,
                payload: songData
            })
        }else{
            console.error("No song preview url")
        }

        
    } catch (error) {
        dispatch({
            type: SET_PLAYER_SONG_FAIL,
            payload: error.message
        })
    }
}

