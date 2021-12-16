// Находим элементы div#controls, div#boxes, button[data-create], button[data-destroy]
const divControlEl = document.querySelector('#controls');
const divEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('button[data-create]');
const destrBtnEl = document.querySelector('button[data-destroy]');

// Добавляем слушателя события 'click' на createBtnEl, кот. вызывает колбек ф-цию onCreateBtnClick
createBtnEl.addEventListener('click', onCreateBtnClick);
// Добавляем слушателя события 'click' на destrBtnEl, кот. вызывает колбек ф-цию onDestrBtnClick
destrBtnEl.addEventListener('click',onDestrBtnClick);

// Ф-ция для генерации случайного цвета (из условия задачи)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Ф-ция принимает параметр число (аргумент amount):
//    в цикле for с числом повторений = amount, на каждой итерации:
//        1) создает элемент div (divItemEl)
//        2) присваивает значение (на 10px больше чем в предыдущей итерации, первоначальное - 30px) - встроенному стилю width элемента divItemEl
//        3) присваивает значение (на 10px больше чем в предыдущей итерации, первоначальное - 30px) - встроенному стилю height элемента divItemEl
//        4) присваивает значение (сгенерированное ф - цией getRandomHexColor) - встроенному стилю backgroundColor элемента divItemEl
//        5) добавляет divItemEl в массив arreyDiv
//    возвращает добавленные, в divEl, элементы массива divItemEl
function createBoxes(amount) {
    const arreyDiv = [];
    let size;
    for (let i = 0; i < amount; i += 1) {
        size = 30 + i*10;
        const divItemEl = document.createElement("div");
        divItemEl.style.width = `${size}px`;
        divItemEl.style.height = `${size}px`;
        divItemEl.style.backgroundColor = getRandomHexColor();
        arreyDiv.push(divItemEl);
    }
    return divEl.append(...arreyDiv);
}

// Ф-ция очищает наполнение элемента divEl (перезаписывает на пустую строку)
function destroyBoxes() {
    divEl.innerHTML = '';
    return divEl;
};

function onCreateBtnClick(event) {
    const number = divControlEl.children[0].value;
    createBoxes(number);
};

function onDestrBtnClick(event) {
    destroyBoxes();
    divControlEl.children[0].value = '';
};
