import {SET_BEERS_LIST} from "./actions"

const defaultState = {
  beersList: [],
  searchedBeersList: [],
  favourites: [],
};
export function beersReducer (state=defaultState,action) {
switch (action.type) {
    case SET_BEERS_LIST:
        return {
          ...state,
          beersList: action.payload
        };
    default: 
    return state
}
}