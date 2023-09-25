//Скрипт смены активной группы товаров

//Находим список групп товаров в навигации
const withList = document.querySelector('.with__list');
//Создаём массивоподобную коллекцию классов групп товаров
const withes = withList.querySelectorAll('.with__link');

//Функция смены активного элемента меню
const changeActivElenment = (index) => {
  //Для всех ссылок на группы товаров
  for (let with__link of withes) {
    //Удаляем класс активной группы
    with__link.classList.remove('with__link--current')
  }
  //Добавляем класс активной группы для кликнутой группы
  withes[index].classList.add('with__link--current')
}

//Колбэк функция переключения активной группы товаров на кликнутую группу
//Для каждого элемента массивоподобной коллекции групп товаров
withes.forEach((with__link, index) => {
  //При клике на любой пункт меню товаров получаем индекс кликнутого пункта меню
  with__link.addEventListener('click', () => {
  //Запускаем функцию смены активной группы
  changeActivElenment(index);
  })
})
