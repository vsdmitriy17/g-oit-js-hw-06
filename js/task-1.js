// Находим элемент <ul> с id = categories
const categoriesEl = document.querySelector('#categories');

// Ф-ция возвращает строку с кол-вом категорий в categories
function categoriesQuantityCalc(elem) {
    return `Number of categories: ${elem.querySelectorAll('h2').length}`;
}

//Ф-ция выводит в консоль строки с текстовым значением элемента h2 (именем категории) и кол-вом элементов li, для каждой категории в categories
function categoriesListView(elem) {
    for (let i = 0; i < elem.querySelectorAll('h2').length; i += 1) {
        const categoryName = elem.querySelectorAll('h2')[i].textContent;
        const categoryItemsQuantity = elem.querySelectorAll('ul')[i].querySelectorAll('li').length;

        console.log(`Category: ${categoryName}`);
        console.log(`Elements: ${categoryItemsQuantity}`);
    }
}

console.log(categoriesQuantityCalc(categoriesEl));
console.log(categoriesListView(categoriesEl));
