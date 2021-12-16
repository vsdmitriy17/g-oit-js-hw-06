// Находим элементы input и span
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

// Добавляем слушателя события 'input' на inputEl, кот. вызывает колбек ф-цию onSpanInput
inputEl.addEventListener('input', onSpanInput);

// Ф-ция проверяет условие пустого input и возвращает:
//    текстовое значение spanEl - строку 'Anonymous' (если input - пустая строка)
//    текстовое значение spanEl - строку, которая ровна текущему значению input (в остальных случаях)
function onSpanInput(event) {
    if (event.currentTarget.value === '') {
        return spanEl.textContent = 'Anonymous';
    };
    return spanEl.textContent = event.currentTarget.value;
};