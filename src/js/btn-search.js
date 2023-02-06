const addToWatch = document.querySelector('.addToWatch');
const addToQueue = document.querySelector('.addToQueue');

let ADD_WATCH = 'addToWatch';
let ADD_TO_QUEUE = 'addToQueue';
//
let libryaryWatched = [];
let libruaryQueue = [];

//
let storageJsonWatch = [];
storageJsonWatch.push(JSON.parse(localStorage.getItem(ADD_WATCH)));

let storageJsonQueue = [];

export default function btnSearch(elem) {
  elementFilmModal = elem;

  storageJsonWatch.map(storageWatch => {
    storageWatch.map(storElem => {
      if (storElem.title === elementFilmModal.title) {
        addToWatch.textContent = 'Added';
      } else {
        addToWatch.textContent = 'add to Watched';
      }
    });
  });

  addToWatch.addEventListener('click', handleraddToWatch);
  addToQueue.addEventListener('click', handleraddToQueue);

  ///
  function handleraddToWatch(evt) {
    if (localStorage.length === 0) {
      libryaryWatched.push(elementFilmModal);
      localStorage.setItem(ADD_WATCH, JSON.stringify(libryaryWatched));
    } else if (
      (localStorage.length !== 0) &
      !libryaryWatched.includes(elementFilmModal)
    ) {
      libryaryWatched.push(elementFilmModal);
      localStorage.setItem(ADD_WATCH, JSON.stringify(libryaryWatched));
    }

    // if (libryaryWatched.includes(elementFilmModal)) {
    //   addToWatch.textContent = 'Added ';
    // } else {
    //   addToWatch.textContent = 'add to Watched';
    // }

    //     return; addToWatch.textContent = 'Added';
    //   } else if (localStorage.length !== 0) {
    //     libryaryWatched.push(JSON.parse(localStorage.getItem(ADD_WATCH)));
    //     libryaryWatched.push(elementFilmModal);
    //     localStorage.setItem(ADD_WATCH, JSON.stringify(libryaryWatched));
    //     return;
    //   } else if (!libryaryWatched.includes(elementFilmModal)) {
    //     libryaryWatched.push(elementFilmModal);
    //     localStorage.setItem(ADD_WATCH, JSON.stringify(libryaryWatched));
    //     return;
    //   } else {
    //     return;
    // }
  }
  ///
  function handleraddToQueue(evt) {
    if (libruaryQueue.includes(elementFilmModal)) {
      return;
    } else {
      libruaryQueue.push(elementFilmModal);
      localStorage.setItem(ADD_TO_QUEUE, JSON.stringify(libruaryQueue));
    }
  }
}
