//Скрипт слайдера карточек для блока популярных товаров

//Находим контейнер слайдера популярных товаров
const sliderCards = document.querySelector('.popular__list2');
//Создаём массив из найденных в контейнере слайдера элементов
const cards = Array.from(sliderCards.querySelectorAll('.popular__card'));
//Определяем количество изображений в массиве
const cardCount = cards.length;
//Находим кнопку вперёд
const nextButt = document.querySelector('.popular__slider-next-button');
//Находим кнопку назад
const prevButt = document.querySelector('.popular__slider-prev-button');
//Находим кнопку показать ещё
const moreBatt = document.querySelector('.popular__slider-more-button')
//Создаём индекс первого активного элемента из четырёх
let cardIndex = 0;

//Функция перемещения флекса массива изображений в окне просмотра на заданное изображение
const card = () => {
  //Определяем ширину видимой области слайдера в пикселях
  const imageWidth = 300;
  //Рассчитываем сдвиг флекса массива изображений в пикселях
  const slideOffset = cardIndex * imageWidth;
  //Сдвигаем флекс массива изображений на рассчитаное количество пикселей
  sliderCards.style.transform = `translateX(${-slideOffset}px)`;
}

//При клике на кнопку вперёд
nextButt.addEventListener('click', () => {
  //Если активный слайд последний
  if (cardIndex == cardCount-4) {
    //То остаёмся на месте
    cardIndex = cardCount-4;
    nextButt.style.cursor = 'default';
    } else {
    //Увеличиваем индекс нового активного слайда
    cardIndex++;
    prevButt.style.cursor = 'pointer';
  }
  //Запускаем суперфункцию смены слайда
  card(cardIndex);
});

//При клике на кнопку назад
prevButt.addEventListener('click', () => {
  //Если активный слайд первый
  if (cardIndex == 0) {
    //То остаёмся на месте
    cardIndex = 0;
    prevButt.style.cursor = 'default';
  } else {
    //Уменьшаем индекс карточки на единицу
    cardIndex--;
    nextButt.style.cursor = 'pointer';
  }
  //Запускаем суперфункцию смены слайда
  card(cardIndex);
});

//При клике на кнопку показать еще
moreBatt.addEventListener('click', () => {
  //Если слайдер в позиции до середины
  if (cardIndex < 4) {
    //Ставим слайдер на середину
    cardIndex = 4;
    prevButt.style.cursor = 'pointer';
  } else {
    //Ставим на начало
    cardIndex = 0;
    nextButt.style.cursor = 'pointer';
  }
  //Запускаем смены карточки
  card(cardIndex);
});
