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


//Функция перемещения слайдера на один элемент вперёд
const nextItem = () => {
  //Пересчитываем индекс нового активного элемента от 0 до lenght-1
  itemIndex = itemIndex + 1;
  //Если элемент последний
  if (itemIndex >= itemCount) {
    //То переходим к первому элементу
    itemIndex=0;
  }
  //Перезапускаем функцию перемещения слайдов
  slideItem();
}

//Функция перемещенияслайдов (флекса массива элементов) в окне просмотра
const slideItem = () => {
  //Определяем высоту видимой области слайдера в пикселях
  const imageHeight = sliderItems.clientHeight/items.length;
  //Рассчитываем сдвиг флекса массива элементов в пикселях
  const slideMove = itemIndex * imageHeight;
  //Сдвигаем флекс массива элементов на рассчитаное количество пикселей
  sliderItems.style.transform = `translateY(${-slideMove}px)`;
}

//При загрузке окна сайта запускаем функцию перемещения слайдов
window.addEventListener('load', () => {
  slideItem();
});

//Функция автоматического перелистывания слайдов
setInterval(() => {nextItem()}, timeInterval)
