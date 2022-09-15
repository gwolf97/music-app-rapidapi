import {createStore, combineReducers, applyMiddleware, } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { genreReducer, topChartsReducer } from "./reducers/reducer"


const reducer = combineReducers({
    genre: genreReducer,
    topCharts: topChartsReducer
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store