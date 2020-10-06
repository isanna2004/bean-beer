import { Api } from "../../Api/Api";
export const SET_BEERS_LIST = "SET_BEERS_LIST";
export const SET_SEARCHED_BEERS_LIST = "SET_SEARCHED_BEERS_LIST";


const api = new Api();
export function setBeersList(beersList) {
  return {
    type: SET_BEERS_LIST,
    payload: beersList,
  };
}
export function setSearchedBeersList(beersList) {
  return {
    type: SET_SEARCHED_BEERS_LIST,
    payload: beersList,
  };
}

export function loadBeersList(params) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      api
        .getBeersList(params)
        .then((data) => {
          dispatch(setBeersList(data));
          resolve(true);
        })
        .catch(reject);
    });
  };
}

export function loadSearchedBeersList(params) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      api
        .getBeersList(params)
        .then((data) => {
          dispatch(setSearchedBeersList(data));
          resolve(true);
        })
        .catch(reject);
    });
  };
}
