//Программа горизонтального слайдера изображений для блока промо

//Находим контейнер слайдера
const sliderImages = document.querySelector('.slider__images');
//Находим кнопку назад
const prevButton = document.querySelector('.slider__prev-button');
//Находим кнопку вперёд
const nextButton = document.querySelector('.slider__next-button');
//Создаём массивоподобную коллекцию классов точек индикатора
const dots = document.querySelectorAll('.slider__dot');
//Создаём массив из найденных в контейнере слайдера изображений
const slides = Array.from(sliderImages.querySelectorAll('img'));
//Определяем количество изображений в массиве
const slideCount = slides.length;
//Определяем интервал автоматического перелистывания слайдов
const interval = 10000;
//Создаём индекс активного слайда
let slideIndex = 0;
//Создаём индекс направления перемещения (1-вперёд, 0-назад)
let directionIndex = 1;
//Создаём индекс активной точки индикатора
let dotIndex = 0;


//При клике на кнопку назад
prevButton.addEventListener('click', () => {
  //Пересчитываем индекс нового активного слайда от 0 до lenght-1
  slideIndex = slideIndex - 1;
  //Если слайд первый
  if (slideIndex < 0) {
    //То переходим к последнему слайду
    slideIndex=slideCount-1;
  }
  dotIndex = slideIndex;
  //Перезапускаем функцию slide для сдвига флекса массива изображений
  slide();
  //Перезапускаем функцию thisSlide с текущим индексом псевдомассива для смены активной точки индикатора
  thisSlide(dotIndex);
});

//При клике на кнопку вперёд
nextButton.addEventListener('click', () => {
  //Пересчитываем индекс нового активного слайда от 0 до lenght-1
  slideIndex = slideIndex + 1;
  //Если слайд последний
  if (slideIndex >= slideCount) {
    //То переходим к первому слайду
    slideIndex = 0;
  }
  dotIndex = slideIndex;
  //Перезапускаем функцию slide для сдвига флекса массива изображений
  slide();
  //Перезапускаем функцию thisSlide с текущим индексом псевдомассива для смены активной точки индикатора
  thisSlide(dotIndex);
});

//Функция перемещения слайдера на один слайд вперёд/назад
const nextSlide = () => {

  //Если перемещение слайдов прямое
  if (directionIndex == 1) {
    //Увеличиваем индекс показываемого элемента
  slideIndex = slideIndex + 1;
  //Если нет
  } else {
    //Уменьшаем индекс показываемого элемента
    slideIndex = slideIndex - 1
  }
  //Если элемент последний
  if (slideIndex >= slideCount-1) {
    //То меняем направление движения на обратное
    directionIndex = 0;
  }
  //Если элемент первый
  if (slideIndex <= 0) {
    //То меняем направление движения на прямое
    directionIndex = 1;
  }

  dotIndex = slideIndex;
  //Перезапускаем функцию slide для сдвига флекса массива изображений
  slide();
  //Перезапускаем функцию thisSlide с текущим индексом псевдомассива для смены активной точки индикатора
  thisSlide(dotIndex);
}

//Колбэк функция переключения слайдера на выбранную позицию в индикаторе
//Для каждого элемента массивоподобной коллекции точек индикатора
dots.forEach((slider__dot, index) => {
  //При клике на любую точку индикатора получаем индекс кликнутой точки
  slider__dot.addEventListener('click', () => {
    //Присваеваем индексу слайда индекс кликнутой точки
    slideIndex = index;
    dotIndex = slideIndex;
    //Перезапускаем функцию slide для сдвига флекса массива изображений
    slide();
    //Перезапускаем функцию thisSlide с текущим индексом псевдомассива для смены активной точки индикатора
    thisSlide(dotIndex);
  })
})

//Функция смены активной точки индикатора
const thisSlide = (index) => {
  //Для каждого класса slider__dot в псевдомассиве dots
  for (let slider__dot of dots) {
    //Удаляем класс активной точки индикатора
    slider__dot.classList.remove('slider__dot--active')
  }
  //Добавляем класс активной точки индикатора классу с заданным индексом в псевдомассиве
  dots[index].classList.add('slider__dot--active')
}

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

//Функция автоматического перелистывания слайдов
setInterval(() => {nextSlide()}, interval)
