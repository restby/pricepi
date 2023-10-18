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

        // console.log(itemDataValue);
        if (items.hasOwnProperty(itemDataValue)) {
          // Если ключ существует, получите вложенный объект
          const innerObject = items[itemDataValue];

          // Теперь вы можете получить ключи и значения вложенного объекта и сохранить их в переменные
          const keys = Object.keys(innerObject);
          const values = Object.values(innerObject);

          // Далее вы можете использовать keys и values по вашему усмотрению
          console.log('Keys:', keys);
          console.log('Values:', values);
        } else {
          // Если ключ не найден, обработайте это по вашему усмотрению
          console.log('Ключ не найден');
        }
      });
    });
  }
};
export {getPriceData};
