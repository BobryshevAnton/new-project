import SearchApi from './searchApi';
import createGanres from './create-ganres';
import modalFilm from './modal-film';

const searchApi = new SearchApi();
const indexGallery = document.querySelector('.gallery-container');

export function createGallery({ results }) {
  indexGallery.innerHTML = '';
  modalFilm({ results });
  const markup = results
    .map(({ poster_path, title, release_date, vote_average, genre_ids }) => {
      let emptyImg = 'https://i.ibb.co/JyBCdzw/sinema-empty.jpg';
      let baseImg = `https://image.tmdb.org/t/p/w500${poster_path}`;
      let baseTitle = `${title}`;
      const baseDate = `${release_date.slice(0, 4)}`;
      let ganresTitle = createGanres(genre_ids);

      if (!poster_path) {
        baseImg = emptyImg;
      }
      if (baseTitle.length > 25) {
        baseTitle = baseTitle.slice(0, 30) + '...';
      } else {
        baseTitle;
      }
      if (ganresTitle.length > 2) {
        ganresTitle = ganresTitle.slice(0, 2).join(', ') + ', Other';
      } else {
        ganresTitle = ganresTitle.join(', ');
      }

      return `<li class="gallery-box">
    <div class="gallery-card">
      <img
        class="gallery-img"
        src="${baseImg}"
        alt="${baseTitle}"
        loading="lazy"
      />
    </div>
    <h1 class="gallery-title">${baseTitle}</h1>
    <div class="gallery-info">
      <p class="gallery-ganre">${ganresTitle}</p>
      <p class="gallery-year">${baseDate}</p>
      <p class="gallery-average">${vote_average}</p>
    </div>
  </li>
      `;
    })
    .join('');

  indexGallery.insertAdjacentHTML('beforeend', markup);
}
