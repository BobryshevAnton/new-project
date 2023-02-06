import SearchApi from './searchApi';
import { createGallery } from './create-gallery';
import getLocalStorage from './get-localStorage';
//
import galleryPage from './gallery-page';

const form = document.querySelector('.header__form-search');
const indexGallery = document.querySelector('.gallery-container');

const btnHome = document.querySelector('.btn-home');
const btnLibryary = document.querySelector('.btn-libryary');
// const btnLbt = document.querySelector('.btn-lib');

if (btnHome.classList.contains('current')) {
  form.addEventListener('submit', handleSubmit);

  //
  const paginationConteiner = document.querySelector('.pagination-container');

  let searchFilm = '';
  let page = 1;

  // form.addEventListener('submit', handleSubmit);

  const anyText = document.querySelector('.text-empty');
  anyText.classList.add('hiden');
  anyText.textContent =
    'Search result not successful. Enter the correct movie name...';
  const searchApi = new SearchApi();

  startPage();

  function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { search },
    } = event.currentTarget;
    searchFilm = search.value;

    if (searchFilm === '') {
      anyText.classList.remove('hiden');
      return;
    } else {
      anyText.classList.add('hiden');
    }

    createPage();
  }

  function createPage() {
    searchApi.getSearchMovie(searchFilm, page).then(data => {
      createGallery(data);

      page += 1;
    });
  }

  function startPage() {
    searchFilm = 'red';
    searchApi.getSearchMovie(searchFilm, page).then(data => {
      createGallery(data);
    });
  }
} else {
  getLocalStorage();
}

//
//

// if (btnLibryary.classList.contains('current')) {
//   const btnWatched = document.querySelector('.btn-Watched');
//   btnWatched.classList.add('active');
//   getLocalStorage();
//   console.log(123);
// }

// const arrowLeft = document.querySelector('.arrow-left');
// arrowLeft.addEventListener('click', handlerLeftClick);
// function handlerLeftClick(evt) {
//   if (evt.target.outerText === '←') {
//     page = page - 1;

//     // if (data.page === 1) {
//     //   page = data.page - 1;
//     // }

//     createPage();
//   }
// }

// function datapage(rex) {
//   //page: 7, results: Array(20), total_pages: 141
//   // totalPages = data.total_pages;
//   // console.log(dataPage);
// }

// console.log(evt);
// export default function pagination(data) {
//   console.log(data);
//   let page;

//   let rightArrow = data.page + 1;

//   let btnFirstPages = data.page;
//   let btnSecondPages = data.page + 1;
//   let btnTherthPages = data.page + 2;
//   let btnFourPages = data.page + 3;
//   let btnTotalPages = data.total_pages;

// const arrowLeft = document.querySelector('.left');
// arrowLeft.addEventListener('click', handlerLeft);

// function handlerLeft(evt) {
//   if (evt.target.outerText === '←') {
//     page = page - 1;

//     // if (data.page === 1) {
//     //   page = data.page - 1;
//     // }

//     createPage();
//   }
// }
// }

// export default function pagination() {
//   searchApi.getSearchMovie(searchFilm, page).then(data => {
//     page += 1;
//     functionPage(data);
//   });
// }
// function functionPage(data) {
//   console.log(data);
// }
// function pagination(data) {
//

//
//   function handlerLeft(evt) {
//     if (evt.target.outerText === '←') {
//       page = page - 1;

//       // if (data.page === 1) {
//       //   page = data.page - 1;
//       // }
//     }
//   }
// }
