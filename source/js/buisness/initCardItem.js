// const body = document.querySelector('body');
// const templateFragment = document.querySelector('[data-modal-template]').content;
// // Находим фрагмент с содержимым темплейта
// const template = templateFragment.querySelector('[data-modal--preload]'); // В фрагменте находим нужный элемент

// const fragment = document.createDocumentFragment();
// const element = template.cloneNode(true);
// fragment.appendChild(element);

// body.appendChild(fragment);

const initCardItem = () => {

  const body = document.querySelector('body');
  const templateFragment = document.querySelector('[data-modal-template]').content;
  // Находим фрагмент с содержимым темплейта
  const template = templateFragment.querySelector('[data-modal--preload]'); // В фрагменте находим нужный элемент

  const fragment = document.createDocumentFragment();
  const element = template.cloneNode(true);
  fragment.appendChild(element);

  if (document.querySelector('[data-catalog__element]')) {
    const catalogElements = document.querySelectorAll('[data-catalog__element]');

    catalogElements.forEach((el) => {
      el.addEventListener('click', (evt) => {
        let target = evt.target;
        let itemDataValue = null;
        while (target && target !== catalogElements) {
          if (target.getAttribute('data-open-modal')) {
            body.appendChild(fragment);
            break;
          }
          target = target.parentNode;
        }
      });
    });
  }
};
export {initCardItem};
