//Скрипт слайдера карточек для блока товаров

//Находим контейнер слайдера товаров
const sliderWithCards = document.querySelector('.with__list2');
//Создаём коллекцию из найденных в контейнере слайдера элементов
const withCards = sliderWithCards.querySelectorAll('.with__card');
//Определяем количество изображений в массиве
const withCardsCount = withCards.length;
//Находим кнопку вперёд
const nextWithButt = document.querySelector('.with__slider-next-button');
//Находим кнопку назад
const prevWithButt = document.querySelector('.with__slider-prev-button');
//Создаём индекс первого активного элемента
let withCardIndex = 0;

//Функция перемещения флекса массива изображений в окне просмотра на заданное изображение
const withCard = () => {
  //Определяем ширину видимой области слайдера в пикселях
  const imageWidth = 300;
  //Рассчитываем сдвиг флекса массива изображений в пикселях
  const slideOffset = withCardIndex * imageWidth;
  //Сдвигаем флекс массива изображений на рассчитаное количество пикселей
  sliderWithCards.style.transform = `translateX(${-slideOffset}px)`;
}

//Если активный слайд первый
if (cardIndex == 0) {
  //Скрываем кнопку назад
  prevWithButt.classList.add('not-display');
}
//Если активный слайд последний или больше
if (withCardIndex >= withCardsCount-4) {
  //Скрываем кнопку вперёд
  nextWithButt.classList.add('not-display');
}

//При клике на кнопку вперёд
nextWithButt.addEventListener('click', () => {
  //Если активный слайд последний или больше
  if (withCardIndex >= withCardsCount-4) {
      //Скрываем кнопку вперёд
      nextWithButt.classList.add('not-display');
      //Если нет
    } else {
    //Увеличиваем индекс нового активного слайда на единицу
    withCardIndex++;
    //Показываем кнопку назад
    prevWithButt.classList.remove('not-display');
  }
  //Запускаем функцию смены слайда
  withCard(withCardIndex);
  if (withCardIndex >= withCardsCount-4) {
    //Скрываем кнопку вперёд
    nextWithButt.classList.add('not-display');
  }
});

//При клике на кнопку назад
prevWithButt.addEventListener('click', () => {
  //Если активный слайд первый
  if (withCardIndex == 0) {
    //Скрываем кнопку назад
    prevWithButt.classList.add('not-display');
  } else {
    //Уменьшаем индекс нового активного слайда на единицу
    withCardIndex--;
    //Показываем кнопку вперёд
    nextWithButt.classList.remove('not-display');
  }
  //Запускаем функцию смены слайда
  withCard(withCardIndex);
  //Если активный слайд первый
  if (withCardIndex == 0) {
  //Скрываем кнопку назад
    prevWithButt.classList.add('not-display');
}
});
