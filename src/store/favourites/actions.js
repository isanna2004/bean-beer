import {store} from "../index";


export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export function toggleFavorite(id){
  const favourites = store.getState().favourites
   const idx = favourites.indexOf(id);
   return {
     type: TOGGLE_FAVORITE,
     payload:
       idx === -1
         ? [...favourites, id]
         : [
             ...favourites.slice(0, idx),
             ...favourites.slice(idx + 1),
           ],
   };

}
