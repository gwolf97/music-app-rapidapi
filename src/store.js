import {createStore, combineReducers, applyMiddleware, } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { genreReducer, getArtistDetailsReducer, getRelatedTracksReducer, getTrackReducer, playerSongReducer, searchReducer, topChartsReducer } from "./reducers/reducer"


const reducer = combineReducers({
    genre: genreReducer,
    topCharts: topChartsReducer,
    track: getTrackReducer,
    relatedTracks: getRelatedTracksReducer,
    artistDetails: getArtistDetailsReducer,
    search: searchReducer,
    playerSong: playerSongReducer,
})

const initialState = {
    playerSong: {
        title: "Going Crazy",
        artist: "Chris Brown",
        url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0a/9c/94/0a9c94fa-b331-f24c-5615-c15405b60120/mzaf_11529453508369085869.plus.aac.ep.m4a"
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store