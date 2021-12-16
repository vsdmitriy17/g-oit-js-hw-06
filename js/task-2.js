// Массив данных (из условия задачи)
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

// Находим элемент ul c id = ingredients (из условия задачи)
const ingredientsListEl = document.querySelector('#ingredients');

//Ф-ция(старый способ - цикл for, современный - через метод map()) для каждого элемента массива arrey:
//    1) создает элемент li
//    2) присваевает li класс "item"
//    3) создает элемент h2
//    4) записывает в h2 строку из элемента массива данных arrey
//    5) добавляет h2 в li
//    6) добавляет li в массив list
//    7) добавляет list в ul 

function listCreate(arrey) {
    const list = [];
    for (let i = 0; i < arrey.length; i += 1) {
        const listItemEl = document.createElement("li");
        listItemEl.classList.add("item");
        const listItemTextEl = document.createElement("h2");
        listItemTextEl.textContent = arrey[i];
        listItemEl.appendChild(listItemTextEl);
        list.push(listItemEl);
    }
    return ingredientsListEl.append(...list);
}  
/*
function listCreate(arrey) {
    const list = arrey.map(elem => {
        const listItemEl = document.createElement("li");
        listItemEl.classList.add("item");
        const listItemTextEl = document.createElement("h2");
        listItemTextEl.textContent = elem;
        listItemEl.appendChild(listItemTextEl);
        return listItemEl;
    });
    return ingredientsListEl.append(...list);
}
*/

listCreate(ingredients);
console.dir(ingredientsListEl.children);
