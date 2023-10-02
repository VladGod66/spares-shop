//Скрипт клика на иконку добавить в избранное

//Находим контейнер с элементами иконки
const popularsGoods = document.querySelector('.popular__list2');
//Создаём коллекцию найденных элементов иконок
const likes = popularsGoods.querySelectorAll('.card__buttonlikes');
//Определяем размер коллекции иконок
const likesCount = likes.length;
//Создаём массив из нулей путём вызова функции для расчёта каждого элемента массива
const likesOn = Array.from({length:likesCount}, (_, index) => index * 0);

//Для каждого элемента массивоподобной коллекции иконок
likes.forEach((card__buttonlikes, index) => {
  //При клике на любую иконку получаем индекс кликнутой иконки
  card__buttonlikes.addEventListener('click', () => {
    //Если лайка нет
    if (likesOn[index] == 0) {
      //Меняем сердечко иконки лайка на окрашенную
      likes[index].style.backgroundImage = 'url("../../img/icons/like-on.svg")';
      //Присваеваем этой  иконке статус: лайк есть
      likesOn[index] = 1;
    //Если лайк есть
  } else {
    //Меняем сердечко иконки лайка на неокрашенную
    likes[index].style.backgroundImage = 'url("../../img/icons/like-off.svg")';
    //Присваеваем этой  иконке статус: лайка нет
    likesOn[index] = 0;
  }
  })
});

