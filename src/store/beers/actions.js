export const SET_BEERS_LIST = "SET_BEERS_LIST";
export function setBeersList(beersList){
return {
  type: SET_BEERS_LIST,
  payload:beersList
};
}
