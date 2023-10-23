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

          // const itemDataObject = items[itemDataValue];
          // const keys = Object.keys(itemDataObject);
          // const values = Object.values(itemDataObject);
          // console.log('itemDataObject-Keys:', keys);
          // console.log('itemDataObject-Values:', values);

          if (document.querySelector('[data-item-price="noWheel"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheel"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheelH300"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheelH300"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheelH600"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheelH600"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheelH1220"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheelH1220"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="noWheelH1220C"]')) {
            const dataItemElement = document.querySelector('[data-item-price="noWheelH1220C"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13H300"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13H300"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13H600"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13H600"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13H1220"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13H1220"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel2R13H1220C"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel2R13H1220C"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel4R13H1220"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel4R13H1220"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          if (document.querySelector('[data-item-price="wheel4R13H1220C"]')) {
            const dataItemElement = document.querySelector('[data-item-price="wheel4R13H1220C"]');
            const dataItemPrice = dataItemElement.getAttribute('data-item-price');
            dataItemElement.textContent = items[itemDataValue][dataItemPrice];
          }

          // ___________________

          if (document.querySelector('[data-item-title]')) {
            const itemDataTitle = target.getAttribute('data-item-title');

            for (const key in items) {
              if (items[key] && items[key].hasOwnProperty(itemDataTitle)) {
                target.textContent = items[key][itemDataTitle];
                return; // Выходим из цикла, так как значение найдено
              }
            }
          }

        } else {
          console.log('Товар не найден');
        }


        // const modalItem = document.querySelector(`[data-modal=${itemDataValue}]`);
        // console.log(modalItem);


      });
    });
  }
};
export {getPriceData};
