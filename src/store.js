import {createStore, combineReducers, applyMiddleware, } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { genreReducer, getTrackReducer, topChartsReducer } from "./reducers/reducer"


const reducer = combineReducers({
    genre: genreReducer,
    topCharts: topChartsReducer,
    track: getTrackReducer
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store