import {createStore, combineReducers, applyMiddleware, } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { genreReducer, getArtistDetailsReducer, getRelatedTracksReducer, getTrackReducer, searchReducer, topChartsReducer } from "./reducers/reducer"


const reducer = combineReducers({
    genre: genreReducer,
    topCharts: topChartsReducer,
    track: getTrackReducer,
    relatedTracks: getRelatedTracksReducer,
    artistDetails: getArtistDetailsReducer,
    search: searchReducer
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store