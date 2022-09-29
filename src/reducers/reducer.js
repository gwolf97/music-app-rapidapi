import { GENRE_FAIL, GENRE_REQUEST, GENRE_SUCCESS, GET_ARTIST_DETAILS_FAIL, GET_ARTIST_DETAILS_REQUEST, GET_ARTIST_DETAILS_SUCCESS, GET_RELATED_TRACKS_FAIL, GET_RELATED_TRACKS_REQUEST, GET_RELATED_TRACKS_SUCCESS, GET_TRACK_FAIL, GET_TRACK_REQUEST, GET_TRACK_SUCCESS, SEARCH_FAIL, SEARCH_REQUEST, SEARCH_SUCCESS, SET_PLAYER_SONG_FAIL, SET_PLAYER_SONG_REQUEST, SET_PLAYER_SONG_SUCCESS, TOP_CHARTS_FAIL, TOP_CHARTS_REQUEST, TOP_CHARTS_SUCCESS } from "../constants/constants"


export const genreReducer = (state = {genreTracks: []}, action) =>{
    switch(action.type){
       case GENRE_REQUEST:
           return {...state, loading:true, success: false, genreTracks:[]}
       case GENRE_SUCCESS:
           return {...state, loading: false, success:true,  genreTracks: action.payload}
       case GENRE_FAIL:
           return {loading: false, success:false, error: action.payload}
       default:
           return state
    }
   }

export const topChartsReducer = (state = {songs: []}, action) =>{
    switch(action.type){
       case TOP_CHARTS_REQUEST:
           return {...state, loading:true, success:false,  songs:[]}
       case TOP_CHARTS_SUCCESS:
           return {...state, loading: false, success:true, songs: action.payload}
       case TOP_CHARTS_FAIL:
           return {loading: false, success:false, error: action.payload}
       default:
           return state
    }
   }

export const getTrackReducer = (state = {song: {}}, action) =>{
    switch(action.type){
       case GET_TRACK_REQUEST:
           return {...state, loading:true, success:false, song: {}}
       case GET_TRACK_SUCCESS:
           return {...state, loading: false, success:true, song: action.payload}
       case GET_TRACK_FAIL:
           return {loading: false, success:false, error: action.payload}
       default:
           return state
    }
   }

export const getRelatedTracksReducer = (state = {songs: []}, action) =>{
    switch(action.type){
       case GET_RELATED_TRACKS_REQUEST:
           return {...state, loading:true, success:false, songs: []}
       case GET_RELATED_TRACKS_SUCCESS:
           return {...state, loading: false, success:true, songs: action.payload}
       case GET_RELATED_TRACKS_FAIL:
           return {loading: false, success:false, error: action.payload}
       default:
           return state
    }
   }

export const getArtistDetailsReducer = (state = {artist: []}, action) =>{
    switch(action.type){
       case GET_ARTIST_DETAILS_REQUEST:
           return {...state, loading:true, success:false, artist: []}
       case GET_ARTIST_DETAILS_SUCCESS:
           return {...state, loading: false, success:true, artist: [action.payload.data2.artists.hits[0].artist, action.payload.data]}
       case GET_ARTIST_DETAILS_FAIL:
           return {loading: false, success:false, error: action.payload}
       default:
           return state
    }
   }

export const searchReducer = (state = {search: []}, action) =>{
    switch(action.type){
       case SEARCH_REQUEST:
           return {...state, loading:true, success:false, search: []}
       case SEARCH_SUCCESS:
           return {...state, loading: false, success:true, search: action.payload}
       case SEARCH_FAIL:
           return {loading: false, success:false, error: action.payload}
       default:
           return state
    }
   }

export const playerSongReducer = (state = {song: {}}, action) =>{
    switch(action.type){
       case SET_PLAYER_SONG_REQUEST:
           return {...state, loading:true, success:false, song: {}}
       case SET_PLAYER_SONG_SUCCESS:
           return {...state, loading: false, success:true, song: action.payload}
       case SET_PLAYER_SONG_FAIL:
           return {loading: false, success:false, error: action.payload}
       default:
           return state
    }
   }
