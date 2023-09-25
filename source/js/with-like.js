//Скрипт клика на иконку добавить в избранное

//Находим контейнер с элементами иконки
const withGoods = document.querySelector('.with__list2');
//Создаём коллекцию найденных элементов иконок
const withLikes = withGoods.querySelectorAll('.with__card__buttonlikes');
//Определяем размер коллекции иконок
const withLikesCount = withLikes.length;
//Создаём массив из нулей путём вызова функции для расчёта каждого элемента массива
const withLikesOn = Array.from({length:withLikesCount}, (_, index) => index * 0);

//Для каждого элемента массивоподобной коллекции иконок
withLikes.forEach((with__card__buttonlikes, index) => {
  //При клике на любую иконку получаем индекс кликнутой иконки
  with__card__buttonlikes.addEventListener('click', () => {
    //Если лайка нет
    if (withLikesOn[index] == 0) {
      //Меняем сердечко иконки лайка на окрашенную
      withLikes[index].style.backgroundImage = 'url("../../img/like-on.svg")';
      //Присваеваем этой  иконке статус: лайк есть
      withLikesOn[index] = 1;
    //Если лайк есть
  } else {
    //Меняем сердечко иконки лайка на неокрашенную
    withLikes[index].style.backgroundImage = 'url("../../img/like-off.svg")';
    //Присваеваем этой  иконке статус: лайка нет
    withLikesOn[index] = 0;
  }
  })
});
