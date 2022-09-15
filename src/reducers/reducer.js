import { GENRE_FAIL, GENRE_REQUEST, GENRE_SUCCESS, TOP_CHARTS_FAIL, TOP_CHARTS_REQUEST, TOP_CHARTS_SUCCESS } from "../constants/constants"


export const genreReducer = (state = {genreTracks: []}, action) =>{
    switch(action.type){
       case GENRE_REQUEST:
           return {loading:true, ...state, genreTracks:[]}
       case GENRE_SUCCESS:
           return {loading: false, ...state, genreTracks: action.payload}
       case GENRE_FAIL:
           return {loading: false, error: action.payload}
       default:
           return state
    }
   }

export const topChartsReducer = (state = {songs: []}, action) =>{
    switch(action.type){
       case TOP_CHARTS_REQUEST:
           return {loading:true, ...state, songs:[]}
       case TOP_CHARTS_SUCCESS:
           return {loading: false, ...state, songs: action.payload}
       case TOP_CHARTS_FAIL:
           return {loading: false, error: action.payload}
       default:
           return state
    }
   }
