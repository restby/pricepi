import {items} from './priceData';

const getPriceData = () => {

  const itemsData = Object.keys(items);
  console.log(itemsData);

  if (document.querySelector('[data-catalog__element]')) {
    const catalogElements = document.querySelectorAll('[data-catalog__element]');

    catalogElements.forEach((el) => {
      el.addEventListener('click', (evt) => {
        let target = evt.target;
        let itemDataValue = null;
        while (target && target !== catalogElements) {
          if (target.getAttribute('data-open-modal')) {
            itemDataValue = target.getAttribute('data-open-modal');
            break;
          }
          target = target.parentNode;
        }

        if (items.hasOwnProperty(itemDataValue)) {
          const itemDataObject = items[itemDataValue];
          const keys = Object.keys(itemDataObject);
          const values = Object.values(itemDataObject);
          console.log('Keys:', keys);
          console.log('Values:', values);
        } else {
          console.log('Ключ не найден');
        }

        const modalItem = document.querySelector(`[data-modal=${itemDataValue}]`);
        console.log(modalItem);


      });
    });
  }
};
export {getPriceData};
