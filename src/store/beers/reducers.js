import {SET_BEERS_LIST} from "./actions"
import { SET_SEARCHED_BEERS_LIST } from "./actions";
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
      beersList: action.payload,
    };
  case SET_SEARCHED_BEERS_LIST:
    return {
      ...state,
      searchedBeersList: action.payload,
    };
  default:
    return state;
}
}