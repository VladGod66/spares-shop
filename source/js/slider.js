//Программа слайдера изображений

//Находим контейнер слайдера
const sliderImages = document.querySelector('.slider__images');
//Находим кнопку назад
const prevButton = document.querySelector('.slider__prev-button');
//Находим кнопку вперёд
const nextButton = document.querySelector('.slider__next-button');
//Создаём массив из найденных в контейнере слайдера изображений
const slides = Array.from(sliderImages.querySelectorAll('img'));
//Определяем количество изображений в массиве
const slideCount = slides.length;
//Создаём индекс активного слайда
let slideIndex = 0;

//При клике на кнопку назад
prevButton.addEventListener('click', () => {
  //Пересчитываем индекс нового активного слайда от 0 до lenght-1
  slideIndex = slideIndex - 1;
  //Если слайд первый
  if (slideIndex <= 0) {
    //То переходим к последнему слайду
    slideIndex=slideCount-1;
  }
  //Перезапускаем функцию slide
  slide();
});

//При клике на кнопку вперёд
nextButton.addEventListener('click', () => {
  //Пересчитываем индекс нового активного слайда от 0 до lenght-1
  slideIndex = slideIndex + 1;
  //Если слайд последний
  if (slideIndex >= slideCount) {
    //То переходим к первому слайду
    slideIndex=0;
  }
  //Перезапускаем функцию slide
  slide();
});

//Функция перемещения флекса массива изображений в окне просмотра
const slide = () => {
  //Определяем ширину видимой области слайдера в пикселях
  const imageWidth = sliderImages.clientWidth;
  //Рассчитываем сдвиг флекса массива изображений в пикселях
  const slideOffset = slideIndex * imageWidth;
  //Сдвигаем флекс массива изображений на рассчитаное количество пикселей
  sliderImages.style.transform = `translateX(${-slideOffset}px)`;
}

//При загрузке окна сайта запускаем функцию slide
window.addEventListener('load', () => {
  slide();
});
