import createGanres from './create-ganres';
import btnSearch from './btn-search';

const indexGallery = document.querySelector('.libruary-conteiner');
const backdropModals = document.querySelector('.backdrop');
const modal = document.querySelector('[data-modal]');
const btnCloses = document.querySelector('[data-modal-close]');
const modalCont = document.querySelector('.modal-block');

export default function modalLibr(filmArr) {
  const filmMass = [...filmArr];

  btnCloses.addEventListener('click', handleBtnCloses);
  function handleBtnCloses(evt) {
    if (evt.currentTarget === evt.target) {
      modal.classList.add('is-hidden');
    }
  }

  indexGallery.addEventListener('click', handleClickLibr);
  function handleClickLibr(evt) {
    modal.classList.remove('is-hidden');

    filmMass.map(elem => {
      if (elem.original_title === evt.target.alt) {
        btnSearch(elem);

        let ganresTitle = createGanres(elem.genre_ids);
        if (ganresTitle.length > 2) {
          ganresTitle = ganresTitle.slice(0, 2).join(', ') + ', Other';
        } else {
          ganresTitle = ganresTitle.join(', ');
        }
        let baseImgFilmModal = `https://image.tmdb.org/t/p/w500${elem.poster_path}`;

        const markupModal = `
      <div class="modal-films">
        <img
          class="modal-pictures"
          src="${baseImgFilmModal}"
          alt="${elem.original_title}"
          width="375px"
        />
      </div>
      <div class="modal-info">
        <h2 class="modal-title">${elem.original_title}</h2>
        <table class="modal-info__film">
          <tr>
            <td class="modal-info__left">Vote / Votes</td>
            <td class="modal-info__right">
              <span class="modal-span">${elem.vote_average}</span>/${elem.vote_count}
            </td>
          </tr>
          <tr>
            <td class="modal-info__left">Popularity</td>
            <td class="modal-info__right">${elem.popularity}</td>
          </tr>
          <tr>
            <td class="modal-info__left">Original Title</td>
            <td class="modal-info__right">${elem.original_title}</td>
          </tr>
          <tr>
            <td class="modal-info__left">Genre</td>
            <td class="modal-info__right">${ganresTitle}</td>
          </tr>
        </table>

        <div class="modal-bottom">
          <h2 class="modal-bottom__title">About</h2>
          <p class="modal-bottom__text">
            ${elem.overview}
          </p>
        </div>
        
      </div>
    `;
        modalCont.innerHTML = '';

        return modalCont.insertAdjacentHTML('afterbegin', markupModal);
      }
    });
  }

  backdropModals.addEventListener('click', handleCloseClick);
  function handleCloseClick(evt) {
    if (evt.currentTarget === evt.target) {
      modal.classList.add('is-hidden');
    }
  }
  window.addEventListener('keydown', onEscape);

  function onEscape(evt) {
    if (evt.code === 'Escape') {
      modal.classList.add('is-hidden');
    }
  }
}
