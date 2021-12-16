// Массив данных (из условия задачи)
const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

// Находим элемент ul c классом .gallery (из условия задачи)
const galleryEl = document.querySelector(".gallery");

// Ф-ция:
//     1) добавляет класс .task3-list на элемент ul из условия задачи
//     2) создает строку (galleryItemsMarkup - код HTML списка ul) методом join(), из элементов массива строк, полученного в результате метода map() на исходном массиве arrey 
//     3) добавляет galleryItemsList в начало списка galleryEl
function galleryCreate(arrey) {
    galleryEl.classList.add('task3-list');
    const galleryItemsMarkup = arrey
        .map(elem => {
        return `<li class = "task3-list__item"><img src = "${elem.url}" alt = "${elem.alt}"></li>`;
        })
        .join('');
    return galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
}; 

galleryCreate(images);