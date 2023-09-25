//Скрипт слайдера карточек для блока популярных товаров

//Находим контейнер слайдера популярных товаров
const sliderCards = document.querySelector('.popular__list2');
//Создаём коллекцию из найденных в контейнере слайдера элементов
const cards = sliderCards.querySelectorAll('.popular__card');
//Определяем количество изображений в массиве
const cardsCount = cards.length;
//Находим кнопку вперёд
const nextButt = document.querySelector('.popular__slider-next-button');
//Находим кнопку назад
const prevButt = document.querySelector('.popular__slider-prev-button');
//Находим кнопку показать ещё
const moreBatt = document.querySelector('.popular__slider-more-button')
//Создаём индекс первого активного элемента
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
  //Если активный слайд последний или больше
  if (cardIndex >= cardsCount-4) {
      //Деактивируем курсор на кнопке вперёд
      nextButt.style.cursor = 'default';
      //Если нет
    } else {
    //Увеличиваем индекс нового активного слайда на единицу
    cardIndex++;
    //Активируем курсор на кнопке назад
    prevButt.style.cursor = 'pointer';
  }
  //Запускаем функцию смены слайда
  card(cardIndex);
});

//При клике на кнопку назад
prevButt.addEventListener('click', () => {
  //Если активный слайд первый
  if (cardIndex == 0) {
    //Деактивируем курсор на кнопке назад
    prevButt.style.cursor = 'default';
  } else {
    //Уменьшаем индекс нового активного слайда на единицу
    cardIndex--;
    //Активируем курсор на кнопке вперёд
    nextButt.style.cursor = 'pointer';
  }
  //Запускаем функцию смены слайда
  card(cardIndex);
});

//При клике на кнопку показать еще
moreBatt.addEventListener('click', () => {
  //Если слайдер не в последней позиции
  if (cardIndex < cardsCount - 4) {
    //Передвигаем слайдер на 4 слайда вперёд
    cardIndex = cardIndex + 4;
    //Активируем курсор на кноаке назад
    prevButt.style.cursor = 'pointer';
    //Если в последней
  } else {
    //Ставим на начало
    cardIndex = 0;
    //Активируем курсор на кнопке вперёд
    nextButt.style.cursor = 'pointer';
  }
  //Запускаем функцию смены слайда
  card(cardIndex);
});
