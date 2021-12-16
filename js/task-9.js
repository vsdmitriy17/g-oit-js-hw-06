// Находим элементы button, span, body
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('.body');

// Добавляем слушателя события 'click' на buttonEl, кот. вызывает колбек ф-цию onButtonClick
buttonEl.addEventListener('click', onButtonClick);

// Ф-ция для генерации случайного цвета (из условия задачи)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Ф-ция:
//    1) присваивает значение сгенерированное ф - цией getRandomHexColor - текстовому содержанию элемента spanEl
//    2) присваивает значение текстового содержания элемента spanEl - встроенному стилю  backgroundColor элемента bodyEl
function onButtonClick(event) {
    spanEl.textContent = getRandomHexColor();
    bodyEl.style.backgroundColor = spanEl.textContent;
};

