// Находим элемент form
const formEl = document.querySelector('.login-form');

// Добавляем слушателя события 'submit' на formEl, кот. вызывает колбек ф-цию onFormSubmit
formEl.addEventListener('submit', onFormSubmit);

// Функция:
//    1) отменяет действия браузера по умолчанию
//    2) проверяет заполненность полей input и возвращает:
//          - предупреждение - строку "Все поля должны быть заполнены!", если хотя бы один из input пуст
//          - объект formData данными (mail, password), собранными в форме formEl, если все input заполнены;
//            выводит в консоль formData;
//            очищает input.
function onFormSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        return alert('Все поля должны быть заполнены!');
    };

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = { mail, password };
    console.log(formData);
    event.currentTarget.reset();

    return formData;
};