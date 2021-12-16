// Находим элементы input и span
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

// Добавляем слушателя события 'input' на inputEl, кот. вызывает колбек ф-цию onFontsizeChange
inputEl.addEventListener('input', onFontsizeChange);


// Ф-ция возвращает spanEl, во встроенный стиль fontSize которого, присваевается строка с текущим значением 'input' и приставкой px
function onFontsizeChange(event) {
    return spanEl.style.fontSize = `${event.currentTarget.value}px`;
};

