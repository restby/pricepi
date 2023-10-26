const changeImagesUrl = (items, itemDataValue) => {
  if (document.querySelectorAll('[data-button-value]')) {
    const buttonsValue = document.querySelectorAll('[data-button-value]');
    buttonsValue.forEach((buttonValue) => {
      buttonValue.addEventListener('click', () => {
        const itemImg = document.querySelector('[data-item-img]');
        let sourceElement = itemImg.querySelector('source');
        let imgElement = itemImg.querySelector('img');
        let altText = imgElement.getAttribute('alt');

        const buttonDataValue = buttonValue.getAttribute('data-button-value');

        if (buttonDataValue === 'noWheel') {
          sourceElement.setAttribute('srcset', `img/items/${items[itemDataValue].itemImgFileNameStart}.webp`);
          imgElement.setAttribute('src', `img/items/${items[itemDataValue].itemImgFileNameStart}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${items[itemDataValue].itemTitle}, фото без колес`);
          imgElement.setAttribute('alt', updatedAltText);
        }

        if (buttonDataValue === 'wheel2R13') {
          sourceElement.setAttribute('srcset', `img/items/${items[itemDataValue].itemImgFileNameWheel2R13}.webp`);
          imgElement.setAttribute('src', `img/items/${items[itemDataValue].itemImgFileNameWheel2R13}.jpg`);
          let updatedAltText = altText.replace(imgElement.getAttribute('alt'), `${items[itemDataValue].itemTitle}, фото с 2 колесами R13`);
          imgElement.setAttribute('alt', updatedAltText);
        }
      });
    });
  }
};

export {changeImagesUrl};
