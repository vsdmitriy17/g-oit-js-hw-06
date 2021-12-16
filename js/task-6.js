// Находим элемент input
const inputEl = document.querySelector('#validation-input');

// Добавляем слушателя события 'blur' на inputEl, кот. вызывает колбек ф-цию onInputBlurCheck
inputEl.addEventListener('blur', onInputBlurCheck);
console.log();

// Ф-ция проверяет условие: равно ли текущее кол-во введенных символов в input - числу указанному в атрибуте data-length и возвращает: 
//    удаляет класс 'invalid' из списка классов inputEl, добавляет класс 'valid' в список классов inputEl (если кол-во символов совпадает с числом в атрибуте data-length)
//    удаляет класс 'valid' из списка классов inputEl, добавляет класс 'invalid' в список классов inputEl (в остальных случаях)
function onInputBlurCheck(event) {
    if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
        return inputEl
    };
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
    return inputEl
}; 