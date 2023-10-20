import {items} from './priceData';

const getPriceData = () => {

  // const itemsData = Object.keys(items);
  // console.log(itemsData);

  if (document.querySelector('[data-catalog__element]')) {
    const catalogElements = document.querySelectorAll('[data-catalog__element]');


    catalogElements.forEach((el) => {
      el.addEventListener('click', (evt) => {
        let target = evt.target;
        let itemDataValue = null;
        while (target && target !== catalogElements) {
          if (target.getAttribute('data-open-modal')) {
            itemDataValue = target.getAttribute('data-open-modal');
            console.log(`data-open-modal="${itemDataValue}"`);
            break;
          }
          target = target.parentNode;
        }


        if (items.hasOwnProperty(itemDataValue)) {
          console.log('has');

          // const itemDataObject = items[itemDataValue];
          // const keys = Object.keys(itemDataObject);
          // const values = Object.values(itemDataObject);
          // console.log('itemDataObject-Keys:', keys);
          // console.log('itemDataObject-Values:', values);

          if (document.querySelector('[data-item-price="noWheel"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheel"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');

            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
            // dataItemElement.textContent = '99999';
          }

        } else {
          console.log('Ключ не найден');
        }


        // const modalItem = document.querySelector(`[data-modal=${itemDataValue}]`);
        // console.log(modalItem);


      });
    });
  }
};
export {getPriceData};
