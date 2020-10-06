import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {beersReducer} from "./beers/reducers";
import { favoritesReducer } from "./favourites/reducers";
const rootReducer = combineReducers({
    beers:beersReducer,
favourites:favoritesReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk));