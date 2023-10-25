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
            // либо давать значения дата-атрибутам либо использовать dataset&&&&&&&&
            // const dataItemTitle = document.querySelector('[data-item-title]');
            // const dataItemTitleAttribute = target.getAttribute('data-item-title');
            // console.log(dataItemTitleAttribute);
            // let some = dataItemTitle.dataset;
            // console.log(some);

            // dataItemTitle.textContent = items[itemDataValue].dataItemTitle;

            // Обращение к свойству dataset вернёт объект со всеми дата - атрибутами, которые есть на элементе.Названиями полей в объекте будут имена дата - атрибутов после префикса data -.Например, если атрибут называется data - columns, то поле в объекте для этого атрибута будет называться columns.

            // const item = document.querySelector('li');

            // console.log(item.dataset);
            // { candidateRole: 'junior' }
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
