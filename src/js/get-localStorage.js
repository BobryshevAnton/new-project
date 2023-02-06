import galleryPage from './gallery-page';

let ADD_WATCH = 'addToWatch';
let ADD_TO_QUEUE = 'addToQueue';

export default function getLocalStorage() {
  let storageJsonWatch = [];
  storageJsonWatch = JSON.parse(localStorage.getItem(ADD_WATCH));
  galleryPage(storageJsonWatch);

  const btnWatched = document.querySelector('.btn-Watched');
  btnWatched.classList.add('active');
  btnWatched.addEventListener('click', handlerBtnWatched);
  function handlerBtnWatched(evt) {
    storageJsonWatch = JSON.parse(localStorage.getItem(ADD_WATCH));
    galleryPage(storageJsonWatch);
    btnWatched.setAttribute('disabled', true);
    btnQueue.removeAttribute('disabled');
    btnWatched.classList.add('active');
    btnQueue.classList.remove('active');
  }

  const btnQueue = document.querySelector('.btn-Queue');
  btnQueue.addEventListener('click', handlerBtnQueue);
  function handlerBtnQueue(evt) {
    storageJsonQueue = JSON.parse(localStorage.getItem(ADD_TO_QUEUE));
    galleryPage(storageJsonQueue);
    btnQueue.setAttribute('disabled', true);
    btnWatched.removeAttribute('disabled');
    btnWatched.classList.remove('active');
    btnQueue.classList.add('active');
  }
}
