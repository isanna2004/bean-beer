import {combineReducers, createStore} from "redux";
import {beersReducer} from "./beers/reducers";
import { favoritesReducer } from "./favourites/reducers";
const rootReducer = combineReducers({
    beers:beersReducer,
favourites:favoritesReducer
})
export const store = createStore(rootReducer)