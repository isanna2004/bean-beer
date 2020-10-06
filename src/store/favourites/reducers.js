import {TOGGLE_FAVORITE} from "./actions";
const keys ={
favourites:"favourites-beer"
}
 const defaultState =JSON.parse(localStorage.getItem(keys.favourites))|| [];
export function favoritesReducer (state=defaultState,action) {
switch (action.type) {

    case 'TOGGLE_FAVORITE':
        localStorage.setItem(keys.favourites,JSON.stringify(action.payload))
        return action.payload

    default: 
    return state
}
}