

export class Api {
  BASE_URL = "https://api.punkapi.com/v2";
  getBeersList(params={}) {
    return new Promise((resolve, reject) => {
      fetch(`${this.BASE_URL}/beers?`+ new URLSearchParams(params))
        .then((data) => data.json())
        .then(resolve)
        .catch(reject);
    });
  }
}
