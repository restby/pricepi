import {items} from './priceData';

const getPriceData = () => {
  const itemsData = Object.keys(items);
  console.log(itemsData);

  if (document.querySelector('[data-catalog__element]')) {
    const catalogBoats = document.querySelectorAll('[data-catalog__element]');
    catalogBoats.forEach((el) => {
      el.addEventListener('click', (evt) => {
        let target = evt.target;
        let itemDataValue = null;
        while (target && target !== catalogBoats) {
          if (target.getAttribute('data-open-modal')) {
            itemDataValue = target.getAttribute('data-open-modal');
            break;
          }
          target = target.parentNode;
        }
        console.log(`Значение itemDataValue за пределами цикла: ${itemDataValue}`);
      });
    });
  }
};
export {getPriceData};
