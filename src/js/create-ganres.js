import SearchApi from './searchApi';
// import { createGallery } from './create-gallery';

const searchApi = new SearchApi();

let genresArr;

searchApi.getGanres().then(data => {
  genresArr = data.genres;
});

export default function createGanres(genre_ids) {
  let curentGenres = [];

  genre_ids.forEach(element => {
    let obj = genresArr.find(el => el.id === element);
    curentGenres.push(obj);
  });

  const genresNames = curentGenres.map(el => el.name);
  let newGenresNames = [];

  genresNames.map(elem => {
    if (elem.length > 10) {
      elem = elem.slice(0, 8) + '...';
    }
    elem;
    newGenresNames.push(elem);
  });

  return newGenresNames;
}
