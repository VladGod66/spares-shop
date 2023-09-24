//Скрипт смены активной группы товаров

//Находим список групп товаров в навигации
const popularList = document.querySelector('.popular__list');
//Создаём массивоподобную коллекцию классов групп товаров
const populars = popularList.querySelectorAll('.popular__link');

//Функция смены активного элемента меню
const changeActivGroup = (index) => {
  //Для всех ссылок на группы товаров
  for (let popular__link of populars) {
    //Удаляем класс активной группы
    popular__link.classList.remove('popular__link--current')
  }
  //Добавляем класс активной группы для кликнутой группы
  populars[index].classList.add('popular__link--current')
}

//Колбэк функция переключения активной группы товаров на кликнутую группу
//Для каждого элемента массивоподобной коллекции групп товаров
populars.forEach((popular__link, index) => {
  //При клике на любой пункт меню товаров получаем индекс кликнутого пункта меню
  popular__link.addEventListener('click', () => {
  //Запускаем функцию смены активной группы
  changeActivGroup(index);
  })
})
