//Скрипт смены активной группы товаров

//Находим список групп товаров в навигации
const navGoods = document.querySelector('.list-goods');
//Создаём массивоподобную коллекцию классов групп товаров
const goods = navGoods.querySelectorAll('.goods__link');

//Функция смены активного элемента меню
const changeActivElement = (index) => {
  //Для всех ссылок на группы товаров
  for (let goods__link of goods) {
    //Удаляем класс активной группы
    goods__link.classList.remove('goods__link--current')
  }
  //Добавляем класс активной группы для кликнутой группы
  goods[index].classList.add('goods__link--current')
}

//Колбэк функция переключения активной группы товаров на кликнутую группу
//Для каждого элемента массивоподобной коллекции групп товаров
goods.forEach((goods__link, index) => {
  //При клике на любой пункт меню товаров получаем индекс кликнутого пункта меню
  goods__link.addEventListener('click', () => {
  //Запускаем функцию смены активной группы
  changeActivElement(index);
  })
})
