import axios from "axios";
import { GENRE_FAIL, GENRE_REQUEST, GENRE_SUCCESS, TOP_ARTISTS_FAIL, TOP_ARTISTS_REQUEST, TOP_ARTISTS_SUCCESS, TOP_CHARTS_FAIL, TOP_CHARTS_REQUEST, TOP_CHARTS_SUCCESS } from "../constants/constants";

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

