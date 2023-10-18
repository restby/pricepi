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

        const myObject = {
          key1: 'value1',
          key2: 'value2',
          key3: 'value3'
        };

        const targetValue = 'value2'; // Значение, с которым сравниваем ключи

        for (const key in myObject) {
          if (myObject.hasOwnProperty(key)) { // Убедимся, что ключ принадлежит самому объекту, а не его прототипу
            if (myObject[key] === targetValue) {
              console.log(`Найден ключ с нужным значением: ${key}`);
            }
          }
        }


      });
    });
  }
};
export {getPriceData};
