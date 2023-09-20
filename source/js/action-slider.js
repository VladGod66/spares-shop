//Программа вертикального слайдера изображений для блока акции

//Находим контейнер слайдера акций
const sliderItems = document.querySelector('.action__slider');
//Создаём массив из найденных в контейнере слайдера элементов
const items = Array.from(sliderItems.querySelectorAll('.action__item'));
//Определяем количество элементов в массиве
const itemCount = items.length;
//Определяем интервал автоматического перелистывания элементов
const timeInterval = 7000;
//Создаём индекс активного элемента
let itemIndex = 0;
//Создаём индекс направления перемещения (1-вперёд, 0-назад)
let dirIndex = 1;

//Функция перемещения слайдов (флекса массива элементов) в окне просмотра на заданный слайд
const slideItem = () => {
  //Определяем высоту видимой области слайдера в пикселях
  const imageHeight = sliderItems.clientHeight/items.length;
  //Рассчитываем сдвиг флекса массива элементов в пикселях
  const slideMove = itemIndex * imageHeight;
  //Сдвигаем флекс массива элементов на рассчитаное количество пикселей
  sliderItems.style.transform = `translateY(${-slideMove}px)`;
}

//Функция перемещения слайдера на один элемент вперёд/назад
const nextItem = () => {
  //Если перемещение слайдов прямое
  if (dirIndex == 1) {
    //Увеличиваем индекс показываемого элемента
  itemIndex = itemIndex + 1;
  //Если нет
  } else {
    //Уменьшаем индекс показываемого элемента
    itemIndex = itemIndex - 1
  }
  //Если элемент последний
  if (itemIndex >= itemCount-1) {
    //То меняем направление движения на обратное
    dirIndex = 0;
  }
  //Если элемент первый
  if (itemIndex <= 0) {
    //То меняем направление движения на прямое
    dirIndex = 1;
  }
  //Перезапускаем функцию перемещения слайдов
  slideItem();
}

//При загрузке окна сайта запускаем функцию перемещения слайдов
window.addEventListener('load', () => {
  slideItem();
});

//Запускаем встроенную в браузер функцию автоматического перелистывания слайдов
setInterval(() => {nextItem()}, timeInterval)
