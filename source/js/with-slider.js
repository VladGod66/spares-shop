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

//При клике на кнопку вперёд
nextWithButt.addEventListener('click', () => {
  //Если активный слайд последний или больше
  if (withCardIndex >= withCardsCount-4) {
      //Деактивируем курсор на кнопке вперёд
      nextWithButt.style.cursor = 'default';
      //Если нет
    } else {
    //Увеличиваем индекс нового активного слайда на единицу
    withCardIndex++;
    //Активируем курсор на кнопке назад
    prevWithButt.style.cursor = 'pointer';
  }
  //Запускаем функцию смены слайда
  withCard(withCardIndex);
});

//При клике на кнопку назад
prevWithButt.addEventListener('click', () => {
  //Если активный слайд первый
  if (withCardIndex == 0) {
    //Деактивируем курсор на кнопке назад
    prevWithButt.style.cursor = 'default';
  } else {
    //Уменьшаем индекс нового активного слайда на единицу
    withCardIndex--;
    //Активируем курсор на кнопке вперёд
    nextWithButt.style.cursor = 'pointer';
  }
  //Запускаем функцию смены слайда
  withCard(withCardIndex);
});
