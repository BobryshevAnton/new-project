export default class SearchApi {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '?api_key=7a4cd4317772102a9b88ef6a54b71590';

  constructor() {
    this.page = 1;
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.API_KEY = '?api_key=7a4cd4317772102a9b88ef6a54b71590';
  }

  async getMovies(page = this.page) {
    const trending = 'trending';
    const mediaType = 'movie';
    const timeWindow = 'day';

    try {
      return await fetch(
        `${this.BASE_URL}${trending}/${mediaType}/${timeWindow}${this.API_KEY}&page=${page}`
      ).then(res => res.json());
    } catch (arr) {
      console.log(arr);
    }
  }

  getSearchMovie(searchFilm, page) {
    try {
      return fetch(
        `${this.BASE_URL}search/movie${this.API_KEY}&query=${searchFilm}&page=${page}`
      ).then(res => res.json());
    } catch (arr) {
      console.log(arr);
    }
  }

  async getGanres() {
    const genre = 'genre';
    const option = 'movie';
    const list = 'list';

    try {
      return await fetch(
        `${this.BASE_URL}${genre}/${option}/${list}${this.API_KEY}`
      ).then(res => res.json());
    } catch (arr) {
      console.log(arr);
    }
  }

  resetPage() {
    this.page = 1;
  }
}
