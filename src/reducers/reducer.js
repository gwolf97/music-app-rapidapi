import { GENRE_FAIL, GENRE_REQUEST, GENRE_SUCCESS, TOP_CHARTS_FAIL, TOP_CHARTS_REQUEST, TOP_CHARTS_SUCCESS } from "../constants/constants"


export const genreReducer = (state = {genreTracks: []}, action) =>{
    switch(action.type){
       case GENRE_REQUEST:
           return {...state, loading:true, genreTracks:[]}
       case GENRE_SUCCESS:
           return {...state, loading: false, genreTracks: action.payload}
       case GENRE_FAIL:
           return {loading: false, error: action.payload}
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
