import { GENRE_FAIL, GENRE_REQUEST, GENRE_SUCCESS } from "../constants/constants"


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